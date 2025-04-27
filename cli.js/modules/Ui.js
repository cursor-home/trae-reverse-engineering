// 模块: Ui
// 此函数将通配符模式转换为正则表达式字符串
// 处理各种特殊字符和通配符语法

function Ui(e) {
  // 如果输入为空，返回空字符串
  if (!e) return '';
  
  var t = ''; // 结果正则表达式字符串
  var s = Mi(e, os); // 按分隔符拆分输入字符串
  
  // 如果所有部分都是通配符，直接返回.*（匹配任意字符）
  if (s.every(function(r) {
    return r === Ze;
  })) {
    t = '.*';
  } else {
    var r = false;
    
    // 遍历每个部分并转换
    s.forEach(function(i, n) {
      // 处理通配符部分
      if (i === Ze) {
        if (r) return;
        t += Fi(2, n === s.length - 1); // 添加通配符对应的正则表达式
      } else {
        var a = false,  // 是否在花括号内
            o = '',     // 花括号内的内容
            c = false,  // 是否在方括号内
            l = '';     // 方括号内的内容
        
        // 遍历当前部分的每个字符
        var _iterator39 = _createForOfIteratorHelper(i),
            _step39;
        try {
          for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
            var f = _step39.value;
            
            // 如果在花括号内且不是结束符，继续收集内容
            if (f !== '}' && a) {
              o += f;
              continue;
            }
            
            // 如果在方括号内且不是结束符，处理特殊字符后收集内容
            if (c && (f !== ']' || !l)) {
              var u = void 0;
              if (f === '-') {
                u = f;
              } else if ((f === '^' || f === '!') && !l) {
                u = '^';
              } else if (f === os) {
                u = '';
              } else {
                u = Wr(f); // 转义特殊字符
              }
              l += u;
              continue;
            }
            
            // 处理各种特殊字符
            switch (f) {
              case '{':
                a = true; // 进入花括号模式
                continue;
              case '[':
                c = true; // 进入方括号模式
                continue;
              case '}':
                {
                  // 处理花括号：转换为OR表达式 (?:option1|option2)
                  var h = '(?:' + Mi(o, ',').map(function(d) {
                    return Ui(d); // 递归处理每个选项
                  }).join('|') + ')';
                  t += h;
                  a = false;
                  o = '';
                  break;
                }
              case ']':
                {
                  // 处理方括号：保持为正则表达式字符类
                  t += '[' + l + ']';
                  c = false;
                  l = '';
                  break;
                }
              case '?':
                // 问号转换为单字符匹配
                t += _t;
                continue;
              case '*':
                // 星号转换为任意字符匹配
                t += Fi(1);
                continue;
              default:
                // 其他字符进行转义
                t += Wr(f);
            }
          }
        } catch (err) {
          _iterator39.e(err);
        } finally {
          _iterator39.f();
        }
        
        // 如果不是最后一个部分，且下一个部分不是通配符或者还有更多部分，添加分隔符
        if (n < s.length - 1 && (s[n + 1] !== Ze || n + 2 < s.length)) {
          t += Et;
        }
      }
      
      // 更新前一部分是否为通配符的标记
      r = i === Ze;
    });
  }
  
  return t; // 返回最终的正则表达式字符串
}

module.exports = {
  Ui
};
