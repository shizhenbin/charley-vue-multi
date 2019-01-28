import Vue from "vue";
import Tpl from "./template.vue";
import "@assets/style/main.scss";
import iView from 'iview';
Vue.use(iView);

new Vue({
  render:h => h(Tpl),
}).$mount("#app");
