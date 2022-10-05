---
title: FAQ
date: 2022-02-24 14:22:19
oldlink:
  - /pages/7f380f/
---

## 常见问题

### SMPlayer 是什么意思？

全称 sb media player

### 这是一个什么样的项目？

或者是问，为什么会有这个项目。

这个项目最早可以追溯到 2018 年的时候，当时做 [EasyHexo](https://easyhexo.com/)，研究怎么在 Vuepress 中插入视频，[
Mitscherlich](https://github.com/Mitscherlich) 写了 [dplayer.vue](https://github.com/EasyHexo/Easy-Hexo/blob/d3b5f8bec285a8a83effe2d47a98a710c1cbad11/docs/.vuepress/components/dplayer.vue) 组件，这便是这个项目最早的雏形，时至今日，仍保留一部分原始代码。

在后续完善组件功能的同时，我在想能不能做成插件，开放给大家使用。

后来我的博客全面迁移到 vuepress，在放弃 [hexo-tag-mmedia](https://github.com/u2sb/hexo-tag-mmedia) 的同时，开发了这款插件。

### 这么简单一个东西为什么还要写个插件，我直接写代码不香吗？

还真有杠精问我这个问题，我只想反问一句，插件存在的意义是什么？那照你这么说，是不是所有的高级语言都没有存在的意义，你只用汇编？还是你直接写指令？

### 为什么文档中有些文档并不是很详细？

因为这个插件比较灵活，不想用条条框框限制用户，具体看[源码](https://github.com/u2sb/vuepress-plugin-smplayer)去吧。

### 为什么 js 文件是动态引入的？

具体原因可见 [Browser API Access Restrictions](https://v1.vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions)。

因为 vuepress 是服务端渲染，而部分 js 使用了浏览器 API(如 window 等)，动态引入可以确保在在 `mounted` 后再加载 js。

### Vuepress 2.x

等 vuepress 2.0 发布正式版以后，这个插件再发布正式的 2.x 版本。

## 后续的开发计划

前面也说过了，这个项目主要是自用，不出意外的话后续应该不会扩充新的播放器了，除非是有特点，能让我眼前一亮的播放器。

后续的维护主要集中在功能拓展和 BUG 修复这两方面。
