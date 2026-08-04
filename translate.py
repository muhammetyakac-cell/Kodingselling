import io

# We will read the source file, and do simple string replacements.

replacements = [
    (
        "'Hem telefonlarda hem de bilgisayarlarda kusursuz çalışan kullanıcı dostu arayüzler.'",
        "'Gebruiksvriendelijke interfaces die naadloos werken op zowel telefoons als computers.'"
    ),
    (
        "'İşletmenizin dijital dünyadaki yüzünü baştan tasarlıyoruz. Uygulamalarınızın hem bilgisayar tarayıcılarında (Web) hem de mobil cihazlarda (iOS ve Android) tek bir modern altyapı üzerinden sorunsuz çalışmasını sağlıyoruz. Gebruiker dostu arayüzler (UI), akıcı deneyim (UX) ve yüksek performans odaklı kodlama standartlarımız ile markanızın dijital etkileşim oranlarını artırıyoruz. Her ekran boyutuna tam uyumlu (responsive) ve arama motoru dostu platformlar teslim ediyoruz.'",
        "'Wij herontwerpen het digitale gezicht van uw bedrijf. We zorgen ervoor dat uw applicaties naadloos werken op zowel webbrowsers (Web) als mobiele apparaten (iOS en Android) via één moderne infrastructuur. Met gebruiksvriendelijke interfaces (UI), een vloeiende gebruikerservaring (UX) en prestatiegerichte coderingsstandaarden verhogen we de digitale interactieratio\\'s van uw merk. We leveren volledig responsieve en zoekmachinevriendelijke platformen.'"
    ),
    (
        "'İnternetten güvenle ödeme almanızı sağlayan dijital cüzdan ve abonelik altyapıları.'",
        "'Digitale portemonnee- en abonnementeninfrastructuren waarmee u veilig online betalingen kunt ontvangen.'"
    ),
    (
        "'Nakit akışınızı ve tahsilat süreçlerinizi tamamen dijitalleştirip otomatikleştiriyoruz. E-ticaret siteniz veya uygulamanız için sanal POS (Stripe, Iyzico vb.), kredi kartı entegrasyonları, tekrarlayan abonelik modelleri ve dijital cüzdan sistemleri kuruyoruz.'",
        "'Wij digitaliseren en automatiseren uw cashflow en incassoprocessen volledig. We zetten virtuele POS (Stripe, Iyzico etc.), creditcardintegraties, terugkerende abonnementsmodellen en digitale portemonneesystemen op voor uw e-commerce website of applicatie.'"
    ),
    (
        "'Siparişleri, personeli ve işleyişi anlık olarak izleyebileceğiniz yönetici ekranları.'",
        "'Beheerdersdashboards waarmee u bestellingen, personeel en activiteiten real-time kunt volgen.'"
    ),
    (
        "'Sipariş durumu, personel konumu ve satış verileri gibi operasyonları gerçek zamanlı yansıtan özel admin panelleri geliştiriyoruz.'",
        "'Wij ontwikkelen op maat gemaakte adminpanelen die operaties zoals bestelstatus, personeelslocatie en verkoopgegevens in real-time weergeven.'"
    ),
    (
        "'Müşteri verilerinizi ve ticari sırlarınızı siber saldırılara karşı koruyan bulut sistemleri.'",
        "'Cloudsystemen die uw klantgegevens en bedrijfsgeheimen beschermen tegen cyberaanvallen.'"
    ),
    (
        "'Row Level Security (RLS) ile kullanıcıların yalnızca yetkili olduğu verilere erişmesini sağlıyor, KVKK/GDPR uyumlu altyapılar kuruyoruz.'",
        "'Met Row Level Security (RLS) zorgen we ervoor dat gebruikers alleen toegang hebben tot geautoriseerde gegevens en bouwen we GDPR-conforme infrastructuren.'"
    ),
    (
        "'Fiziksel dünyadaki cihazları ve sensörleri internete bağlayan teknolojik sistemler.'",
        "'Technologische systemen die fysieke apparaten en sensoren met het internet verbinden.'"
    ),
    (
        "'ESP32/Arduino tabanlı IoT altyapıları ile sahadan gelen verileri buluta aktararak canlı izleme ve otomasyon sağlıyoruz.'",
        "'Met op ESP32/Arduino gebaseerde IoT-infrastructuren brengen we veldgegevens over naar de cloud voor live monitoring en automatisering.'"
    ),
    (
        "'Sadece tek bilgisayarda çalışan yavaş ve eski yazılımlarınızı modern buluta taşıyoruz.'",
        "'We migreren uw trage en verouderde software, die slechts op één computer draait, naar de moderne cloud.'"
    ),
    (
        "'Legacy sistemlerinizi veri kaybı yaşamadan modern, güvenli ve her cihazdan erişilebilen bulut tabanlı yapılara dönüştürüyoruz.'",
        "'We transformeren uw legacy-systemen naar moderne, veilige en cloudgebaseerde structuren die toegankelijk zijn vanaf elk apparaat, zonder gegevensverlies.'"
    ),
    (
        "'Şirketinize teknoloji kararlarında yol gösteren uzman yazılım danışmanlığı.'",
        "'Deskundig softwareadvies dat uw bedrijf begeleidt bij technologische beslissingen.'"
    ),
    (
        "'Dışarıdan CTO modeliyle teknolojik kararlarınızı, altyapı planlarınızı ve yazılım kalitesini yönetmenize destek oluyoruz.'",
        "'Met een extern CTO-model ondersteunen we u bij het beheren van uw technologische beslissingen, infrastructuurplannen en softwarekwaliteit.'"
    ),
    (
        "'Piyasadaki hazır paketler yerine, tamamen işinize özel tasarlanmış otomasyonlar.'",
        "'Volledig op maat gemaakte automatiseringen, in plaats van standaardpakketten op de markt.'"
    ),
    (
        "'ERP/CRM süreçlerinizi şirketinize özel iş kurallarıyla tasarlayarak tüm operasyonlarınızı tek dijital çatıya taşıyoruz.'",
        "'Door uw ERP/CRM-processen te ontwerpen met bedrijfsspecifieke bedrijfsregels, brengen we al uw operaties onder één digitaal dak.'"
    ),
    (
        "'Muhasebe, e-ticaret ve kargo programlarınızı tam otomatik çalışacak şekilde birleştirme.'",
        "'Het combineren van uw boekhoud-, e-commerce- en verzendprogramma\\'s om volledig automatisch te werken.'"
    ),
    (
        "'API entegrasyonlarıyla satış, faturalama, stok ve kargo süreçlerini uçtan uca otomatikleştiriyoruz.'",
        "'Met API-integraties automatiseren we verkoop-, facturerings-, voorraad- en verzendprocessen van begin tot eind.'"
    ),
    (
        "'Şirketinizin karmaşık verilerini anlaşılır, yönetici sunumlarına hazır grafiklere çevirme.'",
        "'Het omzetten van complexe bedrijfsgegevens in begrijpelijke, voor de directie geschikte grafieken.'"
    ),
    (
        "'Ham verilerinizi işleyip karar almayı hızlandıran canlı BI panelleri ve performans raporlama altyapıları kuruyoruz.'",
        "'We bouwen live BI-panelen en prestatierapportage-infrastructuren die uw ruwe gegevens verwerken en de besluitvorming versnellen.'"
    ),
    (
        "'Trendyol veya Sahibinden gibi çok satıcılı ve alıcılı pazar yeri sistemleri geliştirme.'",
        "'Ontwikkeling van marktplaatssystemen met meerdere verkopers en kopers, vergelijkbaar met Amazon.'"
    ),
    (
        "'Çok satıcılı platform altyapıları, komisyon dağıtımı ve satıcı izolasyonu ile uçtan uca marketplace sistemleri geliştiriyoruz.'",
        "'Wij ontwikkelen end-to-end marktplaatssystemen met platforminfrastructuren voor meerdere verkopers, commissieverdeling en verkopersisolatie.'"
    ),
    (
        "'Kendi yazılım fikrinizi insanlara aylık üyelikle satabileceğiniz altyapılar.'",
        "'Infrastructuren waarmee u uw eigen software-idee via een maandelijks abonnement kunt verkopen.'"
    ),
    (
        "'Multi-tenant mimari ile güvenli, ölçeklenebilir ve abonelik bazlı SaaS platformlarını sıfırdan geliştiriyoruz.'",
        "'We ontwikkelen veilige, schaalbare en op abonnementen gebaseerde SaaS-platformen vanaf de grond op met een multi-tenant architectuur.'"
    ),
    (
        "'Web sitenizi arama motorlarında üst sıralara taşıyacak kod ve mimari iyileştirmeleri.'",
        "'Code- en architectuurverbeteringen om uw website hoger in zoekmachines te positioneren.'"
    ),
    (
        "'Teknik SEO, performans optimizasyonu ve içerik yapısı iyileştirmeleriyle organik trafik kazanımınızı artırıyoruz.'",
        "'Door technische SEO, prestatie-optimalisatie en verbetering van de contentstructuur verhogen we uw organische verkeer.'"
    ),
    (
        "'Kargo, uluslararası taşımacılık ve araç filoları için özel takip ve operasyon sistemleri.'",
        "'Op maat gemaakte tracking- en operationele systemen voor vracht, internationaal transport en wagenparken.'"
    ),
    (
        "'Güzergah planlama, gümrük belge akışları ve GPS araç takibi ile lojistik operasyonlarınızı tek merkezden yönetiyoruz.'",
        "'Wij beheren uw logistieke operaties vanuit één centrum met routeplanning, documentstromen voor de douane en GPS-voertuigtracking.'"
    ),
    (
        "'Araştırma verilerini, arkeolojik kazıları veya biyolojik numuneleri dijitalleştirme.'",
        "'Digitalisering van onderzoeksgegevens, archeologische opgravingen of biologische monsters.'"
    ),
    (
        "'Bilimsel envanterler için güvenli bulut arşiv, filtreleme ve yetkili paylaşım altyapıları geliştiriyoruz.'",
        "'Wij ontwikkelen veilige cloudarchieven, filtering en geautoriseerde deelinfrastructuren voor wetenschappelijke inventarissen.'"
    ),
    (
        "'Tarım arazilerinden ve seralardan anlık veri alarak otomatik sulama/havalandırma yapma.'",
        "'Automatische irrigatie/ventilatie door real-time gegevens uit landbouwgrond en kassen te verzamelen.'"
    ),
    (
        "'Sensör verilerini analiz ederek uzaktan kontrol edilen sulama/havalandırma otomasyon sistemleri kuruyoruz.'",
        "'Door sensorgegevens te analyseren, bouwen we op afstand bestuurbare irrigatie- en ventilatie-automatiseringssystemen.'"
    ),
    (
        "'Uygulamalarınızı sadece çevirmekle kalmaz, yurt dışı standartlarına (Avrupa) uygun hazırlarız.'",
        "'We vertalen uw applicaties niet alleen, maar bereiden ze ook voor op internationale normen (Europa).'"
    ),
    (
        "'Lokalizasyon, ödeme altyapıları ve GDPR uyumu ile uygulamalarınızı uluslararası pazarlara hazır hale getiriyoruz.'",
        "'Met lokalisatie, betalingsinfrastructuren en GDPR-compliance maken we uw applicaties klaar voor internationale markten.'"
    ),
    (
        "'Oteller için bulut tabanlı, çok kanallı ve mobil uyumlu yönetim sistemleri.'",
        "'Cloudgebaseerde, multichannel en mobielvriendelijke beheersystemen voor hotels.'"
    ),
    (
        "'Rezervasyon, housekeeping, faturalandırma ve müşteri ilişkilerini tek bir bulut merkezinde toplayan yeni nesil otel yazılımları geliştiriyoruz.'",
        "'Wij ontwikkelen next-generation hotelsoftware die reserveringen, housekeeping, facturering en klantrelaties in één cloudcentrum samenbrengt.'"
    ),
    (
        "'Öğrenci, veli, öğretmen ve finans yönetimini birleştiren tam kapsamlı portal sistemleri.'",
        "'Uitgebreide portaalsystemen die studenten-, ouder-, leraren- en financieel beheer combineren.'"
    ),
    (
        "'K-12 ve üniversiteler için online sınav entegreli, güvenli ödeme modüllü ve veli bilgilendirme odaklı dijital altyapılar.'",
        "'Digitale infrastructuren voor K-12 en universiteiten, met geïntegreerde online examens, veilige betalingsmodules en gericht op ouderinformatie.'"
    ),
    (
        "'Karmaşık bayilik ağları ve çok kanallı toptan satış operasyonları için özel yazılımlar.'",
        "'Speciale software voor complexe dealernetwerken en multichannel groothandelsactiviteiten.'"
    ),
    (
        "'Farklı carilere özel dinamik iskontolar, çoklu depo yönetimi ve DBS tahsilat entegrasyonlarını kapsayan sipariş orkestrasyonu.'",
        "'Orderorkestratie inclusief dynamische kortingen voor specifieke accounts, beheer van meerdere magazijnen en automatische incasso-integraties.'"
    ),
    (
        "'Hazır paket programların çözemediği spesifik ve karmaşık iş akışlarınıza %100 uyumlu yazılımlar.'",
        "'Software die 100% aansluit bij uw specifieke en complexe workflows, die standaardpakketten niet kunnen oplossen.'"
    ),
    (
        "\"Laboratuvar analizlerinden özel mobilya üretimine kadar, sadece sizin firmanızın DNA'sına göre çalışan, esnek mikroservis mimarileri.\"",
        "\"Van laboratoriumanalyses tot op maat gemaakte meubelproductie: flexibele microservice-architecturen die specifiek volgens het DNA van uw bedrijf werken.\""
    )
]

with open('src/servicesData.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

for orig, new in replacements:
    if orig not in content:
        print(f"Warning: Could not find exactly {orig}")
    content = content.replace(orig, new)

with open('src/servicesData.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done writing translations!")
