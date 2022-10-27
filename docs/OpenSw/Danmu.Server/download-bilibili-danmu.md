---
title: 下载 BiliBili 弹幕
date: 2022-10-27 14:26:25
---

## 下载弹幕

::: vue-playground 下载弹幕

@file App.vue

```vue
<script setup>
import { ref } from "vue";

const bpage = ref("https://www.bilibili.com/");
const danmuformat = ref("xml");

let downloadBtn = () => {
  let url = new URL(bpage.value);
  let a = url.pathname.split("/");
  let bvid = "";
  a.forEach((b) => {
    if (b.startsWith("BV")) {
      bvid = b;
    }
  });
  let p = url.searchParams.get("p") ?? 1;
  window.open(
    `https://danmu.u2sb.com/api/bilibili/v1.${danmuformat.value}?bvid=${bvid}&p=${p}`
  );
};
</script>

<template>
  <div><a>使用方法：填写信息，点击预览，右键另存</a></div>

  <div>视频地址 <input v-model="bpage" :placeholder="bpage" /></div>

  <div>
    <div>
      弹幕格式
      <input type="radio" id="json" value="json" v-model="danmuformat" />
      <label for="json">json</label>

      <input type="radio" id="xml" value="xml" v-model="danmuformat" />
      <label for="xml">xml</label>
    </div>
  </div>
  <button type="button" @click="downloadBtn">预览弹幕</button>
</template>
```

:::
