---
title: 开发文档
date: 2021-02-24 10:11:33
redirectFrom:
  - /pages/b86c1d/
---

本项目接受以 pr 的方式贡献代码。

## 开发基础

[Hexo API](https://hexo.io/api/)
[JavaScript]()
[TypeScript](https://www.typescriptlang.org/)

本项目使用 pnpm 作为包管理工具，使用 TypeScript 作为编程语言，Gulp 作为编译引擎。

开发前需安装 [node](https://nodejs.org/zh-cn/) 和 [pnpm](https://pnpm.js.org/)。

## 开发

### fork 仓库

需要先 fork [仓库](https://github.com/u2sb/hexo-tag-mmedia)，然后克隆到本地

::: tip
必须克隆到本地，不能在线修改
:::

### 全局安装 gulp-cli

```bash
npm install --global gulp-cli
```

### 安装依赖

```bash
pnpm install
```

### 修改

修改或增加插件，如增加插件，请仔细阅读源码，看已有的插件是怎么编写的。

### 编译

```bash
pnpm run build
```

### 测试

可以本地创建一个 hexo 博客测试，推荐使用 pnpm 的本地链接，在博客内安装插件

```bash
pnpm add ../hexo-tag-mmedia/

pnpm install
```

### 提交 PR

提交到仓库，并提 PR
