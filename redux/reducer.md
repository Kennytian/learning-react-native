# Reducer 技术要点

`Action` 只描述了**有事情发生了**这一事实，而 `reducer` 要做的事就是如何更新 `state`

## 设计 State 结构
在 `Redux` 应用中，所有的 `state` 都被保存在一个单一对象树中，建议设计一个良好的数据组织结构。如何才能以最简的形式把应用的 `state` 用对象描述出来？

以酒店应用为例，需要保存两个不同的内容：
* 当前筛选后酒店列表的过滤条件
* 默认酒店列表

通常，这个 `state` 树还需要存放其它一些 `UI` 数据，但尽量把这些数据与 `UI` 相关的 `state` 分开。

```
{
  visibilityFilter: 'SHOW_ALL',
  hotels:[
  {
    text: '公寓',
    isShow: true,
  },
  {
    text: '客栈',
    isShow: false
  }]
}
```

> ### 处理 `Reducer` 关系时的注意事项
> 开发复杂的应用时，不可避免会有一些数据相互引用。建议你尽可能地把 `state` 范式化，不存在嵌套。
> 把有数据放到一个对象里，每个数据以 ID 为主键，不同数据相互引用时通过 ID 来查找。
> 把应用的 `state` 想像成数据库。
> 例如，实际开发中，在 state 里同时存放 `hotelsById: { id -> hotel } 和 hotels: array<id>` 是比较好的方式。

## 处理单个 Action
`reducer` 就是一个函数，接收旧的 `state` 和 `action`，返回新的 `state`

`(previousState，action) => newState`

之所以称作 `reducer` 是因为它将被传递给`Array.prototype.reduce(reducer，?initialValue)`方法。保持 `reducer` 纯净是非常重要的，**永远不要在 `reducer` 里做这些操作**:
* 修改传入参数
* 执行 `API` 请求和路由跳转等
* 调用非纯属函数，如 `Date.now()` 等

只需要谨记 `reducer` 一定要保持纯净，**只要传入参数一样，返回必须一样。没有特殊情况，没有副作用，没有API请求、没有修改参数、单纯执行计算**。

```
function hotelApp(state = initialState, action) {
    // 这里暂不处理任何 action，
    // 仅返回传入的 state。
    return state;
}
```

现在可以处理 `SET_VISIBILITY_FILTER` , 需要做的只是改变 `state` 中的 `visibilityFilter`
```
function hotelApp(state = initialState, action) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            });
        default:
            return state;
    }
}
```

**注意:**

1. **不要修改 `state`**, 使用 [Object.assign()](https://cnodejs.org/topic/56c49662db16d3343df34b13) 新建一个副本( `assign() 可以快速的复制一个或者多个对象到目标对象中` )。 不能 `Object.assign(state, {visibilityFilter: action.filter})`, 因为它会改变第一个参数的值。**必须把第一个参数设置为空对象**, 即: `Object.assign({}, {visibilityFilter: action.filter})`

2. 在 `default` 情况下返回旧的 `state`。遇到未知的 `action` 时, 一定要返回旧的 `state`

## 处理多个Action
还有两个 `action` 需要处理, 我们先处理 `ADD_HOTEL`.
```
function hotelApp(state = initialState, action) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter,
            });
        case ADD_HOTEL:
            return Object.assign({}, state, {
                text: action.text,
                isShow: false
            });
        default:
            return state;
    }
}
```

`COMPLETE_TODO` 也很好理解：
```
case COMPLETE_TODO:
  return Object.assign({}, state, {
    todos: [
      ...state.todos.slice(0, action.index),          //比如: 0 ~ 5
      Object.assign({}, state.todos[action.index], {  //此处为6
        completed: true
      }),
      ...state.todos.slice(action.index + 1)          //后面就是7
    ]
  });
```
我们不能直接修改却要更新数组中指定的一项数据，要先把**前面**和**后面**都切开。**时刻谨记永远不要在克隆 `state` 前修改它**。

`combineReducers` 接收一个对象, 可以把所有顶级的 `reducer` 放到一个独立的文件中, 通过 `export` 暴露出每个 `reducer` 函数,然后使用 `import * as reducer` 得到一个以它们名字作为 key 的 object:
```
import { combineReducers } from 'redux';
import * as reducers from './reducers';

const hotelApp = combineReducers(reducers);
```

### 知识补充:
```
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
```

```
var str = "Hello happy world!"
str.slice(6); //happy world!

var str = "Hello happy world!"
str.slice(6, 11) //happy
```


### 纠错
- QQ:2225226

### 相关文档
* [React Native 学习旅程](https://github.com/Kennytian/learning-react-native/blob/master/README.md)
* [Redux 之 Action](https://github.com/Kennytian/learning-react-native/blob/master/redux/action.md)
* [Redux 之 Reducer](https://github.com/Kennytian/learning-react-native/blob/master/redux/reducer.md)
* [Redux 之 Store](https://github.com/Kennytian/learning-react-native/blob/master/redux/store.md)
