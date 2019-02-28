const fs = require("fs");
const path = require("path");

const projectPath = `${__dirname}/../..`;

const qqFile = "/node_modules/@pangu/react-native-qq/android/build.gradle";
const qqformPath = path.resolve(projectPath + qqFile);

try {
  let fileContent = fs.readFileSync(qqformPath, "utf-8");
  const originValue1 = /buildToolsVersion "23.0.1"/g;
  const replaceValue1 = "buildToolsVersion '26.0.3'";
  fileContent = fileContent.replace(originValue1, replaceValue1);

  const originValue2 = /compileSdkVersion 23/g;
  const replaceValue2 = "compileSdkVersion 26";
  fileContent = fileContent.replace(originValue2, replaceValue2);

  const originValue3 = / implementation /g;
  const replaceValue3 = " compile ";
  fileContent = fileContent.replace(originValue3, replaceValue3);

  fs.writeFileSync(qqformPath, fileContent, "utf8");
} catch (e) {
  console.log("error react-native-qq ", e);
}

const umengFile =
  "/node_modules/@pangu/react-native-umeng/android/build.gradle";
const umengformPath = path.resolve(projectPath + umengFile);

try {
  let fileContent = fs.readFileSync(umengformPath, "utf-8");
  const originValue1 = /buildToolsVersion "23.0.2"/g;
  const replaceValue1 = "buildToolsVersion '26.0.3'";
  fileContent = fileContent.replace(originValue1, replaceValue1);

  const originValue2 = /compileSdkVersion 23/g;
  const replaceValue2 = "compileSdkVersion 26";
  fileContent = fileContent.replace(originValue2, replaceValue2);

  const originValue3 = / implementation /g;
  const replaceValue3 = " compile ";
  fileContent = fileContent.replace(originValue3, replaceValue3);

  fs.writeFileSync(umengformPath, fileContent, "utf8");
} catch (e) {
  console.log("error react-native-wechat ", e);
}

const wechatFile =
  "/node_modules/@pangu/react-native-wechat/android/build.gradle";
const wechatformPath = path.resolve(projectPath + wechatFile);

try {
  let fileContent = fs.readFileSync(wechatformPath, "utf-8");
  const originValue1 = /buildToolsVersion "23.0.1"/g;
  const replaceValue1 = "buildToolsVersion '26.0.3'";
  fileContent = fileContent.replace(originValue1, replaceValue1);

  const originValue2 = /compileSdkVersion 23/g;
  const replaceValue2 = "compileSdkVersion 26";
  fileContent = fileContent.replace(originValue2, replaceValue2);

  const originValue3 = / implementation /g;
  const replaceValue3 = " compile ";
  fileContent = fileContent.replace(originValue3, replaceValue3);

  fs.writeFileSync(wechatformPath, fileContent, "utf8");
} catch (e) {
  console.log("error react-native-wechat ", e);
}

const jpushFile = "/node_modules/jpush-react-native/android/build.gradle";
const jpushformPath = path.resolve(projectPath + jpushFile);

try {
  let fileContent = fs.readFileSync(jpushformPath, "utf-8");
  const originValue1 = /buildToolsVersion '26.0.2'/g;
  const replaceValue1 = "buildToolsVersion '26.0.3'";
  fileContent = fileContent.replace(originValue1, replaceValue1);

  const originValue2 = /compileSdkVersion 23/g;
  const replaceValue2 = "compileSdkVersion 26";
  fileContent = fileContent.replace(originValue2, replaceValue2);

  const originValue3 = / implementation /g;
  const replaceValue3 = " compile ";
  fileContent = fileContent.replace(originValue3, replaceValue3);

  fs.writeFileSync(jpushformPath, fileContent, "utf8");
} catch (e) {
  console.log("error jpush-react-native ", e);
}

const jcoreFile = "/node_modules/jcore-react-native/android/build.gradle";
const jcoreformPath = path.resolve(projectPath + jcoreFile);

try {
  let fileContent = fs.readFileSync(jcoreformPath, "utf-8");
  const originValue1 = /buildToolsVersion '26.0.2'/g;
  const replaceValue1 = "buildToolsVersion '26.0.3'";
  fileContent = fileContent.replace(originValue1, replaceValue1);

  const originValue2 = /compileSdkVersion 23/g;
  const replaceValue2 = "compileSdkVersion 26";
  fileContent = fileContent.replace(originValue2, replaceValue2);

  const originValue3 = / implementation /g;
  const replaceValue3 = " compile ";
  fileContent = fileContent.replace(originValue3, replaceValue3);

  fs.writeFileSync(jcoreformPath, fileContent, "utf8");
} catch (e) {
  console.log("error jcore-react-native ", e);
}

const deviceInfoFile =
  "/node_modules/react-native-device-info/android/build.gradle";
const deviceInfoformPath = path.resolve(projectPath + deviceInfoFile);

