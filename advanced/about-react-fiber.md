## 了解 React Fiber

### 1. 约定：
- 文中的 React，是指 React 15.x 版。
- 文中的 React Fiber，是指 React 16.x 版中新增的一个`亮点功能`。
- 文中的 React Stack 是指 React 处理任务时的同步线程。
- 文中的 React Fiber 是指 React 处理任务时的异步线程。

### 2. React 是什么？
React 是 Facebook 推出的前端「View」库，以高性能 Virtual DOM 算法和 Web Component 思想完美结合起来，自推出以来得到国内外开发者高度认可。 

Virtual DOM 是如何高性能呢？ 简单来说，还没有 React 之前，如果一个 HTML 页面里有 1000 个 DOM 节点，不幸要修改最后一个节点，需要递归查找上 10 亿次，算法复杂度是 O(n<sup>3</sup>)，所以网页一下就卡住了，呈现出假死状态。

自从 React 推出以后，这种情况好多了，Facebook 工程师是怎么做到的呢？ React 通过制定一种大胆的假想策略，将O(n<sup>3</sup>)复杂度问题转换成O(n)复杂度。策略如下：

- DOM 节点跨层级的移动操作特别少，可以忽略不计
- 相同类的两个组件生成相似的树形结构，不同类的两个组件生成不同的树形结构
- 同一层级的一组子节点，它们可以通过唯一id来区分

基于以上策略，React 分别对 `tree diff`, `component diff` 和 `element diff` 进行了算法优化，事实证明这 3 个看似大胆的假想是合理且准确的，就算页面中 有 **1000** 个节点页面，改变和渲染越来也不会「卡死」。

### 3. React Fiber 是什么？

![what?](https://ww4.sinaimg.cn/mw1024/0060gdugjw1f4p6js7l7xj305k05nq2x.jpg) 

「卡死」? React Fiber 笑了，你们的要求太低了，我要的是 10000 个节点都不会「卡死」。

听口气，好像很牛的样子，那 React Fiber 到底是什么？ Facebook 官方的解释是：「_React Fiber 是对核心算法的一次重新实现_」。

`Fiber` 是原意是纤维、光纤，我猜 `Facebook` 工程师的意思是想让新版 `React Fiber` 能处理更小粒度的 task。

![watermelon](http://wx2.sinaimg.cn/bmiddle/a813e649ly1fkjswm1s7wj209w08c0tc.jpg)

我 `React` 还没有学会，你又来一个 `React Fiber`。 

不用太紧张，不要以为 `React Fiber` 的到来是一场大革命，它只是核心算法改变了。我们这些把 `React` 当做工具的开发者，只要修改 `package.json` 中的 `React` 版本号，重新 `npm install`，一切就搞定了，然后我们就感觉到网页性能更高了一些，就是这么简单。是不是让我等吃瓜群众感受到如丝般顺滑的升级过程，用 React 就是这么自信。

### 4. React Fiber 有什么改善
有图有真相，下图每秒改变1次形状并且更新节点里的数字(gif图片较大，加载慢，显示也有些卡):

![react-stack](https://raw.githubusercontent.com/Kennytian/learning-react-native/master/images/react-stack.gif)

`React` 虽然没有卡死，但已经比较吃力了，感觉一顿一顿的，这会严重交互、动画等诸多用户体验。

![react-fiber](https://raw.githubusercontent.com/Kennytian/learning-react-native/master/images/react-fiber.gif)

但用 `React Fiber` 渲染看起来就流畅多了（稍微有点卡顿是gif较大的原因，实际用 HTML 展示效果更佳）。

我们先来温习一下 Chrome 里的 Performance 图：
- FPS：每秒帧数，绿色竖线越高，FPS 越高。 红色块表示长时间帧，出现的越多，表示越卡顿。
- CPU：CPU 资源使用率，指示消耗 CPU 资源的事件类型。
- NET：表示网络请求时长，这里不讨论。
- HEAP：表示内存使用率，越低越好，内存开销和释放越平稳越好


下面是分别是`React` 和 `React Fiber` 执行时的 FPS、CPU、NET、HEAP 图：

![react-stack-pref](https://github.com/Kennytian/learning-react-native/blob/master/images/react-stack-perf.png)

`React` 是同步执行的，一口气把：
 1. 调用各个组件
 2. 生命周期
 3. 计算和比对 `Virtual DOM`
 4. 最后更新 `DOM` 树
 5. ...（其实这中间有 N 多细节 task）
 
 这一切都完成后，才来响应其它的操作。当页面中有超级多节点时，渲染与重绘就像第一图那样，感觉一顿一顿的。
 
![react-fiber-pref](https://github.com/Kennytian/learning-react-native/blob/master/images/react-fiber-perf.png)

`React Fiber` 采用新的算法，是异步并发执行计算任务。将大量计算任务拆分成非常小的task, 小到像「纤维」一样，然后异步去执行，从而使得主线程得以释放，保证了渲染的帧率。

`React Fiber` 可以做到如下：
1. 暂停一个事务，并在不久后再重新开始执行。
2. 设定不同类型事务的优先级，并且可以调整其优先级。
3. 复用已完成的事务。
4. 当不再需要时，取消该事务。

相当于把以前的 `js function` 的 调用`call stack` 改成 `fiber` 链。

从上面两副图可以看出：
1. `React Fiber` 的 FPS 绿色竖线多，动画流畅。
2. `React Fiber` 的 CPU 处理渲染(`Rendering`)和脚本计算(`Scripting`)都是交替执行的，验证了前面提到的异步与并发。

### 5. 如何使用 React Fiber

我们只要将 `react` 和 `react-dom` 升级到 16.0.0 版即可。

### 6. 演示Demo
[https://github.com/Kennytian/learning-react-native/blob/master/utilities/react-fiber-demo.zip](https://github.com/Kennytian/learning-react-native/blob/master/utilities/react-fiber-demo.zip)

### 7. 参考阅读
* https://www.zhihu.com/question/49496872?sort=created
* https://zhuanlan.zhihu.com/p/26027085
* https://zhuanlan.zhihu.com/p/30611745
* https://github.com/xieyu/blog/blob/master/React/from-jsx-to-dom.md
* https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool?hl=zh-cn
