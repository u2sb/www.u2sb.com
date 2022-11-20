---
title: 原始弹幕
date: 2022-05-18 17:26:25

redirectFrom:
  - /pages/f4931b/
---

## 介绍

解析 B 站原始弹幕

## API V1

### 解释

- `id` aid 或 bvid，例如 `av810872` 或 `BV18b411j72u`
- `p` 分 P，例如 `1` `2`，省略时默认为 `1`
- `format` 数据格式，`json` 或 `xml`

### API

- `/api/bilibili/v1/{id}/{p:int?}`
- `/api/bilibili/v1/?bvid={id}&p={p}`

### 示例

- `https://danmu.u2sb.com/api/bilibili/v1/BV18b411j72u`
- `https://danmu.u2sb.com/api/bilibili/v1/BV18b411j72u.json`
- `https://danmu.u2sb.com/api/bilibili/v1/BV18b411j72u/2.json`
- `https://danmu.u2sb.com/api/bilibili/v1.xml?bvid=BV18b411j72u&p=2`

### 返回

详见 [protobuf 弹幕](https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/danmaku/danmaku_proto.md)

> 待完善
