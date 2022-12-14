const danmakuId = "cENuyhsT2rMOCohK";
const danmakuApi = "https://danmu.u2sb.com/api/artplayer/v1";
const bilibiliDanmaku = `${danmakuApi}/bilibili/BV1zt411t79A.json`;

export default {
  data() {
    return {
      art0: null,
      art1: null,
      art2: null,
      art3: null,
      art4: null,
      art5: null,
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
                speed: 5, // ??????????????????????????????????????????[1 ~ 10]
                opacity: 1, // ???????????????????????????[0 ~ 1]
                fontSize: 25, // ???????????????????????????????????????
                color: "#FFFFFF", // ??????????????????
                mode: 0, // ???????????????0-?????????1-??????
                margin: [10, "25%"], // ?????????????????????????????????????????????
                antiOverlap: true, // ???????????????
                useWorker: true, // ???????????? web worker
                synchronousPlayback: false, // ???????????????????????????
                filter: (danmu) => danmu.text.length < 50, // ??????????????????????????? true ???????????????
                lockTime: 5, // ?????????????????????????????????????????????[1 ~ 60]
                maxLength: 100, // ?????????????????????????????????????????????[0 ~ 500]
                minWidth: 200, // ?????????????????????????????????[0 ~ 500]?????? 0 ???????????????
                maxWidth: 400, // ?????????????????????????????????[0 ~ Infinity]?????? 0 ?????? 100% ??????
                theme: "dark", // ??????????????????????????????????????????????????? dark????????????????????? light
                beforeEmit: (danmu) => !!danmu.text.trim(), // ?????????????????????????????????????????? true ???????????????
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
        }
      );

      // ????????????
      this.$refs.art0.style.width = "100%";
      this.$refs.art0.style.height =
        (this.$refs.art0.scrollWidth / 16) * 9 + "px";

      this.$refs.art1.style.width = "100%";
      this.$refs.art1.style.height =
        (this.$refs.art1.scrollWidth / 16) * 9 + "px";

      this.$refs.art2.style.width = "100%";
      this.$refs.art2.style.height =
        (this.$refs.art2.scrollWidth / 16) * 9 + "px";

      this.$refs.art3.style.width = "100%";
      this.$refs.art3.style.height =
        (this.$refs.art3.scrollWidth / 16) * 9 + "px";

      this.$refs.art4.style.width = "100%";
      this.$refs.art4.style.height =
        (this.$refs.art4.scrollWidth / 16) * 9 + "px";

      this.$refs.art5.style.width = "100%";
      this.$refs.art5.style.height =
        (this.$refs.art5.scrollWidth / 16) * 9 + "px";
    });
  },

  beforeUnmount() {
    if (this.art0 && this.art0.destroy) {
      this.art0.destroy(false);
    }

    if (this.art1 && this.art1.destroy) {
      this.art1.destroy(false);
    }

    if (this.art2 && this.art2.destroy) {
      this.art2.destroy(false);
    }

    if (this.art3 && this.art3.destroy) {
      this.art3.destroy(false);
    }

    if (this.art4 && this.art4.destroy) {
      this.art4.destroy(false);
    }

    if (this.art5 && this.art5.destroy) {
      this.art5.destroy(false);
    }
  },
};
