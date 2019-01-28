import Vue from "vue";
import Tpl from "./template.vue";
import "@assets/style/main.scss";
import "iview/dist/styles/iview.css";
import { Button, Input, Radio } from "iview";
Vue.component("Button", Button);
Vue.component("Input", Input);
Vue.component("Radio", Radio);

new Vue({
  render:h => h(Tpl),
}).$mount("#app");
