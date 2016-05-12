# React Native 坑大发

## 10. 魅族 Meizu m2 note / 魅族 Meizu MX4 / 华为 Huawei Mate 7 / 华为 Huawei P8 / 小米 Redmi Note 2 / 乐视 Letv X500 无法安装

开发调试期间, 以上手机安装apk时, **可能会**报一个 `com.android.ddmlib.InstallException: Unable to upload some APKs`, 我们需要修改如下几个位置:

 * 需要将 `android/build.gradle` 里的 `gradle:1.3.1` 改为 `gradle:1.2.3`
 * 经过测试**无需**将 `android/gradle/wrapper/gradle-wrapper.properties` 文件里的 `gradle-2.4-all.zip` 改为 `gradle-2.2-all.zip`（如果Termial提示要改为2.2, 不用管它）


## 11. （接第10条）虽然安装成功, 但icon图标不显示

好不容易安装成功, 但icon图标不显示, 后来发现所有用 `<Image source={require('')}/>` 显示的图片的地方都不显示图片了, 不管什么 Android 手机都不显示, **真想砸电脑啊!!!**  冷静一会儿之后，要不我换个思路试试:

* 改回原来的 `gradle:1.3.1` 打包, 只生成 apk 文件（`./gradlew assembleRelease`）, 先不安装。
* 将 apk 文件拷到报 `Unable to upload some APKs` 错误的手机里, 点击 apk, 成功安装, require 方式的图片正常显示。

欢迎您帮忙纠错, 一起帮忙更多的人, QQ：2225226
