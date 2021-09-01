import axios from "axios";
export default {
  state: {
    competitions: [],
  },
  mutations: {
    getCompetitions(state, competitions) {
      state.competitions = competitions;
    },
  },
  actions: {
    getCompetitions({ state, commit }) {
      axios({
        type: "get",
        url: `http://api.football-data.org/v2/competitions`,
        headers: {
          "X-Auth-Token": process.env.VUE_APP_API_KEY,
        },
      }).then((response) =>
      commit("getCompetitions", response.data.competitions)
      );
    },
  },
  getters: {
    allCompetitions(state) {
        return state.competitions;
    },
  },
};
