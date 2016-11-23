## Immutable 实战

#### Immutable 实战1（filter、fromJS、includes、first）

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

 
#### Immutable 实战2（fromJS、is）

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

 
#### Immutable 实战3（getIn、get）
```javascript
state => state.getIn(['messages', 'isDone'])
state => state.get('auth')
```
* `getIn` 取出树形结构中 messages -> isDone 的值，源码:：https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L1783
* `get` 用 key 取值，源码:：https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L1752

 
#### Immutable 实战4（updateIn、set）
```javascript
let messageList = state.updateIn(['messages', action.message.id], (oldValue) => {
  if (oldValue) {
    return [action.message, ...oldValue];
  }
  return oldValue;
}).set('isLoading', false);
return messageList;
```
* `updateIn` 更新树形结构中 messages -> id 的赋值，源码:：https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L605
* `set` 给指定的 key 赋值，源码:：https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L166

 
#### Immutable 实战5（withMutations、mergeDeep）
```javascript
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_CONV:
      return state.withMutations(s => s.set('conv', fromJS(action.data)).set('isLoading', false))
    case types.UPDATE_CONV:
      return state.update('conv', (conv) => {
        let inConv = false
        let newConv = conv.map((item) => {
          if (item.get('id') === action.data.id) {
            item = item.mergeDeep(fromJS(action.data))
            inConv = true
          }
          return item
        })
        if (!inConv) {
          newConv.unshift(fromJS(action.data))
        }
        return newConv
      })
    default:
      return state
  }
}

```
* `withMutations` 操作多次，只会在最后一个操作 clone 出新的 Immutable 对象来，源码:：https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L706
* `mergeDeep` 深度合并，当有冲突时，用 `action.data`值覆盖 `item` 值，源码:：https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L550
