import type { PluginConfig } from "vuepress";
import copyjs from "./copyjs.js";
import sbaudio from "vuepress-plugin-sbaudio";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

export default <PluginConfig>[
  copyjs,
  sbaudio({
    metingOptions: {
      api: "https://meting-api.u2sb.com/?server=:server&type=:type&id=:id&r=:r",
      list: [
        {
          type: "playlist",
          id: "3045842790",
        },
      ],
    },
  }),
  googleAnalyticsPlugin({
    id: "G-05XSZZ15L9",
  }),
];
