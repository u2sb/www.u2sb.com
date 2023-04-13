---
title: DPlayer 弹幕
date: 2022-05-18 17:26:25

redirectFrom:
  - /pages/1dddaf/
---

## 介绍

适合 DPlayer 使用的弹幕

## API V3

### DPlayer 弹幕

#### API

- `/api/dplayer/`

#### 示例

- `https://danmu.u2sb.com/api/dplayer/`

### 解析 BiliBili 弹幕

#### 解释

- `id` aid 或 bvid，例如 `av810872` 或 `BV18b411j72u`
- `p` 分 P，例如 `1` `2`，省略时默认为 `1`

#### API

- `/api/dplayer/v3/bilibili/{id}/{p:int?}`
- `/api/dplayer/v3/bilibili/danmu/?bvid={id}&p={p}`

#### 示例

- `https://danmu.u2sb.com/api/dplayer/v3/bilibili/BV18b411j72u`
- `https://danmu.u2sb.com/api/dplayer/v3/bilibili/danmu/?bvid=BV18b411j72u`

#### 返回

```json
{
  "code": 0,
  "data": [
    [12.544, 0, 16777215, "3600fffd", "来了"],
    [7.739, 0, 16777215, "5689bb4c", "第一，截图见证"],
    [30.225, 0, 16777215, "b21ea9d5", "国风真美！！！"],
    [25.077, 0, 16777215, "260d013c", "好像真的是第一"]
  ]
}
```

## 示例

::: details 点击查看

<div ref="dp"></div>

```html
<div ref="dp"></div>
```

```js
<!-- @include: ./assets/js/dplayerDemo.js -->
```

:::tip
一定要把 `id` 改掉，别 TM 傻逼呵呵的直接用我测试视频的 id 直接就写上去了，自己想办法随便生成一个随机字符串。
:::

<script type="module" src="./assets/js/dplayerDemo.js" ></script>
