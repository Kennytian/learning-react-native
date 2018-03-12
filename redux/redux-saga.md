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



