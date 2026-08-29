import express from "express";
import cors from "cors";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "data");
const DB_PATH = join(DATA_DIR, "submissions.json");
const DIST_DIR = join(__dirname, "dist");
const PORT = process.env.PORT || 3001;

// Ensure data directory exists
if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });

const app = express();
app.use(cors());
app.use(express.json());

// ── Helpers ──────────────────────────────────────────────────────────
function loadSubmissions() {
  if (!existsSync(DB_PATH)) return [];
  try {
    return JSON.parse(readFileSync(DB_PATH, "utf-8"));
  } catch {
    return [];
  }
}

function saveSubmissions(data) {
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
}

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ── API Routes ──────────────────────────────────────────────────────

// POST /api/devis — receive a new submission
app.post("/api/devis", (req, res) => {
  const { clientType, name, company, email, phone, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Nom et téléphone sont obligatoires." });
  }
  if (clientType === "professional" && (!company || !email)) {
    return res
      .status(400)
      .json({ error: "Entreprise et email sont obligatoires pour un professionnel." });
  }

  const entry = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    createdAt: new Date().toISOString(),
    clientType: clientType || "professional",
    name,
    company: company || null,
    email: email || null,
    phone,
    message: message || null,
  };

  const submissions = loadSubmissions();
  submissions.unshift(entry);
  saveSubmissions(submissions);

  console.log(`✅  New submission from ${name} (${clientType})`);
  return res.status(201).json({ success: true, id: entry.id });
});

// GET /api/devis — list all submissions
app.get("/api/devis", (_req, res) => {
  return res.json(loadSubmissions());
});

// GET /api/devis/:id — single submission
app.get("/api/devis/:id", (req, res) => {
  const entry = loadSubmissions().find((s) => s.id === req.params.id);
  if (!entry) return res.status(404).json({ error: "Not found" });
  return res.json(entry);
});

// DELETE /api/devis/:id — delete a submission
app.delete("/api/devis/:id", (req, res) => {
  let submissions = loadSubmissions();
  const before = submissions.length;
  submissions = submissions.filter((s) => s.id !== req.params.id);
  if (submissions.length === before) {
    return res.status(404).json({ error: "Not found" });
  }
  saveSubmissions(submissions);
  return res.json({ success: true });
});

// ── Admin Dashboard ─────────────────────────────────────────────────
app.get("/admin", (_req, res) => {
  const submissions = loadSubmissions();
  const rows = submissions
    .map(
      (s) => `
    <tr id="row-${s.id}">
      <td>${s.createdAt ? new Date(s.createdAt).toLocaleString("fr-FR") : "—"}</td>
      <td><span class="badge ${s.clientType === "professional" ? "pro" : "perso"}">${s.clientType === "professional" ? "Pro" : "Particulier"}</span></td>
      <td>${esc(s.name)}</td>
      <td>${esc(s.company || "—")}</td>
      <td>${s.email ? `<a href="mailto:${esc(s.email)}">${esc(s.email)}</a>` : "—"}</td>
      <td><a href="tel:${esc(s.phone)}">${esc(s.phone)}</a></td>
      <td class="msg">${esc(s.message || "—")}</td>
      <td><button class="del-btn" onclick="deleteEntry('${s.id}')">Supprimer</button></td>
    </tr>`,
    )
    .join("");

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ORSAP — Demandes de devis</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', system-ui, sans-serif; background: #f2f0ec; color: #14171a; }
    .header { background: #14171a; color: #fff; padding: 28px 32px; }
    .header h1 { font-size: 22px; font-weight: 800; }
    .header p { margin-top: 6px; font-size: 13px; color: rgba(255,255,255,.6); }
    .count { display: inline-block; background: #d3121a; color: #fff; font-size: 12px; font-weight: 700; padding: 2px 10px; border-radius: 20px; margin-left: 10px; vertical-align: middle; }
    .wrap { max-width: 1300px; margin: 0 auto; padding: 24px; }
    table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #d9dbdd; }
    th, td { text-align: left; padding: 12px 14px; border-bottom: 1px solid #d9dbdd; font-size: 13.5px; }
    th { background: #14171a; color: #fff; font-size: 11.5px; text-transform: uppercase; letter-spacing: .08em; font-weight: 700; }
    tr:hover td { background: #fef2f2; }
    a { color: #d3121a; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .badge { font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: .04em; }
    .badge.pro { background: #d3121a; color: #fff; }
    .badge.perso { background: #14171a; color: #fff; }
    .msg { max-width: 220px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .empty { text-align: center; padding: 60px 20px; color: #6b7480; font-size: 15px; }
    .del-btn { background: none; border: 1px solid #d3121a; color: #d3121a; padding: 5px 12px; font-size: 12px; font-weight: 600; cursor: pointer; transition: all .15s; }
    .del-btn:hover { background: #d3121a; color: #fff; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Demandes de devis <span class="count">${submissions.length}</span></h1>
    <p>Toutes les demandes reçues depuis le formulaire du site ORSAP.</p>
  </div>
  <div class="wrap">
    ${
      submissions.length === 0
        ? '<div class="empty">Aucune demande pour le moment.</div>'
        : `<table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Nom</th>
          <th>Entreprise</th>
          <th>Email</th>
          <th>Téléphone</th>
          <th>Message</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`
    }
  </div>
  <script>
    async function deleteEntry(id) {
      if (!confirm("Supprimer cette demande ?")) return;
      const res = await fetch("/api/devis/" + id, { method: "DELETE" });
      if (res.ok) {
        const row = document.getElementById("row-" + id);
        if (row) row.remove();
        const count = document.querySelector(".count");
        if (count) count.textContent = parseInt(count.textContent) - 1;
        if (!document.querySelector("tbody tr")) location.reload();
      } else {
        alert("Erreur lors de la suppression.");
      }
    }
  </script>
</body>
</html>`);
});

// ── Serve frontend (production) ─────────────────────────────────────
if (existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR));
  // SPA fallback — serve index.html for all non-API routes
  app.get("/{*path}", (_req, res) => {
    res.sendFile(join(DIST_DIR, "index.html"));
  });
}

// ── Start ───────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀  ORSAP server running on port ${PORT}`);
  console.log(`📋  Admin dashboard: /admin`);
  console.log(`📨  API endpoint:    /api/devis\n`);
});
