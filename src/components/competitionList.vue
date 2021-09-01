<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col v-for="n in 1" :key="n" cols="12" sm="4">
        <span>Соревнование:</span>
        <v-card class="pa-2" outlined tile> {{ competition.name }} </v-card>
        <span>Дата сезона:</span>
        <v-card class="pa-2" outlined tile> 
          <div>{{ competition.currentSeason.startDate }}</div> 
          <div>{{ competition.currentSeason.endDate }}</div> 
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "competitionList",
  props: {
    competition: {
      type: Object,
      required: true,
    },
  },
};
</script>