try {
  let fileContent = fs.readFileSync(deviceInfoformPath, "utf-8");
  const originValue1 = /buildToolsVersion "25.0.2"/g;
  const replaceValue1 = "buildToolsVersion '26.0.3'";
  fileContent = fileContent.replace(originValue1, replaceValue1);

  const originValue2 = /compileSdkVersion 23/g;
  const replaceValue2 = "compileSdkVersion 26";
  fileContent = fileContent.replace(originValue2, replaceValue2);

  const originValue3 = / implementation /g;
  const replaceValue3 = " compile ";
  fileContent = fileContent.replace(originValue3, replaceValue3);

  fs.writeFileSync(deviceInfoformPath, fileContent, "utf8");
} catch (e) {
  console.log("error react-native-device-info ", e);
}

const svgFile = "/node_modules/react-native-svg/android/build.gradle";
const svgformPath = path.resolve(projectPath + svgFile);

try {
  let fileContent = fs.readFileSync(svgformPath, "utf-8");
  const originValue1 = /buildToolsVersion "23.0.1"/g;
  const replaceValue1 = "buildToolsVersion '26.0.3'";
  fileContent = fileContent.replace(originValue1, replaceValue1);

  const originValue2 = /compileSdkVersion 23/g;
  const replaceValue2 = "compileSdkVersion 26";
  fileContent = fileContent.replace(originValue2, replaceValue2);

  const originValue3 = / implementation /g;
  const replaceValue3 = " compile ";
  fileContent = fileContent.replace(originValue3, replaceValue3);

  fs.writeFileSync(svgformPath, fileContent, "utf8");
} catch (e) {
  console.log("error react-native-svg ", e);
}

const imagePickerFile =
  "/node_modules/react-native-image-picker/android/build.gradle";
const imagePickerformPath = path.resolve(projectPath + imagePickerFile);

try {
  let fileContent = fs.readFileSync(imagePickerformPath, "utf-8");
  const originValue1 = /def DEFAULT_BUILD_TOOLS_VERSION = "25.0.2"/g;
  const replaceValue1 = 'def DEFAULT_BUILD_TOOLS_VERSION = "26.0.3"';
  fileContent = fileContent.replace(originValue1, replaceValue1);

  const originValue2 = /def DEFAULT_COMPILE_SDK_VERSION = 25/g;
  const replaceValue2 = "def DEFAULT_COMPILE_SDK_VERSION = 26";
  fileContent = fileContent.replace(originValue2, replaceValue2);

  const originValue3 = / implementation /g;
  const replaceValue3 = " compile ";
  fileContent = fileContent.replace(originValue3, replaceValue3);

  const originValue4 = / testImplementation /g;
  const replaceValue4 = " testCompile ";
  fileContent = fileContent.replace(originValue4, replaceValue4);

  fs.writeFileSync(imagePickerformPath, fileContent, "utf8");
} catch (e) {
  console.log("error react-native-image-picker ", e);
}

const toastFile =
  "/node_modules/@remobile/react-native-toast/android/build.gradle";
const toastformPath = path.resolve(projectPath + toastFile);

try {
  let fileContent = fs.readFileSync(toastformPath, "utf-8");
  const originValue1 = /buildToolsVersion "23.0.1"/g;
  const replaceValue1 = "buildToolsVersion '26.0.3'";
  fileContent = fileContent.replace(originValue1, replaceValue1);

  const originValue2 = /compileSdkVersion 23/g;
  const replaceValue2 = "compileSdkVersion 26";
  fileContent = fileContent.replace(originValue2, replaceValue2);

  const originValue3 = / implementation /g;
  const replaceValue3 = " compile ";
  fileContent = fileContent.replace(originValue3, replaceValue3);

  fs.writeFileSync(toastformPath, fileContent, "utf8");
} catch (e) {
  console.log("error react-native-toast ", e);
}

const viewShotFile =
  "/node_modules/react-native-view-shot/android/build.gradle";
const viewShotformPath = path.resolve(projectPath + viewShotFile);

try {
  let fileContent = fs.readFileSync(viewShotformPath, "utf-8");
  const originValue1 = /buildToolsVersion "26.0.1"/g;
  const replaceValue1 = "buildToolsVersion '26.0.3'";
  fileContent = fileContent.replace(originValue1, replaceValue1);

  const originValue2 = /compileSdkVersion 26/g;
  const replaceValue2 = "compileSdkVersion 26";
  fileContent = fileContent.replace(originValue2, replaceValue2);

  const originValue3 = / implementation /g;
  const replaceValue3 = " compile ";
  fileContent = fileContent.replace(originValue3, replaceValue3);

  fs.writeFileSync(viewShotformPath, fileContent, "utf8");
} catch (e) {
  console.log("error react-native-view-shot ", e);
}

const fsFile = "/node_modules/react-native-fs/android/build.gradle";
const fsformPath = path.resolve(projectPath + fsFile);

