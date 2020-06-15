(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{812:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return r}),n.d(t,"default",function(){return d});n(8),n(9),n(7),n(12),n(16),n(0);var a=n(114),l=n(817),i=n(4),o=n(13);var r={},c={_frontmatter:r},s=l.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(s,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Models mean a lot of things to alot of people. Here, they are simple definitions of the data we expect when we refer to a certain entity. At runtime, they provide little benefit, however, in TypeScript, they can help us understand the code that uses them, and ensures we use the correct attribute names when interacting with the data."),Object(a.b)("h2",null,"Authoring a Model"),Object(a.b)("p",null,"Models can be found in the ",Object(a.b)("inlineCode",{parentName:"p"},"src/Models")," directory. Model files ",Object(a.b)(i.t,{as:"em",mdxType:"Text"},"should")," be in title-case, for example ",Object(a.b)("inlineCode",{parentName:"p"},"Example.ts")," rather than ",Object(a.b)("inlineCode",{parentName:"p"},"example.ts"),". These files should also then be imported into ",Object(a.b)("inlineCode",{parentName:"p"},"Models.ts")," and added to the union type defining ",Object(a.b)("inlineCode",{parentName:"p"},"Models"),"."),Object(a.b)("p",null,"Lets break down the User model and examine how its built."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"import Xuid, { SupportedXuid } from '../Utils/Xuid';\n\n\n/**\n * User\n */\nexport default interface User extends Object {\n    _id: Xuid<SupportedXuid.User>;\n    first_name: string;\n    last_name: string;\n    email: string;\n    contact_no?: number;\n    job_title?: string;\n    avatar?: string;\n    is_active: boolean;\n}\n")),Object(a.b)(i.n,{href:"https://github.com/xedi/sdk-js/blob/master/src/Models/User.ts",lineHeight:"condensedUltra",fontSize:1,mdxType:"Link"},Object(a.b)(o.e,{mr:2,mdxType:"CodeIcon"}),"View Source"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Note that whilst this looks like your everyday household JavaScript object, after each line, there is a semi-colon. This tells TypeScript that we have finished defining that attribute."),Object(a.b)("li",{parentName:"ul"},"Some attributes have a ",Object(a.b)("inlineCode",{parentName:"li"},"?")," at the end of the attribute name. This denotes that it is optional."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"_id")," is using a custom type definition. It is an ",Object(a.b)(i.n,{href:"/development/utilities#xuid",mdxType:"Link"},"XUID")," of type ",Object(a.b)("inlineCode",{parentName:"li"},"User")," as enumerated by the ",Object(a.b)(i.n,{href:"/development/utilities#supported-xuid",mdxType:"Link"},"SupportedXuid")," enum.")))}d.isMDXComponent=!0},817:function(e,t,n){"use strict";var a=n(2),l=n(4),i=n(13),o=n(0),r=n.n(o),c=n(126),s=n(73),d=n(192),m=n(127),u=n(190),p=n(191),b=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function h(e){var t=e.items,n=e.depth;return r.a.createElement(b,{as:"ul",m:0,p:0},t.map(function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(h,{items:e.items,depth:n+1}):null)}))}h.defaultProps={depth:0};var f=h,g=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),y=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),O=Object(a.f)(l.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),j=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),x=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,o=a.title,b=a.description,h=a.status,E=a.source,w=a.additionalContributors,_=void 0===w?[]:w;return r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:o,description:b}),r.a.createElement(s.b,null),r.a.createElement(g,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(m.a,null)),r.a.createElement(y,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(O,{border:0,borderBottom:1,borderRadius:0,pb:2},r.a.createElement(l.m,null,o)),n.tableOfContents.items?r.a.createElement(j,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.t,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(f,{items:n.tableOfContents.items})):null,r.a.createElement(x,null,h||E?r.a.createElement(l.k,{mb:3,alignItems:"center"},h?r.a.createElement(p.a,{status:h}):null,r.a.createElement(l.e,{mx:"auto"}),E?r.a.createElement(u.a,{href:E}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.t,{as:"summary",fontWeight:"bold"},t?r.a.createElement(i.b,{mr:2}):r.a.createElement(i.c,{mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(f,{items:n.tableOfContents.items})))})):null,t,r.a.createElement(d.a,{editUrl:n.editUrl,contributors:n.contributors.concat(_.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-development-models-mdx-1d88d0367b0f71d5383a.js.map