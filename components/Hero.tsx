import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import Button from "./Button";

type HeroAction = {
  href: string;
  label: string;
  external?: boolean;
};

type HeroProps = {
  title: string;
  subtitle: string;
  lead?: string;
  actions: HeroAction[];
  logoPath: string | null;
  backgroundImage?: string;
};

export default function Hero({
  title,
  subtitle,
  lead,
  actions,
  logoPath,
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="rounded-3xl border border-[#e7c9c4] bg-surface p-5 shadow-sm sm:p-8"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(227,166,160,0.78), rgba(157,196,173,0.84)), url('${backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="mb-6 flex items-center gap-3">
        {logoPath ? (
          <Image src={logoPath} alt="LB Relief logo" width={110} height={110} />
        ) : (
          <span className="inline-flex rounded-xl bg-surface-soft p-2">
            <HeartHandshake className="h-6 w-6 text-primary" />
          </span>
        )}
        <span className="text-3xl font-extrabold text-[#1a4737] sm:text-4xl">LB Relief</span>
      </div>
      <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
        {title}
      </h1>
      <p className="mt-2.5 max-w-2xl text-lg leading-6 font-semibold text-[#2b3a36]">
        {subtitle}
      </p>
      {lead ? <p className="mt-2.5 max-w-4xl text-base leading-6 font-semibold text-[#2e3c38]">{lead}</p> : null}
      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        {actions.map((action) => (
          <Button
            key={`${action.href}-${action.label}`}
            href={action.href}
            label={action.label}
            external={action.external}
          />
        ))}
      </div>
    </section>
  );
}
