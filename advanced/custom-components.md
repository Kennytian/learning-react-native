## 开发 React 自定义组件

### 1. 前言
在 `React` 出来之前，已有无数前端框架或库诞生，功能非常强大、也非常好用，伴随着我们前端开发人员走过一年又一年。但为什么 `React` 一出，受到国内外热捧，它到底解决了前端哪些痛点？ 个人不成熟理解有如下两点：
* Web Component
* Virtual DOM

#### 1.1 Web Component
`Web Component` 是一个概念，其实就早已出现。早在 `HTML 4.0` 时代，我们在页面使用 `include` 语法来复用 `header` 和 `footer` 里。但无法给这种 `component` 传参，更别谈约束和验证参数了，稍微有不同场景，我们不得不复制一份 `component` 改改后再用，在项目中会就出现类似于 `header1.html`、`header2.html` 和 `header3.html` 文件，复用率和抽象程度都较低。

但 `React` 的 `Web Component` 解决上述的**参数约束**、**参数验证**，还多了**参数值范围**、**参数默认值**。并且 `React Component` 还所有跟 `React Page` 一样的生命周期。

##### 1.1.1 参数约束
先上代码，PropTypes 后面的func，string等就是参数约束。
```javascript
static propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    bgCheckStyle: PropTypes.object,
    checked: PropTypes.bool,
    titleLines: PropTypes.number,
};
```
>常见基本约束类型有：PropTypes.array，PropTypes.bool，PropTypes.func，PropTypes.number，PropTypes.object，PropTypes.string，PropTypes.symbol(ES6新类型)，其中的PropTypes.func是指 function。

>React 约束类型有：PropTypes.node，PropTypes.element，PropTypes.oneOf，PropTypes.oneOfType，PropTypes.arrayOf，PropTypes.shape，PropTypes.any等。

类型详情：
* `node` 所有可以被渲染的对象：数字，字符串，DOM 元素或包含这些类型的数组
* `element` 参数类型为 `React` 元素
* `oneOf`  在规定的**参数值**选项中多选一，比如：`PropTypes.oneOf(["house", "job", "car"]);`
* `oneOfType` 在规定的**参数类型**选项中多选一，比如：`PropTypes.oneOf(["number", "string"]);`
* `arrayOf` 只允许使用某种类型的数组，比如：`PropTypes.arrayOf(PropTypes.number);`
* `shape` 采用指定样式的参数对象 `PropTypes.shape({color: PropTypes.string,fontSize: PropTypes.number});`
* `any` 不可空的任意类型 `PropTypes.any;`

更多资料：https://github.com/facebook/prop-types

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
```jsx
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
#### 3. 组件开发提高

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

#### 4. 组件开发优化

Component vs PureComponent

#### 5. 最后



