import type { PluginConfig } from "vuepress";
import copyjs from "./copyjs";
import oldrouter from "./oldlink";
import smplayer from "./smplayer";

export default <PluginConfig>[
  copyjs,
  oldrouter,
  smplayer({
    meting: {
      api: "https://sm.sm9.top/api/meting?server=:server&type=:type&id=:id&r=:r",
    },
  }),
];
