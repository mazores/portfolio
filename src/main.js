import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
//import VueScrollTo from "vue-scrollto";

var VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo);
Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: h => h(App)
}).$mount("#app");
