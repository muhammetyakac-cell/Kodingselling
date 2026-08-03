import React, { useState, useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { getApiUrl } from './lib/api';
import { blogPosts } from './blogData';
import { faqData } from './faqData';
import { servicesData, expertiseData, sectorPages } from './servicesData';

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
    title: 'DZY Digital | Slimme, Veilige en Schaalbare Softwareoplossingen',
    description: 'Web/mobiele applicaties, cloudarchitectuur, IoT-integratie en maatwerksoftwareoplossingen met DZY Digital. Bedrijfstechnologieadvies gevestigd in Antwerpen.',
    keywords: 'software consultancy, maatwerk softwareontwikkeling, mobiele applicatie, webdesign, cloudsystemen, iot-integratie, saas-software, softwarebedrijf, dzy digital',
    path: '/',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DZY Software Consultancy",
        "url": "https://www.dzydigital.com",
        "logo": "https://www.dzydigital.com/og-image.png",
        "description": "Een zakelijk softwarebedrijf dat next-generation technologieadvies en software-engineeringdiensten aanbiedt.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+90-555-208-3092",
          "contactType": "customer service",
          "availableLanguage": ["Turkish", "English"]
        },
        "sameAs": [
          "https://www.instagram.com/dzydigital",
          "https://www.linkedin.com/company/dzydigital"
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
    title: 'Onze Diensten | Web, Mobiel, Cloud & Automatisering - DZY Digital',
    description: 'Mobiele/webapplicaties, virtuele POS, gegevensbeveiliging, ERP/CRM en SaaS-ontwikkelingsdiensten. Bedrijfssoftwareadvies in Antwerpen.',
    keywords: 'softwarediensten, ontwikkeling mobiele apps, integratie virtuele POS, gegevensbeveiliging, vernieuwing legacy-systemen, cto-advies, saas-ontwikkeling, seo-optimalisatie',
    path: '/diensten',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "DZY Digital Diensten",
        "description": "Bedrijfssoftwareontwikkeling, cloudarchitectuur en digitale transformatiediensten.",
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dzydigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "Onze Diensten", "item": "https://www.dzydigital.com/diensten" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mobiele en Web Applicaties Geliştirme",
        "description": "iOS ve Android için native ve çapraz platform mobil uygulamalar, responsive web siteleri ve PWA çözümleri.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Softwareontwikkeling"
      }
    ]
  },
  expertise: {
    title: 'Sectorspecifieke Softwareoplossingen | Lojistik, SaaS ve Akademik Sistemler - DZY Digital',
    description: 'Sectorspecifieke softwareoplossingen voor logistiek vlootbeheer, ontwikkeling van SaaS-platforms en academische archiefsystemen.',
    keywords: 'logistieke software, vlootbeheer, academische archiefsystemen, saas platform ontwikkeling, branchespecifieke software, b2b software integratie, erp oplossingen',
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dzydigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "Sektörel Çözümler", "item": "https://www.dzydigital.com/expertises" }
        ]
      }
    ]
  },
  about: {
    title: 'Over ons | Bedrijfstechnologievisie - DZY Digital',
    description: 'We zien technologie als een brug die de problemen van bedrijven oplost en structureren software end-to-end met een ingenieursdiscipline.',
    keywords: 'wie is dzy digital, bedrijfssoftware consultancy, softwarebureau, cto consultancy, digitale transformatie expert, technologie consultant',
    path: '/over-ons',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "DZY Digital Hakkında",
        "description": "Next-generation technologieadvies en software-engineeringvisie."
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dzydigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "Over ons", "item": "https://www.dzydigital.com/over-ons" }
        ]
      }
    ]
  },
  contact: {
    title: 'İletişim | Projenizi Başlatın ve Teknoloji Danışmanlığı Alın - DZY Digital',
    description: 'DZY Digital Antwerpen contact. Vul het formulier in om uw project te beschrijven en ontvang binnen 24 uur een gratis technisch vooranalyserapport.',
    keywords: 'software offerte aanvragen, software contact, dzy digital telefoon, softwarebedrijf adres, gratis advies',
    path: '/contact',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "DZY Digital - Software Consultancy",
        "image": "https://www.dzydigital.com/og-image.png",
        "telephone": "+90-555-208-3092",
        "email": "info@dzydigital.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Markgravelei 145 bus 4",
          "addressLocality": "Antwerpen",
          "addressRegion": "Antwerpen",
          "postalCode": "2018",
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dzydigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "İletişim", "item": "https://www.dzydigital.com/contact" }
        ]
      }
    ]
  },
  'sector-logistics': {
    title: 'Lojistik ve Filo Yönetimi Çözümleri | DZY Digital',
    description: 'GPS filo takibi, akıllı rota optimizasyonu ve gümrük belge otomasyonu ile lojistik operasyonlarınızı dijitalleştirin.',
    keywords: 'logistiek vlootbeheer, voertuigvolgsysteem, route-optimalisatiesoftware, automatisering documentenstroom douane, gps tracking',
    path: '/sector/logistiek',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Logistiek en Vlootbeheer Software",
        "description": "Maatwerk softwareoplossingen voor internationaal transport, route-optimalisatie en live fleet tracking.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Logistieke Softwareontwikkeling"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dzydigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "Sektörel Çözümler", "item": "https://www.dzydigital.com/expertises" },
          { "@type": "ListItem", "position": 3, "name": "Lojistik", "item": "https://www.dzydigital.com/sektor/lojistik" }
        ]
      }
    ]
  },
  'sector-saas': {
    title: 'SaaS ve Platform Ürün Geliştirme | DZY Digital',
    description: 'Multi-tenant SaaS altyapısı, Stripe abonelik entegrasyonu ve ölçeklenebilir bulut mimarisi ile ürününüzü pazara taşıyın.',
    keywords: 'saas ontwikkeling, abonnementen software, multi-tenant architectuur, stripe integratie, saas infrastructuur, cloud platform',
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dzydigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "Sektörel Çözümler", "item": "https://www.dzydigital.com/expertises" },
          { "@type": "ListItem", "position": 3, "name": "SaaS", "item": "https://www.dzydigital.com/sektor/saas" }
        ]
      }
    ]
  },
  'sector-academic': {
    title: 'Akademik ve Bilimsel Dijital Arşiv Sistemleri | DZY Digital',
    description: 'KVKK uyumlu bilimsel veri arşivi, Dublin Core entegrasyonu ve güvenli akademik veri paylaşım altyapıları geliştirme.',
    keywords: 'academisch data-archief, wetenschappelijke inventarissoftware, digitale bibliotheekinfrastructuur, veilig delen van gegevens, dublin core',
    path: '/sector/academisch',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Akademik Dijital Arşiv Sistemleri",
        "description": "Araştırma verileri, numune yönetimi ve güvenli paylaşım için kurumlara özel dijital arşiv çözümleri.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Academische Softwareontwikkeling"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dzydigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "Sektörel Çözümler", "item": "https://www.dzydigital.com/expertises" },
          { "@type": "ListItem", "position": 3, "name": "Akademik", "item": "https://www.dzydigital.com/sektor/akademik" }
        ]
      }
    ]
  },
  'sector-ecommerce': {
    title: 'B2B E-Ticaret ve Pazaryeri Sistemleri | DZY Digital',
    description: 'Bayi ağınızı yönetin, tahsilatları ve B2B siparişleri otomatize edin. Özelleştirilebilir pazaryeri ve e-ticaret altyapıları.',
    keywords: 'b2b e-commerce software, marktplaatssoftware, multi-vendor e-commerce, b2b bestelsysteem, dealer management systeem',
    path: '/sector/ecommerce',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "B2B E-Ticaret Sistemleri",
        "description": "Kapalı devre bayi siparişleri ve çok satıcılı e-ticaret (marketplace) altyapıları.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "E-Commerce Softwareontwikkeling"
      }
    ]
  },
  'sector-tourism': {
    title: 'Hotel- en Toerismebeheersoftware (PMS) | DZY Digital',
    description: 'Cloud PMS-oplossingen van de volgende generatie die alle reserverings-, online betalings- en huishoudprocessen van uw hotel op één scherm samenbrengen.',
    keywords: 'hotelbeheersoftware, pms software, cloud hotel programma, toerismetechnologieën, online reserveringssysteem',
    path: '/sector/toerisme',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Hotelbeheersoftware (PMS)",
        "description": "Software die reserverings- en boekhoudsystemen in de cloud combineert voor accommodatiebedrijven.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Toerisme Softwareontwikkeling"
      }
    ]
  },
  'sector-production': {
    title: 'Endüstriyel Üretim Takip ve ERP Sistemleri | DZY Digital',
    description: 'Fabrikanızdaki makinelerden canlı veri alın, üretim süreçlerinizi dijitalleştirin. Modern ve esnek ERP altyapıları.',
    keywords: 'productie trackingsysteem, industriële iot, modern erp programma, fabrieksautomatisering software, uitval analyse',
    path: '/sector/productie',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Productie Tracking en ERP Software",
        "description": "Üretim bandından anlık veri alarak fire oranlarını azaltan ERP çözümleri.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "ERP Softwareontwikkeling"
      }
    ]
  },
  'sector-health': {
    title: 'Sağlık, Klinik ve Hastane Bilgi Sistemleri (HBS) | DZY Digital',
    description: 'KVKK uyumlu hasta kayıt portalı, randevu takip modülü ve e-reçete entegreli yeni nesil hastane yönetim programları.',
    keywords: 'ziekenhuisinformatiesysteem, his software, kliniek tracking programma, gdpr compliant patiëntportaal, gezondheidstechnologieën',
    path: '/sector/gezondheidszorg',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Sağlık ve Hastane Bilgi Sistemleri",
        "description": "Klinik ve hastaneler için randevu takibi ve dijital arşiv sağlayan otomasyonlar.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Gezondheidszorg Softwareontwikkeling"
      }
    ]
  },
  'sector-education': {
    title: 'Okul, K-12 ve Eğitim Portalları (LMS) | DZY Digital',
    description: 'Online sınav analizi, veli bilgilendirme sistemi ve e-öğrenme modüllerini tek bir çatıda toplayan okul yönetim altyapıları.',
    keywords: 'schoolmanagementsysteem, lms software, onderwijsportaal ontwikkeling, online examen software, studentenvolgsysteem',
    path: '/sector/onderwijs',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Eğitim ve LMS Platformları",
        "description": "Okullar için veli bilgilendirme, sınav analizi ve e-öğrenme odaklı eğitim yönetim portalları.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Onderwijs Softwareontwikkeling"
      }
    ]
  },
  'sector-fintech': {
    title: 'Finans Teknolojileri ve Açık Bankacılık | DZY Digital',
    description: 'Dijital cüzdan, açık bankacılık regülasyonlarına uyumlu API ve ödeme geçidi çözümleri.',
    keywords: 'fintech software, open banking api, payment gateway integratie, digitale portemonnee software, virtuele pos integratie',
    path: '/sector/fintech',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Finans Teknolojileri (FinTech)",
        "description": "Banka entegrasyonları, cüzdan sistemleri ve açık bankacılık çözümleri.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Financiële Softwareontwikkeling"
      }
    ]
  },
  'sector-realestate': {
    title: 'Gayrimenkul ve PropTech Sistemleri | DZY Digital',
    description: 'Proptech-oplossingen, automatisering van huurinning en slimme gebouwsoftware voor het beheren van grote vastgoedportefeuilles.',
    keywords: 'proptech software, vastgoedbeheersysteem, slimme gebouwautomatisering, huurinning software, vastgoed software',
    path: '/sector/vastgoed',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "PropTech en Vastgoedsoftware",
        "description": "Emlak portföy yönetimi ve akıllı bina yönetim sistemleri.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Vastgoed Softwareontwikkeling"
      }
    ]
  },
  'sector-energy': {
    title: 'Akıllı Şehir ve Enerji Otomasyonları | DZY Digital',
    description: 'Smart grid monitoring, analyse van energieverbruik en duurzame energiesoftware aangedreven door IoT.',
    keywords: 'smart city oplossingen, energieautomatisering, iot energietracking, smart grid software, energieverbruiksanalyse',
    path: '/sector/energie',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Enerji ve Akıllı Şehir Sistemleri",
        "description": "Analyse van energieverbruik en IoT-ondersteunde smart city-software.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Energie Softwareontwikkeling"
      }
    ]
  },
  'sector-agritech': {
    title: 'Tarım Teknolojileri ve Agrotech | DZY Digital',
    description: 'Kasautomatisering, sensorgebaseerde slimme irrigatie en farm-to-fork productie tracking (AgriTech) software.',
    keywords: 'agrotech software, slimme landbouwtechnologieën, kasautomatisering, slim irrigatiesysteem, landbouw iot',
    path: '/sector/agritech',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Tarım Teknolojileri (AgriTech)",
        "description": "Sera otomasyonu ve sensör bazlı akıllı sulama sistemleri.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Landbouw Softwareontwikkeling"
      }
    ]
  },
  'sector-retail': {
    title: 'Perakende ve Mağazacılık (POS) Sistemleri | DZY Digital',
    description: 'Çok şubeli perakende zincirleri için bulut POS, stok yönetimi, crm ve müşteri sadakat programları.',
    keywords: 'cloud pos software, retailsysteem, retail erp, klantloyaliteitsprogramma software, multi-branch beheer',
    path: '/sector/retail',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Retail en POS Software",
        "description": "Cloudgebaseerde POS- en voorraadbeheersoftware voor winkels met meerdere filialen.",
        "provider": { "@type": "Organization", "name": "DZY Digital" },
        "areaServed": "BE",
        "serviceType": "Retail Softwareontwikkeling"
      }
    ]
  },
  blog: {
    title: 'Kennisbank & Blog | Technologie- en Softwaretrends - DZY Digital',
    description: 'Ontdek onze kennisbank met casestudies voor het MKB, softwarearchitectuur, digitale transformatie en cloudtechnologieën.',
    keywords: 'software blog, technologieartikelen, fouten bij digitale transformatie, casestudy, softwaregids',
    path: '/blog',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "DZY Digital Bilgi Bankası",
        "url": "https://www.dzydigital.com/blog",
        "description": "Deskundige inhoud over software, technologie en digitale transformatie.",
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dzydigital.com/" },
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
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl + "/" },
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
                  <span itemProp="postalCode"> 2018</span>, 
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
              <a href="https://www.linkedin.com/company/dzydigital" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
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
          desc: "We bouwen end-to-end infrastructuren om uw eigen softwareproduct (SaaS) snel en veilig op de markt te brengen. Met multi-tenant data-architectuur, veilige lidmaatschappen en wereldwijde abonnementsmodellen transformeren we uw project vanaf nul in een schaalbaar bedrijfsmodel.",
          features: [
            { title: "Veilige Multi-Tenant Structuur", detail: "Isoleer de gegevens van uw klanten volledig voor onafhankelijke toegang en de hoogste veiligheidsstandaarden." },
            { title: "Abonnement & Terugkerende Betalingen", detail: "Creëer maandelijkse/jaarlijkse lidmaatschappen, facturering en portemonneestructuren met Stripe en Mollie integraties." },
            { title: "Row-Level Security (RLS)", detail: "Beveilig uw gegevens in de cloud-database (Supabase/PostgreSQL) op het diepste niveau met RLS-regels." },
            { title: "MRR / Churn Live Rapportage", detail: "Volg uw inkomstenstroom, het aantal actieve gebruikers en het churn-percentage in uw beheerpaneel." }
          ],
          cta: "Start uw SaaS Startup Nu"
        };
      case 'sector-academic':
        return {
          desc: "We ontwerpen archiefsystemen voor academische instellingen, musea, archiefcentra en laboratoria die veilige opslag en filtering van gevoelige gegevens, wetenschappelijke inventarissen en digitale documenten garanderen. Met Dublin Core en GDPR-compatibele infrastructuren dragen we uw gegevens de toekomst in.",
          features: [
            { title: "GDPR Compatibele Data Archivering", detail: "Bescherm gevoelige wetenschappelijke gegevens, archeologische archieven of monsterinventarissen volgens internationale normen." },
            { title: "Geavanceerde Zoek- en Filter Engine", detail: "Doorzoek miljoenen digitale bestanden en gegevensrecords in seconden op categorie, datum en parameters." },
            { title: "Hiërarchisch Rol & Rechtenbeheer", detail: "Wijs verschillende niveaus van bestandsdownload/weergave-rechten toe voor bezoekers, onderzoekers en personeel." },
            { title: "Internationale Academische Integraties", detail: "Creëer data-uitwisselingskanalen (API) die compatibel zijn met standaarden zoals Dublin Core en OAI-PMH." }
          ],
          cta: "Breng uw Archief naar de Digitale Wereld"
        };
      case 'sector-ecommerce':
        return {
          desc: "We bouwen niet zomaar een standaard e-commerce site, maar complexe B2B-portalen waar uw dealers bestellingen kunnen plaatsen met hun limieten en kortingen, of Marketplace-systemen waar verschillende verkopers producten verkopen met commissie.",
          features: [
            { title: "Multi-Vendor Marketplace Architectuur", detail: "Veilige e-commerce ecosystemen waar verkopers hun eigen winkels beheren en commissies automatisch worden verdeeld." },
            { title: "B2B Dealer Bestellingen & Saldo Beheer", detail: "Specifieke kortingen per dealer, open rekening quota's en automatische incasso integratie." },
            { title: "Multi-Warehouse & Voorraad Synchronisatie", detail: "Milisecunde vergrendelingsalgoritmen die de voorraad over verschillende magazijnlocaties direct synchroniseren om out-of-stock verkopen te voorkomen." },
            { title: "ERP & Verzending Tweeweg Integratie", detail: "Bestellingen direct doorsturen naar de boekhouding en het verzendbedrijf, met automatisch afdrukken van barcodes en facturen." }
          ],
          cta: "Ontwerp uw E-commerce Platform"
        };
      case 'sector-tourism':
        return {
          desc: "We ontwikkelen moderne Property Management System (PMS) architecturen die de complexe operaties van accommodatiefaciliteiten onder één clouddak brengen en in milliseconden tweeweg communiceren met OTA's (Booking, Expedia).",
          features: [
            { title: "Channel Manager", detail: "Stuur de nieuwste kamerstatus in seconden naar alle online platforms om het risico op overboeking tot nul te reduceren." },
            { title: "Contactloze Check-in en Mobiele Ervaring", detail: "Digitale frontoffice-systemen waar gasten via hun smartphone kunnen inchecken en roomservice kunnen aanvragen." },
            { title: "Housekeeping Live Monitoring", detail: "Geïntegreerde modules die de schoonmaakstatus van kamers direct vanaf de tablets van het huishoudelijk personeel naar de receptie sturen." },
            { title: "Dynamische Prijsstelling (Revenue Mgt)", detail: "Slimme algoritmen die uw kamerprijzen automatisch aanpassen op basis van de vraag en evenementendrukte in de regio." }
          ],
          cta: "Breng uw Hotelsoftware naar de Cloud"
        };
      case 'sector-production':
        return {
          desc: "We ontdoen ons van traditionele, logge en complexe ERP-pakketten en produceren op maat gemaakte industriële beheersystemen voor uw productielijn, gevoed door sensorgegevens en aangedreven door flexibele microservices.",
          features: [
            { title: "Machine & Sensor IoT Integratie", detail: "Verzamel direct temperatuur-, trillings- en snelheidsgegevens van machines op de productielijn om stilstand vroegtijdig te voorspellen." },
            { title: "Real-time Uitval- en Efficiëntieanalyse", detail: "Detecteer direct het percentage uitval veroorzaakt door productiefouten en visualiseer in welke dienst het probleem begon." },
            { title: "Mobiel Magazijn & Barcodeprocessen", detail: "Snelle en eenvoudige mobiele interfaces die zorgen voor een foutloze product in/uitstroom voor het magazijnpersoneel met handscanners." },
            { title: "Microservice ERP Architectuur", detail: "Moderne software-infrastructuur waar u alleen de productiemodule of de financiële module kunt updaten zonder het hele systeem plat te leggen." }
          ],
          cta: "Digitaliseer uw Productielijn"
        };
      case 'sector-health':
        return {
          desc: "In de gezondheidszorg, waar de veiligheid van patiëntgegevens het meest cruciaal is, ontwikkelen we cloudgebaseerde Kliniek- en Ziekenhuisinformatiesystemen (HIS) die volledig voldoen aan de GDPR, en patiëntafspraken, e-recepten en laboratoriumprocessen samenbrengen.",
          features: [
            { title: "Digitale Patiëntregistratie en Triage", detail: "Een portaal waar de medische geschiedenis, tests en behandelingen van patiënten end-to-end digitaal worden gearchiveerd met een papierloze ziekenhuisvisie." },
            { title: "Slim Afspraken- en Herinneringssysteem", detail: "Een afspraak-infrastructuur waar doktersagenda's gesynchroniseerd zijn met online portalen en automatisch herinneringen sturen via SMS/WhatsApp." },
            { title: "Beeldvorming & Laboratorium Integratie", detail: "API-integratie die de resultaten van röntgen-, MRI- en bloedtestapparatuur direct doorstuurt naar het patiëntenprofiel en het scherm van de arts." },
            { title: "Cryptografische Databeveiliging", detail: "Hoogwaardige cybersecurity-standaarden die ervoor zorgen dat gezondheidsgegevens worden bewaard in versleutelde databases (Encryption at Rest)." }
          ],
          cta: "Vertrouw uw Klinieksoftware aan ons Toe"
        };
      case 'sector-education':
        return {
          desc: "We ontwerpen moderne Learning Management Systems (LMS) en opleidingsportalen voor ouders, leraren en beheerders, die de complexiteit van studentenzaken, academische processen en het beheer van inning wegnemen.",
          features: [
            { title: "E-Learning en Live Lesmodule", detail: "Een digitaal academieplatform waar videolessen en pdf-documenten worden aangeboden en live lessen met Zoom-integratie worden gepland." },
            { title: "Examenanalyse en Rapportage", detail: "AI-ondersteunde analyse die optische of online examenresultaten analyseert om de zwakke punten van de student per onderwerp te identificeren." },
            { title: "Informatieschermen voor Ouders", detail: "Mobiele portalen waar ouders direct vanaf hun smartphone de aanwezigheid, lunchmenu's en evenementen van hun kinderen kunnen volgen." },
            { title: "School Inning en Virtuele POS Integratie", detail: "Een financiële module waar registratiekosten, termijnen en kantinebetalingen direct en veilig door ouders kunnen worden betaald via betalingsgateways." }
          ],
          cta: "Digitaliseer uw Onderwijsinstelling"
        };
      case 'sector-fintech':
        return {
          desc: "We ontwikkelen volledig regelgevingsconforme, moderne financiële technologieën (FinTech) en Open Banking API-infrastructuren voor banken en financiële instellingen.",
          features: [
            { title: "Virtuele POS & Payment Gateway", detail: "Integratie van creditcardtransacties, terugkerende (abonnement) betalingen en portemonneesystemen (Stripe, Mollie, Adyen)." },
            { title: "Open Banking API", detail: "Veilige PSD2-conforme API's die rekeningtransacties van verschillende banken op één scherm samenbrengen en automatische afstemming bieden." },
            { title: "Crypto & Blockchain Portemonnee", detail: "Infrastructuur voor slimme contracten (smart contracts), token economieën en veilige crypto-opslagportemonnees voor Web3-projecten." },
            { title: "Regelgeving en KYC/AML Processen", detail: "Identiteitsverificatiesystemen die Know Your Customer (KYC) en Anti-Money Laundering (AML) processen automatiseren." }
          ],
          cta: "Breng uw Fintech Oplossing tot Leven"
        };
      case 'sector-realestate':
        return {
          desc: "Beheer enorme vastgoedportefeuilles, slimme gebouwen en huurinningen autonoom vanuit één centraal punt met PropTech-oplossingen die verder gaan dan de traditionele makelaardij.",
          features: [
            { title: "Automatisering Huurinning", detail: "Een digitale vastgoedbeheermodule die achterstallige huren detecteert en online huurbetalingen mogelijk maakt met een virtuele POS." },
            { title: "Smart Building Integratie", detail: "Energiebeheerpanelen die via IoT communiceren met gebouwliften, verlichting en HVAC-systemen." },
            { title: "Vastgoedportefeuille & CRM", detail: "Geavanceerde CRM-systemen die de eigendomsgegevens van onroerend goed matchen met klantverzoeken met behulp van kunstmatige intelligentie." },
            { title: "Virtuele Tour en 3D Modellering", detail: "WebGL-gebaseerde weergaven waarmee projecten tijdens de bouwfase via VR (Virtual Reality) kunnen worden verkend." }
          ],
          cta: "Digitaliseer uw Vastgoedportefeuille"
        };
      case 'sector-energy':
        return {
          desc: "We ontwikkelen industriële automatiseringssoftware die de CO2-voetafdruk verkleint, hernieuwbare energiebronnen beheert en het Smart City concept tot leven brengt.",
          features: [
            { title: "Smart Grid Monitoring", detail: "Voer onmiddellijke belastinganalyses uit door duizenden datapunten per seconde te ontvangen van energiecentrales en distributietransformatoren." },
            { title: "Rapportage Energieverbruik", detail: "AI-modules die het maandelijkse energieverbruik van fabrieken of gebouwen per machine monitoren en inefficiënte punten detecteren." },
            { title: "Beheer Hernieuwbare Centrales", detail: "Monitoring systemen die de productiecapaciteit van uw zonne- (PV) en windenergiecentrales modelleren met weersvoorspellingen." },
            { title: "CO2-voetafdruk Tracking", detail: "Rapportage van CO2-emissiestatistieken in ISO-standaarden voor de Green Deal certificaten van uw bedrijf." }
          ],
          cta: "Optimaliseer uw Energieverbruik"
        };
      case 'sector-agritech':
        return {
          desc: "We stellen u in staat om uw boerderijen met data te beheren met Agrotech oplossingen die de opbrengst in de landbouw verhogen door gebruik te maken van sensoren, drones en satellietgegevens.",
          features: [
            { title: "Kas Automatiseringssystemen", detail: "Een IoT-infrastructuur die ventilatie en irrigatie autonoom in- en uitschakelt op basis van gegevens van vocht-, warmte- en CO2-sensoren." },
            { title: "Traceerbaarheid van Veld tot Vork", detail: "Een vertrouwensplatform dat alle processen van zaad tot winkelschap volgt met op Blockchain gebaseerde QR-codes." },
            { title: "Satellietondersteunde Opbrengstanalyse", detail: "Een module die de plantontwikkeling in het veld analyseert met satellietbeelden en specifieke gebieden detecteert die meststof en water nodig hebben." },
            { title: "Slimme Logistiek en Koude Keten", detail: "In-vehicle telemetrie integratie die onmiddellijk meldt wanneer de koude keten wordt verbroken tijdens het transport van producten na de oogst." }
          ],
          cta: "Digitaliseer uw Landbouwbedrijf"
        };
      case 'sector-retail':
        return {
          desc: "Moderne retail systemen die alle informatiestromen van kassiers (POS) tot het centrale magazijn van winkelketens met meerdere vestigingen ononderbroken en in milliseconden verbinden.",
          features: [
            { title: "Cloud-gebaseerde Next Gen POS", detail: "Kassasoftware die op elk type tablet of pc werkt door simpelweg verbinding te maken met internet, waardoor u direct nieuwe vestigingen kunt openen." },
            { title: "Klantloyaliteit (Loyalty) Programma", detail: "Infrastructuur voor het verdienen van punten, verjaardagscoupons en cadeaubonnen via speciale mobiele applicaties voor uw klanten." },
            { title: "Omnichannel Voorraadbeheer", detail: "Bied Click & Collect diensten aan door de voorraad van de fysieke winkel live te combineren met de voorraad van uw e-commerce site." },
            { title: "Kassa Upsell Analytics", detail: "Een algoritme dat direct producten aanbeveelt op het kassascherm door te analyseren welke producten samen worden gekocht (Market Basket Analysis)." }
          ],
          cta: "Beheer uw Winkels Centraal"
        };
      default:
        return null;
    }
  };

  const details = getSectorDetails();

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12">
      <a href="/expertises" onClick={(e) => { e.preventDefault(); nav('expertise'); }} className="inline-flex items-center text-indigo-600 font-semibold mb-8 hover:text-indigo-800 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Terug naar Sectoroplossingen
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
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Belangrijkste Kenmerken</h2>
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
                <h3 className="text-2xl font-bold">Ontvang een Technische Architectuuranalyse voor uw Project</h3>
                <p className="text-indigo-200 max-w-2xl mx-auto">Laat ons binnen 48 uur een gratis technisch vooranalyserapport opstellen voor uw sectorspecifieke softwarebehoeften.</p>
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
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">DZY Software Consultancy: Uw Digitale Transformatie Partner</h1>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Verschillende Disciplines, Eén Analytische Aanpak.</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p><strong className="text-slate-900">DZY Yazılım Danışmanlığı</strong> firması olarak teknolojiyi şirketlerin dijital dönüşüm süreçlerindeki karmaşık sorunlarını çözen bir köprü olarak görüyoruz.</p>
              <p>We beschouwen software niet slechts als een interface, maar als een professionele ingenieursdiscipline die datastromen, cloudbeveiliging en bedrijfslogica end-to-end structureert.</p>
            </div>
            <div className="mt-12 p-8 bg-indigo-50 rounded-2xl border border-indigo-100 flex flex-col md:flex-row gap-6 items-center">
              <Globe className="w-16 h-16 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Wereldwijde Visie en Lokalisatie</h3>
                <p className="text-slate-700">We tillen uw projecten over lokale grenzen heen, in overeenstemming met internationale data- en handelsnormen.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeUpVariant} className="glass-panel rounded-3xl p-10 md:p-14">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Ons Werkproces: Van Nul Tot Live</h2>
          <p className="text-lg text-slate-600">Projectmanagement met transparante en meetbare stappen.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StepCard step="1" title="Ontdekking en Architectuur" desc="Behoefteanalyse en ontwerp van veilige systeemarchitectuur." />
          <StepCard step="2" title="UI/UX Ontwerp" desc="Gebruikersgericht interfaceontwerp en goedkeuringsproces." />
          <StepCard step="3" title="Agile Ontwikkeling" desc="Iteratieve ontwikkeling met regelmatige demo's." />
          <StepCard step={<CheckCircle2 className="w-6 h-6" />} title="Testen en Lancering" desc="Veilige overgang naar live na uitgebreide tests." done />
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
    budget: 'Kies...',
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
        alert('Er is een probleem opgetreden bij het verzenden van het bericht. Probeer het opnieuw.');
      });
  };

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-6xl mx-auto space-y-16">
      <div>
        <motion.div variants={fadeUpVariant} className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Laten we Samen Uw Digitale Transformatieproject Realiseren</h1>
          <p className="text-xl text-slate-600">Laten we bespreken hoe onze expertise in bedrijfssoftware-architectuur waarde kan toevoegen aan uw operationele efficiëntie.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div variants={fadeUpVariant} className="lg:col-span-3 glass-panel rounded-3xl p-8">
            {formStatus !== 'success' ? (
              <>
                <div className="mb-8">
                  <div className="text-sm text-slate-500 mb-2">Stap {formStep} / 2</div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-indigo-600 transition-all ${formStep === 1 ? 'w-1/2' : 'w-full'}`}></div>
                  </div>
                </div>

                {formStep === 1 && (
                  <form onSubmit={handleStepOne} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Naam en Achternaam</label>
                      <input required type="text" value={formData.name} onChange={(e) => updateField('name', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">E-mailadres</label>
                      <input required type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="ornek@sirket.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Primaire Behoefte</label>
                      <input required type="text" value={formData.primaryNeed} onChange={(e) => updateField('primaryNeed', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Bijv: Operationeel paneel en mobiele app" />
                    </div>
                    <button type="submit" className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-colors inline-flex justify-center items-center">
                      Ga naar Details
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                  </form>
                )}

                {formStep === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Bedrijfsnaam</label>
                      <input required type="text" value={formData.company} onChange={(e) => updateField('company', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Şirket A.Ş." />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Project Budgetbereik</label>
                      <select value={formData.budget} onChange={(e) => updateField('budget', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700">
                        <option>Kies...</option>
                        <option>€1.000 - €5.000 (Startprojecten)</option>
                        <option>€5.000 - €10.000 (Middelgrote Systemen)</option>
                        <option>€10.000 - €50.000 (Uitgebreide Platformen)</option>
                        <option>€50.000 - €150.000 (Bedrijfstransformatie)</option>
                        <option>€150.000+ (Grootschalige Investeringen)</option>
                        <option>Alleen Consultancy / Retainer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Projectsamenvatting</label>
                      <textarea required rows="4" value={formData.summary} onChange={(e) => updateField('summary', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" placeholder="Beschrijf kort uw visie..."></textarea>
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={() => setFormStep(1)} className="w-1/3 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors">Terug</button>
                      <button type="submit" disabled={formStatus === 'sending'} className="w-2/3 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-colors flex items-center justify-center disabled:opacity-70">
                        {formStatus === 'idle' && 'Bericht Verzenden'}
                        {formStatus === 'sending' && 'Bezig met verzenden...'}
                      </button>
                    </div>
                  </form>
                )}
              </>
            ) : (
              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold inline-flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2" /> Uw verzoek is ontvangen. Dank u wel!
                </div>
                <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Kies direct een vergadertijd</h4>
                  <p className="text-slate-700 mb-4">U kunt via de onderstaande kalenderlink een geschikt moment kiezen om direct een afspraak in te plannen.</p>
                  <a href="https://calendly.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700">
                    Afspraak Maken via Kalender (Calendly)
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
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Veelgestelde Vragen</h2>
            <p className="text-slate-600 leading-relaxed">We hebben de meest gestelde vragen voor aanvang van een zakelijk project transparant beantwoord.</p>
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
    { text: "Hallo! Welkom bij DZY Software Consultancy. Hoe kan ik u helpen met uw project?", sender: 'bot', time: new Date() }
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
          text: 'Uw bericht is ontvangen. Ons team neemt zo spoedig mogelijk contact met u op.',
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
                <h4 className="font-bold text-sm">DZY Live Support</h4>
                <p className="text-xs text-emerald-400 flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-400 mr-1 animate-pulse"></span> Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            <div className="text-xs text-center text-slate-400 mb-4">Realtime Demo Infrastructuur</div>
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
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Typ uw bericht..." className="flex-1 py-2 pl-4 pr-10 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
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
        {!isOpen && <span className="absolute right-full mr-4 bg-slate-800 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Neem Live Contact Met Ons Op</span>}
      </button>
    </div>
  );
}

function BlogView({ nav }) {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-5xl mx-auto space-y-12">
      <motion.div variants={fadeUpVariant} className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Kennisbank & Casestudies</h1>
        <p className="text-xl text-slate-600">Technologietrends, onze architecturale oplossingen en succesverhalen.</p>
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
                Lees Artikel <ChevronRight className="w-4 h-4 ml-1" />
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
  if (!post) return <div className="text-center py-20"><h1 className="text-2xl font-bold">Artikel niet gevonden.</h1><button onClick={() => nav('blog')} className="mt-4 text-indigo-600 underline">Terug Dön</button></div>;

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12">
      <a href="/blog" onClick={(e) => { e.preventDefault(); nav('blog'); }} className="inline-flex items-center text-indigo-600 font-semibold mb-8 hover:text-indigo-800 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Terug naar de Kennisbank
      </a>
      <div className="mb-8 flex items-center justify-between text-sm text-slate-500 border-b border-slate-100 pb-4">
        <div><span className="font-bold text-indigo-600">{post.category}</span> &bull; {post.date}</div>
        <div>{post.readTime}</div>
      </div>
      <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600" dangerouslySetInnerHTML={{ __html: post.content }} />
    </motion.div>
  );
}
