# React Native 坑大发

一起来学习交流, QQ 群：[413381701](http://shang.qq.com/wpa/qunwpa?idkey=3b9474dacbf35e4a9659e89399758406e510e5b8a3f81109f7d07efaadc6056d)

## 30. 集成了 react-native-pdf 报 Android 端错误

```
No toolchains found in the NDK toolchains folder for ABI with prefix: mipsel-linux-android
```

### resolve：

#### step 1

```
mkdir ~/Library/Android/sdk/ndk-bundle/toolchains/mipsel-linux-android/prebuilt/darwin-x86_64/bin
touch ~/Library/Android/sdk/ndk-bundle/toolchains/mipsel-linux-android/prebuilt/darwin-x86_64/bin/mipsel-linux-android-strip
```

#### step 2
The same to issue 29


## 29. React Native 0.55.4 版 Android 端编译报错

```
due to missing mipsel-linux-android-4.9 toolchain files
```

### resolve：

#### step 1

```
mkdir ~/Library/Android/sdk/ndk-bundle/toolchains/mips64el-linux-android-4.9/prebuilt/darwin-x86_64/bin
touch ~/Library/Android/sdk/ndk-bundle/toolchains/mips64el-linux-android-4.9/prebuilt/darwin-x86_64/bin/mips64el-linux-android-strip
```

#### setp 2

`android/build.gradle`
```diff
- classpath 'com.android.tools.build:gradle:2.2.3'
+ classpath 'com.android.tools.build:gradle:2.3.3'
```

`android/gradle/wrapper/gradle-wrapper.properties`
```diff
- distributionUrl=https\://services.gradle.org/distributions/gradle-2.14.1-all.zip
+ distributionUrl=https\://services.gradle.org/distributions/gradle-3.5.1-all.zip
```


### references:

* https://github.com/android-ndk/ndk/issues/700#issuecomment-405051579


## 28. 编译 Android 时报错

```
FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:transformNative_libsWithStripDebugSymbolForDebug'.
> A problem occurred starting process 'command '/Users/kenny/Downloads/android-sdk-macosx/ndk-bundle/toolchains/mipsel-linux-android-4.9/prebuilt/darwin-x86_64/bin/mipsel-linux-android-strip''

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.
```

解决：

1、步骤

```
https://www.google.com/search?q=%2Ftoolchains%2Fmipsel-linux-android-4.9%2Fprebuilt%2Fdarwin-x86_64%2Fbin%2Fmipsel-linux-android-strip&oq=%2Ftoolchains%2Fmipsel-linux-android-4.9%2Fprebuilt%2Fdarwin-x86_64%2Fbin%2Fmipsel-linux-android-strip&aqs=chrome..69i64j69i58j69i60l4.6205j0j1&sourceid=chrome&ie=UTF-8
```

2、在 ./android/app/build.gradle 的 android 节点里添加

```
 packagingOptions{
    doNotStrip '*/mips/*.so'
    doNotStrip '*/mips64/*.so'
}
```

3、更多参考

* https://github.com/android-ndk/ndk/issues/700
* https://stackoverflow.com/questions/42739916/aarch64-linux-android-strip-file-missing

---

## 27. android app is crashing when app is launching

集成 react-native-device-info 后，一启动 APP 后就闪退，然后查看 Android 日志，发现：

```
* What went wrong:
Execution failed for task ':react-native-device-info:processReleaseResources'.
> Error: more than one library with package name 'com.google.android.gms.license'
```

解决：

1、步骤

```
https://github.com/rebeccahughes/react-native-device-info/search?q=play-services+crash&type=Issues
```

2、找到 android/gradle.properties，在文件底部添加 `googlePlayServicesVersion=11.0.4`，重新 build，运行正常。

3、更多参考

* https://github.com/rebeccahughes/react-native-device-info/issues/365#issuecomment-374801428
* https://github.com/rebeccahughes/react-native-device-info/issues/384#issuecomment-379719066

---

## 26. iOS 上 Release 打包报错

```
error: failed to launch '/private/var/containers/Bundle/Application/C5F59BFB-90D3-4B20-A84C-49604IJLJILB03/xxxx.app' -- Kenny's iPhone has denied the launch request.
```

解决：

1、步骤

```
https://stackoverflow.com/questions/8547201/xcode-error-failed-to-launch
```

2、查看 TARGETS -> General -> Signing(Debug) / Signing(Release)

```
发现是发布证书，所以无法编译 release 版到我手机上，切换成开发证书即可
```

## 25. 「取不到网络状态？」这个问题在 React Native 0.55 才修复，正确姿势：

```javascript
NetInfo.isConnected
  .fetch()
  .then()
  .done(() => {
    NetInfo.isConnected.addEventListener("change", this.dispatchConnected);
  });

dispatchConnected = a => {
  console.log(a);
};
```

## 24. 解决项目中提示 `'useNativeDriver' is not supported` 警告

警告详情显示：`Animated: 'useNativeDriver' is not supported because the native animation module is missing`

本着努力消灭所有警告的原则，经过查阅资料，得到如下解决方案：

1.  find RCTAnimation.xcodeproj The file can be found from node_modules/react-native/Libraries/NativeAnimation

2.  open xcode

3.  open project navigator (press cmd + 1 OR click folder icon from the left)

4.  drag & drop RCTAnimation.xcodeproj from the previous step to Libraries folder

5.  Expand RCTAnimation.xcodeproj in project navigator and find libRCTAnimation.a file inside of Products folder

6.  click on your project name on top of project navigator and go to Build Phrases tab

7.  drag and drop libRCTAnimation.a to Link Binary With Libraries

8.  Clean and run :)

