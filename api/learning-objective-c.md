## Objective C 基础知识

欢迎您帮忙纠错, 一起帮助更多的人。 一起来学习交流React, QQ群：[413381701](http://shang.qq.com/wpa/qunwpa?idkey=3b9474dacbf35e4a9659e89399758406e510e5b8a3f81109f7d07efaadc6056d)

**_`React Native` 虽然大多数工作量是前端 `JavaScript` 开发，但掌握基础的 `Objective C` 语法还是很有必要的。_**


### 属性声明
* `@property(attributes)` 数据类型 实例变量。 如：
    * `@property(nonatomic, assign) NSString* name;`
    * `@property(nonatomic, assign) unsigned int age;`

* `@synthesize` 实例变量1，实例变量2，... 实例变量n。 如：
    * @synthesize name, age;

### 属性分组
* 线程相关
    * 原子性 `atomic`（默认），会为**实例变量加锁**，只允许一个纯种操作，保证线程安全
    * 非原子性 `nonatomic`。 如：`@property(nonatomic, assign) unsigned int age;`
    
* 读/写
    * 只读 `readonly` 只生成 `getter` 方法，不生成 `setter` 方法。如：`@property(nonatomic, readonly) NSString* id;`
    * 读写 `readwrite`（默认）

