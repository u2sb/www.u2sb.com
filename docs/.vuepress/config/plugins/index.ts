import type { PluginConfig } from "vuepress";
import copyjs from "./copyjs";
import oldrouter from "./oldlink";
import smplayer from "./smplayer";
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";

export default <PluginConfig>[
  fullTextSearchPlugin,
  copyjs,
  oldrouter,
  smplayer({
    meting: {
      api: "https://meting.u2sb.com/api/music?server=:server&type=:type&id=:id&r=:r",
    },
  }),
];
