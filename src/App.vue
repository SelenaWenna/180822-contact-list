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
  @import "./scss/reset";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    // margin-top: 60px;
    display: flex;
    // flex-wrap: wrap;
    min-height: 100vh;
    min-width: 240px;
    max-width: 1920px;
  }
</style>
