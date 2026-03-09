import { getTranslations } from "next-intl/server";
import Image from "next/image";
import type { AppLocale } from "@/i18n/routing";
import { getLogoPath } from "@/lib/assets";
import { env } from "@/lib/env";

type FooterProps = {
  locale: AppLocale;
};

export default async function Footer({ locale }: FooterProps) {
  const t = await getTranslations({ locale, namespace: "footer" });
  const logoPath = getLogoPath();

  return (
    <footer className="mt-10 border-t border-border bg-gradient-to-r from-[#e09a95] via-[#d08b84] to-[#95bda3]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-base font-semibold text-[#44514d] sm:px-6">
        <div className="flex items-center gap-3">
          {logoPath ? <Image src={logoPath} alt="LB Relief logo" width={92} height={92} /> : null}
          <span className="text-3xl font-extrabold text-[#153f30] sm:text-4xl">LB Relief</span>
        </div>
        <p>{t("line1")}</p>
        <a className="text-xl font-semibold text-[#153f30]" href={`mailto:${env.email}`}>
          {env.email}
        </a>
      </div>
    </footer>
  );
}
