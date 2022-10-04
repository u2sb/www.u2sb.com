import { App } from "vuepress";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default {
  name: "vuepress-plugin-oldlink",
  onPrepared: (app: App) => {
    let a = {};
    app.pages.forEach((e) => {
      if (e.frontmatter?.oldlink) {
        let b = e.frontmatter.oldlink as Array<string>;
        b.forEach((f) => {
          if (a[f] != (undefined || null || "")) a[f] = e.path;
        });
      }
    });
    app.writeTemp("oldlink.json", JSON.stringify(a));
  },

  clientConfigFile: path.resolve(__dirname, "./client.ts"),
};