参考链接：https://github.com/facebook/react-native/issues/11094#issuecomment-263240420

## 23. 在一台新电脑上打开之前的 `React Native` 项目，运行 `react-native run-ios` 命令直接闪退，用 `xcode` 运行，报 `“Error watching file for changes: EMFILE”` 错误

错误详情：

```
Error watching file for changes: EMFILE
{"code":"EMFILE","errno":"EMFILE","syscall":"Error watching file for changes:","filename":null}
Error: Error watching file for changes: EMFILE
    at exports._errnoException (util.js:1008:11)
    at FSEvent.FSWatcher._handle.onchange (fs.js:1406:11)
```

在网上查阅资料发现是该电脑没有安装 `watchman`， 执行 `brew install --HEAD watchman` 项目成功运行起来。

补充知识点：

* `watchman` 是由 `Facebook` 提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager 可以快速捕捉文件的变化从而实现实时刷新）
* `--HEAD` 表示获取 '最新版' 而非 '稳定版'

参考链接：https://github.com/facebook/react-native/issues/10088

## 22. 开启 `Hot Reloading` 后，经常报`reducer is not a function`

项目大了之后不可避免要使用 `Redux` 来管理数据流，在模拟器上开启 `Hot Reloading` 后，时不时报 `reducer is not a function`，经查资料代码整理如下：

```
function isHot() {
  // 参考： https://github.com/gaearon/redux-devtools/issues/233#issuecomment-176210686
  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    let reducerPath = '../reducers/rootReducer';
    module.hot.accept(reducerPath, () => {
      let nextRootReducer = require(reducerPath).default;
      store.replaceReducer(nextRootReducer);
    });
  }
}

export default function configureStore(initialState = {}) {
  store = createStore(rootReducer, initialState, enhancers);

  isHot();

  return store;
}
```

## 21. Xcode7 升级后 Xcode 8 后，项目无法编译（我环境是从 0.29 升到 0.32）

```
项目报如下错误
node_modules/react-native/Libraries/WebSocket/RCTSRWebSocket.m
ignoring return value of function declared with warn_unused_result attribute

经查资料，改如下几处：
1. 打开项目 -> Libraries -> RCTWebSocket -> TARGETS -> Build Settings ->
custom compiler flags(搜索这个词) -> Other Warning Flags，把里面的‘-Werror -Wall’删除，

2. Save -> Rebuild -> Enjoy your cdoe!

参考：https://github.com/facebook/react-native/issues/8584#issuecomment-236366222
```

## 20. 小米 3 手机安装应用之后打开应用，显示白屏问题

```
解决办法：
1. 打开应用悬浮框权限(打开安全中心 -> 授权管理 -> 应用权限管理 -> 找到测试app -> 显示悬浮框打开)

2. 打开应用可能会报"Could not get BatchedBridge, make sure your bundle is packaged correctly" 错误并显示红屏。

解决办法：
1. 设置本地测试ip/端口：在应用界面摇晃手机

2. 应用弹出选择界面,选择Dev Settings -> Debug server host & port for device，地址是PC机ip:端口号。

再次打开应用，就会正常运行了。
```

## 19. 项目报 WebSocket 错误

