import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Play from "../views/Play";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/play/:id",
    name: "Play",
    component: Play,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
