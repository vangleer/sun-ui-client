(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229d4b"],{deb6:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"sun-doc-popup sun-doc-content"},[o("section",[o("h1",[e._v("Popup 弹出层")]),e._m(0),o("div",{staticClass:"card"},[o("h3",[e._v("引入")]),o("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[o("pre",[o("code",{domProps:{innerHTML:e._s(e.importCode)}})])])]),o("h2",[e._v("代码展示")]),e._l(e.cartList,(function(t,s){return o("div",{key:s,staticClass:"card"},[o("h3",[e._v(e._s(t.title))]),o("p",{domProps:{innerHTML:e._s(t.desc)}}),o("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[o("pre",[e._v("          "),o("code",{staticClass:"language-html",domProps:{textContent:e._s(t.code)}}),e._v("\n          "),t.jsCode?o("code",{staticClass:"language-js",domProps:{textContent:e._s(t.jsCode)}}):e._e(),e._v("\n        ")])])])})),o("h2",[e._v("API")]),o("div",{staticClass:"card"},[o("h3",[e._v("Props")]),o("table",[e._m(1),o("tbody",e._l(e.propsList,(function(t,s){return o("tr",{key:s},[o("td",[e._v(e._s(t.propName))]),o("td",{domProps:{innerHTML:e._s(t.desc)}}),o("td",[o("span",{staticClass:"info-string"},[e._v(e._s(t.type))])]),o("td",["-"===t.default?o("span",[e._v(e._s(t.default))]):o("code",[e._v(e._s(t.default))])])])})),0)])]),o("div",{staticClass:"card"},[o("h3",[e._v("Events")]),o("table",[e._m(2),o("tbody",e._l(e.eventsList,(function(t,s){return o("tr",{key:s},[o("td",[e._v(e._s(t.eventName))]),o("td",[e._v(e._s(t.desc))]),o("td",[o("span",{staticClass:"info-string"},[e._v(e._s(t.callParams))])])])})),0)])])],2)])},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"card"},[o("h3",[e._v("介绍")]),o("div",[e._v(" 弹出层容器，用于展示弹窗、信息提示等内容。 ")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("tr",[o("th",[e._v("参数")]),o("th",[e._v("说明")]),o("th",[e._v("类型")]),o("th",[e._v("默认值")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("tr",[o("th",[e._v("事件名")]),o("th",[e._v("说明")]),o("th",[e._v("回调参数")])])])}],c={data:function(){return{importCode:"import Vue from 'vue';\nimport { Popup } from 'vue-sun-ui';\n\nVue.use(Popup);",propsList:[{propName:"v-model (value)",desc:"是否显示弹出层",type:"boolean",default:"false"},{propName:"overlay",desc:"是否显示遮罩层\t",type:"boolean",default:"true"},{propName:"position",desc:"弹出位置，可选值为 <code>top</code> <code>bottom</code> <code>right</code> <code>left</code>",type:"string",default:"center"},{propName:"overlay-class",desc:"自定义遮罩层类名",type:"string",default:"-"},{propName:"overlay-style",desc:"自定义遮罩层样式",type:"object",default:"-"},{propName:"duration",desc:"动画时长，单位秒",type:"number | string",default:"0.3"},{propName:"closeable",desc:"是否显示关闭图标",type:"boolean",default:"false"},{propName:"close-icon",desc:"关闭图标名称或图片链接",type:"string",default:"cross"},{propName:"close-icon-position",desc:"关闭图标位置，可选值为<code>top-left</code> <code>bottom-left</code> <code>bottom-right</code>",type:"string",default:"top-right"},{propName:"tag",desc:"HTML 标签",type:"string",default:"div"}],eventsList:[{eventName:"click",desc:"点击弹出层时触发",callParams:"event: Event"},{eventName:"open",desc:"打开弹出层时触发",callParams:"-"},{eventName:"close",desc:"关闭弹出层时触发\t",callParams:"-"},{eventName:"opened",desc:"打开弹出层且动画结束后触发",callParams:"-"},{eventName:"closed",desc:"关闭弹出层且动画结束后触发",callParams:"-"},{eventName:"click-overlay",desc:"点击遮罩层时触发",callParams:"-"}],cartList:[{title:"基础用法",desc:"通过 <code>v-model</code> 控制弹出层是否展示。",code:'<sun-cell is-link bg-cffect @click="showPopup">展示弹出层</sun-cell>\n<sun-popup v-model="show" >内容</sun-popup>',jsCode:"export default {\n  data() {\n    return {\n      show: false,\n    };\n  },\n\n  methods: {\n    showPopup() {\n      this.show = true;\n    },\n  },\n};"},{title:"弹出位置",desc:"通过 <code>position</code> 属性设置弹出位置，默认居中弹出，可以设置为 <code>top</code>、<code>bottom</code>、<code>left</code>、<code>right</code>。",code:'<sun-popup v-model="show" position="top" :style="{ height: \'30%\' }" />'},{title:"关闭图标",desc:"设置 <code>closeable</code> 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 <code>close-icon</code> 属性自定义图标，使用 <code>close-icon-position</code> 属性可以自定义图标位置。",code:'<sun-popup \n  v-model="show" \n  position="bottom" \n  closeable \n/>\n\x3c!-- 自定义图标 --\x3e\n<sun-popup \n  v-model="show" \n  position="bottom" \n  closeable \n  close-icon="plus" \n/>\n\x3c!-- 图标位置 --\x3e\n<sun-popup \n  v-model="show" \n  position="bottom" \n  closeable \n  close-icon-position="top-left" \n/>'},{title:"圆角弹窗",desc:"设置 <code>round</code> 属性后，弹窗会根据弹出位置添加不同的圆角样式。",code:'<sun-popup v-model="showRound" position="bottom" round />'}]}}},d=c,a=o("2877"),l=Object(a["a"])(d,s,n,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d229d4b.af5429ea.js.map