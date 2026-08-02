import React, { useState, useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { getApiUrl } from './lib/api';
import { blogPosts } from './blogData';
import { faqData } from './faqData';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  Rocket, Shield, CreditCard, LayoutTemplate,
  Smartphone, Database, Cpu, Building2, UserCog,
  LineChart, Network, BarChart3, Store, Search,
  Truck, Microscope, Leaf, Globe, ChevronRight,
  MapPin, Mail, Phone, Clock, MessageSquare,
  Send, X, Menu, ChevronDown, ChevronUp,
  Code2, Server, Cloud, CheckCircle2,
  HelpCircle, ArrowLeft, Building, GraduationCap,
  PackageCheck, Shapes, Landmark, Wallet, Home,
  Zap, Sprout, ShoppingCart
} from 'lucide-react';

const servicesData = [
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
  }
];

const homeBoxesData = [
  {
    id: 1,
    icon: <Rocket className="w-7 h-7 text-indigo-600" />,
    bg: 'bg-indigo-50',
    title: 'End-to-End Ontwikkeling',
    desc: 'We schrijven niet zomaar code; we ontwerpen hoogwaardige digitale producten die volledig zijn geïntegreerd in het web, mobiel en cloud ecosysteem.',
    fullDesc: 'Modern web teknolojileri ve güvenilir backend altyapıları ile fikrinizi canlıya taşıyoruz.'
  },
  {
    id: 2,
    icon: <Shield className="w-7 h-7 text-slate-800" />,
    bg: 'bg-slate-50',
    title: 'Row Level Security (RLS)',
    desc: 'We beschermen uw gegevens direct op databaseniveau met onbreekbare RLS-regels.',
    fullDesc: 'Veri güvenliğini uygulama seviyesinden öteye taşıyarak bulut çekirdeğinde koruyoruz.'
  },
  {
    id: 3,
    icon: <CreditCard className="w-7 h-7 text-emerald-600" />,
    bg: 'bg-emerald-50',
    title: 'Naadloze Betalingen',
    desc: 'We automatiseren uw cashflow met wereldwijde betalingssystemen, portemonnee-infrastructuren en commissieverdelingsmodellen.',
    fullDesc: 'Abonelik ve tek seferlik ödeme modellerini güvenli şekilde entegre ediyoruz.'
  }
];

