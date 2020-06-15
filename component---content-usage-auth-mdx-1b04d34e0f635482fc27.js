(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{794:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return s}),n.d(t,"default",function(){return o});n(8),n(9),n(7),n(12),n(16),n(0);var a=n(114),c=n(817),b=n(4),r=n(13);var s={},l={_frontmatter:s},i=c.a;function o(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,c={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,["components"]);return Object(a.b)(i,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"Introduction"),Object(a.b)("p",null,"The Auth api controls access to the system. Read more about our ",Object(a.b)(b.n,{href:"/architecture/authentication",mdxType:"Link"},"authentication architecture here"),"."),Object(a.b)("h1",null,"Events"),Object(a.b)("p",null,"This service emits events. To learn more about events ",Object(a.b)(b.n,{href:"/architecture/events",mdxType:"Link"},"here"),"."),Object(a.b)("h2",null,"auth_updated"),Object(a.b)("p",null,"When the authentication state changes; ",Object(a.b)("inlineCode",{parentName:"p"},"auth_updated")," is emitted."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"type AuthenticationUpdatedEvent {\n    method: string;\n    date: {\n        user: User;\n        business?: Business;\n        refresh_token: RefreshToken;\n        access_token: AccessToken;\n    }\n}\n")),Object(a.b)("h2",null,"auth_deleted"),Object(a.b)("p",null,"When the authentication state is revoked; ",Object(a.b)("inlineCode",{parentName:"p"},"auth_deleted")," is emitted."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"type AuthenticationDeletedEvent {\n    method: string;\n}\n")),Object(a.b)("h1",null,"Properties"),Object(a.b)("h2",null,"business"),Object(a.b)("p",null,"Gets the current business context."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const currentBusiness: Business = Xedi.Auth.business;\n")),Object(a.b)("h2",null,"user"),Object(a.b)("p",null,"Gets the logged in user."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const currentUser: User = Xedi.Auth.user;\n")),Object(a.b)("h1",null,"Usage"),Object(a.b)("h2",null,"login"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"email"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(a.b)(r.a,{color:"green.5",mdxType:"CheckIcon"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(a.b)("a",Object.assign({parentName:"td"},{href:"mailto:t.stark@avengers.org"}),"t.stark@avengers.org"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"password"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(a.b)(r.a,{color:"green.5",mdxType:"CheckIcon"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"izJ7Y0MBwcJ8")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Usage")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await Xedi.Auth.login('t.stark@avengers.org', 'izJ7Y0MBwcJ8');\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events")),Object(a.b)("p",null,"Emits ",Object(a.b)("inlineCode",{parentName:"p"},"auth_updated")," on successful authentication."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"type AuthenticationResponse {\n    data: {\n        tokens: {\n            access: AccessToken;\n            refresh: RefreshToken;\n        };\n        user: User;\n    };\n}\n")),Object(a.b)("h2",null,"withToken"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"refreshToken"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(a.b)(r.a,{color:"green.5",mdxType:"CheckIcon"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"eyJhbGciO6IkpXVCJ9.e30.Et9HFtf9RY7kkTX1wr4qCyhIf58U")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Usage")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await Xedi.Auth.withToken('eyJhbGciO6IkpXVCJ9.e30.Et9HFtf9RY7kkTX1wr4qCyhIf58U');\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events")),Object(a.b)("p",null,"Emits ",Object(a.b)("inlineCode",{parentName:"p"},"auth_updated")," on successful authentication."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"type AuthenticationResponse {\n    data: {\n        tokens: {\n            access: AccessToken;\n            refresh: RefreshToken;\n        };\n        user: User;\n        business?: Business;\n    };\n}\n")),Object(a.b)("h2",null,"refreshAccessToken"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"null")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Usage")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await Xedi.Auth.refreshAccessToken();\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events")),Object(a.b)("p",null,"Emits ",Object(a.b)("inlineCode",{parentName:"p"},"auth_updated")," on successful renewal of the authentication state."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"type AuthenticationResponse {\n    data: {\n        tokens: {\n            access: AccessToken;\n            refresh: RefreshToken;\n        };\n        user: User;\n        business?: Business;\n    };\n}\n")),Object(a.b)("h2",null,"switchContexts"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"business_uuid"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(a.b)(r.a,{color:"green.5",mdxType:"CheckIcon"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"92ac7274-9369-11ea-9521-01002da17977")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Usage")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await Xedi.Auth.switchContexts('92ac7274-9369-11ea-9521-01002da17977');\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events")),Object(a.b)("p",null,"Emits ",Object(a.b)("inlineCode",{parentName:"p"},"auth_updated")," on successful updating of the authentication context."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"type AuthenticationResponse {\n    data: {\n        tokens: {\n            access: AccessToken;\n            refresh: RefreshToken;\n        };\n        user: User;\n        business: Business;\n    };\n}\n")),Object(a.b)("h2",null,"logout"),Object(a.b)("p",null,"Perminently revoke your refresh token."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"null")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Usage")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await Xedi.Auth.logout();\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events")),Object(a.b)("p",null,"Emits ",Object(a.b)("inlineCode",{parentName:"p"},"auth_deleted")," on successful revocation of the refresh token."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "method": "logout"\n}\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"null")))}o.isMDXComponent=!0},817:function(e,t,n){"use strict";var a=n(2),c=n(4),b=n(13),r=n(0),s=n.n(r),l=n(126),i=n(73),o=n(192),p=n(127),u=n(190),m=n(191),j=Object(a.f)(c.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function O(e){var t=e.items,n=e.depth;return s.a.createElement(j,{as:"ul",m:0,p:0},t.map(function(e){return s.a.createElement(c.e,{as:"li",key:e.url,pl:n>0?3:0},s.a.createElement(c.n,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?s.a.createElement(O,{items:e.items,depth:n+1}):null)}))}O.defaultProps={depth:0};var g=O,d=Object(a.f)(c.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),h=Object(a.f)(c.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),N=Object(a.f)(c.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),f=Object(a.f)(c.o).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),y=Object(a.f)(c.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,r=a.title,j=a.description,O=a.status,k=a.source,E=a.additionalContributors,v=void 0===E?[]:E;return s.a.createElement(c.k,{flexDirection:"column",minHeight:"100vh"},s.a.createElement(l.a,{title:r,description:j}),s.a.createElement(i.b,null),s.a.createElement(d,{flex:"1 1 auto",flexDirection:"row"},s.a.createElement(c.e,{display:["none",null,null,"block"]},s.a.createElement(p.a,null)),s.a.createElement(h,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},s.a.createElement(N,{border:0,borderBottom:1,borderRadius:0,pb:2},s.a.createElement(c.m,null,r)),n.tableOfContents.items?s.a.createElement(f,{display:["none",null,"block"],position:"sticky",top:i.a+24,maxHeight:"calc(100vh - "+i.a+"px - 24px)"},s.a.createElement(c.t,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),s.a.createElement(g,{items:n.tableOfContents.items})):null,s.a.createElement(y,null,O||k?s.a.createElement(c.k,{mb:3,alignItems:"center"},O?s.a.createElement(m.a,{status:O}):null,s.a.createElement(c.e,{mx:"auto"}),k?s.a.createElement(u.a,{href:k}):null):null,n.tableOfContents.items?s.a.createElement(c.e,{display:["block",null,"none"],mb:3},s.a.createElement(c.h,null,function(e){var t=e.open;return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.t,{as:"summary",fontWeight:"bold"},t?s.a.createElement(b.b,{mr:2}):s.a.createElement(b.c,{mr:2}),"Table of contents"),s.a.createElement(c.e,{pt:1},s.a.createElement(g,{items:n.tableOfContents.items})))})):null,t,s.a.createElement(o.a,{editUrl:n.editUrl,contributors:n.contributors.concat(v.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-usage-auth-mdx-1b04d34e0f635482fc27.js.map