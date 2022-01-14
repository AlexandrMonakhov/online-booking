/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const notification = {
  state: {
    isShown: false
  },
  mutations: {
    setShown(state, bool) {
      state.isShown = bool;
    }
  },
  actions: {
    setShown({ commit }, bool) {
      commit('setShown', bool);
    }
  },
  getters: {
    getShown: (state) => state.isShown
  }
};

export default notification;