---
title: Dplayer
date: 2022-01-24 14:17:12
oldlink:
  - /pages/aad6e7/
---

:::tip
本插件不再提供 DPlayer 快速接入功能，并建议用户使用 js 直接引入，详情见下方示例。
:::

:::tip
详细配置说明见 [DPlayer 文档](https://dplayer.diygod.dev)
:::

## 安装

::: tabs

@tab:active NPM

```bash
npm install -D dplayer
```

@tab PNPM

```bash
pnpm add -D dplayer
```

@tab YARN

```bash
yarn add -D dplayer
```

:::

## 使用和示例

### 基本使用

<div ref="dp0" />

```html
<div ref="dp0" />

<script>
  export default {
    mounted() {
      this.$nextTick(() => {
        import("dplayer").then(({ default: DPlayer }) => {
          this.dp1 = new DPlayer({
            container: this.$refs.dp0,
            video: {
              url: "/assets/video/s_720.mp4",
              thumbnails: "/assets/video/thumbnails.jpg",
            },
          });
        });
      });
    },

    beforeUnmount() {
      this.dp0.destroy();
    },
  };
</script>
```

### 弹幕

<div ref="dp1" />

```html
<div ref="dp1" />

<script>
  export default {
    mounted() {
      this.$nextTick(() => {
        import("dplayer").then(({ default: DPlayer }) => {
          this.dp2 = new DPlayer({
            container: this.$refs.dp1,
            video: {
              url: "/assets/video/s_720.mp4",
              thumbnails: "/assets/video/thumbnails.jpg",
            },
            danmaku: {
              api: "https://danmu.u2sb.com/api/dplayer/",
              id: "cENuyhsT2rMOCohK",
              addition: [
                "https://danmu.u2sb.com/api/dplayer/v3/bilibili/BV1zt411t79A",
              ],
            },
          });
        });
      });
    },

    beforeUnmount() {
      this.dp1.destroy();
    },
  };
</script>
```

### HLS

<div ref="dp2" />

::: tip
需安装 `hls.js`

```bash
npm install -D hls.js
```

:::

```html
<div ref="dp2" />

<script>
  export default {
    mounted() {
      this.$nextTick(() => {
        import("dplayer").then(({ default: DPlayer }) => {
          this.dp2 = new DPlayer({
            container: this.$refs.dp2,
            video: {
              url: "/assets/video/dash/master.m3u8",
              thumbnails: "/assets/video/thumbnails.jpg",
              type: "customHLS",
              customType: {
                customHLS: function (video, player) {
                  import("hls.js").then(({ default: Hls }) => {
                    const hls = new Hls();
                    hls.loadSource(video.src);
                    hls.attachMedia(video);

                    player.on("destroy", function () {
                      hls.destroy();
                    });
                  });
                },
              },
            },
          });
        });
      });
    },

    beforeUnmount() {
      this.dp2.destroy();
    },
  };
</script>
```

### 其他库

略，请自行脑补使用方式

<script type="module" src="./js/dplayer-demo.js"></script>
