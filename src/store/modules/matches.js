import axios from "axios";
export default {
  state: {
    matches: [],
    pickerData: null,
  },
  mutations: {
    getDayMatches(state, matches) {
      state.matches = matches;
    },
    setPicker(state, picker) {
      state.pickerData = picker;
    },
  },
  actions: {
    getMatches({ state, commit }) {
      axios({
        type: "get",
        url: `http://api.football-data.org/v2/matches?dateFrom=${state.pickerData}&dateTo=${state.pickerData}`,
        headers: {
          "X-Auth-Token": process.env.VUE_APP_API_KEY
        },
      }).then((response) => commit("getDayMatches", response.data.matches));
    },
  },
  getters: {
    newArrayGames(state) {
      return state.matches.reduce(function (acc, current) {
        return {
          ...acc,
          [current.competition.name]: {
            ...current,
            matchesOnLigue: [].concat(
              (acc[current.competition.name] || {}).matchesOnLigue || [],
              {
                awayTeam: current.awayTeam,
                homeTeam: current.homeTeam,
                score: current.score,
                status: current.status,
                utcDate: current.utcDate,
              }
            ),
          },
        };
      }, {});
    },
  },
};
