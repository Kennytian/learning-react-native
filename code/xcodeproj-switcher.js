const fs = require("fs");
const path = require("path");

const iosRootPath = `${__dirname}/../../ios`;
const pbxprojFile = path.resolve(
  `${iosRootPath}/myapp.xcodeproj/project.pbxproj`
);

// switch 'Debug-iphonesimulator' between 'Debug-iphoneos'
fs.readFile(pbxprojFile, "utf-8", (readErr, file) => {
  if (readErr) {
    console.error("readFile:", readErr);
    return;
  }

  // global.process.env.modeType === release 表示 Debug-iphonesimulator 切换到 Debug-iphoneos
  const modeType = global.process.env.modeType.trim();

  if (modeType === "release") {
    const pbxprojResult = file.replace(
      /Debug-iphonesimulator/g,
      "Debug-iphoneos"
    );
    fs.writeFile(pbxprojFile, pbxprojResult, "utf-8", writeErr => {
      if (writeErr) {
        console.error("writeFile:", writeErr);
        return;
      }
      console.log(
        "🎉 🎉 🎉, Debug-iphonesimulator -> Debug-iphoneos is successful 👍 👍 👍!"
      );
    });
  } else if (modeType === "debug") {
    const pbxprojResult = file.replace(
      /Debug-iphoneos/g,
      "Debug-iphonesimulator"
    );
    fs.writeFile(pbxprojFile, pbxprojResult, "utf-8", writeErr => {
      if (writeErr) {
        console.error("writeFile:", writeErr);
        return;
      }
      console.log(
        "🎉 🎉 🎉, Debug-iphoneos -> Debug-iphonesimulator is successful 👍 👍 👍!"
      );
    });
  }
});
