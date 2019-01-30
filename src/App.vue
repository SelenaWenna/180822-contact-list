<template lang="pug">
div#app
  t-list
  t-detail
</template>

<script>
import tList from './components/tList.vue'
import tDetail from './components/tDetail.vue'

export default {
  name: 'app',
  components: {
    tList,
    tDetail,
  },
  beforeCreate() {
    this.$store.dispatch("SETclients");
  }
}
</script>

<style lang="scss">
@import "./scss/reset.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  min-width: 610px;
  max-width: 1200px;
}
</style>
