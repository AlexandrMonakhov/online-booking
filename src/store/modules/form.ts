import { IFormState } from "../interfaces";

const form = {
  state: {
    isSending: false,
    isLoad: false,
  } as IFormState,
  mutations: {
    setSending(state: IFormState, bool: boolean) {
      state.isSending = bool;
    },
    setLoad(state: IFormState, bool: boolean) {
      state.isLoad = bool;
    },
  },
  actions: {
    setSending({ commit }, bool: boolean) {
      commit("setSending", bool);
    },
    setLoad({ commit }, bool: boolean) {
      commit("setLoad", bool);
    },
  },
  getters: {
    getSending: (state: IFormState) => state.isSending,
    getLoad: (state: IFormState) => state.isLoad,
  },
};

export default form;
