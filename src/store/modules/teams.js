import axios from "axios";
import ID_COMPETITION_FOR_TEAM from "./consts";

export default {
  state: {
    teams: [],
  },
  mutations: {
    getTeams(state, teams) {
    state.teams.push(teams);
    },
  },
  actions: {
    getTeams({ state, commit }) {
      ID_COMPETITION_FOR_TEAM.forEach((matchId) => {
        axios({
          type: "get",
          url: `http://api.football-data.org/v2/competitions/${matchId}/teams`,
          headers: {
            "X-Auth-Token": process.env.VUE_APP_API_KEY,
          },
        }).then((response) => commit("getTeams", response.data))
      });
    },
  },
  getters: {
    allTeams(state) {
    return state.teams.reduce(function (acc, current) {
        return {
          ...acc,
          [current.competition.name]: {
            ...current,
            teams: current.teams,
          },
        };
      }, {});
    },
  },
};
