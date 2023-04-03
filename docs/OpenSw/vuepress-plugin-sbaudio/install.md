---
title: 安装和配置
---

## 安装

```bash
pnpm add -D vuepress-plugin-sbaudio aplayer
```

## 配置

```ts .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import sbaudio from "vuepress-plugin-sbaudio";

export default defineUserConfig({
  plugins: [sbaudio({})],
});
```
