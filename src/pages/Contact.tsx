import { Link } from "react-router"

export default function Contact() {
  const PHONE_DISPLAY = "+212 6 44 20 30 30"
  const PHONE_HREF = "tel:+212644203030"
  const WHATSAPP_DISPLAY = "+212 6 44 20 30 30"
  const WHATSAPP_HREF = "https://wa.me/212644203030"
  const EMAIL_DISPLAY = "orsap@orsap.ma"
  const EMAIL_HREF = "mailto:orsap@orsap.ma"
  const ADDRESS = "Casablanca, Maroc"
  const MAP_HREF =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("ORSAP Casablanca Maroc")

  return (
    <div>
      {/* Header */}
      <section className="border-b border-hairline bg-ink text-paper">
        <div className="mx-auto max-w-[1240px] px-6 py-16 lg:py-20">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-[12.5px] text-white/60">
            <Link to="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <div className="flex items-center gap-3 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-safety">
            <span className="h-px w-8 bg-safety" />
            Contactez-nous
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,4.4vw,3.6rem)] font-black leading-[1.02] tracking-[-0.025em] text-white">
            Nous sommes à votre écoute.
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.6] text-white/80">
            Une question technique ? Une demande spécifique ? Retrouvez toutes
            nos coordonnées pour joindre nos équipes à Casablanca.
          </p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1: Phone */}
          <div className="flex flex-col border border-hairline bg-card p-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
              Du lundi au samedi · 8h – 18h
            </div>
            <h2 className="mt-4 font-display text-[22px] font-black tracking-[-0.01em] text-ink">
              Par téléphone
            </h2>
            <p className="mt-2 text-[14.5px] leading-[1.5] text-ink-soft">
              Pour joindre directement l&apos;un de nos experts commerciaux ou
              techniques.
            </p>
            <div className="mt-6 flex-1 font-display text-[20px] font-bold text-orsap-red">
              {PHONE_DISPLAY}
            </div>
            <a
              href={PHONE_HREF}
              className="mt-8 inline-flex items-center justify-center border border-ink px-6 py-3.5 font-display text-[13.5px] font-bold uppercase tracking-[0.04em] text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Appeler
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="flex flex-col border border-orsap-red bg-card p-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-orsap-red">
              Le plus rapide
            </div>
            <h2 className="mt-4 font-display text-[22px] font-black tracking-[-0.01em] text-ink">
              WhatsApp
            </h2>
            <p className="mt-2 text-[14.5px] leading-[1.5] text-ink-soft">
              Envoyez-nous vos fiches, photos de produits ou besoins urgents
              directement.
            </p>
            <div className="mt-6 flex-1 font-display text-[20px] font-bold text-orsap-red">
              {WHATSAPP_DISPLAY}
            </div>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center bg-orsap-red px-6 py-3.5 font-display text-[13.5px] font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-orsap-red-deep"
            >
              Écrire sur WhatsApp
            </a>
          </div>

          {/* Card 3: Email */}
          <div className="flex flex-col border border-hairline bg-card p-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
              Échanges par courriel
            </div>
            <h2 className="mt-4 font-display text-[22px] font-black tracking-[-0.01em] text-ink">
              Par email
            </h2>
            <p className="mt-2 text-[14.5px] leading-[1.5] text-ink-soft">
              Pour nous envoyer des cahiers des charges ou des demandes
              formelles.
            </p>
            <div className="mt-6 flex-1 font-display text-[20px] font-bold text-orsap-red">
              {EMAIL_DISPLAY}
            </div>
            <a
              href={EMAIL_HREF}
              className="mt-8 inline-flex items-center justify-center border border-ink px-6 py-3.5 font-display text-[13.5px] font-bold uppercase tracking-[0.04em] text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Envoyer un email
            </a>
          </div>
        </div>

        {/* Address and Map */}
        <div className="mt-12 grid grid-cols-1 items-stretch border border-hairline bg-card lg:grid-cols-[1fr_400px]">
          <div className="p-8 lg:p-12">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
              Nos locaux
            </div>
            <h2 className="mt-4 font-display text-[28px] font-black tracking-[-0.02em] text-ink">
              Rendez-nous visite à Casablanca
            </h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-ink-soft">
              Nos bureaux et entrepôts de stockage sont stratégiquement situés à
              Casablanca pour assurer une réactivité de distribution optimale
              partout au Maroc.
            </p>
            <div className="mt-6 text-[18px] font-bold text-ink">
              📍 {ADDRESS}
            </div>
            <a
              href={MAP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center bg-ink px-8 py-4 font-display text-[13.5px] font-bold uppercase tracking-[0.04em] text-paper transition-colors hover:bg-orsap-red hover:text-white"
            >
              Voir l&apos;itinéraire sur Google Maps
            </a>
          </div>
          {/* Simple premium abstract placeholder container for Map */}
          <div className="relative min-h-[300px] bg-ink/5 p-8 flex flex-col justify-center items-center border-t border-hairline lg:border-t-0 lg:border-l border-hairline">
            <svg
              className="w-12 h-12 text-ink/20 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
              />
            </svg>
            <div className="font-display text-[15px] font-bold text-ink text-center">
              Plan d&apos;accès
            </div>
            <div className="text-[13px] text-ink-soft text-center mt-1">
              Casablanca, Maroc
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="mx-auto max-w-[1240px] px-6 pb-20 lg:pb-28">
        <div className="flex flex-col items-start justify-between gap-6 bg-ink p-10 text-paper sm:flex-row sm:items-center lg:p-14">
          <div>
            <h2 className="font-display text-[26px] font-black leading-[1.1] tracking-[-0.02em] text-white">
              Vous souhaitez obtenir un prix précis ?
            </h2>
            <p className="mt-2 text-[14.5px] text-white/60">
              Utilisez notre formulaire en ligne pour détailler votre besoin et
              obtenir une offre personnalisée.
            </p>
          </div>
          <Link
            to="/devis"
            className="shrink-0 bg-orsap-red px-7 py-4 font-display text-[14px] font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-orsap-red-deep"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  )
}
