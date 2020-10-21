import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { Toast } from 'vant';

Vue.use(Toast)
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: '',
          redirect: '/home/index'
        },
        {
          path: 'index',
          name: '首页',
          component: ()=>import('./views/index.vue')
        },
        {
          path: 'we',
          name: '我的',
          component: ()=>import('./views/we.vue')
        },
        {
          path: 'study',
          name: '课程',
          component: ()=>import('./views/study.vue')
        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: () => import('./views/login.vue')
    },
    {
      path: '/test',
      name: '在线考试',
      component: () => import('./views/online-test.vue')
    },
    {
      path: '/my-test',
      name: '我的考试',
      component: () => import('./views/my-test.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/course',
      name: 'course',
      component: () => import(/* webpackChunkName: "course" */ './views/course.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
  });
  let isLogin = localStorage.getItem('isLogin') || '0'
  if(isLogin==='0' && to.path !== '/login'){
    Toast.loading({
      message: '请先登录!!',
      forbidClick: true,
    });
    next({
      path: 'login'
    })
  }else{
    next()
  }
})
router.afterEach(() => {
  Toast.clear()
})
export default router

