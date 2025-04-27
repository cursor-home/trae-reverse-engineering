
// 模块: Nr


function Nr(e, t) {
  Vo(t, 'pathObject');
  var s = t.dir || t.root,
    r = t.base || ''.concat(t.name || '').concat(Wo(t.ext));
  return s ? s === t.root ? ''.concat(s).concat(r) : ''.concat(s).concat(e).concat(r) : r;
}

module.exports = {
  Nr
};
