/**
 * Downloads hero image, converts to WebP, and writes to the project public folder.
 */

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const SOURCE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCkBG0IJpjzs6EM4TcrUQ9-IgBuRIkBVo4K4Lg_QKXWzno2bUx-whraVhCQ5t6JSKjnlUORG5H6CRTNO6qYSFJiCAa3y-BS3r25dIuJaOSP_NftKPP1QAI4vKpA4a7wxlTA3Wr9UdRUyNkmcfEOVwoaIcwfFgUCB0GfcitYmd18gDVZIcKNJdm9FONQY8_0603sMLSECmHs4VhpGOveTt3zFUwX3vh_OT3kO9gJ_ZW2aO9zmEyELgFYFRJqaHNUuRzlsYp7R2z5Ouc'

// The project root is one level up from scripts/
const PROJECT_ROOT = path.resolve(__dirname, '..')
const OUT_DIR = path.join(PROJECT_ROOT, 'public', 'images')
const OUT_FILE = path.join(OUT_DIR, 'hero-tyre-fitting.webp')

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })

  console.log('[v0] Downloading hero image...')
  const response = await fetch(SOURCE_URL)
  if (!response.ok) throw new Error(`Fetch failed: ${response.status}`)
  const originalBuffer = Buffer.from(await response.arrayBuffer())
  console.log(`[v0] Downloaded ${(originalBuffer.length / 1024).toFixed(1)} KB`)

  console.log('[v0] Converting to WebP...')
  const webpBuffer = await sharp(originalBuffer)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toBuffer()
  console.log(`[v0] WebP size: ${(webpBuffer.length / 1024).toFixed(1)} KB`)

  fs.writeFileSync(OUT_FILE, webpBuffer)
  console.log(`[v0] Written to: ${OUT_FILE}`)
  console.log(`[v0] CWD: ${process.cwd()}`)
  console.log(`[v0] __dirname: ${__dirname}`)
}

main().catch((err) => {
  console.error('[v0] Error:', err)
  process.exit(1)
})
