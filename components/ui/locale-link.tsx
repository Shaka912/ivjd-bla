import { i18nConfig } from "@/i18n";
import Link, { LinkProps } from "next/link";
import { default as NextLink } from "next/link";
import { LinkValue } from "sanity-plugin-link-field";
import { Link as SanityLink } from "sanity-plugin-link-field/component";

interface LocaleLinkProps extends LinkProps {
  link?: LinkValue;
  href: string;
  lang: string;
  children: React.ReactNode;
  [key: string]: any;
}

export default function LocaleLink({
  href,
  lang,
  link,
  ...props
}: LocaleLinkProps) {
  const isDefaultLang = lang === i18nConfig.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;

  if (link?.type === "phone" || link?.type === "email") {
    return <SanityLink {...props} link={link} as={Link} />;
  } else {
    return <Link href={path} {...props} />;
  }
}