const expertiseData = [
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

const sectorPages = {
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

const contactFaqs = [
  {
    q: 'Zullen de broncodes van het project van ons zijn?',
    a: 'Ja. Na levering worden alle broncodes en databasetoegang aan uw bedrijf overgedragen.'
  },
  {
    q: 'Kunnen we migreren naar een nieuw systeem zonder gegevens uit ons oude systeem te verliezen?',
    a: 'Ja. We passen een gecontroleerd migratieplan toe om geen gegevens te verliezen tijdens migratieprocessen.'
  },
  {
    q: 'Bieden jullie technische ondersteuning en onderhoud na afronding van het project?',
    a: 'Ja. Met optionele SLA-onderhoudspakketten zorgen we ervoor dat uw live systeem veilig en up-to-date blijft.'
  },
  {
    q: 'Gebruiken jullie kant-en-klare software (WordPress, Wix etc.)?',
    a: 'Bij zakelijke projecten doen we doorgaans aan maatwerkontwikkeling; dit verhoogt de prestaties en schaalbaarheid.'
  }
];

function Activity(props) {
  return <LineChart {...props} />;
}

const seoData = {
  home: {
    title: 'DZY Digital | Akıllı, Güvenli ve Ölçeklenebilir Yazılım Çözümleri',
    description: 'DZY Digital ile web/mobil uygulamalar, bulut mimarisi, IoT entegrasyonu ve özel yazılım çözümleri. Antwerpen merkezli kurumsal teknoloji danışmanlığı.',
    keywords: 'yazılım danışmanlığı, özel yazılım geliştirme, mobil uygulama, web tasarım, bulut sistemleri, iot entegrasyonu, saas yazılımları, izmir yazılım firması, dzy digital',
    path: '/',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DZY Yazılım Danışmanlığı",
        "url": "https://www.dzydigital.com",
        "logo": "https://www.dzydigital.com/og-image.png",
        "description": "Yeni nesil teknoloji danışmanlığı ve yazılım mühendisliği hizmetleri sunan kurumsal yazılım firması.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+90-555-208-3092",
          "contactType": "customer service",
          "availableLanguage": ["Turkish", "English"]
        },
        "sameAs": [
          "https://www.instagram.com/dzydigital",
          "https://www.linkedin.com/company/dzy-digital"
        ],
        "areaServed": {
          "@type": "Country",
          "name": "Türkiye"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Zullen de broncodes van het project van ons zijn?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja. Na levering worden alle broncodes en databasetoegang aan uw bedrijf overgedragen."
            }
          },
          {
            "@type": "Question",
            "name": "Kunnen we migreren naar een nieuw systeem zonder gegevens uit ons oude systeem te verliezen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja. We passen een gecontroleerd migratieplan toe om geen gegevens te verliezen tijdens migratieprocessen."
            }
          },
          {
            "@type": "Question",
            "name": "Bieden jullie technische ondersteuning en onderhoud na afronding van het project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja. Met optionele SLA-onderhoudspakketten zorgen we ervoor dat uw live systeem veilig en up-to-date blijft."
            }
          },
          {
            "@type": "Question",
            "name": "Gebruiken jullie kant-en-klare software (WordPress, Wix etc.)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bij zakelijke projecten doen we doorgaans aan maatwerkontwikkeling; dit verhoogt de prestaties en schaalbaarheid."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "DZY Digital",
        "url": "https://www.dzydigital.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.dzydigital.com/blog?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  },
  services: {
    title: 'Hizmetlerimiz | Web, Mobil, Bulut ve Özel Otomasyon Geliştirme - DZY Digital',
    description: 'Mobil/web uygulamaları, sanal POS, veri güvenliği, ERP/CRM ve SaaS geliştirme hizmetleri. Antwerpen\'de kurumsal yazılım danışmanlığı.',
    keywords: 'yazılım hizmetleri, mobil uygulama geliştirme, sanal pos entegrasyonu, veri güvenliği, legacy sistem yenileme, cto danışmanlığı, saas geliştirme, seo optimizasyonu',
    path: '/diensten',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "DZY Digital Hizmetleri",
        "description": "Kurumsal yazılım geliştirme, bulut mimarisi ve dijital dönüşüm hizmetleri.",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Mobiele en Web Applicaties" },
          { "@type": "ListItem", "position": 2, "name": "Betalings- en Incassosystemen" },
          { "@type": "ListItem", "position": 3, "name": "Live Tracking en Management Dashboards" },
          { "@type": "ListItem", "position": 4, "name": "Hoogwaardige Gegevensbeveiliging" },
          { "@type": "ListItem", "position": 5, "name": "Smart Device en Sensor Integratie" },
          { "@type": "ListItem", "position": 6, "name": "Vernieuwing van Verouderde Software" },
          { "@type": "ListItem", "position": 7, "name": "Externe Technologie Management (CTO)" },
          { "@type": "ListItem", "position": 8, "name": "Bedrijfsspecifieke Management Software" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.dzydigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "Hizmetlerimiz", "item": "https://www.dzydigital.com/diensten" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mobiele en Web Applicaties Geliştirme",
        "description": "iOS ve Android için native ve çapraz platform mobil uygulamalar, responsive web siteleri ve PWA çözümleri.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Yazılım Geliştirme"
      }
    ]
  },
  expertise: {
    title: 'Sectorspecifieke Softwareoplossingen | Lojistik, SaaS ve Akademik Sistemler - DZY Digital',
    description: 'Lojistik filo yönetimi, SaaS platform geliştirme ve akademik arşiv sistemleri için özel sektörel yazılım çözümleri.',
    keywords: 'lojistik yazılımları, filo yönetimi, akademik arşiv sistemleri, saas platform geliştirme, sektörel yazılımlar, b2b yazılım entegrasyonu, erp çözümleri',
    path: '/expertises',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Sektörel Dijital Dönüşüm Çözümleri",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Lojistik ve Filo Yönetimi" },
          { "@type": "ListItem", "position": 2, "name": "SaaS Platformları" },
          { "@type": "ListItem", "position": 3, "name": "Akademik Dijital Arşiv Sistemleri" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.dzydigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "Sektörel Çözümler", "item": "https://www.dzydigital.com/expertises" }
        ]
      }
    ]
  },
  about: {
    title: 'Hakkımızda | Kurumsal Teknoloji Vizyonu - DZY Digital',
    description: 'Teknolojiyi işletmelerin sorunlarını çözen bir köprü olarak görüyor, yazılımı uçtan uca mühendislik disipliniyle kurguluyoruz.',
    keywords: 'dzy digital kimdir, kurumsal yazılım danışmanlığı, izmir yazılım ajansı, cto danışmanlığı, dijital dönüşüm uzmanı, teknoloji danışmanı',
    path: '/over-ons',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "DZY Digital Hakkında",
        "description": "Yeni nesil teknoloji danışmanlığı ve yazılım mühendisliği vizyonu."
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.dzydigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "Hakkımızda", "item": "https://www.dzydigital.com/over-ons" }
        ]
      }
    ]
  },
  contact: {
    title: 'İletişim | Projenizi Başlatın ve Teknoloji Danışmanlığı Alın - DZY Digital',
    description: 'DZY Digital Antwerpen iletişim. Formu doldurarak projenizi anlatın, 24 saat içinde ücretsiz teknik ön analiz raporu alın.',
    keywords: 'yazılım teklifi al, izmir yazılım iletişim, dzy digital telefon, yazılım firması adres, ücretsiz danışmanlık',
    path: '/contact',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "DZY Digital - Yazılım Danışmanlığı",
        "image": "https://www.dzydigital.com/og-image.png",
        "telephone": "+90-555-208-3092",
        "email": "info@dzydigital.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Markgravelei 145 bus 4",
          "addressLocality": "Antwerpen",
          "addressRegion": "Antwerpen",
          "postalCode": "2000",
          "addressCountry": "BE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "38.3850",
          "longitude": "27.1720"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "priceRange": "$$"
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Zullen de broncodes van het project van ons zijn?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja. Na levering worden alle broncodes en databasetoegang aan uw bedrijf overgedragen."
            }
          },
          {
            "@type": "Question",
            "name": "Kunnen we migreren naar een nieuw systeem zonder gegevens uit ons oude systeem te verliezen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja. We passen een gecontroleerd migratieplan toe om geen gegevens te verliezen tijdens migratieprocessen."
            }
          },
          {
            "@type": "Question",
            "name": "Bieden jullie technische ondersteuning en onderhoud na afronding van het project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja. Met optionele SLA-onderhoudspakketten zorgen we ervoor dat uw live systeem veilig en up-to-date blijft."
            }
          },
          {
            "@type": "Question",
            "name": "Gebruiken jullie kant-en-klare software (WordPress, Wix etc.)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bij zakelijke projecten doen we doorgaans aan maatwerkontwikkeling; dit verhoogt de prestaties en schaalbaarheid."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.dzydigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "İletişim", "item": "https://www.dzydigital.com/contact" }
        ]
      }
    ]
  },
  'sector-logistics': {
    title: 'Lojistik ve Filo Yönetimi Çözümleri | DZY Digital',
    description: 'GPS filo takibi, akıllı rota optimizasyonu ve gümrük belge otomasyonu ile lojistik operasyonlarınızı dijitalleştirin.',
    keywords: 'lojistik filo yönetimi, araç takip sistemi, rota optimizasyon yazılımı, gümrük belge akışı otomasyonu, gps takip',
    path: '/sector/logistiek',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Logistiek en Vlootbeheer Software",
        "description": "Uluslararası taşımacılık, rota optimizasyonu ve canlı filo takibi için özel yazılım çözümleri.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Lojistik Yazılım Geliştirme"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.dzydigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "Sektörel Çözümler", "item": "https://www.dzydigital.com/expertises" },
          { "@type": "ListItem", "position": 3, "name": "Lojistik", "item": "https://www.dzydigital.com/sektor/lojistik" }
        ]
      }
    ]
  },
  'sector-saas': {
    title: 'SaaS ve Platform Ürün Geliştirme | DZY Digital',
    description: 'Multi-tenant SaaS altyapısı, Stripe abonelik entegrasyonu ve ölçeklenebilir bulut mimarisi ile ürününüzü pazara taşıyın.',
    keywords: 'saas geliştirme, abonelik yazılımı, multi tenant mimari, stripe entegrasyonu, saas altyapısı, bulut platform',
    path: '/sector/saas',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "SaaS Platform Geliştirme",
        "description": "Abonelik bazlı SaaS ürünleriniz için çoklu kiracılı, güvenli ve ölçeklenebilir bulut altyapıları.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "SaaS Geliştirme"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.dzydigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "Sektörel Çözümler", "item": "https://www.dzydigital.com/expertises" },
          { "@type": "ListItem", "position": 3, "name": "SaaS", "item": "https://www.dzydigital.com/sektor/saas" }
        ]
      }
    ]
  },
  'sector-academic': {
    title: 'Akademik ve Bilimsel Dijital Arşiv Sistemleri | DZY Digital',
    description: 'KVKK uyumlu bilimsel veri arşivi, Dublin Core entegrasyonu ve güvenli akademik veri paylaşım altyapıları geliştirme.',
    keywords: 'akademik veri arşivi, bilimsel envanter yazılımı, dijital kütüphane altyapısı, güvenli veri paylaşımı, dublin core',
    path: '/sector/academisch',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Akademik Dijital Arşiv Sistemleri",
        "description": "Araştırma verileri, numune yönetimi ve güvenli paylaşım için kurumlara özel dijital arşiv çözümleri.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Akademik Yazılım Geliştirme"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.dzydigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "Sektörel Çözümler", "item": "https://www.dzydigital.com/expertises" },
          { "@type": "ListItem", "position": 3, "name": "Akademik", "item": "https://www.dzydigital.com/sektor/akademik" }
        ]
      }
    ]
  },
  'sector-ecommerce': {
    title: 'B2B E-Ticaret ve Pazaryeri Sistemleri | DZY Digital',
    description: 'Bayi ağınızı yönetin, tahsilatları ve B2B siparişleri otomatize edin. Özelleştirilebilir pazaryeri ve e-ticaret altyapıları.',
    keywords: 'b2b e-ticaret yazılımı, pazaryeri yazılımı, çok satıcılı e-ticaret, b2b sipariş sistemi, bayi yönetim sistemi',
    path: '/sector/ecommerce',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "B2B E-Ticaret Sistemleri",
        "description": "Kapalı devre bayi siparişleri ve çok satıcılı e-ticaret (marketplace) altyapıları.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "E-Ticaret Yazılım Geliştirme"
      }
    ]
  },
  'sector-tourism': {
    title: 'Otel ve Turizm Yönetim Yazılımları (PMS) | DZY Digital',
    description: 'Otelinizin tüm rezervasyon, online ödeme ve kat hizmetleri süreçlerini tek ekranda toplayan yeni nesil bulut PMS çözümleri.',
    keywords: 'otel yönetim yazılımı, pms yazılımı, bulut otel programı, turizm teknolojileri, online rezervasyon sistemi',
    path: '/sector/toerisme',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Otel Yönetim Yazılımları (PMS)",
        "description": "Konaklama işletmeleri için rezervasyon ve muhasebe sistemlerini bulutta birleştiren yazılımlar.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Turizm Yazılım Geliştirme"
      }
    ]
  },
  'sector-production': {
    title: 'Endüstriyel Üretim Takip ve ERP Sistemleri | DZY Digital',
    description: 'Fabrikanızdaki makinelerden canlı veri alın, üretim süreçlerinizi dijitalleştirin. Modern ve esnek ERP altyapıları.',
    keywords: 'üretim takip sistemi, endüstriyel iot, modern erp programı, fabrika otomasyon yazılımı, fire analiz',
    path: '/sector/productie',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Üretim Takip ve ERP Yazılımları",
        "description": "Üretim bandından anlık veri alarak fire oranlarını azaltan ERP çözümleri.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "ERP Yazılım Geliştirme"
      }
    ]
  },
  'sector-health': {
    title: 'Sağlık, Klinik ve Hastane Bilgi Sistemleri (HBS) | DZY Digital',
    description: 'KVKK uyumlu hasta kayıt portalı, randevu takip modülü ve e-reçete entegreli yeni nesil hastane yönetim programları.',
    keywords: 'hastane bilgi sistemi, hbs yazılımı, klinik takip programı, kvkk uyumlu hasta portalı, sağlık teknolojileri',
    path: '/sector/gezondheidszorg',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Sağlık ve Hastane Bilgi Sistemleri",
        "description": "Klinik ve hastaneler için randevu takibi ve dijital arşiv sağlayan otomasyonlar.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Sağlık Yazılım Geliştirme"
      }
    ]
  },
  'sector-education': {
    title: 'Okul, K-12 ve Eğitim Portalları (LMS) | DZY Digital',
    description: 'Online sınav analizi, veli bilgilendirme sistemi ve e-öğrenme modüllerini tek bir çatıda toplayan okul yönetim altyapıları.',
    keywords: 'okul yönetim sistemi, lms yazılımı, eğitim portalı geliştirme, online sınav yazılımı, öğrenci takip programı',
    path: '/sector/onderwijs',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Eğitim ve LMS Platformları",
        "description": "Okullar için veli bilgilendirme, sınav analizi ve e-öğrenme odaklı eğitim yönetim portalları.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Eğitim Yazılım Geliştirme"
      }
    ]
  },
  'sector-fintech': {
    title: 'Finans Teknolojileri ve Açık Bankacılık | DZY Digital',
    description: 'Dijital cüzdan, açık bankacılık regülasyonlarına uyumlu API ve ödeme geçidi çözümleri.',
    keywords: 'fintech yazılımı, açık bankacılık api, ödeme geçidi entegrasyonu, dijital cüzdan yazılımı, sanal pos entegrasyon',
    path: '/sector/fintech',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Finans Teknolojileri (FinTech)",
        "description": "Banka entegrasyonları, cüzdan sistemleri ve açık bankacılık çözümleri.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Finans Yazılım Geliştirme"
      }
    ]
  },
  'sector-realestate': {
    title: 'Gayrimenkul ve PropTech Sistemleri | DZY Digital',
    description: 'Büyük emlak portföylerini yönetmek için proptech çözümleri, kira tahsilat otomasyonu ve akıllı bina yazılımları.',
    keywords: 'proptech yazılımı, gayrimenkul yönetim sistemi, akıllı bina otomasyonu, kira tahsilat yazılımı, emlak yazılımı',
    path: '/sector/vastgoed',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "PropTech ve Gayrimenkul Yazılımları",
        "description": "Emlak portföy yönetimi ve akıllı bina yönetim sistemleri.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Gayrimenkul Yazılım Geliştirme"
      }
    ]
  },
  'sector-energy': {
    title: 'Akıllı Şehir ve Enerji Otomasyonları | DZY Digital',
    description: 'IoT ile güçlendirilmiş akıllı şebeke izleme, enerji tüketim analizleri ve sürdürülebilir enerji yazılımları.',
    keywords: 'akıllı şehir çözümleri, enerji otomasyonu, iot enerji takibi, akıllı şebeke yazılımı, enerji tüketim analizi',
    path: '/sector/energie',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Enerji ve Akıllı Şehir Sistemleri",
        "description": "Enerji tüketim analizleri ve IoT destekli akıllı şehir yazılımları.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Enerji Yazılım Geliştirme"
      }
    ]
  },
  'sector-agritech': {
    title: 'Tarım Teknolojileri ve Agrotech | DZY Digital',
    description: 'Sera otomasyonu, sensör bazlı akıllı sulama ve tarladan sofraya üretim takip (AgriTech) yazılımları.',
    keywords: 'agrotech yazılımı, akıllı tarım teknolojileri, sera otomasyonu, akıllı sulama sistemi, tarım iot',
    path: '/sector/agritech',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Tarım Teknolojileri (AgriTech)",
        "description": "Sera otomasyonu ve sensör bazlı akıllı sulama sistemleri.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Tarım Yazılım Geliştirme"
      }
    ]
  },
  'sector-retail': {
    title: 'Perakende ve Mağazacılık (POS) Sistemleri | DZY Digital',
    description: 'Çok şubeli perakende zincirleri için bulut POS, stok yönetimi, crm ve müşteri sadakat programları.',
    keywords: 'bulut pos yazılımı, mağazacılık sistemi, perakende erp, müşteri sadakat programı yazılımı, çoklu şube yönetimi',
    path: '/sector/retail',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Perakende ve POS Yazılımları",
        "description": "Çok şubeli mağazalar için bulut tabanlı POS ve stok yönetim yazılımları.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Perakende Yazılım Geliştirme"
      }
    ]
  },
  blog: {
    title: 'Bilgi Bankası & Blog | Teknoloji ve Yazılım Trendleri - DZY Digital',
    description: 'Yazılım mimarisi, dijital dönüşüm, bulut teknolojileri ve KOBİ\'ler için vaka analizleri barındıran bilgi bankamızı keşfedin.',
    keywords: 'yazılım blogu, teknoloji makaleleri, dijital dönüşüm hataları, vaka analizi, yazılım rehberi',
    path: '/blog',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "DZY Digital Bilgi Bankası",
        "url": "https://www.dzydigital.com/blog",
        "description": "Yazılım, teknoloji ve dijital dönüşüm üzerine uzman içerikler.",
        "publisher": {
          "@type": "Organization",
          "name": "DZY Digital",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.dzydigital.com/og-image.png"
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.dzydigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.dzydigital.com/blog" }
        ]
      }
    ]
  }
};

