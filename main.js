import Vue from 'vue'
import App from './App'
import av from '@/assets/js/av.js'
import util from '@/assets/js/util.js'

Vue.config.productionTip = false
Vue.prototype.$av = av
Vue.prototype.$util = util
Vue.prototype.$is_dev = process.env.NODE_ENV === 'development'
Vue.prototype.$showToast = function(title = '错误', icon = 'none') {
  uni.showToast({
    title,
    icon,
  })
}
Vue.prototype.$showLoading = function(title = '进行中...') {
  uni.showLoading({
    title,
  })
  setTimeout(() => {
    uni.hideLoading()
  }, 30000)
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
