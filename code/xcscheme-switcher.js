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
