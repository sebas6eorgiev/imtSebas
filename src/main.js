import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

var VuePaginate = require('vue-paginate');
Vue.use(VuePaginate);

Vue.component('home-component', require('./components/HelloWorld.vue').default);
Vue.component('skill-component', require('./components/Skills/SkillComponent.vue').default);
Vue.component('work-component', require('./components/Work/WorkComponent.vue').default);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
