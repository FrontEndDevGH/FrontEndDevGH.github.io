import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
// import { db } from './main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasksList: [
      {
        taskName: 'Задача1',
        done: false
      },
      {
        taskName: 'Задача2',
        done: false
      },
      {
        taskName: 'Задача3',
        done: false
      },
      {
        taskName: 'Задача4',
        done: false
      },
      {
        taskName: 'Задача5',
        done: false
      },
      {
        taskName: 'Задача6',
        done: false
      },
      {
        taskName: 'Задача7',
        done: false
      },
      {
        taskName: 'Задача8',
        done: false
      },
      {
        taskName: 'Задача9',
        done: false
      },
      {
        taskName: 'Задача10',
        done: false
      },
      {
        taskName: 'Задача11',
        done: false
      },
      {
        taskName: 'Задача12',
        done: false
      },
      {
        taskName: 'Задача13',
        done: false
      },
      {
        taskName: 'Задача14',
        done: false
      },
      {
        taskName: 'Задача15',
        done: false
      },
      {
        taskName: 'Задача16',
        done: false
      },
      {
        taskName: 'Задача17',
        done: false
      },
      {
        taskName: 'Задача18',
        done: false
      },
      {
        taskName: 'Задача19',
        done: false
      },
      {
        taskName: 'Задача20',
        done: false
      },
      {
        taskName: 'Задача21',
        done: false
      }
    ]
  },
  mutations: {
    setTask (state, task) {
      state.tasksList.push(task)
    },
    deleteTask (state, index) {
      state.tasksList.splice([index], 1)
    }
  },
  actions: {
    userJoin({ commit }) {
      debugger
      var ref = firebase.database().ref('https://console.firebase.google.com/project/todo-list-3ae26')
    }
  }
})
