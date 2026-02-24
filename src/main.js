import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 1. THÊM DÒNG NÀY (Đường dẫn đến file router/index.js)

// Import thư viện offline
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import 'material-symbols' 
import './style.css' 
import './assets/tailwind.css';

const app = createApp(App)

app.use(router) // 2. THÊM DÒNG NÀY ĐỂ KÍCH HOẠT ROUTER

app.mount('#app')