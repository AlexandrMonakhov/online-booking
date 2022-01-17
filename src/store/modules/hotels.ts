import axios from "axios";
import { IHotelsState } from "../interfaces";

const hotels = {
  state: {
    hotels: [],
  } as IHotelsState,
  mutations: {
    setHotels(state: IHotelsState, data: Array<object>) {
      state.hotels = data;
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=12"
        );
        commit("setHotels", response.data as Array<object>);
        commit("setLoading", false);
      } catch (e) {
        console.error(e);
      }
    },
  },
  getters: {
    getAllHotels: (state: IHotelsState) => state.hotels,
    getHotelsCount: (state: IHotelsState) => state.hotels.length,
  },
};

export default hotels;