最近运行项目时, 时不时就报 WebSocket 错误, 显示 node_modules/ws/lib/Receiver.js:386 错误。

上网找资料, https://github.com/qeled/discordie/issues/15。

突然想起我和文章中提到的一样, 也是升级到 node 6.x.x 版本。

下载最新稳定版 https://nodejs.org/dist/v4.5.0/node-v4.5.0.pkg, 覆盖安装, 再也不报错了, Oh yes!

## 18. watchman 报错, 一直提示 reconnecting, 项目无法 running

我的错误跟歪国盆友这个一样, https://github.com/facebook/react-native/issues/7006#issue-148766715

<pre><code>[sane] Warning: Lost connection to watchman, reconnecting..
[sane] Warning: Lost connection to watchman, reconnecting..
[cli] failed to identify PDU: fill_buffer: EOF
[cli] unable to talk to your watchman on /usr/local/Cellar/watchman/4.4.0/var/run/watchman/%n-state/sock! (Undefined error: 0)

[cli] failed to identify PDU: fill_buffer: EOF
[cli] unable to talk to your watchman on /usr/local/Cellar/watchman/4.4.0/var/run/watchman/%n-state/sock! (Undefined error: 0)

Watchman:  watchman--no-pretty get-sockname returned with exit code 1
[cli] failed to identify PDU: fill_buffer: EOF
[cli] unable to talk to your watchman on /usr/local/Cellar/watchman/4.4.0/var/run/watchman/%n-state/sock! (Undefined error: 0)

ERROR  watchman--no-pretty get-sockname returned with exit code 1
[cli] failed to identify PDU: fill_buffer: EOF
2016-04-15T16:33:51,874: [cli] unable to talk to your watchman on /usr/local/Cellar/watchman/4.4.0/var/run/watchman/%n-state/sock! (Undefined error: 0)</code></pre>

在 Terminal 里执行`watchman --no-pretty get-sockname`, 也显示正常。换个项目 run, 也报这个错, 难道跟电脑环境有关?

没办法，只好试试万能的重启大法, 1 分钟后回来, 项目神奇的 run 起来, 大家遇到这个问题可以试试。

## 17. iOS 编译时下载 realm-core-0.100.2.tar.bz2, 但一直下载不成功, 编译超时

项目中使用了 realm 控件来做缓存, 刚刚编译时一直下载不成功, 经过查资料发现需要下载这个 **`https://static.realm.io/downloads/core/realm-core-0.100.2.tar.bz2`** 文件, 使用浏览器（用迅雷没有下载成功）下来回来(70.2M), 然后执行如下操作:

1.  将 `realm-core-0.100.2.tar.bz2` 重命名为 `core-0.100.2.tar.bz2`
2.  进 `$TMPDIR/core_bin` 目录, 将原来下载失败的临时文件删除（`rm core-*.*`）
3.  将 `core-0.100.2.tar.bz2` 拷贝到当前目录（`cp ~/Downloads/core-0.100.2.tar.bz2 ./`）
4.  rebuild, 成功! （**为什么是下载`realm-core-0.100.2.tar.bz2`?** 这需要你进`$TMPDIR/core_bin` 目录下看一眼下载失败是哪个版本）
5.  完整写法: `cd $TMPDIR/core_bin && rm core-*.* && cp ~/Downloads/core-0.100.2.tar.bz2 ./`

## 16. 小米 4 手机无法安装应用, 报 Failed to establish session 错误

大致的错误提示如下:<pre><code>com.android.ddmlib.InstallException: Failed to establish session
at com.android.ddmlib.Device.installPackages(Device.java:930)
at com.android.builder.testing.ConnectedDevice.installPackages(ConnectedDevice.java:113)
at com.android.build.gradle.internal.tasks.InstallVariantTask.install(InstallVariantTask.java:134)
at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
</code></pre>
原来是小米 4 做了“优化”, 造成无法 debug 安装 APP。 按如下操作可以解决:

* **设置 > 其它高级设置 > 开发者选项 > 启用优化 MIUI > 关闭**

## 15. 有时候 Android 打包时报 recordFilesBeforeBundleCommandDebug 错误

<pre><code>FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:recordFilesBeforeBundleCommandPgDebug'.
> A problem occurred starting process 'command 'node''
</code></pre>

重新运行 `react-native start` 无效。 node 路径一直没动过。 `./gradlew clean` 无效。

