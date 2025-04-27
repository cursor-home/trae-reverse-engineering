
// 模块: j


function j(m) {
  var g = new ae();
  return m.then(function (w) {
    g.fire(w);
  }, function () {
    g.fire(void 0);
  })['finally'](function () {
    g.dispose();
  }), g.event;
}

module.exports = {
  j
};
