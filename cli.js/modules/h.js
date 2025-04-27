
// 模块: h


function h(D, V) {
  return o.allBools && /^--[^=]+$/.test(V) || o.strings[D] || o.bools[D] || c[D];
}

module.exports = {
  h
};
