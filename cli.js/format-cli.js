#!/usr/bin/env node

/**
 * 这个脚本用于格式化cli.js文件
 * 使用babel将代码转换为更可读的格式
 * 然后使用prettier进行代码风格格式化
 */

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const prettier = require('prettier');

// 主函数，使用async
async function formatCli() {
  // 读取cli.js文件
  const cliPath = path.join(__dirname, 'cli.js');
  let cliContent;

  try {
    cliContent = fs.readFileSync(cliPath, 'utf8');
    console.log('成功读取cli.js文件');
  } catch (error) {
    console.error('读取cli.js文件失败:', error);
    process.exit(1);
  }

  // 使用Babel转换代码
  let transformedCode;
  try {
    const result = babel.transformSync(cliContent, {
      presets: ['@babel/preset-env'],
      configFile: false,
      babelrc: false,
      comments: true
    });
    transformedCode = result.code;
    console.log('成功使用Babel转换代码');
  } catch (error) {
    console.error('Babel转换失败:', error);
    process.exit(1);
  }

  // 使用Prettier格式化代码，处理Promise
  let formattedCode;
  try {
    formattedCode = await prettier.format(transformedCode, {
      parser: 'babel',
      singleQuote: true,
      trailingComma: 'es5',
      printWidth: 100,
      tabWidth: 2,
      semi: true
    });
    console.log('成功使用Prettier格式化代码');
  } catch (error) {
    console.error('Prettier格式化失败:', error);
    process.exit(1);
  }

  // 将格式化后的代码写回文件
  try {
    fs.writeFileSync(cliPath, formattedCode, 'utf8');
    console.log('成功将格式化后的代码写回cli.js文件');
  } catch (error) {
    console.error('写入cli.js文件失败:', error);
    process.exit(1);
  }

  console.log('cli.js文件格式化完成！');
}

// 执行主函数
formatCli().catch(error => {
  console.error('格式化过程出错:', error);
  process.exit(1);
}); 