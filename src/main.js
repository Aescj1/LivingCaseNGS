import Vue from 'vue'
import './plugins/vuetify'
import VueRouter from 'vue-router'
import Layout from './components/Layout.vue'
import 'babel-polyfill'
import Home from './Home.vue'
import {routes} from './routes'


Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode:'history',

})

Vue.config.productionTip = false 
export const bus = new Vue()

new Vue({
 router,
 render: h => h(Home)
}).$mount('#app')
