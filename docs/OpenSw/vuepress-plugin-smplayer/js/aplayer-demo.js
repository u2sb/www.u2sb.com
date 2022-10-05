export default {
  data() {
    return {
      aplayer: {
        audio: [
          {
            name: "年轻人要热爱祖国",
            artist: "音阙诗听/赵方婧",
            url: "/assets/audio/年轻人要热爱祖国.mp3",
            cover:
              "https://sm.sm9.top/api/music?server=Tencent&type=pic&id=001gv6xI4BNGiP",
            lrc: "/assets/audio/年轻人要热爱祖国.lrc",
          },
        ],
      },
      aplayer2: {
        audio: [
          {
            name: "年轻人要热爱祖国",
            artist: "音阙诗听/赵方婧",
            url: "/assets/audio/年轻人要热爱祖国.mp3",
            cover:
              "https://sm.sm9.top/api/music?server=Tencent&type=pic&id=001gv6xI4BNGiP",
            lrc: "/assets/audio/年轻人要热爱祖国.lrc",
          },
          {
            name: "年轻人要热爱祖国",
            artist: "音阙诗听/赵方婧",
            url: "/assets/audio/年轻人要热爱祖国.mp3",
            cover:
              "https://sm.sm9.top/api/music?server=Tencent&type=pic&id=001gv6xI4BNGiP",
            lrc: "/assets/audio/年轻人要热爱祖国.lrc",
          },
        ],
      },
      aplayerCustomType: {
        audio: [
          {
            name: "年轻人要热爱祖国",
            artist: "音阙诗听/赵方婧",
            url: "/assets/audio/hls/年轻人要热爱祖国.m3u8",
            type: "customHls",
            cover:
              "https://sm.sm9.top/api/music?server=Tencent&type=pic&id=001gv6xI4BNGiP",
            lrc: "/assets/audio/年轻人要热爱祖国.lrc",
          },
        ],
        customAudioType: {
          customHls: function (audioElement, audio, player) {
            import("hls.js").then(({ default: Hls }) => {
              if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(audio.url);
                hls.attachMedia(audioElement);
                player.on("destroy", function () {
                  hls.destroy();
                });
              } else if (
                audioElement.canPlayType("application/x-mpegURL") ||
                audioElement.canPlayType("application/vnd.apple.mpegURL")
              ) {
                audioElement.src = audio.url;
              } else {
                player.notice("Error: HLS is not supported.");
              }
            });
          },
        },
      },
    };
  },
};
