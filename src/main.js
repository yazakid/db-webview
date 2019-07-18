import Vue from 'vue'
import VueRouter from './lib/vue-router'
Vue.use(VueRouter)

import App from './pages/App.vue'
import List from './pages/List.vue'
import Container  from './pages/Container.vue'

let routes = [
    { path: '/', component: App },
    { path: '/list', component: List }
]
const router = new VueRouter({
    routes // short for `routes: routes`
})

Vue.config.productionTip = false

new Vue({
    router,
    render(h){
        return h(Container)
    }
}).$mount('#app')
console.log('end date',+new Date);
