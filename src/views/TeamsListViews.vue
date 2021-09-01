<template>
  <v-app>
    <team-list
      v-for="(team, index) in allTeams"
      :key="index"
      :team="team"
    ></team-list>
  </v-app>
</template>

<script>
import teamList from "../components/teamList";
import { mapGetters } from "vuex";
export default {
  name: "teamsListView",
  components: {
    teamList,
  },
  computed: {
    ...mapGetters("teams", ["allTeams"]),
  },
};
</script>
