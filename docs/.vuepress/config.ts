import { defineUserConfig } from "vuepress";
import theme from "./config/theme";
import plugins from "./config/plugins";

export default defineUserConfig({
  base: "/",
  title: "帅比",
  dest: "dist",
  lang:"zh-CN",
  theme,
  shouldPrefetch: false,
  shouldPreload: false,
  plugins,
});
