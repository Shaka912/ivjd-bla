import { Locale, i18nConfig } from "@/i18n";

export default function getLocaleFromPath(pathname: string): Locale {
  for (const locale of i18nConfig.locales) {
    if (
      locale !== i18nConfig.defaultLocale &&
      (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
    ) {
      return locale;
    }
  }
  return i18nConfig.defaultLocale;
}
