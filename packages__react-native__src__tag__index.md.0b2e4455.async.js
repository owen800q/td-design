(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[152],{Pg6R:function(e,t,n){},WtSh:function(e,t,n){"use strict";var a=n("kM82"),l=n.n(a),r=n("hKI/"),c=n.n(r);n("Pg6R");function o(e,t){return s(e)||m(e,t)||u(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(d){o=!0,l=d}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),d=o(r,2),u=d[0],i=d[1],m=Object(a["useState"])(!1),s=o(m,2),E=s[0],g=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){i(e.scrollLeft>0),g(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},kwJi:function(e,t,n){"use strict";n.r(t);var a=n("kM82"),l=n.n(a),r=n("dEAq"),c=n("6T1g"),o=n("WtSh"),d=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"tag-\u6807\u7b7e\u7ec4\u4ef6"},l.a.createElement(r["AnchorLink"],{to:"#tag-\u6807\u7b7e\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Tag \u6807\u7b7e\u7ec4\u4ef6"),l.a.createElement("h2",{id:"\u6548\u679c\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u6548\u679c\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6548\u679c\u6f14\u793a"),l.a.createElement("h3",{id:"1-\u5927\u4e2d\u5c0f\u6807\u7b7e\u9ed8\u8ba4\u6548\u679c"},l.a.createElement(r["AnchorLink"],{to:"#1-\u5927\u4e2d\u5c0f\u6807\u7b7e\u9ed8\u8ba4\u6548\u679c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1. \u5927\u4e2d\u5c0f\u6807\u7b7e\u9ed8\u8ba4\u6548\u679c"),l.a.createElement(c["a"],{code:'<Flex justifyContent="space-around">\n  <Tag size="small">magenta</Tag>\n  <Tag>magenta</Tag>\n  <Tag size="large">magenta</Tag>\n</Flex>',lang:"tsx"}),l.a.createElement("center",null,l.a.createElement("figure",null,l.a.createElement("img",{src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643253782367453494.png",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),l.a.createElement("h3",{id:"2-\u81ea\u5b9a\u4e49\u80cc\u666f\u8272"},l.a.createElement(r["AnchorLink"],{to:"#2-\u81ea\u5b9a\u4e49\u80cc\u666f\u8272","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2. \u81ea\u5b9a\u4e49\u80cc\u666f\u8272"),l.a.createElement(c["a"],{code:'<Flex justifyContent="space-between">\n  <Tag backgroundColor="func200" text="\u6807\u7b7e" />\n  <Tag backgroundColor="func300" text="\u6807\u7b7e" />\n  <Tag backgroundColor="func500" text="\u5c0f\u6807\u7b7e\u6807\u7b7e" />\n</Flex>',lang:"jsx"}),l.a.createElement("center",null,l.a.createElement("figure",null,l.a.createElement("img",{src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643253837366314688.png",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),l.a.createElement("h3",{id:"3-\u81ea\u5b9a\u4e49\u6587\u5b57\u989c\u8272"},l.a.createElement(r["AnchorLink"],{to:"#3-\u81ea\u5b9a\u4e49\u6587\u5b57\u989c\u8272","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3. \u81ea\u5b9a\u4e49\u6587\u5b57\u989c\u8272"),l.a.createElement(c["a"],{code:'<Flex justifyContent="space-between">\n  <Tag color="func200" text="\u6807\u7b7e" />\n  <Tag color="func300" text="\u6807\u7b7e" />\n  <Tag color="func500" text="\u6807\u7b7e" />\n</Flex>',lang:"jsx"}),l.a.createElement("center",null,l.a.createElement("figure",null,l.a.createElement("img",{src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643253869655478919.png",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),l.a.createElement("h3",{id:"4-\u9542\u7a7a\u6807\u7b7e"},l.a.createElement(r["AnchorLink"],{to:"#4-\u9542\u7a7a\u6807\u7b7e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4. \u9542\u7a7a\u6807\u7b7e"),l.a.createElement(c["a"],{code:'<Flex justifyContent="space-between">\n  <Tag backgroundColor="func200" ghost text="\u6807\u7b7e" />\n  <Tag backgroundColor="func300" ghost text="\u6807\u7b7e" />\n  <Tag backgroundColor="func500" ghost text="\u6807\u7b7e" />\n</Flex>',lang:"jsx"}),l.a.createElement("center",null,l.a.createElement("figure",null,l.a.createElement("img",{src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643253904141084290.png",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),l.a.createElement("h3",{id:"5-disabled-\u6548\u679c"},l.a.createElement(r["AnchorLink"],{to:"#5-disabled-\u6548\u679c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"5. disabled \u6548\u679c"),l.a.createElement(c["a"],{code:'<Flex justifyContent="space-between">\n  <Tag disabled text="\u6807\u7b7e" />\n  <Tag backgroundColor="func300" disabled text="\u6807\u7b7e" />\n  <Tag backgroundColor="func500" disabled text="\u6807\u7b7e" />\n</Flex>',lang:"jsx"}),l.a.createElement("center",null,l.a.createElement("figure",null,l.a.createElement("img",{src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643253934714157704.png",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),l.a.createElement("h3",{id:"6-\u9009\u4e2d\u6548\u679c"},l.a.createElement(r["AnchorLink"],{to:"#6-\u9009\u4e2d\u6548\u679c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"6. \u9009\u4e2d\u6548\u679c"),l.a.createElement(c["a"],{code:'<Flex justifyContent="space-between">\n  <Tag selected text="\u6807\u7b7e" />\n  <Tag backgroundColor="func300" selected text="\u6807\u7b7e" />\n  <Tag backgroundColor="func500" selected text="\u6807\u7b7e" />\n</Flex>',lang:"jsx"}),l.a.createElement("center",null,l.a.createElement("figure",null,l.a.createElement("img",{src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643253992253997438.png",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),l.a.createElement("h3",{id:"7-\u53ef\u5220\u9664\u6548\u679c"},l.a.createElement(r["AnchorLink"],{to:"#7-\u53ef\u5220\u9664\u6548\u679c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7. \u53ef\u5220\u9664\u6548\u679c"),l.a.createElement(c["a"],{code:'<Flex justifyContent="space-between">\n  <Tag closable text="\u6807\u7b7e" />\n  <Tag backgroundColor="func300" closable text="\u6807\u7b7e" />\n  <Tag backgroundColor="func500" closable text="\u6807\u7b7e" />\n</Flex>',lang:"jsx"}),l.a.createElement("center",null,l.a.createElement("figure",null,l.a.createElement("img",{src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643254041176615517.png",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u5fc5\u586b"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"size"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u6807\u7b7e\u7684\u5927\u5c0f"),l.a.createElement("td",null,l.a.createElement("code",null,"large"),"| ",l.a.createElement("code",null,"small")," | ",l.a.createElement("code",null,"middle")),l.a.createElement("td",null,l.a.createElement("code",null,"middle"))),l.a.createElement("tr",null,l.a.createElement("td",null,"text"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u6307\u5b9a\u6807\u7b7e\u6587\u672c"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"ghost"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u662f\u5426\u80cc\u666f\u9542\u7a7a"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"disabled"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u8bbe\u7f6e\u7981\u7528"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"closable"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u662f\u5426\u53ef\u5173\u95ed"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"selected"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u8bbe\u7f6e\u6807\u7b7e\u7684\u9009\u4e2d\u72b6\u6001"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onClose"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u70b9\u51fb\u5173\u95ed\u7684\u56de\u8c03\u51fd\u6570"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"onSelect"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u70b9\u51fb\u6807\u7b7e\u7684\u56de\u8c03\u51fd\u6570"),l.a.createElement("td",null,l.a.createElement("code",null,"(selected: boolean) => void")),l.a.createElement("td",null))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(d,{demos:n})}}}]);