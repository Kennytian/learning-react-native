# React Native 坑大发

## 10. 魅族 Meizu m2 note / 魅族 Meizu MX4 / 华为 Huawei Mate 7 / 华为 Huawei P8 / 小米 Redmi Note 2 / 乐视 Letv X500 无法安装

以上手机安装apk时, **可能会**报一个 `com.android.ddmlib.InstallException: Unable to upload some APKs`, 我们需要修改如下几个位置:

 * 需要将 `android/build.gradle` 里的 `gradle:1.3.1` 改为 `gradle:1.2.3`
