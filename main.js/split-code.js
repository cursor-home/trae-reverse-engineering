const fs = require('fs');
const path = require('path');

// 处理路径
const OUTPUT_DIR = 'split';
const FORMATTED_FILE = path.join(OUTPUT_DIR, 'formatted.js');

// 检查格式化文件是否存在
if (!fs.existsSync(FORMATTED_FILE)) {
  console.error(`错误: 格式化文件 ${FORMATTED_FILE} 不存在，请先运行 format-code.js`);
  process.exit(1);
}

console.log('开始拆分代码...');

// 读取格式化后的文件
const content = fs.readFileSync(FORMATTED_FILE, 'utf-8');

// 创建输出目录的类别子目录
const categoriesDir = {
  functions: path.join(OUTPUT_DIR, 'functions'),
  variables: path.join(OUTPUT_DIR, 'variables'),
  classes: path.join(OUTPUT_DIR, 'classes'),
  default: path.join(OUTPUT_DIR, 'default'),
  internals: path.join(OUTPUT_DIR, 'internals'),
  other: path.join(OUTPUT_DIR, 'other'),
};

// 确保所有目录存在
Object.values(categoriesDir).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 用于存储识别到的模块
const modules = [];

// 提取头部注释
const headerMatch = /^\/\*!.*?\*\//s.exec(content);
if (headerMatch) {
  modules.push({
    name: 'header',
    type: 'header',
    content: headerMatch[0],
    start: 0,
    end: headerMatch[0].length
  });
  console.log('找到头部注释');
}

// 找到所有export声明的位置
console.log('查找所有export声明...');
const exportPositions = [];
const exportRegex = /export\s+(function|var|const|class|default)\s+(\w+)?/g;
let match;

// 仅收集所有匹配位置，不在循环中修改状态
while ((match = exportRegex.exec(content)) !== null) {
  exportPositions.push({
    index: match.index,
    exportType: match[1],
    exportName: match[2] || 'default'
  });
}

console.log(`找到 ${exportPositions.length} 个export声明`);

// 处理每个export声明
for (let i = 0; i < exportPositions.length; i++) {
  const current = exportPositions[i];
  const startIndex = current.index;
  const exportType = current.exportType;
  const exportName = current.exportName;
  
  console.log(`处理 export ${exportType} ${exportName}...`);

  // 确定结束位置
  let endIndex;
  if (i < exportPositions.length - 1) {
    endIndex = exportPositions[i + 1].index;
  } else {
    endIndex = content.length;
  }
  
  // 如果是函数或类，精确查找结束括号
  if (exportType === 'function' || exportType === 'class') {
    let bracketCount = 0;
    let foundStart = false;
    
    // 查找函数体
    for (let j = startIndex; j < Math.min(startIndex + 100000, content.length); j++) {
      if (content[j] === '{') {
        foundStart = true;
        bracketCount++;
      } else if (content[j] === '}') {
        bracketCount--;
        if (foundStart && bracketCount === 0) {
          // 找到结束位置，确保不超过下一个export
          const newEndIndex = Math.min(j + 1, i < exportPositions.length - 1 ? exportPositions[i + 1].index : content.length);
          
          // 如果找到的结束位置明显小于下一个export，则使用它
          if (newEndIndex < endIndex) {
            endIndex = newEndIndex;
          }
          break;
        }
      }
    }
  } else if (exportType === 'var' || exportType === 'const') {
    // 查找变量声明的结束位置
    const semicolonPosition = content.indexOf(';', startIndex);
    if (semicolonPosition !== -1 && semicolonPosition < endIndex) {
      endIndex = semicolonPosition + 1;
    }
  }
  
  // 添加模块
  let type;
  switch (exportType) {
    case 'function':
      type = 'function';
      break;
    case 'var':
    case 'const':
      type = 'variable';
      break;
    case 'class':
      type = 'class';
      break;
    case 'default':
      type = 'default';
      break;
    default:
      type = 'other';
  }
  
  modules.push({
    name: exportName,
    type,
    content: content.substring(startIndex, endIndex),
    start: startIndex,
    end: endIndex
  });
}

// 处理模块之间的间隙
console.log('处理模块之间的内部代码...');
modules.sort((a, b) => a.start - b.start);

const internalModules = [];
let lastEnd = headerMatch ? headerMatch[0].length : 0;

for (const module of modules) {
  if (module.start > lastEnd) {
    const internalCode = content.substring(lastEnd, module.start);
    if (internalCode.trim()) {
      internalModules.push({
        name: `internal_${internalModules.length + 1}`,
        type: 'internal',
        content: internalCode,
        start: lastEnd,
        end: module.start
      });
    }
  }
  lastEnd = module.end;
}

