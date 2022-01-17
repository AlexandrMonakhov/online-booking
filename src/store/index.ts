import Vue from "vue";
import Vuex from "vuex";
import hotels from "./modules/hotels";
import hotel from "./modules/hotel";
import modal from "./modules/modal";
import form from "./modules/form";
import notification from "./modules/notification";
import { IState } from "./interfaces";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true,
  } as IState,
  mutations: {
    setLoading(state: IState, bool: boolean) {
      state.isLoading = bool;
    },
  },
  actions: {
    setLoading({ commit }, bool: boolean) {
      commit("setLoading", bool);
    },
  },
  getters: {
    loading: (state: IState) => state.isLoading,
  },
  modules: {
    hotels,
    hotel,
    modal,
    form,
    notification,
  },
});
