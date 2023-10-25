import { createRouter, createWebHistory } from "vue-router";
import Viewnotes from "../views/ViewNotes.vue";
import ViewStats from "../views/ViewStats.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Viewnotes,
    },

    {
      path: "/notes",
      name: "notes",
      component: Viewnotes,
    },
    {
      path: "/stats",
      name: "stats",
      component: ViewStats,
    },
  ],
});

export default router;
