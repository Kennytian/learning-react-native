# 集成微信登录就 5 步

React Native 集成微信 for Android

先查看微信组件文档，https://github.com/reactnativecn/react-native-wx

按照上述文档可以成功集成 iOS, 但 Android 有点特殊, 文档中没有提到, 所以就有了下文。

## 1. 生成签名的 keystore

在命令行里执行下面这条命令(Windows/Mac 一样):

<pre><code>keytool -genkey -v -keystore releaseKey.keystore -alias releaseKey -keyalg RSA -keysize 2048 -validity 10000</code></pre>

简单说明:

* 只要正确安装 JDK, 并配置好环境变量, 就可以运行 `keytool`
* 执行条命令后, 需要根据提示输入证书信息, 国家代码输入 CN, 最后输入 y 确定信息
* `releaseKey.keystore`的文件名 `releaseKey` 可以修改成自己想要的
* `alias releaseKey` 这个别名 `releaseKey` 可以修改成自己想要的
* `10000` 表示证书有效期为 1 万天, 可以根据需要填写其它时长

## 2. 用 keystore 打出签名 release 包

React Native 采用的是 gradle 打包, 所以就以 gradle 命令为例:

* Windows
  <pre><code>cd android
gradlew assembleRelease</code></pre>
* Mac
  <pre><code>cd android && ./gradlew assembleRelease</code></pre>

## 3. 安装已签名的 release 包

1.  把已签名的 apk 拷到手机某个目录, 然后手机进入该目录, 点击安装。
2.  如果方法 1 提示无法安装, 就执行下面命令
    <pre><code>adb push /User/kenny/xxx.apk "/data/local/tmp/com.company.xxx"
    adb shell pm install -r "/data/local/tmp/com.company.xxx"</code></pre>
    _ adb push 就是把电脑里的 apk 文件拷到 Android 手机的 `/data/local/tmp/com.company.xxx` 目录下
    _ adb shell pm install 就是安装该 apk 文件。

## 4. 读出签名包的 md5 值

[安装 app_signatures.apk](https://github.com/mobileresearch/weibo_android_sdk), 打开 MD5 签名生成器 输入你的 Release 包名, 如:com.company.xxx, 读出你应用 md5 值(_保存好这个值, QQ 和微博开发者后台都会用到_)。如下图所示:

![读取 app md5 值](https://raw.githubusercontent.com/Kennytian/learning-react-native/master/images/my_app_md5.jpeg)

## 5. 将 md5 值提交到微信开发者后台

如下图所示:

![微信开发者后台](https://raw.githubusercontent.com/Kennytian/learning-react-native/master/images/wechat_auth.jpeg)

这时就应该可以在你的 Release 版 App 里实现微信登录了。

## 其它平台

顺便提一下 QQ 和微博在开发调试时需要添加测试账号, 如下图所示:

* 添加 QQ 测试账号, 添加的 QQ 号必须是 开发者 QQ 的好友

![QQ 开发者后台](https://raw.githubusercontent.com/Kennytian/learning-react-native/master/images/qq_auth.jpeg)

* 添加测试微博的昵称

![微博开发者后台](https://raw.githubusercontent.com/Kennytian/learning-react-native/master/images/weibo_auth.jpeg)

欢迎您帮忙纠错, 一起帮助更多的人, QQ：2225226
