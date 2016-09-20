## 项目上线总结

### 1.控件选择

 * 1.1 **immutable**
    - 不用多说, 在 facebook 开源项目中名气于仅次于 react native, 近1.5 万 stars

 * 1.2 **redux***
    - _react-redux、redux、redux-immutable、redux-logger、redux-thunk_ 大中型项目都会用上。


 * 1.3 **reselect**
   - 强烈推荐使用, 对 store 返回的数据进行二次加工, 非常好用, 详情见官方文档。


 * 1.4 **异常收集分析**
   - **react-native-fabric** 能收集 JavaScript 造成的 crash 异常, 非常强大。

 * 1.5 **页面路由**
   - **react-native-router-flux** 项目前三个Tab页面都是列表, tab间切换非常慢, 误以为是这个控件性能很差, 换成下面这个（事实证明我们是错的）, 后来找到真实的原因了(后面细说), 又换回这个控件。结论:当一个项目的 stars 数上千了, 好一定是非常多开发者使用过,是充分经过检验, 放心用吧!
   - **react-native-navigation** 选这个控件的原因是作者介意使用了 Native 线程来处理页面路由, **性能非常好**。缺点也有不少:
     - 修改了 Android 的启动页面, 会引起 code push 更新完跳转失败, 又加上当时在0.29 这个分水岭的版本, 风险不可控。
     - 我们当前用的版本非常不稳定, 作者随时有可能会有 breaking changes, 风险不可控。

  * 1.6 **相机扫二维码**
    - **react-native-camera** 我们想要的某些功能对 iOS 支持非常好, 但在 Android 端好像差点意思。顺便提一句: 该项目名被另外一个作者在 npm 网站先注册了, 所以要引用该包, 要用 `npm install react-native-camera@https://github.com/lwansbrough/react-native-camera.git --save`
    - **react-native-barcodescanner** 正好这个控件在 Android 端表现良好, 没办法只能用 Platform.OS 来处理不同平台使用不同的控件。

  * 1.7 导航菜单
    - **react-native-router-flux** 也带导航菜单, 使用直接比较统一, 但学习曲线较大。
    - **react-native-nav** 简单页面还是不错的选择, 如果遇到‘返回’、‘页面标题’、‘右边多个按钮’, 它就有点难于处理了。
    - 还是自己写个比较灵活, 嘿嘿!


 * 1.8 调试日志
    - redux-logger 是一个直观的查看 redux 请求、响应、更新的日志控件。
    - 这是要特别聊一下, 由于我们最初使用不当, 打出来的 Release 包也非常卡顿, 还以是 `react-native-router-flux` 锅, 换成 `react-native-navigation` 有一点改善（因为是 native 导航）, 但使用一会儿APP, 还是慢慢变卡。 过了半个多月, 突然发现这货一直不停在向外 output log, orz...... 加上如下判断, 性能大幅度提升:
        ```
        if (__DEV__) {
          enhancer = compose(applyMiddleware(thunkMiddleware, reduxLogger))
        } else {
          enhancer = compose(applyMiddleware(thunkMiddleware))
        }
        ```
### 2. 项目结构
* TODO 介绍如何搭建项目结构, 项目文件如何分类和放置。

### 3.开发与调试
* TODO 介绍一下开发与调试期间的技巧

### 4.提交审核
* TODO 介绍一下 checklist、 被拒原因










