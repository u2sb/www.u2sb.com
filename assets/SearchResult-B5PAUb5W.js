import{u as I,g as le,h as se,i as M,j as ae,k as te,t as ie,l as re,m as L,n as H,p as ue,w as K,q as s,v as ne,R as P,x as oe,y as me,z as ce,A as pe,B as ve,C as he,D as de,E as ye,F as Se,G as f,H as ge,I as we,J as Oe,K as F,L as j,M as xe}from"./app-QwspqWPw.js";const be=["/","/OpenHw/","/OpenSw/","/pages/About.html","/OpenSw/Danmu.Server/","/OpenSw/Danmu.Server/artplayer-danmu.html","/OpenSw/Danmu.Server/dplayer-danmu.html","/OpenSw/Danmu.Server/install-on-baota.html","/OpenSw/Danmu.Server/install.html","/OpenSw/Overview/public-service.html","/OpenSw/UnitySbTemplate/","/OpenSw/UnitySbTemplate/SbGameObject.html","/OpenSw/UnitySbTemplate/UnityPackageOffline.html","/OpenSw/hexo-tag-mmedia/","/OpenSw/hexo-tag-mmedia/aplayer.html","/OpenSw/hexo-tag-mmedia/artplayer.html","/OpenSw/hexo-tag-mmedia/audio.html","/OpenSw/hexo-tag-mmedia/bilibili.html","/OpenSw/hexo-tag-mmedia/developer-doc.html","/OpenSw/hexo-tag-mmedia/dplayer.html","/OpenSw/hexo-tag-mmedia/install.html","/OpenSw/hexo-tag-mmedia/meting.html","/OpenSw/hexo-tag-mmedia/version0.html","/OpenSw/hexo-tag-mmedia/video.html","/OpenSw/hexo-tag-mmedia/xigua.html","/OpenSw/vuepress-plugin-sbaudio/","/OpenSw/vuepress-plugin-sbaudio/aplayer.html","/OpenSw/vuepress-plugin-sbaudio/aplayerGlobal.html","/OpenSw/vuepress-plugin-sbaudio/install.html","/OpenSw/vuepress-plugin-sbaudio/meting.html","/OpenHw/CameraBattery/DMW-BLK22/","/OpenHw/ObsKeyboard/SB00/","/OpenSw/UnitySbTemplate/ThirdPartyPackageExt/","/OpenSw/UnitySbTemplate/ThirdPartyPackageExt/UniTask.YooAsset.html","/404.html","/pages/","/OpenSw/Overview/","/OpenHw/CameraBattery/","/OpenHw/ObsKeyboard/"],He="SLIMSEARCH_QUERY_HISTORY",y=I(He,[]),fe=()=>{const{queryHistoryCount:a}=f,t=a>0;return{enabled:t,queryHistories:y,addQueryHistory:i=>{t&&(y.value=Array.from(new Set([i,...y.value.slice(0,a-1)])))},removeQueryHistory:i=>{y.value=[...y.value.slice(0,i),...y.value.slice(i+1)]}}},U=a=>be[a.id]+("anchor"in a?`#${a.anchor}`:""),ke="SLIMSEARCH_RESULT_HISTORY",{resultHistoryCount:B}=f,S=I(ke,[]),Re=()=>{const a=B>0;return{enabled:a,resultHistories:S,addResultHistory:t=>{if(a){const i={link:U(t),display:t.display};"header"in t&&(i.header=t.header),S.value=[i,...S.value.slice(0,B-1)]}},removeResultHistory:t=>{S.value=[...S.value.slice(0,t),...S.value.slice(t+1)]}}},Qe=a=>{const t=pe(),i=M(),k=ve(),u=L(0),w=H(()=>u.value>0),h=he([]);return de(()=>{const{search:d,terminate:R}=ye(),g=Se(o=>{const{resultsFilter:O=n=>n,querySplitter:A,suggestionsFilter:Q,...q}=t.value;o?(u.value+=1,d(o,i.value,q).then(n=>O(n,o,i.value,k.value)).then(n=>{u.value-=1,h.value=n}).catch(n=>{console.warn(n),u.value-=1,u.value||(h.value=[])})):h.value=[]},f.searchDelay-f.suggestDelay,{maxWait:5e3});K([a,i],([o])=>{g(o.join(" "))},{immediate:!0}),ge(()=>{R()})}),{isSearching:w,results:h}};var Ce=le({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:t}){const i=se(),k=M(),u=ae(te),{enabled:w,addQueryHistory:h,queryHistories:d,removeQueryHistory:R}=fe(),{enabled:g,resultHistories:o,addResultHistory:O,removeResultHistory:A}=Re(),Q=w||g,q=ie(a,"queries"),{results:n,isSearching:Y}=Qe(q),r=re({isQuery:!0,index:0}),p=L(0),v=L(0),E=H(()=>Q&&(d.value.length>0||o.value.length>0)),C=H(()=>n.value.length>0),D=H(()=>n.value[p.value]||null),G=()=>{const{isQuery:e,index:l}=r;l===0?(r.isQuery=!e,r.index=e?o.value.length-1:d.value.length-1):r.index=l-1},_=()=>{const{isQuery:e,index:l}=r;l===(e?d.value.length-1:o.value.length-1)?(r.isQuery=!e,r.index=0):r.index=l+1},W=()=>{p.value=p.value>0?p.value-1:n.value.length-1,v.value=D.value.contents.length-1},z=()=>{p.value=p.value<n.value.length-1?p.value+1:0,v.value=0},J=()=>{v.value<D.value.contents.length-1?v.value+=1:z()},V=()=>{v.value>0?v.value-=1:W()},T=e=>e.map(l=>xe(l)?l:s(l[0],l[1])),N=e=>{if(e.type==="customField"){const l=we[e.index]||"$content",[m,b=""]=Oe(l)?l[k.value].split("$content"):l.split("$content");return e.display.map(c=>s("div",T([m,...c,b])))}return e.display.map(l=>s("div",T(l)))},x=()=>{p.value=0,v.value=0,t("updateQuery",""),t("close")},X=()=>w?s("ul",{class:"slimsearch-result-list"},s("li",{class:"slimsearch-result-list-item"},[s("div",{class:"slimsearch-result-title"},u.value.queryHistory),d.value.map((e,l)=>s("div",{class:["slimsearch-result-item",{active:r.isQuery&&r.index===l}],onClick:()=>{t("updateQuery",e)}},[s(F,{class:"slimsearch-result-type"}),s("div",{class:"slimsearch-result-content"},e),s("button",{class:"slimsearch-remove-icon",innerHTML:j,onClick:m=>{m.preventDefault(),m.stopPropagation(),R(l)}})]))])):null,Z=()=>g?s("ul",{class:"slimsearch-result-list"},s("li",{class:"slimsearch-result-list-item"},[s("div",{class:"slimsearch-result-title"},u.value.resultHistory),o.value.map((e,l)=>s(P,{to:e.link,class:["slimsearch-result-item",{active:!r.isQuery&&r.index===l}],onClick:()=>{x()}},()=>[s(F,{class:"slimsearch-result-type"}),s("div",{class:"slimsearch-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(m=>T(m)).flat())]),s("button",{class:"slimsearch-remove-icon",innerHTML:j,onClick:m=>{m.preventDefault(),m.stopPropagation(),A(l)}})]))])):null;return ue("keydown",e=>{if(a.isFocusing){if(C.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")J();else if(e.key==="Enter"){const l=D.value.contents[v.value];h(a.queries.join(" ")),O(l),i.push(U(l)),x()}}else if(g){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")_();else if(e.key==="Enter"){const{index:l}=r;r.isQuery?(t("updateQuery",d.value[l]),e.preventDefault()):(i.push(o.value[l].link),x())}}}}),K([p,v],()=>{var e;(e=document.querySelector(".slimsearch-result-list-item.active .slimsearch-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["slimsearch-result-wrapper",{empty:a.queries.length?!C.value:!E.value}],id:"slimsearch-results"},a.queries.length?Y.value?s(ne,{hint:u.value.searching}):C.value?s("ul",{class:"slimsearch-result-list"},n.value.map(({title:e,contents:l},m)=>{const b=p.value===m;return s("li",{class:["slimsearch-result-list-item",{active:b}]},[s("div",{class:"slimsearch-result-title"},e||u.value.defaultTitle),l.map((c,ee)=>{const $=b&&v.value===ee;return s(P,{to:U(c),class:["slimsearch-result-item",{active:$,"aria-selected":$}],onClick:()=>{h(a.queries.join(" ")),O(c),x()}},()=>[c.type==="text"?null:s(c.type==="title"?oe:c.type==="heading"?me:ce,{class:"slimsearch-result-type"}),s("div",{class:"slimsearch-result-content"},[c.type==="text"&&c.header?s("div",{class:"content-header"},c.header):null,s("div",N(c))])])})])})):u.value.emptyResult:Q?E.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{Ce as default};