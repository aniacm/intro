import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Createjs from '@/components/Createjs'
import Bootstrap from '@/components/Bootstrap'



Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/home/createjs',
      name: 'Createjs',
      component: Createjs
    },
    {
      path: '/home/bootstrap',
      name: 'Bootstrap',
      component: Bootstrap
    }
  ]
})
