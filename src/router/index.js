import { createRouter, createWebHistory } from 'vue-router'
import index from '@/view/index'
import ds from '@/view/ds'
import gy from '@/view/gy'
import qs from '@/view/qs'
import yt from '@/view/yt'
import st from '@/view/st'
import sex from '@/view/sex'
import keep from '@/view/keep'
import war from '@/view/war'
import shoot from '@/view/shoot'
import AIDS from '@/view/aids'
import Github from '@/view/github'
import Murder from '@/view/murder'
import Bear from '@/view/bear'
import EarthQuakes from '@/view/earthQuakes'
import Gold from '@/view/gold'
import Cat from '@/view/cat'
import Stream from '@/view/stream'
import Gpu from '@/view/gpu'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/',
            component: index 
        },
        { 
            path: '/gy',
            component: gy 
        },
        { 
            path: '/ds',
            component: ds 
        },
        { 
            path: '/qs',
            component: qs 
        },
        { 
            path: '/yt',
            component: yt 
        },
        { 
            path: '/st',
            component: st 
        },
        { 
            path: '/sex',
            component: sex 
        },
        { 
            path: '/keep',
            component: keep 
        },
        { 
            path: '/war',
            component: war 
        },
        { 
            path: '/shoot',
            component: shoot 
        },
        { 
            path: '/AIDS',
            component: AIDS 
        },
        { 
            path: '/Github',
            component: Github 
        },
        { 
            path: '/Murder',
            component: Murder 
        },
        { 
            path: '/Bear',
            component: Bear 
        },
        { 
            path: '/EarthQuakes',
            component: EarthQuakes 
        },
        { 
            path: '/Gold',
            component: Gold 
        },
        { 
            path: '/Cat',
            component: Cat 
        },
        { 
            path: '/Stream',
            component: Stream 
        },
        { 
            path: '/Gpu',
            component: Gpu 
        },
      ]
  })

  export default router;