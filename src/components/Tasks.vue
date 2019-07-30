<template>
  <div v-if="tasksList.length">
    <div v-for="(task, index) in tasksList" :key="'task-' + index" class="task" :class="{'task__done': task.done}">
      <div
        class="task__title"
         @click="markTask(task.originArrId)"
      >{{ task.originArrId + 1 + '.' + ' ' + task.taskName }}</div>
      <router-link class="task__edit" :to="{ name: 'Edit', params: {data: task} }">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="20px"
        height="28px"
        viewBox="0 0 528.899 528.899"
        style="enable-background:new 0 0 528.899 528.899;"
        xml:space="preserve"
      >
        <g>
          <path
            d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
              c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
              C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
              L27.473,390.597L0.3,512.69z"
          />
        </g>
      </svg>
      </router-link>

      

      <a @click="deleteTask(task.originArrId)" href="#" class="close" />
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
    markTask(index) {
      debugger
      let selectedTask = this.$store.state.tasksList[index];
      selectedTask.done = !selectedTask.done;
    }
  },
  computed: {
    tasksList() {
      let tasksList = this.$store.state.tasksList
        .map((el, i) => {
          el.originArrId = i;
          return el;
        })
        .reverse();
      let startIndex = (this.$route.params.key || 0) * 10;
      let result = tasksList.slice(startIndex, startIndex + 10);
      return result;
    }
  }
};
</script>

<style lang="less" scoped>
.task {
  background: #fff;
  margin: 10px 0px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16), 0 1px 3px rgba(0, 0, 0, 0.23);
  border-radius: 5px;
  display: flex;
  font-size: 18px;
  position: relative;
  transition: .3s;
  &__title {
    padding: 10px;
    width: 80%;
    cursor: pointer;
    transition: .3s;
    &:hover {
      box-shadow: 0 0px 3px rgba(0, 0, 0, 0.16), 0 1px 3px rgba(0, 0, 0, 0.23);
    }
  }
  &__done {
    text-decoration: line-through;
    background: green;
  }
  &__edit {
    position: absolute;
    top: 9px;
    right: 50px;
  }
}
.close {
  position: absolute;
  right: 10px;
  top: 5px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
</style>
