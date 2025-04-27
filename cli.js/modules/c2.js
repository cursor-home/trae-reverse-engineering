
// 模块: c2


function c2(e, t) {
  if (!e.scheme && t) throw new Error('[UriError]: Scheme is missing: {scheme: "", authority: "'.concat(e.authority, '", path: "').concat(e.path, '", query: "').concat(e.query, '", fragment: "').concat(e.fragment, '"}'));
  if (e.scheme && !ri.test(e.scheme)) throw new Error('[UriError]: Scheme contains illegal characters.');
  if (e.path) {
    if (e.authority) {
      if (!ii.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (ni.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
}

module.exports = {
  c2
};
