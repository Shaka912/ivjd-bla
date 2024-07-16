import { NextRequest, NextResponse } from "next/server";
import { i18nConfig } from "@/i18n";
import getLocaleFromPath from "@/utils/i18n/getLocaleFromPath";

export default function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Internationalization.

  // Check if the default locale is in the pathname
  if (
    pathname.startsWith(`/${i18nConfig.defaultLocale}/`) ||
    pathname === `/${i18nConfig.defaultLocale}`
  ) {
    // Preserve query parameters
    const redirectURL = new URL(
      pathname.replace(
        `/${i18nConfig.defaultLocale}`,
        pathname === `/${i18nConfig.defaultLocale}` ? "/" : ""
      ) + search,
      request.url
    );
    return NextResponse.redirect(redirectURL);
  }

  const locale = getLocaleFromPath(pathname);

  if (locale === i18nConfig.defaultLocale) {
    // We are on the default locale
    // Rewrite so Next.js understands

    // Tell Next.js it should pretend it's /en/about
    return NextResponse.rewrite(
      new URL(`/${i18nConfig.defaultLocale}${pathname}${search}`, request.url)
    );
  }
}

export const config = {
  // Matcher ignoring /_next/ and /api/
  matcher: [
    "/((?!api|_next/static|_next/image|studio|favicon.ico|images|videos|files|public).*)",
  ],
};
