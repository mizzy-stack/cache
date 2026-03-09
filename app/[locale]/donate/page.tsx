import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import { env } from "@/lib/env";
import { buildPageMetadata } from "@/lib/metadata";
import Button from "@/components/Button";
import Section from "@/components/Section";

type PageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "donate");
}

export default async function DonatePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "donate" });
  const whishSteps = t.raw("whishInstructions") as string[];

  return (
    <div className="space-y-6">
      <Section title={t("title")} description={t("intro")}>
        <div className="rounded-2xl border border-border bg-surface p-6">
          {env.donationUrl ? (
            <Button href={env.donationUrl} label={t("cta")} external fullWidth />
          ) : (
            <p className="rounded-xl border border-dashed border-border bg-surface-soft px-4 py-3 text-base font-semibold text-[#586763]">
              {t("pending")}
            </p>
          )}
        </div>
      </Section>

      <Section title={t("donateFromLebanonTitle")} description={t("donateFromLebanonDescription")}>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <ul className="mb-4 space-y-1.5 text-base leading-6 font-semibold text-[#374542]">
            {whishSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          {env.donationUrl ? (
            <Button href={env.donationUrl} label={t("whishButton")} external fullWidth />
          ) : (
            <p className="rounded-xl border border-dashed border-border bg-surface-soft px-4 py-3 text-base font-semibold text-[#586763]">
              {t("pending")}
            </p>
          )}
        </div>
      </Section>

      <Section title={t("donateFromAbroadTitle")} description={t("donateFromAbroadDescription")}>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <p className="mb-4 text-base leading-6 font-semibold text-[#374542]">
            {t("processingNotice")}
          </p>
          {env.donationUrl ? (
            <Button href={env.donationUrl} label={t("stripeButton")} external fullWidth />
          ) : (
            <p className="rounded-xl border border-dashed border-border bg-surface-soft px-4 py-3 text-base font-semibold text-[#586763]">
              {t("pending")}
            </p>
          )}
        </div>
      </Section>

      <Section title={t("transparencyTitle")}>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <ul className="space-y-1.5 text-base leading-6 font-semibold text-[#374542]">
            <li>{t("notes.directAid")}</li>
            <li>{t("notes.foodParcels")}</li>
            <li>{t("notes.operatingCosts")}</li>
            <li>{t("notes.volunteerRelief")}</li>
            <li>{t("notes.paymentNotice")}</li>
            <li>{t("notes.antiFraud")}</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
