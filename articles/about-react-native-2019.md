# React Native 相关问题

## 前端同学

#### 1. React 怎么去划分基础组件，开发高阶组件，抽象出业务的功能组件？

> 基础组件

* 基础组件在社区人气最高的要数 ant-design 、element-ui 等，他们相对比较成熟、组件也非常丰富，但我经历的项目中大多数只能用到其它中 3、5 个，所以引用一个这么大的库有点浪费，所以一般都是团队内部自己实现。
* 基础组件一般就是按钮、输入框、表单、提示，最好做到`与业务无关`

> 高阶组件

* 高阶组件一般高度抽象出来的业务（鉴权）或工具组件，一般可以用于整个项目中，`公司不同项目间都可复用`
* 比如为某个页面添加属性、删除属性，生命周期劫持，处理页面级异常（componentDidCatch）、打印日志（埋点）或页面渲染时间

> 业务功能组件

* 紧密围绕的业务来开发，能兼顾后期的 UI 变化更好，但不要过度设计

#### 2. React 使用中遇到的一些问题？有过做兼容的处理吗?

* React 目前在使用过程中遇到的问题，都能在网上找解决方案。
* 兼容处理就是使用 polyfill 或 shim，或者京东的 [nerv](https://github.com/NervJS/nerv) 方案（兼容 IE8 和 React 16）

#### 3. React 做过多页面的项目吗？如果有，是怎么的方式做这块，公用组件的设计，在开发中开发人员怎么配合？

> 公用组件的设计

* 一般 UI 设计评审后，前端同学分工的时候，看到相同 UI 的部分，就可以商量由谁来开发。

> 怎么配合

* 不推荐某一个同学单独来开发所有公共组件，容易凭空想象或过度设计，让每个同学都有设计公用组件的机会。

#### 4. React 和 React Native 在开发中有什么需要注意的点，他们之间最大的区分点，和开发的难点是哪个？

> 注意的点

* 前端运行在浏览器上，后端运行手机原生系统上，所以很多自己熟悉的经验可能用不上

> 最大的区分点

* React Native 里的 CSS 只是 Web 里 CSS 子集，比如没有渐变，但可以用原生库来支持。
* React Native 没有 JS 兼容问题，起步就是 ES6
* 其它

> 开发难点（痛点）

* 如果第一次开发，可能遇到原生两端的环境配置问题（JDK，Android SDK，Gradle，CocoaPods）和加速镜像
* 调试不及 Web 开发那么爽，虽然也有 Elements 和 Network 可以查看，但没有 Web 那么方便

#### 5. React Native 有成型的项目吗？性能如何?开发中遇到过哪些问题

* 性能越来越好了
* 当页面数超过 50 个，APP 首次加载就有点慢（需使用 JS Bundle 折包方案）

#### 6. React Native 和 Native 混合开发怎么实现，流程是哪些？在开发和实施过程遇到的难点是哪些？

> 混合开发实现，流程

* 2019 年 03 月 06 日 22:35:05 - [最新的在原生 Android 应用中集成 ReactNative](https://blog.csdn.net/SilenceOO/article/details/88261077)
* May 21, 2018 - [React Native 组件集成到 Android 原生项目](https://github.com/lin-xin/blog/issues/26)
* 2018 年 10 月 16 日 11:17:26 - [iOS 原生项目(Objective-C)集成 React Native(0.57.3 版本)图文教程--(1)基本环境](https://blog.csdn.net/kuangdacaikuang/article/details/83070150)
* 2018 年 10 月 16 日 12:34:06 - [iOS 原生项目(Objective-C)集成 React Native(0.57.3 版本)图文教程--(2)集成过程](https://blog.csdn.net/kuangdacaikuang/article/details/83077385)

> React Native 和原生端通信

* [和原生端通信](https://reactnative.cn/docs/communication-ios/)
* [Communication between iOS native and React Native](https://facebook.github.io/react-native/docs/communication-ios)
* [Communication between Android native and React Native](https://facebook.github.io/react-native/docs/communication-android)

> 在开发和实施过程遇到的难点是哪些？

* 这方面的经验比较少，之前的原生的同事已经都完善了，很遗憾没有学到一些经验

### 移动端同学

#### 1. React Native 和原生之间有一些什么方案实现状态共享？比较推荐的方案是什么？

* 使用 NativeModules 传值
* React Native 用 AsyncStorage 来持久化数据，在 Android 端内部实现是用 SQLite，在 iOS 端内部实现序列化字典、当数据量大了，就转存为本地文件
* Realm、SQLite 等数据库
* 如果数据大就需要通过后端接口来同步、共享

#### 2. 有一种观点是 React Native 与原生的交互越多，遇到的困难就越多，解决这些困难带来的代价甚至可能抵消掉跨平台逻辑复用带来的效率提升，您对此的看法是怎么样的？

* 早期确实有这个问题，加上 React Native 自身一些 bug。如果 Java -> Bridge -> JS 交互多了，交互的数据量大、RN -> Native -> RN -> Native 之类组合多次混合跳转，当没有管理好页面控件的加载和销毁，可能会造成内存泄露。

2018 年 6 月起，Facebook 宣布重构底层，使用 JSI 和 TurboModule 架构来解决上述问题，详情见：[庖丁解牛！深入剖析 React Native 下一代架构重构](https://www.infoq.cn/article/EJYNuQ2s1XZ88lLa*2XT)

#### 3. 您对 Flutter 有了解吗？如果想在 React Native 和 Flutter 之间做选择，您的观点是怎么样的？

* 对 Flutter 只有少量了解，详细介绍见 [2019 年 06 月 20 日 - 全网最全 Flutter 与 React Native 深入对比分析](https://juejin.im/post/5d0bac156fb9a07ec56e7f15)

#### 4. 您在使用 React Native 过程中有没有遇到什么非常困难，甚至无法解决的问题？

* 因为使用场景并不复杂，所以目前没有遇到非常困难的问题。
* 小问题遇到过一些，但都能通过 google 找到答案。

#### 5. 如果采用原生 + React Native 的方式进行开发，那是建议原生开发人员去学习 React，还是由前端同学来编写共用逻辑？

* 首先建议前端的同学来写共同逻辑，只要与原生同学定义好通讯接口的参数类型，就可以开发了，写的代码还是熟悉 React 内容
* 其次提议原生同学学习一下 JavaScript，这真是一门超级容易入门的语言
* 最后要求公司里的全栈工程师必须掌握 OC 和 Android 中的一端开发技巧和 JavaScript 语言，带着大家一起致富

> 全文完！
