## 记一次 yarn 升级失败原因

1、早上打开电脑 `Terminal` 电脑提示 `yarn` 可以升级至 1.9.2，并提供一个链接：

> curl --compressed -o- -L https://yarnpkg.com/install.sh | bash

_注：如果安装时卡住不动，或者报安装超时，请参考之前的文章[下载 yarn 源码安装方法](./install-yarn-with-sourcecode.md)_

2、顺利安装后，在 `Terminal` 执行：`yarn -v`，依旧提示：1.7.0。

3、在 `Terminal` 执行：which yarn，显示：`/Users/kenny/.nvm/versions/node/v8.11.2/bin/yarn`

4、刚刚 yarn 显示安装在 `/Users/kenny/.yarn/bin/yarn` 啊？ 那先把 .nvm 下的 yarn 删除试试。

* rm ~/.nvm/versions/node/v8.11.2/bin/yarn\*\*
* rm -rf ~/.nvm/versions/node/v8.11.2/lib/node_modules/yarn

注：`v8.11.2` 为我当前安装的 `Node.js` 版本，后期会变化。

5、再一次在 `Terminal` 执行：`yarn -v`，正确的提示：1.9.2。

6、在 `Terminal` 执行：which yarn，显示：`/Users/kenny/.yarn/bin/yarn`
