# Store 技术要点

[action](https://github.com/Kennytian/learning-react-native/blob/master/redux/action.md)用来描述"**发生了什么**"，使用[reducer](https://github.com/Kennytian/learning-react-native/blob/master/redux/reducer.md)来"**根据 action 更新 state**"的用法。

Store 就是把它们联系到一起, 职责如下：

* 维持应用的 state
* 提供`getState()`方法获取 state
* 提供`dispatch(action)`方法更新 state
* 提供`subscribe(listenr)`注册监听

**Redux 应用只能有一个 Store**, 当需要拆分处理数据的逻辑时, 应使用[reducer 组合](https://github.com/Kennytian/learning-react-native/blob/master/redux/reducer.md#处理多个action)而不是创建多个 store。

根据已有的 reducer 来创建 store 非常容易, 使用`combineReducers()`将多个 reducer 合并成为一个. 现在将其导入, 并传递`createStore()`.

<pre><code>import { createStore } from 'redux';
import hotelApp from './reducers';
let store = createStore(hotelApp);
</code></pre>

`createStore()`的第二个参数可以设置初始化状态, 这对开发同构应用时非常有用, 可以用于把服务端生成的 state 转变后在浏览器端传给应用.

<pre><code>let store = createStore(hotelApp, window.STATE_FROM_SERVER);</code></pre>

### 发起 Actions

现在我们创建好了 store

<pre><code>import { addHotel, orderHotel, setVisibilityFilter, VisibilityFilter } from './actions';

//打印初始化状态
console.log(store.getState());

//监听state更新时, 打印日志
//注意subscribe()返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() => console.log(store.getState()));

//发起一系列action
store.dispatch(addHotel('朝阳大酒店'));
store.dispatch(addHotel('东直门酒店'));
store.dispatch(addHotel('望京大酒店'));
store.dispatch(orderHotel(0));
store.dispatch(orderHotel(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.isShow));

//停止监听state更新
unsubscribe();
</code></pre>

### 纠错

* QQ:2225226

### 相关文档

* [React Native 学习旅程](https://github.com/Kennytian/learning-react-native/blob/master/README.md)
* [Redux 之 Action](https://github.com/Kennytian/learning-react-native/blob/master/redux/action.md)
* [Redux 之 Reducer](https://github.com/Kennytian/learning-react-native/blob/master/redux/reducer.md)
* [Redux 之 Store](https://github.com/Kennytian/learning-react-native/blob/master/redux/store.md)
