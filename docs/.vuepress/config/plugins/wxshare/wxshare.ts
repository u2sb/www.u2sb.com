import { defineComponent } from "vue";
import { WxSharePluginOptions } from ".";
import WechatJSSDK from "wechat-jssdk";

// @ts-ignore:
const wspo: WxSharePluginOptions = WSPO;

export default defineComponent({
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        this.InitWxShare(wspo.host + to.path);
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.InitWxShare(wspo.host + this.$route.path);
    });
  },

  methods: {
    InitWxShare(url: string) {
      fetch(wspo.signatureApi + url)
        .then((res) => res.json())
        .then((res) => {
          if (res.code === 0) {
            const data = res.data;
            const config = {
              appId: data.appId,
              nonceStr: data.nonceStr,
              signature: data.signature,
              timestamp: data.timestamp,
              debug: true,
              jsApiList: [
                "updateAppMessageShareData",
                "updateTimelineShareData",
              ],
            };
            const wechatObj = new WechatJSSDK(config);
            wechatObj.initialize().then((w) => {
              w.callWechatApi("updateAppMessageShareData", {
                title: this.$route.meta.title || document.title,
                link: wspo.redirectApi + url,
                imgUrl: wspo.imgUrl || "/logo.png",
                desc:
                  this.$frontmatter.wxdescription ||
                  wspo.desc ||
                  this.$frontmatter.description,
              });
              w.callWechatApi("updateTimelineShareData", {
                title: this.$route.meta.title || document.title,
                link: wspo.redirectApi + url,
                imgUrl: wspo.imgUrl || "/logo.png",
                desc:
                  this.$frontmatter.wxdescription ||
                  wspo.desc ||
                  this.$frontmatter.description,
              });
            });
          }
        });
    },
  },
});
