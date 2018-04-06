import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Stats from '@/pages/Stats'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/stats',
      name: 'Stats',
      component: Stats
    }
  ]
})
