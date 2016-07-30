## Immutable 大法好

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
_注: 用数字2也可以作为 key存值, 但取值时要用a.get('2'), 用 a.get(2)会报undefined_

#### 1.7 of（扁平 pairs 转 Map）
<pre><code>let m:Map&ltany,any&gt = Map.of(1,'one',2,'two');
m.size; // 2
m.get(1); // 'one'
</code></pre>
_注: Map.of(1,2,3); // Missing value for key: 3_

_这里是m.get(1) 取值, **1是当作 key 而不是 index**_

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

_注: m1 在第2次赋值时会把上一次的值覆盖_

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