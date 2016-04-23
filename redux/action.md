#Action 技术要点
Action是把数据从应用传到store的有效payload(载荷)，Action是store数据的**唯一**来源。

一般会通过store.dispatch()将action传到store。

action内使用字符串类似的type字段来表示要执行的动作，但大型应用就要放到单独的action文件里，如：```import {LIST_DATA,ADD_DATA,REMOVE_DATA} from '../action-types'```

尽量减少在action中传递的数据

##Action创建函数
Action创建函数就是生成action方法，"action"和"action创建函数"很容易混在一起，注意区分。
Redux中的action创建函数仅返回一个action对象，如下：
<pre><code>function addData(text) {
    return {
        type:ADD_DATA,
        text
    };
}
</code></pre>
只需要把**action创建函数**的结果传给```dispatch()```方法就可实例化```dispatch```，如：```dispatch(addData(text))```。

或者创建一个**被绑定的action创建函数**来自动```dispatch```：
<pre><code>
let boundAddData = (text) => dispatch(addData(text));
</code></pre>
然后直接调用：
<pre><code>boundAddData(text);</code></pre>

store里能直接通过`store.dispatch()`调用`dispatch()`方法，但多数情况下使用react-redux的connect()来调用。

`bindActionCreators()`更是可以自动把多个**action创建函数**绑定到`dispatch()`方法上。

### 纠错
- QQ:2225226

### 相关文档
* [React Native 学习旅程](https://github.com/Kennytian/learning-react-native/blob/master/README.md)
* [Redux 之 Action](https://github.com/Kennytian/learning-react-native/blob/master/redux/action.md)
* [Redux 之 Reducer](https://github.com/Kennytian/learning-react-native/blob/master/redux/reducer.md)
