(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{834:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return r}),n.d(t,"default",function(){return m});n(9),n(10),n(8),n(13),n(17),n(0);var a=n(118),l=n(843),o=n(4),i=n(18);var r={},c={_frontmatter:r},s=l.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(s,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A key goal of this SDK is that it manages it's configuration as transparently as possible; but without the need for human intervention. This means that you should be able to access and modify any configuration value, at any time, and the internals of the SDK should respect your updated values."),Object(a.b)(o.j,{variant:"info",mdxType:"Flash"},Object(a.b)(i.b,{issueId:"1",mdxType:"GithubIssue"})),Object(a.b)("p",null,"Under the hood, the Config Bag is a standard JavaScript ",Object(a.b)(i.a,{href:"https://tc39.es/ecma262/#sec-map-objects",title:"Map specification",mdxType:"ExternalLink"},"Map")))}m.isMDXComponent=!0},843:function(e,t,n){"use strict";var a=n(2),l=n(4),o=n(11),i=n(0),r=n.n(i),c=n(130),s=n(76),m=n(199),u=n(131),d=n(197),p=n(198),f=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function b(e){var t=e.items,n=e.depth;return r.a.createElement(f,{as:"ul",m:0,p:0},t.map(function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(b,{items:e.items,depth:n+1}):null)}))}b.defaultProps={depth:0};var h=b,g=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),y=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),E=Object(a.f)(l.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),x=Object(a.f)(l.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),k=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,i=a.title,f=a.description,b=a.status,_=a.source,v=a.additionalContributors,O=void 0===v?[]:v;return r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:i,description:f}),r.a.createElement(s.b,null),r.a.createElement(g,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(u.a,null)),r.a.createElement(y,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(E,{border:0,borderBottom:1,borderRadius:0,pb:2},r.a.createElement(l.m,null,i)),n.tableOfContents.items?r.a.createElement(x,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(h,{items:n.tableOfContents.items})):null,r.a.createElement(k,null,b||_?r.a.createElement(l.k,{mb:3,alignItems:"center"},b?r.a.createElement(p.a,{status:b}):null,r.a.createElement(l.e,{mx:"auto"}),_?r.a.createElement(d.a,{href:_}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.u,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.b,{mr:2}):r.a.createElement(o.c,{mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(h,{items:n.tableOfContents.items})))})):null,t,r.a.createElement(m.a,{editUrl:n.editUrl,contributors:n.contributors.concat(O.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-development-configuration-mdx-3ffc515893731443d144.js.map