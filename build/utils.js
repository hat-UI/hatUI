const path = require("path");
const existsSync = require("fs").existsSync;
const process = require("process");
const root = process.cwd();
const { execSync } = require("child_process");
const ora = require("ora");
const log = require("./log");

function checkDll() {
  return new Promise((resolve, reject) => {
    log.info(`检测是否已生成Dll动态链接库`);
    const filePath = path.resolve(__dirname, "../sites/demo/dll/framework.dll.js");
    if (!existsSync(filePath)) {
      downloadDll()
        .then(() => {
          resolve();
        })
        .catch(err => {
          reject(err);
        });
      return;
    }
    log.success("已存在Dll链接库");
    resolve();
  });
}

function execScript(command) {
  execSync(command, (error, stdout, stderr) => {
    if (error) {
      log.error(error);
      reject();
    } else {
      log.info(stdout);
      resolve();
    }
  });
}

function downloadDll() {
  return new Promise((resolve, reject) => {
    const spinner = ora(`开始安装Dll链接库...`);
    spinner.start();
    try {
      execScript(`npm run demo:dll`);
      spinner.succeed("已安装成功Dll链接库，开启打包进程...");
      resolve();
    } catch (err) {
      spinner.fail();
      reject(err);
    }
  });
}

function getNpmParam() {
  const env = process.env.NODE_ENV;
  return env;
}

function isProduction() {
  return getNpmParam() === "production";
}

function getScssVariable() {
  const pkgPath = `${root}/package.json`;
  const pkg = existsSync(pkgPath) ? require(pkgPath) : {};

  let data = null;
  let themePath = pkg.theme;
  if (!themePath) {
    themePath = "./src/styles/variable.scss";
  }
  if (isString(themePath)) {
    if (existsSync(themePath)) {
      const sassImport = resolvePath(themePath);
      data = `@charset "UTF-8"; @import ${sassImport};`;
    }
  } else if (isArray(themePath)) {
    let sassImports = themePath;
    sassImports = sassImports.map(theme => {
      if (existsSync(theme)) {
        return resolvePath(theme);
      } else {
        console.log(`主题目录 ${theme} 不存在`);
      }
      return "";
    });
    data = `@charset "UTF-8"; @import ${sassImports.join(",")};`;
  }
  return data;
}

function resolvePath(path) {
  if (path) {
    // <rootDir>
    if (path.indexOf("<rootDir>") === 0) {
      return `"${path.replace("<rootDir>", root).replace(/\\/g, "\\\\")}"`;
    } else {
      return `"${resolve(path).replace(/\\/g, "\\\\")}"`;
    }
  } else {
    return "";
  }
}

function resolve(dir) {
  return path.join(root, dir);
}

function isString(val) {
  return typeof val === "string";
}

function isArray(obj) {
  return Array.isArray(obj);
}

module.exports = {
  downloadDll,
  execScript,
  checkDll,
  getNpmParam,
  isProduction,
  getScssVariable
};
