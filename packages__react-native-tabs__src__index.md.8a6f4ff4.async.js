(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[81],{"vsP+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),o=a("H1Ra");a("JjdP");t["default"]=e=>(l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"tabs-\u6807\u7b7e\u9875\u7ec4\u4ef6"},l.a.createElement(r["AnchorLink"],{to:"#tabs-\u6807\u7b7e\u9875\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Tabs \u6807\u7b7e\u9875\u7ec4\u4ef6"),l.a.createElement("p",null,"\u4f7f\u7528\u672c\u7ec4\u4ef6\u9700\u8981\u5355\u72ec\u5b89\u88c5\uff1a",l.a.createElement("strong",null,"yarn add @td-design/react-native-tabs @react-navigation/material-top-tabs react-native-tab-view")),l.a.createElement("p",null,"\u8be5\u7ec4\u4ef6\u4f9d\u8d56",l.a.createElement(r["Link"],{to:"https://github.com/react-navigation/react-navigation/tree/main/packages/bottom-tabs"},"@react-navigation/material-top-tabs"),"v5.3.10 \u548c",l.a.createElement(r["Link"],{to:"https://github.com/satya164/react-native-tab-view"},"react-native-tab-view"),"v2.16.0"),l.a.createElement("h2",{id:"\u6548\u679c\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u6548\u679c\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6548\u679c\u6f14\u793a"),l.a.createElement("h3",{id:"1-\u9ed8\u8ba4\u6548\u679c"},l.a.createElement(r["AnchorLink"],{to:"#1-\u9ed8\u8ba4\u6548\u679c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1. \u9ed8\u8ba4\u6548\u679c"),l.a.createElement(o["a"],{code:'<Tabs>\n  <Tabs.Screen\n    name="Home"\n    component={HomeScreen}\n    options={{\n      tabBarIcon: ({ color }) => {\n        return <Icon name="home" color={color} size={20} />;\n      },\n      tabBarLabel: () => {\n        return <Text>\u9996\u9875</Text>;\n      },\n    }}\n  />\n  <Tabs.Screen name="Settings" component={SettingsScreen} options={{ title: \'\u8bbe\u7f6e\' }} />\n  <Tabs.Screen name="Settings2" component={SettingsScreen} />\n</Tabs>',lang:"tsx"}),l.a.createElement("center",null,l.a.createElement("div",{style:{display:"flex",width:"750px"}},l.a.createElement("div",{style:{width:"375px"}},"IOS\u6548\u679c\u56fe"),l.a.createElement("div",{style:{width:"375px"}},"Android\u6548\u679c\u56fe"))),l.a.createElement("center",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609053807429895308.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}),l.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609053700827408426.gif",style:{width:"375px",border:"1px solid #ddd"}}))),l.a.createElement("h3",{id:"2-\u81ea\u5b9a\u4e49\u6548\u679c"},l.a.createElement(r["AnchorLink"],{to:"#2-\u81ea\u5b9a\u4e49\u6548\u679c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2. \u81ea\u5b9a\u4e49\u6548\u679c"),l.a.createElement(o["a"],{code:"<Tabs\n  tabBarOptions={{\n    /** \u9009\u4e2d\u72b6\u6001\u7684\u989c\u8272 */\n    activeTintColor: 'green',\n    /** \u672a\u9009\u4e2d\u72b6\u6001\u7684\u989c\u8272 */\n    inactiveTintColor: 'red',\n    /** \u56fe\u6807\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f */\n    iconStyle: {},\n    /** \u6587\u672c\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f */\n    labelStyle: { color: '#000' },\n    /** \u5fbd\u6807\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f */\n    badgeStyle: { fontSize: 12 },\n    /** \u6574\u4e2atab\u9879\u4e3b\u5bb9\u5668\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f */\n    style: { borderWidth: 1, borderColor: 'red' },\n    /** tab\u9879\u7236\u5bb9\u5668\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f */\n    contentContainerStyle: { backgroundColor: 'grey' },\n    /** \u6eda\u52a8\u6307\u793a\u5668\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f */\n    indicatorStyle: { backgroundColor: 'gold' },\n    /** \u6eda\u52a8\u6307\u793a\u5668\u7684\u5bb9\u5668\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f */\n    indicatorContainerStyle: { backgroundColor: 'green' },\n    /** \u5355\u4e2atab\u9879\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f */\n    tabStyle: { backgroundColor: '#fff00f' },\n  }}\n>\n  <Tabs.Screen\n    name=\"Home\"\n    component={HomeScreen}\n    options={{\n      tabBarIcon: ({ color }) => {\n        return <Icon name=\"home\" color={color} size={20} />;\n      },\n      tabBarLabel: () => {\n        return <Text>\u9996\u9875</Text>;\n      },\n    }}\n  />\n  <Tabs.Screen name=\"Settings\" component={SettingsScreen} options={{ title: '\u8bbe\u7f6e' }} />\n  <Tabs.Screen name=\"Settings2\" component={SettingsScreen} />\n</Tabs>",lang:"tsx"}),l.a.createElement("center",null,l.a.createElement("div",{style:{display:"flex",width:"750px"}},l.a.createElement("div",{style:{width:"375px"}},"IOS\u6548\u679c\u56fe"),l.a.createElement("div",{style:{width:"375px"}},"Android\u6548\u679c\u56fe"))),l.a.createElement("center",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609053919880083008.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}),l.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609054031039477317.gif",style:{width:"375px",border:"1px solid #ddd"}}))),l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement("p",null,"\u7ee7\u627f\u81ea\uff1a",l.a.createElement("code",null,"@react-navigation/material-top-tabs"),"\u7684",l.a.createElement("code",null,"MaterialTopTabNavigationConfig"),"\u5c5e\u6027\u3002\u53c2\u8003\uff1a",l.a.createElement(r["Link"],{to:"https://reactnavigation.org/docs/material-top-tab-navigator"},"https://reactnavigation.org/docs/material-top-tab-navigator")),l.a.createElement(o["a"],{code:"export type TabsProps = Omit<MaterialTopTabNavigationConfig, 'tabBarOptions'> & {\n  tabBarOptions?: MaterialTopTabBarOptions & { showBadge?: boolean; badgeStyle?: StyleProp<TextStyle> };\n};",lang:"ts"}),l.a.createElement("h2",{id:"\u4e3b\u9898\u76f8\u5173\u5c5e\u6027"},l.a.createElement(r["AnchorLink"],{to:"#\u4e3b\u9898\u76f8\u5173\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4e3b\u9898\u76f8\u5173\u5c5e\u6027"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u666e\u901a\u6a21\u5f0f"),l.a.createElement("th",null,"\u6697\u9ed1\u6a21\u5f0f")))),l.a.createElement("p",null,l.a.createElement("em",null,"palette \u548c darkPalette \u7684\u5b9a\u4e49\u8be6\u89c1",l.a.createElement(r["Link"],{to:"/react-native/theme"},"\u5185\u7f6e\u4e3b\u9898"))))))}}]);