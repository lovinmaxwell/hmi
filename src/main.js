import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './routers'
import VueParticles from 'vue-particles'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'
import './plugins/element.js'
Vue.use(VueParticles)
Vue.use(BootstrapVue)
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
