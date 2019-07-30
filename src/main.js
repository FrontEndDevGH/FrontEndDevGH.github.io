import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(firestorePlugin)
firebase.initializeApp({
 apiKey: 'AIzaSyCmdBzwgbCpT694ue3tOB77dI2X1_Hotsg',
 projectId: 'todo-list-3ae26', 
 databaseURL: 'https://todo-list-3ae26.firebaseio.com'
})
export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
