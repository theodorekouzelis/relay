"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[73300],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>s,withMDXComponents:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){return function(t){var n=s(t.components);return a.createElement(e,l({},t,{components:n}))}},s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},x=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,x=p["".concat(m,".").concat(u)]||p[u]||c[u]||l;return n?a.createElement(x,o(o({ref:t},d),{},{components:n})):a.createElement(x,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,m=new Array(l);m[0]=x;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,m[1]=o;for(var d=2;d<l;d++)m[d]=n[d];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}x.displayName="MDXCreateElement"},39029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),m=["components"],o={id:"compatibility-cheatsheet",title:"Compatibility Cheatsheet",original_id:"compatibility-cheatsheet"},i=void 0,d={unversionedId:"compatibility-cheatsheet",id:"version-v1.4.1/compatibility-cheatsheet",title:"Compatibility Cheatsheet",description:"What works with what? Relay Compat ('react-relay/compat') is the most flexible.",source:"@site/versioned_docs/version-v1.4.1/Modern-CompatibilityCheatsheet.md",sourceDirName:".",slug:"/compatibility-cheatsheet",permalink:"/docs/v1.4.1/compatibility-cheatsheet",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.4.1/Modern-CompatibilityCheatsheet.md",tags:[],version:"v1.4.1",lastUpdatedBy:"Monica Tang",lastUpdatedAt:1710807349,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{id:"compatibility-cheatsheet",title:"Compatibility Cheatsheet",original_id:"compatibility-cheatsheet"},sidebar:"version-v1.4.1/docs",previous:{title:"Converting Mutations",permalink:"/docs/v1.4.1/converting-mutations"},next:{title:"API Cheatsheet",permalink:"/docs/v1.4.1/api-cheatsheet"}},p={},s=[{value:"Can RelayRootContainer use:",id:"can-relayrootcontainer-use",level:3},{value:"Can QueryRenderer using Classic Environment (<code>Store</code> in <code>react-relay/classic</code>) use:",id:"can-queryrenderer-using-classic-environment-store-in-react-relayclassic-use",level:3},{value:"Can QueryRenderer using Modern Environment use:",id:"can-queryrenderer-using-modern-environment-use",level:3},{value:"Can React Modern Component use:",id:"can-react-modern-component-use",level:3},{value:"Can React Compat Component use:",id:"can-react-compat-component-use",level:3},{value:"Can React Classic Component use:",id:"can-react-classic-component-use",level:3}],u={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,m);return(0,l.mdx)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"What works with what? Relay Compat (",(0,l.mdx)("inlineCode",{parentName:"p"},"'react-relay/compat'"),") is the most flexible.\nCompat components and mutations can be used by everything. Compat components can also have any kind of children."),(0,l.mdx)("p",null,"However components using the Relay Modern API (",(0,l.mdx)("inlineCode",{parentName:"p"},"'react-relay'"),") and the Relay Classic API (",(0,l.mdx)("inlineCode",{parentName:"p"},"'react-relay/classic'"),") cannot be used with each other."),(0,l.mdx)("h3",{id:"can-relayrootcontainer-use"},"Can RelayRootContainer use:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Classic Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Compat Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Modern Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Classic Mutation"),(0,l.mdx)("th",{parentName:"tr",align:null},"Compat Mutation"),(0,l.mdx)("th",{parentName:"tr",align:null},"Modern Mutation"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"No")))),(0,l.mdx)("h3",{id:"can-queryrenderer-using-classic-environment-store-in-react-relayclassic-use"},"Can QueryRenderer using Classic Environment (",(0,l.mdx)("inlineCode",{parentName:"h3"},"Store")," in ",(0,l.mdx)("inlineCode",{parentName:"h3"},"react-relay/classic"),") use:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Classic Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Compat Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Modern Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Classic Mutation"),(0,l.mdx)("th",{parentName:"tr",align:null},"Compat Mutation"),(0,l.mdx)("th",{parentName:"tr",align:null},"Modern Mutation"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"No")))),(0,l.mdx)("h3",{id:"can-queryrenderer-using-modern-environment-use"},"Can QueryRenderer using Modern Environment use:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Classic Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Compat Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Modern Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Classic Mutation"),(0,l.mdx)("th",{parentName:"tr",align:null},"Compat Mutation"),(0,l.mdx)("th",{parentName:"tr",align:null},"Modern Mutation"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes")))),(0,l.mdx)("h3",{id:"can-react-modern-component-use"},"Can React Modern Component use:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Classic Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Compat Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Modern Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Classic Mutation"),(0,l.mdx)("th",{parentName:"tr",align:null},"Compat Mutation"),(0,l.mdx)("th",{parentName:"tr",align:null},"Modern Mutation"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes")))),(0,l.mdx)("h3",{id:"can-react-compat-component-use"},"Can React Compat Component use:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Classic Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Compat Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Modern Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Classic Mutation"),(0,l.mdx)("th",{parentName:"tr",align:null},"Compat Mutation"),(0,l.mdx)("th",{parentName:"tr",align:null},"Modern Mutation"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes","*"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes")))),(0,l.mdx)("p",null,"*"," Modern API doesn't support mutation fragments. You might have to inline the mutation fragments from your legacy mutation in the fragment of the component."),(0,l.mdx)("h3",{id:"can-react-classic-component-use"},"Can React Classic Component use:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Classic Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Compat Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Modern Component"),(0,l.mdx)("th",{parentName:"tr",align:null},"Classic Mutation"),(0,l.mdx)("th",{parentName:"tr",align:null},"Compat Mutation"),(0,l.mdx)("th",{parentName:"tr",align:null},"Modern Mutation"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"No")))))}c.isMDXComponent=!0}}]);