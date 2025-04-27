/**
 * 实现Generator函数的辅助函数
 * 
 * 该函数用于模拟ES6中的Generator函数功能，由TypeScript编译器生成
 * 当编译包含yield关键字的函数时，TypeScript将其转换为对该函数的调用
 * 
 * @param {any} t - this上下文，Generator函数所属的对象
 * @param {Function} e - 包含Generator逻辑的函数体
 * @returns {Generator} 返回一个符合迭代器协议的Generator对象
 */
export function __generator(t, e) {
  // 状态对象，保存Generator的执行状态
  var i = {
      label: 0,  // 当前执行位置的标签
      sent: function () {
        // 获取上一个yield表达式的结果
        if (n[0] & 1) throw n[1];  // 如果是throw操作则抛出错误
        return n[1];                // 否则返回值
      },
      trys: [],  // try语句块的栈
      ops: [],   // 挂起的操作栈
    },
    s,  // 执行状态标志
    r,  // 当前迭代器结果
    n,  // 当前操作
    o;  // 返回的迭代器对象
  
  // 创建迭代器对象，实现next、throw和return方法
  o = { 
    next: a(0),     // 生成next方法
    throw: a(1),    // 生成throw方法
    return: a(2)    // 生成return方法
  };
  
  // 如果Symbol可用，则实现迭代器协议，使对象可在for...of循环中使用
  typeof Symbol == 'function' &&
    (o[Symbol.iterator] = function () {
      return this;
    });
  
  return o;
  
  /**
   * 创建Generator方法的工厂函数
   * @param {number} l - 方法类型(0:next, 1:throw, 2:return)
   * @returns {Function} 返回相应的迭代器方法
   */
  function a(l) {
    return function (h) {
      return c([l, h]);
    };
  }
  
  /**
   * Generator状态机的核心实现
   * 处理所有Generator操作并管理执行流
   * 
   * @param {Array} l - 操作数组 [操作类型, 值]
   * @returns {IteratorResult} 迭代器结果对象 {value, done}
   */
  function c(l) {
    // 防止Generator重入执行
    if (s) throw new TypeError('Generator is already executing.');
    
    // 主状态机循环
    for (; o && ((o = 0), l[0] && (i = 0)), i; )
      try {
        s = 1;  // 标记为执行中
        
        // 处理迭代器方法调用(next/throw/return)
        if (
          r &&
          (n =
            l[0] & 2 ? r.return : l[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) &&
          !(n = n.call(r, l[1])).done
        )
          return n;  // 返回子迭代器的结果
        
        r = 0;  // 重置迭代器结果
        
        // 根据操作结果更新当前值
        if (n) l = [l[0] & 2, n.value];
        
        // 根据操作类型切换状态
        switch (l[0]) {
          case 0:  // next调用，无特殊处理
          case 1:  // throw调用，结果已处理
            n = l;
            break;
            
          case 4:  // yield结果
            i.label++;  // 增加标签指向下一个位置
            return { value: l[1], done: false };  // 返回yield值，标记为未完成
            
          case 5:  // 简单的yield后恢复执行
            i.label++;  // 增加标签
            r = l[1];   // 保存输入值
            l = [0];    // 设为普通操作
            continue;
            
          case 7:  // 处理finally块
            l = i.ops.pop();  // 获取挂起的操作
            i.trys.pop();     // 弹出try块
            continue;
            
          default:
            // 处理try/catch/finally块的逻辑
            
            // 获取活动的try块
            n = i.trys;
            
            // 检查是否有活动的try块，以及当前操作是否为return或throw
            if (!(n = n.length > 0 && n[n.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              i = 0;  // 结束当前上下文
              continue;
            }
            
            // 处理catch块 - 如果错误在catch范围内
            if (l[0] === 3 && (!n || (l[1] > n[0] && l[1] < n[3]))) {
              i.label = l[1];  // 跳转到catch块
              break;
            }
            
            // 处理break语句 - 跳转到finally块
            if (l[0] === 6 && i.label < n[1]) {
              i.label = n[1];  // 设置标签到finally块
              n = l;          // 保存当前操作
              break;
            }
            
            // 如果有finally块且当前标签在其前
            if (n && i.label < n[2]) {
              i.label = n[2];     // 设置标签到finally块后
              i.ops.push(l);      // 保存当前操作以便之后恢复
              break;
            }
            
            // 执行finally块后继续
            if (n[2]) i.ops.pop();  // 弹出操作
            i.trys.pop();           // 弹出try块
            continue;
        }
        
        // 执行Generator体，传入当前状态
        l = e.call(t, i);
      } catch (h) {
        // 捕获异常，转换为throw操作
        l = [6, h];
        r = 0;
      } finally {
        // 清理状态
        s = n = 0;
      }
    
    // 处理返回值或抛出异常
    if (l[0] & 5) throw l[1];  // 如果是throw操作(1)或throw+return操作(4+1)，抛出异常
    
    // 返回最终结果，标记为完成
    return { value: l[0] ? l[1] : void 0, done: true };
  }
}