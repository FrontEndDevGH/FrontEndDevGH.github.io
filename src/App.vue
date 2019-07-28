<template>
  <div class="main-block">
    <h1>Задачи</h1>
    <textarea v-model="newTask"></textarea>
    <button @click="addTask">Добавить задачу</button>
    <div v-if="tasksList.length">
      <task v-for="(task, index) in tasksList" :key="'task-' + index" :taskId="index" :title="task.taskName"></task>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      newTask: ''
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
    }
  },
  computed: {
    tasksList () {
      return this.$store.state.tasksList
    }
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
