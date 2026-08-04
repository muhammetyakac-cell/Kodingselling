import React from 'react';
import { Phone, Clock, MapPin,
  Smartphone, CreditCard, Activity, Shield, Cpu, Building2, UserCog, LayoutTemplate, Network, BarChart3, Store, Database, Search, Truck, Microscope, Leaf, Globe, Building, GraduationCap, PackageCheck, Shapes, Landmark, Wallet, Home, Zap, Sprout, ShoppingCart, Rocket, HelpCircle
, Wind, MonitorPlay, Glasses, Receipt, Utensils, Users, Printer, Link, Code2, Settings, Award, HardHat, Bot, CloudLightning, Scan, CalendarRange, BatteryCharging, FileSearch, DatabaseBackup, TrendingUp, MonitorSmartphone, Recycle, LayoutDashboard, FileSignature, TowerControl, Calculator, Images, Radio, Wrench, PackageOpen, Lock, MonitorUp, Gamepad2, QrCode, Stethoscope, CalendarHeart, LifeBuoy, Headphones, BrainCircuit} from 'lucide-react';

export const servicesData = [
  {
    icon: <Smartphone className="w-6 h-6 text-indigo-500" />,
    title: 'Mobiele en Web Applicaties',
    slug: 'mobiele-en-web-applicaties',
    desc: 'Gebruiksvriendelijke interfaces die naadloos werken op zowel telefoons als computers.',
    fullDesc: 'Wij herontwerpen het digitale gezicht van uw bedrijf. We zorgen ervoor dat uw applicaties naadloos werken op zowel webbrowsers (Web) als mobiele apparaten (iOS en Android) via één moderne infrastructuur. Met gebruiksvriendelijke interfaces (UI), een vloeiende gebruikerservaring (UX) en prestatiegerichte coderingsstandaarden verhogen we de digitale interactieratio\'s van uw merk. We leveren volledig responsieve en zoekmachinevriendelijke platformen.'
  },
  {
    icon: <CreditCard className="w-6 h-6 text-emerald-500" />,
    title: 'Betalings- en Incassosystemen',
    slug: 'betalings-en-incassosystemen',
    desc: 'Digitale portemonnee- en abonnementeninfrastructuren waarmee u veilig online betalingen kunt ontvangen.',
    fullDesc: 'Wij digitaliseren en automatiseren uw cashflow en incassoprocessen volledig. We zetten virtuele POS (Stripe, Iyzico etc.), creditcardintegraties, terugkerende abonnementsmodellen en digitale portemonneesystemen op voor uw e-commerce website of applicatie.'
  },
  {
    icon: <Activity className="w-6 h-6 text-rose-500" />,
    title: 'Live Tracking en Management Dashboards',
    slug: 'live-tracking-en-management-dashboards',
    desc: 'Beheerdersdashboards waarmee u bestellingen, personeel en activiteiten real-time kunt volgen.',
    fullDesc: 'Wij ontwikkelen op maat gemaakte adminpanelen die operaties zoals bestelstatus, personeelslocatie en verkoopgegevens in real-time weergeven.'
  },
  {
    icon: <Shield className="w-6 h-6 text-slate-700" />,
    title: 'Hoogwaardige Gegevensbeveiliging',
    slug: 'hoogwaardige-gegevensbeveiliging',
    desc: 'Cloudsystemen die uw klantgegevens en bedrijfsgeheimen beschermen tegen cyberaanvallen.',
    fullDesc: 'Met Row Level Security (RLS) zorgen we ervoor dat gebruikers alleen toegang hebben tot geautoriseerde gegevens en bouwen we GDPR-conforme infrastructuren.'
  },
  {
    icon: <Cpu className="w-6 h-6 text-amber-500" />,
    title: 'Smart Device en Sensor Integratie',
    slug: 'smart-device-en-sensor-integratie',
    desc: 'Technologische systemen die fysieke apparaten en sensoren met het internet verbinden.',
    fullDesc: 'Met op ESP32/Arduino gebaseerde IoT-infrastructuren brengen we veldgegevens over naar de cloud voor live monitoring en automatisering.'
  },
  {
    icon: <Building2 className="w-6 h-6 text-blue-500" />,
    title: 'Vernieuwing van Verouderde Software',
    slug: 'vernieuwing-van-verouderde-software',
    desc: 'We migreren uw trage en verouderde software, die slechts op één computer draait, naar de moderne cloud.',
    fullDesc: 'We transformeren uw legacy-systemen naar moderne, veilige en cloudgebaseerde structuren die toegankelijk zijn vanaf elk apparaat, zonder gegevensverlies.'
  },
  {
    icon: <UserCog className="w-6 h-6 text-indigo-600" />,
    title: 'Externe Technologie Management (CTO)',
    slug: 'externe-technologie-management-cto',
    desc: 'Deskundig softwareadvies dat uw bedrijf begeleidt bij technologische beslissingen.',
    fullDesc: 'Met een extern CTO-model ondersteunen we u bij het beheren van uw technologische beslissingen, infrastructuurplannen en softwarekwaliteit.'
  },
  {
    icon: <LayoutTemplate className="w-6 h-6 text-teal-500" />,
    title: 'Bedrijfsspecifieke Management Software',
    slug: 'bedrijfsspecifieke-management-software',
    desc: 'Volledig op maat gemaakte automatiseringen, in plaats van standaardpakketten op de markt.',
    fullDesc: 'Door uw ERP/CRM-processen te ontwerpen met bedrijfsspecifieke bedrijfsregels, brengen we al uw operaties onder één digitaal dak.'
  },
  {
    icon: <Network className="w-6 h-6 text-purple-500" />,
    title: 'Verschillende Software Koppelen',
    slug: 'verschillende-software-koppelen',
    desc: 'Het combineren van uw boekhoud-, e-commerce- en verzendprogramma\'s om volledig automatisch te werken.',
    fullDesc: 'Met API-integraties automatiseren we verkoop-, facturerings-, voorraad- en verzendprocessen van begin tot eind.'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-cyan-500" />,
    title: 'Data-analyse en Slimme Rapportage',
    slug: 'data-analyse-en-slimme-rapportage',
    desc: 'Het omzetten van complexe bedrijfsgegevens in begrijpelijke, voor de directie geschikte grafieken.',
    fullDesc: 'We bouwen live BI-panelen en prestatierapportage-infrastructuren die uw ruwe gegevens verwerken en de besluitvorming versnellen.'
  },
  {
    icon: <Store className="w-6 h-6 text-orange-500" />,
    title: 'Marktplaats en Platform Ontwikkeling',
    slug: 'marktplaats-en-platform-ontwikkeling',
    desc: 'Ontwikkeling van marktplaatssystemen met meerdere verkopers en kopers, vergelijkbaar met Amazon.',
    fullDesc: 'Wij ontwikkelen end-to-end marktplaatssystemen met platforminfrastructuren voor meerdere verkopers, commissieverdeling en verkopersisolatie.'
  },
  {
    icon: <Database className="w-6 h-6 text-indigo-400" />,
    title: 'Abonnementsgebaseerde Software (SaaS)',
    slug: 'abonnementsgebaseerde-software-saas',
    desc: 'Infrastructuren waarmee u uw eigen software-idee via een maandelijks abonnement kunt verkopen.',
    fullDesc: 'We ontwikkelen veilige, schaalbare en op abonnementen gebaseerde SaaS-platformen vanaf de grond op met een multi-tenant architectuur.'
  },
  {
    icon: <Search className="w-6 h-6 text-green-600" />,
    title: 'Zoekmachine en Google Optimalisatie',
    slug: 'zoekmachine-en-google-optimalisatie',
    desc: 'Code- en architectuurverbeteringen om uw website hoger in zoekmachines te positioneren.',
    fullDesc: 'Door technische SEO, prestatie-optimalisatie en verbetering van de contentstructuur verhogen we uw organische verkeer.'
  },
  {
    icon: <Truck className="w-6 h-6 text-slate-600" />,
    title: 'Logistiek en Vlootbeheer Software',
    slug: 'logistiek-en-vlootbeheer-software',
    desc: 'Op maat gemaakte tracking- en operationele systemen voor vracht, internationaal transport en wagenparken.',
    fullDesc: 'Wij beheren uw logistieke operaties vanuit één centrum met routeplanning, documentstromen voor de douane en GPS-voertuigtracking.'
  },
  {
    icon: <Microscope className="w-6 h-6 text-fuchsia-500" />,
    title: 'Wetenschappelijke en Academische Archiefsystemen',
    slug: 'wetenschappelijke-en-academische-archiefsystemen',
    desc: 'Digitalisering van onderzoeksgegevens, archeologische opgravingen of biologische monsters.',
    fullDesc: 'Wij ontwikkelen veilige cloudarchieven, filtering en geautoriseerde deelinfrastructuren voor wetenschappelijke inventarissen.'
  },
  {
    icon: <Leaf className="w-6 h-6 text-lime-500" />,
    title: 'Slimme Landbouw en Milieu Tracking',
    slug: 'slimme-landbouw-en-milieu-tracking',
    desc: 'Automatische irrigatie/ventilatie door real-time gegevens uit landbouwgrond en kassen te verzamelen.',
    fullDesc: 'Door sensorgegevens te analyseren, bouwen we op afstand bestuurbare irrigatie- en ventilatie-automatiseringssystemen.'
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    title: 'Meertalige en Internationale Infrastructuur',
    slug: 'meertalige-en-internationale-infrastructuur',
    desc: 'We vertalen uw applicaties niet alleen, maar bereiden ze ook voor op internationale normen (Europa).',
    fullDesc: 'Met lokalisatie, betalingsinfrastructuren en GDPR-compliance maken we uw applicaties klaar voor internationale markten.'
  },
  {
    icon: <Building className="w-6 h-6 text-sky-500" />,
    title: 'Hotel en Accommodatie Management (PMS)',
    slug: 'hotel-en-accommodatie-management-pms',
    desc: 'Cloudgebaseerde, multichannel en mobielvriendelijke beheersystemen voor hotels.',
    fullDesc: 'Wij ontwikkelen next-generation hotelsoftware die reserveringen, housekeeping, facturering en klantrelaties in één cloudcentrum samenbrengt.'
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-amber-600" />,
    title: 'School en Onderwijs Management Systemen',
    slug: 'school-en-onderwijs-management-systemen',
    desc: 'Uitgebreide portaalsystemen die studenten-, ouder-, leraren- en financieel beheer combineren.',
    fullDesc: 'Digitale infrastructuren voor K-12 en universiteiten, met geïntegreerde online examens, veilige betalingsmodules en gericht op ouderinformatie.'
  },
  {
    icon: <PackageCheck className="w-6 h-6 text-emerald-600" />,
    title: 'B2B Bestellingen en Dealer Management',
    slug: 'b2b-bestellingen-en-dealer-management',
    desc: 'Speciale software voor complexe dealernetwerken en multichannel groothandelsactiviteiten.',
    fullDesc: 'Orderorkestratie inclusief dynamische kortingen voor specifieke accounts, beheer van meerdere magazijnen en automatische incasso-integraties.'
  },
  {
    icon: <Shapes className="w-6 h-6 text-rose-400" />,
    title: 'Niche Sectorspecifieke Management Systemen',
    slug: 'niche-sectorspecifieke-management-systemen',
    desc: 'Software die 100% aansluit bij uw specifieke en complexe workflows, die standaardpakketten niet kunnen oplossen.',
    fullDesc: 'Van laboratoriumanalyses tot op maat gemaakte meubelproductie: flexibele microservice-architecturen die specifiek volgens het DNA van uw bedrijf werken.'
  },
{
  icon: <Globe className="w-6 h-6 text-indigo-500" />,
  title: 'Douane API Integraties',
  slug: 'douane-api-integraties',
  desc: 'Beveiligde en geautomatiseerde koppelingen met de systemen van de Belgische douane.',
  fullDesc: 'Wij ontwikkelen robuuste API-middleware die uw bestaande WMS- of ERP-systemen naadloos verbindt met de douaneautoriteiten in de haven van Antwerpen. Verminder vertragingen en voorkom menselijke fouten door automatische validatie van invoer- en uitvoerdocumenten.'
},
{
  icon: <UserCog className="w-6 h-6 text-emerald-500" />,
  title: 'Lokale HR & Payroll Portals',
  slug: 'lokale-hr-payroll-portals',
  desc: 'Maatwerk HR-software die naadloos aansluit op de complexe Belgische sociale wetgeving.',
  fullDesc: 'Ontsnap aan logge internationale pakketten. Wij bouwen intuïtieve medewerkersportalen met directe API-integraties naar Belgische sociale secretariaten (zoals SD Worx en Acerta) voor automatische loonverwerking en verlofbeheer.'
},
{
  icon: <Leaf className="w-6 h-6 text-emerald-600" />,
  title: 'ESG & Duurzaamheid Dashboards',
  slug: 'esg-duurzaamheid-dashboards',
  desc: 'Real-time monitoring van uw CO2-uitstoot voor CSRD-conforme rapportages.',
  fullDesc: 'We verzamelen IoT- en ERP-data om uw energieverbruik en emissies accuraat te meten. Onze op maat gemaakte ESG-dashboards genereren automatisch transparante duurzaamheidsrapporten die voldoen aan de nieuwste Europese regelgeving.'
},
{
  icon: <PackageCheck className="w-6 h-6 text-amber-500" />,
  title: 'Smart WMS (Warehouse Management)',
  slug: 'smart-wms-warehouse-management',
  desc: 'Digitaliseer uw magazijn met geoptimaliseerde pickroutes en RFID-integraties.',
  fullDesc: 'Van inkomende goederen tot foutloze verzending: onze cloud-native WMS-systemen verhogen de productiviteit van uw magazijn aanzienlijk door middel van barcodescanning, real-time inventarisatie en slimme algoritmes voor pickroutes.'
},
{
  icon: <Network className="w-6 h-6 text-slate-700" />,
  title: 'Private Blockchain Supply Chains',
  slug: 'private-blockchain-supply-chains',
  desc: 'Beveilig logistieke ketens tegen fraude met gedistribueerde grootboeken en smart contracts.',
  fullDesc: 'Voor hoogwaardige goederen of complexe internationale expedities bouwen wij enterprise blockchain netwerken (zoals Hyperledger). Dit garandeert de onveranderbaarheid van transportdocumenten en maakt geautomatiseerde betalingen via smart contracts mogelijk.'
},
{
  icon: <ShoppingCart className="w-6 h-6 text-fuchsia-500" />,
  title: 'B2B Klantenportalen & E-commerce',
  slug: 'b2b-klantenportalen-e-commerce',
  desc: 'Verhoog uw B2B-verkopen met op maat gemaakte bestelplatformen voor uw dealernetwerk.',
  fullDesc: 'Wij bouwen B2B-platformen die veel verder gaan dan een webshop. Met functionaliteiten zoals klantspecifieke prijslijsten, volumekortingen, automatische nabestellingen en directe ERP-integratie (voor voorraad en facturatie) automatiseren wij uw volledige order-to-cash proces.'
},
{
  icon: <BarChart3 className="w-6 h-6 text-sky-500" />,
  title: 'Business Intelligence (BI) & Dashboards',
  slug: 'business-intelligence-bi-dashboards',
  desc: 'Zet uw ruwe bedrijfsdata om in visuele, real-time dashboards voor strategische beslissingen.',
  fullDesc: 'Ontsluit de data uit uw ERP, CRM en financiële systemen. Wij ontwerpen interactieve BI-dashboards (inclusief Power BI integraties) die KPI\'s zoals winstmarges, productie-efficiëntie en verkoopcijfers real-time visualiseren, zodat u datagestuurd kunt sturen.'
},
{
  icon: <Truck className="w-6 h-6 text-indigo-600" />,
  title: 'Vlootbeheer & Telematica Software',
  slug: 'vlootbeheer-telematica-software',
  desc: 'Real-time GPS tracking en rittenplanning voor de Belgische transportsector.',
  fullDesc: 'Krijg 360-graden controle over uw wagenpark. Wij ontwikkelen Fleet Management software die live locatiegegevens, brandstofverbruik en tachograafdata verzamelt. Met slimme algoritmes optimaliseren we uw routes en plannen we predictief onderhoud in om stilstand te minimaliseren.'
},
{
  icon: <Building2 className="w-6 h-6 text-emerald-500" />,
  title: 'PropTech & Gebouwbeheersystemen',
  slug: 'proptech-gebouwbeheersystemen',
  desc: 'Digitaliseer vastgoedbeheer met slimme portalen voor syndici, eigenaren en huurders.',
  fullDesc: 'Moderniseer de vastgoedsector met onze PropTech oplossingen. Van applicaties voor huurincasso en storingenbeheer tot de integratie van Smart Building sensoren (IoT) voor energie-efficiëntie. Wij maken het beheer van residentieel en commercieel vastgoed transparant en geautomatiseerd.'
},
{
  icon: <Database className="w-6 h-6 text-rose-500" />,
  title: 'Maatwerk CRM voor KMO\'s',
  slug: 'maatwerk-crm-voor-kmos',
  desc: 'Slanke en doeltreffende CRM-systemen ontworpen rondom úw unieke verkoopproces.',
  fullDesc: 'Vergeet de complexe, dure standaardpakketten. Wij bouwen razendsnelle, op maat gemaakte CRM-applicaties die uw salesteam daadwerkelijk wil gebruiken. Met perfecte integraties naar uw Belgische boekhoudpakket, e-mail en VoIP systemen voor maximale conversie.'
},
{
  icon: <Clock className="w-6 h-6 text-fuchsia-600" />,
  title: 'B2B Reserverings- en Verhuursystemen',
  slug: 'b2b-reserverings-en-verhuursystemen',
  desc: 'Automatiseer complexe verhuur van materieel en ruimtes met klantspecifieke contracten.',
  fullDesc: 'Standaard boekingstools schieten tekort voor B2B. Wij bouwen maatwerk reserveringsplatformen voor het verhuren van zwaar materieel, laboratoria of werkruimtes, inclusief dynamische prijsstaffels, borgbeheer en na-facturatie via API-koppelingen met uw boekhoudpakket.'
},
{
  icon: <MapPin className="w-6 h-6 text-emerald-500" />,
  title: 'Smart City & IoT Dataplatformen',
  slug: 'smart-city-iot-dataplatformen',
  desc: 'Zet stadsdata om in actiegerichte dashboards voor mobiliteit en milieubeheer.',
  fullDesc: 'Voor overheden en slimme steden ontwikkelen wij robuuste cloud-portalen die miljoenen datapunten van IoT-sensoren (verkeer, fijnstof, afval) verwerken. Onze Big Data oplossingen visualiseren deze stromen, waardoor proactief stadsbeheer en Smart City initiatieven mogelijk worden.'
},
{
  icon: <Search className="w-6 h-6 text-indigo-500" />,
  title: 'Supply Chain Traceerbaarheid (Track & Trace)',
  slug: 'supply-chain-traceerbaarheid-track-trace',
  desc: 'End-to-end logistieke traceerbaarheid van boer tot bord voor de voedingsindustrie.',
  fullDesc: 'Garandeer voedselveiligheid en transparantie met onze geavanceerde Track & Trace software. Door integratie van RFID, QR-codes en temperatuursensoren (cold chain) bouwen we platformen waarmee u elke stap in uw supply chain feilloos documenteert volgens de normen van het FAVV.'
},
{
  icon: <Wallet className="w-6 h-6 text-rose-500" />,
  title: 'FinTech Auditing & OCR Rapportages',
  slug: 'fintech-auditing-ocr-rapportages',
  desc: 'Automatiseer uw financiële controleprocessen en data-extractie met AI.',
  fullDesc: 'Transformeer uw accountancy- of auditkantoor met Continuous Auditing. Wij ontwikkelen software die facturen en declaraties uitleest via slimme OCR, fraude detecteert via AI-patroonherkenning, en financiële consolidaties automatisch genereert voor KMO\'s en holdings.'
},
{
  icon: <Zap className="w-6 h-6 text-amber-500" />,
  title: 'Energy Management Systemen (EMS)',
  slug: 'energy-management-systemen-ems',
  desc: 'Verlaag energiekosten en CO2-uitstoot met geautomatiseerde stroomcontrole.',
  fullDesc: 'Integreer slimme meters, zonnepanelen, laadpalen en uw HVAC-infrastructuur in één centraal, op maat gemaakt EMS-dashboard. Beheer uw piekvraag (peak shaving), stuur dynamisch laadsessies aan en voldoe moeiteloos aan de CSRD-verplichtingen voor duurzaamheidsrapportage.'
},
{
  icon: <GraduationCap className="w-6 h-6 text-indigo-500" />,
  title: 'B2B Opleidings- & LMS Platformen',
  slug: 'b2b-opleidings-lms-platformen',
  desc: 'Eigen Learning Management Systemen (LMS) voor medewerkers en B2B-klanten.',
  fullDesc: 'Stroomlijn onboarding, veiligheidstrainingen en certificeringen met een maatwerk leeromgeving. Wij bouwen interactieve EdTech portalen die niet alleen cursussen aanbieden, maar direct gekoppeld zijn aan uw HR-systeem voor automatische opvolging van vereiste kwalificaties (zoals VCA).'
},
{
  icon: <Shield className="w-6 h-6 text-red-500" />,
  title: 'Cyber Risk & Monitoring Dashboards',
  slug: 'cyber-risk-monitoring-dashboards',
  desc: 'Real-time inzicht in uw digitale kwetsbaarheden en netwerkbeveiliging.',
  fullDesc: 'Voldoe aan de strenge NIS2-richtlijnen. Wij ontwikkelen geavanceerde security dashboards die uw IT-infrastructuur monitoren. Detecteer ongebruikelijke patronen via AI, scan automatisch op kwetsbaarheden en genereer met één druk op de knop compliance rapporten voor audits en verzekeraars.'
},
{
  icon: <Shapes className="w-6 h-6 text-sky-600" />,
  title: 'Digitale Werkbonnen (Field Service)',
  slug: 'digitale-werkbonnen-field-service',
  desc: 'Verhoog de efficiëntie van uw buitendienst met mobiele Field Service apps.',
  fullDesc: 'Gooi papieren werkbonnen weg. Wij bouwen mobiele (iOS/Android) of Progressive Web Apps voor uw technici. Inclusief digitale handtekeningen, urenregistratie, fotodocumentatie en automatische GPS-routeplanning, direct geïntegreerd in uw boekhoudpakket voor bliksemsnelle facturatie.'
},
{
  icon: <Landmark className="w-6 h-6 text-slate-700" />,
  title: 'Legal Tech & Workflow Automatisering',
  slug: 'legal-tech-workflow-automatisering',
  desc: 'Beveiligde cliëntportalen en geautomatiseerde tijdsregistratie voor de advocatuur.',
  fullDesc: 'Moderniseer uw advocaten- of notariskantoor. Wij ontwikkelen Legal Tech oplossingen met de hoogste beveiligingsstandaarden (end-to-end encryptie). Automatiseer documentgeneratie, billable hours en faciliteer veilige communicatie via afgeschermde portalen voor uw cliënten.'
},
{
  icon: <Cpu className="w-6 h-6 text-amber-600" />,
  title: 'Productie Planning Systemen (APS)',
  slug: 'productie-planning-systemen-aps',
  desc: 'Dynamische Advanced Planning & Scheduling (APS) software ter vervanging van Excel.',
  fullDesc: 'Optimaliseer uw fabrieksvloer. Onze APS-systemen berekenen real-time de meest efficiënte productieroutes op basis van machinecapaciteit, personeelsbeschikbaarheid en materiaalvoorraad. Verminder stilstand en simuleer "what-if" scenario\'s met intelligente algoritmes.'
},
{
  icon: <Building className="w-6 h-6 text-indigo-500" />,
  title: 'Digitale Handtekeningen & CLM',
  slug: 'digitale-handtekeningen-clm',
  desc: 'Contract Lifecycle Management met rechtsgeldige e-signature (itsme) integraties.',
  fullDesc: 'Versnel uw verkoopproces drastisch. Wij integreren veilige e-signature API\'s direct in uw portalen. Daarnaast bouwen we systemen voor Contract Lifecycle Management (CLM) die contracten automatisch genereren, veilig archiveren en u waarschuwen bij naderende vervaldata.'
},
{
  icon: <Activity className="w-6 h-6 text-rose-500" />,
  title: 'Zorg & e-Health Oplossingen',
  slug: 'zorg-e-health-oplossingen',
  desc: 'Beveiligde patiëntenportalen en telemedicine applicaties (KVKK/GDPR conform).',
  fullDesc: 'Digitaliseer de Belgische zorg met onze op maat gemaakte e-Health platformen. Van videoconsultaties (telemedicine) tot applicaties voor Remote Patient Monitoring en elektronische voorschriften. Alles gebouwd met de hoogste medische databeveiliging.'
},
{
  icon: <Store className="w-6 h-6 text-fuchsia-500" />,
  title: 'Omnichannel Retail Integraties',
  slug: 'omnichannel-retail-integraties',
  desc: 'Verbind fysieke kassa\'s (POS) met e-commerce voor gecentraliseerd voorraadbeheer.',
  fullDesc: 'Bied uw klanten een naadloze winkelervaring. Wij koppelen uw offline kassasystemen in Antwerpen of daarbuiten aan uw webshop en ERP. Dit zorgt voor real-time voorraadupdates, Click & Collect mogelijkheden en een gecentraliseerd spaarpuntensysteem.'
},
{
  icon: <Database className="w-6 h-6 text-sky-500" />,
  title: 'Cloud Migratie & Architectuur',
  slug: 'cloud-migratie-architectuur',
  desc: 'Veilige migratie van uw on-premise data naar wendbare cloud-infrastructuur (AWS/Azure).',
  fullDesc: 'Maak uw IT-infrastructuur toekomstbestendig. Wij begeleiden uw KMO bij de volledige migratie naar de cloud, zonder dataverlies of merkbare downtime. We optimaliseren uw databases en zorgen voor geautomatiseerde back-ups en ijzersterke netwerkbeveiliging.'
},
{
  icon: <Phone className="w-6 h-6 text-emerald-500" />,
  title: 'VoIP & Unified Communications',
  slug: 'voip-unified-communications',
  desc: 'Integreer cloud-telefonie naadloos met uw CRM- en supportsoftware.',
  fullDesc: 'Optimaliseer uw klantenservice met CTI (Computer Telephony Integration). Wij bouwen API-bruggen tussen uw VoIP-centrale en uw bedrijfssoftware. Geniet van functionaliteiten zoals Click-to-Call, automatische klantdossier pop-ups en gecentraliseerde gesprekslogs.'
},
{
  icon: <Network className="w-6 h-6 text-fuchsia-600" />,
  title: 'Maatwerk API-Koppelingen',
  slug: 'maatwerk-api-koppelingen',
  desc: 'Verbind geïsoleerde softwarepakketten (ERP, CRM, Webshop) via naadloze API-bruggen.',
  fullDesc: 'Voorkom dubbel invoerwerk. Wij ontwikkelen robuuste en extreem veilige middleware-architecturen die uw bestaande softwarepakketten in real-time laten communiceren. Ideaal voor automatische voorraadsynchronisatie of boekhoudkoppelingen.'
},
{
  icon: <Leaf className="w-6 h-6 text-emerald-600" />,
  title: 'Digitale Productpaspoorten (DPP)',
  slug: 'digitale-productpaspoorten-dpp',
  desc: 'Voldoe aan Europese milieuwetgeving met blockchain-gebaseerde traceerbaarheid.',
  fullDesc: 'Maak uw producten klaar voor de circulaire economie. Wij bouwen beveiligde dataplatformen (inclusief QR en RFID-koppelingen) die de volledige levenscyclus, materialen en CO2-voetafdruk van uw product transparant vastleggen voor consumenten en overheden.'
},
{
  icon: <Globe className="w-6 h-6 text-sky-500" />,
  title: 'Intranet & Digital Workspaces',
  slug: 'intranet-digital-workspaces',
  desc: 'Verhoog productiviteit met een moderne, gepersonaliseerde digitale werkplek.',
  fullDesc: 'Vervang logge intranets door dynamische Employee Experience Portals. Wij integreren Single Sign-On (SSO) voor veilige toegang tot alle bedrijfsapps, bouwen gepersonaliseerde HR-dashboards en stimuleren interne communicatie in een mobielvriendelijke omgeving.'
},
{
  icon: <Zap className="w-6 h-6 text-indigo-500" />,
  title: 'AI-Gedreven Klantenservice',
  slug: 'ai-gedreven-klantenservice',
  desc: 'Automatiseer eerstelijns support met AI-chatbots getraind op uw eigen bedrijfsdata.',
  fullDesc: 'Integreer Generatieve AI (zoals GPT-4) op een veilige manier in uw supportkanalen. Onze RAG-architecturen (Retrieval-Augmented Generation) zorgen ervoor dat de chatbot nauwkeurige, meertalige antwoorden geeft op basis van uw handleidingen en ticket-historiek.'
},
{
  icon: <Rocket className="w-6 h-6 text-rose-500" />,
  title: 'Low-Code Interne Tools',
  slug: 'low-code-interne-tools',
  desc: 'Versnel digitalisering met hybride low-code/custom-code applicatieontwikkeling.',
  fullDesc: 'Heeft u snel een interne app nodig voor voorraadbeheer of dataregistratie? Wij gebruiken geavanceerde low-code platformen gecombineerd met maatwerk logica om uw Time-to-Market te halveren, zonder in te boeten aan schaalbaarheid of veiligheid.'
},
{
  icon: <Microscope className="w-6 h-6 text-emerald-500" />,
  title: 'Kwaliteitscontrole (QMS) Systemen',
  slug: 'kwaliteitscontrole-qms-systemen',
  desc: 'Digitaliseer uw kwaliteitsinspecties met mobiele apps voor de productievloer.',
  fullDesc: 'Elimineer papieren klemborden. We ontwikkelen cloud-gebaseerde Quality Management Systems (QMS) specifiek voor tablets op de fabrieksvloer. Met fotodocumentatie, digitale handtekeningen en automatische rapportages garandeert u ISO- en IFS-compliance zonder administratieve rompslomp.'
},
{
  icon: <Cpu className="w-6 h-6 text-fuchsia-600" />,
  title: 'Robotica & Cobot Integratie (HMI)',
  slug: 'robotica-cobot-integratie-hmi',
  desc: 'Verbind collaboratieve robots (cobots) naadloos met uw ERP en Machine Vision.',
  fullDesc: 'Maak uw robots slim. Wij bouwen intuïtieve Human-Machine Interfaces (HMI) en robuuste API\'s die cobots (zoals Universal Robots) verbinden met uw bedrijfsnetwerk, camera-systemen (AI) en planningssoftware voor geautomatiseerde en foutloze productie.'
},
{
  icon: <BarChart3 className="w-6 h-6 text-indigo-500" />,
  title: 'Predictive Finance & AI Dashboards',
  slug: 'predictive-finance-ai-dashboards',
  desc: 'Voorspel cashflow en klantverloop (churn) met geavanceerde Machine Learning.',
  fullDesc: 'Kijk in de toekomst, niet naar het verleden. Onze FinTech specialisten integreren Predictive Analytics in uw financiële software. We ontwikkelen AI-modellen die liquiditeitsproblemen voorspellen, budgetten dynamisch aanpassen en klantverloop proactief signaleren.'
},
{
  icon: <Leaf className="w-6 h-6 text-green-600" />,
  title: 'Afvalbeheer & Cleantech Software',
  slug: 'afvalbeheer-cleantech-software',
  desc: 'Optimaliseer recyclingroutes en OVAM-administratie voor de circulaire economie.',
  fullDesc: 'Speciaal voor de cleantech- en afvalverwerkingssector ontwerpen wij ERP-modules voor omgekeerde logistiek. Integreer weegbruggen, optimaliseer ophaalroutes op basis van IoT-sensoren in containers en automatiseer de wettelijke milieuregistraties.'
},
{
  icon: <UserCog className="w-6 h-6 text-rose-500" />,
  title: 'B2B Event Management Systemen',
  slug: 'b2b-event-management-systemen',
  desc: 'White-label portalen voor congresregistratie, facturatie en lead retrieval.',
  fullDesc: 'Organiseer professionele B2B-evenementen en vakbeurzen met maatwerk software. Wij bieden gepersonaliseerde registratiestromen, naadloze B2B-facturatie, razendsnelle on-site badge printing via QR en mobiele lead retrieval apps voor uw sponsors.'
},
{
  icon: <Shapes className="w-6 h-6 text-fuchsia-500" />,
  title: 'AR Configuratoren voor B2B Sales',
  slug: 'ar-configuratoren-voor-b2b-sales',
  desc: 'Visualiseer complexe industriële producten met 3D Augmented Reality.',
  fullDesc: 'Versnel uw sales cycle aanzienlijk. Wij ontwikkelen 3D product configuratoren (gekoppeld aan uw CPQ-systeem) waarmee uw verkoopteam via tablets machines en componenten real-time en op ware grootte in de fabriekshal van de klant kan projecteren.'
},
{
  icon: <Rocket className="w-6 h-6 text-indigo-500" />,
  title: 'SaaS Platform Ontwikkeling',
  slug: 'saas-platform-ontwikkeling',
  desc: 'Transformeer uw consultancy-diensten in een schaalbaar, maandelijks abonnement.',
  fullDesc: 'Van dienstverlener naar techbedrijf. Wij fungeren als uw technische partner en bouwen multi-tenant SaaS-applicaties op cloud-native architecturen. Inclusief geautomatiseerde facturatie (Stripe integratie) en strikte Row-Level Security voor al uw klanten.'
},
{
  icon: <Building2 className="w-6 h-6 text-amber-500" />,
  title: 'ConTech & Werfbeheer Portalen',
  slug: 'contech-werfbeheer-portalen',
  desc: 'Centraliseer werfcommunicatie, BIM-integraties en RSZ-aanwezigheidsregistratie.',
  fullDesc: 'Digitaliseer de Belgische bouwsector. Wij bouwen portals die architecten, aannemers en onderaannemers verbinden. Met functies voor digitale punch-lists, 4D/5D BIM koppelingen en directe integratie met Check-in-at-work ter vermindering van faalkosten.'
},
{
  icon: <Shield className="w-6 h-6 text-red-600" />,
  title: 'Cybersecurity & Penetration Testing',
  slug: 'cybersecurity-penetration-testing',
  desc: 'Beveiligingsaudits en ethisch hacken om kwetsbaarheden in uw IT-netwerk bloot te leggen.',
  fullDesc: 'Wees hackers een stap voor. Naast het bouwen van veilige software, voeren we geavanceerde Pen-Tests uit op uw infrastructuur. Wij leveren gedetailleerde compliancerapporten (vereist voor ISO 27001 / NIS2) met concrete stappen om datalekken te dichten.'
},
{
  icon: <CreditCard className="w-6 h-6 text-emerald-500" />,
  title: 'Peppol e-Invoicing Integratie',
  slug: 'peppol-e-invoicing-integratie',
  desc: 'Maak uw facturatiesysteem klaar voor de Belgische B2B e-Invoicing verplichting.',
  fullDesc: 'Voorkom boetes en versnel betalingen. Wij integreren UBL- en Peppol-standaarden direct in uw ERP- of maatwerk facturatiesoftware. Verzend en ontvang gestructureerde, fraudebestendige elektronische facturen volledig automatisch via beveiligde Access Points.'
},
{
  icon: <Database className="w-6 h-6 text-indigo-500" />,
  title: 'Document Management (DMS)',
  slug: 'document-management-dms',
  desc: 'Veilige, doorzoekbare cloud-archieven met geavanceerd versiebeheer.',
  fullDesc: 'Maak komaf met versnipperde netwerkschijven. Wij implementeren Document Management Systemen (DMS) met OCR-doorzoekbaarheid, strikte toegangsrechten (RLS) en versiebeheer, waardoor u bedrijfsdocumenten en contracten altijd in seconden terugvindt.'
},
{
  icon: <Clock className="w-6 h-6 text-rose-500" />,
  title: 'Urenregistratie & Payroll Software',
  slug: 'urenregistratie-payroll-software',
  desc: 'Digitale prikklokken en mobiele apps, direct gekoppeld aan uw sociaal secretariaat.',
  fullDesc: 'Digitaliseer uw uren- en verlofregistratie. Onze maatwerk apps sturen goedgekeurde urenstaten en GPS-locaties foutloos en volautomatisch door naar Belgische loonverwerkers (zoals SD Worx en Acerta) voor een stressvrije loonrun.'
},
{
  icon: <Network className="w-6 h-6 text-emerald-500" />,
  title: 'B2B Matching & Marktplaatsen',
  slug: 'b2b-matching-marktplaatsen',
  desc: 'Schaalbare platform-architecturen voor het delen van capaciteit en diensten.',
  fullDesc: 'Betreed de platformeconomie. Wij ontwerpen complexe B2B-marktplaatsen die vraag en aanbod naadloos verbinden. Inclusief veilige betalingsafhandeling (escrow via Stripe), robuuste zoekalgoritmes en reviewsystemen om vertrouwen op te bouwen.'
},
{
  icon: <Shield className="w-6 h-6 text-sky-600" />,
  title: 'Digitale HACCP & Kwaliteitshandboeken',
  slug: 'digitale-haccp-kwaliteitshandboeken',
  desc: 'Borg voedselveiligheid via IoT-sensoren en mobiele compliance-apps.',
  fullDesc: 'Vergeet papieren lijsten. Wij bouwen digitale HACCP-applicaties voor de voedingsindustrie. Integreer IoT-temperatuursensoren voor automatische alarmering en borg de volledige traceerbaarheid, zodat u altijd 100% voorbereid bent op een FAVV-controle.'
},
{
  icon: <ShoppingCart className="w-6 h-6 text-amber-500" />,
  title: 'E-Procurement & Inkoopsoftware',
  slug: 'e-procurement-inkoopsoftware',
  desc: 'Centraliseer uw uitgaven met geautomatiseerde bestel- en goedkeuringsstromen.',
  fullDesc: 'Krijg grip op uw "Maverick Buying". We ontwikkelen e-procurement portalen (inclusief PunchOut-catalogi) met budgetbeheer, geautomatiseerde goedkeuringsworkflows voor Purchase Orders en automatische factuurcontrole (Three-Way Matching).'
},
{
  icon: <Database className="w-6 h-6 text-fuchsia-600" />,
  title: 'Odoo ERP Ontwikkeling & Maatwerk',
  slug: 'odoo-erp-ontwikkeling-maatwerk',
  desc: 'Implementatie en custom module-ontwikkeling voor het open-source Odoo ERP.',
  fullDesc: 'Maak uw bedrijfsprocessen schaalbaar. Wij zijn gespecialiseerd in het integreren van Odoo ERP voor Vlaamse KMO\'s. Van het configureren van standaard apps (Voorraad, CRM, Boekhouding) tot het programmeren van complexe maatwerkmodules en Belgische lokalisaties.'
},
{
  icon: <Globe className="w-6 h-6 text-sky-500" />,
  title: 'Salesforce & HubSpot Customization',
  slug: 'salesforce-hubspot-customization',
  desc: 'Haal het maximale uit uw premium CRM met op maat gemaakte API-integraties.',
  fullDesc: 'Standaard out-of-the-box CRM\'s schieten vaak tekort. Wij bouwen complexe API-koppelingen tussen Salesforce of HubSpot en uw ERP of boekhouding, zorgen voor automatische twee-weg datasynchronisatie en ontwerpen maatwerk workflows specifiek voor uw sales cycle.'
},
{
  icon: <HelpCircle className="w-6 h-6 text-emerald-500" />,
  title: 'B2B Gamification & E-Learning',
  slug: 'b2b-gamification-e-learning',
  desc: 'Verhoog software adoptie met slimme UX en spelelementen voor B2B.',
  fullDesc: 'Saaie bedrijfssoftware is verleden tijd. Wij passen technieken uit de gamification (leaderboards, badges, progressiebalken) toe op uw interne tools, CRM-dashboards of LMS (E-Learning) portalen om de betrokkenheid en productiviteit van uw werknemers aanzienlijk te verhogen.'
},
{
  icon: <BarChart3 className="w-6 h-6 text-indigo-500" />,
  title: 'Financiële Consolidatie Software',
  slug: 'financile-consolidatie-software',
  desc: 'Geautomatiseerde groepsrapportages en intercompany eliminaties voor holdings.',
  fullDesc: 'Sluit uw boekjaar in dagen, niet in weken. Wij bouwen financiële portalen die data uit de boekhoudpakketten van al uw vennootschappen in real-time consolideren. Inclusief automatische eliminatie van intercompany transacties, valutaconversies en volledige audit trails.'
},
{
  icon: <CreditCard className="w-6 h-6 text-rose-500" />,
  title: 'FinTech Factoring Platformen',
  slug: 'fintech-factoring-platformen',
  desc: 'API-integraties voor automatische factuurfinanciering en werkkapitaalbeheer.',
  fullDesc: 'Verbeter uw B2B-cashflow. Wij ontwikkelen integraties tussen uw ERP en moderne digitale factoringmaatschappijen. Dit maakt real-time kredietchecks mogelijk, versnelt factuurfinanciering (binnen 24 uur uitbetaald) en automatiseert de afpunting van facturen.'
},
{
  icon: <MonitorPlay className="w-6 h-6 text-sky-500" />,
  title: 'Digital Twin Software & Integratie',
  slug: 'digital-twin-software-integratie',
  desc: 'Simuleer productielijnen in een virtuele 3D-omgeving via IoT real-time data.',
  fullDesc: 'Minimaliseer productierisico\'s. We ontwikkelen de backend-architectuur voor Digital Twins. Door uw fysieke sensoren (IoT) te koppelen aan geavanceerde 3D-modellen, kunt u virtuele inbedrijfstelling (virtual commissioning) en predictive maintenance uitvoeren zonder uw fabrieksvloer te verstoren.'
},
{
  icon: <Receipt className="w-6 h-6 text-fuchsia-600" />,
  title: 'B2B Subscription Management',
  slug: 'b2b-subscription-management',
  desc: 'Beheer complexe abonnementsmodellen (Recurring Revenue) en self-service portalen.',
  fullDesc: 'Maak de transitie naar de abonnementeneconomie. Wij bouwen maatwerk billing-portalen geïntegreerd met Stripe of Chargebee. Beheer moeiteloos pro-rata facturatie, dunning management (bij gefaalde betalingen) en geef uw B2B-klanten een eigen dashboard om abonnementen aan te passen.'
},
{
  icon: <Truck className="w-6 h-6 text-amber-500" />,
  title: 'Fleet Management & Telematica Dashboards',
  slug: 'fleet-management-telematica-dashboards',
  desc: 'Zet ruwe OBD- en GPS-data om in actiegerichte rapporten voor brandstofbesparing.',
  fullDesc: 'Krijg controle over uw wagenpark. Wij ontwerpen cloud-dashboards die verbonden zijn met de telematica van uw voertuigen. Analyseer rijgedrag (eco-scores), automatiseer onderhoudsmeldingen op basis van echte draaiuren en stel geofencing in ter preventie van diefstal.'
},
{
  icon: <Glasses className="w-6 h-6 text-emerald-500" />,
  title: 'Virtual Reality (VR) Training Portalen',
  slug: 'virtual-reality-vr-training-portalen',
  desc: 'Immersive Learning: Veilige, virtuele veiligheidstrainingen voor de industrie.',
  fullDesc: 'Train uw personeel risicoloos in gevaarlijke omgevingen. We integreren VR-hardware met uw bestaande (HR) systemen. Door de xAPI-standaard te gebruiken, worden de prestaties en keuzes van werknemers in de VR-simulatie direct, veilig en aantoonbaar opgeslagen in hun personeelsdossier.'
},
{
  icon: <Wind className="w-6 h-6 text-indigo-500" />,
  title: 'Drone Data & Photogrammetry Portalen',
  slug: 'drone-data-photogrammetry-portalen',
  desc: 'Cloud-infrastructuur voor het verwerken van terabytes aan drone-inspectie beelden.',
  fullDesc: 'Voor de bouw en landbouw (AgriTech). Wij bouwen zware backend systemen die ruwe drone beelden automatisch omzetten in 3D-puntenwolken of thermische analyses met behulp van AI. Deel de resultaten vervolgens via een beveiligd, white-label dashboard met uw eindklanten.'
},
{
  icon: <Building className="w-6 h-6 text-fuchsia-600" />,
  title: 'Smart Building & PropTech Portalen',
  slug: 'smart-building-proptech-portalen',
  desc: 'Transformeer kantoorgebouwen met IoT-sensoren, hot desking en energiemanagement.',
  fullDesc: 'Verlaag energiekosten en verhoog de huurwaarde. Wij bouwen Property Technology (PropTech) platformen voor vastgoedbeheerders. Integreer IoT-sensoren voor real-time inzicht in bezettingsgraad en luchtkwaliteit, en bied huurders intuïtieve apps voor hot-desking en zaalreserveringen.'
},
{
  icon: <Link className="w-6 h-6 text-indigo-500" />,
  title: 'Blockchain & Supply Chain Development',
  slug: 'blockchain-supply-chain-development',
  desc: 'Onweerlegbare traceerbaarheid en Smart Contracts voor de maritieme en logistieke sector.',
  fullDesc: 'Voorkom fraude in complexe supply chains. We ontwikkelen veilige, private enterprise blockchain-applicaties (bijv. Hyperledger). Digitaliseer vrachtbrieven, garandeer de conflictvrije herkomst van goederen en automatiseer logistieke betalingen met onfeilbare Smart Contracts.'
},
{
  icon: <Users className="w-6 h-6 text-rose-500" />,
  title: 'AI Recruitment & HR-Tech',
  slug: 'ai-recruitment-hr-tech',
  desc: 'Versnel uw wervingsproces met geautomatiseerde CV-parsing en matching algoritmes.',
  fullDesc: 'Win de "War for Talent". Wij ontwikkelen AI-gedreven Applicant Tracking Systems (ATS) en B2B-vacatureplatformen. Onze NLP-algoritmes lezen en anonimiseren cv\'s razendsnel, matchen kandidaten objectief met vacatures en automatiseren de eerste sollicitatierondes via chatbots.'
},
{
  icon: <Printer className="w-6 h-6 text-emerald-500" />,
  title: 'Additive Manufacturing (MES) Software',
  slug: 'additive-manufacturing-mes-software',
  desc: 'Stroomlijn industriële 3D-printer farms met automatische offerte- en nestingsystemen.',
  fullDesc: 'Maak uw 3D-print productie schaalbaar. Wij bouwen gespecialiseerde Manufacturing Execution Systems (MES) voor de Additive Manufacturing industrie. Inclusief B2B-klantenportalen voor directe CAD/STL prijsberekeningen, ordermanagement en dynamische printbed-nesting algoritmes.'
},
{
  icon: <Utensils className="w-6 h-6 text-amber-500" />,
  title: 'FoodTech & Predictive Ordering',
  slug: 'foodtech-predictive-ordering',
  desc: 'Bestrijd voedselverspilling en optimaliseer inkoop met AI-vraagvoorspelling.',
  fullDesc: 'Data-gedreven keukens. Wij ontwikkelen FoodTech software voor horeca-ketens en grootkeukens (catering). Koppel uw kassasysteem aan onze AI-algoritmes die historische data en weersvoorspellingen analyseren om uw inkoop (predictive ordering) tot op de gram nauwkeurig te optimaliseren.'
},
{
  icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
  title: 'ESG & CSRD Rapportage Software',
  slug: 'esg-csrd-rapportage-software',
  desc: 'Automatiseer ecologische data-extractie voor Europese compliance (CSRD).',
  fullDesc: 'Maak duurzaamheidsrapportage pijnloos. Wij bouwen portalen die via API\'s integreren met uw ERP, HR-systemen en slimme meters. Bereken automatisch Scope 1, 2 en 3 emissies en genereer met één druk op de knop audit-proof rapportages in het vereiste digitale formaat.'
},
{
  icon: <Settings className="w-6 h-6 text-sky-500" />,
  title: 'Warehouse Control Systems (WCS)',
  slug: 'warehouse-control-systems-wcs',
  desc: 'Middleware voor de real-time aansturing van transportbanden, sorters en AGV\'s.',
  fullDesc: 'Het zenuwstelsel van uw magazijn. Ons WCS overbrugt de kloof tussen uw logge WMS en uw fysieke PLC\'s. Optimaliseer de routering van dozen op de transportband in milliseconden, vermijd flessenhalzen en integreer machines van verschillende merken zonder vendor lock-in.'
},
{
  icon: <Award className="w-6 h-6 text-rose-500" />,
  title: 'B2B Partner & Loyalty Platforms',
  slug: 'b2b-partner-loyalty-platforms',
  desc: 'Bouw netwerkloyaliteit via Partner Relationship Management (PRM) portalen.',
  fullDesc: 'Ga verder dan volumekortingen. Wij ontwikkelen PRM-platformen voor fabrikanten en groothandels. Integreer gamification (partner tiers), beheer marketingfondsen (MDF) en voorzie installateurs van exclusieve e-learning content om de band met uw merk onbreekbaar te maken.'
},
{
  icon: <Activity className="w-6 h-6 text-indigo-500" />,
  title: 'Predictive Maintenance AI',
  slug: 'predictive-maintenance-ai',
  desc: 'Voorkom machine-uitval door IoT-trillingssensoren te koppelen aan Machine Learning.',
  fullDesc: 'Transformeer van reactief naar predictief onderhoud. Wij trainen AI-modellen op uw IoT-sensordata (trilling, akoestiek). Detecteer minuscule afwijkingen weken voordat een onderdeel breekt en laat het systeem automatisch werkbonnen aanmaken in uw ERP.'
},
{
  icon: <Code2 className="w-6 h-6 text-fuchsia-500" />,
  title: 'Headless E-commerce & API-First',
  slug: 'headless-e-commerce-api-first',
  desc: 'Razendsnelle B2B webshops gebouwd met moderne frameworks (Next.js / React).',
  fullDesc: 'Doorbreek de grenzen van traditionele platformen (Magento/WooCommerce). Wij bouwen API-first, headless commerce architecturen. Koppel een bliksemsnelle frontend aan een robuuste backend, perfect voor complexe B2B-prijzen, omnichannel verkoop (apps, kiosken) en superieure SEO.'
},
{
  icon: <Bot className="w-6 h-6 text-fuchsia-600" />,
  title: 'RPA & Softwarebots',
  slug: 'rpa-softwarebots',
  desc: 'Automatiseer repetitief administratief werk met Robotic Process Automation.',
  fullDesc: 'Laat robots het data-entry werk doen. Wij ontwikkelen RPA-oplossingen (bijv. met UiPath) die muisklikken en typwerk imiteren. Automatiseer factuurverwerking, order-entry in oude ERP-systemen en data-migraties zonder dat u ingewikkelde API\'s hoeft te ontwikkelen.'
},
{
  icon: <Scan className="w-6 h-6 text-emerald-500" />,
  title: '3D Scan & PLM Integratie',
  slug: '3d-scan-plm-integratie',
  desc: 'Beheer complexe 3D Point Clouds en Reverse Engineering data in de cloud.',
  fullDesc: 'Voor de moderne maakindustrie. Wij bouwen backend systemen voor het opslaan, renderen en delen van zware 3D-laserscan data (puntenwolken). Integreer naadloos met uw Product Lifecycle Management (PLM) systeem om reverse engineering processen te versnellen.'
},
{
  icon: <CloudLightning className="w-6 h-6 text-sky-500" />,
  title: 'Cloud Security (CSPM)',
  slug: 'cloud-security-cspm',
  desc: 'Bewaak uw AWS/Azure architectuur tegen datalekken door misconfiguraties.',
  fullDesc: 'Uw cloud is alleen veilig als deze correct is geconfigureerd. Wij implementeren Cloud Security Posture Management (CSPM) software. Het systeem scant uw netwerk 24/7, repareert open poorten automatisch (auto-remediation) en bewaakt uw NIS2 en ISO 27001 compliance.'
},
{
  icon: <CalendarRange className="w-6 h-6 text-indigo-500" />,
  title: 'B2B Verhuur Portalen',
  slug: 'b2b-verhuur-portalen',
  desc: 'E-commerce platformen voor de online verhuur van zware industriële machines.',
  fullDesc: 'Digitaliseer uw machineverhuur. Wij bouwen B2B-reserveringssystemen die live verbonden zijn met de beschikbaarheid in uw ERP. Inclusief klant-specifieke staffelprijzen, digitale borg-reserveringen en elektronische handtekeningen (itsme) voor het huurcontract.'
},
{
  icon: <HardHat className="w-6 h-6 text-amber-500" />,
  title: 'Digitale Werkvergunningen (PTW)',
  slug: 'digitale-werkvergunningen-ptw',
  desc: 'HSE en Permit to Work software voor de chemie en zware industrie.',
  fullDesc: 'Borg veiligheid op industriële sites. Wij ontwikkelen mobiele applicaties voor digitale werkvergunningen (Permit to Work). Laat aannemers vooraf risicoanalyses (TRA) invullen, keur vergunningen digitaal goed op het veld en beheer Lockout-Tagout (LOTO) procedures veilig via de tablet.'
},
{
  icon: <FileSearch className="w-6 h-6 text-fuchsia-600" />,
  title: 'Document AI & OCR Automatisering',
  slug: 'document-ai-ocr-automatisering',
  desc: 'Extraheer automatisch data uit facturen, contracten en CMR\'s met Machine Learning.',
  fullDesc: 'Ouderwetse OCR volstaat niet meer. Wij implementeren geavanceerde Document AI-oplossingen (Google/Azure) die de context van bedrijfsdocumenten écht begrijpen. Automatiseer uw Accounts Payable, douane-documentatie en contractanalyses met 99% nauwkeurigheid zonder handmatige datainvoer.'
},
{
  icon: <MonitorSmartphone className="w-6 h-6 text-indigo-500" />,
  title: 'B2B Reseller Portalen & CPQ',
  slug: 'b2b-reseller-portalen-cpq',
  desc: 'Configure, Price, Quote (CPQ) software voor uw distributeurs en installateurs.',
  fullDesc: 'Versnel uw channel sales. We bouwen self-service reseller portalen voorzien van een krachtige CPQ-engine. Laat uw B2B-partners zelfstandig complexe, maatwerk producten configureren, bereken real-time hun specifieke kortingen en genereer foutloze PDF-offertes met één klik.'
},
{
  icon: <DatabaseBackup className="w-6 h-6 text-sky-500" />,
  title: 'PIM Systemen voor Groothandels',
  slug: 'pim-systemen-voor-groothandels',
  desc: 'Product Information Management (PIM) als één bron van waarheid voor uw e-commerce.',
  fullDesc: 'Elimineer de chaos van verspreide Excel-lijsten. Wij integreren robuuste PIM-systemen (zoals Akeneo of Pimcore) met uw ERP. Centraliseer technische specificaties, media, meertalige vertalingen en distribueer deze data foutloos naar uw B2B webshop, geprinte catalogi en marketplaces.'
},
{
  icon: <TrendingUp className="w-6 h-6 text-emerald-500" />,
  title: 'AI Demand Forecasting & Voorraad',
  slug: 'ai-demand-forecasting-voorraad',
  desc: 'Voorspel toekomstige vraag en optimaliseer werkkapitaal met Machine Learning.',
  fullDesc: 'Optimaliseer uw supply chain proactief. Wij ontwikkelen slimme forecasting dashboards die historische ERP-data combineren met weersvoorspellingen en markttrends. Verlaag dode voorraden, voorspel de impact van promoties en verhoog uw leverbetrouwbaarheid (Service Level).'
},
{
  icon: <BatteryCharging className="w-6 h-6 text-rose-500" />,
  title: 'EV Fleet & Laadpaal Beheer',
  slug: 'ev-fleet-laadpaal-beheer',
  desc: 'Cloud-portalen voor de financiële afhandeling en load-balancing van elektrische vloten.',
  fullDesc: 'Beheer de vergroening van uw wagenpark digitaal. Wij bouwen portalen voor EV Fleet Management. Integreer automatische split-billing voor thuislaadkosten via payroll, beheer Smart Charging prioriteiten (load balancing) op kantoor en monitor de live actieradius van elektrische bestelwagens.'
},
{
  icon: <FileSignature className="w-6 h-6 text-fuchsia-600" />,
  title: 'Peppol & E-Invoicing Integraties',
  slug: 'peppol-e-invoicing-integraties',
  desc: 'Maak uw oude ERP klaar voor de Belgische Peppol e-invoicing verplichting (2026).',
  fullDesc: 'Wees compliant zonder uw ERP te vervangen. Wij bouwen middleware die uw bestaande facturatieflow (PDF/XML) vertaalt naar het vereiste UBL-formaat en deze naadloos aflevert via het Peppol-netwerk. Inclusief geautomatiseerde inkomende factuurverwerking (AP automation).'
},
{
  icon: <Truck className="w-6 h-6 text-sky-500" />,
  title: 'Yard Management Systems (YMS)',
  slug: 'yard-management-systems-yms',
  desc: 'Elimineer files aan de laadkaai met time-slot booking en digitale poort-kiosken.',
  fullDesc: 'Digitaliseer het buitenterrein van uw distributiecentrum. Ons YMS biedt transporteurs een online portaal om laad- en losafspraken te boeken. Gecombineerd met meertalige selfservice kiosken voor chauffeurs en live dock-monitoring, verlaagt u wachttijden (demurrage) drastisch.'
},
{
  icon: <LayoutDashboard className="w-6 h-6 text-indigo-500" />,
  title: 'B2B Self-Service Portalen',
  slug: 'b2b-self-service-portalen',
  desc: 'Verlicht uw binnendienst met geavanceerde portalen voor orderhistorie en RMA\'s.',
  fullDesc: 'Geef B2B-klanten de controle. Wij bouwen beveiligde klantenzones die real-time data uit uw ERP ontsluiten. Uw distributeurs kunnen 24/7 hun facturen downloaden, actuele kredietlimieten bekijken, oude orders met één klik dupliceren en retouren (RMA) digitaal aanmelden.'
},
{
  icon: <Cpu className="w-6 h-6 text-emerald-500" />,
  title: 'Edge Computing voor Industrie 4.0',
  slug: 'edge-computing-voor-industrie-40',
  desc: 'Razendsnelle lokale dataverwerking en AI zonder cloud-latency (on-premise).',
  fullDesc: 'Voor missiekritieke systemen in fabrieken waar de cloud te traag is. Wij deployen Machine Vision en IoT-algoritmes lokaal (op Edge-devices) voor beslissingen in milliseconden. Bespaar bandbreedte en garandeer maximale dataprivacy (bijv. in laboratoria of defensie).'
},
{
  icon: <Recycle className="w-6 h-6 text-amber-500" />,
  title: 'Circulaire & Waste Management Software',
  slug: 'circulaire-waste-management-software',
  desc: 'Portalen voor het traceren van reststromen en B2B afval-marktplaatsen.',
  fullDesc: 'Monetiseer de circulaire economie. Wij ontwikkelen software voor afvalverwerkers en producenten. Digitaliseer de weegbrug-processen, creëer elektronische materiaalpaspoorten en bouw B2B-marktplaatsen om industriële reststromen te verhandelen als nieuwe grondstoffen.'
},
{
  icon: <Radio className="w-6 h-6 text-fuchsia-600" />,
  title: 'M2M & IoT Communicatie',
  slug: 'm2m-iot-communicatie',
  desc: 'Laat machines autonoom communiceren via OPC-UA en MQTT protocollen.',
  fullDesc: 'Machine-to-Machine communicatie voor de Industrie 4.0. Wij bouwen de middleware die ervoor zorgt dat uw sensoren, CNC-machines en silo\'s autonoom beslissingen nemen en veilig data uitwisselen met uw centrale ERP-systemen zonder menselijke tussenkomst.'
},
{
  icon: <Images className="w-6 h-6 text-indigo-500" />,
  title: 'Digital Asset Management (DAM)',
  slug: 'digital-asset-management-dam',
  desc: 'Centraliseer en organiseer bedrijfsfoto\'s, 3D-renders en marketingmaterialen.',
  fullDesc: 'Breng structuur in uw marketingbestanden. Wij implementeren B2B DAM-systemen met AI-gestuurde image-tagging en Brand Portals voor uw distributeurs. Integreer uw DAM direct met uw PIM en e-commerce platform voor consistente merkcommunicatie.'
},
{
  icon: <Calculator className="w-6 h-6 text-emerald-500" />,
  title: 'B2B Dynamic Pricing Engines',
  slug: 'b2b-dynamic-pricing-engines',
  desc: 'Automatiseer prijsberekeningen op basis van inkoopprijzen en voorraadniveaus.',
  fullDesc: 'Bescherm uw marges in een volatiele markt. Wij ontwikkelen algoritmes voor Dynamic Pricing die continu uw inkoopprijzen (grondstoffen), concurrentiedata en voorraad analyseren, om zo uw B2B verkoopprijzen in real-time te optimaliseren in uw webshop en ERP.'
},
{
  icon: <Wrench className="w-6 h-6 text-sky-500" />,
  title: 'Facility Management (CAFM)',
  slug: 'facility-management-cafm',
  desc: 'Computer-Aided Facility Management voor het beheer van kantoorgebouwen.',
  fullDesc: 'Stroomlijn het gebouwbeheer voor facility managers. Wij bouwen portalen voor het melden van defecten (ticketing), het plannen van wettelijk preventief onderhoud (liften, HVAC) en het aansturen van externe schoonmaakploegen op basis van sensordata (Smart Cleaning).'
},
{
  icon: <TowerControl className="w-6 h-6 text-rose-500" />,
  title: 'Supply Chain Control Towers',
  slug: 'supply-chain-control-towers',
  desc: 'Real-time, end-to-end zichtbaarheid en Exception Management in de logistiek.',
  fullDesc: 'De cockpit voor uw logistieke operaties. Wij consolideren data uit uw ERP, WMS, TMS en die van uw transporteurs (API/EDI) in één overkoepelend dashboard. Krijg grip op vertragingen, stuur proactief bij met AI (Exception Management) en deel inzicht veilig met ketenpartners.'
},
{
  icon: <PackageOpen className="w-6 h-6 text-fuchsia-600" />,
  title: 'Order Management Systems (OMS)',
  slug: 'order-management-systems-oms',
  desc: 'Orkestreer complexe B2B order-routing, split-shipments en drop-shipping.',
  fullDesc: 'De ontbrekende schakel in B2B e-commerce. Ons OMS fungeert als intelligente middleware tussen uw webshop, ERP en magazijnen. Optimaliseer logistieke kosten door het systeem autonoom te laten beslissen uit welk distributiecentrum (of via welke drop-shipper) een order het efficiëntst verzonden kan worden.'
},
{
  icon: <Lock className="w-6 h-6 text-sky-500" />,
  title: 'DeFi & Smart Contract Development',
  slug: 'defi-smart-contract-development',
  desc: 'Beveilig en versnel B2B-transacties met blockchain-gebaseerde escrow en factoring.',
  fullDesc: 'Programmeerbaar geld voor B2B. Wij ontwikkelen veilige Smart Contracts en enterprise DeFi-oplossingen. Automatiseer betalingen zodra aan IoT-voorwaarden is voldaan (escrow), versnel uw werkkapitaal via gedecentraliseerde micro-factoring en garandeer absolute transparantie in de financiële supply chain.'
},
{
  icon: <MonitorUp className="w-6 h-6 text-indigo-500" />,
  title: 'Headless CMS Integraties',
  slug: 'headless-cms-integraties',
  desc: 'API-first content management (Contentful/Sanity) voor omnichannel publicaties.',
  fullDesc: 'Neem afscheid van logge WordPress-installaties. Wij bouwen Headless CMS architecturen. Scheid uw content (backend) van het design (frontend). Publiceer artikelen, B2B handleidingen en persberichten razendsnel en tegelijkertijd naar uw webshop, mobiele apps en werf-kiosken via schaalbare API\'s.'
},
{
  icon: <Network className="w-6 h-6 text-emerald-500" />,
  title: 'API Management & Gateways',
  slug: 'api-management-gateways',
  desc: 'Beveilig, monitor en monetiseer de data-stromen tussen uw ERP en externe partners.',
  fullDesc: 'Bescherm de digitale deuren van uw bedrijf. Wij implementeren robuuste API-gateways (Kong/Azure). Bescherm uw ERP tegen overbelasting met Rate Limiting, garandeer veilige B2B-data uitwisseling met OAuth2-authenticatie en transformeer waardevolle bedrijfsdata in een nieuwe inkomstenbron (API Monetization).'
},
{
  icon: <UserCog className="w-6 h-6 text-amber-500" />,
  title: 'Workforce Management (WFM)',
  slug: 'workforce-management-wfm',
  desc: 'AI-gedreven personeelsplanning voor ploegendiensten in de industrie en logistiek.',
  fullDesc: 'Stop de Excel-chaos in HR. Wij integreren Workforce Management (WFM) portalen gericht op fabrieken en magazijnen. Genereer automatische, CAO-compliant ploegenroosters, voorspel personeelsbehoefte op basis van productiedata en geef arbeiders controle via mobiele apps voor shift-ruilen en verlofaanvragen.'
},
{
  icon: <Stethoscope className="w-6 h-6 text-fuchsia-600" />,
  title: 'MedTech & B2B Telehealth Portalen',
  slug: 'medtech-b2b-telehealth-portalen',
  desc: 'Beveiligde data-uitwisseling (HL7/DICOM) tussen ziekenhuizen, labo\'s en apotheken.',
  fullDesc: 'Stroomlijn de medische toeleveringsketen. Wij bouwen zwaarbeveiligde (GDPR/HIPAA compliant) e-Health portalen. Maak multidisciplinair overleg (MDO) mogelijk via beveiligde video-verbindingen, deel medische 3D-scans veilig in de cloud en automatiseer B2B e-voorschriften.'
},
{
  icon: <QrCode className="w-6 h-6 text-emerald-500" />,
  title: 'Digitale Product Paspoorten (DPP)',
  slug: 'digitale-product-paspoorten-dpp',
  desc: 'Consolideer circulaire data en bereid u voor op de nieuwe EU-wetgeving (2027).',
  fullDesc: 'Maak uw producten transparant en compliant. Wij ontwikkelen de cloud-infrastructuur voor het Digitale Product Paspoort (DPP). Koppel uw ERP en PIM via API\'s om materiaal- en reparatiedata te consolideren achter één QR-code, veilig verankerd op de blockchain (tegen greenwashing).'
},
{
  icon: <Zap className="w-6 h-6 text-sky-500" />,
  title: 'Low-Code Applicatie Ontwikkeling',
  slug: 'low-code-applicatie-ontwikkeling',
  desc: 'Razendsnelle ontwikkeling van interne B2B bedrijfsapplicaties (Power Apps).',
  fullDesc: 'Digitaliseer uw interne processen 5x sneller. Voor interne workflows, urenregistraties of onkostendeclaraties bouwen wij robuuste applicaties met behulp van Low-Code platformen. Verlaag uw time-to-market drastisch en behoud flexibiliteit, zonder zware IT-investeringen.'
},
{
  icon: <Network className="w-6 h-6 text-indigo-500" />,
  title: 'Quantum-Inspired Route Optimalisatie',
  slug: 'quantum-inspired-route-optimalisatie',
  desc: 'Zware wiskundige algoritmes voor complexe logistieke supply chain problemen.',
  fullDesc: 'Los onmogelijke planningsproblemen op. Voor de logistieke sector en havens ontwikkelen wij wiskundige optimalisatie-modellen (geïnspireerd op Quantum Computing). Optimaliseer in real-time de belading van zeeschepen (stowage) en bereken de perfecte routes voor 1000+ vrachtwagens tegelijk.'
},
{
  icon: <Gamepad2 className="w-6 h-6 text-rose-500" />,
  title: 'Gamification voor E-learning & HR',
  slug: 'gamification-voor-e-learning-hr',
  desc: 'Verhoog betrokkenheid bij veiligheidstrainingen met leaderboards en badges.',
  fullDesc: 'Maak droge B2B opleidingen verslavend. Wij integreren gamification-mechanismen in uw Learning Management System (LMS). Gebruik microlearning, virtuele badges en competitieve leaderboards om de voltooiingsgraad van uw veiligheids- of compliance-trainingen te maximaliseren.'
},
{
  icon: <CalendarHeart className="w-6 h-6 text-fuchsia-600" />,
  title: 'B2B Event & Ticketing Portalen',
  slug: 'b2b-event-ticketing-portalen',
  desc: 'Software voor registratie, badge-printing en lead-retrieval op vakbeurzen.',
  fullDesc: 'Digitaliseer uw zakelijke evenementen. Wij bouwen B2B event management portalen met gepersonaliseerde registratieflows. Integreer on-site oplossingen zoals QR-toegangscontrole, razendsnelle naambadge-printers en mobiele lead-retrieval apps voor uw sales team, direct gekoppeld aan uw CRM.'
},
{
  icon: <LifeBuoy className="w-6 h-6 text-sky-500" />,
  title: 'ITSM & Helpdesk Systemen',
  slug: 'itsm-helpdesk-systemen',
  desc: 'IT Service Management (ITSM) voor proactief interne IT-support.',
  fullDesc: 'Transformeer uw interne IT van reactief naar proactief. Wij implementeren ITSM-systemen (zoals ServiceNow) inclusief een Self-Service portaal voor werknemers. Automatiseer ticket-routering, beheer hardware (CMDB) en stroomlijn goedkeuringsflows voor nieuwe software of hardware-aanvragen.'
},
{
  icon: <MapPin className="w-6 h-6 text-indigo-500" />,
  title: 'Field Service Management (FSM)',
  slug: 'field-service-management-fsm',
  desc: 'Mobiele applicaties en dispatching-algoritmes voor de technische buitendienst.',
  fullDesc: 'Optimaliseer uw reparaties en onderhoud op locatie. Wij bouwen Field Service Management (FSM) apps met offline functionaliteit. Plan technici via slimme GPS-dispatching, laat klanten digitaal aftekenen voor werkbonnen (digital signature) en synchroniseer de urenregistratie direct met uw ERP.'
},
{
  icon: <Headphones className="w-6 h-6 text-emerald-500" />,
  title: 'Voice Picking & Wearables',
  slug: 'voice-picking-wearables',
  desc: 'Hands-free orderpicking in magazijnen gestuurd door spraakherkenning.',
  fullDesc: 'Verhoog de picksnelheid in uw magazijn. Wij integreren Voice Picking (Pick-by-Voice) middleware met uw bestaande WMS. Rust uw medewerkers uit met industriële headsets zodat zij compleet hands-free én eyes-free bestellingen kunnen verzamelen, wat de veiligheid en productiviteit aanzienlijk verhoogt.'
},
{
  icon: <BrainCircuit className="w-6 h-6 text-amber-500" />,
  title: 'Private AI Co-Pilots voor Sales',
  slug: 'private-ai-co-pilots-voor-sales',
  desc: 'Train Large Language Models (LLM) op uw eigen bedrijfsdata voor razendsnelle offertes.',
  fullDesc: 'Geef uw B2B-sales team een oneerlijk voordeel. Wij bouwen Private AI Co-Pilots geïntegreerd in uw CRM. Genereer automatische antwoorden op complexe RFP\'s, vat verkoopgesprekken samen en creëer technische offertes in minuten in plaats van dagen, zonder dat uw bedrijfsdata publiek wordt gedeeld.'
}

];

