---
title: ArtPlayer 弹幕
date: 2022-05-18 17:26:25

redirectFrom:
  - /pages/458868/
---

## 介绍

适合 ArtPlayer 使用的弹幕

## API V1

### ArtPlayer 弹幕

#### API

- `/api/artplayer/v1/{id}.{format?}`
- `/api/artplayer/v1/?id={id}`

#### 示例

- `https://danmu.u2sb.com/api/artplayer/v1/cENuyhsT2rMOCohK`
- `https://danmu.u2sb.com/api/artplayer/v1/cENuyhsT2rMOCohK.json`
- `https://danmu.u2sb.com/api/artplayer/v1/?id=cENuyhsT2rMOCohK`

### 解析 BiliBili 弹幕

#### 解释

- `id` aid 或 bvid，例如 `av810872` 或 `BV18b411j72u`
- `p` 分 P，例如 `1` `2`，省略时默认为 `1`
- `format` 数据格式，`json` 或 `xml`

#### API

- `/api/artplayer/v1/bilibili/{id}/{p:int?}.{format?}`
- `/api/artplayer/v1/bilibili.{format}?bvid={id}&p={p}`

#### 示例

- `https://danmu.u2sb.com/api/artplayer/v1/bilibili/BV18b411j72u`
- `https://danmu.u2sb.com/api/artplayer/v1/bilibili/BV18b411j72u.json`
- `https://danmu.u2sb.com/api/artplayer/v1/bilibili/BV18b411j72u/2.json`
- `https://danmu.u2sb.com/api/artplayer/v1/bilibili/?bvid=BV18b411j72u`

#### 返回

```xml
<i xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <d p="12.544,1,25,16777215,1555668046,0,3600fffd,14955772062990336, 6">来了</d>
  <d p="7.739,1,25,16777215,1555668050,0,5689bb4c,14955774128160768, 8">第一，截图见证</d>
  <d p="30.225,1,25,16777215,1555668063,0,b21ea9d5,14955781264769024, 8">国风真美！！！</d>
  <d p="25.077,1,25,16777215,1555668091,0,260d013c,14955795885588482, 7">好像真的是第一</d>
  <d p="6.46,1,25,16777215,1555668096,0,8e084014,14955798307799044, 7">我好早</d>
  <d p="11.538,1,25,16777215,1555668098,0,e3027d1f,14955799643160580, 10">来了来了！</d>
  <d p="39.019,1,25,16777215,1555668105,0,3600fffd,14955802998079490, 9">那个说第一的，你错了，00:12那个是我，我才是第一</d>
  <d p="40.484,1,25,16777215,1555668200,0,d1f6347d,14955852705824768, 1">真的美爆了！⁽⁽ଘ( ˊᵕˋ )ଓ⁾⁾</d>
</i>
```

```json
{
  "code": 0,
  "data": [
    {
      "text": "来了",
      "time": 12.544,
      "color": "#FFFFFF",
      "size": 25,
      "border": false,
      "mode": 0
    },
    {
      "text": "第一，截图见证",
      "time": 7.739,
      "color": "#FFFFFF",
      "size": 25,
      "border": false,
      "mode": 0
    },
    {
      "text": "国风真美！！！",
      "time": 30.225,
      "color": "#FFFFFF",
      "size": 25,
      "border": false,
      "mode": 0
    }
  ]
}
```

## 示例

::: details 点击查看

<div ref="art"></div>

```html
<div ref="art"></div>
```

```js
<!-- @include: ./assets/js/artplayerDemo.js -->
```

:::tip
一定要把 `danmakuId` 改掉，别 TM 傻逼呵呵的直接用我测试视频的 id 直接就写上去了，自己想办法随便生成一个随机字符串。
:::

<script type="module" src="./assets/js/artplayerDemo.js" ></script>
