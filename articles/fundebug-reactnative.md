## 纯 JS 崩溃信息收集 - fundebug-reactnative

欢迎您帮忙纠错, 一起帮助更多的人。 一起来学习交流 React Native QQ 群：[413381701](http://shang.qq.com/wpa/qunwpa?idkey=3b9474dacbf35e4a9659e89399758406e510e5b8a3f81109f7d07efaadc6056d)

## 一、简介

fundebug 系列是国内一家公司开发的崩溃日志收集产品，现使用其中的 fundebug-reactnative。

* 缺点：收费，双十一不打折（开个玩笑的，支持国货，从我做起）
* 优点：无需集成原生插件，可以开发票。

## 二、安装

`yarn add fundebug-reactnative`

## 三、使用

### 3.1 初始化 funDebug

* apikey 注册登录后，就可以在后面获得。

* appVersion 可以通过读取 package.json 里的 version，个人推荐使用 `react-native-device-info` 来获取。
* releaseStage 可以写死「Production」，也可以 `__DEV__ ? 'Debug' : 'Production'`
* silent 设为 true 时，Fundebug 不再收集任何错误。可以写为`silent: __DEV__`，这样开发期间不收集。
* filters 通过配置 filters 属性，用户可以过滤掉一些不需要捕获的错误。
* metaData 可以使用 metaData 发送所需要的信息。

实际项目脱敏代码：

```javascript
import funDebug from "fundebug-reactnative";

export function funDebugInit() {
  if (__DEV__) return;
  funDebug.init({
    apikey: "59e1c8xxx8e70f8b4xxx12d1af9xxx4603c7axxxe19da9f0",
    appVersion: DeviceInfo.getVersion(),
    releaseStage: "Production"
  });
}
```

### 3.2 notify

使用 notify，可以将自定义的错误信息发送到 Fundebug

* name: 错误名称，参数类型为字符串

* message: 错误信息，参数类型为字符串

* option: 可选对象，参数类型为对象，用于发送一些额外信息

实际项目脱敏代码：

```javascript
/*
* name: 错误名称，参数类型为字符串
* message: 错误信息，参数类型为字符串
* option: 可选对象，参数类型为对象，用于发送一些额外信息
* */
export function funDebugInfo(name, message, option = {}) {
  if (__DEV__) return;
  const options = { metaData: { option, deviceInfo: baseInfo() } };
  funDebug.notify(name, message, options);
}
```

### 3.3 notifyError

使用 notifyError，可以将主动捕获的错误发送到 Fundebug

* error：抛出的错误对象，即 Error 对象。

- option：可选对象，参数类型为对象，用于发送一些额外信息

实际项目脱敏代码：

```javascript
/*
error：抛出的错误对象，即 Error 对象。
option：可选对象，参数类型为对象，用于发送一些额外信息：
* */
export function funDebugError(e, option = {}) {
  if (__DEV__) return;
  const options = { metaData: { option, deviceInfo: baseInfo() } };
  funDebug.notifyError(e, options);
}
```

### 3.4 辅助函数

实际项目脱敏代码：

```javascript
function baseInfo() {
  return {
    getBrand: DeviceInfo.getBrand(),
    getModel: DeviceInfo.getModel(),
    getDeviceId: DeviceInfo.getDeviceId(),
    getSystemName: DeviceInfo.getSystemName(),
    getSystemVersion: DeviceInfo.getSystemVersion(),
    getBuildNumber: DeviceInfo.getBuildNumber(),
    getVersion: DeviceInfo.getVersion(),
    getDeviceName: DeviceInfo.getDeviceName(),
    getUserAgent: DeviceInfo.getUserAgent(),
    getFirstInstallTime: getTimeString(
      DeviceInfo.getFirstInstallTime(),
      "YYYY-MM-dd hh:mm:ss"
    ),
    getLastUpdateTime: getTimeString(
      DeviceInfo.getLastUpdateTime(),
      "YYYY-MM-dd hh:mm:ss"
    )
  };
}
```

## 四、使用技巧

* 初始化时不要使用 init 里的 silent: true 功能，这样会造成所有 console 信息来源为「fundebug-reactnative.js」，造成无法定位日志文件。
* 开发期间收集日志有点多余，所以可以在方法第一行直接 `if (__DEV__) return;`
