<template>
  <v-app>
    <showmatches
      v-for="(match, key) in newArrayGames"
      :key="key"
      :games="match"
      :link="link"
    ></showmatches>
  </v-app>
</template>

<script>
import showmatches from "../components/showmatches";
export default {
  name: "ShowMatchesViews",
  components: {
    showmatches,
  },
  computed: {
    link() {
      return "/main";
    },
  },
};
</script>
