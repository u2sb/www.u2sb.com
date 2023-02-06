import gulp from "gulp";
import gulpWebCompress from "gulp-web-compress";
import { resolve } from "path";
import { exec } from "gulp-execa";

const { src, dest, series } = gulp;
const inputDir = "./dist";
const outputDir = "./dist";

export const vuepressBuild = async () => {
  await exec(
    "node_modules/.bin/vuepress build docs --clean-cache --clean-temp"
  );
};

const compress = async () =>
  await src([
    resolve(inputDir, "**/*.html"),
    resolve(inputDir, "**/*.js"),
    resolve(inputDir, "**/*.css"),
  ])
    .pipe(
      gulpWebCompress({
        types: ["gz", "br"],
        gzipOptions: {
          level: 9,
        },
        brotliOptions: {
          mode: 0,
          quality: 11,
        },
      })
    )
    .pipe(dest(outputDir));

export const build = series(vuepressBuild, compress);
