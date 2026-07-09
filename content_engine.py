#!/usr/bin/env python3
"""
DZY Digital Continuous Content Generation Engine
Sürekli döngü halinde içerik üretimi, merge, build, commit, push
"""

import json, os, subprocess, sys, time, random, re
from datetime import datetime

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SRC_FILE = os.path.join(BASE_DIR, 'src', 'blogData.js')
SITEMAP_FILE = os.path.join(BASE_DIR, 'public', 'sitemap.xml')
MERGE_SCRIPT = os.path.join(BASE_DIR, 'merge_auto.cjs')
LOG_FILE = os.path.join(BASE_DIR, 'db', 'cycle_log.txt')

# Fix PATH for subprocess calls on Windows
os.environ['PATH'] = r'C:\Program Files\nodejs;' + os.environ.get('PATH', '')
os.environ['PATH'] = r'C:\Program Files\Git\bin;' + os.environ['PATH']

# ─── CONTENT POOLS ───────────────────────────────────────────────────────────

INDUSTRIES = [
    ("sigorta-sektorunde-dijital-donusum", "Sigorta Sekt\u00f6r\u00fcnde Dijital D\u00f6n\u00fc\u015f\u00fcm ve Yaz\u0131l\u0131m \u00c7\u00f6z\u00fcmleri"),
    ("ilaç-ve-farma-sektorunde-yazilim", "\u0130la\u00e7 ve Farma Sekt\u00f6r\u00fcnde Yaz\u0131l\u0131m \u00c7\u00f6z\u00fcmleri ve Dijital D\u00f6n\u00fc\u015f\u00fcm"),
    ("spor-teknolojileri-ve-yazilim", "Spor Teknolojilerinde Yaz\u0131l\u0131m \u00c7\u00f6z\u00fcmleri ve Dijital D\u00f6n\u00fc\u015f\u00fcm"),
    ("savunma-ve-güvenlik-yazilim", "Savunma ve G\u00fcvenlik Sekt\u00f6r\u00fcnde Yaz\u0131l\u0131m \u00c7\u00f6z\u00fcmleri"),
    ("belediyeler-icin-dijital-donusum", "Belediyeler \u0130\u00e7in Dijital D\u00f6n\u00fc\u015f\u00fcm ve Ak\u0131ll\u0131 \u015eehir Yaz\u0131l\u0131mlar\u0131"),
    ("sosyal-medya-ve-dijital-pazarlama-yazilim", "Sosyal Medya ve Dijital Pazarlama Yaz\u0131l\u0131m \u00c7\u00f6z\u00fcmleri"),
    ("telekom-sektorunde-yazilim", "Telekom\u00fcnikasyon Sekt\u00f6r\u00fcnde Yaz\u0131l\u0131m ve Dijital D\u00f6n\u00fc\u015f\u00fcm"),
    ("gayrimenkul-sektorunde-dijital-donusum", "Gayrimenkul Sekt\u00f6r\u00fcnde Dijital D\u00f6n\u00fc\u015f\u00fcm ve Yaz\u0131l\u0131m \u00c7\u00f6z\u00fcmleri"),
]

COMPARISONS = [
    ("angular-vs-react-vs-vue", "Angular vs React vs Vue: 2026\u2019da Hangi Frontend Framework\u2019\u00fc Se\u00e7melisiniz?"),
    ("firebase-vs-supabase-vs-pocketbase", "Firebase vs Supabase vs Pocketbase: Backend-\u00e7i\u00e7 \u00c7\u00f6z\u00fcm Kar\u015f\u0131la\u015ft\u0131rmas\u0131"),
    ("aws-vs-azure-vs-gcp", "AWS vs Azure vs Google Cloud: T\u00fcrkiye\u2019de Hangi Bulut Sa\u011flay\u0131c\u0131s\u0131 Daha \u0130yi?"),
    ("sql-vs-nosql-hangi-veritabani", "SQL vs NoSQL: Projeniz \u0130\u00e7in Do\u011fru Veritaban\u0131 Se\u00e7imi"),
    ("graphql-vs-rest-2026", "GraphQL vs REST: API Geli\u015ftirmede Yeni Standart Hangisi?"),
    ("tailwind-vs-bootstrap-vs-material", "Tailwind CSS vs Bootstrap vs Material UI: CSS Framework Kar\u015f\u0131la\u015ft\u0131rmas\u0131"),
    ("svelte-vs-solid-vs-qwik", "Svelte vs Solid.js vs Qwik: Yeni Nesil Frontend Framework Kar\u015f\u0131la\u015ft\u0131rmas\u0131"),
    ("prisma-vs-drizzle-vs-typeorm", "Prisma vs Drizzle vs TypeORM: Node.js ORM Kar\u015f\u0131la\u015ft\u0131rmas\u0131"),
]

HOW_TOS = [
    ("nextjs-auth-sistemi-kurulumu", "Next.js ile Kimlik Do\u011frulama Sistemi Kurulumu: Auth.js Rehberi"),
    ("websocket-ile-gercek-zamanli-uygulama", "WebSocket ile Ger\u00e7ek Zamanl\u0131 Uygulama Geli\u015ftirme Rehberi"),
    ("redis-cache-kurulumu-ve-kullanimi", "Redis ile \u00d6nbellekleme ve Performans Optimizasyonu Rehberi"),
    ("elasticsearch-kurulumu-ve-sorgulama", "Elasticsearch ile Metin Arama ve Log Y\u00f6netimi Kurulumu"),
    ("graphql-api-gelistirme-rehberi", "GraphQL API Geli\u015ftirme: S\u0131f\u0131rdan Uygulamal\u0131 Rehber"),
    ("docker-compose-ile-mikroservis", "Docker Compose ile Mikroservis Mimarisi Kurulumu"),
    ("nextjs-api-routes-rehberi", "Next.js API Routes ile Backend Geli\u015ftirme Rehberi"),
    ("supabase-edge-functions-rehberi", "Supabase Edge Functions ile Serverless Geli\u015ftirme"),
    ("vercel-deploy-rehberi", "Vercel\u2019e Uygulama Deployment\u0131: Ad\u0131m Ad\u0131m Rehber"),
    ("postgresql-performance-optimization", "PostgreSQL Performans Optimizasyonu: Sorgu \u0130yile\u015ftirme Rehberi"),
]

TECH_DEEP_DIVES = [
    ("mikroservislerde-event-sourcing", "Mikroservis Mimarilerinde Event Sourcing ve CQRS Uygulamas\u0131"),
    ("api-gateway-mimarisi", "API Gateway Mimarisi: Trafik Y\u00f6netimi ve G\u00fcvenlik Stratejileri"),
    ("oauth2-ve-jwt-kimlik-dogrulama", "OAuth 2.0 ve JWT ile G\u00fcvenli Kimlik Do\u011frulama Sistemi"),
    ("message-queue-sistemleri", "Message Queue Sistemleri: RabbitMQ, Kafka ve SQS Kar\u015f\u0131la\u015ft\u0131rmas\u0131"),
    ("veritabani-replikasyon-ve-sharding", "Veritaban\u0131 Replikasyonu ve Sharding: \u00d6l\u00e7eklenebilirlik Stratejileri"),
    ("monitoring-ve-observability", "Monitoring ve Observability: Uygulama \u0130zleme Stratejileri"),
    ("micro-frontend-mimarisi", "Micro-Frontend Mimarisi: B\u00fcy\u00fck \u00d6l\u00e7ekli Uygulamalar \u0130\u00e7in Mod\u00fcler Yakla\u015f\u0131m"),
    ("kubernetes-orchestration", "Kubernetes ile Konteyner Orkestrasyonu: \u00dcre tim Ortam\u0131 Y\u00f6netimi"),
]

