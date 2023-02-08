"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[501],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,b=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(4137));const a={sidebar_position:3,sidebar_label:"Tools & Resources"},i="Tools & Resources",l={unversionedId:"build/tools-and-resources",id:"build/tools-and-resources",title:"Tools & Resources",description:"Smart contracts",source:"@site/docs/build/tools-and-resources.md",sourceDirName:"build",slug:"/build/tools-and-resources",permalink:"/build/tools-and-resources",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Tools & Resources"},sidebar:"buildSidebar",previous:{title:"How to connect Dapp UI to Venom",permalink:"/build/integration-guides/how-to-connect-dapp-ui-to-venom"}},p={},s=[{value:"Smart contracts",id:"smart-contracts",level:2},{value:"Frontend",id:"frontend",level:2},{value:"Backend",id:"backend",level:2},{value:"Mobile",id:"mobile",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tools--resources"},"Tools & Resources"),(0,o.kt)("h2",{id:"smart-contracts"},"Smart contracts"),(0,o.kt)("p",null,"Development environment aiming to help you with contracts development",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broxus/locklift"},"locklift")),(0,o.kt)("p",null,"Solidity language support for Visual Studio Code",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=everscale.solidity-support"},"vscode plugin")),(0,o.kt)("h2",{id:"frontend"},"Frontend"),(0,o.kt)("p",null,"A library that makes it easy to UI starts interacting with the Venom",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/web3sp/venom-connect"},"venom-connect")),(0,o.kt)("p",null,"Standalone fallback client that supports compatibility with the Venom blockchain",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broxus/everscale-standalone-client"},"standalone-client")),(0,o.kt)("p",null,"A Web3-like interface that supports compatibility with the Venom blockchain",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broxus/everscale-inpage-provider"},"inpage-provider")),(0,o.kt)("h2",{id:"backend"},"Backend"),(0,o.kt)("p",null,"A standalone fallback client that supports compatibility with the Venom blockchain",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broxus/everscale-standalone-client"},"standalone-client/nodejs")),(0,o.kt)("p",null,"Broxus SDK with TIP3 wallets support and a bunch of helpers",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broxus/nekoton"},"nekoton")),(0,o.kt)("p",null,"A simple and reliable indexer node",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broxus/ton-indexer"},"ton-indexer")),(0,o.kt)("p",null,"A simple service to stream Venom data into Kafka",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broxus/ton-kafka-producer"},"ton-kafka-producer")),(0,o.kt)("p",null,"This is a light node + api for sending and tracking payments",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broxus/ton-wallet-api"},"ton-wallet-api")),(0,o.kt)("h2",{id:"mobile"},"Mobile"),(0,o.kt)("p",null,"A Nekoton binding for flutter",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broxus/nekoton-flutter"},"nekoton-flutter")))}u.isMDXComponent=!0}}]);