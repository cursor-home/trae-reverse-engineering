
// 模块: Fs


function Fs(e, t) {
  var s;
  if (typeof t == 'number') {
    var r = t;
    s = function s() {
      var i = Math.sin(r++) * 179426549;
      return i - Math.floor(i);
    };
  } else s = Math.random;
  for (var _r2 = e.length - 1; _r2 > 0; _r2 -= 1) {
    var i = Math.floor(s() * (_r2 + 1)),
      n = e[_r2];
    e[_r2] = e[i], e[i] = n;
  }
}

module.exports = {
  Fs
};
