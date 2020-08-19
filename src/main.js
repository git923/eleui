import Vue from 'vue'
import App from './App.vue'
// 引入饿了么插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import Vuex from 'vuex'


//设置一个全局拦截器 处理 axios中post请求参数的问题
// 将 json 类型的参数 转换成表单类型的参数提交
axios.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  if (config.method === 'post') { // post请求时，处理数据
    config.data = qs.stringify(
      config.data //后台数据接收这块需要以表单形式提交数据
    )
  }
  return config;
}, function (error) {
  return Promise.reject(error);
})
Vue.use(VueAxios, axios)
// 挂载
Vue.use(ElementUI)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
