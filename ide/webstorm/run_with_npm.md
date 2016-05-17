# 巧用 WebStorm 的 npm debug 配置
## 需求
WebStorm 在开发 React Native 时能不能像其它 IDE 工具一样, 做到一键 build, 一键 Run 等更多一键操作呢?

经过网上查资料, 发现完全没有问题, 目前实现功能如下:

### 一键启动 Genymotion

注:下载和安装 Genymotion, 这里就不过多介绍了, 见谅!

按下图打开配置项

![编辑配置](https://raw.githubusercontent.com/Kennytian/learning-react-native/master/images/edit_config_menu.jpeg)

点击+号, 选择添加 npm 配置(`添加其它配置也行, 我只会 npm`)

![点击+号, 选择添加npm配置](https://raw.githubusercontent.com/Kennytian/learning-react-native/master/images/add_npm.jpeg)

配置启动 Genymotion 启动界面, 请按红色框操作(`选择help比较安全:-)`)

![配置启动 Genymotion 启动界面, 请按红色框操作](https://raw.githubusercontent.com/Kennytian/learning-react-native/master/images/lauch_genymotion.jpeg)

选择 Genymotion 路径, 默认在 `/Applications/Genymotion.app`

![选择 Genymotion 路径](https://raw.githubusercontent.com/Kennytian/learning-react-native/master/images/config_genymotion.jpeg)

点击几次 OK, 完成配置

![点击几次OK, 完成配置](https://raw.githubusercontent.com/Kennytian/learning-react-native/master/images/config_genymotion_ok.jpeg)

测试一下启动 Genymtion, 点一下右上角绿色箭头

![测试一下启动 Genymtion, 点一下右上角绿色箭头](https://raw.githubusercontent.com/Kennytian/learning-react-native/master/images/lauch_genymotion_ok.jpeg)
