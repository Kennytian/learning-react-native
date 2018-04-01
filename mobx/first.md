## MobX 学习

### MobX 基础知识

1.  `Array.isArray(observable([]))` _// false_, `observable` 「包」过的值，就会变成 `observable` 类型，不在原来数据类型。
2.  `Array.isArray(observable([]).slice())` `// true`， `observable([])` 要变回 `array` 类型，需要 `observable([]).slice()` 处理。
3.  不同于 `sort` 和 `reverse` 函数的内置实现，`observableArray.sort` 和 `observableArray.reverse` 不会改变数组本身，而只是返回一个排序过/反转过的**拷贝**

### MobX 常见用法：

引用包名：

`import { observer } from 'mobx-react/native';`

实际代码：

```js
export default observer(props => {
  const { rowData, tabIndex, rowID } = props;

  switch (rowData.type) {
    case a:
      // return a component
      break;
    case b:
      // return b component
      break;
    case c:
      // return c component
      break;
    default:
      return null;
  }
});
```
