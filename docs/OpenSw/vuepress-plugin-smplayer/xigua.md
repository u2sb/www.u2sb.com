---
title: 西瓜视频
date: 2022-01-24 14:17:12
oldlink:
  - /pages/6a55a6/
---

## 介绍

可以插入 西瓜 视频

## 使用

<Xigua xid="7004391080330428964" />

```
<Xigua xid="7004391080330428964" />
```

## 参数

以下为默认参数，默认参数可省略

```html
<Xigua
  xid="7004391080330428964"
  id=""
  :autoplay="false"
  :startTime="0"
  :sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups"
  :allowfullscreen="allowfullscreen"
  width="100%"
  :height="[9 / 16, 70]"
/>
```

- width : 播放器宽度，类似 css 属性，`100%` 或 `960px`
- height :播放器高度，对应 css 高度计算为：`width * height[0] + height[1]`

## 配置

主题下插件配置为默认配置，每个 `<Xigua />` 标签下的设置会覆盖默认配置。

```ts
import { defineUserConfig } from "vuepress";
import smplayer from "./plugins/smplayer";

export default defineUserConfig({
  plugins: [
    smplayer({
      xigua: {
        autoplay: !1,
        startTime: 0,
        allowfullscreen: "allowfullscreen",
        sandbox:
          "allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups",
        width: "100%",
        height: [9 / 16, 0],
      },
    }),
  ],
});
```
