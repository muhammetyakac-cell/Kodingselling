import re
import json

base_url = "https://www.dzydigital.com"
lastmod = "2026-08-04"

main_pages = [
    ('/', 1.00, 'weekly'),
    ('/diensten', 0.80, 'monthly'),
    ('/expertises', 0.80, 'monthly'),
    ('/over-ons', 0.60, 'monthly'),
    ('/contact', 0.60, 'monthly'),
    ('/blog', 0.90, 'weekly')
]

sector_pages = [
    '/sector/logistiek',
    '/sector/saas',
    '/sector/academisch',
    '/sector/ecommerce',
    '/sector/toerisme',
    '/sector/productie',
    '/sector/gezondheidszorg',
    '/sector/onderwijs',
    '/sector/fintech',
    '/sector/vastgoed',
    '/sector/energie',
    '/sector/agritech',
    '/sector/retail'
]

# read blog slugs
blog_file_path = r"c:\Users\Deniz\Desktop\Projeler\Kodingselling-vercel-vercel-web-analytics-integrati-1ycm3n\src\blogData.js"
with open(blog_file_path, 'r', encoding='utf-8') as f:
    content = f.read()

slugs = re.findall(r'"slug"\s*:\s*"([^"]+)"', content)

xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

for path, priority, changefreq in main_pages:
    xml_content += f"""  <url>
    <loc>{base_url}{path}</loc>
    <lastmod>{lastmod}</lastmod>
    <changefreq>{changefreq}</changefreq>
    <priority>{priority:.2f}</priority>
  </url>\n"""

for path in sector_pages:
    xml_content += f"""  <url>
    <loc>{base_url}{path}</loc>
    <lastmod>{lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.70</priority>
  </url>\n"""

for slug in slugs:
    xml_content += f"""  <url>
    <loc>{base_url}/blog/{slug}</loc>
    <lastmod>{lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.60</priority>
  </url>\n"""

xml_content += '</urlset>'

out_path = r"c:\Users\Deniz\Desktop\Projeler\Kodingselling-vercel-vercel-web-analytics-integrati-1ycm3n\public\sitemap.xml"
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(xml_content)

print(f"Sitemap generated successfully with {len(slugs)} blog posts.")
