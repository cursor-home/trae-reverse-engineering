'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.__addDisposableResource = __addDisposableResource;
exports.__assign = void 0;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncValues = __asyncValues;
exports.__await = __await;
exports.__awaiter = __awaiter;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldIn = __classPrivateFieldIn;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__createBinding = void 0;
exports.__decorate = __decorate;
exports.__disposeResources = __disposeResources;
exports.__esDecorate = __esDecorate;
exports.__exportStar = __exportStar;
exports.__extends = __extends;
exports.__generator = __generator;
exports.__importDefault = __importDefault;
exports.__importStar = __importStar;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__metadata = __metadata;
exports.__param = __param;
exports.__propKey = __propKey;
exports.__read = __read;
exports.__rest = __rest;
exports.__runInitializers = __runInitializers;
exports.__setFunctionName = __setFunctionName;
exports.__spread = __spread;
exports.__spreadArray = __spreadArray;
exports.__spreadArrays = __spreadArrays;
exports.__values = __values;
exports['default'] = void 0;
var _fs = _interopRequireWildcard(require('fs'));
var k = _fs;
var ji = _fs;
var r1 = _fs;
var Rn = _fs;
var Xe = _fs;
var me = _fs;
var _os = _interopRequireWildcard(require('os'));
var Fn = _os;
var _util = require('util');
var z2 = _interopRequireWildcard(require('net'));
var _assert = _interopRequireDefault(require('assert'));
var _child_process = require('child_process');
var _path = _interopRequireWildcard(require('path'));
var fe = _path;
var gs = _path;
var Ne = _path;
var he = _path;
var _url = require('url');
var _nodeModule = require('node:module');
var Tn = _interopRequireWildcard(require('crypto'));
var _lodash = _interopRequireDefault(require('lodash.merge'));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
function _getRequireWildcardCache(e) {
  if ('function' != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ('object' != _typeof(e) && 'function' != typeof e)) return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ('default' !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n['default'] = e), t && t.set(e, n), n;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys(Object(t)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
          });
  }
  return e;
}
function _toArray(r) {
  return (
    _arrayWithHoles(r) ||
    _iterableToArray(r) ||
    _unsupportedIterableToArray(r) ||
    _nonIterableRest()
  );
}
function _toConsumableArray(r) {
  return (
    _arrayWithoutHoles(r) ||
    _iterableToArray(r) ||
    _unsupportedIterableToArray(r) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _iterableToArray(r) {
  if (('undefined' != typeof Symbol && null != r[Symbol.iterator]) || null != r['@@iterator'])
    return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, 'next', n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, 'throw', n);
      }
      _next(void 0);
    });
  };
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
  return 2 & r && 'function' == typeof p
    ? function (t) {
        return p.apply(e, t);
      }
    : p;
}
function _get() {
  return (
    (_get =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var p = _superPropBase(e, t);
            if (p) {
              var n = Object.getOwnPropertyDescriptor(p, t);
              return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
            }
          }),
    _get.apply(null, arguments)
  );
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)); );
  return t;
}
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
      : (e[r] = t),
    e
  );
}
function _slicedToArray(r, e) {
  return (
    _arrayWithHoles(r) ||
    _iterableToArrayLimit(r, e) ||
    _unsupportedIterableToArray(r, e) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _iterableToArrayLimit(r, l) {
  var t =
    null == r ? null : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t['return'] && ((u = t['return']()), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _regeneratorRuntime() {
  'use strict';
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
    function _regeneratorRuntime() {
      return e;
    };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (t, e, r) {
        t[e] = r.value;
      },
    i = 'function' == typeof Symbol ? Symbol : {},
    a = i.iterator || '@@iterator',
    c = i.asyncIterator || '@@asyncIterator',
    u = i.toStringTag || '@@toStringTag';
  function define(t, e, r) {
    return (
      Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }),
      t[e]
    );
  }
  try {
    define({}, '');
  } catch (t) {
    define = function define(t, e, r) {
      return (t[e] = r);
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, '_invoke', { value: makeInvokeMethod(t, r, c) }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return { type: 'normal', arg: t.call(e, r) };
    } catch (t) {
      return { type: 'throw', arg: t };
    }
  }
  e.wrap = wrap;
  var h = 'suspendedStart',
    l = 'suspendedYield',
    f = 'executing',
    s = 'completed',
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p));
  function defineIteratorMethods(t) {
    ['next', 'throw', 'return'].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ('throw' !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && 'object' == _typeof(h) && n.call(h, '__await')
          ? e.resolve(h.__await).then(
              function (t) {
                invoke('next', t, i, a);
              },
              function (t) {
                invoke('throw', t, i, a);
              }
            )
          : e.resolve(h).then(
              function (t) {
                (u.value = t), i(u);
              },
              function (t) {
                return invoke('throw', t, i, a);
              }
            );
      }
      a(c.arg);
    }
    var r;
    o(this, '_invoke', {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return (r = r
          ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      },
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error('Generator is already running');
      if (o === s) {
        if ('throw' === i) throw a;
        return { value: t, done: !0 };
      }
      for (n.method = i, n.arg = a; ; ) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ('next' === n.method) n.sent = n._sent = n.arg;
        else if ('throw' === n.method) {
          if (o === h) throw ((o = s), n.arg);
          n.dispatchException(n.arg);
        } else 'return' === n.method && n.abrupt('return', n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ('normal' === p.type) {
          if (((o = n.done ? s : l), p.arg === y)) continue;
          return { value: p.arg, done: n.done };
        }
        'throw' === p.type && ((o = s), (n.method = 'throw'), (n.arg = p.arg));
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t)
      return (
        (r.delegate = null),
        ('throw' === n &&
          e.iterator['return'] &&
          ((r.method = 'return'), (r.arg = t), maybeInvokeDelegate(e, r), 'throw' === r.method)) ||
          ('return' !== n &&
            ((r.method = 'throw'),
            (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
        y
      );
    var i = tryCatch(o, e.iterator, r.arg);
    if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
    var a = i.arg;
    return a
      ? a.done
        ? ((r[e.resultName] = a.value),
          (r.next = e.nextLoc),
          'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
          (r.delegate = null),
          y)
        : a
      : ((r.method = 'throw'),
        (r.arg = new TypeError('iterator result is not an object')),
        (r.delegate = null),
        y);
  }
  function pushTryEntry(t) {
    var e = { tryLoc: t[0] };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    (e.type = 'normal'), delete e.arg, (t.completion = e);
  }
  function Context(t) {
    (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || '' === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ('function' == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length; )
              if (n.call(e, o)) return (next.value = e[o]), (next.done = !1), next;
            return (next.value = t), (next.done = !0), next;
          };
        return (i.next = i);
      }
    }
    throw new TypeError(_typeof(e) + ' is not iterable');
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    o(g, 'constructor', { value: GeneratorFunctionPrototype, configurable: !0 }),
    o(GeneratorFunctionPrototype, 'constructor', { value: GeneratorFunction, configurable: !0 }),
    (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, 'GeneratorFunction')),
    (e.isGeneratorFunction = function (t) {
      var e = 'function' == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || 'GeneratorFunction' === (e.displayName || e.name));
    }),
    (e.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
          : ((t.__proto__ = GeneratorFunctionPrototype), define(t, u, 'GeneratorFunction')),
        (t.prototype = Object.create(g)),
        t
      );
    }),
    (e.awrap = function (t) {
      return { __await: t };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, c, function () {
      return this;
    }),
    (e.AsyncIterator = AsyncIterator),
    (e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    defineIteratorMethods(g),
    define(g, u, 'Generator'),
    define(g, a, function () {
      return this;
    }),
    define(g, 'toString', function () {
      return '[object Generator]';
    }),
    (e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return (
        r.reverse(),
        function next() {
          for (; r.length; ) {
            var t = r.pop();
            if (t in e) return (next.value = t), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (e.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = t),
          this.tryEntries.forEach(resetTryEntry),
          !e)
        )
          for (var r in this)
            't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ('throw' === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return (
            (a.type = 'throw'),
            (a.arg = e),
            (r.next = n),
            o && ((r.method = 'next'), (r.arg = t)),
            !!o
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ('root' === i.tryLoc) return handle('end');
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, 'catchLoc'),
              u = n.call(i, 'finallyLoc');
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error('try statement without catch or finally');
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i &&
          ('break' === t || 'continue' === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc &&
          (i = null);
        var a = i ? i.completion : {};
        return (
          (a.type = t),
          (a.arg = e),
          i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
        );
      },
      complete: function complete(t, e) {
        if ('throw' === t.type) throw t.arg;
        return (
          'break' === t.type || 'continue' === t.type
            ? (this.next = t.arg)
            : 'return' === t.type
              ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
              : 'normal' === t.type && e && (this.next = e),
          y
        );
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ('throw' === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error('illegal catch attempt');
      },
      delegateYield: function delegateYield(e, r, n) {
        return (
          (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
          'next' === this.method && (this.arg = t),
          y
        );
      },
    }),
    e
  );
}
function _callSuper(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e)
    )
  );
}
function _possibleConstructorReturn(t, e) {
  if (e && ('object' == _typeof(e) || 'function' == typeof e)) return e;
  if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined');
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _inherits(t, e) {
  if ('function' != typeof e && null !== e)
    throw new TypeError('Super expression must either be null or a function');
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && _setPrototypeOf(t, e);
}
function _wrapNativeSuper(t) {
  var r = 'function' == typeof Map ? new Map() : void 0;
  return (
    (_wrapNativeSuper = function _wrapNativeSuper(t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ('function' != typeof t)
        throw new TypeError('Super expression must either be null or a function');
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return (
        (Wrapper.prototype = Object.create(t.prototype, {
          constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 },
        })),
        _setPrototypeOf(Wrapper, t)
      );
    }),
    _wrapNativeSuper(t)
  );
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf('[native code]');
  } catch (n) {
    return 'function' == typeof t;
  }
}
function _setPrototypeOf(t, e) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        }),
    _setPrototypeOf(t, e)
  );
}
function _getPrototypeOf(t) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    _getPrototypeOf(t)
  );
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : i + '';
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
function _createForOfIteratorHelper(r, e) {
  var t = ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (!t) {
    if (
      Array.isArray(r) ||
      (t = _unsupportedIterableToArray(r)) ||
      (e && r && 'number' == typeof r.length)
    ) {
      t && (r = t);
      var _n9 = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n9 >= r.length ? { done: !0 } : { done: !1, value: r[_n9++] };
        },
        e: function e(r) {
          throw r;
        },
        f: F,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return (a = r.done), r;
    },
    e: function e(r) {
      (u = !0), (o = r);
    },
    f: function f() {
      try {
        a || null == t['return'] || t['return']();
      } finally {
        if (u) throw o;
      }
    },
  };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ('string' == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return (
      'Object' === t && r.constructor && (t = r.constructor.name),
      'Map' === t || 'Set' === t
        ? Array.from(r)
        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          ? _arrayLikeToArray(r, a)
          : void 0
    );
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
function _asyncIterator(r) {
  var n,
    t,
    o,
    e = 2;
  for ('undefined' != typeof Symbol && ((t = Symbol.asyncIterator), (o = Symbol.iterator)); e--; ) {
    if (t && null != (n = r[t])) return n.call(r);
    if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
    (t = '@@asyncIterator'), (o = '@@iterator');
  }
  throw new TypeError('Object is not async iterable');
}
function AsyncFromSyncIterator(r) {
  function AsyncFromSyncIteratorContinuation(r) {
    if (Object(r) !== r) return Promise.reject(new TypeError(r + ' is not an object.'));
    var n = r.done;
    return Promise.resolve(r.value).then(function (r) {
      return { value: r, done: n };
    });
  }
  return (
    (AsyncFromSyncIterator = function AsyncFromSyncIterator(r) {
      (this.s = r), (this.n = r.next);
    }),
    (AsyncFromSyncIterator.prototype = {
      s: null,
      n: null,
      next: function next() {
        return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
      },
      return: function _return(r) {
        var n = this.s['return'];
        return void 0 === n
          ? Promise.resolve({ value: r, done: !0 })
          : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
      },
      throw: function _throw(r) {
        var n = this.s['return'];
        return void 0 === n
          ? Promise.reject(r)
          : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
      },
    }),
    new AsyncFromSyncIterator(r)
  );
}
/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
var _g = function g1(e, t) {
  return (
    (_g =
      Object.setPrototypeOf ||
      ({
        __proto__: [],
      } instanceof Array &&
        function (s, r) {
          s.__proto__ = r;
        }) ||
      function (s, r) {
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (s[i] = r[i]);
      }),
    _g(e, t)
  );
};
function __extends(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
  _g(e, t);
  function s() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((s.prototype = t.prototype), new s());
}
var _assign = (exports.__assign = function __assign() {
  return (
    (exports.__assign = _assign =
      Object.assign ||
      function (t) {
        for (var s, r = 1, i = arguments.length; r < i; r++) {
          s = arguments[r];
          for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
        }
        return t;
      }),
    _assign.apply(this, arguments)
  );
});
function __rest(e, t) {
  var s = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (s[r[i]] = e[r[i]]);
  return s;
}
function __decorate(e, t, s, r) {
  var i = arguments.length,
    n = i < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, s)) : r,
    a;
  if (
    (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) == 'object' &&
    typeof Reflect.decorate == 'function'
  )
    n = Reflect.decorate(e, t, s, r);
  else
    for (var o = e.length - 1; o >= 0; o--)
      (a = e[o]) && (n = (i < 3 ? a(n) : i > 3 ? a(t, s, n) : a(t, s)) || n);
  return i > 3 && n && Object.defineProperty(t, s, n), n;
}
function __param(e, t) {
  return function (s, r) {
    t(s, r, e);
  };
}
function __esDecorate(e, t, s, r, i, n) {
  function a($) {
    if ($ !== void 0 && typeof $ != 'function') throw new TypeError('Function expected');
    return $;
  }
  for (
    var o = r.kind,
      c = o === 'getter' ? 'get' : o === 'setter' ? 'set' : 'value',
      l = !t && e ? (r['static'] ? e : e.prototype) : null,
      f = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}),
      u,
      h = !1,
      d = s.length - 1;
    d >= 0;
    d--
  ) {
    var p = {};
    for (var y in r) p[y] = y === 'access' ? {} : r[y];
    for (var y in r.access) p.access[y] = r.access[y];
    p.addInitializer = function ($) {
      if (h) throw new TypeError('Cannot add initializers after decoration has completed');
      n.push(a($ || null));
    };
    var v = (0, s[d])(
      o === 'accessor'
        ? {
            get: f.get,
            set: f.set,
          }
        : f[c],
      p
    );
    if (o === 'accessor') {
      if (v === void 0) continue;
      if (v === null || _typeof(v) != 'object') throw new TypeError('Object expected');
      (u = a(v.get)) && (f.get = u), (u = a(v.set)) && (f.set = u), (u = a(v.init)) && i.unshift(u);
    } else (u = a(v)) && (o === 'field' ? i.unshift(u) : (f[c] = u));
  }
  l && Object.defineProperty(l, r.name, f), (h = !0);
}
function __runInitializers(e, t, s) {
  for (var r = arguments.length > 2, i = 0; i < t.length; i++)
    s = r ? t[i].call(e, s) : t[i].call(e);
  return r ? s : void 0;
}
function __propKey(e) {
  return _typeof(e) == 'symbol' ? e : ''.concat(e);
}
function __setFunctionName(e, t, s) {
  return (
    _typeof(t) == 'symbol' && (t = t.description ? '['.concat(t.description, ']') : ''),
    Object.defineProperty(e, 'name', {
      configurable: !0,
      value: s ? ''.concat(s, ' ', t) : t,
    })
  );
}
function __metadata(e, t) {
  if (
    (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) == 'object' &&
    typeof Reflect.metadata == 'function'
  )
    return Reflect.metadata(e, t);
}
function __awaiter(e, t, s, r) {
  function i(n) {
    return n instanceof s
      ? n
      : new s(function (a) {
          a(n);
        });
  }
  return new (s || (s = Promise))(function (n, a) {
    function o(f) {
      try {
        l(r.next(f));
      } catch (u) {
        a(u);
      }
    }
    function c(f) {
      try {
        l(r['throw'](f));
      } catch (u) {
        a(u);
      }
    }
    function l(f) {
      f.done ? n(f.value) : i(f.value).then(o, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}
function __generator(e, t) {
  var s = {
      label: 0,
      sent: function sent() {
        if (n[0] & 1) throw n[1];
        return n[1];
      },
      trys: [],
      ops: [],
    },
    r,
    i,
    n,
    a;
  return (
    (a = {
      next: o(0),
      throw: o(1),
      return: o(2),
    }),
    typeof Symbol == 'function' &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function o(l) {
    return function (f) {
      return c([l, f]);
    };
  }
  function c(l) {
    if (r) throw new TypeError('Generator is already executing.');
    for (; a && ((a = 0), l[0] && (s = 0)), s; )
      try {
        if (
          ((r = 1),
          i &&
            (n =
              l[0] & 2
                ? i['return']
                : l[0]
                  ? i['throw'] || ((n = i['return']) && n.call(i), 0)
                  : i.next) &&
            !(n = n.call(i, l[1])).done)
        )
          return n;
        switch (((i = 0), n && (l = [l[0] & 2, n.value]), l[0])) {
          case 0:
          case 1:
            n = l;
            break;
          case 4:
            return (
              s.label++,
              {
                value: l[1],
                done: !1,
              }
            );
          case 5:
            s.label++, (i = l[1]), (l = [0]);
            continue;
          case 7:
            (l = s.ops.pop()), s.trys.pop();
            continue;
          default:
            if (
              ((n = s.trys), !(n = n.length > 0 && n[n.length - 1]) && (l[0] === 6 || l[0] === 2))
            ) {
              s = 0;
              continue;
            }
            if (l[0] === 3 && (!n || (l[1] > n[0] && l[1] < n[3]))) {
              s.label = l[1];
              break;
            }
            if (l[0] === 6 && s.label < n[1]) {
              (s.label = n[1]), (n = l);
              break;
            }
            if (n && s.label < n[2]) {
              (s.label = n[2]), s.ops.push(l);
              break;
            }
            n[2] && s.ops.pop(), s.trys.pop();
            continue;
        }
        l = t.call(e, s);
      } catch (f) {
        (l = [6, f]), (i = 0);
      } finally {
        r = n = 0;
      }
    if (l[0] & 5) throw l[1];
    return {
      value: l[0] ? l[1] : void 0,
      done: !0,
    };
  }
}
var __createBinding = (exports.__createBinding = Object.create
  ? function (e, t, s, r) {
      r === void 0 && (r = s);
      var i = Object.getOwnPropertyDescriptor(t, s);
      (!i || ('get' in i ? !t.__esModule : i.writable || i.configurable)) &&
        (i = {
          enumerable: !0,
          get: function get() {
            return t[s];
          },
        }),
        Object.defineProperty(e, r, i);
    }
  : function (e, t, s, r) {
      r === void 0 && (r = s), (e[r] = t[s]);
    });
function __exportStar(e, t) {
  for (var s in e)
    s !== 'default' && !Object.prototype.hasOwnProperty.call(t, s) && __createBinding(t, e, s);
}
function __values(e) {
  var t = typeof Symbol == 'function' && Symbol.iterator,
    s = t && e[t],
    r = 0;
  if (s) return s.call(e);
  if (e && typeof e.length == 'number')
    return {
      next: function next() {
        return (
          e && r >= e.length && (e = void 0),
          {
            value: e && e[r++],
            done: !e,
          }
        );
      },
    };
  throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
}
function __read(e, t) {
  var s = typeof Symbol == 'function' && e[Symbol.iterator];
  if (!s) return e;
  var r = s.call(e),
    i,
    n = [],
    a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) n.push(i.value);
  } catch (o) {
    a = {
      error: o,
    };
  } finally {
    try {
      i && !i.done && (s = r['return']) && s.call(r);
    } finally {
      if (a) throw a.error;
    }
  }
  return n;
}
function __spread() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
  return e;
}
function __spreadArrays() {
  for (var e = 0, t = 0, s = arguments.length; t < s; t++) e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < s; t++)
    for (var n = arguments[t], a = 0, o = n.length; a < o; a++, i++) r[i] = n[a];
  return r;
}
function __spreadArray(e, t, s) {
  if (s || arguments.length === 2)
    for (var r = 0, i = t.length, n; r < i; r++)
      (n || !(r in t)) && (n || (n = Array.prototype.slice.call(t, 0, r)), (n[r] = t[r]));
  return e.concat(n || Array.prototype.slice.call(t));
}
function __await(e) {
  return this instanceof __await ? ((this.v = e), this) : new __await(e);
}
function __asyncGenerator(e, t, s) {
  if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
  var r = s.apply(e, t || []),
    i,
    n = [];
  return (
    (i = {}),
    o('next'),
    o('throw'),
    o('return', a),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function a(d) {
    return function (p) {
      return Promise.resolve(p).then(d, u);
    };
  }
  function o(d, p) {
    r[d] &&
      ((i[d] = function (y) {
        return new Promise(function (v, $) {
          n.push([d, y, v, $]) > 1 || c(d, y);
        });
      }),
      p && (i[d] = p(i[d])));
  }
  function c(d, p) {
    try {
      l(r[d](p));
    } catch (y) {
      h(n[0][3], y);
    }
  }
  function l(d) {
    d.value instanceof __await ? Promise.resolve(d.value.v).then(f, u) : h(n[0][2], d);
  }
  function f(d) {
    c('next', d);
  }
  function u(d) {
    c('throw', d);
  }
  function h(d, p) {
    d(p), n.shift(), n.length && c(n[0][0], n[0][1]);
  }
}
function __asyncDelegator(e) {
  var t, s;
  return (
    (t = {}),
    r('next'),
    r('throw', function (i) {
      throw i;
    }),
    r('return'),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function r(i, n) {
    t[i] = e[i]
      ? function (a) {
          return (s = !s)
            ? {
                value: __await(e[i](a)),
                done: !1,
              }
            : n
              ? n(a)
              : a;
        }
      : n;
  }
}
function __asyncValues(e) {
  if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
  var t = e[Symbol.asyncIterator],
    s;
  return t
    ? t.call(e)
    : ((e = typeof __values == 'function' ? __values(e) : e[Symbol.iterator]()),
      (s = {}),
      r('next'),
      r('throw'),
      r('return'),
      (s[Symbol.asyncIterator] = function () {
        return this;
      }),
      s);
  function r(n) {
    s[n] =
      e[n] &&
      function (a) {
        return new Promise(function (o, c) {
          (a = e[n](a)), i(o, c, a.done, a.value);
        });
      };
  }
  function i(n, a, o, c) {
    Promise.resolve(c).then(function (l) {
      n({
        value: l,
        done: o,
      });
    }, a);
  }
}
function __makeTemplateObject(e, t) {
  return (
    Object.defineProperty
      ? Object.defineProperty(e, 'raw', {
          value: t,
        })
      : (e.raw = t),
    e
  );
}
var Yn = Object.create
  ? function (e, t) {
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        value: t,
      });
    }
  : function (e, t) {
      e['default'] = t;
    };
function __importStar(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null)
    for (var s in e)
      s !== 'default' && Object.prototype.hasOwnProperty.call(e, s) && __createBinding(t, e, s);
  return Yn(t, e), t;
}
function __importDefault(e) {
  return e && e.__esModule
    ? e
    : {
        default: e,
      };
}
function __classPrivateFieldGet(e, t, s, r) {
  if (s === 'a' && !r) throw new TypeError('Private accessor was defined without a getter');
  if (typeof t == 'function' ? e !== t || !r : !t.has(e))
    throw new TypeError('Cannot read private member from an object whose class did not declare it');
  return s === 'm' ? r : s === 'a' ? r.call(e) : r ? r.value : t.get(e);
}
function __classPrivateFieldSet(e, t, s, r, i) {
  if (r === 'm') throw new TypeError('Private method is not writable');
  if (r === 'a' && !i) throw new TypeError('Private accessor was defined without a setter');
  if (typeof t == 'function' ? e !== t || !i : !t.has(e))
    throw new TypeError('Cannot write private member to an object whose class did not declare it');
  return r === 'a' ? i.call(e, s) : i ? (i.value = s) : t.set(e, s), s;
}
function __classPrivateFieldIn(e, t) {
  if (t === null || (_typeof(t) != 'object' && typeof t != 'function'))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == 'function' ? t === e : e.has(t);
}
function __addDisposableResource(e, t, s) {
  if (t != null) {
    if (_typeof(t) != 'object' && typeof t != 'function') throw new TypeError('Object expected.');
    var r, i;
    if (s) {
      if (!Symbol.asyncDispose) throw new TypeError('Symbol.asyncDispose is not defined.');
      r = t[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError('Symbol.dispose is not defined.');
      (r = t[Symbol.dispose]), s && (i = r);
    }
    if (typeof r != 'function') throw new TypeError('Object not disposable.');
    i &&
      (r = function r() {
        try {
          i.call(this);
        } catch (n) {
          return Promise.reject(n);
        }
      }),
      e.stack.push({
        value: t,
        dispose: r,
        async: s,
      });
  } else
    s &&
      e.stack.push({
        async: !0,
      });
  return t;
}
var Zn =
  typeof SuppressedError == 'function'
    ? SuppressedError
    : function (e, t, s) {
        var r = new Error(s);
        return (r.name = 'SuppressedError'), (r.error = e), (r.suppressed = t), r;
      };
function __disposeResources(e) {
  function t(r) {
    (e.error = e.hasError ? new Zn(r, e.error, 'An error was suppressed during disposal.') : r),
      (e.hasError = !0);
  }
  function s() {
    for (; e.stack.length; ) {
      var r = e.stack.pop();
      try {
        var i = r.dispose && r.dispose.call(r.value);
        if (r.async)
          return Promise.resolve(i).then(s, function (n) {
            return t(n), s();
          });
      } catch (n) {
        t(n);
      }
    }
    if (e.hasError) throw e.error;
  }
  return s();
}
var _default = (exports['default'] = {
  __extends: __extends,
  __assign: _assign,
  __rest: __rest,
  __decorate: __decorate,
  __param: __param,
  __metadata: __metadata,
  __awaiter: __awaiter,
  __generator: __generator,
  __createBinding: __createBinding,
  __exportStar: __exportStar,
  __values: __values,
  __read: __read,
  __spread: __spread,
  __spreadArrays: __spreadArrays,
  __spreadArray: __spreadArray,
  __await: __await,
  __asyncGenerator: __asyncGenerator,
  __asyncDelegator: __asyncDelegator,
  __asyncValues: __asyncValues,
  __makeTemplateObject: __makeTemplateObject,
  __importStar: __importStar,
  __importDefault: __importDefault,
  __classPrivateFieldGet: __classPrivateFieldGet,
  __classPrivateFieldSet: __classPrivateFieldSet,
  __classPrivateFieldIn: __classPrivateFieldIn,
  __addDisposableResource: __addDisposableResource,
  __disposeResources: __disposeResources,
});
var Xn = Object.create,
  m1 = Object.defineProperty,
  eo = Object.getOwnPropertyDescriptor,
  b1 = Object.getOwnPropertyNames,
  to = Object.getPrototypeOf,
  so = Object.prototype.hasOwnProperty,
  C = function C(e, t) {
    return function () {
      return e && (t = (0, e[b1(e)[0]])((e = 0))), t;
    };
  },
  ro = function ro(e, t) {
    return function () {
      return (
        t ||
          (0, e[b1(e)[0]])(
            (t = {
              exports: {},
            }).exports,
            t
          ),
        t.exports
      );
    };
  },
  io = function io(e, t) {
    for (var s in t)
      m1(e, s, {
        get: t[s],
        enumerable: !0,
      });
  },
  no = function no(e, t, s, r) {
    if ((t && _typeof(t) == 'object') || typeof t == 'function') {
      var _iterator6 = _createForOfIteratorHelper(b1(t)),
        _step6;
      try {
        var _loop = function _loop() {
          var i = _step6.value;
          !so.call(e, i) &&
            i !== s &&
            m1(e, i, {
              get: function get() {
                return t[i];
              },
              enumerable: !(r = eo(t, i)) || r.enumerable,
            });
        };
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          _loop();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
    return e;
  },
  oo = function oo(e, t, s) {
    return (
      (s = e != null ? Xn(to(e)) : {}),
      no(
        t || !e || !e.__esModule
          ? m1(s, 'default', {
              value: e,
              enumerable: !0,
            })
          : s,
        e
      )
    );
  };
function Lt(e) {
  ao(e) || Ps.onUnexpectedError(e);
}
function ao(e) {
  return e instanceof st ? !0 : e instanceof Error && e.name === Nt && e.message === Nt;
}
var Ds,
  Ps,
  Nt,
  st,
  w1,
  rt = C({
    'out-build/vs/base/common/errors.js': function outBuild_vs_base_common_errorsJs() {
      'use strict';

      (Ds = /*#__PURE__*/ (function () {
        function Ds() {
          _classCallCheck(this, Ds);
          (this.b = []),
            (this.a = function (e) {
              setTimeout(function () {
                throw e.stack
                  ? w1.isErrorNoTelemetry(e)
                    ? new w1(e.message + '\n\n' + e.stack)
                    : new Error(e.message + '\n\n' + e.stack)
                  : e;
              }, 0);
            });
        }
        return _createClass(Ds, [
          {
            key: 'addListener',
            value: function addListener(e) {
              var _this = this;
              return (
                this.b.push(e),
                function () {
                  _this.d(e);
                }
              );
            },
          },
          {
            key: 'c',
            value: function c(e) {
              this.b.forEach(function (t) {
                t(e);
              });
            },
          },
          {
            key: 'd',
            value: function d(e) {
              this.b.splice(this.b.indexOf(e), 1);
            },
          },
          {
            key: 'setUnexpectedErrorHandler',
            value: function setUnexpectedErrorHandler(e) {
              this.a = e;
            },
          },
          {
            key: 'getUnexpectedErrorHandler',
            value: function getUnexpectedErrorHandler() {
              return this.a;
            },
          },
          {
            key: 'onUnexpectedError',
            value: function onUnexpectedError(e) {
              this.a(e), this.c(e);
            },
          },
          {
            key: 'onUnexpectedExternalError',
            value: function onUnexpectedExternalError(e) {
              this.a(e);
            },
          },
        ]);
      })()),
        (Ps = new Ds()),
        (Nt = 'Canceled'),
        (st = /*#__PURE__*/ (function (_Error) {
          function st() {
            var _this2;
            _classCallCheck(this, st);
            (_this2 = _callSuper(this, st, [Nt])), (_this2.name = _this2.message);
            return _this2;
          }
          _inherits(st, _Error);
          return _createClass(st);
        })(/*#__PURE__*/ _wrapNativeSuper(Error))),
        (w1 = /*#__PURE__*/ (function (_Error2) {
          function Cs(t) {
            var _this3;
            _classCallCheck(this, Cs);
            (_this3 = _callSuper(this, Cs, [t])), (_this3.name = 'CodeExpectedError');
            return _this3;
          }
          _inherits(Cs, _Error2);
          return _createClass(Cs, null, [
            {
              key: 'fromError',
              value: function fromError(t) {
                if (t instanceof Cs) return t;
                var s = new Cs();
                return (s.message = t.message), (s.stack = t.stack), s;
              },
            },
            {
              key: 'isErrorNoTelemetry',
              value: function isErrorNoTelemetry(t) {
                return t.name === 'CodeExpectedError';
              },
            },
          ]);
        })(/*#__PURE__*/ _wrapNativeSuper(Error)));
    },
  }),
  co = C({
    'out-build/vs/base/common/assert.js': function outBuild_vs_base_common_assertJs() {
      'use strict';

      rt();
    },
  });
function kt(e) {
  return (
    _typeof(e) == 'object' &&
    e !== null &&
    !Array.isArray(e) &&
    !(e instanceof RegExp) &&
    !(e instanceof Date)
  );
}
function lo(e) {
  return typeof e == 'number' && !isNaN(e);
}
function uo(e) {
  return !!e && typeof e[Symbol.iterator] == 'function';
}
var Rt = C({
  'out-build/vs/base/common/types.js': function outBuild_vs_base_common_typesJs() {
    'use strict';

    co();
  },
});
function fo(e) {
  return e ? e === 'dev' : !1;
}
var xs,
  Ls,
  Ns,
  ks,
  Rs = C({
    'out-build/vs/base/common/product.js': function outBuild_vs_base_common_productJs() {
      'use strict';

      (function (e) {
        (e[(e.PRO = 0)] = 'PRO'), (e[(e.LITE = 1)] = 'LITE'), (e[(e.UX_SIMPLE = 2)] = 'UX_SIMPLE');
      })(xs || (xs = {})),
        (function (e) {
          (e.YINLI = 'Yinli'), (e.SPRING = 'Spring');
        })(Ls || (Ls = {})),
        (function (e) {
          (e.CN = 'cn'), (e.I18N = 'i18n');
        })(Ns || (Ns = {})),
        (function (e) {
          (e.Yinli = 'Yinli'), (e.Spring = 'Spring');
        })(ks || (ks = {}));
    },
  });
function ho(e, t) {
  var s = Object.create(null);
  var _iterator7 = _createForOfIteratorHelper(e),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      var r = _step7.value;
      var i = t(r);
      var n = s[i];
      n || (n = s[i] = []), n.push(r);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  return s;
}
var Ts,
  po,
  Is = C({
    'out-build/vs/base/common/collections.js': function outBuild_vs_base_common_collectionsJs() {
      'use strict';

      po =
        ((Ts = Symbol.toStringTag),
        /*#__PURE__*/ (function () {
          function po(e, t) {
            _classCallCheck(this, po);
            (this.b = t), (this.a = new Map()), (this[Ts] = 'SetWithKey');
            var _iterator8 = _createForOfIteratorHelper(e),
              _step8;
            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                var s = _step8.value;
                this.add(s);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
          return _createClass(po, [
            {
              key: 'size',
              get: function get() {
                return this.a.size;
              },
            },
            {
              key: 'add',
              value: function add(e) {
                var t = this.b(e);
                return this.a.set(t, e), this;
              },
            },
            {
              key: 'delete',
              value: function _delete(e) {
                return this.a['delete'](this.b(e));
              },
            },
            {
              key: 'has',
              value: function has(e) {
                return this.a.has(this.b(e));
              },
            },
            {
              key: 'entries',
              value: /*#__PURE__*/ _regeneratorRuntime().mark(function entries() {
                var _iterator9, _step9, e;
                return _regeneratorRuntime().wrap(
                  function entries$(_context) {
                    while (1)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          _iterator9 = _createForOfIteratorHelper(this.a.values());
                          _context.prev = 1;
                          _iterator9.s();
                        case 3:
                          if ((_step9 = _iterator9.n()).done) {
                            _context.next = 9;
                            break;
                          }
                          e = _step9.value;
                          _context.next = 7;
                          return [e, e];
                        case 7:
                          _context.next = 3;
                          break;
                        case 9:
                          _context.next = 14;
                          break;
                        case 11:
                          _context.prev = 11;
                          _context.t0 = _context['catch'](1);
                          _iterator9.e(_context.t0);
                        case 14:
                          _context.prev = 14;
                          _iterator9.f();
                          return _context.finish(14);
                        case 17:
                        case 'end':
                          return _context.stop();
                      }
                  },
                  entries,
                  this,
                  [[1, 11, 14, 17]]
                );
              }),
            },
            {
              key: 'keys',
              value: function keys() {
                return this.values();
              },
            },
            {
              key: 'values',
              value: /*#__PURE__*/ _regeneratorRuntime().mark(function values() {
                var _iterator10, _step10, e;
                return _regeneratorRuntime().wrap(
                  function values$(_context2) {
                    while (1)
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          _iterator10 = _createForOfIteratorHelper(this.a.values());
                          _context2.prev = 1;
                          _iterator10.s();
                        case 3:
                          if ((_step10 = _iterator10.n()).done) {
                            _context2.next = 9;
                            break;
                          }
                          e = _step10.value;
                          _context2.next = 7;
                          return e;
                        case 7:
                          _context2.next = 3;
                          break;
                        case 9:
                          _context2.next = 14;
                          break;
                        case 11:
                          _context2.prev = 11;
                          _context2.t0 = _context2['catch'](1);
                          _iterator10.e(_context2.t0);
                        case 14:
                          _context2.prev = 14;
                          _iterator10.f();
                          return _context2.finish(14);
                        case 17:
                        case 'end':
                          return _context2.stop();
                      }
                  },
                  values,
                  this,
                  [[1, 11, 14, 17]]
                );
              }),
            },
            {
              key: 'clear',
              value: function clear() {
                this.a.clear();
              },
            },
            {
              key: 'forEach',
              value: function forEach(e, t) {
                var _this4 = this;
                this.a.forEach(function (s) {
                  return e.call(t, s, s, _this4);
                });
              },
            },
            {
              key: Symbol.iterator,
              value: function value() {
                return this.values();
              },
            },
          ]);
        })());
    },
  });
function go(e, t) {
  var s = this;
  var r = !1,
    i;
  return function () {
    if (r) return i;
    if (((r = !0), t))
      try {
        i = e.apply(s, arguments);
      } finally {
        t();
      }
    else i = e.apply(s, arguments);
    return i;
  };
}
var js = C({
  'out-build/vs/base/common/functional.js': function outBuild_vs_base_common_functionalJs() {
    'use strict';
  },
});
function mo(e, t) {
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var i = s,
    n = r;
  for (; i < n; ) {
    var a = Math.floor((i + n) / 2);
    t(e[a]) ? (i = a + 1) : (n = a);
  }
  return i - 1;
}
var bo,
  wo = C({
    'out-build/vs/base/common/arraysFind.js': function outBuild_vs_base_common_arraysFindJs() {
      'use strict';

      var _Wn;
      bo =
        ((_Wn = /*#__PURE__*/ (function () {
          function Wn(t) {
            _classCallCheck(this, Wn);
            (this.e = t), (this.c = 0);
          }
          return _createClass(Wn, [
            {
              key: 'findLastMonotonous',
              value: function findLastMonotonous(t) {
                if (Wn.assertInvariants) {
                  if (this.d) {
                    var _iterator11 = _createForOfIteratorHelper(this.e),
                      _step11;
                    try {
                      for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
                        var r = _step11.value;
                        if (this.d(r) && !t(r))
                          throw new Error(
                            'MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.'
                          );
                      }
                    } catch (err) {
                      _iterator11.e(err);
                    } finally {
                      _iterator11.f();
                    }
                  }
                  this.d = t;
                }
                var s = mo(this.e, t, this.c);
                return (this.c = s + 1), s === -1 ? void 0 : this.e[s];
              },
            },
          ]);
        })()),
        (_Wn.assertInvariants = !1),
        _Wn);
    },
  });
function Fs(e, t) {
  var s;
  if (typeof t == 'number') {
    var r = t;
    s = function s() {
      var i = Math.sin(r++) * 179426549;
      return i - Math.floor(i);
    };
  } else s = Math.random;
  for (var _r2 = e.length - 1; _r2 > 0; _r2 -= 1) {
    var i = Math.floor(s() * (_r2 + 1)),
      n = e[_r2];
    (e[_r2] = e[i]), (e[i] = n);
  }
}
function yo(e, t) {
  return function (s, r) {
    return t(e(s), e(r));
  };
}
var y1,
  Ms,
  vo,
  v1 = C({
    'out-build/vs/base/common/arrays.js': function outBuild_vs_base_common_arraysJs() {
      'use strict';

      var _l;
      wo(),
        rt(),
        (function (e) {
          function t(n) {
            return n < 0;
          }
          e.isLessThan = t;
          function s(n) {
            return n <= 0;
          }
          e.isLessThanOrEqual = s;
          function r(n) {
            return n > 0;
          }
          e.isGreaterThan = r;
          function i(n) {
            return n === 0;
          }
          (e.isNeitherLessOrGreaterThan = i),
            (e.greaterThan = 1),
            (e.lessThan = -1),
            (e.neitherLessOrGreaterThan = 0);
        })(y1 || (y1 = {})),
        (Ms = function Ms(e, t) {
          return e - t;
        }),
        (vo =
          ((_l = /*#__PURE__*/ (function () {
            function l1(t) {
              _classCallCheck(this, l1);
              this.iterate = t;
            }
            return _createClass(l1, [
              {
                key: 'forEach',
                value: function forEach(t) {
                  this.iterate(function (s) {
                    return t(s), !0;
                  });
                },
              },
              {
                key: 'toArray',
                value: function toArray() {
                  var t = [];
                  return (
                    this.iterate(function (s) {
                      return t.push(s), !0;
                    }),
                    t
                  );
                },
              },
              {
                key: 'filter',
                value: function filter(t) {
                  var _this5 = this;
                  return new l1(function (s) {
                    return _this5.iterate(function (r) {
                      return t(r) ? s(r) : !0;
                    });
                  });
                },
              },
              {
                key: 'map',
                value: function map(t) {
                  var _this6 = this;
                  return new l1(function (s) {
                    return _this6.iterate(function (r) {
                      return s(t(r));
                    });
                  });
                },
              },
              {
                key: 'some',
                value: function some(t) {
                  var s = !1;
                  return (
                    this.iterate(function (r) {
                      return (s = t(r)), !s;
                    }),
                    s
                  );
                },
              },
              {
                key: 'findFirst',
                value: function findFirst(t) {
                  var s;
                  return (
                    this.iterate(function (r) {
                      return t(r) ? ((s = r), !1) : !0;
                    }),
                    s
                  );
                },
              },
              {
                key: 'findLast',
                value: function findLast(t) {
                  var s;
                  return (
                    this.iterate(function (r) {
                      return t(r) && (s = r), !0;
                    }),
                    s
                  );
                },
              },
              {
                key: 'findLastMaxBy',
                value: function findLastMaxBy(t) {
                  var s,
                    r = !0;
                  return (
                    this.iterate(function (i) {
                      return (r || y1.isGreaterThan(t(i, s))) && ((r = !1), (s = i)), !0;
                    }),
                    s
                  );
                },
              },
            ]);
          })()),
          (_l.empty = new _l(function (t) {})),
          _l));
    },
  });
function Eo(e) {
  return Array.isArray(e);
}
var Us,
  Vs,
  Ws,
  qs,
  E1,
  _o,
  Bs,
  zs,
  Hs,
  Tt,
  Gs,
  _1 = C({
    'out-build/vs/base/common/map.js': function outBuild_vs_base_common_mapJs() {
      'use strict';

      var _$t;
      var _ref;
      (qs = /*#__PURE__*/ _createClass(function qs(e, t) {
        _classCallCheck(this, qs);
        (this.uri = e), (this.value = t);
      })),
        (E1 =
          ((_ref = ((Us = Symbol.toStringTag), Symbol.iterator)),
          (_$t = /*#__PURE__*/ (function () {
            function $t(t, s) {
              _classCallCheck(this, $t);
              if (((this[Us] = 'ResourceMap'), t instanceof $t))
                (this.d = new Map(t.d)), (this.e = s !== null && s !== void 0 ? s : $t.c);
              else if (Eo(t)) {
                (this.d = new Map()), (this.e = s !== null && s !== void 0 ? s : $t.c);
                var _iterator12 = _createForOfIteratorHelper(t),
                  _step12;
                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
                    var _step12$value = _slicedToArray(_step12.value, 2),
                      r = _step12$value[0],
                      i = _step12$value[1];
                    this.set(r, i);
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }
              } else (this.d = new Map()), (this.e = t !== null && t !== void 0 ? t : $t.c);
            }
            return _createClass($t, [
              {
                key: 'set',
                value: function set(t, s) {
                  return this.d.set(this.e(t), new qs(t, s)), this;
                },
              },
              {
                key: 'get',
                value: function get(t) {
                  var _this$d$get;
                  return (_this$d$get = this.d.get(this.e(t))) === null || _this$d$get === void 0
                    ? void 0
                    : _this$d$get.value;
                },
              },
              {
                key: 'has',
                value: function has(t) {
                  return this.d.has(this.e(t));
                },
              },
              {
                key: 'size',
                get: function get() {
                  return this.d.size;
                },
              },
              {
                key: 'clear',
                value: function clear() {
                  this.d.clear();
                },
              },
              {
                key: 'delete',
                value: function _delete(t) {
                  return this.d['delete'](this.e(t));
                },
              },
              {
                key: 'forEach',
                value: function forEach(t, s) {
                  _typeof(s) < 'u' && (t = t.bind(s));
                  var _iterator13 = _createForOfIteratorHelper(this.d),
                    _step13;
                  try {
                    for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
                      var _step13$value = _slicedToArray(_step13.value, 2),
                        r = _step13$value[0],
                        i = _step13$value[1];
                      t(i.value, i.uri, this);
                    }
                  } catch (err) {
                    _iterator13.e(err);
                  } finally {
                    _iterator13.f();
                  }
                },
              },
              {
                key: 'values',
                value: /*#__PURE__*/ _regeneratorRuntime().mark(function values() {
                  var _iterator14, _step14, t;
                  return _regeneratorRuntime().wrap(
                    function values$(_context3) {
                      while (1)
                        switch ((_context3.prev = _context3.next)) {
                          case 0:
                            _iterator14 = _createForOfIteratorHelper(this.d.values());
                            _context3.prev = 1;
                            _iterator14.s();
                          case 3:
                            if ((_step14 = _iterator14.n()).done) {
                              _context3.next = 9;
                              break;
                            }
                            t = _step14.value;
                            _context3.next = 7;
                            return t.value;
                          case 7:
                            _context3.next = 3;
                            break;
                          case 9:
                            _context3.next = 14;
                            break;
                          case 11:
                            _context3.prev = 11;
                            _context3.t0 = _context3['catch'](1);
                            _iterator14.e(_context3.t0);
                          case 14:
                            _context3.prev = 14;
                            _iterator14.f();
                            return _context3.finish(14);
                          case 17:
                          case 'end':
                            return _context3.stop();
                        }
                    },
                    values,
                    this,
                    [[1, 11, 14, 17]]
                  );
                }),
              },
              {
                key: 'keys',
                value: /*#__PURE__*/ _regeneratorRuntime().mark(function keys() {
                  var _iterator15, _step15, t;
                  return _regeneratorRuntime().wrap(
                    function keys$(_context4) {
                      while (1)
                        switch ((_context4.prev = _context4.next)) {
                          case 0:
                            _iterator15 = _createForOfIteratorHelper(this.d.values());
                            _context4.prev = 1;
                            _iterator15.s();
                          case 3:
                            if ((_step15 = _iterator15.n()).done) {
                              _context4.next = 9;
                              break;
                            }
                            t = _step15.value;
                            _context4.next = 7;
                            return t.uri;
                          case 7:
                            _context4.next = 3;
                            break;
                          case 9:
                            _context4.next = 14;
                            break;
                          case 11:
                            _context4.prev = 11;
                            _context4.t0 = _context4['catch'](1);
                            _iterator15.e(_context4.t0);
                          case 14:
                            _context4.prev = 14;
                            _iterator15.f();
                            return _context4.finish(14);
                          case 17:
                          case 'end':
                            return _context4.stop();
                        }
                    },
                    keys,
                    this,
                    [[1, 11, 14, 17]]
                  );
                }),
              },
              {
                key: 'entries',
                value: /*#__PURE__*/ _regeneratorRuntime().mark(function entries() {
                  var _iterator16, _step16, t;
                  return _regeneratorRuntime().wrap(
                    function entries$(_context5) {
                      while (1)
                        switch ((_context5.prev = _context5.next)) {
                          case 0:
                            _iterator16 = _createForOfIteratorHelper(this.d.values());
                            _context5.prev = 1;
                            _iterator16.s();
                          case 3:
                            if ((_step16 = _iterator16.n()).done) {
                              _context5.next = 9;
                              break;
                            }
                            t = _step16.value;
                            _context5.next = 7;
                            return [t.uri, t.value];
                          case 7:
                            _context5.next = 3;
                            break;
                          case 9:
                            _context5.next = 14;
                            break;
                          case 11:
                            _context5.prev = 11;
                            _context5.t0 = _context5['catch'](1);
                            _iterator16.e(_context5.t0);
                          case 14:
                            _context5.prev = 14;
                            _iterator16.f();
                            return _context5.finish(14);
                          case 17:
                          case 'end':
                            return _context5.stop();
                        }
                    },
                    entries,
                    this,
                    [[1, 11, 14, 17]]
                  );
                }),
              },
              {
                key: _ref,
                value: /*#__PURE__*/ _regeneratorRuntime().mark(function value() {
                  var _iterator17, _step17, _step17$value, t;
                  return _regeneratorRuntime().wrap(
                    function value$(_context6) {
                      while (1)
                        switch ((_context6.prev = _context6.next)) {
                          case 0:
                            _iterator17 = _createForOfIteratorHelper(this.d);
                            _context6.prev = 1;
                            _iterator17.s();
                          case 3:
                            if ((_step17 = _iterator17.n()).done) {
                              _context6.next = 9;
                              break;
                            }
                            (_step17$value = _slicedToArray(_step17.value, 2)),
                              (t = _step17$value[1]);
                            _context6.next = 7;
                            return [t.uri, t.value];
                          case 7:
                            _context6.next = 3;
                            break;
                          case 9:
                            _context6.next = 14;
                            break;
                          case 11:
                            _context6.prev = 11;
                            _context6.t0 = _context6['catch'](1);
                            _iterator17.e(_context6.t0);
                          case 14:
                            _context6.prev = 14;
                            _iterator17.f();
                            return _context6.finish(14);
                          case 17:
                          case 'end':
                            return _context6.stop();
                        }
                    },
                    value,
                    this,
                    [[1, 11, 14, 17]]
                  );
                }),
              },
            ]);
          })()),
          (_$t.c = function (t) {
            return t.toString();
          }),
          _$t)),
        (_o = /*#__PURE__*/ (function (_ref2) {
          function _o(e, t) {
            _classCallCheck(this, _o);
            (this[Vs] = 'ResourceSet'),
              !e || typeof e == 'function'
                ? (this.c = new E1(e))
                : ((this.c = new E1(t)), e.forEach(this.add, this));
          }
          return _createClass(_o, [
            {
              key: 'size',
              get: function get() {
                return this.c.size;
              },
            },
            {
              key: 'add',
              value: function add(e) {
                return this.c.set(e, e), this;
              },
            },
            {
              key: 'clear',
              value: function clear() {
                this.c.clear();
              },
            },
            {
              key: 'delete',
              value: function _delete(e) {
                return this.c['delete'](e);
              },
            },
            {
              key: 'forEach',
              value: function forEach(e, t) {
                var _this7 = this;
                this.c.forEach(function (s, r) {
                  return e.call(t, r, r, _this7);
                });
              },
            },
            {
              key: 'has',
              value: function has(e) {
                return this.c.has(e);
              },
            },
            {
              key: 'entries',
              value: function entries() {
                return this.c.entries();
              },
            },
            {
              key: 'keys',
              value: function keys() {
                return this.c.keys();
              },
            },
            {
              key: 'values',
              value: function values() {
                return this.c.keys();
              },
            },
            {
              key: _ref2,
              value: function value() {
                return this.keys();
              },
            },
          ]);
        })(((Vs = Symbol.toStringTag), Symbol.iterator))),
        (function (e) {
          (e[(e.None = 0)] = 'None'), (e[(e.AsOld = 1)] = 'AsOld'), (e[(e.AsNew = 2)] = 'AsNew');
        })(Bs || (Bs = {})),
        (zs = /*#__PURE__*/ (function (_ref3) {
          function zs() {
            _classCallCheck(this, zs);
            (this[Ws] = 'LinkedMap'),
              (this.c = new Map()),
              (this.d = void 0),
              (this.e = void 0),
              (this.f = 0),
              (this.g = 0);
          }
          return _createClass(zs, [
            {
              key: 'clear',
              value: function clear() {
                this.c.clear(), (this.d = void 0), (this.e = void 0), (this.f = 0), this.g++;
              },
            },
            {
              key: 'isEmpty',
              value: function isEmpty() {
                return !this.d && !this.e;
              },
            },
            {
              key: 'size',
              get: function get() {
                return this.f;
              },
            },
            {
              key: 'first',
              get: function get() {
                var _this$d;
                return (_this$d = this.d) === null || _this$d === void 0 ? void 0 : _this$d.value;
              },
            },
            {
              key: 'last',
              get: function get() {
                var _this$e;
                return (_this$e = this.e) === null || _this$e === void 0 ? void 0 : _this$e.value;
              },
            },
            {
              key: 'has',
              value: function has(e) {
                return this.c.has(e);
              },
            },
            {
              key: 'get',
              value: function get(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var s = this.c.get(e);
                if (s) return t !== 0 && this.n(s, t), s.value;
              },
            },
            {
              key: 'set',
              value: function set(e, t) {
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var r = this.c.get(e);
                if (r) (r.value = t), s !== 0 && this.n(r, s);
                else {
                  switch (
                    ((r = {
                      key: e,
                      value: t,
                      next: void 0,
                      previous: void 0,
                    }),
                    s)
                  ) {
                    case 0:
                      this.l(r);
                      break;
                    case 1:
                      this.k(r);
                      break;
                    case 2:
                      this.l(r);
                      break;
                    default:
                      this.l(r);
                      break;
                  }
                  this.c.set(e, r), this.f++;
                }
                return this;
              },
            },
            {
              key: 'delete',
              value: function _delete(e) {
                return !!this.remove(e);
              },
            },
            {
              key: 'remove',
              value: function remove(e) {
                var t = this.c.get(e);
                if (t) return this.c['delete'](e), this.m(t), this.f--, t.value;
              },
            },
            {
              key: 'shift',
              value: function shift() {
                if (!this.d && !this.e) return;
                if (!this.d || !this.e) throw new Error('Invalid list');
                var e = this.d;
                return this.c['delete'](e.key), this.m(e), this.f--, e.value;
              },
            },
            {
              key: 'forEach',
              value: function forEach(e, t) {
                var s = this.g;
                var r = this.d;
                for (; r; ) {
                  if ((t ? e.bind(t)(r.value, r.key, this) : e(r.value, r.key, this), this.g !== s))
                    throw new Error('LinkedMap got modified during iteration.');
                  r = r.next;
                }
              },
            },
            {
              key: 'keys',
              value: function keys() {
                var e = this,
                  t = this.g;
                var s = this.d;
                var r = _defineProperty(
                  _defineProperty({}, Symbol.iterator, function () {
                    return r;
                  }),
                  'next',
                  function next() {
                    if (e.g !== t) throw new Error('LinkedMap got modified during iteration.');
                    if (s) {
                      var i = {
                        value: s.key,
                        done: !1,
                      };
                      return (s = s.next), i;
                    } else
                      return {
                        value: void 0,
                        done: !0,
                      };
                  }
                );
                return r;
              },
            },
            {
              key: 'values',
              value: function values() {
                var e = this,
                  t = this.g;
                var s = this.d;
                var r = _defineProperty(
                  _defineProperty({}, Symbol.iterator, function () {
                    return r;
                  }),
                  'next',
                  function next() {
                    if (e.g !== t) throw new Error('LinkedMap got modified during iteration.');
                    if (s) {
                      var i = {
                        value: s.value,
                        done: !1,
                      };
                      return (s = s.next), i;
                    } else
                      return {
                        value: void 0,
                        done: !0,
                      };
                  }
                );
                return r;
              },
            },
            {
              key: 'entries',
              value: function entries() {
                var e = this,
                  t = this.g;
                var s = this.d;
                var r = _defineProperty(
                  _defineProperty({}, Symbol.iterator, function () {
                    return r;
                  }),
                  'next',
                  function next() {
                    if (e.g !== t) throw new Error('LinkedMap got modified during iteration.');
                    if (s) {
                      var i = {
                        value: [s.key, s.value],
                        done: !1,
                      };
                      return (s = s.next), i;
                    } else
                      return {
                        value: void 0,
                        done: !0,
                      };
                  }
                );
                return r;
              },
            },
            {
              key: _ref3,
              value: function value() {
                return this.entries();
              },
            },
            {
              key: 'h',
              value: function h(e) {
                if (e >= this.size) return;
                if (e === 0) {
                  this.clear();
                  return;
                }
                var t = this.d,
                  s = this.size;
                for (; t && s > e; ) this.c['delete'](t.key), (t = t.next), s--;
                (this.d = t), (this.f = s), t && (t.previous = void 0), this.g++;
              },
            },
            {
              key: 'j',
              value: function j(e) {
                if (e >= this.size) return;
                if (e === 0) {
                  this.clear();
                  return;
                }
                var t = this.e,
                  s = this.size;
                for (; t && s > e; ) this.c['delete'](t.key), (t = t.previous), s--;
                (this.e = t), (this.f = s), t && (t.next = void 0), this.g++;
              },
            },
            {
              key: 'k',
              value: function k(e) {
                if (!this.d && !this.e) this.e = e;
                else if (this.d) (e.next = this.d), (this.d.previous = e);
                else throw new Error('Invalid list');
                (this.d = e), this.g++;
              },
            },
            {
              key: 'l',
              value: function l(e) {
                if (!this.d && !this.e) this.d = e;
                else if (this.e) (e.previous = this.e), (this.e.next = e);
                else throw new Error('Invalid list');
                (this.e = e), this.g++;
              },
            },
            {
              key: 'm',
              value: function m(e) {
                if (e === this.d && e === this.e) (this.d = void 0), (this.e = void 0);
                else if (e === this.d) {
                  if (!e.next) throw new Error('Invalid list');
                  (e.next.previous = void 0), (this.d = e.next);
                } else if (e === this.e) {
                  if (!e.previous) throw new Error('Invalid list');
                  (e.previous.next = void 0), (this.e = e.previous);
                } else {
                  var t = e.next,
                    s = e.previous;
                  if (!t || !s) throw new Error('Invalid list');
                  (t.previous = s), (s.next = t);
                }
                (e.next = void 0), (e.previous = void 0), this.g++;
              },
            },
            {
              key: 'n',
              value: function n(e, t) {
                if (!this.d || !this.e) throw new Error('Invalid list');
                if (!(t !== 1 && t !== 2)) {
                  if (t === 1) {
                    if (e === this.d) return;
                    var s = e.next,
                      r = e.previous;
                    e === this.e
                      ? ((r.next = void 0), (this.e = r))
                      : ((s.previous = r), (r.next = s)),
                      (e.previous = void 0),
                      (e.next = this.d),
                      (this.d.previous = e),
                      (this.d = e),
                      this.g++;
                  } else if (t === 2) {
                    if (e === this.e) return;
                    var _s2 = e.next,
                      _r6 = e.previous;
                    e === this.d
                      ? ((_s2.previous = void 0), (this.d = _s2))
                      : ((_s2.previous = _r6), (_r6.next = _s2)),
                      (e.next = void 0),
                      (e.previous = this.e),
                      (this.e.next = e),
                      (this.e = e),
                      this.g++;
                  }
                }
              },
            },
            {
              key: 'toJSON',
              value: function toJSON() {
                var e = [];
                return (
                  this.forEach(function (t, s) {
                    e.push([s, t]);
                  }),
                  e
                );
              },
            },
            {
              key: 'fromJSON',
              value: function fromJSON(e) {
                this.clear();
                var _iterator18 = _createForOfIteratorHelper(e),
                  _step18;
                try {
                  for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
                    var _step18$value = _slicedToArray(_step18.value, 2),
                      t = _step18$value[0],
                      s = _step18$value[1];
                    this.set(t, s);
                  }
                } catch (err) {
                  _iterator18.e(err);
                } finally {
                  _iterator18.f();
                }
              },
            },
          ]);
        })(((Ws = Symbol.toStringTag), Symbol.iterator))),
        (Hs = /*#__PURE__*/ (function (_zs) {
          function Hs(e) {
            var _this8;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            _classCallCheck(this, Hs);
            (_this8 = _callSuper(this, Hs)),
              (_this8.o = e),
              (_this8.p = Math.min(Math.max(0, t), 1));
            return _this8;
          }
          _inherits(Hs, _zs);
          return _createClass(Hs, [
            {
              key: 'limit',
              get: function get() {
                return this.o;
              },
              set: function set(e) {
                (this.o = e), this.q();
              },
            },
            {
              key: 'ratio',
              get: function get() {
                return this.p;
              },
              set: function set(e) {
                (this.p = Math.min(Math.max(0, e), 1)), this.q();
              },
            },
            {
              key: 'get',
              value: function get(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
                return _superPropGet(Hs, 'get', this, 3)([e, t]);
              },
            },
            {
              key: 'peek',
              value: function peek(e) {
                return _superPropGet(Hs, 'get', this, 3)([e, 0]);
              },
            },
            {
              key: 'set',
              value: function set(e, t) {
                return _superPropGet(Hs, 'set', this, 3)([e, t, 2]), this;
              },
            },
            {
              key: 'q',
              value: function q() {
                this.size > this.o && this.r(Math.round(this.o * this.p));
              },
            },
          ]);
        })(zs)),
        (Tt = /*#__PURE__*/ (function (_Hs) {
          function Tt(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            _classCallCheck(this, Tt);
            return _callSuper(this, Tt, [e, t]);
          }
          _inherits(Tt, _Hs);
          return _createClass(Tt, [
            {
              key: 'r',
              value: function r(e) {
                this.h(e);
              },
            },
            {
              key: 'set',
              value: function set(e, t) {
                return _superPropGet(Tt, 'set', this, 3)([e, t]), this.q(), this;
              },
            },
          ]);
        })(Hs)),
        (Gs = /*#__PURE__*/ (function () {
          function Gs() {
            _classCallCheck(this, Gs);
            this.c = new Map();
          }
          return _createClass(Gs, [
            {
              key: 'add',
              value: function add(e, t) {
                var s = this.c.get(e);
                s || ((s = new Set()), this.c.set(e, s)), s.add(t);
              },
            },
            {
              key: 'delete',
              value: function _delete(e, t) {
                var s = this.c.get(e);
                s && (s['delete'](t), s.size === 0 && this.c['delete'](e));
              },
            },
            {
              key: 'forEach',
              value: function forEach(e, t) {
                var s = this.c.get(e);
                s && s.forEach(t);
              },
            },
            {
              key: 'get',
              value: function get(e) {
                var t = this.c.get(e);
                return t || new Set();
              },
            },
          ]);
        })());
    },
  }),
  C1,
  Co = C({
    'out-build/vs/base/common/iterator.js': function outBuild_vs_base_common_iteratorJs() {
      'use strict';

      Rt(),
        (function (e) {
          var _marked = /*#__PURE__*/ _regeneratorRuntime().mark(i),
            _marked2 = /*#__PURE__*/ _regeneratorRuntime().mark(o),
            _marked3 = /*#__PURE__*/ _regeneratorRuntime().mark(h),
            _marked4 = /*#__PURE__*/ _regeneratorRuntime().mark(d),
            _marked5 = /*#__PURE__*/ _regeneratorRuntime().mark(p),
            _marked6 = /*#__PURE__*/ _regeneratorRuntime().mark(y);
          function t(_) {
            return _ && _typeof(_) == 'object' && typeof _[Symbol.iterator] == 'function';
          }
          e.is = t;
          var s = Object.freeze([]);
          function r() {
            return s;
          }
          e.empty = r;
          function i(_) {
            return _regeneratorRuntime().wrap(function i$(_context7) {
              while (1)
                switch ((_context7.prev = _context7.next)) {
                  case 0:
                    _context7.next = 2;
                    return _;
                  case 2:
                  case 'end':
                    return _context7.stop();
                }
            }, _marked);
          }
          e.single = i;
          function n(_) {
            return t(_) ? _ : i(_);
          }
          e.wrap = n;
          function a(_) {
            return _ || s;
          }
          e.from = a;
          function o(_) {
            var S;
            return _regeneratorRuntime().wrap(function o$(_context8) {
              while (1)
                switch ((_context8.prev = _context8.next)) {
                  case 0:
                    S = _.length - 1;
                  case 1:
                    if (!(S >= 0)) {
                      _context8.next = 7;
                      break;
                    }
                    _context8.next = 4;
                    return _[S];
                  case 4:
                    S--;
                    _context8.next = 1;
                    break;
                  case 7:
                  case 'end':
                    return _context8.stop();
                }
            }, _marked2);
          }
          e.reverse = o;
          function c(_) {
            return !_ || _[Symbol.iterator]().next().done === !0;
          }
          e.isEmpty = c;
          function l(_) {
            return _[Symbol.iterator]().next().value;
          }
          e.first = l;
          function f(_, S) {
            var O = 0;
            var _iterator19 = _createForOfIteratorHelper(_),
              _step19;
            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
                var I = _step19.value;
                if (S(I, O++)) return !0;
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }
            return !1;
          }
          e.some = f;
          function u(_, S) {
            var _iterator20 = _createForOfIteratorHelper(_),
              _step20;
            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
                var O = _step20.value;
                if (S(O)) return O;
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }
          }
          e.find = u;
          function h(_, S) {
            var _iterator21, _step21, O;
            return _regeneratorRuntime().wrap(
              function h$(_context9) {
                while (1)
                  switch ((_context9.prev = _context9.next)) {
                    case 0:
                      _iterator21 = _createForOfIteratorHelper(_);
                      _context9.prev = 1;
                      _iterator21.s();
                    case 3:
                      if ((_step21 = _iterator21.n()).done) {
                        _context9.next = 11;
                        break;
                      }
                      O = _step21.value;
                      _context9.t0 = S(O);
                      if (!_context9.t0) {
                        _context9.next = 9;
                        break;
                      }
                      _context9.next = 9;
                      return O;
                    case 9:
                      _context9.next = 3;
                      break;
                    case 11:
                      _context9.next = 16;
                      break;
                    case 13:
                      _context9.prev = 13;
                      _context9.t1 = _context9['catch'](1);
                      _iterator21.e(_context9.t1);
                    case 16:
                      _context9.prev = 16;
                      _iterator21.f();
                      return _context9.finish(16);
                    case 19:
                    case 'end':
                      return _context9.stop();
                  }
              },
              _marked3,
              null,
              [[1, 13, 16, 19]]
            );
          }
          e.filter = h;
          function d(_, S) {
            var O, _iterator22, _step22, I;
            return _regeneratorRuntime().wrap(
              function d$(_context10) {
                while (1)
                  switch ((_context10.prev = _context10.next)) {
                    case 0:
                      O = 0;
                      _iterator22 = _createForOfIteratorHelper(_);
                      _context10.prev = 2;
                      _iterator22.s();
                    case 4:
                      if ((_step22 = _iterator22.n()).done) {
                        _context10.next = 10;
                        break;
                      }
                      I = _step22.value;
                      _context10.next = 8;
                      return S(I, O++);
                    case 8:
                      _context10.next = 4;
                      break;
                    case 10:
                      _context10.next = 15;
                      break;
                    case 12:
                      _context10.prev = 12;
                      _context10.t0 = _context10['catch'](2);
                      _iterator22.e(_context10.t0);
                    case 15:
                      _context10.prev = 15;
                      _iterator22.f();
                      return _context10.finish(15);
                    case 18:
                    case 'end':
                      return _context10.stop();
                  }
              },
              _marked4,
              null,
              [[2, 12, 15, 18]]
            );
          }
          e.map = d;
          function p(_, S) {
            var O, _iterator23, _step23, I;
            return _regeneratorRuntime().wrap(
              function p$(_context11) {
                while (1)
                  switch ((_context11.prev = _context11.next)) {
                    case 0:
                      O = 0;
                      _iterator23 = _createForOfIteratorHelper(_);
                      _context11.prev = 2;
                      _iterator23.s();
                    case 4:
                      if ((_step23 = _iterator23.n()).done) {
                        _context11.next = 9;
                        break;
                      }
                      I = _step23.value;
                      return _context11.delegateYield(S(I, O++), 't0', 7);
                    case 7:
                      _context11.next = 4;
                      break;
                    case 9:
                      _context11.next = 14;
                      break;
                    case 11:
                      _context11.prev = 11;
                      _context11.t1 = _context11['catch'](2);
                      _iterator23.e(_context11.t1);
                    case 14:
                      _context11.prev = 14;
                      _iterator23.f();
                      return _context11.finish(14);
                    case 17:
                    case 'end':
                      return _context11.stop();
                  }
              },
              _marked5,
              null,
              [[2, 11, 14, 17]]
            );
          }
          e.flatMap = p;
          function y() {
            var _len,
              _,
              _key,
              _i2,
              _arr,
              S,
              _args12 = arguments;
            return _regeneratorRuntime().wrap(function y$(_context12) {
              while (1)
                switch ((_context12.prev = _context12.next)) {
                  case 0:
                    for (
                      _len = _args12.length, _ = new Array(_len), _key = 0;
                      _key < _len;
                      _key++
                    ) {
                      _[_key] = _args12[_key];
                    }
                    (_i2 = 0), (_arr = _);
                  case 2:
                    if (!(_i2 < _arr.length)) {
                      _context12.next = 13;
                      break;
                    }
                    S = _arr[_i2];
                    if (!uo(S)) {
                      _context12.next = 8;
                      break;
                    }
                    return _context12.delegateYield(S, 't0', 6);
                  case 6:
                    _context12.next = 10;
                    break;
                  case 8:
                    _context12.next = 10;
                    return S;
                  case 10:
                    _i2++;
                    _context12.next = 2;
                    break;
                  case 13:
                  case 'end':
                    return _context12.stop();
                }
            }, _marked6);
          }
          e.concat = y;
          function v(_, S, O) {
            var I = O;
            var _iterator24 = _createForOfIteratorHelper(_),
              _step24;
            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
                var j = _step24.value;
                I = S(I, j);
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }
            return I;
          }
          e.reduce = v;
          function $(_, S) {
            var O = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _.length;
            return /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context13) {
                while (1)
                  switch ((_context13.prev = _context13.next)) {
                    case 0:
                      S < -_.length && (S = 0),
                        S < 0 && (S += _.length),
                        O < 0 ? (O += _.length) : O > _.length && (O = _.length);
                    case 1:
                      if (!(S < O)) {
                        _context13.next = 7;
                        break;
                      }
                      _context13.next = 4;
                      return _[S];
                    case 4:
                      S++;
                      _context13.next = 1;
                      break;
                    case 7:
                    case 'end':
                      return _context13.stop();
                  }
              }, _callee);
            })();
          }
          e.slice = $;
          function N(_) {
            var S =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : Number.POSITIVE_INFINITY;
            var O = [];
            if (S === 0) return [O, _];
            var I = _[Symbol.iterator]();
            for (var j = 0; j < S; j++) {
              var D = I.next();
              if (D.done) return [O, e.empty()];
              O.push(D.value);
            }
            return [
              O,
              _defineProperty({}, Symbol.iterator, function () {
                return I;
              }),
            ];
          }
          e.consume = N;
          function L(_x) {
            return _L.apply(this, arguments);
          }
          function _L() {
            _L = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(_) {
                var S,
                  _iteratorAbruptCompletion,
                  _didIteratorError,
                  _iteratorError,
                  _iterator,
                  _step,
                  O;
                return _regeneratorRuntime().wrap(
                  function _callee2$(_context14) {
                    while (1)
                      switch ((_context14.prev = _context14.next)) {
                        case 0:
                          S = [];
                          _iteratorAbruptCompletion = false;
                          _didIteratorError = false;
                          _context14.prev = 3;
                          _iterator = _asyncIterator(_);
                        case 5:
                          _context14.next = 7;
                          return _iterator.next();
                        case 7:
                          if (!(_iteratorAbruptCompletion = !(_step = _context14.sent).done)) {
                            _context14.next = 13;
                            break;
                          }
                          O = _step.value;
                          S.push(O);
                        case 10:
                          _iteratorAbruptCompletion = false;
                          _context14.next = 5;
                          break;
                        case 13:
                          _context14.next = 19;
                          break;
                        case 15:
                          _context14.prev = 15;
                          _context14.t0 = _context14['catch'](3);
                          _didIteratorError = true;
                          _iteratorError = _context14.t0;
                        case 19:
                          _context14.prev = 19;
                          _context14.prev = 20;
                          if (!(_iteratorAbruptCompletion && _iterator['return'] != null)) {
                            _context14.next = 24;
                            break;
                          }
                          _context14.next = 24;
                          return _iterator['return']();
                        case 24:
                          _context14.prev = 24;
                          if (!_didIteratorError) {
                            _context14.next = 27;
                            break;
                          }
                          throw _iteratorError;
                        case 27:
                          return _context14.finish(24);
                        case 28:
                          return _context14.finish(19);
                        case 29:
                          return _context14.abrupt('return', Promise.resolve(S));
                        case 30:
                        case 'end':
                          return _context14.stop();
                      }
                  },
                  _callee2,
                  null,
                  [
                    [3, 15, 19, 29],
                    [20, , 24, 28],
                  ]
                );
              })
            );
            return _L.apply(this, arguments);
          }
          e.asyncToArray = L;
        })(C1 || (C1 = {}));
    },
  });
function $o(e) {
  Te = e;
}
function it(e) {
  var _Te;
  return (_Te = Te) !== null && _Te !== void 0 && _Te.trackDisposable(e), e;
}
function nt(e) {
  var _Te2;
  (_Te2 = Te) === null || _Te2 === void 0 || _Te2.markAsDisposed(e);
}
function ot(e, t) {
  var _Te3;
  (_Te3 = Te) === null || _Te3 === void 0 || _Te3.setParent(e, t);
}
function Ao(e, t) {
  if (Te) {
    var _iterator25 = _createForOfIteratorHelper(e),
      _step25;
    try {
      for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) {
        var s = _step25.value;
        Te.setParent(s, t);
      }
    } catch (err) {
      _iterator25.e(err);
    } finally {
      _iterator25.f();
    }
  }
}
function $1(e) {
  if (C1.is(e)) {
    var t = [];
    var _iterator26 = _createForOfIteratorHelper(e),
      _step26;
    try {
      for (_iterator26.s(); !(_step26 = _iterator26.n()).done; ) {
        var s = _step26.value;
        if (s)
          try {
            s.dispose();
          } catch (r) {
            t.push(r);
          }
      }
    } catch (err) {
      _iterator26.e(err);
    } finally {
      _iterator26.f();
    }
    if (t.length === 1) throw t[0];
    if (t.length > 1) throw new AggregateError(t, 'Encountered errors while disposing of store');
    return Array.isArray(e) ? [] : e;
  } else if (e) return e.dispose(), e;
}
function Oo() {
  for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    e[_key2] = arguments[_key2];
  }
  var t = Re(function () {
    return $1(e);
  });
  return Ao(e, t), t;
}
function Re(e) {
  var t = it({
    dispose: go(function () {
      nt(t), e();
    }),
  });
  return t;
}
var Js,
  Te,
  So,
  Ie,
  Ee,
  A1,
  Ks,
  It = C({
    'out-build/vs/base/common/lifecycle.js': function outBuild_vs_base_common_lifecycleJs() {
      'use strict';

      var _qn, _Bn, _Class2;
      if (
        (v1(),
        Is(),
        _1(),
        js(),
        Co(),
        (Js = !1),
        (Te = null),
        (So =
          ((_qn = /*#__PURE__*/ (function () {
            function qn() {
              _classCallCheck(this, qn);
              this.b = new Map();
            }
            return _createClass(qn, [
              {
                key: 'c',
                value: function c(t) {
                  var s = this.b.get(t);
                  return (
                    s ||
                      ((s = {
                        parent: null,
                        source: null,
                        isSingleton: !1,
                        value: t,
                        idx: qn.a++,
                      }),
                      this.b.set(t, s)),
                    s
                  );
                },
              },
              {
                key: 'trackDisposable',
                value: function trackDisposable(t) {
                  var s = this.c(t);
                  s.source || (s.source = new Error().stack);
                },
              },
              {
                key: 'setParent',
                value: function setParent(t, s) {
                  var r = this.c(t);
                  r.parent = s;
                },
              },
              {
                key: 'markAsDisposed',
                value: function markAsDisposed(t) {
                  this.b['delete'](t);
                },
              },
              {
                key: 'markAsSingleton',
                value: function markAsSingleton(t) {
                  this.c(t).isSingleton = !0;
                },
              },
              {
                key: 'f',
                value: function f(t, s) {
                  var r = s.get(t);
                  if (r) return r;
                  var i = t.parent ? this.f(this.c(t.parent), s) : t;
                  return s.set(t, i), i;
                },
              },
              {
                key: 'getTrackedDisposables',
                value: function getTrackedDisposables() {
                  var _this9 = this;
                  var t = new Map();
                  return _toConsumableArray(this.b.entries())
                    .filter(function (_ref5) {
                      var _ref6 = _slicedToArray(_ref5, 2),
                        r = _ref6[1];
                      return r.source !== null && !_this9.f(r, t).isSingleton;
                    })
                    .flatMap(function (_ref7) {
                      var _ref8 = _slicedToArray(_ref7, 1),
                        r = _ref8[0];
                      return r;
                    });
                },
              },
              {
                key: 'computeLeakingDisposables',
                value: function computeLeakingDisposables() {
                  var _this10 = this;
                  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
                  var s = arguments.length > 1 ? arguments[1] : undefined;
                  var r;
                  if (s) r = s;
                  else {
                    var c = new Map(),
                      l = _toConsumableArray(this.b.values()).filter(function (u) {
                        return u.source !== null && !_this10.f(u, c).isSingleton;
                      });
                    if (l.length === 0) return;
                    var f = new Set(
                      l.map(function (u) {
                        return u.value;
                      })
                    );
                    if (
                      ((r = l.filter(function (u) {
                        return !(u.parent && f.has(u.parent));
                      })),
                      r.length === 0)
                    )
                      throw new Error('There are cyclic diposable chains!');
                  }
                  if (!r) return;
                  function i(c) {
                    function l(u, h) {
                      for (
                        ;
                        u.length > 0 &&
                        h.some(function (d) {
                          return typeof d == 'string' ? d === u[0] : u[0].match(d);
                        });

                      )
                        u.shift();
                    }
                    var f = c.source
                      .split('\n')
                      .map(function (u) {
                        return u.trim().replace('at ', '');
                      })
                      .filter(function (u) {
                        return u !== '';
                      });
                    return (
                      l(f, [
                        'Error',
                        /^trackDisposable \(.*\)$/,
                        /^DisposableTracker.trackDisposable \(.*\)$/,
                      ]),
                      f.reverse()
                    );
                  }
                  var n = new Gs();
                  var _iterator27 = _createForOfIteratorHelper(r),
                    _step27;
                  try {
                    for (_iterator27.s(); !(_step27 = _iterator27.n()).done; ) {
                      var _c = _step27.value;
                      var _l2 = i(_c);
                      for (var _f = 0; _f <= _l2.length; _f++)
                        n.add(_l2.slice(0, _f).join('\n'), _c);
                    }
                  } catch (err) {
                    _iterator27.e(err);
                  } finally {
                    _iterator27.f();
                  }
                  r.sort(
                    yo(function (c) {
                      return c.idx;
                    }, Ms)
                  );
                  var a = '',
                    o = 0;
                  var _iterator28 = _createForOfIteratorHelper(r.slice(0, t)),
                    _step28;
                  try {
                    for (_iterator28.s(); !(_step28 = _iterator28.n()).done; ) {
                      var _c2 = _step28.value;
                      o++;
                      var _l3 = i(_c2),
                        _f2 = [];
                      var _loop2 = function _loop2(u) {
                        var h = _l3[u];
                        h = '(shared with '
                          .concat(n.get(_l3.slice(0, u + 1).join('\n')).size, '/')
                          .concat(r.length, ' leaks) at ')
                          .concat(h);
                        var p = n.get(_l3.slice(0, u).join('\n')),
                          y = ho(
                            _toConsumableArray(p).map(function (v) {
                              return i(v)[u];
                            }),
                            function (v) {
                              return v;
                            }
                          );
                        delete y[_l3[u]];
                        for (
                          var _i3 = 0, _Object$entries = Object.entries(y);
                          _i3 < _Object$entries.length;
                          _i3++
                        ) {
                          var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
                            v = _Object$entries$_i[0],
                            $ = _Object$entries$_i[1];
                          _f2.unshift(
                            '    - stacktraces of '
                              .concat($.length, ' other leaks continue with ')
                              .concat(v)
                          );
                        }
                        _f2.unshift(h);
                      };
                      for (var u = 0; u < _l3.length; u++) {
                        _loop2(u);
                      }
                      a += '\n\n\n==================== Leaking disposable '
                        .concat(o, '/')
                        .concat(r.length, ': ')
                        .concat(_c2.value.constructor.name, ' ====================\n')
                        .concat(
                          _f2.join('\n'),
                          '\n============================================================\n\n'
                        );
                    }
                  } catch (err) {
                    _iterator28.e(err);
                  } finally {
                    _iterator28.f();
                  }
                  return (
                    r.length > t &&
                      (a += '\n\n\n... and '.concat(r.length - t, ' more leaking disposables\n\n')),
                    {
                      leaks: r,
                      details: a,
                    }
                  );
                },
              },
            ]);
          })()),
          (_qn.a = 0),
          _qn)),
        Js)
      ) {
        var e = '__is_disposable_tracked__';
        $o(
          new /*#__PURE__*/ ((function () {
            function _class() {
              _classCallCheck(this, _class);
            }
            return _createClass(_class, [
              {
                key: 'trackDisposable',
                value: function trackDisposable(t) {
                  var s = new Error('Potentially leaked disposable').stack;
                  setTimeout(function () {
                    t[e] || console.log(s);
                  }, 3e3);
                },
              },
              {
                key: 'setParent',
                value: function setParent(t, s) {
                  if (t && t !== Ee.None)
                    try {
                      t[e] = !0;
                    } catch (_unused) {}
                },
              },
              {
                key: 'markAsDisposed',
                value: function markAsDisposed(t) {
                  if (t && t !== Ee.None)
                    try {
                      t[e] = !0;
                    } catch (_unused2) {}
                },
              },
              {
                key: 'markAsSingleton',
                value: function markAsSingleton(t) {},
              },
            ]);
          })())()
        );
      }
      (Ie =
        ((_Bn = /*#__PURE__*/ (function () {
          function Bn() {
            _classCallCheck(this, Bn);
            (this.f = new Set()), (this.g = !1), it(this);
          }
          return _createClass(Bn, [
            {
              key: 'dispose',
              value: function dispose() {
                this.g || (nt(this), (this.g = !0), this.clear());
              },
            },
            {
              key: 'isDisposed',
              get: function get() {
                return this.g;
              },
            },
            {
              key: 'clear',
              value: function clear() {
                if (this.f.size !== 0)
                  try {
                    $1(this.f);
                  } finally {
                    this.f.clear();
                  }
              },
            },
            {
              key: 'add',
              value: function add(t) {
                if (!t) return t;
                if (t === this) throw new Error('Cannot register a disposable on itself!');
                return (
                  ot(t, this),
                  this.g
                    ? Bn.DISABLE_DISPOSED_WARNING ||
                      console.warn(
                        new Error(
                          'Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!'
                        ).stack
                      )
                    : this.f.add(t),
                  t
                );
              },
            },
            {
              key: 'delete',
              value: function _delete(t) {
                if (t) {
                  if (t === this) throw new Error('Cannot dispose a disposable on itself!');
                  this.f['delete'](t), t.dispose();
                }
              },
            },
            {
              key: 'deleteAndLeak',
              value: function deleteAndLeak(t) {
                t && this.f.has(t) && (this.f['delete'](t), ot(t, null));
              },
            },
          ]);
        })()),
        (_Bn.DISABLE_DISPOSED_WARNING = !1),
        _Bn)),
        (Ee =
          ((_Class2 = /*#__PURE__*/ (function () {
            function Ee() {
              _classCallCheck(this, Ee);
              (this.q = new Ie()), it(this), ot(this.q, this);
            }
            return _createClass(Ee, [
              {
                key: 'dispose',
                value: function dispose() {
                  nt(this), this.q.dispose();
                },
              },
              {
                key: 'B',
                value: function B(e) {
                  if (e === this) throw new Error('Cannot register a disposable on itself!');
                  return this.q.add(e);
                },
              },
              {
                key: 'registerDisposableEvent',
                value: function registerDisposableEvent(e) {
                  return this.B(e);
                },
              },
            ]);
          })()),
          (_Class2.None = Object.freeze({
            dispose: function dispose() {},
          })),
          _Class2)),
        (A1 = /*#__PURE__*/ (function () {
          function A1() {
            _classCallCheck(this, A1);
            (this.b = !1), it(this);
          }
          return _createClass(A1, [
            {
              key: 'value',
              get: function get() {
                return this.b ? void 0 : this.a;
              },
              set: function set(e) {
                var _this$a;
                this.b ||
                  e === this.a ||
                  ((_this$a = this.a) !== null && _this$a !== void 0 && _this$a.dispose(),
                  e && ot(e, this),
                  (this.a = e));
              },
            },
            {
              key: 'clear',
              value: function clear() {
                this.value = void 0;
              },
            },
            {
              key: 'dispose',
              value: function dispose() {
                var _this$a2;
                (this.b = !0),
                  nt(this),
                  (_this$a2 = this.a) !== null && _this$a2 !== void 0 && _this$a2.dispose(),
                  (this.a = void 0);
              },
            },
            {
              key: 'clearAndLeak',
              value: function clearAndLeak() {
                var e = this.a;
                return (this.a = void 0), e && ot(e, null), e;
              },
            },
          ]);
        })()),
        (Ks = /*#__PURE__*/ (function () {
          function Ks() {
            _classCallCheck(this, Ks);
            (this.a = new Map()), (this.b = !1), it(this);
          }
          return _createClass(Ks, [
            {
              key: 'dispose',
              value: function dispose() {
                nt(this), (this.b = !0), this.clearAndDisposeAll();
              },
            },
            {
              key: 'clearAndDisposeAll',
              value: function clearAndDisposeAll() {
                if (this.a.size)
                  try {
                    $1(this.a.values());
                  } finally {
                    this.a.clear();
                  }
              },
            },
            {
              key: 'has',
              value: function has(e) {
                return this.a.has(e);
              },
            },
            {
              key: 'size',
              get: function get() {
                return this.a.size;
              },
            },
            {
              key: 'get',
              value: function get(e) {
                return this.a.get(e);
              },
            },
            {
              key: 'set',
              value: function set(e, t) {
                var _this$a$get;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                this.b &&
                  console.warn(
                    new Error(
                      'Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!'
                    ).stack
                  ),
                  s ||
                    ((_this$a$get = this.a.get(e)) !== null &&
                      _this$a$get !== void 0 &&
                      _this$a$get.dispose()),
                  this.a.set(e, t);
              },
            },
            {
              key: 'deleteAndDispose',
              value: function deleteAndDispose(e) {
                var _this$a$get2;
                (_this$a$get2 = this.a.get(e)) !== null &&
                  _this$a$get2 !== void 0 &&
                  _this$a$get2.dispose(),
                  this.a['delete'](e);
              },
            },
            {
              key: 'deleteAndLeak',
              value: function deleteAndLeak(e) {
                var t = this.a.get(e);
                return this.a['delete'](e), t;
              },
            },
            {
              key: 'keys',
              value: function keys() {
                return this.a.keys();
              },
            },
            {
              key: 'values',
              value: function values() {
                return this.a.values();
              },
            },
            {
              key: Symbol.iterator,
              value: function value() {
                return this.a[Symbol.iterator]();
              },
            },
          ]);
        })());
    },
  }),
  Do,
  Po = C({
    'out-build/vs/base/common/linkedList.js': function outBuild_vs_base_common_linkedListJs() {
      'use strict';

      var _u;
      Do =
        ((_u = /*#__PURE__*/ _createClass(function u1(t) {
          _classCallCheck(this, u1);
          (this.element = t), (this.next = u1.Undefined), (this.prev = u1.Undefined);
        })),
        (_u.Undefined = new _u(void 0)),
        _u);
    },
  }),
  Qs,
  Ys,
  xo = C({
    'out-build/vs/base/common/stopwatch.js': function outBuild_vs_base_common_stopwatchJs() {
      'use strict';

      (Qs = globalThis.performance && typeof globalThis.performance.now == 'function'),
        (Ys = /*#__PURE__*/ (function () {
          function zn(t) {
            _classCallCheck(this, zn);
            (this.c =
              Qs && t === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance)),
              (this.a = this.c()),
              (this.b = -1);
          }
          return _createClass(
            zn,
            [
              {
                key: 'stop',
                value: function stop() {
                  this.b = this.c();
                },
              },
              {
                key: 'reset',
                value: function reset() {
                  (this.a = this.c()), (this.b = -1);
                },
              },
              {
                key: 'elapsed',
                value: function elapsed() {
                  return this.b !== -1 ? this.b - this.a : this.c() - this.a;
                },
              },
            ],
            [
              {
                key: 'create',
                value: function create(t) {
                  return new zn(t);
                },
              },
            ]
          );
        })());
    },
  }),
  O1,
  Zs,
  oe,
  Xs,
  S1,
  er,
  jt,
  tr,
  sr,
  rr,
  at,
  ir,
  nr,
  ae,
  or,
  Ft = C({
    'out-build/vs/base/common/event.js': function outBuild_vs_base_common_eventJs() {
      'use strict';

      var _$s, _Hn;
      Is(),
        rt(),
        js(),
        It(),
        Po(),
        xo(),
        (O1 = !1),
        (Zs = !1),
        (function (e) {
          e.None = function () {
            return Ee.None;
          };
          function t(m) {
            if (Zs) {
              var g = m.onDidAddListener,
                w = jt.create();
              var b = 0;
              m.onDidAddListener = function () {
                ++b === 2 &&
                  (console.warn(
                    'snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here'
                  ),
                  w.print()),
                  g === null || g === void 0 ? void 0 : g();
              };
            }
          }
          function s(m, g) {
            return d(m, function () {}, 0, void 0, !0, void 0, g);
          }
          e.defer = s;
          function r(m) {
            return function (g) {
              var w = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var b = arguments.length > 2 ? arguments[2] : undefined;
              var A = !1,
                x;
              return (
                (x = m(
                  function (M) {
                    if (!A) return x ? x.dispose() : (A = !0), g.call(w, M);
                  },
                  null,
                  b
                )),
                A && x.dispose(),
                x
              );
            };
          }
          e.once = r;
          function i(m, g) {
            return e.once(e.filter(m, g));
          }
          e.onceIf = i;
          function n(m, g, w) {
            return u(function (b) {
              var A = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var x = arguments.length > 2 ? arguments[2] : undefined;
              return m(
                function (M) {
                  return b.call(A, g(M));
                },
                null,
                x
              );
            }, w);
          }
          e.map = n;
          function a(m, g, w) {
            return u(function (b) {
              var A = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var x = arguments.length > 2 ? arguments[2] : undefined;
              return m(
                function (M) {
                  g(M), b.call(A, M);
                },
                null,
                x
              );
            }, w);
          }
          e.forEach = a;
          function o(m, g, w) {
            return u(function (b) {
              var A = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var x = arguments.length > 2 ? arguments[2] : undefined;
              return m(
                function (M) {
                  return g(M) && b.call(A, M);
                },
                null,
                x
              );
            }, w);
          }
          e.filter = o;
          function c(m) {
            return m;
          }
          e.signal = c;
          function l() {
            for (
              var _len3 = arguments.length, m = new Array(_len3), _key3 = 0;
              _key3 < _len3;
              _key3++
            ) {
              m[_key3] = arguments[_key3];
            }
            return function (g) {
              var w = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var b = arguments.length > 2 ? arguments[2] : undefined;
              var A = Oo.apply(
                void 0,
                _toConsumableArray(
                  m.map(function (x) {
                    return x(function (M) {
                      return g.call(w, M);
                    });
                  })
                )
              );
              return h(A, b);
            };
          }
          e.any = l;
          function f(m, g, w, b) {
            var A = w;
            return n(
              m,
              function (x) {
                return (A = g(A, x)), A;
              },
              b
            );
          }
          e.reduce = f;
          function u(m, g) {
            var w;
            var b = {
              onWillAddFirstListener: function onWillAddFirstListener() {
                w = m(A.fire, A);
              },
              onDidRemoveLastListener: function onDidRemoveLastListener() {
                var _w;
                (_w = w) === null || _w === void 0 || _w.dispose();
              },
            };
            g || t(b);
            var A = new ae(b);
            return g !== null && g !== void 0 && g.add(A), A.event;
          }
          function h(m, g) {
            return g instanceof Array ? g.push(m) : g && g.add(m), m;
          }
          function d(m, g) {
            var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
            var b = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
            var A = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
            var x = arguments.length > 5 ? arguments[5] : undefined;
            var M = arguments.length > 6 ? arguments[6] : undefined;
            var G,
              Q,
              He,
              Pt = 0,
              tt;
            var Ss = {
              leakWarningThreshold: x,
              onWillAddFirstListener: function onWillAddFirstListener() {
                G = m(function (Kn) {
                  Pt++,
                    (Q = g(Q, Kn)),
                    b && !He && (xt.fire(Q), (Q = void 0)),
                    (tt = function tt() {
                      var Qn = Q;
                      (Q = void 0), (He = void 0), (!b || Pt > 1) && xt.fire(Qn), (Pt = 0);
                    }),
                    typeof w == 'number'
                      ? (clearTimeout(He), (He = setTimeout(tt, w)))
                      : He === void 0 && ((He = 0), queueMicrotask(tt));
                });
              },
              onWillRemoveListener: function onWillRemoveListener() {
                var _tt;
                A && Pt > 0 && ((_tt = tt) === null || _tt === void 0 ? void 0 : _tt());
              },
              onDidRemoveLastListener: function onDidRemoveLastListener() {
                (tt = void 0), G.dispose();
              },
            };
            M || t(Ss);
            var xt = new ae(Ss);
            return M !== null && M !== void 0 && M.add(xt), xt.event;
          }
          e.debounce = d;
          function p(m) {
            var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var w = arguments.length > 2 ? arguments[2] : undefined;
            return e.debounce(
              m,
              function (b, A) {
                return b ? (b.push(A), b) : [A];
              },
              g,
              void 0,
              !0,
              void 0,
              w
            );
          }
          e.accumulate = p;
          function y(m) {
            var g =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : function (b, A) {
                    return b === A;
                  };
            var w = arguments.length > 2 ? arguments[2] : undefined;
            var b = !0,
              A;
            return o(
              m,
              function (x) {
                var M = b || !g(x, A);
                return (b = !1), (A = x), M;
              },
              w
            );
          }
          e.latch = y;
          function v(m, g, w) {
            return [
              e.filter(m, g, w),
              e.filter(
                m,
                function (b) {
                  return !g(b);
                },
                w
              ),
            ];
          }
          e.split = v;
          function $(m) {
            var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var b = arguments.length > 3 ? arguments[3] : undefined;
            var A = w.slice(),
              x = m(function (Q) {
                A ? A.push(Q) : G.fire(Q);
              });
            b && b.add(x);
            var M = function M() {
                var _A;
                (_A = A) !== null &&
                  _A !== void 0 &&
                  _A.forEach(function (Q) {
                    return G.fire(Q);
                  }),
                  (A = null);
              },
              G = new ae({
                onWillAddFirstListener: function onWillAddFirstListener() {
                  x ||
                    ((x = m(function (Q) {
                      return G.fire(Q);
                    })),
                    b && b.add(x));
                },
                onDidAddFirstListener: function onDidAddFirstListener() {
                  A && (g ? setTimeout(M) : M());
                },
                onDidRemoveLastListener: function onDidRemoveLastListener() {
                  x && x.dispose(), (x = null);
                },
              });
            return b && b.add(G), G.event;
          }
          e.buffer = $;
          function N(m, g) {
            return function (b, A, x) {
              var M = g(new _());
              return m(
                function (G) {
                  var Q = M.evaluate(G);
                  Q !== L && b.call(A, Q);
                },
                void 0,
                x
              );
            };
          }
          e.chain = N;
          var L = Symbol('HaltChainable');
          var _ = /*#__PURE__*/ (function () {
            function _() {
              _classCallCheck(this, _);
              this.f = [];
            }
            return _createClass(_, [
              {
                key: 'map',
                value: function map(g) {
                  return this.f.push(g), this;
                },
              },
              {
                key: 'forEach',
                value: function forEach(g) {
                  return (
                    this.f.push(function (w) {
                      return g(w), w;
                    }),
                    this
                  );
                },
              },
              {
                key: 'filter',
                value: function filter(g) {
                  return (
                    this.f.push(function (w) {
                      return g(w) ? w : L;
                    }),
                    this
                  );
                },
              },
              {
                key: 'reduce',
                value: function reduce(g, w) {
                  var b = w;
                  return (
                    this.f.push(function (A) {
                      return (b = g(b, A)), b;
                    }),
                    this
                  );
                },
              },
              {
                key: 'latch',
                value: function latch() {
                  var g =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : function (w, b) {
                          return w === b;
                        };
                  var w = !0,
                    b;
                  return (
                    this.f.push(function (A) {
                      var x = w || !g(A, b);
                      return (w = !1), (b = A), x ? A : L;
                    }),
                    this
                  );
                },
              },
              {
                key: 'evaluate',
                value: function evaluate(g) {
                  var _iterator29 = _createForOfIteratorHelper(this.f),
                    _step29;
                  try {
                    for (_iterator29.s(); !(_step29 = _iterator29.n()).done; ) {
                      var w = _step29.value;
                      if (((g = w(g)), g === L)) break;
                    }
                  } catch (err) {
                    _iterator29.e(err);
                  } finally {
                    _iterator29.f();
                  }
                  return g;
                },
              },
            ]);
          })();
          function S(m, g) {
            var w =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : function (b) {
                    return b;
                  };
            var b = function b() {
                return M.fire(w.apply(void 0, arguments));
              },
              A = function A() {
                return m.on(g, b);
              },
              x = function x() {
                return m.removeListener(g, b);
              },
              M = new ae({
                onWillAddFirstListener: A,
                onDidRemoveLastListener: x,
              });
            return M.event;
          }
          e.fromNodeEventEmitter = S;
          function O(m, g) {
            var w =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : function (b) {
                    return b;
                  };
            var b = function b() {
                return M.fire(w.apply(void 0, arguments));
              },
              A = function A() {
                return m.addEventListener(g, b);
              },
              x = function x() {
                return m.removeEventListener(g, b);
              },
              M = new ae({
                onWillAddFirstListener: A,
                onDidRemoveLastListener: x,
              });
            return M.event;
          }
          e.fromDOMEventEmitter = O;
          function I(m, g) {
            return new Promise(function (w) {
              return r(m)(w, null, g);
            });
          }
          e.toPromise = I;
          function j(m) {
            var g = new ae();
            return (
              m
                .then(
                  function (w) {
                    g.fire(w);
                  },
                  function () {
                    g.fire(void 0);
                  }
                )
                ['finally'](function () {
                  g.dispose();
                }),
              g.event
            );
          }
          e.fromPromise = j;
          function D(m, g) {
            return m(function (w) {
              return g.fire(w);
            });
          }
          e.forward = D;
          function V(m, g, w) {
            return (
              g(w),
              m(function (b) {
                return g(b);
              })
            );
          }
          e.runAndSubscribe = V;
          var de = /*#__PURE__*/ (function () {
            function de(g, w) {
              var _this11 = this;
              _classCallCheck(this, de);
              (this._observable = g), (this.f = 0), (this.g = !1);
              var b = {
                onWillAddFirstListener: function onWillAddFirstListener() {
                  g.addObserver(_this11), _this11._observable.reportChanges();
                },
                onDidRemoveLastListener: function onDidRemoveLastListener() {
                  g.removeObserver(_this11);
                },
              };
              w || t(b), (this.emitter = new ae(b)), w && w.add(this.emitter);
            }
            return _createClass(de, [
              {
                key: 'beginUpdate',
                value: function beginUpdate(g) {
                  this.f++;
                },
              },
              {
                key: 'handlePossibleChange',
                value: function handlePossibleChange(g) {},
              },
              {
                key: 'handleChange',
                value: function handleChange(g, w) {
                  this.g = !0;
                },
              },
              {
                key: 'endUpdate',
                value: function endUpdate(g) {
                  this.f--,
                    this.f === 0 &&
                      (this._observable.reportChanges(),
                      this.g && ((this.g = !1), this.emitter.fire(this._observable.get())));
                },
              },
            ]);
          })();
          function F(m, g) {
            return new de(m, g).emitter.event;
          }
          e.fromObservable = F;
          function ke(m) {
            return function (g, w, b) {
              var A = 0,
                x = !1;
              var M = {
                beginUpdate: function beginUpdate() {
                  A++;
                },
                endUpdate: function endUpdate() {
                  A--, A === 0 && (m.reportChanges(), x && ((x = !1), g.call(w)));
                },
                handlePossibleChange: function handlePossibleChange() {},
                handleChange: function handleChange() {
                  x = !0;
                },
              };
              m.addObserver(M), m.reportChanges();
              var G = {
                dispose: function dispose() {
                  m.removeObserver(M);
                },
              };
              return b instanceof Ie ? b.add(G) : Array.isArray(b) && b.push(G), G;
            };
          }
          e.fromObservableLight = ke;
        })(oe || (oe = {})),
        (Xs =
          ((_$s = /*#__PURE__*/ (function () {
            function $s(t) {
              _classCallCheck(this, $s);
              (this.listenerCount = 0),
                (this.invocationCount = 0),
                (this.elapsedOverall = 0),
                (this.durations = []),
                (this.name = ''.concat(t, '_').concat($s.f++)),
                $s.all.add(this);
            }
            return _createClass($s, [
              {
                key: 'start',
                value: function start(t) {
                  (this.g = new Ys()), (this.listenerCount = t);
                },
              },
              {
                key: 'stop',
                value: function stop() {
                  if (this.g) {
                    var t = this.g.elapsed();
                    this.durations.push(t),
                      (this.elapsedOverall += t),
                      (this.invocationCount += 1),
                      (this.g = void 0);
                  }
                },
              },
            ]);
          })()),
          (_$s.all = new Set()),
          (_$s.f = 0),
          _$s)),
        (S1 = -1),
        (er =
          ((_Hn = /*#__PURE__*/ (function () {
            function Hn(t, s) {
              var r =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : (Hn.f++).toString(16).padStart(3, '0');
              _classCallCheck(this, Hn);
              (this.j = t), (this.threshold = s), (this.name = r), (this.h = 0);
            }
            return _createClass(Hn, [
              {
                key: 'dispose',
                value: function dispose() {
                  var _this$g;
                  (_this$g = this.g) === null || _this$g === void 0 || _this$g.clear();
                },
              },
              {
                key: 'check',
                value: function check(t, s) {
                  var _this12 = this;
                  var r = this.threshold;
                  if (r <= 0 || s < r) return;
                  this.g || (this.g = new Map());
                  var i = this.g.get(t.value) || 0;
                  if ((this.g.set(t.value, i + 1), (this.h -= 1), this.h <= 0)) {
                    this.h = r * 0.5;
                    var _this$getMostFrequent = this.getMostFrequentStack(),
                      _this$getMostFrequent2 = _slicedToArray(_this$getMostFrequent, 2),
                      n = _this$getMostFrequent2[0],
                      a = _this$getMostFrequent2[1],
                      o = '['
                        .concat(this.name, '] potential listener LEAK detected, having ')
                        .concat(s, ' listeners already. MOST frequent listener (')
                        .concat(a, '):');
                    console.warn(o), console.warn(n);
                    var c = new tr(o, n);
                    this.j(c);
                  }
                  return function () {
                    var n = _this12.g.get(t.value) || 0;
                    _this12.g.set(t.value, n - 1);
                  };
                },
              },
              {
                key: 'getMostFrequentStack',
                value: function getMostFrequentStack() {
                  if (!this.g) return;
                  var t,
                    s = 0;
                  var _iterator30 = _createForOfIteratorHelper(this.g),
                    _step30;
                  try {
                    for (_iterator30.s(); !(_step30 = _iterator30.n()).done; ) {
                      var _step30$value = _slicedToArray(_step30.value, 2),
                        r = _step30$value[0],
                        i = _step30$value[1];
                      (!t || s < i) && ((t = [r, i]), (s = i));
                    }
                  } catch (err) {
                    _iterator30.e(err);
                  } finally {
                    _iterator30.f();
                  }
                  return t;
                },
              },
            ]);
          })()),
          (_Hn.f = 1),
          _Hn)),
        (jt = /*#__PURE__*/ (function () {
          function Gn(t) {
            _classCallCheck(this, Gn);
            this.value = t;
          }
          return _createClass(
            Gn,
            [
              {
                key: 'print',
                value: function print() {
                  console.warn(this.value.split('\n').slice(2).join('\n'));
                },
              },
            ],
            [
              {
                key: 'create',
                value: function create() {
                  var _t$stack;
                  var t = new Error();
                  return new Gn(
                    (_t$stack = t.stack) !== null && _t$stack !== void 0 ? _t$stack : ''
                  );
                },
              },
            ]
          );
        })()),
        (tr = /*#__PURE__*/ (function (_Error3) {
          function tr(e, t) {
            var _this13;
            _classCallCheck(this, tr);
            (_this13 = _callSuper(this, tr, [e])),
              (_this13.name = 'ListenerLeakError'),
              (_this13.stack = t);
            return _this13;
          }
          _inherits(tr, _Error3);
          return _createClass(tr);
        })(/*#__PURE__*/ _wrapNativeSuper(Error))),
        (sr = /*#__PURE__*/ (function (_Error4) {
          function sr(e, t) {
            var _this14;
            _classCallCheck(this, sr);
            (_this14 = _callSuper(this, sr, [e])),
              (_this14.name = 'ListenerRefusalError'),
              (_this14.stack = t);
            return _this14;
          }
          _inherits(sr, _Error4);
          return _createClass(sr);
        })(/*#__PURE__*/ _wrapNativeSuper(Error))),
        (rr = 0),
        (at = /*#__PURE__*/ _createClass(function at(e) {
          _classCallCheck(this, at);
          (this.value = e), (this.id = rr++);
        })),
        (ir = 2),
        (nr = function nr(e, t) {
          if (e instanceof at) t(e);
          else
            for (var s = 0; s < e.length; s++) {
              var r = e[s];
              r && t(r);
            }
        }),
        (ae = /*#__PURE__*/ (function () {
          function ae(e) {
            var _this$f, _e$onListenerError, _this$f$leakWarningTh, _this$f2, _this$f3, _this$f4;
            _classCallCheck(this, ae);
            (this.z = 0),
              (this.f = e),
              (this.g =
                S1 > 0 ||
                ((_this$f = this.f) !== null && _this$f !== void 0 && _this$f.leakWarningThreshold)
                  ? new er(
                      (_e$onListenerError =
                        e === null || e === void 0 ? void 0 : e.onListenerError) !== null &&
                      _e$onListenerError !== void 0
                        ? _e$onListenerError
                        : Lt,
                      (_this$f$leakWarningTh =
                        (_this$f2 = this.f) === null || _this$f2 === void 0
                          ? void 0
                          : _this$f2.leakWarningThreshold) !== null &&
                      _this$f$leakWarningTh !== void 0
                        ? _this$f$leakWarningTh
                        : S1
                    )
                  : void 0),
              (this.j =
                (_this$f3 = this.f) !== null && _this$f3 !== void 0 && _this$f3._profName
                  ? new Xs(this.f._profName)
                  : void 0),
              (this.w =
                (_this$f4 = this.f) === null || _this$f4 === void 0
                  ? void 0
                  : _this$f4.deliveryQueue);
          }
          return _createClass(ae, [
            {
              key: 'dispose',
              value: function dispose() {
                if (!this.m) {
                  var _this$w, _this$f5, _this$f5$onDidRemoveL, _this$g2;
                  if (
                    ((this.m = !0),
                    ((_this$w = this.w) === null || _this$w === void 0
                      ? void 0
                      : _this$w.current) === this && this.w.reset(),
                    this.u)
                  ) {
                    if (O1) {
                      var e = this.u;
                      queueMicrotask(function () {
                        nr(e, function (t) {
                          var _t$stack2;
                          return (_t$stack2 = t.stack) === null || _t$stack2 === void 0
                            ? void 0
                            : _t$stack2.print();
                        });
                      });
                    }
                    (this.u = void 0), (this.z = 0);
                  }
                  (_this$f5 = this.f) !== null &&
                    _this$f5 !== void 0 &&
                    (_this$f5$onDidRemoveL = _this$f5.onDidRemoveLastListener) !== null &&
                    _this$f5$onDidRemoveL !== void 0 &&
                    _this$f5$onDidRemoveL.call(_this$f5),
                    (_this$g2 = this.g) === null || _this$g2 === void 0
                      ? void 0
                      : _this$g2.dispose();
                }
              },
            },
            {
              key: 'event',
              get: function get() {
                var _this$q,
                  _this15 = this;
                return (
                  (_this$q = this.q) !== null && _this$q !== void 0
                    ? _this$q
                    : (this.q = function (e, t, s) {
                        var _this15$w,
                          _this15$f2,
                          _this15$f2$onWillAddF,
                          _this15$f3,
                          _this15$f3$onDidAddFi,
                          _this15$f4,
                          _this15$f4$onDidAddLi;
                        if (_this15.g && _this15.z > Math.pow(_this15.g.threshold, 2)) {
                          var _this15$g$getMostFreq, _this15$f;
                          var o = '['
                            .concat(
                              _this15.g.name,
                              '] REFUSES to accept new listeners because it exceeded its threshold by far ('
                            )
                            .concat(_this15.z, ' vs ')
                            .concat(_this15.g.threshold, ')');
                          console.warn(o);
                          var c =
                              (_this15$g$getMostFreq = _this15.g.getMostFrequentStack()) !== null &&
                              _this15$g$getMostFreq !== void 0
                                ? _this15$g$getMostFreq
                                : ['UNKNOWN stack', -1],
                            l = new sr(
                              ''
                                .concat(o, '. HINT: Stack shows most frequent listener (')
                                .concat(c[1], '-times)'),
                              c[0]
                            );
                          return (
                            (
                              ((_this15$f = _this15.f) === null || _this15$f === void 0
                                ? void 0
                                : _this15$f.onListenerError) || Lt
                            )(l),
                            Ee.None
                          );
                        }
                        if (_this15.m) return Ee.None;
                        t && (e = e.bind(t));
                        var r = new at(e);
                        var i, n;
                        _this15.g &&
                          _this15.z >= Math.ceil(_this15.g.threshold * 0.2) &&
                          ((r.stack = jt.create()), (i = _this15.g.check(r.stack, _this15.z + 1))),
                          O1 && (r.stack = n !== null && n !== void 0 ? n : jt.create()),
                          _this15.u
                            ? _this15.u instanceof at
                              ? ((_this15$w = _this15.w) !== null && _this15$w !== void 0
                                  ? _this15$w
                                  : (_this15.w = new or()),
                                (_this15.u = [_this15.u, r]))
                              : _this15.u.push(r)
                            : ((_this15$f2 = _this15.f) !== null &&
                                _this15$f2 !== void 0 &&
                                (_this15$f2$onWillAddF = _this15$f2.onWillAddFirstListener) !==
                                  null &&
                                _this15$f2$onWillAddF !== void 0 &&
                                _this15$f2$onWillAddF.call(_this15$f2, _this15),
                              (_this15.u = r),
                              (_this15$f3 = _this15.f) === null ||
                              _this15$f3 === void 0 ||
                              (_this15$f3$onDidAddFi = _this15$f3.onDidAddFirstListener) === null ||
                              _this15$f3$onDidAddFi === void 0
                                ? void 0
                                : _this15$f3$onDidAddFi.call(_this15$f3, _this15)),
                          (_this15$f4 = _this15.f) !== null &&
                            _this15$f4 !== void 0 &&
                            (_this15$f4$onDidAddLi = _this15$f4.onDidAddListener) !== null &&
                            _this15$f4$onDidAddLi !== void 0 &&
                            _this15$f4$onDidAddLi.call(_this15$f4, _this15),
                          _this15.z++;
                        var a = Re(function () {
                          var _i4;
                          (_i4 = i) !== null && _i4 !== void 0 && _i4(), _this15.A(r);
                        });
                        return s instanceof Ie ? s.add(a) : Array.isArray(s) && s.push(a), a;
                      }),
                  this.q
                );
              },
            },
            {
              key: 'A',
              value: function A(e) {
                var _this$f6, _this$f6$onWillRemove;
                if (
                  ((_this$f6 = this.f) !== null &&
                    _this$f6 !== void 0 &&
                    (_this$f6$onWillRemove = _this$f6.onWillRemoveListener) !== null &&
                    _this$f6$onWillRemove !== void 0 &&
                    _this$f6$onWillRemove.call(_this$f6, this),
                  !this.u)
                )
                  return;
                if (this.z === 1) {
                  var _this$f7, _this$f7$onDidRemoveL;
                  (this.u = void 0),
                    (_this$f7 = this.f) !== null &&
                      _this$f7 !== void 0 &&
                      (_this$f7$onDidRemoveL = _this$f7.onDidRemoveLastListener) !== null &&
                      _this$f7$onDidRemoveL !== void 0 &&
                      _this$f7$onDidRemoveL.call(_this$f7, this),
                    (this.z = 0);
                  return;
                }
                var t = this.u,
                  s = t.indexOf(e);
                if (s === -1)
                  throw (
                    (console.log('disposed?', this.m),
                    console.log('size?', this.z),
                    console.log('arr?', JSON.stringify(this.u)),
                    new Error('Attempted to dispose unknown listener'))
                  );
                this.z--, (t[s] = void 0);
                var r = this.w.current === this;
                if (this.z * ir <= t.length) {
                  var i = 0;
                  for (var n = 0; n < t.length; n++)
                    t[n]
                      ? (t[i++] = t[n])
                      : r && i < this.w.end && (this.w.end--, i < this.w.i && this.w.i--);
                  t.length = i;
                }
              },
            },
            {
              key: 'B',
              value: function B(e, t) {
                var _this$f8;
                if (!e) return;
                var s =
                  ((_this$f8 = this.f) === null || _this$f8 === void 0
                    ? void 0
                    : _this$f8.onListenerError) || Lt;
                if (!s) {
                  e.value(t);
                  return;
                }
                try {
                  e.value(t);
                } catch (r) {
                  s(r);
                }
              },
            },
            {
              key: 'C',
              value: function C(e) {
                var t = e.current.u;
                for (; e.i < e.end; ) this.B(t[e.i++], e.value);
                e.reset();
              },
            },
            {
              key: 'fire',
              value: function fire(e) {
                var _this$w2, _this$j, _this$j2, _this$j3;
                if (
                  ((_this$w2 = this.w) !== null &&
                    _this$w2 !== void 0 &&
                    _this$w2.current &&
                    (this.C(this.w),
                    (_this$j = this.j) !== null && _this$j !== void 0 && _this$j.stop()),
                  (_this$j2 = this.j) !== null && _this$j2 !== void 0 && _this$j2.start(this.z),
                  this.u)
                )
                  if (this.u instanceof at) this.B(this.u, e);
                  else {
                    var t = this.w;
                    t.enqueue(this, e, this.u.length), this.C(t);
                  }
                (_this$j3 = this.j) === null || _this$j3 === void 0 || _this$j3.stop();
              },
            },
            {
              key: 'hasListeners',
              value: function hasListeners() {
                return this.z > 0;
              },
            },
          ]);
        })()),
        (or = /*#__PURE__*/ (function () {
          function or() {
            _classCallCheck(this, or);
            (this.i = -1), (this.end = 0);
          }
          return _createClass(or, [
            {
              key: 'enqueue',
              value: function enqueue(e, t, s) {
                (this.i = 0), (this.end = s), (this.current = e), (this.value = t);
              },
            },
            {
              key: 'reset',
              value: function reset() {
                (this.i = this.end), (this.current = void 0), (this.value = void 0);
              },
            },
          ]);
        })());
    },
  }),
  ar,
  Mt,
  Lo,
  No,
  ko = C({
    'out-build/vs/base/common/iCube/iCubeClientFlags.js':
      function outBuild_vs_base_common_iCube_iCubeClientFlagsJs() {
        'use strict';

        var _As;
        Rs(),
          (ar = 'ByteIDEClientFlag'),
          (Mt = 'icube-icube-themes'),
          (Lo = [
            'vs-dark '.concat(Mt, '-themes-dark_plus-json'),
            'vs-dark '.concat(Mt, '-themes-dark_blue-json'),
            'vs '.concat(Mt, '-themes-light-json'),
          ]),
          (No =
            ((_As = /*#__PURE__*/ (function () {
              function As() {
                _classCallCheck(this, As);
              }
              return _createClass(As, null, [
                {
                  key: 'isICubeTheme',
                  get: function get() {
                    return As.a;
                  },
                },
                {
                  key: 'setICubeTheme',
                  value: function setICubeTheme(t) {
                    As.a = t;
                  },
                },
              ]);
            })()),
            (_As.a = !1),
            _As));
      },
  });
function Ro() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function cr() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var lr = C({
  'out-build/vs/nls.messages.js': function outBuild_vs_nlsMessagesJs() {
    'use strict';
  },
});
function ur(e, t) {
  var s;
  return (
    t.length === 0
      ? (s = e)
      : (s = e.replace(/\{(\d+)\}/g, function (r, i) {
          var n = i[0],
            a = t[n];
          var o = r;
          return (
            typeof a == 'string'
              ? (o = a)
              : (typeof a == 'number' || typeof a == 'boolean' || a === void 0 || a === null) &&
                (o = String(a)),
            o
          );
        })),
    fr && (s = '\uFF3B' + s.replace(/[aouei]/g, '$&$&') + '\uFF3D'),
    s
  );
}
function E(e, t) {
  for (
    var _len4 = arguments.length, s = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2;
    _key4 < _len4;
    _key4++
  ) {
    s[_key4 - 2] = arguments[_key4];
  }
  return ur(typeof e == 'number' ? To(e, t) : t, s);
}
function To(e, t) {
  var _Ro;
  var s = (_Ro = Ro()) === null || _Ro === void 0 ? void 0 : _Ro[e];
  if (typeof s != 'string') {
    if (typeof t == 'string') return t;
    throw new Error('!!! NLS MISSING: '.concat(e, ' !!!'));
  }
  return s;
}
var fr,
  Ut = C({
    'out-build/vs/nls.js': function outBuild_vs_nlsJs() {
      'use strict';

      lr(),
        lr(),
        (fr =
          cr() === 'pseudo' ||
          ((typeof document === 'undefined' ? 'undefined' : _typeof(document)) < 'u' &&
            document.location &&
            typeof document.location.hash == 'string' &&
            document.location.hash.indexOf('pseudo=true') >= 0));
    },
  }),
  je,
  ct,
  lt,
  Ge,
  hr,
  D1,
  Vt,
  dr,
  pr,
  gr,
  mr,
  ut,
  ft,
  P1,
  br,
  be,
  wr,
  we,
  te,
  x1,
  yr,
  vr,
  Wt,
  z,
  Fe,
  _e,
  Er,
  _r,
  Cr,
  $r,
  pe,
  Ce,
  Ar,
  Or,
  Sr,
  Dr,
  Pr,
  xr,
  Io,
  jo,
  Fo,
  Mo,
  Y = C({
    'out-build/vs/base/common/platform.js': function outBuild_vs_base_common_platformJs() {
      'use strict';

      var _process, _te, _te2, _be;
      if (
        (ko(),
        Ut(),
        (je = 'en'),
        (ct = !1),
        (lt = !1),
        (Ge = !1),
        (hr = !1),
        (D1 = !1),
        (Vt = !1),
        (dr = !1),
        (pr = !1),
        (gr = !1),
        (mr = !1),
        (ut = void 0),
        (ft = je),
        (P1 = je),
        (br = void 0),
        (be = void 0),
        (wr = !1),
        (we = globalThis),
        (te = void 0),
        _typeof(we.vscode) < 'u' && _typeof(we.vscode.process) < 'u'
          ? (te = we.vscode.process)
          : (typeof process === 'undefined' ? 'undefined' : _typeof(process)) < 'u' &&
            typeof ((_process = process) === null ||
            _process === void 0 ||
            (_process = _process.versions) === null ||
            _process === void 0
              ? void 0
              : _process.node) == 'string' &&
            (te = process),
        (x1 =
          typeof ((_te = te) === null ||
          _te === void 0 ||
          (_te = _te.versions) === null ||
          _te === void 0
            ? void 0
            : _te.electron) == 'string'),
        (yr = x1 && ((_te2 = te) === null || _te2 === void 0 ? void 0 : _te2.type) === 'renderer'),
        _typeof(te) == 'object')
      ) {
        (ct = te.platform === 'win32'),
          (lt = te.platform === 'darwin'),
          (Ge = te.platform === 'linux'),
          (hr = Ge && !!te.env.SNAP && !!te.env.SNAP_REVISION),
          (dr = x1),
          (gr = !!te.env.CI || !!te.env.BUILD_ARTIFACTSTAGINGDIRECTORY),
          (ut = je),
          (ft = je);
        var e = te.env.VSCODE_NLS_CONFIG;
        if (e)
          try {
            var _t$languagePack;
            var t = JSON.parse(e);
            (ut = t.userLocale),
              (P1 = t.osLocale),
              (ft = t.resolvedLanguage || je),
              (br =
                (_t$languagePack = t.languagePack) === null || _t$languagePack === void 0
                  ? void 0
                  : _t$languagePack.translationsConfigFile);
          } catch (_unused3) {}
        D1 = !0;
      } else
        (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) == 'object' && !yr
          ? ((be = navigator.userAgent),
            (ct = be.indexOf('Windows') >= 0),
            (lt = be.indexOf('Macintosh') >= 0),
            (pr =
              (be.indexOf('Macintosh') >= 0 ||
                be.indexOf('iPad') >= 0 ||
                be.indexOf('iPhone') >= 0) &&
              !!navigator.maxTouchPoints &&
              navigator.maxTouchPoints > 0),
            (Ge = be.indexOf('Linux') >= 0),
            (mr = ((_be = be) === null || _be === void 0 ? void 0 : _be.indexOf('Mobi')) >= 0),
            (Vt = !0),
            (wr = ar in globalThis),
            (ft = cr() || je),
            (ut = navigator.language.toLowerCase()),
            (P1 = ut))
          : console.error('Unable to resolve platform.');
      (function (e) {
        (e[(e.Web = 0)] = 'Web'),
          (e[(e.Mac = 1)] = 'Mac'),
          (e[(e.Linux = 2)] = 'Linux'),
          (e[(e.Windows = 3)] = 'Windows');
      })(vr || (vr = {})),
        (Wt = 0),
        lt ? (Wt = 1) : ct ? (Wt = 3) : Ge && (Wt = 2),
        (z = ct),
        (Fe = lt),
        (_e = Ge),
        (Er = D1),
        (_r = Vt),
        (Cr = Vt && typeof we.importScripts == 'function'),
        ($r = Cr ? we.origin : void 0),
        (pe = be),
        (Ce = ft),
        (function (e) {
          function t() {
            return Ce;
          }
          e.value = t;
          function s() {
            return Ce.length === 2
              ? Ce === 'en'
              : Ce.length >= 3
                ? Ce[0] === 'e' && Ce[1] === 'n' && Ce[2] === '-'
                : !1;
          }
          e.isDefaultVariant = s;
          function r() {
            return Ce === 'en';
          }
          e.isDefault = r;
        })(Ar || (Ar = {})),
        (Or = typeof we.postMessage == 'function' && !we.importScripts),
        (Sr = (function () {
          if (Or) {
            var _e2 = [];
            we.addEventListener('message', function (s) {
              if (s.data && s.data.vscodeScheduleAsyncWork)
                for (var r = 0, i = _e2.length; r < i; r++) {
                  var n = _e2[r];
                  if (n.id === s.data.vscodeScheduleAsyncWork) {
                    _e2.splice(r, 1), n.callback();
                    return;
                  }
                }
            });
            var _t2 = 0;
            return function (s) {
              var r = ++_t2;
              _e2.push({
                id: r,
                callback: s,
              }),
                we.postMessage(
                  {
                    vscodeScheduleAsyncWork: r,
                  },
                  '*'
                );
            };
          }
          return function (e) {
            return setTimeout(e);
          };
        })()),
        (function (e) {
          (e[(e.Windows = 1)] = 'Windows'),
            (e[(e.Macintosh = 2)] = 'Macintosh'),
            (e[(e.Linux = 3)] = 'Linux');
        })(Dr || (Dr = {})),
        (function (e) {
          (e.Windows = 'Win'), (e.Macintosh = 'Mac'), (e.Linux = 'Linux');
        })(Pr || (Pr = {})),
        (xr = !!(pe && pe.indexOf('Chrome') >= 0)),
        (Io = !!(pe && pe.indexOf('Firefox') >= 0)),
        (jo = !!(!xr && pe && pe.indexOf('Safari') >= 0)),
        (Fo = !!(pe && pe.indexOf('Edg/') >= 0)),
        (Mo = !!(pe && pe.indexOf('Android') >= 0));
    },
  }),
  Me,
  qt,
  Je,
  se,
  Lr,
  Uo,
  L1 = C({
    'out-build/vs/base/common/process.js': function outBuild_vs_base_common_processJs() {
      'use strict';

      var _process2;
      if ((Y(), (qt = globalThis.vscode), _typeof(qt) < 'u' && _typeof(qt.process) < 'u')) {
        var e = qt.process;
        Me = {
          get platform() {
            return e.platform;
          },
          get arch() {
            return e.arch;
          },
          get env() {
            return e.env;
          },
          cwd: function cwd() {
            return e.cwd();
          },
        };
      } else
        (typeof process === 'undefined' ? 'undefined' : _typeof(process)) < 'u' &&
        typeof ((_process2 = process) === null ||
        _process2 === void 0 ||
        (_process2 = _process2.versions) === null ||
        _process2 === void 0
          ? void 0
          : _process2.node) == 'string'
          ? (Me = {
              get platform() {
                return process.platform;
              },
              get arch() {
                return process.arch;
              },
              get env() {
                return process.env;
              },
              cwd: function cwd() {
                return process.env.VSCODE_CWD || process.cwd();
              },
            })
          : (Me = {
              get platform() {
                return z ? 'win32' : Fe ? 'darwin' : 'linux';
              },
              get arch() {},
              get env() {
                return {};
              },
              cwd: function cwd() {
                return '/';
              },
            });
      (Je = Me.cwd), (se = Me.env), (Lr = Me.platform), (Uo = Me.arch);
    },
  });
function Vo(e, t) {
  if (e === null || _typeof(e) != 'object') throw new k1(t, 'Object', e);
}
function W(e, t) {
  if (typeof e != 'string') throw new k1(t, 'string', e);
}
function P(e) {
  return e === H || e === Z;
}
function N1(e) {
  return e === H;
}
function $e(e) {
  return (e >= kr && e <= Tr) || (e >= Rr && e <= Ir);
}
function Bt(e, t, s, r) {
  var i = '',
    n = 0,
    a = -1,
    o = 0,
    c = 0;
  for (var l = 0; l <= e.length; ++l) {
    if (l < e.length) c = e.charCodeAt(l);
    else {
      if (r(c)) break;
      c = H;
    }
    if (r(c)) {
      if (!(a === l - 1 || o === 1))
        if (o === 2) {
          if (
            i.length < 2 ||
            n !== 2 ||
            i.charCodeAt(i.length - 1) !== Se ||
            i.charCodeAt(i.length - 2) !== Se
          ) {
            if (i.length > 2) {
              var f = i.lastIndexOf(s);
              f === -1
                ? ((i = ''), (n = 0))
                : ((i = i.slice(0, f)), (n = i.length - 1 - i.lastIndexOf(s))),
                (a = l),
                (o = 0);
              continue;
            } else if (i.length !== 0) {
              (i = ''), (n = 0), (a = l), (o = 0);
              continue;
            }
          }
          t && ((i += i.length > 0 ? ''.concat(s, '..') : '..'), (n = 2));
        } else
          i.length > 0 ? (i += ''.concat(s).concat(e.slice(a + 1, l))) : (i = e.slice(a + 1, l)),
            (n = l - a - 1);
      (a = l), (o = 0);
    } else c === Se && o !== -1 ? ++o : (o = -1);
  }
  return i;
}
function Wo(e) {
  return e ? ''.concat(e[0] === '.' ? '' : '.').concat(e) : '';
}
function Nr(e, t) {
  Vo(t, 'pathObject');
  var s = t.dir || t.root,
    r = t.base || ''.concat(t.name || '').concat(Wo(t.ext));
  return s ? (s === t.root ? ''.concat(s).concat(r) : ''.concat(s).concat(e).concat(r)) : r;
}
var kr,
  Rr,
  Tr,
  Ir,
  Se,
  H,
  Z,
  ye,
  jr,
  k1,
  X,
  q,
  Fr,
  T,
  zt,
  Ke,
  re,
  R1,
  Mr,
  Ue,
  ht,
  Ur,
  qo,
  Bo,
  zo,
  ce,
  Ho,
  le = C({
    'out-build/vs/base/common/path.js': function outBuild_vs_base_common_pathJs() {
      'use strict';

      L1(),
        (kr = 65),
        (Rr = 97),
        (Tr = 90),
        (Ir = 122),
        (Se = 46),
        (H = 47),
        (Z = 92),
        (ye = 58),
        (jr = 63),
        (k1 = /*#__PURE__*/ (function (_Error5) {
          function k1(e, t, s) {
            var _this16;
            _classCallCheck(this, k1);
            var r;
            typeof t == 'string' && t.indexOf('not ') === 0
              ? ((r = 'must not be'), (t = t.replace(/^not /, '')))
              : (r = 'must be');
            var i = e.indexOf('.') !== -1 ? 'property' : 'argument';
            var n = 'The "'.concat(e, '" ').concat(i, ' ').concat(r, ' of type ').concat(t);
            (n += '. Received type '.concat(_typeof(s))),
              (_this16 = _callSuper(this, k1, [n])),
              (_this16.code = 'ERR_INVALID_ARG_TYPE');
            return _this16;
          }
          _inherits(k1, _Error5);
          return _createClass(k1);
        })(/*#__PURE__*/ _wrapNativeSuper(Error))),
        (X = Lr === 'win32'),
        (q = {
          resolve: function resolve() {
            var t = '',
              s = '',
              r = !1;
            for (
              var _len5 = arguments.length, e = new Array(_len5), _key5 = 0;
              _key5 < _len5;
              _key5++
            ) {
              e[_key5] = arguments[_key5];
            }
            for (var i = e.length - 1; i >= -1; i--) {
              var n = void 0;
              if (i >= 0) {
                if (((n = e[i]), W(n, 'paths['.concat(i, ']')), n.length === 0)) continue;
              } else
                t.length === 0
                  ? (n = Je())
                  : ((n = se['='.concat(t)] || Je()),
                    (n === void 0 ||
                      (n.slice(0, 2).toLowerCase() !== t.toLowerCase() && n.charCodeAt(2) === Z)) &&
                      (n = ''.concat(t, '\\')));
              var a = n.length;
              var o = 0,
                c = '',
                l = !1;
              var f = n.charCodeAt(0);
              if (a === 1) P(f) && ((o = 1), (l = !0));
              else if (P(f)) {
                if (((l = !0), P(n.charCodeAt(1)))) {
                  var u = 2,
                    h = u;
                  for (; u < a && !P(n.charCodeAt(u)); ) u++;
                  if (u < a && u !== h) {
                    var d = n.slice(h, u);
                    for (h = u; u < a && P(n.charCodeAt(u)); ) u++;
                    if (u < a && u !== h) {
                      for (h = u; u < a && !P(n.charCodeAt(u)); ) u++;
                      (u === a || u !== h) &&
                        ((c = '\\\\'.concat(d, '\\').concat(n.slice(h, u))), (o = u));
                    }
                  }
                } else o = 1;
              } else
                $e(f) &&
                  n.charCodeAt(1) === ye &&
                  ((c = n.slice(0, 2)),
                  (o = 2),
                  a > 2 && P(n.charCodeAt(2)) && ((l = !0), (o = 3)));
              if (c.length > 0)
                if (t.length > 0) {
                  if (c.toLowerCase() !== t.toLowerCase()) continue;
                } else t = c;
              if (r) {
                if (t.length > 0) break;
              } else if (((s = ''.concat(n.slice(o), '\\').concat(s)), (r = l), l && t.length > 0))
                break;
            }
            return (
              (s = Bt(s, !r, '\\', P)),
              r ? ''.concat(t, '\\').concat(s) : ''.concat(t).concat(s) || '.'
            );
          },
          normalize: function normalize(e) {
            W(e, 'path');
            var t = e.length;
            if (t === 0) return '.';
            var s = 0,
              r,
              i = !1;
            var n = e.charCodeAt(0);
            if (t === 1) return N1(n) ? '\\' : e;
            if (P(n)) {
              if (((i = !0), P(e.charCodeAt(1)))) {
                var o = 2,
                  c = o;
                for (; o < t && !P(e.charCodeAt(o)); ) o++;
                if (o < t && o !== c) {
                  var l = e.slice(c, o);
                  for (c = o; o < t && P(e.charCodeAt(o)); ) o++;
                  if (o < t && o !== c) {
                    for (c = o; o < t && !P(e.charCodeAt(o)); ) o++;
                    if (o === t) return '\\\\'.concat(l, '\\').concat(e.slice(c), '\\');
                    o !== c && ((r = '\\\\'.concat(l, '\\').concat(e.slice(c, o))), (s = o));
                  }
                }
              } else s = 1;
            } else
              $e(n) &&
                e.charCodeAt(1) === ye &&
                ((r = e.slice(0, 2)), (s = 2), t > 2 && P(e.charCodeAt(2)) && ((i = !0), (s = 3)));
            var a = s < t ? Bt(e.slice(s), !i, '\\', P) : '';
            if (
              (a.length === 0 && !i && (a = '.'),
              a.length > 0 && P(e.charCodeAt(t - 1)) && (a += '\\'),
              !i && r === void 0 && e.includes(':'))
            ) {
              if (a.length >= 2 && $e(a.charCodeAt(0)) && a.charCodeAt(1) === ye)
                return '.\\'.concat(a);
              var _o2 = e.indexOf(':');
              do if (_o2 === t - 1 || P(e.charCodeAt(_o2 + 1))) return '.\\'.concat(a);
              while ((_o2 = e.indexOf(':', _o2 + 1)) !== -1);
            }
            return r === void 0
              ? i
                ? '\\'.concat(a)
                : a
              : i
                ? ''.concat(r, '\\').concat(a)
                : ''.concat(r).concat(a);
          },
          isAbsolute: function isAbsolute(e) {
            W(e, 'path');
            var t = e.length;
            if (t === 0) return !1;
            var s = e.charCodeAt(0);
            return P(s) || (t > 2 && $e(s) && e.charCodeAt(1) === ye && P(e.charCodeAt(2)));
          },
          join: function join() {
            if (arguments.length === 0) return '.';
            var t, s;
            for (var n = 0; n < arguments.length; ++n) {
              var a = n < 0 || arguments.length <= n ? undefined : arguments[n];
              W(a, 'path'), a.length > 0 && (t === void 0 ? (t = s = a) : (t += '\\'.concat(a)));
            }
            if (t === void 0) return '.';
            var r = !0,
              i = 0;
            if (typeof s == 'string' && P(s.charCodeAt(0))) {
              ++i;
              var _n2 = s.length;
              _n2 > 1 &&
                P(s.charCodeAt(1)) &&
                (++i, _n2 > 2 && (P(s.charCodeAt(2)) ? ++i : (r = !1)));
            }
            if (r) {
              for (; i < t.length && P(t.charCodeAt(i)); ) i++;
              i >= 2 && (t = '\\'.concat(t.slice(i)));
            }
            return q.normalize(t);
          },
          relative: function relative(e, t) {
            if ((W(e, 'from'), W(t, 'to'), e === t)) return '';
            var s = q.resolve(e),
              r = q.resolve(t);
            if (s === r || ((e = s.toLowerCase()), (t = r.toLowerCase()), e === t)) return '';
            if (s.length !== e.length || r.length !== t.length) {
              var p = s.split('\\'),
                y = r.split('\\');
              p[p.length - 1] === '' && p.pop(), y[y.length - 1] === '' && y.pop();
              var v = p.length,
                $ = y.length,
                N = v < $ ? v : $;
              var L;
              for (L = 0; L < N && p[L].toLowerCase() === y[L].toLowerCase(); L++);
              return L === 0
                ? r
                : L === N
                  ? $ > N
                    ? y.slice(L).join('\\')
                    : v > N
                      ? '..\\'.repeat(v - 1 - L) + '..'
                      : ''
                  : '..\\'.repeat(v - L) + y.slice(L).join('\\');
            }
            var i = 0;
            for (; i < e.length && e.charCodeAt(i) === Z; ) i++;
            var n = e.length;
            for (; n - 1 > i && e.charCodeAt(n - 1) === Z; ) n--;
            var a = n - i;
            var o = 0;
            for (; o < t.length && t.charCodeAt(o) === Z; ) o++;
            var c = t.length;
            for (; c - 1 > o && t.charCodeAt(c - 1) === Z; ) c--;
            var l = c - o,
              f = a < l ? a : l;
            var u = -1,
              h = 0;
            for (; h < f; h++) {
              var _p = e.charCodeAt(i + h);
              if (_p !== t.charCodeAt(o + h)) break;
              _p === Z && (u = h);
            }
            if (h !== f) {
              if (u === -1) return r;
            } else {
              if (l > f) {
                if (t.charCodeAt(o + h) === Z) return r.slice(o + h + 1);
                if (h === 2) return r.slice(o + h);
              }
              a > f && (e.charCodeAt(i + h) === Z ? (u = h) : h === 2 && (u = 3)),
                u === -1 && (u = 0);
            }
            var d = '';
            for (h = i + u + 1; h <= n; ++h)
              (h === n || e.charCodeAt(h) === Z) && (d += d.length === 0 ? '..' : '\\..');
            return (
              (o += u),
              d.length > 0
                ? ''.concat(d).concat(r.slice(o, c))
                : (r.charCodeAt(o) === Z && ++o, r.slice(o, c))
            );
          },
          toNamespacedPath: function toNamespacedPath(e) {
            if (typeof e != 'string' || e.length === 0) return e;
            var t = q.resolve(e);
            if (t.length <= 2) return e;
            if (t.charCodeAt(0) === Z) {
              if (t.charCodeAt(1) === Z) {
                var s = t.charCodeAt(2);
                if (s !== jr && s !== Se) return '\\\\?\\UNC\\'.concat(t.slice(2));
              }
            } else if ($e(t.charCodeAt(0)) && t.charCodeAt(1) === ye && t.charCodeAt(2) === Z)
              return '\\\\?\\'.concat(t);
            return t;
          },
          dirname: function dirname(e) {
            W(e, 'path');
            var t = e.length;
            if (t === 0) return '.';
            var s = -1,
              r = 0;
            var i = e.charCodeAt(0);
            if (t === 1) return P(i) ? e : '.';
            if (P(i)) {
              if (((s = r = 1), P(e.charCodeAt(1)))) {
                var o = 2,
                  c = o;
                for (; o < t && !P(e.charCodeAt(o)); ) o++;
                if (o < t && o !== c) {
                  for (c = o; o < t && P(e.charCodeAt(o)); ) o++;
                  if (o < t && o !== c) {
                    for (c = o; o < t && !P(e.charCodeAt(o)); ) o++;
                    if (o === t) return e;
                    o !== c && (s = r = o + 1);
                  }
                }
              }
            } else
              $e(i) &&
                e.charCodeAt(1) === ye &&
                ((s = t > 2 && P(e.charCodeAt(2)) ? 3 : 2), (r = s));
            var n = -1,
              a = !0;
            for (var _o3 = t - 1; _o3 >= r; --_o3)
              if (P(e.charCodeAt(_o3))) {
                if (!a) {
                  n = _o3;
                  break;
                }
              } else a = !1;
            if (n === -1) {
              if (s === -1) return '.';
              n = s;
            }
            return e.slice(0, n);
          },
          basename: function basename(e, t) {
            t !== void 0 && W(t, 'suffix'), W(e, 'path');
            var s = 0,
              r = -1,
              i = !0,
              n;
            if (
              (e.length >= 2 && $e(e.charCodeAt(0)) && e.charCodeAt(1) === ye && (s = 2),
              t !== void 0 && t.length > 0 && t.length <= e.length)
            ) {
              if (t === e) return '';
              var a = t.length - 1,
                o = -1;
              for (n = e.length - 1; n >= s; --n) {
                var c = e.charCodeAt(n);
                if (P(c)) {
                  if (!i) {
                    s = n + 1;
                    break;
                  }
                } else
                  o === -1 && ((i = !1), (o = n + 1)),
                    a >= 0 && (c === t.charCodeAt(a) ? --a === -1 && (r = n) : ((a = -1), (r = o)));
              }
              return s === r ? (r = o) : r === -1 && (r = e.length), e.slice(s, r);
            }
            for (n = e.length - 1; n >= s; --n)
              if (P(e.charCodeAt(n))) {
                if (!i) {
                  s = n + 1;
                  break;
                }
              } else r === -1 && ((i = !1), (r = n + 1));
            return r === -1 ? '' : e.slice(s, r);
          },
          extname: function extname(e) {
            W(e, 'path');
            var t = 0,
              s = -1,
              r = 0,
              i = -1,
              n = !0,
              a = 0;
            e.length >= 2 && e.charCodeAt(1) === ye && $e(e.charCodeAt(0)) && (t = r = 2);
            for (var o = e.length - 1; o >= t; --o) {
              var c = e.charCodeAt(o);
              if (P(c)) {
                if (!n) {
                  r = o + 1;
                  break;
                }
                continue;
              }
              i === -1 && ((n = !1), (i = o + 1)),
                c === Se ? (s === -1 ? (s = o) : a !== 1 && (a = 1)) : s !== -1 && (a = -1);
            }
            return s === -1 || i === -1 || a === 0 || (a === 1 && s === i - 1 && s === r + 1)
              ? ''
              : e.slice(s, i);
          },
          format: Nr.bind(null, '\\'),
          parse: function parse(e) {
            W(e, 'path');
            var t = {
              root: '',
              dir: '',
              base: '',
              ext: '',
              name: '',
            };
            if (e.length === 0) return t;
            var s = e.length;
            var r = 0,
              i = e.charCodeAt(0);
            if (s === 1) return P(i) ? ((t.root = t.dir = e), t) : ((t.base = t.name = e), t);
            if (P(i)) {
              if (((r = 1), P(e.charCodeAt(1)))) {
                var u = 2,
                  h = u;
                for (; u < s && !P(e.charCodeAt(u)); ) u++;
                if (u < s && u !== h) {
                  for (h = u; u < s && P(e.charCodeAt(u)); ) u++;
                  if (u < s && u !== h) {
                    for (h = u; u < s && !P(e.charCodeAt(u)); ) u++;
                    u === s ? (r = u) : u !== h && (r = u + 1);
                  }
                }
              }
            } else if ($e(i) && e.charCodeAt(1) === ye) {
              if (s <= 2) return (t.root = t.dir = e), t;
              if (((r = 2), P(e.charCodeAt(2)))) {
                if (s === 3) return (t.root = t.dir = e), t;
                r = 3;
              }
            }
            r > 0 && (t.root = e.slice(0, r));
            var n = -1,
              a = r,
              o = -1,
              c = !0,
              l = e.length - 1,
              f = 0;
            for (; l >= r; --l) {
              if (((i = e.charCodeAt(l)), P(i))) {
                if (!c) {
                  a = l + 1;
                  break;
                }
                continue;
              }
              o === -1 && ((c = !1), (o = l + 1)),
                i === Se ? (n === -1 ? (n = l) : f !== 1 && (f = 1)) : n !== -1 && (f = -1);
            }
            return (
              o !== -1 &&
                (n === -1 || f === 0 || (f === 1 && n === o - 1 && n === a + 1)
                  ? (t.base = t.name = e.slice(a, o))
                  : ((t.name = e.slice(a, n)), (t.base = e.slice(a, o)), (t.ext = e.slice(n, o)))),
              a > 0 && a !== r ? (t.dir = e.slice(0, a - 1)) : (t.dir = t.root),
              t
            );
          },
          sep: '\\',
          delimiter: ';',
          win32: null,
          posix: null,
        }),
        (Fr = (function () {
          if (X) {
            var e = /\\/g;
            return function () {
              var t = Je().replace(e, '/');
              return t.slice(t.indexOf('/'));
            };
          }
          return function () {
            return Je();
          };
        })()),
        (T = {
          resolve: function resolve() {
            var t = '',
              s = !1;
            for (var r = arguments.length - 1; r >= 0 && !s; r--) {
              var i = r < 0 || arguments.length <= r ? undefined : arguments[r];
              W(i, 'paths['.concat(r, ']')),
                i.length !== 0 && ((t = ''.concat(i, '/').concat(t)), (s = i.charCodeAt(0) === H));
            }
            if (!s) {
              var _r7 = Fr();
              (t = ''.concat(_r7, '/').concat(t)), (s = _r7.charCodeAt(0) === H);
            }
            return (t = Bt(t, !s, '/', N1)), s ? '/'.concat(t) : t.length > 0 ? t : '.';
          },
          normalize: function normalize(e) {
            if ((W(e, 'path'), e.length === 0)) return '.';
            var t = e.charCodeAt(0) === H,
              s = e.charCodeAt(e.length - 1) === H;
            return (
              (e = Bt(e, !t, '/', N1)),
              e.length === 0 ? (t ? '/' : s ? './' : '.') : (s && (e += '/'), t ? '/'.concat(e) : e)
            );
          },
          isAbsolute: function isAbsolute(e) {
            return W(e, 'path'), e.length > 0 && e.charCodeAt(0) === H;
          },
          join: function join() {
            if (arguments.length === 0) return '.';
            var t = [];
            for (var s = 0; s < arguments.length; ++s) {
              var r = s < 0 || arguments.length <= s ? undefined : arguments[s];
              W(r, 'path'), r.length > 0 && t.push(r);
            }
            return t.length === 0 ? '.' : T.normalize(t.join('/'));
          },
          relative: function relative(e, t) {
            if (
              (W(e, 'from'),
              W(t, 'to'),
              e === t || ((e = T.resolve(e)), (t = T.resolve(t)), e === t))
            )
              return '';
            var s = 1,
              r = e.length,
              i = r - s,
              n = 1,
              a = t.length - n,
              o = i < a ? i : a;
            var c = -1,
              l = 0;
            for (; l < o; l++) {
              var u = e.charCodeAt(s + l);
              if (u !== t.charCodeAt(n + l)) break;
              u === H && (c = l);
            }
            if (l === o)
              if (a > o) {
                if (t.charCodeAt(n + l) === H) return t.slice(n + l + 1);
                if (l === 0) return t.slice(n + l);
              } else i > o && (e.charCodeAt(s + l) === H ? (c = l) : l === 0 && (c = 0));
            var f = '';
            for (l = s + c + 1; l <= r; ++l)
              (l === r || e.charCodeAt(l) === H) && (f += f.length === 0 ? '..' : '/..');
            return ''.concat(f).concat(t.slice(n + c));
          },
          toNamespacedPath: function toNamespacedPath(e) {
            return e;
          },
          dirname: function dirname(e) {
            if ((W(e, 'path'), e.length === 0)) return '.';
            var t = e.charCodeAt(0) === H;
            var s = -1,
              r = !0;
            for (var i = e.length - 1; i >= 1; --i)
              if (e.charCodeAt(i) === H) {
                if (!r) {
                  s = i;
                  break;
                }
              } else r = !1;
            return s === -1 ? (t ? '/' : '.') : t && s === 1 ? '//' : e.slice(0, s);
          },
          basename: function basename(e, t) {
            t !== void 0 && W(t, 'suffix'), W(e, 'path');
            var s = 0,
              r = -1,
              i = !0,
              n;
            if (t !== void 0 && t.length > 0 && t.length <= e.length) {
              if (t === e) return '';
              var a = t.length - 1,
                o = -1;
              for (n = e.length - 1; n >= 0; --n) {
                var c = e.charCodeAt(n);
                if (c === H) {
                  if (!i) {
                    s = n + 1;
                    break;
                  }
                } else
                  o === -1 && ((i = !1), (o = n + 1)),
                    a >= 0 && (c === t.charCodeAt(a) ? --a === -1 && (r = n) : ((a = -1), (r = o)));
              }
              return s === r ? (r = o) : r === -1 && (r = e.length), e.slice(s, r);
            }
            for (n = e.length - 1; n >= 0; --n)
              if (e.charCodeAt(n) === H) {
                if (!i) {
                  s = n + 1;
                  break;
                }
              } else r === -1 && ((i = !1), (r = n + 1));
            return r === -1 ? '' : e.slice(s, r);
          },
          extname: function extname(e) {
            W(e, 'path');
            var t = -1,
              s = 0,
              r = -1,
              i = !0,
              n = 0;
            for (var a = e.length - 1; a >= 0; --a) {
              var o = e[a];
              if (o === '/') {
                if (!i) {
                  s = a + 1;
                  break;
                }
                continue;
              }
              r === -1 && ((i = !1), (r = a + 1)),
                o === '.' ? (t === -1 ? (t = a) : n !== 1 && (n = 1)) : t !== -1 && (n = -1);
            }
            return t === -1 || r === -1 || n === 0 || (n === 1 && t === r - 1 && t === s + 1)
              ? ''
              : e.slice(t, r);
          },
          format: Nr.bind(null, '/'),
          parse: function parse(e) {
            W(e, 'path');
            var t = {
              root: '',
              dir: '',
              base: '',
              ext: '',
              name: '',
            };
            if (e.length === 0) return t;
            var s = e.charCodeAt(0) === H;
            var r;
            s ? ((t.root = '/'), (r = 1)) : (r = 0);
            var i = -1,
              n = 0,
              a = -1,
              o = !0,
              c = e.length - 1,
              l = 0;
            for (; c >= r; --c) {
              var f = e.charCodeAt(c);
              if (f === H) {
                if (!o) {
                  n = c + 1;
                  break;
                }
                continue;
              }
              a === -1 && ((o = !1), (a = c + 1)),
                f === Se ? (i === -1 ? (i = c) : l !== 1 && (l = 1)) : i !== -1 && (l = -1);
            }
            if (a !== -1) {
              var _f3 = n === 0 && s ? 1 : n;
              i === -1 || l === 0 || (l === 1 && i === a - 1 && i === n + 1)
                ? (t.base = t.name = e.slice(_f3, a))
                : ((t.name = e.slice(_f3, i)), (t.base = e.slice(_f3, a)), (t.ext = e.slice(i, a)));
            }
            return n > 0 ? (t.dir = e.slice(0, n - 1)) : s && (t.dir = '/'), t;
          },
          sep: '/',
          delimiter: ':',
          win32: null,
          posix: null,
        }),
        (T.win32 = q.win32 = q),
        (T.posix = q.posix = T),
        (zt = X ? q.normalize : T.normalize),
        (Ke = X ? q.isAbsolute : T.isAbsolute),
        (re = X ? q.join : T.join),
        (R1 = X ? q.resolve : T.resolve),
        (Mr = X ? q.relative : T.relative),
        (Ue = X ? q.dirname : T.dirname),
        (ht = X ? q.basename : T.basename),
        (Ur = X ? q.extname : T.extname),
        (qo = X ? q.format : T.format),
        (Bo = X ? q.parse : T.parse),
        (zo = X ? q.toNamespacedPath : T.toNamespacedPath),
        (ce = X ? q.sep : T.sep),
        (Ho = X ? q.delimiter : T.delimiter);
    },
  });
function Go() {
  return 1025 + Math.floor(64510 * Math.random());
}
var Jo = C({
    'out-build/vs/base/common/ports.js': function outBuild_vs_base_common_portsJs() {
      'use strict';
    },
  }),
  T1,
  Ht,
  dt,
  Qe,
  Gt = C({
    'out-build/vs/base/common/cancellation.js': function outBuild_vs_base_common_cancellationJs() {
      'use strict';

      Ft(),
        (T1 = Object.freeze(function (e, t) {
          var s = setTimeout(e.bind(t), 0);
          return {
            dispose: function dispose() {
              clearTimeout(s);
            },
          };
        })),
        (function (e) {
          function t(s) {
            return s === e.None || s === e.Cancelled || s instanceof dt
              ? !0
              : !s || _typeof(s) != 'object'
                ? !1
                : typeof s.isCancellationRequested == 'boolean' &&
                  typeof s.onCancellationRequested == 'function';
          }
          (e.isCancellationToken = t),
            (e.None = Object.freeze({
              isCancellationRequested: !1,
              onCancellationRequested: oe.None,
            })),
            (e.Cancelled = Object.freeze({
              isCancellationRequested: !0,
              onCancellationRequested: T1,
            }));
        })(Ht || (Ht = {})),
        (dt = /*#__PURE__*/ (function () {
          function dt() {
            _classCallCheck(this, dt);
            (this.a = !1), (this.b = null);
          }
          return _createClass(dt, [
            {
              key: 'cancel',
              value: function cancel() {
                this.a || ((this.a = !0), this.b && (this.b.fire(void 0), this.dispose()));
              },
            },
            {
              key: 'isCancellationRequested',
              get: function get() {
                return this.a;
              },
            },
            {
              key: 'onCancellationRequested',
              get: function get() {
                return this.a ? T1 : (this.b || (this.b = new ae()), this.b.event);
              },
            },
            {
              key: 'dispose',
              value: function dispose() {
                this.b && (this.b.dispose(), (this.b = null));
              },
            },
          ]);
        })()),
        (Qe = /*#__PURE__*/ (function () {
          function Qe(e) {
            _classCallCheck(this, Qe);
            (this.f = void 0),
              (this.g = void 0),
              (this.g = e && e.onCancellationRequested(this.cancel, this));
          }
          return _createClass(Qe, [
            {
              key: 'token',
              get: function get() {
                return this.f || (this.f = new dt()), this.f;
              },
            },
            {
              key: 'cancel',
              value: function cancel() {
                this.f ? this.f instanceof dt && this.f.cancel() : (this.f = Ht.Cancelled);
              },
            },
            {
              key: 'dispose',
              value: function dispose() {
                var _this$g3;
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                e && this.cancel(),
                  (_this$g3 = this.g) !== null && _this$g3 !== void 0 && _this$g3.dispose(),
                  this.f ? this.f instanceof dt && this.f.dispose() : (this.f = Ht.None);
              },
            },
          ]);
        })());
    },
  });
function Ko(e) {
  return e;
}
var Vr,
  Qo = C({
    'out-build/vs/base/common/cache.js': function outBuild_vs_base_common_cacheJs() {
      'use strict';

      Gt(),
        (Vr = /*#__PURE__*/ (function () {
          function Vr(e, t) {
            _classCallCheck(this, Vr);
            (this.a = void 0),
              (this.b = void 0),
              typeof e == 'function'
                ? ((this.c = e), (this.d = Ko))
                : ((this.c = t), (this.d = e.getCacheKey));
          }
          return _createClass(Vr, [
            {
              key: 'get',
              value: function get(e) {
                var t = this.d(e);
                return this.b !== t && ((this.b = t), (this.a = this.c(e))), this.a;
              },
            },
          ]);
        })());
    },
  }),
  Ve,
  Jt = C({
    'out-build/vs/base/common/lazy.js': function outBuild_vs_base_common_lazyJs() {
      'use strict';

      Ve = /*#__PURE__*/ (function () {
        function Ve(e) {
          _classCallCheck(this, Ve);
          (this.d = e), (this.a = !1);
        }
        return _createClass(Ve, [
          {
            key: 'hasValue',
            get: function get() {
              return this.a;
            },
          },
          {
            key: 'value',
            get: function get() {
              if (!this.a)
                try {
                  this.b = this.d();
                } catch (e) {
                  this.c = e;
                } finally {
                  this.a = !0;
                }
              if (this.c) throw this.c;
              return this.b;
            },
          },
          {
            key: 'rawValue',
            get: function get() {
              return this.b;
            },
          },
        ]);
      })();
    },
  });
function Wr(e) {
  return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, '\\$&');
}
function Yo(e, t) {
  if (!e || !t) return e;
  var s = t.length;
  if (s === 0 || e.length === 0) return e;
  var r = 0;
  for (; e.indexOf(t, r) === r; ) r = r + s;
  return e.substring(r);
}
function Zo(e, t) {
  if (!e || !t) return e;
  var s = t.length,
    r = e.length;
  if (s === 0 || r === 0) return e;
  var i = r,
    n = -1;
  for (; (n = e.lastIndexOf(t, i - 1)), !(n === -1 || n + s !== i); ) {
    if (n === 0) return '';
    i = n;
  }
  return e.substring(0, i);
}
function I1(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function j1(e, t) {
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : t.length;
  for (; s < r && i < n; s++, i++) {
    var c = e.charCodeAt(s),
      l = t.charCodeAt(i);
    if (c < l) return -1;
    if (c > l) return 1;
  }
  var a = r - s,
    o = n - i;
  return a < o ? -1 : a > o ? 1 : 0;
}
function qr(e, t) {
  return pt(e, t, 0, e.length, 0, t.length);
}
function pt(e, t) {
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : t.length;
  for (; s < r && i < n; s++, i++) {
    var c = e.charCodeAt(s),
      l = t.charCodeAt(i);
    if (c === l) continue;
    if (c >= 128 || l >= 128) return j1(e.toLowerCase(), t.toLowerCase(), s, r, i, n);
    Br(c) && (c -= 32), Br(l) && (l -= 32);
    var f = c - l;
    if (f !== 0) return f;
  }
  var a = r - s,
    o = n - i;
  return a < o ? -1 : a > o ? 1 : 0;
}
function Br(e) {
  return e >= 97 && e <= 122;
}
function zr(e, t) {
  return e.length === t.length && pt(e, t) === 0;
}
function Hr(e, t) {
  var s = t.length;
  return t.length > e.length ? !1 : pt(e, t, 0, s) === 0;
}
function Xo() {
  return JSON.parse(
    '[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]'
  );
}
var e2,
  Gr,
  t2,
  Jr,
  s2,
  r2,
  We = C({
    'out-build/vs/base/common/strings.js': function outBuild_vs_base_common_stringsJs() {
      'use strict';

      var _At, _Ot, _St;
      Qo(),
        Jt(),
        (e2 = '\uFEFF'),
        (function (e) {
          (e[(e.Other = 0)] = 'Other'),
            (e[(e.Prepend = 1)] = 'Prepend'),
            (e[(e.CR = 2)] = 'CR'),
            (e[(e.LF = 3)] = 'LF'),
            (e[(e.Control = 4)] = 'Control'),
            (e[(e.Extend = 5)] = 'Extend'),
            (e[(e.Regional_Indicator = 6)] = 'Regional_Indicator'),
            (e[(e.SpacingMark = 7)] = 'SpacingMark'),
            (e[(e.L = 8)] = 'L'),
            (e[(e.V = 9)] = 'V'),
            (e[(e.T = 10)] = 'T'),
            (e[(e.LV = 11)] = 'LV'),
            (e[(e.LVT = 12)] = 'LVT'),
            (e[(e.ZWJ = 13)] = 'ZWJ'),
            (e[(e.Extended_Pictographic = 14)] = 'Extended_Pictographic');
        })(Gr || (Gr = {})),
        (t2 =
          ((_At = /*#__PURE__*/ (function () {
            function At() {
              _classCallCheck(this, At);
              this.d = Xo();
            }
            return _createClass(
              At,
              [
                {
                  key: 'getGraphemeBreakType',
                  value: function getGraphemeBreakType(t) {
                    if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
                    if (t < 127) return 0;
                    var s = this.d,
                      r = s.length / 3;
                    var i = 1;
                    for (; i <= r; )
                      if (t < s[3 * i]) i = 2 * i;
                      else if (t > s[3 * i + 1]) i = 2 * i + 1;
                      else return s[3 * i + 2];
                    return 0;
                  },
                },
              ],
              [
                {
                  key: 'getInstance',
                  value: function getInstance() {
                    return At.c || (At.c = new At()), At.c;
                  },
                },
              ]
            );
          })()),
          (_At.c = null),
          _At)),
        (function (e) {
          (e[(e.zwj = 8205)] = 'zwj'),
            (e[(e.emojiVariantSelector = 65039)] = 'emojiVariantSelector'),
            (e[(e.enclosingKeyCap = 8419)] = 'enclosingKeyCap'),
            (e[(e.space = 32)] = 'space');
        })(Jr || (Jr = {})),
        (s2 =
          ((_Ot = /*#__PURE__*/ (function () {
            function Ot(t) {
              _classCallCheck(this, Ot);
              this.f = t;
            }
            return _createClass(
              Ot,
              [
                {
                  key: 'isAmbiguous',
                  value: function isAmbiguous(t) {
                    return this.f.has(t);
                  },
                },
                {
                  key: 'containsAmbiguousCharacter',
                  value: function containsAmbiguousCharacter(t) {
                    for (var s = 0; s < t.length; s++) {
                      var r = t.codePointAt(s);
                      if (typeof r == 'number' && this.isAmbiguous(r)) return !0;
                    }
                    return !1;
                  },
                },
                {
                  key: 'getPrimaryConfusable',
                  value: function getPrimaryConfusable(t) {
                    return this.f.get(t);
                  },
                },
                {
                  key: 'getConfusableCodePoints',
                  value: function getConfusableCodePoints() {
                    return new Set(this.f.keys());
                  },
                },
              ],
              [
                {
                  key: 'getInstance',
                  value: function getInstance(t) {
                    return Ot.d.get(Array.from(t));
                  },
                },
                {
                  key: 'getLocales',
                  value: function getLocales() {
                    return Ot.e.value;
                  },
                },
              ]
            );
          })()),
          (_Ot.c = new Ve(function () {
            return JSON.parse(
              '{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}'
            );
          })),
          (_Ot.d = new Vr(
            {
              getCacheKey: JSON.stringify,
            },
            function (t) {
              function s(f) {
                var u = new Map();
                for (var h = 0; h < f.length; h += 2) u.set(f[h], f[h + 1]);
                return u;
              }
              function r(f, u) {
                var h = new Map(f);
                var _iterator31 = _createForOfIteratorHelper(u),
                  _step31;
                try {
                  for (_iterator31.s(); !(_step31 = _iterator31.n()).done; ) {
                    var _step31$value = _slicedToArray(_step31.value, 2),
                      d = _step31$value[0],
                      p = _step31$value[1];
                    h.set(d, p);
                  }
                } catch (err) {
                  _iterator31.e(err);
                } finally {
                  _iterator31.f();
                }
                return h;
              }
              function i(f, u) {
                if (!f) return u;
                var h = new Map();
                var _iterator32 = _createForOfIteratorHelper(f),
                  _step32;
                try {
                  for (_iterator32.s(); !(_step32 = _iterator32.n()).done; ) {
                    var _step32$value = _slicedToArray(_step32.value, 2),
                      d = _step32$value[0],
                      p = _step32$value[1];
                    u.has(d) && h.set(d, p);
                  }
                } catch (err) {
                  _iterator32.e(err);
                } finally {
                  _iterator32.f();
                }
                return h;
              }
              var n = _Ot.c.value;
              var a = t.filter(function (f) {
                return !f.startsWith('_') && f in n;
              });
              a.length === 0 && (a = ['_default']);
              var o;
              var _iterator33 = _createForOfIteratorHelper(a),
                _step33;
              try {
                for (_iterator33.s(); !(_step33 = _iterator33.n()).done; ) {
                  var f = _step33.value;
                  var u = s(n[f]);
                  o = i(o, u);
                }
              } catch (err) {
                _iterator33.e(err);
              } finally {
                _iterator33.f();
              }
              var c = s(n._common),
                l = r(c, o);
              return new _Ot(l);
            }
          )),
          (_Ot.e = new Ve(function () {
            return Object.keys(_Ot.c.value).filter(function (t) {
              return !t.startsWith('_');
            });
          })),
          _Ot)),
        (r2 =
          ((_St = /*#__PURE__*/ (function () {
            function St() {
              _classCallCheck(this, St);
            }
            return _createClass(St, null, [
              {
                key: 'c',
                value: function c() {
                  return JSON.parse(
                    '{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}'
                  );
                },
              },
              {
                key: 'e',
                value: function e() {
                  return (
                    this.d || (this.d = new Set(_toConsumableArray(Object.values(St.c())).flat())),
                    this.d
                  );
                },
              },
              {
                key: 'isInvisibleCharacter',
                value: function isInvisibleCharacter(t) {
                  return St.e().has(t);
                },
              },
              {
                key: 'containsInvisibleCharacter',
                value: function containsInvisibleCharacter(t) {
                  for (var s = 0; s < t.length; s++) {
                    var r = t.codePointAt(s);
                    if (typeof r == 'number' && (St.isInvisibleCharacter(r) || r === 32)) return !0;
                  }
                  return !1;
                },
              },
              {
                key: 'codePoints',
                get: function get() {
                  return St.e();
                },
              },
            ]);
          })()),
          (_St.d = void 0),
          _St));
    },
  });
function De(e) {
  return e === 47 || e === 92;
}
function Kr(e) {
  return e.replace(/[\\/]/g, T.sep);
}
function i2(e) {
  return e.indexOf('/') === -1 && (e = Kr(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = '/' + e), e;
}
function Qr(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : T.sep;
  if (!e) return '';
  var s = e.length,
    r = e.charCodeAt(0);
  if (De(r)) {
    if (De(e.charCodeAt(1)) && !De(e.charCodeAt(2))) {
      var n = 3;
      var a = n;
      for (; n < s && !De(e.charCodeAt(n)); n++);
      if (a !== n && !De(e.charCodeAt(n + 1))) {
        for (n += 1; n < s; n++)
          if (De(e.charCodeAt(n))) return e.slice(0, n + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (Zr(r) && e.charCodeAt(1) === 58)
    return De(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  var i = e.indexOf('://');
  if (i !== -1) {
    for (i += 3; i < s; i++) if (De(e.charCodeAt(i))) return e.slice(0, i + 1);
  }
  return '';
}
function n2(e) {
  if (!z || !e || e.length < 5) return !1;
  var t = e.charCodeAt(0);
  if (t !== 92 || ((t = e.charCodeAt(1)), t !== 92)) return !1;
  var s = 2;
  var r = s;
  for (; s < e.length && ((t = e.charCodeAt(s)), t !== 92); s++);
  return !(r === s || ((t = e.charCodeAt(s + 1)), isNaN(t) || t === 92));
}
function Yr(e, t, s) {
  var r = e === t;
  return !s || r ? r : !e || !t ? !1 : zr(e, t);
}
function gt(e, t, s) {
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ce;
  if (e === t) return !0;
  if (!e || !t || t.length > e.length) return !1;
  if (s) {
    if (!Hr(e, t)) return !1;
    if (t.length === e.length) return !0;
    var n = t.length;
    return t.charAt(t.length - 1) === r && n--, e.charAt(n) === r;
  }
  return t.charAt(t.length - 1) !== r && (t += r), e.indexOf(t) === 0;
}
function Zr(e) {
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
function o2(e) {
  var t = zt(e);
  return z
    ? e.length > 3
      ? !1
      : a2(t) && (e.length === 2 || t.charCodeAt(2) === 92)
    : t === T.sep;
}
function a2(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : z;
  return t ? Zr(e.charCodeAt(0)) && e.charCodeAt(1) === 58 : !1;
}
function mt(e, t) {
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
  var r = '';
  for (var n = 0; n < s; n++) {
    var a = void 0;
    n === 0 && z && !t && (s === 3 || s === 4) ? (a = ei) : (a = Xr),
      (r += a.charAt(Math.floor(Math.random() * a.length)));
  }
  var i;
  return t ? (i = ''.concat(t, '-').concat(r)) : (i = r), e ? re(e, i) : i;
}
var Xr,
  ei,
  qe = C({
    'out-build/vs/base/common/extpath.js': function outBuild_vs_base_common_extpathJs() {
      'use strict';

      le(),
        Y(),
        We(),
        Rt(),
        (Xr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'),
        (ei = 'BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789');
    },
  });
function c2(e, t) {
  if (!e.scheme && t)
    throw new Error(
      '[UriError]: Scheme is missing: {scheme: "", authority: "'
        .concat(e.authority, '", path: "')
        .concat(e.path, '", query: "')
        .concat(e.query, '", fragment: "')
        .concat(e.fragment, '"}')
    );
  if (e.scheme && !ri.test(e.scheme))
    throw new Error('[UriError]: Scheme contains illegal characters.');
  if (e.path) {
    if (e.authority) {
      if (!ii.test(e.path))
        throw new Error(
          '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
        );
    } else if (ni.test(e.path))
      throw new Error(
        '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
      );
  }
}
function l2(e, t) {
  return !e && !t ? 'file' : e;
}
function u2(e, t) {
  switch (e) {
    case 'https':
    case 'http':
    case 'file':
      t ? t[0] !== ue && (t = ue + t) : (t = ue);
      break;
  }
  return t;
}
function ti(e, t, s) {
  var r,
    i = -1;
  for (var n = 0; n < e.length; n++) {
    var a = e.charCodeAt(n);
    if (
      (a >= 97 && a <= 122) ||
      (a >= 65 && a <= 90) ||
      (a >= 48 && a <= 57) ||
      a === 45 ||
      a === 46 ||
      a === 95 ||
      a === 126 ||
      (t && a === 47) ||
      (s && a === 91) ||
      (s && a === 93) ||
      (s && a === 58)
    )
      i !== -1 && ((r += encodeURIComponent(e.substring(i, n))), (i = -1)),
        r !== void 0 && (r += e.charAt(n));
    else {
      r === void 0 && (r = e.substr(0, n));
      var o = U1[a];
      o !== void 0
        ? (i !== -1 && ((r += encodeURIComponent(e.substring(i, n))), (i = -1)), (r += o))
        : i === -1 && (i = n);
    }
  }
  return i !== -1 && (r += encodeURIComponent(e.substring(i))), r !== void 0 ? r : e;
}
function f2(e) {
  var t;
  for (var s = 0; s < e.length; s++) {
    var r = e.charCodeAt(s);
    r === 35 || r === 63
      ? (t === void 0 && (t = e.substr(0, s)), (t += U1[r]))
      : t !== void 0 && (t += e[s]);
  }
  return t !== void 0 ? t : e;
}
function Kt(e, t) {
  var s;
  return (
    e.authority && e.path.length > 1 && e.scheme === 'file'
      ? (s = '//'.concat(e.authority).concat(e.path))
      : e.path.charCodeAt(0) === 47 &&
          ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) ||
            (e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122)) &&
          e.path.charCodeAt(2) === 58
        ? t
          ? (s = e.path.substr(1))
          : (s = e.path[1].toLowerCase() + e.path.substr(2))
        : (s = e.path),
    z && (s = s.replace(/\//g, '\\')),
    s
  );
}
function F1(e, t) {
  var s = t ? f2 : ti;
  var r = '',
    i = e.scheme,
    n = e.authority,
    a = e.path,
    o = e.query,
    c = e.fragment;
  if ((i && ((r += i), (r += ':')), (n || i === 'file') && ((r += ue), (r += ue)), n)) {
    var l = n.indexOf('@');
    if (l !== -1) {
      var f = n.substr(0, l);
      (n = n.substr(l + 1)),
        (l = f.lastIndexOf(':')),
        l === -1
          ? (r += s(f, !1, !1))
          : ((r += s(f.substr(0, l), !1, !1)), (r += ':'), (r += s(f.substr(l + 1), !1, !0))),
        (r += '@');
    }
    (n = n.toLowerCase()),
      (l = n.lastIndexOf(':')),
      l === -1 ? (r += s(n, !1, !0)) : ((r += s(n.substr(0, l), !1, !0)), (r += n.substr(l)));
  }
  if (a) {
    if (a.length >= 3 && a.charCodeAt(0) === 47 && a.charCodeAt(2) === 58) {
      var _l4 = a.charCodeAt(1);
      _l4 >= 65 &&
        _l4 <= 90 &&
        (a = '/'.concat(String.fromCharCode(_l4 + 32), ':').concat(a.substr(3)));
    } else if (a.length >= 2 && a.charCodeAt(1) === 58) {
      var _l5 = a.charCodeAt(0);
      _l5 >= 65 &&
        _l5 <= 90 &&
        (a = ''.concat(String.fromCharCode(_l5 + 32), ':').concat(a.substr(2)));
    }
    r += s(a, !0, !1);
  }
  return o && ((r += '?'), (r += s(o, !1, !1))), c && ((r += '#'), (r += t ? c : ti(c, !1, !1))), r;
}
function si(e) {
  try {
    return decodeURIComponent(e);
  } catch (_unused4) {
    return e.length > 3 ? e.substr(0, 3) + si(e.substr(3)) : e;
  }
}
function Qt(e) {
  return e.match(V1)
    ? e.replace(V1, function (t) {
        return si(t);
      })
    : e;
}
var ri,
  ii,
  ni,
  U,
  ue,
  oi,
  K,
  M1,
  Be,
  U1,
  V1,
  ze = C({
    'out-build/vs/base/common/uri.js': function outBuild_vs_base_common_uriJs() {
      'use strict';

      le(),
        Y(),
        (ri = /^\w[\w\d+.-]*$/),
        (ii = /^\//),
        (ni = /^\/\//),
        (U = ''),
        (ue = '/'),
        (oi = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/),
        (K = /*#__PURE__*/ (function () {
          function f1(t, s, r, i, n) {
            var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
            _classCallCheck(this, f1);
            _typeof(t) == 'object'
              ? ((this.scheme = t.scheme || U),
                (this.authority = t.authority || U),
                (this.path = t.path || U),
                (this.query = t.query || U),
                (this.fragment = t.fragment || U))
              : ((this.scheme = l2(t, a)),
                (this.authority = s || U),
                (this.path = u2(this.scheme, r || U)),
                (this.query = i || U),
                (this.fragment = n || U),
                c2(this, a));
          }
          return _createClass(
            f1,
            [
              {
                key: 'fsPath',
                get: function get() {
                  return Kt(this, !1);
                },
              },
              {
                key: 'with',
                value: function _with(t) {
                  if (!t) return this;
                  var s = t.scheme,
                    r = t.authority,
                    i = t.path,
                    n = t.query,
                    a = t.fragment;
                  return (
                    s === void 0 ? (s = this.scheme) : s === null && (s = U),
                    r === void 0 ? (r = this.authority) : r === null && (r = U),
                    i === void 0 ? (i = this.path) : i === null && (i = U),
                    n === void 0 ? (n = this.query) : n === null && (n = U),
                    a === void 0 ? (a = this.fragment) : a === null && (a = U),
                    s === this.scheme &&
                    r === this.authority &&
                    i === this.path &&
                    n === this.query &&
                    a === this.fragment
                      ? this
                      : new Be(s, r, i, n, a)
                  );
                },
              },
              {
                key: 'toString',
                value: function toString() {
                  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                  return F1(this, t);
                },
              },
              {
                key: 'toJSON',
                value: function toJSON() {
                  return this;
                },
              },
              {
                key: Symbol['for']('debug.description'),
                value: function value() {
                  return 'URI('.concat(this.toString(), ')');
                },
              },
            ],
            [
              {
                key: 'isUri',
                value: function isUri(t) {
                  return t instanceof f1
                    ? !0
                    : t
                      ? typeof t.authority == 'string' &&
                        typeof t.fragment == 'string' &&
                        typeof t.path == 'string' &&
                        typeof t.query == 'string' &&
                        typeof t.scheme == 'string' &&
                        typeof t.fsPath == 'string' &&
                        typeof t['with'] == 'function' &&
                        typeof t.toString == 'function'
                      : !1;
                },
              },
              {
                key: 'parse',
                value: function parse(t) {
                  var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                  var r = oi.exec(t);
                  return r
                    ? new Be(
                        r[2] || U,
                        Qt(r[4] || U),
                        Qt(r[5] || U),
                        Qt(r[7] || U),
                        Qt(r[9] || U),
                        s
                      )
                    : new Be(U, U, U, U, U);
                },
              },
              {
                key: 'file',
                value: function file(t) {
                  var s = U;
                  if ((z && (t = t.replace(/\\/g, ue)), t[0] === ue && t[1] === ue)) {
                    var r = t.indexOf(ue, 2);
                    r === -1
                      ? ((s = t.substring(2)), (t = ue))
                      : ((s = t.substring(2, r)), (t = t.substring(r) || ue));
                  }
                  return new Be('file', s, t, U, U);
                },
              },
              {
                key: 'from',
                value: function from(t, s) {
                  return new Be(t.scheme, t.authority, t.path, t.query, t.fragment, s);
                },
              },
              {
                key: 'joinPath',
                value: function joinPath(t) {
                  var _q, _T;
                  if (!t.path)
                    throw new Error('[UriError]: cannot call joinPath on URI without path');
                  var r;
                  for (
                    var _len6 = arguments.length,
                      s = new Array(_len6 > 1 ? _len6 - 1 : 0),
                      _key6 = 1;
                    _key6 < _len6;
                    _key6++
                  ) {
                    s[_key6 - 1] = arguments[_key6];
                  }
                  return (
                    z && t.scheme === 'file'
                      ? (r = f1.file((_q = q).join.apply(_q, [Kt(t, !0)].concat(s))).path)
                      : (r = (_T = T).join.apply(_T, [t.path].concat(s))),
                    t['with']({
                      path: r,
                    })
                  );
                },
              },
              {
                key: 'revive',
                value: function revive(t) {
                  if (t) {
                    if (t instanceof f1) return t;
                    {
                      var _t$external, _t$fsPath;
                      var s = new Be(t);
                      return (
                        (s._formatted =
                          (_t$external = t.external) !== null && _t$external !== void 0
                            ? _t$external
                            : null),
                        (s._fsPath =
                          t._sep === M1
                            ? (_t$fsPath = t.fsPath) !== null && _t$fsPath !== void 0
                              ? _t$fsPath
                              : null
                            : null),
                        s
                      );
                    }
                  } else return t;
                },
              },
            ]
          );
        })()),
        (M1 = z ? 1 : void 0),
        (Be = /*#__PURE__*/ (function (_K) {
          function Be() {
            var _this17;
            _classCallCheck(this, Be);
            (_this17 = _callSuper(this, Be, arguments)),
              (_this17._formatted = null),
              (_this17._fsPath = null);
            return _this17;
          }
          _inherits(Be, _K);
          return _createClass(Be, [
            {
              key: 'fsPath',
              get: function get() {
                return this._fsPath || (this._fsPath = Kt(this, !1)), this._fsPath;
              },
            },
            {
              key: 'toString',
              value: function toString() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                return e
                  ? F1(this, !0)
                  : (this._formatted || (this._formatted = F1(this, !1)), this._formatted);
              },
            },
            {
              key: 'toJSON',
              value: function toJSON() {
                var e = {
                  $mid: 1,
                };
                return (
                  this._fsPath && ((e.fsPath = this._fsPath), (e._sep = M1)),
                  this._formatted && (e.external = this._formatted),
                  this.path && (e.path = this.path),
                  this.scheme && (e.scheme = this.scheme),
                  this.authority && (e.authority = this.authority),
                  this.query && (e.query = this.query),
                  this.fragment && (e.fragment = this.fragment),
                  e
                );
              },
            },
          ]);
        })(K)),
        (U1 = {
          58: '%3A',
          47: '%2F',
          63: '%3F',
          35: '%23',
          91: '%5B',
          93: '%5D',
          64: '%40',
          33: '%21',
          36: '%24',
          38: '%26',
          39: '%27',
          40: '%28',
          41: '%29',
          42: '%2A',
          43: '%2B',
          44: '%2C',
          59: '%3B',
          61: '%3D',
          32: '%20',
        }),
        (V1 = /(%[0-9A-Za-z][0-9A-Za-z])+/g);
    },
  });
function h2(e) {
  var _e$quality, _e$commit;
  return ''
    .concat((_e$quality = e.quality) !== null && _e$quality !== void 0 ? _e$quality : 'oss', '-')
    .concat((_e$commit = e.commit) !== null && _e$commit !== void 0 ? _e$commit : 'dev');
}
var J,
  ai,
  ci,
  li,
  ui,
  fi,
  hi,
  d2,
  di,
  W1 = C({
    'out-build/vs/base/common/network.js': function outBuild_vs_base_common_networkJs() {
      'use strict';

      var _h;
      rt(),
        Y(),
        We(),
        ze(),
        le(),
        (function (e) {
          (e.inMemory = 'inmemory'),
            (e.vscode = 'vscode'),
            (e.internal = 'private'),
            (e.walkThrough = 'walkThrough'),
            (e.walkThroughSnippet = 'walkThroughSnippet'),
            (e.http = 'http'),
            (e.https = 'https'),
            (e.file = 'file'),
            (e.mailto = 'mailto'),
            (e.untitled = 'untitled'),
            (e.data = 'data'),
            (e.command = 'command'),
            (e.vscodeRemote = 'vscode-remote'),
            (e.vscodeRemoteDownload = 'vscode-remote-download'),
            (e.vscodeRemoteResource = 'vscode-remote-resource'),
            (e.vscodeManagedRemoteResource = 'vscode-managed-remote-resource'),
            (e.vscodeUserData = 'vscode-userdata'),
            (e.vscodeCustomEditor = 'vscode-custom-editor'),
            (e.vscodeNotebookCell = 'vscode-notebook-cell'),
            (e.vscodeNotebookCellMetadata = 'vscode-notebook-cell-metadata'),
            (e.vscodeNotebookCellMetadataDiff = 'vscode-notebook-cell-metadata-diff'),
            (e.vscodeNotebookCellOutput = 'vscode-notebook-cell-output'),
            (e.vscodeNotebookCellOutputDiff = 'vscode-notebook-cell-output-diff'),
            (e.vscodeNotebookMetadata = 'vscode-notebook-metadata'),
            (e.vscodeInteractiveInput = 'vscode-interactive-input'),
            (e.vscodeSettings = 'vscode-settings'),
            (e.vscodeWorkspaceTrust = 'vscode-workspace-trust'),
            (e.vscodeTerminal = 'vscode-terminal'),
            (e.vscodeChatCodeBlock = 'vscode-chat-code-block'),
            (e.icubeChatCodeBlock = 'icube-chat-code-block'),
            (e.vscodeChatCodeCompareBlock = 'vscode-chat-code-compare-block'),
            (e.vscodeChatSesssion = 'vscode-chat-editor'),
            (e.vscodeComponent = 'vscode-component-editor'),
            (e.vscodeIcubeChatSession = 'vscode-icube-chat-editor'),
            (e.webviewPanel = 'webview-panel'),
            (e.vscodeWebview = 'vscode-webview'),
            (e.extension = 'extension'),
            (e.vscodeFileResource = 'vscode-file'),
            (e.tmp = 'tmp'),
            (e.vsls = 'vsls'),
            (e.vscodeSourceControl = 'vscode-scm'),
            (e.commentsInput = 'comment'),
            (e.codeSetting = 'code-setting'),
            (e.outputChannel = 'output'),
            (e.accessibleView = 'accessible-view');
        })(J || (J = {})),
        (ai = 'tkn'),
        (ci = /*#__PURE__*/ (function () {
          function ci() {
            _classCallCheck(this, ci);
            (this.a = Object.create(null)),
              (this.b = Object.create(null)),
              (this.c = Object.create(null)),
              (this.d = 'http'),
              (this.e = null),
              (this.f = '/');
          }
          return _createClass(ci, [
            {
              key: 'setPreferredWebSchema',
              value: function setPreferredWebSchema(e) {
                this.d = e;
              },
            },
            {
              key: 'setDelegate',
              value: function setDelegate(e) {
                this.e = e;
              },
            },
            {
              key: 'setServerRootPath',
              value: function setServerRootPath(e, t) {
                this.f = T.join(t !== null && t !== void 0 ? t : '/', h2(e));
              },
            },
            {
              key: 'getServerRootPath',
              value: function getServerRootPath() {
                return this.f;
              },
            },
            {
              key: 'g',
              get: function get() {
                return T.join(this.f, J.vscodeRemoteResource);
              },
            },
            {
              key: 'set',
              value: function set(e, t, s) {
                (this.a[e] = t), (this.b[e] = s);
              },
            },
            {
              key: 'setConnectionToken',
              value: function setConnectionToken(e, t) {
                this.c[e] = t;
              },
            },
            {
              key: 'getPreferredWebSchema',
              value: function getPreferredWebSchema() {
                return this.d;
              },
            },
            {
              key: 'rewrite',
              value: function rewrite(e) {
                if (this.e)
                  try {
                    return this.e(e);
                  } catch (a) {
                    return Lt(a), e;
                  }
                var t = e.authority;
                var s = this.a[t];
                s && s.indexOf(':') !== -1 && s.indexOf('[') === -1 && (s = '['.concat(s, ']'));
                var r = this.b[t],
                  i = this.c[t];
                var n = 'path='.concat(encodeURIComponent(e.path));
                return (
                  typeof i == 'string' && (n += '&'.concat(ai, '=').concat(encodeURIComponent(i))),
                  K.from({
                    scheme: _r ? this.d : J.vscodeRemoteResource,
                    authority: ''.concat(s, ':').concat(r),
                    path: this.g,
                    query: n,
                  })
                );
              },
            },
          ]);
        })()),
        (li = new ci()),
        (ui = 'vscode-app'),
        (fi =
          ((_h = /*#__PURE__*/ (function () {
            function h1() {
              _classCallCheck(this, h1);
            }
            return _createClass(h1, [
              {
                key: 'asBrowserUri',
                value: function asBrowserUri(t) {
                  var s = this.b(t);
                  return this.uriToBrowserUri(s);
                },
              },
              {
                key: 'uriToBrowserUri',
                value: function uriToBrowserUri(t) {
                  return t.scheme === J.vscodeRemote
                    ? li.rewrite(t)
                    : t.scheme === J.file &&
                        (Er || $r === ''.concat(J.vscodeFileResource, '://').concat(h1.a))
                      ? t['with']({
                          scheme: J.vscodeFileResource,
                          authority: t.authority || h1.a,
                          query: null,
                          fragment: null,
                        })
                      : t;
                },
              },
              {
                key: 'asFileUri',
                value: function asFileUri(t) {
                  var s = this.b(t);
                  return this.uriToFileUri(s);
                },
              },
              {
                key: 'uriToFileUri',
                value: function uriToFileUri(t) {
                  return t.scheme === J.vscodeFileResource
                    ? t['with']({
                        scheme: J.file,
                        authority: t.authority !== h1.a ? t.authority : null,
                        query: null,
                        fragment: null,
                      })
                    : t;
                },
              },
              {
                key: 'b',
                value: function b(t, s) {
                  if (K.isUri(t)) return t;
                  if (globalThis._VSCODE_FILE_ROOT) {
                    var r = globalThis._VSCODE_FILE_ROOT;
                    if (/^\w[\w\d+.-]*:\/\//.test(r)) return K.joinPath(K.parse(r, !0), t);
                    var i = re(r, t);
                    return K.file(i);
                  }
                  return K.parse(s.toUrl(t));
                },
              },
            ]);
          })()),
          (_h.a = ui),
          _h)),
        (hi = new fi()),
        (d2 = Object.freeze({
          'Cache-Control': 'no-cache, no-store',
        })),
        (function (e) {
          var t = new Map([
            [
              '1',
              {
                'Cross-Origin-Opener-Policy': 'same-origin',
              },
            ],
            [
              '2',
              {
                'Cross-Origin-Embedder-Policy': 'require-corp',
              },
            ],
            [
              '3',
              {
                'Cross-Origin-Opener-Policy': 'same-origin',
                'Cross-Origin-Embedder-Policy': 'require-corp',
              },
            ],
          ]);
          e.CoopAndCoep = Object.freeze(t.get('3'));
          var s = 'vscode-coi';
          function r(n) {
            var _a2;
            var a;
            typeof n == 'string'
              ? (a = new URL(n).searchParams)
              : n instanceof URL
                ? (a = n.searchParams)
                : K.isUri(n) && (a = new URL(n.toString(!0)).searchParams);
            var o = (_a2 = a) === null || _a2 === void 0 ? void 0 : _a2.get(s);
            if (o) return t.get(o);
          }
          e.getHeadersFromQuery = r;
          function i(n, a, o) {
            if (!globalThis.crossOriginIsolated) return;
            var c = a && o ? '3' : o ? '2' : '1';
            n instanceof URLSearchParams ? n.set(s, c) : (n[s] = c);
          }
          e.addSearchParam = i;
        })(di || (di = {}));
    },
  });
function Ae(e) {
  return Kt(e, !0);
}
var Yt,
  R,
  pi,
  p2,
  g2,
  m2,
  b2,
  w2,
  gi,
  y2,
  v2,
  q1,
  E2,
  _2,
  C2,
  $2,
  B1,
  z1,
  A2,
  O2,
  mi,
  H1 = C({
    'out-build/vs/base/common/resources.js': function outBuild_vs_base_common_resourcesJs() {
      'use strict';

      qe(),
        W1(),
        le(),
        Y(),
        We(),
        ze(),
        (Yt = /*#__PURE__*/ (function () {
          function Yt(e) {
            _classCallCheck(this, Yt);
            this.a = e;
          }
          return _createClass(Yt, [
            {
              key: 'compare',
              value: function compare(e, t) {
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                return e === t ? 0 : I1(this.getComparisonKey(e, s), this.getComparisonKey(t, s));
              },
            },
            {
              key: 'isEqual',
              value: function isEqual(e, t) {
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                return e === t
                  ? !0
                  : !e || !t
                    ? !1
                    : this.getComparisonKey(e, s) === this.getComparisonKey(t, s);
              },
            },
            {
              key: 'getComparisonKey',
              value: function getComparisonKey(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                return e['with']({
                  path: this.a(e) ? e.path.toLowerCase() : void 0,
                  fragment: t ? null : void 0,
                }).toString();
              },
            },
            {
              key: 'ignorePathCasing',
              value: function ignorePathCasing(e) {
                return this.a(e);
              },
            },
            {
              key: 'isEqualOrParent',
              value: function isEqualOrParent(e, t) {
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                if (e.scheme === t.scheme) {
                  if (e.scheme === J.file)
                    return (
                      gt(Ae(e), Ae(t), this.a(e)) &&
                      e.query === t.query &&
                      (s || e.fragment === t.fragment)
                    );
                  if (B1(e.authority, t.authority))
                    return (
                      gt(e.path, t.path, this.a(e), '/') &&
                      e.query === t.query &&
                      (s || e.fragment === t.fragment)
                    );
                }
                return !1;
              },
            },
            {
              key: 'joinPath',
              value: function joinPath(e) {
                var _K2;
                for (
                  var _len7 = arguments.length, t = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1;
                  _key7 < _len7;
                  _key7++
                ) {
                  t[_key7 - 1] = arguments[_key7];
                }
                return (_K2 = K).joinPath.apply(_K2, [e].concat(t));
              },
            },
            {
              key: 'basenameOrAuthority',
              value: function basenameOrAuthority(e) {
                return gi(e) || e.authority;
              },
            },
            {
              key: 'basename',
              value: function basename(e) {
                return T.basename(e.path);
              },
            },
            {
              key: 'extname',
              value: function extname(e) {
                return T.extname(e.path);
              },
            },
            {
              key: 'dirname',
              value: function dirname(e) {
                if (e.path.length === 0) return e;
                var t;
                return (
                  e.scheme === J.file
                    ? (t = K.file(Ue(Ae(e))).path)
                    : ((t = T.dirname(e.path)),
                      e.authority &&
                        t.length &&
                        t.charCodeAt(0) !== 47 &&
                        (console.error(
                          'dirname("'.concat(e.toString, ')) resulted in a relative path')
                        ),
                        (t = '/'))),
                  e['with']({
                    path: t,
                  })
                );
              },
            },
            {
              key: 'normalizePath',
              value: function normalizePath(e) {
                if (!e.path.length) return e;
                var t;
                return (
                  e.scheme === J.file ? (t = K.file(zt(Ae(e))).path) : (t = T.normalize(e.path)),
                  e['with']({
                    path: t,
                  })
                );
              },
            },
            {
              key: 'relativePath',
              value: function relativePath(e, t) {
                if (e.scheme !== t.scheme || !B1(e.authority, t.authority)) return;
                if (e.scheme === J.file) {
                  var i = Mr(Ae(e), Ae(t));
                  return z ? Kr(i) : i;
                }
                var s = e.path || '/';
                var r = t.path || '/';
                if (this.a(e)) {
                  var _i5 = 0;
                  for (
                    var n = Math.min(s.length, r.length);
                    _i5 < n &&
                    !(
                      s.charCodeAt(_i5) !== r.charCodeAt(_i5) &&
                      s.charAt(_i5).toLowerCase() !== r.charAt(_i5).toLowerCase()
                    );
                    _i5++
                  );
                  s = r.substr(0, _i5) + s.substr(_i5);
                }
                return T.relative(s, r);
              },
            },
            {
              key: 'resolvePath',
              value: function resolvePath(e, t) {
                if (e.scheme === J.file) {
                  var s = K.file(R1(Ae(e), t));
                  return e['with']({
                    authority: s.authority,
                    path: s.path,
                  });
                }
                return (
                  (t = i2(t)),
                  e['with']({
                    path: T.resolve(e.path, t),
                  })
                );
              },
            },
            {
              key: 'isAbsolutePath',
              value: function isAbsolutePath(e) {
                return !!e.path && e.path[0] === '/';
              },
            },
            {
              key: 'isEqualAuthority',
              value: function isEqualAuthority(e, t) {
                return e === t || (e !== void 0 && t !== void 0 && zr(e, t));
              },
            },
            {
              key: 'hasTrailingPathSeparator',
              value: function hasTrailingPathSeparator(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ce;
                if (e.scheme === J.file) {
                  var s = Ae(e);
                  return s.length > Qr(s).length && s[s.length - 1] === t;
                } else {
                  var _s3 = e.path;
                  return (
                    _s3.length > 1 &&
                    _s3.charCodeAt(_s3.length - 1) === 47 &&
                    !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath)
                  );
                }
              },
            },
            {
              key: 'removeTrailingPathSeparator',
              value: function removeTrailingPathSeparator(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ce;
                return z1(e, t)
                  ? e['with']({
                      path: e.path.substr(0, e.path.length - 1),
                    })
                  : e;
              },
            },
            {
              key: 'addTrailingPathSeparator',
              value: function addTrailingPathSeparator(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ce;
                var s = !1;
                if (e.scheme === J.file) {
                  var r = Ae(e);
                  s = r !== void 0 && r.length === Qr(r).length && r[r.length - 1] === t;
                } else {
                  t = '/';
                  var _r8 = e.path;
                  s = _r8.length === 1 && _r8.charCodeAt(_r8.length - 1) === 47;
                }
                return !s && !z1(e, t)
                  ? e['with']({
                      path: e.path + '/',
                    })
                  : e;
              },
            },
          ]);
        })()),
        (R = new Yt(function () {
          return !1;
        })),
        (pi = new Yt(function (e) {
          return e.scheme === J.file ? !_e : !0;
        })),
        (p2 = new Yt(function (e) {
          return !0;
        })),
        (g2 = R.isEqual.bind(R)),
        (m2 = R.isEqualOrParent.bind(R)),
        (b2 = R.getComparisonKey.bind(R)),
        (w2 = R.basenameOrAuthority.bind(R)),
        (gi = R.basename.bind(R)),
        (y2 = R.extname.bind(R)),
        (v2 = R.dirname.bind(R)),
        (q1 = R.joinPath.bind(R)),
        (E2 = R.normalizePath.bind(R)),
        (_2 = R.relativePath.bind(R)),
        (C2 = R.resolvePath.bind(R)),
        ($2 = R.isAbsolutePath.bind(R)),
        (B1 = R.isEqualAuthority.bind(R)),
        (z1 = R.hasTrailingPathSeparator.bind(R)),
        (A2 = R.removeTrailingPathSeparator.bind(R)),
        (O2 = R.addTrailingPathSeparator.bind(R)),
        (function (e) {
          (e.META_DATA_LABEL = 'label'),
            (e.META_DATA_DESCRIPTION = 'description'),
            (e.META_DATA_SIZE = 'size'),
            (e.META_DATA_MIME = 'mime');
          function t(s) {
            var r = new Map();
            s.path
              .substring(s.path.indexOf(';') + 1, s.path.lastIndexOf(';'))
              .split(';')
              .forEach(function (a) {
                var _a$split = a.split(':'),
                  _a$split2 = _slicedToArray(_a$split, 2),
                  o = _a$split2[0],
                  c = _a$split2[1];
                o && c && r.set(o, c);
              });
            var n = s.path.substring(0, s.path.indexOf(';'));
            return n && r.set(e.META_DATA_MIME, n), r;
          }
          e.parseMetaData = t;
        })(mi || (mi = {}));
    },
  }),
  S2,
  D2 = C({
    'out-build/vs/base/common/symbols.js': function outBuild_vs_base_common_symbolsJs() {
      'use strict';

      S2 = Symbol('MicrotaskDelay');
    },
  });
function G1(e) {
  return !!e && typeof e.then == 'function';
}
function P2(e) {
  var t = new Qe(),
    s = e(t.token),
    r = new Promise(function (i, n) {
      var a = t.token.onCancellationRequested(function () {
        a.dispose(), n(new st());
      });
      Promise.resolve(s).then(
        function (o) {
          a.dispose(), t.dispose(), i(o);
        },
        function (o) {
          a.dispose(), t.dispose(), n(o);
        }
      );
    });
  return new /*#__PURE__*/ ((function () {
    function _class2() {
      _classCallCheck(this, _class2);
    }
    return _createClass(_class2, [
      {
        key: 'cancel',
        value: function cancel() {
          t.cancel(), t.dispose();
        },
      },
      {
        key: 'then',
        value: function then(i, n) {
          return r.then(i, n);
        },
      },
      {
        key: 'catch',
        value: function _catch(i) {
          return this.then(void 0, i);
        },
      },
      {
        key: 'finally',
        value: function _finally(i) {
          return r['finally'](i);
        },
      },
    ]);
  })())();
}
function bi(e, t) {
  return t
    ? new Promise(function (s, r) {
        var i = setTimeout(function () {
            n.dispose(), s();
          }, e),
          n = t.onCancellationRequested(function () {
            clearTimeout(i), n.dispose(), r(new st());
          });
      })
    : P2(function (s) {
        return bi(e, s);
      });
}
var wi,
  J1,
  yi,
  K1,
  vi,
  Ei,
  x2,
  Q1,
  _i,
  Y1,
  Ci,
  $i,
  L2,
  bt = C({
    'out-build/vs/base/common/async.js': function outBuild_vs_base_common_asyncJs() {
      'use strict';

      var _ne;
      Gt(),
        rt(),
        Ft(),
        It(),
        H1(),
        Y(),
        D2(),
        Jt(),
        (wi = /*#__PURE__*/ (function () {
          function wi(e) {
            _classCallCheck(this, wi);
            (this.a = 0),
              (this.b = !1),
              (this.f = e),
              (this.g = []),
              (this.d = 0),
              (this.h = new ae());
          }
          return _createClass(wi, [
            {
              key: 'whenIdle',
              value: function whenIdle() {
                return this.size > 0 ? oe.toPromise(this.onDrained) : Promise.resolve();
              },
            },
            {
              key: 'onDrained',
              get: function get() {
                return this.h.event;
              },
            },
            {
              key: 'size',
              get: function get() {
                return this.a;
              },
            },
            {
              key: 'queue',
              value: function queue(e) {
                var _this18 = this;
                if (this.b) throw new Error('Object has been disposed');
                return (
                  this.a++,
                  new Promise(function (t, s) {
                    _this18.g.push({
                      factory: e,
                      c: t,
                      e: s,
                    }),
                      _this18.j();
                  })
                );
              },
            },
            {
              key: 'j',
              value: function j() {
                var _this19 = this;
                for (; this.g.length && this.d < this.f; ) {
                  var e = this.g.shift();
                  this.d++;
                  var t = e.factory();
                  t.then(e.c, e.e),
                    t.then(
                      function () {
                        return _this19.k();
                      },
                      function () {
                        return _this19.k();
                      }
                    );
                }
              },
            },
            {
              key: 'k',
              value: function k() {
                this.b ||
                  (this.d--, --this.a === 0 && this.h.fire(), this.g.length > 0 && this.j());
              },
            },
            {
              key: 'clear',
              value: function clear() {
                if (this.b) throw new Error('Object has been disposed');
                (this.g.length = 0), (this.a = this.d);
              },
            },
            {
              key: 'dispose',
              value: function dispose() {
                (this.b = !0), (this.g.length = 0), (this.a = 0), this.h.dispose();
              },
            },
          ]);
        })()),
        (J1 = /*#__PURE__*/ (function (_wi) {
          function J1() {
            _classCallCheck(this, J1);
            return _callSuper(this, J1, [1]);
          }
          _inherits(J1, _wi);
          return _createClass(J1);
        })(wi)),
        (yi = /*#__PURE__*/ (function () {
          function yi() {
            _classCallCheck(this, yi);
            (this.a = new Map()), (this.b = new Set()), (this.d = void 0), (this.f = 0);
          }
          return _createClass(yi, [
            {
              key: 'whenDrained',
              value: (function () {
                var _whenDrained = _asyncToGenerator(
                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3() {
                    var e;
                    return _regeneratorRuntime().wrap(
                      function _callee3$(_context15) {
                        while (1)
                          switch ((_context15.prev = _context15.next)) {
                            case 0:
                              if (!this.g()) {
                                _context15.next = 2;
                                break;
                              }
                              return _context15.abrupt('return');
                            case 2:
                              e = new Y1();
                              return _context15.abrupt('return', (this.b.add(e), e.p));
                            case 4:
                            case 'end':
                              return _context15.stop();
                          }
                      },
                      _callee3,
                      this
                    );
                  })
                );
                function whenDrained() {
                  return _whenDrained.apply(this, arguments);
                }
                return whenDrained;
              })(),
            },
            {
              key: 'g',
              value: function g() {
                var _iterator34 = _createForOfIteratorHelper(this.a),
                  _step34;
                try {
                  for (_iterator34.s(); !(_step34 = _iterator34.n()).done; ) {
                    var _step34$value = _slicedToArray(_step34.value, 2),
                      e = _step34$value[1];
                    if (e.size > 0) return !1;
                  }
                } catch (err) {
                  _iterator34.e(err);
                } finally {
                  _iterator34.f();
                }
                return !0;
              },
            },
            {
              key: 'queueSize',
              value: function queueSize(e) {
                var _this$a$get$size, _this$a$get3;
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : R;
                var s = t.getComparisonKey(e);
                return (_this$a$get$size =
                  (_this$a$get3 = this.a.get(s)) === null || _this$a$get3 === void 0
                    ? void 0
                    : _this$a$get3.size) !== null && _this$a$get$size !== void 0
                  ? _this$a$get$size
                  : 0;
              },
            },
            {
              key: 'queueFor',
              value: function queueFor(e, t) {
                var _this20 = this;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : R;
                var r = s.getComparisonKey(e);
                var i = this.a.get(r);
                if (!i) {
                  i = new J1();
                  var n = this.f++,
                    a = oe.once(i.onDrained)(function () {
                      var _i6, _this20$d, _this20$d2;
                      (_i6 = i) !== null && _i6 !== void 0 && _i6.dispose(),
                        _this20.a['delete'](r),
                        _this20.h(),
                        (_this20$d = _this20.d) !== null &&
                          _this20$d !== void 0 &&
                          _this20$d.deleteAndDispose(n),
                        ((_this20$d2 = _this20.d) === null || _this20$d2 === void 0
                          ? void 0
                          : _this20$d2.size) === 0 && (_this20.d.dispose(), (_this20.d = void 0));
                    });
                  this.d || (this.d = new Ks()), this.d.set(n, a), this.a.set(r, i);
                }
                return i.queue(t);
              },
            },
            {
              key: 'h',
              value: function h() {
                this.g() && this.j();
              },
            },
            {
              key: 'j',
              value: function j() {
                var _iterator35 = _createForOfIteratorHelper(this.b),
                  _step35;
                try {
                  for (_iterator35.s(); !(_step35 = _iterator35.n()).done; ) {
                    var e = _step35.value;
                    e.complete();
                  }
                } catch (err) {
                  _iterator35.e(err);
                } finally {
                  _iterator35.f();
                }
                this.b.clear();
              },
            },
            {
              key: 'dispose',
              value: function dispose() {
                var _this$d2;
                var _iterator36 = _createForOfIteratorHelper(this.a),
                  _step36;
                try {
                  for (_iterator36.s(); !(_step36 = _iterator36.n()).done; ) {
                    var _step36$value = _slicedToArray(_step36.value, 2),
                      e = _step36$value[1];
                    e.dispose();
                  }
                } catch (err) {
                  _iterator36.e(err);
                } finally {
                  _iterator36.f();
                }
                this.a.clear(),
                  this.j(),
                  (_this$d2 = this.d) === null || _this$d2 === void 0 ? void 0 : _this$d2.dispose();
              },
            },
          ]);
        })()),
        (K1 = /*#__PURE__*/ (function () {
          function K1(e, t) {
            _classCallCheck(this, K1);
            (this.b = -1), (this.a = e), (this.d = t), (this.f = this.g.bind(this));
          }
          return _createClass(K1, [
            {
              key: 'dispose',
              value: function dispose() {
                this.cancel(), (this.a = null);
              },
            },
            {
              key: 'cancel',
              value: function cancel() {
                this.isScheduled() && (clearTimeout(this.b), (this.b = -1));
              },
            },
            {
              key: 'schedule',
              value: function schedule() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.d;
                this.cancel(), (this.b = setTimeout(this.f, e));
              },
            },
            {
              key: 'delay',
              get: function get() {
                return this.d;
              },
              set: function set(e) {
                this.d = e;
              },
            },
            {
              key: 'isScheduled',
              value: function isScheduled() {
                return this.b !== -1;
              },
            },
            {
              key: 'flush',
              value: function flush() {
                this.isScheduled() && (this.cancel(), this.h());
              },
            },
            {
              key: 'g',
              value: function g() {
                (this.b = -1), this.a && this.h();
              },
            },
            {
              key: 'h',
              value: function h() {
                var _this$a3;
                (_this$a3 = this.a) === null || _this$a3 === void 0 || _this$a3.call(this);
              },
            },
          ]);
        })()),
        (vi = /*#__PURE__*/ (function (_K3) {
          function vi(e, t) {
            var _this21;
            _classCallCheck(this, vi);
            (_this21 = _callSuper(this, vi, [e, t])), (_this21.j = []);
            return _this21;
          }
          _inherits(vi, _K3);
          return _createClass(vi, [
            {
              key: 'work',
              value: function work(e) {
                this.j.push(e), this.isScheduled() || this.schedule();
              },
            },
            {
              key: 'h',
              value: function h() {
                var _this$a4;
                var e = this.j;
                (this.j = []),
                  (_this$a4 = this.a) === null || _this$a4 === void 0
                    ? void 0
                    : _this$a4.call(this, e);
              },
            },
            {
              key: 'dispose',
              value: function dispose() {
                (this.j = []), _superPropGet(vi, 'dispose', this, 3)([]);
              },
            },
          ]);
        })(K1)),
        (Ei = /*#__PURE__*/ (function (_Ee) {
          function Ei(e, t) {
            var _this22;
            _classCallCheck(this, Ei);
            (_this22 = _callSuper(this, Ei)),
              (_this22.h = e),
              (_this22.j = t),
              (_this22.a = []),
              (_this22.b = _this22.B(new A1())),
              (_this22.f = !1),
              (_this22.g = 0);
            return _this22;
          }
          _inherits(Ei, _Ee);
          return _createClass(Ei, [
            {
              key: 'pending',
              get: function get() {
                return this.a.length;
              },
            },
            {
              key: 'work',
              value: function work(e) {
                if (this.f) return !1;
                if (typeof this.h.maxBufferedWork == 'number') {
                  if (this.b.value) {
                    if (this.pending + e.length > this.h.maxBufferedWork) return !1;
                  } else if (
                    this.pending + e.length - this.h.maxWorkChunkSize >
                    this.h.maxBufferedWork
                  )
                    return !1;
                }
                var _iterator37 = _createForOfIteratorHelper(e),
                  _step37;
                try {
                  for (_iterator37.s(); !(_step37 = _iterator37.n()).done; ) {
                    var s = _step37.value;
                    this.a.push(s);
                  }
                } catch (err) {
                  _iterator37.e(err);
                } finally {
                  _iterator37.f();
                }
                var t = Date.now() - this.g;
                return (
                  !this.b.value &&
                  (!this.h.waitThrottleDelayBetweenWorkUnits || t >= this.h.throttleDelay)
                    ? this.m()
                    : !this.b.value &&
                      this.h.waitThrottleDelayBetweenWorkUnits &&
                      this.r(Math.max(this.h.throttleDelay - t, 0)),
                  !0
                );
              },
            },
            {
              key: 'm',
              value: function m() {
                (this.g = Date.now()),
                  this.j(this.a.splice(0, this.h.maxWorkChunkSize)),
                  this.a.length > 0 && this.r();
              },
            },
            {
              key: 'r',
              value: function r() {
                var _this23 = this;
                var e =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : this.h.throttleDelay;
                (this.b.value = new K1(function () {
                  _this23.b.clear(), _this23.m();
                }, e)),
                  this.b.value.schedule();
              },
            },
            {
              key: 'dispose',
              value: function dispose() {
                _superPropGet(Ei, 'dispose', this, 3)([]), (this.f = !0);
              },
            },
          ]);
        })(Ee)),
        (function () {
          typeof globalThis.requestIdleCallback != 'function' ||
          typeof globalThis.cancelIdleCallback != 'function'
            ? (Q1 = function Q1(e, t, s) {
                Sr(function () {
                  if (r) return;
                  var i = Date.now() + 15;
                  t(
                    Object.freeze({
                      didTimeout: !0,
                      timeRemaining: function timeRemaining() {
                        return Math.max(0, i - Date.now());
                      },
                    })
                  );
                });
                var r = !1;
                return {
                  dispose: function dispose() {
                    r || (r = !0);
                  },
                };
              })
            : (Q1 = function Q1(e, t, s) {
                var r = e.requestIdleCallback(
                  t,
                  typeof s == 'number'
                    ? {
                        timeout: s,
                      }
                    : void 0
                );
                var i = !1;
                return {
                  dispose: function dispose() {
                    i || ((i = !0), e.cancelIdleCallback(r));
                  },
                };
              }),
            (x2 = function x2(e, t) {
              return Q1(globalThis, e, t);
            });
        })(),
        (function (e) {
          (e[(e.Resolved = 0)] = 'Resolved'), (e[(e.Rejected = 1)] = 'Rejected');
        })(_i || (_i = {})),
        (Y1 = /*#__PURE__*/ (function () {
          function Y1() {
            var _this24 = this;
            _classCallCheck(this, Y1);
            this.p = new Promise(function (e, t) {
              (_this24.a = e), (_this24.b = t);
            });
          }
          return _createClass(Y1, [
            {
              key: 'isRejected',
              get: function get() {
                var _this$d3;
                return (
                  ((_this$d3 = this.d) === null || _this$d3 === void 0
                    ? void 0
                    : _this$d3.outcome) === 1
                );
              },
            },
            {
              key: 'isResolved',
              get: function get() {
                var _this$d4;
                return (
                  ((_this$d4 = this.d) === null || _this$d4 === void 0
                    ? void 0
                    : _this$d4.outcome) === 0
                );
              },
            },
            {
              key: 'isSettled',
              get: function get() {
                return !!this.d;
              },
            },
            {
              key: 'value',
              get: function get() {
                var _this$d5, _this$d6;
                return ((_this$d5 = this.d) === null || _this$d5 === void 0
                  ? void 0
                  : _this$d5.outcome) === 0
                  ? (_this$d6 = this.d) === null || _this$d6 === void 0
                    ? void 0
                    : _this$d6.value
                  : void 0;
              },
            },
            {
              key: 'complete',
              value: function complete(e) {
                var _this25 = this;
                return new Promise(function (t) {
                  _this25.a(e),
                    (_this25.d = {
                      outcome: 0,
                      value: e,
                    }),
                    t();
                });
              },
            },
            {
              key: 'error',
              value: function error(e) {
                var _this26 = this;
                return new Promise(function (t) {
                  _this26.b(e),
                    (_this26.d = {
                      outcome: 1,
                      value: e,
                    }),
                    t();
                });
              },
            },
            {
              key: 'cancel',
              value: function cancel() {
                return this.error(new st());
              },
            },
          ]);
        })()),
        (function (e) {
          function t(_x2) {
            return _t3.apply(this, arguments);
          }
          function _t3() {
            _t3 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee5(r) {
                var i, n;
                return _regeneratorRuntime().wrap(function _callee5$(_context17) {
                  while (1)
                    switch ((_context17.prev = _context17.next)) {
                      case 0:
                        _context17.next = 2;
                        return Promise.all(
                          r.map(function (a) {
                            return a.then(
                              function (o) {
                                return o;
                              },
                              function (o) {
                                i || (i = o);
                              }
                            );
                          })
                        );
                      case 2:
                        n = _context17.sent;
                        if (!(_typeof(i) < 'u')) {
                          _context17.next = 5;
                          break;
                        }
                        throw i;
                      case 5:
                        return _context17.abrupt('return', n);
                      case 6:
                      case 'end':
                        return _context17.stop();
                    }
                }, _callee5);
              })
            );
            return _t3.apply(this, arguments);
          }
          e.settled = t;
          function s(r) {
            return new Promise(
              /*#__PURE__*/ (function () {
                var _ref9 = _asyncToGenerator(
                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(i, n) {
                    return _regeneratorRuntime().wrap(
                      function _callee4$(_context16) {
                        while (1)
                          switch ((_context16.prev = _context16.next)) {
                            case 0:
                              _context16.prev = 0;
                              _context16.next = 3;
                              return r(i, n);
                            case 3:
                              _context16.next = 8;
                              break;
                            case 5:
                              _context16.prev = 5;
                              _context16.t0 = _context16['catch'](0);
                              n(_context16.t0);
                            case 8:
                            case 'end':
                              return _context16.stop();
                          }
                      },
                      _callee4,
                      null,
                      [[0, 5]]
                    );
                  })
                );
                return function (_x3, _x4) {
                  return _ref9.apply(this, arguments);
                };
              })()
            );
          }
          e.withAsyncBody = s;
        })(Ci || (Ci = {})),
        (function (e) {
          (e[(e.Initial = 0)] = 'Initial'),
            (e[(e.DoneOK = 1)] = 'DoneOK'),
            (e[(e.DoneError = 2)] = 'DoneError');
        })($i || ($i = {})),
        (L2 =
          ((_ne = /*#__PURE__*/ (function () {
            function ne(t, s) {
              var _this27 = this;
              _classCallCheck(this, ne);
              (this.a = 0),
                (this.b = []),
                (this.d = null),
                (this.f = s),
                (this.g = new ae()),
                queueMicrotask(
                  /*#__PURE__*/ _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee6() {
                      var r;
                      return _regeneratorRuntime().wrap(
                        function _callee6$(_context18) {
                          while (1)
                            switch ((_context18.prev = _context18.next)) {
                              case 0:
                                r = {
                                  emitOne: function emitOne(i) {
                                    return _this27.h(i);
                                  },
                                  emitMany: function emitMany(i) {
                                    return _this27.j(i);
                                  },
                                  reject: function reject(i) {
                                    return _this27.l(i);
                                  },
                                };
                                _context18.prev = 1;
                                _context18.next = 4;
                                return Promise.resolve(t(r));
                              case 4:
                                _this27.k();
                                _context18.next = 10;
                                break;
                              case 7:
                                _context18.prev = 7;
                                _context18.t0 = _context18['catch'](1);
                                _this27.l(_context18.t0);
                              case 10:
                                _context18.prev = 10;
                                (r.emitOne = void 0), (r.emitMany = void 0), (r.reject = void 0);
                                return _context18.finish(10);
                              case 13:
                              case 'end':
                                return _context18.stop();
                            }
                        },
                        _callee6,
                        null,
                        [[1, 7, 10, 13]]
                      );
                    })
                  )
                );
            }
            return _createClass(
              ne,
              [
                {
                  key: Symbol.asyncIterator,
                  value: function value() {
                    var _this28 = this;
                    var t = 0;
                    return {
                      next: (function () {
                        var _next2 = _asyncToGenerator(
                          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee7() {
                            return _regeneratorRuntime().wrap(function _callee7$(_context19) {
                              while (1)
                                switch ((_context19.prev = _context19.next)) {
                                  case 0:
                                    if (!(_this28.a === 2)) {
                                      _context19.next = 2;
                                      break;
                                    }
                                    throw _this28.d;
                                  case 2:
                                    if (!(t < _this28.b.length)) {
                                      _context19.next = 4;
                                      break;
                                    }
                                    return _context19.abrupt('return', {
                                      done: !1,
                                      value: _this28.b[t++],
                                    });
                                  case 4:
                                    if (!(_this28.a === 1)) {
                                      _context19.next = 6;
                                      break;
                                    }
                                    return _context19.abrupt('return', {
                                      done: !0,
                                      value: void 0,
                                    });
                                  case 6:
                                    _context19.next = 8;
                                    return oe.toPromise(_this28.g.event);
                                  case 8:
                                    if (!0) {
                                      _context19.next = 0;
                                      break;
                                    }
                                  case 9:
                                  case 'end':
                                    return _context19.stop();
                                }
                            }, _callee7);
                          })
                        );
                        function next() {
                          return _next2.apply(this, arguments);
                        }
                        return next;
                      })(),
                      return: (function () {
                        var _return2 = _asyncToGenerator(
                          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee8() {
                            var _this28$f;
                            return _regeneratorRuntime().wrap(function _callee8$(_context20) {
                              while (1)
                                switch ((_context20.prev = _context20.next)) {
                                  case 0:
                                    return _context20.abrupt(
                                      'return',
                                      ((_this28$f = _this28.f) !== null &&
                                        _this28$f !== void 0 &&
                                        _this28$f.call(_this28),
                                      {
                                        done: !0,
                                        value: void 0,
                                      })
                                    );
                                  case 1:
                                  case 'end':
                                    return _context20.stop();
                                }
                            }, _callee8);
                          })
                        );
                        function _return() {
                          return _return2.apply(this, arguments);
                        }
                        return _return;
                      })(),
                    };
                  },
                },
                {
                  key: 'map',
                  value: function map(t) {
                    return ne.map(this, t);
                  },
                },
                {
                  key: 'filter',
                  value: function filter(t) {
                    return ne.filter(this, t);
                  },
                },
                {
                  key: 'coalesce',
                  value: function coalesce() {
                    return ne.coalesce(this);
                  },
                },
                {
                  key: 'toPromise',
                  value: function toPromise() {
                    return ne.toPromise(this);
                  },
                },
                {
                  key: 'h',
                  value: function h(t) {
                    this.a === 0 && (this.b.push(t), this.g.fire());
                  },
                },
                {
                  key: 'j',
                  value: function j(t) {
                    this.a === 0 && ((this.b = this.b.concat(t)), this.g.fire());
                  },
                },
                {
                  key: 'k',
                  value: function k() {
                    this.a === 0 && ((this.a = 1), this.g.fire());
                  },
                },
                {
                  key: 'l',
                  value: function l(t) {
                    this.a === 0 && ((this.a = 2), (this.d = t), this.g.fire());
                  },
                },
              ],
              [
                {
                  key: 'fromArray',
                  value: function fromArray(t) {
                    return new ne(function (s) {
                      s.emitMany(t);
                    });
                  },
                },
                {
                  key: 'fromPromise',
                  value: function fromPromise(t) {
                    return new ne(
                      /*#__PURE__*/ (function () {
                        var _ref11 = _asyncToGenerator(
                          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee9(s) {
                            return _regeneratorRuntime().wrap(function _callee9$(_context21) {
                              while (1)
                                switch ((_context21.prev = _context21.next)) {
                                  case 0:
                                    _context21.t0 = s;
                                    _context21.next = 3;
                                    return t;
                                  case 3:
                                    _context21.t1 = _context21.sent;
                                    _context21.t0.emitMany.call(_context21.t0, _context21.t1);
                                  case 5:
                                  case 'end':
                                    return _context21.stop();
                                }
                            }, _callee9);
                          })
                        );
                        return function (_x5) {
                          return _ref11.apply(this, arguments);
                        };
                      })()
                    );
                  },
                },
                {
                  key: 'fromPromisesResolveOrder',
                  value: function fromPromisesResolveOrder(t) {
                    return new ne(
                      /*#__PURE__*/ (function () {
                        var _ref12 = _asyncToGenerator(
                          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee11(s) {
                            return _regeneratorRuntime().wrap(function _callee11$(_context23) {
                              while (1)
                                switch ((_context23.prev = _context23.next)) {
                                  case 0:
                                    _context23.next = 2;
                                    return Promise.all(
                                      t.map(
                                        /*#__PURE__*/ (function () {
                                          var _ref13 = _asyncToGenerator(
                                            /*#__PURE__*/ _regeneratorRuntime().mark(
                                              function _callee10(r) {
                                                return _regeneratorRuntime().wrap(
                                                  function _callee10$(_context22) {
                                                    while (1)
                                                      switch ((_context22.prev = _context22.next)) {
                                                        case 0:
                                                          _context22.t0 = s;
                                                          _context22.next = 3;
                                                          return r;
                                                        case 3:
                                                          _context22.t1 = _context22.sent;
                                                          return _context22.abrupt(
                                                            'return',
                                                            _context22.t0.emitOne.call(
                                                              _context22.t0,
                                                              _context22.t1
                                                            )
                                                          );
                                                        case 5:
                                                        case 'end':
                                                          return _context22.stop();
                                                      }
                                                  },
                                                  _callee10
                                                );
                                              }
                                            )
                                          );
                                          return function (_x7) {
                                            return _ref13.apply(this, arguments);
                                          };
                                        })()
                                      )
                                    );
                                  case 2:
                                  case 'end':
                                    return _context23.stop();
                                }
                            }, _callee11);
                          })
                        );
                        return function (_x6) {
                          return _ref12.apply(this, arguments);
                        };
                      })()
                    );
                  },
                },
                {
                  key: 'merge',
                  value: function merge(t) {
                    return new ne(
                      /*#__PURE__*/ (function () {
                        var _ref14 = _asyncToGenerator(
                          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee13(s) {
                            return _regeneratorRuntime().wrap(function _callee13$(_context25) {
                              while (1)
                                switch ((_context25.prev = _context25.next)) {
                                  case 0:
                                    _context25.next = 2;
                                    return Promise.all(
                                      t.map(
                                        /*#__PURE__*/ (function () {
                                          var _ref15 = _asyncToGenerator(
                                            /*#__PURE__*/ _regeneratorRuntime().mark(
                                              function _callee12(r) {
                                                var _iteratorAbruptCompletion2,
                                                  _didIteratorError2,
                                                  _iteratorError2,
                                                  _iterator2,
                                                  _step2,
                                                  i;
                                                return _regeneratorRuntime().wrap(
                                                  function _callee12$(_context24) {
                                                    while (1)
                                                      switch ((_context24.prev = _context24.next)) {
                                                        case 0:
                                                          _iteratorAbruptCompletion2 = false;
                                                          _didIteratorError2 = false;
                                                          _context24.prev = 2;
                                                          _iterator2 = _asyncIterator(r);
                                                        case 4:
                                                          _context24.next = 6;
                                                          return _iterator2.next();
                                                        case 6:
                                                          if (
                                                            !(_iteratorAbruptCompletion2 =
                                                              !(_step2 = _context24.sent).done)
                                                          ) {
                                                            _context24.next = 12;
                                                            break;
                                                          }
                                                          i = _step2.value;
                                                          s.emitOne(i);
                                                        case 9:
                                                          _iteratorAbruptCompletion2 = false;
                                                          _context24.next = 4;
                                                          break;
                                                        case 12:
                                                          _context24.next = 18;
                                                          break;
                                                        case 14:
                                                          _context24.prev = 14;
                                                          _context24.t0 = _context24['catch'](2);
                                                          _didIteratorError2 = true;
                                                          _iteratorError2 = _context24.t0;
                                                        case 18:
                                                          _context24.prev = 18;
                                                          _context24.prev = 19;
                                                          if (
                                                            !(
                                                              _iteratorAbruptCompletion2 &&
                                                              _iterator2['return'] != null
                                                            )
                                                          ) {
                                                            _context24.next = 23;
                                                            break;
                                                          }
                                                          _context24.next = 23;
                                                          return _iterator2['return']();
                                                        case 23:
                                                          _context24.prev = 23;
                                                          if (!_didIteratorError2) {
                                                            _context24.next = 26;
                                                            break;
                                                          }
                                                          throw _iteratorError2;
                                                        case 26:
                                                          return _context24.finish(23);
                                                        case 27:
                                                          return _context24.finish(18);
                                                        case 28:
                                                        case 'end':
                                                          return _context24.stop();
                                                      }
                                                  },
                                                  _callee12,
                                                  null,
                                                  [
                                                    [2, 14, 18, 28],
                                                    [19, , 23, 27],
                                                  ]
                                                );
                                              }
                                            )
                                          );
                                          return function (_x9) {
                                            return _ref15.apply(this, arguments);
                                          };
                                        })()
                                      )
                                    );
                                  case 2:
                                  case 'end':
                                    return _context25.stop();
                                }
                            }, _callee13);
                          })
                        );
                        return function (_x8) {
                          return _ref14.apply(this, arguments);
                        };
                      })()
                    );
                  },
                },
                {
                  key: 'map',
                  value: function map(t, s) {
                    return new ne(
                      /*#__PURE__*/ (function () {
                        var _ref16 = _asyncToGenerator(
                          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee14(r) {
                            var _iteratorAbruptCompletion3,
                              _didIteratorError3,
                              _iteratorError3,
                              _iterator3,
                              _step3,
                              i;
                            return _regeneratorRuntime().wrap(
                              function _callee14$(_context26) {
                                while (1)
                                  switch ((_context26.prev = _context26.next)) {
                                    case 0:
                                      _iteratorAbruptCompletion3 = false;
                                      _didIteratorError3 = false;
                                      _context26.prev = 2;
                                      _iterator3 = _asyncIterator(t);
                                    case 4:
                                      _context26.next = 6;
                                      return _iterator3.next();
                                    case 6:
                                      if (
                                        !(_iteratorAbruptCompletion3 = !(_step3 = _context26.sent)
                                          .done)
                                      ) {
                                        _context26.next = 12;
                                        break;
                                      }
                                      i = _step3.value;
                                      r.emitOne(s(i));
                                    case 9:
                                      _iteratorAbruptCompletion3 = false;
                                      _context26.next = 4;
                                      break;
                                    case 12:
                                      _context26.next = 18;
                                      break;
                                    case 14:
                                      _context26.prev = 14;
                                      _context26.t0 = _context26['catch'](2);
                                      _didIteratorError3 = true;
                                      _iteratorError3 = _context26.t0;
                                    case 18:
                                      _context26.prev = 18;
                                      _context26.prev = 19;
                                      if (
                                        !(
                                          _iteratorAbruptCompletion3 && _iterator3['return'] != null
                                        )
                                      ) {
                                        _context26.next = 23;
                                        break;
                                      }
                                      _context26.next = 23;
                                      return _iterator3['return']();
                                    case 23:
                                      _context26.prev = 23;
                                      if (!_didIteratorError3) {
                                        _context26.next = 26;
                                        break;
                                      }
                                      throw _iteratorError3;
                                    case 26:
                                      return _context26.finish(23);
                                    case 27:
                                      return _context26.finish(18);
                                    case 28:
                                    case 'end':
                                      return _context26.stop();
                                  }
                              },
                              _callee14,
                              null,
                              [
                                [2, 14, 18, 28],
                                [19, , 23, 27],
                              ]
                            );
                          })
                        );
                        return function (_x10) {
                          return _ref16.apply(this, arguments);
                        };
                      })()
                    );
                  },
                },
                {
                  key: 'filter',
                  value: function filter(t, s) {
                    return new ne(
                      /*#__PURE__*/ (function () {
                        var _ref17 = _asyncToGenerator(
                          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee15(r) {
                            var _iteratorAbruptCompletion4,
                              _didIteratorError4,
                              _iteratorError4,
                              _iterator4,
                              _step4,
                              i;
                            return _regeneratorRuntime().wrap(
                              function _callee15$(_context27) {
                                while (1)
                                  switch ((_context27.prev = _context27.next)) {
                                    case 0:
                                      _iteratorAbruptCompletion4 = false;
                                      _didIteratorError4 = false;
                                      _context27.prev = 2;
                                      _iterator4 = _asyncIterator(t);
                                    case 4:
                                      _context27.next = 6;
                                      return _iterator4.next();
                                    case 6:
                                      if (
                                        !(_iteratorAbruptCompletion4 = !(_step4 = _context27.sent)
                                          .done)
                                      ) {
                                        _context27.next = 12;
                                        break;
                                      }
                                      i = _step4.value;
                                      s(i) && r.emitOne(i);
                                    case 9:
                                      _iteratorAbruptCompletion4 = false;
                                      _context27.next = 4;
                                      break;
                                    case 12:
                                      _context27.next = 18;
                                      break;
                                    case 14:
                                      _context27.prev = 14;
                                      _context27.t0 = _context27['catch'](2);
                                      _didIteratorError4 = true;
                                      _iteratorError4 = _context27.t0;
                                    case 18:
                                      _context27.prev = 18;
                                      _context27.prev = 19;
                                      if (
                                        !(
                                          _iteratorAbruptCompletion4 && _iterator4['return'] != null
                                        )
                                      ) {
                                        _context27.next = 23;
                                        break;
                                      }
                                      _context27.next = 23;
                                      return _iterator4['return']();
                                    case 23:
                                      _context27.prev = 23;
                                      if (!_didIteratorError4) {
                                        _context27.next = 26;
                                        break;
                                      }
                                      throw _iteratorError4;
                                    case 26:
                                      return _context27.finish(23);
                                    case 27:
                                      return _context27.finish(18);
                                    case 28:
                                    case 'end':
                                      return _context27.stop();
                                  }
                              },
                              _callee15,
                              null,
                              [
                                [2, 14, 18, 28],
                                [19, , 23, 27],
                              ]
                            );
                          })
                        );
                        return function (_x11) {
                          return _ref17.apply(this, arguments);
                        };
                      })()
                    );
                  },
                },
                {
                  key: 'coalesce',
                  value: function coalesce(t) {
                    return ne.filter(t, function (s) {
                      return !!s;
                    });
                  },
                },
                {
                  key: 'toPromise',
                  value: (function () {
                    var _toPromise = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee16(t) {
                        var s,
                          _iteratorAbruptCompletion5,
                          _didIteratorError5,
                          _iteratorError5,
                          _iterator5,
                          _step5,
                          r;
                        return _regeneratorRuntime().wrap(
                          function _callee16$(_context28) {
                            while (1)
                              switch ((_context28.prev = _context28.next)) {
                                case 0:
                                  s = [];
                                  _iteratorAbruptCompletion5 = false;
                                  _didIteratorError5 = false;
                                  _context28.prev = 3;
                                  _iterator5 = _asyncIterator(t);
                                case 5:
                                  _context28.next = 7;
                                  return _iterator5.next();
                                case 7:
                                  if (
                                    !(_iteratorAbruptCompletion5 = !(_step5 = _context28.sent).done)
                                  ) {
                                    _context28.next = 13;
                                    break;
                                  }
                                  r = _step5.value;
                                  s.push(r);
                                case 10:
                                  _iteratorAbruptCompletion5 = false;
                                  _context28.next = 5;
                                  break;
                                case 13:
                                  _context28.next = 19;
                                  break;
                                case 15:
                                  _context28.prev = 15;
                                  _context28.t0 = _context28['catch'](3);
                                  _didIteratorError5 = true;
                                  _iteratorError5 = _context28.t0;
                                case 19:
                                  _context28.prev = 19;
                                  _context28.prev = 20;
                                  if (
                                    !(_iteratorAbruptCompletion5 && _iterator5['return'] != null)
                                  ) {
                                    _context28.next = 24;
                                    break;
                                  }
                                  _context28.next = 24;
                                  return _iterator5['return']();
                                case 24:
                                  _context28.prev = 24;
                                  if (!_didIteratorError5) {
                                    _context28.next = 27;
                                    break;
                                  }
                                  throw _iteratorError5;
                                case 27:
                                  return _context28.finish(24);
                                case 28:
                                  return _context28.finish(19);
                                case 29:
                                  return _context28.abrupt('return', s);
                                case 30:
                                case 'end':
                                  return _context28.stop();
                              }
                          },
                          _callee16,
                          null,
                          [
                            [3, 15, 19, 29],
                            [20, , 24, 28],
                          ]
                        );
                      })
                    );
                    function toPromise(_x12) {
                      return _toPromise.apply(this, arguments);
                    }
                    return toPromise;
                  })(),
                },
              ]
            );
          })()),
          (_ne.EMPTY = _ne.fromArray([])),
          _ne));
    },
  });
function Z1(e) {
  return N2(e, 'NFC', Ai);
}
function N2(e, t, s) {
  if (!e) return e;
  var r = s.get(e);
  if (r) return r;
  var i;
  return Oi.test(e) ? (i = e.normalize(t)) : (i = e), s.set(e, i), i;
}
var Ai,
  k2,
  Oi,
  Si = C({
    'out-build/vs/base/common/normalization.js':
      function outBuild_vs_base_common_normalizationJs() {
        'use strict';

        _1(), (Ai = new Tt(1e4)), (k2 = new Tt(1e4)), (Oi = /[^\u0000-\u0080]/);
      },
  });
function Di(_x13) {
  return _Di.apply(this, arguments);
}
function _Di() {
  _Di = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee33(e) {
      var t,
        s,
        _args46 = arguments;
      return _regeneratorRuntime().wrap(function _callee33$(_context46) {
        while (1)
          switch ((_context46.prev = _context46.next)) {
            case 0:
              t = _args46.length > 1 && _args46[1] !== undefined ? _args46[1] : yt.UNLINK;
              s = _args46.length > 2 ? _args46[2] : undefined;
              if (!o2(e)) {
                _context46.next = 4;
                break;
              }
              throw new Error('rimraf - will refuse to recursively delete root');
            case 4:
              return _context46.abrupt('return', t === yt.UNLINK ? X1(e) : T2(e, s));
            case 5:
            case 'end':
              return _context46.stop();
          }
      }, _callee33);
    })
  );
  return _Di.apply(this, arguments);
}
function T2(_x14) {
  return _T2.apply(this, arguments);
}
function _T2() {
  _T2 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee34(e) {
      var t,
        _args47 = arguments;
      return _regeneratorRuntime().wrap(
        function _callee34$(_context47) {
          while (1)
            switch ((_context47.prev = _context47.next)) {
              case 0:
                t =
                  _args47.length > 1 && _args47[1] !== undefined
                    ? _args47[1]
                    : mt((0, _os.tmpdir)());
                _context47.prev = 1;
                _context47.prev = 2;
                _context47.next = 5;
                return k.promises.rename(e, t);
              case 5:
                _context47.next = 10;
                break;
              case 7:
                _context47.prev = 7;
                _context47.t0 = _context47['catch'](2);
                return _context47.abrupt(
                  'return',
                  _context47.t0.code === 'ENOENT' ? void 0 : X1(e)
                );
              case 10:
                X1(t)['catch'](function (s) {});
                _context47.next = 17;
                break;
              case 13:
                _context47.prev = 13;
                _context47.t1 = _context47['catch'](1);
                if (!(_context47.t1.code !== 'ENOENT')) {
                  _context47.next = 17;
                  break;
                }
                throw _context47.t1;
              case 17:
              case 'end':
                return _context47.stop();
            }
        },
        _callee34,
        null,
        [
          [1, 13],
          [2, 7],
        ]
      );
    })
  );
  return _T2.apply(this, arguments);
}
function X1(_x15) {
  return _X.apply(this, arguments);
}
function _X() {
  _X = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee35(e) {
      return _regeneratorRuntime().wrap(function _callee35$(_context48) {
        while (1)
          switch ((_context48.prev = _context48.next)) {
            case 0:
              return _context48.abrupt(
                'return',
                k.promises.rm(e, {
                  recursive: !0,
                  force: !0,
                  maxRetries: 3,
                })
              );
            case 1:
            case 'end':
              return _context48.stop();
          }
      }, _callee35);
    })
  );
  return _X.apply(this, arguments);
}
function Zt(_x16, _x17) {
  return _Zt.apply(this, arguments);
}
function _Zt() {
  _Zt = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee36(e, t) {
      return _regeneratorRuntime().wrap(function _callee36$(_context49) {
        while (1)
          switch ((_context49.prev = _context49.next)) {
            case 0:
              _context49.t0 = j2;
              _context49.next = 3;
              return t ? I2(e) : k.promises.readdir(e);
            case 3:
              _context49.t1 = _context49.sent;
              return _context49.abrupt('return', (0, _context49.t0)(_context49.t1));
            case 5:
            case 'end':
              return _context49.stop();
          }
      }, _callee36);
    })
  );
  return _Zt.apply(this, arguments);
}
function I2(_x18) {
  return _I.apply(this, arguments);
}
function _I() {
  _I = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee37(e) {
      var t, s, _iterator58, _step58, _loop3;
      return _regeneratorRuntime().wrap(
        function _callee37$(_context51) {
          while (1)
            switch ((_context51.prev = _context51.next)) {
              case 0:
                _context51.prev = 0;
                _context51.next = 3;
                return k.promises.readdir(e, {
                  withFileTypes: !0,
                });
              case 3:
                return _context51.abrupt('return', _context51.sent);
              case 6:
                _context51.prev = 6;
                _context51.t0 = _context51['catch'](0);
                console.warn(
                  '[node.js fs] readdir with filetypes failed with error: ',
                  _context51.t0
                );
              case 9:
                t = [];
                _context51.next = 12;
                return Zt(e);
              case 12:
                s = _context51.sent;
                _iterator58 = _createForOfIteratorHelper(s);
                _context51.prev = 14;
                _loop3 = /*#__PURE__*/ _regeneratorRuntime().mark(function _loop3() {
                  var r, i, n, a, o;
                  return _regeneratorRuntime().wrap(
                    function _loop3$(_context50) {
                      while (1)
                        switch ((_context50.prev = _context50.next)) {
                          case 0:
                            r = _step58.value;
                            (i = !1), (n = !1), (a = !1);
                            _context50.prev = 2;
                            _context50.next = 5;
                            return k.promises.lstat(re(e, r));
                          case 5:
                            o = _context50.sent;
                            (i = o.isFile()), (n = o.isDirectory()), (a = o.isSymbolicLink());
                            _context50.next = 12;
                            break;
                          case 9:
                            _context50.prev = 9;
                            _context50.t0 = _context50['catch'](2);
                            console.warn(
                              '[node.js fs] unexpected error from lstat after readdir: ',
                              _context50.t0
                            );
                          case 12:
                            t.push({
                              name: r,
                              isFile: function isFile() {
                                return i;
                              },
                              isDirectory: function isDirectory() {
                                return n;
                              },
                              isSymbolicLink: function isSymbolicLink() {
                                return a;
                              },
                            });
                          case 13:
                          case 'end':
                            return _context50.stop();
                        }
                    },
                    _loop3,
                    null,
                    [[2, 9]]
                  );
                });
                _iterator58.s();
              case 17:
                if ((_step58 = _iterator58.n()).done) {
                  _context51.next = 21;
                  break;
                }
                return _context51.delegateYield(_loop3(), 't1', 19);
              case 19:
                _context51.next = 17;
                break;
              case 21:
                _context51.next = 26;
                break;
              case 23:
                _context51.prev = 23;
                _context51.t2 = _context51['catch'](14);
                _iterator58.e(_context51.t2);
              case 26:
                _context51.prev = 26;
                _iterator58.f();
                return _context51.finish(26);
              case 29:
                return _context51.abrupt('return', t);
              case 30:
              case 'end':
                return _context51.stop();
            }
        },
        _callee37,
        null,
        [
          [0, 6],
          [14, 23, 26, 29],
        ]
      );
    })
  );
  return _I.apply(this, arguments);
}
function j2(e) {
  return e.map(function (t) {
    return typeof t == 'string' ? (Fe ? Z1(t) : t) : ((t.name = Fe ? Z1(t.name) : t.name), t);
  });
}
function F2(_x19) {
  return _F.apply(this, arguments);
}
function _F() {
  _F = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee38(e) {
      var t, s, _iterator59, _step59, r;
      return _regeneratorRuntime().wrap(
        function _callee38$(_context52) {
          while (1)
            switch ((_context52.prev = _context52.next)) {
              case 0:
                _context52.next = 2;
                return Zt(e);
              case 2:
                t = _context52.sent;
                s = [];
                _iterator59 = _createForOfIteratorHelper(t);
                _context52.prev = 5;
                _iterator59.s();
              case 7:
                if ((_step59 = _iterator59.n()).done) {
                  _context52.next = 16;
                  break;
                }
                r = _step59.value;
                _context52.next = 11;
                return vt.existsDirectory(re(e, r));
              case 11:
                _context52.t0 = _context52.sent;
                if (!_context52.t0) {
                  _context52.next = 14;
                  break;
                }
                s.push(r);
              case 14:
                _context52.next = 7;
                break;
              case 16:
                _context52.next = 21;
                break;
              case 18:
                _context52.prev = 18;
                _context52.t1 = _context52['catch'](5);
                _iterator59.e(_context52.t1);
              case 21:
                _context52.prev = 21;
                _iterator59.f();
                return _context52.finish(21);
              case 24:
                return _context52.abrupt('return', s);
              case 25:
              case 'end':
                return _context52.stop();
            }
        },
        _callee38,
        null,
        [[5, 18, 21, 24]]
      );
    })
  );
  return _F.apply(this, arguments);
}
function Pi(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e3;
  return new Promise(function (s) {
    var r = !1;
    var i = setInterval(function () {
      r ||
        ((r = !0),
        k.access(e, function (n) {
          (r = !1), n && (clearInterval(i), s(void 0));
        }));
    }, t);
  });
}
function M2(e, t, s) {
  return Ti.queueFor(
    K.file(e),
    function () {
      var r = Li(s);
      return new Promise(function (i, n) {
        return U2(e, t, r, function (a) {
          return a ? n(a) : i();
        });
      });
    },
    pi
  );
}
function xi(e) {
  Xt = e;
}
function U2(e, t, s, r) {
  if (!Xt)
    return k.writeFile(
      e,
      t,
      {
        mode: s.mode,
        flag: s.flag,
      },
      r
    );
  k.open(e, s.flag, s.mode, function (i, n) {
    if (i) return r(i);
    k.writeFile(n, t, function (a) {
      if (a)
        return k.close(n, function () {
          return r(a);
        });
      k.fdatasync(n, function (o) {
        return (
          o &&
            (console.warn(
              '[node.js fs] fdatasync is now disabled for this session because it failed: ',
              o
            ),
            xi(!1)),
          k.close(n, function (c) {
            return r(c);
          })
        );
      });
    });
  });
}
function Ye(e, t, s) {
  var r = Li(s);
  if (!Xt)
    return k.writeFileSync(e, t, {
      mode: r.mode,
      flag: r.flag,
    });
  var i = k.openSync(e, r.flag, r.mode);
  try {
    k.writeFileSync(i, t);
    try {
      k.fdatasyncSync(i);
    } catch (n) {
      console.warn(
        '[node.js fs] fdatasyncSync is now disabled for this session because it failed: ',
        n
      ),
        xi(!1);
    }
  } finally {
    k.closeSync(i);
  }
}
function Li(e) {
  return e
    ? {
        mode: typeof e.mode == 'number' ? e.mode : 438,
        flag: typeof e.flag == 'string' ? e.flag : 'w',
      }
    : {
        mode: 438,
        flag: 'w',
      };
}
function V2(_x20, _x21) {
  return _V.apply(this, arguments);
}
function _V() {
  _V = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee39(e, t) {
      var s,
        _args53 = arguments;
      return _regeneratorRuntime().wrap(
        function _callee39$(_context53) {
          while (1)
            switch ((_context53.prev = _context53.next)) {
              case 0:
                s = _args53.length > 2 && _args53[2] !== undefined ? _args53[2] : 6e4;
                if (!(e !== t)) {
                  _context53.next = 22;
                  break;
                }
                _context53.prev = 2;
                if (!(z && typeof s == 'number')) {
                  _context53.next = 8;
                  break;
                }
                _context53.next = 6;
                return Ni(e, t, Date.now(), s);
              case 6:
                _context53.next = 10;
                break;
              case 8:
                _context53.next = 10;
                return k.promises.rename(e, t);
              case 10:
                _context53.next = 22;
                break;
              case 12:
                _context53.prev = 12;
                _context53.t0 = _context53['catch'](2);
                if (
                  !(
                    (e.toLowerCase() !== t.toLowerCase() && _context53.t0.code === 'EXDEV') ||
                    e.endsWith('.')
                  )
                ) {
                  _context53.next = 21;
                  break;
                }
                _context53.next = 17;
                return ki(e, t, {
                  preserveSymlinks: !1,
                });
              case 17:
                _context53.next = 19;
                return Di(e, yt.MOVE);
              case 19:
                _context53.next = 22;
                break;
              case 21:
                throw _context53.t0;
              case 22:
              case 'end':
                return _context53.stop();
            }
        },
        _callee39,
        null,
        [[2, 12]]
      );
    })
  );
  return _V.apply(this, arguments);
}
function Ni(_x22, _x23, _x24, _x25) {
  return _Ni.apply(this, arguments);
}
function _Ni() {
  _Ni = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee40(e, t, s, r) {
      var i,
        a,
        _yield$vt$stat,
        o,
        _args54 = arguments;
      return _regeneratorRuntime().wrap(
        function _callee40$(_context54) {
          while (1)
            switch ((_context54.prev = _context54.next)) {
              case 0:
                i = _args54.length > 4 && _args54[4] !== undefined ? _args54[4] : 0;
                _context54.prev = 1;
                _context54.next = 4;
                return k.promises.rename(e, t);
              case 4:
                return _context54.abrupt('return', _context54.sent);
              case 7:
                _context54.prev = 7;
                _context54.t0 = _context54['catch'](1);
                if (
                  !(
                    _context54.t0.code !== 'EACCES' &&
                    _context54.t0.code !== 'EPERM' &&
                    _context54.t0.code !== 'EBUSY'
                  )
                ) {
                  _context54.next = 11;
                  break;
                }
                throw _context54.t0;
              case 11:
                if (!(Date.now() - s >= r)) {
                  _context54.next = 13;
                  break;
                }
                throw (
                  (console.error(
                    '[node.js fs] rename failed after '
                      .concat(i, ' retries with error: ')
                      .concat(_context54.t0)
                  ),
                  _context54.t0)
                );
              case 13:
                if (!(i === 0)) {
                  _context54.next = 27;
                  break;
                }
                a = !1;
                _context54.prev = 15;
                _context54.next = 18;
                return vt.stat(t);
              case 18:
                _yield$vt$stat = _context54.sent;
                o = _yield$vt$stat.stat;
                o.isFile() || (a = !0);
                _context54.next = 25;
                break;
              case 23:
                _context54.prev = 23;
                _context54.t1 = _context54['catch'](15);
              case 25:
                if (!a) {
                  _context54.next = 27;
                  break;
                }
                throw _context54.t0;
              case 27:
                _context54.next = 29;
                return bi(Math.min(100, i * 10));
              case 29:
                return _context54.abrupt('return', Ni(e, t, s, r, i + 1));
              case 30:
              case 'end':
                return _context54.stop();
            }
        },
        _callee40,
        null,
        [
          [1, 7],
          [15, 23],
        ]
      );
    })
  );
  return _Ni.apply(this, arguments);
}
function ki(_x26, _x27, _x28) {
  return _ki.apply(this, arguments);
}
function _ki() {
  _ki = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee41(e, t, s) {
      return _regeneratorRuntime().wrap(function _callee41$(_context55) {
        while (1)
          switch ((_context55.prev = _context55.next)) {
            case 0:
              return _context55.abrupt(
                'return',
                Ri(e, t, {
                  root: {
                    source: e,
                    target: t,
                  },
                  options: s,
                  handledSourcePaths: new Set(),
                })
              );
            case 1:
            case 'end':
              return _context55.stop();
          }
      }, _callee41);
    })
  );
  return _ki.apply(this, arguments);
}
function Ri(_x29, _x30, _x31) {
  return _Ri.apply(this, arguments);
}
function _Ri() {
  _Ri = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee42(e, t, s) {
      var _yield$vt$stat2, r, i;
      return _regeneratorRuntime().wrap(
        function _callee42$(_context56) {
          while (1)
            switch ((_context56.prev = _context56.next)) {
              case 0:
                if (!s.handledSourcePaths.has(e)) {
                  _context56.next = 2;
                  break;
                }
                return _context56.abrupt('return');
              case 2:
                s.handledSourcePaths.add(e);
                _context56.next = 5;
                return vt.stat(e);
              case 5:
                _yield$vt$stat2 = _context56.sent;
                r = _yield$vt$stat2.stat;
                i = _yield$vt$stat2.symbolicLink;
                if (!i) {
                  _context56.next = 20;
                  break;
                }
                if (!s.options.preserveSymlinks) {
                  _context56.next = 18;
                  break;
                }
                _context56.prev = 10;
                _context56.next = 13;
                return B2(e, t, s);
              case 13:
                return _context56.abrupt('return', _context56.sent);
              case 16:
                _context56.prev = 16;
                _context56.t0 = _context56['catch'](10);
              case 18:
                if (!i.dangling) {
                  _context56.next = 20;
                  break;
                }
                return _context56.abrupt('return');
              case 20:
                return _context56.abrupt(
                  'return',
                  r.isDirectory() ? W2(e, t, r.mode & es, s) : q2(e, t, r.mode & es)
                );
              case 21:
              case 'end':
                return _context56.stop();
            }
        },
        _callee42,
        null,
        [[10, 16]]
      );
    })
  );
  return _Ri.apply(this, arguments);
}
function W2(_x32, _x33, _x34, _x35) {
  return _W.apply(this, arguments);
}
function _W() {
  _W = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee43(e, t, s, r) {
      var i, _iterator60, _step60, n;
      return _regeneratorRuntime().wrap(
        function _callee43$(_context57) {
          while (1)
            switch ((_context57.prev = _context57.next)) {
              case 0:
                _context57.next = 2;
                return k.promises.mkdir(t, {
                  recursive: !0,
                  mode: s,
                });
              case 2:
                _context57.next = 4;
                return Zt(e);
              case 4:
                i = _context57.sent;
                _iterator60 = _createForOfIteratorHelper(i);
                _context57.prev = 6;
                _iterator60.s();
              case 8:
                if ((_step60 = _iterator60.n()).done) {
                  _context57.next = 14;
                  break;
                }
                n = _step60.value;
                _context57.next = 12;
                return Ri(re(e, n), re(t, n), r);
              case 12:
                _context57.next = 8;
                break;
              case 14:
                _context57.next = 19;
                break;
              case 16:
                _context57.prev = 16;
                _context57.t0 = _context57['catch'](6);
                _iterator60.e(_context57.t0);
              case 19:
                _context57.prev = 19;
                _iterator60.f();
                return _context57.finish(19);
              case 22:
              case 'end':
                return _context57.stop();
            }
        },
        _callee43,
        null,
        [[6, 16, 19, 22]]
      );
    })
  );
  return _W.apply(this, arguments);
}
function q2(_x36, _x37, _x38) {
  return _q2.apply(this, arguments);
}
function _q2() {
  _q2 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee44(e, t, s) {
      return _regeneratorRuntime().wrap(function _callee44$(_context58) {
        while (1)
          switch ((_context58.prev = _context58.next)) {
            case 0:
              _context58.next = 2;
              return k.promises.copyFile(e, t);
            case 2:
              _context58.next = 4;
              return k.promises.chmod(t, s);
            case 4:
            case 'end':
              return _context58.stop();
          }
      }, _callee44);
    })
  );
  return _q2.apply(this, arguments);
}
function B2(_x39, _x40, _x41) {
  return _B.apply(this, arguments);
}
function _B() {
  _B = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee45(e, t, s) {
      var r;
      return _regeneratorRuntime().wrap(function _callee45$(_context59) {
        while (1)
          switch ((_context59.prev = _context59.next)) {
            case 0:
              _context59.next = 2;
              return k.promises.readlink(e);
            case 2:
              r = _context59.sent;
              gt(r, s.root.source, !_e) &&
                (r = re(s.root.target, r.substr(s.root.source.length + 1)));
              _context59.next = 6;
              return k.promises.symlink(r, t);
            case 6:
            case 'end':
              return _context59.stop();
          }
      }, _callee45);
    })
  );
  return _B.apply(this, arguments);
}
var yt,
  vt,
  Ti,
  Xt,
  es,
  ve,
  ts = C({
    'out-build/vs/base/node/pfs.js': function outBuild_vs_base_node_pfsJs() {
      'use strict';

      bt(),
        qe(),
        Si(),
        le(),
        Y(),
        H1(),
        ze(),
        (function (e) {
          (e[(e.UNLINK = 0)] = 'UNLINK'), (e[(e.MOVE = 1)] = 'MOVE');
        })(yt || (yt = {})),
        (function (e) {
          function t(_x42) {
            return _t4.apply(this, arguments);
          }
          function _t4() {
            _t4 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee17(i) {
                var n, _n3;
                return _regeneratorRuntime().wrap(
                  function _callee17$(_context29) {
                    while (1)
                      switch ((_context29.prev = _context29.next)) {
                        case 0:
                          _context29.prev = 0;
                          _context29.next = 3;
                          return k.promises.lstat(i);
                        case 3:
                          n = _context29.sent;
                          if (n.isSymbolicLink()) {
                            _context29.next = 6;
                            break;
                          }
                          return _context29.abrupt('return', {
                            stat: n,
                          });
                        case 6:
                          _context29.next = 10;
                          break;
                        case 8:
                          _context29.prev = 8;
                          _context29.t0 = _context29['catch'](0);
                        case 10:
                          _context29.prev = 10;
                          _context29.next = 13;
                          return k.promises.stat(i);
                        case 13:
                          _context29.t1 = _context29.sent;
                          _context29.t2 =
                            (_n3 = n) !== null && _n3 !== void 0 && _n3.isSymbolicLink()
                              ? {
                                  dangling: !1,
                                }
                              : void 0;
                          return _context29.abrupt('return', {
                            stat: _context29.t1,
                            symbolicLink: _context29.t2,
                          });
                        case 18:
                          _context29.prev = 18;
                          _context29.t3 = _context29['catch'](10);
                          if (!(_context29.t3.code === 'ENOENT' && n)) {
                            _context29.next = 22;
                            break;
                          }
                          return _context29.abrupt('return', {
                            stat: n,
                            symbolicLink: {
                              dangling: !0,
                            },
                          });
                        case 22:
                          if (!(z && _context29.t3.code === 'EACCES')) {
                            _context29.next = 40;
                            break;
                          }
                          _context29.prev = 23;
                          _context29.t4 = k.promises;
                          _context29.next = 27;
                          return k.promises.readlink(i);
                        case 27:
                          _context29.t5 = _context29.sent;
                          _context29.next = 30;
                          return _context29.t4.stat.call(_context29.t4, _context29.t5);
                        case 30:
                          _context29.t6 = _context29.sent;
                          _context29.t7 = {
                            dangling: !1,
                          };
                          return _context29.abrupt('return', {
                            stat: _context29.t6,
                            symbolicLink: _context29.t7,
                          });
                        case 35:
                          _context29.prev = 35;
                          _context29.t8 = _context29['catch'](23);
                          if (!(_context29.t8.code === 'ENOENT' && n)) {
                            _context29.next = 39;
                            break;
                          }
                          return _context29.abrupt('return', {
                            stat: n,
                            symbolicLink: {
                              dangling: !0,
                            },
                          });
                        case 39:
                          throw _context29.t8;
                        case 40:
                          throw _context29.t3;
                        case 41:
                        case 'end':
                          return _context29.stop();
                      }
                  },
                  _callee17,
                  null,
                  [
                    [0, 8],
                    [10, 18],
                    [23, 35],
                  ]
                );
              })
            );
            return _t4.apply(this, arguments);
          }
          e.stat = t;
          function s(_x43) {
            return _s4.apply(this, arguments);
          }
          function _s4() {
            _s4 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee18(i) {
                var _yield$e$stat, n, a;
                return _regeneratorRuntime().wrap(
                  function _callee18$(_context30) {
                    while (1)
                      switch ((_context30.prev = _context30.next)) {
                        case 0:
                          _context30.prev = 0;
                          _context30.next = 3;
                          return e.stat(i);
                        case 3:
                          _yield$e$stat = _context30.sent;
                          n = _yield$e$stat.stat;
                          a = _yield$e$stat.symbolicLink;
                          return _context30.abrupt(
                            'return',
                            n.isFile() && (a === null || a === void 0 ? void 0 : a.dangling) !== !0
                          );
                        case 9:
                          _context30.prev = 9;
                          _context30.t0 = _context30['catch'](0);
                        case 11:
                          return _context30.abrupt('return', !1);
                        case 12:
                        case 'end':
                          return _context30.stop();
                      }
                  },
                  _callee18,
                  null,
                  [[0, 9]]
                );
              })
            );
            return _s4.apply(this, arguments);
          }
          e.existsFile = s;
          function r(_x44) {
            return _r9.apply(this, arguments);
          }
          function _r9() {
            _r9 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee19(i) {
                var _yield$e$stat2, n, a;
                return _regeneratorRuntime().wrap(
                  function _callee19$(_context31) {
                    while (1)
                      switch ((_context31.prev = _context31.next)) {
                        case 0:
                          _context31.prev = 0;
                          _context31.next = 3;
                          return e.stat(i);
                        case 3:
                          _yield$e$stat2 = _context31.sent;
                          n = _yield$e$stat2.stat;
                          a = _yield$e$stat2.symbolicLink;
                          return _context31.abrupt(
                            'return',
                            n.isDirectory() &&
                              (a === null || a === void 0 ? void 0 : a.dangling) !== !0
                          );
                        case 9:
                          _context31.prev = 9;
                          _context31.t0 = _context31['catch'](0);
                        case 11:
                          return _context31.abrupt('return', !1);
                        case 12:
                        case 'end':
                          return _context31.stop();
                      }
                  },
                  _callee19,
                  null,
                  [[0, 9]]
                );
              })
            );
            return _r9.apply(this, arguments);
          }
          e.existsDirectory = r;
        })(vt || (vt = {})),
        (Ti = new yi()),
        (Xt = !0),
        (es = 511),
        (ve = new /*#__PURE__*/ ((function () {
          function _class3() {
            _classCallCheck(this, _class3);
          }
          return _createClass(_class3, [
            {
              key: 'read',
              get: function get() {
                return function (e, t, s, r, i) {
                  return new Promise(function (n, a) {
                    k.read(e, t, s, r, i, function (o, c, l) {
                      return o
                        ? a(o)
                        : n({
                            bytesRead: c,
                            buffer: l,
                          });
                    });
                  });
                };
              },
            },
            {
              key: 'write',
              get: function get() {
                return function (e, t, s, r, i) {
                  return new Promise(function (n, a) {
                    k.write(e, t, s, r, i, function (o, c, l) {
                      return o
                        ? a(o)
                        : n({
                            bytesWritten: c,
                            buffer: l,
                          });
                    });
                  });
                };
              },
            },
            {
              key: 'fdatasync',
              get: function get() {
                return (0, _util.promisify)(k.fdatasync);
              },
            },
            {
              key: 'open',
              get: function get() {
                return (0, _util.promisify)(k.open);
              },
            },
            {
              key: 'close',
              get: function get() {
                return (0, _util.promisify)(k.close);
              },
            },
            {
              key: 'realpath',
              get: function get() {
                return (0, _util.promisify)(k.realpath);
              },
            },
            {
              key: 'ftruncate',
              get: function get() {
                return (0, _util.promisify)(k.ftruncate);
              },
            },
            {
              key: 'exists',
              value: (function () {
                var _exists = _asyncToGenerator(
                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee20(e) {
                    return _regeneratorRuntime().wrap(
                      function _callee20$(_context32) {
                        while (1)
                          switch ((_context32.prev = _context32.next)) {
                            case 0:
                              _context32.prev = 0;
                              _context32.next = 3;
                              return k.promises.access(e);
                            case 3:
                              return _context32.abrupt('return', !0);
                            case 6:
                              _context32.prev = 6;
                              _context32.t0 = _context32['catch'](0);
                              return _context32.abrupt('return', !1);
                            case 9:
                            case 'end':
                              return _context32.stop();
                          }
                      },
                      _callee20,
                      null,
                      [[0, 6]]
                    );
                  })
                );
                function exists(_x45) {
                  return _exists.apply(this, arguments);
                }
                return exists;
              })(),
            },
            {
              key: 'readdir',
              get: function get() {
                return Zt;
              },
            },
            {
              key: 'readDirsInDir',
              get: function get() {
                return F2;
              },
            },
            {
              key: 'writeFile',
              get: function get() {
                return M2;
              },
            },
            {
              key: 'rm',
              get: function get() {
                return Di;
              },
            },
            {
              key: 'rename',
              get: function get() {
                return V2;
              },
            },
            {
              key: 'copy',
              get: function get() {
                return ki;
              },
            },
          ]);
        })())());
    },
  });
function ss(e, t, s) {
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var i = !1;
  return new Promise(function (n) {
    var a = setTimeout(function () {
      if (!i) return (i = !0), n(0);
    }, s);
    rs(e, t, r, function (o) {
      if (!i) return (i = !0), clearTimeout(a), n(o);
    });
  });
}
function rs(e, t, s, r) {
  if (t === 0) return r(0);
  var i = new z2.Socket();
  i.once('connect', function () {
    return Ii(i), rs(e + s, t - 1, s, r);
  }),
    i.once('data', function () {}),
    i.once('error', function (n) {
      return Ii(i), n.code !== 'ECONNREFUSED' ? rs(e + s, t - 1, s, r) : r(e);
    }),
    i.connect(e, '127.0.0.1');
}
function Ii(e) {
  try {
    e.removeAllListeners('connect'), e.removeAllListeners('error'), e.end(), e.destroy(), e.unref();
  } catch (t) {
    console.error(t);
  }
}
var H2 = C({
  'out-build/vs/base/node/ports.js': function outBuild_vs_base_node_portsJs() {
    'use strict';
  },
});
function G2(_x46) {
  return _G.apply(this, arguments);
}
function _G() {
  _G = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee46(e) {
      var s;
      return _regeneratorRuntime().wrap(
        function _callee46$(_context60) {
          while (1)
            switch ((_context60.prev = _context60.next)) {
              case 0:
                _context60.prev = 0;
                _context60.next = 3;
                return ve.realpath(e);
              case 3:
                return _context60.abrupt('return', _context60.sent);
              case 6:
                _context60.prev = 6;
                _context60.t0 = _context60['catch'](0);
                s = J2(e);
                _context60.next = 11;
                return ji.promises.access(s, ji.constants.R_OK);
              case 11:
                return _context60.abrupt('return', s);
              case 12:
              case 'end':
                return _context60.stop();
            }
        },
        _callee46,
        null,
        [[0, 6]]
      );
    })
  );
  return _G.apply(this, arguments);
}
function J2(e) {
  return Zo(zt(e), ce);
}
var K2 = C({
  'out-build/vs/base/node/extpath.js': function outBuild_vs_base_node_extpathJs() {
    'use strict';

    le(), Y(), We(), ts();
  },
});
function Fi(e, t) {
  switch (e) {
    case 0:
      return '';
    case 1:
      return ''.concat(_t, '*?');
    default:
      return '(?:'
        .concat(Et, '|')
        .concat(_t, '+')
        .concat(Et)
        .concat(t ? '|'.concat(Et).concat(_t, '+') : '', ')*?');
  }
}
function Mi(e, t) {
  if (!e) return [];
  var s = [];
  var r = !1,
    i = !1,
    n = '';
  var _iterator38 = _createForOfIteratorHelper(e),
    _step38;
  try {
    for (_iterator38.s(); !(_step38 = _iterator38.n()).done; ) {
      var a = _step38.value;
      switch (a) {
        case t:
          if (!r && !i) {
            s.push(n), (n = '');
            continue;
          }
          break;
        case '{':
          r = !0;
          break;
        case '}':
          r = !1;
          break;
        case '[':
          i = !0;
          break;
        case ']':
          i = !1;
          break;
      }
      n += a;
    }
  } catch (err) {
    _iterator38.e(err);
  } finally {
    _iterator38.f();
  }
  return n && s.push(n), s;
}
function Ui(e) {
  if (!e) return '';
  var t = '';
  var s = Mi(e, os);
  if (
    s.every(function (r) {
      return r === Ze;
    })
  )
    t = '.*';
  else {
    var r = !1;
    s.forEach(function (i, n) {
      if (i === Ze) {
        if (r) return;
        t += Fi(2, n === s.length - 1);
      } else {
        var a = !1,
          o = '',
          c = !1,
          l = '';
        var _iterator39 = _createForOfIteratorHelper(i),
          _step39;
        try {
          for (_iterator39.s(); !(_step39 = _iterator39.n()).done; ) {
            var f = _step39.value;
            if (f !== '}' && a) {
              o += f;
              continue;
            }
            if (c && (f !== ']' || !l)) {
              var u = void 0;
              f === '-'
                ? (u = f)
                : (f === '^' || f === '!') && !l
                  ? (u = '^')
                  : f === os
                    ? (u = '')
                    : (u = Wr(f)),
                (l += u);
              continue;
            }
            switch (f) {
              case '{':
                a = !0;
                continue;
              case '[':
                c = !0;
                continue;
              case '}': {
                var h = '(?:'.concat(
                  Mi(o, ',')
                    .map(function (d) {
                      return Ui(d);
                    })
                    .join('|'),
                  ')'
                );
                (t += h), (a = !1), (o = '');
                break;
              }
              case ']': {
                (t += '[' + l + ']'), (c = !1), (l = '');
                break;
              }
              case '?':
                t += _t;
                continue;
              case '*':
                t += Fi(1);
                continue;
              default:
                t += Wr(f);
            }
          }
        } catch (err) {
          _iterator39.e(err);
        } finally {
          _iterator39.f();
        }
        n < s.length - 1 && (s[n + 1] !== Ze || n + 2 < s.length) && (t += Et);
      }
      r = i === Ze;
    });
  }
  return t;
}
function is(e, t) {
  if (!e) return ge;
  var s;
  typeof e != 'string' ? (s = e.pattern) : (s = e), (s = s.trim());
  var r = ''.concat(s, '_').concat(!!t.trimForExclusions);
  var i = as.get(r);
  if (i) return Vi(i, e);
  var n;
  return (
    zi.test(s)
      ? (i = Q2(s.substr(4), s))
      : (n = Hi.exec(ns(s, t)))
        ? (i = Y2(n[1], s))
        : (t.trimForExclusions ? Ji : Gi).test(s)
          ? (i = Z2(s, t))
          : (n = Ki.exec(ns(s, t)))
            ? (i = Wi(n[1].substr(1), s, !0))
            : (n = Qi.exec(ns(s, t)))
              ? (i = Wi(n[1], s, !1))
              : (i = X2(s)),
    as.set(r, i),
    Vi(i, e)
  );
}
function Vi(e, t) {
  if (typeof t == 'string') return e;
  var s = function s(r, i) {
    return gt(r, t.base, !_e) ? e(Yo(r.substr(t.base.length), ce), i) : null;
  };
  return (
    (s.allBasenames = e.allBasenames),
    (s.allPaths = e.allPaths),
    (s.basenames = e.basenames),
    (s.patterns = e.patterns),
    s
  );
}
function ns(e, t) {
  return t.trimForExclusions && e.endsWith('/**') ? e.substr(0, e.length - 2) : e;
}
function Q2(e, t) {
  return function (s, r) {
    return typeof s == 'string' && s.endsWith(e) ? t : null;
  };
}
function Y2(e, t) {
  var s = '/'.concat(e),
    r = '\\'.concat(e),
    i = function i(a, o) {
      return typeof a != 'string'
        ? null
        : o
          ? o === e
            ? t
            : null
          : a === e || a.endsWith(s) || a.endsWith(r)
            ? t
            : null;
    },
    n = [e];
  return (i.basenames = n), (i.patterns = [t]), (i.allBasenames = n), i;
}
function Z2(e, t) {
  var s = qi(
      e
        .slice(1, -1)
        .split(',')
        .map(function (o) {
          return is(o, t);
        })
        .filter(function (o) {
          return o !== ge;
        }),
      e
    ),
    r = s.length;
  if (!r) return ge;
  if (r === 1) return s[0];
  var i = function i(o, c) {
      for (var l = 0, f = s.length; l < f; l++) if (s[l](o, c)) return e;
      return null;
    },
    n = s.find(function (o) {
      return !!o.allBasenames;
    });
  n && (i.allBasenames = n.allBasenames);
  var a = s.reduce(function (o, c) {
    return c.allPaths ? o.concat(c.allPaths) : o;
  }, []);
  return a.length && (i.allPaths = a), i;
}
function Wi(e, t, s) {
  var r = ce === T.sep,
    i = r ? e : e.replace(Bi, ce),
    n = ce + i,
    a = T.sep + e;
  var o;
  return (
    s
      ? (o = function o(c, l) {
          return typeof c == 'string' &&
            (c === i || c.endsWith(n) || (!r && (c === e || c.endsWith(a))))
            ? t
            : null;
        })
      : (o = function o(c, l) {
          return typeof c == 'string' && (c === i || (!r && c === e)) ? t : null;
        }),
    (o.allPaths = [(s ? '*/' : './') + e]),
    o
  );
}
function X2(e) {
  try {
    var t = new RegExp('^'.concat(Ui(e), '$'));
    return function (s) {
      return (t.lastIndex = 0), typeof s == 'string' && t.test(s) ? e : null;
    };
  } catch (_unused9) {
    return ge;
  }
}
function e0(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!e) return cs;
  if (typeof e == 'string' || t0(e)) {
    var s = is(e, t);
    if (s === ge) return cs;
    var r = function r(i, n) {
      return !!s(i, n);
    };
    return (
      s.allBasenames && (r.allBasenames = s.allBasenames),
      s.allPaths && (r.allPaths = s.allPaths),
      r
    );
  }
  return s0(e, t);
}
function t0(e) {
  var t = e;
  return t ? typeof t.base == 'string' && typeof t.pattern == 'string' : !1;
}
function s0(e, t) {
  var s = qi(
      Object.getOwnPropertyNames(e)
        .map(function (o) {
          return r0(o, e[o], t);
        })
        .filter(function (o) {
          return o !== ge;
        })
    ),
    r = s.length;
  if (!r) return ge;
  if (
    !s.some(function (o) {
      return !!o.requiresSiblings;
    })
  ) {
    if (r === 1) return s[0];
    var o = function o(f, u) {
        var h;
        for (var d = 0, p = s.length; d < p; d++) {
          var y = s[d](f, u);
          if (typeof y == 'string') return y;
          G1(y) && (h || (h = []), h.push(y));
        }
        return h
          ? _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee21() {
                var _iterator40, _step40, _d, _p2;
                return _regeneratorRuntime().wrap(
                  function _callee21$(_context33) {
                    while (1)
                      switch ((_context33.prev = _context33.next)) {
                        case 0:
                          _iterator40 = _createForOfIteratorHelper(h);
                          _context33.prev = 1;
                          _iterator40.s();
                        case 3:
                          if ((_step40 = _iterator40.n()).done) {
                            _context33.next = 12;
                            break;
                          }
                          _d = _step40.value;
                          _context33.next = 7;
                          return _d;
                        case 7:
                          _p2 = _context33.sent;
                          if (!(typeof _p2 == 'string')) {
                            _context33.next = 10;
                            break;
                          }
                          return _context33.abrupt('return', _p2);
                        case 10:
                          _context33.next = 3;
                          break;
                        case 12:
                          _context33.next = 17;
                          break;
                        case 14:
                          _context33.prev = 14;
                          _context33.t0 = _context33['catch'](1);
                          _iterator40.e(_context33.t0);
                        case 17:
                          _context33.prev = 17;
                          _iterator40.f();
                          return _context33.finish(17);
                        case 20:
                          return _context33.abrupt('return', null);
                        case 21:
                        case 'end':
                          return _context33.stop();
                      }
                  },
                  _callee21,
                  null,
                  [[1, 14, 17, 20]]
                );
              })
            )()
          : null;
      },
      c = s.find(function (f) {
        return !!f.allBasenames;
      });
    c && (o.allBasenames = c.allBasenames);
    var l = s.reduce(function (f, u) {
      return u.allPaths ? f.concat(u.allPaths) : f;
    }, []);
    return l.length && (o.allPaths = l), o;
  }
  var i = function i(o, c, l) {
      var f, u;
      for (var h = 0, d = s.length; h < d; h++) {
        var p = s[h];
        p.requiresSiblings &&
          l &&
          (c || (c = ht(o)), f || (f = c.substr(0, c.length - Ur(o).length)));
        var y = p(o, c, f, l);
        if (typeof y == 'string') return y;
        G1(y) && (u || (u = []), u.push(y));
      }
      return u
        ? _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee22() {
              var _iterator41, _step41, _h2, _d2;
              return _regeneratorRuntime().wrap(
                function _callee22$(_context34) {
                  while (1)
                    switch ((_context34.prev = _context34.next)) {
                      case 0:
                        _iterator41 = _createForOfIteratorHelper(u);
                        _context34.prev = 1;
                        _iterator41.s();
                      case 3:
                        if ((_step41 = _iterator41.n()).done) {
                          _context34.next = 12;
                          break;
                        }
                        _h2 = _step41.value;
                        _context34.next = 7;
                        return _h2;
                      case 7:
                        _d2 = _context34.sent;
                        if (!(typeof _d2 == 'string')) {
                          _context34.next = 10;
                          break;
                        }
                        return _context34.abrupt('return', _d2);
                      case 10:
                        _context34.next = 3;
                        break;
                      case 12:
                        _context34.next = 17;
                        break;
                      case 14:
                        _context34.prev = 14;
                        _context34.t0 = _context34['catch'](1);
                        _iterator41.e(_context34.t0);
                      case 17:
                        _context34.prev = 17;
                        _iterator41.f();
                        return _context34.finish(17);
                      case 20:
                        return _context34.abrupt('return', null);
                      case 21:
                      case 'end':
                        return _context34.stop();
                    }
                },
                _callee22,
                null,
                [[1, 14, 17, 20]]
              );
            })
          )()
        : null;
    },
    n = s.find(function (o) {
      return !!o.allBasenames;
    });
  n && (i.allBasenames = n.allBasenames);
  var a = s.reduce(function (o, c) {
    return c.allPaths ? o.concat(c.allPaths) : o;
  }, []);
  return a.length && (i.allPaths = a), i;
}
function r0(e, t, s) {
  if (t === !1) return ge;
  var r = is(e, s);
  if (r === ge) return ge;
  if (typeof t == 'boolean') return r;
  if (t) {
    var i = t.when;
    if (typeof i == 'string') {
      var n = function n(a, o, c, l) {
        if (!l || !r(a, o)) return null;
        var f = i.replace('$(basename)', function () {
            return c;
          }),
          u = l(f);
        return G1(u)
          ? u.then(function (h) {
              return h ? e : null;
            })
          : u
            ? e
            : null;
      };
      return (n.requiresSiblings = !0), n;
    }
  }
  return r;
}
function qi(e, t) {
  var s = e.filter(function (o) {
    return !!o.basenames;
  });
  if (s.length < 2) return e;
  var r = s.reduce(function (o, c) {
    var l = c.basenames;
    return l ? o.concat(l) : o;
  }, []);
  var i;
  if (t) {
    i = [];
    for (var o = 0, c = r.length; o < c; o++) i.push(t);
  } else
    i = s.reduce(function (o, c) {
      var l = c.patterns;
      return l ? o.concat(l) : o;
    }, []);
  var n = function n(o, c) {
    if (typeof o != 'string') return null;
    if (!c) {
      var f;
      for (f = o.length; f > 0; f--) {
        var u = o.charCodeAt(f - 1);
        if (u === 47 || u === 92) break;
      }
      c = o.substr(f);
    }
    var l = r.indexOf(c);
    return l !== -1 ? i[l] : null;
  };
  (n.basenames = r), (n.patterns = i), (n.allBasenames = r);
  var a = e.filter(function (o) {
    return !o.basenames;
  });
  return a.push(n), a;
}
var Ze,
  os,
  Et,
  _t,
  Bi,
  zi,
  Hi,
  Gi,
  Ji,
  Ki,
  Qi,
  as,
  cs,
  ge,
  i0 = C({
    'out-build/vs/base/common/glob.js': function outBuild_vs_base_common_globJs() {
      'use strict';

      v1(),
        bt(),
        qe(),
        _1(),
        le(),
        Y(),
        We(),
        (Ze = '**'),
        (os = '/'),
        (Et = '[/\\\\]'),
        (_t = '[^/\\\\]'),
        (Bi = /\//g),
        (zi = /^\*\*\/\*\.[\w\.-]+$/),
        (Hi = /^\*\*\/([\w\.-]+)\/?$/),
        (Gi = /^{\*\*\/\*?[\w\.-]+\/?(,\*\*\/\*?[\w\.-]+\/?)*}$/),
        (Ji = /^{\*\*\/\*?[\w\.-]+(\/(\*\*)?)?(,\*\*\/\*?[\w\.-]+(\/(\*\*)?)?)*}$/),
        (Ki = /^\*\*((\/[\w\.-]+)+)\/?$/),
        (Qi = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/),
        (as = new Tt(1e4)),
        (cs = function cs() {
          return !1;
        }),
        (ge = function ge() {
          return null;
        });
    },
  }),
  Yi,
  Zi,
  ls,
  Xi,
  en,
  Pe,
  Ct,
  tn,
  e1,
  n0 = C({
    'out-build/vs/base/common/ternarySearchTree.js':
      function outBuild_vs_base_common_ternarySearchTreeJs() {
        'use strict';

        var _Os;
        v1(),
          We(),
          (Yi = /*#__PURE__*/ (function () {
            function Yi() {
              _classCallCheck(this, Yi);
              (this.b = ''), (this.c = 0);
            }
            return _createClass(Yi, [
              {
                key: 'reset',
                value: function reset(e) {
                  return (this.b = e), (this.c = 0), this;
                },
              },
              {
                key: 'next',
                value: function next() {
                  return (this.c += 1), this;
                },
              },
              {
                key: 'hasNext',
                value: function hasNext() {
                  return this.c < this.b.length - 1;
                },
              },
              {
                key: 'cmp',
                value: function cmp(e) {
                  var t = e.charCodeAt(0),
                    s = this.b.charCodeAt(this.c);
                  return t - s;
                },
              },
              {
                key: 'value',
                value: function value() {
                  return this.b[this.c];
                },
              },
            ]);
          })()),
          (Zi = /*#__PURE__*/ (function () {
            function Zi() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
              _classCallCheck(this, Zi);
              this.e = e;
            }
            return _createClass(Zi, [
              {
                key: 'reset',
                value: function reset(e) {
                  return (this.b = e), (this.c = 0), (this.d = 0), this.next();
                },
              },
              {
                key: 'hasNext',
                value: function hasNext() {
                  return this.d < this.b.length;
                },
              },
              {
                key: 'next',
                value: function next() {
                  this.c = this.d;
                  var e = !0;
                  for (; this.d < this.b.length; this.d++)
                    if (this.b.charCodeAt(this.d) === 46) {
                      if (e) this.c++;
                      else break;
                    } else e = !1;
                  return this;
                },
              },
              {
                key: 'cmp',
                value: function cmp(e) {
                  return this.e
                    ? j1(e, this.b, 0, e.length, this.c, this.d)
                    : pt(e, this.b, 0, e.length, this.c, this.d);
                },
              },
              {
                key: 'value',
                value: function value() {
                  return this.b.substring(this.c, this.d);
                },
              },
            ]);
          })()),
          (ls = /*#__PURE__*/ (function () {
            function ls() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
              _classCallCheck(this, ls);
              (this.f = e), (this.g = t);
            }
            return _createClass(ls, [
              {
                key: 'reset',
                value: function reset(e) {
                  (this.d = 0), (this.e = 0), (this.b = e), (this.c = e.length);
                  for (var t = e.length - 1; t >= 0; t--, this.c--) {
                    var s = this.b.charCodeAt(t);
                    if (!(s === 47 || (this.f && s === 92))) break;
                  }
                  return this.next();
                },
              },
              {
                key: 'hasNext',
                value: function hasNext() {
                  return this.e < this.c;
                },
              },
              {
                key: 'next',
                value: function next() {
                  this.d = this.e;
                  var e = !0;
                  for (; this.e < this.c; this.e++) {
                    var t = this.b.charCodeAt(this.e);
                    if (t === 47 || (this.f && t === 92)) {
                      if (e) this.d++;
                      else break;
                    } else e = !1;
                  }
                  return this;
                },
              },
              {
                key: 'cmp',
                value: function cmp(e) {
                  return this.g
                    ? j1(e, this.b, 0, e.length, this.d, this.e)
                    : pt(e, this.b, 0, e.length, this.d, this.e);
                },
              },
              {
                key: 'value',
                value: function value() {
                  return this.b.substring(this.d, this.e);
                },
              },
            ]);
          })()),
          (function (e) {
            (e[(e.Scheme = 1)] = 'Scheme'),
              (e[(e.Authority = 2)] = 'Authority'),
              (e[(e.Path = 3)] = 'Path'),
              (e[(e.Query = 4)] = 'Query'),
              (e[(e.Fragment = 5)] = 'Fragment');
          })(Xi || (Xi = {})),
          (en = /*#__PURE__*/ (function () {
            function en(e, t) {
              _classCallCheck(this, en);
              (this.f = e), (this.g = t), (this.d = []), (this.e = 0);
            }
            return _createClass(en, [
              {
                key: 'reset',
                value: function reset(e) {
                  return (
                    (this.c = e),
                    (this.d = []),
                    this.c.scheme && this.d.push(1),
                    this.c.authority && this.d.push(2),
                    this.c.path &&
                      ((this.b = new ls(!1, !this.f(e))),
                      this.b.reset(e.path),
                      this.b.value() && this.d.push(3)),
                    this.g(e) ||
                      (this.c.query && this.d.push(4), this.c.fragment && this.d.push(5)),
                    (this.e = 0),
                    this
                  );
                },
              },
              {
                key: 'next',
                value: function next() {
                  return (
                    this.d[this.e] === 3 && this.b.hasNext() ? this.b.next() : (this.e += 1), this
                  );
                },
              },
              {
                key: 'hasNext',
                value: function hasNext() {
                  return (this.d[this.e] === 3 && this.b.hasNext()) || this.e < this.d.length - 1;
                },
              },
              {
                key: 'cmp',
                value: function cmp(e) {
                  if (this.d[this.e] === 1) return qr(e, this.c.scheme);
                  if (this.d[this.e] === 2) return qr(e, this.c.authority);
                  if (this.d[this.e] === 3) return this.b.cmp(e);
                  if (this.d[this.e] === 4) return I1(e, this.c.query);
                  if (this.d[this.e] === 5) return I1(e, this.c.fragment);
                  throw new Error();
                },
              },
              {
                key: 'value',
                value: function value() {
                  if (this.d[this.e] === 1) return this.c.scheme;
                  if (this.d[this.e] === 2) return this.c.authority;
                  if (this.d[this.e] === 3) return this.b.value();
                  if (this.d[this.e] === 4) return this.c.query;
                  if (this.d[this.e] === 5) return this.c.fragment;
                  throw new Error();
                },
              },
            ]);
          })()),
          (Pe =
            ((_Os = /*#__PURE__*/ (function () {
              function Os() {
                _classCallCheck(this, Os);
              }
              return _createClass(Os, null, [
                {
                  key: 'wrap',
                  value: function wrap(t) {
                    return t === void 0 ? Os.Val : t;
                  },
                },
                {
                  key: 'unwrap',
                  value: function unwrap(t) {
                    return t === Os.Val ? void 0 : t;
                  },
                },
              ]);
            })()),
            (_Os.Val = Symbol('undefined_placeholder')),
            _Os)),
          (Ct = /*#__PURE__*/ (function () {
            function Ct() {
              _classCallCheck(this, Ct);
              this.height = 1;
            }
            return _createClass(Ct, [
              {
                key: 'isEmpty',
                value: function isEmpty() {
                  return !this.left && !this.mid && !this.right && this.value === void 0;
                },
              },
              {
                key: 'rotateLeft',
                value: function rotateLeft() {
                  var e = this.right;
                  return (
                    (this.right = e.left), (e.left = this), this.updateHeight(), e.updateHeight(), e
                  );
                },
              },
              {
                key: 'rotateRight',
                value: function rotateRight() {
                  var e = this.left;
                  return (
                    (this.left = e.right),
                    (e.right = this),
                    this.updateHeight(),
                    e.updateHeight(),
                    e
                  );
                },
              },
              {
                key: 'updateHeight',
                value: function updateHeight() {
                  this.height = 1 + Math.max(this.heightLeft, this.heightRight);
                },
              },
              {
                key: 'balanceFactor',
                value: function balanceFactor() {
                  return this.heightRight - this.heightLeft;
                },
              },
              {
                key: 'heightLeft',
                get: function get() {
                  var _this$left$height, _this$left;
                  return (_this$left$height =
                    (_this$left = this.left) === null || _this$left === void 0
                      ? void 0
                      : _this$left.height) !== null && _this$left$height !== void 0
                    ? _this$left$height
                    : 0;
                },
              },
              {
                key: 'heightRight',
                get: function get() {
                  var _this$right$height, _this$right;
                  return (_this$right$height =
                    (_this$right = this.right) === null || _this$right === void 0
                      ? void 0
                      : _this$right.height) !== null && _this$right$height !== void 0
                    ? _this$right$height
                    : 0;
                },
              },
            ]);
          })()),
          (function (e) {
            (e[(e.Left = -1)] = 'Left'), (e[(e.Mid = 0)] = 'Mid'), (e[(e.Right = 1)] = 'Right');
          })(tn || (tn = {})),
          (e1 = /*#__PURE__*/ (function () {
            function Dt(t) {
              _classCallCheck(this, Dt);
              this.b = t;
            }
            return _createClass(
              Dt,
              [
                {
                  key: 'clear',
                  value: function clear() {
                    this.c = void 0;
                  },
                },
                {
                  key: 'fill',
                  value: function fill(t, s) {
                    if (s) {
                      var r = s.slice(0);
                      Fs(r);
                      var _iterator42 = _createForOfIteratorHelper(r),
                        _step42;
                      try {
                        for (_iterator42.s(); !(_step42 = _iterator42.n()).done; ) {
                          var i = _step42.value;
                          this.set(i, t);
                        }
                      } catch (err) {
                        _iterator42.e(err);
                      } finally {
                        _iterator42.f();
                      }
                    } else {
                      var _r10 = t.slice(0);
                      Fs(_r10);
                      var _iterator43 = _createForOfIteratorHelper(_r10),
                        _step43;
                      try {
                        for (_iterator43.s(); !(_step43 = _iterator43.n()).done; ) {
                          var _i7 = _step43.value;
                          this.set(_i7[0], _i7[1]);
                        }
                      } catch (err) {
                        _iterator43.e(err);
                      } finally {
                        _iterator43.f();
                      }
                    }
                  },
                },
                {
                  key: 'set',
                  value: function set(t, s) {
                    var r = this.b.reset(t);
                    var i;
                    this.c || ((this.c = new Ct()), (this.c.segment = r.value()));
                    var n = [];
                    for (i = this.c; ; ) {
                      var o = r.cmp(i.segment);
                      if (o > 0)
                        i.left || ((i.left = new Ct()), (i.left.segment = r.value())),
                          n.push([-1, i]),
                          (i = i.left);
                      else if (o < 0)
                        i.right || ((i.right = new Ct()), (i.right.segment = r.value())),
                          n.push([1, i]),
                          (i = i.right);
                      else if (r.hasNext())
                        r.next(),
                          i.mid || ((i.mid = new Ct()), (i.mid.segment = r.value())),
                          n.push([0, i]),
                          (i = i.mid);
                      else break;
                    }
                    var a = Pe.unwrap(i.value);
                    (i.value = Pe.wrap(s)), (i.key = t);
                    for (var _o4 = n.length - 1; _o4 >= 0; _o4--) {
                      var c = n[_o4][1];
                      c.updateHeight();
                      var l = c.balanceFactor();
                      if (l < -1 || l > 1) {
                        var f = n[_o4][0],
                          u = n[_o4 + 1][0];
                        if (f === 1 && u === 1) n[_o4][1] = c.rotateLeft();
                        else if (f === -1 && u === -1) n[_o4][1] = c.rotateRight();
                        else if (f === 1 && u === -1)
                          (c.right = n[_o4 + 1][1] = n[_o4 + 1][1].rotateRight()),
                            (n[_o4][1] = c.rotateLeft());
                        else if (f === -1 && u === 1)
                          (c.left = n[_o4 + 1][1] = n[_o4 + 1][1].rotateLeft()),
                            (n[_o4][1] = c.rotateRight());
                        else throw new Error();
                        if (_o4 > 0)
                          switch (n[_o4 - 1][0]) {
                            case -1:
                              n[_o4 - 1][1].left = n[_o4][1];
                              break;
                            case 1:
                              n[_o4 - 1][1].right = n[_o4][1];
                              break;
                            case 0:
                              n[_o4 - 1][1].mid = n[_o4][1];
                              break;
                          }
                        else this.c = n[0][1];
                      }
                    }
                    return a;
                  },
                },
                {
                  key: 'get',
                  value: function get(t) {
                    var _this$d7;
                    return Pe.unwrap(
                      (_this$d7 = this.d(t)) === null || _this$d7 === void 0
                        ? void 0
                        : _this$d7.value
                    );
                  },
                },
                {
                  key: 'd',
                  value: function d(t) {
                    var s = this.b.reset(t);
                    var r = this.c;
                    for (; r; ) {
                      var i = s.cmp(r.segment);
                      if (i > 0) r = r.left;
                      else if (i < 0) r = r.right;
                      else if (s.hasNext()) s.next(), (r = r.mid);
                      else break;
                    }
                    return r;
                  },
                },
                {
                  key: 'has',
                  value: function has(t) {
                    var s = this.d(t);
                    return !(
                      (s === null || s === void 0 ? void 0 : s.value) === void 0 &&
                      (s === null || s === void 0 ? void 0 : s.mid) === void 0
                    );
                  },
                },
                {
                  key: 'delete',
                  value: function _delete(t) {
                    return this.e(t, !1);
                  },
                },
                {
                  key: 'deleteSuperstr',
                  value: function deleteSuperstr(t) {
                    return this.e(t, !0);
                  },
                },
                {
                  key: 'e',
                  value: function e(t, s) {
                    var r = this.b.reset(t),
                      i = [];
                    var n = this.c;
                    for (; n; ) {
                      var a = r.cmp(n.segment);
                      if (a > 0) i.push([-1, n]), (n = n.left);
                      else if (a < 0) i.push([1, n]), (n = n.right);
                      else if (r.hasNext()) r.next(), i.push([0, n]), (n = n.mid);
                      else break;
                    }
                    if (n) {
                      if (
                        (s
                          ? ((n.left = void 0),
                            (n.mid = void 0),
                            (n.right = void 0),
                            (n.height = 1))
                          : ((n.key = void 0), (n.value = void 0)),
                        !n.mid && !n.value)
                      )
                        if (n.left && n.right) {
                          var _a3 = this.f(n.right);
                          if (_a3.key) {
                            var o = _a3.key,
                              c = _a3.value,
                              l = _a3.segment;
                            this.e(_a3.key, !1), (n.key = o), (n.value = c), (n.segment = l);
                          }
                        } else {
                          var _n$left;
                          var _a4 =
                            (_n$left = n.left) !== null && _n$left !== void 0 ? _n$left : n.right;
                          if (i.length > 0) {
                            var _i8 = _slicedToArray(i[i.length - 1], 2),
                              _o5 = _i8[0],
                              _c3 = _i8[1];
                            switch (_o5) {
                              case -1:
                                _c3.left = _a4;
                                break;
                              case 0:
                                _c3.mid = _a4;
                                break;
                              case 1:
                                _c3.right = _a4;
                                break;
                            }
                          } else this.c = _a4;
                        }
                      for (var _a5 = i.length - 1; _a5 >= 0; _a5--) {
                        var _o6 = i[_a5][1];
                        _o6.updateHeight();
                        var _c4 = _o6.balanceFactor();
                        if (
                          (_c4 > 1
                            ? (_o6.right.balanceFactor() >= 0 ||
                                (_o6.right = _o6.right.rotateRight()),
                              (i[_a5][1] = _o6.rotateLeft()))
                            : _c4 < -1 &&
                              (_o6.left.balanceFactor() <= 0 || (_o6.left = _o6.left.rotateLeft()),
                              (i[_a5][1] = _o6.rotateRight())),
                          _a5 > 0)
                        )
                          switch (i[_a5 - 1][0]) {
                            case -1:
                              i[_a5 - 1][1].left = i[_a5][1];
                              break;
                            case 1:
                              i[_a5 - 1][1].right = i[_a5][1];
                              break;
                            case 0:
                              i[_a5 - 1][1].mid = i[_a5][1];
                              break;
                          }
                        else this.c = i[0][1];
                      }
                    }
                  },
                },
                {
                  key: 'f',
                  value: function f(t) {
                    for (; t.left; ) t = t.left;
                    return t;
                  },
                },
                {
                  key: 'findSubstr',
                  value: function findSubstr(t) {
                    var s = this.b.reset(t);
                    var r = this.c,
                      i;
                    for (; r; ) {
                      var n = s.cmp(r.segment);
                      if (n > 0) r = r.left;
                      else if (n < 0) r = r.right;
                      else if (s.hasNext()) s.next(), (i = Pe.unwrap(r.value) || i), (r = r.mid);
                      else break;
                    }
                    return (r && Pe.unwrap(r.value)) || i;
                  },
                },
                {
                  key: 'findSuperstr',
                  value: function findSuperstr(t) {
                    return this.g(t, !1);
                  },
                },
                {
                  key: 'g',
                  value: function g(t, s) {
                    var r = this.b.reset(t);
                    var i = this.c;
                    for (; i; ) {
                      var n = r.cmp(i.segment);
                      if (n > 0) i = i.left;
                      else if (n < 0) i = i.right;
                      else if (r.hasNext()) r.next(), (i = i.mid);
                      else return i.mid ? this.h(i.mid) : s ? Pe.unwrap(i.value) : void 0;
                    }
                  },
                },
                {
                  key: 'hasElementOrSubtree',
                  value: function hasElementOrSubtree(t) {
                    return this.g(t, !0) !== void 0;
                  },
                },
                {
                  key: 'forEach',
                  value: function forEach(t) {
                    var _iterator44 = _createForOfIteratorHelper(this),
                      _step44;
                    try {
                      for (_iterator44.s(); !(_step44 = _iterator44.n()).done; ) {
                        var _step44$value = _slicedToArray(_step44.value, 2),
                          s = _step44$value[0],
                          r = _step44$value[1];
                        t(r, s);
                      }
                    } catch (err) {
                      _iterator44.e(err);
                    } finally {
                      _iterator44.f();
                    }
                  },
                },
                {
                  key: Symbol.iterator,
                  value: /*#__PURE__*/ _regeneratorRuntime().mark(function value() {
                    return _regeneratorRuntime().wrap(
                      function value$(_context35) {
                        while (1)
                          switch ((_context35.prev = _context35.next)) {
                            case 0:
                              return _context35.delegateYield(this.h(this.c), 't0', 1);
                            case 1:
                            case 'end':
                              return _context35.stop();
                          }
                      },
                      value,
                      this
                    );
                  }),
                },
                {
                  key: 'h',
                  value: function h(t) {
                    var s = [];
                    return this.j(t, s), s[Symbol.iterator]();
                  },
                },
                {
                  key: 'j',
                  value: function j(t, s) {
                    t &&
                      (t.left && this.j(t.left, s),
                      t.value !== void 0 && s.push([t.key, Pe.unwrap(t.value)]),
                      t.mid && this.j(t.mid, s),
                      t.right && this.j(t.right, s));
                  },
                },
                {
                  key: '_isBalanced',
                  value: function _isBalanced() {
                    var _t5 = function t(s) {
                      if (!s) return !0;
                      var r = s.balanceFactor();
                      return r < -1 || r > 1 ? !1 : _t5(s.left) && _t5(s.right);
                    };
                    return _t5(this.c);
                  },
                },
              ],
              [
                {
                  key: 'forUris',
                  value: function forUris() {
                    var t =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : function () {
                            return !1;
                          };
                    var s =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : function () {
                            return !1;
                          };
                    return new Dt(new en(t, s));
                  },
                },
                {
                  key: 'forPaths',
                  value: function forPaths() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                    return new Dt(new ls(void 0, !t));
                  },
                },
                {
                  key: 'forStrings',
                  value: function forStrings() {
                    return new Dt(new Yi());
                  },
                },
                {
                  key: 'forConfigKeys',
                  value: function forConfigKeys() {
                    return new Dt(new Zi());
                  },
                },
              ]
            );
          })());
      },
  }),
  o0 = C({
    'out-build/vs/workbench/common/icubeExport.js':
      function outBuild_vs_workbench_common_icubeExportJs() {
        'use strict';
      },
  }),
  a0 = C({
    'out-build/vs/platform/instantiation/common/descriptors.js':
      function outBuild_vs_platform_instantiation_common_descriptorsJs() {
        'use strict';
      },
  });
function c0(e, t, s) {
  t[Oe.DI_TARGET] === t
    ? t[Oe.DI_DEPENDENCIES].push({
        id: e,
        index: s,
      })
    : ((t[Oe.DI_DEPENDENCIES] = [
        {
          id: e,
          index: s,
        },
      ]),
      (t[Oe.DI_TARGET] = t));
}
function t1(e) {
  if (Oe.serviceIds.has(e)) return Oe.serviceIds.get(e);
  var _t6 = function t(s, r, i) {
    if (arguments.length !== 3)
      throw new Error('@IServiceName-decorator can only be used to decorate a parameter');
    c0(_t6, s, i);
  };
  return (
    (_t6.toString = function () {
      return e;
    }),
    Oe.serviceIds.set(e, _t6),
    _t6
  );
}
var Oe,
  l0,
  sn = C({
    'out-build/vs/platform/instantiation/common/instantiation.js':
      function outBuild_vs_platform_instantiation_common_instantiationJs() {
        'use strict';

        o0(),
          a0(),
          (function (e) {
            (e.serviceIds = new Map()),
              (e.DI_TARGET = '$di$target'),
              (e.DI_DEPENDENCIES = '$di$dependencies');
            function t(s) {
              return s[e.DI_DEPENDENCIES] || [];
            }
            e.getServiceDependencies = t;
          })(Oe || (Oe = {})),
          (l0 = t1('instantiationService'));
      },
  });
function u0(e, t, s) {
  return !e || !t || e === t || t.length > e.length
    ? !1
    : (t.charAt(t.length - 1) !== ce && (t += ce), s ? Hr(e, t) : e.indexOf(t) === 0);
}
var f0,
  h0,
  rn,
  nn,
  on,
  an,
  cn,
  ln,
  un,
  d0,
  fn,
  hn,
  p0,
  g0 = C({
    'out-build/vs/platform/files/common/files.js':
      function outBuild_vs_platform_files_common_filesJs() {
        'use strict';

        var _d3, _ee;
        n0(),
          le(),
          We(),
          Rt(),
          ze(),
          Ut(),
          sn(),
          Y(),
          W1(),
          Jt(),
          (f0 = t1('fileService')),
          (h0 = t1('remoteFileService')),
          (function (e) {
            (e[(e.Unknown = 0)] = 'Unknown'),
              (e[(e.File = 1)] = 'File'),
              (e[(e.Directory = 2)] = 'Directory'),
              (e[(e.SymbolicLink = 64)] = 'SymbolicLink');
          })(rn || (rn = {})),
          (function (e) {
            (e[(e.Readonly = 1)] = 'Readonly'), (e[(e.Locked = 2)] = 'Locked');
          })(nn || (nn = {})),
          (function (e) {
            (e[(e.UPDATED = 2)] = 'UPDATED'),
              (e[(e.ADDED = 4)] = 'ADDED'),
              (e[(e.DELETED = 8)] = 'DELETED');
          })(on || (on = {})),
          (function (e) {
            (e[(e.None = 0)] = 'None'),
              (e[(e.FileReadWrite = 2)] = 'FileReadWrite'),
              (e[(e.FileOpenReadWriteClose = 4)] = 'FileOpenReadWriteClose'),
              (e[(e.FileReadStream = 16)] = 'FileReadStream'),
              (e[(e.FileFolderCopy = 8)] = 'FileFolderCopy'),
              (e[(e.PathCaseSensitive = 1024)] = 'PathCaseSensitive'),
              (e[(e.Readonly = 2048)] = 'Readonly'),
              (e[(e.Trash = 4096)] = 'Trash'),
              (e[(e.FileWriteUnlock = 8192)] = 'FileWriteUnlock'),
              (e[(e.FileAtomicRead = 16384)] = 'FileAtomicRead'),
              (e[(e.FileAtomicWrite = 32768)] = 'FileAtomicWrite'),
              (e[(e.FileAtomicDelete = 65536)] = 'FileAtomicDelete'),
              (e[(e.FileClone = 131072)] = 'FileClone');
          })(an || (an = {})),
          (function (e) {
            (e.FileExists = 'EntryExists'),
              (e.FileNotFound = 'EntryNotFound'),
              (e.FileNotADirectory = 'EntryNotADirectory'),
              (e.FileIsADirectory = 'EntryIsADirectory'),
              (e.FileExceedsStorageQuota = 'EntryExceedsStorageQuota'),
              (e.FileTooLarge = 'EntryTooLarge'),
              (e.FileWriteLocked = 'EntryWriteLocked'),
              (e.NoPermissions = 'NoPermissions'),
              (e.Unavailable = 'Unavailable'),
              (e.Unknown = 'Unknown');
          })(cn || (cn = {})),
          (function (e) {
            (e[(e.CREATE = 0)] = 'CREATE'),
              (e[(e.DELETE = 1)] = 'DELETE'),
              (e[(e.MOVE = 2)] = 'MOVE'),
              (e[(e.COPY = 3)] = 'COPY'),
              (e[(e.WRITE = 4)] = 'WRITE');
          })(ln || (ln = {})),
          (function (e) {
            (e[(e.UPDATED = 0)] = 'UPDATED'),
              (e[(e.ADDED = 1)] = 'ADDED'),
              (e[(e.DELETED = 2)] = 'DELETED');
          })(un || (un = {})),
          (d0 =
            ((_d3 = /*#__PURE__*/ (function () {
              function d1(t, s) {
                var _this29 = this;
                _classCallCheck(this, d1);
                (this.c = s),
                  (this.b = void 0),
                  (this.d = new Ve(function () {
                    var r = e1.forUris(function () {
                      return _this29.c;
                    });
                    return (
                      r.fill(
                        _this29.rawAdded.map(function (i) {
                          return [i, !0];
                        })
                      ),
                      r
                    );
                  })),
                  (this.f = new Ve(function () {
                    var r = e1.forUris(function () {
                      return _this29.c;
                    });
                    return (
                      r.fill(
                        _this29.rawUpdated.map(function (i) {
                          return [i, !0];
                        })
                      ),
                      r
                    );
                  })),
                  (this.g = new Ve(function () {
                    var r = e1.forUris(function () {
                      return _this29.c;
                    });
                    return (
                      r.fill(
                        _this29.rawDeleted.map(function (i) {
                          return [i, !0];
                        })
                      ),
                      r
                    );
                  })),
                  (this.rawAdded = []),
                  (this.rawUpdated = []),
                  (this.rawDeleted = []);
                var _iterator45 = _createForOfIteratorHelper(t),
                  _step45;
                try {
                  for (_iterator45.s(); !(_step45 = _iterator45.n()).done; ) {
                    var r = _step45.value;
                    switch (r.type) {
                      case 1:
                        this.rawAdded.push(r.resource);
                        break;
                      case 0:
                        this.rawUpdated.push(r.resource);
                        break;
                      case 2:
                        this.rawDeleted.push(r.resource);
                        break;
                    }
                    this.b !== d1.a &&
                      (typeof r.cId == 'number'
                        ? this.b === void 0
                          ? (this.b = r.cId)
                          : this.b !== r.cId && (this.b = d1.a)
                        : this.b !== void 0 && (this.b = d1.a));
                  }
                } catch (err) {
                  _iterator45.e(err);
                } finally {
                  _iterator45.f();
                }
              }
              return _createClass(d1, [
                {
                  key: 'contains',
                  value: function contains(t) {
                    for (
                      var _len8 = arguments.length,
                        s = new Array(_len8 > 1 ? _len8 - 1 : 0),
                        _key8 = 1;
                      _key8 < _len8;
                      _key8++
                    ) {
                      s[_key8 - 1] = arguments[_key8];
                    }
                    return this.h.apply(
                      this,
                      [
                        t,
                        {
                          includeChildren: !1,
                        },
                      ].concat(s)
                    );
                  },
                },
                {
                  key: 'affects',
                  value: function affects(t) {
                    for (
                      var _len9 = arguments.length,
                        s = new Array(_len9 > 1 ? _len9 - 1 : 0),
                        _key9 = 1;
                      _key9 < _len9;
                      _key9++
                    ) {
                      s[_key9 - 1] = arguments[_key9];
                    }
                    return this.h.apply(
                      this,
                      [
                        t,
                        {
                          includeChildren: !0,
                        },
                      ].concat(s)
                    );
                  },
                },
                {
                  key: 'h',
                  value: function h(t, s) {
                    if (!t) return !1;
                    for (
                      var _len10 = arguments.length,
                        r = new Array(_len10 > 2 ? _len10 - 2 : 0),
                        _key10 = 2;
                      _key10 < _len10;
                      _key10++
                    ) {
                      r[_key10 - 2] = arguments[_key10];
                    }
                    var i = r.length > 0;
                    return !!(
                      ((!i || r.includes(1)) &&
                        (this.d.value.get(t) ||
                          (s.includeChildren && this.d.value.findSuperstr(t)))) ||
                      ((!i || r.includes(0)) &&
                        (this.f.value.get(t) ||
                          (s.includeChildren && this.f.value.findSuperstr(t)))) ||
                      ((!i || r.includes(2)) &&
                        (this.g.value.findSubstr(t) ||
                          (s.includeChildren && this.g.value.findSuperstr(t))))
                    );
                  },
                },
                {
                  key: 'gotAdded',
                  value: function gotAdded() {
                    return this.rawAdded.length > 0;
                  },
                },
                {
                  key: 'gotDeleted',
                  value: function gotDeleted() {
                    return this.rawDeleted.length > 0;
                  },
                },
                {
                  key: 'gotUpdated',
                  value: function gotUpdated() {
                    return this.rawUpdated.length > 0;
                  },
                },
                {
                  key: 'correlates',
                  value: function correlates(t) {
                    return this.b === t;
                  },
                },
                {
                  key: 'hasCorrelation',
                  value: function hasCorrelation() {
                    return typeof this.b == 'number';
                  },
                },
              ]);
            })()),
            (_d3.a = null),
            _d3)),
          (function (e) {
            (e[(e.FILE_IS_DIRECTORY = 0)] = 'FILE_IS_DIRECTORY'),
              (e[(e.FILE_NOT_FOUND = 1)] = 'FILE_NOT_FOUND'),
              (e[(e.FILE_NOT_MODIFIED_SINCE = 2)] = 'FILE_NOT_MODIFIED_SINCE'),
              (e[(e.FILE_MODIFIED_SINCE = 3)] = 'FILE_MODIFIED_SINCE'),
              (e[(e.FILE_MOVE_CONFLICT = 4)] = 'FILE_MOVE_CONFLICT'),
              (e[(e.FILE_WRITE_LOCKED = 5)] = 'FILE_WRITE_LOCKED'),
              (e[(e.FILE_PERMISSION_DENIED = 6)] = 'FILE_PERMISSION_DENIED'),
              (e[(e.FILE_TOO_LARGE = 7)] = 'FILE_TOO_LARGE'),
              (e[(e.FILE_INVALID_PATH = 8)] = 'FILE_INVALID_PATH'),
              (e[(e.FILE_NOT_DIRECTORY = 9)] = 'FILE_NOT_DIRECTORY'),
              (e[(e.FILE_OTHER_ERROR = 10)] = 'FILE_OTHER_ERROR');
          })(fn || (fn = {})),
          (function (e) {
            (e[(e.FILE = 0)] = 'FILE'),
              (e[(e.FOLDER = 1)] = 'FOLDER'),
              (e[(e.ROOT_FOLDER = 2)] = 'ROOT_FOLDER');
          })(hn || (hn = {})),
          (p0 =
            ((_ee = /*#__PURE__*/ (function () {
              function ee() {
                _classCallCheck(this, ee);
              }
              return _createClass(ee, null, [
                {
                  key: 'formatSize',
                  value: function formatSize(t) {
                    return (
                      lo(t) || (t = 0),
                      t < ee.KB
                        ? E(1990, null, t.toFixed(0))
                        : t < ee.MB
                          ? E(1991, null, (t / ee.KB).toFixed(2))
                          : t < ee.GB
                            ? E(1992, null, (t / ee.MB).toFixed(2))
                            : t < ee.TB
                              ? E(1993, null, (t / ee.GB).toFixed(2))
                              : E(1994, null, (t / ee.TB).toFixed(2))
                    );
                  },
                },
              ]);
            })()),
            (_ee.KB = 1024),
            (_ee.MB = _ee.KB * _ee.KB),
            (_ee.GB = _ee.MB * _ee.KB),
            (_ee.TB = _ee.GB * _ee.KB),
            _ee));
      },
  });
function m0(e) {
  return typeof e.correlationId == 'number';
}
function b0(e) {
  var t = new pn();
  var _iterator46 = _createForOfIteratorHelper(e),
    _step46;
  try {
    for (_iterator46.s(); !(_step46 = _iterator46.n()).done; ) {
      var s = _step46.value;
      t.processEvent(s);
    }
  } catch (err) {
    _iterator46.e(err);
  } finally {
    _iterator46.f();
  }
  return t.coalesce();
}
function w0(e, t) {
  return typeof t == 'string' && !t.startsWith(Ze) && !Ke(t)
    ? {
        base: e,
        pattern: t,
      }
    : t;
}
function dn(e, t) {
  var s = [];
  var _iterator47 = _createForOfIteratorHelper(t),
    _step47;
  try {
    for (_iterator47.s(); !(_step47 = _iterator47.n()).done; ) {
      var r = _step47.value;
      s.push(e0(w0(e, r)));
    }
  } catch (err) {
    _iterator47.e(err);
  } finally {
    _iterator47.f();
  }
  return s;
}
function y0(e, t) {
  if (typeof t == 'number')
    switch (e.type) {
      case 1:
        return (t & 4) === 0;
      case 2:
        return (t & 8) === 0;
      case 0:
        return (t & 2) === 0;
    }
  return !1;
}
var v0,
  pn,
  E0 = C({
    'out-build/vs/platform/files/common/watcher.js':
      function outBuild_vs_platform_files_common_watcherJs() {
        'use strict';

        var _Jn;
        i0(),
          It(),
          le(),
          Y(),
          ze(),
          g0(),
          (v0 =
            ((_Jn = /*#__PURE__*/ (function (_Ee2) {
              function Jn(t, s, r, i) {
                var _this30;
                _classCallCheck(this, Jn);
                (_this30 = _callSuper(this, Jn)),
                  (_this30.h = t),
                  (_this30.j = s),
                  (_this30.m = r),
                  (_this30.n = i),
                  (_this30.c = _this30.B(new A1())),
                  (_this30.f = void 0),
                  (_this30.g = 0);
                return _this30;
              }
              _inherits(Jn, _Ee2);
              return _createClass(Jn, [
                {
                  key: 's',
                  value: function s() {
                    var _this31 = this;
                    var t = new Ie();
                    (this.c.value = t),
                      (this.b = this.r(t)),
                      this.b.setVerboseLogging(this.m),
                      t.add(
                        this.b.onDidChangeFile(function (s) {
                          return _this31.h(s);
                        })
                      ),
                      t.add(
                        this.b.onDidLogMessage(function (s) {
                          return _this31.j(s);
                        })
                      ),
                      t.add(
                        this.b.onDidError(function (s) {
                          return _this31.t(s.error, s.request);
                        })
                      );
                  },
                },
                {
                  key: 't',
                  value: function t(_t7, s) {
                    this.u(_t7, s)
                      ? this.g < Jn.a && this.f
                        ? (this.y('restarting watcher after unexpected error: '.concat(_t7)),
                          this.w(this.f))
                        : this.y(
                            'gave up attempting to restart watcher after unexpected error: '.concat(
                              _t7
                            )
                          )
                      : this.y(_t7);
                  },
                },
                {
                  key: 'u',
                  value: function u(t, s) {
                    return !(
                      !this.n.restartOnError ||
                      s ||
                      t.indexOf('No space left on device') !== -1 ||
                      t.indexOf('EMFILE') !== -1
                    );
                  },
                },
                {
                  key: 'w',
                  value: function w(t) {
                    this.g++, this.s(), this.watch(t);
                  },
                },
                {
                  key: 'watch',
                  value: (function () {
                    var _watch = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee23(t) {
                        var _this$b;
                        return _regeneratorRuntime().wrap(
                          function _callee23$(_context36) {
                            while (1)
                              switch ((_context36.prev = _context36.next)) {
                                case 0:
                                  this.f = t;
                                  _context36.next = 3;
                                  return (_this$b = this.b) === null || _this$b === void 0
                                    ? void 0
                                    : _this$b.watch(t);
                                case 3:
                                case 'end':
                                  return _context36.stop();
                              }
                          },
                          _callee23,
                          this
                        );
                      })
                    );
                    function watch(_x47) {
                      return _watch.apply(this, arguments);
                    }
                    return watch;
                  })(),
                },
                {
                  key: 'setVerboseLogging',
                  value: (function () {
                    var _setVerboseLogging = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee24(t) {
                        var _this$b2;
                        return _regeneratorRuntime().wrap(
                          function _callee24$(_context37) {
                            while (1)
                              switch ((_context37.prev = _context37.next)) {
                                case 0:
                                  this.m = t;
                                  _context37.next = 3;
                                  return (_this$b2 = this.b) === null || _this$b2 === void 0
                                    ? void 0
                                    : _this$b2.setVerboseLogging(t);
                                case 3:
                                case 'end':
                                  return _context37.stop();
                              }
                          },
                          _callee24,
                          this
                        );
                      })
                    );
                    function setVerboseLogging(_x48) {
                      return _setVerboseLogging.apply(this, arguments);
                    }
                    return setVerboseLogging;
                  })(),
                },
                {
                  key: 'y',
                  value: function y(t) {
                    this.j({
                      type: 'error',
                      message: '[File Watcher ('.concat(this.n.type, ')] ').concat(t),
                    });
                  },
                },
                {
                  key: 'z',
                  value: function z(t) {
                    this.j({
                      type: 'trace',
                      message: '[File Watcher ('.concat(this.n.type, ')] ').concat(t),
                    });
                  },
                },
                {
                  key: 'dispose',
                  value: function dispose() {
                    return (this.b = void 0), _superPropGet(Jn, 'dispose', this, 3)([]);
                  },
                },
              ]);
            })(Ee)),
            (_Jn.a = 5),
            _Jn)),
          (pn = /*#__PURE__*/ (function () {
            function pn() {
              _classCallCheck(this, pn);
              (this.a = new Set()), (this.b = new Map());
            }
            return _createClass(pn, [
              {
                key: 'c',
                value: function c(e) {
                  return _e ? e.resource.fsPath : e.resource.fsPath.toLowerCase();
                },
              },
              {
                key: 'processEvent',
                value: function processEvent(e) {
                  var t = this.b.get(this.c(e));
                  var s = !1;
                  if (t) {
                    var r = t.type,
                      i = e.type;
                    t.resource.fsPath !== e.resource.fsPath && (e.type === 2 || e.type === 1)
                      ? (s = !0)
                      : r === 1 && i === 2
                        ? (this.b['delete'](this.c(e)), this.a['delete'](t))
                        : r === 2 && i === 1
                          ? (t.type = 0)
                          : (r === 1 && i === 0) || (t.type = i);
                  } else s = !0;
                  s && (this.a.add(e), this.b.set(this.c(e), e));
                },
              },
              {
                key: 'coalesce',
                value: function coalesce() {
                  var e = [],
                    t = [];
                  return Array.from(this.a)
                    .filter(function (s) {
                      return s.type !== 2 ? (e.push(s), !1) : !0;
                    })
                    .sort(function (s, r) {
                      return s.resource.fsPath.length - r.resource.fsPath.length;
                    })
                    .filter(function (s) {
                      return t.some(function (r) {
                        return u0(s.resource.fsPath, r, !_e);
                      })
                        ? !1
                        : (t.push(s.resource.fsPath), !0);
                    })
                    .concat(e);
                },
              },
            ]);
          })());
      },
  });
function $0(_x49, _x50, _x51, _x52) {
  return _$.apply(this, arguments);
}
function _$() {
  _$ = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee49(e, t, s, r) {
      var i,
        n,
        a,
        o,
        c,
        l,
        f,
        u,
        _args63 = arguments;
      return _regeneratorRuntime().wrap(function _callee49$(_context63) {
        while (1)
          switch ((_context63.prev = _context63.next)) {
            case 0:
              i = _args63.length > 4 && _args63[4] !== undefined ? _args63[4] : 512;
              _context63.next = 3;
              return ve.open(e, 'r');
            case 3:
              n = _context63.sent;
              a = Buffer.allocUnsafe(i);
              o = new Qe(r);
              l = !1;
              (f = {
                path: e,
                excludes: [],
                recursive: !1,
              }),
                (u = new gn(f, void 0, function (h) {
                  _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee47() {
                      var _iterator61, _step61, d, _yield$ve$read, p;
                      return _regeneratorRuntime().wrap(
                        function _callee47$(_context61) {
                          while (1)
                            switch ((_context61.prev = _context61.next)) {
                              case 0:
                                _iterator61 = _createForOfIteratorHelper(h);
                                _context61.prev = 1;
                                _iterator61.s();
                              case 3:
                                if ((_step61 = _iterator61.n()).done) {
                                  _context61.next = 30;
                                  break;
                                }
                                d = _step61.value.type;
                                if (!(d === 0)) {
                                  _context61.next = 28;
                                  break;
                                }
                                if (!l) {
                                  _context61.next = 8;
                                  break;
                                }
                                return _context61.abrupt('return');
                              case 8:
                                l = !0;
                                _context61.prev = 9;
                              case 10:
                                if (o.token.isCancellationRequested) {
                                  _context61.next = 20;
                                  break;
                                }
                                _context61.next = 13;
                                return ve.read(n, a, 0, i, null);
                              case 13:
                                _yield$ve$read = _context61.sent;
                                p = _yield$ve$read.bytesRead;
                                if (!(!p || o.token.isCancellationRequested)) {
                                  _context61.next = 17;
                                  break;
                                }
                                return _context61.abrupt('break', 20);
                              case 17:
                                t(a.slice(0, p));
                              case 18:
                                _context61.next = 10;
                                break;
                              case 20:
                                _context61.next = 25;
                                break;
                              case 22:
                                _context61.prev = 22;
                                _context61.t0 = _context61['catch'](9);
                                (c = new Error(_context61.t0)), o.dispose(!0);
                              case 25:
                                _context61.prev = 25;
                                l = !1;
                                return _context61.finish(25);
                              case 28:
                                _context61.next = 3;
                                break;
                              case 30:
                                _context61.next = 35;
                                break;
                              case 32:
                                _context61.prev = 32;
                                _context61.t1 = _context61['catch'](1);
                                _iterator61.e(_context61.t1);
                              case 35:
                                _context61.prev = 35;
                                _iterator61.f();
                                return _context61.finish(35);
                              case 38:
                              case 'end':
                                return _context61.stop();
                            }
                        },
                        _callee47,
                        null,
                        [
                          [1, 32, 35, 38],
                          [9, 22, 25, 28],
                        ]
                      );
                    })
                  )();
                }));
              _context63.next = 10;
              return u.ready;
            case 10:
              s();
              return _context63.abrupt(
                'return',
                new Promise(function (h, d) {
                  o.token.onCancellationRequested(
                    /*#__PURE__*/ _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee48() {
                        return _regeneratorRuntime().wrap(
                          function _callee48$(_context62) {
                            while (1)
                              switch ((_context62.prev = _context62.next)) {
                                case 0:
                                  u.dispose();
                                  _context62.prev = 1;
                                  _context62.next = 4;
                                  return ve.close(n);
                                case 4:
                                  _context62.next = 9;
                                  break;
                                case 6:
                                  _context62.prev = 6;
                                  _context62.t0 = _context62['catch'](1);
                                  c = new Error(_context62.t0);
                                case 9:
                                  c ? d(c) : h();
                                case 10:
                                case 'end':
                                  return _context62.stop();
                              }
                          },
                          _callee48,
                          null,
                          [[1, 6]]
                        );
                      })
                    )
                  );
                })
              );
            case 12:
            case 'end':
              return _context63.stop();
          }
      }, _callee49);
    })
  );
  return _$.apply(this, arguments);
}
var gn,
  A0 = C({
    'out-build/vs/platform/files/node/watcher/nodejs/nodejsWatcherLib.js':
      function outBuild_vs_platform_files_node_watcher_nodejs_nodejsWatcherLibJs() {
        'use strict';

        var _p3;
        bt(),
          Gt(),
          qe(),
          It(),
          Si(),
          le(),
          Y(),
          H1(),
          ze(),
          K2(),
          ts(),
          E0(),
          Jt(),
          (gn =
            ((_p3 = /*#__PURE__*/ (function (_Ee3) {
              function p1(t, s, r, i, n, a) {
                var _this32;
                _classCallCheck(this, p1);
                (_this32 = _callSuper(this, p1)),
                  (_this32.t = t),
                  (_this32.u = s),
                  (_this32.w = r),
                  (_this32.y = i),
                  (_this32.z = n),
                  (_this32.C = a),
                  (_this32.c = _this32.B(
                    new Ei(
                      {
                        maxWorkChunkSize: 100,
                        throttleDelay: 200,
                        maxBufferedWork: 1e4,
                      },
                      function (o) {
                        return _this32.w(o);
                      }
                    )
                  )),
                  (_this32.f = _this32.B(
                    new vi(function (o) {
                      return _this32.M(o);
                    }, p1.b)
                  )),
                  (_this32.g = dn(_this32.t.path, _this32.t.excludes)),
                  (_this32.h = _this32.t.includes
                    ? dn(_this32.t.path, _this32.t.includes)
                    : void 0),
                  (_this32.j = m0(_this32.t) ? _this32.t.filter : void 0),
                  (_this32.m = new Qe()),
                  (_this32.n = new Ve(
                    /*#__PURE__*/ _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee25() {
                        var o;
                        return _regeneratorRuntime().wrap(
                          function _callee25$(_context38) {
                            while (1)
                              switch ((_context38.prev = _context38.next)) {
                                case 0:
                                  o = _this32.t.path;
                                  _context38.prev = 1;
                                  _context38.next = 4;
                                  return G2(_this32.t.path);
                                case 4:
                                  o = _context38.sent;
                                  _this32.t.path !== o &&
                                    _this32.Q(
                                      'correcting a path to watch that seems to be a symbolic link (original: '
                                        .concat(_this32.t.path, ', real: ')
                                        .concat(o, ')')
                                    );
                                  _context38.next = 10;
                                  break;
                                case 8:
                                  _context38.prev = 8;
                                  _context38.t0 = _context38['catch'](1);
                                case 10:
                                  return _context38.abrupt('return', o);
                                case 11:
                                case 'end':
                                  return _context38.stop();
                              }
                          },
                          _callee25,
                          null,
                          [[1, 8]]
                        );
                      })
                    )
                  )),
                  (_this32.ready = _this32.D()),
                  (_this32.r = !1),
                  (_this32.s = !1);
                return _this32;
              }
              _inherits(p1, _Ee3);
              return _createClass(p1, [
                {
                  key: 'isReusingRecursiveWatcher',
                  get: function get() {
                    return this.r;
                  },
                },
                {
                  key: 'failed',
                  get: function get() {
                    return this.s;
                  },
                },
                {
                  key: 'D',
                  value: (function () {
                    var _D = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee26() {
                        var t;
                        return _regeneratorRuntime().wrap(
                          function _callee26$(_context39) {
                            while (1)
                              switch ((_context39.prev = _context39.next)) {
                                case 0:
                                  _context39.prev = 0;
                                  _context39.next = 3;
                                  return _fs.promises.stat(this.t.path);
                                case 3:
                                  t = _context39.sent;
                                  if (!this.m.token.isCancellationRequested) {
                                    _context39.next = 6;
                                    break;
                                  }
                                  return _context39.abrupt('return');
                                case 6:
                                  _context39.t0 = this;
                                  _context39.next = 9;
                                  return this.G(t.isDirectory());
                                case 9:
                                  _context39.t1 = _context39.sent;
                                  _context39.t0.B.call(_context39.t0, _context39.t1);
                                  _context39.next = 16;
                                  break;
                                case 13:
                                  _context39.prev = 13;
                                  _context39.t2 = _context39['catch'](0);
                                  _context39.t2.code !== 'ENOENT'
                                    ? this.O(_context39.t2)
                                    : this.Q(
                                        "ignoring a path for watching who's stat info failed to resolve: "
                                          .concat(this.t.path, ' (error: ')
                                          .concat(_context39.t2, ')')
                                      ),
                                    this.F();
                                case 16:
                                case 'end':
                                  return _context39.stop();
                              }
                          },
                          _callee26,
                          this,
                          [[0, 13]]
                        );
                      })
                    );
                    function D() {
                      return _D.apply(this, arguments);
                    }
                    return D;
                  })(),
                },
                {
                  key: 'F',
                  value: function F() {
                    var _this$y;
                    (this.s = !0),
                      (_this$y = this.y) === null || _this$y === void 0
                        ? void 0
                        : _this$y.call(this);
                  },
                },
                {
                  key: 'G',
                  value: (function () {
                    var _G2 = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee27(t) {
                        var s;
                        return _regeneratorRuntime().wrap(
                          function _callee27$(_context40) {
                            while (1)
                              switch ((_context40.prev = _context40.next)) {
                                case 0:
                                  s = new Ie();
                                  if (!this.H(t, s)) {
                                    _context40.next = 5;
                                    break;
                                  }
                                  this.Q(
                                    'reusing an existing recursive watcher for '.concat(this.t.path)
                                  ),
                                    (this.r = !0);
                                  _context40.next = 8;
                                  break;
                                case 5:
                                  this.r = !1;
                                  _context40.next = 8;
                                  return this.I(t, s);
                                case 8:
                                  return _context40.abrupt('return', s);
                                case 9:
                                case 'end':
                                  return _context40.stop();
                              }
                          },
                          _callee27,
                          this
                        );
                      })
                    );
                    function G(_x53) {
                      return _G2.apply(this, arguments);
                    }
                    return G;
                  })(),
                },
                {
                  key: 'H',
                  value: function H(t, s) {
                    var _this$u,
                      _this33 = this;
                    if (t) return !1;
                    var r = K.file(this.t.path),
                      i =
                        (_this$u = this.u) === null || _this$u === void 0
                          ? void 0
                          : _this$u.subscribe(
                              this.t.path,
                              /*#__PURE__*/ (function () {
                                var _ref21 = _asyncToGenerator(
                                  /*#__PURE__*/ _regeneratorRuntime().mark(
                                    function _callee28(n, a) {
                                      var o;
                                      return _regeneratorRuntime().wrap(function _callee28$(
                                        _context41
                                      ) {
                                        while (1)
                                          switch ((_context41.prev = _context41.next)) {
                                            case 0:
                                              if (s.isDisposed) {
                                                _context41.next = 9;
                                                break;
                                              }
                                              if (!n) {
                                                _context41.next = 8;
                                                break;
                                              }
                                              _context41.next = 4;
                                              return _this33.G(t);
                                            case 4:
                                              o = _context41.sent;
                                              s.isDisposed ? o.dispose() : s.add(o);
                                              _context41.next = 9;
                                              break;
                                            case 8:
                                              a &&
                                                (typeof a.cId == 'number' ||
                                                  typeof _this33.t.correlationId == 'number') &&
                                                _this33.L(
                                                  {
                                                    resource: r,
                                                    type: a.type,
                                                    cId: _this33.t.correlationId,
                                                  },
                                                  !0
                                                );
                                            case 9:
                                            case 'end':
                                              return _context41.stop();
                                          }
                                      }, _callee28);
                                    }
                                  )
                                );
                                return function (_x54, _x55) {
                                  return _ref21.apply(this, arguments);
                                };
                              })()
                            );
                    return i ? (s.add(i), !0) : !1;
                  },
                },
                {
                  key: 'I',
                  value: (function () {
                    var _I2 = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee31(t, s) {
                        var _this34 = this;
                        var r, i, n, a, o, c, l, _iterator48, _step48, u, f;
                        return _regeneratorRuntime().wrap(
                          function _callee31$(_context44) {
                            while (1)
                              switch ((_context44.prev = _context44.next)) {
                                case 0:
                                  _context44.next = 2;
                                  return this.n.value;
                                case 2:
                                  r = _context44.sent;
                                  if (!(Fe && gt(r, '/Volumes/', !0))) {
                                    _context44.next = 6;
                                    break;
                                  }
                                  this.O(
                                    'Refusing to watch '.concat(
                                      r,
                                      ' for changes using fs.watch() for possibly being a network share where watching is unreliable and unstable.'
                                    )
                                  );
                                  return _context44.abrupt('return');
                                case 6:
                                  i = new Qe(this.m.token);
                                  s.add(
                                    Re(function () {
                                      return i.dispose(!0);
                                    })
                                  );
                                  n = new Ie();
                                  s.add(n);
                                  _context44.prev = 10;
                                  (a = K.file(this.t.path)), (o = ht(r)), (c = (0, _fs.watch)(r));
                                  n.add(
                                    Re(function () {
                                      c.removeAllListeners(), c.close();
                                    })
                                  ),
                                    this.Q("Started watching: '".concat(r, "'"));
                                  l = new Set();
                                  if (!t) {
                                    _context44.next = 27;
                                    break;
                                  }
                                  _context44.prev = 15;
                                  _context44.t0 = _createForOfIteratorHelper;
                                  _context44.next = 19;
                                  return ve.readdir(r);
                                case 19:
                                  _context44.t1 = _context44.sent;
                                  _iterator48 = (0, _context44.t0)(_context44.t1);
                                  try {
                                    for (_iterator48.s(); !(_step48 = _iterator48.n()).done; ) {
                                      u = _step48.value;
                                      l.add(u);
                                    }
                                  } catch (err) {
                                    _iterator48.e(err);
                                  } finally {
                                    _iterator48.f();
                                  }
                                  _context44.next = 27;
                                  break;
                                case 24:
                                  _context44.prev = 24;
                                  _context44.t2 = _context44['catch'](15);
                                  this.O(_context44.t2);
                                case 27:
                                  if (!i.token.isCancellationRequested) {
                                    _context44.next = 29;
                                    break;
                                  }
                                  return _context44.abrupt('return');
                                case 29:
                                  f = new Map();
                                  n.add(
                                    Re(function () {
                                      var _iterator49 = _createForOfIteratorHelper(f),
                                        _step49;
                                      try {
                                        for (_iterator49.s(); !(_step49 = _iterator49.n()).done; ) {
                                          var _step49$value = _slicedToArray(_step49.value, 2),
                                            _u2 = _step49$value[1];
                                          _u2.dispose();
                                        }
                                      } catch (err) {
                                        _iterator49.e(err);
                                      } finally {
                                        _iterator49.f();
                                      }
                                      f.clear();
                                    })
                                  ),
                                    c.on('error', function (u, h) {
                                      i.token.isCancellationRequested ||
                                        (_this34.O(
                                          'Failed to watch '
                                            .concat(r, ' for changes using fs.watch() (')
                                            .concat(u, ', ')
                                            .concat(h, ')')
                                        ),
                                        _this34.F());
                                    }),
                                    c.on('change', function (u, h) {
                                      if (i.token.isCancellationRequested) return;
                                      _this34.C && _this34.R('[raw] ["'.concat(u, '"] ').concat(h));
                                      var d = '';
                                      if (
                                        (h && ((d = h.toString()), Fe && (d = Z1(d))),
                                        !(!d || (u !== 'change' && u !== 'rename')))
                                      )
                                        if (t) {
                                          if (u === 'rename') {
                                            var _f$get;
                                            (_f$get = f.get(d)) === null ||
                                              _f$get === void 0 ||
                                              _f$get.dispose();
                                            var p = setTimeout(
                                              /*#__PURE__*/ _asyncToGenerator(
                                                /*#__PURE__*/ _regeneratorRuntime().mark(
                                                  function _callee29() {
                                                    var y, v;
                                                    return _regeneratorRuntime().wrap(
                                                      function _callee29$(_context42) {
                                                        while (1)
                                                          switch (
                                                            (_context42.prev = _context42.next)
                                                          ) {
                                                            case 0:
                                                              f['delete'](d);
                                                              _context42.t0 = Yr(d, o, !_e);
                                                              if (!_context42.t0) {
                                                                _context42.next = 6;
                                                                break;
                                                              }
                                                              _context42.next = 5;
                                                              return ve.exists(r);
                                                            case 5:
                                                              _context42.t0 = !_context42.sent;
                                                            case 6:
                                                              if (!_context42.t0) {
                                                                _context42.next = 9;
                                                                break;
                                                              }
                                                              _this34.J(a);
                                                              return _context42.abrupt('return');
                                                            case 9:
                                                              if (
                                                                !i.token.isCancellationRequested
                                                              ) {
                                                                _context42.next = 11;
                                                                break;
                                                              }
                                                              return _context42.abrupt('return');
                                                            case 11:
                                                              _context42.next = 13;
                                                              return _this34.N(re(r, d));
                                                            case 13:
                                                              y = _context42.sent;
                                                              if (
                                                                !i.token.isCancellationRequested
                                                              ) {
                                                                _context42.next = 16;
                                                                break;
                                                              }
                                                              return _context42.abrupt('return');
                                                            case 16:
                                                              y
                                                                ? l.has(d)
                                                                  ? (v = 0)
                                                                  : ((v = 1), l.add(d))
                                                                : (l['delete'](d), (v = 2)),
                                                                _this34.L({
                                                                  resource: q1(a, d),
                                                                  type: v,
                                                                  cId: _this34.t.correlationId,
                                                                });
                                                            case 17:
                                                            case 'end':
                                                              return _context42.stop();
                                                          }
                                                      },
                                                      _callee29
                                                    );
                                                  }
                                                )
                                              ),
                                              p1.a
                                            );
                                            f.set(
                                              d,
                                              Re(function () {
                                                return clearTimeout(p);
                                              })
                                            );
                                          } else {
                                            var _p4;
                                            l.has(d) ? (_p4 = 0) : ((_p4 = 1), l.add(d)),
                                              _this34.L({
                                                resource: q1(a, d),
                                                type: _p4,
                                                cId: _this34.t.correlationId,
                                              });
                                          }
                                        } else if (u === 'rename' || !Yr(d, o, !_e)) {
                                          var _p5 = setTimeout(
                                            /*#__PURE__*/ _asyncToGenerator(
                                              /*#__PURE__*/ _regeneratorRuntime().mark(
                                                function _callee30() {
                                                  var y;
                                                  return _regeneratorRuntime().wrap(
                                                    function _callee30$(_context43) {
                                                      while (1)
                                                        switch (
                                                          (_context43.prev = _context43.next)
                                                        ) {
                                                          case 0:
                                                            _context43.next = 2;
                                                            return ve.exists(r);
                                                          case 2:
                                                            y = _context43.sent;
                                                            _context43.t0 =
                                                              i.token.isCancellationRequested;
                                                            if (_context43.t0) {
                                                              _context43.next = 15;
                                                              break;
                                                            }
                                                            if (!y) {
                                                              _context43.next = 14;
                                                              break;
                                                            }
                                                            _this34.L(
                                                              {
                                                                resource: a,
                                                                type: 0,
                                                                cId: _this34.t.correlationId,
                                                              },
                                                              !0
                                                            );
                                                            _context43.t1 = n;
                                                            _context43.next = 10;
                                                            return _this34.G(!1);
                                                          case 10:
                                                            _context43.t2 = _context43.sent;
                                                            _context43.t1.add.call(
                                                              _context43.t1,
                                                              _context43.t2
                                                            );
                                                            _context43.next = 15;
                                                            break;
                                                          case 14:
                                                            _this34.J(a);
                                                          case 15:
                                                          case 'end':
                                                            return _context43.stop();
                                                        }
                                                    },
                                                    _callee30
                                                  );
                                                }
                                              )
                                            ),
                                            p1.a
                                          );
                                          n.clear(),
                                            n.add(
                                              Re(function () {
                                                return clearTimeout(_p5);
                                              })
                                            );
                                        } else
                                          _this34.L(
                                            {
                                              resource: a,
                                              type: 0,
                                              cId: _this34.t.correlationId,
                                            },
                                            !0
                                          );
                                    });
                                  _context44.next = 36;
                                  break;
                                case 33:
                                  _context44.prev = 33;
                                  _context44.t3 = _context44['catch'](10);
                                  i.token.isCancellationRequested ||
                                    this.O(
                                      'Failed to watch '
                                        .concat(r, ' for changes using fs.watch() (')
                                        .concat(_context44.t3.toString(), ')')
                                    ),
                                    this.F();
                                case 36:
                                case 'end':
                                  return _context44.stop();
                              }
                          },
                          _callee31,
                          this,
                          [
                            [10, 33],
                            [15, 24],
                          ]
                        );
                      })
                    );
                    function I(_x56, _x57) {
                      return _I2.apply(this, arguments);
                    }
                    return I;
                  })(),
                },
                {
                  key: 'J',
                  value: function J(t) {
                    this.P('Watcher shutdown because watched path got deleted'),
                      this.L(
                        {
                          resource: t,
                          type: 2,
                          cId: this.t.correlationId,
                        },
                        !0
                      ),
                      this.f.flush(),
                      this.F();
                  },
                },
                {
                  key: 'L',
                  value: function L(t) {
                    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                    this.m.token.isCancellationRequested ||
                      (this.C &&
                        this.R(
                          ''
                            .concat(
                              t.type === 1 ? '[ADDED]' : t.type === 2 ? '[DELETED]' : '[CHANGED]',
                              ' '
                            )
                            .concat(t.resource.fsPath)
                        ),
                      !s &&
                      this.g.some(function (r) {
                        return r(t.resource.fsPath);
                      })
                        ? this.C && this.R(' >> ignored (excluded) '.concat(t.resource.fsPath))
                        : !s &&
                            this.h &&
                            this.h.length > 0 &&
                            !this.h.some(function (r) {
                              return r(t.resource.fsPath);
                            })
                          ? this.C &&
                            this.R(' >> ignored (not included) '.concat(t.resource.fsPath))
                          : this.f.work(t));
                  },
                },
                {
                  key: 'M',
                  value: function M(t) {
                    var s = b0(t),
                      r = [];
                    var _iterator50 = _createForOfIteratorHelper(s),
                      _step50;
                    try {
                      for (_iterator50.s(); !(_step50 = _iterator50.n()).done; ) {
                        var _n4 = _step50.value;
                        if (y0(_n4, this.j)) {
                          this.C && this.R(' >> ignored (filtered) '.concat(_n4.resource.fsPath));
                          continue;
                        }
                        r.push(_n4);
                      }
                    } catch (err) {
                      _iterator50.e(err);
                    } finally {
                      _iterator50.f();
                    }
                    if (r.length === 0) return;
                    if (this.C) {
                      var _iterator51 = _createForOfIteratorHelper(r),
                        _step51;
                      try {
                        for (_iterator51.s(); !(_step51 = _iterator51.n()).done; ) {
                          var n = _step51.value;
                          this.R(
                            ' >> normalized '
                              .concat(
                                n.type === 1 ? '[ADDED]' : n.type === 2 ? '[DELETED]' : '[CHANGED]',
                                ' '
                              )
                              .concat(n.resource.fsPath)
                          );
                        }
                      } catch (err) {
                        _iterator51.e(err);
                      } finally {
                        _iterator51.f();
                      }
                    }
                    this.c.work(r)
                      ? this.c.pending > 0 &&
                        this.Q(
                          'started throttling events due to large amount of file change events at once (pending: '
                            .concat(this.c.pending, ', most recent change: ')
                            .concat(
                              r[0].resource.fsPath,
                              "). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output)."
                            )
                        )
                      : this.P(
                          'started ignoring events due to too many file change events at once (incoming: '
                            .concat(r.length, ', most recent change: ')
                            .concat(
                              r[0].resource.fsPath,
                              "). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output)."
                            )
                        );
                  },
                },
                {
                  key: 'N',
                  value: (function () {
                    var _N = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee32(t) {
                        var s;
                        return _regeneratorRuntime().wrap(
                          function _callee32$(_context45) {
                            while (1)
                              switch ((_context45.prev = _context45.next)) {
                                case 0:
                                  if (!_e) {
                                    _context45.next = 2;
                                    break;
                                  }
                                  return _context45.abrupt('return', ve.exists(t));
                                case 2:
                                  _context45.prev = 2;
                                  s = ht(t);
                                  _context45.next = 6;
                                  return ve.readdir(Ue(t));
                                case 6:
                                  return _context45.abrupt(
                                    'return',
                                    _context45.sent.some(function (i) {
                                      return i === s;
                                    })
                                  );
                                case 9:
                                  _context45.prev = 9;
                                  _context45.t0 = _context45['catch'](2);
                                  return _context45.abrupt('return', (this.Q(_context45.t0), !1));
                                case 12:
                                case 'end':
                                  return _context45.stop();
                              }
                          },
                          _callee32,
                          this,
                          [[2, 9]]
                        );
                      })
                    );
                    function N(_x58) {
                      return _N.apply(this, arguments);
                    }
                    return N;
                  })(),
                },
                {
                  key: 'setVerboseLogging',
                  value: function setVerboseLogging(t) {
                    this.C = t;
                  },
                },
                {
                  key: 'O',
                  value: function O(t) {
                    var _this$z;
                    this.m.token.isCancellationRequested ||
                      ((_this$z = this.z) === null || _this$z === void 0
                        ? void 0
                        : _this$z.call(this, {
                            type: 'error',
                            message: '[File Watcher (node.js)] '.concat(t),
                          }));
                  },
                },
                {
                  key: 'P',
                  value: function P(t) {
                    var _this$z2;
                    this.m.token.isCancellationRequested ||
                      ((_this$z2 = this.z) === null || _this$z2 === void 0
                        ? void 0
                        : _this$z2.call(this, {
                            type: 'warn',
                            message: '[File Watcher (node.js)] '.concat(t),
                          }));
                  },
                },
                {
                  key: 'Q',
                  value: function Q(t) {
                    var _this$z3;
                    !this.m.token.isCancellationRequested &&
                      this.C &&
                      ((_this$z3 = this.z) === null || _this$z3 === void 0
                        ? void 0
                        : _this$z3.call(this, {
                            type: 'trace',
                            message: '[File Watcher (node.js)] '.concat(t),
                          }));
                  },
                },
                {
                  key: 'R',
                  value: function R(t) {
                    !this.m.token.isCancellationRequested &&
                      this.C &&
                      this.Q(
                        ''
                          .concat(t)
                          .concat(
                            typeof this.t.correlationId == 'number'
                              ? ' <'.concat(this.t.correlationId, '> ')
                              : ''
                          )
                      );
                  },
                },
                {
                  key: 'dispose',
                  value: function dispose() {
                    this.m.dispose(!0), _superPropGet(p1, 'dispose', this, 3)([]);
                  },
                },
              ]);
            })(Ee)),
            (_p3.a = 100),
            (_p3.b = 75),
            _p3));
      },
  }),
  O0 = ro({
    'node_modules/minimist/index.js': function node_modules_minimist_indexJs(e, t) {
      'use strict';

      function s(n, a) {
        var o = n;
        a.slice(0, -1).forEach(function (l) {
          o = o[l] || {};
        });
        var c = a[a.length - 1];
        return c in o;
      }
      function r(n) {
        return typeof n == 'number' || /^0x[0-9a-f]+$/i.test(n)
          ? !0
          : /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(n);
      }
      function i(n, a) {
        return (a === 'constructor' && typeof n[a] == 'function') || a === '__proto__';
      }
      t.exports = function (n, a) {
        a || (a = {});
        var o = {
          bools: {},
          strings: {},
          unknownFn: null,
        };
        typeof a.unknown == 'function' && (o.unknownFn = a.unknown),
          typeof a['boolean'] == 'boolean' && a['boolean']
            ? (o.allBools = !0)
            : []
                .concat(a['boolean'])
                .filter(Boolean)
                .forEach(function (D) {
                  o.bools[D] = !0;
                });
        var c = {};
        function l(D) {
          return c[D].some(function (V) {
            return o.bools[V];
          });
        }
        Object.keys(a.alias || {}).forEach(function (D) {
          (c[D] = [].concat(a.alias[D])),
            c[D].forEach(function (V) {
              c[V] = [D].concat(
                c[D].filter(function (de) {
                  return V !== de;
                })
              );
            });
        }),
          []
            .concat(a.string)
            .filter(Boolean)
            .forEach(function (D) {
              (o.strings[D] = !0),
                c[D] &&
                  [].concat(c[D]).forEach(function (V) {
                    o.strings[V] = !0;
                  });
            });
        var f = a['default'] || {},
          u = {
            _: [],
          };
        function h(D, V) {
          return (o.allBools && /^--[^=]+$/.test(V)) || o.strings[D] || o.bools[D] || c[D];
        }
        function d(D, V, de) {
          for (var F = D, ke = 0; ke < V.length - 1; ke++) {
            var m = V[ke];
            if (i(F, m)) return;
            F[m] === void 0 && (F[m] = {}),
              (F[m] === Object.prototype ||
                F[m] === Number.prototype ||
                F[m] === String.prototype) &&
                (F[m] = {}),
              F[m] === Array.prototype && (F[m] = []),
              (F = F[m]);
          }
          var g = V[V.length - 1];
          i(F, g) ||
            ((F === Object.prototype || F === Number.prototype || F === String.prototype) &&
              (F = {}),
            F === Array.prototype && (F = []),
            F[g] === void 0 || o.bools[g] || typeof F[g] == 'boolean'
              ? (F[g] = de)
              : Array.isArray(F[g])
                ? F[g].push(de)
                : (F[g] = [F[g], de]));
        }
        function p(D, V, de) {
          if (!(de && o.unknownFn && !h(D, de) && o.unknownFn(de) === !1)) {
            var F = !o.strings[D] && r(V) ? Number(V) : V;
            d(u, D.split('.'), F),
              (c[D] || []).forEach(function (ke) {
                d(u, ke.split('.'), F);
              });
          }
        }
        Object.keys(o.bools).forEach(function (D) {
          p(D, f[D] === void 0 ? !1 : f[D]);
        });
        var y = [];
        n.indexOf('--') !== -1 &&
          ((y = n.slice(n.indexOf('--') + 1)), (n = n.slice(0, n.indexOf('--'))));
        for (var v = 0; v < n.length; v++) {
          var $ = n[v],
            N,
            L;
          if (/^--.+=/.test($)) {
            var _ = $.match(/^--([^=]+)=([\s\S]*)$/);
            N = _[1];
            var S = _[2];
            o.bools[N] && (S = S !== 'false'), p(N, S, $);
          } else if (/^--no-.+/.test($)) (N = $.match(/^--no-(.+)/)[1]), p(N, !1, $);
          else if (/^--.+/.test($))
            (N = $.match(/^--(.+)/)[1]),
              (L = n[v + 1]),
              L !== void 0 &&
              !/^(-|--)[^-]/.test(L) &&
              !o.bools[N] &&
              !o.allBools &&
              (!c[N] || !l(N))
                ? (p(N, L, $), (v += 1))
                : /^(true|false)$/.test(L)
                  ? (p(N, L === 'true', $), (v += 1))
                  : p(N, o.strings[N] ? '' : !0, $);
          else if (/^-[^-]+/.test($)) {
            for (var O = $.slice(1, -1).split(''), I = !1, j = 0; j < O.length; j++) {
              if (((L = $.slice(j + 2)), L === '-')) {
                p(O[j], L, $);
                continue;
              }
              if (/[A-Za-z]/.test(O[j]) && L[0] === '=') {
                p(O[j], L.slice(1), $), (I = !0);
                break;
              }
              if (/[A-Za-z]/.test(O[j]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(L)) {
                p(O[j], L, $), (I = !0);
                break;
              }
              if (O[j + 1] && O[j + 1].match(/\W/)) {
                p(O[j], $.slice(j + 2), $), (I = !0);
                break;
              } else p(O[j], o.strings[O[j]] ? '' : !0, $);
            }
            (N = $.slice(-1)[0]),
              !I &&
                N !== '-' &&
                (n[v + 1] && !/^(-|--)[^-]/.test(n[v + 1]) && !o.bools[N] && (!c[N] || !l(N))
                  ? (p(N, n[v + 1], $), (v += 1))
                  : n[v + 1] && /^(true|false)$/.test(n[v + 1])
                    ? (p(N, n[v + 1] === 'true', $), (v += 1))
                    : p(N, o.strings[N] ? '' : !0, $));
          } else if (
            ((!o.unknownFn || o.unknownFn($) !== !1) &&
              u._.push(o.strings._ || !r($) ? $ : Number($)),
            a.stopEarly)
          ) {
            u._.push.apply(u._, n.slice(v + 1));
            break;
          }
        }
        return (
          Object.keys(f).forEach(function (D) {
            s(u, D.split('.')) ||
              (d(u, D.split('.'), f[D]),
              (c[D] || []).forEach(function (V) {
                d(u, V.split('.'), f[D]);
              }));
          }),
          a['--']
            ? (u['--'] = y.slice())
            : y.forEach(function (D) {
                u._.push(D);
              }),
          u
        );
      };
    },
  });
function mn(e, t) {
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : En;
  var r = e.find(function (h) {
      return h.length > 0 && h[0] !== '-';
    }),
    i = {},
    n = ['_'],
    a = [],
    o = {};
  var c;
  for (var h in t) {
    var d = t[h];
    d.type === 'subcommand'
      ? h === r && (c = d)
      : (d.alias && (i[h] = d.alias),
        d.type === 'string' || d.type === 'string[]'
          ? (n.push(h), d.deprecates && n.push.apply(n, _toConsumableArray(d.deprecates)))
          : d.type === 'boolean' &&
            (a.push(h), d.deprecates && a.push.apply(a, _toConsumableArray(d.deprecates))),
        d.global && (o[h] = d));
  }
  if (c && r) {
    var _h3 = o;
    for (var v in c.options) _h3[v] = c.options[v];
    var _d4 = e.filter(function (v) {
        return v !== r;
      }),
      p = s.getSubcommandReporter ? s.getSubcommandReporter(r) : void 0,
      y = mn(_d4, _h3, p);
    return _defineProperty(_defineProperty({}, r, y), '_', []);
  }
  var l = (0, yn['default'])(e, {
      string: n,
      boolean: a,
      alias: i,
    }),
    f = {},
    u = l;
  (f._ = l._.map(function (h) {
    return String(h);
  }).filter(function (h) {
    return h.length > 0;
  })),
    delete u._;
  for (var _h4 in t) {
    var _d5 = t[_h4];
    if (_d5.type === 'subcommand') continue;
    _d5.alias && delete u[_d5.alias];
    var _p6 = u[_h4];
    if (_d5.deprecates) {
      var _iterator52 = _createForOfIteratorHelper(_d5.deprecates),
        _step52;
      try {
        for (_iterator52.s(); !(_step52 = _iterator52.n()).done; ) {
          var _y = _step52.value;
          u.hasOwnProperty(_y) &&
            (_p6 ||
              ((_p6 = u[_y]),
              _p6 && s.onDeprecatedOption(_y, _d5.deprecationMessage || E(1865, null, _h4))),
            delete u[_y]);
        }
      } catch (err) {
        _iterator52.e(err);
      } finally {
        _iterator52.f();
      }
    }
    if (_typeof(_p6) < 'u') {
      if (_d5.type === 'string[]') {
        if ((Array.isArray(_p6) || (_p6 = [_p6]), !_d5.allowEmptyValue)) {
          var _y2 = _p6.filter(function (v) {
            return v.length > 0;
          });
          _y2.length !== _p6.length && (s.onEmptyValue(_h4), (_p6 = _y2.length > 0 ? _y2 : void 0));
        }
      } else
        _d5.type === 'string' &&
          (Array.isArray(_p6)
            ? ((_p6 = _p6.pop()), s.onMultipleValues(_h4, _p6))
            : !_p6 && !_d5.allowEmptyValue && (s.onEmptyValue(_h4), (_p6 = void 0)));
      (f[_h4] = _p6), _d5.deprecationMessage && s.onDeprecatedOption(_h4, _d5.deprecationMessage);
    }
    delete u[_h4];
  }
  for (var _h5 in u) s.onUnknownOption(_h5);
  return f;
}
function S0(e, t) {
  var s = '';
  return (
    t.args &&
      (Array.isArray(t.args)
        ? (s = ' <'.concat(t.args.join('> <'), '>'))
        : (s = ' <'.concat(t.args, '>'))),
    t.alias ? '-'.concat(t.alias, ' --').concat(e).concat(s) : '--'.concat(e).concat(s)
  );
}
function D0(e, t) {
  var s = [];
  for (var r in e) {
    var i = e[r],
      n = S0(r, i);
    s.push([n, i.description]);
  }
  return bn(s, t);
}
function bn(e, t) {
  var r =
    e.reduce(function (a, o) {
      return Math.max(a, o[0].length);
    }, 12) +
    2 +
    1;
  if (t - r < 25)
    return e.reduce(function (a, o) {
      return a.concat(['  '.concat(o[0]), '      '.concat(o[1])]);
    }, []);
  var i = t - r - 1,
    n = [];
  var _iterator53 = _createForOfIteratorHelper(e),
    _step53;
  try {
    for (_iterator53.s(); !(_step53 = _iterator53.n()).done; ) {
      var a = _step53.value;
      var o = a[0],
        c = P0(a[1], i),
        l = wn(r - o.length - 2);
      n.push('  ' + o + l + c[0]);
      for (var f = 1; f < c.length; f++) n.push(wn(r) + c[f]);
    }
  } catch (err) {
    _iterator53.e(err);
  } finally {
    _iterator53.f();
  }
  return n;
}
function wn(e) {
  return ' '.repeat(e);
}
function P0(e, t) {
  var s = [];
  for (; e.length; ) {
    var r = e.length < t ? e.length : e.lastIndexOf(' ', t),
      i = e.slice(0, r).trim();
    (e = e.slice(r)), s.push(i);
  }
  return s;
}
function x0(e, t, s, r, i) {
  var n = (process.stdout.isTTY && process.stdout.columns) || 80,
    a =
      (i === null || i === void 0 ? void 0 : i.noInputFiles) !== !0
        ? '['.concat(E(1866, null), '...]')
        : '',
    o = [''.concat(e, ' ').concat(s)];
  o.push(''),
    o.push(''.concat(E(1867, null), ': ').concat(t, ' [').concat(E(1868, null), ']').concat(a)),
    o.push(''),
    (i === null || i === void 0 ? void 0 : i.noPipe) !== !0 &&
      (z ? o.push(E(1869, null, t)) : o.push(E(1870, null, t)), o.push(''));
  var c = {},
    l = [];
  for (var f in r) {
    var u = r[f];
    if (u.type === 'subcommand')
      u.description &&
        l.push({
          command: f,
          description: u.description,
        });
    else if (u.description && u.cat) {
      var h = c[u.cat];
      h || (c[u.cat] = h = {}), (h[f] = u);
    }
  }
  for (var _f4 in c) {
    var _u3 = _f4,
      _h6 = c[_u3];
    _h6 && (o.push(vn[_u3]), o.push.apply(o, _toConsumableArray(D0(_h6, n))), o.push(''));
  }
  return (
    l.length &&
      (o.push(E(1871, null)),
      o.push.apply(
        o,
        _toConsumableArray(
          bn(
            l.map(function (f) {
              return [f.command, f.description];
            }),
            n
          )
        )
      ),
      o.push('')),
    o.join('\n')
  );
}
function L0(e, t) {
  return ''
    .concat(e || E(1872, null), '\n')
    .concat(t || E(1873, null), '\n')
    .concat(process.arch);
}
var yn,
  vn,
  s1,
  us,
  En,
  _n = C({
    'out-build/vs/platform/environment/node/argv.js':
      function outBuild_vs_platform_environment_node_argvJs() {
        'use strict';

        (yn = oo(O0(), 1)),
          Y(),
          Ut(),
          (vn = {
            o: E(1825, null),
            e: E(1826, null),
            t: E(1827, null),
          }),
          (s1 = ['tunnel', 'serve-web']),
          (us = {
            tunnel: {
              type: 'subcommand',
              description:
                'Make the current machine accessible from vscode.dev or other machines through a secure tunnel',
              options: {
                'cli-data-dir': {
                  type: 'string',
                  args: 'dir',
                  description: E(1828, null),
                },
                'disable-telemetry': {
                  type: 'boolean',
                },
                'telemetry-level': {
                  type: 'string',
                },
                user: {
                  type: 'subcommand',
                  options: {
                    login: {
                      type: 'subcommand',
                      options: {
                        provider: {
                          type: 'string',
                        },
                        'access-token': {
                          type: 'string',
                        },
                      },
                    },
                  },
                },
              },
            },
            'serve-web': {
              type: 'subcommand',
              description: 'Run a server that displays the editor UI in browsers.',
              options: {
                'cli-data-dir': {
                  type: 'string',
                  args: 'dir',
                  description: E(1829, null),
                },
                'disable-telemetry': {
                  type: 'boolean',
                },
                'telemetry-level': {
                  type: 'string',
                },
              },
            },
            diff: {
              type: 'boolean',
              cat: 'o',
              alias: 'd',
              args: ['file', 'file'],
              description: E(1830, null),
            },
            merge: {
              type: 'boolean',
              cat: 'o',
              alias: 'm',
              args: ['path1', 'path2', 'base', 'result'],
              description: E(1831, null),
            },
            add: {
              type: 'boolean',
              cat: 'o',
              alias: 'a',
              args: 'folder',
              description: E(1832, null),
            },
            remove: {
              type: 'boolean',
              cat: 'o',
              args: 'folder',
              description: E(1833, null),
            },
            goto: {
              type: 'boolean',
              cat: 'o',
              alias: 'g',
              args: 'file:line[:character]',
              description: E(1834, null),
            },
            'new-window': {
              type: 'boolean',
              cat: 'o',
              alias: 'n',
              description: E(1835, null),
            },
            'reuse-window': {
              type: 'boolean',
              cat: 'o',
              alias: 'r',
              description: E(1836, null),
            },
            wait: {
              type: 'boolean',
              cat: 'o',
              alias: 'w',
              description: E(1837, null),
            },
            waitMarkerFilePath: {
              type: 'string',
            },
            locale: {
              type: 'string',
              cat: 'o',
              args: 'locale',
              description: E(1838, null),
            },
            'user-data-dir': {
              type: 'string',
              cat: 'o',
              args: 'dir',
              description: E(1839, null),
            },
            profile: {
              type: 'string',
              cat: 'o',
              args: 'profileName',
              description: E(1840, null),
            },
            help: {
              type: 'boolean',
              cat: 'o',
              alias: 'h',
              description: E(1841, null),
            },
            'extensions-dir': {
              type: 'string',
              deprecates: ['extensionHomePath'],
              cat: 'e',
              args: 'dir',
              description: E(1842, null),
            },
            'extensions-download-dir': {
              type: 'string',
            },
            'agent-extensions-download-dir': {
              type: 'string',
            },
            'builtin-extensions-dir': {
              type: 'string',
            },
            'list-extensions': {
              type: 'boolean',
              cat: 'e',
              description: E(1843, null),
            },
            'show-versions': {
              type: 'boolean',
              cat: 'e',
              description: E(1844, null),
            },
            category: {
              type: 'string',
              allowEmptyValue: !0,
              cat: 'e',
              description: E(1845, null),
              args: 'category',
            },
            'install-extension': {
              type: 'string[]',
              cat: 'e',
              args: 'ext-id | path',
              description: E(1846, null),
            },
            'pre-release': {
              type: 'boolean',
              cat: 'e',
              description: E(1847, null),
            },
            'uninstall-extension': {
              type: 'string[]',
              cat: 'e',
              args: 'ext-id',
              description: E(1848, null),
            },
            'update-extensions': {
              type: 'boolean',
              cat: 'e',
              description: E(1849, null),
            },
            'enable-proposed-api': {
              type: 'string[]',
              allowEmptyValue: !0,
              cat: 'e',
              args: 'ext-id',
              description: E(1850, null),
            },
            version: {
              type: 'boolean',
              cat: 't',
              alias: 'v',
              description: E(1851, null),
            },
            verbose: {
              type: 'boolean',
              cat: 't',
              global: !0,
              description: E(1852, null),
            },
            log: {
              type: 'string[]',
              cat: 't',
              args: 'level',
              global: !0,
              description: E(1853, null),
            },
            status: {
              type: 'boolean',
              alias: 's',
              cat: 't',
              description: E(1854, null),
            },
            'prof-startup': {
              type: 'boolean',
              cat: 't',
              description: E(1855, null),
            },
            'prof-append-timers': {
              type: 'string',
            },
            'prof-duration-markers': {
              type: 'string[]',
            },
            'prof-duration-markers-file': {
              type: 'string',
            },
            'no-cached-data': {
              type: 'boolean',
            },
            'prof-startup-prefix': {
              type: 'string',
            },
            'prof-v8-extensions': {
              type: 'boolean',
            },
            'disable-extensions': {
              type: 'boolean',
              deprecates: ['disableExtensions'],
              cat: 't',
              description: E(1856, null),
            },
            'disable-extension': {
              type: 'string[]',
              cat: 't',
              args: 'ext-id',
              description: E(1857, null),
            },
            sync: {
              type: 'string',
              cat: 't',
              description: E(1858, null),
              args: ['on | off'],
            },
            'inspect-extensions': {
              type: 'string',
              allowEmptyValue: !0,
              deprecates: ['debugPluginHost'],
              args: 'port',
              cat: 't',
              description: E(1859, null),
            },
            'inspect-brk-extensions': {
              type: 'string',
              allowEmptyValue: !0,
              deprecates: ['debugBrkPluginHost'],
              args: 'port',
              cat: 't',
              description: E(1860, null),
            },
            'disable-lcd-text': {
              type: 'boolean',
              cat: 't',
              description: E(1861, null),
            },
            'disable-gpu': {
              type: 'boolean',
              cat: 't',
              description: E(1862, null),
            },
            'disable-chromium-sandbox': {
              type: 'boolean',
              cat: 't',
              description: E(1863, null),
            },
            sandbox: {
              type: 'boolean',
            },
            telemetry: {
              type: 'boolean',
              cat: 't',
              description: E(1864, null),
            },
            remote: {
              type: 'string',
              allowEmptyValue: !0,
            },
            'folder-uri': {
              type: 'string[]',
              cat: 'o',
              args: 'uri',
            },
            'file-uri': {
              type: 'string[]',
              cat: 'o',
              args: 'uri',
            },
            'locate-extension': {
              type: 'string[]',
            },
            extensionDevelopmentPath: {
              type: 'string[]',
            },
            extensionDevelopmentKind: {
              type: 'string[]',
            },
            extensionTestsPath: {
              type: 'string',
            },
            extensionEnvironment: {
              type: 'string',
            },
            debugId: {
              type: 'string',
            },
            debugRenderer: {
              type: 'boolean',
            },
            'inspect-ptyhost': {
              type: 'string',
              allowEmptyValue: !0,
            },
            'inspect-brk-ptyhost': {
              type: 'string',
              allowEmptyValue: !0,
            },
            'inspect-search': {
              type: 'string',
              deprecates: ['debugSearch'],
              allowEmptyValue: !0,
            },
            'inspect-brk-search': {
              type: 'string',
              deprecates: ['debugBrkSearch'],
              allowEmptyValue: !0,
            },
            'inspect-sharedprocess': {
              type: 'string',
              allowEmptyValue: !0,
            },
            'inspect-brk-sharedprocess': {
              type: 'string',
              allowEmptyValue: !0,
            },
            'export-default-configuration': {
              type: 'string',
            },
            'install-source': {
              type: 'string',
            },
            'enable-smoke-test-driver': {
              type: 'boolean',
            },
            logExtensionHostCommunication: {
              type: 'boolean',
            },
            'skip-release-notes': {
              type: 'boolean',
            },
            'skip-welcome': {
              type: 'boolean',
            },
            'disable-telemetry': {
              type: 'boolean',
            },
            'disable-updates': {
              type: 'boolean',
            },
            'use-inmemory-secretstorage': {
              type: 'boolean',
              deprecates: ['disable-keytar'],
            },
            'password-store': {
              type: 'string',
            },
            'disable-workspace-trust': {
              type: 'boolean',
            },
            'disable-crash-reporter': {
              type: 'boolean',
            },
            'crash-reporter-directory': {
              type: 'string',
            },
            'crash-reporter-id': {
              type: 'string',
            },
            'skip-add-to-recently-opened': {
              type: 'boolean',
            },
            'open-url': {
              type: 'boolean',
            },
            'file-write': {
              type: 'boolean',
            },
            'file-chmod': {
              type: 'boolean',
            },
            'install-builtin-extension': {
              type: 'string[]',
            },
            force: {
              type: 'boolean',
            },
            'do-not-sync': {
              type: 'boolean',
            },
            'do-not-include-pack-dependencies': {
              type: 'boolean',
            },
            trace: {
              type: 'boolean',
            },
            'trace-memory-infra': {
              type: 'boolean',
            },
            'trace-category-filter': {
              type: 'string',
            },
            'trace-options': {
              type: 'string',
            },
            'preserve-env': {
              type: 'boolean',
            },
            'force-user-env': {
              type: 'boolean',
            },
            'force-disable-user-env': {
              type: 'boolean',
            },
            'open-devtools': {
              type: 'boolean',
            },
            'disable-gpu-sandbox': {
              type: 'boolean',
            },
            logsPath: {
              type: 'string',
            },
            extHostLogsPath: {
              type: 'string',
            },
            '__enable-file-policy': {
              type: 'boolean',
            },
            editSessionId: {
              type: 'string',
            },
            continueOn: {
              type: 'string',
            },
            'locate-shell-integration-path': {
              type: 'string',
              args: ['bash', 'pwsh', 'zsh', 'fish'],
            },
            'enable-coi': {
              type: 'boolean',
            },
            'no-proxy-server': {
              type: 'boolean',
            },
            'no-sandbox': {
              type: 'boolean',
              alias: 'sandbox',
            },
            'proxy-server': {
              type: 'string',
            },
            'proxy-bypass-list': {
              type: 'string',
            },
            'proxy-pac-url': {
              type: 'string',
            },
            'js-flags': {
              type: 'string',
            },
            inspect: {
              type: 'string',
              allowEmptyValue: !0,
            },
            'inspect-brk': {
              type: 'string',
              allowEmptyValue: !0,
            },
            nolazy: {
              type: 'boolean',
            },
            'force-device-scale-factor': {
              type: 'string',
            },
            'force-renderer-accessibility': {
              type: 'boolean',
            },
            'ignore-certificate-errors': {
              type: 'boolean',
            },
            'allow-insecure-localhost': {
              type: 'boolean',
            },
            'log-net-log': {
              type: 'string',
            },
            vmodule: {
              type: 'string',
            },
            _urls: {
              type: 'string[]',
            },
            'disable-dev-shm-usage': {
              type: 'boolean',
            },
            'profile-temp': {
              type: 'boolean',
            },
            'ozone-platform': {
              type: 'string',
            },
            'enable-tracing': {
              type: 'string',
            },
            'trace-startup-format': {
              type: 'string',
            },
            'trace-startup-file': {
              type: 'string',
            },
            'trace-startup-duration': {
              type: 'string',
            },
            'xdg-portal-required-version': {
              type: 'string',
            },
            'agent-extensions-dir': {
              type: 'string',
              deprecates: ['agentExtensionHomePath'],
              cat: 'e',
              args: 'dir',
              description: 'Set the root path for agent extensions.',
            },
            'builtin-agent-extensions-dir': {
              type: 'string',
            },
            'env-runtime-dir': {
              type: 'string',
              deprecates: ['agentExtensionHomePath'],
              cat: 'e',
              args: 'dir',
              description: 'Set the root path for agent extensions.',
            },
            _: {
              type: 'string[]',
            },
          }),
          (En = {
            onUnknownOption: function onUnknownOption() {},
            onMultipleValues: function onMultipleValues() {},
            onEmptyValue: function onEmptyValue() {},
            onDeprecatedOption: function onDeprecatedOption() {},
          });
      },
  });
function k0(e, t) {
  var s = function s(c, l) {
      console.warn(E(1874, null, c, l));
    },
    r = function r(c) {
      console.warn(E(1875, null, c));
    },
    i = function i(c, l) {
      console.warn(E(1876, null, c, l));
    },
    _n5 = function n(c) {
      return {
        onUnknownOption: function onUnknownOption(l) {
          s1.includes(c) || console.warn(E(1877, null, l, c));
        },
        onMultipleValues: s,
        onEmptyValue: r,
        onDeprecatedOption: i,
        getSubcommandReporter: s1.includes(c) ? _n5 : void 0,
      };
    },
    o = mn(
      e,
      us,
      t
        ? {
            onUnknownOption: function onUnknownOption(c) {
              console.warn(E(1878, null, c));
            },
            onMultipleValues: s,
            onEmptyValue: r,
            onDeprecatedOption: i,
            getSubcommandReporter: _n5,
          }
        : void 0
    );
  return (
    o['goto'] &&
      o._.forEach(function (c) {
        return (0, _assert['default'])(/^(\w:)?[^:]+(:\d*){0,2}:?$/.test(c), E(1879, null));
      }),
    o
  );
}
function R0(e) {
  var t = e.findIndex(function (s) {
    return !/^-/.test(s);
  });
  if (t > -1)
    return [].concat(_toConsumableArray(e.slice(0, t)), _toConsumableArray(e.slice(t + 1)));
}
function T0(e) {
  var _e3 = _toArray(e),
    t = _e3.slice(2);
  return process.env.VSCODE_DEV && (t = R0(t) || []), k0(t, !0);
}
function xe(e) {
  var s = e.indexOf('--');
  for (
    var _len11 = arguments.length, t = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1;
    _key11 < _len11;
    _key11++
  ) {
    t[_key11 - 1] = arguments[_key11];
  }
  return s === -1 ? e.push.apply(e, t) : e.splice.apply(e, [s, 0].concat(t)), e;
}
var I0 = C({
  'out-build/vs/platform/environment/node/argvHelper.js':
    function outBuild_vs_platform_environment_node_argvHelperJs() {
      'use strict';

      Ut(), _n();
    },
});
function j0(e) {
  var t = e.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return $n[t] || t;
}
function F0(_x59) {
  return _F2.apply(this, arguments);
}
function _F2() {
  _F2 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee50(e) {
      var t, s, r;
      return _regeneratorRuntime().wrap(function _callee50$(_context64) {
        while (1)
          switch ((_context64.prev = _context64.next)) {
            case 0:
              s = process.env.VSCODE_CLI_ENCODING;
              s
                ? (e && console.log('Found VSCODE_CLI_ENCODING variable: '.concat(s)),
                  (t = Promise.resolve(s)))
                : z
                  ? (t = new Promise(function (i) {
                      e && console.log('Running "chcp" to detect terminal encoding...'),
                        (0, _child_process.exec)('chcp', function (n, a, o) {
                          if (a) {
                            e && console.log('Output from "chcp" command is: '.concat(a));
                            var c = Object.keys(fs);
                            for (var _i9 = 0, _c5 = c; _i9 < _c5.length; _i9++) {
                              var l = _c5[_i9];
                              if (a.indexOf(l) >= 0) return i(fs[l]);
                            }
                          }
                          return i(void 0);
                        });
                    }))
                  : (t = new Promise(function (i) {
                      e && console.log('Running "locale charmap" to detect terminal encoding...'),
                        (0, _child_process.exec)('locale charmap', function (n, a, o) {
                          return i(a);
                        });
                    }));
              _context64.next = 4;
              return t;
            case 4:
              r = _context64.sent;
              return _context64.abrupt(
                'return',
                (e && console.log('Detected raw terminal encoding: '.concat(r)),
                !r || r.toLowerCase() === 'utf-8' || r.toLowerCase() === hs ? hs : j0(r))
              );
            case 6:
            case 'end':
              return _context64.stop();
          }
      }, _callee50);
    })
  );
  return _F2.apply(this, arguments);
}
var fs,
  $n,
  hs,
  M0 = C({
    'out-build/vs/base/node/terminalEncoding.js':
      function outBuild_vs_base_node_terminalEncodingJs() {
        'use strict';

        Y(),
          (fs = {
            437: 'cp437',
            850: 'cp850',
            852: 'cp852',
            855: 'cp855',
            857: 'cp857',
            860: 'cp860',
            861: 'cp861',
            863: 'cp863',
            865: 'cp865',
            866: 'cp866',
            869: 'cp869',
            936: 'cp936',
            1252: 'cp1252',
          }),
          ($n = {
            ibm866: 'cp866',
            big5: 'cp950',
          }),
          (hs = 'utf8');
      },
  });
function V0() {
  try {
    return !process.stdin.isTTY;
  } catch (_unused11) {}
  return !1;
}
function W0(e) {
  return new Promise(function (t) {
    var s = function s() {
      return t(!0);
    };
    setTimeout(function () {
      process.stdin.removeListener('data', s), t(!1);
    }, e),
      process.stdin.once('data', s);
  });
}
function q0() {
  return mt((0, _os.tmpdir)(), 'code-stdin', 3);
}
function B0(_x60) {
  return _B2.apply(this, arguments);
}
function _B2() {
  _B2 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee51(e) {
      return _regeneratorRuntime().wrap(function _callee51$(_context65) {
        while (1)
          switch ((_context65.prev = _context65.next)) {
            case 0:
              _context65.next = 2;
              return r1.promises.appendFile(e, '');
            case 2:
              _context65.next = 4;
              return r1.promises.chmod(e, 384);
            case 4:
            case 'end':
              return _context65.stop();
          }
      }, _callee51);
    })
  );
  return _B2.apply(this, arguments);
}
function z0(_x61, _x62, _x63) {
  return _z.apply(this, arguments);
}
function _z() {
  _z = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee53(e, t, s) {
      var _yield$Promise$all, _yield$Promise$all2, r, i, n, a;
      return _regeneratorRuntime().wrap(function _callee53$(_context67) {
        while (1)
          switch ((_context67.prev = _context67.next)) {
            case 0:
              _context67.next = 2;
              return Promise.all([
                F0(t),
                Promise.resolve().then(function () {
                  return _interopRequireWildcard(require('@vscode/iconv-lite-umd'));
                }),
                B0(e),
              ]);
            case 2:
              _yield$Promise$all = _context67.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              r = _yield$Promise$all2[0];
              i = _yield$Promise$all2[1];
              i['default'].encodingExists(r) ||
                (console.log(
                  'Unsupported terminal encoding: '.concat(r, ', falling back to UTF-8.')
                ),
                (r = 'utf8'));
              (n = new J1()), (a = i['default'].getDecoder(r));
              process.stdin.on('data', function (o) {
                var c = a.write(o);
                n.queue(function () {
                  return r1.promises.appendFile(e, c);
                });
              }),
                process.stdin.on('end', function () {
                  var o = a.end();
                  n.queue(
                    /*#__PURE__*/ _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee52() {
                        return _regeneratorRuntime().wrap(
                          function _callee52$(_context66) {
                            while (1)
                              switch ((_context66.prev = _context66.next)) {
                                case 0:
                                  _context66.prev = 0;
                                  _context66.t0 = typeof o == 'string';
                                  if (!_context66.t0) {
                                    _context66.next = 5;
                                    break;
                                  }
                                  _context66.next = 5;
                                  return r1.promises.appendFile(e, o);
                                case 5:
                                  _context66.prev = 5;
                                  s === null || s === void 0 || s();
                                  return _context66.finish(5);
                                case 8:
                                case 'end':
                                  return _context66.stop();
                              }
                          },
                          _callee52,
                          null,
                          [[0, , 5, 8]]
                        );
                      })
                    )
                  );
                });
            case 9:
            case 'end':
              return _context67.stop();
          }
      }, _callee53);
    })
  );
  return _z.apply(this, arguments);
}
var H0 = C({
  'out-build/vs/platform/environment/node/stdin.js':
    function outBuild_vs_platform_environment_node_stdinJs() {
      'use strict';

      bt(), qe(), M0();
    },
});
function K0(e) {
  var t = mt((0, _os.tmpdir)());
  try {
    return (
      (0, _fs.writeFileSync)(t, ''),
      e && console.log('Marker file for --wait created: '.concat(t)),
      t
    );
  } catch (s) {
    e && console.error('Failed to create marker file for --wait: '.concat(s));
    return;
  }
}
var Q0 = C({
    'out-build/vs/platform/environment/node/wait.js':
      function outBuild_vs_platform_environment_node_waitJs() {
        'use strict';

        qe();
      },
  }),
  An,
  Y0 = C({
    'out-build/vs/base/common/uuid.js': function outBuild_vs_base_common_uuidJs() {
      'use strict';

      An = (function () {
        if (typeof crypto.randomUUID == 'function') return crypto.randomUUID.bind(crypto);
        var e = new Uint8Array(16),
          t = [];
        for (var s = 0; s < 256; s++) t.push(s.toString(16).padStart(2, '0'));
        return function () {
          crypto.getRandomValues(e), (e[6] = (e[6] & 15) | 64), (e[8] = (e[8] & 63) | 128);
          var r = 0,
            i = '';
          return (
            (i += t[e[r++]]),
            (i += t[e[r++]]),
            (i += t[e[r++]]),
            (i += t[e[r++]]),
            (i += '-'),
            (i += t[e[r++]]),
            (i += t[e[r++]]),
            (i += '-'),
            (i += t[e[r++]]),
            (i += t[e[r++]]),
            (i += '-'),
            (i += t[e[r++]]),
            (i += t[e[r++]]),
            (i += '-'),
            (i += t[e[r++]]),
            (i += t[e[r++]]),
            (i += t[e[r++]]),
            (i += t[e[r++]]),
            (i += t[e[r++]]),
            (i += t[e[r++]]),
            i
          );
        };
      })();
    },
  }),
  B,
  i1,
  ie,
  Z0 = C({
    'out-build/vs/platform/product/common/product.js':
      function outBuild_vs_platform_product_common_productJs() {
        'use strict';

        var _B$iCubeApp;
        if (
          (L1(),
          Ft(),
          Y0(),
          (i1 = globalThis.vscode),
          _typeof(i1) < 'u' && _typeof(i1.context) < 'u')
        ) {
          var e = i1.context.configuration();
          if (e) B = e.product;
          else
            throw new Error(
              'Sandbox: unable to resolve product configuration from preload script.'
            );
        } else if (globalThis._VSCODE_PRODUCT_JSON && globalThis._VSCODE_PACKAGE_JSON) {
          if (
            ((B = globalThis._VSCODE_PRODUCT_JSON),
            se.VSCODE_DEV &&
              Object.assign(B, {
                nameShort: ''.concat(B.nameShort, ' - Local'),
                nameLong: ''.concat(B.nameLong, ' - Local'),
                dataFolderName: ''.concat(B.dataFolderName, '-local'),
                serverDataFolderName: B.serverDataFolderName
                  ? ''.concat(B.serverDataFolderName, '-local')
                  : void 0,
              }),
            !B.version)
          ) {
            var _e4 = globalThis._VSCODE_PACKAGE_JSON;
            Object.assign(B, {
              version: _e4.version,
            });
          }
          se.ICUBE_EXTENSIONS_GALLERY &&
            Object.assign(B, {
              extensionsGallery: JSON.parse(se.ICUBE_EXTENSIONS_GALLERY),
            });
        } else
          (B = {}),
            Object.keys(B).length === 0 &&
              Object.assign(B, {
                version: '1.95.0-dev',
                nameShort: 'Code - OSS Dev',
                nameLong: 'Code - OSS Dev',
                applicationName: 'code-oss',
                dataFolderName: '.vscode-oss',
                urlProtocol: 'code-oss',
                reportIssueUrl: 'https://github.com/microsoft/vscode/issues/new',
                licenseName: 'MIT',
                licenseUrl: 'https://github.com/microsoft/vscode/blob/main/LICENSE.txt',
                serverLicenseUrl: 'https://github.com/microsoft/vscode/blob/main/LICENSE.txt',
              });
        if (se.IDE_ENVIRONMENT_ID) {
          var t = {
            id: se.IDE_ENVIRONMENT_ID || '',
            owner: se.IDE_OWNER || '',
            ideLang: se.IDE_LANG || '',
            ideTemplate: se.IDE_TEMPLATE || '',
            isBOE: (se.CLOUDIDE_APISERVER_BASE_URL || '').includes('-boe.'),
            apiServerBaseUrl: se.IDE_APISERVER_BASE_URL || '',
            isBuilt: !se.VSCODE_DEV,
            workspacePath: se.CLOUDIDE_WORKSPACEPATH || '',
          };
          Object.assign(B, {
            devSpaceInfo: t,
          });
        }
        B.iCubeApp ||
          Object.assign(B, {
            iCubeApp: {},
          }),
          Object.assign(B.iCubeApp, {
            envInfo: _objectSpread(
              _objectSpread(
                {},
                (_B$iCubeApp = B.iCubeApp) === null || _B$iCubeApp === void 0
                  ? void 0
                  : _B$iCubeApp.envInfo
              ),
              {},
              {
                sessionID: An(),
              }
            ),
          }),
          Object.assign(B, {
            _onDidChangeConfig: new ae(),
          }),
          (ie = B);
      },
  }),
  X0,
  ds,
  ea = C({
    'out-build/vs/platform/profiling/common/profiling.js':
      function outBuild_vs_platform_profiling_common_profilingJs() {
        'use strict';

        le(),
          sn(),
          (X0 = t1('IV8InspectProfilingService')),
          (function (e) {
            function t(r) {
              return !!(r.samples && r.timeDeltas);
            }
            e.isValidProfile = t;
            function s(r) {
              var i =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : 'noAbsolutePaths';
              var _iterator54 = _createForOfIteratorHelper(r.nodes),
                _step54;
              try {
                for (_iterator54.s(); !(_step54 = _iterator54.n()).done; ) {
                  var n = _step54.value;
                  n.callFrame &&
                    n.callFrame.url &&
                    (Ke(n.callFrame.url) || /^\w[\w\d+.-]*:\/\/\/?/.test(n.callFrame.url)) &&
                    (n.callFrame.url = re(i, ht(n.callFrame.url)));
                }
              } catch (err) {
                _iterator54.e(err);
              } finally {
                _iterator54.f();
              }
              return r;
            }
            e.rewriteAbsolutePaths = s;
          })(ds || (ds = {}));
      },
  });
function ta() {
  return process.uncHostAllowlist;
}
function On(e) {
  if (process.platform !== 'win32') return;
  var t = ta();
  if (t)
    if (typeof e == 'string') t.add(e.toLowerCase());
    else {
      var _iterator55 = _createForOfIteratorHelper(sa(e)),
        _step55;
      try {
        for (_iterator55.s(); !(_step55 = _iterator55.n()).done; ) {
          var s = _step55.value;
          On(s);
        }
      } catch (err) {
        _iterator55.e(err);
      } finally {
        _iterator55.f();
      }
    }
}
function sa(e) {
  var t = new Set();
  if (Array.isArray(e)) {
    var _iterator56 = _createForOfIteratorHelper(e),
      _step56;
    try {
      for (_iterator56.s(); !(_step56 = _iterator56.n()).done; ) {
        var s = _step56.value;
        typeof s == 'string' && t.add(s);
      }
    } catch (err) {
      _iterator56.e(err);
    } finally {
      _iterator56.f();
    }
  }
  return Array.from(t);
}
var ra = C({
    'out-build/vs/base/node/unc.js': function outBuild_vs_base_node_uncJs() {
      'use strict';
    },
  }),
  Sn = {};
io(Sn, {
  main: function main() {
    return Ln;
  },
});
function ca(e) {
  return (
    !!e['install-source'] ||
    !!e['list-extensions'] ||
    !!e['install-extension'] ||
    !!e['uninstall-extension'] ||
    !!e['update-extensions'] ||
    !!e['locate-extension'] ||
    !!e.telemetry
  );
}
function Ln(_x64) {
  return _Ln.apply(this, arguments);
}
function _Ln() {
  _Ln = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee60(e) {
      var t,
        _iterator62,
        _step62,
        _loop5,
        _ret,
        s,
        _s6,
        _s7,
        _s8,
        r,
        i,
        n,
        _i10,
        _arr2,
        _n6,
        _n7,
        a,
        o,
        _s9,
        _r11,
        _i11,
        _n8,
        f,
        _a6,
        _o7,
        _f5,
        u,
        h,
        d,
        p,
        c,
        l,
        _f6,
        _loop4,
        _i12,
        _arr3,
        _u4,
        _u5,
        _h7;
      return _regeneratorRuntime().wrap(
        function _callee60$(_context76) {
          while (1)
            switch ((_context76.prev = _context76.next)) {
              case 0:
                _context76.prev = 0;
                t = T0(e);
                _context76.next = 8;
                break;
              case 4:
                _context76.prev = 4;
                _context76.t0 = _context76['catch'](0);
                console.error(_context76.t0.message);
                return _context76.abrupt('return');
              case 8:
                _iterator62 = _createForOfIteratorHelper(s1);
                _context76.prev = 9;
                _loop5 = /*#__PURE__*/ _regeneratorRuntime().mark(function _loop5() {
                  var s, _r12, _i13;
                  return _regeneratorRuntime().wrap(function _loop5$(_context75) {
                    while (1)
                      switch ((_context75.prev = _context75.next)) {
                        case 0:
                          s = _step62.value;
                          if (!t[s]) {
                            _context75.next = 9;
                            break;
                          }
                          if (ie.tunnelApplicationName) {
                            _context75.next = 5;
                            break;
                          }
                          console.error(
                            "'".concat(s, "' command not supported in ").concat(ie.applicationName)
                          );
                          return _context75.abrupt('return', {
                            v: void 0,
                          });
                        case 5:
                          _r12 = _objectSpread({}, process.env);
                          delete _r12.ELECTRON_RUN_AS_NODE;
                          _i13 = e.slice(e.indexOf(s) + 1);
                          return _context75.abrupt('return', {
                            v: new Promise(function (n, a) {
                              var o;
                              var c = ['ignore', 'pipe', 'pipe'];
                              if (process.env.VSCODE_DEV)
                                o = (0, _child_process.spawn)(
                                  'cargo',
                                  ['run', '--', s].concat(_toConsumableArray(_i13)),
                                  {
                                    cwd: re(Nn(), 'cli'),
                                    stdio: c,
                                    env: _r12,
                                  }
                                );
                              else {
                                var _l6 =
                                    process.platform === 'darwin'
                                      ? re(Ue(Ue(process.execPath)), 'Resources', 'app')
                                      : Ue(process.execPath),
                                  _f7 = re(
                                    _l6,
                                    'bin',
                                    ''.concat(ie.tunnelApplicationName).concat(z ? '.exe' : '')
                                  );
                                o = (0, _child_process.spawn)(
                                  _f7,
                                  [s].concat(_toConsumableArray(_i13)),
                                  {
                                    cwd: Je(),
                                    stdio: c,
                                    env: _r12,
                                  }
                                );
                              }
                              o.stdout.pipe(process.stdout),
                                o.stderr.pipe(process.stderr),
                                o.on('exit', n),
                                o.on('error', a);
                            }),
                          });
                        case 9:
                        case 'end':
                          return _context75.stop();
                      }
                  }, _loop5);
                });
                _iterator62.s();
              case 12:
                if ((_step62 = _iterator62.n()).done) {
                  _context76.next = 19;
                  break;
                }
                return _context76.delegateYield(_loop5(), 't1', 14);
              case 14:
                _ret = _context76.t1;
                if (!_ret) {
                  _context76.next = 17;
                  break;
                }
                return _context76.abrupt('return', _ret.v);
              case 17:
                _context76.next = 12;
                break;
              case 19:
                _context76.next = 24;
                break;
              case 21:
                _context76.prev = 21;
                _context76.t2 = _context76['catch'](9);
                _iterator62.e(_context76.t2);
              case 24:
                _context76.prev = 24;
                _iterator62.f();
                return _context76.finish(24);
              case 27:
                if (!t.help) {
                  _context76.next = 32;
                  break;
                }
                s = ''.concat(ie.applicationName).concat(z ? '.exe' : '');
                console.log(x0(ie.nameLong, s, ie.version, us));
                _context76.next = 149;
                break;
              case 32:
                if (!t.version) {
                  _context76.next = 36;
                  break;
                }
                console.log(L0(ie.version, ie.commit));
                _context76.next = 149;
                break;
              case 36:
                if (!t['locate-shell-integration-path']) {
                  _context76.next = 52;
                  break;
                }
                _context76.t3 = t['locate-shell-integration-path'];
                _context76.next =
                  _context76.t3 === 'bash'
                    ? 40
                    : _context76.t3 === 'pwsh'
                      ? 42
                      : _context76.t3 === 'zsh'
                        ? 44
                        : _context76.t3 === 'fish'
                          ? 46
                          : 48;
                break;
              case 40:
                _s6 = 'shellIntegration-bash.sh';
                return _context76.abrupt('break', 49);
              case 42:
                _s6 = 'shellIntegration.ps1';
                return _context76.abrupt('break', 49);
              case 44:
                _s6 = 'shellIntegration-rc.zsh';
                return _context76.abrupt('break', 49);
              case 46:
                _s6 = 'shellIntegration.fish';
                return _context76.abrupt('break', 49);
              case 48:
                throw new Error('Error using --locate-shell-integration-path: Invalid shell type');
              case 49:
                console.log(
                  re(
                    Nn(),
                    'out',
                    'vs',
                    'workbench',
                    'contrib',
                    'terminal',
                    'common',
                    'scripts',
                    _s6
                  )
                );
                _context76.next = 149;
                break;
              case 52:
                if (!ca(t)) {
                  _context76.next = 61;
                  break;
                }
                process.env.VSCODE_DEV
                  ? (_s7 = './cliProcessMain.js')
                  : (_s7 = './vs/code/node/cliProcessMain.js');
                _context76.next = 56;
                return (function (specifier) {
                  return new Promise(function (r) {
                    return r(''.concat(specifier));
                  }).then(function (s) {
                    return _interopRequireWildcard(require(s));
                  });
                })(_s7);
              case 56:
                _context76.next = 58;
                return _context76.sent.main(t);
              case 58:
                return _context76.abrupt('return');
              case 61:
                if (!t['file-write']) {
                  _context76.next = 88;
                  break;
                }
                _s8 = t._[0];
                if (
                  !(
                    !_s8 ||
                    !Ke(_s8) ||
                    !(0, _fs.existsSync)(_s8) ||
                    !(0, _fs.statSync)(_s8).isFile()
                  )
                ) {
                  _context76.next = 65;
                  break;
                }
                throw new Error('Using --file-write with invalid arguments.');
              case 65:
                _context76.prev = 65;
                n = JSON.parse((0, _fs.readFileSync)(_s8, 'utf8'));
                (r = n.source), (i = n.target);
                _context76.next = 73;
                break;
              case 70:
                _context76.prev = 70;
                _context76.t4 = _context76['catch'](65);
                throw new Error('Using --file-write with invalid arguments.');
              case 73:
                if (z)
                  for (_i10 = 0, _arr2 = [r, i]; _i10 < _arr2.length; _i10++) {
                    _n6 = _arr2[_i10];
                    typeof _n6 == 'string' && n2(_n6) && On(K.file(_n6).authority);
                  }
                if (
                  !(
                    !r ||
                    !i ||
                    r === i ||
                    !Ke(r) ||
                    !Ke(i) ||
                    !(0, _fs.existsSync)(r) ||
                    !(0, _fs.statSync)(r).isFile() ||
                    !(0, _fs.existsSync)(i) ||
                    !(0, _fs.statSync)(i).isFile()
                  )
                ) {
                  _context76.next = 76;
                  break;
                }
                throw new Error('Using --file-write with invalid arguments.');
              case 76:
                _context76.prev = 76;
                (_n7 = 0), (a = !1);
                t['file-chmod'] &&
                  ((_n7 = (0, _fs.statSync)(i).mode),
                  _n7 & 128 || ((0, _fs.chmodSync)(i, _n7 | 128), (a = !0)));
                o = (0, _fs.readFileSync)(r);
                z
                  ? ((0, _fs.truncateSync)(i, 0),
                    Ye(i, o, {
                      flag: 'r+',
                    }))
                  : Ye(i, o),
                  a && (0, _fs.chmodSync)(i, _n7);
                _context76.next = 86;
                break;
              case 83:
                _context76.prev = 83;
                _context76.t5 = _context76['catch'](76);
                throw (
                  ((_context76.t5.message = 'Error using --file-write: '.concat(
                    _context76.t5.message
                  )),
                  _context76.t5)
                );
              case 86:
                _context76.next = 149;
                break;
              case 88:
                _s9 = _objectSpread(
                  _objectSpread({}, process.env),
                  {},
                  {
                    ELECTRON_NO_ATTACH_CONSOLE: '1',
                  }
                );
                delete _s9.ELECTRON_RUN_AS_NODE;
                _r11 = [];
                t.verbose && (_s9.ELECTRON_ENABLE_LOGGING = '1'),
                  (t.verbose || t.status) &&
                    _r11.push(
                      /*#__PURE__*/ (function () {
                        var _ref31 = _asyncToGenerator(
                          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee54(f) {
                            var _f$stdout, _f$stderr;
                            return _regeneratorRuntime().wrap(function _callee54$(_context68) {
                              while (1)
                                switch ((_context68.prev = _context68.next)) {
                                  case 0:
                                    (_f$stdout = f.stdout) !== null &&
                                      _f$stdout !== void 0 &&
                                      _f$stdout.on('data', function (u) {
                                        return console.log(u.toString('utf8').trim());
                                      });
                                    (_f$stderr = f.stderr) !== null &&
                                      _f$stderr !== void 0 &&
                                      _f$stderr.on('data', function (u) {
                                        return console.log(u.toString('utf8').trim());
                                      });
                                    _context68.next = 4;
                                    return oe.toPromise(oe.fromNodeEventEmitter(f, 'exit'));
                                  case 4:
                                  case 'end':
                                    return _context68.stop();
                                }
                            }, _callee54);
                          })
                        );
                        return function (_x69) {
                          return _ref31.apply(this, arguments);
                        };
                      })()
                    );
                _i11 = t._.some(function (f) {
                  return f === '-';
                });
                _i11 &&
                  ((t._ = t._.filter(function (f) {
                    return f !== '-';
                  })),
                  (e = e.filter(function (f) {
                    return f !== '-';
                  })));
                if (!V0()) {
                  _context76.next = 113;
                  break;
                }
                if (!_i11) {
                  _context76.next = 112;
                  break;
                }
                _n8 = q0();
                _context76.prev = 97;
                f = new Y1();
                _context76.next = 101;
                return z0(_n8, !!t.verbose, function () {
                  return f.complete();
                });
              case 101:
                t.wait ||
                  _r11.push(function () {
                    return f.p;
                  });
                xe(e, _n8);
                xe(e, '--skip-add-to-recently-opened');
                console.log('Reading from stdin via: '.concat(_n8));
                _context76.next = 110;
                break;
              case 107:
                _context76.prev = 107;
                _context76.t6 = _context76['catch'](97);
                console.log(
                  'Failed to create file to read via stdin: '.concat(_context76.t6.toString())
                ),
                  (_n8 = void 0);
              case 110:
                _context76.next = 113;
                break;
              case 112:
                _r11.push(function (f) {
                  return W0(1e3).then(function (u) {
                    u &&
                      console.log(
                        z
                          ? "Run with '"
                              .concat(
                                ie.applicationName,
                                " -' to read output from another program (e.g. 'echo Hello World | "
                              )
                              .concat(ie.applicationName, " -').")
                          : "Run with '"
                              .concat(
                                ie.applicationName,
                                " -' to read from stdin (e.g. 'ps aux | grep code | "
                              )
                              .concat(ie.applicationName, " -').")
                      );
                  });
                });
              case 113:
                _a6 = Fe && (0, _os.release)() > '20.0.0';
                if (
                  !(t.wait &&
                    ((_o7 = K0(t.verbose)),
                    _o7 && xe(e, '--waitMarkerFilePath', _o7),
                    _r11.push(
                      /*#__PURE__*/ (function () {
                        var _ref32 = _asyncToGenerator(
                          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee55(f) {
                            var u;
                            return _regeneratorRuntime().wrap(
                              function _callee55$(_context69) {
                                while (1)
                                  switch ((_context69.prev = _context69.next)) {
                                    case 0:
                                      _a6
                                        ? (u = new Promise(function (h) {
                                            f.on('exit', function (d, p) {
                                              (d !== 0 || p) && h();
                                            });
                                          }))
                                        : (u = oe.toPromise(oe.fromNodeEventEmitter(f, 'exit')));
                                      _context69.prev = 1;
                                      _context69.next = 4;
                                      return Promise.race([
                                        Pi(_o7),
                                        oe.toPromise(oe.fromNodeEventEmitter(f, 'error')),
                                        u,
                                      ]);
                                    case 4:
                                      _context69.prev = 4;
                                      _n8 && (0, _fs.unlinkSync)(_n8);
                                      return _context69.finish(4);
                                    case 7:
                                    case 'end':
                                      return _context69.stop();
                                  }
                              },
                              _callee55,
                              null,
                              [[1, , 4, 7]]
                            );
                          })
                        );
                        return function (_x70) {
                          return _ref32.apply(this, arguments);
                        };
                      })()
                    )),
                  t['prof-startup'])
                ) {
                  _context76.next = 129;
                  break;
                }
                _f5 = '127.0.0.1';
                _context76.next = 118;
                return ss(Go(), 10, 3e3);
              case 118:
                u = _context76.sent;
                _context76.next = 121;
                return ss(u + 1, 10, 3e3);
              case 121:
                h = _context76.sent;
                _context76.next = 124;
                return ss(h + 1, 10, 3e3);
              case 124:
                d = _context76.sent;
                if (!(u * h * d === 0)) {
                  _context76.next = 127;
                  break;
                }
                throw new Error(
                  'Failed to find free ports for profiler. Make sure to shutdown all instances of the editor first.'
                );
              case 127:
                p = mt((0, _os.homedir)(), 'prof');
                xe(e, '--inspect-brk='.concat(_f5, ':').concat(u)),
                  xe(e, '--remote-debugging-port='.concat(h)),
                  xe(e, '--inspect-brk-extensions='.concat(d)),
                  xe(e, '--prof-startup-prefix', p),
                  xe(e, '--no-cached-data'),
                  Ye(p, e.slice(-6).join('|')),
                  _r11.push(
                    /*#__PURE__*/ (function () {
                      var _ref33 = _asyncToGenerator(
                        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee58(y) {
                          var v, $, N, L, _, S, O;
                          return _regeneratorRuntime().wrap(
                            function _callee58$(_context72) {
                              while (1)
                                switch ((_context72.prev = _context72.next)) {
                                  case 0:
                                    v = /*#__PURE__*/ (function () {
                                      function v() {
                                        _classCallCheck(this, v);
                                      }
                                      return _createClass(v, null, [
                                        {
                                          key: 'start',
                                          value: (function () {
                                            var _start = _asyncToGenerator(
                                              /*#__PURE__*/ _regeneratorRuntime().mark(
                                                function _callee57(N, L, _) {
                                                  var S, O;
                                                  return _regeneratorRuntime().wrap(
                                                    function _callee57$(_context71) {
                                                      while (1)
                                                        switch (
                                                          (_context71.prev = _context71.next)
                                                        ) {
                                                          case 0:
                                                            _context71.next = 2;
                                                            return Promise.resolve().then(
                                                              function () {
                                                                return _interopRequireWildcard(
                                                                  require('v8-inspect-profiler')
                                                                );
                                                              }
                                                            );
                                                          case 2:
                                                            S = _context71.sent;
                                                            _context71.prev = 3;
                                                            _context71.next = 6;
                                                            return S.startProfiling(
                                                              _objectSpread(
                                                                _objectSpread({}, _),
                                                                {},
                                                                {
                                                                  host: _f5,
                                                                }
                                                              )
                                                            );
                                                          case 6:
                                                            O = _context71.sent;
                                                            _context71.next = 12;
                                                            break;
                                                          case 9:
                                                            _context71.prev = 9;
                                                            _context71.t0 = _context71['catch'](3);
                                                            console.error(
                                                              "FAILED to start profiling for '"
                                                                .concat(N, "' on port '")
                                                                .concat(_.port, "'")
                                                            );
                                                          case 12:
                                                            return _context71.abrupt('return', {
                                                              stop: function stop() {
                                                                return _asyncToGenerator(
                                                                  /*#__PURE__*/ _regeneratorRuntime().mark(
                                                                    function _callee56() {
                                                                      var I, j;
                                                                      return _regeneratorRuntime().wrap(
                                                                        function _callee56$(
                                                                          _context70
                                                                        ) {
                                                                          while (1)
                                                                            switch (
                                                                              (_context70.prev =
                                                                                _context70.next)
                                                                            ) {
                                                                              case 0:
                                                                                if (O) {
                                                                                  _context70.next = 2;
                                                                                  break;
                                                                                }
                                                                                return _context70.abrupt(
                                                                                  'return'
                                                                                );
                                                                              case 2:
                                                                                I = '';
                                                                                _context70.next = 5;
                                                                                return O.stop();
                                                                              case 5:
                                                                                j = _context70.sent;
                                                                                process.env
                                                                                  .VSCODE_DEV ||
                                                                                  ((j.profile =
                                                                                    ds.rewriteAbsolutePaths(
                                                                                      j.profile,
                                                                                      'piiRemoved'
                                                                                    )),
                                                                                  (I = '.txt')),
                                                                                  Ye(
                                                                                    ''
                                                                                      .concat(
                                                                                        L,
                                                                                        '.'
                                                                                      )
                                                                                      .concat(
                                                                                        N,
                                                                                        '.cpuprofile'
                                                                                      )
                                                                                      .concat(I),
                                                                                    JSON.stringify(
                                                                                      j.profile,
                                                                                      void 0,
                                                                                      4
                                                                                    )
                                                                                  );
                                                                              case 7:
                                                                              case 'end':
                                                                                return _context70.stop();
                                                                            }
                                                                        },
                                                                        _callee56
                                                                      );
                                                                    }
                                                                  )
                                                                )();
                                                              },
                                                            });
                                                          case 13:
                                                          case 'end':
                                                            return _context71.stop();
                                                        }
                                                    },
                                                    _callee57,
                                                    null,
                                                    [[3, 9]]
                                                  );
                                                }
                                              )
                                            );
                                            function start(_x72, _x73, _x74) {
                                              return _start.apply(this, arguments);
                                            }
                                            return start;
                                          })(),
                                        },
                                      ]);
                                    })();
                                    _context72.prev = 1;
                                    $ = v.start('main', p, {
                                      port: u,
                                    });
                                    N = v.start('extHost', p, {
                                      port: d,
                                      tries: 300,
                                    });
                                    L = v.start('renderer', p, {
                                      port: h,
                                      tries: 200,
                                      target: function target(I) {
                                        return I.filter(function (j) {
                                          return j.webSocketDebuggerUrl
                                            ? j.type === 'page'
                                              ? j.url.indexOf('workbench/workbench.html') > 0 ||
                                                j.url.indexOf('workbench/workbench-dev.html') > 0
                                              : !0
                                            : !1;
                                        })[0];
                                      },
                                    });
                                    _context72.next = 7;
                                    return $;
                                  case 7:
                                    _ = _context72.sent;
                                    _context72.next = 10;
                                    return N;
                                  case 10:
                                    S = _context72.sent;
                                    _context72.next = 13;
                                    return L;
                                  case 13:
                                    O = _context72.sent;
                                    _context72.next = 16;
                                    return Pi(p);
                                  case 16:
                                    _context72.next = 18;
                                    return _.stop();
                                  case 18:
                                    _context72.next = 20;
                                    return O.stop();
                                  case 20:
                                    _context72.next = 22;
                                    return S.stop();
                                  case 22:
                                    Ye(p, '');
                                    _context72.next = 28;
                                    break;
                                  case 25:
                                    _context72.prev = 25;
                                    _context72.t0 = _context72['catch'](1);
                                    console.error(
                                      'Failed to profile startup. Make sure to quit Code first.'
                                    );
                                  case 28:
                                  case 'end':
                                    return _context72.stop();
                                }
                            },
                            _callee58,
                            null,
                            [[1, 25]]
                          );
                        })
                      );
                      return function (_x71) {
                        return _ref33.apply(this, arguments);
                      };
                    })()
                  );
              case 129:
                c = {
                  detached: !0,
                  env: _s9,
                };
                t.verbose || (c.stdio = 'ignore');
                if (_a6) {
                  _context76.next = 135;
                  break;
                }
                !t.verbose && t.status && (c.stdio = ['ignore', 'pipe', 'ignore']),
                  (l = (0, _child_process.spawn)(process.execPath, e.slice(2), c));
                _context76.next = 148;
                break;
              case 135:
                _f6 = ['-n', '-g'];
                if (!(_f6.push('-a', process.execPath), t.verbose || t.status)) {
                  _context76.next = 145;
                  break;
                }
                _f6.push('--wait-apps');
                _loop4 = /*#__PURE__*/ _regeneratorRuntime().mark(function _loop4() {
                  var u, h;
                  return _regeneratorRuntime().wrap(function _loop4$(_context74) {
                    while (1)
                      switch ((_context74.prev = _context74.next)) {
                        case 0:
                          u = _arr3[_i12];
                          h = mt((0, _os.tmpdir)(), 'code-'.concat(u));
                          Ye(h, ''),
                            _f6.push('--'.concat(u), h),
                            _r11.push(
                              /*#__PURE__*/ (function () {
                                var _ref34 = _asyncToGenerator(
                                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee59(d) {
                                    var _p7, y;
                                    return _regeneratorRuntime().wrap(
                                      function _callee59$(_context73) {
                                        while (1)
                                          switch ((_context73.prev = _context73.next)) {
                                            case 0:
                                              _context73.prev = 0;
                                              (_p7 =
                                                u === 'stdout' ? process.stdout : process.stderr),
                                                (y = new Qe());
                                              d.on('close', function () {
                                                setTimeout(function () {
                                                  return y.dispose(!0);
                                                }, 200);
                                              });
                                              _context73.next = 5;
                                              return $0(
                                                h,
                                                function (v) {
                                                  return _p7.write(v);
                                                },
                                                function () {},
                                                y.token
                                              );
                                            case 5:
                                              _context73.prev = 5;
                                              (0, _fs.unlinkSync)(h);
                                              return _context73.finish(5);
                                            case 8:
                                            case 'end':
                                              return _context73.stop();
                                          }
                                      },
                                      _callee59,
                                      null,
                                      [[0, , 5, 8]]
                                    );
                                  })
                                );
                                return function (_x75) {
                                  return _ref34.apply(this, arguments);
                                };
                              })()
                            );
                        case 3:
                        case 'end':
                          return _context74.stop();
                      }
                  }, _loop4);
                });
                (_i12 = 0), (_arr3 = t.verbose ? ['stdout', 'stderr'] : ['stdout']);
              case 140:
                if (!(_i12 < _arr3.length)) {
                  _context76.next = 145;
                  break;
                }
                return _context76.delegateYield(_loop4(), 't7', 142);
              case 142:
                _i12++;
                _context76.next = 140;
                break;
              case 145:
                for (_u4 in _s9)
                  _u4 !== '_' &&
                    (_f6.push('--env'), _f6.push(''.concat(_u4, '=').concat(_s9[_u4])));
                if (
                  (_f6.push.apply(_f6, ['--args'].concat(_toConsumableArray(e.slice(2)))),
                  _s9.VSCODE_DEV)
                ) {
                  (_u5 = '.'), (_h7 = _f6.indexOf(_u5));
                  _h7 !== -1 && (_f6[_h7] = R1(_u5));
                }
                l = (0, _child_process.spawn)(
                  'open',
                  _f6,
                  _objectSpread(
                    _objectSpread({}, c),
                    {},
                    {
                      env: {},
                    }
                  )
                );
              case 148:
                return _context76.abrupt(
                  'return',
                  Promise.all(
                    _r11.map(function (f) {
                      return f(l);
                    })
                  )
                );
              case 149:
              case 'end':
                return _context76.stop();
            }
        },
        _callee60,
        null,
        [
          [0, 4],
          [9, 21, 24, 27],
          [65, 70],
          [76, 83],
          [97, 107],
        ]
      );
    })
  );
  return _Ln.apply(this, arguments);
}
function Nn() {
  return Ue(hi.asFileUri('').fsPath);
}
function kn(e) {
  setTimeout(function () {
    return process.exit(e);
  }, 0);
}
var la = C({
  'out-build/vs/code/node/cli.js': function outBuild_vs_code_node_cliJs() {
    'use strict';

    Ft(),
      le(),
      Y(),
      Jo(),
      ts(),
      H2(),
      A0(),
      _n(),
      I0(),
      H0(),
      Q0(),
      Z0(),
      Gt(),
      qe(),
      ea(),
      W1(),
      L1(),
      ra(),
      ze(),
      bt(),
      Ln(process.argv)
        .then(function () {
          return kn(0);
        })
        .then(null, function (e) {
          console.error(e.message || e.stack || e), kn(1);
        });
  },
});
delete process.env.VSCODE_CWD;
var t4 = (0, _nodeModule.createRequire)(import.meta.url),
  pa = fe.dirname((0, _url.fileURLToPath)(import.meta.url));
if (((Error.stackTraceLimit = 100), !process.env.VSCODE_HANDLES_SIGPIPE)) {
  var e = !1;
  process.on('SIGPIPE', function () {
    e || ((e = !0), console.error(new Error('Unexpected SIGPIPE')));
  });
}
function ga() {
  try {
    typeof process.env.VSCODE_CWD != 'string' && (process.env.VSCODE_CWD = process.cwd()),
      process.platform === 'win32' && process.chdir(fe.dirname(process.execPath));
  } catch (e) {
    console.error(e);
  }
}
ga();
function ma(e) {
  var t = fe.dirname(pa);
  function s() {
    return process.env.VSCODE_DEV
      ? t
      : process.platform === 'darwin'
        ? fe.dirname(fe.dirname(fe.dirname(t)))
        : fe.dirname(fe.dirname(t));
  }
  function r() {
    if (process.env.VSCODE_PORTABLE) return process.env.VSCODE_PORTABLE;
    if (process.platform === 'win32' || process.platform === 'linux') return fe.join(s(), 'data');
    var c = e.portable || ''.concat(e.applicationName, '-portable-data');
    return fe.join(fe.dirname(s()), c);
  }
  var i = r(),
    n = !('target' in e) && Rn.existsSync(i),
    a = fe.join(i, 'tmp'),
    o = n && Rn.existsSync(a);
  return (
    n ? (process.env.VSCODE_PORTABLE = i) : delete process.env.VSCODE_PORTABLE,
    o &&
      (process.platform === 'win32'
        ? ((process.env.TMP = a), (process.env.TEMP = a))
        : (process.env.TMPDIR = a)),
    {
      portableDataPath: i,
      isPortable: n,
    }
  );
}
var In = (0, _nodeModule.createRequire)(import.meta.url),
  ms = {
    BUILD_INSERT_PRODUCT_CONFIGURATION: 'BUILD_INSERT_PRODUCT_CONFIGURATION',
  };
ms.BUILD_INSERT_PRODUCT_CONFIGURATION && (ms = In('../product.json'));
var bs = {
  name: 'Trae',
  version: '1.98.2',
  distro: 'de81a091068fb03e277543d4f4900db005edf9f3',
  author: {
    name: 'Microsoft Corporation',
  },
  license: 'MIT',
  main: './out/main.js',
  type: 'module',
  private: true,
  scripts: {
    test: 'echo Please run any of the test scripts from the scripts folder.',
    'test-browser': 'npx playwright install && node test/unit/browser/index.js',
    'test-browser-no-install': 'node test/unit/browser/index.js',
    'test-node': 'mocha test/unit/node/index.js --delay --ui=tdd --timeout=5000 --exit',
    'test-icube': 'mocha test/unit/node/icube.js --delay --ui=tdd --timeout=5000 --exit',
    'test-extension': 'vscode-test',
    preinstall: 'node build/npm/icube-preinstall.js && node build/npm/preinstall.js',
    postinstall:
      'node build/npm/postinstall.js && node build/npm/update-stable-webcomponents-pkg.js',
    'watch-stable-webcomponents': 'cd stable-webcomponents && npm run watch',
    'tron-memorize': 'tron-client memorize',
    'watch:debug':
      'npm-run-all -lp watch-client:inline-sourcemap watch-extensions:inline-sourcemap',
    'watch-client:inline-sourcemap':
      'INLINE_SOURCEMAP=1 node --max_old_space_size=4095 ./node_modules/gulp/bin/gulp.js watch-client',
    compile: 'node ./node_modules/gulp/bin/gulp.js compile',
    watch: 'npm-run-all -lp watch-client watch-extensions',
    watchd: 'deemon npm run watch',
    'watch-webd': 'deemon npm run watch-web',
    'kill-watchd': 'deemon --kill npm run watch',
    'kill-watch-webd': 'deemon --kill npm run watch-web',
    'restart-watchd': 'deemon --restart npm run watch',
    'restart-watch-webd': 'deemon --restart npm run watch-web',
    'watch-client': 'node --max-old-space-size=8192 ./node_modules/gulp/bin/gulp.js watch-client',
    'watch-clientd': 'deemon npm run watch-client',
    'kill-watch-clientd': 'deemon --kill npm run watch-client',
    'watch-extensions':
      'node --max-old-space-size=8192 ./node_modules/gulp/bin/gulp.js watch-extensions watch-extension-media',
    'watch-extensionsd': 'deemon npm run watch-extensions',
    'kill-watch-extensionsd': 'deemon --kill npm run watch-extensions',
    precommit: 'node build/hygiene.js',
    gulp: 'node --max-old-space-size=10240 ./node_modules/gulp/bin/gulp.js',
    'gulp-stable': 'node --max-old-space-size=32768 ./node_modules/gulp/bin/gulp.js',
    electron: 'node build/lib/electron',
    '7z': '7z',
    'update-grammars': 'node build/npm/update-all-grammars.mjs',
    'update-localization-extension': 'node build/npm/update-localization-extension.js',
    smoketest:
      'node build/lib/preLaunch.js && cd test/smoke && npm run compile && node test/index.js',
    'smoketest-no-compile': 'cd test/smoke && node test/index.js',
    'download-builtin-extensions': 'node build/lib/builtInExtensions.js',
    'download-builtin-extensions-cg': 'node build/lib/builtInExtensionsCG.js',
    'monaco-compile-check': 'tsc -p src/tsconfig.monaco.json --noEmit',
    'tsec-compile-check': 'node node_modules/tsec/bin/tsec -p src/tsconfig.tsec.json',
    'vscode-dts-compile-check':
      'tsc -p src/tsconfig.vscode-dts.json && tsc -p src/tsconfig.vscode-proposed-dts.json',
    'valid-layers-check': 'node build/lib/layersChecker.js',
    'update-distro': 'node build/npm/update-distro.mjs',
    web: "echo 'npm run web' is replaced by './scripts/code-server' or './scripts/code-web'",
    'compile-cli': 'gulp compile-cli',
    'compile-web': 'node ./node_modules/gulp/bin/gulp.js compile-web',
    'watch-web': 'node ./node_modules/gulp/bin/gulp.js watch-web',
    'watch-cli': 'node ./node_modules/gulp/bin/gulp.js watch-cli',
    eslint: 'node build/eslint',
    stylelint: 'node build/stylelint',
    'playwright-install': 'npm exec playwright install',
    'compile-build': 'node ./node_modules/gulp/bin/gulp.js compile-build',
    'compile-extensions-build': 'node ./node_modules/gulp/bin/gulp.js compile-extensions-build',
    'minify-vscode': 'node ./node_modules/gulp/bin/gulp.js minify-vscode',
    'minify-vscode-reh': 'node ./node_modules/gulp/bin/gulp.js minify-vscode-reh',
    'minify-vscode-reh-web': 'node ./node_modules/gulp/bin/gulp.js minify-vscode-reh-web',
    hygiene: 'node ./node_modules/gulp/bin/gulp.js hygiene',
    'core-ci': 'node ./node_modules/gulp/bin/gulp.js core-ci',
    'core-ci-pr': 'node ./node_modules/gulp/bin/gulp.js core-ci-pr',
    'extensions-ci': 'node ./node_modules/gulp/bin/gulp.js extensions-ci',
    'extensions-ci-pr': 'node ./node_modules/gulp/bin/gulp.js extensions-ci-pr',
    perf: 'node scripts/code-perf.js',
    'dev:ai':
      'bash ./scripts/code-server.sh --default-folder=../../extensions/icube-ai --without-connection-token --host=0.0.0.0',
    'dev:ai-cn':
      'export VSCODE_NLS_LOCALE=zh-cn VSCODE_NLS_META_URL=https://lf-cdn.marscode.com/obj/marscode-bucket-sg/mars/ide/91550acc7996260fa4564da33595bd1f/out/nls.metadata.json && bash ./scripts/code-server.sh --default-folder=../../extensions/icube-ai --without-connection-token --host=0.0.0.0',
    'start:ai':
      'rush update && cd ../../modules/ai && rush build -t @byted-icube/ai-modules && rush build -t @byted-icube/ai-modules-ng && rush build -t @byted-icube/desktop-modules && pnpm link --global && pnpm watch',
    'start:icube':
      'cd ../../extensions/icube-ai && pnpm install && pnpm compile && pnpm build:icube-ai && cd icube-ai && pnpm watch',
    'start:vscode':
      'cd ../../ && cd lib/vscode && npm i && npm run watch && pnpm link --global @byted-icube/ai-modules && pnpm link --global @byted-icube/ai-modules',
    'start:code': './scripts/code.sh',
    'update-build-ts-version': 'npm install typescript@next && tsc -p ./build/tsconfig.build.json',
  },
  dependencies: {
    '@byted-fe/fd': '^1.1.0',
    '@byted-icube/ai-modules-chat': 'file:../../modules/ai-chat/cdn',
    '@byted-icube/bundled-deps': 'file:../../modules/bundled-deps',
    '@byted-icube/desktop-modules': 'file:../../modules/desktop/cdn',
    '@byted-icube/env': 'file:../../packages/env/cdn',
    '@byted-icube/lite-modules': 'file:../../modules/lite/cdn',
    '@byted-icube/manager-sdk': '0.0.0-alpha.20250402',
    '@byted-icube/oj-modules': 'file:../../modules/oj/cdn',
    '@byted-icube/slardar': 'file:../../packages/slardar/cdn',
    '@byted-icube/tea': 'file:../../packages/tea/cdn',
    '@byted-icube/webcomponents': 'file:./stable-webcomponents/cdn',
    '@byted/device-register': '0.2.0',
    '@byted/frontier-web-sdk': '^1.25.9',
    '@byted/icube-runtime-installer': '^1.0.7',
    '@microsoft/1ds-core-js': '^3.2.13',
    '@microsoft/1ds-post-js': '^3.2.13',
    '@modelcontextprotocol/sdk': '1.6.0',
    '@mozilla/readability': '^0.6.0',
    '@parcel/watcher': '2.5.1',
    '@vscode/deviceid': '^0.1.1',
    '@vscode/iconv-lite-umd': '0.7.0',
    '@vscode/policy-watcher': '^1.3.0',
    '@vscode/proxy-agent': '^0.32.0',
    '@vscode/ripgrep': '^1.15.10',
    '@vscode/spdlog': '^0.15.0',
    '@vscode/sqlite3': '5.1.8-vscode',
    '@vscode/sudo-prompt': '9.3.1',
    '@vscode/tree-sitter-wasm': '^0.1.3',
    '@vscode/vscode-languagedetection': '1.0.21',
    '@vscode/windows-mutex': '^0.5.0',
    '@vscode/windows-process-tree': '^0.6.0',
    '@vscode/windows-registry': '^1.1.0',
    '@xterm/addon-clipboard': '^0.2.0-beta.81',
    '@xterm/addon-image': '^0.9.0-beta.98',
    '@xterm/addon-ligatures': '^0.10.0-beta.98',
    '@xterm/addon-progress': '^0.2.0-beta.4',
    '@xterm/addon-search': '^0.16.0-beta.98',
    '@xterm/addon-serialize': '^0.14.0-beta.98',
    '@xterm/addon-unicode11': '^0.9.0-beta.98',
    '@xterm/addon-webgl': '^0.19.0-beta.98',
    '@xterm/headless': '^5.6.0-beta.98',
    '@xterm/xterm': '^5.6.0-beta.98',
    axios: '^1.7.9',
    'electron-updater': '^6.3.9',
    'http-proxy-agent': '^7.0.0',
    'https-proxy-agent': '^7.0.2',
    jschardet: '3.1.4',
    jsdom: '^26.0.0',
    jsonrepair: '3.8.1',
    kerberos: '2.1.1',
    'lodash.merge': '^4.6.2',
    minimist: '^1.2.6',
    'native-is-elevated': '0.7.0',
    'native-keymap': '^3.3.5',
    'native-watchdog': '^1.4.1',
    'node-html-markdown': '^1.3.0',
    'node-ipc': '^9.2.1',
    'node-pty': '^1.1.0-beta31',
    open: '^8.4.2',
    qs: '^6.13.0',
    'robots-parser': '^3.0.1',
    systeminformation: '^5.25.11',
    tar: '^6.1.11',
    'tas-client-umd': '0.2.0',
    turndown: '^7.2.0',
    util: '^0.12.4',
    'v8-inspect-profiler': '^0.1.1',
    'vscode-oniguruma': '1.7.0',
    'vscode-regexpp': '^3.1.0',
    'vscode-textmate': '9.2.0',
    ws: '^8.18.0',
    yauzl: '^3.0.0',
    yazl: '^2.4.3',
  },
  devDependencies: {
    '@playwright/test': '^1.50.0',
    '@stylistic/eslint-plugin-ts': '^2.8.0',
    '@types/cookie': '^0.3.3',
    '@types/debug': '^4.1.5',
    '@types/eslint': '^9.6.1',
    '@types/fs-extra': '~11.0.4',
    '@types/gulp-svgmin': '^1.2.1',
    '@types/http-proxy-agent': '^2.0.1',
    '@types/kerberos': '^1.1.2',
    '@types/lodash.merge': '^4.6.9',
    '@types/minimist': '^1.2.1',
    '@types/mocha': '^9.1.1',
    '@types/node': '20.x',
    '@types/node-ipc': '^9.2.3',
    '@types/qs': '^6.9.16',
    '@types/semver': '^7.5.8',
    '@types/sinon': '^10.0.2',
    '@types/sinon-test': '^2.4.2',
    '@types/tar': '^6.1.11',
    '@types/trusted-types': '^1.0.6',
    '@types/turndown': '^5.0.5',
    '@types/vscode-notebook-renderer': '^1.72.0',
    '@types/webpack': '^5.28.5',
    '@types/wicg-file-system-access': '^2020.9.6',
    '@types/windows-foreground-love': '^0.3.0',
    '@types/winreg': '^1.2.30',
    '@types/ws': '^8.5.13',
    '@types/yauzl': '^2.10.0',
    '@types/yazl': '^2.4.2',
    '@typescript-eslint/utils': '^8.8.0',
    '@vscode/gulp-electron': '^1.36.0',
    '@vscode/l10n-dev': '0.0.35',
    '@vscode/telemetry-extractor': '^1.10.2',
    '@vscode/test-cli': '^0.0.6',
    '@vscode/test-electron': '^2.4.0',
    '@vscode/test-web': '^0.0.62',
    '@vscode/v8-heap-parser': '^0.1.0',
    '@vscode/vscode-perf': '^0.0.19',
    '@webgpu/types': '^0.1.44',
    'ansi-colors': '^3.2.3',
    asar: '^3.0.3',
    'chromium-pickle-js': '^0.2.0',
    'clang-format': '^1.8.0',
    cookie: '^0.7.2',
    'copy-webpack-plugin': '^11.0.0',
    'css-loader': '^6.9.1',
    cssnano: '^6.0.3',
    debounce: '^1.0.0',
    deemon: '^1.8.0',
    electron: '34.2.0',
    eslint: '^9.11.1',
    'eslint-formatter-compact': '^8.40.0',
    'eslint-plugin-header': '3.1.1',
    'eslint-plugin-jsdoc': '^50.3.1',
    'eslint-plugin-local': '^6.0.0',
    'event-stream': '3.3.4',
    'fancy-log': '^1.3.3',
    'file-loader': '^6.2.0',
    'fs-extra': '~11.2.0',
    glob: '^5.0.13',
    gulp: '^4.0.0',
    'gulp-azure-storage': '^0.12.1',
    'gulp-bom': '^3.0.0',
    'gulp-buffer': '0.0.2',
    'gulp-filter': '^5.1.0',
    'gulp-flatmap': '^1.0.2',
    'gulp-gunzip': '^1.0.0',
    'gulp-gzip': '^1.4.2',
    'gulp-json-editor': '^2.5.0',
    'gulp-plumber': '^1.2.0',
    'gulp-rename': '^1.2.0',
    'gulp-replace': '^0.5.4',
    'gulp-sourcemaps': '^3.0.0',
    'gulp-svgmin': '^4.1.0',
    'gulp-untar': '^0.0.7',
    husky: '^0.13.1',
    innosetup: '^6.4.1',
    'innosetup-compiler': '6.3.1',
    'istanbul-lib-coverage': '^3.2.0',
    'istanbul-lib-instrument': '^6.0.1',
    'istanbul-lib-report': '^3.0.0',
    'istanbul-lib-source-maps': '^4.0.1',
    'istanbul-reports': '^3.1.5',
    'lazy.js': '^0.4.2',
    'merge-options': '^1.0.1',
    mime: '^1.4.1',
    minimatch: '^3.0.4',
    minimist: '^1.2.6',
    mocha: '^10.8.2',
    'mocha-junit-reporter': '^2.2.1',
    'mocha-multi-reporters': '^1.5.1',
    'npm-run-all': '^4.1.5',
    'os-browserify': '^0.3.0',
    'p-all': '^1.0.0',
    'path-browserify': '^1.0.1',
    postcss: '^8.4.33',
    'postcss-nesting': '^12.0.2',
    pump: '^1.0.1',
    rcedit: '^1.1.0',
    rimraf: '^2.2.8',
    sinon: '^12.0.1',
    'sinon-test': '^3.1.3',
    'source-map': '0.6.1',
    'source-map-support': '^0.3.2',
    'style-loader': '^3.3.2',
    'ts-loader': '^9.5.1',
    'ts-node': '^10.9.1',
    tsec: '0.2.7',
    tslib: '^2.6.3',
    typescript: '^5.8.0-dev.20250207',
    'typescript-eslint': '^8.8.0',
    util: '^0.12.4',
    webpack: '^5.94.0',
    'webpack-cli': '^5.1.4',
    'webpack-stream': '^7.0.0',
    xml2js: '^0.5.0',
    yaserver: '^0.4.0',
  },
  overrides: {
    'node-gyp-build': '4.8.1',
    'kerberos@2.1.1': {
      'node-addon-api': '7.1.0',
    },
  },
  repository: {
    type: 'git',
    url: 'https://github.com/microsoft/vscode.git',
  },
  bugs: {
    url: 'https://github.com/microsoft/vscode/issues',
  },
  optionalDependencies: {
    'windows-foreground-love': '0.5.0',
  },
  buildId: '12319307',
  branch: 'release_desktop_i18n',
};
bs.BUILD_INSERT_PACKAGE_CONFIGURATION && (bs = In('../package.json'));
var ws = ms,
  Ea = bs;
function ys(e) {
  var t = [];
  typeof e == 'number' && t.push('code/timeOrigin', e);
  function s(i, n) {
    var _n$startTime;
    t.push(
      i,
      (_n$startTime = n === null || n === void 0 ? void 0 : n.startTime) !== null &&
        _n$startTime !== void 0
        ? _n$startTime
        : Date.now()
    );
  }
  function r() {
    var i = [];
    for (var n = 0; n < t.length; n += 2)
      i.push({
        name: t[n],
        startTime: t[n + 1],
      });
    return i;
  }
  return {
    mark: s,
    getMarks: r,
  };
}
function _a() {
  if (
    (typeof performance === 'undefined' ? 'undefined' : _typeof(performance)) == 'object' &&
    typeof performance.mark == 'function' &&
    !performance.nodeTiming
  )
    return typeof performance.timeOrigin != 'number' && !performance.timing
      ? ys()
      : {
          mark: function mark(e, t) {
            performance.mark(e, t);
          },
          getMarks: function getMarks() {
            var e = performance.timeOrigin;
            typeof e != 'number' &&
              (e =
                performance.timing.navigationStart ||
                performance.timing.redirectStart ||
                performance.timing.fetchStart);
            var t = [
              {
                name: 'code/timeOrigin',
                startTime: Math.round(e),
              },
            ];
            var _iterator57 = _createForOfIteratorHelper(performance.getEntriesByType('mark')),
              _step57;
            try {
              for (_iterator57.s(); !(_step57 = _iterator57.n()).done; ) {
                var s = _step57.value;
                t.push({
                  name: s.name,
                  startTime: Math.round(e + s.startTime),
                });
              }
            } catch (err) {
              _iterator57.e(err);
            } finally {
              _iterator57.f();
            }
            return t;
          },
        };
  if ((typeof process === 'undefined' ? 'undefined' : _typeof(process)) == 'object') {
    var _performance;
    var _e5 =
      (_performance = performance) === null || _performance === void 0
        ? void 0
        : _performance.timeOrigin;
    return ys(_e5);
  } else return console.trace('perf-util loaded in UNKNOWN environment'), ys();
}
function Ca(e) {
  return e.MonacoPerformanceMarks || (e.MonacoPerformanceMarks = _a()), e.MonacoPerformanceMarks;
}
var jn = Ca(globalThis),
  Le = jn.mark,
  n4 = jn.getMarks;
var $a = process.env.VSCODE_CWD || process.cwd();
function Aa(e, t) {
  var s = Oa(e, t),
    r = [s];
  return Ne.isAbsolute(s) || r.unshift($a), Ne.resolve.apply(Ne, r);
}
function Oa(e, t) {
  var s = process.env.VSCODE_PORTABLE;
  if (s) return Ne.join(s, 'user-data');
  var r = process.env.VSCODE_APPDATA;
  if (r) return Ne.join(r, t);
  var i = e['user-data-dir'];
  if (i) return i;
  switch (process.platform) {
    case 'win32':
      if (((r = process.env.APPDATA), !r)) {
        var n = process.env.USERPROFILE;
        if (typeof n != 'string')
          throw new Error('Windows: Unexpected undefined %USERPROFILE% environment variable');
        r = Ne.join(n, 'AppData', 'Roaming');
      }
      break;
    case 'darwin':
      r = Ne.join(Fn.homedir(), 'Library', 'Application Support');
      break;
    case 'linux':
      r = process.env.XDG_CONFIG_HOME || Ne.join(Fn.homedir(), '.config');
      break;
    default:
      throw new Error('Platform not supported');
  }
  return Ne.join(r, t);
}
Rt();
function Mn(e) {
  if (!e || _typeof(e) != 'object' || e instanceof RegExp) return e;
  var t = Array.isArray(e) ? [] : {};
  return (
    Object.entries(e).forEach(function (_ref25) {
      var _ref26 = _slicedToArray(_ref25, 2),
        s = _ref26[0],
        r = _ref26[1];
      t[s] = r && _typeof(r) == 'object' ? Mn(r) : r;
    }),
    t
  );
}
function vs(e, t) {
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  return kt(e)
    ? (kt(t) &&
        Object.keys(t).forEach(function (r) {
          r in e ? s && (kt(e[r]) && kt(t[r]) ? vs(e[r], t[r], s) : (e[r] = t[r])) : (e[r] = t[r]);
        }),
      e)
    : t;
}
var c1 = (0, _nodeModule.createRequire)(import.meta.url),
  Un = gs.dirname((0, _url.fileURLToPath)(import.meta.url));
if (
  ((process.env.ELECTRON_RUN_AS_NODE || process.versions.electron) &&
    (0, _nodeModule.register)(
      'data:text/javascript;base64,'.concat(
        Buffer.from(
          "\n\texport async function resolve(specifier, context, nextResolve) {\n\t\tif (specifier === 'fs') {\n\t\t\treturn {\n\t\t\t\tformat: 'builtin',\n\t\t\t\tshortCircuit: true,\n\t\t\t\turl: 'node:original-fs'\n\t\t\t};\n\t\t}\n\n\t\t// Defer to the next hook in the chain, which would be the\n\t\t// Node.js default resolve if this is the last user-specified loader.\n\t\treturn nextResolve(specifier, context);\n\t}"
        ).toString('base64')
      ),
      import.meta.url
    ),
  (globalThis._VSCODE_PRODUCT_JSON = _objectSpread({}, ws)),
  process.env.VSCODE_DEV)
) {
  try {
    var _e6 = c1('../product.overrides.json');
    globalThis._VSCODE_PRODUCT_JSON = Object.assign(globalThis._VSCODE_PRODUCT_JSON, _e6);
  } catch (_unused12) {}
  try {
    if (process.env.ICUBE_DEV_PROVIDER === 'Spring') {
      var _e7 = c1('../product.desktop.spring.json');
      globalThis._VSCODE_PRODUCT_JSON = (0, _lodash['default'])(
        globalThis._VSCODE_PRODUCT_JSON,
        _e7
      );
    } else {
      var _e8 = c1('../product.desktop.json');
      globalThis._VSCODE_PRODUCT_JSON = (0, _lodash['default'])(
        globalThis._VSCODE_PRODUCT_JSON,
        _e8
      );
    }
    if (Xe.existsSync(gs.join(Un, '../product.desktop.local.json'))) {
      var _e9 = c1('../product.desktop.local.json');
      globalThis._VSCODE_PRODUCT_JSON = (0, _lodash['default'])(
        globalThis._VSCODE_PRODUCT_JSON,
        _e9
      );
    }
    globalThis._VSCODE_PRODUCT_JSON = (0, _lodash['default'])(globalThis._VSCODE_PRODUCT_JSON, {
      quality: 'local',
    });
  } catch (_unused13) {}
}
try {
  Sa();
} catch (e) {
  console.error('Error when merging config: '.concat(e));
}
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
  (c = Buffer.concat([c, o['final']()])),
    (globalThis._VSCODE_PRODUCT_JSON.__iCube_app = Mn(globalThis._VSCODE_PRODUCT_JSON.iCubeApp));
  var l = JSON.parse(c.toString());
  l.iCubeApp &&
    (globalThis._VSCODE_PRODUCT_JSON = vs(globalThis._VSCODE_PRODUCT_JSON, {
      iCubeApp: l.iCubeApp,
    }));
}
(globalThis._VSCODE_PACKAGE_JSON = _objectSpread({}, Ea)), (globalThis._VSCODE_FILE_ROOT = Un);
var Es = void 0;
function Da() {
  return Es || (Es = Pa()), Es;
}
function Pa() {
  return _Pa.apply(this, arguments);
}
function _Pa() {
  _Pa = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee61() {
      var e, t, _e10, _e11, _e12, _e13, _e14;
      return _regeneratorRuntime().wrap(
        function _callee61$(_context77) {
          while (1)
            switch ((_context77.prev = _context77.next)) {
              case 0:
                Le('code/willLoadNls');
                if (process.env.VSCODE_NLS_CONFIG)
                  try {
                    (e = JSON.parse(process.env.VSCODE_NLS_CONFIG)),
                      (_e10 = e) !== null &&
                      _e10 !== void 0 &&
                      (_e10 = _e10.languagePack) !== null &&
                      _e10 !== void 0 &&
                      _e10.messagesFile
                        ? (t = e.languagePack.messagesFile)
                        : ((_e11 = e) === null || _e11 === void 0
                            ? void 0
                            : _e11.defaultMessagesFile) && (t = e.defaultMessagesFile),
                      (globalThis._VSCODE_NLS_LANGUAGE =
                        (_e12 = e) === null || _e12 === void 0 ? void 0 : _e12.resolvedLanguage);
                  } catch (s) {
                    console.error('Error reading VSCODE_NLS_CONFIG from environment: '.concat(s));
                  }
                if (process.env.VSCODE_DEV || !t) {
                  _context77.next = 35;
                  break;
                }
                _context77.prev = 3;
                _context77.t0 = JSON;
                _context77.next = 7;
                return Xe.promises.readFile(t);
              case 7:
                _context77.t1 = _context77.sent.toString();
                globalThis._VSCODE_NLS_MESSAGES = _context77.t0.parse.call(
                  _context77.t0,
                  _context77.t1
                );
                _context77.next = 34;
                break;
              case 11:
                _context77.prev = 11;
                _context77.t2 = _context77['catch'](3);
                if (
                  !(console.error(
                    'Error reading NLS messages file '.concat(t, ': ').concat(_context77.t2)
                  ),
                  (_e13 = e) !== null &&
                    _e13 !== void 0 &&
                    (_e13 = _e13.languagePack) !== null &&
                    _e13 !== void 0 &&
                    _e13.corruptMarkerFile)
                ) {
                  _context77.next = 22;
                  break;
                }
                _context77.prev = 14;
                _context77.next = 17;
                return Xe.promises.writeFile(e.languagePack.corruptMarkerFile, 'corrupted');
              case 17:
                _context77.next = 22;
                break;
              case 19:
                _context77.prev = 19;
                _context77.t3 = _context77['catch'](14);
                console.error('Error writing corrupted NLS marker file: '.concat(_context77.t3));
              case 22:
                if (
                  !(
                    (_e14 = e) !== null &&
                    _e14 !== void 0 &&
                    _e14.defaultMessagesFile &&
                    e.defaultMessagesFile !== t
                  )
                ) {
                  _context77.next = 34;
                  break;
                }
                _context77.prev = 23;
                _context77.t4 = JSON;
                _context77.next = 27;
                return Xe.promises.readFile(e.defaultMessagesFile);
              case 27:
                _context77.t5 = _context77.sent.toString();
                globalThis._VSCODE_NLS_MESSAGES = _context77.t4.parse.call(
                  _context77.t4,
                  _context77.t5
                );
                _context77.next = 34;
                break;
              case 31:
                _context77.prev = 31;
                _context77.t6 = _context77['catch'](23);
                console.error(
                  'Error reading default NLS messages file '
                    .concat(e.defaultMessagesFile, ': ')
                    .concat(_context77.t6)
                );
              case 34:
                return _context77.abrupt('return', (Le('code/didLoadNls'), e));
              case 35:
              case 'end':
                return _context77.stop();
            }
        },
        _callee61,
        null,
        [
          [3, 11],
          [14, 19],
          [23, 31],
        ]
      );
    })
  );
  return _Pa.apply(this, arguments);
}
function xa() {
  return _xa.apply(this, arguments);
}
function _xa() {
  _xa = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee62() {
      return _regeneratorRuntime().wrap(function _callee62$(_context78) {
        while (1)
          switch ((_context78.prev = _context78.next)) {
            case 0:
              _context78.next = 2;
              return Da();
            case 2:
            case 'end':
              return _context78.stop();
          }
      }, _callee62);
    })
  );
  return _xa.apply(this, arguments);
}
Rs();
function La(_x65) {
  return _La.apply(this, arguments);
}
function _La() {
  _La = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee63(e) {
      var t;
      return _regeneratorRuntime().wrap(
        function _callee63$(_context79) {
          while (1)
            switch ((_context79.prev = _context79.next)) {
              case 0:
                if (!e.endsWith('.i18n.json')) {
                  _context79.next = 13;
                  break;
                }
                t = e.slice(0, -10) + '.i18n.override.json';
                _context79.prev = 2;
                _context79.t0 = JSON;
                _context79.next = 6;
                return me.promises.readFile(t, 'utf-8');
              case 6:
                _context79.t1 = _context79.sent;
                return _context79.abrupt(
                  'return',
                  _context79.t0.parse.call(_context79.t0, _context79.t1)
                );
              case 10:
                _context79.prev = 10;
                _context79.t2 = _context79['catch'](2);
                return _context79.abrupt('return');
              case 13:
              case 'end':
                return _context79.stop();
            }
        },
        _callee63,
        null,
        [[2, 10]]
      );
    })
  );
  return _La.apply(this, arguments);
}
function Na(_x66) {
  return _Na.apply(this, arguments);
}
function _Na() {
  _Na = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee64(_ref27) {
      var e,
        t,
        s,
        r,
        i,
        n,
        _c$translations,
        a,
        o,
        c,
        l,
        f,
        u,
        h,
        d,
        p,
        y,
        v,
        _yield$Promise$all3,
        _yield$Promise$all4,
        $,
        N,
        L,
        _,
        S,
        O,
        _iterator63,
        _step63,
        _step63$value,
        I,
        j,
        D,
        _iterator64,
        _step64,
        V;
      return _regeneratorRuntime().wrap(
        function _callee64$(_context80) {
          while (1)
            switch ((_context80.prev = _context80.next)) {
              case 0:
                (e = _ref27.userLocale),
                  (t = _ref27.osLocale),
                  (s = _ref27.userDataPath),
                  (r = _ref27.commit),
                  (i = _ref27.nlsMetadataPath),
                  (n = _ref27.quality);
                if (!process.env.VSCODE_DEV) {
                  _context80.next = 3;
                  break;
                }
                return _context80.abrupt('return', Ta(e, t, i));
              case 3:
                if (
                  !(Le('code/willGenerateNls'),
                  e === 'pseudo' || e.startsWith('en') || !r || !s || !fo(n))
                ) {
                  _context80.next = 5;
                  break;
                }
                return _context80.abrupt('return', et(e, t, i));
              case 5:
                _context80.prev = 5;
                _context80.next = 8;
                return ka(s);
              case 8:
                a = _context80.sent;
                if (a) {
                  _context80.next = 11;
                  break;
                }
                return _context80.abrupt('return', et(e, t, i));
              case 11:
                o = Ra(a, e);
                if (o) {
                  _context80.next = 14;
                  break;
                }
                return _context80.abrupt('return', et(e, t, i));
              case 14:
                (c = a[o]),
                  (l =
                    c === null ||
                    c === void 0 ||
                    (_c$translations = c.translations) === null ||
                    _c$translations === void 0
                      ? void 0
                      : _c$translations.vscode);
                _context80.t0 =
                  !c || typeof c.hash != 'string' || !c.translations || typeof l != 'string';
                if (_context80.t0) {
                  _context80.next = 20;
                  break;
                }
                _context80.next = 19;
                return _s(l);
              case 19:
                _context80.t0 = !_context80.sent;
              case 20:
                if (!_context80.t0) {
                  _context80.next = 22;
                  break;
                }
                return _context80.abrupt('return', et(e, t, i));
              case 22:
                (f = ''.concat(c.hash, '.').concat(o)),
                  (u = he.join(s, 'clp', f)),
                  (h = he.join(u, r)),
                  (d = he.join(h, 'nls.messages.json')),
                  (p = he.join(u, 'tcf.json')),
                  (y = he.join(u, 'corrupted.info'));
                _context80.next = 25;
                return _s(y);
              case 25:
                _context80.t1 = _context80.sent;
                if (!_context80.t1) {
                  _context80.next = 29;
                  break;
                }
                _context80.next = 29;
                return me.promises.rm(u, {
                  recursive: !0,
                  force: !0,
                  maxRetries: 3,
                });
              case 29:
                v = {
                  userLocale: e,
                  osLocale: t,
                  resolvedLanguage: o,
                  defaultMessagesFile: he.join(i, 'nls.messages.json'),
                  languagePack: {
                    translationsConfigFile: p,
                    messagesFile: d,
                    corruptMarkerFile: y,
                  },
                  locale: e,
                  availableLanguages: {
                    '*': o,
                  },
                  _languagePackId: f,
                  _languagePackSupport: !0,
                  _translationsConfigFile: p,
                  _cacheRoot: u,
                  _resolvedLanguagePackCoreLocation: h,
                  _corruptedFile: y,
                };
                _context80.next = 32;
                return _s(h);
              case 32:
                if (!_context80.sent) {
                  _context80.next = 34;
                  break;
                }
                return _context80.abrupt(
                  'return',
                  (Ia(h)['catch'](function () {}), Le('code/didGenerateNls'), v)
                );
              case 34:
                _context80.next = 36;
                return Promise.all([
                  me.promises.mkdir(h, {
                    recursive: !0,
                  }),
                  me.promises.readFile(he.join(i, 'nls.keys.json'), 'utf-8').then(function (I) {
                    return JSON.parse(I);
                  }),
                  me.promises.readFile(he.join(i, 'nls.messages.json'), 'utf-8').then(function (I) {
                    return JSON.parse(I);
                  }),
                  me.promises.readFile(l, 'utf-8').then(function (I) {
                    return JSON.parse(I);
                  }),
                  La(l),
                ]);
              case 36:
                _yield$Promise$all3 = _context80.sent;
                _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 5);
                $ = _yield$Promise$all4[1];
                N = _yield$Promise$all4[2];
                L = _yield$Promise$all4[3];
                _ = _yield$Promise$all4[4];
                _ && vs(L, _);
                S = [];
                O = 0;
                _iterator63 = _createForOfIteratorHelper($);
                try {
                  for (_iterator63.s(); !(_step63 = _iterator63.n()).done; ) {
                    (_step63$value = _slicedToArray(_step63.value, 2)),
                      (I = _step63$value[0]),
                      (j = _step63$value[1]);
                    D = L.contents[I];
                    _iterator64 = _createForOfIteratorHelper(j);
                    try {
                      for (_iterator64.s(); !(_step64 = _iterator64.n()).done; ) {
                        V = _step64.value;
                        S.push((D === null || D === void 0 ? void 0 : D[V]) || N[O]), O++;
                      }
                    } catch (err) {
                      _iterator64.e(err);
                    } finally {
                      _iterator64.f();
                    }
                  }
                } catch (err) {
                  _iterator63.e(err);
                } finally {
                  _iterator63.f();
                }
                _context80.next = 49;
                return Promise.all([
                  me.promises.writeFile(d, JSON.stringify(S), 'utf-8'),
                  me.promises.writeFile(p, JSON.stringify(c.translations), 'utf-8'),
                ]);
              case 49:
                Le('code/didGenerateNls');
                return _context80.abrupt('return', v);
              case 53:
                _context80.prev = 53;
                _context80.t2 = _context80['catch'](5);
                console.error('Generating translation files failed.', _context80.t2);
              case 56:
                return _context80.abrupt('return', et(e, t, i));
              case 57:
              case 'end':
                return _context80.stop();
            }
        },
        _callee64,
        null,
        [[5, 53]]
      );
    })
  );
  return _Na.apply(this, arguments);
}
function ka(_x67) {
  return _ka.apply(this, arguments);
}
function _ka() {
  _ka = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee65(e) {
      var t;
      return _regeneratorRuntime().wrap(
        function _callee65$(_context81) {
          while (1)
            switch ((_context81.prev = _context81.next)) {
              case 0:
                t = he.join(e, 'languagepacks.json');
                _context81.prev = 1;
                _context81.t0 = JSON;
                _context81.next = 5;
                return me.promises.readFile(t, 'utf-8');
              case 5:
                _context81.t1 = _context81.sent;
                return _context81.abrupt(
                  'return',
                  _context81.t0.parse.call(_context81.t0, _context81.t1)
                );
              case 9:
                _context81.prev = 9;
                _context81.t2 = _context81['catch'](1);
                return _context81.abrupt('return');
              case 12:
              case 'end':
                return _context81.stop();
            }
        },
        _callee65,
        null,
        [[1, 9]]
      );
    })
  );
  return _ka.apply(this, arguments);
}
function Ra(e, t) {
  try {
    for (; t; ) {
      if (e[t]) return t;
      var s = t.lastIndexOf('-');
      if (s > 0) t = t.substring(0, s);
      else return;
    }
  } catch (s) {
    console.error('Resolving language pack configuration failed.', s);
  }
}
function et(e, t, s) {
  if ((Le('code/didGenerateNls'), process.env.ICUBE_ENABLE_MARSCODE_NLS)) {
    Le('code/didGenerateNls');
    var r = Vn(e),
      i = r === 'en' ? 'nls.messages.json' : 'nls.'.concat(r, '.messages.json');
    return {
      userLocale: e,
      osLocale: t,
      resolvedLanguage: r,
      defaultMessagesFile: he.join(s, i),
      locale: e,
      availableLanguages: {},
    };
  }
  return {
    userLocale: e,
    osLocale: t,
    resolvedLanguage: 'en',
    defaultMessagesFile: he.join(s, 'nls.messages.json'),
    locale: e,
    availableLanguages: {},
  };
}
function Vn(e) {
  var t = {
    'zh-cn': 'zh-cn',
    en: 'en',
    ja: 'ja',
  };
  return t[e === null || e === void 0 ? void 0 : e.toLowerCase()]
    ? t[e === null || e === void 0 ? void 0 : e.toLowerCase()]
    : e !== null && e !== void 0 && e.startsWith('en')
      ? 'en'
      : e.startsWith('ja')
        ? 'ja'
        : e !== null && e !== void 0 && e.startsWith('zh')
          ? 'zh-cn'
          : 'en';
}
function Ta(e, t, s) {
  Le('code/didGenerateNls');
  var r = Vn(e);
  return {
    userLocale: e,
    osLocale: t,
    resolvedLanguage: r,
    defaultMessagesFile: he.join(s, 'nls.messages.json'),
    locale: e,
    availableLanguages: {},
  };
}
function _s(_x68) {
  return _s5.apply(this, arguments);
}
function _s5() {
  _s5 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee66(e) {
      return _regeneratorRuntime().wrap(
        function _callee66$(_context82) {
          while (1)
            switch ((_context82.prev = _context82.next)) {
              case 0:
                _context82.prev = 0;
                _context82.next = 3;
                return me.promises.access(e);
              case 3:
                return _context82.abrupt('return', !0);
              case 6:
                _context82.prev = 6;
                _context82.t0 = _context82['catch'](0);
                return _context82.abrupt('return', !1);
              case 9:
              case 'end':
                return _context82.stop();
            }
        },
        _callee66,
        null,
        [[0, 6]]
      );
    })
  );
  return _s5.apply(this, arguments);
}
function Ia(e) {
  var t = new Date();
  return me.promises.utimes(e, t, t);
}
var ja = (0, _path.dirname)((0, _url.fileURLToPath)(import.meta.url)),
  Fa = await Na({
    userLocale: 'en',
    osLocale: 'en',
    commit: ws.commit,
    userDataPath: '',
    nlsMetadataPath: ja,
  });
(process.env.VSCODE_NLS_CONFIG = JSON.stringify(Fa)),
  ma(ws),
  (process.env.VSCODE_CLI = '1'),
  await xa(),
  await Promise.resolve().then(function () {
    return la(), Sn;
  });
