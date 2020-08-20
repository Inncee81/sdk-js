(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{HjAN:function(e,t,a){"use strict";var n=a("vOnD"),b=a("oW+c"),c=a("FH/S"),l=a("q1tI"),r=a.n(l),i=a("8gyx"),s=a("ESUP"),o=a("oo4l"),p=a("Evc+"),g=a("og4h"),m=a("sqpL"),d=Object(n.f)(b.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function j(e){var t=e.items,a=e.depth;return r.a.createElement(d,{as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(b.e,{as:"li",key:e.url,pl:a>0?3:0},r.a.createElement(b.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(j,{items:e.items,depth:a+1}):null)})))}j.defaultProps={depth:0};var O=j,f=Object(n.f)(b.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),u=Object(n.f)(b.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),N=Object(n.f)(b.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),y=Object(n.f)(b.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),h=Object(n.f)(b.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=a.frontmatter,l=n.title,d=n.description,j=n.status,_=n.source,w=n.additionalContributors,k=void 0===w?[]:w;return r.a.createElement(b.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(i.a,{title:l,description:d}),r.a.createElement(s.b,null),r.a.createElement(f,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(b.e,{display:["none",null,null,"block"]},r.a.createElement(p.a,null)),r.a.createElement(u,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(N,{border:0,borderBottom:1,borderRadius:0,pb:2},r.a.createElement(b.m,null,l)),a.tableOfContents.items?r.a.createElement(y,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(b.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(O,{items:a.tableOfContents.items})):null,r.a.createElement(h,null,j||_?r.a.createElement(b.k,{mb:3,alignItems:"center"},j?r.a.createElement(m.a,{status:j}):null,r.a.createElement(b.e,{mx:"auto"}),_?r.a.createElement(g.a,{href:_}):null):null,a.tableOfContents.items?r.a.createElement(b.e,{display:["block",null,"none"],mb:3},r.a.createElement(b.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.u,{as:"summary",fontWeight:"bold"},t?r.a.createElement(c.b,{mr:2}):r.a.createElement(c.c,{mr:2}),"Table of contents"),r.a.createElement(b.e,{pt:1},r.a.createElement(O,{items:a.tableOfContents.items})))}))):null,t,r.a.createElement(o.a,{editUrl:a.editUrl,contributors:a.contributors.concat(k.map((function(e){return{login:e}})))})))))}},TEms:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a("8o2o"),b=(a("q1tI"),a("7ljp")),c=a("HjAN"),l=a("FH/S"),r=a("Wbzz"),i={},s={_frontmatter:i},o=c.a;function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)(o,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Introduction"),Object(b.b)("p",null,"The stages api gives the ability to fully configure each stage of a workflow ",Object(b.b)(r.Link,{to:"/usage/templates",mdxType:"Link"},"template"),"."),Object(b.b)("h2",null,"Usage"),Object(b.b)("h3",null,"list"),Object(b.b)("p",null,"retreive the list of stages."),Object(b.b)("h4",null,"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const stages = await Xedi.Stages.list();\n")),Object(b.b)("h4",null,"Response"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "_id": "f188a18a-a0fe-11ea-afae-0242ac120002",\n        "name": "My first stage",\n        "workflow_id": "",\n        "document_type_id": "cec6b1ae-a63b-11ea-ae1c-01009cb3fa40",\n        "workflow_type": "template",\n        "state": "pending",\n        "created_at": "2020-05-11 10:27:03",\n        "updated_at": "2020-05-11 10:27:03"\n    }\n    {\n        "_id": "f188a18a-a0fe-11ea-afae-0242ac120002",\n        "name": "My second stage",\n        "workflow_id": "",\n        "document_type_id": "cec6b1ae-a63b-11ea-ae1c-01009cb3fa40",\n        "workflow_type": "template",\n        "state": "pending",\n        "created_at": "2020-05-11 10:27:03",\n        "updated_at": "2020-05-11 10:27:03"\n    }\n]\n')),Object(b.b)("h3",null,"get"),Object(b.b)("p",null,"retrieve a stage by Id."),Object(b.b)("h4",null,"Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(l.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'f188a18a-a0fe-11ea-afae-0242ac120002'")))),Object(b.b)("h4",null,"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const stage = await Xedi.Stages.get('f188a18a-a0fe-11ea-afae-0242ac120002');\n")),Object(b.b)("h4",null,"Response"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "f188a18a-a0fe-11ea-afae-0242ac120002",\n    "name": "My first stage",\n    "workflow_id": "",\n    "document_type_id": "cec6b1ae-a63b-11ea-ae1c-01009cb3fa40",\n    "workflow_type": "template",\n    "state": "pending",\n    "created_at": "2020-05-11 10:27:03",\n    "updated_at": "2020-05-11 10:27:03"\n}\n')),Object(b.b)("h3",null,"Create"),Object(b.b)("p",null,"Create a new stage"),Object(b.b)("h4",null,"Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"name"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Stage name")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"workflow_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(l.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"cec6b1ae-a63b-11ea-ae1c-01009cb3fa40")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"document_type_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"cec6b1ae-a63b-11ea-ae1c-01009cb3fa40 todo change this for a document_type_id")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"workflow_type"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"enum"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(l.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"template")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"state"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"enum"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(l.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"pending")))),Object(b.b)("h4",null,"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const stage = await Xedi.Stages.create(\n    {\n        name: 'new Stage',\n        workflow_id: 'cec6b1ae-a63b-11ea-ae1c-01009cb3fa40',\n        document_type_id: 'cec6b1ae-a63b-11ea-ae1c-01009cb3fa40',\n        workflow_type: 'template',\n        state: 'pending'\n    }\n);\n")),Object(b.b)("h4",null,"Response"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "f188a18a-a0fe-11ea-afae-0242ac120002",\n    "name": "new Stage",\n    "workflow_id": "cec6b1ae-a63b-11ea-ae1c-01009cb3fa40",\n    "document_type_id": "cec6b1ae-a63b-11ea-ae1c-01009cb3fa40",\n    "workflow_type": "template",\n    "state": "pending",\n    "created_at": "2020-05-11 10:27:03",\n    "updated_at": "2020-05-11 10:27:03"\n}\n')),Object(b.b)("h3",null,"Update"),Object(b.b)("p",null,"Update an existing stage."),Object(b.b)("h4",null,"Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"name"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Stage name")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"workflow_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(l.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"cec6b1ae-a63b-11ea-ae1c-01009cb3fa40")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"document_type_id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"cec6b1ae-a63b-11ea-ae1c-01009cb3fa40 todo change this for a document_type_id")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"workflow_type"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"enum"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(l.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"template")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"state"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"enum"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(l.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"pending")))),Object(b.b)("h4",null,"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const stage = await Xedi.Stages.update(\n    {\n        _id: 'f188a18a-a0fe-11ea-afae-0242ac120002'\n        name: 'Updated Stage',\n        workflow_id: 'cec6b1ae-a63b-11ea-ae1c-01009cb3fa40',\n        document_type_id: 'cec6b1ae-a63b-11ea-ae1c-01009cb3fa40',\n        workflow_type: 'template',\n        state: 'pending'\n    }\n);\n")),Object(b.b)("h4",null,"Response"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "f188a18a-a0fe-11ea-afae-0242ac120002",\n    "name": "Updated Stage",\n    "workflow_id": "cec6b1ae-a63b-11ea-ae1c-01009cb3fa40",\n    "document_type_id": "cec6b1ae-a63b-11ea-ae1c-01009cb3fa40",\n    "workflow_type": "template",\n    "state": "pending",\n    "created_at": "2020-05-11 10:27:03",\n    "updated_at": "2020-05-11 10:27:03"\n}\n')),Object(b.b)("h3",null,"Delete"),Object(b.b)("p",null,"Delete a stage."),Object(b.b)("h4",null,"Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"id"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Xuid"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(b.b)(l.a,{color:"green.5",mdxType:"CheckIcon"})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"'f188a18a-a0fe-11ea-afae-0242ac120002'")))),Object(b.b)("h4",null,"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const stage = await Xedi.Stages.delete('f188a18a-a0fe-11ea-afae-0242ac120002');\n")),Object(b.b)("h4",null,"Response"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "_id": "f188a18a-a0fe-11ea-afae-0242ac120002"  \n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-usage-stages-mdx-b250e7d94734f6510c5d.js.map