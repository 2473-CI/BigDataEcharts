import { createRouter, createWebHistory } from 'vue-router'
import index from '@/view/index'
import ds from '@/view/ds'
import gy from '@/view/gy'
import qs from '@/view/qs'
import yt from '@/view/yt'
import st from '@/view/st'
import sex from '@/view/sex'
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
      ]
  })

  export default router;