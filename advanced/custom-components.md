## 开发 React 自定义组件

### 1. 前言
在 `React` 出来之前，已有无数前端框架或库诞生，功能非常强大、也非常好用，伴随着我们前端开发人员走过一年又一年。但为什么 `React` 一出，受到国内外热捧，它到底解决了前端哪些痛点？ 个人不成熟理解有如下两点：
* Web Component
* Virtual DOM

#### 1.1 Web Component
`Web Component` 是一个概念，其实就早已出现。早在 `HTML 4.0` 时代，我们在页面使用 `include` 语法来复用 `header` 和 `footer` 里。但无法给这种 `component` 传参，更别谈约束和验证参数了，稍微有不同场景，我们不得不复制一份 `component` 改改后再用，在项目中会就出现类似于 `header1.html`、`header2.html` 和 `header3.html` 文件，复用率和抽象程度都较低。

但 `React` 的 `Web Component` 解决上述的**参数约束**、**参数验证**，还多了**参数值范围**、**参数默认值**。并且 `React Component` 还所有跟 `React Page` 一样的生命周期。

###### 1.1.1 参数默认值：
```javascript
static defaultProps = {
  titleNormalStyle: null,
  checked: false,
  titleLines: 0,
};
```
属性参数默认值都写在 static defaultProps 里，因为是静态成员，所以程序初始化时就声明好了。当组件使用者没有给属性设置值时，就会自动使用默认值。

##### 1.1.2 参数类型：
```javascript
static propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  bgCheckStyle: PropTypes.object,
  checked: PropTypes.bool,
  titleLines: PropTypes.number,
};
```
`PropTypes` 后面的 `func`、`string` 等就是参数约束，`isRequired` 是参数验证，表示必填。

>常见基本约束类型有：PropTypes.array，PropTypes.bool，PropTypes.func，PropTypes.number，PropTypes.object，PropTypes.string，PropTypes.symbol(ES6新类型)，其中的PropTypes.func是指 function。

>React 约束类型有：PropTypes.node，PropTypes.element，PropTypes.oneOf，PropTypes.oneOfType，PropTypes.arrayOf，PropTypes.shape，PropTypes.any等。

* `node` 所有可以被渲染的对象：数字，字符串，DOM 元素或包含这些类型的数组
* `element` 参数类型为 `React` 元素
* `oneOf`  在规定的**参数值**选项中多选一，比如：`PropTypes.oneOf(["house", "job", "car"]);`
* `oneOfType` 在规定的**参数类型**选项中多选一，比如：`PropTypes.oneOf(["number", "string"]);`
* `arrayOf` 只允许使用某种类型的数组，比如：`PropTypes.arrayOf(PropTypes.number);`
* `shape` 采用指定样式的参数对象 `PropTypes.shape({color: PropTypes.string,fontSize: PropTypes.number});`
* `any` 不可空的任意类型 `PropTypes.any;`

更多资料：https://github.com/facebook/prop-types

###### 1.1.3 组件生命周期

* 创建期：`static defaultProps`, `static propTypes`, `componentWillMount`, `componentDidMount`
* 存在期：`componentWillReceiveProps`, `shouldComponentUpdate`, `componentWillUpdate`, `componentDidUpdate`
* 销毁期：`componentWillUnmount`

只是看起来比 `React Page` 多了，`static defaultProps`, `static propTypes`，但我们在 `React Page` 里添加这两个生命周期会变成什么样？

#### 1.2 Virtual DOM
不是今天讨论的重点，以后再讲。

#### 2. 组件开发入门
###### 示例1：
组件代码：
```javascript
class Greeting extends Component {
  render() {
    return (
      <span>Hello, {this.props.name}!</span>
    );
  }
}
```
调用代码：
```javascript
import Greeting from './Greeting';

class LotsOfGreetings extends Component {
  render() {
    return (
      <div>
        <Greeting name='Growth FE' />
        <Greeting name='Growth Android' />
        <Greeting name='Growth iOS' />
      </div>
    );
  }
}
```

