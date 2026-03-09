import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import { env } from "@/lib/env";
import { buildPageMetadata } from "@/lib/metadata";
import ActionCard from "@/components/ActionCard";
import Section from "@/components/Section";

type PageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "offerHelp");
}

export default async function OfferHelpPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "offerHelp" });
  const housingUrl = env.housingUrl(locale);
  const inKindDonationUrl = env.inKindDonationUrl(locale);
  const sanctuaryUrl = env.sanctuaryUrl(locale);
  const volunteerUrl = env.volunteerUrl(locale);

  return (
    <div className="space-y-6">
      <Section title={t("title")} description={t("intro")}>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <ul className="space-y-1.5 text-base leading-6 font-semibold text-[#374542]">
            <li>{t("notes.reviewed")}</li>
            <li>{t("notes.housingEthics")}</li>
            <li>{t("notes.physicalDonations")}</li>
            <li>{t("notes.sanctuaries")}</li>
          </ul>
        </div>
      </Section>

      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <ActionCard
          title={t("housing.title")}
          description={t("housing.description")}
          ctaLabel={t("housing.cta")}
          href={housingUrl}
          isAvailable={Boolean(housingUrl)}
          pendingLabel={t("pending")}
        />
        <ActionCard
          title={t("inKind.title")}
          description={t("inKind.description")}
          ctaLabel={t("inKind.cta")}
          href={inKindDonationUrl}
          isAvailable={Boolean(inKindDonationUrl)}
          pendingLabel={t("pending")}
        />
        <ActionCard
          title={t("sanctuary.title")}
          description={t("sanctuary.description")}
          ctaLabel={t("sanctuary.cta")}
          href={sanctuaryUrl}
          isAvailable={Boolean(sanctuaryUrl)}
          pendingLabel={t("pending")}
        />
        <ActionCard
          title={t("volunteer.title")}
          description={t("volunteer.description")}
          ctaLabel={t("volunteer.cta")}
          href={volunteerUrl}
          isAvailable={Boolean(volunteerUrl)}
          pendingLabel={t("pending")}
        />
      </section>
    </div>
  );
}
