## React Native 性能优化

欢迎您帮忙纠错, 一起帮助更多的人。 一起来学习交流, QQ群：[413381701](http://shang.qq.com/wpa/qunwpa?idkey=3b9474dacbf35e4a9659e89399758406e510e5b8a3f81109f7d07efaadc6056d)

_注：这里提到的性能技巧，多数是我项目实践过的，但也有少数为网络收集而来，但难免有误，还请不吝指正。_

### 渲染优化(JS)
1. shouldComponentUpdate 默认返回 true，就是触发该方法，每次都重新渲染页面。想要优化，就要想办法尽可能的返回 false。那么怎么计算得出 false 呢，请看如下代码：
```js
import { is } from 'immutable';

export function deepCompare(instance, nextProps, nextState) {
  const thisProps = instance.props || {};
  const thisState = instance.state || {};

  nextProps = nextProps || {};
  nextState = nextState || {};

  if (Object.keys(thisProps).length !== Object.keys(nextProps).length || Object.keys(thisState).length !== Object.keys(nextState).length) {
    __DEV__ && console.debug('deepCompare length diff');
    return true;
  }

  for (const key in nextProps) {
    if (thisProps[key] !== nextProps[key] || !is(thisProps[key], nextProps[key])) {
      __DEV__ && console.debug('deepCompare props diff(key):', key);
      return true;
    }
  }

  for (const key in nextState) {
    if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
      __DEV__ && console.debug('deepCompare state diff(key):', key);
      return true;
    }
  }

  return false;
}
```
页面中调用：
```js
shouldComponentUpdate(nextProps, nextState) {
  return deepCompare(this, nextProps, nextState);
}
```

2. 在列表的 item 上设置一个 key，这个 key 必须是唯一，最后不要用 index（用数据库里的 ID）, 因为你如果删除一条记录，index 就都变了。

3. 事件绑定
* 推荐使用：
  * 在构造函数里 `this.handleChange = this.handleChange.bind(this);`
  * 在类里 `handleChange = () => {  };`
* 不推荐使用：
   * 属性里 `onChange={this.handleChange.bind(this)}`
   * 属性里 `onChange={e => this.handleChange(e)}`

  _原因：不推荐的两种方式，会在每次执行 render 方法时重新分配资源_

### 安装包大小优化
1. 如果 APP 里的小图标没有阴影和渐变，建议用 iconfont 来代替图片 icon。
2. 如果 APP 不用考虑 x86 的 Android 设备，包会缩小40%左右。以我们100万+用户后台统计数据，x86用户不到0.1%，所以可以忽略不计。 
3. 尽可能复用 React Native 项目自带的 lib，少重复添加 lib。
4. 图片可以转成 WebP 格式，它既支持有损压缩又支持无损压缩的图片文件格式。根据官方介绍其无损压缩后的WebP 比 PNG 文件少了45％的文件大小，即使 PNG 文件经过压缩工具压缩之后，WebP 还可以减少28％的文件大小，这可以大大提高移动端的图片加载速度。

### UI 响应优化
1. 在对动画中途无取消要求或者其他中途回调要求的，比如局部组件特定显示隐藏动画等。我们可以在调用setState之前，调用LayoutAnimation方法。
```js
LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
this.setState({
  showDetail: !this.state.showDetail
});
```

2. InteractionManager 可以将一些耗时较长的工作安排到所有互动或动画完成之后再进行。这样可以保证JavaScript动画的流畅运行，应用这样可以安排一个任务在交互和动画完成之后执行。
```js
InteractionManager.runAfterInteractions(() => {
  this._doSearch(tab.i);
});
```

3. 而对于某些状态更新，`setNativeProps` 方法可以让我们直接修改原生视图组件的属性，而不用通过setState来重新渲染结构，这样能使整个组件响应速度变快

### 请求时机优化
>网络数据请求，建议放在 `componentDidMount` 里，因为这时的页面已经渲染结束，至少让用户可以看点内容(`componentWillMount` -> `render`)，然后再去请求数据。注意：网络请求回来的数据 setState 或 mapStateToProps，会触发一系列事件：`shouldComponentUpdate` -> `componentWillUpdate` -> `render` -> `componentDidUpdate`。

>更多官方说明：https://facebook.github.io/react/docs/react-component.html#componentdidmount

### 禁止这么做
1. 禁止在 `shouldComponentUpdate`、`componentWillUpdate`、`render`、`componentDidUpdate` 修改 `state` 或修改 `props` ，原因是这样会循环触发，最后 APP 会报错或崩溃。
 