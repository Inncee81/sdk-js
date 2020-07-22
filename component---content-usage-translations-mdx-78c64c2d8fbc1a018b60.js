(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{838:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return b}),a.d(t,"default",function(){return p});a(9),a(10),a(8),a(13),a(17),a(0);var n=a(118),l=a(844),r=a(4),i=a(11),o=a(36),c=a(18);a(50);var b={},s={_frontmatter:b},m=l.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(m,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"XEDI.js comes bundled with our Translation packs."),Object(n.b)("h2",null,"Registration"),Object(n.b)("p",null,"Our ",Object(n.b)("inlineCode",{parentName:"p"},"Translator")," is registered with the application ",Object(n.b)("inlineCode",{parentName:"p"},"Container")," as ",Object(n.b)("inlineCode",{parentName:"p"},"translator"),"."),Object(n.b)("p",null,"It is also exposed statically."),Object(n.b)("h2",null,"Usage"),Object(n.b)(r.j,{mdxType:"Flash"},Object(n.b)(i.h,{mr:1,mdxType:"InfoIcon"}),Object(n.b)(o.a,{mdxType:"InlineCode"},"Translator")," is available statically, or as a parameter via the ",Object(n.b)(o.a,{mdxType:"InlineCode"},"Container"),"'s ",Object(n.b)(o.a,{mdxType:"InlineCode"},"resolve()")," method. Here we will display the static usage, which is no different to the resolved usage."),Object(n.b)("h3",null,"The Underscore Method"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Default Value"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Notes"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"label"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(i.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Case insensitive")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"parameters"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(n.b)(o.a,{mdxType:"InlineCode"},"[]")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Array of parameters to pass to ",Object(n.b)(o.a,{mdxType:"InlineCode"},"Sprintf"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"language"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(n.b)(o.a,{mdxType:"InlineCode"},"en")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Uses the ",Object(n.b)(o.a,{mdxType:"InlineCode"},"language")," configuration value")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Examples")),Object(n.b)("h4",null,"Basic Usage"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"Xedi.Translator._('languages.spanish'); // Spanish\n")),Object(n.b)("h4",null,"With Parameters"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// workflows.transition.between = transition between %from and %to\nXedi.Translator._(\n    'workflows.transition.between',\n    [{ from: 'Stage 1', to: 'Stage 2' }]\n); // transition between Stage 1 and Stage 2\n")),Object(n.b)("h4",null,"Language override"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"Xedi.Translator._('languages.spanish', [], 'es'); // Espanol\n")),Object(n.b)("h2",null,"Translations"),Object(n.b)(c.e,{mdxType:"TranslationsReference"}))}p.isMDXComponent=!0},844:function(e,t,a){"use strict";var n=a(2),l=a(4),r=a(11),i=a(0),o=a.n(i),c=a(130),b=a(76),s=a(199),m=a(131),p=a(197),d=a(198),u=Object(n.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function g(e){var t=e.items,a=e.depth;return o.a.createElement(u,{as:"ul",m:0,p:0},t.map(function(e){return o.a.createElement(l.e,{as:"li",key:e.url,pl:a>0?3:0},o.a.createElement(l.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(g,{items:e.items,depth:a+1}):null)}))}g.defaultProps={depth:0};var O=g,j=Object(n.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),f=Object(n.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),h=Object(n.f)(l.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),y=Object(n.f)(l.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),N=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=a.frontmatter,i=n.title,u=n.description,g=n.status,E=n.source,x=n.additionalContributors,C=void 0===x?[]:x;return o.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(c.a,{title:i,description:u}),o.a.createElement(b.b,null),o.a.createElement(j,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(l.e,{display:["none",null,null,"block"]},o.a.createElement(m.a,null)),o.a.createElement(f,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(h,{border:0,borderBottom:1,borderRadius:0,pb:2},o.a.createElement(l.m,null,i)),a.tableOfContents.items?o.a.createElement(y,{display:["none",null,"block"],position:"sticky",top:b.a+24,maxHeight:"calc(100vh - "+b.a+"px - 24px)"},o.a.createElement(l.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(O,{items:a.tableOfContents.items})):null,o.a.createElement(N,null,g||E?o.a.createElement(l.k,{mb:3,alignItems:"center"},g?o.a.createElement(d.a,{status:g}):null,o.a.createElement(l.e,{mx:"auto"}),E?o.a.createElement(p.a,{href:E}):null):null,a.tableOfContents.items?o.a.createElement(l.e,{display:["block",null,"none"],mb:3},o.a.createElement(l.h,null,function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.u,{as:"summary",fontWeight:"bold"},t?o.a.createElement(r.b,{mr:2}):o.a.createElement(r.c,{mr:2}),"Table of contents"),o.a.createElement(l.e,{pt:1},o.a.createElement(O,{items:a.tableOfContents.items})))})):null,t,o.a.createElement(s.a,{editUrl:a.editUrl,contributors:a.contributors.concat(C.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-usage-translations-mdx-78c64c2d8fbc1a018b60.js.map