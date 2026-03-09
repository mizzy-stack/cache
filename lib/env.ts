import type { AppLocale } from "@/i18n/routing";

const readEnv = (key: string) => {
  const value = process.env[key];
  if (!value) return "";
  return value.trim();
};

const defaultFormUrls = {
  requestHelp: {
    en: "https://docs.google.com/forms/d/e/1FAIpQLSd-XJ2wBHUNbbJWcAAf3XQWqchMwbXFCmD-7cF8NHAAdEewqA/viewform?usp=publish-editor",
    ar: "https://docs.google.com/forms/d/e/1FAIpQLSenZacE5uSwdCoUii4hsvR2ez1TUpDV2O81zgCkAlyqmHaudw/viewform?usp=publish-editor",
  },
  housing: {
    en: "https://docs.google.com/forms/d/e/1FAIpQLSePwm9UXLhGgWzmW06-bEYYSixUHJC-1DnNnHWTd60H6xS6Pg/viewform?usp=publish-editor",
    ar: "https://docs.google.com/forms/d/e/1FAIpQLSeOWUM4fvvRs74Lloxh_bjOjYF-cEp1aVdTAjMCERnz4PsiDw/viewform?usp=publish-editor",
  },
  inKindDonation: {
    en: "https://docs.google.com/forms/d/e/1FAIpQLSe9S_gnDz8PPApqbycmBGuU_xUXkWz9CIUW6kIEnFFLsYebGA/viewform?usp=publish-editor",
    ar: "https://docs.google.com/forms/d/e/1FAIpQLSddZnBnnF5ZZIqzs7A3H1WN9b0BpC8IeGMBvQFh4juiR2fugg/viewform?usp=publish-editor",
  },
  sanctuary: {
    en: "https://docs.google.com/forms/d/e/1FAIpQLSeRx3DveonFx8w6hqhlQ2Y2z8DAEEkJ1mUGLZxYWWDbC4llxg/viewform?usp=header",
    ar: "https://docs.google.com/forms/d/e/1FAIpQLSfBlfaW4tBI7yHrer3LI679LVlWrFP0gCDaBUqjDO2HESmoPg/viewform?usp=publish-editor",
  },
  volunteer: {
    en: "https://docs.google.com/forms/d/e/1FAIpQLSe_am-ExlsA_gNpjsHz1vS0hvAHwOFgp231bcly8estRJpiDg/viewform?usp=publish-editor",
    ar: "https://docs.google.com/forms/d/e/1FAIpQLSd9y1kNOJBKEMSKk06_0CdfqJD7meeG229RYZAA4Bg_B6cF3A/viewform?usp=publish-editor",
  },
} as const;

const resolveLocalizedUrl = ({
  baseKey,
  locale,
  fallback,
}: {
  baseKey: string;
  locale: AppLocale;
  fallback: string;
}) => {
  const localeKey = `${baseKey}_${locale.toUpperCase()}`;
  return readEnv(localeKey) || readEnv(baseKey) || fallback;
};

export const env = {
  donationUrl: readEnv("NEXT_PUBLIC_DONATION_URL"),
  email: readEnv("NEXT_PUBLIC_EMAIL") || "help@lbrelief.org",
  requestHelpUrl: (locale: AppLocale) =>
    resolveLocalizedUrl({
      baseKey: "NEXT_PUBLIC_FORMS_REQUEST_HELP_URL",
      locale,
      fallback: defaultFormUrls.requestHelp[locale],
    }),
  housingUrl: (locale: AppLocale) =>
    resolveLocalizedUrl({
      baseKey: "NEXT_PUBLIC_FORMS_HOUSING_URL",
      locale,
      fallback: defaultFormUrls.housing[locale],
    }),
  inKindDonationUrl: (locale: AppLocale) =>
    resolveLocalizedUrl({
      baseKey: "NEXT_PUBLIC_FORMS_IN_KIND_DONATION_URL",
      locale,
      fallback: defaultFormUrls.inKindDonation[locale],
    }),
  sanctuaryUrl: (locale: AppLocale) =>
    resolveLocalizedUrl({
      baseKey: "NEXT_PUBLIC_FORMS_SANCTUARY_URL",
      locale,
      fallback: defaultFormUrls.sanctuary[locale],
    }),
  volunteerUrl: (locale: AppLocale) =>
    resolveLocalizedUrl({
      baseKey: "NEXT_PUBLIC_FORMS_VOLUNTEER_URL",
      locale,
      fallback: defaultFormUrls.volunteer[locale],
    }),
};
