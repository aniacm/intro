import Vue from 'vue'
import Router from 'vue-router'
import Project from '@/components/Project'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Experience from '@/components/Experience'
import Process_Array from '@/components/programming/Process_Array'
import Project_Detail from '@/components/Project_Detail'
import Yuji from '@/components/painting/Yuji'
import ChoroQ from '@/components/painting/ChoroQ'


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
    },

    {
      path: '/project/painting',
      name: 'Painting',
      component: Project_Detail,
      children: [
        {
          path: 'yuji',
          name: 'Yuji',
          component: Yuji
        },
        {
          path: 'choroq',
          name: 'ChoroQ',
          component: ChoroQ
        },

      ]
    },

    {
      path: '/project/programming',
      name: 'Programming',
      component: Project_Detail,
      children: [
        {
          path: 'process_array',
          name: 'Process_Array',
          component: Process_Array
        }

      ]
    },


    // {
    //   path: '/project/bootstrap',
    //   name: 'Bootstrap',
    //   component: Bootstrap
    // }
  ]
})
