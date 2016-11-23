#### Immutable 实战分析1（filter、fromJS、includes、first）

```javascript
let currentConversation = props.conversation
if (!currentConversation && conversations) {
  currentConversation = conversations.filter((item)=> {
    if (item && item.members) {
      return fromJS(item.members).includes(props.remoteUser.user.id.toString())
    } else {
      return false
    }
  }).first()
}
```
* `filter` 过滤集合中需要的数据, 详解: https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L1977
* `fromJS` 将 JSON 对象转换为 Immutable 对象, 源码:: https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L86
* `includes`(同contains) 判断是否包含某个值, 源码: https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L1763
* `first` 返回集合中的第一个值, 源码: https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L1769

#### Immutable 实战分析2（fromJS、is）

```javascript
shouldComponentUpdate(nextProps, nextState) {
    let sameState = is(fromJS(this.state), fromJS(nextState));
    let sourceSame = is(fromJS(nextProps.source), fromJS(this.props.source));
    let metaSame = is(fromJS(nextProps.meta), fromJS(this.props.meta));
    let loadingSame = is(fromJS(nextProps.isLoading), fromJS(this.props.isLoading));
    return !sameState || !sourceSame || !metaSame || !loadingSame
  }
```
* `fromJS` 将 JSON 对象转换为 Immutable 对象, 源码:: https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L86
* `is` 判断两个对象是否相等，源码:：https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L109

```javascript
state => state.getIn(['messages', 'isDone'])
state => state.get('auth')
```
* `getIn` 取出树形结构中 messages > isDone 的值，源码:：https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L1783
* `get` 用 key 取值，源码:：https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L1752