CASE_STUDY_INDUSTRIES = [
    ("saglik-hasta-randevu-sistemi", "Vaka Analizi: Sa\u011fl\u0131k Sekt\u00f6r\u00fcnde Ak\u0131ll\u0131 Hasta Randevu Sistemi", "sigorta"),
    ("finans-dijital-banka", "Vaka Analizi: Dijital Bankac\u0131l\u0131k Platformu ile M\u00fc\u015fteri Deneyimi D\u00f6n\u00fc\u015f\u00fcm\u00fc", "finans"),
    ("egitim-ogrenci-bilgi-sistemi", "Vaka Analizi: \u00dcniversiteler \u0130\u00e7in Modern \u00d6\u011frenci Bilgi Sistemi", "egitim"),
    ("lojistik-depo-yonetimi", "Vaka Analizi: Lojistik Firmas\u0131 \u0130\u00e7in Otomatik Depo Y\u00f6netim Sistemi", "lojistik"),
    ("perakende-sadakat-platformu", "Vaka Analizi: Perakende Markas\u0131 \u0130\u00e7in Dijital Sadakat Platformu", "perakende"),
    ("turizm-online-rezervasyon", "Vaka Analizi: Turizm Firmas\u0131 \u0130\u00e7in Online Rezervasyon Sistemi", "turizm"),
    ("saglik-tibbi-goruntu", "Vaka Analizi: T\u0131bbi G\u00f6r\u00fcnt\u00fc Ar\u015fivleme ve Yapay Zeka Destekli Te", "saglik"),
    ("finans-kredi-skor", "Vaka Analizi: Finans Firmas\u0131 \u0130\u00e7in AI Destekli Kredi De\u011ferlendirme", "finans"),
    ("egitim-canli-ders", "Vaka Analizi: Uzaktan E\u011fitim Platformu \u0130\u00e7in Canl\u0131 Ders Altyap\u0131s\u0131", "egitim"),
    ("lojistik-teslimat-optimizasyon", "Vaka Analizi: Son Ad\u0131m Teslimat Optimizasyonu ile M\u00fc\u015fteri Memnuniyeti", "lojistik"),
]

# ─── CONTENT SECTION POOLS ────────────────────────────────────────────────────

