/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";

const hotels = {
  state: {
    hotels: [],
  },
  mutations: {
    setHotels(state, data) {
      state.hotels = data;
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=12"
        );
        commit("setHotels", response.data);
        commit('setLoading', false)
      } catch (e) {
        console.error(e);
      }
    },
  },
  getters: {
    getAllHotels: (state) => state.hotels,
    getHotelsCount: (state) => state.hotels.length,
  }
};

export default hotels;
