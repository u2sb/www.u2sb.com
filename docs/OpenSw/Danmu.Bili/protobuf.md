---
title: Protobuf 弹幕
---

## 介绍

使用 protobuf 格式传输弹幕。

## 接口

- `https://danmu-bili.s2.u2sb.com/api/bilibili/raw/bvid/p?`

- p 为 1 时可省略

示例

- `https://danmu-bili.s2.u2sb.com/api/bilibili/raw/BV1zt411t79A`
- `https://danmu-bili.s2.u2sb.com/api/bilibili/raw/BV1zt411t79A/1`

## 格式

弹幕格式与 B 站完全相同，但是会合并同一视频中的分段弹幕，使用起来会比较简单。

详见 [protobuf 弹幕](https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/danmaku/danmaku_proto.md)

## 在 ArtPlayer 中使用

<div ref="art0" />

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      #art0 {
        width: 800px;
        height: 450px;
      }
    </style>
  </head>

  <body>
    <div id="art0"></div>
    <script type="module">
      import artplayer from "https://cdn.jsdelivr.net/npm/artplayer/+esm";
      import artdm from "https://cdn.jsdelivr.net/npm/artplayer-plugin-danmuku/+esm";
      import { bilibili } from "https://danmu-bili.s2.u2sb.com/js/dm.js";

      const Artplayer = artplayer.default;
      const artplayerPluginDanmuku = artdm.default;
      const art = new Artplayer({
        container: "#art0",
        url: "https://www.u2sb.com/assets/video/s_720.mp4",
        plugins: [
          artplayerPluginDanmuku({
            danmuku: () =>
              fetch(
                "https://danmu-bili.s2.u2sb.com/api/bilibili/raw/BV1zt411t79A"
              )
                .then((res) => res.arrayBuffer())
                .then((buffer) => {
                  let d =
                    bilibili.community.service.dm.v1.DmSegMobileReply.decode(
                      new Uint8Array(buffer)
                    );
                  return d.elems.map((m) => ({
                    text: m.content,
                    time: m.progress / 1000,
                    color: "#" + m.color.toString(16),
                    border: false,
                    mode: m.mode === 4 || m.mode === 5 ? 1 : 0,
                  }));
                }),
          }),
        ],
      });
    </script>
  </body>
</html>
```

<script type="module" src="./assets/js/art-protobuf.js" ></script>
