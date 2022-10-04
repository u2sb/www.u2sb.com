---
title: APlayerGlobal
---

## 介绍

全局音乐播放器

## 使用

全局音乐播放列表来自两部分，分别是 `aplayerGlobalAudios` 和 `metingOptions.list`，两部分共同组合为播放列表。

```ts .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import sbaudio from "vuepress-plugin-sbaudio";

export default defineUserConfig({
  plugins: [
    sbaudio({
      aplayerGlobalOptions: {
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
      },
      aplayerGlobalAudios: [],
      metingOptions: {
        list: [
          {
            type: "playlist",
            id: "3045842790",
          },
        ],
      },
    }),
  ],
});
```

![数据来源](./assets/img/全局APlayer来源示意图.avif)
