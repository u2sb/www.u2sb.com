---
title: 安装和基本介绍
date: 2021-02-23 14:17:12
redirectFrom:
  - /pages/748f02/
---

## 简介

[hexo-tag-mmedia](https://github.com/u2sb/hexo-tag-mmedia) 是一个能在 Hexo 中快速插入媒体标签的插件，目前支持的标签和平台有（持续开发中）：

- [x] Audio
- [x] Video
- [x] [Aplayer](https://github.com/DIYgod/APlayer)
- [x] [MetingJS](https://github.com/metowolf/MetingJS)
- [x] [Dplayer](https://github.com/DIYgod/DPlayer)
- [x] [哔哩哔哩](https://www.bilibili.com/)
- [x] [西瓜视频](https://www.ixigua.com/)
- [ ] [YouTube]()
- [x] [ArtPlayer](https://github.com/zhw2590582/ArtPlayer)

## DEMO

[http://demo.hexo-tag-mmedia.u2sb.com/](http://demo.hexo-tag-mmedia.u2sb.com/)

## 使用

hexo-tag-mmedia 插件和其他 hexo 插件使用方法类似，诸如 如何启用一个插件 之类的共性问题就不再赘述了，只说 hexo-tag-mmedia 相关的。

### 安装

::: tabs

@tab:active NPM

```bash
 npm install hexo-tag-mmedia@1 --save
```

@tab PNPM

```bash
pnpm add hexo-tag-mmedia@1 --save
```

@tab YARN

```bash
yarn add hexo-tag-mmedia@1 --save
```

:::

### 配置

如需修改配置，请务必不要保留空选项，空选项会覆盖默认配置，严重可能直接导致插件无法使用。

单项使用的文档中会详细讲解对应的使用文档，请自行阅读后再做配置。

::: warning
下面只是示例，请勿全盘复制，请看清后面的讲解后组织自己的配置文件。
:::

::: details

持续更新中，详情见详细文档和 [源码](https://github.com/u2sb/hexo-tag-mmedia/blob/1.x/src/config/config_default.yml)

```yaml
mmedia:
  audio:
    default:
  video:
    default:
  aplayer:
    js: https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.js
    css: https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.css
    default:
      contents:
  meting:
    js: https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js
    api:
    default:
  dplayer:
    js: https://cdn.jsdelivr.net/npm/dplayer@1/dist/DPlayer.min.js
    hls_js: https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js
    dash_js: https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js
    shaka_dash_js: https://cdn.jsdelivr.net/npm/shaka-player/dist/shaka-player.compiled.js
    flv_js: https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js
    webtorrent_js: https://cdn.jsdelivr.net/npm/webtorrent/webtorrent.min.js
    default:
      contents:
  bilibili:
    default:
      page: 1
      danmaku: true
      allowfullscreen: allowfullscreen
      sandbox: allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups
      width: 100%
      max_width: 850px
      margin: auto
  xigua:
    default:
      autoplay: false
      startTime: 0
      allowfullscreen: allowfullscreen
      sandbox: allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups
      width: 100%
      max_width: 850px
      margin: auto
```

:::

#### 解释

- 配置项较多目的是给予最大的自定义权限，默认情况下不做配置也可以使用。
- 配置文件放在博客根目录的 `_config.yml` 中
- default 为默认配置，在 `_config.yml` 中填写就不需要在每个标签全部写入了，所有允许在 mmedia 标签上写入的配置项，均可在 default 下配置。
- default 下 contents 项，用于设置 JSON 类型的默认配置，注意要使用 yaml 格式写默认配置，以下是几个示例。

#### 示例

如无法读懂下面的示例，请阅读后面的文档后再回来看。

::: details

修改 Aplayer 的 js 文件：

```yaml
mmedia:
  aplayer:
    js: https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js
    css: https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css
```

将 Aplayer 的 JS 和 CSS 放入博客目录：

首先请下载 `APlayer.min.js` 和 `APlayer.min.js` 文件，放入博客下 `source/assets/js/` 和 `source/assets/css/` 下（路径只是示例）

```yaml
mmedia:
  aplayer:
    js: /assets/js/APlayer.min.js
    css: /assets/css/APlayer.min.css
```

Meting 修改循环方式为随机循环：

```yaml
mmedia:
  meting:
    default:
      loop: all
      order: random
```

Dplayer 修改弹幕 API：

```yaml
mmedia:
  dplayer:
    default:
      contents:
        danmaku:
          api: https://api.prprpr.me/dplayer/v3/
```

:::

### 使用

下面只是快速示例，请阅读后面的文档后再回来看。示例只是为了展示配置方式瞎写的，一些配置不一定正确，不要照抄。

::: details

```twig
{% mmedia "audio" "src:a.mp3" %}
```

```twig
{% mmedia "aplayer" "name:songName" "url:a.mp3" %}
```

```twig
{% mmedia "meting" "auto=https://y.qq.com/n/yqq/song/001RGrEX3ija5X.html" %}
```

```twig
{% mmedia "bilibili" "bvid:BV1hb4y1R7xf" %}
```

```twig
{% mmedia "xigua" "xid=6925997698269053453" %}
```

```twig
{% mmedias "dplayer" "flv:" "url:https://dandoc.u2sb.com/video/%E5%AE%89%E8%A3%85/1-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E8%A3%85.mp4" %}
{
  "contextmenu":
  [
    {
      text: "custom1",
      link: "https://github.com/DIYgod/DPlayer"
    }
  ]
}
{% endmmedias %}

```

```twig
{% mmedias "aplayer" "autoplay:false" %}
{
  "volume": 0.8,
  "audio":
  [
    {
      "name": "name1",
      "artist": "artist1",
      "url": "url1.mp3",
      "cover": "cover1.jpg",
      "lrc": "lrc1.lrc",
      "theme": "#ebd0c2"
    },
    {
      "name": "name2",
      "artist": "artist2",
      "url": "url2.mp3",
      "cover": "cover2.jpg",
      "lrc": "lrc2.lrc",
      "theme": "#46718b"
    }
  ]
}
{% endmmedias %}
```

:::

## 使用原则

::: tip
必看
:::

### 规则

#### 标签

markdown 内可以使用两种标签作为插件，分别是 `mmedia` 和 `mmedias`，使用方式为：

```twig
{% mmedia %}
```

```twig
{% mmedias %}
{% endmmedias %}
```

只使用 `args` 作为传参方式时，两种标签均可使用，当需要使用 `contents` 传参时，只能使用 `mmedias`。

后面第一个参数用于标记标签，可选（以详细文档为主，持续更新中）：

`audio` `video` `meting` `aplayer` `dplayer` `bilibili` `xigua`

再后面的参数将直接作为 `args` 参数直接传入插件。

#### 参数

传入标签的参数可以写入到三个位置，分别为：`_config.yml`，`args`，`contents`，其中只有部分插件可使用 `contents` 配置，具体看详细文档，如有冲突项，覆盖规则为（后面的会被前面发覆盖）：

`contents` -> `args` -> `_config.yml` -> `插件默认`

写入到 `args` 上的参数，有两种写法，分别是使用 `:` 和 `=` 分割，两种写法是等效的，在遇到第一个 `:` 或 `=` 时会自动分割，例如：

```twig
{% mmedia "bilibili" "bvid:BV1hb4y1R7xf" %}

{% mmedia "bilibili" "bvid=BV1hb4y1R7xf" %}
```

两种写法是等效的。

如果遇到布尔类型的参数，可以简写

```twig
{% mmedia "audio" "src:a.mp3" "autoplay:" %}
```

```twig
{% mmedia "audio" "src:a.mp3" "autoplay:true" %}
```

两种写法等效，但需要注意，`:` 或 `=` 一定不能省略。

#### JSON 传参

支持 JSON 方式传参，其中 JSON 为 [JSON5](https://json5.org/) 规范。

示例：

```twig
{% mmedias "aplayer" "autoplay:false" %}
{
  "volume": 0.8,
  "audio":
  [
    {
      "name": "name1",
      "artist": "artist1",
      "url": "url1.mp3",
      "cover": "cover1.jpg",
      "lrc": "lrc1.lrc",
      "theme": "#ebd0c2"
    },
    {
      "name": "name2",
      "artist": "artist2",
      "url": "url2.mp3",
      "cover": "cover2.jpg",
      "lrc": "lrc2.lrc",
      "theme": "#46718b"
    }
  ]
}
{% endmmedias %}
```

## 从 0.x 升级

考虑到一部分用户 0.x 版本使用时间较长，迁移成本较高，遂将 0.x 单独发布为一个包，可以用 1.x 版本同时安装。

详情见 [0.X 版本](version0.md)。

虽然能兼容使用，但建议及时修改文章到 1.x ，0.x 版本已不再继续维护。

## 开发者要说的几句话

1. 这个插件并不完美，如果使用中遇到问题，请熟读文档，如果还是有问题，请再读一遍文档，还是有问题，请向开发者反馈。
2. 关于 JS 重复请求，请升级客户端浏览器版本，两个一样的 JS，只会请求一次，暂时没有想到什么好的办法，如果有，请及时告诉我。
3. 关于 pjax，这东西真的不想去做兼容（其实也不难），如果以后闲得无聊的话，可能会做，但不要催我关于 pjax 兼容的问题。
4. 不要局限于示例，放开手脚，大胆去尝试，这个插件的开放性真的非常的大。