function SEOManager({ activeTab, dynamicSeo }) {
  useEffect(() => {
    const currentSeo = dynamicSeo || seoData[activeTab] || seoData.home;
    const siteUrl = 'https://www.dzydigital.com';
    const fullUrl = `${siteUrl}${currentSeo.path}`;

    document.title = currentSeo.title;

    const setMeta = (selector, content, attr = 'content') => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, content);
    };

    setMeta('meta[name="description"]', currentSeo.description);
    setMeta('meta[property="og:description"]', currentSeo.description);
    setMeta('meta[property="og:title"]', currentSeo.title);
    setMeta('meta[property="og:url"]', fullUrl);
    setMeta('meta[name="keywords"]', currentSeo.keywords || currentSeo.description);

    setMeta('meta[property="twitter:card"]', 'summary_large_image');
    setMeta('meta[property="twitter:title"]', currentSeo.title);
    setMeta('meta[property="twitter:description"]', currentSeo.description);
    setMeta('meta[property="twitter:url"]', fullUrl);
    setMeta('meta[property="twitter:site"]', '@dzydigital');
    setMeta('meta[property="twitter:creator"]', '@dzydigital');

    let canonicalLink = document.getElementById('canonical-link');
    if (canonicalLink) canonicalLink.setAttribute('href', fullUrl);

    let dynamicSchemaScript = document.getElementById('dynamic-schema');
    const schemaJson = currentSeo.schema ? JSON.stringify(currentSeo.schema) : '';
    if (dynamicSchemaScript) {
      dynamicSchemaScript.textContent = schemaJson;
    } else if (schemaJson) {
      const script = document.createElement('script');
      script.id = 'dynamic-schema';
      script.type = 'application/ld+json';
      script.textContent = schemaJson;
      document.head.appendChild(script);
    }

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) robotsMeta.setAttribute('content', 'index, follow');

    let ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (ogTypeMeta) ogTypeMeta.setAttribute('content', currentSeo.path.startsWith('/blog/') ? 'article' : 'website');

    let ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) ogImageMeta.setAttribute('content', 'https://www.dzydigital.com/og-image.png');

    let twitterImageMeta = document.querySelector('meta[property="twitter:image"]');
    if (twitterImageMeta) twitterImageMeta.setAttribute('content', 'https://www.dzydigital.com/og-image.png');

  }, [activeTab, dynamicSeo]);

  return null;
}

const pathToTab = {
  '/': 'home',
  '/diensten': 'services',
  '/expertises': 'expertise',
  '/over-ons': 'about',
  '/contact': 'contact',
  '/blog': 'blog',
  '/sector/logistiek': 'sector-logistics',
  '/sector/saas': 'sector-saas',
  '/sector/academisch': 'sector-academic',
  '/sector/ecommerce': 'sector-ecommerce',
  '/sector/toerisme': 'sector-tourism',
  '/sector/productie': 'sector-production',
  '/sector/gezondheidszorg': 'sector-health',
  '/sector/onderwijs': 'sector-education',
  '/sector/fintech': 'sector-fintech',
  '/sector/vastgoed': 'sector-realestate',
  '/sector/energie': 'sector-energy',
  '/sector/agritech': 'sector-agritech',
  '/sector/retail': 'sector-retail'
};

