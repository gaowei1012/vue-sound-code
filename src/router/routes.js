export default [
  {
    path: '/',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
]
