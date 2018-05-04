# React Native 跨端实战

## React（Native） 是什么？
### React 是什么？
- React是一个用于构建用户界面的 JavaScript库。主要用于构建UI，很多人认为Reatc是MVC中的V（视图）。
- React起源于Facebook的内部项目，用来架构Instrgram的网站（一款图片分享的社交软件），并与2013年5月份开源，距今已经有5年历史。
- React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。

React 目前（2018-05-03）在 Github 上拥有 9.4 万+ stars，地址： https://github.com/facebook/react

#### 特点
- 声明式编码
- 高度抽象
- 单向数据流

### React Native 是什么？
React Native 是基于 React 衍生出来一项技术，用我们熟悉的 JavaScript 来开发 App

## React Native 与 HTML、Native 相比有哪些优势？
### HTML 特点
- 学习成本低
- 更新快、及时发布
- 三端UI复用性高
- 性能较低
- 开发与维护成本低

### Native 特点
- 学习成本较高
- 更新跟随发版
- 性能好
- 三端UI分别开发

### React Native 特点
- 学习成本较低
- 更新快、及时发布（热更新）
- APP端UI复用性高

### 三者对比
此处应有一个表格

## React Native 原理是什么？
### Client Bridge
> 简单来说
- JavaScript -> JavaScript Bridge -> Native Bridge -> Native
- Native -> Native Bridge -> JavaScript Bridge -> Native

> iOS 端通讯（Android 端同理）机制
![](https://pic2.zhimg.com/80/v2-62ee0b22a5dcc4e68ae4dd5a07f9614a_hd.jpg)
_上图来自于知乎，侵删_

### Components Mapping
- React Native 控件中的 Text 对应着 iOS 的 UILable
- React Native 控件 Text 对应着 Android 的 TextView

## 如何开发第一个 React Native 项目？ 
### React Native 环境
- Node （含NPM）环境
> NPM 最低使用 3.0 以上
- Git
- Xcode
- Android Studio 选装

### 创建一个 React Native 应用
- react-native init
- create-react-native-app

## React Native 常见的坑有哪些？
### 开发环境
- 下载 third-party 文件
> 第一次编译 iOS 端应用时，需要手动配置 https://reactnative.cn/post/4301

- iOS 不能访问网络
> 苹果要求 iOS9 以后App内访问的网络必须使用 HTTPS 协议。 如果你的 API 不支持 HTTPS，需要手动配置 https://segmentfault.com/a/1190000002933776

### 代码兼容性
- CSS in JavaScript
> React Native 中使用 JS 来编写样式，没有完整实现 Web 中的 CSS。因为全部实现了，等价于实现了浏览器内核。React Native 的卖点就是性能，即比 WebView快，几乎跟原生一样快。
- Babel
> 默认使用 ES6 方式编写代码，需要 Babel 来编译。

### 设备兼容性
- 过度「优化」的国产 Android 手机
  - 小米 4C
  - 魅族
- 新流海的 iPhone X 

## React Native 与 Weex 有什么不同？
### 技术栈
- React Native
  - React
  - Redux
  - 等
- Weex
  - Vue
 
### 生态
- [React Native 官网](http://facebook.github.io/react-native/)
- [React Native 中文网](https://reactnative.cn/)
- [stackoverflow](https://stackoverflow.com/questions/tagged/react-native)
- [awesome-react-native](https://github.com/jondot/awesome-react-native)
- [react-native-community](https://github.com/ericvicenti/react-native-community)

## React Native 对前端技术未来的影响有什么？
- 前端同学能写出高性能的功能（需求），PM 再也不拿卡说事（原生 APP 里集成 React Native 页面）
- 前端同学能独立做一个「简单」的两端 APP（小公司非常适合，私单也是可以的^_^）
- 前端同学的价值更高了，地位提升，再也不是一个切图仔
- React Native 可以编译成：Android, Android TV，iPhone, iPad, Apple TV 等 APP，因为它是响应式。
- 可以用 React Native 代替 HTML5 页面

## 实例介绍
- 国际
  - Facebook
  - Instagram
  - Airbnb
  - Walmart
  - Skype
  - 更多 https://facebook.github.io/react-native/showcase.html
- 国内
  - QQ（Android）、QQ 空间、QQ 音乐、QQ 课堂
  - 手机百度
  - 京东
  - 58同城
  - 更多 https://reactnative.cn/cases.html

## Q&A

### References
 - https://baike.baidu.com/item/react/18077599#viewPageContent
 - https://blog.csdn.net/howgod/article/details/78408506
 - https://zhuanlan.zhihu.com/p/21337982
