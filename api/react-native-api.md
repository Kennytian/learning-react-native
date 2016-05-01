# React Native API 学习

## 前言

新建一个 React Native 项目后，我们可以在 index.android.js(index.ios.js)里看到这么一句：`AppRegistry.registerComponent('hotelApp', ()=>HotelApp);`

我们来了解一下 `AppRegistry` 和 `registerComponent` 都是起什么作用的。

## API 分析
### 1. AppRegistry
AppRegistry 是JS运行 React Native 程序的入口点，App的根组件通过`AppRegistry.registerComponent`来注册，然后原生系统通过调用`AppRegistry.runApplication`才能加载bundle，最后运行起来。

* AppRegistry文件位置：`/node_modules/react-native/Libraries/AppRegistry/AppRegistry.js`

* AppRegistry内部静态函数：
	* registerConfig
	* registerComponent
	* registerRunnable
	* getAppKeys
	* runApplication
	* unmountApplicationComponentAtRootTag

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

* 如果appConfig.run 为 true，就注册可运行的 App 对象; 反之就先调用`invariant`方法输出提示，然后注册该组件。

### 3. registerComponent
<pre><code>registerComponent: function(appKey: string, getComponentFunc: ComponentProvider): string {
  runnables[appKey] = {
    run: (appParameters) =>
      renderApplication(getComponentFunc(), appParameters.initialProps, appParameters.rootTag)
  };
  return appKey;
},</code></pre>

* 定义了string 类型的 `appKey`，`ComponentProvider`类型的`getComponentFunc`，返回string 类型的 `appKey`。

* `runnables`是个对象，`appKey` 是“hotelApp”，`run` 是属性名称，我们之前定义的“HotelApp”，run 冒号后面对应的是属性值。

* `renderApplication`方法渲染显示应用，参数对应的是：“HotelApp”，初始化的 Props，应用入口的根标签。

### 4. registerRunnable
<pre><code>registerRunnable: function(appKey: string, func: Function): string {
  runnables[appKey] = {run: func};
  return appKey;
},</code></pre>

### 5. getAppKeys
<pre><code>getAppKeys: function(): Array<string> {
  return Object.keys(runnables);
},</code></pre>

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

### 7. unmountApplicationComponentAtRootTag

<pre><code>unmountApplicationComponentAtRootTag: function(rootTag : number) {
  ReactNative.unmountComponentAtNodeAndRemoveContainer(rootTag);
},</code></pre>
