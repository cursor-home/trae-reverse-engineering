
// 模块: Ra


function Ra(e, t) {
  try {
    for (; t;) {
      if (e[t]) return t;
      var s = t.lastIndexOf('-');
      if (s > 0) t = t.substring(0, s);else return;
    }
  } catch (s) {
    console.error('Resolving language pack configuration failed.', s);
  }
}

module.exports = {
  Ra
};
