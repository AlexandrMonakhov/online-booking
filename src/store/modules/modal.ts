import { IModalState } from "../interfaces";

const modal = {
  state: {
    isVisible: false,
  } as IModalState,
  mutations: {
    setVisible(state: IModalState, bool: boolean) {
      state.isVisible = bool;
    },
  },
  actions: {
    setVisible({ commit }, bool: boolean) {
      commit("setVisible", bool);
    },
  },
  getters: {
    getVisible: (state: IModalState) => state.isVisible,
  },
};

export default modal;
