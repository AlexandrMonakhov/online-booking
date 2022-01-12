<template>
  <div class="card">
    <img
      class="card__image"
      :src="require(`@/assets/img/hotels/${data.id}.jpg`)"
      :alt="data.title"
    />
    <div class="card-info">
      <h2 class="card__title">{{ data.title }}</h2>
      <p class="card__description">
        {{ data.body }}
      </p>
    </div>
    <router-link tag="button" class="button" :to="`/${data.id}`">
      Подробнее
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "app-card",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding-bottom: 20px;
  box-shadow: 0px 4px 15px rgba(58, 35, 11, 0.2);
  border-radius: 10px;

  &__image {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }

  &-info {
    padding: 20px;
  }

  &__title {
    font: bold 18px/27px "Montserrat", sans-serif;
    margin-bottom: 10px;
  }

  &__description {
    font: normal 14px/21px "Montserrat", sans-serif;
  }
}
</style>
