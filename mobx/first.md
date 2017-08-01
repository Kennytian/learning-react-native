## Mobx 学习

Mbox 常见用法： 

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