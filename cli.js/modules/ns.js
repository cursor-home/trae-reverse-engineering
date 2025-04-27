
// 模块: ns


function ns(e, t) {
  return t.trimForExclusions && e.endsWith('/**') ? e.substr(0, e.length - 2) : e;
}

module.exports = {
  ns
};
