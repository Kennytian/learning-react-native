# React Native 坑大发

欢迎您帮忙纠错, 一起帮助更多的人, QQ：2225226

## 18. watchman 报错, 一直提示reconnecting, 项目无法 running

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

在 Terminal 里执行`watchman --no-pretty get-sockname`, 也显示正常。换个项目run, 也报这个错, 难道跟电脑环境有关?

没办法，只好试试万能的重启大法, 1分钟后回来, 项目神奇的 run 起来, 大家遇到这个问题可以试试。


## 17. iOS 编译时下载 realm-core-0.100.2.tar.bz2, 但一直下载不成功, 编译超时
项目中使用了 realm 控件来做缓存, 刚刚编译时一直下载不成功, 经过查资料发现需要下载这个 **`https://static.realm.io/downloads/core/realm-core-0.100.2.tar.bz2`** 文件, 使用浏览器（用迅雷没有下载成功）下来回来(70.2M), 然后执行如下操作:

 1. 将 `realm-core-0.100.2.tar.bz2` 重命名为 `core-0.100.2.tar.bz2`
 2. 进 `$TMPDIR/core_bin` 目录, 将原来下载失败的临时文件删除（`rm realm-core-*.*`）
 3. 将 `core-0.100.2.tar.bz2` 拷贝到当前目录（`cp ~/Downloads/core-0.100.2.tar.bz2 ./`）
 4. rebuild, 成功! （**为什么是下载`realm-core-0.100.2.tar.bz2`?** 这需要你进`$TMPDIR/core_bin` 目录下看一眼下载失败是哪个版本）

## 16. 小米4手机无法安装应用, 报 Failed to establish session 错误
大致的错误提示如下:<pre><code>com.android.ddmlib.InstallException: Failed to establish session
    at com.android.ddmlib.Device.installPackages(Device.java:930)
    at com.android.builder.testing.ConnectedDevice.installPackages(ConnectedDevice.java:113)
    at com.android.build.gradle.internal.tasks.InstallVariantTask.install(InstallVariantTask.java:134)
    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
    at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
    at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
</code></pre>
原来是小米4做了“优化”, 造成无法 debug 安装 APP。 按如下操作可以解决:
* **设置 > 开发者选项 > 优化MIUI > 关闭**

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
 1. [升级 `npm install react-native-image-picker@latest --save`](https://github.com/marcshilling/react-native-image-picker#install)
 2. [重新检查 android manifest 权限声明](https://github.com/marcshilling/react-native-image-picker#android)
 3. [对比官方 Usage 代码](https://github.com/marcshilling/react-native-image-picker#usage)<pre><code>var options = {
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
在 C# / Java 中方法重载是非常常见的, 但在如果开发 Java Module 使用了重载, 就会报: [method name already registered 错误](https://github.com/Kennytian/learning-react-native/blob/master/components/develop_native_modules.md#24-当心重载陷阱), 解决办法就是换个方法名, 建议不要在方法名后面加2、3之类的, 不专业 :)

## 11.（接第10条）虽然安装成功, 但icon图标不显示

好不容易安装成功, 但icon图标不显示, 后来发现所有用 `<Image source={require('')}/>` 显示的图片的地方都不显示图片了, 不管什么 Android 手机都不显示, **真想砸电脑啊!!!**  冷静一会儿之后，要不我换个思路试试:

* 改回原来的 `gradle:1.3.1` 打包, 只生成 apk 文件（`./gradlew assembleRelease`）, 先不安装。
* 将 apk 文件拷到报 `Unable to upload some APKs` 错误的手机里, 点击 apk, 成功安装, require 方式的图片正常显示。

## 10. 魅族 Meizu m2 note / 魅族 Meizu MX4 / 华为 Huawei Mate 7 / 华为 Huawei P8 / 小米 Redmi Note 2/3 / 乐视 Letv X500 / 华为荣耀X2(GEM-703L) 无法安装

开发调试期间, 以上手机安装apk时, **可能会**报一个 `com.android.ddmlib.InstallException: Unable to upload some APKs`, 我们需要修改如下几个位置:

 * 需要将 `android/build.gradle` 里的 `gradle:1.3.1` 改为 `gradle:1.2.3`
 * 经过测试**无需**将 `android/gradle/wrapper/gradle-wrapper.properties` 文件里的 `gradle-2.4-all.zip` 改为 `gradle-2.2-all.zip`（如果Termial提示要改为2.2, 不用管它）

## 9. 新 react naitve init 的项目iOS Release 包无法访问 HTTP 网络

在主工程里的 Info.plist 里添加如下 key 和 dict 配置, 从字面意思上也能看出, 是要允许 App 传输的安全性
<pre><code>&lt;key&gt;NSAppTransportSecurity&lt;/key&gt;
&lt;dict&gt;
  &lt;key&gt;NSAllowsArbitraryLoads&lt;/key&gt;
  &lt;true/&gt;
&lt;/dict&gt;</code></pre>

## 下面的8条我忘了 :D