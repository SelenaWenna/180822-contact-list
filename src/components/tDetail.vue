<template lang="pug">
.t-detail(v-if="client")
  .t-avatar(:style="`background-image: url(${client.general.avatar})`")
  .t-about
    .t-about__fio {{ client.general.firstName}} {{ client.general.lastName}}
    .t-about__job {{ client.job.title}} - {{ client.job.company}}
  h2.t-contacts Contacts
  .t-info
    .t-info__title Address:&nbsp;
    span.t-info__content
      span(v-if="client.address.country") {{ client.address.country }}
      span(v-if="client.address.city") , {{ client.address.city }}
      span(v-if="client.address.street") , {{ client.address.street }}
      span(v-if="client.address.zipCode") , {{ client.address.zipCode }}
  .t-info(v-if="client.contact.phone")
    .t-info__title Phone:&nbsp;
    span.t-info__content {{ client.contact.phone }}
  .t-info(v-if="client.contact.email")
    .t-info__title E-mail:&nbsp;
    span.t-info__content {{ client.contact.email }}
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters({client: 'GETclientCurrentContent'})
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
  margin: 0 auto 10px;
}

.t-about {
  text-align: center;

  &__fio {
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 20px;
    word-wrap: break-word;
    white-space: normal;
  }

  &__job {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 20px;
  }
}

.t-contacts {
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-style: italic;
  margin-bottom: 10px;
  margin-top: 30px;
}

.t-info {
  margin-bottom: 20px;
  word-wrap: unset;
  white-space: nowrap;

  &__title {
    font-weight: 700;
    font-style: italic;
    word-wrap: unset;
    white-space: nowrap;
  }

  &__content {
    font-style: italic;
    word-wrap: unset;
    white-space: normal;
  }
}

@media (min-width: 635px) {
  .t-avatar {
    float: left;
    margin-left: 0;
    margin-right: 20px;
  }

  .t-about {
    text-align: left;
    min-height: 128px;
  }
}
</style>
