!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/speed"]=t():e["video/player/speed"]=t()}(self,(function(){return function(){"use strict";var e={d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{plugin:function(){return H}});var n=coreApis.toast,o=coreApis.componentApis.video.playerAgent,s=coreApis.lifeCycle,r=coreApis.observer,i=coreApis.utils,a=coreApis.utils.sort,l=coreApis.settings;const c=e=>"function"==typeof e?{next:e}:e,d=e=>function e(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,s=!1;const r=[],i=[];let a=!1;const d=()=>{for(;r.length;)r.pop()();i.length=0,a=!0},p=e=>{a||(i.forEach((t=>{var n;null===(n=t.error)||void 0===n||n.call(t,e),(0,l.getGeneralSettings)().devMode&&console.error(e)})),d())},u=e=>{a||i.forEach((t=>{try{t.next(e)}catch(e){p(e)}}))},h=()=>{i.forEach((e=>{var t;null===(t=e.complete)||void 0===t||t.call(e)})),d()},b=()=>{if(s)return;const e=null==t?void 0:t({next:u,error:p,complete:h});e&&r.push(e),s=!0},m=e=>null==e?null:(i.push(e),()=>{lodash.pull(i,e)}),v=function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return 0===n.length?{subscribe:e=>{const t=m(c(e));return((null==o?void 0:o.connect)??b)(),t},pipe:v,next:u,error:p,complete:h,...o}:e(n[0],{subscribe:m},o||{connect:b,next:u}).pipe(...n.slice(1))};if(n){const e=null==t?void 0:t({subscribe:e=>n.subscribe({error:p,complete:h,...c(e)}),next:u,error:p,complete:h});e&&r.push(e)}return v()}(e),p=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return d((e=>{let{next:n,complete:o}=e;t.forEach((e=>{n(e)})),o()}))},u=(e,t)=>d((n=>{let{next:o}=n;return e.addEventListener(t,o),()=>e.removeEventListener(t,o)})),h=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return d((t=>{let{next:o}=t;e(...n,o)}))},b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return d((e=>{let{next:n,complete:o}=e;const s=[...t],r=()=>{const e=s.shift();e||o(),e.subscribe({next:n,complete:()=>{r()}})};r()}))},m=e=>new Promise(((t,n)=>{const o=e.subscribe({next:e=>{t(e),o()},error:()=>{n(),o()},complete:()=>{n(),o()}})})),v=e=>t=>{let{subscribe:n,next:o,complete:s,error:r}=t;n(lodash.mapValues({next:o,complete:s,error:r},(t=>e(t))))},g=e=>function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];Promise.resolve().then((()=>e(...n)))},f=e=>{const t=new Set;return e((e=>{lodash.castArray(e).forEach((e=>{t.add(e)}))})),()=>{t.forEach((e=>{e()}))}},y=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return d((e=>{let{next:n,error:o,complete:s}=e;return f((e=>{const r=[];let i=0;e(t.map(((e,a)=>e.pipe(v(g)).subscribe({next:e=>{r[a]=e,r.reduce((e=>e+1),0)===t.length&&n(r.slice())},complete:()=>{i++,i===t.length&&s()},error:o})))),e((()=>{r.length=0,i=0}))}))}))},x=e=>t=>{let{subscribe:n,next:o,error:s}=t;n(lodash.debounce((e=>{try{o(e)}catch(e){s(e)}}),e))},w=e=>t=>{let{subscribe:n,next:o}=t;n((t=>{e(t)&&o(t)}))},S=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{let{next:n,subscribe:o}=e,s=!1;o((e=>{s||t.forEach((e=>n(e))),n(e),s=!0}))}};var E=coreApis.pluginApis.data;const A=e=>e.split(",").map((e=>e.trim().replace(/^\./,""))).join(","),k=(e,t)=>{const n=t=>{(0,E.registerAndGetData)(e,t)[0]=t},o=(0,E.getData)(e);if(o.length)return[o[0],n];if(t){const e=t();return n(e),[e,n]}return[void 0,n]},V=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t&&1===e?"倍速":Math.trunc(e)===e?`${e}.0x`:`${e}x`},C=e=>{if("倍速"===e)return 1;const t=/([0-9]*[.]?[0-9]+)x/.exec(e);if(t)return parseFloat(t[1]);throw new Error(`unknown speed text: ${e}`)};const O=o.playerAgent.provideCustomQuery({video:{speedMenuList:".bilibili-player-video-btn-speed-menu,.bpx-player-ctrl-playbackrate-menu",speedMenuItem:".bilibili-player-video-btn-speed-menu-list,.bpx-player-ctrl-playbackrate-menu-item",speedNameBtn:".bilibili-player-video-btn-speed-name,.bpx-player-ctrl-playbackrate-result",speedContainer:".bilibili-player-video-btn-speed,.bpx-player-ctrl-playbackrate",active:".bilibili-player-active,.bpx-state-active",show:".bilibili-player-speed-show,.bpx-state-show"},bangumi:{speedMenuList:".squirtle-speed-select-list",speedMenuItem:".squirtle-select-item",speedNameBtn:".squirtle-speed-select-result",speedContainer:".squirtle-speed-wrap",active:".active",show:".bilibili-player-speed-show"}});let N;!function(e){e[e.MIN=0]="MIN",e[e.CURRENT=1]="CURRENT",e[e.MAX=2]="MAX"}(N||(N={}));const $=(e,t,n)=>{const o=new MutationObserver(n);return o.observe(e,t),o},T=e=>{let[t,n]=e;if(!t)throw new Error("speed container element not found!");if(!n)throw new Error("video element not found!");const o=t.querySelector(O.custom.speedNameBtn.selector),s=t.querySelector(O.custom.speedMenuList.selector);let r,l,c;const p=d(),u=d().pipe((e=>{let t,{subscribe:n,next:o}=e,s=!0;n((e=>{(s||t!==e)&&(s=!1,t=e,o(e))}))}));u.pipe(S(void 0),(e=>{let{subscribe:t,next:n}=e;const o=[];return t((e=>{2===o.length&&o.shift(),o.push(e),2===o.length&&n(o.slice())})),()=>{o.length=0}})).subscribe((e=>{let[t,n]=e;l=t,r=n}));const h=e=>{if(e)switch(e.nodeType){case Node.TEXT_NODE:u.next(C(e.data));break;case Node.ELEMENT_NODE:u.next(C(e.innerHTML));break;default:console.warn("The target parameter of updateActiveVideoSpeed must be a Node, and the node type must be one of TEXT_NODE and ELEMENT_NODE")}},b=()=>{c=lodash([...s.children]).map((e=>lodash.attempt((()=>C(e.textContent))))).reject((e=>lodash.isError(e))).sort((0,a.ascendingSort)()).value()};h(o),b();const m=$(s,{childList:!0,attributes:!0},(e=>{const{attributes:t=[],childList:n=[]}=lodash.groupBy(e,"type");n.length&&b(),p.next({attributes:t,childList:n})})),v=$(o,{childList:!0,subtree:!0},(e=>{e.forEach((e=>{const[t]=e.addedNodes;h(t)}))}));return{containerElement:t,videoElement:n,nameBtnElement:o,menuListElement:s,query:e=>(0,i.des)(`./*[(${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"or";return e.split(",").map(A).flat().map((e=>`contains(@class, "${e}")`)).join(` ${t} `)}(O.custom.speedMenuItem.selector)}) and normalize-space()="${V(e)}"]`,s),dispose:()=>{m.disconnect(),v.disconnect()},activeVideoSpeed$:u,menuListElementMutations$:p,getActiveVideoSpeed:()=>r,getOldActiveVideoSpeed:()=>l,getAvailableSpeedValues:()=>c}},M=e=>{const{videoElement:t,menuListElement:n}=e,o=u(n,"click").pipe((s=e=>{const{innerText:t,innerHTML:n}=e.target,o=t.trim()||n.trim();return lodash.attempt((()=>C(o)))},e=>{let{subscribe:t,next:n}=e;t((e=>{n(s(e))}))}),w((e=>!lodash.isError(e))));var s;const r=d((e=>{let{next:n}=e,o=t;do{o=Object.getPrototypeOf(o)}while(null===o||!Object.prototype.hasOwnProperty.call(o,"playbackRate"));const s=Object.getOwnPropertyDescriptor(o,"playbackRate");return Object.defineProperty(o,"playbackRate",{set(e){s.set.call(this,e),n(e)}}),()=>{Object.defineProperty(o,"playbackRate",s)}})),i=o.pipe((e=>{let t,{subscribe:n,next:o}=e,s=!0;n((e=>{(s||t!==e)&&(s=!1,t=e,o(e))}))})),a=r.pipe((e=>{let t,{subscribe:n,next:o}=e,s=!0;n((e=>{(s||t!==e)&&(s=!1,t=e,o(e))}))})),l=d((e=>{let{next:t}=e;const n=y(i,a);return n.subscribe((e=>{let[n,o]=e;n===o&&t(o)})),()=>n.complete()})).pipe((e=>{let t,{subscribe:n,next:o}=e,s=!0;n((e=>{(s||t!==e)&&(s=!1,t=e,o(e))}))}));let c;a.pipe(x(200),S(void 0),(e=>{let{subscribe:t,next:n}=e;const o=[];return t((e=>{2===o.length&&o.shift(),o.push(e),2===o.length&&n(o.slice())})),()=>{o.length=0}})).subscribe((e=>{let[t]=e;c=t}));const p={menuListElementClickSpeed$:o,menuListElementClickSpeedChange$:i,playbackRate$:r,playbackRateChange$:a,videoSpeedChange$:l};return{...e,...p,dispose:()=>{lodash.values(p).forEach((e=>{e.complete()})),e.dispose()},getOldPlaybackRate:()=>c}},[j]=k("speed.NoSuchSpeedMenuItemElementError",(()=>class extends Error{constructor(e){const t=lodash.attempt((()=>V(e))),n=lodash.isError(t)?String(e):String(t);var o,s,r;super(`There is no such speed menu item as ${n}`),this.speed=e,r=void 0,(s="formattedSpeed")in(o=this)?Object.defineProperty(o,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[s]=r,this.formattedSpeed=n}})),L=e=>{const{query:t,videoElement:n,videoSpeedChange$:o,getOldActiveVideoSpeed:s,getAvailableSpeedValues:r,getActiveVideoSpeed:i}=e,a=async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;const r=t(e);if(null==r)throw new j(e);r.click();const i=t=>{if((t??n.playbackRate)!==e)throw new Error(`failed to set ${V(e)} video speed.`)},a=[m(o.pipe(x(Math.max(0,s||0))))];s>0&&a.push(new Promise(((e,t)=>setTimeout((()=>setTimeout(t,s)))))),await Promise.all(a).then(i).catch(i)},l=async()=>{await a(1)},c=async(e,t)=>{if(lodash.isNil(e)&&(e=!1),"boolean"==typeof e)e||1===n.playbackRate?await a(s()):await l();else{const n=r();switch(t){case N.MIN:await a(n[e]);break;case N.MAX:await a(n[n.length-1+e]);break;case N.CURRENT:default:{const t=n.indexOf(i());if(-1===t)throw new Error("Unexpected Error: The available speed values do not include the active speed value, this should be a bug, please report the issue on github!");await a(n[t+e])}}}},d=async e=>{try{await c(e,N.CURRENT)}catch(e){if(console.warn(e),!(e instanceof j))throw e}};return Object.assign(e,{set:a,force:async e=>{n.playbackRate=e},reset:l,toggle:c,step:d,increase:async()=>{await d(1)},decrease:async()=>{await d(-1)}})},R=()=>k("speed.speedContext"),P=()=>k("speed.buildArguments$",(()=>{return d().pipe((e=e=>e.settings.enabled,t=>{let{subscribe:n,next:o}=t;const s=new Set;return n((t=>{const n=s.size;e(t)?s.add(t):s.delete(t),s.size!==n&&o([...s])})),()=>{s.clear()}}));var e})),I=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lodash.identity;const[t,n]=R();if(t)return t;let o,i;const[a]=k("lifeCycleComponentLoaded$",(()=>u(unsafeWindow,s.LifeCycleEventTypes.ComponentsLoaded))),[l]=P(),[c]=k("speed.videoChange$",(()=>h(r.videoChange).pipe(w((e=>{let{aid:t,cid:n}=e;return t||n}))))),[v]=k("speed.speedContext$",(()=>d((t=>{let{next:n}=t;return y(c,b(p([]),l),a).subscribe((t=>{var s;let[r,a]=t;const[l]=R();null==l||l.dispose(),null===(s=i)||void 0===s||s("context update");const d=new Promise(((e,t)=>{o=e,i=t}));Promise.all([Promise.all([O.custom.speedContainer(),O.query.video.element()]).then(o),d]).then((e=>{let[,t]=e;return t})).then(T).then(M).then(L).then((e=>Object.assign(e,{videoIdObject:r,speedContext$:v,videoChange$:c}))).then(e(a)).then(n).catch((e=>console.error(e)))}))}))));return v.subscribe(n),m(v)};var D=coreApis.utils.log,q=coreApis.pluginApis.hook;function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class B{constructor(e){var t;this.entryContext=e,U(this,"speedContext",void 0),U(this,"settings",void 0),U(this,"coreApis",void 0),U(this,"metadata",void 0),U(this,"options",void 0),U(this,"getVideoIdObject",void 0),U(this,"getAvailableSpeedValues",void 0),U(this,"getOldActiveVideoSpeed",void 0),U(this,"forceVideoSpeed",void 0),U(this,"getVideoSpeed",void 0),U(this,"setVideoSpeed",void 0),U(this,"resetVideoSpeed",void 0),U(this,"toggleVideoSpeed",void 0),U(this,"increaseVideoSpeed",void 0),U(this,"decreaseVideoSpeed",void 0),lodash.assign(this,e,{options:e.settings.options}),null===(t=this.migrate)||void 0===t||t.call(this),lodash.assign(this,lodash.mapValues(B.contextMap,(e=>async function(){const t=await I(),n=lodash.get(t,e),o=lodash.isFunction(n)?await n(...arguments):n;return o})))}}U(B,"create",void 0),U(B,"contextMap",{getVideoIdObject:"videoIdObject",getAvailableSpeedValues:"getAvailableSpeedValues",getOldActiveVideoSpeed:"getOldActiveVideoSpeed",getVideoSpeed:"videoElement.playbackRate",setVideoSpeed:"set",forceVideoSpeed:"force",resetVideoSpeed:"reset",toggleVideoSpeed:"toggle",increaseVideoSpeed:"increase",decreaseVideoSpeed:"decrease"}),I((e=>t=>{const n=lodash.omit(t,"dispose"),o=e.map((e=>e.getSpeedContextMixin(n)));if(o.length>1){const e=lodash.intersection(...o.map(Object.keys));if(e.length)throw new Error(`In the registered speed component, there is an implementation of getSpeedContextMixin that causes the speed context to be mixed in ambiguous.\nThe repeated key names are ${e.join(", ")}`)}lodash.assign(n,...o);const s=[];return e.forEach((e=>{const t=lodash(e.settings.options).mapValues(((t,n)=>h(l.addComponentListener,`${e.metadata.name}.${n}`).pipe((e=>{let t,{subscribe:n,next:o}=e,s=!0;n((e=>{(s||t!==e)&&(s=!1,t=e,o(e))}))})))).mapKeys(((e,t)=>`${t}$`)).value();s.push(...lodash.values(t)),e.options=new Proxy(e.settings.options,{get:(e,n,o)=>lodash.isSymbol(n)?Reflect.get(e,n,o):!Reflect.has(e,n)&&n.endsWith("$")?t[n]:Reflect.get(e,n,o)}),e.speedContext=n,e.onSpeedContext(n),e.settings.enabled&&lodash(t).entries().forEach((t=>{let[n,o]=t;o.next(e.settings.options[n.slice(0,-1)])}))})),{...n,dispose:()=>{s.forEach((e=>e.complete())),t.dispose()}}})),B.create=function(e){const t=d().pipe((e=>{let t,{subscribe:n,next:o}=e,s=!0;n((e=>{(s||t!==e)&&(s=!1,t=e,o(e))}))}));return{...e,entry:n=>{const o=lodash.attempt((()=>new this(n)));if(o instanceof Error)return(0,D.logError)(o),null;const[s]=P();return t.subscribe((()=>{s.next(o)})),s.next(o),(0,q.getHook)(`speed.component.${e.name}`).after(o),o},reload:()=>t.next(!0),unload:()=>t.next(!1)}};const H={name:"speed.keymap",displayName:"快捷键扩展 - 视频倍速",author:{name:"JLoeve",link:"https://github.com/LonelySteve"},description:"\n\n为操作视频倍速提供快捷键支持：\n\n- 提高倍速\n- 降低倍速\n- 切换倍速\n\n若添加并启用了记忆倍速组件，则还会增加一个快捷键：\n\n- 清除倍速记忆\n  ",setup:e=>{let{addData:t,addHook:o}=e;const s=e=>async t=>{const n=await I();return await e(n),t.showTip(V(n.videoElement.playbackRate),"mdi-fast-forward"),!0};t("keymap.actions",(e=>{Object.assign(e,{videoSpeedIncrease:{displayName:"提高倍速",run:s((e=>{let{increase:t}=e;return t()}))},videoSpeedDecrease:{displayName:"降低倍速",run:s((e=>{let{decrease:t}=e;return t()}))},videoSpeedToggle:{displayName:"切换倍速",run:s((e=>{let{toggle:t}=e;t()}))}})})),t("keymap.presets",(e=>{e.videoSpeedIncrease="shift > 》 arrowUp",e.videoSpeedDecrease="shift < 《 arrowDown",e.videoSpeedToggle="shift ? ？"})),o("speed.component.rememberVideoSpeed",{after:e=>{t("keymap.actions",(t=>{t.videoSpeedForget={displayName:"清除倍速记忆",run:lodash.debounce(s((async()=>{e.settings.enabled?e.options.individualRemember?(e.forgetSpeed(),await e.resetVideoSpeed(),n.Toast.success("已清除当前视频倍速记忆值",e.metadata.displayName,3e3)):n.Toast.error("选项「各视频分别记忆」已禁用，不能清除当前视频倍速记忆值",e.metadata.displayName,5e3):n.Toast.error("组件已禁用，不能清除当前视频倍速记忆值",e.metadata.displayName,5e3)})),200)}})),t("keymap.presets",(e=>{e.videoSpeedForget="shift : ："}))}})},commitHash:"095ddcc03ff52b9726715fc84688f37ec5c37475",coreVersion:"2.2.2"};return t=t.plugin}()}));