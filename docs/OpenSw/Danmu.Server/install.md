---
title: 安装和基本介绍
date: 2022-05-18 17:03:27

redirectFrom:
  - /pages/15f418/
---

## 基本介绍

这是一个通用的弹幕服务器，并且可以解析 B 站的视频弹幕。

## 安装

::: danger
后面的教程戾气较重，心理承受能力差的别看，别对号入座。
:::

:::warning
目前 2.x 版本未正式发布，如想要体验，可以使用我搭建好的服务器，或者是到 QQ 群里下载测试版。
:::

:::warning
不支持 CentOS6，不支持 CentOS6，不支持 CentOS6，用 CentOS6 的自己想办法解决，仅在 Debian/Ubuntu 系系统测试，其他系统不能保证兼容性。
:::

### 流程

- 下载预编译文件到服务器
- 编辑配置文件 `appsettings.json`
- 配置进程守护
- 配置反向代理
- 测试

### 下载

到 [QQ 群](/assets/html/qq-groups.html)下载测试版本，或者使用[源码](https://github.com/u2sb/Danmu.Server)自行编译。

授予运行权限

```bash
sudo chmod +x DanMu
```

### 配置

编辑 `appsettings.json`

```json
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
        "Url": "http://localhost:5000",
        "Protocols": "Http1AndHttp2AndHttp3"
      }
    }
  },
  "AllowedHosts": "*",
  "WithOrigins": ["*"],
  "BiliBiliSetting": {
    "PageCacheTime": 8640,
    "DanMuCacheTime": 6
  },
  "DataBase": {
    "Directory": "DataBase",
    "DanMuCachingDb": "DanMuCaching.db",
    "DanMuDb": "DanMu.db"
  },
  "Admins": [
    {
      "UserName": "王二麻子",
      "Password": "123456"
    }
  ],
  "Meting": {
    "DefaultServerProvider": "Tencent",
    "Url": "https://danmu.u2sb.com/api/meting",
    "Replace": {
      "Url": [
        ["http://", "https://"],
        ["ws.stream.qqmusic.qq.com", "dl.stream.qqmusic.qq.com"]
      ],
      "Pic": [["http://", "https://"]]
    },
    "CachingTime": {
      "Base": 600,
      "Url": 600,
      "Pic": 600,
      "Lrc": 43200
    }
  }
}
```

需要修改的部分

- `Kestrel.Endpoints.Http.Url` 修改为不冲突的端口
- `AllowedHosts` 添加自己的域名，多个域名使用 `;` 隔开，如 `"danmu.u2sb.com;localhost"`
- `WithOrigins` 允许跨域请求的域名，默认不需要修改
- `Admins` 管理员用户名和密码，一定要把默认的删掉

### 配置进程守护

以 `supervisor` 为例

```ini
[program:danmu.server]

directory=/www/danmu.server/
command=/www/danmu.server/DanMu

autostart=true
autorestart=true
startsecs=3
user=root

stderr_logfile=/www/danmu.server/logs/error.log
stdout_logfile=/www/danmu.server/logs/out.log

stderr_logfile_maxbytes=5MB
stderr_logfile_backups=20
stdout_logfile_maxbytes=5MB
```

### 配置反向代理

以 caddy 为例

```
danmu.u2sb.com {
  encode zstd br gzip
  reverse_proxy localhost:5000
}
```

## 感谢

本项目开发过程中参考了以下项目，在此表示感谢：

- [Bili.Uwp](https://github.com/Richasy/Bili.Uwp)
- [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect)
