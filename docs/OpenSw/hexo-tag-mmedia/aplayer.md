---
title: Aplayer
date: 2021-02-23 16:38:32
redirectFrom:
  - /pages/c7c112/
---

## 介绍

可以插入 aplayer 标签

## 使用

```twig
{% mmedia "aplayer" "name:songName" "url:a.mp3" %}
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

## 参数

> 此部分请熟读 [APlayer 文档](http://aplayer.js.org/)

- 使用 `:` 或 `=` 分割。

详细参数表：

| 参数           | 默认   | 解释                                           |
| :------------- | :----- | :--------------------------------------------- |
| name           | -      | audio name                                     |
| artist         | -      | audio artist                                   |
| url            | -      | audio url                                      |
| cover          | -      | audio cover                                    |
| lrc            | -      | audio lrc                                      |
| theme          | -      | audio theme                                    |
| type           | auto   | audio type 可选 'auto', 'hls', 'normal'        |
| autoplay       | false  | autoplay                                       |
| loop           | 'all'  | player loop play, values: 'all', 'one', 'none' |
| order          | 'list' | player play order, values: 'list', 'random'    |
| volume         | 0.7    | default volume,                                |
| tlistMaxHeight | -      | list max height                                |

不在表格内的参数请使用下面 JSON 类型的参数。

### JSON 参数

mmedia 插件允许在 contents 部分使用 JSON 编写配置，由于允许使用 JSON5，此项配置几乎与 APlayer 完全一致。

详情请见上方示例。

## 配置

默认配置可写入 `_config.yml` 下

```yaml
mmedia:
  aplayer:
    js: https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.js
    css: https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.css
    default:
      contents:
```
