## 用 TypeScript 来开发 React Native

### 配置 tsconfig.json
- 安装 TypeScript
```
yarn add typescript
# or
npm install typescript
```

- 在命令行里：
```shell
node_modules/.bin/tsc --init --pretty --sourceMap --target es6 --outDir ./App --module commonjs --jsx react-native
```

- 添加 `src/` 目录到 `include` 节点里。

- **如果**项目中使用了decorator(就是 @connect 之类的)，需要打开 `"experimentalDecorators": true`

个人项目 `tsconfig.json` 最终配置
```json
{
  "compileOnSave": true,
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "jsx": "react-native",
    "sourceMap": true,
    "outDir": "./App",
    "rootDir": "./src/App",
    "watch": true,
    "strict": true,
    "esModuleInterop": true,
    "experimentalDecorators": true
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx"
  ],
  "exclude": [
    "App",
    "node_modules"
  ]
}
```

更多配置：http://www.typescriptlang.org/docs/handbook/compiler-options.html

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
