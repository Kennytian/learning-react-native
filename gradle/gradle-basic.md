# Gradle 知识点

## Gradle 简介

官网地址: https://docs.gradle.org

## Gradle 默认安装路径

* C:\Users\\<username> (大微软 Windows)
* /Users/<username> (Mac OS X)
* /home/<username> (Linux)

## 常用版本路径(以下为 Mac OS X 平台示例)

* /Users/username/.gradle/wrapper/dists/**gradle-3.2.1-all**/8lz77g2tsnl6gxlpeowwkfgj1
* /Users/username/.gradle/wrapper/dists/**gradle-2.14.1-all**/8bnwg5hd3w55iofp58khbp6yv
* /Users/username/.gradle/wrapper/dists/**gradle-2.13-all**/1b9wlm73elu4cqnbc0rk7r7qn
* /Users/username/.gradle/wrapper/dists/**gradle-2.12-all**/8ywkdai6puj5z81fume4e7njw
* /Users/username/.gradle/wrapper/dists/**gradle-2.11-all**/ace7yl0a7udokebb27mt9s3qr
* /Users/username/.gradle/wrapper/dists/**gradle-2.10-all**/a4w5fzrkeut1ox71xslb49gst
* /Users/username/.gradle/wrapper/dists/**gradle-2.8-all**/ah86jmo43de9lfa8xg9ux3c4h
* /Users/username/.gradle/wrapper/dists/**gradle-2.4-all**/6r4uqcc6ovnq6ac6s0txzcpc0
* /Users/username/.gradle/wrapper/dists/**gradle-2.2.1-all**/c64ydeuardnfqctvr1gm30w53
* /Users/username/.gradle/wrapper/dists/**gradle-2.2-all**/1vevkra640w3rb9hkuw50q5we
* /Users/username/.gradle/wrapper/dists/**gradle-2.1-all**/488seql5pimt7vjvdsuqhh1ut
* /Users/username/.gradle/wrapper/dists/**gradle-1.11-all**/etpezq1xtmacak8xwbc3ogwxf

## 简单优化

#### 配置全局的 gradle.properties

#### 1. daemon

使 Gradle 启动后常驻后台进程, 避免反复初始化, 加快 Android 项目*打包*速度.

打开 `/Users/.gradle/gradle.properties`(没有就创建一个), 添加这一句`org.gradle.daemon=true`, Save it.

or 来点有逼格的玩法：

* Windows 下命令行创建该文件, 并添加上述优化内容

  <pre><code>(if not exist "%USERPROFILE%/.gradle" mkdir "%USERPROFILE%/.gradle") && (echo org.gradle.daemon=true >> "%USERPROFILE%/.gradle/gradle.properties")</code></pre>

* Mac 下命令行创建, 并添加上述优化内容
  <pre><code>touch ~/.gradle/gradle.properties && echo "org.gradle.daemon=true" >> ~/.gradle/gradle.properties</code></pre>

#### 配置本地项目的 gradle.properties

#### 1. JVM 内存

Gradle 的 jvm 的内存分配设置

在 Android 工程里打开 `gradle.properties,`, 添加`org.gradle.jvmargs=-Xmx2048M`, Save it.

为什么是 2048M? 可以设置其它值吗?

1.  这个值是我项目在 Terminal 执行 ./gradlew build 命令时给的提示, 你自己的操作时注意观察一下.
2.  可以设置其它值，根据机器配置高低不同
