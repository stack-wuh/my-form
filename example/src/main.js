import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import WJsonForm from 'w-json-form'
Vue.use(ElementUI)
Vue.use(WJsonForm)

new Vue({
  el: '#app',
  render: h => h(App)
})
