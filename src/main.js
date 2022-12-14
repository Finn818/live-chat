import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

//import firebase auth service
import { projectAuth  } from '/src/firebase/config' 

let app

projectAuth.onAuthStateChanged(() => {
    if (!app) {
    createApp(App)
    .use(router)
    .mount('#app')
    }
})

