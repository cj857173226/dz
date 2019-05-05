import Vue from 'vue'
import App from './App'
import store from './store'
import helper from './common/helper.js'
  //引入图片上传插件

helper.isLogin();
Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
