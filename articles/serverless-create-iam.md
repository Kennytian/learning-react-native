## Serverless 入门（一） - 创建 IAM

学习 Serverless 可以选 AWS Lambda，也可以选择 Microsoft Azure 或 Google Cloud Platform 等平台。

因为我有 AWS 账号，所以就接合它来开始学习。

## 创建 IAM

#### 1. 登录 AWS

地址：https://console.aws.amazon.com/console/home

#### 2. 查找服务

输入 `IAM` ，会出来「管理用户访问与加密密钥」，点击进入。或者直接进入：https://console.aws.amazon.com/iam/home?#/users

#### 3. 创建用户

![](https://upload-images.jianshu.io/upload_images/16119129-6af8e06c1856b4b3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 4. 填写用户名

![](https://upload-images.jianshu.io/upload_images/16119129-0da2fca8bb9a8db6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 5. 设置权限

选中「直接附加现有策略」和 「AdministratorAccess」
![](https://upload-images.jianshu.io/upload_images/16119129-0ea8becdbda07b74.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 6. 创建

跳过「添加标签（可选）」 -> 创建用户

#### 7. 成功

在本地笔记或其它地方记好`用户`、`访问密钥 ID`、`私有访问密钥`
![](https://upload-images.jianshu.io/upload_images/16119129-582c89bc5926c6e7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 相关文章

* Serverless 入门（一） - 创建 IAM https://www.jianshu.com/p/9fb731a799e2
* Serverless 入门（二） - HelloWord https://www.jianshu.com/p/ddf2ffda5f63
* Serverless 入门（三）- 初始项目解读 https://www.jianshu.com/p/8baba2a8fe9f
* Serverless 入门（四）- 如何调试 https://www.jianshu.com/p/58d30915de8a
