import Vue from "vue";
import VueRouter from "vue-router";
import { Home, About } from "./views";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
  ],
});
