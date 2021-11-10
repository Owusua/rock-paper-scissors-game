import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    userScore: 0,
  },
  mutations: {
    setUserScore(state, data) {
      state.userScore = data;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
