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
      ]
  })

  export default router;