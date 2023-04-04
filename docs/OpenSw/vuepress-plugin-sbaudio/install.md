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

默认配置

```ts .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import sbaudio from "vuepress-plugin-sbaudio";

export default defineUserConfig({
  plugins: [
    sbaudio({
      aplayerOptions: {
        fixed: false,
        mini: false,
        autoplay: false,
        theme: "#2980b9",
        loop: "all",
        order: "list",
        preload: "auto",
        volume: 0.7,
        mutex: true,
        lrcType: 3,
        listFolded: false,
        listMaxHeight: "340px",
        storageName: "@u2sb/vuepress-plugin-meting",
      },
      aplayerGlobalOptions: {
        fixed: true,
        mini: true,
        autoplay: false,
        theme: "#2980b9",
        loop: "all",
        order: "list",
        preload: "auto",
        volume: 0.7,
        mutex: true,
        lrcType: 3,
        listFolded: false,
        listMaxHeight: "540px",
        storageName: "@u2sb/vuepress-plugin-meting",
      },
      metingOptions: {
        server: "netease",
        type: "song",
        auth: "auth",
        api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
      },
    }),
  ],
});
```

:::tip
本文只是简单说明使用，详细使用方法请阅读源码。
:::
