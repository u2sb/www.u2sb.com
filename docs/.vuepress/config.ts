import { defineUserConfig } from "vuepress";
import theme from "./config/theme.js";
import plugins from "./config/plugins/index.js";
import { viteBundler } from "@vuepress/bundler-vite";
import markdown from "./config/markdown.js";

export default defineUserConfig({
  base: "/",
  title: "帅比网",
  dest: "dist",
  lang: "zh-CN",
  theme,
  shouldPrefetch: false,
  shouldPreload: false,
  plugins,
  markdown,
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
