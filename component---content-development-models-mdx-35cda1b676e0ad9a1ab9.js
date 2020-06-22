(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{821:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c}),n.d(t,"default",function(){return m});n(9),n(10),n(8),n(13),n(17),n(0);var a=n(119),i=n(837),l=n(4),o=n(11),r=n(19);n(18);var c={},s={_frontmatter:c},d=i.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(d,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Models mean a lot of things to alot of people. Here, they are simple definitions of the data we expect when we refer to a certain entity. At runtime, they provide little benefit, however, in TypeScript, they can help us understand the code that uses them, and ensures we use the correct attribute names when interacting with the data."),Object(a.b)("h2",null,"Authoring a Model"),Object(a.b)("p",null,"Models can be found in the ",Object(a.b)("inlineCode",{parentName:"p"},"src/Models")," directory. Model files ",Object(a.b)(l.u,{as:"em",mdxType:"Text"},"should")," be in title-case, for example ",Object(a.b)("inlineCode",{parentName:"p"},"Example.ts")," rather than ",Object(a.b)("inlineCode",{parentName:"p"},"example.ts"),". These files should also then be imported into ",Object(a.b)("inlineCode",{parentName:"p"},"Models.ts")," and added to the union type defining ",Object(a.b)("inlineCode",{parentName:"p"},"Models"),"."),Object(a.b)("p",null,"Lets break down the User model and examine how its built."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"import Xuid, { SupportedXuid } from '../Utils/Xuid';\n\n\n/**\n * User\n */\nexport default interface User extends Object {\n    _id: Xuid<SupportedXuid.User>;\n    first_name: string;\n    last_name: string;\n    email: string;\n    contact_no?: number;\n    job_title?: string;\n    avatar?: string;\n    is_active: boolean;\n}\n")),Object(a.b)(l.o,{href:"https://github.com/xedi/sdk-js/blob/master/src/Models/User.ts",lineHeight:"condensedUltra",fontSize:1,mdxType:"PrimerLink"},Object(a.b)(o.e,{mr:2,mdxType:"CodeIcon"}),"View Source"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Note that whilst this looks like your everyday household JavaScript object, after each line, there is a semi-colon. This tells TypeScript that we have finished defining that attribute."),Object(a.b)("li",{parentName:"ul"},"Some attributes have a ",Object(a.b)("inlineCode",{parentName:"li"},"?")," at the end of the attribute name. This denotes that it is optional."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"_id")," is using a custom type definition. It is an ",Object(a.b)(r.Link,{to:"/development/utilities#xuid",mdxType:"Link"},"XUID")," of type ",Object(a.b)("inlineCode",{parentName:"li"},"User")," as enumerated by the ",Object(a.b)(r.Link,{to:"/development/utilities#supported-xuid",mdxType:"Link"},"SupportedXuid")," enum.")))}m.isMDXComponent=!0},837:function(e,t,n){"use strict";var a=n(2),i=n(4),l=n(11),o=n(0),r=n.n(o),c=n(131),s=n(76),d=n(199),m=n(132),u=n(197),p=n(198),b=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function h(e){var t=e.items,n=e.depth;return r.a.createElement(b,{as:"ul",m:0,p:0},t.map(function(e){return r.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(i.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(h,{items:e.items,depth:n+1}):null)}))}h.defaultProps={depth:0};var f=h,g=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),y=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),O=Object(a.f)(i.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),j=Object(a.f)(i.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),x=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,o=a.title,b=a.description,h=a.status,E=a.source,k=a.additionalContributors,w=void 0===k?[]:k;return r.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:o,description:b}),r.a.createElement(s.b,null),r.a.createElement(g,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(i.e,{display:["none",null,null,"block"]},r.a.createElement(m.a,null)),r.a.createElement(y,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(O,{border:0,borderBottom:1,borderRadius:0,pb:2},r.a.createElement(i.m,null,o)),n.tableOfContents.items?r.a.createElement(j,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(i.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(f,{items:n.tableOfContents.items})):null,r.a.createElement(x,null,h||E?r.a.createElement(i.k,{mb:3,alignItems:"center"},h?r.a.createElement(p.a,{status:h}):null,r.a.createElement(i.e,{mx:"auto"}),E?r.a.createElement(u.a,{href:E}):null):null,n.tableOfContents.items?r.a.createElement(i.e,{display:["block",null,"none"],mb:3},r.a.createElement(i.h,null,function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.u,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.b,{mr:2}):r.a.createElement(l.c,{mr:2}),"Table of contents"),r.a.createElement(i.e,{pt:1},r.a.createElement(f,{items:n.tableOfContents.items})))})):null,t,r.a.createElement(d.a,{editUrl:n.editUrl,contributors:n.contributors.concat(w.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-development-models-mdx-35cda1b676e0ad9a1ab9.js.map