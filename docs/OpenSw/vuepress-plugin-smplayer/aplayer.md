---
title: Aplayer
date: 2022-01-24 14:17:12
redirectFrom:
  - /pages/2f42c4/
---

## 介绍

可以插入 aplayer 标签

## 使用和示例

### 参数

> 此部分请熟读 [APlayer 文档](http://aplayer.js.org/)

`src` 传参，具体参数见 [APlayer 文档](http://aplayer.js.org/)，示例见下方 DEMO。

### 基本使用

```html
<ClientOnly>
  <APlayer :src="aplayer" />
</ClientOnly>

<script>
  export default {
    data() {
      return {
        aplayer: {
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
        },
      };
    },
  };
</script>
```

### customType

自定义类型，方法见示例

```html
<ClientOnly>
  <APlayer :src="aplayerCustomType" />
</ClientOnly>

<script>
  export default {
    data() {
      return {
        aplayerCustomType: {
          audio: [
            {
              name: "年轻人要热爱祖国",
              artist: "音阙诗听/赵方婧",
              url: "/assets/audio/hls/年轻人要热爱祖国.m3u8",
              type: "customHls",
              cover:
                "https://sm.sm9.top/api/music?server=Tencent&type=pic&id=001gv6xI4BNGiP",
              lrc: "/assets/audio/年轻人要热爱祖国.lrc",
            },
          ],
          customAudioType: {
            customHls: function (audioElement, audio, player) {
              import("hls.js").then(({ default: Hls }) => {
                if (Hls.isSupported()) {
                  const hls = new Hls();
                  hls.loadSource(audio.url);
                  hls.attachMedia(audioElement);
                  player.on("destroy", function () {
                    hls.destroy();
                  });
                } else if (
                  audioElement.canPlayType("application/x-mpegURL") ||
                  audioElement.canPlayType("application/vnd.apple.mpegURL")
                ) {
                  audioElement.src = audio.url;
                } else {
                  player.notice("Error: HLS is not supported.");
                }
              });
            },
          },
        },
      };
    },
  };
</script>
```

### 混合列表

```html
<ClientOnly>
  <APlayer :src="aplayer2" />
</ClientOnly>

<script>
  export default {
    data() {
      return {
        aplayer2: {
          audio: [
            {
              name: "年轻人要热爱祖国",
              artist: "音阙诗听/赵方婧",
              url: "/assets/audio/年轻人要热爱祖国.mp3",
              cover:
                "https://sm.sm9.top/api/music?server=Tencent&type=pic&id=001gv6xI4BNGiP",
              lrc: "/assets/audio/年轻人要热爱祖国.lrc",
            },
            {
              name: "年轻人要热爱祖国",
              artist: "音阙诗听/赵方婧",
              url: "/assets/audio/年轻人要热爱祖国.mp3",
              cover:
                "https://sm.sm9.top/api/music?server=Tencent&type=pic&id=001gv6xI4BNGiP",
              lrc: "/assets/audio/年轻人要热爱祖国.lrc",
            },
          ],
        },
      };
    },
  };
</script>
```

## 配置

主题下插件配置为默认配置，每个 `<APlayer />` 标签下的设置会覆盖默认配置。

```ts
import { defineUserConfig } from "vuepress";
import smplayer from "./plugins/smplayer";

export default defineUserConfig({
  plugins: [
    smplayer({
      aplayer: {
        src: {
          lrcType: 3,
        },
      },
    }),
  ],
});
```
