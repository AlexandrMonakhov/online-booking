<template>
  <div id="app">
    <Header />
    <main class="main">
      <div class="container">
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import Vue from "vue";
export default Vue.extend({
  components: { Header, Footer },
});
</script>
