import { defineClientConfig } from "@vuepress/client";

// @ts-ignore：
import Bilibili from "./components/Bilibili/Bilibili.vue";
// @ts-ignore：
import Xigua from "./components/Xigua/Xigua.vue";
// @ts-ignore：
import APlayer from "./components/Aplayer/APlayer.vue";
// @ts-ignore：
import Meting from "./components/Meting/Meting.vue";

export default defineClientConfig({
  async enhance({ app }) {
    app.component("Bilibili", Bilibili);
    app.component("Xigua", Xigua);
    app.component("APlayer", APlayer);
    app.component("Meting", Meting);
    app.component("MetingJs", Meting);
  },
});
