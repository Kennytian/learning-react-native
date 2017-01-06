## 实用 package scripts 配置大甩卖

这里收集了平时常用的 npm scripts 命令，位于项目根目录 package.json 的 scripts 里

```
"scripts": {
    ....
},

```

下面分解介绍一下：

* `"ios-open": "open ios/*.xcodeproj",`
    * 用 xcode 打开 ios 项目
* `"codepush:ios:staging": "code-push release-react yourAppName ios --dev false --des \"code push for ios-Staging\" -d Staging",`
    * 为 `iOS` 平台 `code push` 新版本，环境为 `Staging`（前提是已经集成了 `code push`，下同）
* `"codepush:ios:staging:m": "code-push release-react yourAppName ios --dev false --des \"code push for ios-Staging\" -d Staging -m true",`
    * 为 `iOS` 平台 `code push` 新版本，环境为 `Staging`，强制更新
* `"codepush:ios:prod": "code-push release-react yourAppName ios --dev false --des \"code push for ios-Production\" -d Production",`
    * 为 `iOS` 平台 `code push` 新版本，环境为 `Production`
* `"codepush:ios:prod:m": "code-push release-react yourAppName ios --dev false --des \"code push for ios-Production\" -d Production -m",`
    * 为 `iOS` 平台 `code push` 新版本，环境为 `Production`，强制更新
* `"codepush:android:staging": "code-push release-react yourAppName android --dev false --des \"code push for android-Staging\" -d Staging -m",`
    * 为 `Android` 平台 `code push` 新版本，环境为 `Staging`，强制更新
* `"codepush:android:prod": "code-push release-react yourAppName android --dev false --des \"code push for android-Production\" -d Production -m",`
    * 为 `Android` 平台 `code push` 新版本，环境为 `Production`，强制更新
* `"codepush:staging:history": "code-push deployment history yourAppName Staging",`
    * 查看 `Staging` 环境下更新记录
* `"codepush:prod:history": "code-push deployment history yourAppName Production",`
    * 查看 `Production` 环境下更新记录
* `"codepush:deployment:list": "code-push deployment list yourAppName",`
    * 查看名为 `yourAppName` 发布过的更新与安装记录
* `"codepush:deployment:list:key": "code-push deployment list yourAppName -k",`
    * 查看名为 `yourAppName` 发布过的更新与安装记录，并且显示环境（Staging/Production） key
* `"start:ios": "react-native run-ios",`
    * 运行在 iPhone 6 模拟器上
* `"start:android": "react-native run-android",`
    * 运行在 Android 设备上（模拟器或真机）
* `"start:5s": "react-native run-ios --simulator=\"iPhone 5s\"",`
    * 运行在 iPhone 5 模拟器上
* `"start:6plus": "react-native run-ios --simulator=\"iPhone 6 Plus\"",`
    * 运行在 iPhone 6 Plus 模拟器上
* `"start:7": "react-native run-ios --simulator=\"iPhone 7\"",`
    * 运行在 iPhone 7 模拟器上
* `"build-android": "cd android && ./gradlew assembleRelease",`
    * 编译打包 `Android` 项目
* `"install-android": "cd android && ./gradlew installRelease",`
    * 编译打包安装 `Android` 项目 
* `"lint": "eslint --ext .js ./src --fix",`
    * `js` 语法规范检查，并简单更正不规范代码（前提是已经安装了 `ESLint`）
