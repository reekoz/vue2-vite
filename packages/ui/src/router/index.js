import Vue from "vue";
import VueRouter from "vue-router";
import TheWelcome from "../components/TheWelcome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: TheWelcome,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
