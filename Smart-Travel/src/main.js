import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './styles/app.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA6DHcoIKMPyvX9ZaVIGv4p3HbfSTFQ0ak",
    authDomain: "smart-travel-69950.firebaseapp.com",
    databaseURL: "https://smart-travel-69950-default-rtdb.firebaseio.com",
    projectId: "smart-travel-69950",
    storageBucket: "smart-travel-69950.appspot.com",
    messagingSenderId: "487291193982",
    appId: "1:487291193982:web:e64bf673bbcbd304dd262f",
    measurementId: "G-5CTBJZSEDL"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const database = firebaseApp.firestore();

export const auth = firebaseApp.auth();


const app = createApp(App)

// app.use(createPinia())
app.use(router)

app.mount('#app')
