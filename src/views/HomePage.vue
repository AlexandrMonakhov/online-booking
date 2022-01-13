<template>
  <div class="home" v-if="!loading">
    <h1 class="home__title">
      Найдено отелей: <strong>{{ getHotelsCount }}</strong>
    </h1>
    <div class="cards">
      <Card v-for="hotel in getAllHotels" :key="hotel.id" :data="hotel" />
    </div>
  </div>
  <Loader v-else />
</template>

<script lang="ts">
import Vue from "vue";
import Card from "@/components/UI/Card.vue";
import Loader from "@/components/UI/Loader.vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "app-home",
  components: { Card, Loader },
  computed: mapGetters(["getAllHotels", "getHotelsCount", "loading"]),
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

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
