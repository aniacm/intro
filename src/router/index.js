import Vue from 'vue'
import Router from 'vue-router'
import Project from '@/components/Project'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Experience from '@/components/Experience'

import Project_Detail from '@/components/Project_Detail'

import Process_Data from '@/components/programming/Process_Data'
import Carousel from '@/components/programming/Carousel'
import WebGL from '@/components/programming/Webgl_threejs'


import Yuji from '@/components/painting/Yuji'
import ChoroQ from '@/components/painting/ChoroQ'
import OilPainting from '@/components/painting/OilPainting'


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
      name: 'message.pai',
      component: Project_Detail,
      children: [
        {
          path: 'yuji',
          name: 'message.yuji',
          component: Yuji
        },
        {
          path: 'choroq',
          name: 'message.choroq',
          component: ChoroQ
        },
        {
          path: 'oilpainting',
          name: 'message.oilpainting',
          component: OilPainting
        },


      ]
    },

    {
      path: '/project/programming',
      name: 'message.prog',
      component: Project_Detail,
      children: [
        {
          path: 'process_data',
          name: 'message.ProcessData',
          component: Process_Data
        },
        {
          path: 'carousel',
          name: 'message.carousel',
          component: Carousel
        },
        {
          path: 'webgl',
          name: 'message.webgl',
          component: WebGL
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
