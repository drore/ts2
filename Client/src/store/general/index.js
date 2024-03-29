import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import api from '@/api'

const generalModule = {
  namespaced: true,
  state: {
    manuscripts: [],
    env: "prod",
    help_section: null,
    help_sub_section: null,
    help_ui: 'docked',
    help_shown: false
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    gotManuscripts(state, payload) {
      state.manuscripts = payload
    },
    changeHelpUI(state, payload) { state.help_ui = payload },
  
    setEnv(state, payload) {
      state.env = payload
    },
    showHelp(state,payload){
      state.help_shown = payload
    },
    showHelpSection(state, payload) {
      const helpParts = payload && payload.split('__')
      if (!helpParts || !helpParts.length) {
        state.help_section = payload
      }
      else {
        state.help_section = helpParts[0]
        state.help_sub_section = helpParts[1]
      }
    },
  },
  actions: {
    nuxtServerInit({ commit }, { req }) {
    },
    showHelpSection({ commit }, section) {
      commit('showHelpSection', section)
    },
    changeHelpUI({ commit }, ui) {
      commit('changeHelpUI', ui)
    },
    showHelp({commit }, show){
      commit('showHelp',show)
    },
    async getInitialData({ commit }) {
      if (window.location.host.indexOf('demo') != -1) {
        commit("setEnv", 'demo')
      }
  
      // Manuscripts
      let manuscripts;
      const manuscriptsFromLS = localStorage.getItem('manuscripts')
      
      if (!manuscriptsFromLS) {
        manuscripts = await api.getManuscripts()
        localStorage.setItem('manuscripts', JSON.stringify(manuscripts))
      }
      else {
        manuscripts = JSON.parse(manuscriptsFromLS)
      }
      commit("gotManuscripts", manuscripts)
    },
  }
}


export default generalModule;