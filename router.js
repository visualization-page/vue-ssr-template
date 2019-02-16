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
        component: () => import('./src/views/Index.vue'),
        children: [
          {
            path: ':pageId',
            name: 'index-child',
            component: () => import('./src/views/Index.vue')
          }
        ]
      }
    ]
  })
}
