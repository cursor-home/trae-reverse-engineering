/**
 * 实现类继承的辅助函数，类似于ES6中的extends关键字
 * 
 * 该函数用于支持TypeScript中的类继承功能，通过原型链实现继承
 * 
 * @param {Function} t - 子类（派生类）构造函数
 * @param {Function} e - 父类（基类）构造函数
 * @throws {TypeError} 如果父类不是函数或为null，抛出类型错误
 */
export function __extends(t, e) {
  // 检查父类是否为有效的构造函数
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Class extends value ' + String(e) + ' is not a constructor or null');
  
  // Rg是一个辅助函数，用于设置原型链，可能是Object.setPrototypeOf的简写
  Rg(t, e);
  
  // 创建一个空的构造函数作为中间层，用于避免直接修改父类原型
  function i() {
    this.constructor = t; // 确保instanceof正常工作
  }
  
  // 设置子类的原型
  // 如果父类为null，则使用Object.create(null)创建无原型对象
  // 否则，将中间构造函数的原型设为父类原型，并实例化
  t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
}