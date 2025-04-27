
// 模块: pushTryEntry


function pushTryEntry(t) {
  var e = {
    tryLoc: t[0]
  };
  1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
}

module.exports = {
  pushTryEntry
};
