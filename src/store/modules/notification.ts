import { INotificationState } from "../interfaces";

const notification = {
  state: {
    isShown: false,
  } as INotificationState,
  mutations: {
    setShown(state: INotificationState, bool: boolean) {
      state.isShown = bool;
    },
  },
  actions: {
    setShown({ commit }, bool: boolean) {
      commit("setShown", bool);
    },
  },
  getters: {
    getShown: (state: INotificationState) => state.isShown,
  },
};

export default notification;
