<template>
  <div id="app">
    <Header />
    <main class="main">
      <div class="container">
        <router-view />
      </div>
    </main>
    <Footer />

    <Modal v-if="getSending && getVisible" />
    <Notification />
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Modal from "@/components/UI/Modal.vue";
import Notification from "@/components/UI/Notification.vue";

import Vue from "vue";
import { mapGetters } from "vuex";
export default Vue.extend({
  components: { Header, Footer, Modal, Notification },
  computed: mapGetters(["getSending", "getVisible"]),
});
</script>
