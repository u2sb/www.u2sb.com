import type { PluginConfig } from "vuepress";
import copyjs from "./copyjs";
import wxshare from "./wxshare/node";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { redirectPlugin } from "vuepress-plugin-redirect";
import sbaudio from "vuepress-plugin-sbaudio";

export default <PluginConfig>[
  redirectPlugin({
    config: {},
  }),
  searchProPlugin({
    indexContent: true,
  }),
  copyjs,
  wxshare({
    host: "https://www.u2sb.com",
    redirectApi: "https://sbapi.s3.sm9.top/api/wx/share/",
    imgUrl: "https://www.u2sb.com/assets/img/avatar.png",
  }),
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
];
