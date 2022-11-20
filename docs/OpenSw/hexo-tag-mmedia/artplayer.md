---
title: ArtPlayer
date: 2021-03-01 11:13:47
redirectFrom:
  - /pages/5b810b/
---

## 介绍

可以插入 artplayer 标签。

## 使用

```twig
{% mmedia "artplayer" "url:https://dandoc.u2sb.com/video/%E5%AE%89%E8%A3%85/1-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E8%A3%85.mp4" %}
```

```twig
{% mmedias "artplayer" "flv:"  %}
{
  url: "https://dandoc.u2sb.com/video/%E5%AE%89%E8%A3%85/1-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E8%A3%85.mp4"
}
{% endmmedias %}
```

## 参数

> 此部分请熟读 [ArtPlayer 文档](https://artplayer.org/document/options)

- 使用 `:` 或 `=` 分割。

详细参数表：

| 参数     | 默认  | 解释           |
| :------- | :---- | :------------- |
| url      | -     | url            |
| title    | -     | title          |
| poster   | -     | poster         |
| type     | -     | type           |
| autoplay | false | video autoplay |
| loop     | false | video loop     |
| volume   | 0.7   | default volume |
| style    | -     | style          |

上面有一个比较特殊的参数 flv，这里单独解释一下，这个参数是用于引入其他 js 文件的，目前支持的有：`hls` `dash` `shaka_dash` `flv` `webtorrent`，上述参数可多个一起使用，如果后面带有 js 地址，将直接使用，否则将使用 `_config.yml` 配置或插件默认配置，如：

```twig
{% mmedia "artplayer" "flv:" "url:a.flv" %}
```

```twig
{% mmedias "artplayer" "flv:" "hls:https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js" %}
{
  ...
}
{% endmmedias %}
```

不在表格内的参数请使用下面 JSON 类型的参数。

### JSON 参数

mmedia 插件允许在 contents 部分使用 JSON 编写配置，由于允许使用 JSON5，此项配置几乎与 ArtPlayer 完全一致。

详情请见上方示例。

## 配置

默认配置可写入 `_config.yml` 下

```yaml
mmedia:
  artplayer:
    js: https://cdn.jsdelivr.net/npm/artplayer@3/dist/artplayer.js
    hls_js: https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js
    dash_js: https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js
    shaka_dash_js: https://cdn.jsdelivr.net/npm/shaka-player/dist/shaka-player.compiled.js
    flv_js: https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js
    webtorrent_js: https://cdn.jsdelivr.net/npm/webtorrent/webtorrent.min.js
    default:
      style: width:100%;height:650px;max-width:1200px;center
      contents:
        autoSize: true
        autoMini: true
        fullscreen: true
        fullscreenWeb: true
```
