import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.prototype.$pubsub = new Vue();

//声明全局组件--滚动视图
import appContent from './common/appContent.vue';
Vue.component('app-content', appContent)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
