"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95406],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){return function(t){var n=p(t.components);return a.createElement(e,i({},t,{components:n}))}},p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,c=d["".concat(o,".").concat(u)]||d[u]||h[u]||i;return n?a.createElement(c,m(m({ref:t},s),{},{components:n})):a.createElement(c,m({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(67294),r=n(34334);const i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(83117),r=n(67294),i=n(34334),o=n(72389),m=n(67392),l=n(7094),s=n(12466);const d="tabList__CuJ",p="tabItem_LNqP";function u(e){var t,n,o=e.lazy,u=e.block,h=e.defaultValue,c=e.values,f=e.groupId,g=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),x=null!=c?c:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,m.l)(x,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===h?h:null!=(t=null!=h?h:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==v&&!x.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+x.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),b=N.tabGroupChoices,C=N.setTabGroupChoices,S=(0,r.useState)(v),F=S[0],T=S[1],k=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var q=b[f];null!=q&&q!==F&&x.some((function(e){return e.value===q}))&&T(q)}var P=function(e){var t=e.currentTarget,n=k.indexOf(t),a=x[n].value;a!==F&&(I(t),T(a),null!=f&&C(f,String(a)))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=k.indexOf(e.currentTarget)+1;n=null!=(a=k[r])?a:k[0];break;case"ArrowLeft":var i,o=k.indexOf(e.currentTarget)-1;n=null!=(i=k[o])?i:k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},g)},x.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:F===t?0:-1,"aria-selected":F===t,key:t,ref:function(e){return k.push(e)},onKeyDown:L,onFocus:P,onClick:P},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":F===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(y.filter((function(e){return e.props.value===F}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==F})}))))}function h(e){var t=(0,o.default)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},67162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>h});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(65488),m=n(85162),l=["components"],s={},d="Fragments",p={unversionedId:"tutorial/fragments-1",id:"version-v16.0.0/tutorial/fragments-1",title:"Fragments",description:"Fragments are one of the distinguishing features of Relay. They let each component declare its own data needs independently, while retaining the efficiency of a single query. In this section, we\u2019ll show how to split a query up into fragments.",source:"@site/versioned_docs/version-v16.0.0/tutorial/fragments-1.md",sourceDirName:"tutorial",slug:"/tutorial/fragments-1",permalink:"/docs/tutorial/fragments-1",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v16.0.0/tutorial/fragments-1.md",tags:[],version:"v16.0.0",lastUpdatedBy:"Sam Zhou",lastUpdatedAt:1715634969,formattedLastUpdatedAt:"May 13, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Query Basics",permalink:"/docs/tutorial/queries-1"},next:{title:"Arrays and Lists",permalink:"/docs/tutorial/arrays-lists"}},u={},h=[{value:"Step 1 \u2014 Define a fragment",id:"step-1--define-a-fragment",level:3},{value:"Step 2 \u2014 Spread the fragment",id:"step-2--spread-the-fragment",level:3},{value:"Step 3 \u2014 Call useFragment",id:"step-3--call-usefragment",level:3},{value:"Step 4 \u2014 TypeScript types for fragment refs",id:"step-4--typescript-types-for-fragment-refs",level:3},{value:"Exercise",id:"exercise",level:2},{value:"Reusing a Fragment in Multiple Places",id:"reusing-a-fragment-in-multiple-places",level:2},{value:"Step 1 \u2014 Define the fragment",id:"step-1--define-the-fragment",level:3},{value:"Step 2 \u2014 Spread the fragment",id:"step-2--spread-the-fragment-1",level:3},{value:"Step 3 \u2014 Call useFragment",id:"step-3--call-usefragment-1",level:3},{value:"Step 4 \u2014 Modify once, enjoy everywhere",id:"step-4--modify-once-enjoy-everywhere",level:3},{value:"Fragment arguments and field arguments",id:"fragment-arguments-and-field-arguments",level:2},{value:"Step 2",id:"step-2",level:3},{value:"Summary",id:"summary",level:2}],c={toc:h};function f(e){var t=e.components,s=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"fragments"},"Fragments"),(0,i.mdx)("p",null,"Fragments are one of the distinguishing features of Relay. They let each component declare its own data needs independently, while retaining the efficiency of a single query. In this section, we\u2019ll show how to split a query up into fragments."),(0,i.mdx)("hr",null),(0,i.mdx)("p",null,"To start with, let\u2019s say we want our Story component to show the date that the story was posted. To do that, we need some more data from the server, so we\u2019re going to have to add a field to the query."),(0,i.mdx)("p",null,"Go to ",(0,i.mdx)("inlineCode",{parentName:"p"},"Newsfeed.tsx")," and find ",(0,i.mdx)("inlineCode",{parentName:"p"},"NewsfeedQuery")," so that you can add the new field:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"const NewsfeedQuery = graphql`\n  query NewsfeedQuery {\n    topStory {\n      title\n      summary\n      // change-line\n      createdAt // Add this line\n      poster {\n        name\n        profilePicture {\n          url\n        }\n      }\n      image {\n        url\n      }\n    }\n  }\n`;\n")),(0,i.mdx)("p",null,"Now go to ",(0,i.mdx)("inlineCode",{parentName:"p"},"Story.tsx")," and modify it to display the date:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"// change-line\nimport Timestamp from './Timestamp';\n\ntype Props = {\n  story: {\n    // change-line\n    createdAt: string; // Add this line\n    ...\n  };\n};\n\nexport default function Story({story}: Props) {\n  return (\n    <Card>\n      <PosterByline poster={story.poster} />\n      <Heading>{story.title}</Heading>\n      // change-line\n      <Timestamp time={story.createdAt} /> // Add this line\n      <Image image={story.image} />\n      <StorySummary summary={story.summary} />\n    </Card>\n  );\n}\n")),(0,i.mdx)("p",null,"The date should now appear. And thanks to GraphQL, we didn't have to write and deploy any new server code."),(0,i.mdx)("p",null,"But if you think about it, why should you have had to modify ",(0,i.mdx)("inlineCode",{parentName:"p"},"Newsfeed.tsx"),"? Shouldn\u2019t React components be self-contained? Why should Newsfeed care about the specific data required by Story? What if the data was required by some child component of Story way down in the hierarchy? What if it was a component that was used in many different places? Then we would have to modify many components whenever its data requirements changed."),(0,i.mdx)("p",null,"To avoid these and many other problems, we can move the data requirements for the Story component into ",(0,i.mdx)("inlineCode",{parentName:"p"},"Story.tsx"),"."),(0,i.mdx)("p",null,"We do this by splitting off ",(0,i.mdx)("inlineCode",{parentName:"p"},"Story"),"\u2019s data requirements into a ",(0,i.mdx)("em",{parentName:"p"},"fragment")," defined in ",(0,i.mdx)("inlineCode",{parentName:"p"},"Story.tsx"),". Fragments are separate pieces of GraphQL that the Relay compiler stitches together into complete queries. They allow each component to define its own data requirements, without paying the cost at runtime of each component running its own queries."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"The Relay compiler combines the fragment into the place it&#39;s spread",src:n(1745).Z,width:"3102",height:"1820"})),(0,i.mdx)("p",null,"Let\u2019s go ahead and split ",(0,i.mdx)("inlineCode",{parentName:"p"},"Story"),"\u2019s data requirements into a fragment now."),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"step-1--define-a-fragment"},"Step 1 \u2014 Define a fragment"),(0,i.mdx)("p",null,"Add the following to ",(0,i.mdx)("inlineCode",{parentName:"p"},"Story.tsx")," (within ",(0,i.mdx)("inlineCode",{parentName:"p"},"src/components"),") above the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Story")," component:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"import { graphql } from 'relay-runtime';\n\nconst StoryFragment = graphql`\n  fragment StoryFragment on Story {\n    title\n    summary\n    createdAt\n    poster {\n      name\n      profilePicture {\n        url\n      }\n    }\n    thumbnail {\n      url\n    }\n  }\n`;\n")),(0,i.mdx)("p",null,"Note that we\u2019ve taken all of the selections from within ",(0,i.mdx)("inlineCode",{parentName:"p"},"topStory")," in our query and copied them into this new Fragment declaration. Like queries, fragments have a name (",(0,i.mdx)("inlineCode",{parentName:"p"},"StoryFragment"),"), which we\u2019ll use in a moment, but they also have a GraphQL type (",(0,i.mdx)("inlineCode",{parentName:"p"},"Story"),") that they\u2019re \u201con\u201d. This means that this fragment can be used whenever we have a Story node in the graph."),(0,i.mdx)("h3",{id:"step-2--spread-the-fragment"},"Step 2 \u2014 Spread the fragment"),(0,i.mdx)("p",null,"Go to ",(0,i.mdx)("inlineCode",{parentName:"p"},"Newsfeed.tsx")," and modify ",(0,i.mdx)("inlineCode",{parentName:"p"},"NewsfeedQuery")," to look like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"const NewsfeedQuery = graphql`\n  query NewsfeedQuery {\n    topStory {\n      // change-line\n      ...StoryFragment\n    }\n  }\n`;\n")),(0,i.mdx)("p",null,"We\u2019ve replaced the selections inside ",(0,i.mdx)("inlineCode",{parentName:"p"},"topStory")," with ",(0,i.mdx)("inlineCode",{parentName:"p"},"StoryFragment"),". The Relay compiler will make sure that all of Story\u2019s data gets fetched from now on, without having to change ",(0,i.mdx)("inlineCode",{parentName:"p"},"Newsfeed"),"."),(0,i.mdx)("h3",{id:"step-3--call-usefragment"},"Step 3 \u2014 Call useFragment"),(0,i.mdx)("p",null,"You\u2019ll notice that Story now renders an empty card! All the data is missing! Wasn\u2019t Relay supposed to include the fields selected by the fragment in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"story")," object obtained from ",(0,i.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery()"),"?"),(0,i.mdx)("p",null,"The reason is that Relay hides them. Unless a component specifically asks for the data for a certain fragment, that data will not be visible to the component. This is called ",(0,i.mdx)("em",{parentName:"p"},"data masking"),", and enforces that components don\u2019t implicitly rely on another component\u2019s data dependencies, but declare all of their dependencies within their own fragments. This keeps components self-contained and maintainable."),(0,i.mdx)("p",null,"Without data masking, you could never remove a field from a fragment, because it would be hard to verify that some other component somewhere wasn\u2019t using it."),(0,i.mdx)("p",null,"To access the data selected by a fragment, we use a hook called ",(0,i.mdx)("inlineCode",{parentName:"p"},"useFragment"),". Modify ",(0,i.mdx)("inlineCode",{parentName:"p"},"Story")," to look like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"import { useFragment } from 'react-relay';\n\nexport default function Story({story}: Props) {\n  const data = useFragment(\n    // color1\n    StoryFragment,\n    // color2\n    story,\n  );\n  return (\n    <Card>\n      <Heading>{data.title}</Heading>\n      <PosterByline poster={data.poster} />\n      <Timestamp time={data.createdAt} />\n      <Image image={data.image} />\n      <StorySummary summary={data.summary} />\n    </Card>\n  );\n}\n")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"useFragment")," takes two arguments:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("span",{className:"color1"},"GraphQL tagged string")," literal for the fragment we want to read"),(0,i.mdx)("li",{parentName:"ul"},"The same ",(0,i.mdx)("span",{className:"color2"},"story object")," as we used before, which comes from the place within a GraphQL query where we spread the fragment. This is called a ",(0,i.mdx)("em",{parentName:"li"},"fragment key"),".")),(0,i.mdx)("p",null,"It returns the data selected by that fragment."),(0,i.mdx)("admonition",{type:"tip"},(0,i.mdx)("p",{parentName:"admonition"},"We\u2019ve rewritten ",(0,i.mdx)("inlineCode",{parentName:"p"},"story")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"data")," (the data returned by ",(0,i.mdx)("inlineCode",{parentName:"p"},"useFragment"),") in all of the JSX here; make sure to do the same in your copy of the component, or it won't work.")),(0,i.mdx)("p",null,"Fragment keys are the places in a GraphQL query response where a fragment was spread. For example, given the Newsfeed query:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"query NewsfeedQuery {\n  topStory {\n    ...StoryFragment\n  }\n}\n")),(0,i.mdx)("p",null,"Then if ",(0,i.mdx)("inlineCode",{parentName:"p"},"queryResult")," is the object returned by ",(0,i.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"queryResult.topStory")," will be a fragment key for ",(0,i.mdx)("inlineCode",{parentName:"p"},"StoryFragment"),"."),(0,i.mdx)("p",null,"Technically, ",(0,i.mdx)("inlineCode",{parentName:"p"},"queryResult.topStory")," is an object that contains some hidden fields that tell Relay's ",(0,i.mdx)("inlineCode",{parentName:"p"},"useFragment")," where to look for the data it needs. The fragment key specifies both which node to read from (here there's just one story, but soon we'll have multiple stories), and what fields can be read out (the fields selected by that specific fragment). The ",(0,i.mdx)("inlineCode",{parentName:"p"},"useFragment")," hook then reads that specific information out of Relay's local data store."),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"As we'll see in later examples, you can spread multiple fragments into the same place in a query, and also mix fragment spreads with directly-selected fields.")),(0,i.mdx)("h3",{id:"step-4--typescript-types-for-fragment-refs"},"Step 4 \u2014 TypeScript types for fragment refs"),(0,i.mdx)("p",null,"To complete the fragmentization, we also need to change the type definition for ",(0,i.mdx)("inlineCode",{parentName:"p"},"Props")," so that TypeScript knows this component expects to receive a fragment key instead of the raw data."),(0,i.mdx)("p",null,"Recall that when you spread a fragment into a query (or another fragment), the part of the query result corresponding to where you spread the fragment becomes a ",(0,i.mdx)("em",{parentName:"p"},"fragment key")," for that fragment. This is the object that you pass to a component in its props in order to give it a specific place in the graph to read the fragment from."),(0,i.mdx)("p",null,"To make this type-safe, Relay generates a type that represents the fragment key for that specific fragment \u2014 this way, if you try to use a component without spreading its fragment into your query, you won\u2019t be able to provide a fragment key that satisfies the type system. Here are the changes we need to make:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"// change-line\nimport type {StoryFragment$key} from './__generated__/StoryFragment.graphql';\n\ntype Props = {\n  // change-line\n  story: StoryFragment$key;\n};\n")),(0,i.mdx)("p",null,"With that done, we have a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Newsfeed")," that no longer has to care what data ",(0,i.mdx)("inlineCode",{parentName:"p"},"Story")," requires, yet can still fetch that data up-front within its own query."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"exercise"},"Exercise"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"PosterByline")," component used by ",(0,i.mdx)("inlineCode",{parentName:"p"},"Story")," renders the poster\u2019s name and profile picture. Use these same steps to fragmentize ",(0,i.mdx)("inlineCode",{parentName:"p"},"PosterByline"),". You need to:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Declare a ",(0,i.mdx)("inlineCode",{parentName:"li"},"PosterBylineFragment")," on ",(0,i.mdx)("inlineCode",{parentName:"li"},"Actor")," and specify the fields it needs (",(0,i.mdx)("inlineCode",{parentName:"li"},"name"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"profilePicture"),"). The ",(0,i.mdx)("inlineCode",{parentName:"li"},"Actor")," type represents a person or organization that can post a story."),(0,i.mdx)("li",{parentName:"ul"},"Spread that fragment within ",(0,i.mdx)("inlineCode",{parentName:"li"},"poster")," in ",(0,i.mdx)("inlineCode",{parentName:"li"},"StoryFragment"),"."),(0,i.mdx)("li",{parentName:"ul"},"Call ",(0,i.mdx)("inlineCode",{parentName:"li"},"useFragment")," to retrieve the data."),(0,i.mdx)("li",{parentName:"ul"},"Update the Props to accept a ",(0,i.mdx)("inlineCode",{parentName:"li"},"PosterBylineFragment$key")," as the ",(0,i.mdx)("inlineCode",{parentName:"li"},"poster")," prop.")),(0,i.mdx)("p",null,"It\u2019s worth going through these steps a second time, to get the mechanics of using fragments under your fingers. There are a lot of parts here that need to slot together in the right way."),(0,i.mdx)("p",null,"Once you\u2019ve done that, let\u2019s look at a basic example of how fragments help an app to scale."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"reusing-a-fragment-in-multiple-places"},"Reusing a Fragment in Multiple Places"),(0,i.mdx)("p",null,"A fragment says, given ",(0,i.mdx)("em",{parentName:"p"},"some")," graph node of a particular type, what data to read from that node. The fragment key specifies ",(0,i.mdx)("em",{parentName:"p"},"which node")," in the graph the data is selected from. A re-usable component that specifies a fragment can retrieve the data from different parts of the graph in different contexts, by being passed a different fragment key."),(0,i.mdx)("p",null,"For example, notice that the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Image")," component is used in two places: directly within ",(0,i.mdx)("inlineCode",{parentName:"p"},"Story")," for the story\u2019s thumbnail image, and also within ",(0,i.mdx)("inlineCode",{parentName:"p"},"PosterByline")," for the poster\u2019s profile pic. Let\u2019s fragmentize ",(0,i.mdx)("inlineCode",{parentName:"p"},"Image")," and see how it can select the data it needs from different places in the graph according to where it is used."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Fragment can be used in multiple places",src:n(22798).Z,width:"2180",height:"948"})),(0,i.mdx)("h3",{id:"step-1--define-the-fragment"},"Step 1 \u2014 Define the fragment"),(0,i.mdx)("p",null,"Open up ",(0,i.mdx)("inlineCode",{parentName:"p"},"Image.tsx")," and add a Fragment definition:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"import { graphql } from 'relay-runtime';\n\nconst ImageFragment = graphql`\n  fragment ImageFragment on Image {\n    url\n  }\n`;\n")),(0,i.mdx)("h3",{id:"step-2--spread-the-fragment-1"},"Step 2 \u2014 Spread the fragment"),(0,i.mdx)("p",null,"Go back to ",(0,i.mdx)("inlineCode",{parentName:"p"},"StoryFragment")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"PosterBylineFragment")," and spread ",(0,i.mdx)("inlineCode",{parentName:"p"},"ImageFragment")," into it in each place where the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Image")," component is what\u2019s using the data:"),(0,i.mdx)(o.default,{mdxType:"Tabs"},(0,i.mdx)(m.default,{value:"1",label:"Story.tsx",default:!0,mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"const StoryFragment = graphql`\n  fragment StoryFragment on Story {\n    title\n    summary\n    postedAt\n    poster {\n      ...PosterBylineFragment\n    }\n    thumbnail {\n      // change-line\n      ...ImageFragment\n    }\n  }\n`;\n"))),(0,i.mdx)(m.default,{value:"2",label:"PosterByline.tsx",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"const PosterBylineFragment = graphql`\n  fragment PosterBylineFragment on Actor {\n    name\n    profilePicture {\n      // change-line\n      ...ImageFragment\n    }\n  }\n`;\n")))),(0,i.mdx)("h3",{id:"step-3--call-usefragment-1"},"Step 3 \u2014 Call useFragment"),(0,i.mdx)("p",null,"Modify the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Image")," component to read the fields using its fragment, and also modify its Props to accept the fragment key:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"import { useFragment } from 'react-relay';\nimport type { ImageFragment$key } from \"./__generated__/ImageFragment.graphql\";\n\ntype Props = {\n  image: ImageFragment$key;\n  ...\n};\n\nfunction Image({image}: Props) {\n  const data = useFragment(ImageFragment, image);\n  return <img key={data.url} src={data.url} ... />\n}\n")),(0,i.mdx)("h3",{id:"step-4--modify-once-enjoy-everywhere"},"Step 4 \u2014 Modify once, enjoy everywhere"),(0,i.mdx)("p",null,"Now that we\u2019ve fragmentized Image\u2019s data requirements and co-located them within the component, we can add new data dependencies to Image without modifying any of the components that use it."),(0,i.mdx)("p",null,"For example, let\u2019s add an ",(0,i.mdx)("inlineCode",{parentName:"p"},"altText")," label for accessibility to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Image")," component."),(0,i.mdx)("p",null,"Edit ",(0,i.mdx)("inlineCode",{parentName:"p"},"ImageFragment")," as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"const ImageFragment = graphql`\n  fragment ImageFragment on Image {\n    url\n    // change-line\n    altText\n  }\n`;\n")),(0,i.mdx)("p",null,"Now, without editing Story, Newsfeed, or any other component, all of the images within our query will have alt text fetched for them. So we just need to modify ",(0,i.mdx)("inlineCode",{parentName:"p"},"Image")," to use the new field:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"function Image({image}) {\n  // ...\n  <img\n    // change-line\n    alt={data.altText}\n  //...\n}\n")),(0,i.mdx)("p",null,"Now ",(0,i.mdx)("em",{parentName:"p"},"both")," the story thumbnail image and the poster\u2019s profile pic will have an alt text. (You can use your browser\u2019s Elements inspector to verify this.)"),(0,i.mdx)("p",null,"You can imagine how beneficial this is as your codebase gets larger. Each component is self-contained, no matter how many places it\u2019s used in! Even if a component is used in hundreds of places, you can add or remove fields from its data dependencies at will. This is one of the main ways that Relay helps you scale with the size of your app."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Field added to one fragment is added in all places it&#39;s used",src:n(94769).Z,width:"1988",height:"1030"})),(0,i.mdx)("p",null,"Fragments are the building blocks of Relay apps. As such, a lot of Relay features are based on fragments. We\u2019ll look at a few of them in the next sections."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"fragment-arguments-and-field-arguments"},"Fragment arguments and field arguments"),(0,i.mdx)("p",null,"Currently the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Image")," component fetches images at their full size, even if they\u2019ll be displayed at a smaller size. This is inefficient! The ",(0,i.mdx)("inlineCode",{parentName:"p"},"Image")," component takes a prop that says what size to show the image at, so it\u2019s controlled by the component that uses ",(0,i.mdx)("inlineCode",{parentName:"p"},"Image"),". We\u2019d like in a similar way for the component that uses ",(0,i.mdx)("inlineCode",{parentName:"p"},"Image")," to say what size of image to fetch within its fragment."),(0,i.mdx)("p",null,"GraphQL fields can accept ",(0,i.mdx)("em",{parentName:"p"},"arguments")," that give the server additional information to fulfill our request. For example, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"url")," field on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Image")," type accepts ",(0,i.mdx)("inlineCode",{parentName:"p"},"height")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"width")," arguments that the server incorporates into the URL \u2014 if we have this fragment:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"fragment Example1 on Image {\n  url\n}\n")),(0,i.mdx)("p",null,"we might get the URL such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"/images/abcde.jpeg")),(0,i.mdx)("p",null,"\u2014 whereas if we have this fragment:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"fragment Example2 on Image {\n  url(height: 100, width: 100)\n}\n")),(0,i.mdx)("p",null,"we might get a URL like ",(0,i.mdx)("inlineCode",{parentName:"p"},"/images/abcde.jpeg?height=100&width=100")),(0,i.mdx)("p",null,"Now of course, we don\u2019t want to just hard-code a specific size into ",(0,i.mdx)("inlineCode",{parentName:"p"},"ImageFragment"),", because we\u2019d like the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Image")," component to fetch a different size in different contexts.  To do that, we can make the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ImageFragment")," accept ",(0,i.mdx)("em",{parentName:"p"},"fragment arguments")," so that the parent component can specify how large of an image should be fetched. These ",(0,i.mdx)("em",{parentName:"p"},"fragment arguments")," can then be passed into specific fields (in this case ",(0,i.mdx)("inlineCode",{parentName:"p"},"url"),") as ",(0,i.mdx)("em",{parentName:"p"},"field arguments"),"."),(0,i.mdx)("p",null,"To do that, edit ",(0,i.mdx)("inlineCode",{parentName:"p"},"ImageFragment")," as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'const ImageFragment = graphql`\n  fragment ImageFragment on Image\n    @argumentDefinitions(\n      // color1\n      width: {\n        // color2\n        type: "Int",\n        // color3\n        defaultValue: null\n      }\n      height: {\n        type: "Int",\n        defaultValue: null\n      }\n    )\n  {\n    url(\n      // color4\n      width: $width,\n      // color4\n      height: $height\n    )\n    altText\n  }\n`;\n')),(0,i.mdx)("p",null,"Let\u2019s break this down:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"We\u2019ve added an ",(0,i.mdx)("inlineCode",{parentName:"li"},"@argumentDefinitions")," directive to the fragment declaration. This says what arguments the fragment accepts. For each argument, we give:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("span",{className:"color1"},"The name of the argument")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("span",{className:"color2"},"Its type")," (which can be any ",(0,i.mdx)("a",{href:"https://graphql.org/learn/schema/#scalar-types"},"GraphQL scalar type"),")"),(0,i.mdx)("li",{parentName:"ul"},"Optionally a ",(0,i.mdx)("span",{className:"color3"},"default value "),"\u2014 in this case, the default value is null, which lets us fetch the image at its inherent size. If no default value is given, then the argument is required at every place the fragment is used."))),(0,i.mdx)("li",{parentName:"ul"},"Then we populate an ",(0,i.mdx)("span",{className:"color4"},"argument to a GraphQL field")," by using the fragment argument as a variable. Here the field arguments and fragment arguments have the same name (as will often be the case), but note: ",(0,i.mdx)("inlineCode",{parentName:"li"},"width:")," is the field argument while ",(0,i.mdx)("inlineCode",{parentName:"li"},"$width")," is the variable created by the fragment argument.")),(0,i.mdx)("p",null,"Now the fragment accepts an argument that it passes along to the server via one of the fields it selects."),(0,i.mdx)("details",null,(0,i.mdx)("summary",null,"Deep dive: GraphQL Directives"),(0,i.mdx)("p",null,"The syntax for fragment arguments may look rather clumsy. This is because it is based on ",(0,i.mdx)("em",{parentName:"p"},"directives"),", a system for extending the GraphQL language. In GraphQL, any symbol starting with ",(0,i.mdx)("inlineCode",{parentName:"p"},"@")," is a directive. Their meaning isn't defined by the GraphQL spec, but is up to the specific client or server implementation."),(0,i.mdx)("p",null,"Relay defines ",(0,i.mdx)("a",{parentName:"p",href:"../../api-reference/graphql-and-directives"},"several directives")," to support its features \u2014 fragment arguments for one. These directives are not sent to the server, but give instructions to the Relay compiler at build time."),(0,i.mdx)("p",null,"The GraphQL spec actually does define the meaning of three directives:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"@deprecated")," is used in schema definitions and marks a field as deprecated."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"@include")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"@skip")," can be used to make the inclusion of a field conditional.")),(0,i.mdx)("p",null,"Besides these, GraphQL servers can specify additional directives as part of their schemas. And Relay has its own build-time directives, which allow us to extend the language a bit without changing its grammar.")),(0,i.mdx)("h3",{id:"step-2"},"Step 2"),(0,i.mdx)("p",null,"Now the different fragments using ",(0,i.mdx)("inlineCode",{parentName:"p"},"Image")," can pass in the appropriate size for each image:"),(0,i.mdx)(o.default,{mdxType:"Tabs"},(0,i.mdx)(m.default,{value:"1",label:"Story.tsx",default:!0,mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"const StoryFragment = graphql`\n  fragment StoryFragment on Story {\n    title\n    summary\n    postedAt\n    poster {\n      ...PosterBylineFragment\n    }\n    image {\n      // change-line\n      ...ImageFragment @arguments(width: 400)\n    }\n  }\n`;\n"))),(0,i.mdx)(m.default,{value:"2",label:"PosterByline.tsx",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"const PosterBylineFragment = graphql`\n  fragment PosterBylineFragment on Actor {\n    name\n    profilePicture {\n      // change-line\n      ...ImageFragment @arguments(width: 60, height: 60)\n    }\n  }\n`;\n")))),(0,i.mdx)("p",null,"Now if you look at the images that our app downloads, you\u2019ll see they\u2019re of the smaller size, saving network bandwidth. Note that although we used integer literals for the value of our fragment arguments, we can also use variables supplied at runtime, as we'll see in later sections."),(0,i.mdx)("p",null,"Field arguments (e.g. ",(0,i.mdx)("inlineCode",{parentName:"p"},"url(height: 100)"),") are a feature of GraphQL itself, while fragment arguments (as in ",(0,i.mdx)("inlineCode",{parentName:"p"},"@argumentDefinitions")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"@arguments"),") are Relay-specific features. The Relay compiler processes these fragment arguments when it combines fragments into queries."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"summary"},"Summary"),(0,i.mdx)("p",null,"Fragments are the most distinctive aspect of how Relay uses GraphQL. We recommend that every component that displays data and cares about the semantics of that data (so not just a typographic or formatting component) use a GraphQL fragment to declare its data dependences."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Fragments help you scale: No matter how many places a component is used, you can update its data dependencies in a single place."),(0,i.mdx)("li",{parentName:"ul"},"Fragment data needs to be read out with ",(0,i.mdx)("inlineCode",{parentName:"li"},"useFragment"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"useFragment")," takes a ",(0,i.mdx)("em",{parentName:"li"},"fragment key")," which says where in the graph to read from."),(0,i.mdx)("li",{parentName:"ul"},"Fragment keys come from places in a GraphQL response where that fragment was spread."),(0,i.mdx)("li",{parentName:"ul"},"Fragments can define arguments which are used at the point they\u2019re spread. This allows them to be tailored to each situation they're used in.")),(0,i.mdx)("p",null,"We'll be revisiting many other features of fragments, such as how to refetch the contents of a single fragment without refetching the entire query. First, though, let's make this newsfeed app more newsfeed-like by learning about arrays."))}f.isMDXComponent=!0},94769:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fragment-image-add-once-compiled-addfb548d0a7422c83d492321e189d59.png"},22798:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fragments-image-two-places-compiled-088126acb35aa6029bae65621118fc69.png"},1745:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fragments-newsfeed-story-compilation-5988239417a9739a88f25bfcad3a7ab7.png"}}]);