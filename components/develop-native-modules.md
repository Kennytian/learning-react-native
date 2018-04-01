# 开发 Native Modules 供 JS 调用

欢迎您帮忙纠错, 一起帮助更多的人, QQ：2225226

如果项目中某个功能要与 Native 交互, 此时就要开发 Native Modules 供 JS 调用。比如:我们要在 React Native 项目中实现一个截图（用于分享）功能。

## 1.JavaScript 调用代码

### 1.1 添加引用

在 import 里添加 `NativeModules`, 如: `import React, { ..., NativeModules } from 'react-native';`

### 1.2 调用方式

`taskScreenshotBase64` 是在 Native 里定义的一个方法名, 调用代码如下:

<pre><code>NativeModules.ScreenShotModule.taskScreenshotBase64((result) => {
    this.shareToWechat(result);
});</code></pre>

## 2.开发 Native（Android） 代码

### 2.1 创建 Module 文件

在 `android/app/main/yourdomain/` 下新建一个名为 `ScreenShotModule.java` 的文件, 并继承 `ReactContextBaseJavaModule` 类。

### 2.2 开发 Module 代码

开发截图方法（_taskScreenshotBase64_）代码, 并在方法上声明 annotation(注解) 标签, 就是`@ReactMethod`, 忘了这个标签 JS 就调用不到了。

注意: 不要使用返回值, 而是要用 callback 形式返回数据, 这样 JS 端才能取到返回值。

### 2.3 Module 具体代码

<pre><code>public class ScreenShotModule extends ReactContextBaseJavaModule {
    public ScreenShotModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return getClass().getSimpleName();
    }

    @ReactMethod
    public void taskScreenshotBase64(Callback callback) {
        Activity currentActivity = getCurrentActivity();
        String base64String = ScreenShotUtil.getInstance().takeScreenshot(currentActivity); //请自己实现
        callback.invoke(base64String);
    }
}</code></pre>

### 2.4 当心重载陷阱

不要使用方法重载, JS 端会报错 `(Java Module method name already registered:)` , 导致程序无法运行, 为什么呢? 请看下图:

![Java module already registered](https://raw.githubusercontent.com/Kennytian/learning-react-native/master/images/java_module_already_registered.jpeg)

我们从 `if (methods.containsKey(methodName))` 代码中可以看出, 底层是按方法名作为 key 来注册的, 所以不能重名。

如果方法名相同, 入参不一样, 换一个方法名, 就可以了。

### 2.5 创建 Package 文件

在 `android/app/main/yourdomain/` 下新建一个名为`ScreenShotPackage.java`的文件, ReactPackage 接口。

### 2.6 Package 具体代码

<pre><code>public class ScreenShotPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(
            new ScreenShotModule(reactContext)
        );
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}</code></pre>

### 2.7 最后一步

把刚刚写好的 `ScreenShotPackage` 名添加到 `MainActivity.java` 文件的 `getPackages()` 里注册, 此时就可以开始调试了。

<pre><code>@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new ScreenShotPackage() //在此添加刚刚写好的Package
    );
}</code></pre>

## 3. 小结

一定要在 Native 里把各种 Exception 都 catch 住, 并妥善处理, 免得 JS 调用时程序 crash 了 :)
