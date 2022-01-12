import Vue from "vue";
import Vuex from "vuex";
import { IStore } from "./interfaces";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hotels: [],
  },
  mutations: {
    updateData(state, data) {
      state.hotels = data;
    },
  },
  actions: {
    async fetchData({ commit }) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=12"
      );
      const data = await response.json();
      commit("updateData", data);
    },
  },
  getters: {
    allHotels(state) {
      return state.hotels;
    },
    hotelsCount(state) {
      return state.hotels.length;
    },
  },
});
