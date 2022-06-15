import { createApp } from 'vue'
import router  from './router.js'
import App from './App.vue'
import './index.css'
import './splide.css'





createApp(App)
.use(router)
.mount('#app')
