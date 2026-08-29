import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

type BlogPost = {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  image?: string | null;
  pdf?: string | null;
  pdfName?: string | null;
};

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        if (!res.ok) throw new Error("Article introuvable.");
        const data = await res.json();
        setPost(data);
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : "Une erreur est survenue.",
        );
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

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
            <Link to="/blog" className="hover:text-white">
              Blog
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white">Article</span>
          </nav>

          {post && (
            <>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
                Publié le{" "}
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <h1 className="mt-6 max-w-4xl font-display text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.1] tracking-[-0.025em] text-white">
                {post.title}
              </h1>
            </>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[800px] px-6 py-16 lg:py-24">
        <Link
          to="/blog"
          className="mb-10 inline-flex items-center gap-2 font-display text-[13px] font-bold uppercase tracking-[0.06em] text-ink-soft transition-colors hover:text-orsap-red"
        >
          <span>←</span> Retour aux articles
        </Link>

        {loading ? (
          <div className="py-20 text-center font-display text-[16px] font-bold text-ink-soft">
            Chargement de l&apos;article...
          </div>
        ) : error ? (
          <div className="border border-orsap-red/30 bg-orsap-red/5 p-6 text-center text-[15px] text-orsap-red">
            {error}
          </div>
        ) : post ? (
          <div className="prose max-w-none">
            {/* Lead paragraph */}
            <p className="font-display text-[18px] font-bold leading-[1.6] text-ink">
              {post.summary}
            </p>

            {post.image && (
              <div className="my-8 overflow-hidden border border-hairline aspect-video max-h-[450px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            {/* Divider */}
            <hr className="my-8 border-t border-hairline" />

            {/* Main content body */}
            <div className="space-y-6 text-[16px] leading-[1.8] text-ink-soft">
              {post.content.split("\n\n").map((para, idx) => (
                <p key={idx} className="whitespace-pre-line">
                  {para}
                </p>
              ))}
            </div>

            {post.pdf && (
              <div className="mt-12 border-t border-hairline pt-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-orsap-red shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <div>
                      <h3 className="font-display text-[15px] font-bold text-ink leading-tight">
                        {post.pdfName || "Document joint"}
                      </h3>
                      <p className="text-[12px] text-ink-soft">Visualisation en ligne (Téléchargement désactivé)</p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-hairline w-full bg-paper overflow-hidden shadow-sm">
                  <iframe
                    src={`${post.pdf}#toolbar=0`}
                    title={post.pdfName || "Document"}
                    className="w-full h-[650px] border-none"
                  />
                </div>
              </div>
            )}
          </div>
        ) : null}
      </section>
    </div>
  );
}
