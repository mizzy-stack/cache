import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import type { AppLocale } from "@/i18n/routing";
import { getLogoPath } from "@/lib/assets";
import { env } from "@/lib/env";
import { buildPageMetadata } from "@/lib/metadata";
import ActionCard from "@/components/ActionCard";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

type PageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "home");
}

export default async function LocaleHomePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const logoPath = getLogoPath();
  const volunteerUrl = env.volunteerUrl(locale);

  return (
    <div className="space-y-6">
      <Hero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        lead={t("lead")}
        logoPath={logoPath}
        backgroundImage="/images/hero-bg.png"
        actions={[
          { href: "/donate", label: t("ctaDonate") },
          { href: "/request-help", label: t("ctaRequestHelp") },
          { href: "/offer-help", label: t("ctaOfferHelp") },
          ...(volunteerUrl
            ? [{ href: volunteerUrl, label: t("ctaVolunteer"), external: true }]
            : []),
        ]}
      />

      <section className="grid gap-3 md:grid-cols-2">
        <ActionCard
          title={t("cards.directSupport.title")}
          description={t("cards.directSupport.description")}
          ctaLabel={t("ctaRequestHelp")}
          href="/request-help"
          isAvailable
          pendingLabel={t("formPending")}
        />
        <ActionCard
          title={t("cards.foodParcels.title")}
          description={t("cards.foodParcels.description")}
          ctaLabel={t("ctaOfferHelp")}
          href="/offer-help"
          isAvailable
          pendingLabel={t("formPending")}
        />
      </section>

      <Section title={t("howItWorksTitle")}>
        <div className="grid gap-3 md:grid-cols-2">
          {(["one", "two", "three", "four", "five"] as const).map((step) => (
            <article key={step} className="rounded-2xl border border-border bg-surface p-4">
              <h3 className="text-lg font-bold text-[#173d30]">
                {t(`howItWorksSteps.${step}.title`)}
              </h3>
              <p className="mt-1.5 text-base leading-6 font-semibold text-[#374542]">
                {t(`howItWorksSteps.${step}.description`)}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section title={t("officialChannelsTitle")}>
        <div className="rounded-2xl border border-border bg-surface p-5">
          <ul className="space-y-1.5 text-base leading-6 font-semibold text-[#374542]">
            <li>{t("officialChannels.website")}</li>
            <li>{t("officialChannels.email")}</li>
            <li>{t("officialChannels.lebanon")}</li>
            <li>{t("officialChannels.abroad")}</li>
            <li>{t("officialChannels.warning")}</li>
          </ul>
        </div>
      </Section>

      <Section title={t("whatWeDoNotAskTitle")}>
        <div className="rounded-2xl border border-border bg-surface p-5">
          <ul className="space-y-1.5 text-base leading-6 font-semibold text-[#374542]">
            <li>{t("whatWeDoNotAsk.item1")}</li>
            <li>{t("whatWeDoNotAsk.item2")}</li>
            <li>{t("whatWeDoNotAsk.item3")}</li>
          </ul>
        </div>
      </Section>

      <Section title={t("whatWeCannotPromiseTitle")}>
        <div className="rounded-2xl border border-border bg-surface p-5">
          <p className="text-base leading-6 font-semibold text-[#374542]">
            {t("whatWeCannotPromise")}
          </p>
        </div>
      </Section>

      <Section title={t("supportVisualTitle")}>
        <article className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          <Image
            src="/images/initiative-text-banner.png"
            alt={t("supportVisualAlt")}
            width={1600}
            height={896}
            className="h-auto w-full"
          />
        </article>
      </Section>

      <Section title={t("safetyTitle")}>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <p className="text-base leading-6 font-semibold text-[#374542]">{t("safety.antiFraud")}</p>
        </div>
      </Section>
    </div>
  );
}
