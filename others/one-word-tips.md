# 一句技巧

_本篇文章记录的技巧尽量保持与平时工作的 React Native 相关, 但也有例外。_

## React Native
1. 自定义属性中,必须选其中一种 `shape: PropTypes.oneOf(['round', 'square']).isRequired`
2. 自定义属性中,要么指定具体数字,要么用full `width: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['full'])]).isRequired`
3. 之前判断根据不同平台写 Style 时用`height: Platform.OS === 'ios' ? 200 : 100,` , 今天发现还有另一种写法 `...Platform.select({ ios: { top : 20 }, android : { top : 10 } }),`
4. `componentWillReceiveProps(nextProps)` 在组件接收新的props时触发, 用法: `if (nextProps.project !== this.props.project) { }`
5. 避免用户调整字体(大小)影响APP界面布局 `Text.defaultProps.allowFontScaling=false` 在程序启动页面加入这句


## node和npm
1. 安装或更新 npm `curl -L https://www.npmjs.com/install.sh | sh`

## iOS
1. 要添加或修改 `header` 引用, 可以打开 `pbxproj` 文件, 找到 `HEADER_SEARCH_PATHS` 节点(注意**Debug**,**Release**版), 添加或修改相应引用
2. 让你的 React Native APP 支持 iPhone 和 iPad，`General -> Deployment -> Devices， 选择 Univesral`。
3. 当遇到比整数大得多、也复杂得多的数据时，就有必要用指针来传递地址。程序不一定通过拷贝来传递数据，但一定能够直接传递或通过拷贝来传递的**起始地址**
4. 在 `Objective-C` 中 `nil` 等价于 `NULL`
5. `typedef`为某个类型声明一个新的类型，使用 `typedef` 可以为 `struct` 声明一个等价的别名
```
typedef struct {
    float height;
    int weight;
} Person
...
Person person;
person.weight= 75;
person.height = 1.73
```

## Git
1. 删除**最后一次**缓存记录 `git stash drop stash@{0}`
2. 应用**指定某一次**缓存记录 `git stash apply stash@{3}`
3. **没有 push** 要回滚 `git reset --hard HEAD`
4. **已经 push** 要回滚 `git revert b3c20ba6fb38cc94fe5a8d`
5. 基于某次 Commit ID 打 tag `git tag -a v0.1.1 9fbc3d0`, -a 表示带注释
6. 修改某次错误 commit 注释, `git reset --soft fb38cc9(上一次 Commit ID)`, --soft不会覆盖stash区和work区的代码
7. 配置git本地用户名, `git config --local user.name "Kennytian"`
8. 将本地git文件提交到远程`git remote add origin https://github.com/Kennytian/learning-react-native.git; git push -u origin master`
9. 撤销未提交的修改，支持通配符 `git checkout *`,  `git checkout *.js`  

## ES6
1. 用**不定参数** `function foo(a, ...z)`和**默认参数**`function bar(father="Kenny", son="Jerry")` 取代 `arguments` 参数
2. 在 JavaScript 里 null、undefined、0、-0、NaN 和 "" 都为 false
3. 使用 **对象展开语法(Object spread)** 来替换 `Object.assign` 用法, 即: `{ ...state, {name:Kenny} }` 来替换 `Object.assign({}, state, {name:Kenny})`
4. 事件 bind 放在constructor里更高效（bindings once, use forevermore）, 避免使用 Arrow function。如:
```
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}
handleClick() { console.log('clicked!'); }
render(){
  return(
   <Text onPress={this.handleClick}>Click Me</Text>
  )
}
```

## Linux / Mac OS X
1. 清除 DNS 缓存 `sudo killall -HUP mDNSResponder`