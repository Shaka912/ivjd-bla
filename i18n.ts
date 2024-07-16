export const i18nConfig = {
  defaultLocale: "en",
  locales: ["en", "es"],
  localeNames: {
    en: {
      en: "English",
      es: "Inglés",
    },
    es: {
      en: "Spanish",
      es: "Español",
    },
  },
} as const;

export type Locale = (typeof i18nConfig)["locales"][number];
