import {
    document,
    window,
    setChannel,
    createContainer,
    updateBOM
} from './lib/jsc-dom/src/remote';



import Vue from 'vue'
import VueRouter from './lib/vue-router'
Vue.use(VueRouter);

import App from './pages/App.vue'
import List from './pages/List.vue'
import Detail from './pages/Detail.vue'
import Container  from './pages/Container.vue'

let routes = [
    { path: '/', component: App },
    { path: '/list', component: List },
    { path: '/detail', component: Detail }
]
const router = new VueRouter({
    mode: 'abstract',
    routes // short for `routes: routes`
})

Vue.config.productionTip = false


let container = createContainer('DEFAULT_NAME');



self.$vm = new Vue({
    render(h){
        return h(Container)
    },
    router
}).$mount(container);
self.$vm.$router.push('/')
setChannel(self);


if(self.gic){
    gic.navigateTo({
        url: 'http://localhost:8000/#/'
    });

}
self.$JSWorker = {
    createPage(a, pageId){
        debugger
        "use strict";
        self.pageId = pageId;
        // self.$vm.$mount(self.P("DEFAULT_NAME"));
        //   debugger
        // self.$router.push('/list')
    },
    destroyPage(a, pageId){

    }
}







