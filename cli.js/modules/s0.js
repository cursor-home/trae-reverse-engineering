
// 模块: S0


function S0(e, t) {
  var s = '';
  return t.args && (Array.isArray(t.args) ? s = ' <'.concat(t.args.join('> <'), '>') : s = ' <'.concat(t.args, '>')), t.alias ? '-'.concat(t.alias, ' --').concat(e).concat(s) : '--'.concat(e).concat(s);
}

module.exports = {
  S0
};
