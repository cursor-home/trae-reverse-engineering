# Trae 逆向工程分析

## 简介
本项目是对Trae编辑器的逆向工程分析。Trae是一个基于VSCode/Electron开发的编辑器，由字节跳动开发。

## 基本信息

- 完整路径: `/Applications/Trae.app`
- 启动脚本: `/usr/local/bin/trae` (软链接指向 `/Applications/Trae.app/Contents/Resources/app/bin/marscode`)
- 版本: 1.98.2 (根据package.json)

## 技术架构

Trae基于以下技术构建:
- Electron (v34.2.0)
- VSCode核心
- 字节跳动自研模块 (如@byted-icube系列包)

## 程序结构

```
Trae.app/
├── Contents/
│   ├── MacOS/
│   │   └── Electron (主执行文件)
│   ├── Resources/
│   │   ├── app/ (主应用代码)
│   │   │   ├── bin/
│   │   │   │   ├── marscode (启动脚本)
│   │   │   │   └── manager (管理器)
│   │   │   ├── package.json (项目配置)
│   │   │   ├── product.json (产品信息)
│   │   │   ├── out/ (编译后代码)
│   │   │   │   ├── cli.js
│   │   │   │   ├── main.js
│   │   │   │   └── ...
│   │   │   └── ...
│   │   └── ...
```

## 关键发现

1. Trae实际上是基于VSCode定制的IDE，由字节跳动开发
2. 命令行工具`trae`是一个bash脚本，它调用Electron来运行该应用
3. 该应用包含多个字节跳动的自研模块，如AI代码辅助功能
4. 产品元数据和配置存储在product.json中

## 逆向计划

1. **分析源代码结构**
   - 进一步分析out目录中的JavaScript文件
   - 检查其他相关资源文件

2. **研究扩展系统**
   - 分析内置扩展和扩展机制
   - 了解自定义扩展的开发方式

3. **分析AI功能**
   - 研究AI相关模块的实现方式
   - 分析API调用和模型使用情况

4. **研究配置系统**
   - 分析配置文件格式和存储方式
   - 了解用户数据存储位置和机制

## 下一步

- 分析main.js和cli.js文件以了解应用的启动和初始化流程
- 研究自研模块的功能和实现方式
- 分析网络通信和API调用

# Trae CLI 格式化工具

这个工具用于格式化 Trae 应用的 cli.js 文件，使其更易于阅读和分析。

## 安装

```bash
npm install
```

## 使用方法

运行格式化脚本：

```bash
npm run format
```

这将会读取当前目录下的 `cli.js` 文件，并在同一目录下生成一个格式化后的 `cli.formatted.js` 文件。

## 功能

- 使用 Babel 转换代码结构
- 使用 Prettier 美化代码格式
- 保留源文件不变，输出到新文件

## 依赖

- @babel/core
- @babel/preset-env
- @babel/plugin-transform-modules-commonjs
- @babel/plugin-proposal-class-properties
- prettier 