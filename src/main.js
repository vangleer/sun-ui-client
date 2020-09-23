import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入vue-sun-ui
import SunUi from 'vue-sun-ui'
// 导入vue-sun-ui样式
import 'vue-sun-ui/dist/vue-sun-ui.css'

// 安装SunUi
Vue.use(SunUi)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')