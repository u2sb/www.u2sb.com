const danmuApi =
  "https://danmu-bili.s2.u2sb.com/api/bilibili/danmu/BV1zt411t79A.xml";

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
      ]).then(
        ([{ default: ArtPlayer }, { default: artplayerPluginDanmuku }]) => {
          this.art = new ArtPlayer({
            fullscreen: true,
            autoSize: true,
            setting: true,
            container: art0,
            url: "/assets/video/s_720.mp4",
            plugins: [
              artplayerPluginDanmuku({
                danmuku: danmuApi,
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
