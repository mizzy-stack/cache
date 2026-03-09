"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

type LanguageToggleProps = {
  ariaLabel: string;
};

export default function LanguageToggle({ ariaLabel }: LanguageToggleProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === "en" ? "ar" : "en";

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      className="rounded-lg border border-border bg-surface px-3 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-surface-soft"
    >
      {nextLocale}
    </button>
  );
}
