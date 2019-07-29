<template>
  <div class="main-block">
    <h1>{{ locations }}</h1>
    <textarea v-model="newTask"></textarea>
    <button @click="addTask">Добавить задачу</button>
    <div class="pagination" v-if="computeTasksRoutes > 1">
      <div class="pagination-item" v-for="(taskRoute, index)  in computeTasksRoutes" :key="'taskRoute-' + index">
        <router-link :to="{ name: 'Tasks', params: { taskId: taskRoute, key: taskRoute - 1 }}">{{ taskRoute }}</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { db } from './main'
export default {
  name: 'App',
  data () {
    return {
      newTask: '',
      maxTaskCount: 10,
      locations: []
    }
  },
  firestore () {
   return {
     locations: db.collection('Tasks')
   }
 },
  methods: {
    addTask () {
      if (this.newTask) {
        this.$store.commit('setTask', {
          taskName: this.newTask
        })
        this.newTask = ''
      }
      this.$router.push({ name: 'default' })
    }
  },
  computed: {
    computeTasksRoutes () {
      return Math.ceil((this.$store.state.tasksList.length / this.maxTaskCount))
    }
  },
  mounted () {
    debugger
    this.$store.dispatch('userJoin')
  }
}
</script>

<style lang="less" scoped>
.main-block {
  width: 500px;
  height: auto;
  background: gray;
  margin: 150px auto;
}
</style>
