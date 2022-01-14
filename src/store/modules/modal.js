/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const modal = {
  state: {
    isVisible: false
  },
  mutations: {
    setVisible(state, bool) {
      state.isVisible = bool;
    }
  },
  actions: {
    setVisible({ commit }, bool) {
      commit('setVisible', bool);
    }
  },
  getters: {
    getVisible: (state) => state.isVisible
  }
};

export default modal;