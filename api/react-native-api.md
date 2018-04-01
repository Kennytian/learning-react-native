# React Native API 学习

## 前言

新建一个 React Native 项目后，我们可以在 index.android.js(index.ios.js)里看到这么一句：`AppRegistry.registerComponent('hotelApp', ()=>HotelApp);`，“hotelApp” 是我随便取的名字。

接下来了解一下 `AppRegistry` 和 `registerComponent` 都是什么意思，各起什么作用。

## API 分析

### 1. AppRegistry

AppRegistry 是 JS 运行 React Native 程序的入口点，App 的根组件通过`AppRegistry.registerComponent`来注册，然后原生系统通过调用`AppRegistry.runApplication`才能加载 bundle，最后运行起来。

* AppRegistry 文件位置：`/node_modules/react-native/Libraries/AppRegistry/AppRegistry.js`

* AppRegistry 内部静态函数：
  _ registerConfig
  _ registerComponent
  _ registerRunnable
  _ getAppKeys
  _ runApplication
  _ unmountApplicationComponentAtRootTag

### 2. registerConfig

<pre><code>registerConfig: function(config: Array< AppConfig >) {
  for (var i = 0; i < config.length; ++i) {
    var appConfig = config[i];
    if (appConfig.run) {
      AppRegistry.registerRunnable(appConfig.appKey, appConfig.run);
    } else {
      invariant(appConfig.component, 'No component provider passed in');
      AppRegistry.registerComponent(appConfig.appKey, appConfig.component);
    }
  }
},</code></pre>

* `appConfig.appKey`是我们之前定义的`hotelApp`

* `appConfig.component`是我们之前定义的`HotelApp`

* 如果 appConfig.run 为 true，就注册可运行的 App 对象; 反之就先调用`invariant`方法输出提示，然后注册该组件。

### 3. registerComponent

<pre><code>registerComponent: function(appKey: string, getComponentFunc: ComponentProvider): string {
  runnables[appKey] = {
    run: (appParameters) =>
      renderApplication(getComponentFunc(), appParameters.initialProps, appParameters.rootTag)
  };
  return appKey;
},</code></pre>

* 定义了 string 类型的 `appKey`，`ComponentProvider`类型的`getComponentFunc`，返回 string 类型的 `appKey`。

* `runnables`是个对象，`appKey` 是“hotelApp”，`run` 是属性名称，我们之前定义的“HotelApp”，run 冒号后面对应的是属性值。

* `renderApplication`方法渲染显示应用，参数对应的是：“HotelApp”，初始化的 Props，应用入口的根标签。

### 4. registerRunnable

<pre><code>registerRunnable: function(appKey: string, func: Function): string {
  runnables[appKey] = {run: func};
  return appKey;
},</code></pre>

* 定义了 `func` 类型的回调入参。

* 将`{run: func}`对象赋值给`runnables['hotelApp']`。

* 返回`string`类型数据。

### 5. getAppKeys

<pre><code>getAppKeys: function(): Array< string > {
  return Object.keys(runnables);
},</code></pre>

* 获取整个应用的 keys, 无入参。

* 返回`Array<string>`类型的数据。

### 6. runApplication

<pre><code>runApplication: function(appKey: string, appParameters: any): void {
  console.log(
    'Running application "' + appKey + '" with appParams: ' +
    JSON.stringify(appParameters) + '. ' +
    '__DEV__ === ' + String(__DEV__) +
    ', development-level warning are ' + (__DEV__ ? 'ON' : 'OFF') +
    ', performance optimizations are ' + (__DEV__ ? 'OFF' : 'ON')
  );
  invariant(
    runnables[appKey] && runnables[appKey].run,
    'Application ' + appKey + ' has not been registered. This ' +
    'is either due to a require() error during initialization ' +
    'or failure to call AppRegistry.registerComponent.'
  );
  runnables[appKey].run(appParameters);
},
</code></pre>

* `function(appKey: string, appParameters: any): void {` 第一行有两个知识点： 1. any 用来描述一些不明确数据类型，比如动态内容、网络请求结果、用户提供的。_我感觉与 React.PropTypes.any 差不多（不确定）_。 2. void 表示无返回类型，这和 C#、Java 一样。

* 用`JSON.stringify(appParameters)`来序列化上面提到的 any 类型入参。

* 执行`runnables[appKey].run(appParameters)`方法来运行 “hotelApp” 应用，参数为 appParameters。

### 7. unmountApplicationComponentAtRootTag

<pre><code>unmountApplicationComponentAtRootTag: function(rootTag : number) {
  ReactNative.unmountComponentAtNodeAndRemoveContainer(rootTag);
},</code></pre>

* 卸载应用的组件，并销毁视图、终结应用。

* 传入数字类型的 rootTag，见：`rootTag : number`(为什么是 number 类型，而不是 string 或者其它类型，没有搞懂)
