import { defineUserConfig, viteBundler } from "vuepress";
import viteCompression from "vite-plugin-compression";
import theme from "./config/theme";
import plugins from "./config/plugins";

export default defineUserConfig({
  base: "/",
  title: "帅比",
  dest: "dist",
  theme,
  shouldPrefetch: false,
  shouldPreload: false,
  plugins,
  bundler: viteBundler({
    viteOptions: {
      plugins: [
        viteCompression({
          algorithm: "brotliCompress",
          deleteOriginFile: false,
        }),
      ],
    },
  }),
});
