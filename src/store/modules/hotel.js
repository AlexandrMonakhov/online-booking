/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";

const hotel = {
  state: {
    hotel: {},
  },
  mutations: {
    setHotelById(state, data) {
      state.hotel = data;
    },
  },
  actions: {
    async fetchDataById({ commit }, id) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        commit("setHotelById", response.data);
        commit('setLoading', false)
      } catch (e) {
        console.error(e);
      }
    },
  },
  getters: {
    getHotel: (state) => state.hotel,
  }
}

export default hotel;