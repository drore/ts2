import manuscriptsManager from '@/manuscriptsManager'
import api from '@/api.js'

const statsModule = {
  namespaced: true,
  state: {
    userStats:{daily:{}},
  leaders:[]
  },
  getters: {
    
  },
  mutations: {
    gotUserDailyMSStats(state, payload) {
      state.userStats.daily = payload
    },
    gotLeaderBoard(state, payload) {
      state.leaders = payload
    }
  
  },
  actions: {
    async getUserDailyMSStats({ commit }, params) {
      commit('gotUserDailyMSStats', await api.getUserDailyMSStats(params.uid))
    },
    async getLeaderBoard({ commit }, params) {
      commit('gotLeaderBoard', await api.getLeaderBoard(params))
    },
  }
}


export default statsModule;