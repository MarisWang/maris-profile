import Vue from 'vue'
import Router from 'vue-router'
import HeadPage from '@/components/headPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: HeadPage
    }
  ]
})
