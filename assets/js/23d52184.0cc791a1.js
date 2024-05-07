"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76460],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>s});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){return function(t){var r=u(t.components);return a.createElement(e,o({},t,{components:r}))}},u=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(r),p=n,h=s["".concat(i,".").concat(p)]||s[p]||m[p]||o;return r?a.createElement(h,c(c({ref:t},d),{},{components:r})):a.createElement(h,c({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},68629:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(39960),n=r(86341),o=r(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function c(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var l=function(){var e=o.useState(!1),t=e[0],r=e[1],a=function(e){r(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},s=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return o.createElement(c,null,o.createElement(d,null),o.createElement(l,null),o.createElement(s,null))},p=function(){return o.createElement(c,null,o.createElement(l,null),o.createElement(s,null))};const m=function(){return(0,n.fbContent)({internal:o.createElement(u,null),external:o.createElement(p,null)})}},22974:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(83117),n=r(80102),o=(r(67294),r(3905)),i=r(68629),c=["components"],l={id:"videos",title:"Videos",slug:"/principles-and-architecture/videos/",description:"Relay videos"},d=void 0,s={unversionedId:"principles-and-architecture/videos",id:"principles-and-architecture/videos",title:"Videos",description:"Relay videos",source:"@site/docs/principles-and-architecture/videos.md",sourceDirName:"principles-and-architecture",slug:"/principles-and-architecture/videos/",permalink:"/docs/next/principles-and-architecture/videos/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/principles-and-architecture/videos.md",tags:[],version:"current",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1715115979,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"videos",title:"Videos",slug:"/principles-and-architecture/videos/",description:"Relay videos"},sidebar:"docs",previous:{title:"Runtime Architecture",permalink:"/docs/next/principles-and-architecture/runtime-architecture/"},next:{title:"Why Is My Field Not Found?",permalink:"/docs/next/error-reference/unknown-field/"}},u={},p=[{value:"React Conf 2021",id:"react-conf-2021",level:2},{value:"Re-introducing Relay | Robert Balicki",id:"re-introducing-relay--robert-balicki",level:3},{value:"React Conf 2019",id:"react-conf-2019",level:2},{value:"Data Fetching With Suspense In Relay | Joe Savona",id:"data-fetching-with-suspense-in-relay--joe-savona",level:3},{value:"Facebook F8 2019",id:"facebook-f8-2019",level:2},{value:"Building the new Facebook.com with React, GraphQL and Relay",id:"building-the-new-facebookcom-with-react-graphql-and-relay",level:3},{value:"Facebook F8 2017",id:"facebook-f8-2017",level:2},{value:"The Evolution of React and GraphQL at Facebook and Beyond",id:"the-evolution-of-react-and-graphql-at-facebook-and-beyond",level:3},{value:"Silicon Valley ReactJS Meetup",id:"silicon-valley-reactjs-meetup",level:2},{value:"Relay Modern: simpler, faster, more predictable (slides)",id:"relay-modern-simpler-faster-more-predictable-slides",level:3},{value:"Zero to GraphQL in 30 minutes",id:"zero-to-graphql-in-30-minutes",level:3},{value:"GraphQL Europe 2018",id:"graphql-europe-2018",level:2},{value:"Data Masking in GraphQL Clients",id:"data-masking-in-graphql-clients",level:3}],m={toc:p};function h(e){var t=e.components,r=(0,n.Z)(e,c);return(0,o.mdx)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"react-conf-2021"},"React Conf 2021"),(0,o.mdx)("h3",{id:"re-introducing-relay--robert-balicki"},"Re-introducing Relay | Robert Balicki"),(0,o.mdx)("iframe",{src:"https://www.youtube-nocookie.com/embed/lhVGdErZuN4",width:640,height:360,allowFullScreen:!0,frameBorder:"0"}),(0,o.mdx)("h2",{id:"react-conf-2019"},"React Conf 2019"),(0,o.mdx)("h3",{id:"data-fetching-with-suspense-in-relay--joe-savona"},"Data Fetching With Suspense In Relay | Joe Savona"),(0,o.mdx)("iframe",{src:"https://www.youtube-nocookie.com/embed/Tl0S7QkxFE4",width:640,height:360,allowFullScreen:!0,frameBorder:"0"}),(0,o.mdx)("h2",{id:"facebook-f8-2019"},"Facebook F8 2019"),(0,o.mdx)("h3",{id:"building-the-new-facebookcom-with-react-graphql-and-relay"},(0,o.mdx)("a",{parentName:"h3",href:"https://developers.facebook.com/videos/2019/building-the-new-facebookcom-with-react-graphql-and-relay/"},"Building the new Facebook.com with React, GraphQL and Relay")),(0,o.mdx)("iframe",{src:"https://www.youtube-nocookie.com/embed/WxPtYJRjLL0?start=215",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,width:"640",height:"360",frameBorder:"0"}),(0,o.mdx)("h2",{id:"facebook-f8-2017"},"Facebook F8 2017"),(0,o.mdx)("h3",{id:"the-evolution-of-react-and-graphql-at-facebook-and-beyond"},(0,o.mdx)("a",{parentName:"h3",href:"https://developers.facebook.com/videos/f8-2017/the-evolution-of-react-and-graphql-at-facebook-and-beyond/"},"The Evolution of React and GraphQL at Facebook and Beyond")),(0,o.mdx)("iframe",{src:"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFacebookforDevelopers%2Fvideos%2F10154614710193553%2F&show_text=0&width=640",width:640,height:360,frameBorder:"0",allowFullScreen:!0}),(0,o.mdx)("h2",{id:"silicon-valley-reactjs-meetup"},(0,o.mdx)("a",{parentName:"h2",href:"http://www.meetup.com/Silicon-Valley-ReactJS-Meetup/"},"Silicon Valley ReactJS Meetup")),(0,o.mdx)("h3",{id:"relay-modern-simpler-faster-more-predictable-slides"},"Relay Modern: simpler, faster, more predictable (",(0,o.mdx)("a",{parentName:"h3",href:"https://speakerdeck.com/wincent/relay-2-simpler-faster-more-predictable"},"slides"),")"),(0,o.mdx)("iframe",{width:640,height:360,src:"https://www.youtube-nocookie.com/embed/OEfUBN9dAI8",frameBorder:"0",allowFullScreen:!0}),(0,o.mdx)("h3",{id:"zero-to-graphql-in-30-minutes"},"Zero to GraphQL in 30 minutes"),(0,o.mdx)("iframe",{width:640,height:360,src:"https://www.youtube-nocookie.com/embed/UBGzsb2UkeY",frameBorder:"0",allowFullScreen:!0}),(0,o.mdx)("h2",{id:"graphql-europe-2018"},(0,o.mdx)("a",{parentName:"h2",href:"https://www.graphql-europe.org/"},"GraphQL Europe 2018")),(0,o.mdx)("h3",{id:"data-masking-in-graphql-clients"},"Data Masking in GraphQL Clients"),(0,o.mdx)("iframe",{width:640,height:360,src:"https://www.youtube-nocookie.com/embed/ww5UQ50oHok",frameBorder:"0",allowFullScreen:!0}),(0,o.mdx)(i.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);