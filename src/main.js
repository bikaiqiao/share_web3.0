import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
//下面的是自己加的
import { post, postWithURL, postWithToken, get, getWithURL, getWithToken } from "./js/axios.js";


Vue.config.productionTip = false
    //下面的是自己加的
    // Vue.prototype.$axios = axios
Vue.prototype.$post = post;
Vue.prototype.$postWithURL = postWithURL;
Vue.prototype.$postWithToken = postWithToken;
Vue.prototype.$get = get;
Vue.prototype.$getWithURL = getWithURL;
Vue.prototype.$getWithToken = getWithToken;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')