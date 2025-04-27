
// 模块: defineIteratorMethods


function defineIteratorMethods(t) {
  ['next', 'throw', 'return'].forEach(function (e) {
    define(t, e, function (t) {
      return this._invoke(e, t);
    });
  });
}

module.exports = {
  defineIteratorMethods
};
