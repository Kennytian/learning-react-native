## 复选框按钮

欢迎您帮忙纠错, 一起帮助更多的人，学习交流 QQ 群：[413381701](http://shang.qq.com/wpa/qunwpa?idkey=3b9474dacbf35e4a9659e89399758406e510e5b8a3f81109f7d07efaadc6056d)

#### 效果图：

![效果图](https://github.com/Kennytian/learning-react-native/blob/master/images/checkbox-button.jpg)

#### 调用方式：

```javascript
import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import CheckBoxButton from "./CheckBoxButton";

export default class Launcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxButton1: false,
      checkBoxButton2: true
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native CheckBoxButton!
        </Text>
        <CheckBoxButton
          titleLines={1}
          title={"销售代表"}
          value={"xsdb"}
          titleNormalStyle={{ fontSize: 20, color: "gray" }}
          titleCheckStyle={{ fontSize: 20, color: "blue" }}
          bgNormalStyle={{
            width: 143,
            height: 53,
            borderRadius: 1.5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F7F7F7"
          }}
          bgCheckStyle={{
            width: 143,
            height: 53,
            borderRadius: 1.5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#D1EAFF"
          }}
          checked={this.state.checkBoxButton1}
          onPress={this.checkBoxButton1Handler}
        />
        <Text>1</Text>
        <CheckBoxButton
          ref="a2"
          title={"销售经理主管与总监"}
          value={"xsjlzgyzj"}
          checked={this.state.checkBoxButton2}
          onPress={this.checkBoxButton2Handler}
        />
      </View>
    );
  }

  checkBoxButton1Handler = () => {
    this.setState({ checkBoxButton1: !this.state.checkBoxButton1 });
  };

  checkBoxButton2Handler = () => {
    if (this.refs.a2 && !this.refs.a2.props.checked) {
      console.debug(this.refs.a2.props.value);
    }
    this.setState({ checkBoxButton2: !this.state.checkBoxButton2 });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  welcome: {
    fontSize: 16,
    textAlign: "center",
    margin: 10
  }
});

AppRegistry.registerComponent("react0440", () => Launcher);
```

#### 源码：

```javascript
import React, { PropTypes, PureComponent } from "react";
import { Text, View, TouchableOpacity } from "react-native";

const styles = {
  bg: {
    base: {
      width: 143,
      height: 53,
      borderRadius: 1.5,
      alignItems: "center",
      justifyContent: "center"
    },
    normal: {
      backgroundColor: "#F7F7F7"
    },
    checked: {
      backgroundColor: "#FFF7F5"
    }
  },
  text: {
    normal: {
      fontSize: 18,
      color: "#333"
    },
    checked: {
      fontSize: 18,
      color: "#FF552E"
    }
  },
  triangle: {
    base: {
      width: 0,
      height: 0,
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderRightWidth: 22,
      borderTopWidth: 22,
      borderRightColor: "transparent"
      // ,borderTopColor: '#FF552E'
    },
    corner: {
      transform: [{ rotate: "180deg" }]
    },
    position: {
      position: "absolute",
      bottom: 0,
      right: 0
    },
    bgColor: {
      borderTopColor: "#FF552E"
    }
  },
  correct: {
    base: {
      width: 12,
      height: 6,
      borderStyle: "solid",
      borderLeftWidth: 2,
      borderBottomWidth: 2,
      borderLeftColor: "#FFF",
      borderBottomColor: "#FFF",
      transform: [{ rotate: "135deg" }]
    },
    position: {
      position: "absolute",
      top: -16.5,
      right: -13.5
    }
  }
};

export default class CheckBoxButton extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string.isRequired,
    titleNormalStyle: PropTypes.object,
    titleCheckStyle: PropTypes.object,
    titleLines: PropTypes.number
  };

  render() {
    let _bgStyle = this.props.bgNormalStyle || [
      styles.bg.base,
      styles.bg.normal
    ];
    let _titleStyle = this.props.titleNormalStyle || styles.text.normal;
    let _triangleStyle = null;

    if (this.props.checked) {
      _bgStyle = this.props.bgCheckStyle || [styles.bg.base, styles.bg.checked];
      _titleStyle = this.props.titleCheckStyle || styles.text.checked;
      _triangleStyle = [
        styles.triangle.base,
        styles.triangle.corner,
        styles.triangle.position,
        {
          borderTopColor:
            _titleStyle.color || styles.triangle.bgColor.borderTopColor
        }
      ];
    }

    let _titleLines = 1;
    if (this.props.titleLines) {
      _titleLines = this.props.titleLines;
    }

    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          style={_bgStyle}
          onPress={this.props.onPress || null}
        >
          <Text numberOfLines={_titleLines} style={_titleStyle}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
        {this.props.checked ? (
          <View style={_triangleStyle}>
            <View style={[styles.correct.base, styles.correct.position]} />
          </View>
        ) : null}
      </View>
    );
  }
}
```
