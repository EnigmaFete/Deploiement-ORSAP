import express from "express"
import cors from "cors"
import { readFileSync, existsSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import {
  loadSubmissions,
  saveSubmissions,
  loadBlogs,
  saveBlogs,
} from "./server/database.js"

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST_DIR = join(__dirname, "dist")
const ADMIN_TEMPLATE_PATH = join(__dirname, "server", "admin.html")
const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())

// Increase body limit to support base64 images and PDFs
app.use(express.json({ limit: "25mb" }))
app.use(express.urlencoded({ limit: "25mb", extended: true }))

// HTML string escaping helper
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

  // Generate rows for devis
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

  // Generate rows for blogs
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

  // Construct tab content
  const tabContent =
    tab === "devis"
      ? `
      <div class="wrap">
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
      </div>`
      : `
      <div class="wrap">
        <!-- GESTION DU BLOG -->
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
      </div>`

  // Read template HTML and replace variables
  try {
    let html = readFileSync(ADMIN_TEMPLATE_PATH, "utf-8")
    html = html.replace("{{SUBMISSIONS_COUNT}}", submissions.length)
    html = html.replace("{{BLOGS_COUNT}}", blogs.length)
    html = html.replace("{{TAB_DEVIS_ACTIVE}}", tab === "devis" ? "active" : "")
    html = html.replace("{{TAB_BLOG_ACTIVE}}", tab === "blog" ? "active" : "")
    html = html.replace("{{TAB_CONTENT}}", tabContent)

    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.end(html)
  } catch (error) {
    console.error("Error reading admin.html template:", error)
    res.status(500).send("Erreur interne du serveur (admin template).")
  }
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
