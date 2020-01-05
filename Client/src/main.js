import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from "vue";
import './plugins/bootstrap-vue'
import App from "./App.vue";
import router from "./routes/index";
import store from "./store";
import i18n from './i18n'
import VueGtag from "vue-gtag";

import './assets/styles.css'

Vue.use(VueGtag, {
  config: { id: "UA-133908181-1" }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");