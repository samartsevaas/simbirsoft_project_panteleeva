<template>
    <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col v-for="n in 1" :key="n" cols="12" sm="4">
        <div>
          <h1>Лига</h1>
          <v-card class="pa-2" outlined tile>
            {{ ligue.competition.name }}
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ligueList",
  props: {
    ligue: {
      type: Object,
      required: true,
    },
  },
};
</script>
