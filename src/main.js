import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routers'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
});


new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
