### React Native ESLint & Airbnb 配置

```diff
- 欢迎您帮忙纠错, 一起帮助更多的人。 一起来学习交流React, QQ群：413381701
```

差不多搞了半天才配置完毕，现记录下来，供以后参考。

#### 遇坑环境
```js
{ npm: '2.15.9',
  ares: '1.10.1-DEV',
  http_parser: '2.7.0',
  icu: '56.1',
  modules: '46',
  node: '4.6.0',
  openssl: '1.0.2j',
  uv: '1.9.1',
  v8: '4.5.103.37',
  zlib: '1.2.8' }
```
按着网上的教程，一步一步来。

补充两句：
1. -d 是 detail 的意思，可以看安装的细节。
2. npm install 都是在 react native 项目根目录下操作。

**Step 1** `npm install -g -d eslint`

**Step 2** `npm install --save-dev -d eslint-plugin-react`

**Step 3** `npm install --save-dev -d eslint-plugin-react-native`

**Step 4** `npm install --save-dev -d eslint-config-airbnb`

错误来了，airbnb 死活安装不上，报如下错误

![airbnb can not install](http://ww4.sinaimg.cn/mw690/77c29b23jw1f94nlzi8dtj20i90attbn.jpg)

满世界找资料，https://www.google.com/search?q=The+package+eslint-plugin-import%402.0.1+does+not+satisfy+its+siblings%27+peerDependencies+requirements!&oq=The+package+eslint-plugin-import%402.0.1+does+not+satisfy+its+siblings%27+peerDependencies+requirements!&aqs=chrome..69i57.1296j0j7&sourceid=chrome&ie=UTF-8

唯一一个看起来比较靠谱的，https://github.com/airbnb/javascript/issues/956#issuecomment-233696181

`npm install --save-dev -d eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint`

最后结论：网上的解决方案没有一个是可用的（_后来才发现其实是我的姿势不对，请接着看_）。

后来问群里好友，告诉我用 cnpm 试试，结果神奇的一幕出现了。

**Step 5** `cnpm install --save-dev -d eslint-config-airbnb`

![airbnb installed successful with cnpm](http://ww4.sinaimg.cn/mw1024/77c29b23jw1f94o1ri873j20i805ndhp.jpg)

**Step 6** 执行 eslint --init

![airbnb installed successful with cnpm](http://ww4.sinaimg.cn/mw1024/77c29b23jw1f94pawx733j20d505rgmq.jpg)

_提示：这里为了演示，所以执行了两次 eslint --init，选项是可以用光标上下选择。_

**Step 7** 
执行完成后，会在项目根目录生成一个名为`.eslintrc`的配置文件，后面慢慢配置该文件。

在 React Native 项目中，找到 package.json，添加下面这行：
```diff
"scripts": {
  "start": "node node_modules/react-native/local-cli/cli.js start",
+  "lint":"eslint --ext .js ./src"
}
```

**Step 8** 项目目录下执行，`npm run lint` 

**Step 9** 如果项目大的话，会有上千条 errors，慢慢改代码吧！ ：D  也可以选择修改`.eslintrc`的配置文件，改到自己满意为止，233。

#### 正确姿势
**Step 1**  `npm` 版本太低，大神建议我升级到 `3.x`，说 `npm 2.x` 的依赖处理很糟糕，安装或更新 npm，执行： `npm install -g -d npm@latest`

**Step 2**  `npm install -g -d eslint`

**Step 3** 全部粘贴至命令行执行
```
(
export PKG=eslint-config-airbnb;
npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev -d "$PKG"
)
```

**Step 4** `npm install --save-dev -d babel-eslint`，用于转换 ES6 的 eslint 的插件包

**Step 5** `eslint --init`, 初始化选popular style、Airbnb

接上面的 **Step 7**

Enjoy your code!


