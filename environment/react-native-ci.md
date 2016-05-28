### 用 Jenkins CI 打 Android 和 iOS 包

`注: 公司 CI 服务器安排在 Linux 上, 所以下面我们将在 Linux 下操作`

#### 0.安装 Jenkins

后端同事已经帮我安装好了, 所以无法写教程

#### 1.安装 JDK
1. 下载 64 位 Linux 版 JDK, http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
2. 将本机的 jdk-8u91-linux-x64.tar.gz 放到服务器上, 命令: `scp jdk-8u91-linux-x64.tar.gz root@192.168.1.99:~`   (_只适用于开启 SCP 功能的 Linux 系统_)
3. 登录 Linux 服务器, 命令: `ssh root@192.168.1.99`
4. 新建 `/usr/java`, 并将 JDK 文件拷到该目录下, 命令: `cp jdk-8u91-linux-x64.tar.gz /usr/java`
5. 进入 `/usr/java` 目录, 执行 `tar -zxvf jdk-8u91-linux-x64.tar.gz ` 解压 tar.gz 文件, 成功后会看到 jdk1.8.0_91 目录

 #### 2.配置 JDK
1. 用 vim 打开 profile 文件, 命令: `vim /etc/profile`
2. 在 profile 底部添加如下配置<pre><code>
JAVA_HOME=/usr/java/jdk1.8.0_91
PATH=$JAVA_HOME/bin:$PATH
CLASSPATH=$JAVA_HOME/jre/lib/ext:$JAVA_HOME/lib/tools.jar
export PATH JAVA_HOME CLASSPATH
</code></pre>
3. 使用 source 使其立即生效, 命令: `source /etc/profile`
4. 验证是否安装成功, 命令: `java -version`

#### 3. 安装 Gradle
1. 下载 Gradle 2.13-all, http://gradle.org/gradle-download/
2. 将本机的 gradle-2.13-all.zip 放到服务器上, 命令: `scp gradle-2.13-all.zip root@192.168.1.99:~`   (_只适用于开启 SCP 功能的 Linux 系统_)
