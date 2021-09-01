<template>
  <v-app>
    <ligue-list
      v-for="(ligue, index) in allLigues"
      :key="index"
      :ligue="ligue"
    ></ligue-list>
  </v-app>
</template>

<script>
import ligueList from "../components/ligueList";
import { mapGetters } from "vuex";
export default {
  name: "liguesListViews",
  components: {
    ligueList,
  },
  computed: {
    ...mapGetters("ligues", ["allLigues"]),
  },
};
</script>
