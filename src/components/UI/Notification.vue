<template>
  <div
    class="notification"
    :class="{ shown: getShown, hide: !getShown }"
    v-if="getLoad"
  >
    <button class="notification__close" @click="setShown(false)">
      &#10005;
    </button>
    <div class="notification__content">
      <span class="notification__text">Идет отправка данных...</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "app-notifications",
  computed: mapGetters(["getShown", "getLoad"]),
  methods: mapActions(["setShown"]),
});
</script>

<style lang="scss" scoped>
.notification {
  position: fixed;
  bottom: 70px;
  right: 20px;
  display: flex;
  justify-content: center;
  padding: 10px;
  min-width: 400px;
  min-height: 80px;
  border-radius: 20px;
  background: rgba(59, 222, 200);
  z-index: 20;
  opacity: 0;
  pointer-events: none;

  @media (max-width: 466px) {
    min-width: 300px;
  }

  @media (max-width: 360px) {
    right: 5px;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }

  &__close {
    position: absolute;
    right: 15px;
    background-color: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
  }

  &__text {
    font-size: 18px;
  }
}

.shown {
  opacity: 1;
  pointer-events: auto;
  animation: slideIn 1s ease forwards;
}

.hide {
  opacity: 1;
  pointer-events: auto;
  animation: slideOut 1s ease forwards;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(110%);
  }
  100% {
    transform: translateX(-10px);
  }
}

@keyframes slideOut {
  0% {
    transform: translateX(-10px);
  }
  100% {
    opacity: 0;
    transform: translateX(110%);
  }
}
</style>
