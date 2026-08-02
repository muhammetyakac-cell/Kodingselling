import React from 'react';
import { Phone,
  Smartphone, CreditCard, Activity, Shield, Cpu, Building2, UserCog, LayoutTemplate, Network, BarChart3, Store, Database, Search, Truck, Microscope, Leaf, Globe, Building, GraduationCap, PackageCheck, Shapes, Landmark, Wallet, Home, Zap, Sprout, ShoppingCart, Rocket, HelpCircle
} from 'lucide-react';

export const servicesData = [
  {
    icon: <Smartphone className="w-6 h-6 text-indigo-500" />,
    title: 'Mobiele en Web Applicaties',
    desc: 'Hem telefonlarda hem de bilgisayarlarda kusursuz çalışan kullanıcı dostu arayüzler.',
    fullDesc: 'İşletmenizin dijital dünyadaki yüzünü baştan tasarlıyoruz. Uygulamalarınızın hem bilgisayar tarayıcılarında (Web) hem de mobil cihazlarda (iOS ve Android) tek bir modern altyapı üzerinden sorunsuz çalışmasını sağlıyoruz. Gebruiker dostu arayüzler (UI), akıcı deneyim (UX) ve yüksek performans odaklı kodlama standartlarımız ile markanızın dijital etkileşim oranlarını artırıyoruz. Her ekran boyutuna tam uyumlu (responsive) ve arama motoru dostu platformlar teslim ediyoruz.'
  },
  {
    icon: <CreditCard className="w-6 h-6 text-emerald-500" />,
    title: 'Betalings- en Incassosystemen',
    desc: 'İnternetten güvenle ödeme almanızı sağlayan dijital cüzdan ve abonelik altyapıları.',
    fullDesc: 'Nakit akışınızı ve tahsilat süreçlerinizi tamamen dijitalleştirip otomatikleştiriyoruz. E-ticaret siteniz veya uygulamanız için sanal POS (Stripe, Iyzico vb.), kredi kartı entegrasyonları, tekrarlayan abonelik modelleri ve dijital cüzdan sistemleri kuruyoruz.'
  },
  {
    icon: <Activity className="w-6 h-6 text-rose-500" />,
    title: 'Live Tracking en Management Dashboards',
    desc: 'Siparişleri, personeli ve işleyişi anlık olarak izleyebileceğiniz yönetici ekranları.',
    fullDesc: 'Sipariş durumu, personel konumu ve satış verileri gibi operasyonları gerçek zamanlı yansıtan özel admin panelleri geliştiriyoruz.'
  },
  {
    icon: <Shield className="w-6 h-6 text-slate-700" />,
    title: 'Hoogwaardige Gegevensbeveiliging',
    desc: 'Müşteri verilerinizi ve ticari sırlarınızı siber saldırılara karşı koruyan bulut sistemleri.',
    fullDesc: 'Row Level Security (RLS) ile kullanıcıların yalnızca yetkili olduğu verilere erişmesini sağlıyor, KVKK/GDPR uyumlu altyapılar kuruyoruz.'
  },
  {
    icon: <Cpu className="w-6 h-6 text-amber-500" />,
    title: 'Smart Device en Sensor Integratie',
    desc: 'Fiziksel dünyadaki cihazları ve sensörleri internete bağlayan teknolojik sistemler.',
    fullDesc: 'ESP32/Arduino tabanlı IoT altyapıları ile sahadan gelen verileri buluta aktararak canlı izleme ve otomasyon sağlıyoruz.'
  },
  {
    icon: <Building2 className="w-6 h-6 text-blue-500" />,
    title: 'Vernieuwing van Verouderde Software',
    desc: 'Sadece tek bilgisayarda çalışan yavaş ve eski yazılımlarınızı modern buluta taşıyoruz.',
    fullDesc: 'Legacy sistemlerinizi veri kaybı yaşamadan modern, güvenli ve her cihazdan erişilebilen bulut tabanlı yapılara dönüştürüyoruz.'
  },
  {
    icon: <UserCog className="w-6 h-6 text-indigo-600" />,
    title: 'Externe Technologie Management (CTO)',
    desc: 'Şirketinize teknoloji kararlarında yol gösteren uzman yazılım danışmanlığı.',
    fullDesc: 'Dışarıdan CTO modeliyle teknolojik kararlarınızı, altyapı planlarınızı ve yazılım kalitesini yönetmenize destek oluyoruz.'
  },
  {
    icon: <LayoutTemplate className="w-6 h-6 text-teal-500" />,
    title: 'Bedrijfsspecifieke Management Software',
    desc: 'Piyasadaki hazır paketler yerine, tamamen işinize özel tasarlanmış otomasyonlar.',
    fullDesc: 'ERP/CRM süreçlerinizi şirketinize özel iş kurallarıyla tasarlayarak tüm operasyonlarınızı tek dijital çatıya taşıyoruz.'
  },
  {
    icon: <Network className="w-6 h-6 text-purple-500" />,
    title: 'Verschillende Software Koppelen',
    desc: 'Muhasebe, e-ticaret ve kargo programlarınızı tam otomatik çalışacak şekilde birleştirme.',
    fullDesc: 'API entegrasyonlarıyla satış, faturalama, stok ve kargo süreçlerini uçtan uca otomatikleştiriyoruz.'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-cyan-500" />,
    title: 'Data-analyse en Slimme Rapportage',
    desc: 'Şirketinizin karmaşık verilerini anlaşılır, yönetici sunumlarına hazır grafiklere çevirme.',
    fullDesc: 'Ham verilerinizi işleyip karar almayı hızlandıran canlı BI panelleri ve performans raporlama altyapıları kuruyoruz.'
  },
  {
    icon: <Store className="w-6 h-6 text-orange-500" />,
    title: 'Marktplaats en Platform Ontwikkeling',
    desc: 'Trendyol veya Sahibinden gibi çok satıcılı ve alıcılı pazar yeri sistemleri geliştirme.',
    fullDesc: 'Çok satıcılı platform altyapıları, komisyon dağıtımı ve satıcı izolasyonu ile uçtan uca marketplace sistemleri geliştiriyoruz.'
  },
  {
    icon: <Database className="w-6 h-6 text-indigo-400" />,
    title: 'Abonnementsgebaseerde Software (SaaS)',
    desc: 'Kendi yazılım fikrinizi insanlara aylık üyelikle satabileceğiniz altyapılar.',
    fullDesc: 'Multi-tenant mimari ile güvenli, ölçeklenebilir ve abonelik bazlı SaaS platformlarını sıfırdan geliştiriyoruz.'
  },
  {
    icon: <Search className="w-6 h-6 text-green-600" />,
    title: 'Zoekmachine en Google Optimalisatie',
    desc: 'Web sitenizi arama motorlarında üst sıralara taşıyacak kod ve mimari iyileştirmeleri.',
    fullDesc: 'Teknik SEO, performans optimizasyonu ve içerik yapısı iyileştirmeleriyle organik trafik kazanımınızı artırıyoruz.'
  },
  {
    icon: <Truck className="w-6 h-6 text-slate-600" />,
    title: 'Logistiek en Vlootbeheer Software',
    desc: 'Kargo, uluslararası taşımacılık ve araç filoları için özel takip ve operasyon sistemleri.',
    fullDesc: 'Güzergah planlama, gümrük belge akışları ve GPS araç takibi ile lojistik operasyonlarınızı tek merkezden yönetiyoruz.'
  },
  {
    icon: <Microscope className="w-6 h-6 text-fuchsia-500" />,
    title: 'Wetenschappelijke en Academische Archiefsystemen',
    desc: 'Araştırma verilerini, arkeolojik kazıları veya biyolojik numuneleri dijitalleştirme.',
    fullDesc: 'Bilimsel envanterler için güvenli bulut arşiv, filtreleme ve yetkili paylaşım altyapıları geliştiriyoruz.'
  },
  {
    icon: <Leaf className="w-6 h-6 text-lime-500" />,
    title: 'Slimme Landbouw en Milieu Tracking',
    desc: 'Tarım arazilerinden ve seralardan anlık veri alarak otomatik sulama/havalandırma yapma.',
    fullDesc: 'Sensör verilerini analiz ederek uzaktan kontrol edilen sulama/havalandırma otomasyon sistemleri kuruyoruz.'
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    title: 'Meertalige en Internationale Infrastructuur',
    desc: 'Uygulamalarınızı sadece çevirmekle kalmaz, yurt dışı standartlarına (Avrupa) uygun hazırlarız.',
    fullDesc: 'Lokalizasyon, ödeme altyapıları ve GDPR uyumu ile uygulamalarınızı uluslararası pazarlara hazır hale getiriyoruz.'
  },
  {
    icon: <Building className="w-6 h-6 text-sky-500" />,
    title: 'Hotel en Accommodatie Management (PMS)',
    desc: 'Oteller için bulut tabanlı, çok kanallı ve mobil uyumlu yönetim sistemleri.',
    fullDesc: 'Rezervasyon, housekeeping, faturalandırma ve müşteri ilişkilerini tek bir bulut merkezinde toplayan yeni nesil otel yazılımları geliştiriyoruz.'
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-amber-600" />,
    title: 'School en Onderwijs Management Systemen',
    desc: 'Öğrenci, veli, öğretmen ve finans yönetimini birleştiren tam kapsamlı portal sistemleri.',
    fullDesc: 'K-12 ve üniversiteler için online sınav entegreli, güvenli ödeme modüllü ve veli bilgilendirme odaklı dijital altyapılar.'
  },
  {
    icon: <PackageCheck className="w-6 h-6 text-emerald-600" />,
    title: 'B2B Bestellingen en Dealer Management',
    desc: 'Karmaşık bayilik ağları ve çok kanallı toptan satış operasyonları için özel yazılımlar.',
    fullDesc: 'Farklı carilere özel dinamik iskontolar, çoklu depo yönetimi ve DBS tahsilat entegrasyonlarını kapsayan sipariş orkestrasyonu.'
  },
  {
    icon: <Shapes className="w-6 h-6 text-rose-400" />,
    title: 'Niche Sectorspecifieke Management Systemen',
    desc: 'Hazır paket programların çözemediği spesifik ve karmaşık iş akışlarınıza %100 uyumlu yazılımlar.',
    fullDesc: 'Laboratuvar analizlerinden özel mobilya üretimine kadar, sadece sizin firmanızın DNA\'sına göre çalışan, esnek mikroservis mimarileri.'
  },
{
  icon: <Globe className="w-6 h-6 text-indigo-500" />,
  title: 'Douane API Integraties',
  desc: 'Beveiligde en geautomatiseerde koppelingen met de systemen van de Belgische douane.',
  fullDesc: 'Wij ontwikkelen robuuste API-middleware die uw bestaande WMS- of ERP-systemen naadloos verbindt met de douaneautoriteiten in de haven van Antwerpen. Verminder vertragingen en voorkom menselijke fouten door automatische validatie van invoer- en uitvoerdocumenten.'
},
{
  icon: <UserCog className="w-6 h-6 text-emerald-500" />,
  title: 'Lokale HR & Payroll Portals',
  desc: 'Maatwerk HR-software die naadloos aansluit op de complexe Belgische sociale wetgeving.',
  fullDesc: 'Ontsnap aan logge internationale pakketten. Wij bouwen intuïtieve medewerkersportalen met directe API-integraties naar Belgische sociale secretariaten (zoals SD Worx en Acerta) voor automatische loonverwerking en verlofbeheer.'
},
{
  icon: <Leaf className="w-6 h-6 text-emerald-600" />,
  title: 'ESG & Duurzaamheid Dashboards',
  desc: 'Real-time monitoring van uw CO2-uitstoot voor CSRD-conforme rapportages.',
  fullDesc: 'We verzamelen IoT- en ERP-data om uw energieverbruik en emissies accuraat te meten. Onze op maat gemaakte ESG-dashboards genereren automatisch transparante duurzaamheidsrapporten die voldoen aan de nieuwste Europese regelgeving.'
},
{
  icon: <PackageCheck className="w-6 h-6 text-amber-500" />,
  title: 'Smart WMS (Warehouse Management)',
  desc: 'Digitaliseer uw magazijn met geoptimaliseerde pickroutes en RFID-integraties.',
  fullDesc: 'Van inkomende goederen tot foutloze verzending: onze cloud-native WMS-systemen verhogen de productiviteit van uw magazijn aanzienlijk door middel van barcodescanning, real-time inventarisatie en slimme algoritmes voor pickroutes.'
},
{
  icon: <Network className="w-6 h-6 text-slate-700" />,
  title: 'Private Blockchain Supply Chains',
  desc: 'Beveilig logistieke ketens tegen fraude met gedistribueerde grootboeken en smart contracts.',
  fullDesc: 'Voor hoogwaardige goederen of complexe internationale expedities bouwen wij enterprise blockchain netwerken (zoals Hyperledger). Dit garandeert de onveranderbaarheid van transportdocumenten en maakt geautomatiseerde betalingen via smart contracts mogelijk.'
},
{
  icon: <ShoppingCart className="w-6 h-6 text-fuchsia-500" />,
  title: 'B2B Klantenportalen & E-commerce',
  desc: 'Verhoog uw B2B-verkopen met op maat gemaakte bestelplatformen voor uw dealernetwerk.',
  fullDesc: 'Wij bouwen B2B-platformen die veel verder gaan dan een webshop. Met functionaliteiten zoals klantspecifieke prijslijsten, volumekortingen, automatische nabestellingen en directe ERP-integratie (voor voorraad en facturatie) automatiseren wij uw volledige order-to-cash proces.'
},
{
  icon: <BarChart3 className="w-6 h-6 text-sky-500" />,
  title: 'Business Intelligence (BI) & Dashboards',
  desc: 'Zet uw ruwe bedrijfsdata om in visuele, real-time dashboards voor strategische beslissingen.',
  fullDesc: 'Ontsluit de data uit uw ERP, CRM en financiële systemen. Wij ontwerpen interactieve BI-dashboards (inclusief Power BI integraties) die KPI\'s zoals winstmarges, productie-efficiëntie en verkoopcijfers real-time visualiseren, zodat u datagestuurd kunt sturen.'
},
{
  icon: <Truck className="w-6 h-6 text-indigo-600" />,
  title: 'Vlootbeheer & Telematica Software',
  desc: 'Real-time GPS tracking en rittenplanning voor de Belgische transportsector.',
  fullDesc: 'Krijg 360-graden controle over uw wagenpark. Wij ontwikkelen Fleet Management software die live locatiegegevens, brandstofverbruik en tachograafdata verzamelt. Met slimme algoritmes optimaliseren we uw routes en plannen we predictief onderhoud in om stilstand te minimaliseren.'
},
{
  icon: <Building2 className="w-6 h-6 text-emerald-500" />,
  title: 'PropTech & Gebouwbeheersystemen',
  desc: 'Digitaliseer vastgoedbeheer met slimme portalen voor syndici, eigenaren en huurders.',
  fullDesc: 'Moderniseer de vastgoedsector met onze PropTech oplossingen. Van applicaties voor huurincasso en storingenbeheer tot de integratie van Smart Building sensoren (IoT) voor energie-efficiëntie. Wij maken het beheer van residentieel en commercieel vastgoed transparant en geautomatiseerd.'
},
{
  icon: <Database className="w-6 h-6 text-rose-500" />,
  title: 'Maatwerk CRM voor KMO\'s',
  desc: 'Slanke en doeltreffende CRM-systemen ontworpen rondom úw unieke verkoopproces.',
  fullDesc: 'Vergeet de complexe, dure standaardpakketten. Wij bouwen razendsnelle, op maat gemaakte CRM-applicaties die uw salesteam daadwerkelijk wil gebruiken. Met perfecte integraties naar uw Belgische boekhoudpakket, e-mail en VoIP systemen voor maximale conversie.'
},
{
  icon: <Clock className="w-6 h-6 text-fuchsia-600" />,
  title: 'B2B Reserverings- en Verhuursystemen',
  desc: 'Automatiseer complexe verhuur van materieel en ruimtes met klantspecifieke contracten.',
  fullDesc: 'Standaard boekingstools schieten tekort voor B2B. Wij bouwen maatwerk reserveringsplatformen voor het verhuren van zwaar materieel, laboratoria of werkruimtes, inclusief dynamische prijsstaffels, borgbeheer en na-facturatie via API-koppelingen met uw boekhoudpakket.'
},
{
  icon: <MapPin className="w-6 h-6 text-emerald-500" />,
  title: 'Smart City & IoT Dataplatformen',
  desc: 'Zet stadsdata om in actiegerichte dashboards voor mobiliteit en milieubeheer.',
  fullDesc: 'Voor overheden en slimme steden ontwikkelen wij robuuste cloud-portalen die miljoenen datapunten van IoT-sensoren (verkeer, fijnstof, afval) verwerken. Onze Big Data oplossingen visualiseren deze stromen, waardoor proactief stadsbeheer en Smart City initiatieven mogelijk worden.'
},
{
  icon: <Search className="w-6 h-6 text-indigo-500" />,
  title: 'Supply Chain Traceerbaarheid (Track & Trace)',
  desc: 'End-to-end logistieke traceerbaarheid van boer tot bord voor de voedingsindustrie.',
  fullDesc: 'Garandeer voedselveiligheid en transparantie met onze geavanceerde Track & Trace software. Door integratie van RFID, QR-codes en temperatuursensoren (cold chain) bouwen we platformen waarmee u elke stap in uw supply chain feilloos documenteert volgens de normen van het FAVV.'
},
{
  icon: <Wallet className="w-6 h-6 text-rose-500" />,
  title: 'FinTech Auditing & OCR Rapportages',
  desc: 'Automatiseer uw financiële controleprocessen en data-extractie met AI.',
  fullDesc: 'Transformeer uw accountancy- of auditkantoor met Continuous Auditing. Wij ontwikkelen software die facturen en declaraties uitleest via slimme OCR, fraude detecteert via AI-patroonherkenning, en financiële consolidaties automatisch genereert voor KMO\'s en holdings.'
},
{
  icon: <Zap className="w-6 h-6 text-amber-500" />,
  title: 'Energy Management Systemen (EMS)',
  desc: 'Verlaag energiekosten en CO2-uitstoot met geautomatiseerde stroomcontrole.',
  fullDesc: 'Integreer slimme meters, zonnepanelen, laadpalen en uw HVAC-infrastructuur in één centraal, op maat gemaakt EMS-dashboard. Beheer uw piekvraag (peak shaving), stuur dynamisch laadsessies aan en voldoe moeiteloos aan de CSRD-verplichtingen voor duurzaamheidsrapportage.'
},
{
  icon: <GraduationCap className="w-6 h-6 text-indigo-500" />,
  title: 'B2B Opleidings- & LMS Platformen',
  desc: 'Eigen Learning Management Systemen (LMS) voor medewerkers en B2B-klanten.',
  fullDesc: 'Stroomlijn onboarding, veiligheidstrainingen en certificeringen met een maatwerk leeromgeving. Wij bouwen interactieve EdTech portalen die niet alleen cursussen aanbieden, maar direct gekoppeld zijn aan uw HR-systeem voor automatische opvolging van vereiste kwalificaties (zoals VCA).'
},
{
  icon: <Shield className="w-6 h-6 text-red-500" />,
  title: 'Cyber Risk & Monitoring Dashboards',
  desc: 'Real-time inzicht in uw digitale kwetsbaarheden en netwerkbeveiliging.',
  fullDesc: 'Voldoe aan de strenge NIS2-richtlijnen. Wij ontwikkelen geavanceerde security dashboards die uw IT-infrastructuur monitoren. Detecteer ongebruikelijke patronen via AI, scan automatisch op kwetsbaarheden en genereer met één druk op de knop compliance rapporten voor audits en verzekeraars.'
},
{
  icon: <Shapes className="w-6 h-6 text-sky-600" />,
  title: 'Digitale Werkbonnen (Field Service)',
  desc: 'Verhoog de efficiëntie van uw buitendienst met mobiele Field Service apps.',
  fullDesc: 'Gooi papieren werkbonnen weg. Wij bouwen mobiele (iOS/Android) of Progressive Web Apps voor uw technici. Inclusief digitale handtekeningen, urenregistratie, fotodocumentatie en automatische GPS-routeplanning, direct geïntegreerd in uw boekhoudpakket voor bliksemsnelle facturatie.'
},
{
  icon: <Landmark className="w-6 h-6 text-slate-700" />,
  title: 'Legal Tech & Workflow Automatisering',
  desc: 'Beveiligde cliëntportalen en geautomatiseerde tijdsregistratie voor de advocatuur.',
  fullDesc: 'Moderniseer uw advocaten- of notariskantoor. Wij ontwikkelen Legal Tech oplossingen met de hoogste beveiligingsstandaarden (end-to-end encryptie). Automatiseer documentgeneratie, billable hours en faciliteer veilige communicatie via afgeschermde portalen voor uw cliënten.'
},
{
  icon: <Cpu className="w-6 h-6 text-amber-600" />,
  title: 'Productie Planning Systemen (APS)',
  desc: 'Dynamische Advanced Planning & Scheduling (APS) software ter vervanging van Excel.',
  fullDesc: 'Optimaliseer uw fabrieksvloer. Onze APS-systemen berekenen real-time de meest efficiënte productieroutes op basis van machinecapaciteit, personeelsbeschikbaarheid en materiaalvoorraad. Verminder stilstand en simuleer "what-if" scenario\'s met intelligente algoritmes.'
},
{
  icon: <Building className="w-6 h-6 text-indigo-500" />,
  title: 'Digitale Handtekeningen & CLM',
  desc: 'Contract Lifecycle Management met rechtsgeldige e-signature (itsme) integraties.',
  fullDesc: 'Versnel uw verkoopproces drastisch. Wij integreren veilige e-signature API\'s direct in uw portalen. Daarnaast bouwen we systemen voor Contract Lifecycle Management (CLM) die contracten automatisch genereren, veilig archiveren en u waarschuwen bij naderende vervaldata.'
},
{
  icon: <Activity className="w-6 h-6 text-rose-500" />,
  title: 'Zorg & e-Health Oplossingen',
  desc: 'Beveiligde patiëntenportalen en telemedicine applicaties (KVKK/GDPR conform).',
  fullDesc: 'Digitaliseer de Belgische zorg met onze op maat gemaakte e-Health platformen. Van videoconsultaties (telemedicine) tot applicaties voor Remote Patient Monitoring en elektronische voorschriften. Alles gebouwd met de hoogste medische databeveiliging.'
},
{
  icon: <Store className="w-6 h-6 text-fuchsia-500" />,
  title: 'Omnichannel Retail Integraties',
  desc: 'Verbind fysieke kassa\'s (POS) met e-commerce voor gecentraliseerd voorraadbeheer.',
  fullDesc: 'Bied uw klanten een naadloze winkelervaring. Wij koppelen uw offline kassasystemen in Antwerpen of daarbuiten aan uw webshop en ERP. Dit zorgt voor real-time voorraadupdates, Click & Collect mogelijkheden en een gecentraliseerd spaarpuntensysteem.'
},
{
  icon: <Database className="w-6 h-6 text-sky-500" />,
  title: 'Cloud Migratie & Architectuur',
  desc: 'Veilige migratie van uw on-premise data naar wendbare cloud-infrastructuur (AWS/Azure).',
  fullDesc: 'Maak uw IT-infrastructuur toekomstbestendig. Wij begeleiden uw KMO bij de volledige migratie naar de cloud, zonder dataverlies of merkbare downtime. We optimaliseren uw databases en zorgen voor geautomatiseerde back-ups en ijzersterke netwerkbeveiliging.'
},
{
  icon: <Phone className="w-6 h-6 text-emerald-500" />,
  title: 'VoIP & Unified Communications',
  desc: 'Integreer cloud-telefonie naadloos met uw CRM- en supportsoftware.',
  fullDesc: 'Optimaliseer uw klantenservice met CTI (Computer Telephony Integration). Wij bouwen API-bruggen tussen uw VoIP-centrale en uw bedrijfssoftware. Geniet van functionaliteiten zoals Click-to-Call, automatische klantdossier pop-ups en gecentraliseerde gesprekslogs.'
},
{
  icon: <Network className="w-6 h-6 text-fuchsia-600" />,
  title: 'Maatwerk API-Koppelingen',
  desc: 'Verbind geïsoleerde softwarepakketten (ERP, CRM, Webshop) via naadloze API-bruggen.',
  fullDesc: 'Voorkom dubbel invoerwerk. Wij ontwikkelen robuuste en extreem veilige middleware-architecturen die uw bestaande softwarepakketten in real-time laten communiceren. Ideaal voor automatische voorraadsynchronisatie of boekhoudkoppelingen.'
},
{
  icon: <Leaf className="w-6 h-6 text-emerald-600" />,
  title: 'Digitale Productpaspoorten (DPP)',
  desc: 'Voldoe aan Europese milieuwetgeving met blockchain-gebaseerde traceerbaarheid.',
  fullDesc: 'Maak uw producten klaar voor de circulaire economie. Wij bouwen beveiligde dataplatformen (inclusief QR en RFID-koppelingen) die de volledige levenscyclus, materialen en CO2-voetafdruk van uw product transparant vastleggen voor consumenten en overheden.'
},
{
  icon: <Globe className="w-6 h-6 text-sky-500" />,
  title: 'Intranet & Digital Workspaces',
  desc: 'Verhoog productiviteit met een moderne, gepersonaliseerde digitale werkplek.',
  fullDesc: 'Vervang logge intranets door dynamische Employee Experience Portals. Wij integreren Single Sign-On (SSO) voor veilige toegang tot alle bedrijfsapps, bouwen gepersonaliseerde HR-dashboards en stimuleren interne communicatie in een mobielvriendelijke omgeving.'
},
{
  icon: <Zap className="w-6 h-6 text-indigo-500" />,
  title: 'AI-Gedreven Klantenservice',
  desc: 'Automatiseer eerstelijns support met AI-chatbots getraind op uw eigen bedrijfsdata.',
  fullDesc: 'Integreer Generatieve AI (zoals GPT-4) op een veilige manier in uw supportkanalen. Onze RAG-architecturen (Retrieval-Augmented Generation) zorgen ervoor dat de chatbot nauwkeurige, meertalige antwoorden geeft op basis van uw handleidingen en ticket-historiek.'
},
{
  icon: <Rocket className="w-6 h-6 text-rose-500" />,
  title: 'Low-Code Interne Tools',
  desc: 'Versnel digitalisering met hybride low-code/custom-code applicatieontwikkeling.',
  fullDesc: 'Heeft u snel een interne app nodig voor voorraadbeheer of dataregistratie? Wij gebruiken geavanceerde low-code platformen gecombineerd met maatwerk logica om uw Time-to-Market te halveren, zonder in te boeten aan schaalbaarheid of veiligheid.'
}

];

