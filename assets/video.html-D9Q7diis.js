import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a,o as t}from"./app-CBCUMa6I.js";const n={};function l(h,i){return t(),s("div",null,i[0]||(i[0]=[a(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>可以插入 html5 原生 video 标签</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><div class="language-twig line-numbers-mode" data-highlighter="shiki" data-ext="twig" data-title="twig" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{% </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">mmedia</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;video&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;src:a.mp4&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> %}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-twig line-numbers-mode" data-highlighter="shiki" data-ext="twig" data-title="twig" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{% </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">mmedia</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;video&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;src:https://baidu.com/a.mp4&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;autoplay:true&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> %}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><blockquote><p>此部分请熟读 <a href="https://www.w3.org/TR/2014/REC-html5-20141028/embedded-content-0.html#the-video-element" target="_blank" rel="noopener noreferrer">Video 相关介绍</a></p></blockquote><ul><li>使用 <code>:</code> 或 <code>=</code> 分割。</li><li>所有 <code>&lt;video&gt;</code> 标签的原生参数均可添加，只要能写进去就可以。</li><li>具体能否实现相关标准，取决于客户端浏览器。</li></ul><h3 id="json-参数" tabindex="-1"><a class="header-anchor" href="#json-参数"><span>JSON 参数</span></a></h3><p>mmedia 插件允许在 contents 部分使用 JSON 编写配置，使用 JSON5 标准。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p>默认配置可写入 <code>_config.yml</code> 下</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">mmedia</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  video</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      autoplay</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">vaule</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const o=e(n,[["render",l],["__file","video.html.vue"]]),p=JSON.parse('{"path":"/OpenSw/hexo-tag-mmedia/video.html","title":"Video","lang":"zh-CN","frontmatter":{"title":"Video","date":"2021-02-23T16:16:20.000Z","redirectFrom":["/pages/f98608/"],"description":"介绍 可以插入 html5 原生 video 标签 使用 参数 此部分请熟读 Video 相关介绍 使用 : 或 = 分割。 所有 <video> 标签的原生参数均可添加，只要能写进去就可以。 具体能否实现相关标准，取决于客户端浏览器。 JSON 参数 mmedia 插件允许在 contents 部分使用 JSON 编写配置，使用 JSON5 标准。 ...","head":[["meta",{"property":"og:url","content":"https://www.u2sb.com/OpenSw/hexo-tag-mmedia/video.html"}],["meta",{"property":"og:site_name","content":"帅比网"}],["meta",{"property":"og:title","content":"Video"}],["meta",{"property":"og:description","content":"介绍 可以插入 html5 原生 video 标签 使用 参数 此部分请熟读 Video 相关介绍 使用 : 或 = 分割。 所有 <video> 标签的原生参数均可添加，只要能写进去就可以。 具体能否实现相关标准，取决于客户端浏览器。 JSON 参数 mmedia 插件允许在 contents 部分使用 JSON 编写配置，使用 JSON5 标准。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-01T16:33:07.000Z"}],["meta",{"property":"article:published_time","content":"2021-02-23T16:16:20.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-01T16:33:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Video\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-23T16:16:20.000Z\\",\\"dateModified\\":\\"2025-01-01T16:33:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MonoLogueChi\\",\\"url\\":\\"https://blog.xxwhite.com\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[{"level":3,"title":"JSON 参数","slug":"json-参数","link":"#json-参数","children":[]}]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]}],"git":{"createdTime":1735749187000,"updatedTime":1735749187000,"contributors":[{"name":"MonoLogueChi","username":"MonoLogueChi","email":"xxwhite@foxmail.com","commits":1,"url":"https://github.com/MonoLogueChi"}]},"readingTime":{"minutes":0.5,"words":150},"filePathRelative":"OpenSw/hexo-tag-mmedia/video.md","localizedDate":"2021年2月24日","autoDesc":true,"excerpt":"<h2>介绍</h2>\\n<p>可以插入 html5 原生 video 标签</p>\\n<h2>使用</h2>\\n<div class=\\"language-twig line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"twig\\" data-title=\\"twig\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">{% </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">mmedia</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"video\\"</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"src:a.mp4\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> %}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{o as comp,p as data};