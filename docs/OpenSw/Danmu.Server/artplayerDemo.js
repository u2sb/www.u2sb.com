const danmakuId = "cENuyhsT2rMOCohK";
const danmakuApi = "https://danmu.u2sb.com/api/artplayer/v1";
const bilibiliDanmaku = `${danmakuApi}/bilibili/BV1zt411t79A.json`;

export default {
  async mounted() {
    this.$nextTick(() => {
      Promise.all([
        import("artplayer"),
        import("artplayer-plugin-danmuku")])
        .then(([{ default: ArtPlayer }, { default: artplayerPluginDanmuku }]) => {
          this.art = new ArtPlayer({
            fullscreen: true,
            autoSize: true,
            setting: true,
            container: this.$refs.art,
            url: "/assets/video/s_720.mp4",
            plugins: [
              artplayerPluginDanmuku({
                danmuku: () => Promise.allSettled(
                  [
                    fetch(bilibiliDanmaku).then(res => res.json()),
                    fetch(`${danmakuApi}/${danmakuId}.json`).then(res => res.json())
                  ])
                  .then(res => res.filter(r => r.status === "fulfilled").map(r => r.value))
                  .then(res => res.filter(r => r["code"] !== undefined && r["code"] === 0 && r["data"] !== undefined && r["data"].length > 0)
                    .reduce((acc, cur) => acc.concat(cur["data"]), [])),
                speed: 5, // 弹幕持续时间，单位秒，范围在[1 ~ 10]
                opacity: 1, // 弹幕透明度，范围在[0 ~ 1]
                fontSize: 25, // 字体大小，支持数字和百分比
                color: '#FFFFFF', // 默认字体颜色
                mode: 0, // 默认模式，0-滚动，1-静止
                margin: [10, '25%'], // 弹幕上下边距，支持数字和百分比
                antiOverlap: true, // 是否防重叠
                useWorker: true, // 是否使用 web worker
                synchronousPlayback: false, // 是否同步到播放速度
                filter: (danmu) => danmu.text.length < 50, // 弹幕过滤函数，返回 true 则可以发送
                lockTime: 5, // 输入框锁定时间，单位秒，范围在[1 ~ 60]
                maxLength: 100, // 输入框最大可输入的字数，范围在[0 ~ 500]
                minWidth: 200, // 输入框最小宽度，范围在[0 ~ 500]，填 0 则为无限制
                maxWidth: 400, // 输入框最大宽度，范围在[0 ~ Infinity]，填 0 则为 100% 宽度
                theme: 'dark', // 输入框自定义挂载时的主题色，默认为 dark，可以选填亮色 light
                beforeEmit: (danmu) => !!danmu.text.trim(), // 发送弹幕前的自定义校验，返回 true 则可以发送
              }),
            ],
          })

          this.art.on('artplayerPluginDanmuku:emit', (danmu) => {
            fetch(danmakuApi, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
              },
              body: JSON.stringify({
                Id: danmakuId,
                Referer: window.location.origin + window.location.pathname,
                ...danmu,
              }),
            })
          });
        });

      // 设置样式
      this.$refs.art.style.width = "100%";
      this.$refs.art.style.height = this.$refs.art.scrollWidth / 16 * 9 + "px";
    })
  },
}
