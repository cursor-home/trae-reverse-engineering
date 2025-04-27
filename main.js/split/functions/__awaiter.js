/**
 * 实现TypeScript中async/await功能的辅助函数
 * 
 * 该函数将基于Promise的异步代码转换为更易读的同步风格代码
 * TypeScript编译器会将async/await语法转换为对该函数的调用
 * 
 * @param {any} t - this上下文，通常是异步函数所属的对象
 * @param {any[]} e - 参数数组，传递给异步函数的参数
 * @param {Function} i - Promise构造函数，默认使用全局Promise
 * @param {Generator} s - 由TypeScript编译器生成的Generator对象，包含异步逻辑
 * @returns {Promise} 返回一个Promise，代表异步操作的结果
 */
export function __awaiter(t, e, i, s) {
  /**
   * 包装函数，确保返回值是Promise对象
   * @param {any} n - 任意值
   * @returns {Promise} 如果n已经是Promise实例则原样返回，否则包装为Promise
   */
  function r(n) {
    return n instanceof i
      ? n
      : new i(function (o) {
          o(n);
        });
  }
  
  // 创建并返回Promise，开始执行异步逻辑
  return new (i || (i = Promise))(function (n, o) {
    /**
     * 处理Generator的next调用结果
     * @param {any} h - Generator.next的输入值
     */
    function a(h) {
      try {
        l(s.next(h));
      } catch (d) {
        o(d); // 捕获并转发错误
      }
    }
    
    /**
     * 处理Generator的throw调用结果
     * @param {any} h - 要抛出的错误
     */
    function c(h) {
      try {
        l(s.throw(h));
      } catch (d) {
        o(d); // 捕获并转发错误
      }
    }
    
    /**
     * 处理Generator的迭代结果
     * @param {IteratorResult} h - Generator迭代器结果对象
     */
    function l(h) {
      // 如果生成器完成，则解析Promise
      // 否则，继续异步链，处理下一个yield
      h.done ? n(h.value) : r(h.value).then(a, c);
    }
    
    // 启动Generator执行，开始异步操作链
    l((s = s.apply(t, e || [])).next());
  });
}