const tabToPath = Object.fromEntries(Object.entries(pathToTab).map(([k, v]) => [v, k]));

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const getTabFromPath = (path) => {
    if (path.startsWith('/blog/')) return 'blog-post';
    return pathToTab[path] || 'home';
  };
  
  const [activeTab, setActiveTab] = useState(getTabFromPath(window.location.pathname));
  const [currentSlug, setCurrentSlug] = useState(() => {
    if (window.location.pathname.startsWith('/blog/')) return window.location.pathname.split('/blog/')[1];
    return null;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminToken, setAdminToken] = useState('');
  const [adminError, setAdminError] = useState('');
  const [isAdminLoading, setIsAdminLoading] = useState(false);
  const [adminLeads, setAdminLeads] = useState([]);
  const [adminChats, setAdminChats] = useState([]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const onPopState = () => {
      const path = window.location.pathname;
      setActiveTab(getTabFromPath(path));
      if (path.startsWith('/blog/')) {
        setCurrentSlug(path.split('/blog/')[1]);
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
      lenis.destroy();
    };
  }, []);

  const nav = (tab, slug = null) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    let path = tabToPath[tab] || '/';
    if (tab === 'blog-post' && slug) {
      setCurrentSlug(slug);
      path = '/blog/' + slug;
    }
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loadAdminData = async (tokenValue) => {
    setIsAdminLoading(true);
    setAdminError('');
    try {
      const headers = { 'x-admin-token': tokenValue };
      const [leadsRes, chatRes] = await Promise.all([
        fetch(getApiUrl('/api/admin/leads'), { headers }),
        fetch(getApiUrl('/api/admin/chat'), { headers })
      ]);

      if (!leadsRes.ok || !chatRes.ok) {
        throw new Error('UNAUTHORIZED_OR_API_ERROR');
      }

      const leadsJson = await leadsRes.json();
      const chatJson = await chatRes.json();

      setAdminLeads(leadsJson.rows ?? []);
      setAdminChats(chatJson.rows ?? []);
      setIsAdminAuthenticated(true);
    } catch (error) {
      setIsAdminAuthenticated(false);
      setAdminError('Şifre hatalı veya admin verilerine erişilemiyor.');
    } finally {
      setIsAdminLoading(false);
    }
  };

  const renderView = () => {
    if (activeTab === 'home') return <HomeView nav={nav} />;
    if (activeTab === 'services') return <ServicesView />;
    if (activeTab === 'expertise') return <ExpertiseView nav={nav} />;
    if (activeTab === 'about') return <AboutView />;
    if (activeTab === 'contact') return <ContactView />;
    if (activeTab === 'blog') return <BlogView nav={nav} />;
    if (activeTab === 'blog-post') return <BlogPostView slug={currentSlug} nav={nav} />;
    if (activeTab.startsWith('sector-')) return <SectorLandingView tab={activeTab} nav={nav} />;
    return <HomeView nav={nav} />;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <SEOManager 
        activeTab={activeTab} 
        dynamicSeo={activeTab === 'blog-post' ? (() => {
          const post = blogPosts.find(p => p.slug === currentSlug);
          if (!post) return null;
          const siteUrl = 'https://www.dzydigital.com';
          return {
            title: post.title + ' | DZY Digital',
            description: post.excerpt,
            keywords: 'yazılım, dijital dönüşüm, teknoloji makalesi, ' + post.category.toLowerCase(),
            path: '/blog/' + post.slug,
            schema: [
              {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "datePublished": post.date,
                "author": {
                  "@type": "Organization",
                  "name": "DZY Digital",
                  "url": siteUrl
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "DZY Digital",
                  "logo": {
                    "@type": "ImageObject",
                    "url": siteUrl + '/og-image.png'
                  }
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": siteUrl + '/blog/' + post.slug
                },
                "image": siteUrl + '/og-image.png'
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": siteUrl + "/" },
                  { "@type": "ListItem", "position": 2, "name": "Blog", "item": siteUrl + "/blog" },
                  { "@type": "ListItem", "position": 3, "name": post.title, "item": siteUrl + "/blog/" + post.slug }
                ]
              }
            ]
          };
        })() : null} 
      />
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-40 w-full glass-panel border-b-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" onClick={(e) => { e.preventDefault(); nav('home'); }} className="flex items-center group" aria-label="DZY Anasayfa">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-3xl font-extrabold tracking-tighter text-slate-900 lowercase group-hover:text-indigo-950 transition-colors"
              >
                dzy
              </motion.span>
              <span className="text-4xl text-emerald-500 leading-none">.</span>
            </a>

            <nav className="hidden md:flex space-x-8" aria-label="Hoofdnavigatie">
              {['home', 'services', 'expertise', 'about', 'blog', 'contact'].map((tab) => (
                <a
                  key={tab}
                  href={tabToPath[tab] || '/'}
                  onClick={(e) => { e.preventDefault(); nav(tab); }}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-indigo-600 relative",
                    activeTab === tab || (activeTab === 'blog-post' && tab === 'blog') ? "text-indigo-600 font-bold" : "text-slate-600"
                  )}
                >
                  {tab === 'home' && 'Startpagina'}
                  {tab === 'services' && 'Diensten'}
                  {tab === 'expertise' && 'Expertises'}
                  {tab === 'about' && 'Over ons'}
                  {tab === 'blog' && 'Kennisbank'}
                  {tab === 'contact' && 'Contact'}
                  {(activeTab === tab || (activeTab === 'blog-post' && tab === 'blog')) && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none" aria-label="Menu Openen/Sluiten">
                {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white border-b border-slate-200" aria-label="Mobiele Navigatie">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'services', 'expertise', 'about', 'blog', 'contact'].map((tab) => (
                <a
                  key={tab}
                  href={tabToPath[tab] || '/'}
                  onClick={(e) => { e.preventDefault(); nav(tab); }}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${activeTab === tab || (activeTab === 'blog-post' && tab === 'blog') ? 'text-indigo-600 bg-indigo-50' : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'}`}
                >
                  {tab === 'home' && 'Startpagina'}
                  {tab === 'services' && 'Diensten'}
                  {tab === 'expertise' && 'Expertises'}
                  {tab === 'about' && 'Over ons'}
                  {tab === 'blog' && 'Kennisbank'}
                  {tab === 'contact' && 'Contact'}
                </a>
              ))}
            </div>
          </nav>
        )}
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab === 'blog-post' ? `blog-post-${currentSlug}` : activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800" itemScope itemType="https://schema.org/LocalBusiness">
        <meta itemProp="name" content="DZY Digital - Yazılım Danışmanlığı" />
        <meta itemProp="image" content="https://www.dzydigital.com/og-image.png" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-2xl font-extrabold tracking-tighter text-white lowercase hover:text-indigo-300 transition-colors block mb-4"
            >
              dzy<span className="text-emerald-500">.</span>
            </button>
            <p className="text-sm mb-4 max-w-sm">Meer dan software. Nieuwe Generatie Technologie Consulting en Centrum voor Digitale Transformatie voor Bedrijven.</p>
            
            <div className="flex flex-col space-y-2 text-sm text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" />
                <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">Markgravelei 145 bus 4</span>, 
                  <span itemProp="addressLocality"> Antwerpen</span>, 
                  <span itemProp="addressRegion"> Antwerpen</span>, 
                  <span itemProp="postalCode"> 2000</span>, 
                  <span itemProp="addressCountry"> BE</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-indigo-400" />
                <a href="tel:+32475940656" className="hover:text-white transition-colors" itemProp="telephone">+32 475 94 06 56</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-indigo-400" />
                <a href="mailto:info@dzydigital.com" className="hover:text-white transition-colors" itemProp="email">info@dzydigital.com</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end space-y-4">
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/dzydigital" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/company/dzy-digital" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            <div className="text-sm text-slate-500">&copy; {new Date().getFullYear()} DZY Digital. Alle Rechten Voorbehouden.</div>
          </div>
        </div>
      </footer>

      <ChatWidget />
      <AdminPanelModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        isAuthenticated={isAdminAuthenticated}
        adminToken={adminToken}
        setAdminToken={setAdminToken}
        adminError={adminError}
        isLoading={isAdminLoading}
        leads={adminLeads}
        chats={adminChats}
        onLogin={loadAdminData}
      />
      <Analytics />
    </div>
  );
}

