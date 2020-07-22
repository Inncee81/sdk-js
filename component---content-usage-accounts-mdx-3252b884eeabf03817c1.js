(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{830:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return l}),a.d(t,"default",function(){return i});a(9),a(10),a(8),a(13),a(17),a(0);var n=a(118),r=a(844),c=a(11);var l={},b={_frontmatter:l},s=r.a;function i(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(s,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Introduction"),Object(n.b)("p",null,"The Accounts API allows you to register, and verify a user account."),Object(n.b)("h2",null,"Usage"),Object(n.b)("h3",null,"Register"),Object(n.b)("p",null,"Register a User Account"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"email"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(c.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object.assign({parentName:"td"},{href:"mailto:t.stark@avengers.org"}),"t.stark@avengers.org"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"first_name"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(c.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Anthony")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"last_name"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(c.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Stark")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"password"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(c.a,{color:"green.5",mdxType:"CheckIcon"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"izJ7Y0MBwcJ8")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"contact_no"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"(970) 517-1743 x67916")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"job_title"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Iron Man")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"avatar"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object.assign({parentName:"td"},{href:"https://assets.avengers.org/images/iron_man.png"}),"https://assets.avengers.org/images/iron_man.png"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Usage")),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const user = await Xedi.Accounts.register({\n    email: 't.stark@avengers.org',\n    first_name: 'Anthony',\n    last_name: 'Stark',\n    password: 'izJ7Y0MBwcJ8',\n    contact_no: '(970) 517-1743 x67916',\n    job_title: 'Iron Man',\n    avatar: 'https://assets.avengers.org/images/iron_man.png'\n});\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Response")),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "92ac7274-9369-11ea-9521-01002da17977",\n    "email": "t.stark@avengers.org",\n    "first_name": "Anthony",\n    "last_name": "Stark",\n    "job_title": "Iron Man",\n    "contact_no": "(970) 517-1743 x67916",\n    "avatar": "https://assets.avengers.org/images/iron_man.png",\n    "created_at": "2020-05-11 10:27:03",\n    "is_active": 0\n}\n')),Object(n.b)("hr",null),Object(n.b)("h3",null,"Verify"),Object(n.b)("p",null,"Verify the email address attached to a User account."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"verificationToken"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(n.b)(c.a,{color:"green.5",mdxType:"CheckIcon"}),"︎"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"de99a620c50f2990e87144735cd357e7")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Usage")),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const user = Xedi.Accounts.verify('de99a620c50f2990e87144735cd357e7');\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Response")),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "92ac7274-9369-11ea-9521-01002da17977",\n    "email": "t.stark@avengers.org",\n    "first_name": "Anthony",\n    "last_name": "Start",\n    "job_title": "Iron Man",\n    "contact_no": "(970) 517-1743 x67916",\n    "avatar": "https://assets.avengers.org/images/iron_man.png",\n    "created_at": "2020-05-11 10:27:03",\n    "updated_at": "2020-05-11 10:30:14",\n    "is_active": 1\n}\n')))}i.isMDXComponent=!0},844:function(e,t,a){"use strict";var n=a(2),r=a(4),c=a(11),l=a(0),b=a.n(l),s=a(130),i=a(76),o=a(199),m=a(131),g=a(197),p=a(198),j=Object(n.f)(r.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function O(e){var t=e.items,a=e.depth;return b.a.createElement(j,{as:"ul",m:0,p:0},t.map(function(e){return b.a.createElement(r.e,{as:"li",key:e.url,pl:a>0?3:0},b.a.createElement(r.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?b.a.createElement(O,{items:e.items,depth:a+1}):null)}))}O.defaultProps={depth:0};var d=O,u=Object(n.f)(r.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),f=Object(n.f)(r.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),N=Object(n.f)(r.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),h=Object(n.f)(r.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),y=Object(n.f)(r.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=a.frontmatter,l=n.title,j=n.description,O=n.status,_=n.source,v=n.additionalContributors,k=void 0===v?[]:v;return b.a.createElement(r.k,{flexDirection:"column",minHeight:"100vh"},b.a.createElement(s.a,{title:l,description:j}),b.a.createElement(i.b,null),b.a.createElement(u,{flex:"1 1 auto",flexDirection:"row"},b.a.createElement(r.e,{display:["none",null,null,"block"]},b.a.createElement(m.a,null)),b.a.createElement(f,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},b.a.createElement(N,{border:0,borderBottom:1,borderRadius:0,pb:2},b.a.createElement(r.m,null,l)),a.tableOfContents.items?b.a.createElement(h,{display:["none",null,"block"],position:"sticky",top:i.a+24,maxHeight:"calc(100vh - "+i.a+"px - 24px)"},b.a.createElement(r.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),b.a.createElement(d,{items:a.tableOfContents.items})):null,b.a.createElement(y,null,O||_?b.a.createElement(r.k,{mb:3,alignItems:"center"},O?b.a.createElement(p.a,{status:O}):null,b.a.createElement(r.e,{mx:"auto"}),_?b.a.createElement(g.a,{href:_}):null):null,a.tableOfContents.items?b.a.createElement(r.e,{display:["block",null,"none"],mb:3},b.a.createElement(r.h,null,function(e){var t=e.open;return b.a.createElement(b.a.Fragment,null,b.a.createElement(r.u,{as:"summary",fontWeight:"bold"},t?b.a.createElement(c.b,{mr:2}):b.a.createElement(c.c,{mr:2}),"Table of contents"),b.a.createElement(r.e,{pt:1},b.a.createElement(d,{items:a.tableOfContents.items})))})):null,t,b.a.createElement(o.a,{editUrl:a.editUrl,contributors:a.contributors.concat(k.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-usage-accounts-mdx-3252b884eeabf03817c1.js.map