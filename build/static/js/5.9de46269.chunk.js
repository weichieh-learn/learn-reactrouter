(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{41:function(e,t,c){e.exports={item:"QuoteItem_item__1_Afq"}},42:function(e,t,c){e.exports={list:"QuoteList_list__2FcL1",sorting:"QuoteList_sorting__2aPMC"}},43:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__1fOuR"}},54:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(2),i=c(8),o=c(41),r=c.n(o),a=c(1),u=function(e){return Object(a.jsxs)("li",{className:r.a.item,children:[Object(a.jsxs)("figure",{children:[Object(a.jsx)("blockquote",{children:Object(a.jsx)("p",{children:e.text})}),Object(a.jsx)("figcaption",{children:e.author})]}),Object(a.jsx)(i.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},d=c(42),j=c.n(d),l=function(e){var t,c,s=Object(n.h)(),i=Object(n.i)(),o="asc"===new URLSearchParams(i.search).get("sort"),r=(t=e.quotes,c=o,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:j.a.sorting,children:Object(a.jsxs)("button",{onClick:function(){s.push({pathname:i.pathname,search:"?sort=".concat(o?"desc":"asc")})},children:["Sort ",o?"Descending":"Ascending"]})}),Object(a.jsx)("ul",{className:j.a.list,children:r.map((function(e){return Object(a.jsx)(u,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},b=c(14),h=c(43),x=c.n(h),O=function(){return Object(a.jsxs)("div",{className:x.a.noquotes,children:[Object(a.jsx)("p",{children:"No quotes found!"}),Object(a.jsx)(i.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},f=c(35),m=c(36);t.default=function(){var e=Object(f.a)(m.d,!0),t=e.sendRequest,c=e.status,n=e.data,i=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===c?Object(a.jsx)("div",{className:"centered",children:Object(a.jsx)(b.a,{})}):i?Object(a.jsx)("p",{className:"centered focused",children:i}):"completed"!==c||n&&0!==n.length?Object(a.jsx)(l,{quotes:n}):Object(a.jsx)(O,{})}}}]);
//# sourceMappingURL=5.9de46269.chunk.js.map