import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './index.css'

import App from './App.vue'
import router from './router'

// アプリケーション作成
const app = createApp(App)

// Pinia初期化
app.use(createPinia())

// ルータ初期化
app.use(router)

// index.htmlに連結
app.mount('#app')
