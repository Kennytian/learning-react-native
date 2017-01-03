#Action 技术要点

 `action`  是把数据从应用传到 `store` 的有效 `payload` (载荷)， `action`  是 `store` 数据的**唯一**来源

一般会通过 `store.dispatch()` 将  `action`  传到 `store`

`Redux` 里的  `action`  一般有两个概念，一是指 `Action Types`，二是指 `Action Creator`

##Action Types

 `action`  内使用字符串类似的 `type` 字段来表示要执行的动作，但大型应用就要放到单独的  `action`  文件里

如：`import { LIST_DATA, ADD_DATA, REMOVE_DATA } from '../action-types'`


##Action Creator 

`Redux` 中的 `action creator` 函数仅返回一个  `action`  对象，如下：
```
function addData(text) {
    return {
        type:ADD_DATA,
        text
    };
}
```
只需要把 **`action creator`** 的结果传给 ```dispatch()``` 方法就可实例化```dispatch```，如：```dispatch(addData(text))```。

或者创建一个**被绑定的 `action creator`** 来自动 ```dispatch```：
```
let boundAddData = (text) => dispatch(addData(text));
```
然后直接调用：
`boundAddData(text);`

store 里能直接通过 `store.dispatch()` 调用 `dispatch()` 方法，但多数情况下使用`react-redux`的 `connect()` 来调用。

`bindActionCreators()`更是可以自动把多个** `action creator` **绑定到`dispatch()`方法上。

**尽量减少在  `action`  中传递的数据**

### 纠错
- QQ:2225226

### 相关文档
* [React Native 学习旅程](https://github.com/Kennytian/learning-react-native/blob/master/README.md)
* [Redux 之 Action](https://github.com/Kennytian/learning-react-native/blob/master/redux/action.md)
* [Redux 之 Reducer](https://github.com/Kennytian/learning-react-native/blob/master/redux/reducer.md)
* [Redux 之 Store](https://github.com/Kennytian/learning-react-native/blob/master/redux/store.md)
