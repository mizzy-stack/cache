import clsx from "clsx";
import { Link } from "@/i18n/navigation";

type ButtonProps = {
  href: string;
  label: string;
  external?: boolean;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
};

export default function Button({
  href,
  label,
  external = false,
  variant = "primary",
  fullWidth = false,
}: ButtonProps) {
  const className = clsx(
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-bold transition-colors",
    fullWidth && "w-full",
    variant === "primary" &&
      "bg-primary text-primary-foreground shadow-[0_2px_0_0_#a31f1f] hover:bg-[#0b634d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    variant === "secondary" &&
      "border border-[#d8b2b2] bg-[#ffe9e9] text-[#692121] hover:bg-[#ffdede]"
  );

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {label}
    </Link>
  );
}
