## React Native 0.55.4 升 0.56.1

### Issues 1

* 升级至该版本后，WebView 无法直接使用 `source={{ html: this.state.html }}` ，需要添加 `originWhitelist={['*']}` 属性

### Issues 2

* 如果你设置了全局的字体样式，`Text.prototype.render` 返回为 `undefined` 了，需要改为 `Text.render`

### Issues 3

* 图片方面，如果你使用了 `resizeMode: Image.resizeMode.contain;` 会报错，需要改为`resizeMode: 'contain';`,

### Issues 4

* 其它 Android 问题就需要执行 [fix-all-gradle.js](../code/fix-all-gradle.js)，替换 node_modules 里的值。结合 package.json 里的 scripts 效果更好，见如下代码：

```javascript
"postinstall": "yarn fix-all-gradle",
"postuninstall": "yarn fix-all-gradle",
```

### Other

* to be continue...
