export const i18nConfig = {
  defaultLocale: "en",
  locales: ["en", "es", "ar"],
  localeNames: {
    en: {
      en: "English",
      es: "Inglés",
      ar: "Arabic",
    },
    es: {
      en: "Spanish",
      es: "Español",
      ar: "Árabe",
    },
    ar: {
      en: "Arabic",
      es: "Árabe",
      ar: "العربية",
    },
  },
} as const;

export type Locale = (typeof i18nConfig)["locales"][number];
