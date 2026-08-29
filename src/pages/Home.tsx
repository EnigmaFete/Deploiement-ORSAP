import { Link } from "react-router";
import heroPhoto from "@/imports/Hero_Acceuil.jpeg";

const STATS = [
  { value: "15 000", unit: "références", note: "disponibles en stock" },
  { value: "72h", unit: "délai max", note: "de livraison au Maroc" },
  { value: "300", unit: "marques", note: "distribuées et sourcées" },
  { value: "100", unit: "grands comptes", note: "industriels servis" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100svh-118px)] w-full overflow-hidden bg-ink">
        <img
          src={heroPhoto}
          alt="Technicien ORSAP en équipement de protection dans une installation industrielle"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/80 to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(100svh-118px)] max-w-[1240px] flex-col justify-center px-6 py-16 text-paper">
          <div className="mb-7 flex items-center gap-3 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-safety">
            <span className="h-px w-8 bg-safety" />
            Fournisseur industriel au Maroc
          </div>

          <h1 className="max-w-3xl font-display text-[clamp(2.8rem,6vw,5.2rem)] font-black leading-[0.95] tracking-[-0.025em] text-white">
            Tout l&apos;équipement de vos chantiers et de vos usines.
          </h1>

          <p className="mt-7 max-w-xl text-[17px] leading-[1.6] text-white/80">
            EPI, outillage, roulements, manutention, plomberie et électricité
            industrielle : ORSAP importe et distribue plus de 15&nbsp;000
            références pour les usines, les entreprises du BTP et les
            gestionnaires de sites.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/devis"
              className="inline-flex items-center justify-center bg-orsap-red px-7 py-4 font-display text-[14px] font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-orsap-red-deep"
            >
              Demander un devis
            </Link>
            <Link
              to="/produits"
              className="inline-flex items-center justify-center border border-white/70 px-7 py-4 font-display text-[14px] font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-white hover:text-ink"
            >
              Parcourir le catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="border-t border-hairline bg-card">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 px-6 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.unit}
              className={`py-8 lg:py-10 ${
                i !== 0 ? "lg:border-l lg:border-hairline lg:pl-10" : ""
              }`}
            >
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-[clamp(2.2rem,3.4vw,3rem)] font-black leading-none tracking-[-0.03em]">
                  {s.value}
                </span>
                <span className="font-display text-[15px] font-bold text-orsap-red">
                  {s.unit}
                </span>
              </div>
              <div className="mt-2 text-[13.5px] text-ink-soft">{s.note}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