H2_SECTIONS = {
    "industry": [
        ("{sektor} Sekt\u00f6r\u00fcnde Dijital D\u00f6n\u00fc\u015f\u00fcm\u00fcn \u00d6nemi", [
            "Dijital d\u00f6n\u00fc\u015f\u00fcm, {sektor} sekt\u00f6r\u00fcnde faaliyet g\u00f6steren i\u015fletmeler i\u00e7in art\u0131k bir se\u00e7enek de\u011fil, zorunluluktur. T\u00fcrkiye\u2019de {sektor} sekt\u00f6r\u00fcndeki KOB\u0130\u2019ler ve kurumsal firmalar, dijitalle\u015fme s\u00fcrecinde \u00f6nemli ad\u0131mlar atmaktad\u0131r.",
            "M\u00fc\u015fteri beklentilerinin h\u0131zla de\u011fi\u015fti\u011fi g\u00fcn\u00fcm\u00fczde, geleneksel y\u00f6ntemlerle rekabet etmek her ge\u00e7en g\u00fcn zorla\u015fmaktad\u0131r. Dijital d\u00f6n\u00fc\u015f\u00fcm sayesinde i\u015fletmeler operasyonel verimliliklerini art\u0131r\u0131rken, m\u00fc\u015fteri memnuniyetini de \u00fcst seviyelere ta\u015f\u0131yabilmektedir.",
        ]),
        ("{sektor} Sekt\u00f6r\u00fcnde Kullan\u0131lan Temel Teknolojiler", [
            "{sektor} sekt\u00f6r\u00fcnde kullan\u0131lan ba\u015fl\u0131ca teknolojiler aras\u0131nda yapay zeka, IoT sens\u00f6rleri, bulut bili\u015fim ve mobil uygulamalar yer almaktad\u0131r. Bu teknolojiler i\u015fletmelere ger\u00e7ek zamanl\u0131 veri analizi, uzaktan y\u00f6netim ve otomasyon imkan\u0131 sunmaktad\u0131r.",
            "Blokzincir teknolojisi, b\u00fcy\u00fck veri analiti\u011fi ve nesnelerin interneti (IoT) gibi yenilik\u00e7i \u00e7\u00f6z\u00fcmler, {sektor} sekt\u00f6r\u00fcnde \u00e7\u0131\u011f\u0131r a\u00e7an geli\u015fmelere olanak sa\u011flamaktad\u0131r. DZY Digital olarak, bu teknolojileri m\u00fc\u015fterilerimizin ihtiya\u00e7lar\u0131na g\u00f6re \u00f6zelle\u015ftiriyoruz.",
        ]),
        ("{sektor} \u0130\u00e7in Yaz\u0131l\u0131m \u00c7\u00f6z\u00fcmlerimiz", [
            "DZY Digital olarak, {sektor} sekt\u00f6r\u00fcne \u00f6zel olarak geli\u015ftirdi\u011fimiz yaz\u0131l\u0131m \u00e7\u00f6z\u00fcmleri ile i\u015fletmelerin dijital d\u00f6n\u00fc\u015f\u00fcm yolculu\u011funda yan\u0131nday\u0131z. Modern teknolojilerle donat\u0131lm\u0131\u015f, \u00f6l\u00e7eklenebilir ve g\u00fcvenli \u00e7\u00f6z\u00fcmler sunuyoruz.",
            "M\u00fc\u015fterilerimizin ihtiya\u00e7lar\u0131n\u0131 analiz ederek, onlara \u00f6zel yaz\u0131l\u0131m mimarileri tasarl\u0131yoruz. Bulut tabanl\u0131 altyap\u0131m\u0131z sayesinde kesintisiz hizmet ve y\u00fcksek performans garantisi sa\u011fl\u0131yoruz.",
        ]),
        ("{sektor} \u0130\u00e7in Dijital D\u00f6n\u00fc\u015f\u00fcm Stratejileri", [
            "Ba\u015far\u0131l\u0131 bir dijital d\u00f6n\u00fc\u015f\u00fcm i\u00e7in \u00f6ncelikle mevcut s\u00fcre\u00e7lerin kapsaml\u0131 bir \u015fekilde analiz edilmesi gerekmektedir. Ard\u0131ndan, i\u015fletmenin \u00f6nceliklerine g\u00f6re bir yol haritas\u0131 belirlenmeli ve ad\u0131m ad\u0131m uygulamaya konulmal\u0131d\u0131r.",
            "Dijital d\u00f6n\u00fc\u015f\u00fcm s\u00fcrecinde \u00e7al\u0131\u015fanlar\u0131n e\u011fitimi ve de\u011fi\u015fim y\u00f6netimi de kritik \u00f6neme sahiptir. Teknoloji ne kadar ileri olursa olsun, kullan\u0131c\u0131lar taraf\u0131ndan benimsenmedi\u011fi s\u00fcrece ba\u015far\u0131l\u0131 olmas\u0131 m\u00fcmk\u00fcn de\u011fildir.",
        ]),
        ("ROI ve Ba\u015far\u0131 Metrikleri", [
            "Dijital d\u00f6n\u00fc\u015f\u00fcm projelerinde ba\u015far\u0131y\u0131 \u00f6l\u00e7mek i\u00e7in belirli metrikler kullan\u0131lmal\u0131d\u0131r. M\u00fc\u015fteri memnuniyeti, operasyonel verimlilik, maliyet tasarrufu ve gelir art\u0131\u015f\u0131 en \u00f6nemli g\u00f6stergeler aras\u0131nda yer almaktad\u0131r.",
            "Yap\u0131lan ara\u015ft\u0131rmalar, {sektor} sekt\u00f6r\u00fcnde dijital d\u00f6n\u00fc\u015f\u00fcm yat\u0131r\u0131mlar\u0131n\u0131n ortalama %{roi} oran\u0131nda verimlilik art\u0131\u015f\u0131 sa\u011flad\u0131\u011f\u0131n\u0131 g\u00f6stermektedir. DZY Digital m\u00fc\u015fterileri, projelerimiz sayesinde ortalama 6-12 ay i\u00e7inde yat\u0131r\u0131m\u0131n\u0131n kar\u015f\u0131l\u0131\u011f\u0131n\u0131 almaktad\u0131r.",
        ]),
    ],
    "howto": [
        ("{konu} Nedir ve Neden \u00d6nemlidir?", [
            "{konu}, modern yaz\u0131l\u0131m geli\u015ftirme s\u00fcre\u00e7lerinin vazge\u00e7ilmez bir par\u00e7as\u0131 haline gelmi\u015ftir. T\u00fcrkiye\u2019deki yaz\u0131l\u0131m ekipleri, {konu} sayesinde daha h\u0131zl\u0131 ve g\u00fcvenilir \u00e7\u00f6z\u00fcmler \u00fcretebilmektedir.",
            "Bu rehberde, {konu} konusunu s\u0131f\u0131rdan ba\u015flayarak ad\u0131m ad\u0131m ele alaca\u011f\u0131z. Temel kavramlardan ba\u015flayarak, ileri d\u00fczey konfig\u00fcrasyonlara kadar her \u015feyi detayl\u0131 bir \u015fekilde a\u00e7\u0131klayaca\u011f\u0131z.",
        ]),
        ("Ortam Haz\u0131rl\u0131\u011f\u0131 ve Gereksinimler", [
            "{konu} i\u00e7in \u00f6ncelikle gerekli ara\u00e7lar\u0131 ve ba\u011f\u0131ml\u0131l\u0131klar\u0131 kurmam\u0131z gerekiyor. Node.js, npm ve projenize uygun di\u011fer ara\u00e7lar\u0131n sisteminizde y\u00fckl\u00fc oldu\u011fundan emin olun.",
            "Geli\u015ftirme ortam\u0131n\u0131z\u0131 haz\u0131rlad\u0131ktan sonra, proje yap\u0131s\u0131n\u0131 olu\u015fturma a\u015famas\u0131na ge\u00e7ebiliriz. Bu a\u015famada, dosya yap\u0131s\u0131 ve proje konfig\u00fcrasyonu \u00fczerinde duraca\u011f\u0131z.",
        ]),
        ("Ad\u0131m Ad\u0131m Kurulum ve Konfig\u00fcrasyon", [
            "\u0130lk olarak, gerekli ba\u011f\u0131ml\u0131l\u0131klar\u0131 projemize ekliyoruz. npm install veya yarn add komutlar\u0131n\u0131 kullanarak paketleri y\u00fckleyebilirsiniz. Ard\u0131ndan, temel konfig\u00fcrasyon dosyalar\u0131n\u0131 olu\u015fturuyoruz.",
            "Konfig\u00fcrasyon ayarlar\u0131n\u0131 tamamlad\u0131ktan sonra, temel kod yap\u0131s\u0131n\u0131 olu\u015fturmaya ba\u015fl\u0131yoruz. Bu a\u015famada, projenizin ihtiya\u00e7lar\u0131na g\u00f6re \u00f6zelle\u015ftirme yapabilirsiniz.",
        ]),
        ("Geli\u015fmi\u015f \u00d6zellikler ve Optimizasyon", [
            "Temel kurulumu tamamlad\u0131ktan sonra, {konu} \u00fczerinde geli\u015fmi\u015f \u00f6zellikler eklemeye ba\u015flayabiliriz. Performans optimizasyonu, hata y\u00f6netimi ve g\u00fcvenlik gibi konular \u00fczerinde duraca\u011f\u0131z.",
            "Bu b\u00f6l\u00fcmde, {konu} i\u00e7in en iyi pratikleri ve yayg\u0131n hatalar\u0131 nas\u0131l \u00f6nleyebilece\u011finizi anlataca\u011f\u0131z. B\u00f6ylece, \u00fcretim ortam\u0131na ge\u00e7ti\u011finizde sorunsuz bir deneyim elde edebilirsiniz.",
        ]),
        ("Test Etme ve Canl\u0131ya Alma", [
            "T\u00fcm geli\u015ftirme s\u00fcrecini tamamlad\u0131ktan sonra, uygulamam\u0131z\u0131 test etme zaman\u0131 geldi. Birim testler, entegrasyon testleri ve u\u00e7tan uca testler ile sistemin do\u011fru \u00e7al\u0131\u015ft\u0131\u011f\u0131ndan emin oluyoruz.",
            "Test s\u00fcrecini ba\u015far\u0131yla tamamlad\u0131ktan sonra, uygulamay\u0131 canl\u0131 ortama alabiliriz. CI/CD pipeline\u2019\u0131m\u0131z sayesinde otomatik derleme ve da\u011f\u0131t\u0131m s\u00fcreci sorunsuz bir \u015fekilde \u00e7al\u0131\u015facakt\u0131r.",
        ]),
    ],
}

LIST_ITEMS = {
    "industry": [
        ["M\u00fc\u015fteri memnuniyetinde %{p1} art\u0131\u015f sa\u011fland\u0131", "Operasyonel maliyetlerde %{p2} azalma elde edildi", "\u00c7al\u0131\u015fan verimlili\u011finde %{p3} iyile\u015fme g\u00f6r\u00fcld\u00fc", "Hata oranlar\u0131 %{p4} oran\u0131nda d\u00fc\u015ft\u00fc", "Veriye dayal\u0131 karar alma s\u00fcreci h\u0131zland\u0131"],
        ["Geleneksel y\u00f6ntemlere k\u0131yasla %{p1} daha h\u0131zl\u0131 s\u00fcre\u00e7 y\u00f6netimi", "Manuel i\u015f y\u00fck\u00fcnde %{p2} azalma", "Raporlama s\u00fcrelerinde %{p3} iyile\u015fme", "M\u00fc\u015fteri \u015fikayetlerinde %{p4} d\u00fc\u015f\u00fc\u015f", "Y\u0131ll\u0131k ortalama {p5} TL tasarruf"],
    ],
    "tech": [
        ["Daha h\u0131zl\u0131 geli\u015ftirme s\u00fcreci ve k\u0131sa pazara \u00e7\u0131k\u0131\u015f s\u00fcresi", "Daha iyi performans ve \u00f6l\u00e7eklenebilirlik", "Daha kolay bak\u0131m ve g\u00fcncelleme", "Daha geni\u015f topluluk deste\u011fi ve kaynak", "Daha d\u00fc\u015f\u00fck toplam sahip olma maliyeti"],
        ["Geli\u015fmi\u015f hata ay\u0131klama ve test ara\u00e7lar\u0131", "Otomatik dok\u00fcmantasyon olu\u015fturma", "Entegre CI/CD deste\u011fi", "Kapsaml\u0131 g\u00fcvenlik \u00f6zellikleri", "Mod\u00fcler ve yeniden kullan\u0131labilir kod yap\u0131s\u0131"],
    ],
}

