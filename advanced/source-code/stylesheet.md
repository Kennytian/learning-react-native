## StyleSheet

### 源码位置

* 线上地址： https://github.com/facebook/react-native/blob/master/Libraries/StyleSheet/StyleSheet.js
* 本地路径： node_modules/react-native/Libraries/StyleSheet/StyleSheet.js

### 1、细线（如头发丝一般细）

* #### 源码

```javascript
const hairlineWidth = PixelRatio.roundToNearestPixel(0.4);
if (hairlineWidth === 0) {
  hairlineWidth = 1 / PixelRatio.get();
}
```

* #### 解读

  用 PixelRatio 函数来获取手机设备的屏幕像素比，然后计算出头发丝一样细的线，这样就能有效的保障了不同手机上看到的细线都一样的。

* #### 使用

```javascript
{
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
}
```

### 2、定位(绝对定位)

* #### 源码

```javascript
const absoluteFillObject = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
```

* #### 解读

  react native 为我们定义了一组常用的绝对定位代码片段，好贴心啊

* #### 使用

```javascript
const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    top: 10,
    backgroundColor: "transparent"
  }
});
```

### 3、展开(样式)

* #### 源码

```javascript
function getStyle(style) {
  if (typeof style === "number") {
    return ReactNativePropRegistry.getByID(style);
  }
  return style;
}

function flattenStyle(style: ?StyleObj): ?Object {
  if (!style) {
    return undefined;
  }
  invariant(style !== true, "style may be false but not true");

  if (!Array.isArray(style)) {
    return getStyle(style);
  }

  var result = {};
  for (var i = 0, styleLength = style.length; i < styleLength; ++i) {
    var computedStyle = flattenStyle(style[i]);
    if (computedStyle) {
      for (var key in computedStyle) {
        result[key] = computedStyle[key];
      }
    }
  }
  return result;
}
```

* #### 解读

  将  数组样式和普通样式转换成一个对象格式的样式

* #### 使用

- StyleSheet.flatten([styles.listItem, styles.selectedListItem]) , 输出：{ flex: 1, fontSize: 16, color: 'green' }
- StyleSheet.flatten(styles.listItem)，输出：return { flex: 1, fontSize: 16, color: 'white' }

### 4、合并(样式)

* #### 源码

```javascript
compose(style1: ?StyleProp, style2: ?StyleProp): ?StyleProp {
    if (style1 && style2) {
      return [style1, style2];
    } else {
      return style1 || style2;
    }
  }
```

* #### 解读

  将样式合并在一起

* #### 使用

- StyleSheet.compose(style1, style1)