export const expertiseData = [
  {
    icon: <Truck className="w-10 h-10 text-indigo-600" />,
    title: 'Automotive en Logistieke IT',
    desc: 'We ontwikkelen logistieke software met onze structuur die internationale voertuignormen en behoeften op het gebied van vlootbeheer beheerst.',
    route: 'sector-logistics'
  },
  {
    icon: <Microscope className="w-10 h-10 text-emerald-500" />,
    title: 'Wetenschappelijke en Academische IT',
    desc: 'We produceren analytische oplossingen voor het volgen van biologische gegevens, digitalisering van archeologische gegevens en inventarisbeheer.',
    route: 'sector-academic'
  },
  {
    icon: <Rocket className="w-10 h-10 text-fuchsia-600" />,
    title: 'E-commerce en SaaS Modellen',
    desc: 'We ontwikkelen turn-key architecturen voor multi-tenant platformen die met abonnementen verkocht kunnen worden.',
    route: 'sector-saas'
  },
  {
    icon: <Store className="w-10 h-10 text-orange-500" />,
    title: 'B2B E-commerce en Marktplaats',
    desc: 'Multi-vendor B2B e-commerce platformen waar u uw dealernetwerk kunt beheren en betalingen en bestellingen kunt automatiseren.',
    route: 'sector-ecommerce'
  },
  {
    icon: <Building className="w-10 h-10 text-sky-500" />,
    title: 'Hotel en Toerisme Technologieën',
    desc: 'We combineren reserveringen (PMS), housekeeping en online betalingssystemen voor horecabedrijven in de cloud.',
    route: 'sector-tourism'
  },
  {
    icon: <Network className="w-10 h-10 text-teal-600" />,
    title: 'Productie Tracking en ERP',
    desc: 'Op microservices gebaseerde industriële ERP oplossingen die verspilling verminderen door direct gegevens van de productielijn te ontvangen.',
    route: 'sector-production'
  },
  {
    icon: <HelpCircle className="w-10 h-10 text-rose-500" />,
    title: 'Gezondheid en Ziekenhuis Informatiesystemen',
    desc: 'Privacy-conforme automatiseringen die afsprakenregistratie en digitale archieven bieden voor klinieken en ziekenhuizen.',
    route: 'sector-health'
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-amber-500" />,
    title: 'Onderwijs en LMS Platformen',
    desc: 'Portals voor onderwijsbeheer gericht op ouderinformatie, examenanalyse en e-learning voor scholen en cursussen.',
    route: 'sector-education'
  },
  {
    icon: <Landmark className="w-10 h-10 text-slate-800" />,
    title: 'Financiële Technologieën en Open Banking',
    desc: 'Bankintegraties, portemonneesystemen en API-oplossingen die voldoen aan open banking regelgeving.',
    route: 'sector-fintech'
  },
  {
    icon: <Home className="w-10 h-10 text-indigo-500" />,
    title: 'Vastgoed en PropTech',
    desc: 'Beheer van vastgoedportefeuilles, slimme gebouwautomatisering en digitale huurincassosystemen.',
    route: 'sector-realestate'
  },
  {
    icon: <Zap className="w-10 h-10 text-amber-400" />,
    title: 'Smart City en Energie',
    desc: 'Analyse van energieverbruik, slimme netwerkbewaking en beheerdashboards voor hernieuwbare energie.',
    route: 'sector-energy'
  },
  {
    icon: <Sprout className="w-10 h-10 text-emerald-600" />,
    title: 'Landbouwtechnologieën (Agrotech)',
    desc: 'Kasautomatisering, sensorgebaseerd irrigatiebeheer en traceerbaarheidssoftware van boer tot bord.',
    route: 'sector-agritech'
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-rose-500" />,
    title: 'Retail en Winkel (POS)',
    desc: 'Cloudgebaseerde POS en software voor klantloyaliteitsprogramma\'s voor winkels met meerdere filialen.',
    route: 'sector-retail'
  }
];


