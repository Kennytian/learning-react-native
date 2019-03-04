## 开发 iOS 内购遇到的坑

#### 问题1：读取的内购商品列表不是添加时的顺序
解决步骤：由于我是使用的 [react-native-iap](https://github.com/dooboolab/react-native-iap) 组件开发的，所以使用的是 JavaScript 数组排序，代码如下：
```
const products = await RNIap.getProducts(itemSkus);
const orderedProducts = products.sort((left, right) => left.price - right.price);
```

这样就是按价格从低到高排序了。

#### 问题2：无法连接到 iTunes Store
**解决步骤：** 进入 WiFi，找到「配置 DNS」，设置为「手动」，在最顶部添加「114.114.114.114」或「8.8.8.8」，记得点右上角「存储」

#### 问题3：App 内购时，提示说：此时没有权限在Sandbox购买此InApp
解决步骤：
1. 打开 https://appstoreconnect.apple.com/access/testers
2. 添加 Sandbox 测试账号，注册时一定要填写`真实邮箱`，点击邀请，然后登录刚刚的邮箱，验证地址
3. 就可以免费测试自己 APP 的内购项了。
