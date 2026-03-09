type SectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function Section({ title, description, children }: SectionProps) {
  return (
    <section className="space-y-2.5">
      <header className="space-y-1">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#133f30]">{title}</h2>
        {description ? (
          <p className="max-w-3xl text-base leading-6 font-semibold text-[#3d4b47]">{description}</p>
        ) : null}
      </header>
      {children}
    </section>
  );
}
