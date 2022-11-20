import{i as f,j as S,n as B,h as E,t as C,u as L,p as _,_ as J,o as m,c,q as N,v as U,a as y,x as v,y as b,F as D,z as O,g as k,A as x,B as $}from"./app.5e6e04fb.js";const I=[{path:"/",title:"主页",pathLocale:"/",contents:[{header:"为什么会有这个组织？",slug:"为什么会有这个组织",content:`以前注册了域名 u2sb.com，后来就一直想拿这个域名做点事情，但是又没有想好要做什么，就一直拖了下去。
在前面做弹幕服务器的时候，开始使用了这个域名，用于弹幕服务器的文档和公共服务器。
再到后来，就突然有了一个想法，用这个域名，去做一些很帅的事情，也就有了你们现在看到的这个组织。`},{header:"u2sb 会去做哪些事？",slug:"u2sb-会去做哪些事",content:`我们会把一些想法变为现实，即使这个想法不合常理；
我们会分享自己造的轮子，即使轮子是方的；
我们会提供一些免费的公共服务，直到我们不足以支撑这些费用；
...`},{header:"怎样加入 u2sb ？",slug:"怎样加入-u2sb",content:`如果你也想和我们一样，去做一些很帅的事，就请发邮件给我，xxwhite@foxmail.com ，附带自己的 GitHub 主页链接，我会邀请你加入我们的组织。
如果只是想了解使用我们的项目，欢迎加入我们的 QQ 群 159891059`},{header:"资助 u2sb",slug:"资助-u2sb",content:"如果你想资助我们，请用爱发电。"}]},{path:"/OpenHw/",title:"开源硬件",pathLocale:"/",contents:[{header:"OBS 导播键盘",slug:"obs-导播键盘",content:"SB00"},{header:"相机电池",slug:"相机电池",content:"DMW-BLK22 松下相机假电池"}]},{path:"/OpenSw/",title:"开源软件",pathLocale:"/",contents:[{header:"Overview",slug:"overview",content:"公共服务"},{header:"Danmu.Server",slug:"danmu-server",content:`基本介绍
安装
在宝塔面板安装
原始弹幕
在 ArtPlayer 使用
在 Dplayer 使用
下载 BiliBili 弹幕
MetingJS.Server`},{header:"vuepress-plugin-smplayer",slug:"vuepress-plugin-smplayer",content:`基本介绍
安装
MetingJS
APlayer
哔哩哔哩
西瓜视频
ArtPlayer
DPlayer`},{header:"MetingJS.Server",slug:"metingjs-server",content:"安装"},{header:"hexo-tag-mmedia",slug:"hexo-tag-mmedia",content:"目录，略"}]},{path:"/pages/About.html",title:"关于U2SB",pathLocale:"/",contents:[{header:"",slug:"",content:"看到本页的都是帅比。"}]},{path:"/OpenSw/Danmu.Server/",title:"弹幕服务器",pathLocale:"/",contents:[{header:"开源地址",slug:"开源地址",content:""},{header:"这是什么？",slug:"这是什么",content:"这是一个通用弹幕服务器，包括但不限于以下播放器可以使用： Dplayer ArtPlayer 理论上所有支持弹幕的播放器都可以."},{header:"为什么要做这个东西？",slug:"为什么要做这个东西",content:"因为作者免费提供那个弹幕服务器貌似是挂掉了，看了一下开源的源码，我决定自己撸了一个出来。"},{header:"公共服务",slug:"公共服务",content:"见文档 公共服务器是我个人维护的，存在不稳定因素，随时可能会停止服务器，以后也有可能清理弹幕，请勿用于生产环境。"},{header:"反馈",slug:"反馈",content:`issues
QQ 群 159891059`},{header:"感谢",slug:"感谢",content:"使用 ReSharper 开发"}]},{path:"/OpenSw/Danmu.Server/artplayer-danmu.html",title:"ArtPlayer 弹幕",pathLocale:"/",contents:[{header:"介绍",slug:"介绍",content:"适合 ArtPlayer 使用的弹幕"},{header:"API V1",slug:"api-v1",content:""},{header:"ArtPlayer 弹幕",slug:"artplayer-弹幕",content:""},{header:"API",slug:"api",content:`/api/artplayer/v1/{id}.{format?}
/api/artplayer/v1/?id={id}`},{header:"示例",slug:"示例",content:`https://danmu.u2sb.com/api/artplayer/v1/cENuyhsT2rMOCohK
https://danmu.u2sb.com/api/artplayer/v1/cENuyhsT2rMOCohK.json
https://danmu.u2sb.com/api/artplayer/v1/?id=cENuyhsT2rMOCohK`},{header:"解析 BiliBili 弹幕",slug:"解析-bilibili-弹幕",content:""},{header:"解释",slug:"解释",content:`id aid 或 bvid，例如 av810872 或 BV18b411j72u
p 分 P，例如 1 2，省略时默认为 1
format 数据格式，json 或 xml`},{header:"API",slug:"api-1",content:`/api/artplayer/v1/bilibili/{id}/{p:int?}.{format?}
/api/artplayer/v1/bilibili.{format}?bvid={id}&p={p}`},{header:"示例",slug:"示例-1",content:`https://danmu.u2sb.com/api/artplayer/v1/bilibili/BV18b411j72u
https://danmu.u2sb.com/api/artplayer/v1/bilibili/BV18b411j72u.json
https://danmu.u2sb.com/api/artplayer/v1/bilibili/BV18b411j72u/2.json
https://danmu.u2sb.com/api/artplayer/v1/bilibili/?bvid=BV18b411j72u`},{header:"返回",slug:"返回",content:`<i xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"> <d p="12.544,1,25,16777215,1555668046,0,3600fffd,14955772062990336, 6">来了</d> <d p="7.739,1,25,16777215,1555668050,0,5689bb4c,14955774128160768, 8">第一，截图见证</d> <d p="30.225,1,25,16777215,1555668063,0,b21ea9d5,14955781264769024, 8">国风真美！！！</d> <d p="25.077,1,25,16777215,1555668091,0,260d013c,14955795885588482, 7">好像真的是第一</d> <d p="6.46,1,25,16777215,1555668096,0,8e084014,14955798307799044, 7">我好早</d> <d p="11.538,1,25,16777215,1555668098,0,e3027d1f,14955799643160580, 10">来了来了！</d> <d p="39.019,1,25,16777215,1555668105,0,3600fffd,14955802998079490, 9">那个说第一的，你错了，00:12那个是我，我才是第一</d> <d p="40.484,1,25,16777215,1555668200,0,d1f6347d,14955852705824768, 1">真的美爆了！⁽⁽ଘ( ˊᵕˋ )ଓ⁾⁾</d>
</i>
{ "code": 0, "data": [ { "text": "来了", "time": 12.544, "color": "#FFFFFF", "size": 25, "border": false, "mode": 0 }, { "text": "第一，截图见证", "time": 7.739, "color": "#FFFFFF", "size": 25, "border": false, "mode": 0 }, { "text": "国风真美！！！", "time": 30.225, "color": "#FFFFFF", "size": 25, "border": false, "mode": 0 } ]
}`},{header:"示例",slug:"示例-2",content:'点击查看 <div ref="art"></div>\nconst danmakuId = "cENuyhsT2rMOCohK";\nconst danmakuApi = "https://danmu.u2sb.com/api/artplayer/v1";\nconst bilibiliDanmaku = `${danmakuApi}/bilibili/BV1zt411t79A.json`; export default { mounted() { this.$nextTick(() => { Promise.all([ import("artplayer"), import("artplayer-plugin-danmuku"), ]).then( ([{ default: ArtPlayer }, { default: artplayerPluginDanmuku }]) => { this.art = new ArtPlayer({ fullscreen: true, autoSize: true, setting: true, container: this.$refs.art, url: "/assets/video/s_720.mp4", plugins: [ artplayerPluginDanmuku({ danmuku: () => Promise.allSettled([ fetch(bilibiliDanmaku).then((res) => res.json()), fetch(`${danmakuApi}/${danmakuId}.json`).then((res) => res.json() ), ]) .then((res) => res .filter((r) => r.status === "fulfilled") .map((r) => r.value) ) .then((res) => res .filter( (r) => r["code"] !== undefined && r["code"] === 0 && r["data"] !== undefined && r["data"].length > 0 ) .reduce((acc, cur) => acc.concat(cur["data"]), []) ), speed: 5, // 弹幕持续时间，单位秒，范围在[1 ~ 10] opacity: 1, // 弹幕透明度，范围在[0 ~ 1] fontSize: 25, // 字体大小，支持数字和百分比 color: "#FFFFFF", // 默认字体颜色 mode: 0, // 默认模式，0-滚动，1-静止 margin: [10, "25%"], // 弹幕上下边距，支持数字和百分比 antiOverlap: true, // 是否防重叠 useWorker: true, // 是否使用 web worker synchronousPlayback: false, // 是否同步到播放速度 filter: (danmu) => danmu.text.length < 50, // 弹幕过滤函数，返回 true 则可以发送 lockTime: 5, // 输入框锁定时间，单位秒，范围在[1 ~ 60] maxLength: 100, // 输入框最大可输入的字数，范围在[0 ~ 500] minWidth: 200, // 输入框最小宽度，范围在[0 ~ 500]，填 0 则为无限制 maxWidth: 400, // 输入框最大宽度，范围在[0 ~ Infinity]，填 0 则为 100% 宽度 theme: "dark", // 输入框自定义挂载时的主题色，默认为 dark，可以选填亮色 light beforeEmit: (danmu) => !!danmu.text.trim(), // 发送弹幕前的自定义校验，返回 true 则可以发送 }), ], }); this.art.on("artplayerPluginDanmuku:emit", (danmu) => { fetch(danmakuApi, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json", }, body: JSON.stringify({ Id: danmakuId, Referer: window.location.origin + window.location.pathname, ...danmu, }), }); }); } ); // 设置样式 this.$refs.art.style.width = "100%"; this.$refs.art.style.height = (this.$refs.art.scrollWidth / 16) * 9 + "px"; }); }, beforeUnmount() { if (this.art) { this.art.destroy(); } },\n}; Tips\n一定要把 danmakuId 改掉，别 TM 傻逼呵呵的直接用我测试视频的 id 直接就写上去了，自己想办法随便生成一个随机字符串。'}]},{path:"/OpenSw/Danmu.Server/download-bilibili-danmu.html",title:"下载 BiliBili 弹幕",pathLocale:"/",contents:[{header:"下载弹幕",slug:"下载弹幕",content:""}]},{path:"/OpenSw/Danmu.Server/dplayer-danmu.html",title:"DPlayer 弹幕",pathLocale:"/",contents:[{header:"介绍",slug:"介绍",content:"适合 DPlayer 使用的弹幕"},{header:"API V3",slug:"api-v3",content:""},{header:"DPlayer 弹幕",slug:"dplayer-弹幕",content:""},{header:"API",slug:"api",content:"/api/dplayer/"},{header:"示例",slug:"示例",content:"https://danmu.u2sb.com/api/dplayer/"},{header:"解析 BiliBili 弹幕",slug:"解析-bilibili-弹幕",content:""},{header:"解释",slug:"解释",content:`id aid 或 bvid，例如 av810872 或 BV18b411j72u
p 分 P，例如 1 2，省略时默认为 1`},{header:"API",slug:"api-1",content:`/api/dplayer/v3/bilibili/{id}/{p:int?}
/api/dplayer/v3/bilibili/danmu/?bvid={id}&p={p}`},{header:"示例",slug:"示例-1",content:`https://danmu.u2sb.com/api/dplayer/v3/bilibili/BV18b411j72u
https://danmu.u2sb.com/api/dplayer/v3/bilibili/danmu/?bvid=BV18b411j72u`},{header:"返回",slug:"返回",content:`{ "code": 0, "data": [ [12.544, 0, 16777215, "3600fffd", "来了"], [7.739, 0, 16777215, "5689bb4c", "第一，截图见证"], [30.225, 0, 16777215, "b21ea9d5", "国风真美！！！"], [25.077, 0, 16777215, "260d013c", "好像真的是第一"] ]
}`},{header:"示例",slug:"示例-2",content:`点击查看 <div ref="dp"></div>
export default { mounted() { this.$nextTick(() => { import("dplayer").then(({ default: DPlayer }) => { this.dp = new DPlayer({ container: this.$refs.dp, video: { url: "/assets/video/s_720.mp4", thumbnails: "/assets/video/thumbnails.jpg", }, danmaku: { api: "https://danmu.u2sb.com/api/dplayer/", id: "cENuyhsT2rMOCohK", addition: [ "https://danmu.u2sb.com/api/dplayer/v3/bilibili/BV1zt411t79A", ], }, }); }); }); }, beforeUnmount() { this.dp.destroy(); },
}; Tips
一定要把 id 改掉，别 TM 傻逼呵呵的直接用我测试视频的 id 直接就写上去了，自己想办法随便生成一个随机字符串。`}]},{path:"/OpenSw/Danmu.Server/install-on-baota.html",title:"在宝塔面板安装",pathLocale:"/",contents:[{header:"",slug:"",content:`Tips
宝塔面板实在是太复杂了，研究了两天没搞懂，只能搞个大概的教程，本文仅供参考。`},{header:"基础环境",slug:"基础环境",content:`Ubuntu Server 20.04
宝塔 7.9.2`},{header:"上传可执行文件",slug:"上传可执行文件",content:`上传可执行文件到服务器，上传位置由你自己决定，确保自己能找到，我测试的时候直接上传压缩包，然后用宝塔面板解压没有反应，不知道是我这里的 bug 还是整个宝塔面板都有问题，建议不使用压缩包，直接拖整个文件夹上去。
上传文件后检查权限，确保有执行权限，貌似宝塔上传的文件默认权限就是 755，这一步大概率可以省略，不放心的话就再检查一遍。
同时还要注意一下文件所有者，这里记一下，后面会用到，我也不知道宝塔文件所有到底是谁，面板上看是 root，但是使用 ls -lha 命令查看，文件所有者是 www，如果有懂的朋友可以解释一下。`},{header:"修改配置文件",slug:"修改配置文件",content:`修改 appsettings.json
需要修改的部分主要有： Kestrel.Endpoints.Http.Url: 监听地址和端口，根据需要修改，如果只是在本机反代，无需修改，如果需要在其他机器上反代，可修改为 http://0.0.0.0:5001
WithOrigins: 跨域配置，如无跨域限制需求，无需修改。
Admins: 必须修改，配置管理员账户和密码，可配置多个。`},{header:"守护进程",slug:"守护进程",content:`先安装 supervisor，在终端执行
sudo apt install supervisor
以上命令仅限 Ubuntu 20.04 和 Debian11，其他系统自己去想办法解决。
然后在宝塔的软件商店找到 Supervisor管理器，安装完成后配置 注意，截图上的可执行文件路径是错的，别 TM 不思考直接照着抄，错的都看不出来，看教程就是要举一反三，参考教程，根据自己的实际情况做出调整。
只要状态是 RUNNING 就正常了，其他状态自行排查错误，直接去看子配置文件，配置文件才是能直接看出错误的地方。`},{header:"反向代理",slug:"反向代理",content:`在宝塔面板上创建一个纯静态站点。
然后设置站点的反向代理。 注意一下端口号，别跟个 SB 一样，自己改了配置文件里的端口号，这里还是写 5001，你改的什么就用什么。
不出意外的话到这里教程就完成了。`}]},{path:"/OpenSw/Danmu.Server/install.html",title:"安装和基本介绍",pathLocale:"/",contents:[{header:"基本介绍",slug:"基本介绍",content:"这是一个通用的弹幕服务器，并且可以解析 B 站的视频弹幕。"},{header:"安装",slug:"安装",content:`Warning
后面的教程戾气较重，心理承受能力差的别看，别对号入座。 Note
目前 2.x 版本未正式发布，如想要体验，可以使用我搭建好的服务器，或者是到 QQ 群里下载测试版。 Note
不支持 CentOS6，不支持 CentOS6，不支持 CentOS6，用 CentOS6 的自己想办法解决，仅在 Debian/Ubuntu 系系统测试，其他系统不能保证兼容性。`},{header:"流程",slug:"流程",content:`下载预编译文件到服务器
编辑配置文件 appsettings.json
配置进程守护
配置反向代理
测试`},{header:"下载",slug:"下载",content:`到 QQ 群下载测试版本，或者使用源码自行编译。
授予运行权限
sudo chmod +x DanMu`},{header:"配置",slug:"配置",content:`编辑 appsettings.json
{ "Logging": { "LogLevel": { "Default": "Information", "Microsoft.AspNetCore": "Warning" } }, "Kestrel": { "Endpoints": { "Http": { "Url": "http://localhost:5000", "Protocols": "Http1AndHttp2AndHttp3" } } }, "AllowedHosts": "*", "WithOrigins": ["*"], "BiliBiliSetting": { "PageCacheTime": 8640, "DanMuCacheTime": 6 }, "DataBase": { "Directory": "DataBase", "DanMuCachingDb": "DanMuCaching.db", "DanMuDb": "DanMu.db" }, "Admins": [ { "UserName": "王二麻子", "Password": "123456" } ], "Meting": { "DefaultServerProvider": "Tencent", "Url": "https://danmu.u2sb.com/api/meting", "Replace": { "Url": [ ["http://", "https://"], ["ws.stream.qqmusic.qq.com", "dl.stream.qqmusic.qq.com"] ], "Pic": [["http://", "https://"]] }, "CachingTime": { "Base": 600, "Url": 600, "Pic": 600, "Lrc": 43200 } }
}
需要修改的部分 Kestrel.Endpoints.Http.Url 修改为不冲突的端口
AllowedHosts 添加自己的域名，多个域名使用 ; 隔开，如 "danmu.u2sb.com;localhost"
WithOrigins 允许跨域请求的域名，默认不需要修改
Admins 管理员用户名和密码，一定要把默认的删掉`},{header:"配置进程守护",slug:"配置进程守护",content:`以 supervisor 为例
[program:danmu.server] directory=/www/danmu.server/
command=/www/danmu.server/DanMu autostart=true
autorestart=true
startsecs=3
user=root stderr_logfile=/www/danmu.server/logs/error.log
stdout_logfile=/www/danmu.server/logs/out.log stderr_logfile_maxbytes=5MB
stderr_logfile_backups=20
stdout_logfile_maxbytes=5MB`},{header:"配置反向代理",slug:"配置反向代理",content:`以 caddy 为例
danmu.u2sb.com { encode zstd br gzip reverse_proxy localhost:5000
}`},{header:"感谢",slug:"感谢",content:`本项目开发过程中参考了以下项目，在此表示感谢： Bili.Uwp
bilibili-API-collect`}]},{path:"/OpenSw/Danmu.Server/meting.html",title:"MetingJs 服务器",pathLocale:"/",contents:[{header:"",slug:"",content:"Danmu.Server 已合并 MetingJS.Server，可作为 MetingJs 的服务端使用。"},{header:"API",slug:"api",content:"https://danmu.u2sb.com/api/meting?server=:server&type=:type&id=:id&r=:r"},{header:"示例",slug:"示例",content:"https://danmu.u2sb.com/api/meting?server=tencent&type=song&id=003UkWuI0E8U0l&r=0.8074837167524542"}]},{path:"/OpenSw/Danmu.Server/raw-danmu.html",title:"原始弹幕",pathLocale:"/",contents:[{header:"介绍",slug:"介绍",content:"解析 B 站原始弹幕"},{header:"API V1",slug:"api-v1",content:""},{header:"解释",slug:"解释",content:`id aid 或 bvid，例如 av810872 或 BV18b411j72u
p 分 P，例如 1 2，省略时默认为 1
format 数据格式，json 或 xml`},{header:"API",slug:"api",content:`/api/bilibili/v1/{id}/{p:int?}
/api/bilibili/v1/?bvid={id}&p={p}`},{header:"示例",slug:"示例",content:`https://danmu.u2sb.com/api/bilibili/v1/BV18b411j72u
https://danmu.u2sb.com/api/bilibili/v1/BV18b411j72u.json
https://danmu.u2sb.com/api/bilibili/v1/BV18b411j72u/2.json
https://danmu.u2sb.com/api/bilibili/v1.xml?bvid=BV18b411j72u&p=2`},{header:"返回",slug:"返回",content:"详见 protobuf 弹幕 待完善"}]},{path:"/OpenSw/MetingJS.Server/",title:"MetingJS.Server",pathLocale:"/",contents:[{header:"简介",slug:"简介",content:"这是 MetingJS 的后端服务器，可以部署在自己的服务器上，也可以部署在阿里云函数计算上。"},{header:"编译",slug:"编译",content:`非二次开发不需要看这一部分，直接看后面的部署即可。
下载项目，使用 vs 打开，调整参数编译。`},{header:"安装",slug:"安装",content:""},{header:"在阿里云函数计算(FC)上安装",slug:"在阿里云函数计算-fc-上安装",content:`Tips
请在发行版中找含有 fc 的版本。 下载 fc 版本，开通阿里云函数计算
控制台 -> 函数计算 -> 新建函数 -> HTTP函数
默认不需要修改配置，直接上传 fc.zip
函数入口为：MetingJS.Server.Fc::MetingJS.Server.Fc.FcRemoteEntrypoint::HandleRequest
请求地址为(Meting 填写下方地址) ：
https://xxxxxxxxxxxx.cn-shanghai.fc.aliyuncs.com/xxxx-xx-xx/proxy/MetingJS/GetMusic/api/music
或
https://xxxxxxxxxxxx.cn-shanghai.fc.aliyuncs.com/xxxx-xx-xx/proxy/MetingJS/GetMusic/api.php 例如 https://xxxxxxxxxxxx.cn-shanghai.fc.aliyuncs.com/xxxx-xx-xx/proxy/MetingJS/GetMusic/api/music?server=Tencent&type=lrc&id=0008yfgO0dmovi`},{header:"在服务器(Linux)上安装",slug:"在服务器-linux-上安装",content:`下载 Linux 版本，上传到服务器，解压，修改 appsettings.json
{ "Logging": { "LogLevel": { "Default": "Information", "Microsoft.AspNetCore": "Warning" } }, "Kestrel": { "Endpoints": { "Http": { "Url": "http://localhost:5002", "Protocols": "Http1AndHttp2AndHttp3" } } }, "AllowedHosts": "*", "WithOrigins": ["*"], "DefaultServerProvider": "Tencent", "Url": "https://xxxxxxxxxxx.com/api/music", "Replace": { "Url": [ ["http://", "https://"], ["ws.stream.qqmusic.qq.com", "dl.stream.qqmusic.qq.com"] ], "Pic": [["http://", "https://"]] }, "Cache": { "Directory": "DataBase", "CacheDataBase": "Caching.db", "Base": 600, "Url": 600, "Pic": 600, "Lrc": 43200 }
}
配置项详情如下： 配置项
类型
解释 AllowedHosts
string
默认无需修改 WithOrigins
string[]
允许跨域列表，可用使用通配符 * Url
string
程序运行的网址，会在返回结果中体现，不懂可用不填，但会牺牲一点性能，填写示例：https://x.sm9.top/api/music https//sm.sm9.top:8080/api/music Replace.Url
string[][]
返回结果中 url 项的替换，url 中前面的字符会被替换为后面的，不懂可用不填 Replace.Pic
string[][]
解释见 URL 修改完配置后，运行测试，使用进程守护工具(Supervisor 或 pm2 等)守护进程，然后使用反向代理服务器(caddy 或 nginx 等)代理端口。`},{header:"示例",slug:"示例",content:"https://meting.u2sb.com/api/music?server=tencent&type=song&id=003UkWuI0E8U0l&r=0.8074837167524542"}]},{path:"/OpenSw/Overview/public-service.html",title:"公共服务",pathLocale:"/",contents:[{header:"",slug:"",content:"我们提供的免费公共服务"},{header:"弹幕服务器",slug:"弹幕服务器",content:`状态：正在服务
地址：https://danmu.u2sb.com
项目：https://github.com/u2sb/Danmu.Server
文档：https://www.u2sb.com/OpenSw/#Danmu.Server`},{header:"B 站弹幕解析",slug:"b-站弹幕解析",content:`状态：已合并至弹幕服务器
地址：https://danmu.u2sb.com
项目：https://github.com/u2sb/Danmu.Bili
文档：Danmu.Bili`},{header:"MetingJs 后端服务器",slug:"metingjs-后端服务器",content:`状态：已合并至弹幕服务器
地址：https://danmu.u2sb.com/api/meting
配置：https://danmu.u2sb.com/api/meting?server=:server&type=:type&id=:id&r=:r
项目：https://github.com/u2sb/MetingJS.Server
文档：MetingJs.Server`},{header:"Apk 应用名称查询",slug:"apk-应用名称查询",content:`通过包名查询应用名称 状态：停止服务
地址：https://apkname.u2sb.top
项目：https://github.com/u2sb/ApkPackageName
文档：编写中...`}]},{path:"/OpenSw/hexo-tag-mmedia/",title:"hexo-tag-mmedia",pathLocale:"/",contents:[{header:"",slug:"",content:`Note
此插件已不再维护，不建议使用本插件。`},{header:"插件说明",slug:"插件说明",content:"hexo 媒体插入插件"}]},{path:"/OpenSw/hexo-tag-mmedia/aplayer.html",title:"Aplayer",pathLocale:"/",contents:[{header:"介绍",slug:"介绍",content:"可以插入 aplayer 标签"},{header:"使用",slug:"使用",content:`{% mmedia "aplayer" "name:songName" "url:a.mp3" %}
{% mmedias "aplayer" "autoplay:false" %}
{ "volume": 0.8, "audio": [ { "name": "name1", "artist": "artist1", "url": "url1.mp3", "cover": "cover1.jpg", "lrc": "lrc1.lrc", "theme": "#ebd0c2" }, { "name": "name2", "artist": "artist2", "url": "url2.mp3", "cover": "cover2.jpg", "lrc": "lrc2.lrc", "theme": "#46718b" } ]
}
{% endmmedias %}`},{header:"参数",slug:"参数",content:`此部分请熟读 APlayer 文档 使用 : 或 = 分割。 详细参数表： 参数
默认
解释 name
-
audio name artist
-
audio artist url
-
audio url cover
-
audio cover lrc
-
audio lrc theme
-
audio theme type
auto
audio type 可选 'auto', 'hls', 'normal' autoplay
false
autoplay loop
'all'
player loop play, values: 'all', 'one', 'none' order
'list'
player play order, values: 'list', 'random' volume
0.7
default volume, tlistMaxHeight
-
list max height 不在表格内的参数请使用下面 JSON 类型的参数。`},{header:"JSON 参数",slug:"json-参数",content:`mmedia 插件允许在 contents 部分使用 JSON 编写配置，由于允许使用 JSON5，此项配置几乎与 APlayer 完全一致。
详情请见上方示例。`},{header:"配置",slug:"配置",content:`默认配置可写入 _config.yml 下
mmedia: aplayer: js: https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.js css: https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.css default: contents:`}]},{path:"/OpenSw/hexo-tag-mmedia/artplayer.html",title:"ArtPlayer",pathLocale:"/",contents:[{header:"介绍",slug:"介绍",content:"可以插入 artplayer 标签。"},{header:"使用",slug:"使用",content:`{% mmedia "artplayer" "url:https://dandoc.u2sb.com/video/%E5%AE%89%E8%A3%85/1-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E8%A3%85.mp4" %}
{% mmedias "artplayer" "flv:" %}
{ url: "https://dandoc.u2sb.com/video/%E5%AE%89%E8%A3%85/1-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E8%A3%85.mp4"
}
{% endmmedias %}`},{header:"参数",slug:"参数",content:`此部分请熟读 ArtPlayer 文档 使用 : 或 = 分割。 详细参数表： 参数
默认
解释 url
-
url title
-
title poster
-
poster type
-
type autoplay
false
video autoplay loop
false
video loop volume
0.7
default volume style
-
style 上面有一个比较特殊的参数 flv，这里单独解释一下，这个参数是用于引入其他 js 文件的，目前支持的有：hls dash shaka_dash flv webtorrent，上述参数可多个一起使用，如果后面带有 js 地址，将直接使用，否则将使用 _config.yml 配置或插件默认配置，如：
{% mmedia "artplayer" "flv:" "url:a.flv" %}
{% mmedias "artplayer" "flv:" "hls:https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js" %}
{ ...
}
{% endmmedias %}
不在表格内的参数请使用下面 JSON 类型的参数。`},{header:"JSON 参数",slug:"json-参数",content:`mmedia 插件允许在 contents 部分使用 JSON 编写配置，由于允许使用 JSON5，此项配置几乎与 ArtPlayer 完全一致。
详情请见上方示例。`},{header:"配置",slug:"配置",content:`默认配置可写入 _config.yml 下
mmedia: artplayer: js: https://cdn.jsdelivr.net/npm/artplayer@3/dist/artplayer.js hls_js: https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js dash_js: https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js shaka_dash_js: https://cdn.jsdelivr.net/npm/shaka-player/dist/shaka-player.compiled.js flv_js: https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js webtorrent_js: https://cdn.jsdelivr.net/npm/webtorrent/webtorrent.min.js default: style: width:100%;height:650px;max-width:1200px;center contents: autoSize: true autoMini: true fullscreen: true fullscreenWeb: true`}]},{path:"/OpenSw/hexo-tag-mmedia/audio.html",title:"Audio",pathLocale:"/",contents:[{header:"介绍",slug:"介绍",content:"可以插入 html5 原生 audio 标签"},{header:"使用",slug:"使用",content:`{% mmedia "audio" "src:a.mp3" %}
{% mmedia "audio" "src:https://baidu.com/a.mp3" "autoplay:true" %}`},{header:"参数",slug:"参数",content:`此部分请熟读 Audio 相关介绍 使用 : 或 = 分割。
所有 <audio> 标签的原生参数均可添加，只要能写进去就可以。
具体能否实现相关标准，取决于客户端浏览器。`},{header:"JSON 参数",slug:"json-参数",content:"mmedia 插件允许在 contents 部分使用 JSON 编写配置，使用 JSON5 标准。"},{header:"配置",slug:"配置",content:`默认配置可写入 _config.yml 下
mmedia: audio: default: autoplay: true key: vaule`}]},{path:"/OpenSw/hexo-tag-mmedia/bilibili.html",title:"哔哩哔哩动画",pathLocale:"/",contents:[{header:"介绍",slug:"介绍",content:"可以插入 bilibili 视频"},{header:"使用",slug:"使用",content:`{% mmedia "bilibili" "bvid:BV1br4y1P7ND" %}
{% mmedia "bilibili" "bvid:BV1br4y1P7ND" "danmaku:false" %}`},{header:"参数",slug:"参数",content:`使用 : 或 = 分割。 详细参数表： 参数
默认
解释 aid
-
aid bvid
-
bvid，与 aid 同时出现时以 bvid 为准 page
1
page danmaku
true
是否有弹幕 ture or false allowfullscreen
allowfullscreen
允许全屏， allowfullscreen 或 true 允许，其他选项不允许 sandbox
见 配置
iframe sandbox width
100%
css 属性 max_width
850px
css 属性 margin
auto
css 属性`},{header:"JSON 参数",slug:"json-参数",content:"mmedia 插件允许在 contents 部分使用 JSON 编写配置，使用 JSON5 标准。"},{header:"配置",slug:"配置",content:`默认配置可写入 _config.yml 下
mmedia: bilibili: default: page: 1 danmaku: true allowfullscreen: allowfullscreen sandbox: allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups width: 100% max_width: 850px margin: auto`}]},{path:"/OpenSw/hexo-tag-mmedia/developer-doc.html",title:"开发文档",pathLocale:"/",contents:[{header:"",slug:"",content:"本项目接受以 pr 的方式贡献代码。"},{header:"开发基础",slug:"开发基础",content:`Hexo API
JavaScript
TypeScript
本项目使用 pnpm 作为包管理工具，使用 TypeScript 作为编程语言，Gulp 作为编译引擎。
开发前需安装 node 和 pnpm。`},{header:"开发",slug:"开发",content:""},{header:"fork 仓库",slug:"fork-仓库",content:`需要先 fork 仓库，然后克隆到本地 Tips
必须克隆到本地，不能在线修改`},{header:"全局安装 gulp-cli",slug:"全局安装-gulp-cli",content:"npm install --global gulp-cli"},{header:"安装依赖",slug:"安装依赖",content:"pnpm install"},{header:"修改",slug:"修改",content:"修改或增加插件，如增加插件，请仔细阅读源码，看已有的插件是怎么编写的。"},{header:"编译",slug:"编译",content:"pnpm run build"},{header:"测试",slug:"测试",content:`可以本地创建一个 hexo 博客测试，推荐使用 pnpm 的本地链接，在博客内安装插件
pnpm add ../hexo-tag-mmedia/ pnpm install`},{header:"提交 PR",slug:"提交-pr",content:"提交到仓库，并提 PR"}]},{path:"/OpenSw/hexo-tag-mmedia/dplayer.html",title:"Dplayer",pathLocale:"/",contents:[{header:"介绍",slug:"介绍",content:"可以插入 dplayer 标签。"},{header:"使用",slug:"使用",content:`{% mmedia "dplayer" "url:a.mp4" %}
{% mmedias "dplayer" "flv:" "url:https://dandoc.u2sb.com/video/%E5%AE%89%E8%A3%85/1-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E8%A3%85.mp4" %}
{ "contextmenu": [ { text: "custom1", link: "https://github.com/DIYgod/DPlayer" } ]
}
{% endmmedias %}`},{header:"参数",slug:"参数",content:`此部分请熟读 DPlayer 文档 使用 : 或 = 分割。 详细参数表： 参数
默认
解释 url
-
video.url pic
-
video.pic thumbnails
-
video.thumbnails type
auto
video.type, values: 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' or other autoplay
false
video autoplay loop
false
video loop logo
-
showing logo in the top left corner, you can adjust its size and position by CSS volume
0.7
default volume screenshot
false
enable screenshot, if true, video and video poster must enable Cross-Origin id
-
danmaku.id, danmaku pool id, it must be unique api
-
danmaku.api, see Danmaku API 上面有一个比较特殊的参数 flv，这里单独解释一下，这个参数是用于引入其他 js 文件的，目前支持的有：hls dash shaka_dash flv webtorrent，上述参数可多个一起使用，如果后面带有 js 地址，将直接使用，否则将使用 _config.yml 配置或插件默认配置，如：
{% mmedia "dplayer" "flv:" "url:a.flv" %}
{% mmedias "dplayer" "flv:" "hls:https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js" %}
{ video: { quality: [ { name: 'HLS', url: 'a.m3u8', type: 'hls', }, { name: 'FLV', url: 'demo.mp4', type: 'flv', }, ], efaultQuality: 0, ic: 'demo.png', thumbnails: 'thumbnails.jpg', },
}
{% endmmedias %}
不在表格内的参数请使用下面 JSON 类型的参数。`},{header:"JSON 参数",slug:"json-参数",content:`mmedia 插件允许在 contents 部分使用 JSON 编写配置，由于允许使用 JSON5，此项配置几乎与 DPlayer 完全一致。
详情请见上方示例。`},{header:"配置",slug:"配置",content:`默认配置可写入 _config.yml 下
mmedia: dplayer: js: https://cdn.jsdelivr.net/npm/dplayer@1/dist/DPlayer.min.js hls_js: https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js dash_js: https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js shaka_dash_js: https://cdn.jsdelivr.net/npm/shaka-player/dist/shaka-player.compiled.js flv_js: https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js webtorrent_js: https://cdn.jsdelivr.net/npm/webtorrent/webtorrent.min.js default: contents:`}]},{path:"/OpenSw/hexo-tag-mmedia/install.html",title:"安装和基本介绍",pathLocale:"/",contents:[{header:"简介",slug:"简介",content:"hexo-tag-mmedia 是一个能在 Hexo 中快速插入媒体标签的插件，目前支持的标签和平台有（持续开发中）： Audio Video Aplayer MetingJS Dplayer 哔哩哔哩 西瓜视频 YouTube ArtPlayer"},{header:"DEMO",slug:"demo",content:"http://demo.hexo-tag-mmedia.u2sb.com/"},{header:"使用",slug:"使用",content:"hexo-tag-mmedia 插件和其他 hexo 插件使用方法类似，诸如 如何启用一个插件 之类的共性问题就不再赘述了，只说 hexo-tag-mmedia 相关的。"},{header:"安装",slug:"安装",content:"npm install hexo-tag-mmedia@1 --save pnpm add hexo-tag-mmedia@1 --save yarn add hexo-tag-mmedia@1 --save"},{header:"配置",slug:"配置",content:`如需修改配置，请务必不要保留空选项，空选项会覆盖默认配置，严重可能直接导致插件无法使用。
单项使用的文档中会详细讲解对应的使用文档，请自行阅读后再做配置。 Note
下面只是示例，请勿全盘复制，请看清后面的讲解后组织自己的配置文件。 Details
持续更新中，详情见详细文档和 源码
mmedia: audio: default: video: default: aplayer: js: https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.js css: https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.css default: contents: meting: js: https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js api: default: dplayer: js: https://cdn.jsdelivr.net/npm/dplayer@1/dist/DPlayer.min.js hls_js: https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js dash_js: https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js shaka_dash_js: https://cdn.jsdelivr.net/npm/shaka-player/dist/shaka-player.compiled.js flv_js: https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js webtorrent_js: https://cdn.jsdelivr.net/npm/webtorrent/webtorrent.min.js default: contents: bilibili: default: page: 1 danmaku: true allowfullscreen: allowfullscreen sandbox: allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups width: 100% max_width: 850px margin: auto xigua: default: autoplay: false startTime: 0 allowfullscreen: allowfullscreen sandbox: allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups width: 100% max_width: 850px margin: auto`},{header:"解释",slug:"解释",content:`配置项较多目的是给予最大的自定义权限，默认情况下不做配置也可以使用。
配置文件放在博客根目录的 _config.yml 中
default 为默认配置，在 _config.yml 中填写就不需要在每个标签全部写入了，所有允许在 mmedia 标签上写入的配置项，均可在 default 下配置。
default 下 contents 项，用于设置 JSON 类型的默认配置，注意要使用 yaml 格式写默认配置，以下是几个示例。`},{header:"示例",slug:"示例",content:`如无法读懂下面的示例，请阅读后面的文档后再回来看。
Details
修改 Aplayer 的 js 文件：
mmedia: aplayer: js: https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js css: https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css
将 Aplayer 的 JS 和 CSS 放入博客目录：
首先请下载 APlayer.min.js 和 APlayer.min.js 文件，放入博客下 source/assets/js/ 和 source/assets/css/ 下（路径只是示例）
mmedia: aplayer: js: /assets/js/APlayer.min.js css: /assets/css/APlayer.min.css
Meting 修改循环方式为随机循环：
mmedia: meting: default: loop: all order: random
Dplayer 修改弹幕 API：
mmedia: dplayer: default: contents: danmaku: api: https://api.prprpr.me/dplayer/v3/`},{header:"使用",slug:"使用-1",content:`下面只是快速示例，请阅读后面的文档后再回来看。示例只是为了展示配置方式瞎写的，一些配置不一定正确，不要照抄。
Details
{% mmedia "audio" "src:a.mp3" %}
{% mmedia "aplayer" "name:songName" "url:a.mp3" %}
{% mmedia "meting" "auto=https://y.qq.com/n/yqq/song/001RGrEX3ija5X.html" %}
{% mmedia "bilibili" "bvid:BV1hb4y1R7xf" %}
{% mmedia "xigua" "xid=6925997698269053453" %}
{% mmedias "dplayer" "flv:" "url:https://dandoc.u2sb.com/video/%E5%AE%89%E8%A3%85/1-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E8%A3%85.mp4" %}
{ "contextmenu": [ { text: "custom1", link: "https://github.com/DIYgod/DPlayer" } ]
}
{% endmmedias %} {% mmedias "aplayer" "autoplay:false" %}
{ "volume": 0.8, "audio": [ { "name": "name1", "artist": "artist1", "url": "url1.mp3", "cover": "cover1.jpg", "lrc": "lrc1.lrc", "theme": "#ebd0c2" }, { "name": "name2", "artist": "artist2", "url": "url2.mp3", "cover": "cover2.jpg", "lrc": "lrc2.lrc", "theme": "#46718b" } ]
}
{% endmmedias %}`},{header:"使用原则",slug:"使用原则",content:`Tips
必看`},{header:"规则",slug:"规则",content:""},{header:"标签",slug:"标签",content:`markdown 内可以使用两种标签作为插件，分别是 mmedia 和 mmedias，使用方式为：
{% mmedia %}
{% mmedias %}
{% endmmedias %}
只使用 args 作为传参方式时，两种标签均可使用，当需要使用 contents 传参时，只能使用 mmedias。
后面第一个参数用于标记标签，可选（以详细文档为主，持续更新中）：
audio video meting aplayer dplayer bilibili xigua
再后面的参数将直接作为 args 参数直接传入插件。`},{header:"参数",slug:"参数",content:`传入标签的参数可以写入到三个位置，分别为：_config.yml，args，contents，其中只有部分插件可使用 contents 配置，具体看详细文档，如有冲突项，覆盖规则为（后面的会被前面发覆盖）：
contents -> args -> _config.yml -> 插件默认
写入到 args 上的参数，有两种写法，分别是使用 : 和 = 分割，两种写法是等效的，在遇到第一个 : 或 = 时会自动分割，例如：
{% mmedia "bilibili" "bvid:BV1hb4y1R7xf" %} {% mmedia "bilibili" "bvid=BV1hb4y1R7xf" %}
两种写法是等效的。
如果遇到布尔类型的参数，可以简写
{% mmedia "audio" "src:a.mp3" "autoplay:" %}
{% mmedia "audio" "src:a.mp3" "autoplay:true" %}
两种写法等效，但需要注意，: 或 = 一定不能省略。`},{header:"JSON 传参",slug:"json-传参",content:`支持 JSON 方式传参，其中 JSON 为 JSON5 规范。
示例：
{% mmedias "aplayer" "autoplay:false" %}
{ "volume": 0.8, "audio": [ { "name": "name1", "artist": "artist1", "url": "url1.mp3", "cover": "cover1.jpg", "lrc": "lrc1.lrc", "theme": "#ebd0c2" }, { "name": "name2", "artist": "artist2", "url": "url2.mp3", "cover": "cover2.jpg", "lrc": "lrc2.lrc", "theme": "#46718b" } ]
}
{% endmmedias %}`},{header:"从 0.x 升级",slug:"从-0-x-升级",content:`考虑到一部分用户 0.x 版本使用时间较长，迁移成本较高，遂将 0.x 单独发布为一个包，可以用 1.x 版本同时安装。
详情见 0.X 版本。
虽然能兼容使用，但建议及时修改文章到 1.x ，0.x 版本已不再继续维护。`},{header:"开发者要说的几句话",slug:"开发者要说的几句话",content:`这个插件并不完美，如果使用中遇到问题，请熟读文档，如果还是有问题，请再读一遍文档，还是有问题，请向开发者反馈。
关于 JS 重复请求，请升级客户端浏览器版本，两个一样的 JS，只会请求一次，暂时没有想到什么好的办法，如果有，请及时告诉我。
关于 pjax，这东西真的不想去做兼容（其实也不难），如果以后闲得无聊的话，可能会做，但不要催我关于 pjax 兼容的问题。
不要局限于示例，放开手脚，大胆去尝试，这个插件的开放性真的非常的大。`}]},{path:"/OpenSw/hexo-tag-mmedia/meting.html",title:"Meting",pathLocale:"/",contents:[{header:"介绍",slug:"介绍",content:"可以插入 MetingJS 标签。"},{header:"使用",slug:"使用",content:`{% mmedia "meting" "auto=https://y.qq.com/n/yqq/song/001RGrEX3ija5X.html" %}
{% mmedia "meting" "server=netease"	"type=playlist"	"id=60198" %}`},{header:"参数",slug:"参数",content:`此部分请熟读 MetingJS 文档 使用 : 或 = 分割。
所有 <meting-js> 标签的参数均可添加，只要能写进去就可以。`},{header:"JSON 参数",slug:"json-参数",content:`mmedia 插件允许在 contents 部分使用 JSON 编写配置，使用 JSON5 标准。
{% mmedias "meting" "server=netease" %}
{ type:"playlist", id:"60198"
}
{% endmmedias %}`},{header:"配置",slug:"配置",content:`默认配置可写入 _config.yml 下
mmedia: meting: js: https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js api: http://example.com/api.php default: key: vaule`}]},{path:"/OpenSw/hexo-tag-mmedia/version0.html",title:"0.X 版本",pathLocale:"/",contents:[{header:"",slug:"",content:`Note
0.x 版本已停止更新，只做兼容和过渡使用，请尽快更新 1.x 版本。
如果有人愿意接手 0.x 版维护，请及时联系我。`},{header:"简介",slug:"简介",content:`hexo-tag-mmedia 是 MonoLogueChi 自用的一个媒体插入插件，在添加部分功能后发布给大家使用。
支持的平台 Aplayer Meting Dplayer 哔哩哔哩 西瓜视频 YouTube ArtPlayer`},{header:"使用",slug:"使用",content:`本插件与以下插件冲突 hexo-tag-aplayer
hexo-tag-dplayer
hexo-tag-bilibili 如有安装，使用前请卸载。
npm uninstall hexo-tag-aplayer
npm uninstall hexo-tag-dplayer
npm uninstall hexo-tag-bilibili`},{header:"安装",slug:"安装",content:"npm install hexo-tag-mmedia-0.x --save"},{header:"_config.yml",slug:"config-yml",content:`如果不需要自定义设置，不需要修改 _config.yml，直接使用即可
mmedia: aplayer: cdn: https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js style_cdn: https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css default: meting: cdn: https://cdn.jsdelivr.net/npm/meting/dist/Meting.min.js api: default: dplayer: cdn: https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js style_cdn: https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.css hls_cdn: https://cdn.jsdelivr.net/npm/hls.j/dist/hls.min.js dash_cdn: https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js shaka_dash_cdn: https://cdn.jsdelivr.net/npm/shaka-player/dist/shaka-player.compiled.js flv_cdn: https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js webtorrent_cdn: https://cdn.jsdelivr.net/npm/webtorrent/webtorrent.min.js default:
default 项下可配置默认选项，例如：
meting: cdn: https://cdn.jsdelivr.net/npm/meting/dist/Meting.min.js api: default: order: random`},{header:"MetingJS",slug:"metingjs",content:`示例：
{% meting "001Mf4Ic1aNYYK" "tencent" "album" "order:random" "listmaxheight:180px" %} {% meting "auto:https://y.qq.com/n/yqq/song/001RGrEX3ija5X.html" "autoplay" %}
参数：
基本兼容 hexo-tag-aplayer，绝大部分可以直接从 hexo-tag-aplayer 迁移，参数形式为 "option:vaule"，不懂的可以参考 MetingJS 配置项
默认
描述 id
必须
音乐 id，第一个参数 server
必须
音乐平台，第二个参数，可选：netease, tencent, kugou, xiami, baidu type
必须
音乐类型，第三个参数，可选：song, playlist, album search, artist auto
无
有 auto 选项时前面参数不需要填写，否则为必填，见示例 2 autoplay
false
自动播放，带有此参数表示 true，不带表示 false fixed
false
吸底模式，带有此参数表示 true，不带表示 false mini
false
迷你模式，带有此参数表示 true，不带表示 false listfolded
false
默认折叠列表，带有此参数表示 true，不带表示 false mutex
true
互斥，如不需互斥 "mutex:false" theme
#2980b9
主题颜色 loop
all
循环模式 ，可选值 all, one, none order
list
播放顺序，可选值 list, random preload
auto
预加载模式 ，可选 none, metadata, auto volume
0.7
默认音量，可选 0-1 lrctype
0
歌词类型 listmaxheight
340px
播放器最大高度 storagename
metingjs 更多参数可以以 "option:vaule" 的格式增加。
后端服务器可以使用官方后端，也可以使用我自己写的后端服务器 MetingJS.Server 自建服务。`},{header:"Aplayer",slug:"aplayer",content:`{% aplayer "Caffeine" "Jeff Williams" "caffeine.mp3" "picture.jpg" "lrc:caffeine.txt" %} {% aplayer title author url [picture_url, narrow, autoplay, width:xxx, lrc:xxx] %} 配置项
默认
描述 title
必须
曲目标题，第一个参数 author
必须
曲目作者，第二个参数 url
必须
音乐文件地址 picture_url 音乐对应的图片地址 narrow
false
袖珍风格，带有此参数表示 true，不带表示 false autoplay
false
自动播放，带有此参数表示 true，不带表示 false width:xxx
100%
播放器宽度 lrc 歌词地址 AplayerList（不推荐使用） 警告
此模式测试不够完善，如果遇到问题请提 issue {% aplayerlist %}
{ "narrow": false, // Optional, narrow style "autoplay": true, // Optional, autoplay song(s), not supported by mobile browsers "mode": "random", // Optional, play mode, can be \`random\` \`single\` \`circulation\`(loop) \`order\`(no loop), default: \`circulation\` "showlrc": 3, // Optional, show lrc, can be 1, 2, 3 "mutex": true, // Optional, pause other players when this player playing "theme": "#e6d0b2", // Optional, theme color, default: #b7daff "preload": "metadata", // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto' "listmaxheight": "513px", // Optional, max height of play list "music": [ { "title": "CoCo", "author": "Jeff Williams", "url": "caffeine.mp3", "pic": "caffeine.jpeg", "lrc": "caffeine.txt" }, { "title": "アイロニ", "author": "鹿乃", "url": "irony.mp3", "pic": "irony.jpg" } ]
}
{% endaplayerlist %}`},{header:"Dplayer",slug:"dplayer",content:`{% dplayer "url:KeyCastOW.mp4" "id:DDEC4F882C0B66FAD" "addition:addition0" "addition:addition1" %}
非必填项，如果不清楚请不要填写。 配置项
默认
描述 url
必填
视频地址 pic 封面 thumbnails 缩略图 type
auto
视频格式，可选 auto hls dash shakaDash flv webtorrent id 弹幕 id，建议使用视频的 CRC 或 MD5，再或使用 UUID api 弹幕 api token maximum
10000
最大弹幕数 user
DIYgod
弹幕发送用户名 bottom
15%
弹幕底端距离 unlimited
true addition 额外弹幕，可重叠加多个 suburl 字幕地址 subtype
webvtt
字幕类型，可选 webvtt ass subbottom
40px
字幕底端距离 subfontSize
20px
字幕字体大小 subcolor
#fff
字幕字体颜色 autoplay
false
自动播放，带有此参数表示 true，不带表示 false loop
false
循环，带有此参数表示 true，不带表示 false screenshot
false
截屏按钮，带有此参数表示 true，不带表示 false，此参数会造成跨域 hotkey
true
热键控制 mutex
true
互斥 theme
#b7daff
主题颜色 lang 语言，不指定会根据浏览器环境自动识别 preload
auto
预加载，可选 none metadata auto logo logo 地址 volume
0.7
默认音量 0-1 contextmenu 右键菜单，可叠加 highlight 高光点，可叠加多个，例如 "highlight:{time: 20, text: '这是第 20 秒'}" code 额外代码，不懂不要填，需要写的请参考源码`},{header:"哔哩哔哩",slug:"哔哩哔哩",content:`{% bilibili "aid:60016166" "quality:high" "danmaku" "allowfullscreen" %} 配置项
默认
描述 bvid 视频 bv 号，bvid、aid 和 av 必填一项，推荐使用 bvid aid 视频 av 号 av 视频链接地址，不要带分 P 信息，与 aid 同时填写会被覆盖，不推荐使用 page
1
分 P，填写 av 时才会生效 quality
low
视频质量，可选 high low (此选项已失效) danmaku
false
开启弹幕，带有此参数表示 true，不带表示 false allowfullscreen
true
是否允许全屏 width
100%
宽度 max_width
800px
最大宽度 margin
auto
位置，css 属性，例："margin:auto" "margin:0 0 0 auto"`},{header:"西瓜视频",slug:"西瓜视频",content:`{% ixigua “xid:6905586791114342925” "autoplay" "startTime:0" %} 配置项
默认
描述 xid 必填，就是 url 里的那一串数字 id 预留，目前无需填写 autoplay
false
自动播放 startTime
0
开始时间 allowfullscreen
true
是否允许全屏 width
100%
宽度 max_width
800px
最大宽度 margin
auto
位置，css 属性，例："margin:auto" "margin:0 0 0 auto"`},{header:"ArtPlayer",slug:"artplayer",content:"暂不支持，开发中..."},{header:"YouTube",slug:"youtube",content:"暂不支持，开发中..."},{header:"反馈",slug:"反馈",content:`GitHub Issue
QQ 群 159891059`}]},{path:"/OpenSw/hexo-tag-mmedia/video.html",title:"Video",pathLocale:"/",contents:[{header:"介绍",slug:"介绍",content:"可以插入 html5 原生 video 标签"},{header:"使用",slug:"使用",content:`{% mmedia "video" "src:a.mp4" %}
{% mmedia "video" "src:https://baidu.com/a.mp4" "autoplay:true" %}`},{header:"参数",slug:"参数",content:`此部分请熟读 Video 相关介绍 使用 : 或 = 分割。
所有 <video> 标签的原生参数均可添加，只要能写进去就可以。
具体能否实现相关标准，取决于客户端浏览器。`},{header:"JSON 参数",slug:"json-参数",content:"mmedia 插件允许在 contents 部分使用 JSON 编写配置，使用 JSON5 标准。"},{header:"配置",slug:"配置",content:`默认配置可写入 _config.yml 下
mmedia: video: default: autoplay: true key: vaule`}]},{path:"/OpenSw/hexo-tag-mmedia/xigua.html",title:"西瓜视频",pathLocale:"/",contents:[{header:"介绍",slug:"介绍",content:"可以插入 西瓜 视频"},{header:"使用",slug:"使用",content:`{% mmedia "xigua" "xid=6925997698269053453" %}
{% mmedia "xigua" "xid:6925997698269053453" "autoplay:true" %}`},{header:"参数",slug:"参数",content:`使用 : 或 = 分割。 详细参数表： 参数
默认
解释 xid
-
西瓜视频的 ID，就是那一串数字 id
-
一般情况下不需要填写 autoplay
false
autoplay startTime
0
开始时间，秒 allowfullscreen
allowfullscreen
允许全屏， allowfullscreen 或 true 允许，其他选项不允许 sandbox
见 配置
iframe sandbox width
100%
css 属性 max_width
850px
css 属性 margin
auto
css 属性`},{header:"JSON 参数",slug:"json-参数",content:"mmedia 插件允许在 contents 部分使用 JSON 编写配置，使用 JSON5 标准。"},{header:"配置",slug:"配置",content:`默认配置可写入 _config.yml 下
mmedia: xigua: default: autoplay: false startTime: 0 allowfullscreen: allowfullscreen sandbox: allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups width: 100% max_width: 850px margin: auto`}]},{path:"/OpenSw/vuepress-plugin-smplayer/",title:"vuepress-plugin-smplayer",pathLocale:"/",contents:[{header:"",slug:"",content:`Note
本文档适用于 2.x 版本，1.x 版本文档详见 v1`},{header:"介绍",slug:"介绍",content:`一个能在 Vuepress 中快速插入媒体标签的插件
包括但不仅限于以下播放器： Aplayer MetingJS Dplayer 哔哩哔哩 西瓜视频 YouTube ArtPlayer xgplayer`},{header:"感谢",slug:"感谢",content:`本项目依赖以下项目 Aplayer
MetingJS
Dplayer
ArtPlayer
xgplayer`}]},{path:"/OpenSw/vuepress-plugin-smplayer/aplayer.html",title:"Aplayer",pathLocale:"/",contents:[{header:"介绍",slug:"介绍",content:"可以插入 aplayer 标签"},{header:"使用和示例",slug:"使用和示例",content:""},{header:"参数",slug:"参数",content:"此部分请熟读 APlayer 文档 src 传参，具体参数见 APlayer 文档，示例见下方 DEMO。"},{header:"基本使用",slug:"基本使用",content:`<ClientOnly> <APlayer :src="aplayer" />
</ClientOnly> <script> export default { data() { return { aplayer: { audio: [ { name: "年轻人要热爱祖国", artist: "音阙诗听/赵方婧", url: "/assets/audio/年轻人要热爱祖国.mp3", cover: "https://sm.sm9.top/api/music?server=Tencent&type=pic&id=001gv6xI4BNGiP", lrc: "/assets/audio/年轻人要热爱祖国.lrc", }, ], }, }; }, };
<\/script>`},{header:"customType",slug:"customtype",content:`自定义类型，方法见示例 <ClientOnly> <APlayer :src="aplayerCustomType" />
</ClientOnly> <script> export default { data() { return { aplayerCustomType: { audio: [ { name: "年轻人要热爱祖国", artist: "音阙诗听/赵方婧", url: "/assets/audio/hls/年轻人要热爱祖国.m3u8", type: "customHls", cover: "https://sm.sm9.top/api/music?server=Tencent&type=pic&id=001gv6xI4BNGiP", lrc: "/assets/audio/年轻人要热爱祖国.lrc", }, ], customAudioType: { customHls: function (audioElement, audio, player) { import("hls.js").then(({ default: Hls }) => { if (Hls.isSupported()) { const hls = new Hls(); hls.loadSource(audio.url); hls.attachMedia(audioElement); player.on("destroy", function () { hls.destroy(); }); } else if ( audioElement.canPlayType("application/x-mpegURL") || audioElement.canPlayType("application/vnd.apple.mpegURL") ) { audioElement.src = audio.url; } else { player.notice("Error: HLS is not supported."); } }); }, }, }, }; }, };
<\/script>`},{header:"混合列表",slug:"混合列表",content:`<ClientOnly> <APlayer :src="aplayer2" />
</ClientOnly> <script> export default { data() { return { aplayer2: { audio: [ { name: "年轻人要热爱祖国", artist: "音阙诗听/赵方婧", url: "/assets/audio/年轻人要热爱祖国.mp3", cover: "https://sm.sm9.top/api/music?server=Tencent&type=pic&id=001gv6xI4BNGiP", lrc: "/assets/audio/年轻人要热爱祖国.lrc", }, { name: "年轻人要热爱祖国", artist: "音阙诗听/赵方婧", url: "/assets/audio/年轻人要热爱祖国.mp3", cover: "https://sm.sm9.top/api/music?server=Tencent&type=pic&id=001gv6xI4BNGiP", lrc: "/assets/audio/年轻人要热爱祖国.lrc", }, ], }, }; }, };
<\/script>`},{header:"配置",slug:"配置",content:`主题下插件配置为默认配置，每个 <APlayer /> 标签下的设置会覆盖默认配置。
import { defineUserConfig } from "vuepress";
import smplayer from "./plugins/smplayer"; export default defineUserConfig({ plugins: [ smplayer({ aplayer: { src: { lrcType: 3, }, }, }), ],
});`}]},{path:"/OpenSw/vuepress-plugin-smplayer/artplayer.html",title:"ArtPlayer",pathLocale:"/",contents:[{header:"",slug:"",content:`Tips
本插件不再提供 ArtPlayer 快速接入功能，并建议用户使用 js 直接引入，详情见下方示例。 Tips
详细配置说明见 ArtPlayer 文档`},{header:"安装",slug:"安装",content:"npm install -D artplayer pnpm add -D artplayer yarn add -D artplayer"},{header:"使用和示例",slug:"使用和示例",content:""},{header:"基本使用",slug:"基本使用",content:`<div ref="art0"></div> <script> export default { data() { return { art0: null, }; }, mounted() { this.$nextTick(() => { Promise.all([ import("artplayer"), import("artplayer-plugin-danmuku"), ]).then( ([{ default: ArtPlayer }, { default: artplayerPluginDanmuku }]) => { this.art0 = new ArtPlayer({ fullscreen: true, autoSize: true, setting: true, whitelist: ["*"], container: this.$refs.art0, url: "/assets/video/s_720.mp4", }); } ); // 设置样式 this.$refs.art0.style.width = "100%"; this.$refs.art0.style.height = (this.$refs.art0.scrollWidth / 16) * 9 + "px"; }); }, beforeUnmount() { if (this.art0 && this.art0.destroy) { this.art0.destroy(false); } }, };
<\/script>`},{header:"弹幕",slug:"弹幕",content:'Tips\n需安装 artplayer-plugin-danmuku\nnpm install -D artplayer-plugin-danmuku <script> const danmakuId = "cENuyhsT2rMOCohK"; const danmakuApi = "https://danmu.u2sb.com/api/artplayer/v1"; const bilibiliDanmaku = `${danmakuApi}/bilibili/BV1zt411t79A.json`; export default { data() { return { art1: null, }; }, mounted() { this.$nextTick(() => { Promise.all([ import("artplayer"), import("artplayer-plugin-danmuku"), ]).then( ([{ default: ArtPlayer }, { default: artplayerPluginDanmuku }]) => { this.art1 = new ArtPlayer({ fullscreen: true, autoSize: true, setting: true, whitelist: ["*"], container: this.$refs.art1, url: "/assets/video/s_720.mp4", plugins: [ artplayerPluginDanmuku({ danmuku: () => Promise.allSettled([ fetch(bilibiliDanmaku).then((res) => res.json()), fetch(`${danmakuApi}/${danmakuId}.json`).then((res) => res.json() ), ]) .then((res) => res .filter((r) => r.status === "fulfilled") .map((r) => r.value) ) .then((res) => res .filter( (r) => r["code"] !== undefined && r["code"] === 0 && r["data"] !== undefined && r["data"].length > 0 ) .reduce((acc, cur) => acc.concat(cur["data"]), []) ), speed: 5, // 弹幕持续时间，单位秒，范围在[1 ~ 10] opacity: 1, // 弹幕透明度，范围在[0 ~ 1] fontSize: 25, // 字体大小，支持数字和百分比 color: "#FFFFFF", // 默认字体颜色 mode: 0, // 默认模式，0-滚动，1-静止 margin: [10, "25%"], // 弹幕上下边距，支持数字和百分比 antiOverlap: true, // 是否防重叠 useWorker: true, // 是否使用 web worker synchronousPlayback: false, // 是否同步到播放速度 filter: (danmu) => danmu.text.length < 50, // 弹幕过滤函数，返回 true 则可以发送 lockTime: 5, // 输入框锁定时间，单位秒，范围在[1 ~ 60] maxLength: 100, // 输入框最大可输入的字数，范围在[0 ~ 500] minWidth: 200, // 输入框最小宽度，范围在[0 ~ 500]，填 0 则为无限制 maxWidth: 400, // 输入框最大宽度，范围在[0 ~ Infinity]，填 0 则为 100% 宽度 theme: "dark", // 输入框自定义挂载时的主题色，默认为 dark，可以选填亮色 light beforeEmit: (danmu) => !!danmu.text.trim(), // 发送弹幕前的自定义校验，返回 true 则可以发送 }), ], }); this.art1.on("artplayerPluginDanmuku:emit", (danmu) => { fetch(danmakuApi, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json", }, body: JSON.stringify({ Id: danmakuId, Referer: window.location.origin + window.location.pathname, ...danmu, }), }); }); } ); // 设置样式 this.$refs.art1.style.width = "100%"; this.$refs.art1.style.height = (this.$refs.art1.scrollWidth / 16) * 9 + "px"; }); }, beforeUnmount() { if (this.art1 && this.art1.destroy) { this.art1.destroy(false); } }, };\n<\/script>'},{header:"HLS",slug:"hls",content:`Tips
需安装 hls.js
npm install -D hls.js <div ref="art2"></div> <script> export default { data() { return { art2: null, }; }, mounted() { this.$nextTick(() => { Promise.all([import("artplayer")]).then(([{ default: ArtPlayer }]) => { this.art2 = new ArtPlayer({ fullscreen: true, autoSize: true, setting: true, whitelist: ["*"], container: this.$refs.art2, url: "/assets/video/dash/master.m3u8", type: "customHls", customType: { customHls: function (mediaElement, src, player) { import("hls.js").then(({ default: Hls }) => { if ( mediaElement.canPlayType("application/x-mpegURL") || mediaElement.canPlayType("application/vnd.apple.mpegURL") ) { mediaElement.src = src; } else if (Hls.isSupported()) { const hls = new Hls(); hls.attachMedia(mediaElement); hls.on(Hls.Events.MEDIA_ATTACHED, function () { hls.loadSource(src); }); player.on("destroy", function () { hls.destroy(); }); } }); }, }, }); }); // 设置样式 this.$refs.art2.style.width = "100%"; this.$refs.art2.style.height = (this.$refs.art2.scrollWidth / 16) * 9 + "px"; }); }, beforeUnmount() { if (this.art2 && this.art2.destroy) { this.art2.destroy(false); } }, };
<\/script>`},{header:"FLV",slug:"flv",content:`Tips
需安装 mpegts.js
npm install -D mpegts.js <div ref="art3"></div> <script> export default { data() { return { art3: null, }; }, mounted() { this.$nextTick(() => { Promise.all([import("artplayer")]).then(([{ default: ArtPlayer }]) => { this.art3 = new ArtPlayer({ fullscreen: true, autoSize: true, setting: true, whitelist: ["*"], container: this.$refs.art3, url: "/assets/video/s_720.flv", type: "customFLV", customType: { customFLV: function (mediaElement, src, player) { import("mpegts.js").then(({ default: mpegts }) => { const flvPlayer = mpegts.createPlayer({ type: "flv", url: src, }); flvPlayer.attachMediaElement(mediaElement); flvPlayer.load(); player.on("destroy", function () { flvPlayer.destroy(); }); }); }, }, }); }); // 设置样式 this.$refs.art3.style.width = "100%"; this.$refs.art3.style.height = (this.$refs.art3.scrollWidth / 16) * 9 + "px"; }); }, beforeUnmount() { if (this.art3 && this.art3.destroy) { this.art3.destroy(false); } }, };
<\/script>`},{header:"DASH",slug:"dash",content:`Tips
需安装 dashjs
npm install -D dashjs <div ref="art4"></div> <script> export default { data() { return { art4: null, }; }, mounted() { this.$nextTick(() => { Promise.all([import("artplayer")]).then(([{ default: ArtPlayer }]) => { this.art4 = new ArtPlayer({ fullscreen: true, autoSize: true, setting: true, whitelist: ["*"], container: this.$refs.art4, url: "/assets/video/dash/stream.mpd", type: "customDASH", customType: { customDASH: function (mediaElement, src, player) { import("dashjs").then(({ default: dashjs }) => { const dashPlayer = dashjs.MediaPlayer().create(); dashPlayer.initialize(mediaElement, src, false); player.on("destroy", function () { dashPlayer.reset(); }); }); }, }, }); }); // 设置样式 this.$refs.art4.style.width = "100%"; this.$refs.art4.style.height = (this.$refs.art4.scrollWidth / 16) * 9 + "px"; }); }, beforeUnmount() { if (this.art4 && this.art4.destroy) { this.art4.destroy(false); } }, };
<\/script>`},{header:"ShakaDash",slug:"shakadash",content:`Tips
需安装 shaka-player
npm install -D shaka-player <div ref="art5"></div> <script> export default { data() { return { art5: null, }; }, mounted() { this.$nextTick(() => { Promise.all([import("artplayer")]).then(([{ default: ArtPlayer }]) => { this.art5 = new ArtPlayer({ fullscreen: true, autoSize: true, setting: true, whitelist: ["*"], container: this.$refs.art5, url: "/assets/video/dash/stream.mpd", type: "customShakaDash", customType: { customShakaDash: function (mediaElement, src, player) { import("shaka-player").then(({ default: shaka }) => { const shakaPlayer = new shaka.Player(mediaElement); shakaPlayer.load(src); player.on("destroy", function () { shakaPlayer.destroy(); }); }); }, }, }); }); // 设置样式 this.$refs.art5.style.width = "100%"; this.$refs.art5.style.height = (this.$refs.art5.scrollWidth / 16) * 9 + "px"; }); }, beforeUnmount() { if (this.art5 && this.art5.destroy) { this.art5.destroy(false); } }, };
<\/script>`}]},{path:"/OpenSw/vuepress-plugin-smplayer/bilibili.html",title:"哔哩哔哩动画",pathLocale:"/",contents:[{header:"介绍",slug:"介绍",content:"可以插入 bilibili 视频"},{header:"使用",slug:"使用",content:'<Bilibili bvid="BV1zt411t79A" />'},{header:"参数",slug:"参数",content:`以下为默认参数，默认参数可省略
<Bilibili bvid="BV1zt411t79A" :page="1" :t="0" :danmaku="true" :sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups" :allowfullscreen="allowfullscreen" width="100%" :height="[9 / 16, 70]"
/> page : 分 P
t : 开始时间，秒
danmaku : 弹幕开关
width : 播放器宽度，类似 css 属性，100% 或 960px
height :播放器高度，对应 css 高度计算为：width * height[0] + height[1]`},{header:"配置",slug:"配置",content:`主题下插件配置为默认配置，每个 <Bilibili /> 标签下的设置会覆盖默认配置。
import { defineUserConfig } from "vuepress";
import smplayer from "./plugins/smplayer"; export default defineUserConfig({ plugins: [ smplayer({ bilibili: { page: 1, danmaku: !0, t: 0, allowfullscreen: "allowfullscreen", sandbox: "allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups", width: "100%", height: [9 / 16, 70], }, }), ],
});`}]},{path:"/OpenSw/vuepress-plugin-smplayer/dplayer.html",title:"Dplayer",pathLocale:"/",contents:[{header:"",slug:"",content:`Tips
本插件不再提供 DPlayer 快速接入功能，并建议用户使用 js 直接引入，详情见下方示例。 Tips
详细配置说明见 DPlayer 文档`},{header:"安装",slug:"安装",content:"npm install -D dplayer pnpm add -D dplayer yarn add -D dplayer"},{header:"使用和示例",slug:"使用和示例",content:""},{header:"基本使用",slug:"基本使用",content:`<div ref="dp0" /> <script> export default { mounted() { this.$nextTick(() => { import("dplayer").then(({ default: DPlayer }) => { this.dp1 = new DPlayer({ container: this.$refs.dp0, video: { url: "/assets/video/s_720.mp4", thumbnails: "/assets/video/thumbnails.jpg", }, }); }); }); }, beforeUnmount() { this.dp0.destroy(); }, };
<\/script>`},{header:"弹幕",slug:"弹幕",content:`<div ref="dp1" /> <script> export default { mounted() { this.$nextTick(() => { import("dplayer").then(({ default: DPlayer }) => { this.dp2 = new DPlayer({ container: this.$refs.dp1, video: { url: "/assets/video/s_720.mp4", thumbnails: "/assets/video/thumbnails.jpg", }, danmaku: { api: "https://danmu.u2sb.com/api/dplayer/", id: "cENuyhsT2rMOCohK", addition: [ "https://danmu.u2sb.com/api/dplayer/v3/bilibili/BV1zt411t79A", ], }, }); }); }); }, beforeUnmount() { this.dp1.destroy(); }, };
<\/script>`},{header:"HLS",slug:"hls",content:`Tips
需安装 hls.js
npm install -D hls.js <div ref="dp2" /> <script> export default { mounted() { this.$nextTick(() => { import("dplayer").then(({ default: DPlayer }) => { this.dp2 = new DPlayer({ container: this.$refs.dp2, video: { url: "/assets/video/dash/master.m3u8", thumbnails: "/assets/video/thumbnails.jpg", type: "customHLS", customType: { customHLS: function (video, player) { import("hls.js").then(({ default: Hls }) => { const hls = new Hls(); hls.loadSource(video.src); hls.attachMedia(video); player.on("destroy", function () { hls.destroy(); }); }); }, }, }, }); }); }); }, beforeUnmount() { this.dp2.destroy(); }, };
<\/script>`},{header:"其他库",slug:"其他库",content:"略，请自行脑补使用方式"}]},{path:"/OpenSw/vuepress-plugin-smplayer/faq.html",title:"FAQ",pathLocale:"/",contents:[{header:"常见问题",slug:"常见问题",content:""},{header:"SMPlayer 是什么意思？",slug:"smplayer-是什么意思",content:"全称 sb media player"},{header:"这是一个什么样的项目？",slug:"这是一个什么样的项目",content:`或者是问，为什么会有这个项目。
这个项目最早可以追溯到 2018 年的时候，当时做 EasyHexo，研究怎么在 Vuepress 中插入视频，
Mitscherlich 写了 dplayer.vue 组件，这便是这个项目最早的雏形，时至今日，仍保留一部分原始代码。
在后续完善组件功能的同时，我在想能不能做成插件，开放给大家使用。
后来我的博客全面迁移到 vuepress，在放弃 hexo-tag-mmedia 的同时，开发了这款插件。`},{header:"这么简单一个东西为什么还要写个插件，我直接写代码不香吗？",slug:"这么简单一个东西为什么还要写个插件-我直接写代码不香吗",content:"还真有杠精问我这个问题，我只想反问一句，插件存在的意义是什么？那照你这么说，是不是所有的高级语言都没有存在的意义，你只用汇编？还是你直接写指令？"},{header:"为什么文档中有些文档并不是很详细？",slug:"为什么文档中有些文档并不是很详细",content:"因为这个插件比较灵活，不想用条条框框限制用户，具体看源码去吧。"},{header:"为什么 js 文件是动态引入的？",slug:"为什么-js-文件是动态引入的",content:`具体原因可见 Browser API Access Restrictions。
因为 vuepress 是服务端渲染，而部分 js 使用了浏览器 API(如 window 等)，动态引入可以确保在在 mounted 后再加载 js。`},{header:"Vuepress 2.x",slug:"vuepress-2-x",content:"等 vuepress 2.0 发布正式版以后，这个插件再发布正式的 2.x 版本。"},{header:"后续的开发计划",slug:"后续的开发计划",content:`前面也说过了，这个项目主要是自用，不出意外的话后续应该不会扩充新的播放器了，除非是有特点，能让我眼前一亮的播放器。
后续的维护主要集中在功能拓展和 BUG 修复这两方面。`}]},{path:"/OpenSw/vuepress-plugin-smplayer/install.html",title:"安装",pathLocale:"/",contents:[{header:"",slug:"",content:`Note
适用于 vuepress 2.x 的插件目前还有一些问题没有解决，仅供测试使用，详情请看文档，正式版请耐心等待。1.x 版本文档详见 v1`},{header:"安装",slug:"安装",content:"当前版本打包为 npm 包还存在一些问题，暂时只以临时插件的形式存在，可自行到我的网站仓库下载相关文件，并引入 vuepress，详见本站点仓库。"},{header:"配置",slug:"配置",content:`import { defineUserConfig } from "vuepress";
import smplayer from "./plugins/smplayer"; export default defineUserConfig({ plugins: [ smplayer({ /* 相关配置 */ }), ],
});`},{header:"建议",slug:"建议",content:"建议配置 shouldPrefetch: false,"},{header:"反馈",slug:"反馈",content:"GitHub"}]},{path:"/OpenSw/vuepress-plugin-smplayer/meting.html",title:"Meting",pathLocale:"/",contents:[{header:"介绍",slug:"介绍",content:"可以插入 meting-js 标签"},{header:"使用",slug:"使用",content:""},{header:"基本使用",slug:"基本使用",content:`<ClientOnly> <Meting id="003UkWuI0E8U0l" server="tencent" type="playlist" />
</ClientOnly>
或
<ClientOnly> <meting-js id="003UkWuI0E8U0l" server="tencent" type="playlist" />
</ClientOnly>`},{header:"Auto",slug:"auto",content:`Note
各种平台的 URL 一直是在变的，auto 解析不一定能及时更新，使用前请先测试，如遇到问题，请及时反馈。 <ClientOnly> <Meting auto="https://y.qq.com/n/ryqq/songDetail/003UkWuI0E8U0l" />
</ClientOnly>`},{header:"组合列表",slug:"组合列表",content:`使用 list 参数添加额外的音乐列表。
<ClientOnly> <Meting id="00460eVJ4FSPKH5" server="tencent" type="song" :list="list" />
</ClientOnly> <script> export default { data() { return { list: [ { id: "00417x4J1oaZre", //水木年华歌单 server: "tencent", type: "song", }, { auto: "https://y.qq.com/n/ryqq/songDetail/000zlY4H0TxwBs", //爱上你我很快乐 }, ], }; }, };
<\/script>`},{header:"额外歌单",slug:"额外歌单",content:`使用 audio 参数添加额外的音乐列表。
<ClientOnly> <Meting id="00460eVJ4FSPKH" server="tencent" type="song" :audio="audio" />
</ClientOnly> <script> export default { data() { return { list: [ { id: "00417x4J1oaZre", //水木年华歌单 server: "tencent", type: "song", }, { auto: "https://y.qq.com/n/ryqq/songDetail/000zlY4H0TxwBs", //爱上你我很快乐 }, ], audio: [ { name: "年轻人要热爱祖国", artist: "音阙诗听/赵方婧", url: "/assets/audio/年轻人要热爱祖国.mp3", cover: "https://sm.sm9.top/api/music?server=Tencent&type=pic&id=001gv6xI4BNGiP", lrc: "/assets/audio/年轻人要热爱祖国.lrc", }, ], }; }, };
<\/script>`},{header:"参数",slug:"参数",content:`此部分请熟读 MetingJS 文档 继承 MetingJS 所有参数，示例见上方 DEMO。
额外参数 api 替代 meting_api
<ClientOnly> <meting-js id="7951088719" server="tencent" type="playlist" api="https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r" />
</ClientOnly>`},{header:"配置",slug:"配置",content:`主题下插件配置为默认配置，每个 <Meting /> 或 <meting-js /> 标签下的设置会覆盖默认配置。
import { defineUserConfig } from "vuepress";
import smplayer from "./plugins/smplayer"; export default defineUserConfig({ plugins: [ smplayer({ meting: { api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r", server: "tencent", type: "song", fixed: false, mini: false, autoplay: false, theme: "#2980b9", loop: "all", order: "list", preload: "auto", volume: 0.7, mutex: true, lrcType: 3, listFolded: false, listMaxHeight: "340px", storageName: "vuepress-plugin-smplayer", }, }), ],
});`}]},{path:"/OpenSw/vuepress-plugin-smplayer/xigua.html",title:"西瓜视频",pathLocale:"/",contents:[{header:"介绍",slug:"介绍",content:"可以插入 西瓜 视频"},{header:"使用",slug:"使用",content:'<Xigua xid="7004391080330428964" />'},{header:"参数",slug:"参数",content:`以下为默认参数，默认参数可省略
<Xigua xid="7004391080330428964" id="" :autoplay="false" :startTime="0" :sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups" :allowfullscreen="allowfullscreen" width="100%" :height="[9 / 16, 70]"
/> width : 播放器宽度，类似 css 属性，100% 或 960px
height :播放器高度，对应 css 高度计算为：width * height[0] + height[1]`},{header:"配置",slug:"配置",content:`主题下插件配置为默认配置，每个 <Xigua /> 标签下的设置会覆盖默认配置。
import { defineUserConfig } from "vuepress";
import smplayer from "./plugins/smplayer"; export default defineUserConfig({ plugins: [ smplayer({ xigua: { autoplay: !1, startTime: 0, allowfullscreen: "allowfullscreen", sandbox: "allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups", width: "100%", height: [9 / 16, 0], }, }), ],
});`}]},{path:"/OpenHw/CameraBattery/DMW-BLK22/",title:"DMW-BLK22 松下相机假电池",pathLocale:"/",contents:[{header:"简介",slug:"简介",content:"DMW-BLK22 松下相机假电池，适用于 LUMIX S5 等机型，输入电压 10-18V，输出电压 8.1V，带有 PD 和 QC 诱骗电路，支持快充输入。详见 立创开源"},{header:"PCB",slug:"pcb",content:""},{header:"整体",slug:"整体",content:"左侧输入，右侧输出，打样时忘记加丝印了，新版工程文件已加丝印。左上角为诱骗电路，如不使用快充输入，无需焊接。"},{header:"诱骗电路",slug:"诱骗电路",content:"当需要使用充电宝或手机充电器供电时，需焊接诱骗电路。"},{header:"关键元件",slug:"关键元件",content:`BOM 表有些问题，关键元件看这里，其他电阻电容看原理图 DC2DC 转换器：SY8286ARAC，立创商城有售，价格比某宝便宜。
PD QC 诱骗：FS312H，某宝有售`},{header:"外壳",slug:"外壳",content:""},{header:"尺寸说明",slug:"尺寸说明",content:"嘉立创 3D 打印外壳，见开源工程附件，材料树脂 8111X，尺寸都是手工测量，不保证完美，但可以使用。"},{header:"成本",slug:"成本",content:"见结尾介绍视频"},{header:"装配",slug:"装配",content:"外壳分为两部分，使用 M3x8 自攻钉固定，方便拆卸维护。"},{header:"成品",slug:"成品",content:""},{header:"视频",slug:"视频",content:""}]},{path:"/OpenHw/ObsKeyboard/SB00/",title:"SB00",pathLocale:"/",contents:[{header:"简介",slug:"简介",content:"一款 OBS 导播键盘，命名为 SB00，开源项目见 https://github.com/u2sb/ObsKeyBoard-SB00。"},{header:"特点",slug:"特点",content:`USB TYPE B 接口，坚实可靠
机械键盘 MX 轴，价格便宜，方便 DIY 和维修
ESP32-S2 模组，价格便宜，容易买到，方便 DIY
电路简单，方便 DIY 和维护，新手也能焊接
固件使用 Arduino 开发，与上位机使用串口通信，开发简单`},{header:"功能",slug:"功能",content:`14 个自定义场景切换按键，可自由配置，可按不同场景保存配置文件 工作室模式下预监+切换
非工作室模式下直接切换 6 个编码器，可自由配置，可按不同场景保存配置文件 可直接调节音量大小
可直接静音/解除静音`},{header:"工作原理",slug:"工作原理",content:"使用上位机与 OBS 通信，非快捷键方式，可实现更多功能。 键盘发送指令至上位机，上位机解析键盘指令，根据绑定的配置，向 OBS 发送对应指令。"},{header:"组成部分",slug:"组成部分",content:""},{header:"PCB",slug:"pcb",content:"键盘主体，使用 kicad 绘制。"},{header:"固件",slug:"固件",content:"使用 Arduino 编写，为 ESP32-­S2-­WROVER 模组。"},{header:"外壳",slug:"外壳",content:"亚克力堆叠外壳。"},{header:"上位机",slug:"上位机",content:"上位机软件，使用 WPF 编写。"},{header:"简介视频",slug:"简介视频",content:""},{header:"固件及上位机下载",slug:"固件及上位机下载",content:"下载上位机请加入我们的 QQ 群 159891059"}]},{path:"/404.html",title:"",pathLocale:"/",contents:[]}],H="update-vuepress-plugin-full-text-search2-search-index";var P=f(I),F=S(()=>{const e=new Map;for(const t of P.value)e.set(t.path,t);return e});import.meta.webpackHot&&(__VUE_HMR_RUNTIME__[H]=e=>{P.value=e});function q(e){const t=f([]);let i=null;return B(e,()=>{i&&clearTimeout(i),i=setTimeout(s,100)}),t;function s(){const u=e.value.toLowerCase().trim();if(!u){t.value=[];return}const l=new Map,d=new Set;for(const a of P.value)for(const r of V(a,u)){d.add(r.parentPageTitle);let o=l.get(r.parentPageTitle);o||(o=[],l.set(r.parentPageTitle,o)),o.push(r)}const n=[...d].sort((a,r)=>{const o=l.get(a);return l.get(r).length-o.length});t.value=[...l].flatMap(([,a])=>a).sort((a,r)=>a.parentPagePriority-r.parentPagePriority||n.indexOf(a.parentPageTitle)-n.indexOf(r.parentPageTitle)||a.priority-r.priority)}}function*V(e,t){const i=j(e.title,t);if(i){yield{path:e.path,parentPageTitle:w(e),title:e.title,display:i,page:e,content:null,parentPagePriority:1,priority:1};return}for(const s of e.contents){const u=j(s.header,t);if(u){yield{path:e.path+(s.slug?`#${s.slug}`:""),parentPageTitle:w(e),title:e.title,display:u,page:e,content:null,parentPagePriority:10,priority:2};continue}const l=j(s.content,t);l&&(yield{path:e.path+(s.slug?`#${s.slug}`:""),parentPageTitle:w(e),title:e.title,display:[{type:"header",str:`${s.header}
`},...l],page:e,content:null,parentPagePriority:10,priority:10})}}function w(e){const t=e.path.split("/");let i="/";return t[1]&&(i=`/${t[1]}/`),(F.value.get(i)||e).title}function j(e,t){const i=[];let s=0;const u=e.toLowerCase().replace(/\s/gu," ");let l=0,d=u.indexOf(t,l);if(d<0)return null;for(;d>=0;){const a=d+t.length;if(n(e.slice(l,d),"normal"),n(e.slice(d,a),"highlight"),l=a,d=u.indexOf(t,l),s>100)break}return n(e.slice(l),"normal"),i.filter(a=>a.str);function n(a,r){let o=a;r==="normal"&&o.length>100&&s===0&&(o=`… ${o.slice(-10)}`);let h=!1;if(s+o.length>100){if(i.some(g=>g.type==="ellipsis"))return;o=o.slice(0,Math.max(100-s,1)),h=!0}i.push({type:r,str:o}),s+=o.length,h&&(i.push({type:"ellipsis",str:" …"}),s+=2)}}const W={},R=E({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>W}},setup(e){const{locales:t}=C(e),i=f(""),s=f(!1),u=f(-1),l=q(i),d=S(()=>i.value&&s.value&&l.value.length),n=L(),a=_(),r=S(()=>{var p;return(p=t.value[a.value])!=null?p:{}});function o(){if(!d.value)return;let p=u.value-1;p<0&&(p=l.value.length-1),g(p)}function h(){if(!d.value)return;let p=u.value+1;p>=l.value.length&&(p=0),g(p)}function g(p){u.value=p}function T(){u.value=-1}function M(p){if(!d.value)return;const A=l.value[p];A&&n.push(A.path)}return{query:i,focused:s,focusIndex:u,suggestions:l,activeSuggestion:d,onUp:o,onDown:h,focus:g,unfocus:T,go:M,locale:r}}});const z={class:"search-box",role:"search"},K=["placeholder"],G=["onMousedown","onMouseenter"],Q=["href"],X={key:0,class:"parent-page-title"},Y={class:"suggestion-row"},Z={class:"page-title"},ee={class:"suggestion-content"};function te(e,t,i,s,u,l){var d;return m(),c("div",z,[N(y("input",{ref:"input","onUpdate:modelValue":t[0]||(t[0]=n=>e.query=n),"aria-label":"Search",class:v({focused:e.focused}),placeholder:(d=e.locale.placeholder)!=null?d:"Search",autocomplete:"off",spellcheck:"false",onFocus:t[1]||(t[1]=()=>e.focused=!0),onBlur:t[2]||(t[2]=()=>e.focused=!1),onKeyup:[t[3]||(t[3]=b(n=>e.go(e.focusIndex),["enter"])),t[4]||(t[4]=b((...n)=>e.onUp&&e.onUp(...n),["up"])),t[5]||(t[5]=b((...n)=>e.onDown&&e.onDown(...n),["down"]))]},null,42,K),[[U,e.query]]),e.activeSuggestion?(m(),c("ul",{key:0,class:"suggestions",onMouseleave:t[7]||(t[7]=(...n)=>e.unfocus&&e.unfocus(...n))},[(m(!0),c(D,null,O(e.suggestions,(n,a)=>(m(),c("li",{key:a,class:v(["suggestion",{focused:a===e.focusIndex}]),onMousedown:r=>e.go(a),onMouseenter:r=>e.focus(a)},[y("a",{href:n.path,onClick:t[6]||(t[6]=$(()=>{},["prevent"]))},[n.parentPageTitle&&(!e.suggestions[a-1]||e.suggestions[a-1].parentPageTitle!==n.parentPageTitle)?(m(),c("div",X,x(n.parentPageTitle),1)):k("v-if",!0),y("div",Y,[y("div",Z,x(n.title||n.path),1),y("div",ee,[(m(!0),c(D,null,O(n.display,(r,o)=>(m(),c("span",{key:o,class:v(r.type)},x(r.str),3))),128))])])],8,Q)],42,G))),128))],32)):k("v-if",!0)])}const ae=J(R,[["render",te],["__scopeId","data-v-c13c90dc"],["__file","SearchBox.vue"]]);export{ae as default};
