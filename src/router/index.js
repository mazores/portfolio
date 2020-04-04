import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
//import Project from "../views/ProjectItem.vue";
import VueYoutube from "vue-youtube";

Vue.use(VueRouter);
Vue.use(VueYoutube);

Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/project/:id",
    name: "Project",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "project" */ "../views/ProjectDetail.vue"),
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
