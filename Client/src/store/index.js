import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import authModule from './auth'
import generalModule from './general'
import statsModule from './stats'
import transcribeModule from './transcribe'
import contentModule from './content'
import conversationModule from './conversation'

const store = new Vuex.Store({
    modules: {
        auth: authModule,
        general: generalModule,
        stats: statsModule,
        transcribe: transcribeModule,
        content: contentModule,
        conversation: conversationModule
    },
    state: {

    },
    mutations: {

    },
    getters: {

    },
    actions: {

    }
})

export default store