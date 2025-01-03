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
        text: "Unity 煞笔模板",
        link: "UnitySbTemplate/",
      },
      {
        text: "弹幕服务器",
        link: "Danmu.Server/",
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
