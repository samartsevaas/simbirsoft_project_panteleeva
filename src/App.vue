<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
      :mini-variant="mini"
      permanent
      class="aside"
    >
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-row justify="center">
        <v-date-picker
          v-model="picker"
          selected-items-text
          color="green lighten-1"
        ></v-date-picker>
      </v-row>
    </v-navigation-drawer>
    <v-app-bar app color="pink lighten-1" flat class="header">
      <v-toolbar-title
        class="white--text text-md-body-1 text-sm-body-2 text-caption"
        >Football info</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-text-field
        label="Поиск"
        outlined
        dense
        class="user"
        color="white"
        prefix
      ></v-text-field>
      <v-btn icon>
        <v-icon class="white--text">mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <div class="container">
          <router-view />
        </div>
      </v-container>
    </v-main>
    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default {
  name: "App",
  data() {
    return {
      dataFromServer: [],
      game: [],
      drawer: true,
      show: false,
      items: [
        {
          title: "Competition",
          icon: "mdi-table-alert",
          link: "/competitions",
        },
        { title: "Teams", icon: "mdi-account-group", link: "/teams" },
        { title: "Ligue", icon: "mdi-soccer", link: "/ligues" },
      ],
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    };
  },
  computed: {
    mini() {
      return ["xs", "sm"].includes(this.$vuetify.breakpoint.name);
    },
    newArrayGames() {
      let newArrayUniq = this.game.reduce(function (acc, current) {
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
      return newArrayUniq;
    },
  },
  methods: {
    getMatches: function () {
      axios({
        type: "get",
        url: `http://api.football-data.org/v2/matches?dateFrom=${this.picker}&dateTo=${this.picker}`,
        headers: {
          "X-Auth-Token": "b640fe61f8064cc3b5e928f58d652c8f",
        },
      }).then((response) => {
        this.game = response.data.matches;
      });
    },
  },
  mounted() {
    axios({
      type: "get",
      url: "https://api.football-data.org/v2/competitions?areas=2224,2195,2072",
      headers: {
        "X-Auth-Token": "b640fe61f8064cc3b5e928f58d652c8f",
      },
    }).then((response) => (this.dataFromServer = response.data.competitions));

    this.getMatches();
  },
  watch: {
    picker() {
      this.getMatches();
    },
  },
};
</script>