###### 示例2：
组件代码：
```javascript
class MyComponent extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
```

调用代码：
```javascript
import MyComponent from './MyComponent';

class ShowElement extends Component {
  render() {
    return (
      <MyComponent>
        <div>
          <span>一个神奇的网站<span>
          <span>人人信赖的生活服务平台<span>
        </div>
      </MyComponent>
    );
  }
}
```
写个 `Web Component` 就是这么简单，有没有?  但说好的参数约束，验证呢？ 请看下面高级用法：

#### 3. 组件开发提高

效果图：

![checkboxbutton](https://raw.githubusercontent.com/Kennytian/learning-react-native/master/images/checkbox-button.jpg)

组件代码：
```javascript
import React, { PropTypes, PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const styles = {
  bg: {
    base: {
      width: 143,
      height: 53,
      borderRadius: 1.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    normal: {
      backgroundColor: '#F7F7F7',
    },
    checked: {
      backgroundColor: '#FFF7F5',
    },
  },
  text: {
    normal: {
      fontSize: 18,
      color: '#333',
    },
    checked: {
      fontSize: 18,
      color: '#FF552E',
    },
  },
  triangle: {
    base: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderRightWidth: 22,
      borderTopWidth: 22,
      borderRightColor: 'transparent',
      // ,borderTopColor: '#FF552E'
    },
    corner: {
      transform: [
        { rotate: '180deg' },
      ],
    },
    position: {
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    bgColor: {
      borderTopColor: '#FF552E',
    },
  },
  correct: {
    base: {
      width: 12,
      height: 6,
      borderStyle: 'solid',
      borderLeftWidth: 2,
      borderBottomWidth: 2,
      borderLeftColor: '#FFF',
      borderBottomColor: '#FFF',
      transform: [
        { rotate: '135deg' },
      ],
    },
    position: {
      position: 'absolute',
      top: -16.5,
      right: -13.5,
    },
  },
};

export default class CheckBoxButton extends PureComponent {
  static defaultProps = {
    titleNormalStyle: null,
    titleCheckStyle: null,
    bgNormalStyle: null,
    bgCheckStyle: null,

    checked: false,
    titleLines: 0,
  };

  static propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,

    titleNormalStyle: PropTypes.object,
    titleCheckStyle: PropTypes.object,
    bgNormalStyle: PropTypes.object,
    bgCheckStyle: PropTypes.object,

    checked: PropTypes.bool,
    titleLines: PropTypes.number,
  };

  render() {
    let bgStyle = this.props.bgNormalStyle || [styles.bg.base, styles.bg.normal];
    let titleStyle = this.props.titleNormalStyle || styles.text.normal;
    let triangleStyle = null;

    if (this.props.checked) {
      bgStyle = this.props.bgCheckStyle || [styles.bg.base, styles.bg.checked];
      titleStyle = this.props.titleCheckStyle || styles.text.checked;
      triangleStyle = [styles.triangle.base, styles.triangle.corner, styles.triangle.position,
        { borderTopColor: titleStyle.color || styles.triangle.bgColor.borderTopColor }];
    }

    let titleLines = 1;
    if (this.props.titleLines) {
      titleLines = this.props.titleLines;
    }

    return (
      <View>
        <TouchableOpacity activeOpacity={1} style={bgStyle} onPress={this.props.onPress || null}>
          <Text numberOfLines={titleLines} style={titleStyle}>{this.props.title}</Text>
        </TouchableOpacity>
        {this.props.checked ?
          <View style={triangleStyle}>
            <View style={[styles.correct.base, styles.correct.position]} />
          </View> : null}
      </View>
    );
  }
}
```

调用代码：
```javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import CheckBoxButton from './checkBoxButton';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
};

export default class CheckBoxButtonDemo extends Component {
  static navigationOptions = {
    title: '复选框按钮',
  };

  constructor(props) {
    super(props);
    this.state = {
      checkBoxButton1: false,
      checkBoxButton2: true,
    };
  }

  checkBoxButton1Handler = () => {
    this.setState({ checkBoxButton1: !this.state.checkBoxButton1 });
  };

  checkBoxButton2Handler = () => {
    /* eslint react/no-string-refs:0 */
    if (this.refs.a2 && !this.refs.a2.props.checked) {
      console.debug(this.refs.a2.props.value);
    }
    this.setState({ checkBoxButton2: !this.state.checkBoxButton2 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native CheckBoxButton!</Text>
        <CheckBoxButton
          titleLines={1}
          title={'销售代表'}
          value={'xsdb'}
          titleNormalStyle={{ fontSize: 20, color: 'gray' }}
          titleCheckStyle={{ fontSize: 20, color: 'blue' }}
          bgNormalStyle={{
            width: 143,
            height: 53,
            borderRadius: 1.5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F7F7F7',
          }}
          bgCheckStyle={{
            width: 143,
            height: 53,
            borderRadius: 1.5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#D1EAFF',
          }}
          checked={this.state.checkBoxButton1}
          onPress={this.checkBoxButton1Handler}
        />
        <Text>1</Text>
        <CheckBoxButton
          ref="a2"
          title={'销售经理主管与总监'}
          value={'xsjlzgyzj'}
          checked={this.state.checkBoxButton2}
          onPress={this.checkBoxButton2Handler}
        />
      </View>
    );
  }
}
```

代码分析：
* `Text`, `View`, `TouchableOpacity` 是 `react native` 控件，相当于`span`, `div`, 支持 `oncick` 事件的控件
* 在 `React Native` 里，没有类似 `.css` 的文件，样式文件都是以 JS 文件形式书写和引用
* `PureComponent` 是自带优化功能的 `Component`，后面会详谈
* 在 `static defaultProps = { }` 里编写属性参数的默认值
* 在 `static propTypes = { }`  里编写属性参数的约束

#### 4. 组件开发优化
>Component vs PureComponent

`Component` 和 `PureComponent` 的区别就是：`PureComponent` 已经定义好了 `shouldUpdateComponent` 而 `Component` 需要显示定义。

我们从简短的源码一看究竟：
```javascript
// 定义 CompositeTypes
var CompositeTypes = {
  ImpureClass: 0,         // 继承自 Component 的组件
  PureClass: 1,           // 继承自 PureComponent 的组件
  StatelessFunctional: 2, // 函数组件
};

// 这个变量用来控制组件是否需要更新
var shouldUpdate = true;

// inst 是组件实例
if (inst.shouldComponentUpdate) {
  shouldUpdate = inst.shouldComponentUpdate(nextProps, nextState, nextContext);
} else {
  if (this._compositeType === CompositeType.PureClass) {
    // 用 shallowEqual 对比 props 和 state 的改动
    // 如果都没改变就不用更新
    shouldUpdate = !shallowEqual(prevProps, nextProps) || !shallowEqual(inst.state, nextState);
  }
}
```

简而言之，`ReactCompositeComponent` 会在 `mount` 的时候判断各个组件的类型，设定 _`compositeType` ，然后根据这个类型来判断是非需要更新组件。这个 PR 中大部分改动都是 因为加了 `CompositeTypes` 而做的调整性工作，实际跟 `PureComponent` 有关的就是 `shallowEqual` 的那两行。

#### 5. 最后
最后补充几点开发 Web Component 周边的一些知识点，比如 `ESLint`、`shouldComponentUpdate` 的注意事项。

* **ESLint** 如果使用了`ESLint + Airbnb`，会强制要求组件里的每一个属性都必须有默认值(defaultProps里)。
* **shouldComponentUpdate** 使用 `PureComponent` 时，避免使用可变对象作为 `props` 和 `state`，取而代之的是每次返回一个全新的对象，比如数组参数就通过 `concat` 来返回新的数组。

参考文档：
* PureComponent https://segmentfault.com/a/1190000006741060
* shouldComponentUpate https://segmentfault.com/a/1190000008402834
