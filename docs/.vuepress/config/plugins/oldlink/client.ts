import { defineClientConfig } from "@vuepress/client";
import oldlink from "@temp/oldlink.json";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    for (const key in oldlink) {
      router.addRoute({
        path: key,
        redirect: oldlink[key],
      });
    }
  },
});
