
// 模块: Fi


function Fi(e, t) {
  switch (e) {
    case 0:
      return '';
    case 1:
      return ''.concat(_t, '*?');
    default:
      return '(?:'.concat(Et, '|').concat(_t, '+').concat(Et).concat(t ? '|'.concat(Et).concat(_t, '+') : '', ')*?');
  }
}

module.exports = {
  Fi
};