export const sectorPages = {
  'sector-logistics': {
    title: 'Logistiek en Vlootbeheer Oplossingen',
    subtitle: 'Speciale platforms voor internationaal transport, route-optimalisatie en live vlootregistratie.'
  },
  'sector-saas': {
    title: 'SaaS en Platform Productontwikkeling',
    subtitle: 'Schaalbare SaaS architecturen om uw abonnementsproduct snel op de markt te brengen.'
  },
  'sector-academic': {
    title: 'Academische en Wetenschappelijke Digitale Archiefsystemen',
    subtitle: 'Oplossingen op maat voor instellingen voor onderzoeksgegevens, monsterbeheer en veilige uitwisseling.'
  },
  'sector-ecommerce': {
    title: 'B2B E-commerce en Marktplaatssystemen',
    subtitle: 'Bestellingen van gesloten dealers en multi-vendor (marktplaats) e-commerce infrastructuren.'
  },
  'sector-tourism': {
    title: 'Hotel en Toerisme Management Software (PMS)',
    subtitle: 'Moderne hotelsystemen die reserveringen, boekhouding en huishouding combineren in één scherm.'
  },
  'sector-production': {
    title: 'Industriële Productie Tracking en ERP Systemen',
    subtitle: 'Digitalisering van fabrieks productielijnen met sensorgesteunde IoT integratie.'
  },
  'sector-health': {
    title: 'Gezondheid, Kliniek en Ziekenhuis Informatiesystemen (HBS)',
    subtitle: 'Afsprakenregistratie voor patiënten, e-recept integratie en privacy-gerichte veilige patiëntportalen.'
  },
  'sector-education': {
    title: 'School, K-12 en LMS Onderwijsplatformen',
    subtitle: 'End-to-end schoolsystemen die online examens, e-learning en oudercommunicatie combineren.'
  },
  'sector-fintech': {
    title: 'Fintech en Open Banking Oplossingen',
    subtitle: 'Veilige betalingsgateways, e-wallets en financiële API integraties.'
  },
  'sector-realestate': {
    title: 'Vastgoed en PropTech Software',
    subtitle: 'Vastgoedportefeuillebeheer, slimme gebouwautomatisering en digitale huurincassosystemen.'
  },
  'sector-energy': {
    title: 'Slimme Stad en Energie Automatisering',
    subtitle: 'Analyse van energieverbruik, slimme netwerkmonitoring en IoT-ondersteunde stadsystemen.'
  },
  'sector-agritech': {
    title: 'Landbouwtechnologieën en Agrotech Systemen',
    subtitle: 'Kasautomatisering, sensorgebaseerd irrigatiebeheer en traceerbaarheid van boer tot bord.'
  },
  'sector-retail': {
    title: 'Retail en Winkel (POS) Software',
    subtitle: 'Cloudgebaseerde POS en managementdashboards voor loyaliteitsprogramma\'s voor winkels met meerdere filialen.'
  }
};

