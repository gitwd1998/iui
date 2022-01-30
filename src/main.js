import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'github-markdown-css'
import 'highlight.js/styles/github.css'
import iui from '../packages'
Vue.use(iui)
import DemoBlock from './components/demo-block.vue'
Vue.component('DemoBlock', DemoBlock)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
