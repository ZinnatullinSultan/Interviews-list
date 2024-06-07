import './assets/main.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


import { createApp } from 'vue';
import { initializeApp } from "firebase/app";
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import Menubar from 'primevue/menubar';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar';
import RadioButton from 'primevue/radiobutton';
import Badge from 'primevue/badge';
import Chart from 'primevue/chart';

import Tooltip from 'primevue/tooltip';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import ProgressSpinner from 'primevue/progressspinner';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ConfirmDialog from 'primevue/confirmdialog';
import InlineMessage from 'primevue/inlinemessage';

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: "AIzaSyBWB7WjYEv6nbeC5_SfEOWhKPHYXpXwjQo",
  authDomain: "interviews-bd05e.firebaseapp.com",
  projectId: "interviews-bd05e",
  storageBucket: "interviews-bd05e.appspot.com",
  messagingSenderId: "351493033425",
  appId: "1:351493033425:web:3d1f8f1c475c70f4ee24f0"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(ToastService)
app.use(ConfirmationService)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.directive('tooltip', Tooltip)

app.component('app-menubar', Menubar)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.component('app-input-number', InputNumber)
app.component('app-toast', Toast)
app.component('app-progress', ProgressSpinner)
app.component('app-card', Card)
app.component('app-datatable', DataTable)
app.component('app-column', Column)
app.component('app-dialog', ConfirmDialog)
app.component('app-message', InlineMessage)
app.component('app-textarea', Textarea)
app.component('app-calendar', Calendar)
app.component('app-radio', RadioButton)
app.component('app-badge', Badge)
app.component('app-chart', Chart)

app.mount('#app')

