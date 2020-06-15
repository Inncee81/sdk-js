(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{803:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return i}),n.d(t,"default",function(){return m});n(8),n(9),n(7),n(12),n(16),n(0);var a=n(114),o=n(817),l=n(26),r=n(56);var i={},c={_frontmatter:i},s=o.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(s,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"From time to time, it is permissible to provide user feedback via the runtimes ",Object(a.b)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Console",mdxType:"ExternalLink"},"Console API"),". The primary usecase is to provide detailed error tracking in production or staging environments, and technical feedback in development environments."),Object(a.b)("p",null,"To ensure the relevant information is displayed, the ",Object(a.b)("inlineCode",{parentName:"p"},"LogManager")," provides three methods of outputting to the console:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"All environments"),Object(a.b)("li",{parentName:"ol"},"Development environment only"),Object(a.b)("li",{parentName:"ol"},"Non-development environments")),Object(a.b)("h2",null,"Configuration"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"LogManager")," uses the ",Object(a.b)("inlineCode",{parentName:"p"},"mode")," configuration value which defaults to ",Object(a.b)("inlineCode",{parentName:"p"},"production"),". If you are in a development environment set ",Object(a.b)("inlineCode",{parentName:"p"},"mode")," to ",Object(a.b)("inlineCode",{parentName:"p"},"local"),"."),Object(a.b)("h2",null,"Usage"),Object(a.b)(l.c,{href:"https://github.com/xedi/sdk-js/blob/master/src/Logger/LogManager.ts",mdxType:"SourceLink"},Object(a.b)(r.a,{mdxType:"InlineCode"},"LogManager")),", ",Object(a.b)(l.c,{href:"https://github.com/xedi/sdk-js/blob/master/src/Logger/Logger.ts",mdxType:"SourceLink"},Object(a.b)(r.a,{mdxType:"InlineCode"},"Logger"))," and ",Object(a.b)(l.c,{href:"https://github.com/xedi/sdk-js/blob/master/src/Logger/NullLogger.ts",mdxType:"SourceLink"},Object(a.b)(r.a,{mdxType:"InlineCode"},"NullLogger"))," all implement the ",Object(a.b)(l.c,{href:"https://github.com/xedi/sdk-js/blob/master/src/Interfaces/Logger.ts",mdxType:"SourceLink"},Object(a.b)(r.a,{mdxType:"InlineCode"},"LoggerInterface"))," which requires implementations of 5 of the Console API's functions:",Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"log")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"error")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"debug")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"info")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"warn"))),Object(a.b)("p",null,"These all have the same method signature as the Console API."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"/**\n * Logger\n */\ninterface Logger {\n    log(message?: any, ...optionalParams: any[]): void;\n    info(message?: any, ...optionalParams: any[]): void;\n    debug(message?: any, ...optionalParams: any[]): void;\n    error(message?: any, ...optionalParams: any[]): void;\n    warn(message?: any, ...optionalParams: any[]): void;\n};\n")),Object(a.b)("p",null,"To output to the console only in a development environment use the ",Object(a.b)("inlineCode",{parentName:"p"},"DevelopmentLogger"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"this.logger.dev.log(\n    'These are not the droids you are looking for',\n    droids\n);\n")),Object(a.b)("p",null,"To output to the console only in a non-development environments use the ",Object(a.b)("inlineCode",{parentName:"p"},"ProductionLogger"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"this.logger.production.log(\n    'These are not the droids you are looking for',\n    droids\n);\n")),Object(a.b)("p",null,"Finally, to output to the console in all environments use the LogManager."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"this.logger.log(\n    'These are not the droids you are looking for',\n    droids\n);\n")),Object(a.b)("h2",null,"Registration"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"LogManager")," is registered as ",Object(a.b)("inlineCode",{parentName:"p"},"logger")," against the application ",Object(a.b)("inlineCode",{parentName:"p"},"Container"),". It is also exposed statically as ",Object(a.b)("inlineCode",{parentName:"p"},"Log"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"Xedi.Log.dev.log(\n    'These are not the droids you are looking for',\n    droids\n);\n")))}m.isMDXComponent=!0},817:function(e,t,n){"use strict";var a=n(2),o=n(4),l=n(13),r=n(0),i=n.n(r),c=n(126),s=n(74),m=n(192),b=n(127),p=n(190),d=n(191),u=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function g(e){var t=e.items,n=e.depth;return i.a.createElement(u,{as:"ul",m:0,p:0},t.map(function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(g,{items:e.items,depth:n+1}):null)}))}g.defaultProps={depth:0};var h=g,j=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),O=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),f=Object(a.f)(o.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),y=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),v=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,r=a.title,u=a.description,g=a.status,N=a.source,C=a.additionalContributors,k=void 0===C?[]:C;return i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(c.a,{title:r,description:u}),i.a.createElement(s.b,null),i.a.createElement(j,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(b.a,null)),i.a.createElement(O,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(f,{border:0,borderBottom:1,borderRadius:0,pb:2},i.a.createElement(o.m,null,r)),n.tableOfContents.items?i.a.createElement(y,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},i.a.createElement(o.t,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(h,{items:n.tableOfContents.items})):null,i.a.createElement(v,null,g||N?i.a.createElement(o.k,{mb:3,alignItems:"center"},g?i.a.createElement(d.a,{status:g}):null,i.a.createElement(o.e,{mx:"auto"}),N?i.a.createElement(p.a,{href:N}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.t,{as:"summary",fontWeight:"bold"},t?i.a.createElement(l.b,{mr:2}):i.a.createElement(l.c,{mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(h,{items:n.tableOfContents.items})))})):null,t,i.a.createElement(m.a,{editUrl:n.editUrl,contributors:n.contributors.concat(k.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-development-logging-mdx-45f4859fd210e736d59e.js.map