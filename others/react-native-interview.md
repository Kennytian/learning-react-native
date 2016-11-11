### React Native Interview

_其实这不是面试题，就是一些 React Native 的知识点。如果你用来 interview，请一定反复验证，有错的话，记得 PR 给我，谢谢！_


#### Redux
>**同步action与异步action最大的区别是什么？**
>同步只返回一个普通action对象。而异步操作中途会返回一个promise函数。当然在promise函数处理完毕后也会返回一个普通action对象。thunk中间件就是判断如果返回的是函数，则不传导给reducer，直到检测到是普通action对象，才交由reducer处理。