import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'


Vue.prototype.$http = axios // 全局注册axios Vue.prototype.$axios = axios $后面的就是一个变量名一样，全局注册了axios,在其他页面使用的时候就用那个变量名就可以
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
