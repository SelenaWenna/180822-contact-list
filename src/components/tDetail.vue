<template lang="pug">
  .t-detail(v-if="client")
    .t-avatar(:style="`background-image: url(${client.general.avatar})`")
    .t-about
      .t-fio {{ client.general.firstName}} {{ client.general.lastName}}
      .t-job {{ client.job.title}} - {{ client.job.company}}
    .t-info
      span.t-info__title Address:&nbsp;
      span.t-info__content
        span(v-if="client.address.country") {{ client.address.country }}
        span(v-if="client.address.city") , {{ client.address.city }}
        span(v-if="client.address.street") , {{ client.address.street }}
        span(v-if="client.address.zipCode") , {{ client.address.zipCode }}
    .t-info(v-if="client.contact.phone")
      span.t-info__title Phone:&nbsp;
      span.t-info__content {{ client.contact.phone }}
    .t-info(v-if="client.contact.email")
      span.t-info__title E-mail:&nbsp;
      span.t-info__content {{ client.contact.email }}
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters({client: 'GETclientCurrentContent'})
    // client() {
    //   console.log(this.$store.getters.GETclientCurrentContent)
    //   return this.$store.getters.GETclientCurrentContent;
    // },
  }
}
</script>

<style lang="scss" scoped>
  .t-detail {
    width: 65%;
    text-align: left;
    padding: 50px 10px;
  }

  .t-avatar {
    width: 128px;
    min-width: 128px;
    height: 128px;
    background-size: cover;
    background-repeat: no-repeat;
    margin-right: 30px;
    margin-bottom: 10px;
    float: left;
  }

  .t-fio {
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 20px;
  }

  .t-job {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .t-info {
    margin-bottom: 20px;

    &__title {
      font-weight: 700;
      font-style: italic;
    }

    &__content {
      font-style: italic;
    }
  }
</style>
