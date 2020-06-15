(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{801:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c}),n.d(t,"default",function(){return m});n(8),n(9),n(7),n(12),n(16),n(0);var a=n(114),i=n(817),r=n(4),o=n(13),l=n(45),s=n(26);var c={},d={_frontmatter:c},u=i.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(u,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)(s.a,{href:"https://github.com/xedi/sdk-js/tree/master/src/Utils",mdxType:"ExternalLink"},Object(a.b)("inlineCode",{parentName:"p"},"Utils"))," directory contains a number of classes which provide help functionality or features when developing aspects of the SDK."),Object(a.b)("h2",null,"AuthenticateHeaderParser"),Object(a.b)("p",null,"As part of our ",Object(a.b)(r.n,{href:"/architecture/authentication",mdxType:"Link"},"authentication flow")," the ",Object(a.b)(s.a,{href:"https://tools.ietf.org/html/rfc6750#page-9",mdxType:"ExternalLink"},Object(a.b)("inlineCode",{parentName:"p"},"WWW-Authenticate")," header")," is returned from the API Gateway. This is provided to us as a single string which makes it difficult to parse."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'Bearer realm="api.xedi",\n    error="invalid_token",\n    error_description="The access token expired"\n')),Object(a.b)(l.a,{mdxType:"Caption"},"Example WWW-Authenticate header"),Object(a.b)(r.t,{as:"p",mb:3,mdxType:"Text"},"To simplify the logic of interogating this string, the `AuthenticateHeaderParser` was devised."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'const authenticateHeader = AuthenticateHeaderParser.parse(\n    headers[\'www-authenticate\']\n);\n\nauthenticateHeader.realm; // "api.xedi"\n\nauthenticateHeader.error; // "invalid_token"\n\nauthenticateHeader.error_description; // "The access token expired"\n')),Object(a.b)(s.a,{href:"https://github.com/xedi/sdk-js/blob/master/src/Utils/AuthenticateHeaderParser.ts",mdxType:"ExternalLink"},Object(a.b)(o.e,{mr:1,mdxType:"CodeIcon"}),"View source"),Object(a.b)("h2",null,"XUID"),Object(a.b)("p",null,"Identifing Entities without explicit type attributes across an eco-system like XEDI is problematic at best, impossible in the main. At XEDI, we found the answer by introducing an identifier that could be typed. ",Object(a.b)(s.a,{href:"https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)",mdxType:"ExternalLink"},"Version 1 UUIDs"),' are considered inherently insecure due to the use of the issuing computers MAC address as the "node" component. We seized this vulnerability and turned it on it\'s head by replacing the node of a UUIDv1 with our own series of hashes. Each hash is tied to an identifier which a service can use to determine what a generic entity is.'),Object(a.b)(s.a,{href:"https://github.com/xedi/sdk-js/blob/master/src/Utils/Xuid.ts",mdxType:"ExternalLink"},Object(a.b)(o.e,{mr:1,mdxType:"CodeIcon"}),"View source"),Object(a.b)("h2",null,"Supported XUIDs"),Object(a.b)("p",null,"As above, at XEDI we utilitize a series of known hashes to identify anonymized json objects as certain entities. In TypeScript, we represent these as an Enum known as SupportedXuid. Because this has little to no practical runtime use, we don't include the associated hashes with the inclusion of a supported type."),Object(a.b)(s.a,{href:"https://github.com/xedi/sdk-js/blob/master/src/Utils/Xuid.ts",mdxType:"ExternalLink"},Object(a.b)(o.e,{mr:1,mdxType:"CodeIcon"}),"View source"))}m.isMDXComponent=!0},817:function(e,t,n){"use strict";var a=n(2),i=n(4),r=n(13),o=n(0),l=n.n(o),s=n(126),c=n(73),d=n(192),u=n(127),m=n(190),p=n(191),b=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function h(e){var t=e.items,n=e.depth;return l.a.createElement(b,{as:"ul",m:0,p:0},t.map(function(e){return l.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},l.a.createElement(i.n,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(h,{items:e.items,depth:n+1}):null)}))}h.defaultProps={depth:0};var f=h,y=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"o2kgno-0"})({zIndex:0}),g=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"o2kgno-1"})({alignItems:"start",alignSelf:"start"}),x=Object(a.f)(i.d).withConfig({displayName:"layout___StyledBorderBox",componentId:"o2kgno-2"})({gridArea:"heading"}),j=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"o2kgno-3"})({gridArea:"table-of-contents",overflow:"auto"}),E=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"o2kgno-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,o=a.title,b=a.description,h=a.status,w=a.source,O=a.additionalContributors,k=void 0===O?[]:O;return l.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(s.a,{title:o,description:b}),l.a.createElement(c.b,null),l.a.createElement(y,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(i.e,{display:["none",null,null,"block"]},l.a.createElement(u.a,null)),l.a.createElement(g,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(x,{border:0,borderBottom:1,borderRadius:0,pb:2},l.a.createElement(i.m,null,o)),n.tableOfContents.items?l.a.createElement(j,{display:["none",null,"block"],position:"sticky",top:c.a+24,maxHeight:"calc(100vh - "+c.a+"px - 24px)"},l.a.createElement(i.t,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(f,{items:n.tableOfContents.items})):null,l.a.createElement(E,null,h||w?l.a.createElement(i.k,{mb:3,alignItems:"center"},h?l.a.createElement(p.a,{status:h}):null,l.a.createElement(i.e,{mx:"auto"}),w?l.a.createElement(m.a,{href:w}):null):null,n.tableOfContents.items?l.a.createElement(i.e,{display:["block",null,"none"],mb:3},l.a.createElement(i.h,null,function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.t,{as:"summary",fontWeight:"bold"},t?l.a.createElement(r.b,{mr:2}):l.a.createElement(r.c,{mr:2}),"Table of contents"),l.a.createElement(i.e,{pt:1},l.a.createElement(f,{items:n.tableOfContents.items})))})):null,t,l.a.createElement(d.a,{editUrl:n.editUrl,contributors:n.contributors.concat(k.map(function(e){return{login:e}}))})))))}}}]);
//# sourceMappingURL=component---content-development-utilities-mdx-9b5886885a8729ed9ba5.js.map