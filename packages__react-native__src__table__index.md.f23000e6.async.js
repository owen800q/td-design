(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[151],{Pg6R:function(e,n,l){},WtSh:function(e,n,l){"use strict";var t=l("kM82"),a=l.n(t),r=l("hKI/"),c=l.n(r);l("Pg6R");function d(e,n){return s(e)||m(e,n)||o(e,n)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,n){if(e){if("string"===typeof e)return i(e,n);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?i(e,n):void 0}}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var l=0,t=new Array(n);l<n;l++)t[l]=e[l];return t}function m(e,n){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var t,a,r=[],c=!0,d=!1;try{for(l=l.call(e);!(c=(t=l.next()).done);c=!0)if(r.push(t.value),n&&r.length===n)break}catch(u){d=!0,a=u}finally{try{c||null==l["return"]||l["return"]()}finally{if(d)throw a}}return r}}function s(e){if(Array.isArray(e))return e}var p=function(e){var n=e.children,l=Object(t["useRef"])(),r=Object(t["useState"])(!1),u=d(r,2),o=u[0],i=u[1],m=Object(t["useState"])(!1),s=d(m,2),p=s[0],E=s[1];return Object(t["useEffect"])((function(){var e=l.current,n=c()((function(){i(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return n(),e.addEventListener("scroll",n),window.addEventListener("resize",n),function(){e.removeEventListener("scroll",n),window.removeEventListener("resize",n)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":o||void 0,"data-right-folded":p||void 0},a.a.createElement("table",null,n)))};n["a"]=p},yEGs:function(e,n,l){"use strict";l.r(n);var t=l("kM82"),a=l.n(t),r=l("dEAq"),c=l("6T1g"),d=l("WtSh"),u=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"table-\u8868\u683c\u7ec4\u4ef6"},a.a.createElement(r["AnchorLink"],{to:"#table-\u8868\u683c\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Table \u8868\u683c\u7ec4\u4ef6"),a.a.createElement("h2",{id:"\u6548\u679c\u6f14\u793a"},a.a.createElement(r["AnchorLink"],{to:"#\u6548\u679c\u6f14\u793a","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6548\u679c\u6f14\u793a"),a.a.createElement("h3",{id:"1-\u57fa\u672c\u7684\u7528\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#1-\u57fa\u672c\u7684\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"1. \u57fa\u672c\u7684\u7528\u6cd5"),a.a.createElement(c["a"],{code:"const columns = [\n    {\n      title: '\u7ba1\u7406\u5458',\n      dataIndex: 'userInfo',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'text',\n      hideInSearch: false,\n    },\n    {\n      title: '\u89d2\u8272',\n      dataIndex: 'roleName',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'text',\n      hideInSearch: false,\n    },\n    {\n      title: '\u90e8\u95e8',\n      dataIndex: 'opDepartmentName',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'text',\n      hideInSearch: false,\n    },\n    {\n      title: '\u64cd\u4f5c\u5185\u5bb9',\n      dataIndex: 'opContent',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'text',\n      hideInSearch: false,\n    },\n    {\n      title: '\u4e1a\u52a1\u6a21\u5757',\n      dataIndex: 'businessModule',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'text',\n      hideInSearch: false,\n    },\n  ];\n\n  const dataSource = [\n    {\n      id: 4694447,\n      userId: 117676,\n      userName: 'sxj',\n      nickName: 'sxj',\n      roleId: 519,\n      roleName: '\u8d85\u7ea7\u7ba1\u7406\u5458\u89d2\u8272',\n      opDepartmentId: 22,\n      opDepartmentName: 'lw\u662f',\n      accountType: 1,\n      opResources: '',\n      opType: '\u89e3\u9664\u5c01\u7981\u4f1a\u5458\u8d26\u53f7\u3001\u6f2b\u514b',\n      deviceNo: null,\n      deviceSystem: null,\n      clientId: 'manke-management',\n      groupId: null,\n      businessModule: '\u4f1a\u5458\u6a21\u5757',\n      loginIp: '222.173.46.190',\n      loginCity: null,\n      createdAt: '2020-12-01T17:17:22.000+08:00',\n    },\n    {\n      id: 4694446,\n      userId: 117676,\n      userName: 'sxj',\n      nickName: 'sxj',\n      roleId: 519,\n      roleName: '\u8d85\u7ea7\u7ba1\u7406\u5458\u89d2\u8272',\n      opDepartmentId: 22,\n      opDepartmentName: 'lw\u662f',\n      accountType: 1,\n      opResources: '117569,[2, 1, 4],11',\n      opType: '\u5c01\u7981\u4f1a\u5458\u8d26\u53f7\u3001\u6f2b\u514b',\n      deviceNo: null,\n      deviceSystem: null,\n      clientId: 'manke-management',\n      groupId: null,\n      businessModule: '\u4f1a\u5458\u6a21\u5757',\n      loginIp: '222.173.46.190',\n      loginCity: null,\n      createdAt: '2020-12-01T17:17:09.000+08:00',\n    },\n    {\n      id: 4694443,\n      userId: 116969,\n      userName: 'zhuxc',\n      nickName: 'zhuxc',\n      roleId: 519,\n      roleName: '\u8d85\u7ea7\u7ba1\u7406\u5458\u89d2\u8272',\n      opDepartmentId: 4,\n      opDepartmentName: '\u6839\u90e8\u95e81',\n      accountType: 1,\n      opResources: 'zhuxc',\n      opType: '\u8fd0\u8425\u5546\u7528\u6237\u540d\u5bc6\u7801\u767b\u5f55',\n      deviceNo: null,\n      deviceSystem: null,\n      clientId: 'manke-management',\n      groupId: null,\n      businessModule: '\u7528\u6237\u767b\u5f55',\n      loginIp: '60.12.241.84',\n      loginCity: null,\n      createdAt: '2020-12-01T17:15:09.000+08:00',\n    },\n    {\n      id: 4694369,\n      userId: 117676,\n      userName: 'sxj',\n      nickName: 'sxj',\n      roleId: 519,\n      roleName: '\u8d85\u7ea7\u7ba1\u7406\u5458\u89d2\u8272',\n      opDepartmentId: 22,\n      opDepartmentName: 'lw\u662f',\n      accountType: 1,\n      opResources: '117569,[4],11',\n      opType: '\u5c01\u7981\u4f1a\u5458\u8d26\u53f7\u3001\u6f2b\u514b',\n      deviceNo: null,\n      deviceSystem: null,\n      clientId: 'manke-management',\n      groupId: null,\n      businessModule: '\u4f1a\u5458\u6a21\u5757',\n      loginIp: '222.173.46.190',\n      loginCity: null,\n      createdAt: '2020-12-01T17:00:21.000+08:00',\n    },\n    {\n      id: 4694357,\n      userId: 117676,\n      userName: 'sxj',\n      nickName: 'sxj',\n      roleId: 519,\n      roleName: '\u8d85\u7ea7\u7ba1\u7406\u5458\u89d2\u8272',\n      opDepartmentId: 22,\n      opDepartmentName: 'lw\u662f',\n      accountType: 1,\n      opResources: '',\n      opType: '\u67e5\u770b\u9ed1\u767d\u540d\u5355\u5217\u8868',\n      deviceNo: null,\n      deviceSystem: null,\n      clientId: 'manke-management',\n      groupId: null,\n      businessModule: '\u9ed1\u767d\u540d\u5355',\n      loginIp: '222.173.46.190',\n      loginCity: null,\n      createdAt: '2020-12-01T16:59:43.000+08:00',\n    }]\n<WingBlank>\n  <Table columns={columns} dataSource={data} tableHeight={300} />\n</WingBlank>",lang:"tsx"}),a.a.createElement("center",null,a.a.createElement("figure",null,a.a.createElement("img",{alt:"\u57fa\u672c\u7684\u7528\u6cd5 ios",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1608881149351049415.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),a.a.createElement("h3",{id:"2-columns-\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#2-columns-\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"2. columns \u5c5e\u6027"),a.a.createElement(c["a"],{code:"const columns = [\n     {\n      title: '\u7ba1\u7406\u5458',\n      dataIndex: 'userInfo',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'text',\n      hideInSearch: false,\n      width: 100,\n      flex: 2,\n    },\n    {\n      title: '\u89d2\u8272',\n      dataIndex: 'roleName',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'text',\n      hideInSearch: false,\n      width: 50,\n    },\n    {\n      title: '\u90e8\u95e8',\n      dataIndex: 'opDepartmentName',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'text',\n      hideInSearch: false,\n      width: 20,\n    },\n    {\n      title: '\u64cd\u4f5c\u5185\u5bb9',\n      dataIndex: 'opContent',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'text',\n      hideInSearch: false,\n    },\n    {\n      title: '\u4e1a\u52a1\u6a21\u5757',\n      dataIndex: 'businessModule',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'text',\n      hideInSearch: false,\n    },\n    {\n      title: '\u64cd\u4f5c\u65f6\u95f4',\n      dataIndex: 'createdAt',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'dateTimeRange',\n    },\n    {\n      title: 'IP\u5730\u5740',\n      dataIndex: 'loginIp',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'text',\n      hideInSearch: false,\n    },\n  ];\n\n  const dataSource = [\n    {\n      id: 4694447,\n      userId: 117676,\n      userName: 'sxj',\n      nickName: 'sxj',\n      roleId: 519,\n      roleName: '\u8d85\u7ea7\u7ba1\u7406\u5458\u89d2\u8272',\n      opDepartmentId: 22,\n      opDepartmentName: 'lw\u662f',\n      accountType: 1,\n      opResources: '',\n      opType: '\u89e3\u9664\u5c01\u7981\u4f1a\u5458\u8d26\u53f7\u3001\u6f2b\u514b',\n      deviceNo: null,\n      deviceSystem: null,\n      clientId: 'manke-management',\n      groupId: null,\n      businessModule: '\u4f1a\u5458\u6a21\u5757',\n      loginIp: '222.173.46.190',\n      loginCity: null,\n      createdAt: '2020-12-01T17:17:22.000+08:00',\n    },\n    {\n      id: 4694446,\n      userId: 117676,\n      userName: 'sxj',\n      nickName: 'sxj',\n      roleId: 519,\n      roleName: '\u8d85\u7ea7\u7ba1\u7406\u5458\u89d2\u8272',\n      opDepartmentId: 22,\n      opDepartmentName: 'lw\u662f',\n      accountType: 1,\n      opResources: '117569,[2, 1, 4],11',\n      opType: '\u5c01\u7981\u4f1a\u5458\u8d26\u53f7\u3001\u6f2b\u514b',\n      deviceNo: null,\n      deviceSystem: null,\n      clientId: 'manke-management',\n      groupId: null,\n      businessModule: '\u4f1a\u5458\u6a21\u5757',\n      loginIp: '222.173.46.190',\n      loginCity: null,\n      createdAt: '2020-12-01T17:17:09.000+08:00',\n    },\n    {\n      id: 4694443,\n      userId: 116969,\n      userName: 'zhuxc',\n      nickName: 'zhuxc',\n      roleId: 519,\n      roleName: '\u8d85\u7ea7\u7ba1\u7406\u5458\u89d2\u8272',\n      opDepartmentId: 4,\n      opDepartmentName: '\u6839\u90e8\u95e81',\n      accountType: 1,\n      opResources: 'zhuxc',\n      opType: '\u8fd0\u8425\u5546\u7528\u6237\u540d\u5bc6\u7801\u767b\u5f55',\n      deviceNo: null,\n      deviceSystem: null,\n      clientId: 'manke-management',\n      groupId: null,\n      businessModule: '\u7528\u6237\u767b\u5f55',\n      loginIp: '60.12.241.84',\n      loginCity: null,\n      createdAt: '2020-12-01T17:15:09.000+08:00',\n    },\n    {\n      id: 4694369,\n      userId: 117676,\n      userName: 'sxj',\n      nickName: 'sxj',\n      roleId: 519,\n      roleName: '\u8d85\u7ea7\u7ba1\u7406\u5458\u89d2\u8272',\n      opDepartmentId: 22,\n      opDepartmentName: 'lw\u662f',\n      accountType: 1,\n      opResources: '117569,[4],11',\n      opType: '\u5c01\u7981\u4f1a\u5458\u8d26\u53f7\u3001\u6f2b\u514b',\n      deviceNo: null,\n      deviceSystem: null,\n      clientId: 'manke-management',\n      groupId: null,\n      businessModule: '\u4f1a\u5458\u6a21\u5757',\n      loginIp: '222.173.46.190',\n      loginCity: null,\n      createdAt: '2020-12-01T17:00:21.000+08:00',\n    },\n    {\n      id: 4694357,\n      userId: 117676,\n      userName: 'sxj',\n      nickName: 'sxj',\n      roleId: 519,\n      roleName: '\u8d85\u7ea7\u7ba1\u7406\u5458\u89d2\u8272',\n      opDepartmentId: 22,\n      opDepartmentName: 'lw\u662f',\n      accountType: 1,\n      opResources: '',\n      opType: '\u67e5\u770b\u9ed1\u767d\u540d\u5355\u5217\u8868',\n      deviceNo: null,\n      deviceSystem: null,\n      clientId: 'manke-management',\n      groupId: null,\n      businessModule: '\u9ed1\u767d\u540d\u5355',\n      loginIp: '222.173.46.190',\n      loginCity: null,\n      createdAt: '2020-12-01T16:59:43.000+08:00',\n    }]\n<WingBlank>\n  <Table columns={columns} dataSource={data} tableHeight={300} />\n</WingBlank>",lang:"tsx"}),a.a.createElement("center",null,a.a.createElement("figure",null,a.a.createElement("img",{alt:"columns \u5c5e\u6027 ios",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1608881149467256102.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),a.a.createElement("h3",{id:"3-\u6a2a\u5411\u6eda\u52a8"},a.a.createElement(r["AnchorLink"],{to:"#3-\u6a2a\u5411\u6eda\u52a8","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"3. \u6a2a\u5411\u6eda\u52a8"),a.a.createElement(c["a"],{code:"const columns = [\n     {\n      title: '\u7ba1\u7406\u5458',\n      dataIndex: 'userInfo',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'text',\n      hideInSearch: false,\n      width: 100,\n      flex: 2,\n    },\n    {\n      title: '\u89d2\u8272',\n      dataIndex: 'roleName',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'text',\n      hideInSearch: false,\n      width: 50,\n    },\n    {\n      title: '\u90e8\u95e8',\n      dataIndex: 'opDepartmentName',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'text',\n      hideInSearch: false,\n      width: 20,\n    },\n    {\n      title: '\u64cd\u4f5c\u5185\u5bb9',\n      dataIndex: 'opContent',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'text',\n      hideInSearch: false,\n    },\n    {\n      title: '\u4e1a\u52a1\u6a21\u5757',\n      dataIndex: 'businessModule',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'text',\n      hideInSearch: false,\n    },\n    {\n      title: '\u64cd\u4f5c\u65f6\u95f4',\n      dataIndex: 'createdAt',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'dateTimeRange',\n    },\n    {\n      title: 'IP\u5730\u5740',\n      dataIndex: 'loginIp',\n      align: 'left',\n      ellipsis: false,\n      copyable: false,\n      valueType: 'text',\n      hideInSearch: false,\n    },\n  ];\n\n  const dataSource = [\n    {\n      id: 4694447,\n      userId: 117676,\n      userName: 'sxj',\n      nickName: 'sxj',\n      roleId: 519,\n      roleName: '\u8d85\u7ea7\u7ba1\u7406\u5458\u89d2\u8272',\n      opDepartmentId: 22,\n      opDepartmentName: 'lw\u662f',\n      accountType: 1,\n      opResources: '',\n      opType: '\u89e3\u9664\u5c01\u7981\u4f1a\u5458\u8d26\u53f7\u3001\u6f2b\u514b',\n      deviceNo: null,\n      deviceSystem: null,\n      clientId: 'manke-management',\n      groupId: null,\n      businessModule: '\u4f1a\u5458\u6a21\u5757',\n      loginIp: '222.173.46.190',\n      loginCity: null,\n      createdAt: '2020-12-01T17:17:22.000+08:00',\n    },\n    {\n      id: 4694446,\n      userId: 117676,\n      userName: 'sxj',\n      nickName: 'sxj',\n      roleId: 519,\n      roleName: '\u8d85\u7ea7\u7ba1\u7406\u5458\u89d2\u8272',\n      opDepartmentId: 22,\n      opDepartmentName: 'lw\u662f',\n      accountType: 1,\n      opResources: '117569,[2, 1, 4],11',\n      opType: '\u5c01\u7981\u4f1a\u5458\u8d26\u53f7\u3001\u6f2b\u514b',\n      deviceNo: null,\n      deviceSystem: null,\n      clientId: 'manke-management',\n      groupId: null,\n      businessModule: '\u4f1a\u5458\u6a21\u5757',\n      loginIp: '222.173.46.190',\n      loginCity: null,\n      createdAt: '2020-12-01T17:17:09.000+08:00',\n    },\n    {\n      id: 4694443,\n      userId: 116969,\n      userName: 'zhuxc',\n      nickName: 'zhuxc',\n      roleId: 519,\n      roleName: '\u8d85\u7ea7\u7ba1\u7406\u5458\u89d2\u8272',\n      opDepartmentId: 4,\n      opDepartmentName: '\u6839\u90e8\u95e81',\n      accountType: 1,\n      opResources: 'zhuxc',\n      opType: '\u8fd0\u8425\u5546\u7528\u6237\u540d\u5bc6\u7801\u767b\u5f55',\n      deviceNo: null,\n      deviceSystem: null,\n      clientId: 'manke-management',\n      groupId: null,\n      businessModule: '\u7528\u6237\u767b\u5f55',\n      loginIp: '60.12.241.84',\n      loginCity: null,\n      createdAt: '2020-12-01T17:15:09.000+08:00',\n    },\n    {\n      id: 4694369,\n      userId: 117676,\n      userName: 'sxj',\n      nickName: 'sxj',\n      roleId: 519,\n      roleName: '\u8d85\u7ea7\u7ba1\u7406\u5458\u89d2\u8272',\n      opDepartmentId: 22,\n      opDepartmentName: 'lw\u662f',\n      accountType: 1,\n      opResources: '117569,[4],11',\n      opType: '\u5c01\u7981\u4f1a\u5458\u8d26\u53f7\u3001\u6f2b\u514b',\n      deviceNo: null,\n      deviceSystem: null,\n      clientId: 'manke-management',\n      groupId: null,\n      businessModule: '\u4f1a\u5458\u6a21\u5757',\n      loginIp: '222.173.46.190',\n      loginCity: null,\n      createdAt: '2020-12-01T17:00:21.000+08:00',\n    },\n    {\n      id: 4694357,\n      userId: 117676,\n      userName: 'sxj',\n      nickName: 'sxj',\n      roleId: 519,\n      roleName: '\u8d85\u7ea7\u7ba1\u7406\u5458\u89d2\u8272',\n      opDepartmentId: 22,\n      opDepartmentName: 'lw\u662f',\n      accountType: 1,\n      opResources: '',\n      opType: '\u67e5\u770b\u9ed1\u767d\u540d\u5355\u5217\u8868',\n      deviceNo: null,\n      deviceSystem: null,\n      clientId: 'manke-management',\n      groupId: null,\n      businessModule: '\u9ed1\u767d\u540d\u5355',\n      loginIp: '222.173.46.190',\n      loginCity: null,\n      createdAt: '2020-12-01T16:59:43.000+08:00',\n    }]\n<WingBlank>\n  <Table columns={columns} dataSource={data} horizontalScroll={true} tableWidth={1000} tableHeight={300} />\n</WingBlank>",lang:"tsx"}),a.a.createElement("center",null,a.a.createElement("figure",null,a.a.createElement("img",{alt:"\u6a2a\u5411\u6eda\u52a8 ios",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1608881149887640842.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),a.a.createElement("h3",{id:"4-\u7a7a\u72b6\u6001"},a.a.createElement(r["AnchorLink"],{to:"#4-\u7a7a\u72b6\u6001","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"4. \u7a7a\u72b6\u6001"),a.a.createElement(c["a"],{code:"const columns = [\n  {\n    title: '\u7ba1\u7406\u5458',\n    dataIndex: 'userInfo',\n    align: 'left',\n    ellipsis: false,\n    copyable: false,\n    valueType: 'text',\n    hideInSearch: false,\n    width: 100,\n    flex: 2,\n  },\n  {\n    title: '\u89d2\u8272',\n    dataIndex: 'roleName',\n    align: 'left',\n    ellipsis: false,\n    copyable: false,\n    valueType: 'text',\n    hideInSearch: false,\n    width: 50,\n  },\n  {\n    title: '\u90e8\u95e8',\n    dataIndex: 'opDepartmentName',\n    align: 'left',\n    ellipsis: false,\n    copyable: false,\n    valueType: 'text',\n    hideInSearch: false,\n    width: 20,\n  },\n  {\n    title: '\u64cd\u4f5c\u5185\u5bb9',\n    dataIndex: 'opContent',\n    align: 'left',\n    ellipsis: false,\n    copyable: false,\n    valueType: 'text',\n    hideInSearch: false,\n  },\n  {\n    title: '\u4e1a\u52a1\u6a21\u5757',\n    dataIndex: 'businessModule',\n    align: 'left',\n    ellipsis: false,\n    copyable: false,\n    valueType: 'text',\n    hideInSearch: false,\n  },\n  {\n    title: '\u64cd\u4f5c\u65f6\u95f4',\n    dataIndex: 'createdAt',\n    align: 'left',\n    ellipsis: false,\n    copyable: false,\n    valueType: 'dateTimeRange',\n  },\n  {\n    title: 'IP\u5730\u5740',\n    dataIndex: 'loginIp',\n    align: 'left',\n    ellipsis: false,\n    copyable: false,\n    valueType: 'text',\n    hideInSearch: false,\n  },\n];\n\n<WingBlank>\n  <Table columns={columns} dataSource={[]} tableHeight={300} />\n</WingBlank>;",lang:"tsx"}),a.a.createElement("center",null,a.a.createElement("figure",null,a.a.createElement("img",{alt:"\u7a7a\u72b6\u6001 ios",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1608881148736057650.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}))),a.a.createElement("h2",{id:"api"},a.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement("h3",{id:"table-\u7ec4\u4ef6-api"},a.a.createElement(r["AnchorLink"],{to:"#table-\u7ec4\u4ef6-api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"table \u7ec4\u4ef6 API"),a.a.createElement(d["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u5fc5\u586b"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"columns"),a.a.createElement("td",null,a.a.createElement("code",null,"true")),a.a.createElement("td",null,"\u8868\u683c\u7684\u5217\u5b9a\u4e49"),a.a.createElement("td",null,a.a.createElement("code",null,"ColumnProps[]")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"dataSource"),a.a.createElement("td",null,a.a.createElement("code",null,"true")),a.a.createElement("td",null,"\u8868\u683c\u7684\u6570\u636e"),a.a.createElement("td",null,a.a.createElement("code",null,"[","{"," [key: string]: string ","}","]")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"horizontalScroll"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u662f\u5426\u53ef\u4ee5\u6a2a\u5411\u6eda\u52a8\u5b9a\u4e49\u4e86 tableWidth \u540e\u624d\u53ef\u4ee5\u6eda\u52a8"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"headerStyle"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u8868\u5355\u5934\u90e8\u6837\u5f0f"),a.a.createElement("td",null,a.a.createElement("code",null,"ViewStyle")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"rowStyle"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u6570\u636e\u884c\u6837\u5f0f"),a.a.createElement("td",null,a.a.createElement("code",null,"ViewStyle")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"onRefresh"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u8868\u683c\u4e0b\u62c9\u5237\u65b0"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"onEndReached"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u8868\u683c\u4e0a\u62c9\u52a0\u8f7d"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"refreshing"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u5237\u65b0\u72b6\u6001"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"tableWidth"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u8868\u5355\u7684\u5bbd\u5ea6"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"tableHeight"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u8868\u5355\u7684\u9ad8\u5ea6 \u5982\u679c\u4e0d\u586b\u5219\u4e3a flex:1 \u7531\u5916\u90e8\u5bb9\u5668\u51b3\u5b9a"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"deviceHeight"))))),a.a.createElement("h3",{id:"columnprops-\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#columnprops-\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"ColumnProps \u5c5e\u6027"),a.a.createElement(d["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u5fc5\u586b"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"title"),a.a.createElement("td",null,a.a.createElement("code",null,"true")),a.a.createElement("td",null,"\u8868\u5355\u7684\u5217\u6807\u9898"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"dataIndex"),a.a.createElement("td",null,a.a.createElement("code",null,"true")),a.a.createElement("td",null,"\u6570\u636e\u7684 key \u503c"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"numberOfLines"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u6587\u5b57\u884c\u6570"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"ellipsisMode"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u8d85\u51fa\u540e\u7684\u622a\u53d6\u65b9\u5f0f"),a.a.createElement("td",null,"'head' | 'middle' | 'tail' | 'clip'"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"textAlign"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u6587\u5b57\u5bf9\u5176\u65b9\u5f0f"),a.a.createElement("td",null,"'center' | 'left' | 'right'"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"width"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u5217\u7684\u5bbd\u5ea6"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"flex"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u5217\u7684\u5360\u6bd4"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"renderText"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u6587\u672c"),a.a.createElement("td",null,a.a.createElement("code",null,"(item: string, column: ColumnProps) => string")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"render"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),a.a.createElement("td",null,a.a.createElement("code",null,"(item: string, column: ColumnProps) => ReactElement")),a.a.createElement("td",null))))))}));n["default"]=e=>{var n=a.a.useContext(r["context"]),l=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(u,{demos:l})}}}]);