---
title: 安装
date: 2022-01-24 14:17:12
redirectFrom:
  - /pages/963900/
---

::: warning
适用于 vuepress 2.x 的插件目前还有一些问题没有解决，仅供测试使用，详情请看文档，正式版请耐心等待。1.x 版本文档详见 [v1](https://v1.www.u2sb.com/pages/963900/)
:::

## 安装

当前版本打包为 npm 包还存在一些问题，暂时只以临时插件的形式存在，可自行到我的网站[仓库](https://github.com/u2sb/www.u2sb.com/tree/main/docs/.vuepress/config/plugins)下载相关文件，并引入 vuepress，详见[本站点仓库](https://github.com/u2sb/www.u2sb.com/)。

## 配置

```ts .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import smplayer from "./plugins/smplayer";

export default defineUserConfig({
  plugins: [
    smplayer({
      /* 相关配置 */
    }),
  ],
});
```

## 建议

- 建议配置 `shouldPrefetch: false`,

## 反馈

[GitHub](https://github.com/u2sb/vuepress-plugin-smplayer/issues)
