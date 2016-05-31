### React Native Module for CodePush 实战

欢迎您帮忙纠错, 一起帮助更多的人, QQ：2225226

#### 0.[入门常用命令, 添加 App 名, 添加、删除部署名](https://github.com/Kennytian/learning-react-native/blob/master/components/code-push-basic.md#code-push-的常用命令)

#### 1.强制更新所有文件, 按用户量50%批量推送
`code-push release-react tougudashi ios -d prod --dev false -m true -r 50 --des "for ios"`

说明:
>1. `release-react` 表示向 React Native app 推送一个更新
>2. `tougudashi` 表示 CodePush 管理的 app 名称 (打个广告, 欢迎下载安装 '投顾大师' 体验体验)
>3. `ios` 表示手机平台, windows/android/ios
>4. `-d prod` 表示部署名为 prod（前提是已经将默认的 Production 改为了 prod）
>5. `--dev false` 表示编译 release 版, 默认为 true 开发版
>6. `-x true` 表示本次推送立即下载, 默认为 false 不立即下载(如果指定为 true, 历史记录里显示Disabled: Yes, 并且是灰色, 不解)
>7. `-m true` 表示本次推送强制接收, 默认为 false 不强制接收
>8. `-r 50%` 表示每次更新50%的用户, 更新完再更新剩下50%用户（1~100）
>9. `--des "ios"` 描述表示本次推送是为 ios 平台

_注: 4以后的选项都不是必填的, 大家可以根据实际需求调整。_


#### 2.只更新 js 文件，不更新图片等资源
`code-push release-react tougudashi android -d prod --dev false -r 20 --des "for android"`

#### 3.查看推送下载安装情况
`code-push deployment ls tougudashi`

`code-push deployment ls tougudashi --format json` (以 json 格式查看)

#### 4.查看部署历史记录
`code-push deployment history tougudashi prod`

`code-push deployment history tougudashi prod --format json` (以 json 格式查看)

#### 5.清除dev的部署记录
`code-push deployment clear tougudashi dev` (dev 为部署名)

#### 6.回滚到指定的某个版本
`code-push rollback tougudashi prod --targetRelease v10`

_注:比如当前版本为 v11, 执行这条命令, 会回滚到 v10 的内容, 但版本号已经更新为 v12 了。_

#### 7.给1.0.0~1.0.9某个版本推送更新, 而不影响1.1.0版本
`code-push release-react tougudashi android -d prod -m true --dev false --targetBinaryVersion "1.0.x" --des "for android"`

_关于 "1.0.x" 的解译: http://www.u396.com/semver-range.html_