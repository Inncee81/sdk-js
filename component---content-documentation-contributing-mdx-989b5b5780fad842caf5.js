(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{834:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return r}),n.d(t,"default",function(){return m});n(9),n(10),n(8),n(13),n(17),n(0);var a=n(118),l=n(844),o=n(18);var r={},i={_frontmatter:r},c=l.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We welcome contributions to our documentation. Please see the list of known issues within our documentation below."),Object(a.b)(o.c,{labels:"documentation",sort:"created",direction:"asc",renderLabels:!0,assignee:"none",title:"Documentation Issues",mdxType:"GithubIssues"}))}m.isMDXComponent=!0},844:function(e,t,n){"use strict";var a=n(2),l=n(4),o=n(11),r=n(0),i=n.n(r),c=n(130),m=n(76),s=n(199),u=n(131),d=n(197),p=n(198),f=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function b(e){var t=e.items,n=e.depth;return i.a.createElement(f,{as:"ul",m:0,p:0},t.map(function(e){return i.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(l.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(b,{items:e.items,depth:n+1}):null)}))}b.defaultProps={depth:0};var g=b,y=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),h=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),E=Object(a.f)(l.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),k=Object(a.f)(l.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),x=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,r=a.title,f=a.description,b=a.status,_=a.source,w=a.additionalContributors,O=void 0===w?[]:w;return i.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(c.a,{title:r,description:f}),i.a.createElement(m.b,null),i.a.createElement(y,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(l.e,{display:["none",null,null,"block"]},i.a.createElement(u.a,null)),i.a.createElement(h,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(E,{border:0,borderBottom:1,borderRadius:0,pb:2},i.a.createElement(l.m,null,r)),n.tableOfContents.items?i.a.createElement(k,{display:["none",null,"block"],position:"sticky",top:m.a+24,maxHeight:"calc(100vh - "+m.a+"px - 24px)"},i.a.createElement(l.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(g,{items:n.tableOfContents.items})):null,i.a.createElement(x,null,b||_?i.a.createElement(l.k,{mb:3,alignItems:"center"},b?i.a.createElement(p.a,{status:b}):null,i.a.createElement(l.e,{mx:"auto"}),_?i.a.createElement(d.a,{href:_}):null):null,n.tableOfContents.items?i.a.createElement(l.e,{display:["block",null,"none"],mb:3},i.a.createElement(l.h,null,function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.u,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.b,{mr:2}):i.a.createElement(o.c,{mr:2}),"Table of contents"),i.a.createElement(l.e,{pt:1},i.a.createElement(g,{items:n.tableOfContents.items})))})):null,t,i.a.createElement(s.a,{editUrl:n.editUrl,contributors:n.contributors.concat(O.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-documentation-contributing-mdx-989b5b5780fad842caf5.js.map