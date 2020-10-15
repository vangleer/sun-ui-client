import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: '中文',
  },
  mutations: {
    changeLanguage(state) {
      state.language = state.language === '中文' ? 'En' : '中文'
    }
  },
  actions: {},
  modules: {}
})