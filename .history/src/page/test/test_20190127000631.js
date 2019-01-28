import Vue from "vue";
import Tpl from "./template1.vue";
import "@assets/style/main.scss";

new Vue({
  render:h => h(Tpl),
}).$mount("#app");