export const expertiseData = [
  {
    icon: <Truck className="w-10 h-10 text-indigo-600" />,
    title: 'Automotive en Logistieke IT',
    slug: 'automotive-en-logistieke-it',
    desc: 'We ontwikkelen logistieke software met onze structuur die internationale voertuignormen en behoeften op het gebied van vlootbeheer beheerst.',
    route: 'sector-logistics'
  },
  {
    icon: <Microscope className="w-10 h-10 text-emerald-500" />,
    title: 'Wetenschappelijke en Academische IT',
    slug: 'wetenschappelijke-en-academische-it',
    desc: 'We produceren analytische oplossingen voor het volgen van biologische gegevens, digitalisering van archeologische gegevens en inventarisbeheer.',
    route: 'sector-academic'
  },
  {
    icon: <Rocket className="w-10 h-10 text-fuchsia-600" />,
    title: 'E-commerce en SaaS Modellen',
    slug: 'e-commerce-en-saas-modellen',
    desc: 'We ontwikkelen turn-key architecturen voor multi-tenant platformen die met abonnementen verkocht kunnen worden.',
    route: 'sector-saas'
  },
  {
    icon: <Store className="w-10 h-10 text-orange-500" />,
    title: 'B2B E-commerce en Marktplaats',
    slug: 'b2b-e-commerce-en-marktplaats',
    desc: 'Multi-vendor B2B e-commerce platformen waar u uw dealernetwerk kunt beheren en betalingen en bestellingen kunt automatiseren.',
    route: 'sector-ecommerce'
  },
  {
    icon: <Building className="w-10 h-10 text-sky-500" />,
    title: 'Hotel en Toerisme Technologieën',
    slug: 'hotel-en-toerisme-technologien',
    desc: 'We combineren reserveringen (PMS), housekeeping en online betalingssystemen voor horecabedrijven in de cloud.',
    route: 'sector-tourism'
  },
  {
    icon: <Network className="w-10 h-10 text-teal-600" />,
    title: 'Productie Tracking en ERP',
    slug: 'productie-tracking-en-erp',
    desc: 'Op microservices gebaseerde industriële ERP oplossingen die verspilling verminderen door direct gegevens van de productielijn te ontvangen.',
    route: 'sector-production'
  },
  {
    icon: <HelpCircle className="w-10 h-10 text-rose-500" />,
    title: 'Gezondheid en Ziekenhuis Informatiesystemen',
    slug: 'gezondheid-en-ziekenhuis-informatiesystemen',
    desc: 'Privacy-conforme automatiseringen die afsprakenregistratie en digitale archieven bieden voor klinieken en ziekenhuizen.',
    route: 'sector-health'
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-amber-500" />,
    title: 'Onderwijs en LMS Platformen',
    slug: 'onderwijs-en-lms-platformen',
    desc: 'Portals voor onderwijsbeheer gericht op ouderinformatie, examenanalyse en e-learning voor scholen en cursussen.',
    route: 'sector-education'
  },
  {
    icon: <Landmark className="w-10 h-10 text-slate-800" />,
    title: 'Financiële Technologieën en Open Banking',
    slug: 'financile-technologien-en-open-banking',
    desc: 'Bankintegraties, portemonneesystemen en API-oplossingen die voldoen aan open banking regelgeving.',
    route: 'sector-fintech'
  },
  {
    icon: <Home className="w-10 h-10 text-indigo-500" />,
    title: 'Vastgoed en PropTech',
    slug: 'vastgoed-en-proptech',
    desc: 'Beheer van vastgoedportefeuilles, slimme gebouwautomatisering en digitale huurincassosystemen.',
    route: 'sector-realestate'
  },
  {
    icon: <Zap className="w-10 h-10 text-amber-400" />,
    title: 'Smart City en Energie',
    slug: 'smart-city-en-energie',
    desc: 'Analyse van energieverbruik, slimme netwerkbewaking en beheerdashboards voor hernieuwbare energie.',
    route: 'sector-energy'
  },
  {
    icon: <Sprout className="w-10 h-10 text-emerald-600" />,
    title: 'Landbouwtechnologieën (Agrotech)',
    slug: 'landbouwtechnologien-agrotech',
    desc: 'Kasautomatisering, sensorgebaseerd irrigatiebeheer en traceerbaarheidssoftware van boer tot bord.',
    route: 'sector-agritech'
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-rose-500" />,
    title: 'Retail en Winkel (POS)',
    slug: 'retail-en-winkel-pos',
    desc: 'Cloudgebaseerde POS en software voor klantloyaliteitsprogramma\'s voor winkels met meerdere filialen.',
    route: 'sector-retail'
  }
];


