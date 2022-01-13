<template>
  <div class="modal-wrapper" @click="$emit('close')">
    <div class="modal__content" @click.stop="">
      <button class="modal__close" @click="$emit('close')">&#10005;</button>
      <h2 class="modal__title">
        Заявка обработана! Поздравляем с приобретением
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "app-modal",
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
    background-color: rgba(0, 0, 0, 0.15);
    z-index: 11;
  }

  &__content {
    position: relative;
    background-color: #fff;
    min-width: 700px;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  &__title {
    font-weight: normal;
    max-width: 500px;
    text-align: center;
  }
}
</style>
