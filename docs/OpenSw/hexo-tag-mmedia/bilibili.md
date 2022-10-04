---
title: 哔哩哔哩动画
date: 2021-02-23 16:39:02
redirectFrom:
  - /pages/19d343/
---

## 介绍

可以插入 bilibili 视频

## 使用

```twig
{% mmedia "bilibili" "bvid:BV1br4y1P7ND" %}
```

```twig
{% mmedia "bilibili" "bvid:BV1br4y1P7ND" "danmaku:false" %}
```

## 参数

- 使用 `:` 或 `=` 分割。

详细参数表：

| 参数            | 默认             | 解释                                                    |
| :-------------- | :--------------- | :------------------------------------------------------ |
| aid             | -                | aid                                                     |
| bvid            | -                | bvid，与 aid 同时出现时以 bvid 为准                     |
| page            | 1                | page                                                    |
| danmaku         | true             | 是否有弹幕 ture or false                                |
| allowfullscreen | allowfullscreen  | 允许全屏， allowfullscreen 或 true 允许，其他选项不允许 |
| sandbox         | 见 [配置](#配置) | iframe sandbox                                          |
| width           | 100%             | css 属性                                                |
| max_width       | 850px            | css 属性                                                |
| margin          | auto             | css 属性                                                |

### JSON 参数

mmedia 插件允许在 contents 部分使用 JSON 编写配置，使用 JSON5 标准。

## 配置

默认配置可写入 `_config.yml` 下

```yaml
mmedia:
  bilibili:
    default:
      page: 1
      danmaku: true
      allowfullscreen: allowfullscreen
      sandbox: allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups
      width: 100%
      max_width: 850px
      margin: auto
```
