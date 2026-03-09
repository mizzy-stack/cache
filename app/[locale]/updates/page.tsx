import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/metadata";
import Section from "@/components/Section";

type PageProps = {
  params: Promise<{ locale: AppLocale }>;
};

const updateKeys = ["launch", "transparency"] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "updates");
}

export default async function UpdatesPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "updates" });

  return (
    <Section title={t("title")} description={t("intro")}>
      <div className="space-y-4">
        {updateKeys.map((key) => (
          <article key={key} className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold">{t(`${key}.title`)}</h3>
            <p className="mt-1.5 text-base leading-6 font-semibold text-[#374542]">{t(`${key}.body`)}</p>
          </article>
        ))}
        <article className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          <Image
            src="/images/campaign-poster.png"
            alt={t("posterAlt")}
            width={2048}
            height={1448}
            className="h-auto w-full"
          />
        </article>
        <p className="text-base font-semibold text-[#586763]">{t("moreSoon")}</p>
      </div>
    </Section>
  );
}
