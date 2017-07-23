import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Createjs from '@/components/Createjs'
import Bootstrap from '@/components/Bootstrap'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/createjs',
      name: 'Createjs',
      component: Createjs
    },
    {
      path: '/bootstrap',
      name: 'Bootstrap',
      component: Bootstrap
    }
  ]
})
