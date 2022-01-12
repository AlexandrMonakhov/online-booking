<template>
  <div class="form-wrapper">
    <h2 class="form__title">Забронируйте номер</h2>
    <form class="form">
      <div class="input-group">
        <input class="input" id="name" type="text" placeholder=" " />
        <label class="label" for="name">Введите имя</label>
      </div>
      <div class="input-group">
        <input class="input" id="address" type="email" placeholder=" " />
        <label class="label" for="address">Введите адрес</label>
      </div>
      <div class="input-group">
        <input class="input" id="phone" type="phone" placeholder=" " />
        <label class="label" for="phone">Введите телефон</label>
      </div>
      <button class="button">Остановиться здесь</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "app-form",
});
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &-wrapper {
    max-width: 500px;
    flex: 1;
  }

  &__title {
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>
