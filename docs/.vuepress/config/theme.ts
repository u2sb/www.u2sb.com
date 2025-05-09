import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import markdown from "./markdown.js";

export default hopeTheme({
  hostname: "https://www.u2sb.com",
  pure: true,
  focus: false,
  author: {
    name: "MonoLogueChi",
    url: "https://blog.u2sb.com",
  },

  logo: "/assets/img/logo.avif",

  repo: "u2sb/www.u2sb.com",

  docsDir: "docs",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  // navbar
  navbar,

  // sidebar
  sidebar,

  // footer: "<a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' rel='external nofollow' target='_blank'>CC BY-NC-SA 4.0</a>",

  displayFooter: true,

  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },
  markdown,

  plugins: {
    icon: {
      assets: "iconify",
    },
    slimsearch: {
      indexContent: true,
    },

    catalog: {},

    feed: {
      atom: true,
      json: true,
      rss: true,
      getter: {
        content: (page) => page.data.excerpt as string,
      },
    },

    // Disable features you don't want here
    components: {
      components: [
        "ArtPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "SiteInfo",
        "VidStack",
        "VPCard"
      ],
    },
    redirect: {},
  },
});
