---
title: 哔哩哔哩动画
date: 2022-01-24 14:17:12
redirectFrom:
  - /pages/15efef/
---

## 介绍

可以插入 bilibili 视频

## 使用

<BiliBili bvid="BV1zt411t79A" />

```html
<BiliBili bvid="BV1zt411t79A" />
```

## 参数

以下为默认参数，默认参数可省略

```html
<Bilibili
  bvid="BV1zt411t79A"
  :page="1"
  :t="0"
  :danmaku="true"
  :sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups"
  :allowfullscreen="allowfullscreen"
  width="100%"
  :height="[9 / 16, 70]"
/>
```

- page : 分 P
- t : 开始时间，秒
- danmaku : 弹幕开关
- width : 播放器宽度，类似 css 属性，`100%` 或 `960px`
- height :播放器高度，对应 css 高度计算为：`width * height[0] + height[1]`

## 配置

主题下插件配置为默认配置，每个 `<Bilibili />` 标签下的设置会覆盖默认配置。

```ts
import { defineUserConfig } from "vuepress";
import smplayer from "./plugins/smplayer";

export default defineUserConfig({
  plugins: [
    smplayer({
      bilibili: {
        page: 1,
        danmaku: !0,
        t: 0,
        allowfullscreen: "allowfullscreen",
        sandbox:
          "allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups",
        width: "100%",
        height: [9 / 16, 70],
      },
    }),
  ],
});
```
