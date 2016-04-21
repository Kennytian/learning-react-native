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

推荐使用[腾讯Bugly](http://android-mirror.bugly.qq.com:8080/include/usage.html)的镜像加速下载


### 安装C++环境
- 下载并安装[Visual Studio 2013](ed2k://|file|en_visual_studio_express_2013_for_web_x86_dvd_3009395.iso|632700928|166AD0A50E1E342FD3F76ECC41D2690C|/)，编译node.js的C++模块时需要用到。

### 安装Python
- 安装[Python 2.7.x](https://www.python.org/downloads/release/python-2711/)（3.x版本不行）。

### 安装node.js
- 从官网下载[Node.js 4.4.x](https://nodejs.org/dist/v4.4.2/node-v4.4.2-x64.msi)的官方4.x版本或更[高版本 5.10.x](https://nodejs.org/dist/v5.10.1/node-v5.10.1-x64.msi)。
- 建议设置npm镜像以加速后面的过程（或使用科学上网工具）。
<pre><code>
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist
</code></pre>


### 安装Gradle
- 虽然在编译Android项目时会自动下载，但如果网络状态不好，很容易下载失败，建议先下载[gradle-2.4-all.zip](http://pan.baidu.com/s/1c0dcgfe)。

### 安装react-native命令行工具
<pre><code>npm install -g react-native-cli</code></pre>

### 初始化项目
<pre><code>react-native init AwesomeProject</code></pre>









