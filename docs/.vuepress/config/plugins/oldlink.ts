import { App } from "vuepress";
import { path } from "@vuepress/utils";
import fs from "fs-extra";

function htmlT(path: string): string {
  return (
    `<!DOCTYPE html><html><head><meta charset="utf-8">` +
    `<link rel="canonical" href="${path}">` +
    `<meta http-equiv="refresh" content="0; url='${path}'">` +
    "</head>" +
    `<body><script>window.location.replace("${path}")</script></body>` +
    "</html>"
  );
}

export default {
  name: "vuepress-plugin-oldlink",
  onGenerated: (app: App) => {
    app.pages.forEach((e) => {
      if (e.frontmatter["oldlink"]) {
        let b = e.frontmatter.oldlink as Array<string>;
        b.forEach((f) => {
          let p = f.endsWith(".html")
            ? path.join(app.dir.dest(), f)
            : path.join(app.dir.dest(), f, "index.html");

          if (!fs.existsSync(p)) {
            fs.createFileSync(p);
            fs.writeFileSync(p, htmlT(e.path));
          }
        });
      }
    });
  },
};
