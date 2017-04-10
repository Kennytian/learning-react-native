## Jest 网络请求测试

欢迎您帮忙纠错, 一起帮助更多的人。 一起来学习交流React, QQ群：[413381701](http://shang.qq.com/wpa/qunwpa?idkey=3b9474dacbf35e4a9659e89399758406e510e5b8a3f81109f7d07efaadc6056d)

**_前端有很多知名 Unit Test 框架，经典有的`Qunit，Mocha，Jasmine，Intern`、新秀有`Jest，AVA` ，下面简单介绍各自特点。今天我着重分享 Jest，因为 React Native 天生就集成了这个框架。_**

### 框架简介
* Qunit: 该框架诞生之初是为了 `jQuery` 的单元测试，后来独立出来不再依赖于 `jQuery` 本身，但是其身上还是脱离不开 `jQuery` 的影子
* Jasmine: `Behavior-Drive development(BDD)`风格的测试框架，在业内较为流行,功能很全面，自带 `assert、mock` 功能
* Mocha: node 社区大神 tj 的作品，可以在 `node` 和 `browser` 端使用，具有很强的灵活性，可以选择自己喜欢的断言库，选择测试结果的 `report`
* Intern: 看官方介绍该测试框架功能极其全面，似乎囊括了业内跟测试相关的所有功能
* Jest 是 `Facebook` 开源的 JS 单元测试框架，具有 `auto mock`、自带 `mock API`、前端友好（集成JSDOM）、环境隔离等特点和优势
* AVA 是`Mocha`的替代品。虽然 `JavaScript` 是单线程，但在 `Node.js` 里由于其异步的特性使得 `I/O` 可以并行。`AVA` 利用这个优点让你的测试可以并发执行，这对于 `I/O` 繁重的测试特别有用

### Jest 安装
`React Native 0.37.0` 以后的版本已经自动集成了 `Jest`。_如果你使用的更早的版本(0.37以前)，只需要运行_，`npm install --save-dev jest`


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

3.运行 `npm run test`
```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```
OK，就这么简单。

### Jest 实战

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

3.运行 `npm run test`
```
PASS  ./network.test.js
✓ get movies list (1000ms)
```

4.补充说明：

4.0 本文只使用了 toBe 和 not.toBe 两个方法，更多 Jest API，请参考 http://facebook.github.io/jest/docs/api.html

4.1 如果报 `fetch is undefined` 之类的错误，添加这行就可以了，`import fetch from 'isomorphic-fetch'`

4.2 如果你的项目中使用 ESLint，并且把 `no-undef` 设置为 `error`，但 `__tests__` 目录下的代码想禁用这个规则，可以在 `network.test.js` 代码 `import` 代码前，添加如下代码：
```
/*global test,expect*/
/*eslint no-undef: "error"*/

import { getMoviesFromApi } from './network';
```

参考文档：

http://facebook.github.io/jest/docs/getting-started.html

http://zhenhua-lee.github.io/tech/test.html

http://www.10tiao.com/html/223/201701/2651232323/1.html
