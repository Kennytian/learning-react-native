## 下载 yarn 源码安装方法

### 失败过程

打开一台老 Mac 电脑上发现 yarn 的版本还非常早

```
localhost:~ kenny$ yarn --version
0.16.1

```

那就直接使用命令升级吧， `curl -o- -L https://yarnpkg.com/install.sh | bash`

**Oops，失败了！** 网络原因，老是报下载 `https://yarnpkg.com/latest.tar.gz` 超时


### 安装步骤

1. 我们用迅雷下载 `https://yarnpkg.com/latest.tar.gz`, 然后进入文件目录

2. 在命令行执行 `tar zvxf latest.tar.gz` ，会生成一个 yarn 最新版本的目录，如：
```
localhost:Downloads kenny$ tar zvxf latest.tar.gz 
x yarn-v1.5.1/LICENSE
x yarn-v1.5.1/README.md
x yarn-v1.5.1/bin/
x yarn-v1.5.1/bin/yarnpkg
x yarn-v1.5.1/bin/yarn.js
x yarn-v1.5.1/bin/yarn.cmd
x yarn-v1.5.1/bin/yarnpkg.cmd
x yarn-v1.5.1/bin/yarn
x yarn-v1.5.1/lib/
x yarn-v1.5.1/lib/v8-compile-cache.js
x yarn-v1.5.1/lib/cli.js
x yarn-v1.5.1/package.json
```

3. 进入目录 `cd yarn-v1.5.1/`

4. 为 yarn 创建目录 `sudo mkdir ~/.yarn`

5. 拷贝当前 yarn 包至当前用户 .yarn 默认目录， `sudo cp -R ./* ~/.yarn`

6. 配置文件可能是你的 `.profile`、`.bash_profile`、`.bashrc`、`.zshrc` 等, 在其中一个文件里添加 `export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"`

7. 在命令行里验证，如：
```
localhost:yarn-v1.5.1 kenny$ yarn --version
1.5.1
```

### 总结

1. 下载失败的原因有可能与我朝处于[大局域网]内有关

2. `curl -o` 表示 `--output FILE   Write to FILE instead of stdout`

3. `curl -L` 表示 `Follow redirects (H)`，其中 H 表示 `(H) means HTTP/HTTPS only`

4. 解压命令解析 `tar zvxf`，中的 `zvxf` 分别表示
```
x : 从 tar 包中把文件提取出来
z : 表示 tar 包是被 gzip 压缩过的，所以解压时需要用 gunzip 解压
v : 显示详细信息
f xxx.tar.gz : 指定被处理的文件是 xxx.tar.gz
```
5. 复制命令解析 `sudo cp -R ./* ~/.yarn` 中 R 表示**递归**复制，* 表示**文件夹**与**文件**
