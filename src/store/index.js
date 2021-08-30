import Vue from "vue";
import Vuex from "vuex";
import matches from "./modules/matches";

Vue.use(Vuex);

export default new Vuex.Store({
  
  modules: {
    matches,
  },
});
