import express from "express"
import cors from "cors"
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA_DIR = join(__dirname, "data")
const DB_PATH = join(DATA_DIR, "submissions.json")
const BLOG_DB_PATH = join(DATA_DIR, "blogs.json")
const DIST_DIR = join(__dirname, "dist")
const PORT = process.env.PORT || 3001

// Ensure data directory exists
if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true })

const app = express()
app.use(cors())
// Increase body limit to support base64 images and PDFs
app.use(express.json({ limit: "25mb" }))
app.use(express.urlencoded({ limit: "25mb", extended: true }))

// ── Seed Blog Data ──────────────────────────────────────────────────
const SEED_BLOGS = [
  {
    id: "echafaudage-securite-maroc",
    date: new Date().toISOString(),
    title: "Sécurité & Conformité des Échafaudages en Milieu Industriel",
    summary:
      "Découvrez les normes de sécurité en vigueur au Maroc pour le montage et l'utilisation d'échafaudages sur vos chantiers et sites industriels.",
    content: `Le travail en hauteur reste l'une des principales causes d'accidents du travail dans le secteur de la construction et de l'industrie. L'utilisation d'échafaudages non conformes ou mal montés présente des risques majeurs. C'est pourquoi la conformité aux normes est un enjeu crucial pour toute entreprise soucieuse de la sécurité de ses collaborateurs.

Au Maroc, la réglementation impose des contrôles réguliers et l'utilisation d'équipements homologués. Chez ORSAP, tous nos échafaudages fixes et roulants répondent aux critères de sécurité les plus stricts.

Les règles d'or pour un chantier sécurisé :
1. Vérification de la stabilité du sol avant le montage.
2. Utilisation systématique de garde-corps et de plinthes de sécurité.
3. Respect strict de la charge maximale d'utilisation (CMU) indiquée par le fabricant.
4. Formation adéquate du personnel au montage et au démontage de la structure.

N'hésitez pas à contacter nos conseillers pour auditer vos besoins en échafaudages professionnels.`,
    image: null,
  },
  {
    id: "optimiser-air-comprime",
    date: new Date().toISOString(),
    title: "Comment optimiser l'efficacité de vos réseaux d'air comprimé ?",
    summary:
      "L'air comprimé est une ressource énergétique coûteuse. Voici 4 étapes clés pour détecter les fuites et optimiser le rendement de vos compresseurs.",
    content: `L'air comprimé est souvent qualifié de 'quatrième fluide' dans le secteur industriel. Cependant, c'est aussi l'une des formes d'énergie les plus coûteuses à produire. On estime qu'en moyenne, 20 à 30 % de la consommation électrique d'une usine est dédiée à la compression de l'air, et qu'une part importante de cette énergie est perdue sous forme de fuites.

Optimiser son réseau d'air comprimé permet non seulement de réduire sa facture d'électricité, mais aussi de prolonger la durée de vie des équipements.

Les 4 actions prioritaires à mener :
- La détection et la réparation méthodique des fuites d'air sur l'ensemble du réseau de distribution.
- Le réglage optimal de la pression de service (réduire la pression de 1 bar permet d'économiser environ 7% d'énergie).
- La mise en place d'un système de récupération de chaleur sur le compresseur pour chauffer l'eau ou les locaux.
- Un entretien rigoureux des filtres pour éviter les pertes de charge inutiles.

Chez ORSAP, nous proposons une large gamme de compresseurs industriels de dernière génération, équipés de variateurs de vitesse pour s'adapter précisément à votre consommation réelle.`,
    image: null,
  },
]

// ── Helpers ──────────────────────────────────────────────────────────
function loadSubmissions() {
  if (!existsSync(DB_PATH)) return []
  try {
    return JSON.parse(readFileSync(DB_PATH, "utf-8"))
  } catch {
    return []
  }
}

function saveSubmissions(data) {
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8")
}

function loadBlogs() {
  if (!existsSync(BLOG_DB_PATH)) {
    saveBlogs(SEED_BLOGS)
    return SEED_BLOGS
  }
  try {
    return JSON.parse(readFileSync(BLOG_DB_PATH, "utf-8"))
  } catch {
    return SEED_BLOGS
  }
}

function saveBlogs(data) {
  writeFileSync(BLOG_DB_PATH, JSON.stringify(data, null, 2), "utf-8")
}

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

