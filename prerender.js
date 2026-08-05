import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  "/",
  "/diensten",
  "/expertises",
  "/over-ons",
  "/contact",
  "/blog",
  "/sector/logistiek",
  "/sector/saas",
  "/sector/academisch",
  "/sector/ecommerce",
  "/sector/toerisme",
  "/sector/productie",
  "/sector/gezondheidszorg",
  "/sector/onderwijs",
  "/sector/fintech",
  "/sector/vastgoed",
  "/sector/energie",
  "/sector/agritech",
  "/sector/retail"
];

const PORT = 4173;
const distPath = path.join(__dirname, 'dist');

async function prerender() {
  const app = express();
  app.use(express.static(distPath));
  
  // Fallback to index.html for SPA routing
  app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });

  const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });

  const browser = await puppeteer.launch({ headless: 'new' });

  for (const pagePath of pages) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${pagePath}`;
    console.log(`Prerendering ${pagePath}...`);
    
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    // Wait for the root div to have content (meaning React has rendered)
    await page.waitForFunction('document.querySelector("#root").hasChildNodes()');

    const html = await page.content();
    
    const outputPath = path.join(distPath, pagePath);
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }
    
    fs.writeFileSync(path.join(outputPath, 'index.html'), html);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log('Prerendering complete!');
}

prerender().catch(console.error);
