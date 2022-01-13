/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";

const hotel = {
  state: {
    hotel: {},
  },
  getters: {
    getHotel: (state) => state.hotel,
  },
  actions: {
    async fetchDataById({ commit }, id) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        commit("setHotelById", response.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  mutations: {
    setHotelById(state, data) {
      state.hotel = data;
    },
  }
}

export default hotel;