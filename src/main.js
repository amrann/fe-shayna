// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Home from './views/Home.vue'

import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/themify-icons.css'
import './assets/css/elegant-icons.css'
import './assets/css/nice-select.css'
import './assets/css/slicknav.min.css'
import './assets/css/style.css'

import './assets/css/jquery-ui.min.css'
import './assets/css/owl.carousel.min.css'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
