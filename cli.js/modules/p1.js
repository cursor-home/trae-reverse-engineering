
// 模块: p1


function p1(t, s, r, i, n, a) {
  var _this32;
  _classCallCheck(this, p1);
  _this32 = _callSuper(this, p1), _this32.t = t, _this32.u = s, _this32.w = r, _this32.y = i, _this32.z = n, _this32.C = a, _this32.c = _this32.B(new Ei({
    maxWorkChunkSize: 100,
    throttleDelay: 200,
    maxBufferedWork: 1e4
  }, function (o) {
    return _this32.w(o);
  })), _this32.f = _this32.B(new vi(function (o) {
    return _this32.M(o);
  }, p1.b)), _this32.g = dn(_this32.t.path, _this32.t.excludes), _this32.h = _this32.t.includes ? dn(_this32.t.path, _this32.t.includes) : void 0, _this32.j = m0(_this32.t) ? _this32.t.filter : void 0, _this32.m = new Qe(), _this32.n = new Ve(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
    var o;
    return _regeneratorRuntime().wrap(function _callee25$(_context38) {
      while (1) switch (_context38.prev = _context38.next) {
        case 0:
          o = _this32.t.path;
          _context38.prev = 1;
          _context38.next = 4;
          return G2(_this32.t.path);
        case 4:
          o = _context38.sent;
          _this32.t.path !== o && _this32.Q('correcting a path to watch that seems to be a symbolic link (original: '.concat(_this32.t.path, ', real: ').concat(o, ')'));
          _context38.next = 10;
          break;
        case 8:
          _context38.prev = 8;
          _context38.t0 = _context38['catch'](1);
        case 10:
          return _context38.abrupt('return', o);
        case 11:
        case 'end':
          return _context38.stop();
      }
    }, _callee25, null, [[1, 8]]);
  }))), _this32.ready = _this32.D(), _this32.r = !1, _this32.s = !1;
  return _this32;
}

module.exports = {
  p1
};
