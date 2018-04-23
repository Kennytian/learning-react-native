## Jest 测试之 React Components

欢迎您帮忙纠错, 一起帮助更多的人。 一起来学习交流 React, QQ 群：[413381701](http://shang.qq.com/wpa/qunwpa?idkey=3b9474dacbf35e4a9659e89399758406e510e5b8a3f81109f7d07efaadc6056d)

### 如何配置 Jest

* 【必选】安装依赖，`yarn add --dev jest`，是不是非常简单，就一句话。
* 【可选】如果你习惯了写 ES6 的代码，需要安装 `yarn add --dev babel-preset-env`
* 【可选】如果安装了上一步，这一步就变成必选操作了，那就是在项目根目录创建 `.babelrc` 文件，并在里面配置`"presets": ["env"]`
* Jest **约定**把所有的单元测试文件放在一个叫`__tests__`的目录里，所以在项目根目录创建一个。当然你可以放在别的目录里，只需要在 package.json 另写配置代码即可。

### React Components 怎么写？

请参考 [开发 React 自定义组件](https://github.com/Kennytian/learning-react-native/blob/master/advanced/custom-components.md)

下面是一个简单的「数据加载失败，请重试」的控件，代码如下：

* LoadFailed.js

```javascript
import React, { PropTypes, PureComponent } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 14,
    color: "#333"
  }
};

class LoadFailed extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    style: PropTypes.object,
    textStyle: PropTypes.object
  };

  static defaultProps = {
    onPress: null,
    text: "数据加载失败，请重试",
    style: null,
    textStyle: null
  };

  onPress = () => {
    this.props.onPress && this.props.onPress();
  };

  render() {
    const { text, style, textStyle } = this.props;
    const btnStyle = StyleSheet.flatten([styles.container, style]);
    const txtStyle = StyleSheet.flatten([styles.text, textStyle]);
    return (
      <TouchableOpacity onPress={this.onPress} style={btnStyle}>
        <Text style={txtStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default LoadFailed;
```

### React Components 单元测试怎么写？

* LoadFailed.test.js

```javascript
import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import LoadFailed from "../LoadFailed";

it("LoadFailed 默认显示，耗时：", () => {
  const tree = renderer.create(<LoadFailed />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('LoadFailed text="数据加载失败，点击重试" 显示，耗时：', () => {
  const tree = renderer
    .create(<LoadFailed text="数据加载失败，点击重试" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("LoadFailed 点击 onPress，耗时：", () => {
  const onPressMock = jest.fn();
  const component = renderer
    .create(<LoadFailed onPress={onPressMock} />)
    .getInstance();
  component.onPress();
  expect(onPressMock).toBeCalled();
});
```

### 怎么运行单元测试

* 先在 package.json 的 script 里配置如下代码：

```json
"scripts": {
    "test": "./node_modules/.bin/jest"
}
```

* 在项目根目录命令行执行：`yarn test -u`

* 命令行里就会出现：

```
PASS  __tests__/LoadFailed.test.js
  ✓ LoadFailed 默认显示，耗时： (3722ms)
  ✓ LoadFailed text="数据加载失败，点击重试" 显示，耗时： (3ms)
  ✓ LoadFailed 点击 onPress，耗时： (2ms)

Tests:       3 passed, 3 total
Snapshots:   2 passed, 2 total
Time:        11.508s
```

### Q & A

* 问：jest 与 react-native 有没有什么注意事项？
* 答：package.json 里的 `react-test-renderer` 版本必须与 `react-native` 一致。

* 问：.snap 是什么？
* 在执行这一组测试后，Jest 测试库会生生类似于 `LoadFailed.test.js.snap` 快照文件。如果报有存在的 snap 文件，无法生成新的 snap 文件，只需删除旧 snap 文件，重新运行测试用例即可。 也可以用`-u`的参数来自动删除。

* 问：能不能模拟控件的点击事件？
* 可以，详情见上面的例子。
