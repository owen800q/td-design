(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[132],{Pg6R:function(e,t,a){},WtSh:function(e,t,a){"use strict";var n=a("kM82"),l=a.n(n),r=a("hKI/"),c=a.n(r);a("Pg6R");function o(e,t){return s(e)||u(e,t)||d(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function u(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(i){o=!0,l=i}finally{try{c||null==a["return"]||a["return"]()}finally{if(o)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),i=o(r,2),d=i[0],m=i[1],u=Object(n["useState"])(!1),s=o(u,2),E=s[0],h=s[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){m(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":d||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},oFl7:function(e,t,a){"use strict";a.r(t);var n=a("kM82"),l=a.n(n),r=a("dEAq"),c=a("6T1g"),o=a("WtSh"),i=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"noticebar-\u901a\u544a\u680f\u7ec4\u4ef6"},l.a.createElement(r["AnchorLink"],{to:"#noticebar-\u901a\u544a\u680f\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"NoticeBar \u901a\u544a\u680f\u7ec4\u4ef6"),l.a.createElement("p",null,"\u5728\u5bfc\u822a\u680f\u4e0b\u65b9\uff0c\u4e00\u822c\u7528\u4f5c\u7cfb\u7edf\u63d0\u9192\u3001\u6d3b\u52a8\u63d0\u9192\u7b49\u901a\u77e5\u3002\u9700\u8981\u5f15\u8d77\u7528\u6237\u5173\u6ce8\u65f6\u4f7f\u7528\uff0c\u91cd\u8981\u7ea7\u522b\u4f4e\u4e8e ",l.a.createElement("code",null,"Modal")," \uff0c\u9ad8\u4e8e ",l.a.createElement("code",null,"Toast"),"\u3002"),l.a.createElement("h2",{id:"\u6548\u679c\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u6548\u679c\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6548\u679c\u6f14\u793a"),l.a.createElement("h3",{id:"1-\u9ed8\u8ba4\u72b6\u6001"},l.a.createElement(r["AnchorLink"],{to:"#1-\u9ed8\u8ba4\u72b6\u6001","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1. \u9ed8\u8ba4\u72b6\u6001"),l.a.createElement(c["a"],{code:'<NoticeBar text="\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5" />',lang:"tsx"}),l.a.createElement("center",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"noticeBar-ios1.png",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609761571776347042.png",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),l.a.createElement("h3",{id:"2-\u53ef\u5173\u95ed"},l.a.createElement(r["AnchorLink"],{to:"#2-\u53ef\u5173\u95ed","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2. \u53ef\u5173\u95ed"),l.a.createElement(c["a"],{code:'<NoticeBar text="\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5" mode="close" />',lang:"tsx"}),l.a.createElement("center",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"noticeBar-ios2",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609761722278116352.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),l.a.createElement("h3",{id:"3-\u53ef\u70b9\u51fb\u8df3\u8f6c"},l.a.createElement(r["AnchorLink"],{to:"#3-\u53ef\u70b9\u51fb\u8df3\u8f6c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3. \u53ef\u70b9\u51fb\u8df3\u8f6c"),l.a.createElement(c["a"],{code:'<NoticeBar\n  text="\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5"\n  mode="link"\n  onPress={() => navigation.navigate(\'BoxDemo\')}\n/>',lang:"tsx"}),l.a.createElement("center",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"noticeBar-ios3",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609761868420805782.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),l.a.createElement("h3",{id:"4-\u6c34\u5e73\u6eda\u52a8--\u53ef\u8df3\u8f6c"},l.a.createElement(r["AnchorLink"],{to:"#4-\u6c34\u5e73\u6eda\u52a8--\u53ef\u8df3\u8f6c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4. \u6c34\u5e73\u6eda\u52a8 + \u53ef\u8df3\u8f6c"),l.a.createElement(c["a"],{code:'<NoticeBar\n  text="\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5"\n  mode="link"\n  onPress={() => navigation.navigate(\'BoxDemo\')}\n  animation\n/>',lang:"tsx"}),l.a.createElement("center",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"noticeBar-ios4",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609762001335578050.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),l.a.createElement("h3",{id:"5-\u6c34\u5e73\u6eda\u52a8--\u53ef\u5173\u95ed"},l.a.createElement(r["AnchorLink"],{to:"#5-\u6c34\u5e73\u6eda\u52a8--\u53ef\u5173\u95ed","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"5. \u6c34\u5e73\u6eda\u52a8 + \u53ef\u5173\u95ed"),l.a.createElement(c["a"],{code:'<NoticeBar\n  text="\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5"\n  mode="close"\n  animation\n  onClose={() => alert(\'hello\')}\n/>',lang:"tsx"}),l.a.createElement("center",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"noticeBar-ios5",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609762208777128043.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),l.a.createElement("h3",{id:"6-\u81ea\u5b9a\u4e49\u56fe\u6807"},l.a.createElement(r["AnchorLink"],{to:"#6-\u81ea\u5b9a\u4e49\u56fe\u6807","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"6. \u81ea\u5b9a\u4e49\u56fe\u6807"),l.a.createElement(c["a"],{code:'<NoticeBar icon={<Icon name="user" />} text="\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e522222" />',lang:"tsx"}),l.a.createElement("center",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"noticeBar-ios6",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609762306730480022.png",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),l.a.createElement("h3",{id:"7-\u81ea\u5b9a\u4e49\u9ad8\u5ea6"},l.a.createElement(r["AnchorLink"],{to:"#7-\u81ea\u5b9a\u4e49\u9ad8\u5ea6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7. \u81ea\u5b9a\u4e49\u9ad8\u5ea6"),l.a.createElement(c["a"],{code:'<NoticeBar height={60} text="\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e5\u6211\u662f\u901a\u77e522222" />',lang:"tsx"}),l.a.createElement("center",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"noticeBar-ios7",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609762508471573273.png",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u5fc5\u586b"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"text"),l.a.createElement("td",null,l.a.createElement("code",null,"true")),l.a.createElement("td",null,"\u901a\u544a\u680f\u6587\u672c"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"icon"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u5de6\u4fa7\u56fe\u6807"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"mode"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u901a\u544a\u680f\u7c7b\u578b"),l.a.createElement("td",null,l.a.createElement("code",null,"close")," | ",l.a.createElement("code",null,"link")," | ",l.a.createElement("code",null,"''")),l.a.createElement("td",null,l.a.createElement("code",null,"''"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onPress"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u901a\u544a\u680f\u70b9\u51fb\u4e8b\u4ef6"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"onClose"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u901a\u544a\u680f\u5173\u95ed\u4e8b\u4ef6"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void | Promise<void>")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"animation"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u662f\u5426\u542f\u7528\u52a8\u753b"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"duration"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u52a8\u753b\u64ad\u653e\u65f6\u957f"),l.a.createElement("td",null,l.a.createElement("code",null,"number")),l.a.createElement("td",null,l.a.createElement("code",null,"5000"))),l.a.createElement("tr",null,l.a.createElement("td",null,"height"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u901a\u544a\u680f\u9ad8\u5ea6"),l.a.createElement("td",null,l.a.createElement("code",null,"number")),l.a.createElement("td",null,l.a.createElement("code",null,"36")))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:a})}}}]);