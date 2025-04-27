
// 模块: Wr


function Wr(e) {
  return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, '\\$&');
}

module.exports = {
  Wr
};
