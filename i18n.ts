export const i18nConfig = {
  defaultLocale: "es",
  locales: ["en", "es", "ar"],
  localeNames: {
    en: {
      en: "English",
      es: "Spanish",
      ar: "Arabic",
    },
    es: {
      en: "Inglés",
      es: "Español",
      ar: "Árabe",
    },
    ar: {
      en: "إنجليزي",
      es: "إسباني",
      ar: "العربية",
    },
  },
} as const;

export type Locale = (typeof i18nConfig)["locales"][number];
