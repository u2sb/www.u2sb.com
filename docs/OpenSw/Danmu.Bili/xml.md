---
title: xml 弹幕
---

:::tip
推荐使用 [protobuf 格式](protobuf.md)
:::

## 介绍

使用 xml 格式传输弹幕。

## 接口

- `https://danmu-bili.s2.u2sb.com/api/bilibili/danmu/bvid/p?.xml`

- p 为 1 时可省略

示例

- `https://danmu-bili.s2.u2sb.com/api/bilibili/danmu/BV1zt411t79A.xml`
- `https://danmu-bili.s2.u2sb.com/api/bilibili/danmu/BV1zt411t79A/1.xml`

## 格式

弹幕格式与 B 站完全相同，但是会合并同一视频中的分段弹幕，在后端转换为 xml 格式使用起来会比较简单，而且 B 站旧版弹幕相比，弹幕池容量更高

详见 [xml 弹幕](https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/danmaku/danmaku_xml.md)

## 在 ArtPlayer 中使用

<div ref="art0" />

<script type="module" src="./assets/js/art-xml.js" ></script>
