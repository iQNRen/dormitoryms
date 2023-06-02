import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue' 



const app = createApp(App);


Object.keys(Icons).forEach((key) => {

    app.component(key, Icons[key]);

}); 

app.config.globalProperties.$axios = axios

app.use(router).use(ElementPlus).mount('#app');




