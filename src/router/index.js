import VueRouter from 'vue-router';
import Vue from 'vue';
import Login from '@/views/login';

Vue.use(VueRouter);
// 创建路由规则
const router = new VueRouter({
    routes:[
        {path:'/login',name:'login',component:Login}
    ]
});

export default router;