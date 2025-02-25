import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import routes from './routes.js'
import "./scss/app.scss";

const router = createRouter({
    history: createWebHistory(),
    routes
})



const app = createApp(App)
app.use(router)
app.mount('#app')