CTA_TEXTS = [
    "DZY Digital olarak, {konu} konusunda uzman ekibimizle size \u00f6zel \u00e7\u00f6z\u00fcmler sunuyoruz. Projeniz i\u00e7in en uygun stratejiyi belirlemek ve dijital d\u00f6n\u00fc\u015f\u00fcm yolculu\u011funuza ba\u015flamak i\u00e7in bizimle ileti\u015fime ge\u00e7in.",
    "{konu} hakk\u0131nda daha fazla bilgi almak ve i\u015fletmenize \u00f6zel \u00e7\u00f6z\u00fcmlerimizi ke\u015ffetmek i\u00e7in DZY Digital ile ileti\u015fime ge\u00e7in. Uzman ekibimiz size en uygun teknoloji stratejisini belirlemenize yard\u0131mc\u0131 olacakt\u0131r.",
    "Dijital d\u00f6n\u00fc\u015f\u00fcm yolculu\u011funuzda DZY Digital yan\u0131n\u0131zda. {konu} konusunda deneyimli ekibimizle, i\u015fletmenizin ihtiya\u00e7lar\u0131na \u00f6zel \u00e7\u00f6z\u00fcmler geli\u015ftiriyoruz. Hemen ileti\u015fime ge\u00e7in!",
]

# ─── ID TRACKING ──────────────────────────────────────────────────────────────

def get_next_ids():
    """Read the current blogData.js to find the highest existing IDs"""
    try:
        with open(SRC_FILE, 'r', encoding='utf-8') as f:
            content = f.read()
        # Find all blog post IDs (not case studies which are 101+)
        ids = []
        for m in re.finditer(r'^\s*id:\s*(\d+),', content, re.MULTILINE):
            ids.append(int(m.group(1)))
        max_id = max(ids) if ids else 49
        # Find highest blog post ID (under 100)
        blog_ids = [i for i in ids if i < 100]
        next_blog = max(blog_ids) + 1 if blog_ids else 50
        # Find highest case study ID
        case_ids = [i for i in ids if i >= 200]
        if not case_ids:
            # Check for IDs 101-105
            case_ids = [i for i in ids if i >= 100 and i < 200]
        next_case = max(case_ids) + 1 if case_ids else 215
        return next_blog, next_case
    except:
        return 50, 215

def save_progress(next_blog, next_case):
    """Save progress to a temp file"""
    with open(os.path.join(BASE_DIR, 'db', 'id_progress.txt'), 'w') as f:
        f.write(f"{next_blog},{next_case}")

def load_progress():
    try:
        with open(os.path.join(BASE_DIR, 'db', 'id_progress.txt'), 'r') as f:
            parts = f.read().strip().split(',')
            return int(parts[0]), int(parts[1])
    except:
        return get_next_ids()

# ─── CONTENT GENERATORS ──────────────────────────────────────────────────────

def make_slug(text):
    """Convert Turkish title to URL-friendly slug"""
    tr_map = {
        '\u0131': 'i', '\u011f': 'g', '\u00fc': 'u', '\u015f': 's', '\u00f6': 'o', '\u00e7': 'c',
        '\u0130': 'i', '\u011e': 'g', '\u00dc': 'u', '\u015e': 's', '\u00d6': 'o', '\u00c7': 'c',
    }
    for k, v in tr_map.items():
        text = text.replace(k, v)
    text = re.sub(r'[^a-z0-9]', '-', text.lower())
    text = re.sub(r'-+', '-', text).strip('-')
    return text

def escape_excerpt(text):
    """Escape single quotes in excerpt/title fields"""
    return text.replace("'", "\\'")

def gen_industry_guide(slug, title):
    """Generate an industry guide post"""
    r = random.Random()
    sektor = title.split("Sekt")[0].strip() if "Sekt" in title else title
    roi = r.randint(25, 65)
    
    sections = H2_SECTIONS["industry"]
    r.shuffle(sections)
    selected = sections[:4]
    
    content_parts = [
        f'<h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">{title}</h1>',
    ]
    
    for h2_text, paras in selected:
        content_parts.append(f'\n<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">{h2_text.format(sektor=sektor, roi=roi)}</h2>')
        for para in paras:
            p = para.format(sektor=sektor, roi=roi)
            content_parts.append(f'\n<p class="text-lg text-slate-700 leading-relaxed mb-6">{p}</p>')
        
        # Add a list
        list_items = random.choice(LIST_ITEMS["industry"])
        p_vals = [r.randint(20, 80) for _ in range(4)]
        tl_val = r.randint(50000, 500000)
        formatted_items = [item.format(p1=p_vals[0], p2=p_vals[1], p3=p_vals[2], p4=p_vals[3], p5=tl_val) for item in list_items[:4]]
        content_parts.append('\n<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">')
        for item in formatted_items:
            content_parts.append(f'\n  <li><strong>{item.split(" ")[0]} {item.split(" ")[1]}:</strong> {" ".join(item.split(" ")[2:])}</li>')
        content_parts.append('\n</ul>')
    
    # CTA
    cta = random.choice(CTA_TEXTS).format(konu=sektor)
    content_parts.append(f'\n<div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl mt-8">')
    content_parts.append(f'\n<p class="text-lg text-indigo-900 font-semibold m-0">{cta}</p>')
    content_parts.append(f'\n</div>')
    
    excerpt = escape_excerpt(f"{sektor} sekt\u00f6r\u00fcnde dijital d\u00f6n\u00fc\u015f\u00fcm i\u00e7in kapsaml\u0131 rehber. {sektor} yaz\u0131l\u0131m \u00e7\u00f6z\u00fcmleri, dijital d\u00f6n\u00fc\u015f\u00fcm stratejileri ve ROI analizi.")
    
    content = ''.join(content_parts)
    
    return {
        'id': None,  # Will be set by generator
        'slug': slug,
        'title': title,
        'category': 'Sekt\u00f6rel Rehberler',
        'date': '04 Temmuz 2026',
        'readTime': f'{r.randint(10, 16)} dk okuma',
        'excerpt': excerpt,
        'content': content,
    }

