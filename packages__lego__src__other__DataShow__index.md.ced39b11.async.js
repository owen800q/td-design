(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[70],{MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},WpQk:function(e,t,n){},"dMo/":function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),r=n("hKI/"),c=n.n(r);n("WpQk");function o(e,t){return s(e)||m(e,t)||i(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(u){o=!0,l=u}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),u=o(r,2),i=u[0],d=u[1],m=Object(a["useState"])(!1),s=o(m,2),E=s[0],f=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){d(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":i||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},pWnD:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("dEAq"),c=n("Zxc8"),o=n("dMo/"),u=l.a.memo((e=>{var t=e.demos,n=t["datashowdemo-demo1"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u57fa\u672c\u7684\u6570\u636e\u5c55\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u672c\u7684\u6570\u636e\u5c55\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7684\u6570\u636e\u5c55\u793a"),l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u5fc5\u586b"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"title"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u6807\u9898"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"total"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u6570\u91cf"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"style"),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u6837\u5f0f"),l.a.createElement("td",null,l.a.createElement("code",null,"CSSProperties")),l.a.createElement("td",null)))),l.a.createElement("h2",{id:"\u6548\u679c\u56fe"},l.a.createElement(r["AnchorLink"],{to:"#\u6548\u679c\u56fe","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6548\u679c\u56fe")),l.a.createElement(c["default"],t["datashowdemo-demo1"].previewerProps,l.a.createElement(n,null))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(u,{demos:n})}}}]);