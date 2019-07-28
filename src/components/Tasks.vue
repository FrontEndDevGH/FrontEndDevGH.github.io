<template>
  <div>
    <div v-if="tasksList.length">
      <div
        v-for="(task, index) in tasksList"
        :key="'task-' + index"
      >
        <div :class="{'task-done': task.done}" @click="markTask(task.originArrId)">{{ task.taskName }}</div>
        <router-link :to="{ name: 'Edit', params: {data: task} }">Редактировать задачу</router-link>
        <button @click="deleteTask(task.originArrId)">Удалить запись</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tasks",
  methods: {
    deleteTask(index) {
      this.$store.commit("deleteTask", index);
    },
    markTask (index) {
      let selectedTask = this.$store.state.tasksList[index]
      selectedTask.done = !selectedTask.done
    }
  },
  computed: {
    tasksList() {
      let tasksList = this.$store.state.tasksList.map((el, i) => {
        el.originArrId = i
        return el
      }).reverse()
      let startIndex = this.$route.params.key || 0
      let result = tasksList.slice(startIndex, startIndex + 10)
      return result
    }
  }
};
</script>

<style scoped>
.task-done {
  text-decoration: line-through;
  background: green;
}
</style>
