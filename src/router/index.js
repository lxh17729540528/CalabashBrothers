import Vue from 'vue'
import Router from 'vue-router'
import cbHeader from '@/components/cbHeader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cbHeader',
      component: cbHeader
    }
  ]
})
