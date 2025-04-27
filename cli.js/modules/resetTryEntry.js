
// 模块: resetTryEntry


function resetTryEntry(t) {
  var e = t.completion || {};
  e.type = 'normal', delete e.arg, t.completion = e;
}

module.exports = {
  resetTryEntry
};
