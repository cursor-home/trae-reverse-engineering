
// 模块: Context


function Context(t) {
  this.tryEntries = [{
    tryLoc: 'root'
  }], t.forEach(pushTryEntry, this), this.reset(!0);
}

module.exports = {
  Context
};
