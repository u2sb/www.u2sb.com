const danmuApi = "https://danmu-bili.u2sb.com/api/bilibili/v2/BV1zt411t79A";

export default {
  mounted() {
    this.$nextTick(() => {
      const art0 = this.$refs.art0;
      // 设置样式
      art0.style.width = "100%";
      art0.style.height = (art0.scrollWidth / 16) * 9 + "px";

      Promise.all([
        import("artplayer"),
        import("artplayer-plugin-danmuku"),
        import("https://danmu-bili.u2sb.com/js/dm.js"),
      ]).then(
        ([
          { default: ArtPlayer },
          { default: artplayerPluginDanmuku },
          { bilibili },
        ]) => {
          this.art = new ArtPlayer({
            fullscreen: true,
            autoSize: true,
            setting: true,
            container: art0,
            url: "/assets/video/s_720.mp4",
            plugins: [
              artplayerPluginDanmuku({
                danmuku: () =>
                  fetch(danmuApi)
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
        }
      );
    });
  },
  beforeUnmount() {
    if (this.art) {
      this.art.destroy();
    }
  },
};
