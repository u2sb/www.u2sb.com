export default {
  mounted() {
    this.$nextTick(() => {
      import("dplayer").then(({ default: DPlayer }) => {
        this.dp = new DPlayer({
          container: this.$refs.dp,
          video: {
            url: "/assets/video/s_720.mp4",
            thumbnails: "/assets/video/thumbnails.jpg",
          },
          danmaku: {
            api: "https://danmu.u2sb.com/api/dplayer/",
            id: "cENuyhsT2rMOCohK",
            addition: ["https://danmu.u2sb.com/api/dplayer/v3/bilibili/BV1zt411t79A"],
          },
        })
      });
    })
  },

  beforeDestroy() {
    this.dp.destroy();
  }
}
