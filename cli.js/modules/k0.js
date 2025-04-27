
// 模块: K0


function K0(e) {
  var t = mt((0, _os.tmpdir)());
  try {
    return (0, _fs.writeFileSync)(t, ''), e && console.log('Marker file for --wait created: '.concat(t)), t;
  } catch (s) {
    e && console.error('Failed to create marker file for --wait: '.concat(s));
    return;
  }
}

module.exports = {
  K0
};
