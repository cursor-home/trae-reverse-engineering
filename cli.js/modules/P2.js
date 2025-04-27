
// 模块: P2


function P2(e) {
  var t = new Qe(),
    s = e(t.token),
    r = new Promise(function (i, n) {
      var a = t.token.onCancellationRequested(function () {
        a.dispose(), n(new st());
      });
      Promise.resolve(s).then(function (o) {
        a.dispose(), t.dispose(), i(o);
      }, function (o) {
        a.dispose(), t.dispose(), n(o);
      });
    });
  return new (/*#__PURE__*/function () {
    function _class2() {
      _classCallCheck(this, _class2);
    }
    return _createClass(_class2, [{
      key: 'cancel',
      value: function cancel() {
        t.cancel(), t.dispose();
      }
    }, {
      key: 'then',
      value: function then(i, n) {
        return r.then(i, n);
      }
    }, {
      key: 'catch',
      value: function _catch(i) {
        return this.then(void 0, i);
      }
    }, {
      key: 'finally',
      value: function _finally(i) {
        return r['finally'](i);
      }
    }]);
  }())();
}

module.exports = {
  P2
};
