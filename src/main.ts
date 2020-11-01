import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import MenuNav from "@/components/MenuNav.vue"; 
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar' 

Vue.config.productionTip = false
Vue.component("MenuNav",MenuNav)
Vue.component('eCharts', ECharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


window.addEventListener("load",function() {
  setTimeout(function(){ 
      window.scrollTo(0, 1000);
  }, 100);
});