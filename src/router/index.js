import Vue from 'vue'
import VueRouter from 'vue-router'
import { observador } from '../firebase/auth'
import SubmissionSuccess from '../components/SubmissionSuccess'
import SubmissionFail from '../components/SubmissionFail'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import('../views/Productos.vue')
  },
  {
    path: '/chirighin',
    name: 'Chirighin',
    component: () => import('../views/Chirighin.vue')
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: () => import('../views/Servicios.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/thanks',
    name: 'succes',
    component: SubmissionSuccess
  },
  {
    path: '/404',
    name: 'Fail',
    component: SubmissionFail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  observador(to, next)
})


export default router
