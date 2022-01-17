import axios from "axios";

import { IHotelState } from "../interfaces";

const hotel = {
  state: {
    hotel: {},
  } as IHotelState,
  mutations: {
    setHotelById(state: IHotelState, data: IHotelState) {
      state.hotel = data;
    },
  },
  actions: {
    async fetchDataById({ commit }, id: number) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        commit("setHotelById", response.data as Array<object>);
        commit("setLoading", false);
      } catch (e) {
        console.error(e);
      }
    },
  },
  getters: {
    getHotel: (state: IHotelState) => state.hotel,
  },
};

export default hotel;
