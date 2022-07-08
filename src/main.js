import { createApp } from 'vue'
import router  from './router/router.js'
import FontAwesomeIcon  from './libraries/fontAwesome.js'
import axios from './api/axios.js'

import VueAxios from 'vue-axios'
import App from './App.vue'
import auth from './libraries/autheticate.js'
import store from './store/index.js'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import './index.css'


// 1. Assign app to a variable
let app = createApp(App)

// 2. Assign the global variable before mounting
app.config.globalProperties.baseApi = 'http://127.0.0.1:8000';
app.config.globalProperties.isLoading = false;

// 3. Use router and mount app
app.component('font-awesome-icon', FontAwesomeIcon)
.component('loading', Loading)
.use(router)
.use(auth)
.use(store)
.use(VueAxios, axios)
.mount('#app')
