import type { PluginConfig } from "vuepress";
import copyjs from "./copyjs";
import wxshare from "./wxshare/node";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { redirectPlugin } from "vuepress-plugin-redirect";

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
];
