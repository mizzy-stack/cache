import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const validLocale = locale as AppLocale;
  setRequestLocale(validLocale);
  const messages = await getMessages();
  const isArabic = validLocale === "ar";

  return (
    <NextIntlClientProvider messages={messages}>
      <div dir={isArabic ? "rtl" : "ltr"} className="site-shell min-h-screen">
        <Navbar locale={validLocale} />
        <main className="mx-auto mt-4 w-full max-w-6xl rounded-3xl border border-[#b9958f] bg-[rgba(225,150,143,0.42)] px-4 py-6 sm:px-6">
          {children}
        </main>
        <Footer locale={validLocale} />
      </div>
    </NextIntlClientProvider>
  );
}
