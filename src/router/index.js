import Vue from "vue";
import VueRouter from "vue-router";
import competitionsListViews from "../views/CompetitionsListViews";
import teamsListViews from "../views/TeamsListViews";
import liguesListViews from "../views/LiguesListViews";
import ShowMatchesViews from "../views/ShowMatchesViews";

Vue.use(VueRouter);


const routes = [
  {
    path: "/competitions",
    name: "Competitions",
    component: competitionsListViews,
  },
  {
    path: "/teams",
    name: "Teams",
    component: teamsListViews,
  },
  {
    path: "/ligues",
    name: "Ligues",
    component: liguesListViews,
  },
  {
    path: "/main",
    name: "MatchOfTheDay",
    component: ShowMatchesViews,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
