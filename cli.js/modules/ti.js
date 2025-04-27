
// 模块: ti


function ti(e, t, s) {
  var r,
    i = -1;
  for (var n = 0; n < e.length; n++) {
    var a = e.charCodeAt(n);
    if (a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || a === 45 || a === 46 || a === 95 || a === 126 || t && a === 47 || s && a === 91 || s && a === 93 || s && a === 58) i !== -1 && (r += encodeURIComponent(e.substring(i, n)), i = -1), r !== void 0 && (r += e.charAt(n));else {
      r === void 0 && (r = e.substr(0, n));
      var o = U1[a];
      o !== void 0 ? (i !== -1 && (r += encodeURIComponent(e.substring(i, n)), i = -1), r += o) : i === -1 && (i = n);
    }
  }
  return i !== -1 && (r += encodeURIComponent(e.substring(i))), r !== void 0 ? r : e;
}

module.exports = {
  ti
};
