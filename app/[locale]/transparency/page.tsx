import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";
import Section from "@/components/Section";

type PageProps = {
  params: Promise<{ locale: AppLocale }>;
};

const summaryKeys = [
  "totalReceived",
  "totalDistributed",
  "operatingCosts",
  "remainingBalance",
] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "transparency");
}

export default async function TransparencyPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "transparency" });

  return (
    <div className="space-y-6">
      <Section title={t("title")} description={t("intro")}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {summaryKeys.map((key) => (
            <article key={key} className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#586763]">
                {t(`summary.${key}.label`)}
              </p>
              <p className="mt-2 text-2xl font-semibold">{t(`summary.${key}.value`)}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title={t("publishingRhythmTitle")}>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <p className="text-base leading-6 font-semibold text-[#374542]">{t("publishingRhythm")}</p>
        </div>
      </Section>

      <Section title={t("whatPublishTitle")}>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <ul className="space-y-1.5 text-base leading-6 font-semibold text-[#374542]">
            <li>{t("whatPublish.region")}</li>
            <li>{t("whatPublish.quantities")}</li>
            <li>{t("whatPublish.receipts")}</li>
          </ul>
        </div>
      </Section>

      <Section title={t("privacyRulesTitle")}>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <p className="text-base leading-6 font-semibold text-[#374542]">{t("privacyRules")}</p>
        </div>
      </Section>

      <Section title={t("operatingSupportTitle")}>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <p className="text-base leading-6 font-semibold text-[#374542]">{t("operatingSupport")}</p>
        </div>
      </Section>
    </div>
  );
}
