## 学习 Redux 原理

### 前言

redux 基本思想是保证数据是单向流动,同时便于控制,使用,测试.
redux 不依赖于做任何库, 只要 subscribe 相应库的内部方法, 就可以保证数据流动的一致性.

### createStore 介绍

#### 入门 demo

<pre><code>// 首先定义一个改变数据的plain函数, 成为reducer
function count(state, action) {
    let defaultState = { year: 2016 };

    state = state || defaultState;
    switch(action.type) {
        case 'add':
            return { year: state.year + 1 };
        case 'sub':
            return { year: state.year - 1 };
        default:
            return state;
    }
}
//1
// store 创建
let createStore = require('redux').createStore;
let store = createStore(count);
//
// store里面的数据 发生改变时, 触发回调函数
store.subscribe(function() {
    console.log('the year is:', store.getState().year);
});
//1
// action: 触发state改变的唯一方式
let action1 = { type: 'add' };
let action2 = { type: 'add' };
let action3 = { type: 'sub' };
//1
//改变store里面的方法
store.dispatch(action1); //the year is: 2017
store.dispatch(action2); //the year is: 2018
store.dispatch(action3); //the year is: 2017</code></pre>

### 挖掘 createStore 实现

首先看 createStore 到底都返回什么内容:<pre><code>
export default function createStore(reducer, initialState) {
...
return {
dispatch,
subscribe,
getState,
replaceReducer
}
}</code></pre>

* dispatch: 用于 action 的分发, 改变 store 里面的 state
* subscribe: 注册 listener, store 里面 state 发生改变后, 执行该 listener
* getState: 读取 state
* replaceReducer: 替换 reducer, 改变 state 修改的逻辑

<pre><code>
export default function createStore(reducer, initialState) {
    // 这些都是闭包变量
    let currentReducer = reducer;
    let currentState = initialState;
    let listeners = [];
    let isDispatching = false;

    // 返回当前的state
    function getState() {
        return currentState;
    }

    // 注册listener, 同时返回一个取消事件注册的方法
    function subscribe(listener) {
        listeners.push(listener);
        let isSubscribed = true;

        return function unsubscribe() {
            if(!isSubscribed) {
                return;
            }

            isSubscribed = false;
            let index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        }
    }

    // 通过action改变state, 然后执行subscribe注册的方法
    function dispatch(action) {
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        } finally {
            isDispatching = false;
        }
        listeners.slice().forEach(listener => listener());
        return action;
    }

    // 替换reducer, 修改state变化的逻辑
    function replaceReducer(nextReducer) {
        currentReducer = nextReducer;
        dispatch({ type:ActionTypes:INIT });
    }

    // 初始化时, 执行内部一个dispatch, 得到初始化state
    dispatch({ type:ActionTypes.Init });
}
</code></pre>
