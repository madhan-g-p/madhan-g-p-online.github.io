(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9962:function(e,t,i){Promise.resolve().then(i.t.bind(i,2098,23)),Promise.resolve().then(i.t.bind(i,8581,23)),Promise.resolve().then(i.t.bind(i,2647,23)),Promise.resolve().then(i.bind(i,9432))},8294:function(e,t,i){"use strict";i.d(t,{ac:function(){return r},ig:function(){return a}});var n=i(9873);function r(e){let t=e=>window.matchMedia(e).matches,[i,r]=(0,n.useState)(t(e));function a(){r(t(e))}return(0,n.useEffect)(()=>{let t=window.matchMedia(e);return a(),t.addListener?t.addListener(a):t.addEventListener("change",a),()=>{t.removeListener?t.removeListener(a):t.removeEventListener("change",a)}},[e]),i}function a(){let e=function(){let e=window.localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)"),i="boolean"==typeof t.matches;return"string"==typeof e?"system"===e?t.matches?"dark":"light":e:i&&t.matches?"dark":"light"}();document.documentElement.setAttribute("data-theme",e),document.documentElement.style.colorScheme=e}a.toString()},9432:function(e,t,i){"use strict";i.r(t),i.d(t,{ThemeSwitcherIcons:function(){return o}});var n=i(9953),r=i(9873),a=i(8294);let o=()=>{let[e,t]=(0,r.useState)(null),i=(0,a.ac)("(prefers-color-scheme: dark)"),o=e=>{switch(t(e),window.localStorage.setItem("theme",e),e){case"light":case"dark":document.documentElement.setAttribute("data-theme",e),document.documentElement.style.colorScheme=e;break;default:(0,a.ig)()}};return(0,r.useLayoutEffect)(()=>{(0,a.ig)(),t(localStorage.getItem("theme")||"system")},[i]),(0,n.jsxs)("div",{className:"theme-switcher-group",role:"radiogroup",children:[(0,n.jsx)("span",{onClick:()=>o("light"),"aria-label":"Switch to light theme",className:"light"===e?"activeTheme":"","data-theme-switcher":"true",children:(0,n.jsxs)("svg",{className:"with-icon_icon__aLCKg","data-testid":"geist-icon",fill:"none",height:"24",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"24",children:[(0,n.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,n.jsx)("path",{d:"M12 1v2"}),(0,n.jsx)("path",{d:"M12 21v2"}),(0,n.jsx)("path",{d:"M4.22 4.22l1.42 1.42"}),(0,n.jsx)("path",{d:"M18.36 18.36l1.42 1.42"}),(0,n.jsx)("path",{d:"M1 12h2"}),(0,n.jsx)("path",{d:"M21 12h2"}),(0,n.jsx)("path",{d:"M4.22 19.78l1.42-1.42"}),(0,n.jsx)("path",{d:"M18.36 5.64l1.42-1.42"})]})}),(0,n.jsx)("span",{onClick:()=>o("system"),"aria-label":"Switch to system theme",className:"system"===e?"activeTheme":"","data-theme-switcher":"true",children:(0,n.jsxs)("svg",{className:"with-icon_icon__aLCKg","data-testid":"geist-icon",fill:"none",height:"24",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"24",children:[(0,n.jsx)("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),(0,n.jsx)("path",{d:"M8 21h8"}),(0,n.jsx)("path",{d:"M12 17v4"})]})}),(0,n.jsx)("span",{onClick:()=>o("dark"),"aria-label":"Switch to dark theme",className:"dark"===e?"activeTheme":"","data-theme-switcher":"true",children:(0,n.jsx)("svg",{className:"with-icon_icon__aLCKg","data-testid":"geist-icon",fill:"none",height:"24",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"24",children:(0,n.jsx)("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})})})]})}},8581:function(e){e.exports={main:"page_main__ibFHK",center:"page_center__GvJ9Y",description:"page_description__s_Lqk",about:"page_about__VL9KY",code:"page_code__Cdcue",grid:"page_grid__2WZXq",card:"page_card__ftWzl",logo:"page_logo__M5piD",availability:"page_availability__fhAFk",blink_me:"page_blink_me__kXbCo",blinker:"page_blinker__TjIg9",glow:"page_glow__SY7SI",content:"page_content__rFejU",vercelLogo:"page_vercelLogo__1QD2W",rotate:"page_rotate__P15uU"}}},function(e){e.O(0,[940,159,890,744],function(){return e(e.s=9962)}),_N_E=e.O()}]);