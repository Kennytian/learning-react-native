# React Native 跨端实战

## React（Native） 是什么？

### React 是什么？

* React 起源于 Facebook 的内部项目，用来架构 Instrgram 的网站（一款图片分享的社交软件），并与 2013 年 5 月份开源，距今已经有 5 年历史。
* React 是一个用于构建用户界面的 JavaScript 库。主要用于构建 UI，很多人认为 Reatc 是 MVC 中的 V（视图）。
* React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。

### React Native 是什么？
* React Native 是基于 React 衍生出来一项技术，用我们熟悉的 React 来开发 Mobile App

### 两者的区别
#### 相同点
* 都使用 React Virtual Dom 做为 DSL(领域专用语言)
* 都用 JSX 语法

#### 不同点
* React 以浏览器 DOM 作为载体显示
* React Native 以 Native 控件作为载体显示
* React 用 Webpack 之类的打包工具
* React Native 使用自带的打包工具 `react packager` (现在改名叫 [metro](https://facebook.github.io/metro/))，最终生成的离线的 jsbundle 文件以 assets(资源) 的形式打包到 Android 的 apk 或 iOS 的 ipa 里
* React 可以使用 `Plain CSS`， `LESS`， `SASS` 和 [`styled-components`](https://www.styled-components.com/) 等
* React Native 只能用 `CSS in JavaScript`

## React Native 与 HTML、Native 相比有哪些优势？

### HTML 特点

* 学习成本低
* 更新快、及时发布
* 三端 UI 复用性高
* 性能较低
* 开发与维护成本低

### Native 特点

* 学习成本较高
* 更新跟随发版
* 性能好
* 三端 UI 分别开发

### React Native 特点

* 学习成本较低
* 更新快、及时发布（热更新）
* APP 端 UI 复用性高

### 三者对比

此处应有一个表格

## React Native 原理是什么？

### Client Bridge

> 简单来说

* JavaScript -> JavaScript Bridge -> Native Bridge -> Native
* Native -> Native Bridge -> JavaScript Bridge -> Native

> iOS 端通讯（Android 端同理）机制
> ![](https://pic2.zhimg.com/80/v2-62ee0b22a5dcc4e68ae4dd5a07f9614a_hd.jpg)
> _上图来自于知乎，侵删_

### Components Mapping

* React Native 控件中的 Text 对应着 iOS 的 UILable
* React Native 控件 Text 对应着 Android 的 TextView

## 如何开发第一个 React Native 项目？

### React Native 环境

* Node （含 NPM）环境
  - NodeJS 使用 5.0+, NPM 使用 3.0+
  - 推荐为 NPM 配置国内镜像，如：淘宝源
* Git
* Xcode 8.0+（需使用 iPhone 模拟器）
* Android Studio 选装

### 创建一个 React Native 应用
1. npm install -g react-native
2. react-native init `projectName`

## React Native 常见的坑有哪些？

### 开发环境

* 下载 third-party 文件

  > 第一次编译 iOS 端应用时，需要手动配置 https://reactnative.cn/post/4301

* iOS 不能访问网络
  > 苹果要求 iOS9 以后 App 内访问的网络必须使用 HTTPS 协议。 如果你的 API 不支持 HTTPS，需要手动配置 https://segmentfault.com/a/1190000002933776

### 代码兼容性

* CSS in JavaScript
  > React Native 中使用 JS 来编写样式，没有完整实现 Web 中的 CSS。因为全部实现了，等价于实现了浏览器内核。React Native 的卖点就是性能，即比 WebView 快，几乎跟原生一样快。
* Babel
  > 默认使用 ES6 方式编写代码，需要 Babel 来编译。

### 设备兼容性

* 过度「优化」的国产 Android 手机
  * 小米 4C
  * 魅族
* 新流海的 iPhone X

### 更多历史坑

* [React Native 坑大发](./environment/react-native-pit.md)

## React Native 与 Weex 有什么不同？

### 最佳实践技术栈

* React Native
  * react
  * redux
  * reselect
  * immutable
  * code push
  * react navigation
  * babel
  * eslint
  * jest
* Weex
  * Vue

### 生态

* [React Native 官网](http://facebook.github.io/react-native/)
* [React Native 中文网](https://reactnative.cn/)
* [stackoverflow](https://stackoverflow.com/questions/tagged/react-native)
* [awesome-react-native](https://github.com/jondot/awesome-react-native)
* [react-native-community](https://github.com/ericvicenti/react-native-community)

## React Native 对前端技术未来的影响有什么？

* 前端同学能写出高性能的功能（需求），PM 再也不拿卡说事（原生 APP 里集成 React Native 页面）
* 前端同学能独立做一个「简单」的两端 APP（小公司非常适合，私单也是可以的^\_^）
* 前端同学的价值更高了，地位提升，再也不是一个切图仔
* React Native 可以编译成：Android, Android TV，iPhone, iPad, Apple TV 等 APP，因为它是响应式。
* 可以用 React Native 代替 HTML5 页面

## 实例介绍

* 国际
  * Facebook
  * Instagram
  * Airbnb
  * Walmart
  * Skype
  * 更多 https://facebook.github.io/react-native/showcase.html
* 国内
  * QQ（Android）、QQ 空间、QQ 音乐、QQ 课堂
  * 手机百度
  * 京东
  * 58 同城
  * 更多 https://reactnative.cn/cases.html

## Q&A

### References

* https://baike.baidu.com/item/react/18077599#viewPageContent
* https://blog.csdn.net/howgod/article/details/78408506
* https://zhuanlan.zhihu.com/p/21337982
