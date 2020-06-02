(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{755:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c}),n.d(t,"default",function(){return p});n(10),n(11),n(7),n(13),n(12),n(0);var a=n(104),r=n(758),i=n(5),s=n(46),o=n(73);var c={},l={_frontmatter:c},m=r.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.c)(m,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.c)("p",null,"Testing our code often feels like a chore, or something we leave until last. For most, testing is the mashed potatoes of development. It makes up the majority of the task and isn't the most attractive thing on our plate."),Object(a.c)("p",null,"In this section we'll look at using unit tests to test our code to provide confidence that any changes we make don't break other behaviours within the SDK."),Object(a.c)(i.i,{mdxType:"Flash"},Object(a.c)(s.d,{mr:2,mdxType:"InfoIcon"}),"If you are looking for information on manual testing, read the ",Object(a.c)(i.l,{href:"/tooling/debugging",mdxType:"Link"},"debugging")," section."),Object(a.c)("h2",null,"Directory Structure"),Object(a.c)("p",null,"Testing (at the time of writing) focusses on the behaviors of the SDK, rather than a broad spread approach. This maps to how the files and directories are structured. Rather than mimicking the ",Object(a.c)("inlineCode",{parentName:"p"},"src")," directory structure, the directories are structured based on the hierarchy at runtime. So for ",Object(a.c)("inlineCode",{parentName:"p"},"Xedi.Auth"),", you would find those tests in ",Object(a.c)("inlineCode",{parentName:"p"},"tests/Unit/Auth")," and so on."),Object(a.c)("p",null,"Through-out this page, I will continue to use Marvel's Avengers as a subject material. I'm going to test an API that lists the members of the Avengers."),Object(a.c)("p",null,"First I need a directory, so I will create ",Object(a.c)("inlineCode",{parentName:"p"},"tests/Unit/Avengers"),"."),Object(a.c)("p",null,"Next I need to test each function in my Avengers API. At present I have one function, ",Object(a.c)("inlineCode",{parentName:"p"},"list()"),", so I create ",Object(a.c)("inlineCode",{parentName:"p"},"List.test.ts")," in my ",Object(a.c)("inlineCode",{parentName:"p"},"Avengers")," directory."),Object(a.c)("h2",null,"Authoring a test"),Object(a.c)("p",null,"Once I have my file, I can start writing my test. Because we are using ",Object(a.c)(i.l,{href:"https://mochajs.org/",mdxType:"Link"},"MochaJS")," as a testing framework we get a couple of functions included by default."),Object(a.c)("pre",null,Object(a.c)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),'import { assert } from \'chai\';\nimport { Collection, Avenger } from \'../../../src/Models/Models\';\nimport Avengers from \'../../../src/Services/Avengers\';\nimport Axios, { AxiosInstance } from \'axios\';\nimport Config from \'../../../src/Config/Config;\nimport JsonResponse from \'../../../src/Interfaces/JsonResponse;\nimport nock from \'nock\';\n\ndescribe(\'Avengers@list\', () => {\n    it(\'should return a list of avengers\', async () => {\n        const positiveResponse: JsonResponse<Collection<Avenger>> = {\n            data: [\n                {\n                    "_id": 1,\n                    "email": "t.stark@avengers.org",\n                    "first_name": "Anthony",\n                    "last_name": "Stark",\n                    "job_title": "Iron Man"\n                },\n                {\n                    "_id": 2,\n                    "email": "s.rogers@avengers.org",\n                    "first_name": "Steve",\n                    "last_name": "Rogers",\n                    "job_title": "Captain America"\n                }\n            ]\n        };\n\n        nock("https://api.xedi.com")\n            .get("/1/avengers")\n            .reply(200, positiveResponse);\n\n        const configBag = new Config();\n        const httpClient: AxiosInstance = new Axios({\n            baseUrl: \'https://api.xedi.com\'\n        });\n\n        const avengersAPI = new Avengers(configBag, httpClient);\n\n        const result = await avengersApi.list();\n\n        assert.isArray(result);\n        assert.lengthOf(result, 2);\n    });\n});\n')),Object(a.c)(i.q,{as:"p",mt:2,mb:3,fontSize:1,color:"gray.5",mdxType:"Text"},"tests/Unit/Avengers/List.test.ts"),Object(a.c)("p",null,"Lets examine this test."),Object(a.c)("ul",null,Object(a.c)("li",{parentName:"ul"},Object(a.c)("p",{parentName:"li"},"Below the ",Object(a.c)("inlineCode",{parentName:"p"},"import")," statements is the entrypoint for the framework. In this file we are describing the list functionality of the Avengers API. Therefore, ",Object(a.c)("inlineCode",{parentName:"p"},"Avengers@list")," is what will appear in the results output.")),Object(a.c)("li",{parentName:"ul"},Object(a.c)("p",{parentName:"li"},"We have one behavioural test, in which we assert ",Object(a.c)("inlineCode",{parentName:"p"},"it should return a list of avengers"),". Because this method contains a ",Object(a.c)(i.q,{as:"em",mdxType:"Text"},"asynchronous")," http request, we denote that the this test is also asynchronous with the ",Object(a.c)("inlineCode",{parentName:"p"},"async")," keyword.")),Object(a.c)("li",{parentName:"ul"},Object(a.c)("p",{parentName:"li"},"Personal preference, I have added a fixture at the top of the test. This could easily be done inline or in a separate file.")),Object(a.c)("li",{parentName:"ul"},Object(a.c)("p",{parentName:"li"},"We use ",Object(a.c)(i.l,{href:"https://github.com/nock/nock",mdxType:"Link"},"Nock")," to intercept requests to the API Gateway and return predefined responses to matching endpoints.")),Object(a.c)("li",{parentName:"ul"},Object(a.c)("p",{parentName:"li"},"We then need to setup our class. This concludes the the setup phase of our tests.")),Object(a.c)("li",{parentName:"ul"},Object(a.c)("p",{parentName:"li"},"We invoke the subject function ",Object(a.c)("inlineCode",{parentName:"p"},"list()")," and assign the response to a ",Object(a.c)("inlineCode",{parentName:"p"},"const")," value.")),Object(a.c)("li",{parentName:"ul"},Object(a.c)("p",{parentName:"li"},"We enter the assert phase, and utilize functions from ",Object(a.c)(i.l,{href:"https://chaijs.com",mdxType:"Link"},"Chai.js")," to test the response."))),Object(a.c)(i.i,{scheme:"yellow",mdxType:"Flash"},Object(a.c)(s.d,{mr:2,mdxType:"InfoIcon"}),"It's important to remember that Mocha will pass any test that doesn't error. This is the primary reason I've used ",Object(a.c)(o.a,{mdxType:"InlineCode"},"async/await")," rather than ",Object(a.c)(o.a,{mdxType:"InlineCode"},"then/catch"),"."),Object(a.c)("h2",null,"Running your test"),Object(a.c)("p",null,"Now that I've written my test, lets see if it will run. Simply run: ",Object(a.c)(o.a,{mdxType:"InlineCode"},"npm run test"),"."),Object(a.c)("p",null,"I will also check my code conforms to best-practice. For this run: ",Object(a.c)(o.a,{mdxType:"InlineCode"},"npm run lint:tests"),". If you want to know more about this, read the section on ",Object(a.c)(i.l,{href:"/tooling/linting",mdxType:"Link"},"Linting"),"."))}p.isMDXComponent=!0},758:function(e,t,n){"use strict";var a=n(104),r=n(5),i=n(44),s=n(0),o=n.n(s),c=n(92),l=n(118),m=n(120),p=n(119);function u(e){var t=e.items,n=o.a.useContext(a.a),r=n.ul,i=void 0===r?"ul":r,s=n.li,c=void 0===s?"li":s,l=n.a,m=void 0===l?"a":l;return o.a.createElement(i,null,t.map(function(e){return o.a.createElement(c,{key:e.url},o.a.createElement(m,{href:e.url},e.title),e.items?o.a.createElement(u,{items:e.items}):null)}))}var h=function(e){var t=e.items,n=o.a.useContext(a.a).h2,r=void 0===n?"h2":n;return o.a.createElement(o.a.Fragment,null,o.a.createElement(r,null,"Table of contents"),o.a.createElement(u,{items:t}))},d=n(170);t.a=function(e){var t=e.children,n=e.pageContext,s=o.a.useContext(a.a).h1,u=void 0===s?"h1":s;return o.a.createElement(r.j,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(l.a,{title:n.frontmatter.title,description:n.frontmatter.description}),o.a.createElement(m.a,null),o.a.createElement(r.j,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(r.e,{display:["none",null,null,"block"]},o.a.createElement(p.a,null)),o.a.createElement(c.a,null,o.a.createElement(u,null,n.frontmatter.title),n.frontmatter.status?o.a.createElement(r.e,{mb:4},o.a.createElement(d.a,{status:n.frontmatter.status})):null,n.tableOfContents.items?o.a.createElement(h,{items:n.tableOfContents.items}):null,t,n.editUrl?o.a.createElement(r.e,{my:6},o.a.createElement(r.l,{href:n.editUrl},o.a.createElement(r.p,{icon:i.e,mr:2}),"Edit this page on GitHub")):null)))}}}]);
//# sourceMappingURL=component---content-tooling-testing-mdx-c20ddf05246e0f36c283.js.map