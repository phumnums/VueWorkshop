import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
      path: '/aboutme',
      name: 'aboutme',
      component: () => import('../views/AboutMe.vue')
  },
  {
    path: '',
    name: 'Toolbar',
    component: () => import('../views/Toolbar.vue'),
    children: [
      {
        path: '/me',
        name: 'me',
        component: () => import('../views/Me.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/new',
        name: 'new',
        component: () => import('../views/new.vue')
      },
      {
        path: '/grade',
        name: 'grade',
        component: () => import('../views/Grade.vue')
      },
      {
        path: '/simple',
        name: 'simple',
        component: () => import('../views/simple.vue')
      },
      {
        path: '/simpleview',
        name: 'simpleview',
        component: () => import('../views/SimpleView.vue')
      },
      {
        path: '/apicon',
        name: 'apicon',
        component: () => import('../views/Apicon.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
