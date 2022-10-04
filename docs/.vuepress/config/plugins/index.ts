import type { PluginConfig } from "vuepress";
import copyjs from "./copyjs";
import oldrouter from "./oldlink";

export default <PluginConfig>[[copyjs], [oldrouter]];
