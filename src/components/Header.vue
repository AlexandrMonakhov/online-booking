<template>
  <header class="header">
    <router-link to="/">
      <img class="header__logo" src="@/assets/logo.png" alt="Логотип" />
    </router-link>
    <nav class="nav header-nav">
      <router-link to="/">Главная</router-link>
      <router-link to="/about">О проекте</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 40px;
  color: #fff;
  background-color: #1e2023;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  &__logo {
    max-width: 80px;
  }

  &-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 200px;
  }
}
</style>
