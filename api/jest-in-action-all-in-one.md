## 单元测试之项目实战

### 什么是单元测试

单元测试（unit testing），是指对软件中的最小可测试单元进行检查和验证。

### 单元测试的好处

* 提高代码质量（不用多说）
* 减少强耦合（能运行单元测试的代码，一定是低耦合的）
* 减少调试时间（不用跳转多个页面，就能验证任何地方的功能）

### 前端单元测试框架

* Qunit: 该框架诞生之初是为了 `jQuery` 的单元测试，后来独立出来不再依赖于 `jQuery` 本身，但是其身上还是脱离不开 `jQuery` 的影子。
* Jasmine: `Behavior-Drive development(BDD)`风格的测试框架，在业内较为流行,功能很全面，自带 `assert、mock` 功能。
* Mocha: node 社区大神 tj 的作品，可以在 `node` 和 `browser` 端使用，具有很强的灵活性，可以选择自己喜欢的断言库，选择测试结果的 `report`。
* Intern: 看官方介绍该测试框架功能极其全面，似乎囊括了业内跟测试相关的所有功能。
* AVA 是`Mocha`的替代品。虽然 `JavaScript` 是单线程，但在 `Node.js` 里由于其异步的特性使得 `I/O` 可以并行。`AVA` 利用这个优点让你的测试可以并发执行，这对于 `I/O` 繁重的测试特别有用。
* Jest 是 `Facebook` 开源的 JS 单元测试框架，具有 `auto mock`、自带 `mock API`、前端友好（集成 JSDOM）、环境隔离和**快照**等特点和优势。

### 为什么选择 Jest

* 开箱即用，配置简单，功能强大。
* 使用 React 相关技术栈的团队，再用一个 Facebook 的全家桶的技术也无妨。

### 如何配置 Jest

* 【必选】安装依赖，`yarn add --dev jest`，是不是非常简单，就一句话。
* 【可选】如果你习惯了写 ES6 的代码，需要安装 `yarn add --dev babel-preset-env`
* 【可选】如果安装了上一步，这一步就变成必选操作了，那就是在项目根目录创建 `.babelrc` 文件，并在里面配置`"presets": ["env"]`
* Jest **约定**把所有的单元测试文件放在一个叫`__tests__`的目录里，所以在项目根目录创建一个。当然你可以放在别的目录里，只需要在 package.json 另写配置代码即可。

### Jest 体验

1.在 `__tests__` 目录下创建一个 `num.js`，添加如下代码：

```
const sum = (a, b) => {
  return a + b;
}

export { sum };
```

2.在 `__tests__` 目录下创建一个 `num.test.js`，添加如下代码：

```
import { sum } from './num';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

3.运行 `yarn test`

```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```

OK，就这么简单。

### 网络请求单元测试怎么写？

1.在 `__tests__` 目录下创建一个 `network.js`，添加如下代码：

```
import fetch from 'isomorphic-fetch';

const getMoviesFromApi = async () => {
  try {
    let response = await fetch('https://facebook.github.io/react-native/movies.json');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export { getMoviesFromApi };
```

2.在 `__tests__` 目录下创建一个 `network.test.js`，添加如下代码：

```
import { getMoviesFromApi } from './network';

test('get movies list', () => {
  return getMoviesFromApi().then(list => {
    expect(list).not.toBe(null);
  });
});
```

### 单元测试怎么运行

* 在 package.json 的 script 里配置如下代码：

```json
"scripts": {
    "test": "./node_modules/.bin/jest"
}
```

* 在项目根目录命令行执行：`yarn test -u`

```
PASS  ./network.test.js
✓ get movies list (1000ms)
```

如果结合一些 IDE，还能更直观的看到结果：
![image](https://user-images.githubusercontent.com/2621619/39504077-ebfc67c6-4d8e-11e8-9af6-bd8516e8f14b.png)

### React Component 怎么写？

下面是一个简单的「数据加载失败，请重试」的控件，代码如下：

* LoadFailed.js

```javascript
import React, { PropTypes, PureComponent } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 14,
    color: "#333"
  }
};

class LoadFailed extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    style: PropTypes.object,
    textStyle: PropTypes.object
  };

  static defaultProps = {
    onPress: null,
    text: "数据加载失败，请重试",
    style: null,
    textStyle: null
  };

  onPress = () => {
    this.props.onPress && this.props.onPress();
  };

  render() {
    const { text, style, textStyle } = this.props;
    const btnStyle = StyleSheet.flatten([styles.container, style]);
    const txtStyle = StyleSheet.flatten([styles.text, textStyle]);
    return (
      <TouchableOpacity onPress={this.onPress} style={btnStyle}>
        <Text style={txtStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default LoadFailed;
```

### React Component 单元测试怎么写？

* LoadFailed.test.js

```javascript
import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import LoadFailed from "../LoadFailed";

it("LoadFailed 默认显示，耗时：", () => {
  const tree = renderer.create(<LoadFailed />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('LoadFailed text="数据加载失败，点击重试" 显示，耗时：', () => {
  const tree = renderer
    .create(<LoadFailed text="数据加载失败，点击重试" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("LoadFailed 点击 onPress，耗时：", () => {
  const onPressMock = jest.fn();
  const component = renderer
    .create(<LoadFailed onPress={onPressMock} />)
    .getInstance();
  component.onPress();
  expect(onPressMock).toBeCalled();
});
```

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

### Redux Action 单元测试怎么写?

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

### Redux Reducer 怎么写？

* news.js

```javascript
export function newsDetail(state = {}, { type, data }) {
  switch (type) {
    case "NEWS_DETAIL":
      return { ...state, ...data };
    default:
      return state;
  }
}
```

### Redux Reducer 单元测试怎么写

* `__tests__/news.test.js`

```javascript
import { newsDetail } from "../news";

describe("News reducer", () => {
  it("newsDetail has a default store", () => {
    const received = newsDetail(undefined, { type: "unexpected" });
    const expected = {};
    expect(received).toEqual(expected);
  });

  it("newsDetail can handle 'NEWS_DETAIL'", () => {
    const received = newsDetail(
      {},
      {
        type: "NEWS_DETAIL",
        data: {
          title: "Redux Reducer 单元测试",
          viewCounts: 40
        }
      }
    );
    const expected = {
      title: "Redux Reducer 单元测试",
      viewCounts: 40
    };
    expect(received).toHaveProperty("title");
    expect(received).toEqual(expected);
  });
});
```

### Q & A

* Jest 有中文文档吗？
* 答：有，请访问 https://facebook.github.io/jest/zh-Hans/

* 测试网络请求时报`fetch is undefined` 之类的错误，怎么处理？
* 答：添加这行就可以了，`import fetch from 'isomorphic-fetch'`。

* 如果在单元测试文件中禁用 ESLint？
* 答：

  ```
  /*global test,expect*/
  /*eslint no-undef: "error"*/

  import { getMoviesFromApi } from './network';
  ```

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

* 只有 toBe、toEqual 可以用吗？
* 答：不是的，本文中还使用一些如：toBeCalled、toHaveProperty 等方法。更多 API，请参考 http://facebook.github.io/jest/docs/api.html

* 文中提到的 IDE 是什么？
* 答： WebStorm

### 参考文档：

* http://facebook.github.io/jest/docs/getting-started.html
* http://zhenhua-lee.github.io/tech/test.html
* http://www.10tiao.com/html/223/201701/2651232323/1.html
