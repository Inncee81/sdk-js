(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"5G8v":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a("8o2o"),r=(a("q1tI"),a("7ljp")),b=a("HjAN"),s=a("FH/S"),c=a("oW+c"),l=a("wITj"),i={},o={_frontmatter:i},g=b.a;function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(g,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Introduction"),Object(r.b)("p",null,"The Businesses API allows you to create and access information about businesses."),Object(r.b)("h2",null,"Usage"),Object(r.b)(c.k,{alignItems:"center",mdxType:"Flex"},Object(r.b)(l.c,{mdxType:"H3"},"List"),Object(r.b)(c.e,{mx:"auto",mdxType:"Box"}),Object(r.b)(c.n,{bg:"#A575FF",mdxType:"Label"},"Pagination Enabled")),Object(r.b)("p",null,"List all Businesses that the user has the authority to see."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"pageNumber"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Number"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"1")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const businesses = await Xedi.Businesses.list();\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Response")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "current_page": 1,\n    "data": [\n        {\n            "_id": "c52abc50-b499-11ea-a48c-0100f1a50c6e",\n            "business_name": "Avengers",\n            "address_1": "TOP_SECRET",\n            "address_2": "TOP_SECRET",\n            "address_3": "New York",\n            "address_4": null,\n            "post_code": "TOP_SECRET",\n            "currency": "usd",\n            "vat_code": "123",\n            "invoice_name": "123",\n            "country_code": "USA",\n            "contact_name": "Anthony Stark",\n            "contact_email": "t.stark@avengers.org",\n            "contact_no": "(970) 517-1743 x67916",\n            "website": "https://avengers.org",\n            "logo": "https://assets.avengers.org/images/logo.png",\n            "requires_gln": false,\n            "gs1_prefix": "030",\n            "slug": "avengers",\n            "external": false,\n            "public": true\n        },\n        {\n            "_id": "d1dfb302-b53d-11ea-95d2-0100f1a50c6e",\n            "business_name": "Hydra",\n            "address_1": "EVERYWHERE",\n            "address_2": "EVERYWHERE",\n            "address_3": "EVERYWHERE",\n            "address_4": null,\n            "post_code": "EVERYWHERE",\n            "currency": "usd",\n            "vat_code": "456",\n            "invoice_name": "456",\n            "country_code": "USA",\n            "contact_name": null,\n            "contact_email": null,\n            "contact_no": null,\n            "website": null,\n            "logo": null,\n            "requires_gln": false,\n            "gs1_prefix": "030",\n            "slug": "hydra",\n            "external": false,\n            "public": false\n        }\n    ],\n    "first_page_url": "https://api.xedi.com/1/businesses?page=1",\n    "from": 1,\n    "last_page": "https://api.xedi.com/1/businesses?page=1",\n    "last_page_url": null,\n    "next_page_url": null,\n    "path": "https://api.xedi.com/1/businesses",\n    "per_page": 15,\n    "prev_page_url": null,\n    "to": 2,\n    "total": 2\n}\n')),Object(r.b)("h3",null,"Get"),Object(r.b)("p",null,"Get a Business by ID."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"business_id"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"UUID"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(r.b)(s.a,{color:"green.5",mdxType:"CheckIcon"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"c52abc50-b499-11ea-a48c-0100f1a50c6e")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const business = await Xedi.Businsses.get('c52abc50-b499-11ea-a48c-0100f1a50c6e');\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Response")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "c52abc50-b499-11ea-a48c-0100f1a50c6e",\n    "business_name": "Avengers",\n    "address_1": "TOP_SECRET",\n    "address_2": "TOP_SECRET",\n    "address_3": "New York",\n    "address_4": null,\n    "post_code": "TOP_SECRET",\n    "currency": "usd",\n    "vat_code": "123",\n    "invoice_name": "123",\n    "country_code": "USA",\n    "contact_name": "Anthony Stark",\n    "contact_email": "t.stark@avengers.org",\n    "contact_no": "(970) 517-1743 x67916",\n    "website": "https://avengers.org",\n    "logo": "https://assets.avengers.org/images/logo.png",\n    "requires_gln": false,\n    "gs1_prefix": "030",\n    "slug": "avengers",\n    "external": false,\n    "public": true\n}\n')),Object(r.b)("h3",null,"Create"),Object(r.b)("p",null,"Create a Business."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"business_name"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(r.b)(s.a,{color:"green.5",mdxType:"CheckIcon"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Microsoft")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"address_1"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Microsoft Corporation")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"address_2"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"One Microsoft Way")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"address_3"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Redmond")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"address_4"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"WA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"post_code"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"98052-6399")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"currency"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String (ISO-4217)"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"usd")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"vat_code"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"91-1144442")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"invoice_name"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"MSFT")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"country_code"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String (ISO-3166)"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(r.b)(s.a,{color:"green.5",mdxType:"CheckIcon"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"USA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"contact_name"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Satya Nadella")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"contact_email"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object.assign({parentName:"td"},{href:"mailto:s.nadella@microsoft.com"}),"s.nadella@microsoft.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"contact_no"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"(425) 882-8080")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"website"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object.assign({parentName:"td"},{href:"https://www.microsoft.com"}),"https://www.microsoft.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"logo"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object.assign({parentName:"td"},{href:"https://assets.microsoft.com/logo.png"}),"https://assets.microsoft.com/logo.png"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"requires_gln"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Boolean"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"gs1_prefix"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Number"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"030")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"slug"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"MSFT")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"external"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Boolean"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"public"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Boolean"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"true")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'const business = Xedi.Businesses.create({\n    business_name: "Microsoft",\n    address_1: "Microsof Corporation",\n    address_2: "One Microsoft Way",\n    address_3: "Redmond",\n    address_4: "WA",\n    post_code: "98052-6399",\n    currency: "usd",\n    vat_code: "91-1144442",\n    invoice_name: "MSFT",\n    country_code: "USA",\n    contact_name: "Satya Nadella",\n    contact_email: "s.nadella@microsoft.com",\n    contact_no: "(425) 882-8080",\n    website: "https://www.microsoft.com",\n    logo: "https://assets.microsoft.com/logo.png",\n    requires_gln: false,\n    gs1_prefix: 030,\n    slug: "MSFT",\n    external: false,\n    public: true,\n});\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Response")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "3f580f3e-b542-11ea-a254-0100f1a50c6e",\n    "business_name": "Microsoft",\n    "address_1": "Microsof Corporation",\n    "address_2": "One Microsoft Way",\n    "address_3": "Redmond",\n    "address_4": "WA",\n    "post_code": "98052-6399",\n    "currency": "usd",\n    "vat_code": "91-1144442",\n    "invoice_name": "MSFT",\n    "country_code": "USA",\n    "contact_name": "Satya Nadella",\n    "contact_email": "s.nadella@microsoft.com",\n    "contact_no": "(425) 882-8080",\n    "website": "https://www.microsoft.com",\n    "logo": "https://assets.microsoft.com/logo.png",\n    "requires_gln": false,\n    "gs1_prefix": 030,\n    "slug": "MSFT",\n    "external": false,\n    "public": true,\n    "created_at": "2020-06-23 12:10:16",\n    "updated_at": null\n}\n')),Object(r.b)(c.k,{alignItems:"center",mdxType:"Flex"},Object(r.b)(l.c,{mdxType:"H3"},"Get by User"),Object(r.b)(c.e,{mx:"auto",mdxType:"Box"}),Object(r.b)(c.n,{bg:"#A575FF",mdxType:"Label"},"Pagination Enabled")),Object(r.b)("p",null,"List all the businesses a particular user is associated with."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"user_id"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"UUID"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(r.b)(s.a,{color:"green.5",mdxType:"CheckIcon"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"f3ce14b8-b542-11ea-aded-01002da17977")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"pageNumber"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"number"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"1")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const businesses = await Xedi.Businesses.getByUser('f3ce14b8-b542-11ea-aded-01002da17977');\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Response")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "current_page": 1,\n    "data": [\n        {\n            "_id": "c52abc50-b499-11ea-a48c-0100f1a50c6e",\n            "business_name": "Avengers",\n            "address_1": "TOP_SECRET",\n            "address_2": "TOP_SECRET",\n            "address_3": "New York",\n            "address_4": null,\n            "post_code": "TOP_SECRET",\n            "currency": "usd",\n            "vat_code": "123",\n            "invoice_name": "123",\n            "country_code": "USA",\n            "contact_name": "Anthony Stark",\n            "contact_email": "t.stark@avengers.org",\n            "contact_no": "(970) 517-1743 x67916",\n            "website": "https://avengers.org",\n            "logo": "https://assets.avengers.org/images/logo.png",\n            "requires_gln": false,\n            "gs1_prefix": "030",\n            "slug": "avengers",\n            "external": false,\n            "public": true\n        }\n    ],\n    "first_page_url": "https://api.xedi.com/1/businesses?page=1",\n    "from": 1,\n    "last_page": "https://api.xedi.com/1/businesses?page=1",\n    "last_page_url": null,\n    "next_page_url": null,\n    "path": "https://api.xedi.com/1/businesses",\n    "per_page": 15,\n    "prev_page_url": null,\n    "to": 1,\n    "total": 1\n}\n')))}p.isMDXComponent=!0},HjAN:function(e,t,a){"use strict";var n=a("vOnD"),r=a("oW+c"),b=a("FH/S"),s=a("q1tI"),c=a.n(s),l=a("8gyx"),i=a("ESUP"),o=a("oo4l"),g=a("Evc+"),p=a("og4h"),O=a("sqpL"),m=Object(n.f)(r.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function j(e){var t=e.items,a=e.depth;return c.a.createElement(m,{as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(r.e,{as:"li",key:e.url,pl:a>0?3:0},c.a.createElement(r.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(j,{items:e.items,depth:a+1}):null)})))}j.defaultProps={depth:0};var d=j,u=Object(n.f)(r.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),N=Object(n.f)(r.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),f=Object(n.f)(r.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),_=Object(n.f)(r.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),y=Object(n.f)(r.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=a.frontmatter,s=n.title,m=n.description,j=n.status,h=n.source,E=n.additionalContributors,x=void 0===E?[]:E;return c.a.createElement(r.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(l.a,{title:s,description:m}),c.a.createElement(i.b,null),c.a.createElement(u,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(r.e,{display:["none",null,null,"block"]},c.a.createElement(g.a,null)),c.a.createElement(N,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(f,{border:0,borderBottom:1,borderRadius:0,pb:2},c.a.createElement(r.m,null,s)),a.tableOfContents.items?c.a.createElement(_,{display:["none",null,"block"],position:"sticky",top:i.a+24,maxHeight:"calc(100vh - "+i.a+"px - 24px)"},c.a.createElement(r.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(d,{items:a.tableOfContents.items})):null,c.a.createElement(y,null,j||h?c.a.createElement(r.k,{mb:3,alignItems:"center"},j?c.a.createElement(O.a,{status:j}):null,c.a.createElement(r.e,{mx:"auto"}),h?c.a.createElement(p.a,{href:h}):null):null,a.tableOfContents.items?c.a.createElement(r.e,{display:["block",null,"none"],mb:3},c.a.createElement(r.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.u,{as:"summary",fontWeight:"bold"},t?c.a.createElement(b.b,{mr:2}):c.a.createElement(b.c,{mr:2}),"Table of contents"),c.a.createElement(r.e,{pt:1},c.a.createElement(d,{items:a.tableOfContents.items})))}))):null,t,c.a.createElement(o.a,{editUrl:a.editUrl,contributors:a.contributors.concat(x.map((function(e){return{login:e}})))})))))}}}]);
//# sourceMappingURL=component---content-usage-businesses-mdx-f0b9ab0ef3d305662405.js.map