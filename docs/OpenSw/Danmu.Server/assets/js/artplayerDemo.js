const danmuApi = "https://danmu.u2sb.com/api/art/bilibili/v2/BV1JP41167xK";

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
        import("https://danmu.u2sb.com/assets/js/artMsgpackDm.js"),
      ]).then(
        ([
          { default: ArtPlayer },
          { default: artplayerPluginDanmuku },
          { getDanMuAsync },
        ]) => {
          this.art = new ArtPlayer({
            fullscreen: true,
            autoSize: true,
            setting: true,
            container: art0,
            url: "https://danmu.u2sb.com/assets/video/1214946209-1-192.mp4",
            plugins: [
              artplayerPluginDanmuku({
                danmuku: () => getDanMuAsync(danmuApi),
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
