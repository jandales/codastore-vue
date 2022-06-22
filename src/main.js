import { createApp } from 'vue'
import router  from './router.js'
import FontAwesomeIcon  from './fontAwesome.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './index.css'
import './splide.css'





createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.use(VueAxios, axios)
.mount('#app')
