import Vue from 'vue'
import App from './App'
import av from './static/js/av.js'

Vue.config.productionTip = false
Vue.prototype.$av = av
Vue.prototype.$showToast = function(title = '错误') {
  uni.showToast({
    title,
  })
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
