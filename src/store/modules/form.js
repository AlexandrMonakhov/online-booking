/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const form = {
  state: {
    isSending: false,
    isLoad: false
  },
  mutations: {
    setSending(state, bool) {
      state.isSending = bool;
    },
    setLoad(state, bool) {
      state.isLoad = bool;
    }
  },
  actions: {
    setSending({ commit }, bool) {
      commit('setSending', bool);
    },
    setLoad({ commit }, bool) {
      commit('setLoad', bool);
    }
  },
  getters: {
    getSending: (state) => state.isSending,
    getLoad: (state) => state.isLoad
  }
};

export default form;