import { createApp } from 'vue'
import router  from './router.js'
import FontAwesomeIcon  from './fontAwesome.js'
import App from './App.vue'
import './index.css'
import './splide.css'





createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
