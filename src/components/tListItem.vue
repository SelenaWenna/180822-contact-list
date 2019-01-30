<template lang="pug">
li.t-list-item
  .t-avatar(:style="`background-image: url(${client.general.avatar})`")
  .t-about
    .t-fio {{ client.general.firstName}} {{ client.general.lastName}}
    .t-job {{ client.job.title}}
</template>

<script>
export default {
  props: ["client"]
}
</script>

<style lang="scss" scoped>
.t-list-item {
  border: 1px solid #ccc;
  padding: 8px 10px;
  display: flex;
  height: 85px;
  cursor: pointer;
}

.t-avatar {
  width: 65px;
  height: 65px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 20px;
  margin-top: 2px;
}

.t-about {
  max-width: calc(100% - 95px);
}

.t-list-item,
.t-about,
.t-fio,
.t-job {
  overflow: hidden;
  box-sizing: border-box;
}

.t-fio {
  font-weight: 700;
  height: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  word-wrap: unset;
  white-space: nowrap;
}

.t-job {
  max-height: 35px;
}
</style>
