<template>
  <div class="main-block">
    <h1>{{ route.params.data }}</h1>
    <textarea v-model="newTask"></textarea>
    <button @click="saveTask">Сохранить</button>
    <button @click="cancelEdit">Отменить</button>
  </div>
</template>

<script>

export default {
  name: 'EditTask',
  data () {
    return {
      newTask: ''
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="less" scoped>
</style>
