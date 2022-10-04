import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "开源软件",
    icon: "software",
    prefix: "/OpenSw/",
    children: [
      {
        text:"开源软件",
        link:""
      },
      {
        text: "弹幕服务器",
        link: "#Danmu.Server",
      },
      {
        text: "MetingJS.Server",
        link: "#MetingJsServer",
      },
      {
        text: "vuepress-plugin-smplayer",
        link: "#vuepress-plugin-smplayer",
      },
      {
        text: "vuepress-plugin-vssue-global",
        link: "https://github.com/u2sb/vuepress-plugin-vssue-global",
      },
      {
        text: "hexo-tag-mmedia",
        link: "#hexo-tag-mmedia",
      },
      {
        text: "通用弹幕服务器",
        link: "#Danmu.Server",
      },
    ],
  },
  {
    text: "开源硬件",
    icon: "IO",
    prefix: "/OpenHw/",
    children: [
      {
        text:"开源硬件",
        link:""
      },
      {
        text: "OBS导播键盘",
        link: "#OBS导播键盘",
      },
    ],
  },
]);
