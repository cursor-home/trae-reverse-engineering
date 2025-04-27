
// 模块: c0


function c0(e, t, s) {
  t[Oe.DI_TARGET] === t ? t[Oe.DI_DEPENDENCIES].push({
    id: e,
    index: s
  }) : (t[Oe.DI_DEPENDENCIES] = [{
    id: e,
    index: s
  }], t[Oe.DI_TARGET] = t);
}

module.exports = {
  c0
};
