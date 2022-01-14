/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const modal = {
  state: {
    isVisible: false
  },
  actions: {
    setVisible({ commit }, bool) {
      commit('setVisible', bool);
    }
  },
  mutations: {
    setVisible(state, bool) {
      state.isVisible = bool;
    }
  },
  getters: {
    getVisible: (state) => state.isVisible
  }
};

export default modal;