# React Native 坑大发

欢迎您帮忙纠错, 一起帮助更多的人, QQ：2225226

## 13. iOS Release 版运行正常, 但 Android Release 版一打开就 crash
先把 Android 端改为 Debug 打包, 然后调试起来, 发现报大红页错误, 显示 "`synatax error attempted to redefine property counselorCompany`"
<pre><code>export default StyleSheet.create(Object.assign({}, commonStyle, {
 counselorCompany: {
   marginLeft: 10,
   fontSize: 11,
   color: '#666'
 },</code></pre>

果然在某样式文件的底部又发现定义一个名为 **counselorCompany** 的属性, 直接删除（合并）, 验证 Android Release/Debug 包都运行正常。_为什么 iOS 不会报错, 难道兼容性好些?_

歪果盆友也有遇到这个问题的, https://github.com/facebook/react-native/issues/4032

## 12. 开发时 Java Module 不能使用方法重载
在 C# / Java 中方法重载是非常常见的, 但在如果开发 Java Module 使用了重载, 就会报: [method name already registered 错误](https://github.com/Kennytian/learning-react-native/blob/master/components/develop_native_modules.md#24-当心重载陷阱), 解决办法就是换个方法名, 建议不要在方法名后面加2、3之类的, 不专业 :)

## 11.（接第10条）虽然安装成功, 但icon图标不显示

好不容易安装成功, 但icon图标不显示, 后来发现所有用 `<Image source={require('')}/>` 显示的图片的地方都不显示图片了, 不管什么 Android 手机都不显示, **真想砸电脑啊!!!**  冷静一会儿之后，要不我换个思路试试:

* 改回原来的 `gradle:1.3.1` 打包, 只生成 apk 文件（`./gradlew assembleRelease`）, 先不安装。
* 将 apk 文件拷到报 `Unable to upload some APKs` 错误的手机里, 点击 apk, 成功安装, require 方式的图片正常显示。


## 10. 魅族 Meizu m2 note / 魅族 Meizu MX4 / 华为 Huawei Mate 7 / 华为 Huawei P8 / 小米 Redmi Note 2/3 / 乐视 Letv X500 / 华为荣耀X2(GEM-703L) 无法安装

开发调试期间, 以上手机安装apk时, **可能会**报一个 `com.android.ddmlib.InstallException: Unable to upload some APKs`, 我们需要修改如下几个位置:

 * 需要将 `android/build.gradle` 里的 `gradle:1.3.1` 改为 `gradle:1.2.3`
 * 经过测试**无需**将 `android/gradle/wrapper/gradle-wrapper.properties` 文件里的 `gradle-2.4-all.zip` 改为 `gradle-2.2-all.zip`（如果Termial提示要改为2.2, 不用管它）

## 下面的9条我忘了 :D