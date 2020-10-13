(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9575"],{"8cb6":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sun-doc-content sun-doc-nav-bar"},[s("section",[s("h1",[t._v("NavBar 导航栏")]),s("div",{staticClass:"card"},[s("h3",[t._v("引入")]),s("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[s("pre",[s("code",{domProps:{innerHTML:t._s(t.importCode)}})])])]),s("h2",[t._v("代码展示")]),t._l(t.cartList,(function(e,a){return s("div",{key:a,staticClass:"card"},[s("h3",[t._v(t._s(e.title))]),s("p",{domProps:{innerHTML:t._s(e.desc)}}),s("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e.code?s("pre",[s("code",{staticClass:"language-html",domProps:{textContent:t._s(e.code)}})]):t._e(),e.jsCode?s("pre",[s("code",{staticClass:"language-js",domProps:{textContent:t._s(e.jsCode)}})]):t._e()])])})),s("h2",[t._v("API")]),s("div",{staticClass:"card"},[s("h3",[t._v("Props")]),s("table",[t._m(0),s("tbody",t._l(t.propsList,(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(e.propName))]),s("td",{domProps:{innerHTML:t._s(e.desc)}}),s("td",[s("span",{staticClass:"info-string"},[t._v(t._s(e.type))])]),s("td",["-"===e.default?s("span",[t._v(t._s(e.default))]):s("code",[t._v(t._s(e.default))])])])})),0)])]),s("div",{staticClass:"card"},[s("h3",[t._v("Events")]),s("table",[t._m(1),s("tbody",t._l(t.eventsList,(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(e.eventName))]),s("td",[t._v(t._s(e.desc))]),s("td",[s("span",{staticClass:"info-string"},[t._v(t._s(e.callParams))])])])})),0)])]),s("div",{staticClass:"card"},[s("h3",[t._v("Slots")]),s("table",[t._m(2),s("tbody",t._l(t.slotsList,(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(e.slotName))]),s("td",[t._v(t._s(e.desc))])])})),0)])])],2)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("参数")]),s("th",[t._v("说明")]),s("th",[t._v("类型")]),s("th",[t._v("默认值")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("事件名")]),s("th",[t._v("说明")]),s("th",[t._v("回调参数")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("事件名")]),s("th",[t._v("说明")])])])}],r={data:function(){return{importCode:"import Vue from 'vue';\nimport { NavBar } from 'vue-sun-ui';\n\nVue.use(NavBar);",propsList:[{propName:"title",desc:"标题",type:"string",default:'"'},{propName:"left-text",desc:"左侧文案",type:"string",default:'"'},{propName:"right-text",desc:"右侧文案",type:"string",default:'"'},{propName:"left-arrow",desc:"是否显示左侧箭头",type:"boolean",default:"false"},{propName:"border",desc:"是否显示下边框",type:"boolean",default:"true"},{propName:"fixed",desc:"是否固定在顶部\t",type:"boolean",default:"false"},{propName:"z-index",desc:"元素 z-index",type:"number | string",default:"1"}],eventsList:[{eventName:"click-left",desc:"点击左侧按钮时触发\t",callParams:"-"},{eventName:"click-right",desc:"点击右侧按钮时触发",callParams:"-"}],slotsList:[{slotName:"title",desc:"自定义标题"},{slotName:"left",desc:"自定义左侧区域内容"},{slotName:"right",desc:"自定义右侧区域内容"}],cartList:[{title:"基础用法",code:'<sun-nav-bar \n    title="标题" \n    left-text="返回" \n    right-text="按钮" \n    left-arrow \n    @click-left="onClickLeft" \n    @click-right="onClickRight" \n/>',jsCode:"import { Toast } from 'vue-sun-ui';\n\nexport default {\n  methods: {\n    onClickLeft() {\n      Toast('返回');\n    },\n    onClickRight() {\n      Toast('按钮');\n    },\n  },\n};"},{title:"使用插槽",desc:"通过插槽自定义导航栏两侧的内容。",code:'<sun-nav-bar title="标题" left-text="返回" left-arrow>\n  <template #right>\n    <sun-icon name="plus" size="18" />\n  </template>\n</sun-nav-bar>'}]}}},i=r,l=s("2877"),o=Object(l["a"])(i,a,n,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0e9575.00b5cec3.js.map