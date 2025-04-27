
// 模块: Oa


function Oa(e, t) {
  var s = process.env.VSCODE_PORTABLE;
  if (s) return Ne.join(s, 'user-data');
  var r = process.env.VSCODE_APPDATA;
  if (r) return Ne.join(r, t);
  var i = e['user-data-dir'];
  if (i) return i;
  switch (process.platform) {
    case 'win32':
      if (r = process.env.APPDATA, !r) {
        var n = process.env.USERPROFILE;
        if (typeof n != 'string') throw new Error('Windows: Unexpected undefined %USERPROFILE% environment variable');
        r = Ne.join(n, 'AppData', 'Roaming');
      }
      break;
    case 'darwin':
      r = Ne.join(Fn.homedir(), 'Library', 'Application Support');
      break;
    case 'linux':
      r = process.env.XDG_CONFIG_HOME || Ne.join(Fn.homedir(), '.config');
      break;
    default:
      throw new Error('Platform not supported');
  }
  return Ne.join(r, t);
}

module.exports = {
  Oa
};
