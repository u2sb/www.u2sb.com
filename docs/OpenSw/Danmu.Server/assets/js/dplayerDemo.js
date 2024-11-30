export default {
  mounted() {
    this.$nextTick(() => {
      import("dplayer").then(({ default: DPlayer }) => {
        this.dp = new DPlayer({
          container: this.$refs.dp,
          video: {
            url: "https://danmu.u2sb.com/assets/video/1214946209-1-192.mp4",
          },
          danmaku: {
            api: "https://danmu.u2sb.com/api/dp/bilibili/",
            id: "cENuyhsT2rMOCohK",
            addition: [
              "https://danmu.u2sb.com/api/dp/bilibili/v3/BV1JP41167xK.json",
            ],
          },
        });
      });
    });
  },

  beforeUnmount() {
    this.dp.destroy();
  },
};
