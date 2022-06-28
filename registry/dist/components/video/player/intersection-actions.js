!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/intersection-actions"]=t():e["video/player/intersection-actions"]=t()}(self,(function(){return function(){"use strict";var e={d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{component:function(){return s}});var n,o=coreApis.componentApis.video.playerAgent,i=coreApis.componentApis.video.playerLight,a=coreApis.observer,r=coreApis.settings;!function(e){e.Top="视频顶部",e.Medium="视频中间",e.Bottom="视频底部"}(n||(n={}));const s={name:"playerIntersectionActions",author:{name:"FoundTheWOUT",link:"https://github.com/FoundTheWOUT"},tags:[componentsTags.video],entry:async e=>{let{settings:{options:t},metadata:s}=e;const p=t,{query:{video:c}}=o.playerAgent,d=await c.element(),u=document.getElementById("video-player")??(dq(".player-wrap")||dq(".player-module"));let l,m=!0;function f(e){switch(e){case n.Top:return 1;case n.Medium:return.5;case n.Bottom:return 0;default:return.5}}function y(){l.observe(u)}function g(){l.unobserve(u)}const h=e=>new IntersectionObserver((e=>{let[t]=e;t.isIntersecting?m||(m=!0,p.pause&&d.paused&&d.play(),p.light&&(0,r.getComponentSettings)("playerAutoLight").enabled&&!p.pause&&!d.paused&&(0,i.lightOff)()):(d.paused||(m=!1),p.pause&&!d.paused&&d.pause(),p.light&&(0,r.getComponentSettings)("playerAutoLight").enabled&&!p.pause&&(0,i.lightOn)())}),{threshold:f(e||p.triggerLocation)});(0,r.addComponentListener)(`${s.name}.triggerLocation`,(e=>{g(),l=h(e),y()})),l=h(),(0,a.videoChange)((async()=>{o.playerAgent.isAutoPlay()&&y(),d.addEventListener("play",y),d.addEventListener("ended",g)}))},displayName:"播放器位置动作",description:{"zh-CN":"设置当播放器移出视图的位置变化时执行的动作."},options:{triggerLocation:{defaultValue:n.Medium,displayName:"触发位置",dropdownEnum:n},pause:{defaultValue:!1,displayName:"自动暂停"},light:{defaultValue:!0,displayName:"自动开灯"}},commitHash:"095ddcc03ff52b9726715fc84688f37ec5c37475",coreVersion:"2.2.2"};return t=t.component}()}));