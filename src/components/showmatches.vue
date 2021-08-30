<template>
  <div class="row center">
    <div class="col-12 test2">
      <div class="header_event">
        <span>
          <v-btn icon @click="favorLigue">
            <v-icon :class="[favoriteClassLigue]">mdi-star</v-icon>
          </v-btn>
        </span>
        <div class="header_event-countryLogo">
          <img width="20" height="20" :src="games.competition.area.ensignUrl" />
        </div>
        <div class="header_event-info">
          <div class="header_event-info_ligue">
            <span class="header_event-info_ligue_country"
              >{{ games.competition.name }}
            </span>
          </div>
          <div>
            <div class="main-info_table" @click="active">
              <span><a link="">показать все игры</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="header_event-expand"
      v-for="(newMatch, index) in games.matchesOnLigue"
      :key="index"
    >
      <div class="col-12 header_event matches" v-if="isActive">
        <div class="header_event matches">
          <div>
            <span>
              <v-btn icon @click="favorMatch">
                <v-icon :class="[favoriteClassMatch]">mdi-star</v-icon>
              </v-btn>
            </span>
          </div>
          <div>
            <span class=""> {{ toDate(newMatch.utcDate) }} </span>
          </div>
        </div>
        <div class="main-info_score_markUp">
          <div class="main-info_score_intoMark">
            <div class="main-info_score">
              <span class="main-info_homeTeam">{{
                newMatch.homeTeam.name
              }}</span>
            </div>
          </div>
          <div class="main-info_score_intoMark">
              <div class="main-info_score_intoMark">
              <span class="main-info_homeTeam">{{
                newMatch.score.fullTime.homeTeam
              }}</span>
            </div>
            <div><span>:</span></div>
            <div class="main-info_score_intoMark">
              <span class="main-info_awayTeam">
                {{ newMatch.score.fullTime.awayTeam }}
              </span>
            </div>
            </div>
          <div>
            <span class="main-info_awayTeam">
              {{ newMatch.awayTeam.name }}
            </span>
          </div>
        </div>
        <div class="main-info_matchStatus">
          <span> {{ newMatch.status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    games: {
      type: Object,
      required: true,
    },
    link: {
      type: String,
    }
  },
  data() {
    return {
      isActive: false,
      onFavMatch: false,
      onFavLigue: false,
      onFavTeam: false,
    };
  },
  methods: {
    active: function () {
      this.isActive = !this.isActive;
    },
    favorMatch: function () {
      this.onFavMatch = !this.onFavMatch;
    },
    favorLigue: function () {
      this.onFavLigue = !this.onFavLigue;
    },
    favorTeam: function () {
      this.onFavTeam = !this.onFavTeam;
    },
    toDate(dateString) {
      let dateMatch = new Date(dateString);
      let dateMatchParse = Date.parse(dateMatch);
      let getCurrentHours = new Date(dateMatchParse).getHours();
      let getCurrentMinutes = new Date(dateMatchParse).getMinutes();
      let fullTime =
        getCurrentHours +
        ":" +
        (getCurrentMinutes < 10 ? "0" + getCurrentMinutes : getCurrentMinutes);
      return fullTime;
    },
  },
  computed: {
    favoriteClassMatch() {
      return this.onFavMatch && "yellow--text";
    },
    favoriteClassLigue() {
      return this.onFavLigue && "yellow--text";
    },
    favoriteClassTeam() {
      return this.onFavTeam && "yellow--text";
    },
  },
};
</script>
