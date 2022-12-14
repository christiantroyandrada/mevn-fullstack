import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/new-post',
    name: 'new-post',
    component: () => import('../views/NewPostView.vue')
  },
  {
    path: '/blog/:id',
    name: 'view-post',
    component: () => import('../views/ViewPostView.vue')
  },
  {
    path: '/blog-edit/:id',
    name: 'edit-post',
    component: () => import('../views/EditPostView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
