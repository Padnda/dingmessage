import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/Login')
    },
    {
      path: '/home',
      name: 'Home',
      meta: {title: '首页'},
      component: () => import('@/views/home/Home'),
      redirect: 'main',
      children: [
        {
          path: '/main',
          name: 'Main',
          component: () => import('@/views/main/Main')
        },
        {
          path: '/user',
          name: 'User',
          meta: {title: '用户管理'},
          component: () => import('@/views/user/User')
        },
      ]
    },
    
  ]
})

export default router;