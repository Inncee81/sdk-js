(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{825:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return i}),n.d(t,"default",function(){return s});n(10),n(11),n(8),n(13),n(18),n(0);var a=n(118),l=n(853),o=n(16);var i={},r={_frontmatter:i},c=l.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A key goal of this SDK is that it manages it's configuration as transparently as possible; but without the need for human intervention. This means that you should be able to access and modify any configuration value, at any time, and the internals of the SDK should respect your updated values."),Object(a.b)("p",null,"Under the hood, the Config Bag is a standard JavaScript ",Object(a.b)(o.a,{href:"https://tc39.es/ecma262/#sec-map-objects",title:"Map specification",mdxType:"ExternalLink"},"Map")),Object(a.b)("p",null,"The Config Bag uses events to update any uncoupled dependants. For example, the Http Client subscribes to changes to the ",Object(a.b)("inlineCode",{parentName:"p"},"base_url")," to ensure that it remains up-to-date. Here's what this looks like:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"config.on('base_url.updated', (value) => {\n    client.defaults.baseURL = value;\n});\n")),Object(a.b)(o.d,{href:"https://github.com/xedi/sdk-js/blob/master/src/index.ts#L28",mdxType:"SourceLink"},"View Source"))}s.isMDXComponent=!0},853:function(e,t,n){"use strict";var a=n(2),l=n(4),o=n(9),i=n(0),r=n.n(i),c=n(130),s=n(76),u=n(199),m=n(131),d=n(197),p=n(198),b=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function f(e){var t=e.items,n=e.depth;return r.a.createElement(b,{as:"ul",m:0,p:0},t.map(function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(f,{items:e.items,depth:n+1}):null)}))}f.defaultProps={depth:0};var h=f,g=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),y=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),E=Object(a.f)(l.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),k=Object(a.f)(l.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),x=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,i=a.title,b=a.description,f=a.status,O=a.source,v=a.additionalContributors,_=void 0===v?[]:v;return r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:i,description:b}),r.a.createElement(s.b,null),r.a.createElement(g,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(m.a,null)),r.a.createElement(y,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(E,{border:0,borderBottom:1,borderRadius:0,pb:2},r.a.createElement(l.m,null,i)),n.tableOfContents.items?r.a.createElement(k,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(h,{items:n.tableOfContents.items})):null,r.a.createElement(x,null,f||O?r.a.createElement(l.k,{mb:3,alignItems:"center"},f?r.a.createElement(p.a,{status:f}):null,r.a.createElement(l.e,{mx:"auto"}),O?r.a.createElement(d.a,{href:O}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.u,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.b,{mr:2}):r.a.createElement(o.c,{mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(h,{items:n.tableOfContents.items})))})):null,t,r.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(_.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-development-configuration-mdx-2daab2b785593d62c628.js.map