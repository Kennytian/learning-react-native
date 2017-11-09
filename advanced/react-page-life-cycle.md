## 重温 react 页面生命周期

一直认为改变 `state` 与 `props` 值，`props` 会多执行页面一个生命周期方法 - _componentWillReceiveProps_，但今天试验了一下，惊讶的发现改变 `state`，会触发子组件的 `componentWillReceiveProps`，这是为什么呢？

一位群友解答：改变当前组件的 `state` 后，组建重新 `render`，触发子组件的 `props` 更新。

```javascript

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Button
} from 'react-native';

class Children extends Component {
  constructor(props) {
    super(props);
    console.debug('Children---------constructor', new Date());
  }

  componentWillMount() {
    console.debug('Children---------componentWillMount', new Date());
  }

  render() {
    console.debug('Children---------render', new Date());
    return (
      <Text>{this.props.say}</Text>
    );
  }

  componentDidMount() {
    console.debug('Children---------componentDidMount', new Date());
  }

  componentWillReceiveProps(nextProps) {
    console.debug('Children---------componentWillReceiveProps', new Date());
    console.log(this.props, nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.debug('Children---------shouldComponentUpdate', new Date());
    if (nextProps.say !== this.props.say) {
      return true;
    }
    return false;
  }

  componentWillUpdate(nextProps, nextState) {
    console.debug('Children---------componentWillUpdate', new Date());
  }

  componentDidUpdate() {
    console.debug('Children---------componentDidUpdate', new Date());
  }

  componentWillUnmount() {
    console.debug('Children---------componentWillUnmount', new Date());
  }
}

export default class react0471 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date(),
    };
    console.debug('\n\nconstructor', new Date());
  }

  componentWillMount() {
    console.debug('componentWillMount', new Date());
  }

  render() {
    console.debug('render', new Date());
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Children say={this.state.word}/>
        <Button title="改变state" onPress={this.changeStateHandler}/>
        <Button title="改变props" onPress={this.changePropsHandler}/>
      </View>
    );
  }

  componentDidMount() {
    console.debug('componentDidMount', new Date() + "\n\n");
  }

  componentWillReceiveProps(nextProps) {
    console.debug('componentWillReceiveProps', new Date());
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.debug('shouldComponentUpdate', new Date());
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.debug('componentWillUpdate', new Date());
  }

  componentDidUpdate() {
    console.debug('componentDidUpdate', new Date() + "\n\n");
  }

  componentWillUnmount() {
    console.debug('componentWillUnmount', new Date());
  }

  changeStateHandler = () => {
    this.setState({now: new Date()})
  }

  changePropsHandler = () => {
    this.setState({word: '我是Props-' + new Date()})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('react0471', () => react0471);
```
