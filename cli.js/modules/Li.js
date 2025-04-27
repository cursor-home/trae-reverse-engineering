
// 模块: Li


function Li(e) {
  return e ? {
    mode: typeof e.mode == 'number' ? e.mode : 438,
    flag: typeof e.flag == 'string' ? e.flag : 'w'
  } : {
    mode: 438,
    flag: 'w'
  };
}

module.exports = {
  Li
};
