/**
 * Downloads the hero image, converts it to optimised WebP,
 * and saves it to public/images/ for static serving.
 */

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const SOURCE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCkBG0IJpjzs6EM4TcrUQ9-IgBuRIkBVo4K4Lg_QKXWzno2bUx-whraVhCQ5t6JSKjnlUORG5H6CRTNO6qYSFJiCAa3y-BS3r25dIuJaOSP_NftKPP1QAI4vKpA4a7wxlTA3Wr9UdRUyNkmcfEOVwoaIcwfFgUCB0GfcitYmd18gDVZIcKNJdm9FONQY8_0603sMLSECmHs4VhpGOveTt3zFUwX3vh_OT3kO9gJ_ZW2aO9zmEyELgFYFRJqaHNUuRzlsYp7R2z5Ouc'

const OUT_DIR = path.join(process.cwd(), 'public', 'images')
const OUT_FILE = path.join(process.cwd(), 'public', 'images', 'hero-tyre-fitting.webp')

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

  console.log('[v0] Downloading hero image...')
  const response = await fetch(SOURCE_URL)
  if (!response.ok) throw new Error(`Fetch failed: ${response.status}`)
  const originalBuffer = Buffer.from(await response.arrayBuffer())
  console.log(`[v0] Downloaded ${(originalBuffer.length / 1024).toFixed(1)} KB`)

  console.log('[v0] Converting to WebP (quality 82, max-width 1600)...')
  const webpBuffer = await sharp(originalBuffer)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toBuffer()
  console.log(`[v0] WebP size: ${(webpBuffer.length / 1024).toFixed(1)} KB`)

  fs.writeFileSync(OUT_FILE, webpBuffer)
  console.log(`[v0] Saved to ${OUT_FILE}`)
}

main().catch((err) => {
  console.error('[v0] Error:', err)
  process.exit(1)
})
