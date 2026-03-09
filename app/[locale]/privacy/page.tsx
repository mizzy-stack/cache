import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";
import Section from "@/components/Section";

type PageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "privacy");
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return (
    <Section title={t("title")} description={t("intro")}>
      <div className="rounded-2xl border border-border bg-surface p-6">
        <p className="text-base leading-6 font-semibold text-[#374542]">{t("statement")}</p>
        <p className="mt-3 text-base font-bold text-[#153f30]">{t("whatCollectTitle")}</p>
        <ul className="mt-1 space-y-1.5 text-base leading-6 font-semibold text-[#374542]">
          <li>{t("whatCollect.item1")}</li>
        </ul>
        <p className="mt-3 text-base font-bold text-[#153f30]">{t("whatNotCollectTitle")}</p>
        <ul className="mt-1 space-y-1.5 text-base leading-6 font-semibold text-[#374542]">
          <li>{t("whatNotCollect.item1")}</li>
          <li>{t("whatNotCollect.item2")}</li>
        </ul>
        <p className="mt-3 text-base leading-6 font-semibold text-[#374542]">{t("dataHandling")}</p>
      </div>
    </Section>
  );
}
