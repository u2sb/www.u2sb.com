---
title: Meting
date: 2021-02-23 16:17:48
redirectFrom:
  - /pages/b9330d/
---

## 介绍

可以插入 [MetingJS](https://github.com/metowolf/MetingJS) 标签。

## 使用

```twig
{% mmedia "meting" "auto=https://y.qq.com/n/yqq/song/001RGrEX3ija5X.html" %}
```

```twig
{% mmedia "meting" "server=netease"	"type=playlist"	"id=60198" %}
```

## 参数

> 此部分请熟读 [MetingJS 文档](https://github.com/metowolf/MetingJS#option)

- 使用 `:` 或 `=` 分割。
- 所有 `<meting-js>` 标签的参数均可添加，只要能写进去就可以。

### JSON 参数

mmedia 插件允许在 contents 部分使用 JSON 编写配置，使用 JSON5 标准。

```twig
{% mmedias "meting" "server=netease" %}
{
  type:"playlist",
	id:"60198"
}
{% endmmedias %}
```

## 配置

默认配置可写入 `_config.yml` 下

```yaml
mmedia:
  meting:
    js: https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js
    api: http://example.com/api.php
    default:
      key: vaule
```
