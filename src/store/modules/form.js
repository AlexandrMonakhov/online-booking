/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const form = {
  state: {
    isSending: false
  },
  actions: {
    setSending({ commit }, bool) {
      commit('setSending', bool);
    }
  },
  mutations: {
    setSending(state, bool) {
      state.isSending = bool;
    }
  },
  getters: {
    getSending: (state) => state.isSending
  }
};

export default form;