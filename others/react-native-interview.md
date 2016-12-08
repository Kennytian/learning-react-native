### React Native Interview

_其实这不是面试题，就是一些 React Native 的知识点。如果你用来 interview，请一定反复验证，有错的话，记得 PR 给我，谢谢！_

#### React Native
>**Q1: Props 和 State 变化后会触发页面生命周期中的哪些方法？执行顺序是什么？**

Props Change | State Change
-----|-----
compoentWillReceiveProps | 
shouldComponentUpdate | shouldComponentUpdate
componentWillUpdate | componentWillUpdate
render | render
componentDidUpdate | componentDidUpdate

#### Redux
>**Q1: 同步 action 与异步 action 最大的区别是什么？**

>A1: 同步只返回一个普通 action 对象。而异步操作中途会返回一个 promise 函数。当然在 promise 函数处理完毕后也会返回一个普通 action 对象。thunk 中间件就是判断如果返回的是函数，则不传导给 reducer，直到检测到是普通 action 对象，才交由 reducer 处理。