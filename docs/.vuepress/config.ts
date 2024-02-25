import { defineUserConfig } from "vuepress";
import theme from "./config/theme";
import plugins from "./config/plugins";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  base: "/",
  title: "帅比网",
  dest: "dist",
  lang: "zh-CN",
  theme,
  shouldPrefetch: false,
  shouldPreload: false,
  plugins,
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
