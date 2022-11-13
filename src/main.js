import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import router from "./router";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import { en } from "./localization/en";
import { de } from "./localization/de";
import "bootstrap/dist/css/bootstrap.css";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);
const pinia = createPinia();
const app = createApp(App);
const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "de",
  messages: {
    en: en,
    de: de,
  },
});

app.use(i18n);
app.use(pinia);
app.use(router);
app.mount("#app");
