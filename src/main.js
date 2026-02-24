import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// Import thư viện offline
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import 'material-symbols' // Load CSS cho icons
import './style.css' // Import CSS của Tailwind
import './assets/tailwind.css';
createApp(App).mount('#app')