function AdminPanelModal({
  isOpen,
  onClose,
  isAuthenticated,
  adminToken,
  setAdminToken,
  adminError,
  isLoading,
  leads,
  chats,
  onLogin
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl border border-slate-200 shadow-2xl">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center">
          <h3 className="text-2xl font-extrabold text-slate-900">DZY Beheerder Toegang</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-900">
            <X className="w-6 h-6" />
          </button>
        </div>

        {!isAuthenticated ? (
          <div className="p-8 space-y-6">
            <p className="text-slate-600">Bu alana erişmek için ENV'e eklenen admin şifresini girin (`ADMIN_KEY`).</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onLogin(adminToken);
              }}
              className="space-y-4 max-w-md"
            >
              <input
                type="password"
                value={adminToken}
                onChange={(e) => setAdminToken(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Beheerderswachtwoord"
                required
              />
              {adminError && <p className="text-sm text-rose-600">{adminError}</p>}
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-indigo-600 disabled:opacity-60"
              >
                {isLoading ? 'Controleren...' : 'Inloggen op Paneel'}
              </button>
            </form>
          </div>
        ) : (
          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Zakelijke Aanvragen</h4>
              <div className="space-y-3 max-h-[55vh] overflow-y-auto">
                {leads.length === 0 && <p className="text-slate-500 text-sm">Nog geen registraties.</p>}
                {leads.map((lead) => (
                  <div key={lead.id} className="bg-white border border-slate-200 rounded-xl p-4">
                    <p className="font-semibold text-slate-900">{lead.full_name} • {lead.email}</p>
                    <p className="text-sm text-slate-600 mt-1">{lead.primary_need}</p>
                    <p className="text-xs text-slate-500 mt-2">{new Date(lead.created_at).toLocaleString('tr-BE')}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Chatberichten</h4>
              <div className="space-y-3 max-h-[55vh] overflow-y-auto">
                {chats.length === 0 && <p className="text-slate-500 text-sm">Nog geen berichten.</p>}
                {chats.map((chat) => (
                  <div key={chat.id} className="bg-white border border-slate-200 rounded-xl p-4">
                    <p className="text-sm font-semibold text-slate-900">{chat.sender_type === 'user' ? 'Gebruiker' : 'Bot'}</p>
                    <p className="text-sm text-slate-700 mt-1">{chat.message}</p>
                    <p className="text-xs text-slate-500 mt-2">{new Date(chat.created_at).toLocaleString('tr-BE')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

function HomeView({ nav }) {
  const [expandedBox, setExpandedBox] = useState(null);

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="space-y-24 relative"
    >
      {/* Background Video */}
      <div className="absolute -top-32 left-[50%] -translate-x-[50%] w-[100vw] h-[900px] z-0 overflow-hidden pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/30 via-slate-50/80 to-slate-50"></div>
      </div>

      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-indigo-400/20 rounded-full blur-[100px] -z-10 mix-blend-multiply animate-blob"></div>
      <div className="absolute top-40 left-1/4 w-72 h-72 bg-fuchsia-400/20 rounded-full blur-[100px] -z-10 mix-blend-multiply animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-40 right-1/4 w-72 h-72 bg-emerald-400/20 rounded-full blur-[100px] -z-10 mix-blend-multiply animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="text-center max-w-4xl mx-auto pt-20 pb-8 relative z-10">
        <motion.div variants={fadeUpVariant} className="inline-flex items-center px-4 py-1.5 rounded-full glass-panel text-indigo-800 text-sm font-semibold mb-8 border border-white/40 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          Nieuwe Generatie Architectuur voor uw Systemen
        </motion.div>
        
        <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
          Meer dan Software:<br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-indigo-600 bg-300% animate-gradient">Oplossingen op Maat</span> voor uw Bedrijf
        </motion.h1>
        
        <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
          Met DZY Software Consulting bouwen we hoogwaardige webapplicaties en veilige cloudarchitecturen voor KMO's en grote ondernemingen in Antwerpen en omstreken.
        </motion.p>
        
        <motion.div variants={fadeUpVariant}>
          <motion.a 
            href="/contact" 
            onClick={(e) => { e.preventDefault(); nav('contact'); }} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-shadow bg-slate-900 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(79,70,229,0.4)] relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center">Vertel ons over uw Project <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.a>
        </motion.div>
      </div>

      <motion.div variants={fadeUpVariant} className="glass-panel-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 pointer-events-none"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10 relative z-10">
          <div><div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-emerald-600 mb-2">%300</div><div className="text-slate-300 text-sm font-medium">Operationele Snelheidsverhoging</div></div>
          <div><div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-indigo-600 mb-2">Nul</div><div className="text-slate-300 text-sm font-medium">Risico op Dataverlies</div></div>
          <div><div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-fuchsia-400 to-fuchsia-600 mb-2">7/24</div><div className="text-slate-300 text-sm font-medium">Continue Monitoring</div></div>
          <div><div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-amber-600 mb-2">%100</div><div className="text-slate-300 text-sm font-medium">Exclusief Eigendom</div></div>
        </div>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
        {homeBoxesData.map((box) => (
          <motion.div 
            variants={fadeUpVariant}
            key={box.id} 
            onClick={() => setExpandedBox(expandedBox === box.id ? null : box.id)} 
            whileHover={{ y: -5, scale: 1.02 }}
            className={cn(
              "glass-panel rounded-3xl p-8 transition-all duration-500 cursor-pointer",
              expandedBox === box.id ? "ring-2 ring-indigo-500/50 bg-white" : "hover:border-white/50"
            )}
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`w-14 h-14 ${box.bg} rounded-2xl flex items-center justify-center shadow-sm`}>{box.icon}</div>
              <motion.div animate={{ rotate: expandedBox === box.id ? 180 : 0 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </motion.div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{box.title}</h3>
            <p className="text-slate-600 leading-relaxed font-medium">{box.desc}</p>
            <AnimatePresence>
              {expandedBox === box.id && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-slate-500 leading-relaxed mt-4 pt-4 border-t border-slate-100">{box.fullDesc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="pt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Onze Superieure Technologie Stack</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">We gebruiken de meest betrouwbare moderne architecturen om uw systemen klaar te stomen voor de toekomst.</p>
        </div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TechCard icon={<Code2 className="w-8 h-8 text-indigo-500 mb-3" />} title="Moderne Frontend" subtitle="React, Next.js, Tailwind" />
          <TechCard icon={<Server className="w-8 h-8 text-emerald-500 mb-3" />} title="Krachtige Backend" subtitle="Node.js, TypeScript, Python" />
          <TechCard icon={<Database className="w-8 h-8 text-fuchsia-500 mb-3" />} title="Cloud Database" subtitle="Supabase, PostgreSQL, Redis" />
          <TechCard icon={<Cloud className="w-8 h-8 text-amber-500 mb-3" />} title="DevOps & AI" subtitle="AWS, Docker, OpenAI" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function TechCard({ icon, title, subtitle }) {
  return (
    <motion.div 
      variants={fadeUpVariant}
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="glass-panel p-6 rounded-3xl flex flex-col items-center justify-center text-center cursor-default group"
    >
      <div className="group-hover:scale-110 transition-transform duration-300 ease-[0.22,1,0.36,1]">
        {icon}
      </div>
      <h4 className="font-bold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
    </motion.div>
  );
}

function ServicesView() {
  const [expandedService, setExpandedService] = useState(null);
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-7xl mx-auto">
      <motion.div variants={fadeUpVariant} className="max-w-3xl mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Professionele Software Consulting Diensten</h1>
        <p className="text-xl text-slate-600">Onze maatwerk softwareontwikkeling, cloudarchitectuur en digitale transformatie oplossingen om uw bedrijf te digitaliseren.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, idx) => (
          <motion.div 
            variants={fadeUpVariant}
            whileHover={{ y: -5, scale: 1.02 }}
            key={idx} 
            onClick={() => setExpandedService(expandedService === idx ? null : idx)} 
            className={cn(
              "glass-panel p-6 rounded-3xl cursor-pointer transition-all duration-500",
              expandedService === idx ? "ring-2 ring-indigo-500/50 bg-white" : "hover:border-white/50"
            )}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-indigo-50 rounded-2xl inline-block shadow-sm">{service.icon}</div>
              <motion.div animate={{ rotate: expandedService === idx ? 180 : 0 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </motion.div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
            <p className={cn("text-sm leading-relaxed", expandedService === idx ? "text-slate-900 font-semibold" : "text-slate-600")}>{service.desc}</p>
            <AnimatePresence>
              {expandedService === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-slate-600 leading-relaxed mt-4 pt-4 border-t border-slate-100">{service.fullDesc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ExpertiseView({ nav }) {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-7xl mx-auto">
      <motion.div variants={fadeUpVariant} className="max-w-3xl mb-12 text-center mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Sectorspecifieke Softwareoplossingen</h1>
        <p className="text-xl text-slate-600">End-to-end maatwerksoftware en integratieoplossingen voor nichegebieden zoals logistiek, SaaS en de academische wereld.</p>
      </motion.div>
      <div className="space-y-8 max-w-5xl mx-auto">
        {expertiseData.map((item, idx) => (
          <motion.div 
            variants={fadeUpVariant}
            key={idx} 
            className="glass-panel rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all"
          >
            <div className="flex-shrink-0 p-5 bg-indigo-50/50 rounded-2xl border border-indigo-100/50 shadow-sm">{item.icon}</div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">{item.desc}</p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={tabToPath[item.route] || '/'} 
                onClick={(e) => { e.preventDefault(); nav(item.route); }} 
                className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-indigo-600 transition-colors shadow-sm"
              >
                Meer Informatie
                <ChevronRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function SectorLandingView({ tab, nav }) {
  const sector = sectorPages[tab];
  if (!sector) return null;

  const getSectorDetails = () => {
    switch (tab) {
      case 'sector-logistics':
        return {
          desc: "We ontwerpen maatwerksoftware om internationale logistiek, voertuiglogistiek en slimme vlootbeheerprocessen te stroomlijnen. Met GPS-gebaseerde live data-integratie en analyse van brandstof- en chauffeursgedrag, verlagen we uw logistieke kosten en maximaliseren we uw operationele snelheid.",
          features: [
            { title: "Slimme Routeplanning & Optimalisatie", detail: "Creëer routes die het brandstofverbruik en de levertijden minimaliseren met AI-gestuurde algoritmen." },
            { title: "Real-time GPS & Telemetrie Integratie", detail: "Bewaak de locatie, snelheidslimieten en pauzetijden van voertuigen seconde voor seconde op live kaarten." },
            { title: "Douane en Vrachtbrief Document Automatisering", detail: "Automatiseer de generatie van officiële documenten, laaddocumenten en facturen vereist voor internationaal transport." },
            { title: "Bestelling en Klant Notificatie Infrastructuur", detail: "Breng uw klanten automatisch op de hoogte van de bestelstatus via e-mail, SMS of live tracking schermen." }
          ],
          cta: "Digitaliseer uw Logistieke Operaties"
        };
      case 'sector-saas':
        return {
          desc: "Kendi yazılım ürününüzü (SaaS) hızlı ve güvenli şekilde pazara sunmanızı sağlayacak uçtan uca altyapıları kuruyoruz. Çoklu kiracılı (multi-tenant) veri mimarisi, güvenli üyelik ve global abonelik modelleriyle projenizi sıfırdan ölçeklenebilir bir iş modeline dönüştürüyoruz.",
          features: [
            { title: "Güvenli Çoklu Kiracı Yapısı", detail: "Müşterilerinizin verilerini tamamen izole ederek, bağımsız erişim ve yüksek güvenlik standartları sunun." },
            { title: "Abonelik ve Yinelenen Ödeme Entegrasyonu", detail: "Stripe ve Iyzico entegrasyonları ile aylık/yıllık üyelikler, faturalandırma ve cüzdan yapıları oluşturun." },
            { title: "Satır Bazlı Güvenlik (Row-Level Security)", detail: "Bulut veritabanınızda (Supabase/PostgreSQL) RLS kuralları ile verilerinizi çekirdek seviyede koruyun." },
            { title: "MRR / Churn Canlı Raporlama Paneli", detail: "Yönetici panelinde gelir akışınızı, aktif kullanıcı sayılarını ve abonelik kaybı (churn) oranlarını takip edin." }
          ],
          cta: "SaaS Girişiminizi Hemen Başlatın"
        };
      case 'sector-academic':
        return {
          desc: "Akademik kurumlar, müzeler, arşiv merkezleri ve laboratuvarlar için hassas verilerin, bilimsel envanterlerin ve dijital belgelerin güvenli saklanması ve filtrelenmesini sağlayan arşiv sistemleri tasarlıyoruz. Dublin Core ve KVKK uyumlu altyapılar ile verilerinizi geleceğe taşıyoruz.",
          features: [
            { title: "KVKK & GDPR Uyumlu Veri Arşivleme", detail: "Hassas bilimsel verileri, arkeolojik kayıtları veya numune envanterlerini uluslararası standartlarda koruyun." },
            { title: "Gelişmiş Arama ve Filtreleme Motoru", detail: "Milyonlarca dijital dosya ve veri kaydı arasından saniyeler içinde kategori, tarih ve parametre bazlı arama yapın." },
            { title: "Hiyerarşik Rol & Yetki Yönetimi", detail: "Ziyaretçiler, araştırmacılar ve kurum personelleri için farklı seviyelerde dosya indirme/görüntüleme yetkileri atayın." },
            { title: "Uluslararası Akademik Entegrasyonlar", detail: "Dublin Core, OAI-PMH gibi standartlarla uyumlu veri paylaşım kanalları (API) kurgulayın." }
          ],
          cta: "Arşivinizi Dijital Dünyaya Taşıyın"
        };
      case 'sector-ecommerce':
        return {
          desc: "Sadece standart bir e-ticaret sitesi değil, bayilerinizin limit ve iskontolarıyla sipariş verebildiği karmaşık B2B portalları veya farklı satıcıların komisyonla ürün sattığı Pazaryeri (Marketplace) sistemleri kuruyoruz.",
          features: [
            { title: "Çok Satıcılı Pazaryeri Mimari", detail: "Satıcıların kendi mağazalarını yönetebildiği, komisyonların otomatik kesilip dağıtıldığı güvenli e-ticaret ekosistemleri." },
            { title: "B2B Bayi Sipariş ve Cari Yönetimi", detail: "Her bayiye özel tanımlı iskontolar, açık hesap kotaları ve DBS (Doğrudan Borçlandırma Sistemi) entegrasyonu." },
            { title: "Çoklu Depo ve Stok Senkronizasyonu", detail: "Farklı depo lokasyonlarındaki stokları anlık eşitleyen, yok satmayı engelleyen milisaniyelik kilit algoritmaları." },
            { title: "ERP & Kargo Çift Yönlü Entegrasyon", detail: "Siparişlerin anında muhasebeye ve kargo firmasına aktarılıp, barkod ve faturaların otomatik basılması." }
          ],
          cta: "E-Ticaret Platformunuzu Tasarlayın"
        };
      case 'sector-tourism':
        return {
          desc: "Konaklama tesislerinin karmaşık operasyonlarını tek bir bulut çatıda toplayan, OTA (Booking, Expedia) platformlarıyla saniyelik çift yönlü entegre çalışan modern Otel Yönetim (PMS) mimarileri geliştiriyoruz.",
          features: [
            { title: "Kanal Yöneticisi (Channel Manager)", detail: "Odadaki son durumu tüm online platformlara saniyeler içinde göndererek Overbooking riskini sıfıra indirin." },
            { title: "Temassız Check-in ve Mobil Deneyim", detail: "Misafirlerin akıllı telefonlarıyla odaya giriş yapabileceği, oda servisi isteyebileceği dijital ön büro sistemleri." },
            { title: "Housekeeping Canlı İzleme Modülü", detail: "Odaların temizlik durumlarını kat görevlilerinin tabletlerinden anlık olarak resepsiyona aktaran entegre modüller." },
            { title: "Dinamik Fiyatlandırma (Revenue Mgt)", detail: "Talep ve bölgedeki etkinlik yoğunluğuna göre oda fiyatlarınızı otomatik ayarlayan akıllı algoritmalar." }
          ],
          cta: "Otel Yazılımınızı Buluta Taşıyın"
        };
      case 'sector-production':
        return {
          desc: "Geleneksel, hantal ve karmaşık ERP paketlerinden kurtularak üretim hattınıza özel tasarlanmış, sensör verileriyle beslenen ve esnek mikroservislerle güçlendirilmiş endüstriyel yönetim sistemleri üretiyoruz.",
          features: [
            { title: "Makine ve Sensör IoT Entegrasyonu", detail: "Üretim hattındaki makinelerden anlık sıcaklık, titreşim ve hız verisi toplayarak üretim duruşlarını erken tahmin edin." },
            { title: "Gerçek Zamanlı Fire ve Verimlilik Analizi", detail: "Üretim hatasından kaynaklı fire oranlarını anlık tespit ederek hangi vardiyada sorunun başladığını görselleştirin." },
            { title: "Mobil Depo ve Barkod Süreçleri", detail: "Depo personelinin el terminalleriyle hatasız ürün giriş/çıkışını sağlayan hızlı ve sade mobil arayüzler." },
            { title: "Mikroservis ERP Mimari", detail: "Tüm sistemi kapatmadan, sadece üretim modülünü veya finans modülünü güncelleyebileceğiniz modern yazılım altyapısı." }
          ],
          cta: "Üretim Hattınızı Dijitalleştirin"
        };
      case 'sector-health':
        return {
          desc: "Hasta verilerinin güvenliğinin en kritik olduğu sağlık sektöründe; KVKK ve GDPR uyumlu çalışan, hasta randevu, e-reçete ve tahlil süreçlerini bir araya getiren bulut tabanlı Klinik ve Hastane Bilgi Sistemleri (HBS) geliştiriyoruz.",
          features: [
            { title: "Dijital Hasta Kayıt ve Triyaj", detail: "Kağıtsız hastane vizyonuyla hastaların tıbbi geçmişinin, tahlillerinin ve tedavilerinin uçtan uca dijital arşivlendiği portal." },
            { title: "Akıllı Randevu ve Hatırlatma Sistemi", detail: "Doktor takvimlerinin online portallarla senkronize olduğu, SMS/WhatsApp üzerinden otomatik hatırlatma yapan randevu altyapısı." },
            { title: "Görüntüleme ve Laboratuvar Entegrasyonu", detail: "Röntgen, MR ve kan testi cihazlarının sonuçlarını doğrudan hasta profiline ve doktorun ekranına yansıtan API entegrasyonu." },
            { title: "Kriptografik Veri Güvenliği", detail: "Sağlık verilerinin şifrelenmiş veri tabanlarında (Encryption at Rest) tutulmasını sağlayan üst düzey siber güvenlik standartları." }
          ],
          cta: "Klinik Yazılımınızı Bize Emanet Edin"
        };
      case 'sector-education':
        return {
          desc: "Öğrenci işlerinin, akademik süreçlerin ve tahsilat yönetiminin karmaşıklığını ortadan kaldıran; veli, öğretmen ve yönetici odaklı modern Eğitim ve Öğrenme Yönetim (LMS) portalları kurguluyoruz.",
          features: [
            { title: "E-Öğrenme ve Canlı Ders Modülü", detail: "Video eğitimlerin, pdf dökümanların sunulduğu, Zoom entegreli canlı ders sınıflarının planlandığı dijital akademi platformu." },
            { title: "Sınav Analiz ve Kazanım Raporlama", detail: "Optik veya online sınav sonuçlarını analiz ederek öğrencinin konu bazlı (kazanım) zayıflıklarını çıkartan yapay zeka destekli analiz." },
            { title: "Veli Bilgilendirme Ekranları", detail: "Velilerin çocuklarının devamsızlık durumlarını, yemek menülerini ve etkinlikleri akıllı telefonundan anlık takip edebildiği mobil portallar." },
            { title: "Okul Tahsilat ve Sanal Pos Entegrasyonu", detail: "Kayıt ücretleri, taksitler ve yemekhane ödemelerinin veliler tarafından güvenli ödeme ağ geçitleriyle anlık ödenebildiği finans modülü." }
          ],
          cta: "Eğitim Kurumunuzu Dijitalleştirin"
        };
      case 'sector-fintech':
        return {
          desc: "Banka ve finans kurumları için regülasyonlara tam uyumlu, modern finansal teknolojiler (FinTech) ve Açık Bankacılık (Open Banking) API altyapıları geliştiriyoruz.",
          features: [
            { title: "Sanal POS ve Ödeme Geçidi", detail: "Kredi kartı işlemleri, tekrarlayan abonelik (recurring) ödemeleri ve cüzdan sistemleri (Stripe, Iyzico, iPara) entegrasyonları." },
            { title: "Açık Bankacılık (Open Banking) API", detail: "Farklı bankalardaki hesap hareketlerini tek ekranda toplayan, otomatik mutabakat sağlayan PSD2 uyumlu güvenli API'ler." },
            { title: "Kripto ve Blockchain Cüzdan", detail: "Web3 projeleri için akıllı kontratlar (smart contracts), token ekonomileri ve güvenli kripto saklama cüzdanları altyapısı." },
            { title: "Regülasyon ve KYC/AML Süreçleri", detail: "Müşterini Tanı (KYC) ve Kara Para Aklamayı Önleme (AML) süreçlerini otomatize eden kimlik doğrulama sistemleri." }
          ],
          cta: "Fintech Çözümünüzü Canlandırın"
        };
      case 'sector-realestate':
        return {
          desc: "Klasik emlakçılığın ötesine geçen PropTech çözümleriyle; devasa gayrimenkul portföylerini, akıllı binaları ve kira tahsilatlarını tek merkezden otonom olarak yönetin.",
          features: [
            { title: "Kira Tahsilat Otomasyonu", detail: "Geciken kiraları tespit eden, sanal pos ile online kira ödeme imkanı sunan dijital mülk yönetim modülü." },
            { title: "Akıllı Bina (Smart Building) Entegrasyonu", detail: "Bina asansörleri, aydınlatmaları ve iklimlendirme sistemleriyle IoT üzerinden haberleşen enerji yönetim panelleri." },
            { title: "Emlak Portföy ve CRM", detail: "Satılık/kiralık mülklerin tapu bilgileriyle, müşteri taleplerini yapay zeka ile eşleştiren gelişmiş CRM sistemleri." },
            { title: "Sanal Tur ve 3D Modelleme", detail: "Projelerin inşaat aşamasındayken VR (Sanal Gerçeklik) üzerinden gezilebilmesini sağlayan WebGL tabanlı gösterimler." }
          ],
          cta: "Gayrimenkul Portföyünüzü Dijitalleştirin"
        };
      case 'sector-energy':
        return {
          desc: "Karbon ayak izini düşüren, yenilenebilir enerji kaynaklarını yöneten ve akıllı şehir (Smart City) konseptini hayata geçiren endüstriyel otomasyon yazılımları geliştiriyoruz.",
          features: [
            { title: "Akıllı Şebeke (Smart Grid) İzleme", detail: "Enerji üretim santrallerinden ve dağıtım trafolarından saniyede binlerce veri alarak anlık yük analizi yapın." },
            { title: "Enerji Tüketim Raporlaması", detail: "Fabrika veya binaların aylık enerji tüketimlerini makine bazlı izleyerek verimsiz noktaları tespit eden AI modülleri." },
            { title: "Yenilenebilir Santral Yönetimi", detail: "GES (Güneş) ve RES (Rüzgar) santrallerinizin hava durumu tahminiyle üretim kapasitesini modelleyen izleme sistemleri." },
            { title: "Karbon Ayak İzi Takibi", detail: "Şirketinizin yeşil dönüşüm belgeleri (Green Deal) için karbon salınım metriklerini ISO standartlarında raporlama." }
          ],
          cta: "Enerji Tüketiminizi Optimizasyon Edin"
        };
      case 'sector-agritech':
        return {
          desc: "Tarımda verimi artıran Agrotech (Tarım Teknolojileri) çözümleriyle; sensörler, dronlar ve uydu verilerini kullanarak çiftliklerinizi veri ile yönetmenizi sağlıyoruz.",
          features: [
            { title: "Sera Otomasyon Sistemleri", detail: "Nem, ısı ve CO2 sensörlerinden gelen veriye göre havalandırma ve sulamayı kendi kendine açıp kapatan IoT altyapısı." },
            { title: "Tarladan Sofraya İzlenebilirlik", detail: "Ürünün tohumdan market rafına gelene kadarki tüm süreçlerini Blockchain tabanlı QR kodlar ile takip eden güven platformu." },
            { title: "Uydu Destekli Verim Analizi", detail: "Uydu görüntüleriyle tarladaki bitki gelişimini analiz ederek, gübre ve su ihtiyacı olan spesifik bölgeleri tespit eden modül." },
            { title: "Akıllı Lojistik ve Soğuk Zincir", detail: "Hasat sonrası ürünlerin taşınırken soğuk zincir kırılmalarını anlık bildiren araç içi telemetri entegrasyonu." }
          ],
          cta: "Tarım İşletmenizi Dijitalleştirin"
        };
      case 'sector-retail':
        return {
          desc: "Çok şubeli perakende zincirlerinin kasiyerlerinden (POS), merkez depoya kadar tüm bilgi akışını kesintisiz ve milisaniye hızında bağlayan modern mağazacılık sistemleri.",
          features: [
            { title: "Bulut Tabanlı Yeni Nesil POS", detail: "Sadece internete bağlanarak her tür tablet ve PC'de çalışabilen, anında yeni şube açabileceğiniz kasa yazılımı." },
            { title: "Müşteri Sadakat (Loyalty) Programı", detail: "Müşterilerinize özel mobil uygulamalar üzerinden puan kazandırma, doğum günü kuponları ve hediye çeki altyapıları." },
            { title: "Omnichannel Stok Yönetimi", detail: "Fiziksel mağaza stoku ile E-ticaret sitenizin stokunu canlı birleştirerek Click&Collect (tıkla-gel al) hizmetini sunun." },
            { title: "Kasa Yanı Upsell Analitiği", detail: "Hangi ürünlerin beraber satıldığını (Market Basket Analysis) analiz ederek kasiyer ekranına anlık ürün önerme algoritması." }
          ],
          cta: "Mağazalarınızı Tek Merkezden Yönetin"
        };
      default:
        return null;
    }
  };

  const details = getSectorDetails();

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12">
      <a href="/expertises" onClick={(e) => { e.preventDefault(); nav('expertise'); }} className="inline-flex items-center text-indigo-600 font-semibold mb-8 hover:text-indigo-800 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Sektörel Çözümlere Dön
      </a>
      
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">{sector.title}</h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">{sector.subtitle}</p>
        </div>

        {details && (
          <>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed">{details.desc}</p>
            </div>

            <div className="pt-6 border-t border-slate-100/50">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Öne Çıkan Özellikler</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {details.features.map((feat, i) => (
                  <motion.div variants={fadeUpVariant} whileHover={{ y: -5 }} key={i} className="p-5 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 mr-2.5 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{feat.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-8 rounded-3xl bg-indigo-900 text-white text-center shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold">Projeniz İçin Teknik Mimari Analizi Alın</h3>
                <p className="text-indigo-200 max-w-2xl mx-auto">Sektörünüze özel yazılım gereksinimleriniz için 48 saat içinde ücretsiz teknik ön analiz raporu hazırlayalım.</p>
                <a href="/contact" onClick={(e) => { e.preventDefault(); nav('contact'); }} className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-indigo-900 bg-white rounded-xl hover:bg-indigo-50 transition-all hover:shadow-md">
                  {details.cta}
                  <ChevronRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

function AboutView() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-5xl mx-auto space-y-12">
      <motion.div variants={fadeUpVariant} className="glass-panel rounded-3xl overflow-hidden relative">
        <div className="h-32 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 w-full relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        </div>
        <div className="p-10 md:p-14 relative">
          <div className="absolute -top-12 left-10 w-24 h-24 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center">
            <span className="text-2xl font-extrabold text-slate-900 lowercase">dzy<span className="text-emerald-500">.</span></span>
          </div>
          <div className="mt-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">DZY Yazılım Danışmanlığı: Dijital Dönüşüm Ortağınız</h1>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Farklı Disiplinler, Tek Bir Analitik Yaklaşım.</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p><strong className="text-slate-900">DZY Yazılım Danışmanlığı</strong> firması olarak teknolojiyi şirketlerin dijital dönüşüm süreçlerindeki karmaşık sorunlarını çözen bir köprü olarak görüyoruz.</p>
              <p>Yazılımı sadece bir arayüz değil; veri akışı, bulut güvenliği ve kurumsal iş mantığını uçtan uca kurgulayan profesyonel bir mühendislik disiplini olarak ele alıyoruz.</p>
            </div>
            <div className="mt-12 p-8 bg-indigo-50 rounded-2xl border border-indigo-100 flex flex-col md:flex-row gap-6 items-center">
              <Globe className="w-16 h-16 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Küresel Vizyon ve Lokalizasyon</h3>
                <p className="text-slate-700">Projelerinizi yerel sınırların ötesine, uluslararası veri ve ticaret standartlarına uygun şekilde taşıyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeUpVariant} className="glass-panel rounded-3xl p-10 md:p-14">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Nuldan Canlıya Çalışma Sürecimiz</h2>
          <p className="text-lg text-slate-600">Şeffaf ve ölçülebilir adımlarla proje yönetimi.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StepCard step="1" title="Keşif ve Mimari" desc="İhtiyaç analizi ve güvenli sistem mimarisi tasarımı." />
          <StepCard step="2" title="UI/UX Tasarım" desc="Gebruiker odaklı arayüz tasarımı ve onay süreci." />
          <StepCard step="3" title="Çevik Geliştirme" desc="Düzenli demolarla iteratif geliştirme." />
          <StepCard step={<CheckCircle2 className="w-6 h-6" />} title="Test ve Yayın" desc="Kapsamlı testlerin ardından canlıya güvenli geçiş." done />
        </div>
      </motion.div>
    </motion.div>
  );
}

function StepCard({ step, title, desc, done = false }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="group">
      <div className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 border-4 border-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
        done ? "bg-emerald-100 text-emerald-600" : "bg-indigo-100 text-indigo-600"
      )}>{step}</div>
      <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-sm text-slate-600">{desc}</p>
    </motion.div>
  );
}

function ContactView() {
  const [formStatus, setFormStatus] = useState('idle');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    primaryNeed: '',
    company: '',
    budget: 'Seçiniz...',
    summary: ''
  });

  const updateField = (key, value) => setFormData((prev) => ({ ...prev, [key]: value }));

  const handleStepOne = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.primaryNeed) return;
    setFormStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    fetch(getApiUrl('/api/leads'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        primaryNeed: formData.primaryNeed,
        company: formData.company,
        budget: formData.budget,
        summary: formData.summary
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Lead submission failed');
        }
        console.log("Form başarıyla gönderildi, etiket tetikleniyor...");
        setFormStatus('success');

        // --- GOOGLE ADS DÖNÜŞÜM ETİKETİ VE DEBUG ---[cite: 1]
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-18130314578/0icoCPCp3aUcENLKmsVD'
          });
          console.log("Google Ads Etiketi Başarıyla Gönderildi!");
        } else {
          console.error("HATA: window.gtag tanımlı değil! index.html kontrol edilmeli.");
        }
        // ------------------------------------------
      })
      .catch(() => {
        setFormStatus('idle');
        alert('Mesaj gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.');
      });
  };

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-6xl mx-auto space-y-16">
      <div>
        <motion.div variants={fadeUpVariant} className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Dijital Dönüşüm Projenizi Birlikte Hayata Geçirelim</h1>
          <p className="text-xl text-slate-600">Kurumsal yazılım mimarisi uzmanlığımızın operasyonel verimliliğinize nasıl değer katabileceğini konuşalım.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div variants={fadeUpVariant} className="lg:col-span-3 glass-panel rounded-3xl p-8">
            {formStatus !== 'success' ? (
              <>
                <div className="mb-8">
                  <div className="text-sm text-slate-500 mb-2">Adım {formStep} / 2</div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-indigo-600 transition-all ${formStep === 1 ? 'w-1/2' : 'w-full'}`}></div>
                  </div>
                </div>

                {formStep === 1 && (
                  <form onSubmit={handleStepOne} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Ad Soyad</label>
                      <input required type="text" value={formData.name} onChange={(e) => updateField('name', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">E-Posta</label>
                      <input required type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="ornek@sirket.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Öncelikli İhtiyacınız</label>
                      <input required type="text" value={formData.primaryNeed} onChange={(e) => updateField('primaryNeed', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Örn: Operasyon paneli ve mobil uygulama" />
                    </div>
                    <button type="submit" className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-colors inline-flex justify-center items-center">
                      Detay Adımına Geç
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                  </form>
                )}

                {formStep === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Şirket Adı</label>
                      <input required type="text" value={formData.company} onChange={(e) => updateField('company', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Şirket A.Ş." />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Proje Bütçe Aralığı</label>
                      <select value={formData.budget} onChange={(e) => updateField('budget', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700">
                        <option>Seçiniz...</option>
                        <option>1.000$ - 5.000$ (Başlangıç Projeleri)</option>
                        <option>5.000$ - 10.000$ (Orta Ölçekli Sistemler)</option>
                        <option>10.000$ - 50.000$ (Kapsamlı Platformlar)</option>
                        <option>50.000$ - 150.000$ (Kurumsal Dönüşüm)</option>
                        <option>150.000$+ (Büyük Ölçekli Yatırımlar)</option>
                        <option>Sadece Danışmanlık / Retainer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Proje Özeti</label>
                      <textarea required rows="4" value={formData.summary} onChange={(e) => updateField('summary', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" placeholder="Vizyonunuzu kısaca anlatın..."></textarea>
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={() => setFormStep(1)} className="w-1/3 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors">Geri</button>
                      <button type="submit" disabled={formStatus === 'sending'} className="w-2/3 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-colors flex items-center justify-center disabled:opacity-70">
                        {formStatus === 'idle' && 'Mesajı Gönder'}
                        {formStatus === 'sending' && 'Gönderiliyor...'}
                      </button>
                    </div>
                  </form>
                )}
              </>
            ) : (
              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold inline-flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2" /> Talebiniz alındı. Teşekkür ederiz!
                </div>
                <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Hemen toplantı zamanı seçin</h4>
                  <p className="text-slate-700 mb-4">Sıcak lead'inizi bekletmeden toplantıya çevirmek için aşağıdaki takvim bağlantısından uygun slotu seçebilirsiniz.</p>
                  <a href="https://calendly.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700">
                    Takvimden Randevu Al (Calendly)
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div variants={fadeUpVariant} className="lg:col-span-2 space-y-6">
            <div className="glass-panel-dark text-white rounded-3xl p-8 shadow-lg h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contactinformatie</h3>
                <div className="mb-6 rounded-xl bg-emerald-500/10 border border-emerald-400/30 p-4">
                  <p className="text-emerald-300 font-semibold">Reactie binnen 24 uur • Technische vooranalyse in 48 uur</p>
                  <p className="text-slate-300 text-sm mt-1">Met onze SLA-belofte zetten we uw verzoek snel om in actie.</p>
                </div>
                <div className="space-y-6">
                  <InfoRow icon={<MapPin className="w-6 h-6 text-indigo-400 mt-1 mr-4 flex-shrink-0" />} title="Hoofdkantoor" value={"Markgravelei 145 bus 4, 2018 Antwerpen, België\n(Hoofdkantoor)"} />
                  <InfoRow icon={<Mail className="w-6 h-6 text-indigo-400 mt-1 mr-4 flex-shrink-0" />} title="E-mail" value="info@dzydigital.com" />
                  <InfoRow icon={<Phone className="w-6 h-6 text-indigo-400 mt-1 mr-4 flex-shrink-0" />} title="Telefoon" value="+32 475 94 06 56" />
                  <InfoRow icon={<Clock className="w-6 h-6 text-indigo-400 mt-1 mr-4 flex-shrink-0" />} title="Kantooruren" value={"Maandag - Vrijdag\n09:00 - 18:00 (CET)"} />
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-slate-800">
                <span className="text-3xl font-extrabold tracking-tighter text-white lowercase">dzy<span className="text-emerald-500">.</span></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div variants={fadeUpVariant} className="glass-panel rounded-3xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6"><HelpCircle className="w-7 h-7 text-indigo-600" /></div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Aklınıza Takılanlar</h2>
            <p className="text-slate-600 leading-relaxed">Kurumsal proje öncesi en çok sorulan soruları şeffaflıkla cevapladık.</p>
          </div>
          <div className="md:w-2/3 w-full space-y-4">
            {contactFaqs.map((faq, idx) => (
              <div key={idx} onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)} className="border border-slate-200 rounded-2xl overflow-hidden cursor-pointer hover:border-indigo-200 transition-colors">
                <div className="p-5 flex justify-between items-center bg-slate-50">
                  <h4 className="font-bold text-slate-900 pr-4">{faq.q}</h4>
                  <div className={`text-slate-400 transition-transform duration-300 ${expandedFaq === idx ? 'rotate-180 text-indigo-600' : ''}`}><ChevronDown className="w-5 h-5" /></div>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-white px-5 ${expandedFaq === idx ? 'max-h-48 py-5 border-t border-slate-100' : 'max-h-0 py-0'}`}>
                  <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function InfoRow({ icon, title, value }) {
  return (
    <div className="flex items-start">
      {icon}
      <div>
        <p className="font-semibold text-slate-200">{title}</p>
        <p className="text-slate-400 mt-1 whitespace-pre-line">{value}</p>
      </div>
    </div>
  );
}

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Merhaba! DZY Yazılım Danışma'ya hoş geldiniz. Projenizle ilgili nasıl yardımcı olabilirim?", sender: 'bot', time: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const userText = inputValue;
    const sessionId = `session-${new Date().toISOString().slice(0, 10)}`;
    setMessages((prev) => [...prev, { text: userText, sender: 'user', time: new Date() }]);
    setInputValue('');
    fetch(getApiUrl('/api/chat'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: userText, sessionId })
    })
      .then(async (response) => {
        if (!response.ok) throw new Error('Chat submit failed');
        const data = await response.json();
        setMessages((prev) => [...prev, { text: data.reply, sender: 'bot', time: new Date() }]);
      })
      .catch(() => {
        setMessages((prev) => [...prev, {
          text: 'Mesajınız alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.',
          sender: 'bot',
          time: new Date()
        }]);
      });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] max-w-[calc(100vw-3rem)] h-[450px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
          <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center font-bold mr-3">D</div>
              <div>
                <h4 className="font-bold text-sm">DZY Canlı Destek</h4>
                <p className="text-xs text-emerald-400 flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-400 mr-1 animate-pulse"></span> Çevrimiçi</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            <div className="text-xs text-center text-slate-400 mb-4">Realtime Demo Altyapısı</div>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 bg-white border-t border-slate-200">
            <form onSubmit={handleSend} className="flex relative">
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Mesajınızı yazın..." className="flex-1 py-2 pl-4 pr-10 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button type="submit" disabled={!inputValue.trim()} className="absolute right-1 top-1 bottom-1 w-8 flex items-center justify-center text-indigo-600 disabled:text-slate-400 bg-white rounded-full shadow-sm">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg shadow-slate-400/50 hover:scale-105 hover:bg-indigo-600 transition-all duration-300 relative group">
        {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
        {!isOpen && <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>}
        {!isOpen && <span className="absolute right-full mr-4 bg-slate-800 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Bize Canlı Ulaşın</span>}
      </button>
    </div>
  );
}

function BlogView({ nav }) {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-5xl mx-auto space-y-12">
      <motion.div variants={fadeUpVariant} className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Bilgi Bankası & Vaka Analizleri</h1>
        <p className="text-xl text-slate-600">Teknoloji trendleri, mimari çözümlerimiz ve başarı hikayelerimiz.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <motion.div variants={fadeUpVariant} whileHover={{ y: -5 }} key={post.id} className="glass-panel rounded-3xl overflow-hidden flex flex-col group">
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">{post.category}</span>
                <span className="text-xs text-slate-500">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{post.title}</h3>
              <p className="text-slate-600 mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
              <a href={'/blog/' + post.slug} onClick={(e) => { e.preventDefault(); nav('blog-post', post.slug); }} className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-800 transition-colors">
                Yazıyı Oku <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function BlogPostView({ slug, nav }) {
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return <div className="text-center py-20"><h1 className="text-2xl font-bold">Yazı Bulunamadı.</h1><button onClick={() => nav('blog')} className="mt-4 text-indigo-600 underline">Geri Dön</button></div>;

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12">
      <a href="/blog" onClick={(e) => { e.preventDefault(); nav('blog'); }} className="inline-flex items-center text-indigo-600 font-semibold mb-8 hover:text-indigo-800 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Bilgi Bankasına Dön
      </a>
      <div className="mb-8 flex items-center justify-between text-sm text-slate-500 border-b border-slate-100 pb-4">
        <div><span className="font-bold text-indigo-600">{post.category}</span> &bull; {post.date}</div>
        <div>{post.readTime}</div>
      </div>
      <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600" dangerouslySetInnerHTML={{ __html: post.content }} />
    </motion.div>
  );
}
