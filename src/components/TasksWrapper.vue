<template>
  <div>
    <h1 class="main-block__title">Задачи</h1>
    <textarea class="main-block__field" v-model="newTask"></textarea>
    <button class="main-block__button" @click="addTask">Добавить задачу</button>
    <div class="main-block__pagination" v-if="computeTasksRoutes > 1">
      <div
        class="main-block__pagination-item"
        v-for="(taskRoute, index)  in computeTasksRoutes"
        :key="'taskRoute-' + index"
      >
        <router-link
          :to="{ name: 'Tasks', params: { taskId: taskRoute, key: taskRoute - 1 }}"
        >{{ taskRoute }}</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { db } from '../main'
export default {
  name: 'TasksWrapper',
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
      this.$router.push({ name: 'defaultChild' })
    }
  },
  computed: {
    computeTasksRoutes () {
      return Math.ceil((this.$store.state.tasksList.length / this.maxTaskCount))
    }
  },
  mounted () {
    this.$store.dispatch('userJoin')
  }
}
</script>

<style lang="less" scoped>
.main-block {
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
    cursor: pointer;
    color: #fff;
    box-shadow: 0 3px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
  }
  &__pagination {
    margin: 10px 10px 0px;
    display: flex;
    justify-content: center;
    &-item {
      height: 33px;
      width: 30px;
      background: #fff;
      border: 1px solid #f1f1f1;
      box-shadow: 0 3px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
      a {
        padding-top: 5px;
        display: block;
        height: 100%;
        text-decoration: none;
        text-align: center;
        color: #222;
      }
    }
  }
}
</style>
