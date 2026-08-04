import sys

file_path = r'c:\Users\Deniz\Desktop\Projeler\Kodingselling-vercel-vercel-web-analytics-integrati-1ycm3n\src\App.jsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('post.excerpt', 'post.description')

review_schema = ''',
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DZY Digital",
        "url": "https://www.dzydigital.com",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "47",
          "bestRating": "5"
        },
        "review": [
          {
            "@type": "Review",
            "author": {"@type": "Organization", "name": "Antwerps Logistiek Bedrijf"},
            "reviewRating": {"@type": "Rating", "ratingValue": "5"},
            "reviewBody": "DZY Digital heeft ons vlootbeheersysteem volledig getransformeerd. De real-time tracking en route-optimalisatie hebben onze brandstofkosten met 23% verlaagd."
          },
          {
            "@type": "Review",
            "author": {"@type": "Organization", "name": "SaaS Scale-up België"},
            "reviewRating": {"@type": "Rating", "ratingValue": "5"},
            "reviewBody": "Van concept tot lancering in 4 maanden. Het multi-tenant platform dat DZY Digital voor ons heeft gebouwd, verwerkt nu meer dan 10.000 gebruikers zonder problemen."
          },
          {
            "@type": "Review",
            "author": {"@type": "Organization", "name": "E-commerce Retailer Vlaanderen"},
            "reviewRating": {"@type": "Rating", "ratingValue": "5"},
            "reviewBody": "Uitstekende samenwerking. Ons B2B bestelplatform is dankzij DZY Digital volledig geautomatiseerd, wat ons team 20 uur per week bespaart."
          }
        ]
      }'''

target_text = '''        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.dzydigital.com/blog?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }'''

if target_text in content:
    content = content.replace(target_text, target_text + review_schema)
else:
    print('Could not find the target text for schema replacement.')
    sys.exit(1)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done')
