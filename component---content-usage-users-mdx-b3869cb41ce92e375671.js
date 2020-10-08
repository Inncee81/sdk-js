(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"+vJ/":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a("8o2o"),b=(a("q1tI"),a("7ljp")),r=a("HjAN"),l=a("FH/S"),c=a("oW+c"),s=a("wITj"),i={},p={_frontmatter:i},j=r.a;function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)(j,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Introduction"),Object(b.b)("p",null,"The Users API allows you to interact with our users data"),Object(b.b)("h2",null,"Usage"),Object(b.b)("h3",null,"List"),Object(b.b)("p",null,"List all Users that the user has the authority to see withing the context of a Business"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"pageNumber"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"1")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const users = await Xedi.Users.list();\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Response")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "_id": "e7e16998-3d2e-11ea-be36-01002da17977",\n        "first_name": "Tony",\n        "last_name": "Stark",\n        "email": "TonyStark@Avengers.com",\n        "contact_no": null,\n        "job_title": null,\n        "avatar": null,\n        "is_active": "1",\n        "created_at": "2010-07-03 13:34:10",\n        "updated_at": "2019-07-03 15:15:10",\n        "deleted_at": "2020-09-01 12:44:10"\n    },\n    {\n        "_id": "96GE2a3e-boi0-11e9-b308-013533e48b37",\n        "first_name": "Jeff",\n        "last_name": "Goldblum",\n        "email": "GoldenJeff@Avengers.com",\n        "contact_no": null,\n        "job_title": null,\n        "avatar": null,\n        "is_active": "1",\n        "created_at": "2012-07-03 13:34:10",\n        "updated_at": "2019-07-03 15:15:10",\n        "deleted_at": "2020-09-01 12:44:10"\n    }\n]\n')),Object(b.b)("h3",null,"Get"),Object(b.b)("p",null,"Retrieve a User by ID that the user has the authority to see within the context of a Business"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"user_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(l.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'e7e16998-3d2e-11ea-be36-01002da17977'")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const user = await Xedi.Users.get('e7e16998-3d2e-11ea-be36-01002da17977');\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Response")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "e7e16998-3d2e-11ea-be36-01002da17977",\n    "first_name": "Tony",\n    "last_name": "Stark",\n    "email": "TonyStark@Avengers.com",\n    "contact_no": null,\n    "job_title": null,\n    "avatar": null,\n    "is_active": "1",\n    "created_at": "2010-07-03 13:34:10",\n    "updated_at": "2019-07-03 15:15:10",\n    "deleted_at": "2020-09-01 12:44:10"\n}\n')),Object(b.b)("h3",null,"Get Permission"),Object(b.b)("p",null,"Retrieve a users Permissions"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"user_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"UUID"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(l.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"f3ce14b8-b542-11ea-aded-01002da17977")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const permissions = await Xedi.Users.getPermissions('0453b1ec-44d4-31d7-bffb-accfbaab2c90');\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Response")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "data": [\n        {\n            "Key": "audit.event.business.read",\n            "is_hidden": 0\n        },\n        {\n            "Key": "audit.event.read",\n            "is_hidden": 0\n        },\n        {\n            "Key": "audit.event.user.read",\n            "is_hidden": 0\n        }\n    ]\n}\n')),Object(b.b)(c.k,{alignItems:"center",mdxType:"Flex"},Object(b.b)(s.c,{mdxType:"H3"},"Get By Group"),Object(b.b)(c.e,{mx:"auto",mdxType:"Box"}),Object(b.b)(c.n,{bg:"#A575FF",mdxType:"Label"},"Pagination Enabled")),Object(b.b)("p",null,"List all the users associated with a group."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"group_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"UUID"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(l.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"f3ce14b8-b542-11ea-aded-01002da17977")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"pageNumber"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"1")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const users = await Xedi.Users.getByGroup('0453b1ec-44d4-31d7-bffb-accfbaab2c90');\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Response")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "current_page": 1,\n    "data": [\n        {\n            "_id": "e7e16998-3d2e-11ea-be36-01002da17977",\n            "first_name": "Tony",\n            "last_name": "Stark",\n            "email": "TonyStark@Avengers.com",\n            "contact_no": null,\n            "job_title": null,\n            "avatar": null,\n            "is_active": "1",\n            "created_at": "2020-07-03 13:58:10",\n            "updated_at": "2020-07-03 13:58:10",\n            "deleted_at": "2020-09-01 13:58:10"\n        }\n    ],\n    "first_page_url": "https://api.xedi.com/1/users?page=1",\n    "from": 1,\n    "last_page": "https://api.xedi.com/1/users?page=1",\n    "last_page_url": null,\n    "next_page_url": null,\n    "path": "https://api.xedi.com/1/users",\n    "per_page": 15,\n    "prev_page_url": null,\n    "to": 1,\n    "total": 1\n}\n')),Object(b.b)("h3",null,"Update"),Object(b.b)("p",null,"Update a user by ID"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(l.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'e7e16998-3d2e-11ea-be36-01002da17977'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"first_name"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'Tony'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"last_name"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'Stark'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"email"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'",Object(b.b)("a",Object.assign({parentName:"td"},{href:"mailto:TonyStark@Avengers.com"}),"TonyStark@Avengers.com"),"'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"contact_no"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'01234 567890'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"job_title"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'CEO'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"avatar"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'",Object(b.b)("a",Object.assign({parentName:"td"},{href:"https://someurl.com/avatar'"}),"https://someurl.com/avatar'"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"is_active"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Integer"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"1")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'    await Xedi.User.Update({\n        "_id": "e7e16998-3d2e-11ea-be36-01002da17977",\n        "first_name": "Tony",\n        "last_name": "Stark",\n        "email": "TonyStark@Avengers.com",\n        "contact_no": "01234 567890",\n        "job_title": "CEO",\n        "avatar": "https://someurl.com/avatar",\n        "is_active": "1",\n    })\n')),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Response")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "data": {\n        "_id": "e7e16998-3d2e-11ea-be36-01002da17977",\n        "first_name": "Tony",\n        "last_name": "Stark",\n        "email": "TonyStark@Avengers.com",\n        "contact_no": "01234 567890",\n        "job_title": "CEO",\n        "avatar": "https://someurl.com/avatar",\n        "is_active": "1",\n        "created_at": "2020-09-03 14:00:00",\n        "updated_at": "2020-09-07 15:00:00",\n        "deleted_at": null\n    }\n}\n')),Object(b.b)("h3",null,"Delete"),Object(b.b)("p",null,"Delete a user by ID"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(l.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'e7e16998-3d2e-11ea-be36-01002da17977'")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await Xedi.User.delete('e7e16998-3d2e-11ea-be36-01002da17977');\n")),Object(b.b)("h3",null,"Restore"),Object(b.b)("p",null,"Restore a soft deleted user by ID"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(l.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'e7e16998-3d2e-11ea-be36-01002da17977'")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await Xedi.User.restore('e7e16998-3d2e-11ea-be36-01002da17977');\n")))}O.isMDXComponent=!0},HjAN:function(e,t,a){"use strict";var n=a("vOnD"),b=a("oW+c"),r=a("FH/S"),l=a("q1tI"),c=a.n(l),s=a("8gyx"),i=a("ESUP"),p=a("oo4l"),j=a("Evc+"),O=a("og4h"),m=a("sqpL"),o=Object(n.f)(b.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function g(e){var t=e.items,a=e.depth;return c.a.createElement(o,{as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(b.e,{as:"li",key:e.url,pl:a>0?3:0},c.a.createElement(b.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(g,{items:e.items,depth:a+1}):null)})))}g.defaultProps={depth:0};var d=g,u=Object(n.f)(b.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),N=Object(n.f)(b.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),f=Object(n.f)(b.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),h=Object(n.f)(b.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),y=Object(n.f)(b.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=a.frontmatter,l=n.title,o=n.description,g=n.status,_=n.source,v=n.additionalContributors,x=void 0===v?[]:v;return c.a.createElement(b.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(s.a,{title:l,description:o}),c.a.createElement(i.b,null),c.a.createElement(u,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(b.e,{display:["none",null,null,"block"]},c.a.createElement(j.a,null)),c.a.createElement(N,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(f,{border:0,borderBottom:1,borderRadius:0,pb:2},c.a.createElement(b.m,null,l)),a.tableOfContents.items?c.a.createElement(h,{display:["none",null,"block"],position:"sticky",top:i.a+24,maxHeight:"calc(100vh - "+i.a+"px - 24px)"},c.a.createElement(b.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(d,{items:a.tableOfContents.items})):null,c.a.createElement(y,null,g||_?c.a.createElement(b.k,{mb:3,alignItems:"center"},g?c.a.createElement(m.a,{status:g}):null,c.a.createElement(b.e,{mx:"auto"}),_?c.a.createElement(O.a,{href:_}):null):null,a.tableOfContents.items?c.a.createElement(b.e,{display:["block",null,"none"],mb:3},c.a.createElement(b.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.u,{as:"summary",fontWeight:"bold"},t?c.a.createElement(r.b,{mr:2}):c.a.createElement(r.c,{mr:2}),"Table of contents"),c.a.createElement(b.e,{pt:1},c.a.createElement(d,{items:a.tableOfContents.items})))}))):null,t,c.a.createElement(p.a,{editUrl:a.editUrl,contributors:a.contributors.concat(x.map((function(e){return{login:e}})))})))))}}}]);
//# sourceMappingURL=component---content-usage-users-mdx-b3869cb41ce92e375671.js.map