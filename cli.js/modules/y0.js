
// 模块: y0


function y0(e, t) {
  if (typeof t == 'number') switch (e.type) {
    case 1:
      return (t & 4) === 0;
    case 2:
      return (t & 8) === 0;
    case 0:
      return (t & 2) === 0;
  }
  return !1;
}

module.exports = {
  y0
};
