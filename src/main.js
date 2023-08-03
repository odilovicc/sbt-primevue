import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast';

const app = createApp(App)
app.use(PrimeVue);
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Toast', Toast)
app.mount('#app')

import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import './assets/tailwind.css'


