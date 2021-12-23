import { createApp } from 'vue'
import VueMobileDetection from 'vue-mobile-detection'
import App from './App.vue'

const app = createApp(App)
app.use(VueMobileDetection)

app.mount('#app')