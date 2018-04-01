# react-native-router-flux

### Router

路由器属性介绍

* name 路由器名称，string 类型
* dispatch 调度，bool 类型
* hideNavBar 隐藏导航栏， bool 类型
* onFocus 获取焦点，function 类型
* `<Router name='mainRouter' hideNavBar={true} dispatch={this._dispatch} onFocus={this._onFocus}>`

### Schema

路由模式介绍

* name 模式名称，string 类型
* type 模式类型，enum 类型，如： `type="switch"`
* icon 图标，component 类型
* `<Schema name="tab" type="switch" icon={TabIcon}/>`

### Route

路由介绍

* name 路由名称，string 类型
* schema 模式， enum 类型，如： `schema="tab"`
* title 显示的标题，string 类型
* index 显示顺序， number 类型，如： `index={0}`
* hideNavBar 隐藏导航栏，bool 类型，如： `hideNavBar={true}`
* initial 是否初始化，bool 类型，如： `initial={true}`
* type 模式类型，enum 类型（switch、replace、modal），如： `type="modal"`

* `<Route name="message_list" schema="tab" title="消息" index={2} hasMessage={this.getMessage} hideNavBar={true} component={MessageList}/>`
