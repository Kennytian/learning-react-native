# React Native 学习旅程

欢迎您帮忙纠错, 一起帮助更多的人。 一起来学习交流 React, QQ 群：[413381701](http://shang.qq.com/wpa/qunwpa?idkey=3b9474dacbf35e4a9659e89399758406e510e5b8a3f81109f7d07efaadc6056d)

###本文档前置条件

1.  已安装 JDK，并配好环境变量。
2.  已安装如下 Android SDK，并配好环境变量。
    * Android SDK Build-tools (23.0.1)
    * Android SDK Tools (24.3.3)
    * Android SDK Platform-tools (22)
    * Android 6.0 (API 23)
    * Android Support Library(23.0.1)

推荐从[AndroidDevTools](http://androiddevtools.cn/)下载或者用[腾讯 Bugly](http://android-mirror.bugly.qq.com:8080/include/usage.html)镜像加速下载。

强烈建议配置为`%ANDROID_HOME%;` `%ANDROID_HOME%\platform-tools;` `%ANDROID_HOME%\tools`形式。

### 安装 C++ 环境

* 下载并安装[Visual C++ 2013](https://www.microsoft.com/zh-cn/download/details.aspx?id=40784)，选择 vcredist_x64.exe（如果 32 位系统，下载 vcredist_x86.exe），仅有**7M**大小，编译 Node.js 的 C++ 模块时需要用到。

### 安装 Python

* 安装[Python 2.7.x](https://www.python.org/downloads/release/python-2711/)（3.x 版本不行），安装时确保 `Add python.exe to Path` 已选中状态。

### 安装 Node.js

* 从官网下载[Node.js 4.4.x](https://nodejs.org/dist/v4.4.2/node-v4.4.2-x64.msi)的官方 4.x 版本，或者[Node.js 5.x](https://nodejs.org/dist/v5.10.1/node-v5.10.1-x64.msi)版本 ，安装时确保`Add to PATH`已选中状态。
* 建议设置 npm 镜像以加速后面的过程（或使用科学上网工具）。
  <pre><code>npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist</code></pre>

### 安装 Gradle

* 虽然在编译 Android 项目时会自动下载，但如果网络状态不好，很容易下载失败，建议先下载[gradle-2.4-all.zip](http://pan.baidu.com/s/1pLEkm4F)。
* 下载上述文件后，将 zip 文件放在`C:\Users\kenny\.gradle\wrapper\dists\gradle-2.4-all\6r4uqcc6ovnq6ac6s0txzcpc0` (不存在的目录就手动创建, 把 kenny 改成你的用户名)。

### 安装 react-native 命令行工具

<pre><code>npm install -g react-native-cli</code></pre>

请耐心等待 1-3 分钟。

### 初始化项目

在命令行里执行

<pre><code>react-native init RNProject</code></pre>

请耐心等待 5-10 分钟。

### 运行 React Native

进入 RNProject 目录, 在命令行里执行

<pre><code>react-native run-android</code></pre>

注意：如果 Android SDK Build-tools (23.0.1)下载不到，用 23.0.2 也行，就在`RNProject\android\app\build.gradle`里找到`buildToolsVersion "23.0.1"`，改为`buildToolsVersion "23.0.2"`就可以了

### 连接手机

在命令行里执行

<pre><code>adb reverse tcp:8081 tcp:8081</code></pre>

建议使用 Android 5.0 系统手机，不用手动设置 Debug server host ，但是最低要求 Android 4.1 系统手机。

提示：如果你执行`adb devices`没有问题，但执行上面`adb reverse`命令出问题，请下载 [utility/adb.zip](https://raw.githubusercontent.com/Kennytian/learning-react-native/master/utilities/adb.zip) 关解压，将 3 个文件放在`%ANDROID_HOME%\platform-tools`下

### 开发

用 IDE 打开 RNProject 目录，开始开发吧!

* [Visual Studio Code](https://www.visualstudio.com/products/code-vs)，微软免费产品，不到 30M，超强智能代码提示、代码导航、断点调试、集成 Git
* [WebStorm](https://www.jetbrains.com/webstorm/)，JetBrains 收费产品，160M，前端开发神器，用过[Intellij IDEA](https://www.jetbrains.com/idea/)，[Android Studio](http://www.androiddevtools.cn/)推荐使用。

### 调试

* 当 Node.js 服务意外停了或不小心把窗口关了，只需手动开启这个服务即可，在命令行进入 react native 目录，运行`react-native start`
* 查看 Node.js 服务是否在运行状态，只需在浏览器里输入`http://localhost:8081/index.android.bundle?platform=android`，在第一行看到`(function(global) {global.` 表示服务正常

### 纠错

* 欢迎您帮忙纠错, 一起帮助更多的人。 一起来学习交流 React, QQ 群：413381701

### 相关文档

* [React Native 在 Windows 环境搭建](https://github.com/Kennytian/learning-react-native/blob/master/environment/config-environment-on-windows.md)
* [Redux 之 Action](https://github.com/Kennytian/learning-react-native/blob/master/redux/action.md)
* [Redux 之 Reducer](https://github.com/Kennytian/learning-react-native/blob/master/redux/reducer.md)
* [Redux 之 Store](https://github.com/Kennytian/learning-react-native/blob/master/redux/store.md)
