import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";

export const buildPageMetadata = async (
  locale: AppLocale,
  pageKey:
    | "home"
    | "donate"
    | "requestHelp"
    | "offerHelp"
    | "updates"
    | "transparency"
    | "privacy"
    | "contact"
): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: `metadata.${pageKey}` });

  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: ["/logo.png"],
    },
  };
};
