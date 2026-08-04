import sys

filename = r'c:\Users\Deniz\Desktop\Projeler\Kodingselling-vercel-vercel-web-analytics-integrati-1ycm3n\src\App.jsx'
with open(filename, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    ('"+90-555-208-3092"', '"+32-475-940-656"'),
    ('"latitude": "38.3850"', '"latitude": "51.2094"'),
    ('"longitude": "27.1720"', '"longitude": "4.3953"'),
    ('"availableLanguage": ["Turkish", "English"]', '"availableLanguage": ["Dutch", "English", "Turkish"]'),
    ('"name": "Türkiye"', '"name": "België"'),
    ('"name": "Sektörel Dijital Dönüşüm Çözümleri"', '"name": "Sectorale Digitale Transformatie Oplossingen"'),
    ('"name": "Lojistik ve Filo Yönetimi"', '"name": "Logistiek en Vlootbeheer"'),
    ('"name": "SaaS Platformları"', '"name": "SaaS Platformen"'),
    ('"name": "Akademik Dijital Arşiv Sistemleri"', '"name": "Academische Digitale Archiefsystemen"'),
    ('"name": "Sektörel Çözümler"', '"name": "Sectoroplossingen"'),
    ('"name": "DZY Digital Hakkında"', '"name": "Over DZY Digital"'),
    ('"name": "İletişim"', '"name": "Contact"'),
    ('"name": "DZY Digital Bilgi Bankası"', '"name": "DZY Digital Kennisbank"'),
    ('"name": "Lojistik"', '"name": "Logistiek"'),
    ('"name": "Akademik"', '"name": "Academisch"'),
    ('"name": "Mobiele en Web Applicaties Geliştirme"', '"name": "Ontwikkeling van Mobiele en Web Applicaties"'),
    ('"description": "iOS ve Android için native ve çapraz platform mobil uygulamalar, responsive web siteleri ve PWA çözümleri."', '"description": "Native en cross-platform mobiele applicaties voor iOS en Android, responsive websites en PWA-oplossingen."'),
    ('"name": "SaaS Platform Geliştirme"', '"name": "SaaS Platform Ontwikkeling"'),
    ('"description": "Abonelik bazlı SaaS ürünleriniz için çoklu kiracılı, güvenli ve ölçeklenebilir bulut altyapıları."', '"description": "Multi-tenant, veilige en schaalbare cloudinfrastructuren voor uw abonnementsgebaseerde SaaS-producten."'),
    ('"description": "Araştırma verileri, numune yönetimi ve güvenli paylaşım için kurumlara özel dijital arşiv çözümleri."', '"description": "Digitale archiefoplossingen op maat voor instellingen, voor onderzoeksgegevens, monsterbeheer en veilig delen."'),
    ('"name": "B2B E-Ticaret Sistemleri"', '"name": "B2B E-commerce Systemen"'),
    ('"description": "Kapalı devre bayi siparişleri ve çok satıcılı e-ticaret (marketplace) altyapıları."', '"description": "Gesloten dealer bestelsystemen en multi-vendor e-commerce (marketplace) infrastructuren."'),
    ('"description": "Üretim bandından anlık veri alarak fire oranlarını azaltan ERP çözümleri."', '"description": "ERP-oplossingen die het uitvalpercentage verlagen door real-time gegevens van de productielijn te ontvangen."'),
    ('"name": "Sağlık ve Hastane Bilgi Sistemleri"', '"name": "Gezondheids- en Ziekenhuisinformatiesystemen"'),
    ('"description": "Klinik ve hastaneler için randevu takibi ve dijital arşiv sağlayan otomasyonlar."', '"description": "Automatiseringen voor klinieken en ziekenhuizen die afspraakbeheer en digitale archivering bieden."'),
    ('"name": "Eğitim ve LMS Platformları"', '"name": "Onderwijs- en LMS-platforms"'),
    ('"description": "Okullar için veli bilgilendirme, sınav analizi ve e-öğrenme odaklı eğitim yönetim portalları."', '"description": "Onderwijsbeheerportalen voor scholen gericht op ouderinformatie, examenanalyse en e-learning."'),
    ('"name": "Finans Teknolojileri (FinTech)"', '"name": "Financiële Technologieën (FinTech)"'),
    ('"description": "Banka entegrasyonları, cüzdan sistemleri ve açık bankacılık çözümleri."', '"description": "Bankintegraties, portemonneesystemen en open banking-oplossingen."'),
    ('"description": "Emlak portföy yönetimi ve akıllı bina yönetim sistemleri."', '"description": "Vastgoedportefeuillebeheer en slimme gebouwbeheersystemen."'),
    ('"name": "Enerji ve Akıllı Şehir Sistemleri"', '"name": "Energie- en Smart City-systemen"'),
    ('"name": "Tarım Teknolojileri (AgriTech)"', '"name": "Landbouwtechnologieën (AgriTech)"'),
    ('"description": "Sera otomasyonu ve sensör bazlı akıllı sulama sistemleri."', '"description": "Kasautomatisering en sensorgebaseerde slimme irrigatiesystemen."'),
    ("title: 'Lojistik ve Filo Yönetimi Çözümleri | DZY Digital'", "title: 'Logistiek en Vlootbeheer Oplossingen | DZY Digital'"),
    ("description: 'GPS filo takibi, akıllı rota optimizasyonu ve gümrük belge otomasyonu ile lojistik operasyonlarınızı dijitalleştirin.'", "description: 'Digitaliseer uw logistieke operaties met GPS vloottracking, slimme route-optimalisatie en automatisering van douanedocumenten.'"),
    ("title: 'SaaS ve Platform Ürün Geliştirme | DZY Digital'", "title: 'SaaS en Platform Productontwikkeling | DZY Digital'"),
    ("description: 'Multi-tenant SaaS altyapısı, Stripe abonelik entegrasyonu ve ölçeklenebilir bulut mimarisi ile ürününüzü pazara taşıyın.'", "description: 'Breng uw product op de markt met multi-tenant SaaS-infrastructuur, Stripe-abonnementsintegratie en schaalbare cloudarchitectuur.'"),
    ("title: 'Akademik ve Bilimsel Dijital Arşiv Sistemleri | DZY Digital'", "title: 'Academische en Wetenschappelijke Digitale Archiefsystemen | DZY Digital'"),
    ("description: 'KVKK uyumlu bilimsel veri arşivi, Dublin Core entegrasyonu ve güvenli akademik veri paylaşım altyapıları geliştirme.'", "description: 'Ontwikkeling van GDPR-conforme wetenschappelijke data-archieven, Dublin Core integratie en veilige academische data-uitwisselingsinfrastructuren.'"),
    ("title: 'B2B E-Ticaret ve Pazaryeri Sistemleri | DZY Digital'", "title: 'B2B E-commerce en Marktplaatssystemen | DZY Digital'"),
    ("description: 'Bayi ağınızı yönetin, tahsilatları ve B2B siparişleri otomatize edin. Özelleştirilebilir pazaryeri ve e-ticaret altyapıları.'", "description: 'Beheer uw dealernetwerk, automatiseer incasso en B2B-bestellingen. Aanpasbare marktplaats- en e-commerce infrastructuren.'"),
    ("title: 'Endüstriyel Üretim Takip ve ERP Sistemleri | DZY Digital'", "title: 'Industriële Productie Tracking en ERP Systemen | DZY Digital'"),
    ("description: 'Fabrikanızdaki makinelerden canlı veri alın, üretim süreçlerinizi dijitalleştirin. Modern ve esnek ERP altyapıları.'", "description: 'Ontvang live data van machines in uw fabriek en digitaliseer uw productieprocessen. Moderne en flexibele ERP-infrastructuren.'"),
    ("title: 'Sağlık, Klinik ve Hastane Bilgi Sistemleri (HBS) | DZY Digital'", "title: 'Gezondheid, Kliniek en Ziekenhuisinformatiesystemen (HIS) | DZY Digital'"),
    ("description: 'KVKK uyumlu hasta kayıt portalı, randevu takip modülü ve e-reçete entegreli yeni nesil hastane yönetim programları.'", "description: 'GDPR-conforme patiëntregistratieportalen, afspraakbeheermodules en e-receptintegratie voor next-gen ziekenhuisbeheerprogrammas.'"),
    ("title: 'Okul, K-12 ve Eğitim Portalları (LMS) | DZY Digital'", "title: 'School, K-12 en Onderwijsportalen (LMS) | DZY Digital'"),
    ("description: 'Online sınav analizi, veli bilgilendirme sistemi ve e-öğrenme modüllerini tek bir çatıda toplayan okul yönetim altyapıları.'", "description: 'Schoolbeheerinfrastructuren die online examenanalyse, ouderinformatiesystemen en e-learningmodules onder één dak brengen.'"),
    ("title: 'Finans Teknolojileri ve Açık Bankacılık | DZY Digital'", "title: 'Financiële Technologieën en Open Banking | DZY Digital'"),
    ("description: 'Dijital cüzdan, açık bankacılık regülasyonlarına uyumlu API ve ödeme geçidi çözümleri.'", "description: 'Digitale portemonnee, API conform open banking regelgeving en payment gateway-oplossingen.'"),
    ("title: 'Gayrimenkul ve PropTech Sistemleri | DZY Digital'", "title: 'Vastgoed en PropTech Systemen | DZY Digital'"),
    ("title: 'Akıllı Şehir ve Enerji Otomasyonları | DZY Digital'", "title: 'Smart City en Energie Automatisering | DZY Digital'"),
    ("title: 'Tarım Teknolojileri ve Agrotech | DZY Digital'", "title: 'Landbouwtechnologieën en Agrotech | DZY Digital'"),
    ("title: 'Perakende ve Mağazacılık (POS) Sistemleri | DZY Digital'", "title: 'Retail en Winkel (POS) Systemen | DZY Digital'"),
    ("description: 'Çok şubeli perakende zincirleri için bulut POS, stok yönetimi, crm ve müşteri sadakat programları.'", "description: 'Cloud POS, voorraadbeheer, CRM en klantloyaliteitsprogrammas voor retailketens met meerdere vestigingen.'"),
    ("title: 'İletişim | Projenizi Başlatın ve Teknoloji Danışmanlığı Alın - DZY Digital'", "title: 'Contact | Start uw Project en Ontvang Technologieadvies - DZY Digital'"),
    ("title: 'Sectorspecifieke Softwareoplossingen | Lojistik, SaaS ve Akademik Sistemler - DZY Digital'", "title: 'Sectorspecifieke Softwareoplossingen | Logistiek, SaaS en Academische Systemen - DZY Digital'"),
    ('"name": "SaaS Geliştirme"', '"name": "SaaS Ontwikkeling"'),
    ('"serviceType": "SaaS Geliştirme"', '"serviceType": "SaaS Ontwikkeling"')
]

for old, new in replacements:
    content = content.replace(old, new)

with open(filename, 'w', encoding='utf-8') as f:
    f.write(content)

print('Replacements done.')
