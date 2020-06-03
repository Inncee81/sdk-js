(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{803:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return i}),n.d(t,"default",function(){return c});n(8),n(9),n(7),n(15),n(16),n(0);var a=n(114),l=n(808);var i={},r={_frontmatter:i},o=l.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(o,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can configure the SDK using the ",Object(a.b)("inlineCode",{parentName:"p"},"Xedi.Config")," class. This class extends a JavaScript ",Object(a.b)("inlineCode",{parentName:"p"},"Map")," object, so the usual ",Object(a.b)("inlineCode",{parentName:"p"},"get"),", ",Object(a.b)("inlineCode",{parentName:"p"},"set"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"delete")," methods will work as per the original object. For example, you can configure which ",Object(a.b)("inlineCode",{parentName:"p"},"base_url")," should be used to contact a API Gateway instance."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"Xedi.Config.set('base_url', 'https://api.staging.xedi.com');\n")),Object(a.b)("p",null,"Below you will find a list of all configurations."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Configuration"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Default Value"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Comments"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"base_url")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"https://api.xedi.com")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"refresh_token")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"Set and managed by ",Object(a.b)("inlineCode",{parentName:"td"},"Xedi.Auth"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"access_token")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"Set and managed by ",Object(a.b)("inlineCode",{parentName:"td"},"Xedi.Auth"))))))}c.isMDXComponent=!0},808:function(e,t,n){"use strict";var a=n(2),l=n(4),i=n(12),r=n(0),o=n.n(r),c=n(126),b=n(72),s=n(189),m=n(127),d=n(187),u=n(188),p=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function g(e){var t=e.items,n=e.depth;return o.a.createElement(p,{as:"ul",m:0,p:0},t.map(function(e){return o.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(l.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(g,{items:e.items,depth:n+1}):null)}))}g.defaultProps={depth:0};var O=g,j=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),f=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),h=Object(a.f)(l.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),y=Object(a.f)(l.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),N=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,r=a.title,p=a.description,g=a.status,C=a.source,E=a.additionalContributors,_=void 0===E?[]:E;return o.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(c.a,{title:r,description:p}),o.a.createElement(b.b,null),o.a.createElement(j,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(l.e,{display:["none",null,null,"block"]},o.a.createElement(m.a,null)),o.a.createElement(f,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(h,{border:0,borderBottom:1,borderRadius:0,pb:2},o.a.createElement(l.m,null,r)),n.tableOfContents.items?o.a.createElement(y,{display:["none",null,"block"],position:"sticky",top:b.a+24,maxHeight:"calc(100vh - "+b.a+"px - 24px)"},o.a.createElement(l.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(O,{items:n.tableOfContents.items})):null,o.a.createElement(N,null,g||C?o.a.createElement(l.k,{mb:3,alignItems:"center"},g?o.a.createElement(u.a,{status:g}):null,o.a.createElement(l.e,{mx:"auto"}),C?o.a.createElement(d.a,{href:C}):null):null,n.tableOfContents.items?o.a.createElement(l.e,{display:["block",null,"none"],mb:3},o.a.createElement(l.h,null,function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.u,{as:"summary",fontWeight:"bold"},t?o.a.createElement(i.b,{mr:2}):o.a.createElement(i.c,{mr:2}),"Table of contents"),o.a.createElement(l.e,{pt:1},o.a.createElement(O,{items:n.tableOfContents.items})))})):null,t,o.a.createElement(s.a,{editUrl:n.editUrl,contributors:n.contributors.concat(_.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-about-configuration-mdx-89f596bb1dff6d660c75.js.map