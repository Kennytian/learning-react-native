## React Native 源码学习

### react-native
./node_modules/react-native/ 目录下有很多源代码，该目录结构如下，下面我们来分析一下：
```
├── LICENSE
├── Libraries
├── PATENTS
├── React
├── React.podspec
├── ReactAndroid
├── ReactCommon
├── android
├── cli.js
├── flow
├── jest
├── jest-preset.json
├── lib
├── local-cli
├── node_modules
├── package.json
├── react.gradle
├── scripts
├── setupBabel.js
├── third-party
└── third-party-podspecs
```
### 1. cli.js
`module.exports = require('./local-cli/cli.js');`
从文件名可以看出，这是一个「命令行界面」的文件。
* `require('./local-cli/cli.js')` 返回一个 function
* `module.exports` 是将 cli.js 里的方法暴露出来，供其它文件调用。


### 2. setupBabel.js
```js
...
function setupBabel() {
  babelRegisterOnly(getOnlyList());
}

setupBabel.buildRegExps = buildRegExps;
setupBabel.getOnlyList = getOnlyList;
module.exports = setupBabel;
```
从文件名可以看出，这是一个「安装、注册 babel」的文件。Babel是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。

集中注册 `packager/src` 和 `local-cli` 目录下所有需要用 Babel 转换的 JS 文件，同时将 `buildRegExps` 和 `getOnlyList` 两个属性暴露出来。

* `buildRegExps(basePath, dirPaths)`
  * 用正则将文件路径字符中的\\转换为/

* `getOnlyList()`
  * 获取转换后的路径列表

### 3. local-cli/cli.js
```js
require('graceful-fs').gracefulify(require('fs'));
require('./server/checkNodeVersion')();
require('../setupBabel')();

var cliEntry = require('./cliEntry');
if (require.main === module) {
  cliEntry.run();
}

module.exports = cliEntry;
```
* `graceful-fs` fs 文件操作增强包，gracefulify 意为替换 fs 包成为全局模块
