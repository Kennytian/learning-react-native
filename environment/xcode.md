# xcode 环境配置

## ruby 配置

## gem 介绍

## 安装 CocoaPos 配置

## 安装 pod setup 配置

## pod 常用命令

## 配置 Podlist
`Podfile` 是 iOS 下包管理工具，类似于 JavaScript 里的 `npm` 或 `yarn`。

#### 创建 `Podfile`
创建 `Podfile` 有两种方式：
* 进入 Terminal，在 iOS 项目的根目录，执行 `touch Podfile`
*或者*
* 进入 Terminal，在 iOS 项目的根目录，执行 `pod init`

#### 配置 `Podfile`
一个简单的 `Podfile`
```
target 'MyApp'
pod 'AFNetworking', '~>3.0.4'  # AFNetworking 版本必须 >=3.0.4 并且 <3.1.0
```
一个复杂的 `Podfile`
```
platform :ios, '9.0'  # 指定平台与版本
inhibit_all_warnings!  # 全局禁止显示警告
target 'MyApp' do
# Pods for MyApp
pod 'Fabric', '~>1.6.0'  # Fabric 版本必须 >=1.6.0 并且 <1.7.0
pod 'ObjectiveSugar', '>=1.0.0'  # ObjectiveSugar 版本必须 >=1.0.0
pod 'AFNetworking','<=4.0'  # AFNetworking 版本必须<=4.0
  # Pods for testing
  target 'MyAppTests' do  # MyAppTests 目录下的引用 
    inherit! :search_paths
  end
  # Pods for testing
  target 'MyAppUITests' do # MyAppUITests 目录下的引用 
    inherit! :search_paths
  end
end
```

参考文档
http://www.jianshu.com/p/8af475c4f717
http://www.devzhang.com/14557860422170.html

## Podlist.lock 用途

## xcworkspace 用途



