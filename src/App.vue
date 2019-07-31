<template>
  <div class="main-block">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
      this.$store.dispatch('myModule/openDBChannel').catch(console.error)
  }
}
</script>

<style lang="less" scoped>
.main-block {
  width: 90%;
  max-width: 500px;
  height: auto;
  min-height: 250px;
  background: #DCDCDC;
  margin: 100px auto;
  border-radius: 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 10px;
}
</style>
