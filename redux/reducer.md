# Reducer 技术要点

Action只描述了**有事情发生了**这一事实，而reducer要做的事就是如何更新state。

## 设计 State 结构
在Redux应用中，所有的state都被保存在一个单一对象树中，建议设计一个良好的数据组织结构。如何才能以最简的形式把应用的state用对象描述出来？

以酒店应用为例，需要保存两个不同的内容：
* 当前筛选后酒店列表的过滤条件
* 默认酒店列表

通常，这个state树还需要存放其它一些UI数据，但尽量把这些数据与UI相关的state分开。

<pre><code>{
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
}</code></pre>

> ### 处理 Reducer 关系时的注意事项
> 开发复杂的应用时，不可避免会有一些数据相互引用。建议你尽可能地把 state 范式化，不存在嵌套。
> 把有数据放到一个对象里，每个数据以 ID 为主键，不同数据相互引用时通过 ID 来查找。
> 把应用的 state 想像成数据库。
> 例如，实际开发中，在 state 里同时存放 `hotelsById: { id -> hotel } 和 hotels: array<id>` 是比较好的方式。



### 相关文档
* [React Native 学习旅程](https://github.com/Kennytian/learning-react-native/blob/master/README.md)
* [Redux 之 Action](https://github.com/Kennytian/learning-react-native/blob/master/redux/action.md)
* [Redux 之 Reducer](https://github.com/Kennytian/learning-react-native/blob/master/redux/reducer.md)





