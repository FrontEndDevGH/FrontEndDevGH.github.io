<template>
  <div>
    <div>{{ title }}</div>
    <button @click="deleteTask">Удалить запись</button>
  </div>
</template>

<script>
export default {
  name: 'Tasks',
  props: {
    title: String,
    taskId: Number
  },
  data () {
    return {
    }
  },
  methods: {
    deleteTask () {
      this.$store.commit('deleteTask', this.taskId)
    }
  }
}
</script>

<style scoped>
</style>
