# 一句技巧

_本篇文章记录的技巧尽量保持与平时工作的 React Native 相关, 但也有例外。_

## React Native
1. 自定义属性中,必须选其中一种 `shape: PropTypes.oneOf(['round', 'square']).isRequired`
2. 自定义属性中,要么指定具体数字,要么用full `width: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['full'])]).isRequired`
3. 之前判断根据不同平台写 Style 时用`height: Platform.OS === 'ios' ? 200 : 100,` , 今天发现还有另一种写法 `...Platform.select({ ios: { top : 20 }, android : { top : 10 } }),`

## iOS
1. 要添加或修改 `header` 引用, 可以打开 `pbxproj` 文件, 找到 `HEADER_SEARCH_PATHS` 节点(注意**Debug**,**Release**版), 添加或修改相应引用

## Git
1. 删除**最后一次**缓存记录 `git stash drop stash@{0}`
2. 应用**指定某一次**缓存记录 `git stash apply stash@{3}`

## ES6
1. 用**不定参数** `function foo(a, ...z)`和**默认参数**`function bar(father="Kenny", son="Jerry")` 取代 `arguments` 参数

## Linux / Mac OS X
1. 清除 DNS 缓存 `sudo killall -HUP mDNSResponder`