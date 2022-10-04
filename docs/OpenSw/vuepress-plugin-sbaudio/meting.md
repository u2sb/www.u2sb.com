---
title: Meting
---

## 介绍

使用 Meting API 插入 APlayer 播放器

## 使用

<Meting id="1391894332" server="netease" type="song" />

```html
<Meting id="1391894332" server="netease" type="song" />
```

## 参数

| 名称   | 默认值  | 描述                                                                                |
| ------ | ------- | ----------------------------------------------------------------------------------- |
| server | netease | 数据源 `netease` 或 `tencent`，需配合服务器和 API 设置                              |
| type   | song    | 类型 `name` `artist` `song` `playlist` `pic` `lrc` 需配合服务器和 API 设置          |
| id     | -       | -                                                                                   |
| api    | -       | api，例如 `https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r` |
| list   | -       | 数组，除 list 外其他所有项                                                          |

此外，APlayer 所有参数均可传入。
