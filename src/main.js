import Vue from 'vue';
import App from './App.vue';
// 导包
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import router from '@/router';

Vue.config.productionTip = false
// 在全局范围注册组件
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
