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
m2.get('a'); // 'B'
</code></pre>

#### 1.6 Array 转 Map
<pre><code>let a = Map({'one':1,'2':'two'});
a.size; // 2
a.get('one'); // 1
</code></pre>

#### 1.7 of（扁平 pairs 转 Map）
<pre><code>let m:Map<any,any> = Map.of(1,'one',2,'two');
m.size; // 2
m.get(1); // 'one'
如:Map.of(1,2,3); // Missing value for key: 3
</code></pre>

#### 1.8 toObject
<pre><code>let m = Map({'a':'A','b':'B'});
let o = m.toObject();
</code></pre>

#### 1.9 merge 用法
<pre><code>let m1 = Map({'a':'A','b':'B'});
let m2 = Map({'b':'BB','c':'C'});
let m3 = m1.merge(m2); //{'a':'A','b':'BB','c':'C'}
</code></pre>

#### 1.10 has 用法
<pre><code>let m1 = Map({'a':'A','b':'B'});
m1.has('b'); // true
</code></pre>
