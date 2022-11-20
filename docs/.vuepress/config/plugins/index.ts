import type { PluginConfig } from "vuepress";
import copyjs from "./copyjs";
import smplayer from "./smplayer";
// import { searchProPlugin } from "vuepress-plugin-search-pro";
import { redirectPlugin } from "vuepress-plugin-redirect";
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";

export default <PluginConfig>[
  redirectPlugin({
    config: {},
  }),
  fullTextSearchPlugin,
  // searchProPlugin({
  //   fullIndex: true,
  // }),
  copyjs,
  smplayer({
    meting: {
      api: "https://sm.sm9.top/api/meting?server=:server&type=:type&id=:id&r=:r",
    },
  }),
];
