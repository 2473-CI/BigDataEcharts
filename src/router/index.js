import { createRouter, createWebHistory } from 'vue-router'
import index from '@/view/index'
import ds from '@/view/ds'
import gy from '@/view/gy'
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
      ]
  })

  export default router;