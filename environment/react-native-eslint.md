### React Native ESLint & Airbnb 配置

```diff
- 欢迎您帮忙纠错, 一起帮助更多的人。 一起来学习交流React, QQ群：413381701
```

我在配置的时候也遇坑无数，差不多搞了半天才配置完毕，现记录下来，供以后参考。

#### 0.遇坑环境
```js
{ npm: '2.15.9',
  ares: '1.10.1-DEV',
  http_parser: '2.7.0',
  icu: '56.1',
  modules: '46',
  node: '4.6.0',
  openssl: '1.0.2j',
  uv: '1.9.1',
  v8: '4.5.103.37',
  zlib: '1.2.8' }
```
按着网上的教程，一步一步来。补充一句：-d 是 detail 的意思，可以看安装的细节。

Step 0-1 `npm install -g eslint`

Step 0-2 `npm install --save-dev -d eslint-plugin-react`

Step 0-3 `npm install --save-dev -d eslint-plugin-react-native`

Step 0-4 `npm install --save-dev -d eslint-config-airbnb`

错误来了，airbnb 死活安装不上，报如下错误

![airbnb can not install](http://ww4.sinaimg.cn/mw690/77c29b23jw1f94nlzi8dtj20i90attbn.jpg)

满世界找资料，

网上的解决方案没有一个是管用的，后来问群里好友，告诉我用 cnpm 试试，结果神奇的一幕出现了。

![airbnb installed successful with cnpm](http://ww4.sinaimg.cn/mw690/77c29b23jw1f94nlj37m7j20i805njtc.jpg)


