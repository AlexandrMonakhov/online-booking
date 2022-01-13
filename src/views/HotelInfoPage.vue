<template>
  <div class="about-hotel" v-if="!loading">
    <CardInfo :data="getHotel" />
    <Form />
  </div>
  <Loader v-else />
</template>

<script lang="ts">
import Vue from "vue";

import Form from "@/components/Form.vue";
import CardInfo from "@/components/UI/CardInfo.vue";
import Loader from "@/components/UI/Loader.vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "app-home",
  components: { Form, CardInfo, Loader },
  computed: mapGetters(["getHotel", "loading"]),
  methods: mapActions(["fetchDataById"]),
  mounted() {
    const id = this.$route.params.id;
    return this.fetchDataById(id);
  },
});
</script>

<style lang="scss" scoped>
.about-hotel {
  display: flex;
  justify-content: space-between;

  @media (max-width: 1126px) {
    align-items: center;
    flex-direction: column;
  }
}
</style>
