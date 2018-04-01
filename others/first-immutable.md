## Immutable 大法好

* [fromJS 介绍](https://github.com/Kennytian/learning-react-native/blob/master/others/first-immutable.md#0-fromjs-用法)
* [Map 介绍](https://github.com/Kennytian/learning-react-native/blob/master/others/first-immutable.md#1-map-用法)
* [Range 介绍](https://github.com/Kennytian/learning-react-native/blob/master/others/first-immutable.md#2-range-用法)
* [Iterable 介绍](https://github.com/Kennytian/learning-react-native/blob/master/others/first-immutable.md#3-Iterable-用法)

### 0. fromJS 用法

#### 0.1 介绍

深度转换扁平的 JS 对象和 arrays 为 Immutable Map 和 List。

#### 0.2 项目中使用

```
let sourceSame = is(fromJS(nextProps.source), fromJS(this.props.source))
```

#### 0.3 深层取值

```
let m = fromJS({a: {b: {c: 321}}});
let n = m.getIn(['a', 'b']); //Map {}
let o = m.getIn(['a', 'b', 'c']); //321
let p = m.getIn(['a','c']); //undefined
let project = data.projects.getIn(['projects', data.props.id])
```

#### 0.4 深层编辑

```
let m = fromJS({a: {b: {c: 321}}});
let n = m.updateIn(['a', 'b', 'c'], value=>value * 3).toJS(); //{a: {b: {c: 963}}}
```

#### 0.5 深层删除

```
let m = fromJS({a: {b: {c: 321}}});
let n = m.updateIn(['a', 'b'], map=>map.remove('c')).toJS(); //{a: {b: {}}}
```

#### 0.6 深层设值

```
let m = fromJS({a: {b: {c: 10}}});
let n = m.updateIn(['a', 'b'], map=>map.set('d', 20)).toJS(); //{a:{b:{c:10,d:20}}
```

#### 0.7 深层添加值

```
let m = fromJS({a:{b:[1,2,3]}});
let n = m.updateIn(['a','b'],list =>list.push(10)).toJS(); //{a: {b: [1,2,3,10]}}
```

#### 0.8 遍历 map 设值

```
let m = fromJS({a: {b: [1, 3, 5]}});
let n = m.updateIn(['a', 'b'], list=>list.map(value=>value * value)).toJS(); //{a:{b:{1,9,25}}}
```

#### 0.9 如果字符串有空隙,就可以插入一个新 map

```
let m = fromJS({a: {b: {c: 10}}});
let n = m.updateIn(['a','z'], Map(), map=>map.set('d', 20)).toJS(); //{a: {b: {c: 10}, z: {d: 20}}}
```

#### 0.10 提供快速设置值

```
let m = Map().setIn(['a','b','c'],'X').toJS(); //{a:{b:{c:'X'}}}
```

### 1. Map 用法

#### 1.1 get

<pre><code>let m = Map({'a':'A', 'b':'B'});
m.get('a'); // 'A'
m.get('b'); // 'B'
</code></pre>

#### 1.2 size

<pre><code>let m = Map({'a':'A', 'b':'B'});
m.size; // 2
</code></pre>

#### 1.3 Seq 转 Map

将一个 sequence 转为 map

<pre><code>let s = Seq({'a':'A', 'b':'B'});
let m = Map(s);
m.size; // 2
m.get('b'); // 'B'
</code></pre>

#### 1.4 List 转 Map

将一个 list 转为 map<pre><code>let l = List([
List(['a','A']),
List(['b','B'])
]);
let m = Map(l);
m.size; // 2
m.get('a'); // 'A'
</code></pre>

#### 1.5 复制一个 Map

<pre><code>let m1 = Map({'a':'A','b':'B'});
let m2 = Map(m1);
m2.size; // 2
m2.get('b'); // 'B'
</code></pre>

#### 1.6 Array 转 Map

<pre><code>let a = Map({'one':1,2:'two'});
a.size; // 2
a.get('one'); // 1
</code></pre>

_注: 用数字 2 也可以作为 key 存值, 但取值时要用 a.get('2'), 用 a.get(2)会报 undefined_

#### 1.7 of（扁平 pairs 转 Map）

<pre><code>let m:Map&ltany,any&gt = Map.of(1,'one',2,'two');
m.size; // 2
m.get(1); // 'one'
</code></pre>

_注: Map.of(1,2,3); // Missing value for key: 3_

_这里是 m.get(1) 取值, **1 是当作 key 而不是 index**_

#### 1.8 toObject

<pre><code>let m = Map({'a':'A','b':'B'});
let o = m.toObject(); // {a: "A", b: "B"}
</code></pre>

#### 1.9 merge 用法

<pre><code>let m1 = Map({'a':'A',"b":'B'});
let m2 = Map({"b":"BB",2:'two'});
let m3 = m1.merge(m2);
let o = m3.toObject(); //{2: "two", a: "A", b: "BB"}
</code></pre>

_注: merge 后数据是按 key 的顺序来排列的_

#### 1.10 has 用法

<pre><code>let m1 = Map({'a':'A','b':'B'});
m1.has('b'); // true
</code></pre>

#### 1.11 set 用法

<pre><code>let m1 = Map();
let m2 = m1.set('a', 'A');
let m3 = m1.set('b', 'B');
let m4 = m2.set('b', 'B');
m1.toObject(); // Object {}
m2.toObject(); // Object {a: "A"}
m3.toObject(); // Object {b: "B"}
m4.toObject(); // Object {a: "A", b: "B"}
</code></pre>

_注: m1 在第 2 次赋值时会把上一次的值覆盖_

#### 1.12 remove 用法

<pre><code>let m1 = Map();
let m2 = m1.set('a', 'A');
let m3 = m2.set('b', 'B');
let m4 = m3.remove('a');
console.debug(m3.toObject());
console.debug(m4.toObject());
m3.toObject(); // Object {a: "A", b: "B"}
m4.toObject(); // Object { b: "B"}
</code></pre>

_注: 与 1.11 一样, m3.remove 后要重新赋值 m4,它里面的值才会变化_

#### 1.13 predicate 用法

<pre><code>let m = Map({a:'a',b:'b',c:'0',d:'1',e:'2'});
let r = m.map(v=>v.toUpperCase());
let s = m.mapKeys(k=>k.toUpperCase());
let t = m.filter(f=>f % 2 === 1);
let t = m.filterNot(f=>f % 2 === 1);
r.toObject(); // {a: "A", b: "B", c: "0", d: "1", e: "2"}
s.toObject(); // {A: "a", B: "b", C: "0", D: "1", E: "2"}
t.toObject(); // {d: "1"}
u.toObject(); // {a: "a", b: "b", c: "0", e: "2"}
</code></pre>

#### 1.14 keySeq, flip

<pre><code>let m = Map({a:1,b:2,c:3});
m.keySeq().toObject(); // {0: "a", 1: "b", 2: "c"}
m.flip().toObject(); // {1: "a", 2: "b", 3: "c"}
</code></pre>

_keySeq: 取出 key 的序列, 从 0 开始索引_

_flip: key 与 value 互换_

#### 1.15 toList

<pre><code>let m = Map({a:1,b:2,c:3});
m.toList.toObject(); // {0: 1, 1: 2, 2: 3}
</code></pre>

_toList 是将 Map 的 key 换成了 index_

### 2. Range 用法

#### 2.1 Range 构造函数

<pre><code>Range() // [0,1,2,3,...,Infinity]
Range(10) // [10,11,12,13,...,Infinity]
Range(10,15) // [10,11,12,13,14]
Range(10,30,5) // [10,15,20,25]
Range(30,10,5) // [30,25,20,15]
Range(30,30,5) // []
</code></pre>

### 3. Iterable 用法

#### 3.1 isIterable

<pre><code>
let seq = Seq.of(1,2,3,4);
if(Iterable.isIterable(seq)) {
  console.debug('true');
}
</code></pre>

<pre><code>
if (Iterable.isIterable(state)) {
  return state.toJS();
}
return state;
</code></pre>
