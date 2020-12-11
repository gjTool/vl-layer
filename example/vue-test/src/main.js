import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './i18n/i18n';

Vue.use(ElementUI)
Vue.config.productionTip = false
import layer from "vl-layer";
import "vl-layer/vl-layer.css";
Vue.prototype.$layer = layer(Vue);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n, //很重要，别忘记
  render: h => h(App)
})
