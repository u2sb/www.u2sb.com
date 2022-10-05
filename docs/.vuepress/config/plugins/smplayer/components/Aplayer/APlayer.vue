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

  data() {
    return {
      player: null,
    }
  },

  mounted() {
    let src = {
      ...merge(APLAYER.src, this.src),
      container: this.$refs.sbplayer,
    };

    this.$nextTick(() => {
      Promise.all([
        import("aplayer"),
        import("aplayer/dist/APlayer.min.css"),
      ]).then(([{ default: aplayer }]) => {
        this.player = new aplayer(src);
      });
    });
  },

  beforeUnmount() {
    if (this.player) {
      this.player.destroy();
    }
  },
});
</script>
