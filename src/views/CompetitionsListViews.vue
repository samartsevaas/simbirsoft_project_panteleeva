<template>
  <v-app>
    <competitionList
      v-for="(competition, index) in allCompetitions"
      :key="index"
      :competition="competition"
    ></competitionList>
  </v-app>
</template>

<script>
import competitionList from "../components/competitionList";
import { mapGetters } from "vuex";
export default {
  name: "competitionsListViews",
  components: {
    competitionList,
  },
  computed: {
    ...mapGetters("competitions", ["allCompetitions"]),
  },
};
</script>
