// 模块: Vn
// 此函数用于解析和标准化语言代码
// 将用户或系统语言代码映射到应用支持的标准语言代码

function Vn(e) {
  // 定义支持的语言映射表
  // 键: 语言代码，值: 标准化的语言代码
  var t = {
    'zh-cn': 'zh-cn',  // 简体中文
    'en': 'en',        // 英文
    'ja': 'ja'         // 日文
  };
  
  // 处理语言代码映射逻辑
  // 1. 首先检查是否直接匹配支持的语言代码
  // 2. 如果不匹配但以特定前缀开头，映射到对应的主要语言
  // 3. 默认返回英文('en')
  return t[e === null || e === void 0 ? void 0 : e.toLowerCase()] 
    ? t[e === null || e === void 0 ? void 0 : e.toLowerCase()] // 直接匹配
    : (e !== null && e !== void 0 && e.startsWith('en')) 
      ? 'en'     // 英文变种(en-US, en-GB等)映射到'en'
      : e.startsWith('ja') 
        ? 'ja'   // 日文变种映射到'ja'
        : (e !== null && e !== void 0 && e.startsWith('zh')) 
          ? 'zh-cn' // 中文变种(zh-TW等)映射到'zh-cn'
          : 'en';   // 默认为英文
}

module.exports = {
  Vn
};
