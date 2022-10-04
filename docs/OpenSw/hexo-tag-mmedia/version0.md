---
title: 0.X 版本
author: MonoLogueChi
date: 2021-02-23 12:41:58
redirectFrom:
  - /pages/bc70cb/
---

::: warning
0.x 版本已停止更新，只做兼容和过渡使用，请尽快更新 1.x 版本。

如果有人愿意接手 0.x 版维护，请及时联系我。
:::

## 简介

hexo-tag-mmedia 是 MonoLogueChi 自用的一个媒体插入插件，在添加部分功能后发布给大家使用。

支持的平台

- [x] [Aplayer](https://github.com/DIYgod/APlayer)
- [x] [Meting](https://github.com/metowolf/MetingJS)
- [x] [Dplayer](https://github.com/DIYgod/DPlayer)
- [x] [哔哩哔哩](https://www.bilibili.com/)
- [x] [西瓜视频](https://www.ixigua.com/)
- [ ] [YouTube]()
- [ ] [ArtPlayer](https://github.com/zhw2590582/ArtPlayer)

## 使用

本插件与以下插件冲突

- hexo-tag-aplayer
- hexo-tag-dplayer
- hexo-tag-bilibili

如有安装，使用前请卸载。

```bash
npm uninstall hexo-tag-aplayer
npm uninstall hexo-tag-dplayer
npm uninstall hexo-tag-bilibili
```

### 安装

```bash
npm install hexo-tag-mmedia-0.x --save
```

### \_config.yml

如果不需要自定义设置，不需要修改 `_config.yml`，直接使用即可

```yaml
mmedia:
  aplayer:
    cdn: https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js
    style_cdn: https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css
    default:
  meting:
    cdn: https://cdn.jsdelivr.net/npm/meting/dist/Meting.min.js
    api:
    default:
  dplayer:
    cdn: https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js
    style_cdn: https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.css
    hls_cdn: https://cdn.jsdelivr.net/npm/hls.j/dist/hls.min.js
    dash_cdn: https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js
    shaka_dash_cdn: https://cdn.jsdelivr.net/npm/shaka-player/dist/shaka-player.compiled.js
    flv_cdn: https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js
    webtorrent_cdn: https://cdn.jsdelivr.net/npm/webtorrent/webtorrent.min.js
    default:
```

default 项下可配置默认选项，例如：

```yaml
meting:
  cdn: https://cdn.jsdelivr.net/npm/meting/dist/Meting.min.js
  api:
  default:
    order: random
```

## MetingJS

示例：

```twig
{% meting "001Mf4Ic1aNYYK" "tencent" "album" "order:random" "listmaxheight:180px" %}

{% meting "auto:https://y.qq.com/n/yqq/song/001RGrEX3ija5X.html" "autoplay" %}
```

参数：

基本兼容 hexo-tag-aplayer，绝大部分可以直接从 hexo-tag-aplayer 迁移，参数形式为 `"option:vaule"`，不懂的可以参考 [MetingJS](https://github.com/metowolf/MetingJS#option)

| 配置项        | 默认       | 描述                                                                        |
| :------------ | :--------- | :-------------------------------------------------------------------------- |
| id            | 必须       | 音乐 id，第一个参数                                                         |
| server        | 必须       | 音乐平台，第二个参数，可选：`netease`, `tencent`, `kugou`, `xiami`, `baidu` |
| type          | 必须       | 音乐类型，第三个参数，可选：`song`, `playlist`, `album` `search`, `artist`  |
| auto          | 无         | 有 auto 选项时前面参数不需要填写，否则为必填，见示例 2                      |
| autoplay      | `false`    | 自动播放，带有此参数表示 `true`，不带表示 `false`                           |
| fixed         | `false`    | 吸底模式，带有此参数表示 `true`，不带表示 `false`                           |
| mini          | `false`    | 迷你模式，带有此参数表示 `true`，不带表示 `false`                           |
| listfolded    | `false`    | 默认折叠列表，带有此参数表示 `true`，不带表示 `false`                       |
| mutex         | `true`     | 互斥，如不需互斥 `"mutex:false"`                                            |
| theme         | `#2980b9`  | 主题颜色                                                                    |
| loop          | `all`      | 循环模式 ，可选值 `all`, `one`, `none`                                      |
| order         | `list`     | 播放顺序，可选值 `list`, `random`                                           |
| preload       | `auto`     | 预加载模式 ，可选 `none`, `metadata`, `auto`                                |
| volume        | `0.7`      | 默认音量，可选 `0-1`                                                        |
| lrctype       | `0`        | 歌词类型                                                                    |
| listmaxheight | `340px`    | 播放器最大高度                                                              |
| storagename   | `metingjs` |

更多参数可以以 `"option:vaule"` 的格式增加。

后端服务器可以使用官方后端，也可以使用我自己写的后端服务器 [MetingJS.Server](https://github.com/u2sb/MetingJS.Server) 自建服务。

## Aplayer

```twig
{% aplayer "Caffeine" "Jeff Williams" "caffeine.mp3" "picture.jpg" "lrc:caffeine.txt" %}

{% aplayer title author url [picture_url, narrow, autoplay, width:xxx, lrc:xxx] %}
```

| 配置项      | 默认    | 描述                                              |
| :---------- | :------ | :------------------------------------------------ |
| title       | 必须    | 曲目标题，第一个参数                              |
| author      | 必须    | 曲目作者，第二个参数                              |
| url         | 必须    | 音乐文件地址                                      |
| picture_url |         | 音乐对应的图片地址                                |
| narrow      | `false` | 袖珍风格，带有此参数表示 `true`，不带表示 `false` |
| autoplay    | `false` | 自动播放，带有此参数表示 `true`，不带表示 `false` |
| width:xxx   | `100%`  | 播放器宽度                                        |
| lrc         |         | 歌词地址                                          |

AplayerList（不推荐使用）

::: warning 警告
此模式测试不够完善，如果遇到问题请提 [issue](https://github.com/u2sb/hexo-tag-mmedia/issues)
:::

```twig
{% aplayerlist %}
{
    "narrow": false,             // Optional, narrow style
    "autoplay": true,            // Optional, autoplay song(s), not supported by mobile browsers
    "mode": "random",            // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
    "showlrc": 3,                // Optional, show lrc, can be 1, 2, 3
    "mutex": true,               // Optional, pause other players when this player playing
    "theme": "#e6d0b2",	         // Optional, theme color, default: #b7daff
    "preload": "metadata",       // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
    "listmaxheight": "513px",    // Optional, max height of play list
    "music": [
        {
            "title": "CoCo",
            "author": "Jeff Williams",
            "url": "caffeine.mp3",
            "pic": "caffeine.jpeg",
            "lrc": "caffeine.txt"
        },
        {
            "title": "アイロニ",
            "author": "鹿乃",
            "url": "irony.mp3",
            "pic": "irony.jpg"
        }
    ]
}
{% endaplayerlist %}
```

## Dplayer

```twig
{% dplayer "url:KeyCastOW.mp4" "id:DDEC4F882C0B66FAD" "addition:addition0" "addition:addition1" %}
```

非必填项，如果不清楚请不要填写。

| 配置项      | 默认      | 描述                                                                    |
| :---------- | :-------- | :---------------------------------------------------------------------- |
| url         | 必填      | 视频地址                                                                |
| pic         |           | 封面                                                                    |
| thumbnails  |           | 缩略图                                                                  |
| type        | `auto`    | 视频格式，可选 `auto` `hls` `dash` `shakaDash` `flv` `webtorrent`       |
| id          |           | 弹幕 id，建议使用视频的 CRC 或 MD5，再或使用 UUID                       |
| api         |           | 弹幕 api                                                                |
| token       |           |                                                                         |
| maximum     | `10000`   | 最大弹幕数                                                              |
| user        | `DIYgod`  | 弹幕发送用户名                                                          |
| bottom      | `15%`     | 弹幕底端距离                                                            |
| unlimited   | `true`    |                                                                         |
| addition    |           | 额外弹幕，可重叠加多个                                                  |
| suburl      |           | 字幕地址                                                                |
| subtype     | `webvtt`  | 字幕类型，可选 `webvtt` `ass`                                           |
| subbottom   | `40px`    | 字幕底端距离                                                            |
| subfontSize | `20px`    | 字幕字体大小                                                            |
| subcolor    | #fff      | 字幕字体颜色                                                            |
| autoplay    | `false`   | 自动播放，带有此参数表示 true，不带表示 false                           |
| loop        | `false`   | 循环，带有此参数表示 true，不带表示 false                               |
| screenshot  | `false`   | 截屏按钮，带有此参数表示 true，不带表示 false，此参数会造成跨域         |
| hotkey      | `true`    | 热键控制                                                                |
| mutex       | `true`    | 互斥                                                                    |
| theme       | `#b7daff` | 主题颜色                                                                |
| lang        |           | 语言，不指定会根据浏览器环境自动识别                                    |
| preload     | `auto`    | 预加载，可选 `none` `metadata` `auto`                                   |
| logo        |           | logo 地址                                                               |
| volume      | 0.7       | 默认音量 `0-1`                                                          |
| contextmenu |           | 右键菜单，可叠加                                                        |
| highlight   |           | 高光点，可叠加多个，例如 `"highlight:{time: 20, text: '这是第 20 秒'}"` |
| code        |           | 额外代码，不懂不要填，需要写的请参考源码                                |

## 哔哩哔哩

```twig
{% bilibili "aid:60016166" "quality:high" "danmaku" "allowfullscreen" %}
```

| 配置项          | 默认    | 描述                                                               |
| :-------------- | :------ | :----------------------------------------------------------------- |
| bvid            |         | 视频 bv 号，bvid、aid 和 av 必填一项，推荐使用 bvid                |
| aid             |         | 视频 av 号                                                         |
| av              |         | 视频链接地址，不要带分 P 信息，与 aid 同时填写会被覆盖，不推荐使用 |
| page            | `1`     | 分 P，填写 av 时才会生效                                           |
| quality         | `low`   | 视频质量，可选 `high` `low` (此选项已失效)                         |
| danmaku         | `false` | 开启弹幕，带有此参数表示 true，不带表示 false                      |
| allowfullscreen | `true`  | 是否允许全屏                                                       |
| width           | `100%`  | 宽度                                                               |
| max_width       | `800px` | 最大宽度                                                           |
| margin          | `auto`  | 位置，css 属性，例：`"margin:auto"` `"margin:0 0 0 auto"`          |

## 西瓜视频

```twig
{% ixigua “xid:6905586791114342925” "autoplay" "startTime:0" %}
```

| 配置项          | 默认    | 描述                                                      |
| :-------------- | :------ | :-------------------------------------------------------- |
| xid             |         | 必填，就是 url 里的那一串数字                             |
| id              |         | 预留，目前无需填写                                        |
| autoplay        | `false` | 自动播放                                                  |
| startTime       | `0`     | 开始时间                                                  |
| allowfullscreen | `true`  | 是否允许全屏                                              |
| width           | `100%`  | 宽度                                                      |
| max_width       | `800px` | 最大宽度                                                  |
| margin          | `auto`  | 位置，css 属性，例：`"margin:auto"` `"margin:0 0 0 auto"` |

## ArtPlayer

暂不支持，开发中...

## YouTube

暂不支持，开发中...

## 反馈

- [GitHub Issue](https://github.com/u2sb/hexo-tag-mmedia/issues)
- [QQ 群](https://shang.qq.com/wpa/qunwpa?idkey=f2a6dba8d97899969101dd29210d972f04febd0ff8cf08ed50dd27790f23c9a9) 159891059

![](/assets/img/2020/qq.avif =300x300)
