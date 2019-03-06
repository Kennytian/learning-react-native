## package.json 的 dependencies 里有趣现象

### 来段相声

什么刀枪剑戟、斧钺钩叉、鞭锏锤抓，镋棍槊棒、拐子流星、带钩儿的、带尖儿的、带刃儿的、带刺儿的、带峨眉针儿的，带锁链儿的，十八般兵刃我是样样精通。

什么大红拳、小红拳、八仙拳、地躺拳、通臂拳、罗汉拳、远了长拳、近了短打、小架子猴儿拳，我是样样拿手。

`现在，我们开始正题`

### 名称的花样

###### 1.带@加前缀的

如：`"@babel/preset-env": "^7.3.4"`
这种用法主要想将多个 package 分组归类，但不能直接`xxx/yyy`，前面必须添加`@`。注意：这带前缀的包，在发布时要带 publish 参数, `npm publish --access publish`

###### 2. 普通的

如：`"eslint": "^5.14.0",`
发布时只要取一个 npm 上没有重复的名称即可。

### 版本的不同

###### 1.带^号

如：`"moment": "^2.24.0"`
就上面这个而言，`^`号表示 `>=2.24.0 < 3.0.0`

###### 2.纯版本号

如：`"react": "16.4.1"`
一般固定版本号，是担心安装了比当前版本高的版本，从而引起不兼容。不过现在都有了 yarn.lock 或 package-lock.json 来锁版本，就没这类问题了。

###### 3. 带包名的版本号

如：`"react-native-webp-support": "TGPSKI/react-native-webp-support"`
详情见：https://github.com/TGPSKI/react-native-webp-support#ios

###### 4. 直接安装代码仓库里的代码

如：`"repository1": "git+https://github.com/myusername/repository1.git"`
这种形式也还有多种玩法，比如：地址后面跟不同的 branchName、tagName、hashCode（某一次提交的代码） 等。

###### 4. 引用本地文件

如：`"react-native-video": "file:../.."`
详情见：https://github.com/react-native-community/react-native-video/blob/master/examples/basic/package.json

一般是 package 作者在写 `examples` 时，引用 package 项目根目录下的 index.js 文件。

###### 5. 安装至代码目录

如：`"react-native-device-info": "file:./src/node_modules/react-native-device-info"`
安装后，会将 `react-native-device-info` 包安装到本地目录（src 下），方便自己管理（但下次安装会覆盖，除非将修改过的文件用 git 管理起来），不推荐。

更多有趣的用法:
https://docs.npmjs.com/files/package.json#dependencies
