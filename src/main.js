import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router.js";
import Chartick from "vue-chartkick";
import "chartkick/chart.js";

createApp(App).use(router).use(Chartick).mount("#app");
