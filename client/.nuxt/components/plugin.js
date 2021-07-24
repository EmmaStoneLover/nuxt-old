import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Alert: () => import('../..\\components\\Alert.vue' /* webpackChunkName: "components/alert" */).then(c => wrapFunctional(c.default || c)),
  Exit: () => import('../..\\components\\exit.vue' /* webpackChunkName: "components/exit" */).then(c => wrapFunctional(c.default || c)),
  Nav: () => import('../..\\components\\Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
