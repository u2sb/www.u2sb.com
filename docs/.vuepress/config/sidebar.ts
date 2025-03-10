import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/OpenSw/": [
    {
      text: "开源软件",
      icon: "mdi:language-csharp",
      prefix: "",
      link: "/OpenSw/",
      children: [
        {
          text: "公共服务",
          link: "/OpenSw/Overview/public-service",
        },
        {
          text: "Unity 沙比模板",
          link: "/OpenSw/UnitySbTemplate/",
        },
        {
          text: "沙比 Modbus",
          link: "/OpenSw/SbModbus/",
        },
        {
          text: "弹幕服务器",
          link: "/OpenSw/Danmu.Server/",
        },
        {
          text: "vuepress-plugin-sbaudio",
          link: "/OpenSw/vuepress-plugin-sbaudio/",
        },
        {
          text: "hexo-tag-mmedia",
          link: "/OpenSw/hexo-tag-mmedia/",
        },
      ],
    },
  ],
  "/OpenSw/UnitySbTemplate/": [
    {
      text: "开源软件",
      icon: "mdi:language-csharp",
      prefix: "",
      link: "/OpenSw/",
      children: [
        {
          text: "Unity 沙比模板",
          prefix: "",
          link: "/OpenSw/UnitySbTemplate/",
          children: "structure",
        },
      ],
    },
  ],
  "/OpenSw/SbModbus/": [
    {
      text: "开源软件",
      icon: "mdi:language-csharp",
      prefix: "",
      link: "/OpenSw/",
      children: [
        {
          text: "沙比 Modbus",
          prefix: "",
          link: "/OpenSw/SbModbus/",
          children: "structure",
        },
      ],
    },
  ],
  "/OpenSw/Danmu.Server/": [
    {
      text: "开源软件",
      icon: "mdi:language-csharp",
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
            "dplayer-danmu",
          ],
        },
      ],
    },
  ],
  "/OpenSw/vuepress-plugin-sbaudio/": [
    {
      text: "开源软件",
      icon: "mdi:language-csharp",
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
  "/OpenSw/hexo-tag-mmedia/": [
    {
      text: "开源软件",
      icon: "mdi:language-csharp",
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
  "/OpenHw/": [
    {
      text: "开源硬件",
      icon: "mdi:chip",
      prefix: "",
      link: "/OpenHw/",
      children: [
        {
          text: "OBS导播键盘",
          prefix: "ObsKeyboard/",
          children: ["SB00/README.md"],
        },
        {
          text: "相机电池",
          prefix: "CameraBattery",
          children: ["DMW-BLK22/README.md"],
        },
      ],
    },
  ],
});
