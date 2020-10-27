import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import MenuNav from "@/components/MenuNav.vue";
Vue.config.productionTip = false;
Vue.component("MenuNav", MenuNav);
new Vue({
    router: router,
    store: store,
    render: function (h) { return h(App); }
}).$mount('#app');
//# sourceMappingURL=main.js.map