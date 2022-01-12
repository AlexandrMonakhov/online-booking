<template>
  <div class="about-hotel">
    <CardInfo :data="hotel" />
    <Form />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Form from "@/components/Form.vue";
import CardInfo from "@/components//UI/CardInfo.vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "app-home",
  components: { Form, CardInfo },
  data() {
    return {
      hotel: null,
    };
  },
  computed: mapGetters(["allHotels"]),
  methods: mapActions(["fetchData"]),
  mounted() {
    this.fetchData();
  },
  created() {
    const id = this.$route.params.id;
    const hotel = this.allHotels.find((elem: any) => elem.id == id);
    this.hotel = hotel;
  },
});
</script>

<style lang="scss" scoped>
.about-hotel {
  display: flex;
  justify-content: space-between;
}
</style>
