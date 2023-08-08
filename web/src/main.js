import { createApp } from 'vue'
import App from './App.vue'

import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons'
import * as echarts from 'echarts'
import Router from '@/router/index'
import ElementPlus from 'element-plus'

window.BaseURL = "http://47.115.207.245:28999"


let app = createApp(App)

for (const iconName in ElIcons) {
    app.component(iconName, ElIcons[iconName])
}

app.config.globalProperties.$echarts = echarts

app.use(ElementPlus).use(Router).mount('#app')
console.log("路由",Router)