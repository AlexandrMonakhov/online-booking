<template>
  <div class="about">
    <h1 class="about__title">Техническое задание для компании Cuva</h1>
    <h2 class="about-list__title">Использованные технологии:</h2>
    <ul class="about-list">
      <li class="about-list__item">VueJS (версия 2).</li>
      <li class="about-list__item">
        Версия компонента Vue - однофайловый компонент.
      </li>
      <li class="about-list__item">Saas styles.</li>
      <li class="about-list__item">Vuex.</li>
      <li class="about-list__item">TypeScript.</li>
      <li class="about-list__item">Vue CLI.</li>
      <li class="about-list__item">Axios для запросов к АПИ.</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.about {
  &__title {
    font-size: 35px;
    font-weight: normal;
    margin-bottom: 30px;
  }

  &-list {
    &__title {
      margin-bottom: 10px;
      font-weight: normal;
    }
    &__item {
      font-size: 18px;

      &:not(:last-child) {
        margin-bottom: 17px;
      }
    }
  }
}
</style>