// ── Devis API Routes ────────────────────────────────────────────────
app.post("/api/devis", (req, res) => {
  const {
    clientType,
    name,
    company,
    email,
    phone,
    message,
    solutions,
    sectors,
  } = req.body

  if (!name || !phone) {
    return res
      .status(400)
      .json({ error: "Nom et téléphone sont obligatoires." })
  }
  if (clientType === "professional" && (!company || !email)) {
    return res.status(400).json({
      error: "Entreprise et email sont obligatoires pour un professionnel.",
    })
  }

  const entry = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    createdAt: new Date().toISOString(),
    clientType: clientType || "professional",
    name,
    company: company || null,
    email: email || null,
    phone,
    solutions: clientType === "professional" ? solutions || [] : [],
    sectors: clientType === "professional" ? sectors || [] : [],
    message: message || null,
  }

  const submissions = loadSubmissions()
  submissions.unshift(entry)
  saveSubmissions(submissions)

  console.log(`✅  New submission from ${name} (${clientType})`)
  return res.status(201).json({ success: true, id: entry.id })
})

app.get("/api/devis", (_req, res) => {
  return res.json(loadSubmissions())
})

app.delete("/api/devis/:id", (req, res) => {
  let submissions = loadSubmissions()
  const before = submissions.length
  submissions = submissions.filter((s) => s.id !== req.params.id)
  if (submissions.length === before) {
    return res.status(404).json({ error: "Not found" })
  }
  saveSubmissions(submissions)
  return res.json({ success: true })
})

// ── Blog API Routes ─────────────────────────────────────────────────
app.get("/api/blogs", (_req, res) => {
  return res.json(loadBlogs())
})

app.get("/api/blogs/:id", (req, res) => {
  const blog = loadBlogs().find((b) => b.id === req.params.id)
  if (!blog) return res.status(404).json({ error: "Article introuvable." })
  return res.json(blog)
})

app.post("/api/blogs", (req, res) => {
  const { title, summary, content, image, pdf, pdfName } = req.body

  if (!title || !summary || !content) {
    return res
      .status(400)
      .json({ error: "Titre, résumé et contenu sont requis." })
  }

  const newPost = {
    id:
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") +
      "-" +
      Math.random().toString(36).slice(2, 6),
    date: new Date().toISOString(),
    title,
    summary,
    content,
    image: image || null,
    pdf: pdf || null,
    pdfName: pdfName || null,
  }

  const blogs = loadBlogs()
  blogs.unshift(newPost)
  saveBlogs(blogs)

  console.log(`📝  New blog post added: ${title}`)
  return res.status(201).json({ success: true, blog: newPost })
})

app.delete("/api/blogs/:id", (req, res) => {
  let blogs = loadBlogs()
  const before = blogs.length
  blogs = blogs.filter((b) => b.id !== req.params.id)
  if (blogs.length === before) {
    return res.status(404).json({ error: "Not found" })
  }
  saveBlogs(blogs)
  return res.json({ success: true })
})

