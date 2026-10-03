import { createI18n } from "vue-i18n";
import en from "./en.json";
import hi from "./hi.json";
import bn from "./bn.json";
import it from "./it.json";
import { STANDALONE } from "#/standalone";

export const i18n = createI18n({
  legacy: false,
  // The offline bundle has no account to read a preference from, so Italian
  // is the default there.
  locale: STANDALONE ? "it" : "en",
  fallbackLocale: "en",
  globalInjection: true,
  // messages
  messages: {
    en,
    hi,
    bn,
    it,
  },
});

export const availableLocale: Array<{
  title: string;
  value: string;
}> = STANDALONE
  ? [
      { title: "Italiano", value: "it" },
      { title: "English", value: "en" },
    ]
  : [
      { title: "English", value: "en" },
      { title: "Italiano", value: "it" },
      { title: "Hindi", value: "hi" },
      { title: "Bengali", value: "bn" },
    ];

export default i18n;