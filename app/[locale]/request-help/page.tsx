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
  return buildPageMetadata(locale, "requestHelp");
}

export default async function RequestHelpPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "requestHelp" });
  const requestHelpUrl = env.requestHelpUrl(locale);

  return (
    <div className="space-y-6">
      <Section title={t("title")} description={t("intro")}>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <p className="mb-4 text-base leading-6 font-semibold text-[#374542]">{t("privacyDignity")}</p>
          <p className="mb-5 text-base leading-6 font-semibold text-[#374542]">{t("emergencyNote")}</p>
          {requestHelpUrl ? (
            <Button href={requestHelpUrl} label={t("cta")} external fullWidth />
          ) : (
            <p className="rounded-xl border border-dashed border-border bg-surface-soft px-4 py-3 text-base font-semibold text-[#586763]">
              {t("pending")}
            </p>
          )}
        </div>
      </Section>

      <Section title={t("minimumInfoTitle")}>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <p className="text-base leading-6 font-semibold text-[#374542]">{t("minimum.summary")}</p>
        </div>
      </Section>
    </div>
  );
}
