### React Native Module for CodePush 入门

欢迎您帮忙纠错, 一起帮助更多的人, QQ：2225226

####从 help 认识 CodePush

我们在 Terminal 里输入 `code-push -help` , 出现如下命令:

`1.access-key`        显示和管理账号下关联的访问密钥（access keys)

`2.app`               显示和管理 CodePush

`3.collaborator`      显示和管理 CodePush 所有者(Owner)

`4.deployment`        显示和管理 app 的部署操作

`5.link`              关联授权认证提供商（如: Github）到 CodePush 账户上, 会弹出大微软 CodePush 网站关联

`6.login`             登录 CodePush 后管理 app

`7.logout`            退出当前 CodePush 会话

`8.patch`             打元数据（metadata）补丁包到已存在的 release 版

`9.promote`           提升开发版至产品版

`10.register`         新注册一个 CodePush 账户, 会弹出大微软 CodePush 网站注册

`11.release`          为线上 app 推送一个更新

`12.release-cordova`  为线上 Cordova app 推送一个更新

`13.release-react`    为线上 React Native app 推送一个更新

`14.rollback`         为线上 app 回滚最近一次推送

`15.whoami`           显示当前登录的账号信息

#### code push 的常用命令

_注:tougudashi 为 App 名, 以后都用这个名称, code push 默认部署名叫"Production", 我已改为 prod_

`code-push app ls` 列出 CodePush 管理的 app 名称

`code-push deployment ls tougudashi -k` 列出 App 部署信息, 注: -k 参数表示显示部署key

`code-push deployment rm tougudashi beta` 删除 App 的部署名, beta 为部署名

`code-push deployment rename tougudashi Production prod` 修改 App 的部署名, 将 Production 名改为 prod

`code-push access-key ls` 列出授权认证访问密钥