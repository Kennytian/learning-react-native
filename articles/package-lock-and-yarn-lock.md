## package-lock.json 与 yarn.lock

欢迎您帮忙纠错, 一起帮助更多的人。 一起来学习交流React, QQ群：[413381701](http://shang.qq.com/wpa/qunwpa?idkey=3b9474dacbf35e4a9659e89399758406e510e5b8a3f81109f7d07efaadc6056d)

### package-lock.json 是什么？
npm 5.0 版本以后，package-lock.json 是在 `npm install` 时候生成一份文件，用以记录当前状态下实际安装的各个 npm package 的具体来源和版本号。

比如：
```
"dependencies": {
  "redux": "^3.0.0"
}
```

这里面的 向上标号 **^**（[语义化版本](http://www.u396.com/semver-range.html)）是定义了向后兼容依赖，指如果 redux 的版本是超过3.0.0，并在大版本号（3）上相同，就允许下载最新版本的 redux 库包，例如实际上可能运行 npm install 时候下载的具体版本是3.0.1 或直到 3.9999.9999。

大多数情况这种向后兼容依赖下载最新库包的时候都没有问题，可是因为 npm 是开源世界，各库包的版本语义可能并不相同，有的库包开发者并不遵守严格这一原则：相同大版本号的同一个库包，其接口符合兼容要求。这时候用户就很头疼了：在完全相同的一个 nodejs 的代码库，在不同时间或者不同 npm 下载源之下，下到的各依赖库包版本可能有所不同，因此其依赖库包行为特征也不同有时候甚至完全不兼容。

因此 npm 最新的版本就开始提供自动生成 package-lock.json 功能，为的是让开发者知道只要你保存了源文件，到一个新的机器上、或者新的下载源，只要按照这个 package-lock.json 所标示的具体版本下载依赖库包，就能确保所有库包与你上次安装的完全一样。 

那我 npm 老版本(低于 5.0 的环境)也想要这种*自行车*怎么办？ 其实很简单，只要在package.json的时候手动「锁定」版本，去掉向上标号**^**，如：
```
"dependencies": {
  "redux": "3.0.0"
}
```
-----------手动滑稽分隔线-----------

你以为 package-lock.json 真的这么简单？ 那你错了

**自 npm 5.0 版本发布以来，npm install 的规则发生了三次变化。**

1、npm 5.0.x 版本，不管 package.json 怎么变，npm install 时都会根据 lock 文件下载
[package-lock.json file not updated after package.json file is changed · Issue #16866 · npm/npm](https://github.com/npm/npm/issues/16866)

这个 issue 控诉了这个问题，明明手动改了 package.json，为啥不给我升级包！然后就导致了 5.1.0 的问题...

2、5.1.0 版本后 npm install 会无视 lock 文件 去下载最新的 npm 然后有人提了这个
[issue why is package-lock being ignored? · Issue #17979 · npm/npm](https://github.com/npm/npm/issues/17979)

控诉这个问题，最后演变成 5.4.2 版本后的规则。

3、5.4.2 版本后，如果改了 package.json，且 package.json 和 lock 文件不同，那么执行 `npm install` 时 npm 会根据 package 中的版本号以及语义含义去下载最新的包，并更新至 package-lock.json。

如果两者是同一状态，那么执行 `npm install` 都会根据 package-lock.json 下载，不会理会 package 实际包的版本(作者)是否有新的发布。

最后：建议大家把 npm 升级至 5.4.2 及以上版本, 命令行执行：`npm install -g npm`

### yarn.lock 是什么？
未完待续

### lock 的使用
未完待续

### 该不该把 lock 文件添加到 .gitignore 里？
* 如果你的项目组所有同事都使用 npm 5.4.2 以上版本，`package-lock.json` 不要添加到 `.gitignore`

未完待续

### 参考文档：
* https://www.zhihu.com/question/264560841/answer/286682428

