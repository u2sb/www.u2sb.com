import{w as e}from"./app-BRaLBeBB.js";var t=e(((e,t)=>{(function(n,r){typeof e==`object`&&typeof t==`object`?t.exports=r():typeof define==`function`&&define.amd?define(`DPlayer`,[],r):typeof e==`object`?e.DPlayer=r():n.DPlayer=r()})(self,(()=>(()=>{var e={916:(e,t,n)=>{var r=n(471);e.exports=function(e){var t,i=``,a=(e||={}).video,o=e.options,s=r.$escape,c=e.tran,l=e.icons,u=e.index,d=r.$each;return e.$value,e.$index,i+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,t=n(568)(a),i+=t,i+=`
    `,o.logo&&(i+=`
    <div class="dplayer-logo">
        <img src="`,i+=s(o.logo),i+=`">
    </div>
    `),i+=`
    <div class="dplayer-danmaku"`,o.danmaku&&o.danmaku.bottom&&(i+=` style="margin-bottom:`,i+=s(o.danmaku.bottom),i+=`"`),i+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,o.danmaku&&(i+=`
        <span class="dplayer-danloading">`,i+=s(c(`danmaku-loading`)),i+=`</span>
        `),i+=`
        <span class="diplayer-loading-icon">`,i+=l.loading,i+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,i+=s(c(`setting`)),i+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,i+=l.pallette,i+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,i+=s(c(`set-danmaku-color`)),i+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,i+=s(u),i+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,i+=s(u),i+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,i+=s(u),i+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,i+=s(u),i+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,i+=s(u),i+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,i+=s(u),i+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,i+=s(c(`set-danmaku-type`)),i+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,i+=s(u),i+=`" value="1">
                    <span>`,i+=s(c(`top`)),i+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,i+=s(u),i+=`" value="0" checked>
                    <span>`,i+=s(c(`rolling`)),i+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,i+=s(u),i+=`" value="2">
                    <span>`,i+=s(c(`bottom`)),i+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,i+=s(c(`input-danmaku-enter`)),i+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,i+=s(c(`send`)),i+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,i+=l.send,i+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,i+=l.play,i+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,i+=l.volumeDown,i+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,i+=s(o.theme),i+=`;">
                        <span class="dplayer-thumb" style="background: `,i+=s(o.theme),i+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,o.live&&(i+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,i+=s(o.theme),i+=`;"></span>`,i+=s(c(`live`)),i+=`</span>
        `),i+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,o.video.quality&&(i+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,i+=s(o.video.quality[o.video.defaultQuality].name),i+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,d(o.video.quality,(function(e,t){i+=`
                    <div class="dplayer-quality-item" data-index="`,i+=s(t),i+=`">`,i+=s(e.name),i+=`</div>
                `})),i+=`
                </div>
            </div>
        </div>
        `),i+=`
        `,o.screenshot&&(i+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,i+=s(c(`screenshot`)),i+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,i+=l.camera,i+=`</span>
        </div>
        `),i+=`
        `,o.airplay&&(i+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,i+=s(c(`airplay`)),i+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,i+=l.airplay,i+=`</span>
        </div>
        `),i+=`
        `,o.chromecast&&(i+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,i+=s(c(`chromecast`)),i+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,i+=l.chromecast,i+=`</span>
        </div>
        `),i+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,i+=s(c(`send-danmaku`)),i+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,i+=l.comment,i+=`</span>
            </button>
        </div>
        `,o.subtitle&&(i+=`
        `,typeof o.subtitle.url==`string`?(i+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,i+=s(c(`hide-subs`)),i+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,i+=l.subtitle,i+=`</span>
            </button>
        </div>
        `):(i+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,i+=s(c(`subtitle`)),i+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,i+=l.subtitle,i+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,d(o.subtitle.url,(function(e,t){i+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,i+=s(e.url),i+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,i+=s(e.lang?e.name?e.name+` (`+c(e.lang)+`)`:c(e.lang):e.name),i+=`</span>
                        </div>
                    `})),i+=`
                </div>
            </div>
        </div>
        `),i+=`
        `),i+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,i+=s(c(`setting`)),i+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,i+=l.setting,i+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,i+=s(c(`speed`)),i+=`</span>
                        <div class="dplayer-toggle">`,i+=l.right,i+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,i+=s(c(`loop`)),i+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,i+=s(c(`show-danmaku`)),i+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,i+=s(c(`unlimited-danmaku`)),i+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,i+=s(c(`opacity-danmaku`)),i+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,d(o.playbackSpeed,(function(e,t){i+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,i+=s(e),i+=`">
                            <span class="dplayer-label">`,i+=s(e===1?c(`normal`):e),i+=`</span>
                        </div>
                    `})),i+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,i+=s(c(`web-fullscreen`)),i+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,i+=l.fullWeb,i+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,i+=s(c(`fullscreen`)),i+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,i+=l.full,i+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,i+=s(o.theme),i+=`">
                <span class="dplayer-thumb" style="background: `,i+=s(o.theme),i+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,o.danmaku&&(i+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),i+=`
</div>
<div class="dplayer-menu">
    `,d(o.contextmenu,(function(e,t){i+=`
        <div class="dplayer-menu-item">
            <a`,e.link&&(i+=` target="_blank"`),i+=` href="`,i+=s(e.link||`javascript:void(0);`),i+=`">`,e.key&&(i+=` `,i+=s(c(e.key))),e.text&&(i+=` `,i+=s(e.text)),i+=`</a>
        </div>
    `})),i+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,i+=l.play,i+=`
</button>`}},568:(e,t,n)=>{var r=n(471);e.exports=function(e){var t=``,n=(e||={}).enableSubtitle,i=e.subtitle,a=e.current,o=e.airplay,s=e.pic,c=r.$escape,l=e.screenshot,u=e.preload,d=e.url;return n=i&&i.type===`webvtt`,t+=`
<video
    class="dplayer-video `,a&&(t+=`dplayer-video-current`),t+=`"
    webkit-playsinline
    `,o&&(t+=` x-webkit-airplay="allow" `),t+=`
    playsinline
    `,s&&(t+=`poster="`,t+=c(s),t+=`"`),t+=`
    `,(l||n)&&(t+=`crossorigin="anonymous"`),t+=`
    `,u&&(t+=`preload="`,t+=c(u),t+=`"`),t+=`
    `,o?t+=`
    nosrc
    `:d&&(t+=`
    src="`,t+=c(d),t+=`"
    `),t+=`
    >
    `,o&&(t+=`
    <source src="`,t+=c(d),t+=`">
    `),t+=`
    `,n&&(t+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,t+=c(typeof i.url==`string`?i.url:i.url[i.index].url),t+=`"></track>
    `),t+`
</video>`}},49:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(415),i=n.n(r),a=n(352),o=n.n(a)()(i());o.push([e.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,``,{version:3,sources:[`webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css`],names:[],mappings:`AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE`,sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:``}]);let s=o},685:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(415),i=n.n(r),a=n(352),o=n.n(a),s=n(49),c=n(80),l=n.n(c),u=new URL(n(831),n.b),d=o()(i());d.i(s.Z);var f=l()(u);d.push([e.id,`@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+f+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,``,{version:3,sources:[`webpack://./src/css/global.less`,`webpack://./src/css/index.less`,`webpack://./src/css/player.less`,`webpack://./src/css/balloon.less`,`webpack://./src/css/bezel.less`,`webpack://./src/css/notice.less`,`webpack://./src/css/controller.less`,`webpack://./src/css/danmaku.less`,`webpack://./src/css/logo.less`,`webpack://./src/css/menu.less`,`webpack://./src/css/subtitle.less`,`webpack://./src/css/video.less`,`webpack://./src/css/info-panel.less`],names:[],mappings:`AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR`,sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAQAAAC58SIOAAAAZElEQVR4AWJiWAXoUwxQAAaBGObV/f/F0xtTIpQ5IUAaqtJUctBhlsZccvtnlTZxT+Tw7IgXxMmP504K8jrCtMgE5l8Pj8x9j4FPIiJcq7gIcKO61G3BLy+BHJ4aUIhI+CdmeQDH7lU3BjS7ZQAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAQAAAC58SIOAAAAZElEQVR4AWJiWAXoUwxQAAaBGObV/f/F0xtTIpQ5IUAaqtJUctBhlsZccvtnlTZxT+Tw7IgXxMmP504K8jrCtMgE5l8Pj8x9j4FPIiJcq7gIcKO61G3BLy+BHJ4aUIhI+CdmeQDH7lU3BjS7ZQAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:``}]);let p=d},856:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=a[l]||0,d=`${l} ${u}`;a[l]=u+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(f!==-1)t[f].references++,t[f].updater(p);else{var m=i(p,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}o.push(d)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e||=[],i||={});return function(e){e||=[];for(var o=0;o<a.length;o++){var s=n(a[o]);t[s].references--}for(var c=r(e,i),l=0;l<a.length;l++){var u=n(a[l]);t[u].references===0&&(t[u].updater(),t.splice(u,1))}a=c}}},370:e=>{var t={};e.exports=function(e,n){var r=function(e){if(t[e]===void 0){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch{n=null}t[e]=n}return t[e]}(e);if(!r)throw Error(`Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.`);r.appendChild(n)}},278:e=>{e.exports=function(e){var t=document.createElement(`style`);return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},458:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute(`nonce`,t)}},470:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){(function(e,t,n){var r=``;n.supports&&(r+=`@supports (${n.supports}) {`),n.media&&(r+=`@media ${n.media} {`);var i=n.layer!==void 0;i&&(r+=`@layer${n.layer.length>0?` ${n.layer}`:``} {`),r+=n.css,i&&(r+=`}`),n.media&&(r+=`}`),n.supports&&(r+=`}`);var a=n.sourceMap;a&&typeof btoa<`u`&&(r+=`
/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(a))))} */`),t.styleTagTransform(r,e,t.options)})(t,e,n)},remove:function(){(function(e){if(e.parentNode===null)return!1;e.parentNode.removeChild(e)})(t)}}}},488:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},251:e=>{e.exports=`<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>`},113:e=>{e.exports=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>`},193:e=>{e.exports=`<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>`},338:e=>{e.exports=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>`},807:e=>{e.exports=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>`},300:e=>{e.exports=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>`},574:e=>{e.exports=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>`},182:e=>{e.exports=`<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>`},965:e=>{e.exports=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>`},74:e=>{e.exports=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>`},730:e=>{e.exports=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>`},428:e=>{e.exports=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>`},254:e=>{e.exports=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>`},934:e=>{e.exports=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>`},410:e=>{e.exports=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>`},644:e=>{e.exports=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>`},324:e=>{e.exports=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>`},437:e=>{e.exports=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>`},897:(e,t,n)=>{var r=typeof self<`u`?self:typeof window<`u`?window:n.g===void 0?{}:n.g,i=Object.create(r),a=/["&'<>]/;function o(e){return typeof e!=`string`&&(e=e==null?``:typeof e==`function`?o(e.call(e)):JSON.stringify(e)),e}i.$escape=function(e){return function(e){var t=``+e,n=a.exec(t);if(!n)return e;var r=``,i=void 0,o=void 0,s=void 0;for(i=n.index,o=0;i<t.length;i++){switch(t.charCodeAt(i)){case 34:s=`&#34;`;break;case 38:s=`&#38;`;break;case 39:s=`&#39;`;break;case 60:s=`&#60;`;break;case 62:s=`&#62;`;break;default:continue}o!==i&&(r+=t.substring(o,i)),o=i+1,r+=s}return o===i?r:r+t.substring(o,i)}(o(e))},i.$each=function(e,t){if(Array.isArray(e))for(var n=0,r=e.length;n<r;n++)t(e[n],n);else for(var i in e)t(e[i],i)},e.exports=i},471:(e,t,n)=>{e.exports=n(897)},352:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=``,r=t[5]!==void 0;return t[4]&&(n+=`@supports (${t[4]}) {`),t[2]&&(n+=`@media ${t[2]} {`),r&&(n+=`@layer${t[5].length>0?` ${t[5]}`:``} {`),n+=e(t),r&&(n+=`}`),t[2]&&(n+=`}`),t[4]&&(n+=`}`),n})).join(``)},t.i=function(e,n,r,i,a){typeof e==`string`&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];c!=null&&(o[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&o[u[0]]||(a!==void 0&&(u[5]===void 0||(u[1]=`@layer${u[5].length>0?` ${u[5]}`:``} {${u[1]}}`),u[5]=a),n&&(u[2]&&(u[1]=`@media ${u[2]} {${u[1]}}`),u[2]=n),i&&(u[4]?(u[1]=`@supports (${u[4]}) {${u[1]}}`,u[4]=i):u[4]=`${i}`),t.push(u))}},t}},80:e=>{e.exports=function(e,t){return t||={},e&&(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?`"${e.replace(/"/g,`\\"`).replace(/\n/g,`\\n`)}"`:e)}},415:e=>{e.exports=function(e){var t=e[1],n=e[3];return n?typeof btoa==`function`?[t,`/*# ${`sourceMappingURL=data:application/json;charset=utf-8;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(n))))}`} */`].join(`
`):[t].join(`
`):t}},937:e=>{function t(e){return t=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},t(e)}e.exports=(typeof self>`u`?`undefined`:t(self))==`object`?self.FormData:window.FormData},831:e=>{e.exports=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAQAAAC58SIOAAAAZElEQVR4AWJiWAXoUwxQAAaBGObV/f/F0xtTIpQ5IUAaqtJUctBhlsZccvtnlTZxT+Tw7IgXxMmP504K8jrCtMgE5l8Pj8x9j4FPIiJcq7gIcKO61G3BLy+BHJ4aUIhI+CdmeQDH7lU3BjS7ZQAAAABJRU5ErkJggg==){var i=t[r];if(i!==void 0)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if(typeof globalThis==`object`)return globalThis;try{return this||Function(`return this`)()}catch{if(typeof window==`object`)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.b=document.baseURI||self.location.href,n.nc=void 0;var r={};return(()=>{n.d(r,{default:()=>kr});var e=n(856),t=n.n(e),i=n(470),a=n.n(i),o=n(370),s=n.n(o),c=n(458),l=n.n(c),u=n(278),d=n.n(u),f=n(488),p=n.n(f),m=n(685),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=s().bind(null,`head`),h.domAPI=a(),h.insertStyleElement=d(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;function g(e){return g=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},g(e)}function ee(e,t){this.name=`AggregateError`,this.errors=e,this.message=t||``}ee.prototype=Error.prototype;function _(e){return _=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},_(e)}var te=setTimeout;function ne(e){return!!(e&&e.length!==void 0)}function re(){}function v(e){if(!(this instanceof v))throw TypeError(`Promises must be constructed via new`);if(typeof e!=`function`)throw TypeError(`not a function`);this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],ce(e,this)}function ie(e,t){for(;e._state===3;)e=e._value;e._state===0?e._deferreds.push(t):(e._handled=!0,v._immediateFn((function(){var n=e._state===1?t.onFulfilled:t.onRejected;if(n!==null){var r;try{r=n(e._value)}catch(e){y(t.promise,e);return}ae(t.promise,r)}else (e._state===1?ae:y)(t.promise,e._value)})))}function ae(e,t){try{if(t===e)throw TypeError(`A promise cannot be resolved with itself.`);if(t&&(_(t)===`object`||typeof t==`function`)){var n=t.then;if(t instanceof v)return e._state=3,e._value=t,void oe(e);if(typeof n==`function`)return void ce((r=n,i=t,function(){r.apply(i,arguments)}),e)}e._state=1,e._value=t,oe(e)}catch(t){y(e,t)}var r,i}function y(e,t){e._state=2,e._value=t,oe(e)}function oe(e){e._state===2&&e._deferreds.length===0&&v._immediateFn((function(){e._handled||v._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)ie(e,e._deferreds[t]);e._deferreds=null}function se(e,t,n){this.onFulfilled=typeof e==`function`?e:null,this.onRejected=typeof t==`function`?t:null,this.promise=n}function ce(e,t){var n=!1;try{e((function(e){n||(n=!0,ae(t,e))}),(function(e){n||(n=!0,y(t,e))}))}catch(e){if(n)return;n=!0,y(t,e)}}v.prototype.catch=function(e){return this.then(null,e)},v.prototype.then=function(e,t){var n=new this.constructor(re);return ie(this,new se(e,t,n)),n},v.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},v.all=function(e){return new v((function(t,n){if(!ne(e))return n(TypeError(`Promise.all accepts an array`));var r=Array.prototype.slice.call(e);if(r.length===0)return t([]);var i=r.length;function a(e,o){try{if(o&&(_(o)===`object`||typeof o==`function`)){var s=o.then;if(typeof s==`function`)return void s.call(o,(function(t){a(e,t)}),n)}r[e]=o,--i==0&&t(r)}catch(e){n(e)}}for(var o=0;o<r.length;o++)a(o,r[o])}))},v.any=function(e){var t=this;return new t((function(n,r){if(!e||e.length===void 0)return r(TypeError(`Promise.any accepts an array`));var i=Array.prototype.slice.call(e);if(i.length===0)return r();for(var a=[],o=0;o<i.length;o++)try{t.resolve(i[o]).then(n).catch((function(e){a.push(e),a.length===i.length&&r(new ee(a,`All promises were rejected`))}))}catch(e){r(e)}}))},v.allSettled=function(e){return new this((function(t,n){if(!e||e.length===void 0)return n(TypeError(g(e)+` `+e+` is not iterable(cannot read property Symbol(Symbol.iterator))`));var r=Array.prototype.slice.call(e);if(r.length===0)return t([]);var i=r.length;function a(e,n){if(n&&(g(n)===`object`||typeof n==`function`)){var o=n.then;if(typeof o==`function`)return void o.call(n,(function(t){a(e,t)}),(function(n){r[e]={status:`rejected`,reason:n},--i==0&&t(r)}))}r[e]={status:`fulfilled`,value:n},--i==0&&t(r)}for(var o=0;o<r.length;o++)a(o,r[o])}))},v.resolve=function(e){return e&&_(e)===`object`&&e.constructor===v?e:new v((function(t){t(e)}))},v.reject=function(e){return new v((function(t,n){n(e)}))},v.race=function(e){return new v((function(t,n){if(!ne(e))return n(TypeError(`Promise.race accepts an array`));for(var r=0,i=e.length;r<i;r++)v.resolve(e[r]).then(t,n)}))},v._immediateFn=typeof setImmediate==`function`&&function(e){setImmediate(e)}||function(e){te(e,0)},v._unhandledRejectionFn=function(e){typeof console<`u`&&console&&console.warn(`Possible Unhandled Promise Rejection:`,e)};let le=v;var ue=/mobile/i.test(window.navigator.userAgent);let b={secondToTime:function(e){if((e||=0)===0||e===1/0||e.toString()===`NaN`)return`00:00`;var t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60),r=Math.floor(e-3600*t-60*n);return(t>0?[t,n,r]:[n,r]).map((function(e){return e<10?`0`+e:``+e})).join(`:`)},getElementViewLeft:function(e){var t=e.offsetLeft,n=e.offsetParent,r=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;n!==null&&n!==e;)t+=n.offsetLeft,n=n.offsetParent;else for(;n!==null;)t+=n.offsetLeft,n=n.offsetParent;return t-r},getBoundingClientRectViewLeft:function(e){var t=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(e.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!=`number`){var n=document.createElement(`div`);n.style.cssText=`position:absolute;top:0;left:0;`,document.body.appendChild(n),this.getBoundingClientRectViewLeft.offset=-n.getBoundingClientRect().top-t,document.body.removeChild(n),n=null}var r=e.getBoundingClientRect(),i=this.getBoundingClientRectViewLeft.offset;return r.left+i}return this.getElementViewLeft(e)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(e){var t=e.left,n=t===void 0?0:t,r=e.top,i=r===void 0?0:r;this.isFirefox?(document.documentElement.scrollLeft=n,document.documentElement.scrollTop=i):window.scrollTo(n,i)},isMobile:ue,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(e,t){localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)}},nameMap:{dragStart:ue?`touchstart`:`mousedown`,dragMove:ue?`touchmove`:`mousemove`,dragEnd:ue?`touchend`:`mouseup`},color2Number:function(e){return e[0]===`#`&&(e=e.substr(1)),e.length===3&&(e=``.concat(e[0],e[0],e[1],e[1],e[2],e[2])),parseInt(e,16)+0&16777215},number2Color:function(e){return`#`+(`00000`+e.toString(16)).slice(-6)},number2Type:function(e){switch(e){case 0:default:return`right`;case 1:return`top`;case 2:return`bottom`}}};function de(e,t){return function(){return e.apply(t,arguments)}}function fe(e){return fe=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},fe(e)}var pe,me=Object.prototype.toString,he=Object.getPrototypeOf,ge=(pe=Object.create(null),function(e){var t=me.call(e);return pe[t]||(pe[t]=t.slice(8,-1).toLowerCase())}),x=function(e){return e=e.toLowerCase(),function(t){return ge(t)===e}},_e=function(e){return function(t){return fe(t)===e}},S=Array.isArray,C=_e(`undefined`),ve=x(`ArrayBuffer`),ye=_e(`string`),w=_e(`function`),be=_e(`number`),xe=function(e){return e!==null&&fe(e)===`object`},Se=function(e){if(ge(e)!==`object`)return!1;var t=he(e);return!(t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.toStringTag in e||Symbol.iterator in e)},Ce=x(`Date`),we=x(`File`),Te=x(`Blob`),Ee=x(`FileList`),De=x(`URLSearchParams`);function T(e,t){var n,r,i=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).allOwnKeys,a=i!==void 0&&i;if(e!=null)if(fe(e)!==`object`&&(e=[e]),S(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{var o,s=a?Object.getOwnPropertyNames(e):Object.keys(e),c=s.length;for(n=0;n<c;n++)o=s[n],t.call(null,e[o],o,e)}}function Oe(e,t){t=t.toLowerCase();for(var n,r=Object.keys(e),i=r.length;i-- >0;)if(t===(n=r[i]).toLowerCase())return n;return null}var ke,Ae,je=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,Me=function(e){return!C(e)&&e!==je},Ne=(ke=typeof Uint8Array<`u`&&he(Uint8Array),function(e){return ke&&e instanceof ke}),Pe=x(`HTMLFormElement`),Fe=(Ae=Object.prototype.hasOwnProperty,function(e,t){return Ae.call(e,t)}),Ie=x(`RegExp`),Le=function(e,t){var n=Object.getOwnPropertyDescriptors(e),r={};T(n,(function(n,i){!1!==t(n,i,e)&&(r[i]=n)})),Object.defineProperties(e,r)};let E={isArray:S,isArrayBuffer:ve,isBuffer:function(e){return e!==null&&!C(e)&&e.constructor!==null&&!C(e.constructor)&&w(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:function(e){var t=`[object FormData]`;return e&&(typeof FormData==`function`&&e instanceof FormData||me.call(e)===t||w(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&ve(e.buffer)},isString:ye,isNumber:be,isBoolean:function(e){return!0===e||!1===e},isObject:xe,isPlainObject:Se,isUndefined:C,isDate:Ce,isFile:we,isBlob:Te,isRegExp:Ie,isFunction:w,isStream:function(e){return xe(e)&&w(e.pipe)},isURLSearchParams:De,isTypedArray:Ne,isFileList:Ee,forEach:T,merge:function e(){for(var t=(Me(this)&&this||{}).caseless,n={},r=function(r,i){var a=t&&Oe(n,i)||i;Se(n[a])&&Se(r)?n[a]=e(n[a],r):Se(r)?n[a]=e({},r):S(r)?n[a]=r.slice():n[a]=r},i=0,a=arguments.length;i<a;i++)arguments[i]&&T(arguments[i],r);return n},extend:function(e,t,n){var r=(arguments.length>3&&arguments[3]!==void 0?arguments[3]:{}).allOwnKeys;return T(t,(function(t,r){n&&w(t)?e[r]=de(t,n):e[r]=t}),{allOwnKeys:r}),e},trim:function(e){return e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``)},stripBOM:function(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,`super`,{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n,r){var i,a,o,s={};if(t||={},e==null)return t;do{for(a=(i=Object.getOwnPropertyNames(e)).length;a-- >0;)o=i[a],r&&!r(o,e,t)||s[o]||(t[o]=e[o],s[o]=!0);e=!1!==n&&he(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:ge,kindOfTest:x,endsWith:function(e,t,n){e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return r!==-1&&r===n},toArray:function(e){if(!e)return null;if(S(e))return e;var t=e.length;if(!be(t))return null;for(var n=Array(t);t-- >0;)n[t]=e[t];return n},forEachEntry:function(e,t){for(var n,r=(e&&e[Symbol.iterator]).call(e);(n=r.next())&&!n.done;){var i=n.value;t.call(e,i[0],i[1])}},matchAll:function(e,t){for(var n,r=[];(n=e.exec(t))!==null;)r.push(n);return r},isHTMLForm:Pe,hasOwnProperty:Fe,hasOwnProp:Fe,reduceDescriptors:Le,freezeMethods:function(e){Le(e,(function(t,n){if(w(e)&&[`arguments`,`caller`,`callee`].indexOf(n)!==-1)return!1;var r=e[n];w(r)&&(t.enumerable=!1,`writable`in t?t.writable=!1:t.set||=function(){throw Error(`Can not rewrite read-only method '`+n+`'`)})}))},toObjectSet:function(e,t){var n={},r=function(e){e.forEach((function(e){n[e]=!0}))};return S(e)?r(e):r(String(e).split(t)),n},toCamelCase:function(e){return e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n}))},noop:function(){},toFiniteNumber:function(e,t){return e=+e,Number.isFinite(e)?e:t},findKey:Oe,global:je,isContextDefined:Me,toJSONObject:function(e){var t=Array(10);return function e(n,r){if(xe(n)){if(t.indexOf(n)>=0)return;if(!(`toJSON`in n)){t[r]=n;var i=S(n)?[]:{};return T(n,(function(t,n){var a=e(t,r+1);!C(a)&&(i[n]=a)})),t[r]=void 0,i}}return n}(e,0)}};function D(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name=`AxiosError`,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}E.inherits(D,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Re=D.prototype,ze={};[`ERR_BAD_OPTION_VALUE`,`ERR_BAD_OPTION`,`ECONNABORTED`,`ETIMEDOUT`,`ERR_NETWORK`,`ERR_FR_TOO_MANY_REDIRECTS`,`ERR_DEPRECATED`,`ERR_BAD_RESPONSE`,`ERR_BAD_REQUEST`,`ERR_CANCELED`,`ERR_NOT_SUPPORT`,`ERR_INVALID_URL`].forEach((function(e){ze[e]={value:e}})),Object.defineProperties(D,ze),Object.defineProperty(Re,`isAxiosError`,{value:!0}),D.from=function(e,t,n,r,i,a){var o=Object.create(Re);return E.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(function(e){return e!==`isAxiosError`})),D.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};let O=D,Be=n(937);function Ve(e){return Ve=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ve(e)}function He(e){return E.isPlainObject(e)||E.isArray(e)}function Ue(e){return E.endsWith(e,`[]`)?e.slice(0,-2):e}function We(e,t,n){return e?e.concat(t).map((function(e,t){return e=Ue(e),!n&&t?`[`+e+`]`:e})).join(n?`.`:``):t}var Ge=E.toFlatObject(E,{},null,(function(e){return/^is[A-Z]/.test(e)}));let Ke=function(e,t,n){if(!E.isObject(e))throw TypeError(`target must be an object`);t||=new(Be||FormData);var r,i=(n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!E.isUndefined(t[e])}))).metaTokens,a=n.visitor||u,o=n.dots,s=n.indexes,c=(n.Blob||typeof Blob<`u`&&Blob)&&(r=t)&&E.isFunction(r.append)&&r[Symbol.toStringTag]===`FormData`&&r[Symbol.iterator];if(!E.isFunction(a))throw TypeError(`visitor must be a function`);function l(e){if(e===null)return``;if(E.isDate(e))return e.toISOString();if(!c&&E.isBlob(e))throw new O(`Blob is not supported. Use a Buffer instead.`);return E.isArrayBuffer(e)||E.isTypedArray(e)?c&&typeof Blob==`function`?new Blob([e]):Buffer.from(e):e}function u(e,n,r){var a=e;if(e&&!r&&Ve(e)===`object`){if(E.endsWith(n,`{}`))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if(E.isArray(e)&&function(e){return E.isArray(e)&&!e.some(He)}(e)||E.isFileList(e)||E.endsWith(n,`[]`)&&(a=E.toArray(e)))return n=Ue(n),a.forEach((function(e,r){!E.isUndefined(e)&&e!==null&&t.append(!0===s?We([n],r,o):s===null?n:n+`[]`,l(e))})),!1}return!!He(e)||(t.append(We(r,n,o),l(e)),!1)}var d=[],f=Object.assign(Ge,{defaultVisitor:u,convertValue:l,isVisitable:He});if(!E.isObject(e))throw TypeError(`data must be an object`);return function e(n,r){if(!E.isUndefined(n)){if(d.indexOf(n)!==-1)throw Error(`Circular reference detected in `+r.join(`.`));d.push(n),E.forEach(n,(function(n,i){!0===(!(E.isUndefined(n)||n===null)&&a.call(t,n,E.isString(i)?i.trim():i,r,f))&&e(n,r?r.concat(i):[i])})),d.pop()}}(e),t};function qe(e){var t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`,"%00":`\0`};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Je(e,t){this._pairs=[],e&&Ke(e,this,t)}var Ye=Je.prototype;Ye.append=function(e,t){this._pairs.push([e,t])},Ye.toString=function(e){var t=e?function(t){return e.call(this,t,qe)}:qe;return this._pairs.map((function(e){return t(e[0])+`=`+t(e[1])}),``).join(`&`)};let Xe=Je;function Ze(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`).replace(/%5B/gi,`[`).replace(/%5D/gi,`]`)}function Qe(e,t,n){if(!t)return e;var r,i=n&&n.encode||Ze,a=n&&n.serialize;if(r=a?a(t,n):E.isURLSearchParams(t)?t.toString():new Xe(t,n).toString(i)){var o=e.indexOf(`#`);o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+r}return e}function k(e){return k=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},k(e)}function $e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(k(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(k(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),k(i)===`symbol`?i:String(i)),r)}var i}let et=function(){function e(){(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.handlers=[]}var t,n;return t=e,n=[{key:`use`,value:function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}},{key:`eject`,value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{key:`clear`,value:function(){this.handlers&&=[]}},{key:`forEach`,value:function(e){E.forEach(this.handlers,(function(t){t!==null&&e(t)}))}}],n&&$e(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}(),tt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nt=typeof URLSearchParams<`u`?URLSearchParams:Xe,rt=FormData;var it,at=(typeof navigator>`u`||(it=navigator.product)!==`ReactNative`&&it!==`NativeScript`&&it!==`NS`)&&typeof window<`u`&&typeof document<`u`,ot=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`;let A={isBrowser:!0,classes:{URLSearchParams:nt,FormData:rt,Blob},isStandardBrowserEnv:at,isStandardBrowserWebWorkerEnv:ot,protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},st=function(e){function t(e,n,r,i){var a=e[i++],o=Number.isFinite(+a),s=i>=e.length;return a=!a&&E.isArray(r)?r.length:a,s?(E.hasOwnProp(r,a)?r[a]=[r[a],n]:r[a]=n,!o):(r[a]&&E.isObject(r[a])||(r[a]=[]),t(e,n,r[a],i)&&E.isArray(r[a])&&(r[a]=function(e){var t,n,r={},i=Object.keys(e),a=i.length;for(t=0;t<a;t++)r[n=i[t]]=e[n];return r}(r[a])),!o)}if(E.isFormData(e)&&E.isFunction(e.entries)){var n={};return E.forEachEntry(e,(function(e,r){t(function(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map((function(e){return e[0]===`[]`?``:e[1]||e[0]}))}(e),r,n,0)})),n}return null};var ct={"Content-Type":void 0},lt={transitional:tt,adapter:[`xhr`,`http`],transformRequest:[function(e,t){var n,r=t.getContentType()||``,i=r.indexOf(`application/json`)>-1,a=E.isObject(e);if(a&&E.isHTMLForm(e)&&(e=new FormData(e)),E.isFormData(e))return i&&i?JSON.stringify(st(e)):e;if(E.isArrayBuffer(e)||E.isBuffer(e)||E.isStream(e)||E.isFile(e)||E.isBlob(e))return e;if(E.isArrayBufferView(e))return e.buffer;if(E.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();if(a){if(r.indexOf(`application/x-www-form-urlencoded`)>-1)return function(e,t){return Ke(e,new A.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return A.isNode&&E.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((n=E.isFileList(e))||r.indexOf(`multipart/form-data`)>-1){var o=this.env&&this.env.FormData;return Ke(n?{"files[]":e}:e,o&&new o,this.formSerializer)}}return a||i?(t.setContentType(`application/json`,!1),function(e,t,n){if(E.isString(e))try{return(0,JSON.parse)(e),E.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||lt.transitional,n=t&&t.forcedJSONParsing,r=this.responseType===`json`;if(e&&E.isString(e)&&(n&&!this.responseType||r)){var i=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(i)throw e.name===`SyntaxError`?O.from(e,O.ERR_BAD_RESPONSE,this,null,this.response):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`}}};E.forEach([`delete`,`get`,`head`],(function(e){lt.headers[e]={}})),E.forEach([`post`,`put`,`patch`],(function(e){lt.headers[e]=E.merge(ct)}));let ut=lt;var dt=E.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]);function j(e){return j=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},j(e)}function ft(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function pt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(j(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(j(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),j(i)===`symbol`?i:String(i)),r)}var i}var mt=Symbol(`internals`);function M(e){return e&&String(e).trim().toLowerCase()}function ht(e){return!1===e||e==null?e:E.isArray(e)?e.map(ht):String(e)}function gt(e,t,n,r){return E.isFunction(r)?r.call(this,t,n):E.isString(t)?E.isString(r)?t.indexOf(r)!==-1:E.isRegExp(r)?r.test(t):void 0:void 0}var _t=function(e,t){function n(e){(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,n),e&&this.set(e)}var r,i,a;return r=n,i=[{key:`set`,value:function(e,t,n){var r=this;function i(e,t,n){var i=M(t);if(!i)throw Error(`header name must be a non-empty string`);var a=E.findKey(r,i);(!a||r[a]===void 0||!0===n||n===void 0&&!1!==r[a])&&(r[a||t]=ht(e))}var a,o,s,c,l,u=function(e,t){return E.forEach(e,(function(e,n){return i(e,n,t)}))};return E.isPlainObject(e)||e instanceof this.constructor?u(e,t):E.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?u((l={},(a=e)&&a.split(`
`).forEach((function(e){c=e.indexOf(`:`),o=e.substring(0,c).trim().toLowerCase(),s=e.substring(c+1).trim(),!o||l[o]&&dt[o]||(o===`set-cookie`?l[o]?l[o].push(s):l[o]=[s]:l[o]=l[o]?l[o]+`, `+s:s)})),l),t):e!=null&&i(t,e,n),this}},{key:`get`,value:function(e,t){if(e=M(e)){var n=E.findKey(this,e);if(n){var r=this[n];if(!t)return r;if(!0===t)return function(e){for(var t,n=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;t=r.exec(e);)n[t[1]]=t[2];return n}(r);if(E.isFunction(t))return t.call(this,r,n);if(E.isRegExp(t))return t.exec(r);throw TypeError(`parser must be boolean|regexp|function`)}}}},{key:`has`,value:function(e,t){if(e=M(e)){var n=E.findKey(this,e);return!(!n||t&&!gt(0,this[n],n,t))}return!1}},{key:`delete`,value:function(e,t){var n=this,r=!1;function i(e){if(e=M(e)){var i=E.findKey(n,e);!i||t&&!gt(0,n[i],i,t)||(delete n[i],r=!0)}}return E.isArray(e)?e.forEach(i):i(e),r}},{key:`clear`,value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:`normalize`,value:function(e){var t=this,n={};return E.forEach(this,(function(r,i){var a=E.findKey(n,i);if(a)return t[a]=ht(r),void delete t[i];var o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n}))}(i):String(i).trim();o!==i&&delete t[i],t[o]=ht(r),n[o]=!0})),this}},{key:`concat`,value:function(){for(var e,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=this.constructor).concat.apply(e,[this].concat(n))}},{key:`toJSON`,value:function(e){var t=Object.create(null);return E.forEach(this,(function(n,r){n!=null&&!1!==n&&(t[r]=e&&E.isArray(n)?n.join(`, `):n)})),t}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:`toString`,value:function(){return Object.entries(this.toJSON()).map((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}(t,n)||function(e,t){if(e){if(typeof e==`string`)return ft(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ft(e,t):void 0}}(t,n)||function(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return r[0]+`: `+r[1]})).join(`
`)}},{key:Symbol.toStringTag,get:function(){return`AxiosHeaders`}}],a=[{key:`from`,value:function(e){return e instanceof this?e:new this(e)}},{key:`concat`,value:function(e){for(var t=new this(e),n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.forEach((function(e){return t.set(e)})),t}},{key:`accessor`,value:function(e){var t=(this[mt]=this[mt]={accessors:{}}).accessors,n=this.prototype;function r(e){var r=M(e);t[r]||(function(e,t){var n=E.toCamelCase(` `+t);[`get`,`set`,`has`].forEach((function(r){Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return E.isArray(e)?e.forEach(r):r(e),this}}],i&&pt(r.prototype,i),a&&pt(r,a),Object.defineProperty(r,`prototype`,{writable:!1}),n}();_t.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`]),E.freezeMethods(_t.prototype),E.freezeMethods(_t);let N=_t;function vt(e,t){var n=this||ut,r=t||n,i=N.from(r.headers),a=r.data;return E.forEach(e,(function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)})),i.normalize(),a}function yt(e){return!(!e||!e.__CANCEL__)}function bt(e,t,n){O.call(this,e??`canceled`,O.ERR_CANCELED,t,n),this.name=`CanceledError`}E.inherits(bt,O,{__CANCEL__:!0});let xt=bt,St=A.isStandardBrowserEnv?{write:function(e,t,n,r,i,a){var o=[];o.push(e+`=`+encodeURIComponent(t)),E.isNumber(n)&&o.push(`expires=`+new Date(n).toGMTString()),E.isString(r)&&o.push(`path=`+r),E.isString(i)&&o.push(`domain=`+i),!0===a&&o.push(`secure`),document.cookie=o.join(`; `)},read:function(e){var t=document.cookie.match(RegExp(`(^|;\\s*)(`+e+`)=([^;]*)`));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,``,Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Ct(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,``)+`/`+t.replace(/^\/+/,``):e}(e,t):t}let wt=A.isStandardBrowserEnv?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement(`a`);function r(e){var r=e;return t&&(n.setAttribute(`href`,r),r=n.href),n.setAttribute(`href`,r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,``):``,host:n.host,search:n.search?n.search.replace(/^\?/,``):``,hash:n.hash?n.hash.replace(/^#/,``):``,hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)===`/`?n.pathname:`/`+n.pathname}}return e=r(window.location.href),function(t){var n=E.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0};function Tt(e,t){var n=0,r=function(e,t){e||=10;var n,r=Array(e),i=Array(e),a=0,o=0;return t=t===void 0?1e3:t,function(s){var c=Date.now(),l=i[o];n||=c,r[a]=s,i[a]=c;for(var u=o,d=0;u!==a;)d+=r[u++],u%=e;if((a=(a+1)%e)===o&&(o=(o+1)%e),!(c-n<t)){var f=l&&c-l;return f?Math.round(1e3*d/f):void 0}}}(50,250);return function(i){var a=i.loaded,o=i.lengthComputable?i.total:void 0,s=a-n,c=r(s);n=a;var l={loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:c||void 0,estimated:c&&o&&a<=o?(o-a)/c:void 0,event:i};l[t?`download`:`upload`]=!0,e(l)}}var Et={http:null,xhr:typeof XMLHttpRequest<`u`&&function(e){return new Promise((function(t,n){var r,i=e.data,a=N.from(e.headers).normalize(),o=e.responseType;function s(){e.cancelToken&&e.cancelToken.unsubscribe(r),e.signal&&e.signal.removeEventListener(`abort`,r)}E.isFormData(i)&&(A.isStandardBrowserEnv||A.isStandardBrowserWebWorkerEnv)&&a.setContentType(!1);var c=new XMLHttpRequest;if(e.auth){var l=e.auth.username||``,u=e.auth.password?unescape(encodeURIComponent(e.auth.password)):``;a.set(`Authorization`,`Basic `+btoa(l+`:`+u))}var d=Ct(e.baseURL,e.url);function f(){if(c){var r=N.from(`getAllResponseHeaders`in c&&c.getAllResponseHeaders());(function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new O(`Request failed with status code `+n.status,[O.ERR_BAD_REQUEST,O.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)})((function(e){t(e),s()}),(function(e){n(e),s()}),{data:o&&o!==`text`&&o!==`json`?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}}if(c.open(e.method.toUpperCase(),Qe(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,`onloadend`in c?c.onloadend=f:c.onreadystatechange=function(){c&&c.readyState===4&&(c.status!==0||c.responseURL&&c.responseURL.indexOf(`file:`)===0)&&setTimeout(f)},c.onabort=function(){c&&=(n(new O(`Request aborted`,O.ECONNABORTED,e,c)),null)},c.onerror=function(){n(new O(`Network Error`,O.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){var t=e.timeout?`timeout of `+e.timeout+`ms exceeded`:`timeout exceeded`,r=e.transitional||tt;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new O(t,r.clarifyTimeoutError?O.ETIMEDOUT:O.ECONNABORTED,e,c)),c=null},A.isStandardBrowserEnv){var p=(e.withCredentials||wt(d))&&e.xsrfCookieName&&St.read(e.xsrfCookieName);p&&a.set(e.xsrfHeaderName,p)}i===void 0&&a.setContentType(null),`setRequestHeader`in c&&E.forEach(a.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),E.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!==`json`&&(c.responseType=e.responseType),typeof e.onDownloadProgress==`function`&&c.addEventListener(`progress`,Tt(e.onDownloadProgress,!0)),typeof e.onUploadProgress==`function`&&c.upload&&c.upload.addEventListener(`progress`,Tt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(r=function(t){c&&=(n(!t||t.type?new xt(null,e,c):t),c.abort(),null)},e.cancelToken&&e.cancelToken.subscribe(r),e.signal&&(e.signal.aborted?r():e.signal.addEventListener(`abort`,r)));var m,h=(m=/^([-+\w]{1,25})(:?\/\/|:)/.exec(d))&&m[1]||``;h&&A.protocols.indexOf(h)===-1?n(new O(`Unsupported protocol `+h+`:`,O.ERR_BAD_REQUEST,e)):c.send(i||null)}))}};E.forEach(Et,(function(e,t){if(e){try{Object.defineProperty(e,`name`,{value:t})}catch{}Object.defineProperty(e,`adapterName`,{value:t})}}));function Dt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new xt(null,e)}function Ot(e){return Dt(e),e.headers=N.from(e.headers),e.data=vt.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),function(e){for(var t,n,r=(e=E.isArray(e)?e:[e]).length,i=0;i<r&&(t=e[i],!(n=E.isString(t)?Et[t.toLowerCase()]:t));i++);if(!n)throw!1===n?new O(`Adapter ${t} is not supported by the environment`,`ERR_NOT_SUPPORT`):Error(E.hasOwnProp(Et,t)?`Adapter '${t}' is not available in the build`:`Unknown adapter '${t}'`);if(!E.isFunction(n))throw TypeError(`adapter is not a function`);return n}(e.adapter||ut.adapter)(e).then((function(t){return Dt(e),t.data=vt.call(e,e.transformResponse,t),t.headers=N.from(t.headers),t}),(function(t){return yt(t)||(Dt(e),t&&t.response&&(t.response.data=vt.call(e,e.transformResponse,t.response),t.response.headers=N.from(t.response.headers))),Promise.reject(t)}))}var kt=function(e){return e instanceof N?e.toJSON():e};function P(e,t){t||={};var n={};function r(e,t,n){return E.isPlainObject(e)&&E.isPlainObject(t)?E.merge.call({caseless:n},e,t):E.isPlainObject(t)?E.merge({},t):E.isArray(t)?t.slice():t}function i(e,t,n){return E.isUndefined(t)?E.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function a(e,t){if(!E.isUndefined(t))return r(void 0,t)}function o(e,t){return E.isUndefined(t)?E.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function s(n,i,a){return a in t?r(n,i):a in e?r(void 0,n):void 0}var c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:function(e,t){return i(kt(e),kt(t),!0)}};return E.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){var a=c[r]||i,o=a(e[r],t[r],r);E.isUndefined(o)&&a!==s||(n[r]=o)})),n}function At(e){return At=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},At(e)}var jt={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((function(e,t){jt[e]=function(n){return At(n)===e||`a`+(t<1?`n `:` `)+e}}));var Mt={};jt.transitional=function(e,t,n){function r(e,t){return`[Axios v1.2.3] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return function(n,i,a){if(!1===e)throw new O(r(i,` has been removed`+(t?` in `+t:``)),O.ERR_DEPRECATED);return t&&!Mt[i]&&(Mt[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),!e||e(n,i,a)}};let Nt={assertOptions:function(e,t,n){if(At(e)!==`object`)throw new O(`options must be an object`,O.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),i=r.length;i-- >0;){var a=r[i],o=t[a];if(o){var s=e[a],c=s===void 0||o(s,a,e);if(!0!==c)throw new O(`option `+a+` must be `+c,O.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new O(`Unknown option `+a,O.ERR_BAD_OPTION)}},validators:jt};function F(e){return F=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},F(e)}function Pt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(F(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(F(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),F(i)===`symbol`?i:String(i)),r)}var i}var I=Nt.validators,Ft=function(){function e(t){(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.defaults=t,this.interceptors={request:new et,response:new et}}var t,n;return t=e,(n=[{key:`request`,value:function(e,t){typeof e==`string`?(t||={}).url=e:t=e||{};var n,r=t=P(this.defaults,t),i=r.transitional,a=r.paramsSerializer,o=r.headers;i!==void 0&&Nt.assertOptions(i,{silentJSONParsing:I.transitional(I.boolean),forcedJSONParsing:I.transitional(I.boolean),clarifyTimeoutError:I.transitional(I.boolean)},!1),a!==void 0&&Nt.assertOptions(a,{encode:I.function,serialize:I.function},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase(),(n=o&&E.merge(o.common,o[t.method]))&&E.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`common`],(function(e){delete o[e]})),t.headers=N.concat(n,o);var s=[],c=!0;this.interceptors.request.forEach((function(e){typeof e.runWhen==`function`&&!1===e.runWhen(t)||(c&&=e.synchronous,s.unshift(e.fulfilled,e.rejected))}));var l,u=[];this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)}));var d,f=0;if(!c){var p=[Ot.bind(this),void 0];for(p.unshift.apply(p,s),p.push.apply(p,u),d=p.length,l=Promise.resolve(t);f<d;)l=l.then(p[f++],p[f++]);return l}d=s.length;var m=t;for(f=0;f<d;){var h=s[f++],g=s[f++];try{m=h(m)}catch(e){g.call(this,e);break}}try{l=Ot.call(this,m)}catch(e){return Promise.reject(e)}for(f=0,d=u.length;f<d;)l=l.then(u[f++],u[f++]);return l}},{key:`getUri`,value:function(e){return Qe(Ct((e=P(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}])&&Pt(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}();E.forEach([`delete`,`get`,`head`,`options`],(function(e){Ft.prototype[e]=function(t,n){return this.request(P(n||{},{method:e,url:t,data:(n||{}).data}))}})),E.forEach([`post`,`put`,`patch`],(function(e){function t(t){return function(n,r,i){return this.request(P(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}Ft.prototype[e]=t(),Ft.prototype[e+`Form`]=t(!0)}));let It=Ft;function L(e){return L=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},L(e)}function Lt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(L(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(L(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),L(i)===`symbol`?i:String(i)),r)}var i}let Rt=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}(this,e),typeof t!=`function`)throw TypeError(`executor must be a function.`);var n;this.promise=new Promise((function(e){n=e}));var r=this;this.promise.then((function(e){if(r._listeners){for(var t=r._listeners.length;t-- >0;)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},t((function(e,t,i){r.reason||(r.reason=new xt(e,t,i),n(r.reason))}))}var t,n,r;return t=e,n=[{key:`throwIfRequested`,value:function(){if(this.reason)throw this.reason}},{key:`subscribe`,value:function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}},{key:`unsubscribe`,value:function(e){if(this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}}}],r=[{key:`source`,value:function(){var t;return{token:new e((function(e){t=e})),cancel:t}}}],n&&Lt(t.prototype,n),r&&Lt(t,r),Object.defineProperty(t,`prototype`,{writable:!1}),e}();function zt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Bt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Bt).forEach((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}(t,n)||function(e,t){if(e){if(typeof e==`string`)return zt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?zt(e,t):void 0}}(t,n)||function(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),i=r[0],a=r[1];Bt[a]=i}));let Vt=Bt;var R=function e(t){var n=new It(t),r=de(It.prototype.request,n);return E.extend(r,It.prototype,n,{allOwnKeys:!0}),E.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(P(t,n))},r}(ut);R.Axios=It,R.CanceledError=xt,R.CancelToken=Rt,R.isCancel=yt,R.VERSION=`1.2.3`,R.toFormData=Ke,R.AxiosError=O,R.Cancel=R.CanceledError,R.all=function(e){return Promise.all(e)},R.spread=function(e){return function(t){return e.apply(null,t)}},R.isAxiosError=function(e){return E.isObject(e)&&!0===e.isAxiosError},R.mergeConfig=P,R.AxiosHeaders=N,R.formToJSON=function(e){return st(E.isHTMLForm(e)?new FormData(e):e)},R.HttpStatusCode=Vt,R.default=R;let Ht=R,Ut={send:function(e){Ht.post(e.url,e.data).then((function(t){var n=t.data;n&&n.code===0?e.success&&e.success(n):e.error&&e.error(n&&n.msg)})).catch((function(t){console.error(t),e.error&&e.error()}))},read:function(e){Ht.get(e.url).then((function(t){var n=t.data;n&&n.code===0?e.success&&e.success(n.data.map((function(e){return{time:e[0],type:e[1],color:e[2],author:e[3],text:e[4]}}))):e.error&&e.error(n&&n.msg)})).catch((function(t){console.error(t),e.error&&e.error()}))}};function Wt(e){return Wt=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Wt(e)}function Gt(e){var t=this;this.lang=e,this.fallbackLang=this.lang.includes(`-`)?this.lang.split(`-`)[0]:this.lang,this.tran=function(e){return e=e.toLowerCase(),z[t.lang]&&z[t.lang][e]?z[t.lang][e]:z[t.fallbackLang]&&z[t.fallbackLang][e]?z[t.fallbackLang][e]:Kt[e]?Kt[e]:e}}var Kt={"danmaku-loading":`Danmaku is loading`,top:`Top`,bottom:`Bottom`,rolling:`Rolling`,"input-danmaku-enter":`Input danmaku, hit Enter`,"about-author":`About author`,"dplayer-feedback":`DPlayer feedback`,"about-dplayer":`About DPlayer`,loop:`Loop`,speed:`Speed`,"opacity-danmaku":`Opacity for danmaku`,normal:`Normal`,"please-input-danmaku":`Please input danmaku content!`,"set-danmaku-color":`Set danmaku color`,"set-danmaku-type":`Set danmaku type`,"show-danmaku":`Show danmaku`,"video-failed":`Video load failed`,"danmaku-failed":`Danmaku load failed`,"danmaku-send-failed":`Danmaku send failed`,"switching-quality":`Switching to %q quality`,"switched-quality":`Switched to %q quality`,ff:`FF %s s`,rew:`REW %s s`,"unlimited-danmaku":`Unlimited danmaku`,"send-danmaku":`Send danmaku`,setting:`Setting`,fullscreen:`Full screen`,"web-fullscreen":`Web full screen`,send:`Send`,screenshot:`Screenshot`,airplay:`AirPlay`,chromecast:`ChromeCast`,subtitle:`Subtitle`,off:`Off`,"show-subs":`Show subtitle`,"hide-subs":`Hide subtitle`,volume:`Volume`,live:`Live`,"video-info":`Video info`},z={en:Kt,"zh-cn":{"danmaku-loading":`弹幕加载中`,top:`顶部`,bottom:`底部`,rolling:`滚动`,"input-danmaku-enter":`输入弹幕，回车发送`,"about-author":`关于作者`,"dplayer-feedback":`播放器意见反馈`,"about-dplayer":`关于 DPlayer 播放器`,loop:`洗脑循环`,speed:`速度`,"opacity-danmaku":`弹幕透明度`,normal:`正常`,"please-input-danmaku":`要输入弹幕内容啊喂！`,"set-danmaku-color":`设置弹幕颜色`,"set-danmaku-type":`设置弹幕类型`,"show-danmaku":`显示弹幕`,"video-failed":`视频加载失败`,"danmaku-failed":`弹幕加载失败`,"danmaku-send-failed":`弹幕发送失败`,"switching-quality":`正在切换至 %q 画质`,"switched-quality":`已经切换至 %q 画质`,ff:`快进 %s 秒`,rew:`快退 %s 秒`,"unlimited-danmaku":`海量弹幕`,"send-danmaku":`发送弹幕`,setting:`设置`,fullscreen:`全屏`,"web-fullscreen":`页面全屏`,send:`发送`,screenshot:`截图`,airplay:`无线投屏`,chromecast:`ChromeCast`,subtitle:`字幕`,off:`关闭`,"show-subs":`显示字幕`,"hide-subs":`隐藏字幕`,volume:`音量`,live:`直播`,"video-info":`视频统计信息`},"zh-tw":{"danmaku-loading":`彈幕載入中`,top:`頂部`,bottom:`底部`,rolling:`滾動`,"input-danmaku-enter":`輸入彈幕，Enter 發送`,"about-author":`關於作者`,"dplayer-feedback":`播放器意見回饋`,"about-dplayer":`關於 DPlayer 播放器`,loop:`循環播放`,speed:`速度`,"opacity-danmaku":`彈幕透明度`,normal:`正常`,"please-input-danmaku":`請輸入彈幕內容啊！`,"set-danmaku-color":`設定彈幕顏色`,"set-danmaku-type":`設定彈幕類型`,"show-danmaku":`顯示彈幕`,"video-failed":`影片載入失敗`,"danmaku-failed":`彈幕載入失敗`,"danmaku-send-failed":`彈幕發送失敗`,"switching-quality":`正在切換至 %q 畫質`,"switched-quality":`已經切換至 %q 畫質`,ff:`快進 %s 秒`,rew:`快退 %s 秒`,"unlimited-danmaku":`巨量彈幕`,"send-danmaku":`發送彈幕`,setting:`設定`,fullscreen:`全螢幕`,"web-fullscreen":`頁面全螢幕`,send:`發送`,screenshot:`截圖`,airplay:`無線投屏`,chromecast:`ChromeCast`,subtitle:`字幕`,off:`關閉`,"show-subs":`顯示字幕`,"hide-subs":`隱藏字幕`,volume:`音量`,live:`直播`,"video-info":`影片統計訊息`},"ko-kr":{"danmaku-loading":`Danmaku를 불러오는 중입니다.`,top:`Top`,bottom:`Bottom`,rolling:`Rolling`,"input-danmaku-enter":`Danmaku를 입력하고 Enter를 누르세요.`,"about-author":`만든이`,"dplayer-feedback":`피드백 보내기`,"about-dplayer":`DPlayer 정보`,loop:`반복`,speed:`배속`,"opacity-danmaku":`Danmaku 불투명도`,normal:`표준`,"please-input-danmaku":`Danmaku를 입력하세요!`,"set-danmaku-color":`Danmaku 색상`,"set-danmaku-type":`Danmaku 설정`,"show-danmaku":`Danmaku 표시`,"video-failed":`비디오를 불러오지 못했습니다.`,"danmaku-failed":`Danmaku를 불러오지 못했습니다.`,"danmaku-send-failed":`Danmaku 전송에 실패했습니다.`,"Switching to":``,"Switched to":``,"switching-quality":`전환 %q 화질`,"switched-quality":`전환 됨 %q 화질`,ff:`앞으로 %s 초`,rew:`뒤로 %s 초`,"unlimited-danmaku":`끝없는 Danmaku`,"send-danmaku":`Danmaku 보내기`,setting:`설정`,fullscreen:`전체 화면`,"web-fullscreen":`웹 내 전체화면`,send:`보내기`,screenshot:`화면 캡쳐`,airplay:`에어플레이`,chromecast:`ChromeCast`,subtitle:`부제`,off:`끄다`,"show-subs":`자막 보이기`,"hide-subs":`자막 숨기기`,Volume:`볼륨`,live:`생방송`,"video-info":`비디오 정보`},de:{"danmaku-loading":`Danmaku lädt...`,top:`Oben`,bottom:`Unten`,rolling:`Rollend`,"input-danmaku-enter":`Drücke Enter nach dem Einfügen vom Danmaku`,"about-author":`Über den Autor`,"dplayer-feedback":`DPlayer Feedback`,"about-dplayer":`Über DPlayer`,loop:`Wiederholen`,speed:`Geschwindigkeit`,"opacity-danmaku":`Transparenz für Danmaku`,normal:`Normal`,"please-input-danmaku":`Bitte Danmaku Inhalt eingeben!`,"set-danmaku-color":`Danmaku Farbe festlegen`,"set-danmaku-type":`Danmaku Typ festlegen`,"show-danmaku":`Zeige Danmaku`,"video-failed":`Das Video konnte nicht geladen werden`,"danmaku-failed":`Danmaku konnte nicht geladen werden`,"danmaku-send-failed":`Das senden von Danmaku ist fehgeschlagen`,"switching-quality":`Wechsle zur %q Qualität`,"switched-quality":`Zur %q Qualität gewechselt`,ff:`%s s Vorwärts`,rew:`%s s Zurück`,"unlimited-danmaku":`Unlimitiertes Danmaku`,"send-danmaku":`Sende Danmaku`,setting:`Einstellungen`,fullscreen:`Vollbild`,"web-fullscreen":`Browser Vollbild`,send:`Senden`,screenshot:`Screenshot`,airplay:`AirPlay`,"show-subs":`Zeige Untertitel`,chromecast:`ChromeCast`,subtitle:`Untertitel`,off:`Schließung`,"hide-subs":`Verstecke Untertitel`,volume:`Lautstärke`,live:`Live`,"video-info":`Video Info`}},qt=n(730),Jt=n.n(qt),Yt=n(74),Xt=n.n(Yt),Zt=n(437),Qt=n.n(Zt),$t=n(644),en=n.n($t),tn=n(324),nn=n.n(tn),rn=n(574),an=n.n(rn),on=n(300),sn=n.n(on),cn=n(934),ln=n.n(cn),un=n(428),dn=n.n(un),fn=n(807),pn=n.n(fn),mn=n(338),hn=n.n(mn),gn=n(254),_n=n.n(gn),vn=n(965),yn=n.n(vn),bn=n(113),xn=n.n(bn),Sn=n(251),Cn=n.n(Sn),wn=n(410),Tn=n.n(wn),En=n(182),Dn=n.n(En),On=n(193),kn=n.n(On);let B={play:Jt(),pause:Xt(),volumeUp:Qt(),volumeDown:en(),volumeOff:nn(),full:an(),fullWeb:sn(),setting:ln(),right:dn(),comment:pn(),commentOff:hn(),send:_n(),pallette:yn(),camera:xn(),subtitle:Tn(),loading:Dn(),airplay:Cn(),chromecast:kn()};var An=n(916),jn=n.n(An);function V(e){return V=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},V(e)}function Mn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(V(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(V(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),V(i)===`symbol`?i:String(i)),r)}var i}let Nn=function(){function e(t){(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.container=t.container,this.options=t.options,this.index=t.index,this.tran=t.tran,this.init()}var t,n,r;return t=e,r=[{key:`NewNotice`,value:function(e,t,n){var r=document.createElement(`div`);return r.classList.add(`dplayer-notice`),r.style.opacity=t,r.innerText=e,n&&(r.id=`dplayer-notice-${n}`),r}}],(n=[{key:`init`,value:function(){this.container.innerHTML=jn()({options:this.options,index:this.index,tran:this.tran,icons:B,mobile:b.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!b.isSafari||b.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(`.dplayer-volume-bar-inner`),this.volumeBarWrap=this.container.querySelector(`.dplayer-volume-bar`),this.volumeBarWrapWrap=this.container.querySelector(`.dplayer-volume-bar-wrap`),this.volumeButton=this.container.querySelector(`.dplayer-volume`),this.volumeButtonIcon=this.container.querySelector(`.dplayer-volume-icon`),this.volumeIcon=this.container.querySelector(`.dplayer-volume-icon .dplayer-icon-content`),this.playedBar=this.container.querySelector(`.dplayer-played`),this.loadedBar=this.container.querySelector(`.dplayer-loaded`),this.playedBarWrap=this.container.querySelector(`.dplayer-bar-wrap`),this.playedBarTime=this.container.querySelector(`.dplayer-bar-time`),this.danmaku=this.container.querySelector(`.dplayer-danmaku`),this.danmakuLoading=this.container.querySelector(`.dplayer-danloading`),this.video=this.container.querySelector(`.dplayer-video-current`),this.bezel=this.container.querySelector(`.dplayer-bezel-icon`),this.playButton=this.container.querySelector(`.dplayer-play-icon`),this.mobilePlayButton=this.container.querySelector(`.dplayer-mobile-play`),this.videoWrap=this.container.querySelector(`.dplayer-video-wrap`),this.controllerMask=this.container.querySelector(`.dplayer-controller-mask`),this.ptime=this.container.querySelector(`.dplayer-ptime`),this.settingButton=this.container.querySelector(`.dplayer-setting-icon`),this.settingBox=this.container.querySelector(`.dplayer-setting-box`),this.mask=this.container.querySelector(`.dplayer-mask`),this.loop=this.container.querySelector(`.dplayer-setting-loop`),this.loopToggle=this.container.querySelector(`.dplayer-setting-loop .dplayer-toggle-setting-input`),this.showDanmaku=this.container.querySelector(`.dplayer-setting-showdan`),this.showDanmakuToggle=this.container.querySelector(`.dplayer-showdan-setting-input`),this.unlimitDanmaku=this.container.querySelector(`.dplayer-setting-danunlimit`),this.unlimitDanmakuToggle=this.container.querySelector(`.dplayer-danunlimit-setting-input`),this.speed=this.container.querySelector(`.dplayer-setting-speed`),this.speedItem=this.container.querySelectorAll(`.dplayer-setting-speed-item`),this.danmakuOpacityBar=this.container.querySelector(`.dplayer-danmaku-bar-inner`),this.danmakuOpacityBarWrap=this.container.querySelector(`.dplayer-danmaku-bar`),this.danmakuOpacityBarWrapWrap=this.container.querySelector(`.dplayer-danmaku-bar-wrap`),this.danmakuOpacityBox=this.container.querySelector(`.dplayer-setting-danmaku`),this.dtime=this.container.querySelector(`.dplayer-dtime`),this.controller=this.container.querySelector(`.dplayer-controller`),this.commentInput=this.container.querySelector(`.dplayer-comment-input`),this.commentButton=this.container.querySelector(`.dplayer-comment-icon`),this.commentSettingBox=this.container.querySelector(`.dplayer-comment-setting-box`),this.commentSettingButton=this.container.querySelector(`.dplayer-comment-setting-icon`),this.commentSettingFill=this.container.querySelector(`.dplayer-comment-setting-icon path`),this.commentSendButton=this.container.querySelector(`.dplayer-send-icon`),this.commentSendFill=this.container.querySelector(`.dplayer-send-icon path`),this.commentColorSettingBox=this.container.querySelector(`.dplayer-comment-setting-color`),this.browserFullButton=this.container.querySelector(`.dplayer-full-icon`),this.webFullButton=this.container.querySelector(`.dplayer-full-in-icon`),this.menu=this.container.querySelector(`.dplayer-menu`),this.menuItem=this.container.querySelectorAll(`.dplayer-menu-item`),this.qualityList=this.container.querySelector(`.dplayer-quality-list`),this.camareButton=this.container.querySelector(`.dplayer-camera-icon`),this.airplayButton=this.container.querySelector(`.dplayer-airplay-icon`),this.chromecastButton=this.container.querySelector(`.dplayer-chromecast-icon`),this.subtitleButton=this.container.querySelector(`.dplayer-subtitle-icon`),this.subtitleButtonInner=this.container.querySelector(`.dplayer-subtitle-icon .dplayer-icon-content`),this.subtitlesButton=this.container.querySelector(`.dplayer-subtitles-icon`),this.subtitlesBox=this.container.querySelector(`.dplayer-subtitles-box`),this.subtitlesItem=this.container.querySelectorAll(`.dplayer-subtitles-item`),this.subtitle=this.container.querySelector(`.dplayer-subtitle`),this.subtrack=this.container.querySelector(`.dplayer-subtrack`),this.qualityButton=this.container.querySelector(`.dplayer-quality-icon`),this.barPreview=this.container.querySelector(`.dplayer-bar-preview`),this.barWrap=this.container.querySelector(`.dplayer-bar-wrap`),this.noticeList=this.container.querySelector(`.dplayer-notice-list`),this.infoPanel=this.container.querySelector(`.dplayer-info-panel`),this.infoPanelClose=this.container.querySelector(`.dplayer-info-panel-close`),this.infoVersion=this.container.querySelector(`.dplayer-info-panel-item-version .dplayer-info-panel-item-data`),this.infoFPS=this.container.querySelector(`.dplayer-info-panel-item-fps .dplayer-info-panel-item-data`),this.infoType=this.container.querySelector(`.dplayer-info-panel-item-type .dplayer-info-panel-item-data`),this.infoUrl=this.container.querySelector(`.dplayer-info-panel-item-url .dplayer-info-panel-item-data`),this.infoResolution=this.container.querySelector(`.dplayer-info-panel-item-resolution .dplayer-info-panel-item-data`),this.infoDuration=this.container.querySelector(`.dplayer-info-panel-item-duration .dplayer-info-panel-item-data`),this.infoDanmakuId=this.container.querySelector(`.dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data`),this.infoDanmakuApi=this.container.querySelector(`.dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data`),this.infoDanmakuAmount=this.container.querySelector(`.dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data`)}}])&&Mn(t.prototype,n),r&&Mn(t,r),Object.defineProperty(t,`prototype`,{writable:!1}),e}();function H(e){return H=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},H(e)}function Pn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(H(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(H(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),H(i)===`symbol`?i:String(i)),r)}var i}let Fn=function(){function e(t){(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.options=t,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(``),this.load()}var t,n;return t=e,n=[{key:`load`,value:function(){var e,t=this;e=this.options.api.maximum?`${this.options.api.address}v3/?id=${this.options.api.id}&max=${this.options.api.maximum}`:`${this.options.api.address}v3/?id=${this.options.api.id}`;var n=(this.options.api.addition||[]).slice(0);n.push(e),this.events&&this.events.trigger(`danmaku_load_start`,n),this._readAllEndpoints(n,(function(e){t.dan=[].concat.apply([],e).sort((function(e,t){return e.time-t.time})),window.requestAnimationFrame((function(){t.frame()})),t.options.callback(),t.events&&t.events.trigger(`danmaku_load_end`)}))}},{key:`reload`,value:function(e){this.options.api=e,this.dan=[],this.clear(),this.load()}},{key:`_readAllEndpoints`,value:function(e,t){for(var n=this,r=[],i=0,a=function(a){n.options.apiBackend.read({url:e[a],success:function(n){r[a]=n,++i===e.length&&t(r)},error:function(o){n.options.error(o||n.options.tran(`danmaku-failed`)),r[a]=[],++i===e.length&&t(r)}})},o=0;o<e.length;++o)a(o)}},{key:`send`,value:function(e,t){var n=this,r={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:e.text,color:e.color,type:e.type};this.options.apiBackend.send({url:this.options.api.address+`v3/`,data:r,success:t,error:function(e){n.options.error(e||n.options.tran(`danmaku-failed`))}}),this.dan.splice(this.danIndex,0,r),this.danIndex++;var i={text:this.htmlEncode(r.text),color:r.color,type:r.type,border:`2px solid ${this.options.borderColor}`};this.draw(i),this.events&&this.events.trigger(`danmaku_send`,r)}},{key:`frame`,value:function(){var e=this;if(this.dan.length&&!this.paused&&this.showing){for(var t=this.dan[this.danIndex],n=[];t&&this.options.time()>parseFloat(t.time);)n.push(t),t=this.dan[++this.danIndex];this.draw(n)}window.requestAnimationFrame((function(){e.frame()}))}},{key:`opacity`,value:function(e){if(e!==void 0){for(var t=this.container.getElementsByClassName(`dplayer-danmaku-item`),n=0;n<t.length;n++)t[n].style.opacity=e;this._opacity=e,this.events&&this.events.trigger(`danmaku_opacity`,this._opacity)}return this._opacity}},{key:`draw`,value:function(e){var t=this;if(this.showing){var n=this.options.height,r=this.container.offsetWidth,i=this.container.offsetHeight,a=parseInt(i/n),o=function(e){var n=e.offsetWidth||parseInt(e.style.width),r=e.getBoundingClientRect().right||t.container.getBoundingClientRect().right+n;return t.container.getBoundingClientRect().right-r},s=function(e){return(r+e)/5},c=function(e,n,i){for(var c=r/s(i),l=function(i){var l=t.danTunnel[n][i+``];if(!l||!l.length)return t.danTunnel[n][i+``]=[e],e.addEventListener(`animationend`,(function(){t.danTunnel[n][i+``].splice(0,1)})),{v:i%a};if(n!==`right`)return`continue`;for(var u=0;u<l.length;u++){var d=o(l[u])-10;if(d<=r-c*s(parseInt(l[u].style.width))||d<=0)break;if(u===l.length-1)return t.danTunnel[n][i+``].push(e),e.addEventListener(`animationend`,(function(){t.danTunnel[n][i+``].splice(0,1)})),{v:i%a}}},u=0;t.unlimited||u<a;u++){var d=l(u);if(d!==`continue`&&H(d)===`object`)return d.v}return-1};Object.prototype.toString.call(e)!==`[object Array]`&&(e=[e]);for(var l=document.createDocumentFragment(),u=function(){e[d].type=b.number2Type(e[d].type),e[d].color||(e[d].color=16777215);var i=document.createElement(`div`);i.classList.add(`dplayer-danmaku-item`),i.classList.add(`dplayer-danmaku-${e[d].type}`),e[d].border?i.innerHTML=`<span style="border:${e[d].border}">${e[d].text}</span>`:i.innerHTML=e[d].text,i.style.opacity=t._opacity,i.style.color=b.number2Color(e[d].color),i.addEventListener(`animationend`,(function(){t.container.removeChild(i)}));var a,o=t._measure(e[d].text);switch(e[d].type){case`right`:(a=c(i,e[d].type,o))>=0&&(i.style.width=o+1+`px`,i.style.top=n*a+`px`,i.style.transform=`translateX(-${r}px)`);break;case`top`:(a=c(i,e[d].type))>=0&&(i.style.top=n*a+`px`);break;case`bottom`:(a=c(i,e[d].type))>=0&&(i.style.bottom=n*a+`px`);break;default:console.error(`Can't handled danmaku type: ${e[d].type}`)}a>=0&&(i.classList.add(`dplayer-danmaku-move`),i.style.animationDuration=t._danAnimation(e[d].type),l.appendChild(i))},d=0;d<e.length;d++)u();return this.container.appendChild(l),l}}},{key:`play`,value:function(){this.paused=!1}},{key:`pause`,value:function(){this.paused=!0}},{key:`_measure`,value:function(e){if(!this.context){var t=getComputedStyle(this.container.getElementsByClassName(`dplayer-danmaku-item`)[0],null);this.context=document.createElement(`canvas`).getContext(`2d`),this.context.font=t.getPropertyValue(`font`)}return this.context.measureText(e).width}},{key:`seek`,value:function(){this.clear();for(var e=0;e<this.dan.length;e++){if(this.dan[e].time>=this.options.time()){this.danIndex=e;break}this.danIndex=this.dan.length}}},{key:`clear`,value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML=``,this.events&&this.events.trigger(`danmaku_clear`)}},{key:`htmlEncode`,value:function(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`).replace(/\//g,`&#x2f;`)}},{key:`resize`,value:function(){for(var e=this.container.offsetWidth,t=this.container.getElementsByClassName(`dplayer-danmaku-item`),n=0;n<t.length;n++)t[n].style.transform=`translateX(-${e}px)`}},{key:`hide`,value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger(`danmaku_hide`)}},{key:`show`,value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger(`danmaku_show`)}},{key:`unlimit`,value:function(e){this.unlimited=e}},{key:`speed`,value:function(e){this.options.api.speedRate=e}},{key:`_danAnimation`,value:function(e){var t=this.options.api.speedRate||1,n=!!this.player.fullScreen.isFullScreen();return{top:`${(n?6:4)/t}s`,right:`${(n?8:5)/t}s`,bottom:`${(n?6:4)/t}s`}[e]}}],n&&Pn(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}();function U(e){return U=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},U(e)}function In(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(U(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(U(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),U(i)===`symbol`?i:String(i)),r)}var i}let Ln=function(){function e(){(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.events={},this.videoEvents=[`abort`,`canplay`,`canplaythrough`,`durationchange`,`emptied`,`ended`,`error`,`loadeddata`,`loadedmetadata`,`loadstart`,`mozaudioavailable`,`pause`,`play`,`playing`,`progress`,`ratechange`,`seeked`,`seeking`,`stalled`,`suspend`,`timeupdate`,`volumechange`,`waiting`],this.playerEvents=[`screenshot`,`thumbnails_show`,`thumbnails_hide`,`danmaku_show`,`danmaku_hide`,`danmaku_clear`,`danmaku_loaded`,`danmaku_send`,`danmaku_opacity`,`contextmenu_show`,`contextmenu_hide`,`notice_show`,`notice_hide`,`quality_start`,`quality_end`,`destroy`,`resize`,`fullscreen`,`fullscreen_cancel`,`webfullscreen`,`webfullscreen_cancel`,`subtitle_show`,`subtitle_hide`,`subtitle_change`]}var t,n;return t=e,(n=[{key:`on`,value:function(e,t){this.type(e)&&typeof t==`function`&&(this.events[e]||(this.events[e]=[]),this.events[e].push(t))}},{key:`trigger`,value:function(e,t){if(this.events[e]&&this.events[e].length)for(var n=0;n<this.events[e].length;n++)this.events[e][n](t)}},{key:`type`,value:function(e){return this.playerEvents.indexOf(e)===-1?this.videoEvents.indexOf(e)===-1?(console.error(`Unknown event name: ${e}`),null):`video`:`player`}}])&&In(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}();function W(e){return W=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},W(e)}function Rn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(W(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(W(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),W(i)===`symbol`?i:String(i)),r)}var i}let zn=function(){function e(t){var n=this;(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.player=t,this.lastScrollPosition={left:0,top:0},this.player.events.on(`webfullscreen`,(function(){n.player.resize()})),this.player.events.on(`webfullscreen_cancel`,(function(){n.player.resize(),b.setScrollPosition(n.lastScrollPosition)})),this.fullscreenchange=function(){n.player.resize(),n.isFullScreen(`browser`)?n.player.events.trigger(`fullscreen`):(b.setScrollPosition(n.lastScrollPosition),n.player.events.trigger(`fullscreen_cancel`))},this.docfullscreenchange=function(){var e=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;e&&e!==n.player.container||(n.player.resize(),e?n.player.events.trigger(`fullscreen`):(b.setScrollPosition(n.lastScrollPosition),n.player.events.trigger(`fullscreen_cancel`)))},/Firefox/.test(navigator.userAgent)?(document.addEventListener(`mozfullscreenchange`,this.docfullscreenchange),document.addEventListener(`fullscreenchange`,this.docfullscreenchange)):(this.player.container.addEventListener(`fullscreenchange`,this.fullscreenchange),this.player.container.addEventListener(`webkitfullscreenchange`,this.fullscreenchange),document.addEventListener(`msfullscreenchange`,this.docfullscreenchange),document.addEventListener(`MSFullscreenChange`,this.docfullscreenchange))}var t,n;return t=e,n=[{key:`isFullScreen`,value:function(){switch(arguments.length>0&&arguments[0]!==void 0?arguments[0]:`browser`){case`browser`:return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case`web`:return this.player.container.classList.contains(`dplayer-fulled`)}}},{key:`request`,value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:`browser`,t=e===`browser`?`web`:`browser`,n=this.isFullScreen(t);switch(n||(this.lastScrollPosition=b.getScrollPosition()),e){case`browser`:this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case`web`:this.player.container.classList.add(`dplayer-fulled`),document.body.classList.add(`dplayer-web-fullscreen-fix`),this.player.events.trigger(`webfullscreen`)}n&&this.cancel(t)}},{key:`cancel`,value:function(){switch(arguments.length>0&&arguments[0]!==void 0?arguments[0]:`browser`){case`browser`:document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case`web`:this.player.container.classList.remove(`dplayer-fulled`),document.body.classList.remove(`dplayer-web-fullscreen-fix`),this.player.events.trigger(`webfullscreen_cancel`)}}},{key:`toggle`,value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:`browser`;this.isFullScreen(e)?this.cancel(e):this.request(e)}},{key:`destroy`,value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener(`mozfullscreenchange`,this.docfullscreenchange),document.removeEventListener(`fullscreenchange`,this.docfullscreenchange)):(this.player.container.removeEventListener(`fullscreenchange`,this.fullscreenchange),this.player.container.removeEventListener(`webkitfullscreenchange`,this.fullscreenchange),document.removeEventListener(`msfullscreenchange`,this.docfullscreenchange),document.removeEventListener(`MSFullscreenChange`,this.docfullscreenchange))}}],n&&Rn(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}();function G(e){return G=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},G(e)}function Bn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(G(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(G(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),G(i)===`symbol`?i:String(i)),r)}var i}let Vn=function(){function e(t){(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.storageName={opacity:`dplayer-danmaku-opacity`,volume:`dplayer-volume`,unlimited:`dplayer-danmaku-unlimited`,danmaku:`dplayer-danmaku-show`,subtitle:`dplayer-subtitle-show`},this.default={opacity:.7,volume:t.options.hasOwnProperty(`volume`)?t.options.volume:.7,unlimited:(t.options.danmaku&&t.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var t,n;return t=e,(n=[{key:`init`,value:function(){for(var e in this.storageName){var t=this.storageName[e];this.data[e]=parseFloat(b.storage.get(t)||this.default[e])}}},{key:`get`,value:function(e){return this.data[e]}},{key:`set`,value:function(e,t){this.data[e]=t,b.storage.set(this.storageName[e],t)}}])&&Bn(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}();function K(e){return K=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},K(e)}function Hn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(K(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(K(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),K(i)===`symbol`?i:String(i)),r)}var i}let Un=function(){function e(t,n,r,i){(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.container=t,this.video=n,this.options=r,this.events=i,this.init()}var t,n;return t=e,n=[{key:`init`,value:function(){var e=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var t=this.video.textTracks[0];t.oncuechange=function(){var n=t.activeCues[t.activeCues.length-1];if(e.container.innerHTML=``,n){var r=document.createElement(`div`);r.appendChild(n.getCueAsHTML());var i=r.innerHTML.split(/\r?\n/).map((function(e){return`<p>${e}</p>`})).join(``);e.container.innerHTML=i}e.events.trigger(`subtitle_change`)}}}},{key:`show`,value:function(){this.container.classList.remove(`dplayer-subtitle-hide`),this.events.trigger(`subtitle_show`)}},{key:`hide`,value:function(){this.container.classList.add(`dplayer-subtitle-hide`),this.events.trigger(`subtitle_hide`)}},{key:`toggle`,value:function(){this.container.classList.contains(`dplayer-subtitle-hide`)?this.show():this.hide()}}],n&&Hn(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}();function q(e){return q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},q(e)}function Wn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(q(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(q(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),q(i)===`symbol`?i:String(i)),r)}var i}let Gn=function(){function e(t){var n=this;(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.player=t,this.player.template.mask.addEventListener(`click`,(function(){n.hide()})),this.player.template.subtitlesButton.addEventListener(`click`,(function(){n.adaptiveHeight(),n.show()}));for(var r=this.player.template.subtitlesItem.length-1,i=function(e){n.player.template.subtitlesItem[e].addEventListener(`click`,(function(){n.hide(),n.player.options.subtitle.index!==e&&(n.player.template.subtitle.innerHTML=`<p></p>`,n.player.template.subtrack.src=n.player.template.subtitlesItem[e].dataset.subtitle,n.player.options.subtitle.index=e,n.player.template.subtitle.classList.contains(`dplayer-subtitle-hide`)&&n.subContainerShow())}))},a=0;a<r;a++)i(a);this.player.template.subtitlesItem[r].addEventListener(`click`,(function(){n.hide(),n.player.options.subtitle.index!==r&&(n.player.template.subtitle.innerHTML=`<p></p>`,n.player.template.subtrack.src=``,n.player.options.subtitle.index=r,n.subContainerHide())}))}var t,n;return t=e,(n=[{key:`subContainerShow`,value:function(){this.player.template.subtitle.classList.remove(`dplayer-subtitle-hide`),this.player.events.trigger(`subtitle_show`)}},{key:`subContainerHide`,value:function(){this.player.template.subtitle.classList.add(`dplayer-subtitle-hide`),this.player.events.trigger(`subtitle_hide`)}},{key:`hide`,value:function(){this.player.template.subtitlesBox.classList.remove(`dplayer-subtitles-box-open`),this.player.template.mask.classList.remove(`dplayer-mask-show`),this.player.controller.disableAutoHide=!1}},{key:`show`,value:function(){this.player.template.subtitlesBox.classList.add(`dplayer-subtitles-box-open`),this.player.template.mask.classList.add(`dplayer-mask-show`),this.player.controller.disableAutoHide=!0}},{key:`adaptiveHeight`,value:function(){var e=30*this.player.template.subtitlesItem.length+14,t=.8*this.player.template.videoWrap.offsetHeight;e>=t-50?(this.player.template.subtitlesBox.style.bottom=`8px`,this.player.template.subtitlesBox.style[`max-height`]=t-8+`px`):(this.player.template.subtitlesBox.style.bottom=`50px`,this.player.template.subtitlesBox.style[`max-height`]=t-50+`px`)}}])&&Wn(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}();function J(e){return J=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},J(e)}function Kn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(J(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(J(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),J(i)===`symbol`?i:String(i)),r)}var i}let qn=function(){function e(t){(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.elements={},this.elements.volume=t.volumeBar,this.elements.played=t.playedBar,this.elements.loaded=t.loadedBar,this.elements.danmaku=t.danmakuOpacityBar}var t,n;return t=e,(n=[{key:`set`,value:function(e,t,n){t=Math.max(t,0),t=Math.min(t,1),this.elements[e].style[n]=100*t+`%`}},{key:`get`,value:function(e){return parseFloat(this.elements[e].style.width)/100}}])&&Kn(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}();function Y(e){return Y=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Y(e)}function Jn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(Y(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(Y(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),Y(i)===`symbol`?i:String(i)),r)}var i}let Yn=function(){function e(t){(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.player=t,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},this.types=[`loading`,`info`,`fps`],this.init()}var t,n;return t=e,(n=[{key:`init`,value:function(){var e=this;this.types.map((function(t){return t!==`fps`&&e[`init${t}Checker`](),t}))}},{key:`initloadingChecker`,value:function(){var e=this,t=0,n=0,r=!1;this.loadingChecker=setInterval((function(){e.enableloadingChecker&&(n=e.player.video.currentTime,r||n!==t||e.player.video.paused||(e.player.container.classList.add(`dplayer-loading`),r=!0),r&&n>t&&!e.player.video.paused&&(e.player.container.classList.remove(`dplayer-loading`),r=!1),t=n)}),100)}},{key:`initfpsChecker`,value:function(){var e=this;window.requestAnimationFrame((function(){if(e.enablefpsChecker)if(e.initfpsChecker(),e.fpsStart){e.fpsIndex++;var t=new Date;t-e.fpsStart>1e3&&(e.player.infoPanel.fps(e.fpsIndex/(t-e.fpsStart)*1e3),e.fpsStart=new Date,e.fpsIndex=0)}else e.fpsStart=new Date,e.fpsIndex=0;else e.fpsStart=0,e.fpsIndex=0}))}},{key:`initinfoChecker`,value:function(){var e=this;this.infoChecker=setInterval((function(){e.enableinfoChecker&&e.player.infoPanel.update()}),1e3)}},{key:`enable`,value:function(e){this[`enable${e}Checker`]=!0,e===`fps`&&this.initfpsChecker()}},{key:`disable`,value:function(e){this[`enable${e}Checker`]=!1}},{key:`destroy`,value:function(){var e=this;this.types.map((function(t){return e[`enable${t}Checker`]=!1,e[`${t}Checker`]&&clearInterval(e[`${t}Checker`]),t}))}}])&&Jn(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}();function X(e){return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function Xn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(X(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(X(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),X(i)===`symbol`?i:String(i)),r)}var i}let Zn=function(){function e(t){var n=this;(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.container=t,this.container.addEventListener(`animationend`,(function(){n.container.classList.remove(`dplayer-bezel-transition`)}))}var t,n;return t=e,(n=[{key:`switch`,value:function(e){this.container.innerHTML=e,this.container.classList.add(`dplayer-bezel-transition`)}}])&&Xn(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}();function Qn(e){return Qn=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Qn(e)}function $n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(Qn(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(Qn(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),Qn(i)===`symbol`?i:String(i)),r)}var i}let er=function(){function e(t){(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.container=t.container,this.barWidth=t.barWidth,this.container.style.backgroundImage=`url('${t.url}')`,this.events=t.events}var t,n;return t=e,(n=[{key:`resize`,value:function(e,t,n){this.container.style.width=`${e}px`,this.container.style.height=`${t}px`,this.container.style.top=`${2-t}px`,this.barWidth=n}},{key:`show`,value:function(){this.container.style.display=`block`,this.events&&this.events.trigger(`thumbnails_show`)}},{key:`move`,value:function(e){this.container.style.backgroundPosition=`-${160*(Math.ceil(e/this.barWidth*100)-1)}px 0`,this.container.style.left=`${Math.min(Math.max(e-this.container.offsetWidth/2,-10),this.barWidth-150)}px`}},{key:`hide`,value:function(){this.container.style.display=`none`,this.events&&this.events.trigger(`thumbnails_hide`)}}])&&$n(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}();function tr(e){return tr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},tr(e)}function nr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(tr(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(tr(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),tr(i)===`symbol`?i:String(i)),r)}var i}var Z,rr=!0,ir=!1;let ar=function(){function e(t){(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.player=t,this.autoHideTimer=0,b.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener(`mousemove`,this.setAutoHideHandler),this.player.container.addEventListener(`click`,this.setAutoHideHandler),this.player.on(`play`,this.setAutoHideHandler),this.player.on(`pause`,this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url==`string`&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),b.isMobile||this.initVolumeButton()}var t,n;return t=e,(n=[{key:`initPlayButton`,value:function(){var e=this;this.player.template.playButton.addEventListener(`click`,(function(){e.player.toggle()})),this.player.template.mobilePlayButton.addEventListener(`click`,(function(){e.player.toggle()})),b.isMobile?(this.player.template.videoWrap.addEventListener(`click`,(function(){e.toggle()})),this.player.template.controllerMask.addEventListener(`click`,(function(){e.toggle()}))):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener(`click`,(function(){e.player.toggle()})),this.player.template.controllerMask.addEventListener(`click`,(function(){e.player.toggle()})))}},{key:`initHighlights`,value:function(){var e=this;this.player.on(`durationchange`,(function(){if(e.player.video.duration!==1&&e.player.video.duration!==1/0&&e.player.options.highlight){var t=e.player.template.playedBarWrap.querySelectorAll(`.dplayer-highlight`);[].slice.call(t,0).forEach((function(t){e.player.template.playedBarWrap.removeChild(t)}));for(var n=0;n<e.player.options.highlight.length;n++)if(e.player.options.highlight[n].text&&e.player.options.highlight[n].time){var r=document.createElement(`div`);r.classList.add(`dplayer-highlight`),r.style.left=e.player.options.highlight[n].time/e.player.video.duration*100+`%`,r.innerHTML=`<span class="dplayer-highlight-text">`+e.player.options.highlight[n].text+`</span>`,e.player.template.playedBarWrap.insertBefore(r,e.player.template.playedBarTime)}}}))}},{key:`initThumbnails`,value:function(){var e=this;this.player.options.video.thumbnails&&(this.thumbnails=new er({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on(`loadedmetadata`,(function(){e.thumbnails.resize(160,e.player.video.videoHeight/e.player.video.videoWidth*160,e.player.template.barWrap.offsetWidth)})))}},{key:`initPlayedBar`,value:function(){var e=this,t=function(t){var n=((t.clientX||t.changedTouches[0].clientX)-b.getBoundingClientRectViewLeft(e.player.template.playedBarWrap))/e.player.template.playedBarWrap.clientWidth;n=Math.max(n,0),n=Math.min(n,1),e.player.bar.set(`played`,n,`width`),e.player.template.ptime.innerHTML=b.secondToTime(n*e.player.video.duration)},n=function n(r){document.removeEventListener(b.nameMap.dragEnd,n),document.removeEventListener(b.nameMap.dragMove,t);var i=((r.clientX||r.changedTouches[0].clientX)-b.getBoundingClientRectViewLeft(e.player.template.playedBarWrap))/e.player.template.playedBarWrap.clientWidth;i=Math.max(i,0),i=Math.min(i,1),e.player.bar.set(`played`,i,`width`),e.player.seek(e.player.bar.get(`played`)*e.player.video.duration),e.player.timer.enable(`progress`)};this.player.template.playedBarWrap.addEventListener(b.nameMap.dragStart,(function(){e.player.timer.disable(`progress`),document.addEventListener(b.nameMap.dragMove,t),document.addEventListener(b.nameMap.dragEnd,n)})),this.player.template.playedBarWrap.addEventListener(b.nameMap.dragMove,(function(t){if(e.player.video.duration){var n=e.player.template.playedBarWrap.getBoundingClientRect().left,r=(t.clientX||t.changedTouches[0].clientX)-n;if(r<0||r>e.player.template.playedBarWrap.offsetWidth)return;var i=e.player.video.duration*(r/e.player.template.playedBarWrap.offsetWidth);b.isMobile&&e.thumbnails&&e.thumbnails.show(),e.thumbnails&&e.thumbnails.move(r),e.player.template.playedBarTime.style.left=`${r-(i>=3600?25:20)}px`,e.player.template.playedBarTime.innerText=b.secondToTime(i),e.player.template.playedBarTime.classList.remove(`hidden`)}})),this.player.template.playedBarWrap.addEventListener(b.nameMap.dragEnd,(function(){b.isMobile&&e.thumbnails&&e.thumbnails.hide()})),b.isMobile||(this.player.template.playedBarWrap.addEventListener(`mouseenter`,(function(){e.player.video.duration&&(e.thumbnails&&e.thumbnails.show(),e.player.template.playedBarTime.classList.remove(`hidden`))})),this.player.template.playedBarWrap.addEventListener(`mouseleave`,(function(){e.player.video.duration&&(e.thumbnails&&e.thumbnails.hide(),e.player.template.playedBarTime.classList.add(`hidden`))})))}},{key:`initFullButton`,value:function(){var e=this;this.player.template.browserFullButton.addEventListener(`click`,(function(){e.player.fullScreen.toggle(`browser`)})),this.player.template.webFullButton.addEventListener(`click`,(function(){e.player.fullScreen.toggle(`web`)}))}},{key:`initVolumeButton`,value:function(){var e=this,t=function(t){var n=t||window.event,r=((n.clientX||n.changedTouches[0].clientX)-b.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap)-5.5)/35;e.player.volume(r)},n=function n(){document.removeEventListener(b.nameMap.dragEnd,n),document.removeEventListener(b.nameMap.dragMove,t),e.player.template.volumeButton.classList.remove(`dplayer-volume-active`)};this.player.template.volumeBarWrapWrap.addEventListener(`click`,(function(t){var n=t||window.event,r=((n.clientX||n.changedTouches[0].clientX)-b.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap)-5.5)/35;e.player.volume(r)})),this.player.template.volumeBarWrapWrap.addEventListener(b.nameMap.dragStart,(function(){document.addEventListener(b.nameMap.dragMove,t),document.addEventListener(b.nameMap.dragEnd,n),e.player.template.volumeButton.classList.add(`dplayer-volume-active`)})),this.player.template.volumeButtonIcon.addEventListener(`click`,(function(){e.player.video.muted?(e.player.video.muted=!1,e.player.switchVolumeIcon(),e.player.bar.set(`volume`,e.player.volume(),`width`)):(e.player.video.muted=!0,e.player.template.volumeIcon.innerHTML=B.volumeOff,e.player.bar.set(`volume`,0,`width`))}))}},{key:`initQualityButton`,value:function(){var e=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener(`click`,(function(t){t.target.classList.contains(`dplayer-quality-item`)&&e.player.switchQuality(t.target.dataset.index)}))}},{key:`initScreenshotButton`,value:function(){var e=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener(`click`,(function(){var t,n=document.createElement(`canvas`);n.width=e.player.video.videoWidth,n.height=e.player.video.videoHeight,n.getContext(`2d`).drawImage(e.player.video,0,0,n.width,n.height),n.toBlob((function(n){t=URL.createObjectURL(n);var r=document.createElement(`a`);r.href=t,r.download=`DPlayer.png`,r.style.display=`none`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(t),e.player.events.trigger(`screenshot`,t)}))}))}},{key:`initAirplayButton`,value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener(`webkitplaybacktargetavailabilitychanged`,function(e){e.availability===`available`?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener(`click`,function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display=`none`)}},{key:`initChromecast`,value:function(){var e=window.document.createElement(`script`);e.setAttribute(`type`,`text/javascript`),e.setAttribute(`src`,`https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1`),window.document.body.appendChild(e),window.__onGCastApiAvailable=function(e){if(e){var t=new(Z=window.chrome.cast).SessionRequest(Z.media.DEFAULT_MEDIA_RECEIVER_APP_ID),n=new Z.ApiConfig(t,(function(){}),(function(e){e===Z.ReceiverAvailability.AVAILABLE&&console.log(`chromecast: `,e)}));Z.initialize(n,(function(){}))}}}},{key:`initChromecastButton`,value:function(){var e=this;if(this.player.options.chromecast){rr&&(rr=!1,this.initChromecast());var t=function(t,n){e.currentMedia=n},n=function(e){console.error(`Error launching media`,e)};this.player.template.chromecastButton.addEventListener(`click`,(function(){ir?(ir=!1,e.currentMedia.stop(),e.session.stop(),e.initChromecast()):(ir=!0,Z.requestSession((function(r){var i,a,o;e.session=r,i=e.player.options.video.url,a=new Z.media.MediaInfo(i),o=new Z.media.LoadRequest(a),e.session?e.session.loadMedia(o,t.bind(e,`loadMedia`),n).play():window.open(i)}),(function(t){t.code===`cancel`?e.session=void 0:console.error(`Error selecting a cast device`,t)})))}))}}},{key:`initSubtitleButton`,value:function(){var e=this;this.player.events.on(`subtitle_show`,(function(){e.player.template.subtitleButton.dataset.balloon=e.player.tran(`hide-subs`),e.player.template.subtitleButtonInner.style.opacity=``,e.player.user.set(`subtitle`,1)})),this.player.events.on(`subtitle_hide`,(function(){e.player.template.subtitleButton.dataset.balloon=e.player.tran(`show-subs`),e.player.template.subtitleButtonInner.style.opacity=`0.4`,e.player.user.set(`subtitle`,0)})),this.player.template.subtitleButton.addEventListener(`click`,(function(){e.player.subtitle.toggle()}))}},{key:`setAutoHide`,value:function(){var e=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout((function(){!e.player.video.played.length||e.player.paused||e.disableAutoHide||e.hide()}),3e3)}},{key:`show`,value:function(){this.player.container.classList.remove(`dplayer-hide-controller`)}},{key:`hide`,value:function(){this.player.container.classList.add(`dplayer-hide-controller`),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:`isShow`,value:function(){return!this.player.container.classList.contains(`dplayer-hide-controller`)}},{key:`toggle`,value:function(){this.isShow()?this.hide():this.show()}},{key:`destroy`,value:function(){b.isMobile||(this.player.container.removeEventListener(`mousemove`,this.setAutoHideHandler),this.player.container.removeEventListener(`click`,this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&nr(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}();function or(e){return or=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},or(e)}function sr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(or(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(or(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),or(i)===`symbol`?i:String(i)),r)}var i}let cr=function(){function e(t){var n=this;(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.player=t,this.player.template.mask.addEventListener(`click`,(function(){n.hide()})),this.player.template.settingButton.addEventListener(`click`,(function(){n.show()})),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener(`click`,(function(){n.player.template.loopToggle.checked=!n.player.template.loopToggle.checked,n.player.template.loopToggle.checked?n.loop=!0:n.loop=!1,n.hide()})),this.showDanmaku=this.player.user.get(`danmaku`),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener(`click`,(function(){n.player.template.showDanmakuToggle.checked=!n.player.template.showDanmakuToggle.checked,n.player.template.showDanmakuToggle.checked?(n.showDanmaku=!0,n.player.danmaku.show()):(n.showDanmaku=!1,n.player.danmaku.hide()),n.player.user.set(`danmaku`,+!!n.showDanmaku),n.hide()})),this.unlimitDanmaku=this.player.user.get(`unlimited`),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener(`click`,(function(){n.player.template.unlimitDanmakuToggle.checked=!n.player.template.unlimitDanmakuToggle.checked,n.player.template.unlimitDanmakuToggle.checked?(n.unlimitDanmaku=!0,n.player.danmaku.unlimit(!0)):(n.unlimitDanmaku=!1,n.player.danmaku.unlimit(!1)),n.player.user.set(`unlimited`,+!!n.unlimitDanmaku),n.hide()})),this.player.template.speed.addEventListener(`click`,(function(){n.player.template.settingBox.classList.add(`dplayer-setting-box-narrow`),n.player.template.settingBox.classList.add(`dplayer-setting-box-speed`)}));for(var r=function(e){n.player.template.speedItem[e].addEventListener(`click`,(function(){n.player.speed(n.player.template.speedItem[e].dataset.speed),n.hide()}))},i=0;i<this.player.template.speedItem.length;i++)r(i);if(this.player.danmaku){this.player.on(`danmaku_opacity`,(function(e){n.player.bar.set(`danmaku`,e,`width`),n.player.user.set(`opacity`,e)})),this.player.danmaku.opacity(this.player.user.get(`opacity`));var a=function(e){var t=e||window.event,r=((t.clientX||t.changedTouches[0].clientX)-b.getBoundingClientRectViewLeft(n.player.template.danmakuOpacityBarWrap))/130;r=Math.max(r,0),r=Math.min(r,1),n.player.danmaku.opacity(r)},o=function e(){document.removeEventListener(b.nameMap.dragEnd,e),document.removeEventListener(b.nameMap.dragMove,a),n.player.template.danmakuOpacityBox.classList.remove(`dplayer-setting-danmaku-active`)};this.player.template.danmakuOpacityBarWrapWrap.addEventListener(`click`,(function(e){var t=e||window.event,r=((t.clientX||t.changedTouches[0].clientX)-b.getBoundingClientRectViewLeft(n.player.template.danmakuOpacityBarWrap))/130;r=Math.max(r,0),r=Math.min(r,1),n.player.danmaku.opacity(r)})),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(b.nameMap.dragStart,(function(){document.addEventListener(b.nameMap.dragMove,a),document.addEventListener(b.nameMap.dragEnd,o),n.player.template.danmakuOpacityBox.classList.add(`dplayer-setting-danmaku-active`)}))}}var t,n;return t=e,(n=[{key:`hide`,value:function(){var e=this;this.player.template.settingBox.classList.remove(`dplayer-setting-box-open`),this.player.template.mask.classList.remove(`dplayer-mask-show`),setTimeout((function(){e.player.template.settingBox.classList.remove(`dplayer-setting-box-narrow`),e.player.template.settingBox.classList.remove(`dplayer-setting-box-speed`)}),300),this.player.controller.disableAutoHide=!1}},{key:`show`,value:function(){this.player.template.settingBox.classList.add(`dplayer-setting-box-open`),this.player.template.mask.classList.add(`dplayer-mask-show`),this.player.controller.disableAutoHide=!0}}])&&sr(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}();function Q(e){return Q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Q(e)}function lr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(Q(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(Q(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),Q(i)===`symbol`?i:String(i)),r)}var i}let ur=function(){function e(t){var n=this;(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.player=t,this.player.template.mask.addEventListener(`click`,(function(){n.hide()})),this.player.template.commentButton.addEventListener(`click`,(function(){n.show()})),this.player.template.commentSettingButton.addEventListener(`click`,(function(){n.toggleSetting()})),this.player.template.commentColorSettingBox.addEventListener(`click`,(function(){if(n.player.template.commentColorSettingBox.querySelector(`input:checked+span`)){var e=n.player.template.commentColorSettingBox.querySelector(`input:checked`).value;n.player.template.commentSettingFill.style.fill=e,n.player.template.commentInput.style.color=e,n.player.template.commentSendFill.style.fill=e}})),this.player.template.commentInput.addEventListener(`click`,(function(){n.hideSetting()})),this.player.template.commentInput.addEventListener(`keydown`,(function(e){(e||window.event).keyCode===13&&n.send()})),this.player.template.commentSendButton.addEventListener(`click`,(function(){n.send()}))}var t,n;return t=e,(n=[{key:`show`,value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add(`dplayer-controller-comment`),this.player.template.mask.classList.add(`dplayer-mask-show`),this.player.container.classList.add(`dplayer-show-controller`),this.player.template.commentInput.focus()}},{key:`hide`,value:function(){this.player.template.controller.classList.remove(`dplayer-controller-comment`),this.player.template.mask.classList.remove(`dplayer-mask-show`),this.player.container.classList.remove(`dplayer-show-controller`),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:`showSetting`,value:function(){this.player.template.commentSettingBox.classList.add(`dplayer-comment-setting-open`)}},{key:`hideSetting`,value:function(){this.player.template.commentSettingBox.classList.remove(`dplayer-comment-setting-open`)}},{key:`toggleSetting`,value:function(){this.player.template.commentSettingBox.classList.contains(`dplayer-comment-setting-open`)?this.hideSetting():this.showSetting()}},{key:`send`,value:function(){var e=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,``)?this.player.danmaku.send({text:this.player.template.commentInput.value,color:b.color2Number(this.player.container.querySelector(`.dplayer-comment-setting-color input:checked`).value),type:parseInt(this.player.container.querySelector(`.dplayer-comment-setting-type input:checked`).value)},(function(){e.player.template.commentInput.value=``,e.hide()})):this.player.notice(this.player.tran(`please-input-danmaku`))}}])&&lr(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}();function dr(e){return dr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},dr(e)}function fr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(dr(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(dr(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),dr(i)===`symbol`?i:String(i)),r)}var i}let pr=function(){function e(t){(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.player=t,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener(`keydown`,this.doHotKeyHandler),document.addEventListener(`keydown`,this.cancelFullScreenHandler)}var t,n;return t=e,(n=[{key:`doHotKey`,value:function(e){if(this.player.focus){var t=document.activeElement.tagName.toUpperCase(),n=document.activeElement.getAttribute(`contenteditable`);if(t!==`INPUT`&&t!==`TEXTAREA`&&n!==``&&n!==`true`){var r,i=e||window.event;switch(i.keyCode){case 32:i.preventDefault(),this.player.toggle();break;case 37:if(i.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(i.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:i.preventDefault(),r=this.player.volume()+.1,this.player.volume(r);break;case 40:i.preventDefault(),r=this.player.volume()-.1,this.player.volume(r)}}}}},{key:`cancelFullScreen`,value:function(e){(e||window.event).keyCode===27&&this.player.fullScreen.isFullScreen(`web`)&&this.player.fullScreen.cancel(`web`)}},{key:`destroy`,value:function(){this.player.options.hotkey&&document.removeEventListener(`keydown`,this.doHotKeyHandler),document.removeEventListener(`keydown`,this.cancelFullScreenHandler)}}])&&fr(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}();function mr(e){return mr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},mr(e)}function hr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(mr(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(mr(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),mr(i)===`symbol`?i:String(i)),r)}var i}let gr=function(){function e(t){var n=this;(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.player=t,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach((function(e,t){n.player.options.contextmenu[t].click&&e.addEventListener(`click`,(function(){n.player.options.contextmenu[t].click(n.player),n.hide()}))})),this.contextmenuHandler=function(e){if(n.shown)n.hide();else{var t=e||window.event;t.preventDefault();var r=n.player.container.getBoundingClientRect();n.show(t.clientX-r.left,t.clientY-r.top),n.player.template.mask.addEventListener(`click`,(function(){n.hide()}))}},this.player.container.addEventListener(`contextmenu`,this.contextmenuHandler)}var t,n;return t=e,(n=[{key:`show`,value:function(e,t){this.player.template.menu.classList.add(`dplayer-menu-show`);var n=this.player.container.getBoundingClientRect();e+this.player.template.menu.offsetWidth>=n.width?(this.player.template.menu.style.right=n.width-e+`px`,this.player.template.menu.style.left=`initial`):(this.player.template.menu.style.left=e+`px`,this.player.template.menu.style.right=`initial`),t+this.player.template.menu.offsetHeight>=n.height?(this.player.template.menu.style.bottom=n.height-t+`px`,this.player.template.menu.style.top=`initial`):(this.player.template.menu.style.top=t+`px`,this.player.template.menu.style.bottom=`initial`),this.player.template.mask.classList.add(`dplayer-mask-show`),this.shown=!0,this.player.events.trigger(`contextmenu_show`)}},{key:`hide`,value:function(){this.player.template.mask.classList.remove(`dplayer-mask-show`),this.player.template.menu.classList.remove(`dplayer-menu-show`),this.shown=!1,this.player.events.trigger(`contextmenu_hide`)}},{key:`destroy`,value:function(){this.player.container.removeEventListener(`contextmenu`,this.contextmenuHandler)}}])&&hr(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}();function _r(e){return _r=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},_r(e)}function vr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if(_r(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(_r(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(r.key),_r(i)===`symbol`?i:String(i)),r)}var i}let yr=function(){function e(t){var n=this;(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.container=t.template.infoPanel,this.template=t.template,this.video=t.video,this.player=t,this.template.infoPanelClose.addEventListener(`click`,(function(){n.hide()}))}var t,n;return t=e,(n=[{key:`show`,value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable(`info`),this.player.timer.enable(`fps`),this.container.classList.remove(`dplayer-info-panel-hide`)}},{key:`hide`,value:function(){this.player.timer.disable(`info`),this.player.timer.disable(`fps`),this.container.classList.add(`dplayer-info-panel-hide`)}},{key:`triggle`,value:function(){this.container.classList.contains(`dplayer-info-panel-hide`)?this.show():this.hide()}},{key:`update`,value:function(){this.template.infoVersion.innerHTML=`v1.27.1 v1.27.0-12-g4f61091`,this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML=`${this.player.video.videoWidth} x ${this.player.video.videoHeight}`,this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:`fps`,value:function(e){this.template.infoFPS.innerHTML=`${e.toFixed(1)}`}}])&&vr(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}();var br=n(568),xr=n.n(br);function Sr(e){return Sr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Sr(e)}function Cr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function wr(e,t,n){return(t=Er(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Er(r.key),r)}}function Er(e){var t=function(e,t){if(Sr(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,`string`);if(Sr(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(e);return Sr(t)===`symbol`?t:String(t)}var Dr=0,$=[];let Or=function(){function e(t){var n=this;(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,e),this.options=function(e){var t={container:e.element||document.getElementsByClassName(`dplayer`)[0],live:!1,autoplay:!1,theme:`#b7daff`,loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:`metadata`,volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:Ut,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n]);return e.video&&!e.video.type&&(e.video.type=`auto`),Wt(e.danmaku)===`object`&&e.danmaku&&!e.danmaku.user&&(e.danmaku.user=`DIYgod`),e.subtitle&&(!e.subtitle.type&&(e.subtitle.type=`webvtt`),!e.subtitle.fontSize&&(e.subtitle.fontSize=`20px`),!e.subtitle.bottom&&(e.subtitle.bottom=`40px`),!e.subtitle.color&&(e.subtitle.color=`#fff`)),e.video.quality&&(e.video.url=e.video.quality[e.video.defaultQuality].url),e.lang&&=e.lang.toLowerCase(),e.contextmenu=e.contextmenu.concat([{key:`video-info`,click:function(e){e.infoPanel.triggle()}},{key:`about-author`,link:`https://diygod.me`},{text:`DPlayer v1.27.1`,link:`https://github.com/MoePlayer/DPlayer`}]),e}(function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Cr(Object(n),!0).forEach((function(t){wr(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({preload:t.video.type===`webtorrent`?`none`:`metadata`},t)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new Gt(this.options.lang).tran,this.events=new Ln,this.user=new Vn(this),this.container=this.options.container,this.noticeList={},this.container.classList.add(`dplayer`),this.options.danmaku||this.container.classList.add(`dplayer-no-danmaku`),this.options.live?this.container.classList.add(`dplayer-live`):this.container.classList.remove(`dplayer-live`),b.isMobile&&this.container.classList.add(`dplayer-mobile`),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add(`dplayer-arrow`),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:``,lang:`off`}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle==`string`?this.options.subtitle.index=this.options.subtitle.url.findIndex((function(e){return e.lang===n.options.subtitle.defaultSubtitle||e.name===n.options.subtitle.defaultSubtitle})):typeof this.options.subtitle.defaultSubtitle==`number`&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex((function(e){return e.lang===n.options.lang}))),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new Nn({container:this.container,options:this.options,index:Dr,tran:this.tran}),this.video=this.template.video,this.bar=new qn(this.template),this.bezel=new Zn(this.template.bezel),this.fullScreen=new zn(this),this.controller=new ar(this),this.options.danmaku&&(this.danmaku=new Fn({player:this,container:this.template.danmaku,opacity:this.user.get(`opacity`),callback:function(){setTimeout((function(){n.template.danmakuLoading.style.display=`none`,n.options.autoplay&&n.play()}),0)},error:function(e){n.notice(e)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return n.video.currentTime},unlimited:this.user.get(`unlimited`),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(e){return n.tran(e)}}),this.comment=new ur(this)),this.setting=new cr(this),this.plugins={},this.docClickFun=function(){n.focus=!1},this.containerClickFun=function(){n.focus=!0},document.addEventListener(`click`,this.docClickFun,!0),this.container.addEventListener(`click`,this.containerClickFun,!0),this.paused=!0,this.timer=new Yn(this),this.hotkey=new pr(this),this.contextmenu=new gr(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new yr(this),!this.danmaku&&this.options.autoplay&&this.play(),Dr++,$.push(this)}var t,n,r;return t=e,n=[{key:`seek`,value:function(e){e=Math.max(e,0),this.video.duration&&(e=Math.min(e,this.video.duration)),this.video.currentTime<e?this.notice(`${this.tran(`ff`).replace(`%s`,(e-this.video.currentTime).toFixed(0))}`):this.video.currentTime>e&&this.notice(`${this.tran(`rew`).replace(`%s`,(this.video.currentTime-e).toFixed(0))}`),this.video.currentTime=e,this.danmaku&&this.danmaku.seek(),this.bar.set(`played`,e/this.video.duration,`width`),this.template.ptime.innerHTML=b.secondToTime(e)}},{key:`play`,value:function(e){var t=this;if(this.paused=!1,this.video.paused&&!b.isMobile&&this.bezel.switch(B.play),this.template.playButton.innerHTML=B.pause,this.template.mobilePlayButton.innerHTML=B.pause,e||le.resolve(this.video.play()).catch((function(){t.pause()})).then((function(){})),this.timer.enable(`loading`),this.container.classList.remove(`dplayer-paused`),this.container.classList.add(`dplayer-playing`),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var n=0;n<$.length;n++)this!==$[n]&&$[n].pause()}},{key:`pause`,value:function(e){this.paused=!0,this.container.classList.remove(`dplayer-loading`),this.video.paused||b.isMobile||this.bezel.switch(B.pause),this.template.playButton.innerHTML=B.play,this.template.mobilePlayButton.innerHTML=B.play,e||this.video.pause(),this.timer.disable(`loading`),this.container.classList.remove(`dplayer-playing`),this.container.classList.add(`dplayer-paused`),this.danmaku&&this.danmaku.pause()}},{key:`switchVolumeIcon`,value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=B.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=B.volumeDown:this.template.volumeIcon.innerHTML=B.volumeOff}},{key:`volume`,value:function(e,t,n){if(e=parseFloat(e),!isNaN(e)){e=Math.max(e,0),e=Math.min(e,1),this.bar.set(`volume`,e,`width`);var r=`${(100*e).toFixed(0)}%`;this.template.volumeBarWrapWrap.dataset.balloon=r,t||this.user.set(`volume`,e),n||this.notice(`${this.tran(`volume`)} ${(100*e).toFixed(0)}%`,void 0,void 0,`volume`),this.video.volume=e,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:`toggle`,value:function(){this.video.paused?this.play():this.pause()}},{key:`on`,value:function(e,t){this.events.on(e,t)}},{key:`switchVideo`,value:function(e,t){this.pause(),this.video.poster=e.pic?e.pic:``,this.video.src=e.url,this.initMSE(this.video,e.type||`auto`),t&&(this.template.danmakuLoading.style.display=`block`,this.bar.set(`played`,0,`width`),this.bar.set(`loaded`,0,`width`),this.template.ptime.innerHTML=`00:00`,this.template.danmaku.innerHTML=``,this.danmaku&&this.danmaku.reload({id:t.id,address:t.api,token:t.token,maximum:t.maximum,addition:t.addition,user:t.user}))}},{key:`initMSE`,value:function(e,t){var n=this;if(this.type=t,this.options.video.customType&&this.options.video.customType[t])Object.prototype.toString.call(this.options.video.customType[t])===`[object Function]`?this.options.video.customType[t](this.video,this):console.error(`Illegal customType: ${t}`);else switch(this.type===`auto`&&(/m3u8(#|\?|$)/i.exec(e.src)?this.type=`hls`:/.flv(#|\?|$)/i.exec(e.src)?this.type=`flv`:/.mpd(#|\?|$)/i.exec(e.src)?this.type=`dash`:this.type=`normal`),this.type===`hls`&&(e.canPlayType(`application/x-mpegURL`)||e.canPlayType(`application/vnd.apple.mpegURL`))&&(this.type=`normal`),this.type){case`hls`:if(window.Hls)if(window.Hls.isSupported()){var r=this.options.pluginOptions.hls,i=new window.Hls(r);this.plugins.hls=i,i.loadSource(e.src),i.attachMedia(e),this.events.on(`destroy`,(function(){i.destroy(),delete n.plugins.hls}))}else this.notice(`Error: Hls is not supported.`);else this.notice(`Error: Can't find Hls.`);break;case`flv`:if(window.flvjs)if(window.flvjs.isSupported()){var a=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:`flv`,url:e.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=a,a.attachMediaElement(e),a.load(),this.events.on(`destroy`,(function(){a.unload(),a.detachMediaElement(),a.destroy(),delete n.plugins.flvjs}))}else this.notice(`Error: flvjs is not supported.`);else this.notice(`Error: Can't find flvjs.`);break;case`dash`:if(window.dashjs){var o=window.dashjs.MediaPlayer().create().initialize(e,e.src,!1),s=this.options.pluginOptions.dash;o.updateSettings(s),this.plugins.dash=o,this.events.on(`destroy`,(function(){window.dashjs.MediaPlayer().reset(),delete n.plugins.dash}))}else this.notice(`Error: Can't find dashjs.`);break;case`webtorrent`:if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add(`dplayer-loading`);var c=this.options.pluginOptions.webtorrent,l=new window.WebTorrent(c);this.plugins.webtorrent=l;var u=e.src;e.src=``,e.preload=`metadata`,e.addEventListener(`durationchange`,(function(){return n.container.classList.remove(`dplayer-loading`)}),{once:!0}),l.add(u,(function(e){e.files.find((function(e){return e.name.endsWith(`.mp4`)})).renderTo(n.video,{autoplay:n.options.autoplay,controls:!1})})),this.events.on(`destroy`,(function(){l.remove(u),l.destroy(),delete n.plugins.webtorrent}))}else this.notice(`Error: Webtorrent is not supported.`);else this.notice(`Error: Can't find Webtorrent.`)}}},{key:`initVideo`,value:function(e,t){var n=this;this.initMSE(e,t),this.on(`durationchange`,(function(){e.duration!==1&&e.duration!==1/0&&(n.template.dtime.innerHTML=b.secondToTime(e.duration))})),this.on(`progress`,(function(){var t=e.buffered.length?e.buffered.end(e.buffered.length-1)/e.duration:0;n.bar.set(`loaded`,t,`width`)})),this.on(`error`,(function(){n.video.error&&n.tran&&n.notice&&n.type!==`webtorrent`&&n.notice(n.tran(`video-failed`))})),this.on(`ended`,(function(){n.bar.set(`played`,1,`width`),n.setting.loop?(n.seek(0),n.play()):n.pause(),n.danmaku&&(n.danmaku.danIndex=0)})),this.on(`play`,(function(){n.paused&&n.play(!0)})),this.on(`pause`,(function(){n.paused||n.pause(!0)})),this.on(`timeupdate`,(function(){n.bar.set(`played`,n.video.currentTime/n.video.duration,`width`);var e=b.secondToTime(n.video.currentTime);n.template.ptime.innerHTML!==e&&(n.template.ptime.innerHTML=e)}));for(var r=function(t){e.addEventListener(n.events.videoEvents[t],(function(e){n.events.trigger(n.events.videoEvents[t],e)}))},i=0;i<this.events.videoEvents.length;i++)r(i);this.volume(this.user.get(`volume`),!0,!0),this.options.subtitle&&(this.subtitle=new Un(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new Gn(this)),this.user.get(`subtitle`)||this.subtitle.hide())}},{key:`switchQuality`,value:function(e){var t=this;if(e=typeof e==`string`?parseInt(e):e,this.qualityIndex!==e&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=e,this.switchingQuality=!0,this.quality=this.options.video.quality[e],this.template.qualityButton.innerHTML=this.quality.name;var n=this.video.paused;this.video.pause();var r=xr()({current:!1,pic:null,screenshot:this.options.screenshot,preload:`auto`,url:this.quality.url,subtitle:this.options.subtitle}),i=new DOMParser().parseFromString(r,`text/html`).body.firstChild;this.template.videoWrap.insertBefore(i,this.template.videoWrap.getElementsByTagName(`div`)[0]),this.prevVideo=this.video,this.video=i,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice(`${this.tran(`switching-quality`).replace(`%q`,this.quality.name)}`,-1,void 0,`switch-quality`),this.events.trigger(`quality_start`,this.quality),this.on(`canplay`,(function(){if(t.prevVideo){if(t.video.currentTime!==t.prevVideo.currentTime)return void t.seek(t.prevVideo.currentTime);t.template.videoWrap.removeChild(t.prevVideo),t.video.classList.add(`dplayer-video-current`),n||t.video.play(),t.prevVideo=null,t.notice(`${t.tran(`switched-quality`).replace(`%q`,t.quality.name)}`,void 0,void 0,`switch-quality`),t.switchingQuality=!1,t.events.trigger(`quality_end`)}})),this.on(`error`,(function(){t.video.error&&t.prevVideo&&(t.template.videoWrap.removeChild(t.video),t.video=t.prevVideo,n||t.video.play(),t.qualityIndex=t.prevIndex,t.quality=t.options.video.quality[t.qualityIndex],t.noticeTime=setTimeout((function(){t.template.notice.style.opacity=0,t.events.trigger(`notice_hide`)}),3e3),t.prevVideo=null,t.switchingQuality=!1)}))}}},{key:`notice`,value:function(e){var t,n,r,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,o=arguments.length>3?arguments[3]:void 0;if(o&&((t=document.getElementById(`dplayer-notice-${o}`))&&(t.innerHTML=e),this.noticeList[o]&&(clearTimeout(this.noticeList[o]),this.noticeList[o]=null)),!t){var s=Nn.NewNotice(e,a,o);this.template.noticeList.appendChild(s),t=s}this.events.trigger(`notice_show`,t),i>0&&(this.noticeList[o]=setTimeout((n=t,r=this,function(){n.addEventListener(`animationend`,(function(){r.template.noticeList.removeChild(n)})),n.classList.add(`remove-notice`),r.events.trigger(`notice_hide`),r.noticeList[o]=null}),i))}},{key:`resize`,value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger(`resize`)}},{key:`speed`,value:function(e){this.video.playbackRate=e}},{key:`destroy`,value:function(){$.splice($.indexOf(this),1),this.pause(),document.removeEventListener(`click`,this.docClickFun,!0),this.container.removeEventListener(`click`,this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src=``,this.container.innerHTML=``,this.events.trigger(`destroy`)}}],r=[{key:`version`,get:function(){return`1.27.1`}}],n&&Tr(t.prototype,n),r&&Tr(t,r),Object.defineProperty(t,`prototype`,{writable:!1}),e}();console.log(`
 %c DPlayer v1.27.1 v1.27.0-12-g4f61091 %c https://dplayer.diygod.dev 

`,`color: #fadfa3; background: #030307; padding:5px 0;`,`background: #fadfa3; padding:5px 0;`);let kr=Or})(),r.default})()))}));export default t();