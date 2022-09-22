import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app'
import './styles/app.css';

 var firebaseConfig = {
    apiKey: "AIzaSyA6DHcoIKMPyvX9ZaVIGv4p3HbfSTFQ0ak",
    authDomain: "smart-travel-69950.firebaseapp.com",
    databaseURL: "https://smart-travel-69950-default-rtdb.firebaseio.com",
    projectId: "smart-travel-69950",
    storageBucket: "smart-travel-69950.appspot.com",
    messagingSenderId: "487291193982",
    appId: "1:487291193982:web:e64bf673bbcbd304dd262f",
    measurementId: "G-5CTBJZSEDL"
};
// Initialize Firebase 
firebase.initializeApp(firebaseConfig)
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
