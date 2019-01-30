<template lang="pug">
  div.t-list
    input.t-search(v-model="searchQuery")
    ul
      t-list-item(
        v-for="client in $store.getters.GETclients(searchQuery)"
        :key="client.id"
        :client="client"
        :class="(GETclientCurrentId === client.id) ? 't-is-active' : ''"
        @click.native="$store.dispatch('SETclientCurrentId', client.id)"
      )
</template>

<script>
import {mapGetters} from 'vuex';
import tListItem from './tListItem.vue';

export default {
  components: {
    tListItem,
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    ...mapGetters(['GETclientCurrentId']),
  }
}
</script>

<style lang="scss" scoped>
  .t-list {
    width: 35%;
    min-width: 240px;
    text-align: left;
  }

  .t-search {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    background: url(/search.svg) no-repeat;
    background-position: 10px;
    background-size: 20px 20px;
    padding: 10px 10px 10px 40px;

    &:focus,
    &:active {
      outline: none;
    }
  }

  .t-is-active {
    border-color: #002f8c;
  }
</style>
