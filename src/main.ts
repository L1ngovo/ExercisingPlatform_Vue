import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'

import HeaderNavigation from './components/common/header-navigation.vue'

import 'element-plus/dist/index.css'
import './assets/scss/main.css'
import 'remixicon/fonts/remixicon.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.component('HeaderNavigation', HeaderNavigation)

app.mount('#app')