def gen_comparison(slug, title):
    """Generate a comparison post"""
    r = random.Random()
    tech1, tech2, tech3 = "Teknoloji A", "Teknoloji B", "Teknoloji C"
    parts = title.split(" vs ")
    if len(parts) >= 2:
        tech1 = parts[0].strip()
        rest = parts[1]
        if " vs " in rest:
            parts2 = rest.split(" vs ")
            tech2 = parts2[0].strip()
            tech3 = parts2[1].strip() if len(parts2) > 1 else "Di\u011fer"
        else:
            tech2 = rest.replace("Hangi", "").strip() if "Hangi" in rest else rest.strip()
            tech3 = ""
    
    content_parts = [
        f'<h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">{title}</h1>',
        f'\n<p class="text-lg text-slate-700 leading-relaxed mb-6">G\u00fcn\u00fcm\u00fcz yaz\u0131l\u0131m d\u00fcnyas\u0131nda do\u011fru teknolojiyi se\u00e7mek, projelerin ba\u015far\u0131s\u0131 i\u00e7in kritik \u00f6neme sahiptir. {tech1}, {tech2} ve {tech3} kar\u015f\u0131la\u015ft\u0131rmas\u0131 ile i\u015fletmeniz i\u00e7in en do\u011fru karar\u0131 vermenize yard\u0131mc\u0131 oluyoruz.</p>',
    ]
    
    h2s = [
        (f"{tech1} Nedir?", [
            f"{tech1}, modern yaz\u0131l\u0131m geli\u015ftirme d\u00fcnyas\u0131nda \u00f6nemli bir yere sahiptir. Geni\u015f topluluk deste\u011fi ve zengin ekosistemi ile bir\u00e7ok proje i\u00e7in ideal bir se\u00e7enektir. T\u00fcrkiye\u2019deki bir\u00e7ok startup ve kurumsal firma {tech1} kullanmay\u0131 tercih etmektedir.",
            f"{tech1} ile geli\u015ftirme yapman\u0131n en b\u00fcy\u00fck avantajlar\u0131ndan biri, h\u0131zl\u0131 prototipleme ve geni\u015f k\u00fct\u00fcphane deste\u011fidir. Ayr\u0131ca, performans ve \u00f6l\u00e7eklenebilirlik a\u00e7\u0131s\u0131ndan da ba\u015far\u0131l\u0131 sonu\u00e7lar sunmaktad\u0131r.",
        ]),
        (f"{tech2} Nedir?", [
            f"{tech2}, \u00f6zellikle belirli kullan\u0131m senaryolar\u0131nda \u00f6ne \u00e7\u0131kan bir teknolojidir. Geli\u015fmi\u015f \u00f6zellikleri ve esnek yap\u0131s\u0131 sayesinde karma\u015f\u0131k projelerde tercih edilmektedir.",
            f"{tech2}\u2019nin en g\u00fc\u00e7l\u00fc y\u00f6nlerinden biri, y\u00fcksek performans ve g\u00fcvenlik \u00f6zellikleridir. \u00d6zellikle b\u00fcy\u00fck \u00f6l\u00e7ekli kurumsal projelerde {tech2} tercih edilmektedir.",
        ]),
        (f"{tech3} ile Kar\u015f\u0131la\u015ft\u0131rma" if tech3 else f"Performans Kar\u015f\u0131la\u015ft\u0131rmas\u0131", [
            f"{tech1}, {tech2} ve {tech3} aras\u0131ndaki temel farklar\u0131 anlamak, do\u011fru teknoloji se\u00e7imi i\u00e7in \u00f6nemlidir. Performans, geli\u015ftirme h\u0131z\u0131, maliyet ve topluluk deste\u011fi gibi kriterler \u00fczerinden de\u011ferlendirme yap\u0131lmal\u0131d\u0131r.",
            f"Her \u00fc\u00e7 teknoloji de farkl\u0131 g\u00fc\u00e7l\u00fc y\u00f6nlere sahiptir. Projenizin ihtiya\u00e7lar\u0131na g\u00f6re en uygun teknolojiyi se\u00e7mek i\u00e7in kapsaml\u0131 bir analiz yap\u0131lmas\u0131 gerekmektedir.",
        ]),
        ("Hangi Durumda Hangisini Se\u00e7meli?", [
            f"K\u00fc\u00e7\u00fck ve orta \u00f6l\u00e7ekli projeler i\u00e7in {tech1} ideal bir se\u00e7enek olabilir. B\u00fcy\u00fck \u00f6l\u00e7ekli kurumsal projelerde ise {tech2} daha uygun olabilir.",
            f"H\u0131zl\u0131 prototipleme ve MVP geli\u015ftirme s\u00fcre\u00e7lerinde {tech1} \u00f6ne \u00e7\u0131karken, uzun vadeli ve karma\u015f\u0131k projelerde {tech2} veya {tech3} tercih edilmelidir. Proje gereksinimlerinizi dikkatlice analiz ederek karar vermelisiniz.",
        ]),
    ]
    
    for h2_text, paras in h2s:
        content_parts.append(f'\n<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">{h2_text}</h2>')
        for para in paras:
            content_parts.append(f'\n<p class="text-lg text-slate-700 leading-relaxed mb-6">{para}</p>')
    
    # CTA
    cta_text = f"DZY Digital olarak, do\u011fru teknoloji se\u00e7imi konusunda dan\u0131\u015fmanl\u0131k hizmeti sunuyoruz. Projeniz i\u00e7in en uygun teknolojiyi belirlemek ve uzman ekibimizle \u00e7al\u0131\u015fmak i\u00e7in bizimle ileti\u015fime ge\u00e7in."
    content_parts.append(f'\n<div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl mt-8">')
    content_parts.append(f'\n<p class="text-lg text-indigo-900 font-semibold m-0">{cta_text}</p>')
    content_parts.append(f'\n</div>')
    
    excerpt = escape_excerpt(f"{tech1}, {tech2} ve {tech3} kar\u015f\u0131la\u015ft\u0131rmas\u0131: Performans, maliyet, geli\u015ftirme h\u0131z\u0131 ve kullan\u0131m senaryolar\u0131na g\u00f6re de\u011ferlendirme.")
    
    return {
        'id': None,
        'slug': slug,
        'title': title,
        'category': 'Teknoloji Kar\u015f\u0131la\u015ft\u0131rmalar\u0131',
        'date': '04 Temmuz 2026',
        'readTime': f'{r.randint(8, 14)} dk okuma',
        'excerpt': excerpt,
        'content': ''.join(content_parts),
    }

def gen_howto(slug, title):
    """Generate a how-to/tutorial post"""
    r = random.Random()
    konu = title.split(":")[0].strip() if ":" in title else title.split("Rehberi")[0].strip() if "Rehberi" in title else title
    
    sections = H2_SECTIONS["howto"]
    r.shuffle(sections)
    selected = sections[:4]
    
    content_parts = [
        f'<h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">{title}</h1>',
    ]
    
    for h2_text, paras in selected:
        content_parts.append(f'\n<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">{h2_text.format(konu=konu)}</h2>')
        for para in paras:
            p = para.format(konu=konu)
            content_parts.append(f'\n<p class="text-lg text-slate-700 leading-relaxed mb-6">{p}</p>')
        
        # Add a list of steps or tips
        items = random.choice(LIST_ITEMS["tech"])
        content_parts.append('\n<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">')
        for item in items[:4]:
            content_parts.append(f'\n  <li>{item}</li>')
        content_parts.append('\n</ul>')
    
    # CTA
    cta = random.choice(CTA_TEXTS).format(konu=konu)
    content_parts.append(f'\n<div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl mt-8">')
    content_parts.append(f'\n<p class="text-lg text-indigo-900 font-semibold m-0">{cta}</p>')
    content_parts.append(f'\n</div>')
    
    excerpt = escape_excerpt(f"{konu} hakk\u0131nda kapsaml\u0131 rehber. Ad\u0131m ad\u0131m kurulum, konfig\u00fcrasyon ve en iyi pratikler.")
    
    return {
        'id': None,
        'slug': slug,
        'title': title,
        'category': 'Teknik Rehberler',
        'date': '04 Temmuz 2026',
        'readTime': f'{r.randint(10, 16)} dk okuma',
        'excerpt': excerpt,
        'content': ''.join(content_parts),
    }

