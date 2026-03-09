import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getLogoPath } from "@/lib/assets";
import LanguageToggle from "./LanguageToggle";

type NavbarProps = {
  locale: "en" | "ar";
};

const navItems = [
  { href: "/", key: "home" },
  { href: "/donate", key: "donate" },
  { href: "/request-help", key: "requestHelp" },
  { href: "/offer-help", key: "offerHelp" },
  { href: "/updates", key: "updates" },
  { href: "/transparency", key: "transparency" },
  { href: "/privacy", key: "privacy" },
  { href: "/contact", key: "contact" },
] as const;

export default async function Navbar({ locale }: NavbarProps) {
  const t = await getTranslations({ locale, namespace: "nav" });
  const logoPath = getLogoPath();

  return (
    <header className="border-b border-border bg-gradient-to-r from-[#e09a95] via-[#d08b84] to-[#95bda3]">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-5 sm:px-6">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          {logoPath ? (
            <Image src={logoPath} alt="LB Relief logo" width={88} height={88} />
          ) : null}
          <span className="text-3xl font-extrabold text-[#153f30] sm:text-4xl">LB Relief</span>
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-base font-bold text-[#1f2f2b] hover:bg-[#ffe8e5]"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
          <LanguageToggle ariaLabel={t("switchLanguage")} />
        </div>
      </div>
      <nav className="mx-auto flex w-full max-w-6xl gap-1 overflow-x-auto px-4 pb-3 md:hidden sm:px-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-lg border border-border bg-surface px-3 py-2 text-sm font-bold shadow-sm"
          >
            {t(item.key)}
          </Link>
        ))}
      </nav>
    </header>
  );
}
