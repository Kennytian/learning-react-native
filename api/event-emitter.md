DeviceEventEmitter
RCTDeviceEventEmitter

NativeAppEventEmitter

Subscribable

NativeModules

#### Java

```
WritableMap params = Arguments.createMap();

params.putString("TAG",tag);
params.putString("MSG",msg);

//对应的javascript层的事件名为logInConsole，注册该事件即可进行回调
getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("logInConsole", params);
```

#### JavaScript

```
componentDidMount(){
    //直接使用DeviceEventEmitter进行事件注册
    DeviceEventEmitter.addListener('logInConsole',(e)=>{
       console.log(e);
    });
}
```

EventEmitter

* addListener(eventType:string, listener:function, context:?\*) 添加要监听的自定义事件
* once(eventType:string, listener:function, context:?\*) 仅执行一次的自定义事件
* removeAllListeners(eventType:?string) 删除所有事件监听回调，若指定事件类型，则仅删除指定事件的回调
* removeCurrentListener() 删除当前触发的事件监听，once 方法就是使用此函数实现的
* removeSubscription(subscription: EmitterSubscription) 删除当前事件发布器实例中的订阅者，该方法主要出于性能上的考虑，以便销毁时能够手动控制销毁内容
* listeners(eventType:string) 根据指定事件名返回该事件名下添加的所有回调列表
* emit(eventType:string) 触发指定事件
* removeListener(eventType:string, listener:function) 删除指定事件回调

http://www.ghugo.com/react-native-event-emitter/
https://facebook.github.io/react-native/docs/native-modules-android.html
http://5doe.com/?p=192

react Native DeviceEventEmitter
http://www.jianshu.com/p/ca5857e091fd

ReactNative 中 navigator.pop 后如何实现数据更新
http://www.jianshu.com/p/f7d569407843

React Native 学习之 DeviceEventEmitter 传值
http://www.cnblogs.com/Milo-CTO/p/5957218.html

https://zhuanlan.zhihu.com/p/20429890
