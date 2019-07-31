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
    <div v-if="!computeTasksRoutes" class="lds-dual-ring"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'TasksWrapper',
  data () {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask () {
      if (this.newTask) {
        this.$store.dispatch('myModule/set', { taskName: this.newTask, done: false })
        this.newTask = ''
      }
      this.$router.push({ name: 'defaultChild' })
    }
  },
  computed: {
    computeTasksRoutes () {
      let dataLength = Object.values(this.$store.state.myModule.data).length
      if (dataLength) {
        return Math.ceil((dataLength / 10))
      }
      return null
    }
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
.lds-dual-ring {
  display: inline-block;
  width: 64px;
  height: 64px;
  position: absolute;
  top: 292px;
  left: 0;
  right: 0;
  margin: auto;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 46px;
  height: 46px;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
