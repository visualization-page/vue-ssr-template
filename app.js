import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

// global-component-start
Vue.prototype.$all = {
  'ybutton': () => import('@/components/button/index.vue'),
  'ytext': () => import('@/components/text/index.vue'),
}
// global-component-end

export function createApp () {
  const router = createRouter()
  const app = new Vue({
    render: h => h(App),
    router
  })
  return { app, router }
}
