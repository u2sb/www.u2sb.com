export default {
  mounted() {
    this.$nextTick(() => {
      import("dplayer").then(({ default: DPlayer }) => {
        this.dp0 = new DPlayer({
          container: this.$refs.dp0,
          video: {
            url: "/assets/video/s_720.mp4",
            thumbnails: "/assets/video/thumbnails.jpg",
          },
        });

        this.dp1 = new DPlayer({
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
    this.dp0.destroy();
    this.dp1.destroy();
    this.dp2.destroy();
  },
};
