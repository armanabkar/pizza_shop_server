import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("../views/Menu.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
  },
  {
    path: "/reservation",
    name: "Reservation",
    component: () => import("../views/Reservation.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
