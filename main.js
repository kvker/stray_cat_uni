import Vue from 'vue'
import App from './App'
import av from './static/js/av.js'

Vue.config.productionTip = false
Vue.prototype.$av = av

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
