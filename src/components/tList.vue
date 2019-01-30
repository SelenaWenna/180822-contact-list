<template lang="pug">
div.t-list
  .t-search
    .t-search__icon
      include ../../public/search.svg
    input.t-search__input(v-model="searchQuery")
    .t-search__clear(v-if="searchQuery" @click="searchQuery=''")
      include ../../public/clear.svg
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
  width: 330px;
  min-width: 330px;
  text-align: left;
}

.t-search {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  position: relative;

  &__input {
    width: 100%;
    height: 100%;
    padding: 10px 40px;
    box-sizing: border-box;

    &:focus,
    &:active {
      outline: none;
    }
  }

  &__icon,
  &__clear {
    position: absolute;
    top: 15px;
    bottom: 15px;

    & > svg {
      width: 20px;
      height: 20px;
      fill: #aaa;
    }
  }

  &__icon {
    right: auto;
    left: 10px;
  }

  &__clear {
    cursor: pointer;
    right: 10px;
    left: auto;
  }
}

.t-is-active {
  border-color: #002f8c;
}
</style>
