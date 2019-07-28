import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasksList: [
      {
        taskName: 'Задача1'
      },
      {
        taskName: 'Задача2'
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

  }
})
