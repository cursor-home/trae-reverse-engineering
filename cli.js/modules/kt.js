
// 模块: Kt


function Kt(e, t) {
  var s;
  return e.authority && e.path.length > 1 && e.scheme === 'file' ? s = '//'.concat(e.authority).concat(e.path) : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? s = e.path.substr(1) : s = e.path[1].toLowerCase() + e.path.substr(2) : s = e.path, z && (s = s.replace(/\//g, '\\')), s;
}

module.exports = {
  Kt
};
