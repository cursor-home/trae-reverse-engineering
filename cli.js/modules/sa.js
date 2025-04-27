
// 模块: Sa


function Sa() {
  var e = globalThis._VSCODE_PRODUCT_JSON.nameShort;
  process.env.VSCODE_DEV && (e = ''.concat(e, ' - Local'));
  var t = Aa({}, e),
    s = gs.join(t, 'Local Storage', 'config.db');
  if (!Xe.existsSync(s)) {
    console.log('No config file found');
    return;
  }
  var r = Xe.readFileSync(s),
    i = r.slice(0, 16),
    n = r.slice(16),
    a = Tn.createHash('md5').update(e).digest('hex'),
    o = Tn.createDecipheriv('aes-256-cbc', Buffer.from(a), i);
  var c = o.update(n);
  c = Buffer.concat([c, o['final']()]), globalThis._VSCODE_PRODUCT_JSON.__iCube_app = Mn(globalThis._VSCODE_PRODUCT_JSON.iCubeApp);
  var l = JSON.parse(c.toString());
  l.iCubeApp && (globalThis._VSCODE_PRODUCT_JSON = vs(globalThis._VSCODE_PRODUCT_JSON, {
    iCubeApp: l.iCubeApp
  }));
}

module.exports = {
  Sa
};
