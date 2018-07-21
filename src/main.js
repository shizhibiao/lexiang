import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false

//声明全局组件--滚动视图
import appContent from './common/appContent.vue';
Vue.component('app-content', appContent)
import mineHeader from './views/mine/common/mineHeader.vue';
Vue.component('mine-header', mineHeader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