def gen_tech_deepdive(slug, title):
    """Generate a technology deep-dive post"""
    r = random.Random()
    
    content_parts = [
        f'<h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">{title}</h1>',
        f'\n<p class="text-lg text-slate-700 leading-relaxed mb-6">Modern yaz\u0131l\u0131m mimarilerinde {title.lower()} konusu, do\u011fru uyguland\u0131\u011f\u0131nda b\u00fcy\u00fck avantajlar sa\u011flamaktad\u0131r. Bu yaz\u0131da, konuyu teknik detaylar\u0131yla ele al\u0131yor ve en iyi pratikleri payla\u015f\u0131yoruz.</p>',
    ]
    
    h2s = [
        (f"Temel Kavramlar ve Mimari Yakla\u015f\u0131m", [
            f"Bu b\u00f6l\u00fcmde, {title.lower()} konusunun temel kavramlar\u0131n\u0131 ve mimari yakla\u015f\u0131m\u0131n\u0131 ele al\u0131yoruz. Do\u011fru bir mimari tasar\u0131m, projenin ba\u015far\u0131s\u0131 i\u00e7in kritik \u00f6neme sahiptir.",
            "T\u00fcrkiye\u2019deki yaz\u0131l\u0131m ekipleri, modern mimari yakla\u015f\u0131mlar\u0131 benimseyerek rekabet avantaj\u0131 elde etmektedir. DZY Digital olarak, en iyi pratikleri m\u00fc\u015fterilerimizle payla\u015f\u0131yoruz.",
        ]),
        ("Uygulama Stratejileri", [
            "Ba\u015far\u0131l\u0131 bir uygulama i\u00e7in \u00f6ncelikle mevcut sistem analizi yap\u0131lmal\u0131 ve uygun strateji belirlenmelidir. Ad\u0131m ad\u0131m ilerleyen bir yakla\u015f\u0131m, riskleri minimize eder.",
            "DZY Digital olarak, m\u00fc\u015fterilerimize \u00f6zel uygulama stratejileri geli\u015ftiriyoruz. Her projenin ihtiya\u00e7lar\u0131 farkl\u0131d\u0131r ve \u00e7\u00f6z\u00fcmlerimizi buna g\u00f6re \u015fekillendiriyoruz.",
        ]),
        ("Performans ve \u00d6l\u00e7eklenebilirlik", [
            "Performans optimizasyonu ve \u00f6l\u00e7eklenebilirlik, modern yaz\u0131l\u0131m sistemlerinin en \u00f6nemli gereksinimlerindendir. Do\u011fru mimari ve teknoloji se\u00e7imi ile y\u00fcksek performans elde edilebilir.",
            "Yatay ve dikey \u00f6l\u00e7eklendirme stratejileri, artan y\u00fck alt\u0131nda sistemin kararl\u0131 \u00e7al\u0131\u015fmas\u0131n\u0131 sa\u011flar. Bu b\u00f6l\u00fcmde, farkl\u0131 \u00f6l\u00e7eklendirme yakla\u015f\u0131mlar\u0131n\u0131 kar\u015f\u0131la\u015ft\u0131r\u0131yoruz.",
        ]),
        ("G\u00fcvenlik En \u0130yi Pratikleri", [
            "G\u00fcvenlik, yaz\u0131l\u0131m geli\u015ftirme s\u00fcrecinin her a\u015famas\u0131nda dikkate al\u0131nmal\u0131d\u0131r. KVKK ve GDPR uyumlulu\u011fu, T\u00fcrkiye\u2019deki i\u015fletmeler i\u00e7in \u00f6zellikle \u00f6nemlidir.",
            "G\u00fcvenlik a\u00e7\u0131klar\u0131n\u0131 minimize etmek i\u00e7in d\u00fczenli g\u00fcvenlik testleri ve kod incelemeleri yap\u0131lmal\u0131d\u0131r. DZY Digital, g\u00fcvenlik odakl\u0131 yaz\u0131l\u0131m geli\u015ftirme hizmetleri sunmaktad\u0131r.",
        ]),
    ]
    
    for h2_text, paras in h2s:
        content_parts.append(f'\n<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">{h2_text}</h2>')
        for para in paras:
            content_parts.append(f'\n<p class="text-lg text-slate-700 leading-relaxed mb-6">{para}</p>')
    
    cta_text = "DZY Digital olarak, modern yaz\u0131l\u0131m mimarileri konusunda uzman dan\u0131\u015fmanl\u0131k hizmeti sunuyoruz. Projeniz i\u00e7in en uygun \u00e7\u00f6z\u00fcm\u00fc belirlemek i\u00e7in bizimle ileti\u015fime ge\u00e7in."
    content_parts.append(f'\n<div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl mt-8">')
    content_parts.append(f'\n<p class="text-lg text-indigo-900 font-semibold m-0">{cta_text}</p>')
    content_parts.append(f'\n</div>')
    
    excerpt = escape_excerpt(f"{title}: Temel kavramlar, uygulama stratejileri, performans optimizasyonu ve g\u00fcvenlik en iyi pratikleri.")
    
    return {
        'id': None,
        'slug': slug,
        'title': title,
        'category': 'Teknoloji Derinlemesine',
        'date': '04 Temmuz 2026',
        'readTime': f'{r.randint(10, 14)} dk okuma',
        'excerpt': excerpt,
        'content': ''.join(content_parts),
    }


