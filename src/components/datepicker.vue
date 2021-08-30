<div class="header_event-expand"
      v-for="(newMatch, index) in games.matchesOnLigue"
      :key="index">
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
<div>
<div class="main-info_score">
<span class="main-info_homeTeam">{{
                newMatch.homeTeam.name
              }}</span>
              </div>
<div>
<span class="main-info_homeTeam">{{
                newMatch.score.fullTime.homeTeam
              }}</span>
</div>
<div><span>:</span></div>
<div><span class="main-info_awayTeam">
                {{ newMatch.score.fullTime.awayTeam }}
              </span></div>
</div>
<div><span class="main-info_awayTeam">
                {{ newMatch.awayTeam.name }}
              </span></div>
              </div>
<div class="main-info_matchStatus">
<span> {{ newMatch.status }}</span>
</div>
</div>
</div>