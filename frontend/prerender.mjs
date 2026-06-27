// Pre-render each route into a real static HTML file so search engines + any static host
// get fully-rendered HTML instead of a blank JS-only SPA shell.
//
// Usage: node prerender.mjs
//   1. Spins up a tiny static server pointing at ./build
//   2. Uses Playwright (already installed via screenshot tool deps) to visit each route
//   3. Saves the resulting HTML to build/<route>/index.html
//
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Use the system-wide playwright browsers path if the default location is empty
if (!process.env.PLAYWRIGHT_BROWSERS_PATH) {
  for (const candidate of ["/root/.cache/ms-playwright", "/pw-browsers"]) {
    if (fs.existsSync(candidate)) {
      process.env.PLAYWRIGHT_BROWSERS_PATH = candidate;
      break;
    }
  }
}

const { chromium } = await import("playwright");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildDir = path.join(__dirname, "build");
const port = 4179;

const ROUTES = [
  "/",
  "/web-design/",
  "/seo/",
  "/social/",
  "/portfolio/",
  "/privacy-policy/",
];

const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".map": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

function startStaticServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      try {
        const urlPath = decodeURIComponent(req.url.split("?")[0]);
        let filePath = path.join(buildDir, urlPath);
        if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
          filePath = path.join(filePath, "index.html");
        }
        if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
          // SPA fallback
          filePath = path.join(buildDir, "index.html");
        }
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { "Content-Type": mime[ext] || "application/octet-stream" });
        fs.createReadStream(filePath).pipe(res);
      } catch (e) {
        res.writeHead(500);
        res.end("err");
      }
    });
    server.listen(port, () => resolve(server));
  });
}

function escapeHtml(s = "") {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function stripDynamicArtifacts(html, meta = {}) {
  // Remove dev-only / dynamic artifacts (posthog inline init etc.)
  html = html
    .replace(/<script>\s*!\(function \(t, e\) \{[\s\S]*?posthog\.init\([\s\S]*?\}\);\s*<\/script>/g, "")
    .replace(/ data-react-helmet="true"/g, "")
    .replace(/ data-rh="true"/g, "");

  // Remove ALL existing title + meta description + canonical + OG/Twitter tags,
  // then re-inject the authoritative values captured from the live DOM.
  html = html.replace(/<title[^>]*>[^<]*<\/title>\s*/g, "");
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>\s*/g, "");
  html = html.replace(/<meta\s+name="twitter:card"\s+content="[^"]*"\s*\/?>\s*/g, "");
  html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>\s*/g, "");
  html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>\s*/g, "");
  html = html.replace(/<meta\s+property="og:[^"]+"\s+content="[^"]*"\s*\/?>\s*/g, "");
  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>\s*/g, "");

  const tags = [];
  if (meta.title) tags.push(`<title>${escapeHtml(meta.title)}</title>`);
  if (meta.description) tags.push(`<meta name="description" content="${escapeHtml(meta.description)}" />`);
  if (meta.canonical) tags.push(`<link rel="canonical" href="${escapeHtml(meta.canonical)}" />`);
  if (meta.ogTitle) tags.push(`<meta property="og:title" content="${escapeHtml(meta.ogTitle)}" />`);
  if (meta.ogDescription) tags.push(`<meta property="og:description" content="${escapeHtml(meta.ogDescription)}" />`);
  if (meta.ogUrl) tags.push(`<meta property="og:url" content="${escapeHtml(meta.ogUrl)}" />`);
  if (meta.ogType) tags.push(`<meta property="og:type" content="${escapeHtml(meta.ogType)}" />`);
  if (meta.twitterCard) tags.push(`<meta name="twitter:card" content="${escapeHtml(meta.twitterCard)}" />`);
  if (meta.twitterTitle) tags.push(`<meta name="twitter:title" content="${escapeHtml(meta.twitterTitle)}" />`);
  if (meta.twitterDescription) tags.push(`<meta name="twitter:description" content="${escapeHtml(meta.twitterDescription)}" />`);

  html = html.replace("</head>", `    ${tags.join("\n    ")}\n  </head>`);
  return html;
}

async function run() {
  if (!fs.existsSync(buildDir)) {
    console.error("build/ folder missing. Run `yarn build` first.");
    process.exit(1);
  }
  const server = await startStaticServer();
  console.log(`Static server up on http://localhost:${port}`);

  const browser = await chromium.launch();
  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  for (const route of ROUTES) {
    const url = `http://localhost:${port}${route}`;
    console.log(`Prerendering ${route} ...`);
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
      // give helmet + framer-motion time to flush
      await page.waitForTimeout(2000);
      // Capture authoritative meta from the live DOM (use LAST matching element so Helmet's wins over static fallback)
      const meta = await page.evaluate(() => {
        const last = (sel, attr) => {
          const els = document.querySelectorAll(sel);
          if (els.length === 0) return "";
          return els[els.length - 1].getAttribute(attr) || "";
        };
        return {
          title: document.title || "",
          description: last('meta[name="description"]', "content"),
          ogTitle: last('meta[property="og:title"]', "content"),
          ogDescription: last('meta[property="og:description"]', "content"),
          ogUrl: last('meta[property="og:url"]', "content"),
          ogType: last('meta[property="og:type"]', "content") || "website",
          twitterCard: last('meta[name="twitter:card"]', "content") || "summary_large_image",
          twitterTitle: last('meta[name="twitter:title"]', "content"),
          twitterDescription: last('meta[name="twitter:description"]', "content"),
          canonical: last('link[rel="canonical"]', "href"),
        };
      });
      const html = await page.content();
      const cleaned = stripDynamicArtifacts(html, meta);

      const outDir = route === "/" ? buildDir : path.join(buildDir, route.replace(/^\/|\/$/g, ""));
      fs.mkdirSync(outDir, { recursive: true });
      const outFile = path.join(outDir, "index.html");
      fs.writeFileSync(outFile, cleaned, "utf8");
      console.log(`  wrote ${path.relative(buildDir, outFile)} (${(cleaned.length / 1024).toFixed(1)} KB)`);
    } catch (e) {
      console.error(`  FAILED for ${route}:`, e.message);
    }
  }

  // Also write a sitemap.xml in the build root so static hosts serve it
  const today = new Date().toISOString().slice(0, 10);
  const baseUrl = "https://webdesignfla.com";
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map((r) => `  <url><loc>${baseUrl}${r}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${r === "/" ? "1.0" : "0.8"}</priority></url>`).join("\n")}
</urlset>
`;
  fs.writeFileSync(path.join(buildDir, "sitemap.xml"), xml, "utf8");
  console.log("Wrote sitemap.xml");

  // robots.txt
  fs.writeFileSync(
    path.join(buildDir, "robots.txt"),
    `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`,
    "utf8"
  );
  console.log("Wrote robots.txt");

  await browser.close();
  server.close();
  console.log("Done.");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
