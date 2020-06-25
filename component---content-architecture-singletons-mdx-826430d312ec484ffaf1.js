(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{833:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return s}),n.d(t,"default",function(){return p});n(9),n(10),n(8),n(13),n(17),n(0);var a=n(118),l=n(843),o=n(34),i=n(4),r=n(11),c=n(36);var s={},m={_frontmatter:s},b=l.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(b,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To maintain configuration and state, whilst making the API easy to use, singletons have been employed. This section will go demonstrate the usage of this pattern within the SDK and provide guidance on its use for development."),Object(a.b)("h2",null,"Registration"),Object(a.b)("p",null,"To use register a singleton for use, first it needs a factory function binding to the ",Object(a.b)("inlineCode",{parentName:"p"},"Container")," instance."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"this.singleton('myclass', function (app: ContainerInterface, config: Config) {\n    return new MyClass();\n});\n")),Object(a.b)(o.a,{mdxType:"Caption"},"Binding a factory function to the abstract key 'myclass'"),Object(a.b)("p",null,"The factory function takes two parameters, the ",Object(a.b)("inlineCode",{parentName:"p"},"Container")," instance and an instance of the ",Object(a.b)("inlineCode",{parentName:"p"},"Config"),' bag. What is returned is known as the "Concrete" instance.'),Object(a.b)("p",null,'The "abstract" is the key that the binding will be accessible by. This should be a string that is unique to this factory.'),Object(a.b)(i.j,{scheme:"yellow",mdxType:"Flash"},Object(a.b)(r.h,{mr:1,mdxType:"InfoIcon"}),"Binding an abstract with a non-unique name will overwrite the previous factory"),Object(a.b)("h2",null,"Resolution"),Object(a.b)("p",null,"Retrieving an instance from the ",Object(a.b)("inlineCode",{parentName:"p"},"Container")," is simple."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"this.resolve<MyClass>('myclass');\n")),Object(a.b)(o.a,{mdxType:"Caption"},"Retrieving an instance of MyClass from the Container"),Object(a.b)("p",null,"When a Concrete instance is returned, it is stored within the ",Object(a.b)("inlineCode",{parentName:"p"},"Container")," against the abstract. The next time the ",Object(a.b)("inlineCode",{parentName:"p"},"resolve")," method is run, it will retrieve the concrete instance from the store."),Object(a.b)("h2",null,"Resetting"),Object(a.b)("p",null,"It is sometimes necessary to refresh a concrete instance."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"this.resetInstance('myclass');\n")),Object(a.b)(o.a,{mdxType:"Caption"},"Resetting 'myclass'"),Object(a.b)("p",null,"Invoking ",Object(a.b)(c.a,{mdxType:"InlineCode"},"resetInstance")," will clear the concrete instance from the store, and then invoke the associated factory."),Object(a.b)(i.j,{mdxType:"Flash"},Object(a.b)(r.h,{mr:1,mdxType:"InfoIcon"}),Object(a.b)(i.u,{mdxType:"Text"},"Don't confuse ",Object(a.b)(c.a,{mdxType:"InlineCode"},"resolveInstance")," and ",Object(a.b)(c.a,{mdxType:"InlineCode"},"resolve"),". ",Object(a.b)(c.a,{mdxType:"InlineCode"},"resolveInstance")," is a state method which can be used to resolve the active container for static methods."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"static get MyClass(): MyClass {\n    return this.resolveInstance()\n        .resolve('myclass');\n}\n")),Object(a.b)(o.a,{mdxType:"Caption"},"Resolving 'myclass' statically")))}p.isMDXComponent=!0},843:function(e,t,n){"use strict";var a=n(2),l=n(4),o=n(11),i=n(0),r=n.n(i),c=n(130),s=n(76),m=n(199),b=n(131),p=n(197),u=n(198),d=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function h(e){var t=e.items,n=e.depth;return r.a.createElement(d,{as:"ul",m:0,p:0},t.map(function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.o,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(h,{items:e.items,depth:n+1}):null)}))}h.defaultProps={depth:0};var f=h,g=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),y=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),O=Object(a.f)(l.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),j=Object(a.f)(l.p).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),C=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,i=a.title,d=a.description,h=a.status,v=a.source,x=a.additionalContributors,w=void 0===x?[]:x;return r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:i,description:d}),r.a.createElement(s.b,null),r.a.createElement(g,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(b.a,null)),r.a.createElement(y,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(O,{border:0,borderBottom:1,borderRadius:0,pb:2},r.a.createElement(l.m,null,i)),n.tableOfContents.items?r.a.createElement(j,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.u,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(f,{items:n.tableOfContents.items})):null,r.a.createElement(C,null,h||v?r.a.createElement(l.k,{mb:3,alignItems:"center"},h?r.a.createElement(u.a,{status:h}):null,r.a.createElement(l.e,{mx:"auto"}),v?r.a.createElement(p.a,{href:v}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.u,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.b,{mr:2}):r.a.createElement(o.c,{mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(f,{items:n.tableOfContents.items})))})):null,t,r.a.createElement(m.a,{editUrl:n.editUrl,contributors:n.contributors.concat(w.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-architecture-singletons-mdx-826430d312ec484ffaf1.js.map