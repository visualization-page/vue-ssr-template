import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'hash',
    routes: [
      {
        path: '/',
        name: 'index',
        component: () => import('./src/views/Index.vue')
        // component: require('./src/views/Index.vue')
      }
    ]
  })
}
