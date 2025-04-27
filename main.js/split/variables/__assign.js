/**
 * 实现对象属性合并的辅助函数
 * 
 * 该函数模拟Object.assign的功能，用于将多个源对象的属性复制到目标对象
 * 如果环境支持原生Object.assign，则使用原生实现，否则使用自定义实现
 * TypeScript编译器使用此函数来支持对象展开运算符({...obj})
 * 
 * @returns {Function} 返回合并对象属性的函数
 */
export var __assign = function () {
  return (
    (__assign =
      Object.assign ||
      function (e) {
        // 目标对象为第一个参数，源对象从第二个参数开始
        for (var i, s = 1, r = arguments.length; s < r; s++) {
          // 遍历每个源对象
          i = arguments[s];
          // 将源对象的可枚举属性复制到目标对象
          for (var n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
        return e;
      }),
    __assign.apply(this, arguments)
  );
};