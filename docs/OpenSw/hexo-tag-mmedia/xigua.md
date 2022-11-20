---
title: 西瓜视频
date: 2021-02-23 16:39:18
redirectFrom:
  - /pages/a0c4a7/
---

## 介绍

可以插入 西瓜 视频

## 使用

```twig
{% mmedia "xigua" "xid=6925997698269053453" %}
```

```twig
{% mmedia "xigua" "xid:6925997698269053453" "autoplay:true" %}
```

## 参数

- 使用 `:` 或 `=` 分割。

详细参数表：

| 参数            | 默认             | 解释                                                    |
| :-------------- | :--------------- | :------------------------------------------------------ |
| xid             | -                | 西瓜视频的 ID，就是那一串数字                           |
| id              | -                | 一般情况下不需要填写                                    |
| autoplay        | false            | autoplay                                                |
| startTime       | 0                | 开始时间，秒                                            |
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
