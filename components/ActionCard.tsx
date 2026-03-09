import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

type ActionCardProps = {
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  isAvailable: boolean;
  pendingLabel: string;
};

export default function ActionCard({
  title,
  description,
  ctaLabel,
  href,
  isAvailable,
  pendingLabel,
}: ActionCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-gradient-to-br from-[#dca39f] to-[#9ec8ad] p-4 shadow-sm">
      <div className="mb-2 inline-flex rounded-full bg-surface-soft p-2">
        <ArrowUpRight className="h-5 w-5 text-primary" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-1.5 text-base leading-6 font-semibold text-[#44514d]">{description}</p>
      <div className="mt-3">
        {isAvailable ? (
          <Button href={href} label={ctaLabel} external fullWidth />
        ) : (
          <p
            className={clsx(
              "rounded-xl border border-dashed border-border bg-surface-soft px-4 py-3 text-base font-semibold text-[#586763]"
            )}
          >
            {pendingLabel}
          </p>
        )}
      </div>
    </article>
  );
}
