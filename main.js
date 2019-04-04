import Vue from 'vue'
import App from './App'
import store from './store'
import sunUpImg from './components/sunui-upimg/sunui-upimg.vue'  //引入图片上传插件
 
Vue.prototype.$store = store
Vue.config.productionTip = false
Vue.component('sunui-upimg', sunUpImg) 
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