// 处理文件尾部
if (lastEnd < content.length) {
  const tailCode = content.substring(lastEnd);
  if (tailCode.trim()) {
    internalModules.push({
      name: `internal_${internalModules.length + 1}`,
      type: 'internal',
      content: tailCode,
      start: lastEnd,
      end: content.length
    });
  }
}

// 合并所有模块并重新排序
console.log(`找到 ${internalModules.length} 个内部代码模块`);
modules.push(...internalModules);
modules.sort((a, b) => a.start - b.start);

// 创建索引内容
let indexContent = '// 主索引文件 - 导出所有模块\n\n';
const categoryIndexes = {
  function: '// 函数导出\n\n',
  variable: '// 变量导出\n\n',
  class: '// 类导出\n\n',
  default: '// 默认导出\n\n',
  internal: '// 内部模块导出\n\n',
  other: '// 其他导出\n\n'
};

// 写入模块文件
console.log('创建拆分模块文件...');
modules.forEach(module => {
  let outputPath;
  
  if (module.type === 'header') {
    outputPath = path.join(OUTPUT_DIR, 'header.js');
  } else {
    let dir;
    switch (module.type) {
      case 'function':
        dir = categoriesDir.functions;
        break;
      case 'variable':
        dir = categoriesDir.variables;
        break;
      case 'class':
        dir = categoriesDir.classes;
        break;
      case 'default':
        dir = categoriesDir.default;
        break;
      case 'internal':
        dir = categoriesDir.internals;
        break;
      default:
        dir = categoriesDir.other;
    }
    
    outputPath = path.join(dir, `${module.name}.js`);
    
    // 更新相应的索引
    if (module.type !== 'header' && module.type !== 'internal') {
      const relativePath = path.relative(OUTPUT_DIR, outputPath).replace(/\\/g, '/');
      const exportLine = `export { ${module.name} } from './${relativePath}';\n`;
      indexContent += exportLine;
      
      if (categoryIndexes[module.type]) {
        const relativeToCategory = path.basename(outputPath);
        categoryIndexes[module.type] += `export { ${module.name} } from './${relativeToCategory}';\n`;
      }
    }
  }
  
  // 写入模块文件
  fs.writeFileSync(outputPath, module.content);
  console.log(`已创建模块文件: ${outputPath}`);
});

// 写入主索引文件
fs.writeFileSync(path.join(OUTPUT_DIR, 'index.js'), indexContent);
console.log('主索引文件已创建');

// 写入分类索引文件
Object.entries(categoryIndexes).forEach(([category, content]) => {
  if (content.trim() !== `// ${category}导出\n\n`) {
    let dirName;
    switch (category) {
      case 'function':
        dirName = 'functions';
        break;
      case 'variable':
        dirName = 'variables';
        break;
      case 'class':
        dirName = 'classes';
        break; 
      case 'default':
        dirName = 'default';
        break;
      case 'internal':
        dirName = 'internals';
        break;
      default:
        dirName = 'other';
    }
    
    const indexPath = path.join(categoriesDir[dirName], 'index.js');
    fs.writeFileSync(indexPath, content);
    console.log(`已创建${category}索引文件: ${indexPath}`);
  }
});

// 创建一个README文件解释代码结构
const readme = `# Trae.js 代码拆分

这个目录包含了对Trae.js的main.js文件进行拆分后的结果。代码已经按照以下几个类别进行了组织：

- **functions/** - 包含导出的函数
- **variables/** - 包含导出的变量
- **classes/** - 包含导出的类
- **default/** - 包含默认导出
- **internals/** - 包含内部模块和连接代码
- **header.js** - 包含文件头部注释和版权信息

## 如何使用

可以通过 \`main-import.js\` 文件重新导入和使用整个库，也可以选择性地从各个子模块中导入特定的功能。

## 代码分析

这个拆分结构可以帮助更容易地分析和理解Trae.js的代码结构。每个文件都包含了相关功能的实现。
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'README.md'), readme);
console.log('已创建README.md文件');

// 创建main-import.js作为新的入口点
const mainImport = `// 从拆分的模块中导入所有内容
import * as lib from './split/index.js';

// 重新导出所有内容
export default lib;
`;
fs.writeFileSync('main-import.js', mainImport);
console.log('新的入口文件 main-import.js 已创建');

console.log('代码拆分完成! 共拆分出', modules.length, '个模块。'); 