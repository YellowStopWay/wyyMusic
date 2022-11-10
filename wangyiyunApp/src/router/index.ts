import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home/index.vue"),
    },
    {
      path: "/itemMusic",
      name: "itemMusic",
      component: () => import("../views/ItemMusic/index.vue"),
    },
  ],
});

export default router;
