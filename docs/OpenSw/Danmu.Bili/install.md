---
title: 安装和基本介绍
date: 2022-02-03
---

## 基本介绍

这是 B 站弹幕解析服务器。

## 安装

::: danger
后面的教程戾气较重，心理承受能力差的别看，别对号入座。
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

到 [QQ 群](/assets/html/qq-groups.html)下载测试版本，或者使用[源码](https://github.com/u2sb/Danmu.Bili)自行编译。

授予运行权限

```bash
sudo chmod +x Danmu.Bili
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
  "AllowedHosts": "*",
  "WithOrigins": ["*"],
  "Port": 13157,
  "UnixSocket": "/home/www/danmu.bili/danmu-bili.sock",
  "PidFile": "/home/www/danmu.bili/danmu-bili.pid"
}
```

需要修改的部分

- `AllowedHosts` 添加自己的域名，多个域名使用 `;` 隔开，如 `"danmu.u2sb.com;localhost"`，也可以直接填写 `"*"`
- `WithOrigins` 允许跨域请求的域名，默认不需要修改
- `UnixSocket` UnixSocket 路径
- `PidFile` pid 文件路径

### 配置进程守护

以 `systemd` 为例

```ini
[Unit]
Description = danmu-bili
After = network.target remote-fs.target nss-lookup.target

[Service]
Type = exec
Group = mc
User = mc
PIDFile = /home/mc/www/danmu.bili/danmu-bili.pid
WorkingDirectory = /home/mc/www/danmu.bili/
ExecStartPre = /usr/bin/rm -f /home/mc/www/danmu.bili/danmu-bili.pid
ExecStart = /home/mc/www/danmu.bili/Danmu.Bili
ExecStartPost = /usr/bin/sleep 1s
KillSignal = SIGTERM

Restart = always
RestartSec = 5s

[Install]
WantedBy = multi-user.target
```

### 配置反向代理

以 nginx 为例

```nginx
server {
    listen 443 http3;
    listen 443 http2;
    server_name danmu-bili.s2.u2sb.com;
    ssl_early_data on;
    proxy_set_header Early-Data $ssl_early_data;
    ssl_protocols TLSv1.2 TLSv1.3;
    add_header Alt-Svc 'h3=":443"; ma=86400; h3-29=":443"; h3-28=":443";';
    ssl_certificate /home/mc/.acme.sh/*.s2.u2sb.com_ecc/fullchain.cer;
    ssl_certificate_key /home/mc/.acme.sh/*.s2.u2sb.com_ecc/*.s2.u2sb.com.key;

    index index.html index.htm;

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_pass http://unix:/home/mc/www/danmu.bili/danmu-bili.sock;

        brotli_types text/plain text/javascript text/xml application/xml application/json application/octet-stream application/x-protobuf;
        gzip_types text/plain text/javascript text/xml application/xml application/json application/octet-stream application/x-protobuf;
    }
}
```

## 感谢

本项目开发过程中参考了以下项目，在此表示感谢：

- [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect)
