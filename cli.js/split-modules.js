#!/usr/bin/env node

/**
 * 这个脚本尝试将打包后的大型JS文件拆分为多个小模块
 * 通过分析require语句和函数定义来确定模块边界
 */

const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

// 输出目录
const OUTPUT_DIR = path.join(__dirname, 'modules');

// 确保输出目录存在
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// 读取打包后的文件
const filePath = path.join(__dirname, 'cli.js');
const code = fs.readFileSync(filePath, 'utf8');

// 使用Babel解析代码
console.log('正在解析代码...');
const ast = parser.parse(code, {
  sourceType: 'module',
  plugins: ['jsx', 'typescript', 'classProperties']
});

// 收集模块信息
const modules = new Map();
let currentModuleName = 'main';
const imports = new Map();
const exportedItems = new Map();

console.log('分析模块结构...');

// 遍历AST查找模块边界
traverse(ast, {
  // 识别require语句
  CallExpression(path) {
    if (path.node.callee.name === 'require') {
      const arg = path.node.arguments[0];
      if (t.isStringLiteral(arg)) {
        const modulePath = arg.value;
        // 记录导入
        if (!imports.has(currentModuleName)) {
          imports.set(currentModuleName, new Set());
        }
        imports.get(currentModuleName).add(modulePath);
      }
    }
  },
  
  // 识别函数定义作为可能的模块
  FunctionDeclaration(path) {
    const name = path.node.id?.name;
    if (name && !name.startsWith('_')) {
      // 可能是一个导出的函数
      modules.set(name, {
        type: 'function',
        node: path.node,
        dependencies: new Set()
      });
    }
  },

  // 识别导出语句
  AssignmentExpression(path) {
    const left = path.node.left;
    if (t.isMemberExpression(left) && 
        t.isIdentifier(left.object) && 
        left.object.name === 'exports') {
      const exportName = t.isIdentifier(left.property) ? left.property.name : null;
      if (exportName) {
        exportedItems.set(exportName, path.node.right);
      }
    }
  }
});

// 创建模块文件
console.log('正在创建模块文件...');

// 首先创建主模块文件
let mainModuleContent = `
// 主模块 - 从打包文件重构
const path = require('path');
const fs = require('fs');

// 导入模块
${Array.from(imports.get('main') || [])
  .map(moduleName => `const ${moduleName.replace(/[^a-zA-Z0-9]/g, '_')} = require('${moduleName}');`)
  .join('\n')}

// 从子模块导入函数
${Array.from(modules.keys())
  .map(moduleName => `const { ${moduleName} } = require('./modules/${moduleName}');`)
  .join('\n')}

// 导出
module.exports = {
${Array.from(exportedItems.keys())
  .map(exportName => `  ${exportName},`)
  .join('\n')}
};
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'index.js'), mainModuleContent);

// 为每个识别的函数创建模块文件
for (const [name, module] of modules) {
  if (module.type === 'function') {
    const dependencies = Array.from(module.dependencies || []);
    
    // 生成模块代码
    const moduleCode = `
// 模块: ${name}
${dependencies.map(dep => `const ${dep} = require('./${dep}');`).join('\n')}

${generate(module.node).code}

module.exports = {
  ${name}
};
`;
    
    fs.writeFileSync(path.join(OUTPUT_DIR, `${name}.js`), moduleCode);
  }
}

// 创建辅助函数模块
const helperFunctions = `
// 辅助函数模块
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  Object.defineProperty(d, "prototype", { value: Object.create(b && b.prototype), writable: true });
  if (b) Object.setPrototypeOf(d, b);
}

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : new P(function(resolve) { resolve(result.value); }).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

// 导出所有辅助函数
module.exports = {
  __extends,
  __awaiter,
  // 添加其他辅助函数
};
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'helpers.js'), helperFunctions);

// 创建package.json
const packageJson = `{
  "name": "cli-modules",
  "version": "1.0.0",
  "description": "重构的模块化CLI",
  "main": "index.js",
  "dependencies": {
    "lodash.merge": "^4.6.2"
  },
  "scripts": {
    "start": "node index.js"
  }
}`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'package.json'), packageJson);

// 创建README.md
const readme = `# 重构的模块化CLI

这个目录包含从打包文件中提取的模块化代码。

## 结构

- \`index.js\`: 主入口文件
- \`modules/\`: 包含所有提取的模块
  - \`helpers.js\`: 辅助函数

## 使用方法

\`\`\`
npm install
npm start
\`\`\`
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'README.md'), readme);

console.log(`完成！模块已保存到 ${OUTPUT_DIR} 目录`); 