## Redux-saga 使用

### 一、入口 rootSaga
一般项目中使用了saga, 都会约定有一个rootSaga的文件（或者rootSaga的方法）

如：
```javascript
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
  // 下面的四个 Generator 函数会一次执行，不会阻塞执行
  yield fork(addItem)
  yield fork(removeItem)
  yield fork(toggleItem)
  yield fork(modifyItem)
} 
```

也有这个高级fork玩法，源自[ReactNativeStarterKits](https://github.com/agiletechvn/ReactNativeStarterKits/blob/master/src/store/sagas/auth.js)
```javascript
import { fork, all } from 'redux-saga/effects';
import auth from './auth';
import account from './account';

export default rootSaga = function* () {
  yield all([
    ...auth.map(watcher => fork(watcher)),
    ...account.map(watcher => fork(watcher))
  ]);
};
```
用map就能省去一条条的添加yield fork

### 二、API 解析
- `fork` 创建一条 Effect 描述信息，指示 middleware 以 **无阻塞调用** 方式执行
- `all` 创建一条 Effect 描述信息，指示 middleware **并行执行多个** Effect，并等待所有 Effect 完成。（类似 Promise.all([...]) 的行为）
- `put` 创建一条 Effect 描述信息，指示 middleware 发起一个**异步执行**的 action 到 Store。
- `call` 创建一条 Effect 描述信息，指示 middleware 调用 fn 函数, middleware 调用这个函数并检查它的结果。示例：
```javascript
yield put(getVersion({ isFetching: true }));
const location = {
  longitude: 39.9046900000,
  latitude: 116.4071700000,
};
const result = yield call(fetchAppVersion, location);
yield put(getVersion({
  ...result,
  isFetching: false,
}));
```

### actions 说明


