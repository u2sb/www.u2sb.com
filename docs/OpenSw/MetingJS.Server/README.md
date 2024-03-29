---
title: MetingJS.Server
date: 2021-02-23 12:41:58
redirectFrom:
  - /pages/7c33e5/

dir:
  order: 0040
---

## 简介

这是 MetingJS 的后端服务器，可以部署在自己的服务器上，也可以部署在阿里云函数计算上。

## 编译

非二次开发不需要看这一部分，直接看后面的部署即可。
下载项目，使用 vs 打开，调整参数编译。

## 安装

### 在阿里云函数计算(FC)上安装

:::tip
请在发行版中找含有 `fc` 的版本。
:::

[下载](https://github.com/u2sb/MetingJS.Server/releases) fc 版本，开通阿里云函数计算

`控制台` -> `函数计算` -> `新建函数` -> `HTTP函数`

默认不需要修改配置，直接上传 fc.zip

函数入口为：`MetingJS.Server.Fc::MetingJS.Server.Fc.FcRemoteEntrypoint::HandleRequest`

请求地址为(Meting 填写下方地址) ：

```
https://xxxxxxxxxxxx.cn-shanghai.fc.aliyuncs.com/xxxx-xx-xx/proxy/MetingJS/GetMusic/api/music
或
https://xxxxxxxxxxxx.cn-shanghai.fc.aliyuncs.com/xxxx-xx-xx/proxy/MetingJS/GetMusic/api.php

例如 https://xxxxxxxxxxxx.cn-shanghai.fc.aliyuncs.com/xxxx-xx-xx/proxy/MetingJS/GetMusic/api/music?server=Tencent&type=lrc&id=0008yfgO0dmovi
```

![](./assets/img/metingjs.server-01.png)

![](./assets/img/metingjs.server-02.png)

![](./assets/img/metingjs.server-03.png)

### 在服务器(Linux)上安装

[下载](https://github.com/u2sb/MetingJS.Server/releases) Linux 版本，上传到服务器，解压，修改 `appsettings.json`

```json appsettings.json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "Kestrel": {
    "Endpoints": {
      "Http": {
        "Url": "http://localhost:5002",
        "Protocols": "Http1AndHttp2AndHttp3"
      }
    }
  },
  "AllowedHosts": "*",
  "WithOrigins": ["*"],
  "DefaultServerProvider": "Tencent",
  "Url": "https://xxxxxxxxxxx.com/api/music",
  "Replace": {
    "Url": [
      ["http://", "https://"],
      ["ws.stream.qqmusic.qq.com", "dl.stream.qqmusic.qq.com"]
    ],
    "Pic": [["http://", "https://"]]
  },
  "Cache": {
    "Directory": "DataBase",
    "CacheDataBase": "Caching.db",
    "Base": 600,
    "Url": 600,
    "Pic": 600,
    "Lrc": 43200
  }
}
```

配置项详情如下：

| 配置项       | 类型       | 解释                                                                                                                                           |
| :----------- | :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| AllowedHosts | string     | 默认无需修改                                                                                                                                   |
| WithOrigins  | string[]   | 允许跨域列表，可用使用通配符 `*`                                                                                                               |
| Url          | string     | 程序运行的网址，会在返回结果中体现，不懂可用不填，但会牺牲一点性能，填写示例：`https://x.sm9.top/api/music` `https//sm.sm9.top:8080/api/music` |
| Replace.Url  | string[][] | 返回结果中 url 项的替换，url 中前面的字符会被替换为后面的，不懂可用不填                                                                        |
| Replace.Pic  | string[][] | 解释见 URL                                                                                                                                     |

修改完配置后，运行测试，使用进程守护工具(Supervisor 或 pm2 等)守护进程，然后使用反向代理服务器(caddy 或 nginx 等)代理端口。

### 示例

`https://meting.u2sb.com/api/music?server=tencent&type=song&id=003UkWuI0E8U0l&r=0.8074837167524542`
