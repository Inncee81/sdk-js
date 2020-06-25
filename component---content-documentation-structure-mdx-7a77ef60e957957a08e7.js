(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{819:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return r}),n.d(t,"default",function(){return m});n(9),n(10),n(8),n(13),n(17),n(0);var a=n(118),o=n(843),l=n(19);var r={},i={_frontmatter:r},c=o.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Within the ",Object(a.b)("inlineCode",{parentName:"p"},"docs/")," directory, there are a number of important directories and files to be aware of. You probably already know about the ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," and ",Object(a.b)("inlineCode",{parentName:"p"},".env")," file. If not, read the ",Object(a.b)(l.Link,{to:"/documentation/set-up",mdxType:"Link"},"Getting Started")," section."),Object(a.b)("h2",null,"Content"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"content")," directory holds our content. An important note is that the folders you use should match your desired URLS. For example, if I was writing a ",Object(a.b)("strong",{parentName:"p"},"character profile")," for ",Object(a.b)("strong",{parentName:"p"},"Luke Skywalker"),", I might want the URL to be ",Object(a.b)("inlineCode",{parentName:"p"},"/characters/luke_skywalker"),". So my folder structure should match this, therefore my file path should be ",Object(a.b)("inlineCode",{parentName:"p"},"docs/content/characters/luke_skywalker.mdx"),"."),Object(a.b)("h2",null,"Sidebar Navigation"),Object(a.b)("p",null,"The Sidebar navigation is generated from the content in ",Object(a.b)("inlineCode",{parentName:"p"},"src/@primer/gatsby-theme-doctocat/nav.yml"),". Each entry in ",Object(a.b)("inlineCode",{parentName:"p"},"nav.yml")," should have a ",Object(a.b)("inlineCode",{parentName:"p"},"title"),", ",Object(a.b)("inlineCode",{parentName:"p"},"url"),", and an optional ",Object(a.b)("inlineCode",{parentName:"p"},"children")," list to create nested navigation links."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-yml"}),"# src/@primer/gatsby-theme-doctocat/nav.yml\n- title: Example\n  url: /example\n  children:\n    - title: Nested Example\n      url: /nested/example\n")),Object(a.b)("p",null,"There are some caveats though:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Doctocat (the theme) only supports ",Object(a.b)("strong",{parentName:"li"},"one")," level of nesting."),Object(a.b)("li",{parentName:"ul"},"Links are ",Object(a.b)("strong",{parentName:"li"},"not")," alphabetized; but rendered in the order they are specified."),Object(a.b)("li",{parentName:"ul"},"Items without urls default to the index page.")),Object(a.b)("h2",null,"First Party Components"),Object(a.b)("p",null,"Between ",Object(a.b)("inlineCode",{parentName:"p"},"@primer/components")," and ",Object(a.b)("inlineCode",{parentName:"p"},"@primer/gatsby-theme-doctocat"),", there are a lot of useful components, however it can be useful to create additional components to consolidate multiple components into one, or to add additional functionality."),Object(a.b)("p",null,"These are stored in ",Object(a.b)("inlineCode",{parentName:"p"},"docs/src/components/")," and enumerated for export in ",Object(a.b)("inlineCode",{parentName:"p"},"docs/src/components/index.js"),"."))}m.isMDXComponent=!0},843:function(e,t,n){"use strict";var a=n(2),o=n(4),l=n(11),r=n(0),i=n.n(r),c=n(130),m=n(76),s=n(199),d=n(131),p=n(197),b=n(198),u=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function h(e){var t=e.items,n=e.depth;return i.a.createElement(u,{as:"ul",m:0,p:0},t.map(function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(h,{items:e.items,depth:n+1}):null)}))}h.defaultProps={depth:0};var f=h,g=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),y=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),O=Object(a.f)(o.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),j=Object(a.f)(o.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),k=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,r=a.title,u=a.description,h=a.status,E=a.source,C=a.additionalContributors,N=void 0===C?[]:C;return i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(c.a,{title:r,description:u}),i.a.createElement(m.b,null),i.a.createElement(g,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(d.a,null)),i.a.createElement(y,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(O,{border:0,borderBottom:1,borderRadius:0,pb:2},i.a.createElement(o.m,null,r)),n.tableOfContents.items?i.a.createElement(j,{display:["none",null,"block"],position:"sticky",top:m.a+24,maxHeight:"calc(100vh - "+m.a+"px - 24px)"},i.a.createElement(o.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(f,{items:n.tableOfContents.items})):null,i.a.createElement(k,null,h||E?i.a.createElement(o.k,{mb:3,alignItems:"center"},h?i.a.createElement(b.a,{status:h}):null,i.a.createElement(o.e,{mx:"auto"}),E?i.a.createElement(p.a,{href:E}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.u,{as:"summary",fontWeight:"bold"},t?i.a.createElement(l.b,{mr:2}):i.a.createElement(l.c,{mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(f,{items:n.tableOfContents.items})))})):null,t,i.a.createElement(s.a,{editUrl:n.editUrl,contributors:n.contributors.concat(N.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-documentation-structure-mdx-7a77ef60e957957a08e7.js.map