(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[77],{"/bnT":function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),r=l("dEAq"),c=l("H1Ra");l("JjdP");t["default"]=e=>(n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"datepicker-\u65e5\u671f\u9009\u62e9\u7ec4\u4ef6"},n.a.createElement(r["AnchorLink"],{to:"#datepicker-\u65e5\u671f\u9009\u62e9\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"DatePicker \u65e5\u671f\u9009\u62e9\u7ec4\u4ef6"),n.a.createElement("h2",{id:"\u6548\u679c\u6f14\u793a"},n.a.createElement(r["AnchorLink"],{to:"#\u6548\u679c\u6f14\u793a","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6548\u679c\u6f14\u793a"),n.a.createElement("h3",{id:"1-\u9ed8\u8ba4\u6548\u679c"},n.a.createElement(r["AnchorLink"],{to:"#1-\u9ed8\u8ba4\u6548\u679c","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"1. \u9ed8\u8ba4\u6548\u679c"),n.a.createElement(c["a"],{code:'<Button title="\u663e\u793a" onPress={() => setVisible(true)} />\n<Text>{formattedValue}</Text>\n<DatePicker\n  title="\u8bf7\u9009\u62e9\u65e5\u671f"\n  visible={visible}\n  onClose={() => setVisible(false)}\n  value={value}\n  onChange={(value, formattedValue) => {\n    setValue(value);\n    setFormattedValue(formattedValue)\n  }}\n/>',lang:"tsx"}),n.a.createElement("center",null,n.a.createElement("div",{style:{display:"flex",width:"750px"}},n.a.createElement("div",{style:{width:"375px"}},"IOS\u6548\u679c\u56fe"),n.a.createElement("div",{style:{width:"375px"}},"Android\u6548\u679c\u56fe"))),n.a.createElement("center",null,n.a.createElement("figure",null,n.a.createElement("img",{alt:"datePicker-ios1.gif",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1607926683318866421.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}),n.a.createElement("img",{alt:"datePicker-android1.gif",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609231532596081156.gif",style:{width:"375px",border:"1px solid #ddd"}}))),n.a.createElement("h3",{id:"2-\u53ea\u663e\u793a\u5e74\u6708\u65e5"},n.a.createElement(r["AnchorLink"],{to:"#2-\u53ea\u663e\u793a\u5e74\u6708\u65e5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"2. \u53ea\u663e\u793a\u5e74\u6708\u65e5"),n.a.createElement(c["a"],{code:'<Button title="\u663e\u793a" onPress={() => setVisible(true)} />\n<Text>{formattedValue}</Text>\n<DatePicker\n  title="\u8bf7\u9009\u62e9\u65e5\u671f"\n  display="Y-M-D"\n  format="YYYY-MM-DD"\n  visible={visible}\n  onClose={() => setVisible(false)}\n  value={value}\n  onChange={(value, formattedValue) => {\n    setValue(value);\n    setFormattedValue(formattedValue)\n  }}\n/>',lang:"tsx"}),n.a.createElement("center",null,n.a.createElement("div",{style:{display:"flex",width:"750px"}},n.a.createElement("div",{style:{width:"375px"}},"IOS\u6548\u679c\u56fe"),n.a.createElement("div",{style:{width:"375px"}},"Android\u6548\u679c\u56fe"))),n.a.createElement("center",null,n.a.createElement("figure",null,n.a.createElement("img",{alt:"datePicker-ios2.gif",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1607927967538107659.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}),n.a.createElement("img",{alt:"datePicker-android2.gif",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609231532595290045.gif",style:{width:"375px",border:"1px solid #ddd"}}))),n.a.createElement("h3",{id:"3-\u76f4\u63a5\u5728\u9875\u9762\u5185\u5c55\u793a"},n.a.createElement(r["AnchorLink"],{to:"#3-\u76f4\u63a5\u5728\u9875\u9762\u5185\u5c55\u793a","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"3. \u76f4\u63a5\u5728\u9875\u9762\u5185\u5c55\u793a"),n.a.createElement(c["a"],{code:'const datePickerRef = useRef<{ getValue: () => { date: Date; formatDate: string } }>(null);\n\n<Button\n  title="getValue"\n  onPress={() => {\n    if (datePickerRef.current) {\n      const { date, formatDate } = datePickerRef.current.getValue();\n      setValue(date);\n      setFormattedValue(formatDate);\n    }\n  }}\n/>\n<Text>{formattedValue}</Text>\n<DatePicker\n  ref={datePickerRef}\n  title="\u8bf7\u9009\u62e9\u65e5\u671f"\n  displayType="view"\n/>',lang:"tsx"}),n.a.createElement("center",null,n.a.createElement("div",{style:{display:"flex",width:"750px"}},n.a.createElement("div",{style:{width:"375px"}},"IOS\u6548\u679c\u56fe"),n.a.createElement("div",{style:{width:"375px"}},"Android\u6548\u679c\u56fe"))),n.a.createElement("center",null,n.a.createElement("figure",null,n.a.createElement("img",{alt:"datePicker-ios3.gif",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1607929116069430286.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}),n.a.createElement("img",{alt:"datePicker-android3.gif",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609231532592959344.gif",style:{width:"375px",border:"1px solid #ddd"}}))),n.a.createElement("h3",{id:"4-\u5c55\u793a\u987a\u5e8f\u4e3a\u5206\u65f6\u65e5\u6708\u5e74"},n.a.createElement(r["AnchorLink"],{to:"#4-\u5c55\u793a\u987a\u5e8f\u4e3a\u5206\u65f6\u65e5\u6708\u5e74","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"4. \u5c55\u793a\u987a\u5e8f\u4e3a\u5206\u65f6\u65e5\u6708\u5e74"),n.a.createElement(c["a"],{code:'<Button title="\u663e\u793a" onPress={() => setVisible(true)} />\n<Text>{formattedValue}</Text>\n<DatePicker\n  title="\u8bf7\u9009\u62e9\u65e5\u671f"\n  display="T-H-D-M-Y"\n  visible={visible}\n  onClose={() => setVisible(false)}\n  value={value}\n  onChange={handleChange}\n/>',lang:"tsx"}),n.a.createElement("center",null,n.a.createElement("div",{style:{display:"flex",width:"750px"}},n.a.createElement("div",{style:{width:"375px"}},"IOS\u6548\u679c\u56fe"),n.a.createElement("div",{style:{width:"375px"}},"Android\u6548\u679c\u56fe"))),n.a.createElement("center",null,n.a.createElement("figure",null,n.a.createElement("img",{alt:"datePicker-ios4.gif",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1607929412126551034.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}),n.a.createElement("img",{alt:"datePicker-android4.gif",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609231532595605667.gif",style:{width:"375px",border:"1px solid #ddd"}}))),n.a.createElement("h2",{id:"api"},n.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("h3",{id:"datepicker-\u5c5e\u6027"},n.a.createElement(r["AnchorLink"],{to:"#datepicker-\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"DatePicker \u5c5e\u6027"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u5fc5\u586b"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"display"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5e74\u6708\u65e5\u65f6\u5206\u79d2\u7684\u663e\u793a\u987a\u5e8f"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,n.a.createElement("code",null,"Y-M-D-H-T"))),n.a.createElement("tr",null,n.a.createElement("td",null,"labelUnit"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5e74\u6708\u65e5\u65f6\u5206\u79d2\u7684\u5355\u4f4d\u6587\u5b57"),n.a.createElement("td",null,n.a.createElement("code",null,"{"," year: string; month: string; day: string; hour: string; minute: string ","}")),n.a.createElement("td",null,n.a.createElement("code",null,"{"," year: '\u5e74', month: '\u6708', day: '\u65e5', hour: '\u65f6', minute: '\u5206' ","}"))),n.a.createElement("tr",null,n.a.createElement("td",null,"format"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u65e5\u671f\u683c\u5f0f\u5316"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,n.a.createElement("code",null,"YYYY-MM-DD HH:mm"))),n.a.createElement("tr",null,n.a.createElement("td",null,"value"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5f53\u524d\u65e5\u671f"),n.a.createElement("td",null,n.a.createElement("code",null,"Date")),n.a.createElement("td",null,n.a.createElement("code",null,"new Date()"))),n.a.createElement("tr",null,n.a.createElement("td",null,"onChange"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u65e5\u671f\u4fee\u6539\u4e8b\u4ef6"),n.a.createElement("td",null,n.a.createElement("code",null,"(date?: Date, formatDate?: string) => void")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"minYear"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u6700\u5c0f\u5e74\u4efd"),n.a.createElement("td",null,n.a.createElement("code",null,"number")," | ",n.a.createElement("code",null,"string")),n.a.createElement("td",null,n.a.createElement("code",null,"\u5f53\u5e74\u5f80\u524d10\u5e74"))),n.a.createElement("tr",null,n.a.createElement("td",null,"maxYear"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u6700\u5927\u5e74\u4efd"),n.a.createElement("td",null,n.a.createElement("code",null,"number")," | ",n.a.createElement("code",null,"string")),n.a.createElement("td",null,n.a.createElement("code",null,"\u5f53\u5e74\u5f80\u540e10\u5e74"))),n.a.createElement("tr",null,n.a.createElement("td",null,"itemSpace"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u65e5\u671f\u9009\u9879\u7684\u95f4\u8ddd"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"textSize"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u65e5\u671f\u9009\u9879\u7684\u5b57\u4f53\u5927\u5c0f"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"textColor"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u65e5\u671f\u9009\u9879\u7684\u5b57\u4f53\u989c\u8272"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"style"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5bb9\u5668\u6837\u5f0f"),n.a.createElement("td",null,n.a.createElement("code",null,"ViewStyle")),n.a.createElement("td",null)))),n.a.createElement("h3",{id:"modalpicker-\u5c5e\u6027"},n.a.createElement(r["AnchorLink"],{to:"#modalpicker-\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"ModalPicker \u5c5e\u6027"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u5fc5\u586b"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"title"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u9009\u62e9\u5668\u6807\u9898"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"displayType"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u9009\u62e9\u5668\u663e\u793a\u7c7b\u578b\u3002view \u8868\u793a\u5728\u9875\u9762\u663e\u793a\uff1bmodal \u8868\u793a\u5728\u5f39\u7a97\u4e2d\u663e\u793a"),n.a.createElement("td",null,n.a.createElement("code",null,"view")," | ",n.a.createElement("code",null,"modal")),n.a.createElement("td",null,n.a.createElement("code",null,"modal"))),n.a.createElement("tr",null,n.a.createElement("td",null,"visible"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u63a7\u5236\u5f39\u7a97\u663e\u793a"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"onClose"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5f39\u7a97\u5173\u95ed\u4e8b\u4ef6"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void")),n.a.createElement("td",null)))),n.a.createElement("h2",{id:"\u4e3b\u9898\u76f8\u5173\u5c5e\u6027"},n.a.createElement(r["AnchorLink"],{to:"#\u4e3b\u9898\u76f8\u5173\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4e3b\u9898\u76f8\u5173\u5c5e\u6027"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u666e\u901a\u6a21\u5f0f"),n.a.createElement("th",null,"\u6697\u9ed1\u6a21\u5f0f")))),n.a.createElement("p",null,n.a.createElement("em",null,"palette \u548c darkPalette \u7684\u5b9a\u4e49\u8be6\u89c1",n.a.createElement(r["Link"],{to:"/react-native/theme"},"\u5185\u7f6e\u4e3b\u9898"))))))}}]);