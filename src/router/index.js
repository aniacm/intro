import Vue from 'vue'
import Router from 'vue-router'
import Project from '@/components/Project'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Experience from '@/components/Experience'
// import Createjs from '@/components/Createjs'
// import Bootstrap from '@/components/Bootstrap'

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", redirect: "/about" },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/project',
      name: 'Project',
      component: Project,
      children: [
      ]
    }
    // {
    //   path: '/project/createjs',
    //   name: 'Createjs',
    //   component: Createjs
    // },
    // {
    //   path: '/project/bootstrap',
    //   name: 'Bootstrap',
    //   component: Bootstrap
    // }
  ]
})
