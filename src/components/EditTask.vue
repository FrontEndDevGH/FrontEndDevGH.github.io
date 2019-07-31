<template>
  <div class="task-edit">
    <h1 class="task-edit__title">Редактировать задачу</h1>
    <textarea class="task-edit__field" v-model="editTask"></textarea>
    <button class="task-edit__button" @click="saveTask">Сохранить</button>
    <button  class="task-edit__button task-edit__button-cancel" @click="cancelEdit">Отменить</button>
  </div>
</template>

<script>

export default {
  name: 'EditTask',
  data () {
    return {
      editTask: ''
    }
  },
  methods: {
    cancelEdit () {
      this.$router.go(-1)
    },
    saveTask () {
      this.$store.dispatch('myModule/set', {id: this.getTaskData.id, taskName: this.editTask})
      this.$router.go(-1)
    }
  },
  computed: {
    getTaskData () {
      return this.$route.params.data
    }
  },
  mounted () {
    this.editTask = this.getTaskData.taskName
  }
}
</script>

<style lang="less" scoped>
.task-edit {
  &__title {
    font-size: 25px;
  }
  &__field {
    border-radius: 5px;
    width: 99%;
    font-size: 18px;
    box-shadow: 0 3px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
    border: none;
  }
  &__button {
    border-radius: 5px;
    background: #32CD32;
    border: none;
    padding: 10px;
    font-size: 18px;
    margin-top: 10px;
    &-cancel {
    background: #f1f1f1;
    color: #222;
    margin-left: 15px;
    }
    cursor: pointer;
    color: #fff;
    box-shadow: 0 3px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
  }
}
</style>
