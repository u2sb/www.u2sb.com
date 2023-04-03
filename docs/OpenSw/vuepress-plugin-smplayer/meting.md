---
title: Meting
date: 2022-01-24 14:17:12
redirectFrom:
  - /pages/54720b/
---

## 介绍

可以插入 `meting-js` 标签

## 使用

### 基本使用

```html
<ClientOnly>
  <Meting id="003UkWuI0E8U0l" server="tencent" type="playlist" />
</ClientOnly>
```

或

```html
<ClientOnly>
  <meting-js id="003UkWuI0E8U0l" server="tencent" type="playlist" />
</ClientOnly>
```

### Auto

:::warning
各种平台的 URL 一直是在变的，auto 解析不一定能及时更新，使用前请先测试，如遇到问题，请及时[反馈](https://github.com/u2sb/vuepress-plugin-smplayer/issues)。
:::

```html
<ClientOnly>
  <Meting auto="https://y.qq.com/n/ryqq/songDetail/003UkWuI0E8U0l" />
</ClientOnly>
```

### 组合列表

使用 `list` 参数添加额外的音乐列表。

```html
<ClientOnly>
  <Meting id="00460eVJ4FSPKH5" server="tencent" type="song" :list="list" />
</ClientOnly>

<script>
  export default {
    data() {
      return {
        list: [
          {
            id: "00417x4J1oaZre", //水木年华歌单
            server: "tencent",
            type: "song",
          },
          {
            auto: "https://y.qq.com/n/ryqq/songDetail/000zlY4H0TxwBs", //爱上你我很快乐
          },
        ],
      };
    },
  };
</script>
```

### 额外歌单

使用 `audio` 参数添加额外的音乐列表。

```html
<ClientOnly>
  <Meting id="00460eVJ4FSPKH" server="tencent" type="song" :audio="audio" />
</ClientOnly>

<script>
  export default {
    data() {
      return {
        list: [
          {
            id: "00417x4J1oaZre", //水木年华歌单
            server: "tencent",
            type: "song",
          },
          {
            auto: "https://y.qq.com/n/ryqq/songDetail/000zlY4H0TxwBs", //爱上你我很快乐
          },
        ],
        audio: [
          {
            name: "年轻人要热爱祖国",
            artist: "音阙诗听/赵方婧",
            url: "/assets/audio/年轻人要热爱祖国.mp3",
            cover:
              "https://sm.sm9.top/api/music?server=Tencent&type=pic&id=001gv6xI4BNGiP",
            lrc: "/assets/audio/年轻人要热爱祖国.lrc",
          },
        ],
      };
    },
  };
</script>
```

## 参数

> 此部分请熟读 [MetingJS 文档](https://github.com/metowolf/MetingJS)

继承 MetingJS 所有参数，示例见上方 DEMO。

额外参数 `api` 替代 `meting_api`

```html
<ClientOnly>
  <meting-js
    id="7951088719"
    server="tencent"
    type="playlist"
    api="https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r"
  />
</ClientOnly>
```

## 配置

主题下插件配置为默认配置，每个 `<Meting />` 或 `<meting-js />` 标签下的设置会覆盖默认配置。

```ts
import { defineUserConfig } from "vuepress";
import smplayer from "./plugins/smplayer";

export default defineUserConfig({
  plugins: [
    smplayer({
      meting: {
        api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
        server: "tencent",
        type: "song",
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
        storageName: "vuepress-plugin-smplayer",
      },
    }),
  ],
});
```
