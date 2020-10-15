import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入基本样式
import './assets/css/base.css'
// 引入vue-sun-ui
import SunUi from 'vue-sun-ui'
// 导入vue-sun-ui样式
import 'vue-sun-ui/dist/vue-sun-ui.css'
import Highlight from './assets/js/highlight'
import VueI18n from 'vue-i18n'

import ShowCode from './components/ShowCode.vue'
import PropsList from './components/PropsList.vue'
import EventsList from './components/EventsList.vue'
import SlotsList from './components/SlotsList.vue'
import MethodsList from './components/MethodsList.vue'
import OptionsList from './components/OptionsList.vue'
Vue.component('show-code',ShowCode)
Vue.component('props-list',PropsList)
Vue.component('events-list',EventsList)
Vue.component('slots-list',SlotsList)
Vue.component('methods-list',MethodsList)
Vue.component('options-list',OptionsList)

Vue.use(Highlight)
// 安装SunUi
Vue.use(SunUi)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh', // 定义默认语言为中文 
  messages: {
    'zh': require('./locale/zh'),
    'en': require('./locale/en')
  },
});
Vue.config.productionTip = false
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')