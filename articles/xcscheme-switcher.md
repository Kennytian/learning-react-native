## Node 命令切换 iOS 打 Debug 或 Release 包

其实就是用命令切换 `<LaunchAction buildConfiguration ="Debug"` 这部分 `Debug` 或 `Release` 的值。

我们先在 `package.json` 的 `scripts` 里配置如下两个脚本。

```
"switch-xcscheme-debug": "node scripts/xcscheme-switcher.js OTC-Debug",
"switch-xcscheme-release": "node scripts/xcscheme-switcher.js OTC-Release",
```

```js
const fs = require("fs");
const path = require("path");

const [appName, modeType] = process.argv[2].split("-");
const iosRootPath = `${__dirname}/../ios`;
const xcschemeFile = path.resolve(
  `${iosRootPath}/${appName}.xcodeproj/xcshareddata/xcschemes/${appName}.xcscheme`
);

fs.readFile(xcschemeFile, "utf-8", (readErr, file) => {
  if (readErr) {
    console.error("readFile:", readErr);
    return;
  }

  if (modeType === "Release") {
    const exc = /(<LaunchAction\s+buildConfiguration\s=\s")(Debug)(")/g;
    if (exc.test(file)) {
      const pbxprojResult = file.replace(exc, "$1Release$3");
      fs.writeFile(xcschemeFile, pbxprojResult, "utf-8", writeErr => {
        if (writeErr) {
          console.error("writeFile:", writeErr);
          return;
        }
        console.log(
          `🎉 🎉 🎉, buildConfiguration Debug -> Release is successful 👍 👍 👍!`
        );
      });
    }
  } else if (modeType === "Debug") {
    const exc = /(<LaunchAction\s+buildConfiguration\s=\s")(Release)(")/g;
    if (exc.test(file)) {
      const pbxprojResult = file.replace(exc, "$1Debug$3");
      fs.writeFile(xcschemeFile, pbxprojResult, "utf-8", writeErr => {
        if (writeErr) {
          console.error("writeFile:", writeErr);
          return;
        }
        console.log(
          `🎉 🎉 🎉, buildConfiguration Release -> Debug is successful 👍 👍 👍!`
        );
      });
    }
  }
});
```

这段 Node 值得注意的是：

* 参数
  > `OTC-Debug` 是参数，可以用 Node 里的 `process.argv[2]` 取到。
* 正则表达式
  > (xxx)(`Debug`)(zzz) 是用小括号将要查找的内容分 3 部分，然后替换中间的部分，$1`Release`$3