直到查到了这个条命令: `./gradlew --stop`, 意思就是 `Stops the Gradle daemon if it is running`。 重新打包时会启动 `Gradle daemon`

## 14. 使用 Android 低端机使用拍照功能会 crash

项目中有个拍照设置头像功能, 有个低端手机拍照后一点确定, logcat 就报红色 Error `android openSDK_LOG.UIListenerManager: getListner action is null! rquestCode=1`, 难到是底层出错啦?
在网上查了半天也没有找到原因, 会不会是 image picker 控件出了问题? 决定从如下几步下手:

1.  [升级 `npm install react-native-image-picker@latest --save`](https://github.com/marcshilling/react-native-image-picker#install)
2.  [重新检查 android manifest 权限声明](https://github.com/marcshilling/react-native-image-picker#android)
3.  [对比官方 Usage 代码](https://github.com/marcshilling/react-native-image-picker#usage)<pre><code>var options = {
    ...
    quality: 0.2, // 0 to 1, photos only
    ...
    allowsEditing: false, // Built in functionality to resize/reposition the image after selection
    ...
    };</code></pre>

发现本机代码这两项与官方用法不一样, 将 **quality** 改为适当的值, **allowsEditing**(允许编辑) 改为 false, 重新验证, Android crash bug 不再出现。

## 13. iOS Release 版运行正常, 但 Android Release 版一打开就 crash

先把 Android 端改为 Debug 打包, 然后调试起来, 发现报大红页错误, 显示 "`synatax error attempted to redefine property counselorCompany`"

<pre><code>export default StyleSheet.create(Object.assign({}, commonStyle, {
 counselorCompany: {
   marginLeft: 10,
   fontSize: 11,
   color: '#666'
 },</code></pre>

果然在某样式文件的底部又发现定义一个名为 **counselorCompany** 的属性, 直接删除（合并）, 验证 Android Release/Debug 包都运行正常。_为什么 iOS 不会报错, 难道兼容性好些?_

歪果盆友也有遇到这个问题的, https://github.com/facebook/react-native/issues/4032

## 12. 开发时 Java Module 不能使用方法重载

在 C# / Java 中方法重载是非常常见的, 但在如果开发 Java Module 使用了重载, 就会报: [method name already registered 错误](https://github.com/Kennytian/learning-react-native/blob/master/components/develop-native-modules.md#24-当心重载陷阱), 解决办法就是换个方法名, 建议不要在方法名后面加 2、3 之类的, 不专业 :)

## 11.（接第 10 条）虽然安装成功, 但 icon 图标不显示

好不容易安装成功, 但 icon 图标不显示, 后来发现所有用 `<Image source={require('')}/>` 显示的图片的地方都不显示图片了, 不管什么 Android 手机都不显示, **真想砸电脑啊!!!** 冷静一会儿之后，要不我换个思路试试:

* 改回原来的 `gradle:1.3.1` 打包, 只生成 apk 文件（`./gradlew assembleRelease`）, 先不安装。
* 将 apk 文件拷到报 `Unable to upload some APKs` 错误的手机里, 点击 apk, 成功安装, require 方式的图片正常显示。

## 10. 魅族 Meizu m2 note / 魅族 Meizu MX4 / 华为 Huawei Mate 7 / 华为 Huawei P8 / 小米 Redmi Note 2/3 / 乐视 Letv X500 / 华为荣耀 X2(GEM-703L) 无法安装

开发调试期间, 以上手机安装 apk 时, **可能会**报一个 `com.android.ddmlib.InstallException: Unable to upload some APKs`, 我们需要修改如下几个位置:

* 需要将 `android/build.gradle` 里的 `gradle:1.3.1` 改为 `gradle:1.2.3`
* 经过测试**无需**将 `android/gradle/wrapper/gradle-wrapper.properties` 文件里的 `gradle-2.4-all.zip` 改为 `gradle-2.2-all.zip`（如果 Terminal 提示要改为 2.2, 不用管它）

## 9. 新 react native init 的项目 iOS Release 包无法访问 HTTP 网络

在主工程里的 Info.plist 里添加如下 key 和 dict 配置, 从字面意思上也能看出, 是要允许 App 传输的安全性

<pre><code>&lt;key&gt;NSAppTransportSecurity&lt;/key&gt;
&lt;dict&gt;
  &lt;key&gt;NSAllowsArbitraryLoads&lt;/key&gt;
  &lt;true/&gt;
&lt;/dict&gt;</code></pre>

## 下面的 8 条我忘了 :D
