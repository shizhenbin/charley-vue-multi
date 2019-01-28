import Vue from "vue";
import iView from "iview";
import Tpl from "./template.vue";
import "@assets/style/main.scss";
import 'iview/dist/styles/iview.css';

Vue.use(iView);

new Vue({
  render:h => h(Tpl),
}).$mount("#app");
