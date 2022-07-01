import { createRouter, createWebHistory } from "vue-router";
import HomeCp from "../views/HomeCp.vue";
import AddCity from '../views/AddCity'
import EditCity from '../views/EditCity'

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeCp,
  },
  {
    path: "/add-city",
    name: "addcity",
    component: AddCity,
  },
  {
    path: "/cities/:cityId",
    name: "editcity",
    component: EditCity,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutCp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
