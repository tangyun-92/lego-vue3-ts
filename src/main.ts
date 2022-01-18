import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './routes/index'
import 'ant-design-vue/dist/antd.css'
import store from './store/index'

createApp(App).use(Antd).use(router).use(store).mount('#app')
