<template>
  <div class="form-wrapper">
    <h2 class="form__title">Забронируйте номер</h2>
    <form class="form" @submit.prevent="submitForm">
      <div class="input-group">
        <input
          class="input"
          v-model.trim="name"
          id="name"
          type="text"
          placeholder=" "
        />
        <label class="label" for="name">Введите имя</label>
        <small v-if="$v.name.$dirty && !$v.name.required" class="invalid">
          Заполните это поле
        </small>
        <small v-else-if="$v.name.$dirty && !$v.name.minLength" class="invalid">
          Поле имя должно содержать минимум 2 символа
        </small>
      </div>
      <div class="input-group">
        <input
          class="input"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email),
          }"
          v-model.trim="email"
          id="email"
          type="email"
          placeholder=" "
        />
        <label class="label" for="email">Введите адрес</label>
        <small v-if="$v.email.$dirty && !$v.email.required" class="invalid">
          Заполните это поле
        </small>
        <small v-else-if="$v.email.$dirty && !$v.email.email" class="invalid">
          Введите корректный адрес почты
        </small>
      </div>
      <div class="input-group">
        <input
          class="input"
          v-model.trim="phone"
          id="phone"
          type="phone"
          placeholder=" "
        />
        <label class="label" for="phone">Введите телефон</label>
        <small v-if="$v.phone.$dirty && !$v.phone.required" class="invalid">
          Заполните это поле
        </small>
        <small
          v-else-if="
            ($v.phone.$dirty && !$v.phone.minLength) || !$v.phone.maxLength
          "
          class="invalid"
        >
          Поле телефон должно содержать минимум 11 символов, максимум 12
        </small>
      </div>
      <button class="button">Остановиться здесь</button>
      <span v-if="sending">Идет отправка...</span>
    </form>
    <Modal v-if="!sending && isVisible" @close="isVisible = !isVisible" />
  </div>
</template>

<script>
import Vue from "vue";
import {
  email,
  required,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

import Modal from "@/components/UI/Modal.vue";

export default Vue.extend({
  name: "app-form",
  components: { Modal },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      sending: false,
      isVisible: false,
    };
  },
  validations: {
    name: { required, minLength: minLength(2) },
    email: { email, required },
    phone: { required, minLength: minLength(11), maxLength: maxLength(12) },
  },
  methods: {
    submitForm() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      this.sending = true;
      setTimeout(() => {
        this.name = this.email = this.phone = "";
        this.sending = false;
        this.isVisible = true;
      }, 1500);
    },
  },
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
    width: 100%;

    @media (max-width: 1126px) {
      max-width: 70%;
    }
  }

  &__title {
    text-align: center;
    margin-bottom: 30px;
  }
}

input.invalid {
  border-bottom: 1px solid tomato;
}

small.invalid {
  color: tomato;
}
</style>
