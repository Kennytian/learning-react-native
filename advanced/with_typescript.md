## 用 TypeScript 来开发 React Native

### 配置 TSLint
下面的操作都是在项目当前目录下完成：
* 安装 TSLint
```
yarn add tslint typescript --dev
# or
npm install tslint typescript --save-dev
```

* 初始化 TSLint，`node_modules/.bin/tslint --init`，正常情况下会在项目根目录下创建一个 tslint.json 文件
* 添加 TSLint 规则，tslint.json 找到 `rules` 节点，添加需要的规则。如例所示：
```
"rules": {
    "object-literal-sort-keys": false,
    "quotemark" :false
},
```
更多规则：https://palantir.github.io/tslint/usage/configuration/

* 在 package.json 里配置 TSLint，`./APP/*.ts*` 就是你要检查的目录及文件，如例所示：
```
"scripts": {
    "lint": "tslint --fix ./App/*.ts*"
}
```
这
--------------------推广分隔线--------------------

欢迎您帮忙纠错, 一起帮助更多的人，学习交流 QQ 群：[413381701](http://shang.qq.com/wpa/qunwpa?idkey=3b9474dacbf35e4a9659e89399758406e510e5b8a3f81109f7d07efaadc6056d)
