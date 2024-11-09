import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "开源软件",
    icon: "c",
    prefix: "/OpenSw/",
    children: [
      {
        text: "开源软件",
        link: "",
      },
      {
        text: "弹幕服务器",
        link: "Danmu.Server/",
      },
      {
        text: "MetingJS.Server",
        link: "MetingJS.Server/",
      },
      {
        text: "vuepress-plugin-smplayer",
        link: "vuepress-plugin-smplayer/",
      },
      {
        text: "vuepress-plugin-sbaudio",
        link: "vuepress-plugin-sbaudio/",
      },
      {
        text: "vuepress-plugin-vssue-global",
        link: "https://github.com/u2sb/vuepress-plugin-vssue-global",
      },
      {
        text: "hexo-tag-mmedia",
        link: "hexo-tag-mmedia/",
      },
      {
        text: "B站弹幕解析",
        link: "Danmu.Bili/",
      },
    ],
  },
  {
    text: "开源硬件",
    icon: "microchip",
    prefix: "/OpenHw/",
    children: [
      {
        text: "开源硬件",
        link: "",
      },
      {
        text: "OBS导播键盘",
        link: "ObsKeyboard/",
      },
      {
        text: "相机电池",
        link: "CameraBattery/",
      },
    ],
  },
]);
