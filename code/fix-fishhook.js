/* eslint-disable max-len */
const fs = require("fs");
const path = require("path");

const projectPath = `${__dirname}/../..`;
const mFile =
  "/node_modules/react-native/Libraries/WebSocket/RCTReconnectingWebSocket.m";
const xcodeproj =
  "/node_modules/react-native/Libraries/WebSocket/RCTWebSocket.xcodeproj/project.pbxproj";
const fishhookPath = path.resolve(projectPath + mFile);
const pbxprojPath = path.resolve(projectPath + xcodeproj);

fs.readFile(fishhookPath, "utf-8", (readErr, file) => {
  if (readErr) {
    console.error("readFile:", readErr);
    return;
  }

  const exc = /#if __has_include\(<React\/fishhook.h>\)/g;
  if (exc.test(file)) {
    console.log("\n🎉 🎉, The fishhook import 🐛 is fixed 👍👍.");
  } else {
    const originValue = /#import <fishhook\/fishhook.h>/g;
    const replaceValue =
      "\n#if __has_include(<React/fishhook.h>)\nimport <React/fishhook.h>\n#else\n#import <fishhook/fishhook.h>\n#endif";
    const fileResult = file.replace(originValue, replaceValue);
    fs.writeFile(fishhookPath, fileResult, "utf-8", writeErr => {
      if (writeErr) {
        console.error("writeFile:", writeErr);
        return;
      }
      console.log("\n🎉 🎉 🎉, the fishhook 🐛 is fixed 👍 👍 👍!");
    });
  }
});

fs.readFile(pbxprojPath, "utf-8", (readErr, file) => {
  if (readErr) {
    console.error("readFile:", readErr);
    return;
  }

  const exc1 = /B95B6FF921C23FCE00C4053E/g;
  if (exc1.test(file)) {
    console.log("🎉 🎉, PBXBuildFile section 🐛 is fixed 👍👍.");
  } else {
    const originValue = /\/\* End PBXBuildFile section \*\//g;
    const replaceValue =
      "\t\tB95B6FF921C23FCE00C4053E /* libfishhook.a in Frameworks */ = {isa = PBXBuildFile; fileRef = 3DBE0D001F3B181A0099AA32 /* libfishhook.a */; };\n/* End PBXBuildFile section */";
    const fileResult = file.replace(originValue, replaceValue);
    fs.writeFile(pbxprojPath, fileResult, "utf-8", writeErr => {
      if (writeErr) {
        console.error("writeFile:", writeErr);
        return;
      }
      console.log("🎉 🎉 🎉, PBXBuildFile section 🐛 is fixed 👍👍👍.");
    });
  }

  const exc2 = /libfishhook.a in Frameworks \*\/,/g;
  if (exc2.test(file)) {
    console.log("🎉 🎉, PBXFrameworksBuildPhase section 🐛 is fixed 👍👍.\n");
  } else {
    const originValue = /\t\t\tisa = PBXFrameworksBuildPhase;\n\t\t\tbuildActionMask = 2147483647;\n\t\t\tfiles = \(\s+\);/g;
    const replaceValue =
      "\t\t\tisa = PBXFrameworksBuildPhase;\n\t\t\tbuildActionMask = 2147483647;\n\t\t\tfiles = (\n\t\t\t\tB95B6FF921C23FCE00C4053E /* libfishhook.a in Frameworks */,\n\t\t\t);";
    const fileResult = file.replace(originValue, replaceValue);
    fs.writeFile(pbxprojPath, fileResult, "utf-8", writeErr => {
      if (writeErr) {
        console.error("writeFile:", writeErr);
        return;
      }
      console.log(
        "🎉 🎉 🎉, PBXFrameworksBuildPhase section 🐛 is fixed 👍👍👍.\n"
      );
    });
  }
});
