import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import aboutUs from '@/components/aboutUs'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
        path: 'aboutUs',
        name: 'aboutUs',
        component: aboutUs
    }
  ]
})