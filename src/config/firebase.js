import * as Firebase from 'firebase/app'
import 'firebase/firestore'

function initFirebase () {
  Firebase.initializeApp({
    apiKey: 'AIzaSyCmdBzwgbCpT694ue3tOB77dI2X1_Hotsg',
    projectId: 'todo-list-3ae26', 
    databaseURL: 'https://todo-list-3ae26.firebaseio.com'
  })
  return new Promise((resolve, reject) => {
    Firebase.firestore().enablePersistence()
      .then(resolve)
      .catch(err => {
        if (err.code === 'failed-precondition') {
          reject(err)
        } else if (err.code === 'unimplemented') {
          reject(err)
        }
      })
  })
}

export { Firebase, initFirebase }