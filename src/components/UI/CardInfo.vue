<template>
  <div class="card-info">
    <h2 class="card-info__title">Отель: {{ data.title }}</h2>
    <img
      class="card-info__image"
      :src="require(`@/assets/img/hotels/${data.id}.jpg`)"
      :alt="data.title"
    />
    <p class="card-info__description">{{ data.body }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "app-card-info",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.card-info {
  max-width: 50%;

  @media (max-width: 1126px) {
    max-width: 100%;
    box-shadow: 0px 3px 10px rgb(0 0 0 / 10%);
    padding-bottom: 30px;
    margin-bottom: 50px;
  }

  &__title {
    margin-bottom: 30px;
    text-align: center;
  }

  &__image {
    max-width: 100%;
    min-height: 550px;
    object-fit: cover;
  }

  &__description {
    margin-top: 20px;
    padding: 0 20px;
    @media (max-width: 1126px) {
      text-align: center;
    }
  }
}
</style>
