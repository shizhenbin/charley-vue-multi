import Vue from "vue";
import iView from "iview";
import Tpl from "./template.vue";
import "@assets/style/main.scss";

Vue.use(iView);

new Vue({
  render:h => h(Tpl),
}).$mount("#app");
