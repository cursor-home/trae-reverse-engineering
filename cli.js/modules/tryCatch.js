
// 模块: tryCatch


function tryCatch(t, e, r) {
  try {
    return {
      type: 'normal',
      arg: t.call(e, r)
    };
  } catch (t) {
    return {
      type: 'throw',
      arg: t
    };
  }
}

module.exports = {
  tryCatch
};
