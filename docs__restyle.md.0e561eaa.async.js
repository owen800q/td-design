(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{cm7C:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=t("dEAq"),o=t("H1Ra"),c=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"restyle---\u4e3b\u9898\u548c\u6837\u5f0f"},l.a.createElement(r["AnchorLink"],{to:"#restyle---\u4e3b\u9898\u548c\u6837\u5f0f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Restyle - \u4e3b\u9898\u548c\u6837\u5f0f"),l.a.createElement("p",null,"\u5148\u770b\u6548\u679c\u56fe\uff1a"),l.a.createElement("center",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"",src:"https://user-images.githubusercontent.com/688415/75268245-91084b80-57f7-11ea-905b-2a9046aa5ca3.gif"}),l.a.createElement("div",null,"\u56fe\u7247\u6765\u81ea\uff1a",l.a.createElement(r["Link"],{to:"https://github.com/Shopify/restyle"},"@shopify/restyle")))),l.a.createElement("h2",{id:"\u4ecb\u7ecd"},l.a.createElement(r["AnchorLink"],{to:"#\u4ecb\u7ecd","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ecb\u7ecd"),l.a.createElement("p",null,l.a.createElement("code",null,"@shopify/restyle")," \u662f\u7531 shopify \u516c\u53f8\u5f00\u53d1\u7684\u4e00\u4e2a\u7528\u4e8e\u5f00\u53d1 react-native UI \u7ec4\u4ef6\u5e93\u7684\u5de5\u5177\u3002\u4e3b\u8981\u805a\u7126\u5728\u7ec4\u4ef6\u5e93\u7684\u6837\u5f0f\u4e0a\u3002\u5b83\u5047\u8bbe\u6211\u4eec\u7684\u7ec4\u4ef6\u5e93\u662f\u57fa\u4e8e\u4e00\u5957\u8bbe\u8ba1\u4f53\u7cfb\uff0c\u5b9a\u4e49\u4e86\u4e00\u7cfb\u5217\u7684\u989c\u8272\u548c\u95f4\u8ddd\u5e38\u91cf\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49\u4e3b\u9898\u7684\u65b9\u5f0f\u6765\u65b9\u4fbf\u5730\u5b9e\u73b0\u5bf9\u7ec4\u4ef6\u6837\u5f0f\u7684\u5b9a\u4e49\u548c\u81ea\u7531\u5207\u6362\uff08\u5982\u6697\u9ed1\u6a21\u5f0f\uff09\u3002"),l.a.createElement("h2",{id:"\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528"),l.a.createElement("h3",{id:"\u5b9a\u4e49\u4e3b\u9898"},l.a.createElement(r["AnchorLink"],{to:"#\u5b9a\u4e49\u4e3b\u9898","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5b9a\u4e49\u4e3b\u9898"),l.a.createElement("p",null,"\u4efb\u4f55\u4f7f\u7528\u6b64\u5de5\u5177\u5f00\u53d1\u7684\u7ec4\u4ef6\u5e93\u90fd\u8981\u6709\u4e00\u4e2a\u5168\u5c40\u7684\u6837\u5f0f\u5bf9\u8c61\u3002\u5b83\u660e\u786e\u5730\u5b9a\u4e49\u4e86\u4e00\u7cfb\u5217\u7684\u989c\u8272(color)\u3001\u95f4\u8ddd(spacing)\u3001\u65ad\u70b9(breakpoints)\u4ee5\u53ca\u5176\u4ed6\u66f4\u591a\u7684\u5b9a\u4e49\u3002UI \u7ec4\u4ef6\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2a\u6837\u5f0f\u5bf9\u8c61\u4e2d\u7684 key \u503c\u3002\u6bd4\u5982",l.a.createElement("code",null,'backgroundColor="primaryColor"'),"\u3002\u5728",l.a.createElement("code",null,"TypeScript"),"\u7684\u52a0\u6301\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u975e\u5e38\u653e\u5fc3\uff0c\u5b83\u4f1a\u7ea6\u675f\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u7684\u503c\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),l.a.createElement(o["a"],{code:"import { createTheme } from '@shopify/restyle';\n\nconst palette = {\n  purpleLight: '#8C6FF7',\n  purplePrimary: '#5A31F4',\n  purpleDark: '#3F22AB',\n\n  greenLight: '#56DCBA',\n  greenPrimary: '#0ECD9D',\n  greenDark: '#0A906E',\n\n  black: '#0B0B0B',\n  white: '#F0F2F3',\n};\n\nconst theme = createTheme({\n  colors: {\n    mainBackground: palette.white,\n    cardPrimaryBackground: palette.purplePrimary,\n  },\n  spacing: {\n    s: 8,\n    m: 16,\n    l: 24,\n    xl: 40,\n  },\n  breakpoints: {\n    phone: 0,\n    tablet: 768,\n  },\n});\n\nexport type Theme = typeof theme;\nexport default theme;",lang:"js"}),l.a.createElement("p",null,"\u6709\u4e86\u8fd9\u4e2a\u4e3b\u9898\u6837\u5f0f\u5bf9\u8c61\u4e4b\u540e\uff0c\u6211\u4eec\u5e94\u8be5\u5982\u4f55\u5728\u9879\u76ee\u4e2d\u4f7f\u7528\u5462\uff1f"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u5728\u9879\u76ee\u7684",l.a.createElement("code",null,"app.tsx"),"\u91cc\u9762\uff0c\u7528",l.a.createElement("code",null,"ThemeProvider"),"\u5305\u88f9\u4f60\u7684\u7ec4\u4ef6\uff1a")),l.a.createElement(o["a"],{code:"import { ThemeProvider } from '@shopify/restyle';\nimport theme from './theme';\n\nconst App = () => <ThemeProvider theme={theme}>{/* Rest of the app */}</ThemeProvider>;",lang:"tsx"}),l.a.createElement("h3",{id:"colors-\u989c\u8272"},l.a.createElement(r["AnchorLink"],{to:"#colors-\u989c\u8272","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Colors \u989c\u8272"),l.a.createElement("p",null,"\u901a\u5e38\u8bbe\u8ba1\u5e08\u4f1a\u4f7f\u7528\u4e00\u4e2a\u8c03\u8272\u677f\uff08palette\uff09\u6765\u5b9a\u4e49\u7ec4\u4ef6\u8bbe\u8ba1\u4f53\u7cfb\u4e2d\u6d89\u53ca\u5230\u7684\u5404\u79cd\u989c\u8272\u3002\u901a\u5e38\u800c\u8a00\uff0c\u6211\u4eec\u4e0d\u5efa\u8bae\u76f4\u63a5\u5728\u4e3b\u9898\u91cc\u9762\u4f7f\u7528\u989c\u8272\u503c\uff0c\u800c\u662f\u5efa\u8bae\u4f7f\u7528\u8c03\u8272\u677f\u4e2d\u989c\u8272\u5bf9\u5e94\u7684\u8bed\u4e49\u5316\u7684\u540d\u5b57\u3002"),l.a.createElement(o["a"],{code:"// \u5b9a\u4e49\u4e00\u4e2a\u8c03\u8272\u677f\nconst palette = {\n  purpleLight: '#8C6FF7',\n  purplePrimary: '#5A31F4',\n  purpleDark: '#3F22AB',\n\n  greenLight: '#56DCBA',\n  greenPrimary: '#0ECD9D',\n  greenDark: '#0A906E',\n\n  black: '#0B0B0B',\n  white: '#F0F2F3',\n};\n\n// \u5728\u4e3b\u9898\u4e2d\u4f7f\u7528\u8c03\u8272\u677f\u91cc\u989c\u8272\u5bf9\u5e94\u7684\u540d\u5b57\nconst theme = createTheme({\n  colors: {\n    mainBackground: palette.white,\n    mainForeground: palette.black,\n    cardPrimaryBackground: palette.purplePrimary,\n    buttonPrimaryBackground: palette.purplePrimary,\n  },\n});",lang:"js"}),l.a.createElement("p",null,l.a.createElement("em",null,"\u4e3a\u4ec0\u4e48\u9009\u62e9\u4f7f\u7528\u8c03\u8272\u677f\u4e2d\u989c\u8272\u5bf9\u5e94\u7684\u540d\u5b57\u66f4\u6709\u597d\u5904\u5462\uff1f")),l.a.createElement("ol",null,l.a.createElement("li",null,"\u5f88\u5bb9\u6613\u7406\u89e3\u6574\u4e2a APP \u4e2d\u5728\u4f55\u5904\u5e94\u7528\u4e86\u989c\u8272\u3002"),l.a.createElement("li",null,"\u5982\u679c\u8c03\u8272\u677f\u4e2d\u989c\u8272\u53d1\u751f\u4e86\u6539\u53d8\uff0c\u6211\u4eec\u53ea\u9700\u8981\u628a\u989c\u8272\u540d\u79f0\u5bf9\u5e94\u7684\u503c\u6539\u6389\u5c31\u53ef\u4ee5\u4e86\uff0c\u4e0d\u7528\u53bb\u6574\u4e2a APP \u91cc\u627e\u5230\u989c\u8272\u503c\u5e76\u66ff\u6362\u3002\u6bd4\u5982\u628a\u7d2b\u8272\u6362\u6210\u4e86\u6df1\u9ed1\u8272\u3002")),l.a.createElement(o["a"],{code:"const palette = {\n  // ...\n  // purpleDark: '#3F22AB', // \u539f\u503c\n  purpleDark: '#0B0B0B', // \u6539\u540e\u7684\u503c\n};",lang:"js"}),l.a.createElement("ol",{start:3},l.a.createElement("li",null,"\u5982\u4e0a\u9762\u7684\u4e3b\u9898\u4e2d\uff0c",l.a.createElement("code",null,"cardPrimaryBackground"),"\u548c",l.a.createElement("code",null,"buttonPrimaryBackground"),"\u867d\u7136\u90fd\u6307\u5411\u7684\u662f\u540c\u4e00\u4e2a\u989c\u8272\uff0c\u4f46\u662f\u5982\u679c\u9700\u8981\u628a",l.a.createElement("code",null,"buttonPrimaryBackground"),"\u6362\u6210\u7eff\u8272\uff0c\u6539\u52a8\u4e5f\u662f\u975e\u5e38\u7b80\u5355\u65b9\u4fbf\u7684\u3002")),l.a.createElement(o["a"],{code:"const theme = createTheme({\n  colors: {\n    // ...\n    // buttonPrimaryBackground: palette.purplePrimary, // \u539f\u5148\u503c\n    buttonPrimaryBackground: palette.greenPrimary, // \u6539\u540e\u7684\u503c\n  },\n});",lang:"js"}),l.a.createElement("ol",{start:4},l.a.createElement("li",null,"\u53ef\u4ee5\u5728 APP \u4f7f\u7528\u8fc7\u7a0b\u4e2d\u81ea\u7531\u5730\u5207\u6362\u4e3b\u9898\u6837\u5f0f\u3002")),l.a.createElement("h3",{id:"spacing-\u95f4\u8ddd"},l.a.createElement(r["AnchorLink"],{to:"#spacing-\u95f4\u8ddd","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Spacing \u95f4\u8ddd"),l.a.createElement("p",null,"\u95f4\u8ddd\u662f\u6309\u7167\u8863\u670d\u5c3a\u5bf8\u5b9a\u4e49\u7684\u4e00\u4e9b\u5e38\u91cf\u6570\u503c\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),l.a.createElement(o["a"],{code:"const theme = createTheme({\n  spacing: {\n    s: 8,\n    m: 16,\n    l: 24,\n    xl: 40,\n  },\n});",lang:"js"}),l.a.createElement("h3",{id:"breakpoints-\u65ad\u70b9"},l.a.createElement(r["AnchorLink"],{to:"#breakpoints-\u65ad\u70b9","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Breakpoints \u65ad\u70b9"),l.a.createElement("p",null,"\u65ad\u70b9\u662f\u6211\u4eec\u8bbe\u7f6e\u7684\u4e3a\u5e94\u7528\u4e0d\u540c\u6837\u5f0f\u7684\u4e0d\u540c\u76ee\u6807\u5c4f\u5e55\u5c3a\u5bf8\u7684\u6700\u5c0f\u5bbd\u5ea6\u3002\u65ad\u70b9\u53ef\u4ee5\u5b9a\u4e49\u4e3a\u5355\u4e2a\u503c(width)\uff0c\u6216\u8005\u4e00\u4e2a\u5bbd\u9ad8\u503c\u5bf9\u8c61\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),l.a.createElement(o["a"],{code:"const theme = createTheme({\n  breakpoints: {\n    phone: 0,\n    longPhone: {\n      width: 0,\n      height: 812,\n    },\n    tablet: 768,\n    largeTablet: 1024,\n  },\n});",lang:"js"}),l.a.createElement("p",null,"\u5177\u4f53\u53ef\u4ee5\u53c2\u89c1\u4e0b\u9762\u7684",l.a.createElement(r["AnchorLink"],{to:"#responsive-%E5%93%8D%E5%BA%94%E5%BC%8F"},"Responsive \u54cd\u5e94\u5f0f"),"\u7ae0\u8282\u3002"),l.a.createElement("h3",{id:"\u4f7f\u7528\u4e3b\u9898\u6837\u5f0f\u5bf9\u8c61"},l.a.createElement(r["AnchorLink"],{to:"#\u4f7f\u7528\u4e3b\u9898\u6837\u5f0f\u5bf9\u8c61","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528\u4e3b\u9898\u6837\u5f0f\u5bf9\u8c61"),l.a.createElement("p",null,"\u501f\u52a9",l.a.createElement("code",null,"useTheme"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u5728\u4e00\u4e2a\u7ec4\u4ef6\u5185\u4f7f\u7528\u4e3b\u9898\u5185\u5b9a\u4e49\u7684\u5185\u5bb9\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),l.a.createElement(o["a"],{code:"const Component = () => {\n  const theme = useTheme<Theme>();\n  const { cardPrimaryBackground } = theme.colors;\n  // ...\n};",lang:"tsx"}),l.a.createElement("p",null,l.a.createElement("em",null,"\u4e4b\u6240\u4ee5\u4e0d\u76f4\u63a5\u5f15\u5165 theme \u6587\u4ef6\uff0c\u662f\u4e3a\u4e86\u65b9\u4fbf\u6211\u4eec\u5b9e\u73b0\u4e3b\u9898\u5207\u6362\u6548\u679c\u3002")),l.a.createElement("h3",{id:"\u5185\u7f6e\u7684-boxtext-\u7ec4\u4ef6"},l.a.createElement(r["AnchorLink"],{to:"#\u5185\u7f6e\u7684-boxtext-\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5185\u7f6e\u7684 Box/Text \u7ec4\u4ef6"),l.a.createElement("ol",null,l.a.createElement("li",null,"Box \u7ec4\u4ef6\uff1a")),l.a.createElement("p",null,"Box \u7ec4\u4ef6\u53ef\u4ee5\u5b9a\u4e49\u7684\u5c5e\u6027\u7531\u8fd9\u51e0\u4e2a\u5927\u7c7b\u7ec4\u6210\uff1a",l.a.createElement("code",null,"backgroundColor"),", ",l.a.createElement("code",null,"opacity"),", ",l.a.createElement("code",null,"visible"),", ",l.a.createElement("code",null,"layout"),", ",l.a.createElement("code",null,"spacing"),", ",l.a.createElement("code",null,"border"),", ",l.a.createElement("code",null,"shadow"),", ",l.a.createElement("code",null,"position"),"\u3002\u5177\u4f53\u5927\u7c7b\u91cc\u6709\u54ea\u4e9b\u5c5e\u6027\uff0c\u53ef\u4ee5\u53c2\u89c1\u4e0b\u65b9\u7684",l.a.createElement(r["AnchorLink"],{to:"#restyle-functions"},"Restyle Function"),"\u7ae0\u8282\u3002"),l.a.createElement(o["a"],{code:"import { createBox } from '@shopify/restyle';\nimport { Theme } from './theme';\n\nconst Box = createBox<Theme>();\n\nexport default Box;",lang:"tsx"}),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"Text \u7ec4\u4ef6\uff1a")),l.a.createElement("p",null,"Text \u7ec4\u4ef6\u53ef\u4ee5\u5b9a\u4e49\u7684\u5c5e\u6027\u7531\u8fd9\u51e0\u4e2a\u5927\u7c7b\u7ec4\u6210\uff1a",l.a.createElement("code",null,"color"),", ",l.a.createElement("code",null,"opacity"),", ",l.a.createElement("code",null,"visible"),", ",l.a.createElement("code",null,"typography"),", ",l.a.createElement("code",null,"textShadow"),", ",l.a.createElement("code",null,"spacing"),"\u3002\u5177\u4f53\u5927\u7c7b\u91cc\u6709\u54ea\u4e9b\u5c5e\u6027\uff0c\u53ef\u4ee5\u53c2\u89c1\u4e0b\u65b9\u7684",l.a.createElement(r["AnchorLink"],{to:"#restyle-functions"},"Restyle Function"),"\u7ae0\u8282\u3002"),l.a.createElement(o["a"],{code:"import { createText } from '@shopify/restyle';\nimport { Theme } from './theme';\n\nconst Text = createText<Theme>();\n\nexport default Text;",lang:"tsx"}),l.a.createElement("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0cText \u7ec4\u4ef6\u8fd8\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a",l.a.createElement("code",null,"variant"),"\u5c5e\u6027\uff0c\u5b83\u5bf9\u5e94\u7684\u662f theme \u5bf9\u8c61\u91cc",l.a.createElement("code",null,"textVariants"),"\u4e0b\u7684 key \u503c\u3002"),l.a.createElement(o["a"],{code:"const theme = createTheme({\n  ...,\n  textVariants: {\n    header: {\n      fontWeight: 'bold',\n      fontSize: 34,\n      lineHeight: 42.5,\n      color: 'black',\n    },\n    subheader: {\n      fontWeight: '600',\n      fontSize: 28,\n      lineHeight: 36,\n      color: 'black',\n    },\n    body: {\n      fontSize: 16,\n      lineHeight: 24,\n      color: 'black',\n    },\n  },\n});\n\n// In a component\n<Text variant=\"header\">Header</Text>",lang:"tsx"}),l.a.createElement("h3",{id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},l.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),l.a.createElement("p",null,"\u5982\u679c\u6211\u4eec\u60f3\u8981\u81ea\u5df1\u521b\u5efa\u4e00\u4e2a\u7c7b\u4f3c",l.a.createElement("code",null,"Box"),"\u548c",l.a.createElement("code",null,"Text"),"\u8fd9\u6837\u7684\u7ec4\u4ef6\uff0c\u4f46\u662f\u6211\u4eec\u81ea\u5df1\u51b3\u5b9a\u7ec4\u4ef6\u53ef\u4ee5\u63a5\u53d7\u90a3\u4e9b\u7c7b\u522b\u7684\u5c5e\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",l.a.createElement("code",null,"createRestyleComponent"),"\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),l.a.createElement(o["a"],{code:"import { createRestyleComponent, createVariant, spacing, SpacingProps, VariantProps } from '@shopify/restyle';\nimport { Theme } from './theme';\n\ntype Props = SpacingProps<Theme> & VariantProps<Theme, 'cardVariants'>;\nconst Card = createRestyleComponent<Props>([spacing, createVariant({ themeKey: 'cardVariants' })]);\n\nexport default Card;",lang:"tsx"}),l.a.createElement("p",null,"\u5982\u679c\u89c9\u5f97\u8fd9\u8fd8\u4e0d\u591f\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528",l.a.createElement("code",null,"useRestyle"),"\u8fd9\u4e2a hooks \u6765\u5b9e\u73b0\u66f4\u5f3a\u5927\u7684\u5b9a\u5236\u529f\u80fd\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),l.a.createElement(o["a"],{code:"import { TouchableOpacity, View } from 'react-native';\nimport {\n  useRestyle,\n  spacing,\n  border,\n  backgroundColor,\n  SpacingProps,\n  BorderProps,\n  BackgroundColorProps,\n} from '@shopify/restyle';\n\nimport Text from './Text';\nimport { Theme } from './theme';\n\nconst restyleFunctions = [spacing, border, backgroundColor];\ntype Props = SpacingProps<Theme> &\n  BorderProps<Theme> &\n  BackgroundColorProps<Theme> & {\n    onPress: () => void;\n  };\n\nconst Button = ({ onPress, label, ...rest }: Props) => {\n  const props = useRestyle(restyleFunctions, rest);\n\n  return (\n    <TouchableOpacity onPress={onPress}>\n      <View {...props}>\n        <Text variant=\"buttonLabel\">{label}</Text>\n      </View>\n    </TouchableOpacity>\n  );\n};",lang:"tsx"}),l.a.createElement("h3",{id:"restyle-functions"},l.a.createElement(r["AnchorLink"],{to:"#restyle-functions","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Restyle Functions"),l.a.createElement("p",null,l.a.createElement("strong",null,"Restyle Functions"),"\u628a\u7ec4\u4ef6\u5141\u8bb8\u63a5\u53d7\u7684\u5c5e\u6027\u505a\u4e86\u4e00\u4e0b\u5206\u7c7b\uff0c\u540c\u65f6\u6620\u5c04\u5230\u4e3b\u9898\u5bf9\u8c61\uff0c\u6211\u4eec\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u4f7f\u7528\u4ed6\u4eec\u6765\u7ea6\u675f\u7ec4\u4ef6\u7684\u5c5e\u6027\u4ee5\u53ca\u5feb\u901f\u5f00\u53d1\u57fa\u4e8e\u4e3b\u9898\u5bf9\u8c61\u7684\u7ec4\u4ef6\u3002"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u7c7b\u522b"),l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u5bf9\u5e94\u7684\u4e3b\u4f53\u5bf9\u8c61 Key \u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"backgroundColor"),l.a.createElement("td",null,l.a.createElement("code",null,"backgroundColor")),l.a.createElement("td",null,l.a.createElement("code",null,"colors"))),l.a.createElement("tr",null,l.a.createElement("td",null,"color"),l.a.createElement("td",null,l.a.createElement("code",null,"color")),l.a.createElement("td",null,l.a.createElement("code",null,"colors"))),l.a.createElement("tr",null,l.a.createElement("td",null,"opacity"),l.a.createElement("td",null,l.a.createElement("code",null,"opacity")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"visible"),l.a.createElement("td",null,l.a.createElement("code",null,"display")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"spacing"),l.a.createElement("td",null,l.a.createElement("code",null,"margin"),", ",l.a.createElement("code",null,"marginTop"),", ",l.a.createElement("code",null,"marginRight"),", ",l.a.createElement("code",null,"marginBottom"),", ",l.a.createElement("code",null,"marginLeft"),", ",l.a.createElement("code",null,"marginStart"),", ",l.a.createElement("code",null,"marginEnd"),", ",l.a.createElement("code",null,"marginHorizontal"),", ",l.a.createElement("code",null,"marginVertical"),", ",l.a.createElement("code",null,"padding"),", ",l.a.createElement("code",null,"paddingTop"),", ",l.a.createElement("code",null,"paddingRight"),", ",l.a.createElement("code",null,"paddingBottom"),", ",l.a.createElement("code",null,"paddingLeft"),", ",l.a.createElement("code",null,"paddingStart"),", ",l.a.createElement("code",null,"paddingEnd"),", ",l.a.createElement("code",null,"paddingHorizontal"),", ",l.a.createElement("code",null,"paddingVertical")),l.a.createElement("td",null,l.a.createElement("code",null,"spacing"))),l.a.createElement("tr",null,l.a.createElement("td",null,"layout"),l.a.createElement("td",null,l.a.createElement("code",null,"width"),", ",l.a.createElement("code",null,"height"),", ",l.a.createElement("code",null,"minWidth"),", ",l.a.createElement("code",null,"maxWidth"),", ",l.a.createElement("code",null,"minHeight"),", ",l.a.createElement("code",null,"maxHeight"),", ",l.a.createElement("code",null,"overflow"),", ",l.a.createElement("code",null,"aspectRatio"),", ",l.a.createElement("code",null,"alignContent"),", ",l.a.createElement("code",null,"alignItems"),", ",l.a.createElement("code",null,"alignSelf"),", ",l.a.createElement("code",null,"justifyContent"),", ",l.a.createElement("code",null,"flex"),", ",l.a.createElement("code",null,"flexBasis"),", ",l.a.createElement("code",null,"flexDirection"),", ",l.a.createElement("code",null,"flexGrow"),", ",l.a.createElement("code",null,"flexShrink"),", ",l.a.createElement("code",null,"flexWrap")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"position"),l.a.createElement("td",null,l.a.createElement("code",null,"position"),", ",l.a.createElement("code",null,"top"),", ",l.a.createElement("code",null,"right"),", ",l.a.createElement("code",null,"bottom"),", ",l.a.createElement("code",null,"left"),", ",l.a.createElement("code",null,"start"),", ",l.a.createElement("code",null,"end")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"position"),l.a.createElement("td",null,l.a.createElement("code",null,"zIndex")),l.a.createElement("td",null,l.a.createElement("code",null,"zIndices"))),l.a.createElement("tr",null,l.a.createElement("td",null,"border"),l.a.createElement("td",null,l.a.createElement("code",null,"borderBottomWidth"),", ",l.a.createElement("code",null,"borderLeftWidth"),", ",l.a.createElement("code",null,"borderRightWidth"),", ",l.a.createElement("code",null,"borderStartWidth"),", ",l.a.createElement("code",null,"borderEndWidth"),", ",l.a.createElement("code",null,"borderStyle"),", ",l.a.createElement("code",null,"borderTopWidth"),", ",l.a.createElement("code",null,"borderWidth")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"border"),l.a.createElement("td",null,l.a.createElement("code",null,"borderColor"),", ",l.a.createElement("code",null,"borderTopColor"),", ",l.a.createElement("code",null,"borderRightColor"),", ",l.a.createElement("code",null,"borderLeftColor"),", ",l.a.createElement("code",null,"borderStartColor"),", ",l.a.createElement("code",null,"borderEndColor"),", ",l.a.createElement("code",null,"borderBottomColor")),l.a.createElement("td",null,l.a.createElement("code",null,"colors"))),l.a.createElement("tr",null,l.a.createElement("td",null,"border"),l.a.createElement("td",null,l.a.createElement("code",null,"borderRadius"),", ",l.a.createElement("code",null,"borderBottomLeftRadius"),", ",l.a.createElement("code",null,"borderBottomRightRadius"),", ",l.a.createElement("code",null,"borderBottomStartRadius"),", ",l.a.createElement("code",null,"borderBottomEndRadius"),", ",l.a.createElement("code",null,"borderTopLeftRadius"),", ",l.a.createElement("code",null,"borderTopRightRadius"),", ",l.a.createElement("code",null,"borderTopStartRadius"),", ",l.a.createElement("code",null,"borderTopEndRadius")),l.a.createElement("td",null,l.a.createElement("code",null,"borderRadii"))),l.a.createElement("tr",null,l.a.createElement("td",null,"shadow"),l.a.createElement("td",null,l.a.createElement("code",null,"shadowOpacity"),", ",l.a.createElement("code",null,"shadowOffset"),", ",l.a.createElement("code",null,"shadowRadius"),", ",l.a.createElement("code",null,"elevation")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"shadow"),l.a.createElement("td",null,l.a.createElement("code",null,"shadowColor")),l.a.createElement("td",null,l.a.createElement("code",null,"colors"))),l.a.createElement("tr",null,l.a.createElement("td",null,"textShadow"),l.a.createElement("td",null,l.a.createElement("code",null,"textShadowOffset"),", ",l.a.createElement("code",null,"textShadowRadius")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"textShadow"),l.a.createElement("td",null,l.a.createElement("code",null,"textShadowColor")),l.a.createElement("td",null,l.a.createElement("code",null,"colors"))),l.a.createElement("tr",null,l.a.createElement("td",null,"typography"),l.a.createElement("td",null,l.a.createElement("code",null,"fontFamily"),", ",l.a.createElement("code",null,"fontSize"),", ",l.a.createElement("code",null,"fontStyle"),", ",l.a.createElement("code",null,"fontWeight"),", ",l.a.createElement("code",null,"letterSpacing"),", ",l.a.createElement("code",null,"lineHeight"),", ",l.a.createElement("code",null,"textAlign"),", ",l.a.createElement("code",null,"textDecorationLine"),", ",l.a.createElement("code",null,"textDecorationStyle"),", ",l.a.createElement("code",null,"textTransform")),l.a.createElement("td",null)))),l.a.createElement("h3",{id:"variants"},l.a.createElement(r["AnchorLink"],{to:"#variants","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Variants"),l.a.createElement("p",null,l.a.createElement("code",null,"variant")," \u662f ",l.a.createElement("code",null,"Restyle Function"),"\u7684\u4e00\u79cd\u5f62\u5f0f\u3002\u5b83\u53ef\u4ee5\u5c06\u4e00\u4e2a\u5c5e\u6027\u6620\u5c04\u5230\u591a\u4e2a\u5176\u4ed6\u5c5e\u6027\u3002",l.a.createElement("code",null,"variant"),"\u9700\u8981\u5bf9\u5e94\u5230\u4e3b\u9898\u5bf9\u8c61\u4e2d\u7684 key \u503c\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),l.a.createElement(o["a"],{code:"// In theme\nconst theme = createTheme({\n  // ...\n  spacing: {\n    s: 8,\n    m: 16,\n    l: 24,\n  },\n  colors: {\n    cardRegularBackground: '#EEEEEE',\n  },\n  breakpoints: {\n    phone: 0,\n    tablet: 768,\n  },\n  cardVariants: {\n    defaults: {\n      // We can define defaults for the variant here.\n      // This will be applied after the defaults passed to createVariant and before the variant defined below.\n    },\n    regular: {\n      // We can refer to other values in the theme here, and use responsive props\n      padding: {\n        phone: 'x2',\n        tablet: 'x3',\n      },\n    }\n    elevated: {\n      padding: {\n        phone: 'x2',\n        tablet: 'x3',\n      },\n      shadowColor: '#000',\n      shadowOpacity: 0.2,\n      shadowOffset: {width: 0, height: 5},\n      shadowRadius: 15,\n      elevation: 5,\n    }\n  }\n})\n\nimport {createVariant, createRestyleComponent, VariantProps} from '@shopify/restyle'\nconst variant = createVariant<Theme>({themeKey: 'cardVariants', defaults: {\n  margin: {\n    phone: 'x2',\n    tablet: 'x3',\n  },\n  backgroundColor: 'cardRegularBackground',\n}})\n\nconst Card = createRestyleComponent<VariantProps<Theme, 'cardVariants'>>([variant])\n\n// variant\u7684\u503c\u5fc5\u987b\u662f`cardVariants`\u5bf9\u8c61\u4e0b\u7684key\u503c\u3002TypeScript\u4f1a\u81ea\u52a8\u7ed9\u6211\u4eec\u63d0\u793a\u3002\n<Card variant=\"elevated\" />",lang:"tsx"}),l.a.createElement("h3",{id:"responsive-\u54cd\u5e94\u5f0f"},l.a.createElement(r["AnchorLink"],{to:"#responsive-\u54cd\u5e94\u5f0f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Responsive \u54cd\u5e94\u5f0f"),l.a.createElement("p",null,"\u6211\u4eec\u901a\u8fc7\u5728\u4e3b\u9898\u5bf9\u8c61\u4e2d\u5b9a\u4e49 breakpoints\uff08\u65ad\u70b9\uff09\uff0c\u6765\u5b9e\u73b0\u54cd\u5e94\u5f0f\u6548\u679c\u3002\u6bcf\u4e2a Restyle \u652f\u6301\u7684\u5c5e\u6027\u90fd\u53ef\u4ee5\u4f7f\u7528\u54cd\u5e94\u5f0f\u5199\u6cd5\u6765\u652f\u6301\u4e0d\u540c\u5c4f\u5e55\u5c3a\u5bf8\u4e0b\u7684\u4e0d\u540c\u6548\u679c\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),l.a.createElement(o["a"],{code:"const theme = createTheme({\n  // ...\n  breakpoints: {\n    phone: 0,\n    tablet: 768,\n  }\n})\n\n// \u7528\u6cd51\uff1a\u4e0d\u5173\u5fc3\u65ad\u70b9\n<Box flexDirection=\"row\" />\n\n// \u7528\u6cd52\uff1a\u4e0d\u540c\u5c3a\u5bf8\u4e0d\u540c\u6548\u679c\n<Box flexDirection={{ phone: 'column', tablet: 'row' }} />",lang:"tsx"}),l.a.createElement("p",null,"\u53e6\u5916\uff0c\u5982\u679c\u6211\u4eec\u60f3\u8981\u628a\u4e00\u4e9b\u5c5e\u6027\u8ddf\u54cd\u5e94\u5f0f\u5173\u8054\uff0c\u6211\u4eec\u53ef\u4ee5\u501f\u52a9",l.a.createElement("code",null,"useResponsiveProp"),"\u8fd9\u4e2a hooks\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),l.a.createElement(o["a"],{code:"const Button = ({ color = { phone: 'purple', tablet: 'blue' }, ...restProps }) => {\n  // \u8bbe\u5907\u662fphone\u7684\u65f6\u5019\uff0c\u503c\u4e3apurple\uff1b\u8bbe\u5907\u662ftablet\u7684\u65f6\u5019\uff0c\u503c\u4e3ablue\n  const textColorProp = useResponsiveProp(color);\n\n  const bgColor = textColorProp === 'purple' ? 'lightPurple' : 'lightBlue';\n\n  return (\n    <Button backgroundColor={bgColor} {...restProps}>\n      {/* \u8fd9\u91cc\u4e0d\u9700\u8981\u8f6c\uff0c\u56e0\u4e3aText\u4f1a\u81ea\u52a8\u8f6c */}\n      <Text color={color}>click me</Text>\n      <ActivityIndicator color={theme.colors[textColorProp]} />\n    </Button>\n  );\n};",lang:"tsx"}),l.a.createElement("h3",{id:"\u4e3b\u9898\u5207\u6362"},l.a.createElement(r["AnchorLink"],{to:"#\u4e3b\u9898\u5207\u6362","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4e3b\u9898\u5207\u6362"),l.a.createElement("p",null,"\u57fa\u4e8e",l.a.createElement("code",null,"Restyle"),"\u5b9e\u73b0\u4e3b\u9898\u5207\u6362\u6548\u679c\u5f88\u7b80\u5355\uff0c\u6211\u4eec\u53ea\u9700\u8981\u63d0\u4f9b\u4e24\u5957\u6216\u8005\u591a\u5957\u4e0d\u540c\u7684\u4e3b\u9898\u5373\u53ef\u3002\u56e0\u4e3a\u4e3b\u9898\u4e2d\u5e76\u6ca1\u6709\u76f4\u63a5\u4f7f\u7528\u989c\u8272\uff0c\u800c\u662f\u4f7f\u7528\u7684\u8c03\u8272\u677f\u4e2d\u7684\u989c\u8272\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u81ea\u7531\u5730\u5207\u6362\u4e3b\u9898\u3002\u6bd4\u5982\u6211\u4eec\u60f3\u8981\u5b9e\u73b0\u6697\u9ed1\u6a21\u5f0f\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),l.a.createElement(o["a"],{code:'// \u5b9a\u4e49\u4e3b\u9898\u5bf9\u8c61\nexport const palette = {\n  purple: \'#5A31F4\',\n  white: \'#FFF\',\n  black: \'#111\',\n  darkGray: \'#333\',\n  lightGray: \'#EEE\',\n};\n\nconst theme = createTheme({\n  spacing: {\n    s: 8,\n    m: 16,\n  },\n  colors: {\n    mainBackground: palette.lightGray,\n    mainForeground: palette.black,\n\n    primaryCardBackground: palette.purple,\n    secondaryCardBackground: palette.white,\n    primaryCardText: palette.white,\n    secondaryCardText: palette.black,\n  },\n  breakpoints: {},\n  textVariants: {\n    body: {\n      fontSize: 16,\n      lineHeight: 24,\n      color: \'mainForeground\',\n    },\n  },\n  cardVariants: {\n    primary: {\n      backgroundColor: \'primaryCardBackground\',\n      shadowOpacity: 0.3,\n    },\n    secondary: {\n      backgroundColor: \'secondaryCardBackground\',\n      shadowOpacity: 0.1,\n    },\n  },\n});\n\ntype Theme = typeof theme;\n\n// \u5b9a\u4e49\u6697\u9ed1\u4e3b\u9898\u3002\u533a\u522b\u53ea\u662f\u989c\u8272\u4e0d\u4e00\u6837\u3002\nconst darkTheme: Theme = {\n  ...theme,\n  colors: {\n    ...theme.colors,\n    mainBackground: palette.black,\n    mainForeground: palette.white,\n\n    secondaryCardBackground: palette.darkGray,\n    secondaryCardText: palette.white,\n  },\n};\n\n// \u7ec4\u4ef6\u4e2d\u4f7f\u7528\nconst App = () => {\n  const [darkMode, setDarkMode] = useState(false);\n  return (\n    <ThemeProvider theme={darkMode ? darkTheme : theme}>\n      <Box padding="x3" backgroundColor="mainBackground" flex={1}>\n        <Box backgroundColor="primaryCardBackground" margin="x2" padding="x3" flexGrow={1}>\n          <Text variant="body" color="primaryCardText">\n            Primary Card\n          </Text>\n        </Box>\n        <Box backgroundColor="secondaryCardBackground" margin="x2" padding="x3" flexGrow={1}>\n          <Text variant="body" color="secondaryCardText">\n            Secondary Card\n          </Text>\n        </Box>\n        <Box marginTop="x3">\n          <Switch value={darkMode} onValueChange={(value: boolean) => setDarkMode(value)} />\n        </Box>\n      </Box>\n    </ThemeProvider>\n  );\n};\n\nexport default App;',lang:"tsx"})))}));n["default"]=e=>{var n=l.a.useContext(r["context"]),t=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(c,{demos:t})}}}]);