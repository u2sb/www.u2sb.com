import { getDirname, path } from "@vuepress/utils";
import type { App, PluginObject } from "@vuepress/core";
import { deepmerge } from "deepmerge-ts";

const __dirname = getDirname(import.meta.url);

interface MetingOptions {
  id?: string;
  auth?: string;
  auto?: string;
  api?: string;
  server?: string;
  type?: string;
  fixed?: boolean;
  mini?: boolean;
  autoplay?: boolean;
  theme?: string;
  loop?: string;
  order?: string;
  preload?: string;
  volume?: number;
  mutex?: boolean;
  lrcType?: number;
  listFolded?: boolean;
  listMaxHeight?: string;
  storageName?: string;
  audio?: Array<Object>;
  list?: Array<MetingOptions>;
}

export interface SmplayerPluginsOptions {
  bilibili?: {
    page?: number;
    danmaku?: boolean;
    t?: number;
    allowfullscreen?: boolean;
    sandbox?: string;
    width?: string;
    height?: [number, number];
  };
  xigua?: {
    autoplay?: boolean;
    startTime?: number;
    allowfullscreen?: boolean;
    sandbox?: string;
    width?: string;
    height?: [number, number];
  };
  aplayer?: {
    src?: Object;
  };
  meting?: MetingOptions;
}

const OptionDefault: SmplayerPluginsOptions = {
  bilibili: {
    page: 1,
    danmaku: !0,
    t: 0,
    allowfullscreen: true,
    sandbox:
      "allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups",
    width: "100%",
    height: [9 / 16, 70],
  },
  xigua: {
    autoplay: !1,
    startTime: 0,
    allowfullscreen: true,
    sandbox:
      "allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups",
    width: "100%",
    height: [9 / 16, 0],
  },
  aplayer: {
    src: {
      lrcType: 3,
    },
  },
  meting: {
    api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
    server: "tencent",
    type: "song",
    fixed: false,
    mini: false,
    autoplay: false,
    theme: "#2980b9",
    loop: "all",
    order: "list",
    preload: "auto",
    volume: 0.7,
    mutex: true,
    lrcType: 3,
    listFolded: false,
    listMaxHeight: "340px",
    storageName: "vuepress-plugin-smplayer",
  },
};

const SmplayerPlugin = (options: SmplayerPluginsOptions = {}): PluginObject => {
  options = deepmerge(OptionDefault, options);
  return {
    name: "vuepress-plugin-smplayer",
    async onPrepared(app: App) {
      await app.writeTemp("SmplayerOptions.json", JSON.stringify(options));
    },
    clientConfigFile: path.resolve(__dirname, "client.ts"),
  };
};

export default SmplayerPlugin;
