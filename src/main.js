// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './pages/HelloFromVux'
import gameList from './pages/gameList'
import beforeGame from './pages/beforeGame'
import { AjaxPlugin } from 'vux'

Vue.use(VueRouter)
Vue.use(AjaxPlugin)

const routes = [
  {
    path: '/',
    component: Home
  }, {
    path: '/gameList',
    component: gameList
  }, {
    path: '/beforeGame/:id',
    component: beforeGame
  }

]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
