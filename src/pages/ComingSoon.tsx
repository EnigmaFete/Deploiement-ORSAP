import { Link } from "react-router";

export default function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
      <div className="mb-6 flex items-center gap-3 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-orsap-red">
        <span className="h-px w-8 bg-orsap-red" />
        {title}
      </div>
      <h1 className="max-w-2xl font-display text-[clamp(2.2rem,4.4vw,3.6rem)] font-black leading-[1.02] tracking-[-0.025em]">
        {description}
      </h1>
      <p className="mt-6 max-w-xl text-[16px] leading-[1.65] text-ink-soft">
        Cette section est en cours de construction. Notre équipe reste
        disponible pour répondre à vos besoins dès maintenant.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/devis"
          className="inline-flex items-center justify-center bg-orsap-red px-7 py-4 font-display text-[14px] font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-orsap-red-deep"
        >
          Demander un devis
        </Link>
        <Link
          to="/"
          className="inline-flex items-center justify-center border border-ink px-7 py-4 font-display text-[14px] font-bold uppercase tracking-[0.04em] text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
