import Vue from 'vue'
import Router from 'vue-router'
import Tasks from './components/Tasks.vue'
import EditTask from './components/EditTask.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Tasks
    },
    {
      path: '/:taskId',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/edit',
      name: 'Edit',
      component: EditTask
    }
  ]
})
