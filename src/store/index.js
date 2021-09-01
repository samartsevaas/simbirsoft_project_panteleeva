import Vue from "vue";
import Vuex from "vuex";
import matches from "./modules/matches";
import competitions from "./modules/competition";
import teams from "./modules/teams";
import ligues from "./modules/ligues";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    matches: {
      namespaced: true,
      ...matches,
    },
    competitions: {
      namespaced: true,
      ...competitions,
    },
    teams: {
      namespaced: true,
      ...teams,
    },
    ligues: {
      namespaced: true,
      ...ligues,
    }
  },
});
