import Vue from "vue";
import Vuex from "vuex";
import hotels from "./modules/hotels.js";
import hotel from "./modules/hotel.js";
import modal from "./modules/modal.js";
import form from "./modules/form.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true,
  },
  actions: {
    setLoading({ commit }, bool) {
      commit("setLoading", bool);
    },
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
    modal,
    form,
  },
});
