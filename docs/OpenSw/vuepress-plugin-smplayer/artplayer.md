---
title: ArtPlayer
date: 2022-01-24 14:17:12
oldlink:
  - /pages/289f4a/
---

:::tip
本插件不再提供 ArtPlayer 快速接入功能，并建议用户使用 js 直接引入，详情见下方示例。
:::

:::tip
详细配置说明见 [ArtPlayer 文档](https://artplayer.org/document/)
:::

## 安装

::: tabs

@tab:active NPM

```bash
npm install -D artplayer
```

@tab PNPM

```bash
pnpm add -D artplayer
```

@tab YARN

```bash
yarn add -D artplayer
```

:::

## 使用和示例

### 基本使用

<div ref="art0"></div>

```html
<div ref="art0"></div>

<script>
  export default {
    data() {
      return {
        art0: null,
      };
    },
    mounted() {
      this.$nextTick(() => {
        Promise.all([
          import("artplayer"),
          import("artplayer-plugin-danmuku"),
        ]).then(
          ([{ default: ArtPlayer }, { default: artplayerPluginDanmuku }]) => {
            this.art0 = new ArtPlayer({
              fullscreen: true,
              autoSize: true,
              setting: true,
              whitelist: ["*"],
              container: this.$refs.art0,
              url: "/assets/video/s_720.mp4",
            });
          }
        );

        // 设置样式
        this.$refs.art0.style.width = "100%";
        this.$refs.art0.style.height =
          (this.$refs.art0.scrollWidth / 16) * 9 + "px";
      });
    },

    beforeUnmount() {
      if (this.art0 && this.art0.destroy) {
        this.art0.destroy(false);
      }
    },
  };
</script>
```

### 弹幕

<div ref="art1"></div>

::: tip
需安装 `artplayer-plugin-danmuku`

```bash
npm install -D artplayer-plugin-danmuku
```

:::

```html
<script>
  const danmakuId = "cENuyhsT2rMOCohK";
  const danmakuApi = "https://danmu.u2sb.com/api/artplayer/v1";
  const bilibiliDanmaku = `${danmakuApi}/bilibili/BV1zt411t79A.json`;

  export default {
    data() {
      return {
        art1: null,
      };
    },
    mounted() {
      this.$nextTick(() => {
        Promise.all([
          import("artplayer"),
          import("artplayer-plugin-danmuku"),
        ]).then(
          ([{ default: ArtPlayer }, { default: artplayerPluginDanmuku }]) => {
            this.art1 = new ArtPlayer({
              fullscreen: true,
              autoSize: true,
              setting: true,
              whitelist: ["*"],
              container: this.$refs.art1,
              url: "/assets/video/s_720.mp4",
              plugins: [
                artplayerPluginDanmuku({
                  danmuku: () =>
                    Promise.allSettled([
                      fetch(bilibiliDanmaku).then((res) => res.json()),
                      fetch(`${danmakuApi}/${danmakuId}.json`).then((res) =>
                        res.json()
                      ),
                    ])
                      .then((res) =>
                        res
                          .filter((r) => r.status === "fulfilled")
                          .map((r) => r.value)
                      )
                      .then((res) =>
                        res
                          .filter(
                            (r) =>
                              r["code"] !== undefined &&
                              r["code"] === 0 &&
                              r["data"] !== undefined &&
                              r["data"].length > 0
                          )
                          .reduce((acc, cur) => acc.concat(cur["data"]), [])
                      ),
                  speed: 5, // 弹幕持续时间，单位秒，范围在[1 ~ 10]
                  opacity: 1, // 弹幕透明度，范围在[0 ~ 1]
                  fontSize: 25, // 字体大小，支持数字和百分比
                  color: "#FFFFFF", // 默认字体颜色
                  mode: 0, // 默认模式，0-滚动，1-静止
                  margin: [10, "25%"], // 弹幕上下边距，支持数字和百分比
                  antiOverlap: true, // 是否防重叠
                  useWorker: true, // 是否使用 web worker
                  synchronousPlayback: false, // 是否同步到播放速度
                  filter: (danmu) => danmu.text.length < 50, // 弹幕过滤函数，返回 true 则可以发送
                  lockTime: 5, // 输入框锁定时间，单位秒，范围在[1 ~ 60]
                  maxLength: 100, // 输入框最大可输入的字数，范围在[0 ~ 500]
                  minWidth: 200, // 输入框最小宽度，范围在[0 ~ 500]，填 0 则为无限制
                  maxWidth: 400, // 输入框最大宽度，范围在[0 ~ Infinity]，填 0 则为 100% 宽度
                  theme: "dark", // 输入框自定义挂载时的主题色，默认为 dark，可以选填亮色 light
                  beforeEmit: (danmu) => !!danmu.text.trim(), // 发送弹幕前的自定义校验，返回 true 则可以发送
                }),
              ],
            });

            this.art1.on("artplayerPluginDanmuku:emit", (danmu) => {
              fetch(danmakuApi, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  Id: danmakuId,
                  Referer: window.location.origin + window.location.pathname,
                  ...danmu,
                }),
              });
            });
          }
        );

        // 设置样式
        this.$refs.art1.style.width = "100%";
        this.$refs.art1.style.height =
          (this.$refs.art1.scrollWidth / 16) * 9 + "px";
      });
    },

    beforeUnmount() {
      if (this.art1 && this.art1.destroy) {
        this.art1.destroy(false);
      }
    },
  };
</script>
```

### HLS

<div ref="art2"></div>

::: tip
需安装 `hls.js`

```bash
npm install -D hls.js
```

:::

```html
<div ref="art2"></div>

<script>
  export default {
    data() {
      return {
        art2: null,
      };
    },
    mounted() {
      this.$nextTick(() => {
        Promise.all([import("artplayer")]).then(([{ default: ArtPlayer }]) => {
          this.art2 = new ArtPlayer({
            fullscreen: true,
            autoSize: true,
            setting: true,
            whitelist: ["*"],
            container: this.$refs.art2,
            url: "/assets/video/dash/master.m3u8",
            type: "customHls",
            customType: {
              customHls: function (mediaElement, src, player) {
                import("hls.js").then(({ default: Hls }) => {
                  if (
                    mediaElement.canPlayType("application/x-mpegURL") ||
                    mediaElement.canPlayType("application/vnd.apple.mpegURL")
                  ) {
                    mediaElement.src = src;
                  } else if (Hls.isSupported()) {
                    const hls = new Hls();
                    hls.attachMedia(mediaElement);
                    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                      hls.loadSource(src);
                    });

                    player.on("destroy", function () {
                      hls.destroy();
                    });
                  }
                });
              },
            },
          });
        });

        // 设置样式
        this.$refs.art2.style.width = "100%";
        this.$refs.art2.style.height =
          (this.$refs.art2.scrollWidth / 16) * 9 + "px";
      });
    },

    beforeUnmount() {
      if (this.art2 && this.art2.destroy) {
        this.art2.destroy(false);
      }
    },
  };
</script>
```

### FLV

<div ref="art3"></div>

::: tip
需安装 `mpegts.js`

```bash
npm install -D mpegts.js
```

:::

```html
<div ref="art3"></div>

<script>
  export default {
    data() {
      return {
        art3: null,
      };
    },
    mounted() {
      this.$nextTick(() => {
        Promise.all([import("artplayer")]).then(([{ default: ArtPlayer }]) => {
          this.art3 = new ArtPlayer({
            fullscreen: true,
            autoSize: true,
            setting: true,
            whitelist: ["*"],
            container: this.$refs.art3,
            url: "/assets/video/s_720.flv",
            type: "customFLV",
            customType: {
              customFLV: function (mediaElement, src, player) {
                import("mpegts.js").then(({ default: mpegts }) => {
                  const flvPlayer = mpegts.createPlayer({
                    type: "flv",
                    url: src,
                  });
                  flvPlayer.attachMediaElement(mediaElement);
                  flvPlayer.load();
                  player.on("destroy", function () {
                    flvPlayer.destroy();
                  });
                });
              },
            },
          });
        });

        // 设置样式
        this.$refs.art3.style.width = "100%";
        this.$refs.art3.style.height =
          (this.$refs.art3.scrollWidth / 16) * 9 + "px";
      });
    },

    beforeUnmount() {
      if (this.art3 && this.art3.destroy) {
        this.art3.destroy(false);
      }
    },
  };
</script>
```

### DASH

<div ref="art4"></div>

::: tip
需安装 `dashjs`

```bash
npm install -D dashjs
```

:::

```html
<div ref="art4"></div>

<script>
  export default {
    data() {
      return {
        art4: null,
      };
    },
    mounted() {
      this.$nextTick(() => {
        Promise.all([import("artplayer")]).then(([{ default: ArtPlayer }]) => {
          this.art4 = new ArtPlayer({
            fullscreen: true,
            autoSize: true,
            setting: true,
            whitelist: ["*"],
            container: this.$refs.art4,
            url: "/assets/video/dash/stream.mpd",
            type: "customDASH",
            customType: {
              customDASH: function (mediaElement, src, player) {
                import("dashjs").then(({ default: dashjs }) => {
                  const dashPlayer = dashjs.MediaPlayer().create();
                  dashPlayer.initialize(mediaElement, src, false);
                  player.on("destroy", function () {
                    dashPlayer.reset();
                  });
                });
              },
            },
          });
        });

        // 设置样式
        this.$refs.art4.style.width = "100%";
        this.$refs.art4.style.height =
          (this.$refs.art4.scrollWidth / 16) * 9 + "px";
      });
    },

    beforeUnmount() {
      if (this.art4 && this.art4.destroy) {
        this.art4.destroy(false);
      }
    },
  };
</script>
```

### ShakaDash

<div ref="art5"></div>

::: tip
需安装 `shaka-player`

```bash
npm install -D shaka-player
```

:::

```html
<div ref="art5"></div>

<script>
  export default {
    data() {
      return {
        art5: null,
      };
    },
    mounted() {
      this.$nextTick(() => {
        Promise.all([import("artplayer")]).then(([{ default: ArtPlayer }]) => {
          this.art5 = new ArtPlayer({
            fullscreen: true,
            autoSize: true,
            setting: true,
            whitelist: ["*"],
            container: this.$refs.art5,
            url: "/assets/video/dash/stream.mpd",
            type: "customShakaDash",
            customType: {
              customShakaDash: function (mediaElement, src, player) {
                import("shaka-player").then(({ default: shaka }) => {
                  const shakaPlayer = new shaka.Player(mediaElement);
                  shakaPlayer.load(src);
                  player.on("destroy", function () {
                    shakaPlayer.destroy();
                  });
                });
              },
            },
          });
        });

        // 设置样式
        this.$refs.art5.style.width = "100%";
        this.$refs.art5.style.height =
          (this.$refs.art5.scrollWidth / 16) * 9 + "px";
      });
    },

    beforeUnmount() {
      if (this.art5 && this.art5.destroy) {
        this.art5.destroy(false);
      }
    },
  };
</script>
```

<script type="module" src="./js/artplayer-demo.js"></script>
