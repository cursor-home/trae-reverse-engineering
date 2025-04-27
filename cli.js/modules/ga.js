
// 模块: ga


function ga() {
  try {
    typeof process.env.VSCODE_CWD != 'string' && (process.env.VSCODE_CWD = process.cwd()), process.platform === 'win32' && process.chdir(fe.dirname(process.execPath));
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  ga
};
