import Vue from "vue";
import Vuex from "vuex";
import hotels from "./modules/hotels.js";
import hotel from "./modules/hotel.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true,
  },
  mutations: {
    setLoading(state, bool) {
      state.isLoading = bool;
    },
  },
  getters: {
    loading: (state) => state.isLoading,
  },
  modules: {
    hotels,
    hotel,
  },
});
