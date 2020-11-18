import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { Toast } from 'vant';
// import store from "./store/page";

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
      path: '/test-detail',
      name: '考试详情',
      component: () => import('./views/test-detail.vue')
    },
    {
      path: '/test-submit',
      name: '考试提交',
      component: () => import('./views/test-submit.vue')
    },
    {
      path: '/workload',
      name: '工作量',
      component: () => import('./views/workload.vue')
    },
    {
      path: '/activities',
      name: '教学活动',
      component: () => import('./views/activities.vue')
    },
    {
      path: '/activities-add',
      name: '添加活动',
      component: () => import('./views/activities-add.vue')
    },
    {
      path: '/workload-add',
      name: '添加工作量',
      component: () => import('./views/workload-add.vue')
    },
    {
      path: '/workload-clinical',
      name: '添加临床工作量',
      component: () => import('./views/workload-clinical.vue')
    },
    {
      path: '/workload-clinical-add',
      name: '添加临床工作量详情',
      component: () => import('./views/workload-clinical-add.vue')
    },
    {
      path: '/activities-sign',
      name: '活动签到',
      component: () => import('./views/activities-sign.vue')
    },
    {
      path: '/activities-record',
      name: '活动记录',
      component: () => import('./views/activities-record.vue')
    },
    {
      path: '/activities-write',
      name: '填写记录',
      component: () => import('./views/activities-write.vue')
    },
    {
      path: '/scan',
      name: '扫描二维码',
      component: () => import('./views/scan.vue')
    },
    {
      path: '/leave',
      name: '请假列表',
      component: () => import('./views/leave.vue')
    },
    {
      path: '/leave-bin',
      name: '销假列表',
      component: () => import('./views/leave-bin.vue')
    },
    {
      path: '/leave-add',
      name: '请假申请',
      component: () => import('./views/leave-add.vue')
    },
    {
      path: '/leave-binform',
      name: '销假申请',
      component: () => import('./views/leave-binform.vue')
    },
    {
      path: '/paper',
      name: '倒计时',
      component: () => import('./views/paper.vue')
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

