import Vue from 'vue'
import './plugins/vuetify'
import Layout from './components/Layout.vue'
import 'babel-polyfill'

Vue.config.productionTip = false
export const bus = new Vue()

new Vue({
 render: h => h(Layout)
}).$mount('#app')
