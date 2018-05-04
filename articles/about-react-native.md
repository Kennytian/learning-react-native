# React Native 跨端实战

## React（Native） 是什么？

### React 是什么？

* React 起源于 Facebook 的内部项目，用来架构 Instrgram 的网站（一款图片分享的社交软件），并与 2013 年 5 月份开源，距今已经有 5 年历史。
* React 是一个用于构建用户界面的 JavaScript 库。主要用于构建 UI，很多人认为 React 是 MVC 中的 V（视图）。
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

## React Native 与 HTML5、Native 相比有哪些优势？

| 对比     | HTML5                    | Native                                      | React Native                           |
| -------- | ------------------------ | ------------------------------------------- | -------------------------------------- |
| 人才成本 | 低，一个人当三个人用     | 高，iOS 和 Android 两个团队                 | 低，一个人当三个人用                   |
| 更新能力 | 低，修改完直接部署       | 高，需要提交审核                            | 中，修改完直接部署（使用热更新）       |
| 学习成本 | 设备要求低，学习入门快   | 需买设备与证书，学习入门慢                  | 需买设备，学习入门快                   |
| 版本控制 | 及时，用户每次看到即最新 | 不及时，需等用户升级                        | 及时，用户每次看到即最新（使用热更新） |
| 跨端复用 | 高，全部复用             | 低，三端各自写自己那部分                    | 中，Android 和 iOS 可以复用            |
| 性能     | 低，大概 70 分           | 高，大概 95 分                              | 中高，大概 85 ~ 90 分                  |
| 维护成本 | 低，一个人当三个人用     | 高，Android 和 iOS 团队各自写自己团队的代码 | 中低，一个维护 Android 和 iOS 两端代码 |

## React Native 原理是什么？

### Client Bridge

> 简单来说

* JavaScript -> JavaScript Bridge -> Native Bridge -> Native
* Native -> Native Bridge -> JavaScript Bridge -> Native

说人话就是：在 React Native 的应用中，存在着两个不同的技术王国：JS 王国和 Native 王国。应用在启动时会先进行双向注册，搭好桥，让两个王国知道彼此的存在，以及定义好彼此合作的方式：

![](http://insights.thoughtworkers.org/wp-content/uploads/2017/04/3-bridge.png)

**更详情的解释**

* iOS 与 JavaScript 通讯（图片来自于知乎，侵删）

![](https://pic2.zhimg.com/80/v2-62ee0b22a5dcc4e68ae4dd5a07f9614a_hd.jpg) > 
  

* JavaScript 与 iOS 通讯（图片来自于伯乐在线，侵删）

![](http://insights.thoughtworkers.org/wp-content/uploads/2017/04/2-process-1024x737.png)

### Components Mapping

React Native 最终还是以 Native 的形式显示在两端的设备上，所以每个 React Native 控件都映射着一个 Native 控件，例如：

* React Native 控件中的 Text 对应着
  * iOS 的 UILable
  * Android 的 TextView

## 如何开发第一个 React Native 项目？

### React Native 环境

* Node （含 NPM）环境
  * NodeJS 使用 5.0+, NPM 使用 3.0+
  * 推荐为 NPM 配置国内镜像，如：淘宝源
* Git
* Xcode 8.0+（需使用 iPhone 模拟器）
* Android Studio 选装

### 创建一个 React Native 应用

1.  npm install -g react-native
2.  react-native init `projectName`

## React Native 常见的坑有哪些？

### 开发环境

* 下载 third-party 文件

  > 第一次编译 iOS 端应用时，需要手动配置 https://reactnative.cn/post/4301 。

* iOS 不能访问网络
  > 苹果要求 iOS9 以后 App 内访问的网络必须使用 HTTPS 协议。 如果你的 API 不支持 HTTPS，需要手动配置 https://segmentfault.com/a/1190000002933776 。

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

* [React Native 坑大发](../environment/react-native-pit.md)

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
* [StackOverflow](https://stackoverflow.com/questions/tagged/react-native)
* [awesome-react-native](https://github.com/jondot/awesome-react-native)
* [react-native-community](https://github.com/ericvicenti/react-native-community)

## React Native 对前端技术未来的影响有什么？

* 前端同学能写出高性能的功能（需求），PM 再也不拿卡说事（原生 APP 里集成 React Native 页面）。
* 前端同学能独立做一个「简单」的两端 APP（小公司非常适合，私单也是可以的^\_^）。
* 前端同学的价值更高了，地位提升，再也不是一个切图仔。
* React Native APP 可以编译成：Android, Android TV，iPhone, iPad, Apple TV 等 APP。因为底层 Facebook 帮我搞定了，页面上天生支持响应式，也没问题。
* 可以用 React Native 来代替 APP 里的 HTML5 页面。

## 实例介绍

* 国外
  * Facebook
  * Instagram
  * Airbnb
  * Walmart
  * Skype
  * 更多 https://facebook.github.io/react-native/showcase.html
* 国内
  * QQ（Android）、QQ 空间、QQ 音乐、QQ 课堂
  * 手机百度
  * 京东、京东金融
  * 58 同城
  * 更多 https://reactnative.cn/cases.html

## Q&A

### References

* https://baike.baidu.com/item/react/18077599#viewPageContent
* https://blog.csdn.net/howgod/article/details/78408506
* https://zhuanlan.zhihu.com/p/21337982
* http://web.jobbole.com/89572/
