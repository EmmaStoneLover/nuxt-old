import { wrapFunctional } from './utils'

export { default as Alert } from '../..\\components\\Alert.vue'
export { default as Exit } from '../..\\components\\exit.vue'
export { default as Nav } from '../..\\components\\Nav.vue'

export const LazyAlert = import('../..\\components\\Alert.vue' /* webpackChunkName: "components/alert" */).then(c => wrapFunctional(c.default || c))
export const LazyExit = import('../..\\components\\exit.vue' /* webpackChunkName: "components/exit" */).then(c => wrapFunctional(c.default || c))
export const LazyNav = import('../..\\components\\Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
