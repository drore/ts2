import { auth, GoogleProvider } from "@/firebase";
import api from '@/api'

const contentModule = {
  namespaced: true,
  state: {
    manuscript_content: [],
    content: []
  },
  getters: {

  },
  mutations: {
    // General content
    gotContent(state, payload) {
      state.content = payload.docs.map(d => {
        const data = d.data()
        return {
          id: d.id,
          token: data.token,
          lang: data.lang,
          value: data.value
        }
      })
    },
    addContentItem(state, payload) {
      if (state.content) {
        state.content.push({
          token: 'temp_' + new Date().getTime(),
          value: null,
          lang: payload.lang
        })
      }
    },
    // Manuscript content
    gotManuscriptContent(state, payload) {
      state.manuscript_content = payload
    },
    addMSContentItem(state, payload) {
      if (state.manuscript_content) {
        state.manuscript_content.push({
          token: 'temp_' + new Date().getTime(),
          value: null,
          lang: payload.lang,
          manuscript: payload.manuscript
        })
      }
    },
    updatedContentItem(state, payload) {
      const mc = state.content.find(mc => {
        return mc.id === payload.id
      })

      const indexToUpdate = state.content.indexOf(mc)

      state.content[indexToUpdate] = Object.assign(
        state.content[indexToUpdate],
        payload
      )
    },
    updatedMSContentItem(state, payload) {
      const mc = state.manuscript_content.find(mc => {
        return mc.id === payload.id
      })

      const indexToUpdate = state.manuscript_content.indexOf(mc)

      state.manuscript_content[indexToUpdate] = Object.assign(
        state.manuscript_content[indexToUpdate],
        payload
      )
    }
  },
  actions: {
    async getContent({ commit, state }, lang) {
      let locale = lang || state.i18n.locale
      commit('gotContent', await api.getContent(locale))
    },
    addContentItem({ commit }, lang) {
      commit('addContentItem', { lang: lang })
    },
    async updateContentItem({ commit, dispatch }, content) {
      await api.updateContentItem(content)
      commit('updatedContentItem', content)
    },
    // Manuscript content
    async getManuscriptContent({ commit }, params) {
      commit(
        'gotManuscriptContent',
        await api.getManuscriptContent(params.lang, params.manuscript)
      )
    },
    addMSContentItem({ commit }, params) {
      commit('addMSContentItem', params)
    },
    async updateMSContentItem({ commit, dispatch }, content) {
      await api.updateMSContentItem(content)
      commit('updatedMSContentItem', content)
    }
  }
}


export default contentModule;