import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

import i18next from "./i18n";

createApp(App)
  .mixin({
    methods: {
      // * translate
      $t(key) {
        return i18next.t(key);
      },
      // * changle lang
      $changeLanguage(lng) {
        i18next.changeLanguage(lng);
      },
      // * get current lang
      $currentLanguage() {
        return i18next.language;
      },
    },
  })
  .mount("#app");
