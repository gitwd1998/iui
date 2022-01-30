import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'Button',
    path: '/components/Button',
    meta: { title: 'i-button' },
    component: () => import('../../packages/ButtonPlugin/docs/README.md'),
  },
  {
    name: 'Table',
    path: '/components/Table',
    meta: { title: 'i-tabble' },
    component: () => import('../../packages/TablePlugin/docs/README.md'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.afterEach(to => {
  document.title = to.meta.title
})

export default router
