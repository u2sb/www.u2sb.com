import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://www.u2sb.com",
  pure: true,
  author: {
    name: "MonoLogueChi",
    url: "https://blog.xxwhite.com",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/assets/img/logo.png",

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

  plugins: {
    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    // comment: {
    //   /**
    //    * Using Giscus
    //    */
    //   provider: "Giscus",
    //   repo: "u2sb/www.u2sb.com",
    //   repoId: "R_kgDOIIUHaA",
    //   category: "Giscus",
    //   categoryId: "DIC_kwDOIIUHaM4CRzf3",
    // },

    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-wu.u2sb.com",
    //   login: "force",
    //   pageSize: 15,
    //   reaction: true,
    // },

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
        "FontIcon",
        "SiteInfo",
        "VidStack",
        "VPCard",
        "XiGua",
      ],
    },
    redirect: {},
  },
});