// ── Admin Dashboard ─────────────────────────────────────────────────
app.get("/admin", (req, res) => {
  const tab = req.query.tab || "devis"
  const submissions = loadSubmissions()
  const blogs = loadBlogs()

  const devisRows = submissions
    .map(
      (s) => `
    <tr id="row-${s.id}">
      <td>${
        s.createdAt ? new Date(s.createdAt).toLocaleString("fr-FR") : "—"
      }</td>
      <td><span class="badge ${
        s.clientType === "professional" ? "pro" : "perso"
      }">${s.clientType === "professional" ? "Pro" : "Particulier"}</span></td>
      <td>${esc(s.name)}</td>
      <td>${esc(s.company || "—")}</td>
      <td>${
        s.email ? `<a href="mailto:${esc(s.email)}">${esc(s.email)}</a>` : "—"
      }</td>
      <td><a href="tel:${esc(s.phone)}">${esc(s.phone)}</a></td>
      <td>
        ${
          s.solutions && s.solutions.length > 0
            ? s.solutions
                .map(
                  (sol) =>
                    `<span class="badge pro" style="display:inline-block; margin:2px; font-size:10.5px;">${esc(sol)}</span>`,
                )
                .join("")
            : "—"
        }
      </td>
      <td>
        ${
          s.sectors && s.sectors.length > 0
            ? s.sectors
                .map(
                  (sec) =>
                    `<span class="badge pro" style="display:inline-block; margin:2px; font-size:10.5px; background: #14171a;">${esc(sec)}</span>`,
                )
                .join("")
            : "—"
        }
      </td>
      <td class="msg">${esc(s.message || "—")}</td>
      <td><button class="del-btn" onclick="deleteEntry('${s.id}')">Supprimer</button></td>
    </tr>`,
    )
    .join("")

  const blogRows = blogs
    .map(
      (b) => `
    <tr id="blog-${b.id}">
      <td>${new Date(b.date).toLocaleDateString("fr-FR")}</td>
      <td style="font-weight: 700;">${esc(b.title)}</td>
      <td class="msg">${esc(b.summary)}</td>
      <td>
        <a href="/blog/${b.id}" target="_blank" class="view-link">Voir</a>
        <button class="del-btn" style="margin-left: 8px;" onclick="deleteBlog('${b.id}')">Supprimer</button>
      </td>
    </tr>`,
    )
    .join("")

  res.setHeader("Content-Type", "text/html; charset=utf-8")
  res.end(`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ORSAP — Administration</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', system-ui, sans-serif; background: #f2f0ec; color: #14171a; }
    .header { background: #14171a; color: #fff; padding: 28px 32px; display: flex; justify-content: space-between; align-items: center; }
    .header h1 { font-size: 22px; font-weight: 800; }
    .header p { margin-top: 6px; font-size: 13px; color: rgba(255,255,255,.6); }
    .count { display: inline-block; background: #d3121a; color: #fff; font-size: 12px; font-weight: 700; padding: 2px 10px; border-radius: 20px; margin-left: 10px; vertical-align: middle; }
    
    .nav-tabs { display: flex; gap: 8px; margin-top: 15px; }
    .tab-btn { background: rgba(255,255,255,0.1); color: #fff; border: none; padding: 8px 16px; cursor: pointer; font-size: 13px; font-weight: 600; text-decoration: none; transition: background 0.2s; }
    .tab-btn:hover { background: rgba(255,255,255,0.2); }
    .tab-btn.active { background: #d3121a; }

    .wrap { max-width: 1300px; margin: 0 auto; padding: 24px; }
    table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #d9dbdd; margin-bottom: 30px; }
    th, td { text-align: left; padding: 12px 14px; border-bottom: 1px solid #d9dbdd; font-size: 13.5px; }
    th { background: #14171a; color: #fff; font-size: 11.5px; text-transform: uppercase; letter-spacing: .08em; font-weight: 700; }
    tr:hover td { background: #fef2f2; }
    
    a { color: #d3121a; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .view-link { color: #14171a; font-weight: 600; }
    .view-link:hover { color: #d3121a; }

    .badge { font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: .04em; }
    .badge.pro { background: #d3121a; color: #fff; }
    .badge.perso { background: #14171a; color: #fff; }
    .msg { max-width: 250px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .empty { text-align: center; padding: 60px 20px; color: #6b7480; font-size: 15px; background: #fff; border: 1px solid #d9dbdd; }
    
    .del-btn { background: none; border: 1px solid #d3121a; color: #d3121a; padding: 5px 12px; font-size: 12px; font-weight: 600; cursor: pointer; transition: all .15s; }
    .del-btn:hover { background: #d3121a; color: #fff; }
    
    /* Blog Form styles */
    .editor-section { background: #fff; border: 1px solid #d9dbdd; padding: 30px; margin-bottom: 30px; }
    .editor-section h2 { font-size: 18px; font-weight: 800; margin-bottom: 20px; text-transform: uppercase; letter-spacing: .04em; border-left: 4px solid #d3121a; padding-left: 10px; }
    .form-group { margin-bottom: 20px; }
    .form-group label { display: block; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 6px; }
    .form-group input, .form-group textarea { width: 100%; border: 1px solid #d9dbdd; padding: 12px; font-family: inherit; font-size: 14px; outline: none; }
    .form-group input:focus, .form-group textarea:focus { border-color: #d3121a; }
    .submit-btn { background: #d3121a; color: #fff; border: none; padding: 12px 24px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; cursor: pointer; transition: background 0.15s; }
    .submit-btn:hover { background: #a10e14; }
    
    .image-preview-container { display: flex; align-items: center; gap: 15px; margin-top: 10px; }
    .preview-img { max-width: 120px; max-height: 120px; object-fit: cover; border: 1px solid #d9dbdd; display: none; }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1>ORSAP — Administration</h1>
      <p>Panneau de gestion du site internet</p>
      <div class="nav-tabs">
        <a href="/admin?tab=devis" class="tab-btn ${
          tab === "devis" ? "active" : ""
        }">Demandes de devis (${submissions.length})</a>
        <a href="/admin?tab=blog" class="tab-btn ${
          tab === "blog" ? "active" : ""
        }">Gestion du Blog (${blogs.length})</a>
      </div>
    </div>
  </div>

  <div class="wrap">
    ${
      tab === "devis"
        ? `
      <!-- TABLEAU DES DEVIS -->
      ${
        submissions.length === 0
          ? '<div class="empty">Aucune demande de devis pour le moment.</div>'
          : `<table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Nom</th>
            <th>Entreprise</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Solutions souhaitées</th>
            <th>Secteurs d'activité</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>${devisRows}</tbody>
      </table>`
      }
    `
        : `
      <!-- GESTION DU BLOG -->
      
      <!-- Formulaire rédaction -->
      <section class="editor-section">
        <h2>Rédiger un article de blog</h2>
        <form id="blogForm" onsubmit="createBlog(event)">
          <div class="form-group">
            <label>Titre de l'article</label>
            <input type="text" id="blogTitle" required placeholder="Ex: L'importance des normes de sécurité pour les échafaudages..." />
          </div>
          <div class="form-group">
            <label>Résumé de l'article</label>
            <input type="text" id="blogSummary" required placeholder="Court résumé apparaissant dans la liste d'articles..." />
          </div>
          <div class="form-group">
            <label>Image de l'article</label>
            <input type="file" id="blogImage" accept="image/*" onchange="previewImage(event)" />
            <div class="image-preview-container">
              <img id="imagePreview" class="preview-img" alt="Aperçu" />
            </div>
          </div>
          <div class="form-group">
            <label>Fiche technique / Document (PDF)</label>
            <input type="file" id="blogPdf" accept="application/pdf" onchange="previewPdf(event)" />
            <div id="pdfName" style="font-size: 13px; font-weight: 600; color: #d3121a; margin-top: 10px; display: none;"></div>
          </div>
          <div class="form-group">
            <label>Contenu de l'article</label>
            <textarea id="blogContent" rows="10" required placeholder="Rédigez le contenu complet ici. Utilisez deux retours à la ligne pour créer un paragraphe..."></textarea>
          </div>
          <button type="submit" class="submit-btn">Publier l'article</button>
        </form>
      </section>

      <!-- Liste articles -->
      <h2 style="font-size: 16px; font-weight: 800; text-transform: uppercase; margin-bottom: 15px;">Articles Publiés</h2>
      ${
        blogs.length === 0
          ? '<div class="empty">Aucun article publié pour le moment.</div>'
          : `<table>
        <thead>
          <tr>
            <th style="width: 120px;">Date</th>
            <th>Titre</th>
            <th>Résumé</th>
            <th style="width: 180px;">Actions</th>
          </tr>
        </thead>
        <tbody>${blogRows}</tbody>
      </table>`
      }
    `
    }
  </div>

  <script>
    // Image handling
    let base64Image = null;
    let base64Pdf = null;
    let pdfFileName = null;
    
    function previewPdf(event) {
      const file = event.target.files[0];
      if (!file) {
        base64Pdf = null;
        pdfFileName = null;
        document.getElementById("pdfName").style.display = "none";
        return;
      }
      
      pdfFileName = file.name;
      const reader = new FileReader();
      reader.onload = function(e) {
        base64Pdf = e.target.result;
        const nameEl = document.getElementById("pdfName");
        nameEl.textContent = "📄 " + pdfFileName;
        nameEl.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
    
    function previewImage(event) {
      const file = event.target.files[0];
      if (!file) {
        base64Image = null;
        document.getElementById("imagePreview").style.display = "none";
        return;
      }
      
      const reader = new FileReader();
      reader.onload = function(e) {
        base64Image = e.target.result;
        const preview = document.getElementById("imagePreview");
        preview.src = base64Image;
        preview.style.display = "block";
      };
      reader.readAsDataURL(file);
    }

    // Delete devis
    async function deleteEntry(id) {
      if (!confirm("Supprimer cette demande ?")) return;
      const res = await fetch("/api/devis/" + id, { method: "DELETE" });
      if (res.ok) {
        const row = document.getElementById("row-" + id);
        if (row) row.remove();
        location.reload();
      } else {
        alert("Erreur lors de la suppression.");
      }
    }

    // Create blog
    async function createBlog(event) {
      event.preventDefault();
      const title = document.getElementById("blogTitle").value;
      const summary = document.getElementById("blogSummary").value;
      const content = document.getElementById("blogContent").value;

      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, summary, content, image: base64Image, pdf: base64Pdf, pdfName: pdfFileName })
      });

      if (res.ok) {
        alert("Article publié avec succès !");
        location.reload();
      } else {
        const data = await res.json();
        alert(data.error || "Erreur de publication.");
      }
    }

    // Delete blog
    async function deleteBlog(id) {
      if (!confirm("Supprimer cet article de blog définitivement ?")) return;
      const res = await fetch("/api/blogs/" + id, { method: "DELETE" });
      if (res.ok) {
        const row = document.getElementById("blog-" + id);
        if (row) row.remove();
        location.reload();
      } else {
        alert("Erreur lors de la suppression.");
      }
    }
  </script>
</body>
</html>`)
})

// ── Serve frontend (production) ─────────────────────────────────────
if (existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR))
  // SPA fallback — serve index.html for all non-API routes
  app.get("/{*path}", (_req, res) => {
    res.sendFile(join(DIST_DIR, "index.html"))
  })
}

// ── Start ───────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀  ORSAP server running on port ${PORT}`)
  console.log(`📋  Admin dashboard: /admin`)
  console.log(`📨  API endpoint:    /api/devis\n`)
})
