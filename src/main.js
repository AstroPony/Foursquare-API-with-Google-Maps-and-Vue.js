
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import services from '../config/services.js'
import './assets/css/style.css'
import VueProgressBar from 'vue-progressbar'

Vue.config.productionTip = false
Vue.use(VueProgressBar, {
  color: '#29d03d',
  failedColor: 'yellow',
  height: '5px'
})
Vue.use(VueGoogleMaps, {
  load: {
    key: services.googlemaps.key,
    libraries: 'places'
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
