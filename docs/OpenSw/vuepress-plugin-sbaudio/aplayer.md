---
title: APlayer
---

## 介绍

在页面插入 APlayer 播放器。

## 使用

<APlayer :audio="audio" />

```html
<APlayer :audio="audio" />

<script setup>
  const audio = {
    title: "年轻人要热爱祖国",
    artist: "音阙诗听/赵方婧",
    url: "/assets/audio/年轻人要热爱祖国.mp3",
    lrc: "/assets/audio/年轻人要热爱祖国.lrc",
    cover:
      "https://sm.sm9.top/api/music?server=Tencent&type=pic&id=001gv6xI4BNGiP",
  };
</script>
```

## 参数

### Props

| 名称            | 默认值                    | 描述                                                                   |
| --------------- | ------------------------- | ---------------------------------------------------------------------- |
| mini            | false                     | 开启迷你模式, [详情](https://aplayer.js.org/#/home?id=mini-mode)       |
| autoplay        | false                     | 音频自动播放                                                           |
| theme           | '#b7daff'                 | 主题色                                                                 |
| loop            | 'all'                     | 音频循环播放, 可选值: 'all', 'one', 'none'                             |
| order           | 'list'                    | 音频循环顺序, 可选值: 'list', 'random'                                 |
| preload         | 'auto'                    | 预加载，可选值: 'none', 'metadata', 'auto'                             |
| volume          | 0.7                       | 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效 |
| audio           | -                         | 音频信息, 应该是一个对象或对象数组                                     |
| customAudioType | -                         | 自定义类型，[详情](https://aplayer.js.org/#/home?id=mse-support)       |
| mutex           | true                      | 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器           |
| lrcType         | 0                         | [详情](https://aplayer.js.org/#/home?id=lrc)                           |
| listFolded      | false                     | 列表默认折叠                                                           |
| listMaxHeight   | -                         | 列表最大高度                                                           |
| storageName     | 'vuepress-plugin-sbaudio' | 存储播放器设置的 localStorage key                                      |

### Audio

| 名称   | 默认值 | 描述                                                                                                   |
| ------ | ------ | ------------------------------------------------------------------------------------------------------ |
| name   | -      | 音频名称                                                                                               |
| artist | -      | 音频艺术家                                                                                             |
| url    | -      | 音频链接                                                                                               |
| cover  | -      | 音频封面                                                                                               |
| lrc    | -      | [详情](https://aplayer.js.org/#/home?id=lrc)                                                           |
| theme  | -      | 切换到此音频时的主题色，比上面的 theme 优先级高                                                        |
| type   | 'auto' | 可选值: 'auto', 'hls', 'normal' 或其他自定义类型, [详情](https://aplayer.js.org/#/home?id=mse-support) |

<script setup>
  const audio = {
    title: "年轻人要热爱祖国",
    artist: "音阙诗听/赵方婧",
    url: "/assets/audio/年轻人要热爱祖国.mp3",
    lrc: "/assets/audio/年轻人要热爱祖国.lrc",
    cover:
      "https://sm.sm9.top/api/music?server=Tencent&type=pic&id=001gv6xI4BNGiP",
  };
</script>
