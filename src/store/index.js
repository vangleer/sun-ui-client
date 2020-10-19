import Vue from 'vue'
import Vuex from 'vuex'
import cnData from '../assets/data/index'
import enData from '../assets/data/en_US.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: '中文',
    data:localStorage.getItem('lang')==='en-US'?enData:cnData
  },
  mutations: {
    changeLanguage(state,language) {
      state.language = language === 'zh-CN' ? 'En' : '中文'
      if(language==='zh-CN') {
        state.data = cnData
      }else {
        state.data = enData
      }
    }
  },
  actions: {},
  modules: {}
})