export const sectorPages = {
  'sector-logistics': {
    title: 'Logistiek en Vlootbeheer Oplossingen',
    slug: 'logistiek-en-vlootbeheer-oplossingen',
    subtitle: 'Speciale platforms voor internationaal transport, route-optimalisatie en live vlootregistratie.'
  },
  'sector-saas': {
    title: 'SaaS en Platform Productontwikkeling',
    slug: 'saas-en-platform-productontwikkeling',
    subtitle: 'Schaalbare SaaS architecturen om uw abonnementsproduct snel op de markt te brengen.'
  },
  'sector-academic': {
    title: 'Academische en Wetenschappelijke Digitale Archiefsystemen',
    slug: 'academische-en-wetenschappelijke-digitale-archiefsystemen',
    subtitle: 'Oplossingen op maat voor instellingen voor onderzoeksgegevens, monsterbeheer en veilige uitwisseling.'
  },
  'sector-ecommerce': {
    title: 'B2B E-commerce en Marktplaatssystemen',
    slug: 'b2b-e-commerce-en-marktplaatssystemen',
    subtitle: 'Bestellingen van gesloten dealers en multi-vendor (marktplaats) e-commerce infrastructuren.'
  },
  'sector-tourism': {
    title: 'Hotel en Toerisme Management Software (PMS)',
    slug: 'hotel-en-toerisme-management-software-pms',
    subtitle: 'Moderne hotelsystemen die reserveringen, boekhouding en huishouding combineren in één scherm.'
  },
  'sector-production': {
    title: 'Industriële Productie Tracking en ERP Systemen',
    slug: 'industrile-productie-tracking-en-erp-systemen',
    subtitle: 'Digitalisering van fabrieks productielijnen met sensorgesteunde IoT integratie.'
  },
  'sector-health': {
    title: 'Gezondheid, Kliniek en Ziekenhuis Informatiesystemen (HBS)',
    slug: 'gezondheid-kliniek-en-ziekenhuis-informatiesystemen-hbs',
    subtitle: 'Afsprakenregistratie voor patiënten, e-recept integratie en privacy-gerichte veilige patiëntportalen.'
  },
  'sector-education': {
    title: 'School, K-12 en LMS Onderwijsplatformen',
    slug: 'school-k-12-en-lms-onderwijsplatformen',
    subtitle: 'End-to-end schoolsystemen die online examens, e-learning en oudercommunicatie combineren.'
  },
  'sector-fintech': {
    title: 'Fintech en Open Banking Oplossingen',
    slug: 'fintech-en-open-banking-oplossingen',
    subtitle: 'Veilige betalingsgateways, e-wallets en financiële API integraties.'
  },
  'sector-realestate': {
    title: 'Vastgoed en PropTech Software',
    slug: 'vastgoed-en-proptech-software',
    subtitle: 'Vastgoedportefeuillebeheer, slimme gebouwautomatisering en digitale huurincassosystemen.'
  },
  'sector-energy': {
    title: 'Slimme Stad en Energie Automatisering',
    slug: 'slimme-stad-en-energie-automatisering',
    subtitle: 'Analyse van energieverbruik, slimme netwerkmonitoring en IoT-ondersteunde stadsystemen.'
  },
  'sector-agritech': {
    title: 'Landbouwtechnologieën en Agrotech Systemen',
    slug: 'landbouwtechnologien-en-agrotech-systemen',
    subtitle: 'Kasautomatisering, sensorgebaseerd irrigatiebeheer en traceerbaarheid van boer tot bord.'
  },
  'sector-retail': {
    title: 'Retail en Winkel (POS) Software',
    slug: 'retail-en-winkel-pos-software',
    subtitle: 'Cloudgebaseerde POS en managementdashboards voor loyaliteitsprogramma\'s voor winkels met meerdere filialen.'
  }
};