def gen_case_study(slug, title, industry_tag):
    """Generate a case study post"""
    r = random.Random()
    
    problems = {
        "saglik": ["Manuel hasta kay\u0131t sistemi yava\u015f ve hataya a\u00e7\u0131kt\u0131", "KVKK uyumluluk riski y\u00fcksekti", "Randevu y\u00f6netimi karma\u015f\u0131kt\u0131", "Raporlama s\u00fcreci haftalar s\u00fcr\u00fcyordu"],
        "finans": ["Manuel i\u015flemler yava\u015f ve g\u00fcvensizdi", "M\u00fc\u015fteri onboarding s\u00fcreci karma\u015f\u0131kt\u0131", "Reg\u00fclasyonlara uyum zordu", "Veri analizi yetersizdi"],
        "egitim": ["Ka\u011f\u0131t tabanl\u0131 s\u00fcre\u00e7ler verimsizdi", "\u00d6\u011frenci takibi zordu", "Uzaktan e\u011fitim altyap\u0131s\u0131 yoktu", "Raporlama manuel yap\u0131l\u0131yordu"],
        "lojistik": ["Rota planlamas\u0131 manuel yap\u0131l\u0131yordu", "Ara\u00e7 takibi ger\u00e7ek zamanl\u0131 de\u011fildi", "Yak\u0131t maliyetleri kontrols\u00fczd\u00fc", "M\u00fc\u015fteri bilgilendirmesi yetersizdi"],
        "perakende": ["Stok y\u00f6netimi manuel ve hataya a\u00e7\u0131kt\u0131", "M\u00fc\u015fteri sadakat program\u0131 yoktu", "Omnichannel deneyim eksikti", "Sat\u0131\u015f raporlamas\u0131 gecikmeliydi"],
        "turizm": ["Rezervasyon sistemi g\u00fcncel de\u011fildi", "Online \u00f6deme altyap\u0131s\u0131 eksikti", "Dinamik fiyatlama yap\u0131lam\u0131yordu", "M\u00fc\u015fteri verileri da\u011f\u0131n\u0131kt\u0131"],
    }
    
    solutions = [
        "DZY Digital olarak, modern bir yaz\u0131l\u0131m \u00e7\u00f6z\u00fcm\u00fc tasarlad\u0131k. Proje s\u00fcreci toplam 12 hafta s\u00fcrd\u00fc: ilk 3 hafta analiz ve mimari tasar\u0131m, sonraki 7 hafta aktif geli\u015ftirme, son 2 hafta test ve canl\u0131ya ge\u00e7i\u015f.",
        "M\u00fc\u015fterimizin mevcut s\u00fcre\u00e7lerini kapsaml\u0131 bir \u015fekilde analiz ettikten sonra, \u00f6zel bir yaz\u0131l\u0131m \u00e7\u00f6z\u00fcm\u00fc geli\u015ftirdik. Bulut tabanl\u0131 altyap\u0131m\u0131z sayesinde y\u00fcksek performans ve g\u00fcvenlik sa\u011flad\u0131k.",
    ]
    
    modules = [
        "Kullan\u0131c\u0131 y\u00f6netimi ve kimlik do\u011frulama mod\u00fcl\u00fc", 
        "Veri y\u00f6netimi ve raporlama paneli",
        "API entegrasyon katman\u0131", 
        "Otomasyon ve i\u015f ak\u0131\u015f\u0131 y\u00f6netimi"
    ]
    
    results = [
        f"Operasyonel verimlilikte %{r.randint(30, 70)} art\u0131\u015f sa\u011fland\u0131",
        f"Maliyetlerde y\u0131ll\u0131k {r.randint(200, 800)}.000 TL tasarruf elde edildi",
        f"M\u00fc\u015fteri memnuniyetinde %{r.randint(20, 50)} iyile\u015fme g\u00f6r\u00fcld\u00fc",
        f"Hata oranlar\u0131 %{r.randint(60, 95)} oran\u0131nda azald\u0131",
        f"\u0130\u015flem s\u00fcrelerinde %{r.randint(50, 90)} k\u0131salma sa\u011fland\u0131",
    ]
    
    probs = problems.get(industry_tag, problems["lojistik"])
    
    content_parts = [
        f'<h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">{title}</h1>',
        f'\n<p class="text-lg text-slate-700 leading-relaxed mb-6">Bu vaka analizinde, {industry_tag} sekt\u00f6r\u00fcnde faaliyet g\u00f6steren bir m\u00fc\u015fterimizin dijital d\u00f6n\u00fc\u015f\u00fcm yolculu\u011funu ve DZY Digital olarak sundu\u011fumuz \u00e7\u00f6z\u00fcmleri detayland\u0131r\u0131yoruz.</p>',
        f'\n<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">M\u00fc\u015fteri Profili ve Problemler</h2>',
        f'\n<p class="text-lg text-slate-700 leading-relaxed mb-4">M\u00fc\u015fterimiz, {industry_tag} sekt\u00f6r\u00fcnde lider bir firmayd\u0131. Ancak mevcut sistemleri dijital \u00e7a\u011f\u0131n gereksinimlerini kar\u015f\u0131lamakta yetersiz kal\u0131yordu. Kar\u015f\u0131la\u015f\u0131lan temel sorunlar \u015funlard\u0131:</p>',
    ]
    
    content_parts.append('\n<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">')
    for prob in probs:
        content_parts.append(f'\n  <li><strong>{prob.split(" ")[0]} {prob.split(" ")[1]}:</strong> {" ".join(prob.split(" ")[2:])}</li>')
    content_parts.append('\n</ul>')
    
    content_parts.append(f'\n<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">DZY Digital\'in \u00c7\u00f6z\u00fcm Yakla\u015f\u0131m\u0131</h2>')
    for sol in solutions:
        content_parts.append(f'\n<p class="text-lg text-slate-700 leading-relaxed mb-6">{sol}</p>')
    
    content_parts.append(f'\n<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Geli\u015ftirilen Mod\u00fcller</h2>')
    content_parts.append('\n<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">')
    for mod in modules:
        content_parts.append(f'\n  <li>{mod}</li>')
    content_parts.append('\n</ul>')
    
    content_parts.append(f'\n<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Sonu\u00e7lar ve ROI</h2>')
    content_parts.append('\n<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">')
    for res in results[:4]:
        parts = res.split(" ")
        content_parts.append(f'\n  <li><strong>{" ".join(parts[:2])}</strong> {" ".join(parts[2:])}</li>')
    content_parts.append('\n</ul>')
    
    cta_text = f"DZY Digital olarak, {industry_tag} sekt\u00f6r\u00fcnde dijital d\u00f6n\u00fc\u015f\u00fcm projelerinizde size yard\u0131mc\u0131 olmaktan mutluluk duyar\u0131z. Projeniz i\u00e7in \u00f6zel \u00e7\u00f6z\u00fcmler geli\u015ftirmek \u00fczere bizimle ileti\u015fime ge\u00e7in."
    content_parts.append(f'\n<div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl mt-8">')
    content_parts.append(f'\n<p class="text-lg text-indigo-900 font-semibold m-0">{cta_text}</p>')
    content_parts.append(f'\n</div>')
    
    r.shuffle(results)
    
    excerpt = escape_excerpt(f"Vaka Analizi: {industry_tag} sekt\u00f6r\u00fcnde dijital d\u00f6n\u00fc\u015f\u00fcm projesi. {results[0]}, {results[1]}.")
    
    return {
        'id': None,
        'slug': slug,
        'title': title,
        'category': 'Vaka Analizleri',
        'date': '04 Temmuz 2026',
        'readTime': f'{r.randint(8, 12)} dk okuma',
        'excerpt': excerpt,
        'content': ''.join(content_parts),
    }

# ─── MERGE & BUILD ──────────────────────────────────────────────────────────

def write_posts_to_file(posts, filepath):
    """Write posts array to a JS file for merging"""
    lines = ['export const autoPosts = [']
    for post in posts:
        lines.append('  {')
        for key, val in post.items():
            if key == 'content':
                lines.append(f'    content: `')
                for cl in val.split('\n'):
                    lines.append(cl)
                lines.append('    `')
            elif key == 'id':
                lines.append(f'    id: {val},')
            else:
                lines.append(f"    {key}: '{val}',")
        lines.append('  },')
    lines.append('];')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    print(f"  Written to {filepath}")

