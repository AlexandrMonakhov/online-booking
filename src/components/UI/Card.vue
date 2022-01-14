<template>
  <div class="card">
    <div class="card-image-box">
      <img
        class="card__image"
        :src="require(`@/assets/img/hotels/${data.id}.jpg`)"
        :alt="data.title"
      />
    </div>
    <div class="card-info">
      <h2 class="card__title">{{ data.title }}</h2>
      <p class="card__description">
        {{ data.body }}
      </p>
    </div>
    <router-link custom v-slot="{ navigate }" :to="`/${data.id}`">
      <button class="button" @click="navigate">Подробнее</button>
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
  color: #fff;
  padding-bottom: 20px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  transition: all 0.25s ease;
  overflow: hidden;

  @media (min-width: 991px) {
    &:hover {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
      transform: translateY(5px);

      .card-image-box img {
        transform: scale(1.15);
      }
    }
  }

  &__image {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 20px;
    transition: all 0.25s ease;
  }

  &-image-box {
    border-radius: 20px;
    overflow: hidden;
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
