
// 模块: Ii


function Ii(e) {
  try {
    e.removeAllListeners('connect'), e.removeAllListeners('error'), e.end(), e.destroy(), e.unref();
  } catch (t) {
    console.error(t);
  }
}

module.exports = {
  Ii
};
