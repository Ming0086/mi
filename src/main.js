import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import rem from './js/rem.js'
Vue.use(VueRouter)

import router from './js/router.js'

import axios from 'axios'
Vue.prototype.$http = axios

import '../node_modules/mint-ui/lib/style.css'
import { Swipe, SwipeItem ,Header} from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
