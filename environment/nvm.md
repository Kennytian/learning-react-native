## 使用 NVM 管理不同的 Node.js 版本

欢迎您帮忙纠错, 一起帮助更多的人。 一起来学习交流React, QQ群：[413381701](http://shang.qq.com/wpa/qunwpa?idkey=3b9474dacbf35e4a9659e89399758406e510e5b8a3f81109f7d07efaadc6056d)

### 前言
之前用 npm 安装过 nvm，就以为安装成功了，但运行 nvm 就报如下提示： _This is not the package you are looking for: please go to http://nvm.sh_

### 安装NVM
查资料得出，要使用 curl 或 wget 来安装(版本可以选用官网最新版)：
 
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`

或:

`wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`

注意：安装完了，重新打开 Terminal(iTerm2) 来重启会话

### 安装 Node.js
#### 最新版
1. 安装最新版 Node.js，命令：`nvm install node`
2. 查看安装效果，命令：`nvm use node`，显示：`Now using node v7.5.0 (npm v4.1.2)`

#### 稳定版（LTS）
1. 安装 LTS 版，命令：`nvm install --lts`
2. 查看安装效果，命令：`nvm list`，显示：
```
->       v6.9.5
         v7.5.0
         system
default -> node (-> v7.5.0)
node -> stable (-> v7.5.0) (default)
stable -> 7.5 (-> v7.5.0) (default)
iojs -> N/A (default)
lts/* -> lts/boron (-> v6.9.5)
lts/argon -> v4.7.3 (-> N/A)
lts/boron -> v6.9.5
```

### 切换版本
从上面的安装列表上已经可以看到，我们安装了一个最新版，一个稳定版。分别是：v6.9.5 和 v7.5.0，我们要如何切换不同版本呢？

1. 切换到 v6.9.5，命令：`nvm use v6.9.5`，显示：`Now using node v6.9.5 (npm v3.10.10)`
2. 切换到 v7.5.0，命令：`nvm use v7.5.0`，显示：`Now using node v7.5.0 (npm v4.1.2)`

到这里，我们基本会使用 nvm 了，想用什么版本就可以自由切换。 但如果想玩得更爽一点，就要学习如下一些技巧。

### 使用别名
你肯定也想到，每次输入v6.9.5 好麻烦。并且时间长了，不一定记得住后面是9.5，还是8.6的版本号。

1. 设定 LTS 版别名，命令：`nvm alias 6 v6.9.5`，显示：`6 -> v6.9.5`
2. 设定最新版别名，命令：`nvm alias 7 v7.5.0`，显示：`7 -> v7.5.0`
