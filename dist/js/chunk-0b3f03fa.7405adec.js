(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b3f03fa"],{"73b5":function(e,t,o){},8880:function(e,t,o){"use strict";o.r(t);var d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"sun-doc-rate sun-doc-content"},[o("section",[o("h1",[e._v("Rate 评分")]),o("div",{staticClass:"card"},[o("h3",[e._v("引入")]),o("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[o("pre",[o("code",{domProps:{innerHTML:e._s(e.importCode)}})])])]),o("h2",[e._v("代码展示")]),e._l(e.cartList,(function(t,d){return o("div",{key:d,staticClass:"card"},[o("h3",[e._v(e._s(t.title))]),o("p",{domProps:{innerHTML:e._s(t.desc)}}),o("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t.code?o("pre",[o("code",{staticClass:"language-html",domProps:{textContent:e._s(t.code)}})]):e._e(),t.jsCode?o("pre",[o("code",{staticClass:"language-js",domProps:{textContent:e._s(t.jsCode)}})]):e._e()])])})),o("h2",[e._v("API")]),o("div",{staticClass:"card"},[o("h3",[e._v("Props")]),o("table",[e._m(0),o("tbody",e._l(e.propsList,(function(t,d){return o("tr",{key:d},[o("td",[e._v(e._s(t.propName))]),o("td",{domProps:{innerHTML:e._s(t.desc)}}),o("td",[o("span",{staticClass:"info-string"},[e._v(e._s(t.type))])]),o("td",["-"===t.default?o("span",[e._v(e._s(t.default))]):o("code",[e._v(e._s(t.default))])])])})),0)])]),o("div",{staticClass:"card"},[o("h3",[e._v("Events")]),o("table",[e._m(1),o("tbody",e._l(e.eventsList,(function(t,d){return o("tr",{key:d},[o("td",[e._v(e._s(t.eventName))]),o("td",[e._v(e._s(t.desc))]),o("td",[o("span",{staticClass:"info-string"},[e._v(e._s(t.callParams))])])])})),0)])])],2)])},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("tr",[o("th",[e._v("参数")]),o("th",[e._v("说明")]),o("th",[e._v("类型")]),o("th",[e._v("默认值")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("tr",[o("th",[e._v("事件名")]),o("th",[e._v("说明")]),o("th",[e._v("回调参数")])])])}],s={data:function(){return{importCode:"import Vue from 'vue'; \nimport { Rate } from 'vue-sun-ui'; \n \nVue.use(Rate);",propsList:[{propName:"v-model",desc:"当前分值",type:"number",default:"-"},{propName:"count",desc:"\t图标总数",type:"number | string",default:"5"},{propName:"size",desc:"图标大小，默认单位为<code>px</code>",type:"number | string",default:"20px"},{propName:"gutter",desc:"图标间距，默认单位为<code>px</code>",type:"number | string",default:"4px"},{propName:"color",desc:"选中的颜色\t",type:"string",default:"#ee0a24"},{propName:"void-color",desc:"未选中时的颜色",type:"string",default:"#c8c9cc"},{propName:"disabled-color",desc:"禁用时的颜色",type:"string",default:"#c8c9cc"},{propName:"icon",desc:'选中时的<a href="#/icon">图标名称</a>',type:"string",default:"star-f"},{propName:"readonly",desc:"是否为只读状态",type:"boolean",default:"false"},{propName:"disabled",desc:"是否禁用评分",type:"boolean\t",default:"false"}],eventsList:[{eventName:"change",desc:"当前分值变化时触发的事件",callParams:"value: 当前分值"}],cartList:[{title:"基础用法",desc:"使用<code>v-model</code>初始化选中的个数",code:'<sun-rate v-model="value" />',jsCode:"export default {\n  data() {\n    return {\n      value: 3,\n    };\n  },\n};"},{title:"自定义图标",desc:"通过<code>icon</code>属性设置选中的图标，<code>void-icon</code>设置未选中的图标",code:'<sun-rate v-model="value" icon="like" void-icon="like-o" />'},{title:"自定义样式",desc:"通过<code>size</code>属性设置大小，<code>color</code>设置选中的颜色，<code>void-color</code>设置未选中的颜色",code:'<sun-rate v-model="value" :size="25" color="#ffd21e" void-icon="star-f" void-color="#eee" />'},{title:"自定义数量",desc:"通过 <code>count</code>设置图标的个数",code:'<sun-rate v-model="value" :count="6" />'},{title:"禁用状态",desc:"通过<code>disabled</code>属性设置禁止选择",code:'<sun-rate v-model="value" disabled />'},{title:"只读状态",desc:"通过<code>readonly</code>属性设置只读状态，效果和<code>disabled</code>一样，不过颜色不会变",code:'<sun-rate v-model="value" readonly />'},{title:"监听 change 事件",code:'<sun-rate v-model="value7" @change="onChange" />',jsCode:"export default {\n  method: {\n    onChange(value) {\n      this.$toast('当前值：' + value);\n    },\n  },\n};"}]}}},c=s,n=(o("8f91"),o("2877")),r=Object(n["a"])(c,d,a,!1,null,null,null);t["default"]=r.exports},"8f91":function(e,t,o){"use strict";var d=o("73b5"),a=o.n(d);a.a}}]);
//# sourceMappingURL=chunk-0b3f03fa.7405adec.js.map