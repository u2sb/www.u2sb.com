import { defineClientConfig } from "@vuepress/client";

// @ts-ignore
import wxshare from "./wxshare.vue";

export default defineClientConfig({
  rootComponents: [wxshare],
});
