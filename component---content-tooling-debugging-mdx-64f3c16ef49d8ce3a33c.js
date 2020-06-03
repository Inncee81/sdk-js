(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{781:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return l}),n.d(t,"default",function(){return c});n(8),n(9),n(7),n(14),n(15),n(0);var a=n(109),o=n(796),r=n(4);var l={},i={_frontmatter:l},s=o.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(s,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Whilst TypeScript helps us eliminate most of the silly bugs that vanilla JavaScript would allow, there is still room for mistakes to be made. To aid in the discover of these issues, there is a playground provided within the repository."),Object(a.b)("h2",null,"Starting the playground"),Object(a.b)("p",null,"To initialize the playground, simply run ",Object(a.b)("inlineCode",{parentName:"p"},"npm run playground"),". You should do this in a separate console window as this is a foreground task. This task will watch your ",Object(a.b)("inlineCode",{parentName:"p"},"src")," directory for changes, compiles them, and utilizing the ",Object(a.b)("inlineCode",{parentName:"p"},"webpack-dev-server"),", perform module hot swapping. When the command has finished it's first run, it should prompt you to open your browser to http://localhost:8080."),Object(a.b)("h2",null,"Preparing the playground"),Object(a.b)("p",null,"When you open the playground in your browser, you will be presented with a form to configure the it. There will be three fields: API Gateway Address, Login (Email Address), and Password. At this time, Login and Password are required."),Object(a.b)("p",null,'On successful authentication with your choice of API Gateway instance, the form will be replaced with a green tick and instructions to open DevTools and "start hacking".'),Object(a.b)("h2",null,"Using the playground"),Object(a.b)("p",null,"As mentioned previous, you need to open your browsers DevTools. From here, you can enter a variety of commands into the console to interact with XEDI.js. A good first command might be retreiving your user record from the ",Object(a.b)(r.o,{href:"/usage/auth#user",mdxType:"Link"},"Auth api"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const me = Xedi.Auth.user;\n")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'{\n    "_id": "92ac7274-9369-11ea-9521-01002da17977",\n    "email": "t.stark@avengers.org",\n    "first_name": "Anthony",\n    "last_name": "Start",\n    "job_title": "Iron Man",\n    "contact_no": "(970) 517-1743 x67916",\n    "avatar": "https://assets.avengers.org/images/iron_man.png",\n    "created_at": "2020-05-11 10:27:03",\n    "updated_at": "2020-05-11 10:30:14",\n    "is_active": 1\n}\n')),Object(a.b)("p",null,"When you done, terminate the server running in your console."))}c.isMDXComponent=!0},796:function(e,t,n){"use strict";var a=n(2),o=n(4),r=n(16),l=n(0),i=n.n(l),s=n(123),c=n(66),u=n(182),m=n(124),d=n(180),p=n(181),b=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function h(e){var t=e.items,n=e.depth;return i.a.createElement(b,{as:"ul",m:0,p:0},t.map(function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(h,{items:e.items,depth:n+1}):null)}))}h.defaultProps={depth:0};var g=h,f=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),y=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),w=Object(a.f)(o.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),O=Object(a.f)(o.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),j=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,l=a.title,b=a.description,h=a.status,v=a.source,E=a.additionalContributors,_=void 0===E?[]:E;return i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(s.a,{title:l,description:b}),i.a.createElement(c.b,null),i.a.createElement(f,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(m.a,null)),i.a.createElement(y,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(w,{border:0,borderBottom:1,borderRadius:0,pb:2},i.a.createElement(o.m,null,l)),n.tableOfContents.items?i.a.createElement(O,{display:["none",null,"block"],position:"sticky",top:c.a+24,maxHeight:"calc(100vh - "+c.a+"px - 24px)"},i.a.createElement(o.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(g,{items:n.tableOfContents.items})):null,i.a.createElement(j,null,h||v?i.a.createElement(o.k,{mb:3,alignItems:"center"},h?i.a.createElement(p.a,{status:h}):null,i.a.createElement(o.e,{mx:"auto"}),v?i.a.createElement(d.a,{href:v}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.u,{as:"summary",fontWeight:"bold"},t?i.a.createElement(r.b,{mr:2}):i.a.createElement(r.c,{mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(g,{items:n.tableOfContents.items})))})):null,t,i.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(_.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-tooling-debugging-mdx-64f3c16ef49d8ce3a33c.js.map