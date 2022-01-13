/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";

const hotels = {
  state: {
    hotels: [],
  },
  getters: {
    getAllHotels: (state) => state.hotels,
    getHotelsCount: (state) => state.hotels.length,
  },
  actions: {
    async fetchData({ commit }) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=12"
        );
        commit("setHotels", response.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  mutations: {
    setHotels(state, data) {
      state.hotels = data;
    },
    setLoading(state, bool) {
      state.isLoading = bool;
    },
  },
};

export default hotels;
