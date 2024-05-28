import { ShikiPluginOptions } from "@vuepress/plugin-shiki";
import caddyfile from "./languages/caddyfile.tmLanguage.json" assert { type: "json" };
import { langs } from "./langs.js";

const caddyfileLanguage = {
  id: "Caddyfile",
  aliases: ["caddyfile", "caddy"],
  ...caddyfile,
};

export default <ShikiPluginOptions>{
  // 你的选项
  themes: {
    light: "vitesse-light",
    dark: "vitesse-dark",
  },
  // @ts-ignore
  langs: [caddyfileLanguage, ...langs],
};
