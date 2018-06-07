# 一句技巧

欢迎您帮忙纠错, 一起帮助更多的人。 一起来学习交流 React, QQ 群：[413381701](http://shang.qq.com/wpa/qunwpa?idkey=3b9474dacbf35e4a9659e89399758406e510e5b8a3f81109f7d07efaadc6056d)

_本篇文章记录的技巧尽量保持与平时工作的 React Native 相关, 但也有例外。_

## React Native

1.  自定义属性中,必须选其中一种 `shape: PropTypes.oneOf(['round', 'square']).isRequired`
2.  自定义属性中,要么指定具体数字,要么用 full `width: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['full'])]).isRequired`
3.  之前判断根据不同平台写 Style 时用 `height: Platform.OS === 'ios' ? 200 : 100, 今天发现还有另一种写法` ,

```
...Platform.select({
    ios: { top : 20 },
    android : { top : 10 } }
),
或
marginTop:Platform.select({android:2, ios:0})
```

4.  解决 eslint 报 switch case 缩进错误 `"indent": [2, 2, {"SwitchCase": 1}]`

5.  `componentWillReceiveProps(nextProps)` 在组件接收新的 props 时触发, 用法: `if (nextProps.project !== this.props.project) { }`
6.  避免用户调整字体(大小)影响 APP 界面布局 `Text.defaultProps.allowFontScaling=false` 在程序启动页面加入这句
7.  用命令行打包 `react-native bundle --assets-dest /Users/kenny/temp/ --bundle-output /Users/kenny/temp/main.jsbundle --dev false --entry-file index.ios.js --platform ios`， _路径地址请根据自己的环境修改_
8.  `react-native init MyProject --version 0.39.2` `React Native` 初始化时指定版本
9.  `react-native run-android --variant Huaweidebug` 运行调试程序的指定渠道包 10.`react-native run-ios --device "Kennys iPhone"` 运行调试程序到真机上（指定机器名）
10. 使用 `PureComponent` 代替 `Component` 来简单优化子组件性能
11. `setState` 使用函数式： `this.setState(prevState => ({ count: prevState.count + 1 }))`

## node 和 npm

1.  安装或更新 npm `npm install -g -d npm@latest`
2.  查看 npm 版本信息用 `npm version`，内容要比`npm -v` 全面
3.  `npm update` 命令对指定的 Package 进行升级，例如`npm update redux`
4.  `npm outdated` 查询当前安装的所有 npm 包中是否有存在新版本, Wanted 列是当前项目支持的最高版本
5.  `npm install --save redux` --save 的意思是安装的同时, 把模块和版本号添加到 dependencies 里
6.  `npm install --save-dev eslint` --save-dev，将模块和版本号添加到 devDependencies，仅供开发期间使用
7.  `npm uninstall --save redux` 删除 `node_modules` 包的同时，也从 `dependencies` 里清除模块和版本信息
8.  `npm shrinkwrap` 允许用户锁定整个依赖树，让每个包使用特定的版本
9.  `exportFun.fun2(response); exportFun['fun3'](response);` 在 Node 里支持**字符串**参数形式调用 exports 函数写法
10. yarn 与 npm 相比的优势在：1.本地缓存文件；2.并行化处理，安装更快；3.使用文件锁，保证跨终端的文件结构一致；4.安装包更安全
11. `node --inspect index.js`，使用 `Chrome` 开发者工具调试 `Node.js`
12. 在 `WebStorm + nodemon` 调试，需配置为：`/usr/local/bin/nodemon --exec /usr/local/bin/node`

## Android

####adb 常用命令：

1.  `adb reverse tcp:8081 tcp:8081` 连不上 `node sever` 了执行
2.  `adb devices` 查看已连接电脑的设备
3.  `adb shell input keyevent 82` 弹出开发调试菜单
4.  `adb install ./android/app/build/outputs/apk/app-debug-unaligned.apk` 安装 apk 包（apk 名称可能不同）
5.  `adb uninstall com.AppName` 删除 APP（package 名可能不同）
6.  `adb -s 192.168.56.101:5555 shell am start -n com.AppName/.MainActivity` 打开 APP，启动首页（IP、端口和包名可能不同）
7.  `gradlew andDep` 查看项目中哪些 lib 依赖需要解除

## iOS

1.  要添加或修改 `header` 引用, 可以打开 `pbxproj` 文件, 找到 `HEADER_SEARCH_PATHS` 节点(注意**Debug**,**Release**版), 添加或修改相应引用
2.  让你的 React Native APP 支持 iPhone 和 iPad，`General -> Deployment -> Devices， 选择 Univesral`。或者在 `firstApp/ios/firstApp.xcodeproj/project.pbxproj` 找到 `VERSIONING_SYSTEM` 附近，在 `debug` 和 `release` 两处添加

```diff
+ TARGETED_DEVICE_FAMILY = "1,2";
VERSIONING_SYSTEM = "apple-generic";
```

3.  当遇到比整数大得多、也复杂得多的数据时，就有必要用指针来传递地址。程序不一定通过拷贝来传递数据，但一定能够直接传递或通过拷贝来传递的**起始地址**
4.  在 `Objective-C` 中 `nil` 等价于 `NULL`
5.  `typedef`为某个类型声明一个新的类型，使用 `typedef` 可以为 `struct` 声明一个等价的别名

```
typedef struct {
    float height;
    int weight;
} Person
...
Person person;
person.weight= 75;
person.height = 1.73
```

6.  命令行下启动 iPhone 模拟器，`xcrun simctl list` 查出机型 ID，命令行里执行：`open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app --args -CurrentDeviceUDID EC622D4A-EB75-4305-A9F1-8B4C43E5D48E`

## Git

1.  删除**最后一次**缓存记录 `git stash drop stash@{0}`
2.  应用**指定某一次**缓存记录 `git stash apply stash@{3}`
3.  **没有 push** 要回滚 `git reset --hard HEAD`
4.  **已经 push** 要回滚 `git revert b3c20ba6fb38cc94fe5a8d`
5.  基于某次 Commit ID 打 tag `git tag -a v0.1.1 9fbc3d0`, -a 表示带注释
6.  修改某次错误 commit 注释, `git reset --soft fb38cc9(上一次 Commit ID)`, --soft 不会覆盖 stash 区和 work 区的代码
7.  配置 git 本地用户名, `git config --local user.name "Kennytian"`
8.  将本地 git 文件提交到远程`git remote add origin https://github.com/Kennytian/learning-react-native.git; git push -u origin master`
9.  撤销未提交的修改，支持通配符 `git checkout *`, `git checkout *.js`
10. 强行推送到 `master` 分支上 `git push -f origin master`
11. 删除远程分支 `git push origin :feature/uiUpgrade`
12. 删除远程 tag `git push origin :refs/tags/v0224`
13. 同步 fork 过的项目 `git remote add upstream URL; git fetch upstream; git merge upstream/master`
14. 克隆最近一次 commit `git clone --depth=1 https://github.com/Kennytian/learning-react-native.git`

## ES6

1.  用**不定参数** `function foo(a, ...z)`和**默认参数**`function bar(father="Kenny", son="Jerry")` 取代 `arguments` 参数
2.  在 JavaScript 里 null、undefined、0、-0、NaN 和 "" 都为 false
3.  使用 **对象展开语法(Object spread)** 来替换 `Object.assign` 用法, 即: `{ ...state, {name:Kenny} }` 来替换 `Object.assign({}, state, {name:Kenny})`
4.  事件 bind 放在 constructor 里更高效（bindings once, use forevermore）, 避免使用 Arrow function。如:

```
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}
handleClick() { console.log('clicked!'); }
render(){
  return(
   <Text onPress={this.handleClick}>Click Me</Text>
  )
}
```

5.  `Array.from()` 方法可以将一个类数组对象或可遍历对象转换成真正的数组
6.  `Array.of()` 方法会将它的任意类型的多个参数放在一个数组里并返回，Array.of(1, 0, 24) // [1, 0, 24]
7.  `Array.copyWithin()` 方法会浅拷贝数组的部分元素到同一数组的不同位置，且不改变数组的大小，返回该数组。[1, 2, 3, 4, 5].copyWithin(0, 3); // 4,5,3,4,5
8.  `Array.find()` 如果数组中某个元素满足测试条件，就会返回那个元素的值，[1,3,5,7].find(n => n<3) //1
9.  `Array.findIndex()` findIndex()方法用来查找数组中某指定元素的索引, 如果找不到指定的元素, 则返回 -1，[1,3,5,7].find(n => n>3) //2
10. `let {name, passport:id} = person;` 把 passport 属性赋值给变量 id

## Tools

Beyound Compare 永久试用：`rm "/Users/$(whoami)/Library/Application Support/Beyond Compare/registry.dat"`

## Linux / Mac OS X

1.  清除 DNS 缓存 `sudo killall -HUP mDNSResponder`
2.  `Command + Shift + .` 可以显示隐藏文件
3.  `defaults write com.apple.finder AppleShowAllFiles -bool true` 显示隐藏文件
4.  `defaults write com.apple.finder _FXShowPosixPathInTitle -bool TRUE;killall Finder` 显示文件夹路径
5.  `open ~/Library/LaunchAgents` Mac 电脑里的启动项，删除你不需要的。 更多参考 https://www.zhihu.com/question/28268529
