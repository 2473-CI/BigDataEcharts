import { createApp } from 'vue'
import App from './App.vue'

import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons'
import * as echarts from 'echarts'
import Router from '@/router/index'
import ElementPlus from 'element-plus'
import axios from "axios";

window.BaseURL = "http://127.0.0.1:7001"

axios.defaults.baseURL=window.BaseURL;

let app = createApp(App)

for (const iconName in ElIcons) {
    app.component(iconName, ElIcons[iconName])
}

app.config.globalProperties.$echarts = echarts

app.use(ElementPlus).use(Router).mount('#app')
console.log("路由",Router)