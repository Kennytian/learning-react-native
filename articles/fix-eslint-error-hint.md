## 修改项目中的 ESLint 错误

### 提示 `import/named`错误

> 现象：

代码 `import { OpenTradeStock } from '../../components/open-trade-stock';` 中的 `OpenTradeStock` 处提示`import/named` 错误

> 原因：

open-trade-stock.js 文件使用了 ES5 的写法，`module.exports = { OpenTradeStock }`

> 解决:

将 open-trade-stock.js 文件改用 ES6 的写法，`export = { OpenTradeStock }`

### 方法名下划线

Bad

* `_getData()`

Good

* `getData()`

### 对象解构

Bad

* `const selectButton = this.state.selectButton`

Good

* `const { selectButton } = this.state;`

### 数组解构

Bad

* `const item = items[0];`

Good

* `const [item] = items;`

### 解构并设置初始值

Bad

* `let pagination = this.props.get_correct_stocks_list && this.props.get_correct_stocks_list.pagination || []`

Good

```javascript
const { get_correct_stocks_list = {} } = this.props;
const { pagination = [] } = get_correct_stocks_list;
```

### 解构 + 设置初始值 + 重命名

Bad

* `let pagination = this.props.get_correct_stocks_list && this.props.get_correct_stocks_list.pagination || []`

Good

```diff
- const { get_correct_stocks_list = {} } = this.props;
+ const { get_correct_stocks_list: stockList = {} } = this.props;
const { pagination = [] } = stockList;
```

### 构造函数

Bad

```javascript
constructor(props) {
  super(props);
}
```

Good

* `如果是空构造函数，就需将其删除`

### 方法绑定

Bad

```javascript
shouldGetNextData={this.shouldGetNextData.bind(this)}
```

Good

```javascript
shouldGetNextData = () => {};
...
shouldGetNextData={this.shouldGetNextData}
```

### 严格模式

Bad

* `'use strict';`

Good

* 将其删除，使用 ESLint

### 引入顺序（先 node_modules，后当前项目）

Bad

```javascript
import React, { PureComponent } from "react";
import ActionCreators from "../../actions";
import { bindActionCreators } from "redux";
```

Good

```javascript
import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import ActionCreators from "../../actions";
```

### 使用单引号

Bad

* `import navigate from "../../utils/navigate";`

Good

* `import navigate from '../../utils/navigate';`
