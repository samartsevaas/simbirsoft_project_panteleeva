import axios from "axios";
import ID_COMPETITION_FOR_TEAM from "./consts";

export default {
  state: {
    ligues: [],
  },
  mutations: {
    getLigues(state, ligues) {
    state.ligues.push(ligues);
    },
  },
  actions: {
    getLigues({ state, commit }) {
      ID_COMPETITION_FOR_TEAM.forEach((matchId) => {
        axios({
          type: "get",
          url: `http://api.football-data.org/v2/competitions/${matchId}/teams`,
          headers: {
            "X-Auth-Token": process.env.VUE_APP_API_KEY,
          },
        }).then((response) => commit("getLigues", response.data))
      });
    },
  },
  getters: {
    allLigues(state) {
        return state.ligues;
    },
  },
};
