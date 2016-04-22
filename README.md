# React Native旅程
###本文档前置条件
1. 已安装JDK，并配好环境变量。
2. 已安装如下Android SDK，并配好环境变量。
    - Android SDK Build-tools (23.0.1)
    - Android SDK Tools (24.3.3)
    - Android SDK Platform-tools (22)
    - Android SDK Build-tools (23.0.1)
    - Android 6.0 (API 23)
    - Android Support Library(23.0.1)

推荐从[AndroidDevTools](http://androiddevtools.cn/)下载或者用[腾讯Bugly](http://android-mirror.bugly.qq.com:8080/include/usage.html)镜像加速下载


### 安装C++环境
- 下载并安装[Visual Studio 2013](http://www.msdn.hk/html/2014/450.html)，编译node.js的C++模块时需要用到。

### 安装Python
- 安装[Python 2.7.x](https://www.python.org/downloads/release/python-2711/)（3.x版本不行）。

### 安装node.js
- 从官网下载[Node.js 4.4.x](https://nodejs.org/dist/v4.4.2/node-v4.4.2-x64.msi)的官方4.x版本，``` 不要安装5.x版本 ```。
- 建议设置npm镜像以加速后面的过程（或使用科学上网工具）。
<pre><code>
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist
</code></pre>

### 安装Gradle
- 虽然在编译Android项目时会自动下载，但如果网络状态不好，很容易下载失败，建议先下载[gradle-2.4-all.zip](http://pan.baidu.com/s/1c0dcgfe)。
- 下载上述文件后，将zip文件放在C:\Users\kenny\\.gradle\wrapper\dists\gradle-2.4-all\6r4uqcc6ovnq6ac6s0txzcpc0 (不存在的目录就手动创建)

### 安装react-native命令行工具
<pre><code>npm install -g react-native-cli</code></pre>

### 初始化项目
在命令行里执行

<pre><code>react-native init RNProject</code></pre>

请耐心等待10分钟。

### 运行React Native
进入RNProject目录, 在命令行里执行

<pre><code>react-native run-android</code></pre>

### 连接手机
在命令行里执行

<pre><code>adb reverse tcp:8081 tcp:8081</code></pre>

(建议使用Android 5.0系统手机，最低4.1)

### 开发
用IDE打开RNProject目录, 开始开发吧!









