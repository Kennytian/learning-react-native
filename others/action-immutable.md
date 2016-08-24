Immutable 实战分析1（filter、fromJS、includes、first）

```
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
* filter 过滤集合中需要的数据, 用法: https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L1977
* fromJS 将 JSON 对象转换为 Immutable 对象, 用法: https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L86
* includes(同contains) 判断是否包含某个值, 用法 https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L1763
* first 返回集合中的第一个值, 用法 https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts#L1769

