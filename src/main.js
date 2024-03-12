import '../src/assets/styles/main.scss'
import { createYmaps } from 'vue-yandex-maps'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(createYmaps({
    apikey: '944fc6bf-e1df-44cd-a5b6-744b76d17157',
}));

app.mount('#app')
