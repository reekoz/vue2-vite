import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import pinia from "./plugins/pinia";
import router from "./router";

import "./assets/main.css";

new Vue({
  pinia,
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
