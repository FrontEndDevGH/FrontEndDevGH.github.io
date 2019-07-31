import Vue from 'vue'
import Vuex from 'vuex'
import VuexEasyFirestore from 'vuex-easy-firestore'
Vue.use(Vuex)

import { Firebase, initFirebase } from '../config/firebase.js'
import myModule from './modules/myModule.js'

const easyFirestore = VuexEasyFirestore(
  [myModule],
  { logging: true, FirebaseDependency: Firebase }
)

const storeData = {
  plugins: [easyFirestore],
}

const store = new Vuex.Store(storeData)

initFirebase()
  .catch(error => {
  })

export default store