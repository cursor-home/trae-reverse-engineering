const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

// 处理路径
const MAIN_FILE = 'main.js';
const OUTPUT_DIR = 'split';
const FORMATTED_FILE = path.join(OUTPUT_DIR, 'formatted.js');

// 确保输出目录存在
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('开始格式化代码...');

// 读取main.js文件
const content = fs.readFileSync(MAIN_FILE, 'utf-8');

// 保存原始文件作为参考
fs.writeFileSync(path.join(OUTPUT_DIR, 'original.js'), content);
console.log('原始代码已保存到:', path.join(OUTPUT_DIR, 'original.js'));

// 使用prettier格式化代码
try {
  prettier.resolveConfig(process.cwd())
    .then(options => {
      // 如果找不到配置文件，使用默认配置
      const config = options || {
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 100,
        tabWidth: 2,
        parser: 'babel'
      };
      
      return prettier.format(content, config);
    })
    .then(formattedCode => {
      // 写入格式化后的代码
      fs.writeFileSync(FORMATTED_FILE, formattedCode);
      console.log('格式化代码已保存到:', FORMATTED_FILE);
      console.log('现在可以运行 split-code.js 来拆分格式化后的代码。');
    })
    .catch(error => {
      console.error('使用prettier格式化代码时出错:', error);
      // 尝试使用简单的格式化方法
      console.log('尝试使用简单格式化方法...');
      
      // 一个非常简单的格式化，仅在分号和大括号后添加换行符
      let simpleFormatted = content
        .replace(/;/g, ';\n')
        .replace(/{/g, '{\n')
        .replace(/}/g, '}\n');
      
      fs.writeFileSync(FORMATTED_FILE, simpleFormatted);
      console.log('使用简单格式化方法保存代码到:', FORMATTED_FILE);
      console.log('现在可以运行 split-code.js 来拆分格式化后的代码。');
    });
} catch (error) {
  console.error('格式化过程出错:', error);
  console.log('保存原始代码作为格式化文件...');
  fs.writeFileSync(FORMATTED_FILE, content);
  console.log('原始代码已保存到:', FORMATTED_FILE);
  console.log('你可以手动格式化代码或直接运行 split-code.js 来拆分原始代码。');
} 