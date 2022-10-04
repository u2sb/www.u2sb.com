---
title: 安装和基本介绍
date: 2022-05-18 17:03:27

redirectFrom:
  - /pages/15f418/
---

## 基本介绍

这是一个通用的弹幕服务器，并且可以解析 B 站的视频弹幕。

## 安装

::: caution
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

暂不提供二进制文件，请使用[源码](https://github.com/u2sb/Danmu.Server)自行编译。

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
      "Default": "Warning",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": ["localhost", "danmu-bili.u2sb.com", "danmu.u2sb.com"],
  "WithOrigins": ["*"],
  "Port": -1,
  "UnixSocket": "/home/sb/www/danmu/danmu.sock",
  "PidFile": "/home/sb/www/danmu/danmu.pid",
  "DataBase": {
    "Directory": "DataBase",
    "CachingDb": "DanMu.cache",
    "PoolSize": 10
  },
  "BiliBiliSetting": {
    "Cookie": ""
  }
}

```

需要修改的部分

- `Kestrel.Endpoints.Http.Url` 修改为不冲突的端口
- `AllowedHosts` 添加自己的域名，多个域名使用 `;` 隔开，如 `"danmu.u2sb.com;localhost"`
- `WithOrigins` 允许跨域请求的域名，默认不需要修改
- `Admins` 管理员用户名和密码，一定要把默认的删掉

### 配置进程守护

以 `systemd` 为例

```ini
[Unit]
Description = danmu
After = network.target remote-fs.target nss-lookup.target

[Service]
Type = exec
Group = sb
User = sb
PIDFile = /home/sb/www/danmu/danmu.pid
WorkingDirectory = /home/sb/www/danmu/
ExecStartPre = /usr/bin/rm -f /home/sb/www/danmu/danmu.sock
ExecStart = /home/sb/www/danmu/bin/DanMu
ExecStartPost = /usr/bin/sleep 1s
KillSignal = SIGTERM

Restart = always
RestartSec = 5s

[Install]
WantedBy = multi-user.target
```

### 配置反向代理

以 caddy 为例

```caddy
danmu.u2sb.com {
  encode zstd br gzip
  reverse_proxy unix+h2c//home/mc/www/danmu/danmu.sock
}
```

## 感谢

本项目开发过程中参考了以下项目，在此表示感谢：

- [Bili.Uwp](https://github.com/Richasy/Bili.Uwp)
- [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect)
