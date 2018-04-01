## react-native 命令大全

* `react-native android` 创建一个空 android 项目
* `react-native start` 开启 npm webserver 服务
* `react-native run-android` 启动运行 android debug 模式
* `react-native run-android --variant=release` 以 releases 模式，运行 App（iOS 没有试验成功）
* `react-native link` 链接所有第三方原生依赖
  * `react-native link react-native-wechat` 指定链接**微信**控件
* `react-native init` 初始化一个 react-native 项目
* `react-native bundle` 编译打包 javascript 文件供离线使用
* `react-native install` 安装并链接第三方原生依赖
* `react-native uninstall` 卸载并解除三方原生依赖
* `react-native upgrade` 升级项目的模板文件至新版，如：0.38.1 至 0.42.0
* `react-native log-android` 启动 android logcat 日志服务，供开发调试使用
* `react-native log-ios` 启动 iOS 日志服务，供开发调试使用
