---
title: Video
date: 2021-02-23 16:16:20
redirectFrom:
  - /pages/f98608/
---

## 介绍

可以插入 html5 原生 video 标签

## 使用

```twig
{% mmedia "video" "src:a.mp4" %}
```

```twig
{% mmedia "video" "src:https://baidu.com/a.mp4" "autoplay:true" %}
```

## 参数

> 此部分请熟读 [Video 相关介绍](https://www.w3.org/TR/2014/REC-html5-20141028/embedded-content-0.html#the-video-element)

- 使用 `:` 或 `=` 分割。
- 所有 `<video>` 标签的原生参数均可添加，只要能写进去就可以。
- 具体能否实现相关标准，取决于客户端浏览器。

### JSON 参数

mmedia 插件允许在 contents 部分使用 JSON 编写配置，使用 JSON5 标准。

## 配置

默认配置可写入 `_config.yml` 下

```yaml
mmedia:
  video:
    default:
      autoplay: true
      key: vaule
```
