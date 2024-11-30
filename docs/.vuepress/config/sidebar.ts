import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/OpenSw/": [
    {
      text: "开源软件",
      icon: "c",
      prefix: "",
      link: "/OpenSw/",
      children: [
        {
          text: "公共服务",
          link: "/OpenSw/Overview/public-service",
        },
        {
          text: "弹幕服务器",
          link: "/OpenSw/Danmu.Server/",
        },
        {
          text: "BiliBili 弹幕解析",
          link: "/OpenSw/Danmu.Bili/",
        },
        {
          text: "vuepress-plugin-sbaudio",
          link: "/OpenSw/vuepress-plugin-sbaudio/",
        },
        {
          text: "vuepress-plugin-smplayer",
          link: "/OpenSw/vuepress-plugin-smplayer/",
        },
        {
          text: "MetingJS.Server",
          link: "/OpenSw/MetingJS.Server/",
        },
        {
          text: "hexo-tag-mmedia",
          link: "/OpenSw/hexo-tag-mmedia/",
        },
      ],
    },
  ],
  "/OpenSw/Danmu.Server/": [
    {
      text: "开源软件",
      icon: "c",
      prefix: "",
      link: "/OpenSw/",
      children: [
        {
          text: "弹幕服务器",
          prefix: "",
          link: "/OpenSw/Danmu.Server/",
          children: [
            "install",
            "install-on-baota",
            "artplayer-danmu",
            "dplayer-danmu"
          ],
        },
      ],
    },
  ],
  "/OpenSw/vuepress-plugin-sbaudio/": [
    {
      text: "开源软件",
      icon: "c",
      prefix: "",
      link: "/OpenSw/",
      children: [
        {
          text: "vuepress-plugin-sbaudio",
          link: "/OpenSw/vuepress-plugin-sbaudio/",
          prefix: "",
          children: ["install", "aplayer", "meting", "aplayerGlobal"],
        },
      ],
    },
  ],
  "/OpenSw/vuepress-plugin-smplayer/": [
    {
      text: "开源软件",
      icon: "c",
      prefix: "",
      link: "/OpenSw/",
      children: [
        {
          text: "vuepress-plugin-smplayer",
          link: "/OpenSw/vuepress-plugin-smplayer/",
          prefix: "",
          children: [
            "install",
            "meting",
            "aplayer",
            "bilibili",
            "xigua",
            "artplayer",
            "dplayer",
            "faq",
          ],
        },
      ],
    },
  ],
  "/OpenSw/hexo-tag-mmedia/": [
    {
      text: "开源软件",
      icon: "c",
      prefix: "",
      link: "/OpenSw/",
      children: [
        {
          text: "hexo-tag-mmedia",
          prefix: "",
          link: "/OpenSw/hexo-tag-mmedia/",
          children: [
            "install",
            "audio",
            "video",
            "meting",
            "aplayer",
            "dplayer",
            "artplayer",
            "bilibili",
            "xigua",
            "developer-doc",
            "version0",
          ],
        },
      ],
    },
  ],
  "/OpenSw/Danmu.Bili/": [
    {
      text: "开源软件",
      icon: "c",
      prefix: "",
      link: "/OpenSw/",
      children: [
        {
          text: "BiliBili弹幕解析",
          prefix: "",
          link: "/OpenSw/Danmu.Bili/",
          children: ["install", "protobuf", "json", "xml"],
        },
      ],
    },
  ],
  "/OpenHw/": [
    {
      text: "开源硬件",
      icon: "microchip",
      prefix: "",
      link: "/OpenHw/",
      children: [
        {
          text: "OBS导播键盘",
          prefix: "ObsKeyboard/",
          children: ["SB00"],
        },
        {
          text: "相机电池",
          prefix: "CameraBattery",
          children: ["DMW-BLK22"],
        },
      ],
    },
  ],
});
