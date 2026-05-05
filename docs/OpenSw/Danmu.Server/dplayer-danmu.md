---
title: DPlayer 弹幕
date: 2022-05-18 17:26:25

redirectFrom:
  - /pages/1dddaf/
---

## 介绍

适合 DPlayer 使用的弹幕

## 示例

::: details 点击查看

<div ref="dp"></div>

```html
<div ref="dp"></div>
```

```js
<script setup>
import { ref, nextTick, onBeforeUnmount } from 'vue'

const dp = ref(null)
let player = null

const initPlayer = async () => {
  await nextTick()
  if (!dp.value) return
  
  const { default: DPlayer } = await import('dplayer')
  player = new DPlayer({
    container: dp.value,
    video: {
      url: 'https://danmu.u2sb.com/assets/video/1214946209-1-192.mp4',
    },
    danmaku: {
      api: 'https://danmu.u2sb.com/api/dp/bilibili/',
      id: 'cENuyhsT2rMOCohK',
      addition: [
        'https://danmu.u2sb.com/api/dp/bilibili/v3/BV1JP41167xK.json',
      ],
    },
  })
}

initPlayer()

onBeforeUnmount(() => {
  if (player) player.destroy()
})
</script>
```

:::tip
一定要把 `id` 改掉，别 TM 傻逼呵呵的直接用我测试视频的 id 直接就写上去了，自己想办法随便生成一个随机字符串。
:::

<script setup>
import { ref, nextTick, onBeforeUnmount } from 'vue'

const dp = ref(null)
let player = null

const initPlayer = async () => {
  await nextTick()
  if (!dp.value) return
  
  const { default: DPlayer } = await import('dplayer')
  player = new DPlayer({
    container: dp.value,
    video: {
      url: 'https://danmu.u2sb.com/assets/video/1214946209-1-192.mp4',
    },
    danmaku: {
      api: 'https://danmu.u2sb.com/api/dp/bilibili/',
      id: 'cENuyhsT2rMOCohK',
      addition: [
        'https://danmu.u2sb.com/api/dp/bilibili/v3/BV1JP41167xK.json',
      ],
    },
  })
}

initPlayer()

onBeforeUnmount(() => {
  if (player) player.destroy()
})
</script>