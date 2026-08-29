import { Link, useParams } from "react-router";

const TITLES: Record<string, string> = {
  epi: "EPI — Équipements de protection individuelle",
  outillage: "Outillage à main & électroportatif",
  "roulements-transmission": "Roulements & transmission",
  "echafaudages-nacelles": "Échafaudages & nacelles",
  manutention: "Manutention",
  "plomberie-fluides": "Plomberie & fluides",
  electricite: "Électricité industrielle & bâtiment",
  quincaillerie: "Quincaillerie & agencement",
  revetements: "Revêtements sols & murs",
  jardinage: "Jardinage & espaces verts",
  consommables: "Consommables industriels",
  luminaires: "Luminaires & éclairage",
};

export default function ProductCategory() {
  const { category = "" } = useParams();
  const title = TITLES[category] ?? "Catégorie";

  return (
    <div className="mx-auto max-w-[1240px] px-6 py-16 lg:py-24">
      <nav className="mb-8 flex items-center gap-2 text-[12.5px] text-ink-soft">
        <Link to="/" className="hover:text-orsap-red">
          Accueil
        </Link>
        <span className="text-hairline">/</span>
        <Link to="/produits" className="hover:text-orsap-red">
          Produits
        </Link>
        <span className="text-hairline">/</span>
        <span className="text-ink">{title}</span>
      </nav>

      <div className="mb-6 flex items-center gap-3 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-orsap-red">
        <span className="h-px w-8 bg-orsap-red" />
        Gamme produits
      </div>
      <h1 className="max-w-3xl font-display text-[clamp(2.2rem,4.4vw,3.6rem)] font-black leading-[1.02] tracking-[-0.025em]">
        {title}
      </h1>
      <p className="mt-6 max-w-xl text-[16px] leading-[1.65] text-ink-soft">
        Le détail de cette gamme (fiches produit, filtres et documentation
        technique) est en cours de préparation. Notre équipe reste disponible
        pour vous conseiller et établir votre devis dès maintenant.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/devis"
          className="inline-flex items-center justify-center bg-orsap-red px-7 py-4 font-display text-[14px] font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-orsap-red-deep"
        >
          Demander un devis
        </Link>
        <Link
          to="/produits"
          className="inline-flex items-center justify-center border border-ink px-7 py-4 font-display text-[14px] font-bold uppercase tracking-[0.04em] text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Retour au catalogue
        </Link>
      </div>
    </div>
  );
}
