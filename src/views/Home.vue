<template>
  <div class="home">
    <h1 class="home__title">
      Найдено отелей: <strong>{{ hotelsCount }}</strong>
    </h1>
    <div class="cards">
      <Card v-for="hotel in allHotels" :key="hotel.id" :data="hotel" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "@/components/UI/Card.vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "app-home",
  data() {
    return {
      hotels: [],
    };
  },
  components: { Card },
  computed: mapGetters(["allHotels", "hotelsCount"]),
  methods: mapActions(["fetchData"]),
  mounted() {
    this.fetchData();
  },
});
</script>

<style lang="scss" scoped>
.home {
  &__title {
    font-weight: normal;
    text-align: center;
    margin-bottom: 25px;
  }
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}
</style>
