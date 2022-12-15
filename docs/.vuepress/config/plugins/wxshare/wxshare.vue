<template>
  <button v-show="isWeXin" class="icon iconfont icon-wechat back-to-top" style="bottom: 10px; font-size: 26px;"
    v-on:click="ClickedWxShareButton"></button>
</template>

<script>
import { defineComponent } from "vue";

const wspo = WSPO;
export default defineComponent({
  data() {
    return {
      isWeXin: false
    }

  },
  mounted() {
    this.isWeXin = navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger";
  },

  methods: {
    ClickedWxShareButton() {
      let url = wspo.redirectApi;
      url += `?url=${wspo.host + this.$route.fullPath}`;
      url += `&title=${this.$frontmatter.title || this.$route.meta.title || document.title}`;
      url += `&desc=${this.$frontmatter.wxdescription || wspo.desc || this.$frontmatter.description}`;
      url += `&imgUrl=${wspo.imgUrl || wspo.host + "/logo.png"}`
      window.location.href = url;
    },
  },
});
</script>
