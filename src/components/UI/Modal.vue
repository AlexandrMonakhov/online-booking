<template>
  <div class="modal-wrapper" @click="setVisible(false)" v-if="getVisible">
    <div class="modal__content" @click.stop="" :class="{ active: getVisible }">
      <button class="modal__close" @click="setVisible(false)">&#10005;</button>
      <h2 class="modal__title">
        Заявка обработана! Поздравляем с приобретением
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "app-modal",
  computed: mapGetters(["getVisible"]),
  methods: mapActions(["setVisible"]),
});
</script>

<style lang="scss" scoped>
.modal {
  &-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 11;
  }

  &__content {
    position: relative;
    background-color: rgb(30, 32, 35);
    min-width: 700px;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    transition: all 4s;

    @media (max-width: 540px) {
      min-width: 300px;
    }

    @media (max-width: 740px) {
      min-height: 150px;
    }
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
  }

  &__title {
    font-weight: normal;
    max-width: 500px;
    text-align: center;

    @media (max-width: 540px) {
      font-size: 14px;
      max-width: 300px;
    }
  }
}

.active {
  animation: slideIn 0.3s ease forwards;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-200vh);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
