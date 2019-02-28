const fs = require("fs");
const path = require("path");

const iosRootPath = `${__dirname}/../../ios`;
const xcschemeFile = path.resolve(
  `${iosRootPath}/myapp.xcodeproj/xcshareddata/xcschemes/myapp.xcscheme`
);

fs.readFile(xcschemeFile, "utf-8", (readErr, file) => {
  if (readErr) {
    console.error("readFile:", readErr);
    return;
  }

  let left = null;
  let replaceValue = null;
  let oldString = "";
  let newString = "";
  // global.process.env.flag === release 表示 Debug- 切换到 Release
  const modeType = global.process.env.modeType.trim();

  if (modeType === "release") {
    const exc = /\s{3}<LaunchAction\n\s{6}buildConfiguration = "Debug"/g;
    if (exc.test(file)) {
      left = exc;
      replaceValue = '   <LaunchAction\n      buildConfiguration = "Release"';

      oldString = "Debug";
      newString = "Release";
      const pbxprojResult = file.replace(left, replaceValue);
      fs.writeFile(xcschemeFile, pbxprojResult, "utf-8", writeErr => {
        if (writeErr) {
          console.error("writeFile:", writeErr);
          return;
        }
        console.log(
          `🎉 🎉 🎉, buildConfiguration ${oldString} -> ${newString} is successful 👍 👍 👍!`
        );
      });
    }
  } else if (modeType === "debug") {
    const exc = /\s{3}<LaunchAction\n\s{6}buildConfiguration = "Release"/g;
    if (exc.test(file)) {
      left = exc;
      replaceValue = '   <LaunchAction\n      buildConfiguration = "Debug"';

      oldString = "Release";
      newString = "Debug";
      const pbxprojResult = file.replace(left, replaceValue);
      fs.writeFile(xcschemeFile, pbxprojResult, "utf-8", writeErr => {
        if (writeErr) {
          console.error("writeFile:", writeErr);
          return;
        }
        console.log(
          `🎉 🎉 🎉, buildConfiguration ${oldString} -> ${newString} is successful 👍 👍 👍!`
        );
      });
    }
  }
});
