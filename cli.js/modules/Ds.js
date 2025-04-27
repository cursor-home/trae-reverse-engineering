
// 模块: Ds


function Ds() {
  _classCallCheck(this, Ds);
  this.b = [], this.a = function (e) {
    setTimeout(function () {
      throw e.stack ? w1.isErrorNoTelemetry(e) ? new w1(e.message + '\n\n' + e.stack) : new Error(e.message + '\n\n' + e.stack) : e;
    }, 0);
  };
}

module.exports = {
  Ds
};
