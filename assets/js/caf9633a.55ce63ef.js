"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[49470],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>v,useMDXComponents:()=>u,withMDXComponents:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){return function(t){var a=u(t.components);return n.createElement(e,i({},t,{components:a}))}},u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(a),p=r,m=s["".concat(o,".").concat(p)]||s[p]||f[p]||i;return a?n.createElement(m,c(c({ref:t},d),{},{components:a})):n.createElement(m,c({ref:t},d))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68629:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(39960),r=a(86341),i=a(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function c(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var l=function(){var e=i.useState(!1),t=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},s=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return i.createElement(c,null,i.createElement(d,null),i.createElement(l,null),i.createElement(s,null))},p=function(){return i.createElement(c,null,i.createElement(l,null),i.createElement(s,null))};const f=function(){return(0,r.fbContent)({internal:i.createElement(u,null),external:i.createElement(p,null)})}},27736:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=a(68629),c=(a(86341),["components"]),l={id:"availability-of-data",title:"Availability of Data",slug:"/guided-tour/reusing-cached-data/availability-of-data/",description:"Relay guide to the availability of data",keywords:["availability"]},d=void 0,s={unversionedId:"guided-tour/reusing-cached-data/availability-of-data",id:"version-v12.0.0/guided-tour/reusing-cached-data/availability-of-data",title:"Availability of Data",description:"Relay guide to the availability of data",source:"@site/versioned_docs/version-v12.0.0/guided-tour/reusing-cached-data/availability-of-data.md",sourceDirName:"guided-tour/reusing-cached-data",slug:"/guided-tour/reusing-cached-data/availability-of-data/",permalink:"/docs/v12.0.0/guided-tour/reusing-cached-data/availability-of-data/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/guided-tour/reusing-cached-data/availability-of-data.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Sam Zhou",lastUpdatedAt:1703191660,formattedLastUpdatedAt:"Dec 21, 2023",frontMatter:{id:"availability-of-data",title:"Availability of Data",slug:"/guided-tour/reusing-cached-data/availability-of-data/",description:"Relay guide to the availability of data",keywords:["availability"]},sidebar:"version-v12.0.0/docs",previous:{title:"Fetch Policies",permalink:"/docs/v12.0.0/guided-tour/reusing-cached-data/fetch-policies/"},next:{title:"Presence of Data",permalink:"/docs/v12.0.0/guided-tour/reusing-cached-data/presence-of-data/"}},u={},p=[],f={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,c);return(0,i.mdx)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The behavior of the fetch policies described in the ",(0,i.mdx)("a",{parentName:"p",href:"../fetch-policies/"},"previous section")," will depend on the availability of the data in the Relay store at the moment we attempt to evaluate a query."),(0,i.mdx)("p",null,"There are two factors that determine the availability of data: the ",(0,i.mdx)("a",{parentName:"p",href:"../presence-of-data/"},"presence of data")," and ",(0,i.mdx)("a",{parentName:"p",href:"../staleness-of-data/"},"staleness of data"),"."),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}m.isMDXComponent=!0}}]);