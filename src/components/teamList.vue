<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col v-for="n in 1" :key="n" cols="12" sm="4">
        <div>
          <h1>Лига</h1>
          <v-card class="pa-2" outlined tile>
            {{ team.competition.name }}
          </v-card>
        </div>
        <div>
          <h2>Команды лиги</h2>
          <v-card
            class="pa-2"
            outlined
            tile
            v-for="item in team.teams"
            :key="item"
          >
            <div>{{ item.name }}</div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "teamList",
  props: {
    team: {
      type: Object,
      required: true,
    },
  },
};
</script>
