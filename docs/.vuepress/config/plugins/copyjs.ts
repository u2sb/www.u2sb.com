import { path } from "@vuepress/utils";
import { watch } from "chokidar";
import fs from "fs-extra";
import { App } from "vuepress";

export default {
  name: "vuepress-plugin-copyjs",
  onWatched: (app: App, watchers) => {
    const jsWatcher = watch(path.join(app.dir.source(), "/**/*.js"), {
      ignored: /(^|[\/\\])\../,
    });

    jsWatcher.on("add", (sourceFilePath) => {
      let tempFilePath = path.join(
        app.dir.temp(),
        "pages",
        path.relative(app.dir.source(), sourceFilePath)
      );
      fs.copy(sourceFilePath, tempFilePath, { overwrite: true });
    });

    jsWatcher.on("change", (sourceFilePath) => {
      let tempFilePath = path.join(
        app.dir.temp(),
        "pages",
        path.relative(app.dir.source(), sourceFilePath)
      );
      fs.copy(sourceFilePath, tempFilePath, { overwrite: true });
    });

    watchers.push(jsWatcher);
  },
};
