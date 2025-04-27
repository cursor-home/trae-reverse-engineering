// 模块: et
// 此函数处理国际化(i18n)配置，负责加载正确的语言文件
// 根据用户语言设置和操作系统语言生成本地化配置

function et(e, t, s) {
  // 记录NLS (Native Language Support) 生成事件
  if (Le('code/didGenerateNls'), process.env.ICUBE_ENABLE_MARSCODE_NLS) {
    // 再次记录事件（可能是为了确保记录）
    Le('code/didGenerateNls');
    
    // 获取解析后的语言代码（例如：en, zh-cn等）
    var r = Vn(e),
      // 确定消息文件名：英文使用基本文件，其他语言添加语言代码
      i = r === 'en' ? 'nls.messages.json' : 'nls.'.concat(r, '.messages.json');
    
    // 返回完整的本地化配置对象
    return {
      userLocale: e,             // 用户设置的语言区域
      osLocale: t,               // 操作系统的语言区域
      resolvedLanguage: r,       // 解析后的实际使用语言
      defaultMessagesFile: he.join(s, i), // 消息文件的完整路径
      locale: e,                 // 当前使用的语言区域
      availableLanguages: {}     // 可用语言列表(空对象)
    };
  }
  
  // 如果未启用特殊NLS支持，返回默认的英文配置
  return {
    userLocale: e,
    osLocale: t,
    resolvedLanguage: 'en',     // 强制使用英文
    defaultMessagesFile: he.join(s, 'nls.messages.json'), // 使用默认英文消息文件
    locale: e,
    availableLanguages: {}
  };
}

module.exports = {
  et
};
