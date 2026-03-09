import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import { env } from "@/lib/env";
import { buildPageMetadata } from "@/lib/metadata";
import Section from "@/components/Section";

type PageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "contact");
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <div className="space-y-6">
      <Section title={t("title")} description={t("intro")}>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <p className="text-base leading-6 font-semibold text-[#374542]">{t("primaryLineLabel")}</p>
          <a href={`mailto:${env.email}`} className="text-2xl font-semibold text-[#153f30]">
            {env.email}
          </a>
          <ul className="mt-3 space-y-1.5 text-base leading-6 font-semibold text-[#374542]">
            <li>{t("supportNote")}</li>
            <li>{t("impersonationNote")}</li>
            <li>{t("antiFraudReminder")}</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
