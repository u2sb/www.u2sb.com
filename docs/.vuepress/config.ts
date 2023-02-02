import { defineUserConfig, viteBundler } from "vuepress";
import { compression } from "vite-plugin-compression2";
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
        compression({
          exclude: [/\.(br)$/, /\.(gz)$/],
          algorithm: "brotliCompress",
        }),
      ],
    },
  }),
});
