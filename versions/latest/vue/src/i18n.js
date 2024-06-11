import i18next from "i18next";

import ar from "./locales/ar.json";
import de from "./locales/de.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import hi from "./locales/hi.json";
import ja from "./locales/ja.json";
import pt from "./locales/pt.json";
import ru from "./locales/ru.json";
import tr from "./locales/tr.json";
import zh from "./locales/zh.json";

i18next.init({
  resources: {
    ar: { translation: ar },
    en: { translation: en },
    de: { translation: de },
    es: { translation: es },
    fr: { translation: fr },
    hi: { translation: hi },
    ja: { translation: ja },
    pt: { translation: pt },
    ru: { translation: ru },
    tr: { translation: tr },
    zh: { translation: zh },
  },
  lng: "en", // Default language
  interpolation: {
    escapeValue: false, // Not needed for Vue.js
  },
});

export default i18next;