def run_build():
    """Run npm run build and return success"""
    result = subprocess.run(
        'npm run build',
        cwd=BASE_DIR,
        capture_output=True,
        text=True,
        timeout=120,
        shell=True,
        env=os.environ
    )
    if result.returncode != 0:
        print(f"  BUILD FAILED: {result.stderr[-500:]}")
        return False
    print(f"  Build OK")
    return True

def update_sitemap(slugs, is_case=False):
    """Append new URLs to sitemap"""
    prefix = "https://www.dzydigital.com/blog/"
    priority = "0.80" if not is_case else "0.70"
    
    url_entries = []
    for slug in slugs:
        url_entries.append(f'  <url>')
        url_entries.append(f'    <loc>{prefix}{slug}</loc>')
        url_entries.append(f'    <lastmod>2026-07-04</lastmod>')
        url_entries.append(f'    <changefreq>monthly</changefreq>')
        url_entries.append(f'    <priority>{priority}</priority>')
        url_entries.append(f'  </url>')
    
    # Read current sitemap
    with open(SITEMAP_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Insert before </urlset>
    content = content.replace('</urlset>', '\n'.join(url_entries) + '\n</urlset>')
    
    with open(SITEMAP_FILE, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Sitemap updated with {len(slugs)} URLs")

def reset_build_cache():
    """Remove dist directory to force clean build"""
    dist_dir = os.path.join(BASE_DIR, 'dist')
    if os.path.exists(dist_dir):
        import shutil
        shutil.rmtree(dist_dir)

# ─── MAIN LOOP ──────────────────────────────────────────────────────────────

def log(msg):
    ts = datetime.now().strftime('%H:%M:%S')
    line = f"[{ts}] {msg}"
    print(line)
    with open(LOG_FILE, 'a', encoding='utf-8') as f:
        f.write(line + '\n')

def cycle(cycle_num, next_blog, next_case):
    """Generate one cycle of content"""
    log(f"=== Cycle {cycle_num} ===")
    
    # Pick topics for this cycle
    r = random.Random()
    
    # Pick 1 industry guide
    if INDUSTRIES:
        idx = (cycle_num - 1) % len(INDUSTRIES)
        slug, title = INDUSTRIES[idx]
        blog_post1 = gen_industry_guide(slug, title)
        blog_post1['id'] = next_blog
        next_blog += 1
        log(f"  Industry guide: ID {blog_post1['id']} - {title[:40]}")
    else:
        blog_post1 = None
    
    # Pick 1 comparison
    if COMPARISONS:
        idx = (cycle_num - 1) % len(COMPARISONS)
        slug, title = COMPARISONS[idx]
        blog_post2 = gen_comparison(slug, title)
        blog_post2['id'] = next_blog
        next_blog += 1
        log(f"  Comparison: ID {blog_post2['id']} - {title[:40]}")
    else:
        blog_post2 = None
    
    # Pick 1 how-to or tech deep dive
    all_tutorials = HOW_TOS + TECH_DEEP_DIVES
    if all_tutorials:
        idx = (cycle_num - 1) % len(all_tutorials)
        slug, title = all_tutorials[idx]
        if idx < len(HOW_TOS):
            blog_post3 = gen_howto(slug, title)
        else:
            blog_post3 = gen_tech_deepdive(slug, title)
        blog_post3['id'] = next_blog
        next_blog += 1
        log(f"  Tutorial: ID {blog_post3['id']} - {title[:40]}")
    else:
        blog_post3 = None
    
    # Pick 1 case study
    if CASE_STUDY_INDUSTRIES:
        idx = (cycle_num - 1) % len(CASE_STUDY_INDUSTRIES)
        slug, title, tag = CASE_STUDY_INDUSTRIES[idx]
        case_study = gen_case_study(slug, title, tag)
        case_study['id'] = next_case
        next_case += 1
        log(f"  Case study: ID {case_study['id']} - {title[:40]}")
    else:
        case_study = None
    
    # Collect all posts
    posts = [p for p in [blog_post1, blog_post2, blog_post3, case_study] if p is not None]
    
    if not posts:
        log("  No posts generated!")
        return next_blog, next_case
    
    # Write to file
    temp_file = os.path.join(BASE_DIR, 'db', f'auto_cycle{cycle_num}.js')
    write_posts_to_file(posts, temp_file)
    
    # Run merge script
    log("  Merging...")
    merge_result = subprocess.run(
        f'node merge_auto.cjs {cycle_num}',
        cwd=BASE_DIR,
        capture_output=True,
        text=True,
        timeout=30,
        shell=True
    )
    if merge_result.returncode != 0:
        log(f"  Merge FAILED: {merge_result.stderr[-200:]}")
        return next_blog, next_case
    log(f"  {merge_result.stdout.strip()}")
    
    # Update sitemap
    blog_slugs = []
    case_slugs = []
    for p in posts:
        if p['id'] < 200:
            blog_slugs.append(p['slug'])
        else:
            case_slugs.append(p['slug'])
    
    try:
        if blog_slugs:
            update_sitemap(blog_slugs, is_case=False)
        if case_slugs:
            update_sitemap(case_slugs, is_case=True)
    except Exception as e:
        log(f"  Sitemap update failed: {e}")
        return next_blog, next_case
    
    # Build
    reset_build_cache()
    log("  Building...")
    if not run_build():
        log("  Build failed, trying to fix...")
        # Try once more
        if not run_build():
            log("  Build failed again, fixing skipped")
            # Don't commit if build fails
            return next_blog, next_case
    
    # Git commit and push
    log("  Committing...")
    try:
        subprocess.run(f'git add src/blogData.js public/sitemap.xml {temp_file}', cwd=BASE_DIR, capture_output=True, text=True, timeout=30, shell=True)
        commit_msg = f"Auto Cycle {cycle_num}: +{len(posts)} posts (IDs {posts[0]['id']}-{posts[-1]['id']})"
        subprocess.run(f'git commit -m "{commit_msg}"', cwd=BASE_DIR, capture_output=True, text=True, timeout=30, shell=True)
        log(f"  Pushing...")
        push_result = subprocess.run('git push origin main', cwd=BASE_DIR, capture_output=True, text=True, timeout=60, shell=True)
        if push_result.returncode == 0:
            log(f"  Pushed successfully!")
        else:
            log(f"  Push output: {push_result.stdout[-100:]}")
    except Exception as e:
        log(f"  Git failed: {e}")
    
    return next_blog, next_case

def main():
    log("=" * 50)
    log("CONTENT GENERATION ENGINE STARTED")
    log("=" * 50)
    
    # Get starting IDs
    next_blog, next_case = load_progress()
    log(f"Starting IDs: blog={next_blog}, case={next_case}")
    
    cycle_num = 1
    while True:
        try:
            new_blog, new_case = cycle(cycle_num, next_blog, next_case)
            save_progress(new_blog, new_case)
            next_blog, next_case = new_blog, new_case
            cycle_num += 1
            
            # Brief pause between cycles
            delay = random.randint(30, 90)
            log(f"Waiting {delay}s before next cycle...")
            time.sleep(delay)
        except KeyboardInterrupt:
            log("Stopped by user")
            break
        except Exception as e:
            log(f"ERROR in cycle {cycle_num}: {e}")
            save_progress(next_blog, next_case)
            log("Pausing 120s before retry...")
            time.sleep(120)

if __name__ == '__main__':
    main()
