## Jest 测试之 Redux Action

欢迎您帮忙纠错, 一起帮助更多的人。 一起来学习交流 React, QQ 群：[413381701](http://shang.qq.com/wpa/qunwpa?idkey=3b9474dacbf35e4a9659e89399758406e510e5b8a3f81109f7d07efaadc6056d)

### 如何配置 Jest

* 【必选】安装依赖，`yarn add --dev jest`，是不是非常简单，就一句话。
* 【可选】如果你习惯了写 ES6 的代码，需要安装 `yarn add --dev babel-preset-env`
* 【可选】如果安装了上一步，这一步就变成必选操作了，那就是在项目根目录创建 `.babelrc` 文件，并在里面配置`"presets": ["env"]`
* Jest **约定**把所有的单元测试文件放在一个叫`__tests__`的目录里，所以在项目根目录创建一个。当然你可以放在别的目录里，只需要在 package.json 另写配置代码即可。

### 关于 Redux

如果你想复习一下整个 Redux 知识或 Redux Actions 知识，请查看:

* http://cn.redux.js.org/
* http://cn.redux.js.org/docs/basics/Actions.html

### Redux Action 怎么写？

* `addTodo.js`

```javascript
export const ADD_TODO = "ADD_TODO";

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}
```

### Redux Action 单元测试怎么写

* `__tests__/addTodo.test.js`

```javascript
import { addTodo, ADD_TODO } from "../addTodo";

describe("actions", () => {
  it("should create an action to add a todo", () => {
    const text = "Finish docs";
    const expectedAction = {
      type: ADD_TODO,
      text
    };
    expect(addTodo(text)).toEqual(expectedAction);
  });
});
```

### 怎么运行单元测试

* 先在 package.json 的 script 里配置如下代码：

```json
"scripts": {
    "test": "./node_modules/.bin/jest"
}
```

* 在项目根目录命令行执行：`yarn test`

* 命令行里就会出现：

```
 PASS  __tests__/addTodo.test.js

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.26s
Ran all test suites.
```

### Q & A

* 为什么是安装 `babel-preset-env`
* 答：现如今不同的浏览器和平台 Chrome, Opera, Edge, Firefox, Safari, IE, iOS, Android, Node, Electron。不同的模块 "amd" ， "umd" ， "systemjs", "commonjs" 这些 ES 运行环境对 ES6, ES7, ES8 支持不一，有的支持好，有的支持差。为了充分发挥新版 ES 的特性，我们需要在特定的平台上执行特定的转码规则，说白了就像是按需转码的意思。 摘自[babel-preset-env 使用介绍](https://www.cnblogs.com/ye-hcj/p/7070084.html)

* 如何放把单元测试文件放在 `__tests__` 外的其它路径？
* 答：如果你取名叫 `otherFolder`, 那就在 package.json 根节点里添加如下代码：

```
"jest": {
    "testMatch": [
      "**/otherFolder/**/?(*.)(spec|test).js?(x)"
    ],
}
```

更多配置，请参考:

* https://facebook.github.io/jest/docs/zh-Hans/configuration.html
* https://facebook.github.io/jest/docs/en/configuration.html
