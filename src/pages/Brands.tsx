import { useMemo, useState } from "react";
import { Link } from "react-router";
import { BRANDS, CATEGORIES, type Category } from "@/data/brands";

export default function Brands() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Category | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BRANDS.filter((b) => {
      const matchQuery = !q || b.name.toLowerCase().includes(q);
      const matchCat = active === "all" || b.categories.includes(active);
      return matchQuery && matchCat;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [query, active]);

  return (
    <div>
      {/* Intro */}
      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:py-24">
        <nav className="mb-8 flex items-center gap-2 text-[12.5px] text-ink-soft">
          <Link to="/" className="hover:text-orsap-red">
            Accueil
          </Link>
          <span className="text-hairline">/</span>
          <span className="text-ink">Marques</span>
        </nav>

        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-orsap-red">
            <span className="h-px w-8 bg-orsap-red" />
            Nos marques
          </div>
          <h1 className="font-display text-[clamp(2.2rem,4.2vw,3.6rem)] font-black leading-[1.02] tracking-[-0.025em]">
            Plus de 300 marques internationales sélectionnées.
          </h1>
          <p className="mt-6 text-[17px] leading-[1.6] text-ink-soft">
            ORSAP travaille avec plus de 300 marques reconnues pour leur qualité,
            leur fiabilité et leur innovation. Nous sélectionnons des fabricants
            leaders dans chaque catégorie — EPI, outillage, électricité,
            plomberie, revêtements — pour vous garantir des produits conformes aux
            normes et adaptés à vos besoins.
          </p>
        </div>

        {/* Search + filters */}
        <div className="mt-12 border-t border-hairline pt-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <label className="block w-full max-w-sm">
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                Rechercher une marque
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex : Bosch, Facom…"
                className="w-full border border-hairline bg-card px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-steel focus:border-orsap-red"
              />
            </label>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
              {filtered.length} marque{filtered.length > 1 ? "s" : ""}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {(["all", ...CATEGORIES] as const).map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={`border px-4 py-2 font-display text-[13px] font-semibold uppercase tracking-[0.03em] transition-colors ${
                    isActive
                      ? "border-orsap-red bg-orsap-red text-white"
                      : "border-hairline bg-card text-ink-soft hover:border-orsap-red hover:text-orsap-red"
                  }`}
                >
                  {cat === "all" ? "Toutes" : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Brand grid */}
        {filtered.length === 0 ? (
          <p className="mt-16 text-[15px] text-ink-soft">
            Aucune marque ne correspond à votre recherche.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((b) => (
              <Link
                key={b.slug}
                to={`/marques/${b.slug}`}
                className="group flex flex-col bg-card p-7 transition-colors hover:bg-paper"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display text-[26px] font-black uppercase leading-none tracking-[-0.02em] text-ink transition-colors group-hover:text-orsap-red">
                    {b.name}
                  </span>
                  {b.certified && (
                    <span className="shrink-0 border border-orsap-red px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.1em] text-orsap-red">
                      Agréé
                    </span>
                  )}
                </div>
                <p className="mt-4 flex-1 text-[13.5px] leading-[1.5] text-ink-soft">
                  {b.positioning}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {b.categories.map((c) => (
                    <span
                      key={c}
                      className="bg-paper px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-steel"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-[13px] font-bold uppercase tracking-[0.04em] text-ink transition-colors group-hover:text-orsap-red">
                  Voir les produits
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1240px] px-6 pb-20 lg:pb-28">
        <div className="flex flex-col items-start justify-between gap-6 bg-ink p-10 text-paper sm:flex-row sm:items-center lg:p-14">
          <h2 className="max-w-xl font-display text-[clamp(1.6rem,2.8vw,2.4rem)] font-black leading-[1.05] tracking-[-0.02em] text-white">
            Vous cherchez une marque précise ? Nous la référençons probablement.
          </h2>
          <Link
            to="/devis"
            className="shrink-0 bg-orsap-red px-7 py-4 font-display text-[14px] font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-orsap-red-deep"
          >
            Nous consulter
          </Link>
        </div>
      </section>
    </div>
  );
}
