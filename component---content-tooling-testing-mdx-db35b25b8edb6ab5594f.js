(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{800:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return m}),n.d(t,"default",function(){return b});n(8),n(9),n(7),n(15),n(16),n(0);var a=n(114),o=n(808),i=n(4),r=n(12),s=n(69),l=n(42),c=n(45);var m={},p={_frontmatter:m},u=o.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(u,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Testing our code often feels like a chore, or something we leave until last. For most, testing is the mashed potatoes of development. It makes up the majority of the task and isn't the most attractive thing on our plate."),Object(a.b)("p",null,"In this section we'll look at using unit tests to test our code to provide confidence that any changes we make don't break other behaviours within the SDK."),Object(a.b)(i.j,{mdxType:"Flash"},Object(a.b)(r.h,{mr:2,mdxType:"InfoIcon"}),"If you are looking for information on manual testing, read the ",Object(a.b)(i.o,{href:"/tooling/debugging",mdxType:"Link"},"debugging")," section."),Object(a.b)("h2",null,"Directory Structure"),Object(a.b)("p",null,"Testing (at the time of writing) focusses on the behaviors of the SDK, rather than a broad spread approach. This maps to how the files and directories are structured. Rather than mimicking the ",Object(a.b)("inlineCode",{parentName:"p"},"src")," directory structure, the directories are structured based on the hierarchy at runtime. So for ",Object(a.b)("inlineCode",{parentName:"p"},"Xedi.Auth"),", you would find those tests in ",Object(a.b)("inlineCode",{parentName:"p"},"tests/Unit/Auth")," and so on."),Object(a.b)("p",null,"Through-out this page, I will continue to use Marvel's Avengers as a subject material. I'm going to test an API that lists the members of the Avengers."),Object(a.b)("p",null,"First I need a directory, so I will create ",Object(a.b)("inlineCode",{parentName:"p"},"tests/Unit/Avengers"),"."),Object(a.b)("p",null,"Next I need to test each function in my Avengers API. At present I have one function, ",Object(a.b)("inlineCode",{parentName:"p"},"list()"),", so I create ",Object(a.b)("inlineCode",{parentName:"p"},"List.test.ts")," in my ",Object(a.b)("inlineCode",{parentName:"p"},"Avengers")," directory."),Object(a.b)("h2",null,"Authoring a test"),Object(a.b)("p",null,"Once I have my file, I can start writing my test. Because we are using ",Object(a.b)(l.a,{href:"https://mochajs.org/",mdxType:"ExternalLink"},"MochaJS")," as a testing framework we get a couple of functions included by default."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),'import { assert } from \'chai\';\nimport { Collection, Avenger } from \'../../../src/Models/Models\';\nimport Avengers from \'../../../src/Services/Avengers\';\nimport Axios, { AxiosInstance } from \'axios\';\nimport Config from \'../../../src/Config/Config;\nimport JsonResponse from \'../../../src/Interfaces/JsonResponse;\nimport nock from \'nock\';\n\ndescribe(\'Avengers@list\', () => {\n    it(\'should return a list of avengers\', async () => {\n        const positiveResponse: JsonResponse<Collection<Avenger>> = {\n            data: [\n                {\n                    "_id": 1,\n                    "email": "t.stark@avengers.org",\n                    "first_name": "Anthony",\n                    "last_name": "Stark",\n                    "job_title": "Iron Man"\n                },\n                {\n                    "_id": 2,\n                    "email": "s.rogers@avengers.org",\n                    "first_name": "Steve",\n                    "last_name": "Rogers",\n                    "job_title": "Captain America"\n                }\n            ]\n        };\n\n        nock("https://api.xedi.com")\n            .get("/1/avengers")\n            .reply(200, positiveResponse);\n\n        const configBag = new Config();\n        const httpClient: AxiosInstance = new Axios({\n            baseUrl: \'https://api.xedi.com\'\n        });\n\n        const avengersAPI = new Avengers(configBag, httpClient);\n\n        const result = await avengersApi.list();\n\n        assert.isArray(result);\n        assert.lengthOf(result, 2);\n    });\n});\n')),Object(a.b)(c.a,{mdxType:"Caption"},"tests/Unit/Avengers/List.test.ts"),Object(a.b)("p",null,"Lets examine this test."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Below the ",Object(a.b)("inlineCode",{parentName:"p"},"import")," statements is the entrypoint for the framework. In this file we are describing the list functionality of the Avengers API. Therefore, ",Object(a.b)("inlineCode",{parentName:"p"},"Avengers@list")," is what will appear in the results output.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"We have one behavioural test, in which we assert ",Object(a.b)("inlineCode",{parentName:"p"},"it should return a list of avengers"),". Because this method contains a ",Object(a.b)(i.u,{as:"em",mdxType:"Text"},"asynchronous")," http request, we denote that the this test is also asynchronous with the ",Object(a.b)("inlineCode",{parentName:"p"},"async")," keyword.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Personal preference, I have added a fixture at the top of the test. This could easily be done inline or in a separate file.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"We use ",Object(a.b)(l.a,{href:"https://github.com/nock/nock",mdxType:"ExternalLink"},"Nock")," to intercept requests to the API Gateway and return predefined responses to matching endpoints.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"We then need to setup our class. This concludes the the setup phase of our tests.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"We invoke the subject function ",Object(a.b)("inlineCode",{parentName:"p"},"list()")," and assign the response to a ",Object(a.b)("inlineCode",{parentName:"p"},"const")," value.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"We enter the assert phase, and utilize functions from ",Object(a.b)(l.a,{href:"https://chaijs.com",mdxType:"ExternalLink"},"Chai.js")," to test the response."))),Object(a.b)(i.j,{scheme:"yellow",mdxType:"Flash"},Object(a.b)(r.h,{mr:2,mdxType:"InfoIcon"}),"It's important to remember that Mocha will pass any test that doesn't error. This is the primary reason I've used ",Object(a.b)(s.a,{mdxType:"InlineCode"},"async/await")," rather than ",Object(a.b)(s.a,{mdxType:"InlineCode"},"then/catch"),"."),Object(a.b)("h2",null,"Running your test"),Object(a.b)("p",null,"Now that I've written my test, lets see if it will run. Simply run: ",Object(a.b)(s.a,{mdxType:"InlineCode"},"npm run test"),"."),Object(a.b)("p",null,"I will also check my code conforms to best-practice. For this run: ",Object(a.b)(s.a,{mdxType:"InlineCode"},"npm run lint:tests"),". If you want to know more about this, read the section on ",Object(a.b)(i.o,{href:"/tooling/linting",mdxType:"Link"},"Linting"),"."))}b.isMDXComponent=!0},808:function(e,t,n){"use strict";var a=n(2),o=n(4),i=n(12),r=n(0),s=n.n(r),l=n(126),c=n(72),m=n(189),p=n(127),u=n(187),b=n(188),d=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function h(e){var t=e.items,n=e.depth;return s.a.createElement(d,{as:"ul",m:0,p:0},t.map(function(e){return s.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},s.a.createElement(o.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?s.a.createElement(h,{items:e.items,depth:n+1}):null)}))}h.defaultProps={depth:0};var f=h,g=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),y=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),j=Object(a.f)(o.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),O=Object(a.f)(o.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),v=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,r=a.title,d=a.description,h=a.status,w=a.source,x=a.additionalContributors,k=void 0===x?[]:x;return s.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},s.a.createElement(l.a,{title:r,description:d}),s.a.createElement(c.b,null),s.a.createElement(g,{flex:"1 1 auto",flexDirection:"row"},s.a.createElement(o.e,{display:["none",null,null,"block"]},s.a.createElement(p.a,null)),s.a.createElement(y,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},s.a.createElement(j,{border:0,borderBottom:1,borderRadius:0,pb:2},s.a.createElement(o.m,null,r)),n.tableOfContents.items?s.a.createElement(O,{display:["none",null,"block"],position:"sticky",top:c.a+24,maxHeight:"calc(100vh - "+c.a+"px - 24px)"},s.a.createElement(o.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),s.a.createElement(f,{items:n.tableOfContents.items})):null,s.a.createElement(v,null,h||w?s.a.createElement(o.k,{mb:3,alignItems:"center"},h?s.a.createElement(b.a,{status:h}):null,s.a.createElement(o.e,{mx:"auto"}),w?s.a.createElement(u.a,{href:w}):null):null,n.tableOfContents.items?s.a.createElement(o.e,{display:["block",null,"none"],mb:3},s.a.createElement(o.h,null,function(e){var t=e.open;return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.u,{as:"summary",fontWeight:"bold"},t?s.a.createElement(i.b,{mr:2}):s.a.createElement(i.c,{mr:2}),"Table of contents"),s.a.createElement(o.e,{pt:1},s.a.createElement(f,{items:n.tableOfContents.items})))})):null,t,s.a.createElement(m.a,{editUrl:n.editUrl,contributors:n.contributors.concat(k.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-tooling-testing-mdx-db35b25b8edb6ab5594f.js.map