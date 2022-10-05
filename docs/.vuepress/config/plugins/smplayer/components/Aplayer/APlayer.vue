<template>
  <div>
    <div ref="sbplayer" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { deepmerge as merge } from "deepmerge-ts";
import { aplayer as APLAYER } from "@temp/SmplayerOptions.json"

export default defineComponent({
  props: {
    src: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    let src = {
      ...merge(APLAYER.src, this.src),
      container: this.$refs.sbplayer,
    };

    this.$nextTick(() => {
      Promise.all([
        import(/* webpackChunkName: "aplayer" */ "aplayer"),
        import(
          /* webpackChunkName: "aplayer" */ "aplayer/dist/APlayer.min.css"
        ),
      ]).then(async ([{ default: aplayer }]) => {
        this.player = new aplayer(src);
      });
    });
  },

  beforeDestroy() {
    if (this.player && !src?.fixed) {
      this.player.destroy();
    }
  },
});
</script>
