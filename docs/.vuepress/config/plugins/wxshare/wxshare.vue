<template>
  <button class="icon iconfont icon-wechat back-to-top" style="bottom: 10px; font-size: 26px;"
    v-on:click="ClickedWxShareButton"></button>
</template>

<script>
import { defineComponent } from "vue";

const wspo = WSPO;
export default defineComponent({
  methods: {
    ClickedWxShareButton() {
      let url = wspo.redirectApi;
      url += `?url=${wspo.host + this.$route.fullPath}`;
      url += `&title=${this.$frontmatter.title || this.$route.meta.title || document.title}`;
      url += `&desc=${this.$frontmatter.wxdescription || wspo.desc || this.$frontmatter.description.substring(0, 60)}`;
      url += `&imgUrl=${wspo.imgUrl || wspo.host + "/logo.png"}`
      window.location.href = url;
    },
  },
});
</script>
