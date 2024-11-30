---
title: ArtPlayer 弹幕
date: 2022-05-18 17:26:25

redirectFrom:
  - /pages/458868/
---

## 介绍

适合 ArtPlayer 使用的弹幕

## API V2

### 解析 BiliBili 弹幕

#### 解释

- `bvid` 视频 bvid
- `p` 分 P，例如 `1` `2`，省略时默认为 `1`
- `format` 数据格式，`json`

#### API

- `/api/art/bilibili/v2/{bvid}.{format}`
- `/api/art/bilibili/v2/{bvid}/{p:int}.{format}`

#### 示例

- `https://danmu.u2sb.com/api/art/bilibili/v2/BV1JP41167xK.json`

```html
<!DOCTYPE html>

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>demo</title>
  <style>
    .art-container {
      width: 800px;
      height: 450px;
    }
  </style>
</head>

<body>
  <h2>MessagePack 推荐</h2>
  <div id="art1" class="art-container"></div>

  <h2>JSON 不推荐</h2>
  <div id="art2" class="art-container"></div>

  <script type="module">
    import artplayer from "https://cdn.jsdelivr.net/npm/artplayer/+esm";
    import artdm from "https://cdn.jsdelivr.net/npm/artplayer-plugin-danmuku/+esm";
    import { getDanMuAsync } from "/assets/js/artMsgpackDm.js";

    const Artplayer = artplayer.default;
    const artplayerPluginDanmuku = artdm.default;

    const art1 = new Artplayer({
      container: "#art1",
      url: "/assets/video/1214946209-1-192.mp4",
      fullscreen: true,
      fullscreenWeb: true,
      plugins: [
        artplayerPluginDanmuku({
          danmuku: () => getDanMuAsync("/api/art/bilibili/v2/BV1JP41167xK"),
        }),
      ],
    });

    //不推荐
    const art2 = new Artplayer({
      container: "#art2",
      url: "/assets/video/1214946209-1-192.mp4",
      fullscreen: true,
      fullscreenWeb: true,
      plugins: [
        artplayerPluginDanmuku({
          danmuku: () =>
            fetch("/api/art/bilibili/v2/BV1JP41167xK.json").then((res) =>
              res.json()
            ),
        }),
      ],
    });
  </script>
</body>
```

## 示例

<div ref="art0" />

```html
<div ref="art0" />
```

```js
<!-- @include: ./assets/js/artplayerDemo.js -->
```

:::tip
一定要把 `danmakuId` 改掉，别 TM 傻逼呵呵的直接用我测试视频的 id 直接就写上去了，自己想办法随便生成一个随机字符串。
:::

<script type="module" src="./assets/js/artplayerDemo.js" ></script>
