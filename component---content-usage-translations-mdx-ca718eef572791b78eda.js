(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{DRPH:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a("8o2o"),l=(a("q1tI"),a("7ljp")),r=a("HjAN"),o=a("oW+c"),c=a("FH/S"),i=a("OaND"),s=a("Kvkj"),b=(a("wITj"),{}),m={_frontmatter:b},p=r.a;function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(p,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"XEDI.js comes bundled with our Translation packs."),Object(l.b)("h2",null,"Registration"),Object(l.b)("p",null,"Our ",Object(l.b)("inlineCode",{parentName:"p"},"Translator")," is registered with the application ",Object(l.b)("inlineCode",{parentName:"p"},"Container")," as ",Object(l.b)("inlineCode",{parentName:"p"},"translator"),"."),Object(l.b)("p",null,"It is also exposed statically."),Object(l.b)("h2",null,"Usage"),Object(l.b)(o.j,{mdxType:"Flash"},Object(l.b)(c.h,{mr:1,mdxType:"InfoIcon"}),Object(l.b)(i.a,{mdxType:"InlineCode"},"Translator")," is available statically, or as a parameter via the ",Object(l.b)(i.a,{mdxType:"InlineCode"},"Container"),"'s ",Object(l.b)(i.a,{mdxType:"InlineCode"},"resolve()")," method. Here we will display the static usage, which is no different to the resolved usage."),Object(l.b)("h3",null,"Get Supported languages"),Object(l.b)("p",null,"Get a list of supported languages."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const languages = Xedi.Translator.getSupportLanguages(); // [ 'en' ]\n")),Object(l.b)("h3",null,"The Underscore Method"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Parameter"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Default Value"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"label"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(l.b)(c.a,{color:"green.5",mdxType:"CheckIcon"})),Object(l.b)("td",Object.assign({parentName:"tr"},{align:"left"})),Object(l.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Case insensitive")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"parameters"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(l.b)(i.a,{mdxType:"InlineCode"},"[]")),Object(l.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Array of parameters to pass to ",Object(l.b)(i.a,{mdxType:"InlineCode"},"Sprintf"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"language"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(l.b)(i.a,{mdxType:"InlineCode"},"en")),Object(l.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Uses the ",Object(l.b)(i.a,{mdxType:"InlineCode"},"language")," configuration value")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Examples")),Object(l.b)("h4",null,"Basic Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"Xedi.Translator._('languages.spanish'); // Spanish\n")),Object(l.b)("h4",null,"With Parameters"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// workflows.transition.between = transition between %from and %to\nXedi.Translator._(\n    'workflows.transition.between',\n    [{ from: 'Stage 1', to: 'Stage 2' }]\n); // transition between Stage 1 and Stage 2\n")),Object(l.b)("h4",null,"Language override"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"Xedi.Translator._('languages.spanish', [], 'es'); // Espanol\n")),Object(l.b)("h2",null,"Translations"),Object(l.b)(s.e,{mdxType:"TranslationsReference"}))}d.isMDXComponent=!0},HjAN:function(e,t,a){"use strict";var n=a("vOnD"),l=a("oW+c"),r=a("FH/S"),o=a("q1tI"),c=a.n(o),i=a("8gyx"),s=a("ESUP"),b=a("oo4l"),m=a("Evc+"),p=a("og4h"),d=a("sqpL"),u=Object(n.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function g(e){var t=e.items,a=e.depth;return c.a.createElement(u,{as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(l.e,{as:"li",key:e.url,pl:a>0?3:0},c.a.createElement(l.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(g,{items:e.items,depth:a+1}):null)})))}g.defaultProps={depth:0};var j=g,O=Object(n.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),f=Object(n.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),h=Object(n.f)(l.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),y=Object(n.f)(l.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),N=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=a.frontmatter,o=n.title,u=n.description,g=n.status,E=n.source,x=n.additionalContributors,w=void 0===x?[]:x;return c.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(i.a,{title:o,description:u}),c.a.createElement(s.b,null),c.a.createElement(O,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(l.e,{display:["none",null,null,"block"]},c.a.createElement(m.a,null)),c.a.createElement(f,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(h,{border:0,borderBottom:1,borderRadius:0,pb:2},c.a.createElement(l.m,null,o)),a.tableOfContents.items?c.a.createElement(y,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},c.a.createElement(l.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(j,{items:a.tableOfContents.items})):null,c.a.createElement(N,null,g||E?c.a.createElement(l.k,{mb:3,alignItems:"center"},g?c.a.createElement(d.a,{status:g}):null,c.a.createElement(l.e,{mx:"auto"}),E?c.a.createElement(p.a,{href:E}):null):null,a.tableOfContents.items?c.a.createElement(l.e,{display:["block",null,"none"],mb:3},c.a.createElement(l.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.u,{as:"summary",fontWeight:"bold"},t?c.a.createElement(r.b,{mr:2}):c.a.createElement(r.c,{mr:2}),"Table of contents"),c.a.createElement(l.e,{pt:1},c.a.createElement(j,{items:a.tableOfContents.items})))}))):null,t,c.a.createElement(b.a,{editUrl:a.editUrl,contributors:a.contributors.concat(w.map((function(e){return{login:e}})))})))))}}}]);
//# sourceMappingURL=component---content-usage-translations-mdx-ca718eef572791b78eda.js.map