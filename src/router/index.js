import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Viewnotes from "../views/ViewNotes.vue";
import ViewStats from "../views/ViewStats.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/stats",
      name: "stats",
      component: ViewStats,
    },
    {
      path: "/notes",
      name: "notes",
      component: Viewnotes,
    },
  ],
});

export default router;