try {
  let fileContent = fs.readFileSync(fsformPath, "utf-8");
  const originValue1 = /buildToolsVersion "25.0.0"/g;
  const replaceValue1 = "buildToolsVersion '26.0.3'";
  fileContent = fileContent.replace(originValue1, replaceValue1);

  const originValue2 = /compileSdkVersion 25/g;
  const replaceValue2 = "compileSdkVersion 26";
  fileContent = fileContent.replace(originValue2, replaceValue2);

  const originValue3 = / implementation /g;
  const replaceValue3 = " compile ";
  fileContent = fileContent.replace(originValue3, replaceValue3);

  fs.writeFileSync(fsformPath, fileContent, "utf8");
} catch (e) {
  console.log("error react-native-fs ", e);
}

const webviewcrossplatformFile =
  "/node_modules/react-native-webview-crossplatform/android/build.gradle";
const webviewcrossplatformformPath = path.resolve(
  projectPath + webviewcrossplatformFile
);

try {
  let fileContent = fs.readFileSync(webviewcrossplatformformPath, "utf-8");
  const originValue1 = /def DEFAULT_BUILD_TOOLS_VERSION {13}= "27.0.3"/g;
  const replaceValue1 =
    'def DEFAULT_BUILD_TOOLS_VERSION             = "26.0.3"';
  fileContent = fileContent.replace(originValue1, replaceValue1);

  const originValue2 = /def DEFAULT_COMPILE_SDK_VERSION {13}= 27/g;
  const replaceValue2 = "def DEFAULT_COMPILE_SDK_VERSION             = 26";
  fileContent = fileContent.replace(originValue2, replaceValue2);

  const originValue3 = / implementation /g;
  const replaceValue3 = " compile ";
  fileContent = fileContent.replace(originValue3, replaceValue3);

  fs.writeFileSync(webviewcrossplatformformPath, fileContent, "utf8");
} catch (e) {
  console.log("error react-native-webview-crossplatform ", e);
}

const videoFile = "/node_modules/react-native-video/android/build.gradle";
const videoformPath = path.resolve(projectPath + videoFile);

try {
  let fileContent = fs.readFileSync(videoformPath, "utf-8");
  const originValue1 = /buildToolsVersion safeExtGet('buildToolsVersion', '27.0.3')/g;
  const replaceValue1 =
    "buildToolsVersion safeExtGet('buildToolsVersion', '26.0.3')";
  fileContent = fileContent.replace(originValue1, replaceValue1);

  const originValue2 = /compileSdkVersion safeExtGet('compileSdkVersion', 27)/g;
  const replaceValue2 = "compileSdkVersion safeExtGet('compileSdkVersion', 26)";
  fileContent = fileContent.replace(originValue2, replaceValue2);

  const originValue3 = / implementation /g;
  const replaceValue3 = " compile ";
  fileContent = fileContent.replace(originValue3, replaceValue3);

  fs.writeFileSync(videoformPath, fileContent, "utf8");
} catch (e) {
  console.log("error react-native-video ", e);
}

const screenFile = "/node_modules/rn-splash-screen/android/build.gradle";
const screenformPath = path.resolve(projectPath + screenFile);

try {
  let fileContent = fs.readFileSync(screenformPath, "utf-8");
  const originValue1 = /buildToolsVersion "25.0.1"/g;
  const replaceValue1 = "buildToolsVersion '26.0.3'";
  fileContent = fileContent.replace(originValue1, replaceValue1);

  const originValue2 = /compileSdkVersion 25/g;
  const replaceValue2 = "compileSdkVersion 26";
  fileContent = fileContent.replace(originValue2, replaceValue2);

  const originValue3 = / implementation /g;
  const replaceValue3 = " compile ";
  fileContent = fileContent.replace(originValue3, replaceValue3);

  fs.writeFileSync(screenformPath, fileContent, "utf8");
} catch (e) {
  console.log("error rn-splash-screen ", e);
}

const fetchFile = "/node_modules/rn-fetch-blob/android/build.gradle";
const fetchformPath = path.resolve(projectPath + fetchFile);

try {
  let fileContent = fs.readFileSync(fetchformPath, "utf-8");
  const originValue1 = /buildToolsVersion safeExtGet('buildToolsVersion', '26.0.3')/g;
  const replaceValue1 =
    "buildToolsVersion safeExtGet('buildToolsVersion', '26.0.3')";
  fileContent = fileContent.replace(originValue1, replaceValue1);

  const originValue2 = /compileSdkVersion safeExtGet('compileSdkVersion', 26)/g;
  const replaceValue2 = "compileSdkVersion safeExtGet('compileSdkVersion', 26)";
  fileContent = fileContent.replace(originValue2, replaceValue2);

  const originValue3 = / implementation /g;
  const replaceValue3 = " compile ";
  fileContent = fileContent.replace(originValue3, replaceValue3);

  fs.writeFileSync(fetchformPath, fileContent, "utf8");
} catch (e) {
  console.log("error rn-fetch-blob ", e);
}
