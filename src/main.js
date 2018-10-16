// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { Button, Container, Row, Col } from 'element-ui'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Container)
Vue.use(Row)
Vue.use(Col)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
