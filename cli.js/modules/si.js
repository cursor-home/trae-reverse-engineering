
// 模块: si


function si(e) {
  try {
    return decodeURIComponent(e);
  } catch (_unused4) {
    return e.length > 3 ? e.substr(0, 3) + si(e.substr(3)) : e;
  }
}

module.exports = {
  si
};
