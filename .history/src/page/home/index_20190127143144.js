import Vue from "vue";
import Tpl from "./template.vue";
import "@assets/style/main.scss";
import "iview/dist/styles/iview.css";
import { Button, Input, Radio } from "iview";

new Vue({
  components:{
    "Button": Button,
    "Input": Input,
    "Radio": Radio
  },
  render:h => h(Tpl),
}).$mount("#app");
