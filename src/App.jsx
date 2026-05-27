import React, { useState, useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { getApiUrl } from './lib/api';
import { blogPosts } from './blogData';
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
  HelpCircle, ArrowLeft
} from 'lucide-react';

const servicesData = [
  {
    icon: <Smartphone className="w-6 h-6 text-indigo-500" />,
    title: 'Mobil ve Web Uygulamaları',
    desc: 'Hem telefonlarda hem de bilgisayarlarda kusursuz çalışan kullanıcı dostu arayüzler.',
    fullDesc: 'İşletmenizin dijital dünyadaki yüzünü baştan tasarlıyoruz. Uygulamalarınızın hem bilgisayar tarayıcılarında (Web) hem de mobil cihazlarda (iOS ve Android) tek bir modern altyapı üzerinden sorunsuz çalışmasını sağlıyoruz. Kullanıcı dostu arayüzler (UI), akıcı deneyim (UX) ve yüksek performans odaklı kodlama standartlarımız ile markanızın dijital etkileşim oranlarını artırıyoruz. Her ekran boyutuna tam uyumlu (responsive) ve arama motoru dostu platformlar teslim ediyoruz.'
  },
  {
    icon: <CreditCard className="w-6 h-6 text-emerald-500" />,
    title: 'Ödeme ve Tahsilat Sistemleri',
    desc: 'İnternetten güvenle ödeme almanızı sağlayan dijital cüzdan ve abonelik altyapıları.',
    fullDesc: 'Nakit akışınızı ve tahsilat süreçlerinizi tamamen dijitalleştirip otomatikleştiriyoruz. E-ticaret siteniz veya uygulamanız için sanal POS (Stripe, Iyzico vb.), kredi kartı entegrasyonları, tekrarlayan abonelik modelleri ve dijital cüzdan sistemleri kuruyoruz.'
  },
  {
    icon: <Activity className="w-6 h-6 text-rose-500" />,
    title: 'Canlı Takip ve Yönetim Panelleri',
    desc: 'Siparişleri, personeli ve işleyişi anlık olarak izleyebileceğiniz yönetici ekranları.',
    fullDesc: 'Sipariş durumu, personel konumu ve satış verileri gibi operasyonları gerçek zamanlı yansıtan özel admin panelleri geliştiriyoruz.'
  },
  {
    icon: <Shield className="w-6 h-6 text-slate-700" />,
    title: 'Üst Düzey Veri Güvenliği',
    desc: 'Müşteri verilerinizi ve ticari sırlarınızı siber saldırılara karşı koruyan bulut sistemleri.',
    fullDesc: 'Row Level Security (RLS) ile kullanıcıların yalnızca yetkili olduğu verilere erişmesini sağlıyor, KVKK/GDPR uyumlu altyapılar kuruyoruz.'
  },
  {
    icon: <Cpu className="w-6 h-6 text-amber-500" />,
    title: 'Akıllı Cihaz ve Sensör Entegrasyonu',
    desc: 'Fiziksel dünyadaki cihazları ve sensörleri internete bağlayan teknolojik sistemler.',
    fullDesc: 'ESP32/Arduino tabanlı IoT altyapıları ile sahadan gelen verileri buluta aktararak canlı izleme ve otomasyon sağlıyoruz.'
  },
  {
    icon: <Building2 className="w-6 h-6 text-blue-500" />,
    title: 'Eski Yazılımları Yenileme',
    desc: 'Sadece tek bilgisayarda çalışan yavaş ve eski yazılımlarınızı modern buluta taşıyoruz.',
    fullDesc: 'Legacy sistemlerinizi veri kaybı yaşamadan modern, güvenli ve her cihazdan erişilebilen bulut tabanlı yapılara dönüştürüyoruz.'
  },
  {
    icon: <UserCog className="w-6 h-6 text-indigo-600" />,
    title: 'Dışarıdan Teknoloji Yöneticiliği',
    desc: 'Şirketinize teknoloji kararlarında yol gösteren uzman yazılım danışmanlığı.',
    fullDesc: 'Dışarıdan CTO modeliyle teknolojik kararlarınızı, altyapı planlarınızı ve yazılım kalitesini yönetmenize destek oluyoruz.'
  },
  {
    icon: <LayoutTemplate className="w-6 h-6 text-teal-500" />,
    title: 'Şirkete Özel Yönetim Yazılımları',
    desc: 'Piyasadaki hazır paketler yerine, tamamen işinize özel tasarlanmış otomasyonlar.',
    fullDesc: 'ERP/CRM süreçlerinizi şirketinize özel iş kurallarıyla tasarlayarak tüm operasyonlarınızı tek dijital çatıya taşıyoruz.'
  },
  {
    icon: <Network className="w-6 h-6 text-purple-500" />,
    title: 'Farklı Yazılımları Birbirine Bağlama',
    desc: 'Muhasebe, e-ticaret ve kargo programlarınızı tam otomatik çalışacak şekilde birleştirme.',
    fullDesc: 'API entegrasyonlarıyla satış, faturalama, stok ve kargo süreçlerini uçtan uca otomatikleştiriyoruz.'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-cyan-500" />,
    title: 'Veri Analizi ve Akıllı Raporlama',
    desc: 'Şirketinizin karmaşık verilerini anlaşılır, yönetici sunumlarına hazır grafiklere çevirme.',
    fullDesc: 'Ham verilerinizi işleyip karar almayı hızlandıran canlı BI panelleri ve performans raporlama altyapıları kuruyoruz.'
  },
  {
    icon: <Store className="w-6 h-6 text-orange-500" />,
    title: 'Pazaryeri ve Platform Kurulumu',
    desc: 'Trendyol veya Sahibinden gibi çok satıcılı ve alıcılı pazar yeri sistemleri geliştirme.',
    fullDesc: 'Çok satıcılı platform altyapıları, komisyon dağıtımı ve satıcı izolasyonu ile uçtan uca marketplace sistemleri geliştiriyoruz.'
  },
  {
    icon: <Database className="w-6 h-6 text-indigo-400" />,
    title: 'Abonelik Sistemli Yazılımlar (SaaS)',
    desc: 'Kendi yazılım fikrinizi insanlara aylık üyelikle satabileceğiniz altyapılar.',
    fullDesc: 'Multi-tenant mimari ile güvenli, ölçeklenebilir ve abonelik bazlı SaaS platformlarını sıfırdan geliştiriyoruz.'
  },
  {
    icon: <Search className="w-6 h-6 text-green-600" />,
    title: 'Arama Motoru ve Google Optimizasyonu',
    desc: 'Web sitenizi arama motorlarında üst sıralara taşıyacak kod ve mimari iyileştirmeleri.',
    fullDesc: 'Teknik SEO, performans optimizasyonu ve içerik yapısı iyileştirmeleriyle organik trafik kazanımınızı artırıyoruz.'
  },
  {
    icon: <Truck className="w-6 h-6 text-slate-600" />,
    title: 'Lojistik ve Filo Yönetim Yazılımları',
    desc: 'Kargo, uluslararası taşımacılık ve araç filoları için özel takip ve operasyon sistemleri.',
    fullDesc: 'Güzergah planlama, gümrük belge akışları ve GPS araç takibi ile lojistik operasyonlarınızı tek merkezden yönetiyoruz.'
  },
  {
    icon: <Microscope className="w-6 h-6 text-fuchsia-500" />,
    title: 'Bilimsel ve Akademik Arşiv Sistemleri',
    desc: 'Araştırma verilerini, arkeolojik kazıları veya biyolojik numuneleri dijitalleştirme.',
    fullDesc: 'Bilimsel envanterler için güvenli bulut arşiv, filtreleme ve yetkili paylaşım altyapıları geliştiriyoruz.'
  },
  {
    icon: <Leaf className="w-6 h-6 text-lime-500" />,
    title: 'Akıllı Tarım ve Çevre Takip Sistemleri',
    desc: 'Tarım arazilerinden ve seralardan anlık veri alarak otomatik sulama/havalandırma yapma.',
    fullDesc: 'Sensör verilerini analiz ederek uzaktan kontrol edilen sulama/havalandırma otomasyon sistemleri kuruyoruz.'
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    title: 'Çok Dilli ve Uluslararası Altyapı',
    desc: 'Uygulamalarınızı sadece çevirmekle kalmaz, yurt dışı standartlarına (Avrupa) uygun hazırlarız.',
    fullDesc: 'Lokalizasyon, ödeme altyapıları ve GDPR uyumu ile uygulamalarınızı uluslararası pazarlara hazır hale getiriyoruz.'
  }
];

const homeBoxesData = [
  {
    id: 1,
    icon: <Rocket className="w-7 h-7 text-indigo-600" />,
    bg: 'bg-indigo-50',
    title: 'Uçtan Uca Geliştirme',
    desc: 'Sadece kod yazmıyoruz; web, mobil ve bulut ekosisteminde birbirine tam entegre, yüksek performanslı dijital ürünler tasarlıyoruz.',
    fullDesc: 'Modern web teknolojileri ve güvenilir backend altyapıları ile fikrinizi canlıya taşıyoruz.'
  },
  {
    id: 2,
    icon: <Shield className="w-7 h-7 text-slate-800" />,
    bg: 'bg-slate-50',
    title: 'Satır Bazlı Veri Güvenliği',
    desc: 'Verilerinizi doğrudan veritabanı seviyesinde, kırılmaz RLS kuralları ile koruma altına alıyoruz.',
    fullDesc: 'Veri güvenliğini uygulama seviyesinden öteye taşıyarak bulut çekirdeğinde koruyoruz.'
  },
  {
    id: 3,
    icon: <CreditCard className="w-7 h-7 text-emerald-600" />,
    bg: 'bg-emerald-50',
    title: 'Kesintisiz Ödeme',
    desc: 'Global ödeme sistemleri, cüzdan altyapıları ve komisyon dağıtım modelleri ile nakit akışınızı otomatikleştiriyoruz.',
    fullDesc: 'Abonelik ve tek seferlik ödeme modellerini güvenli şekilde entegre ediyoruz.'
  }
];

const expertiseData = [
  {
    icon: <Truck className="w-10 h-10 text-indigo-600" />,
    title: 'Otomotiv ve Lojistik Bilişimi',
    desc: 'Uluslararası araç standartları ve filo yönetim ihtiyaçlarına hakim yapımızla lojistik yazılımlar geliştiriyoruz.',
    route: 'sector-logistics'
  },
  {
    icon: <Microscope className="w-10 h-10 text-emerald-500" />,
    title: 'Bilimsel ve Akademik Bilişim',
    desc: 'Biyolojik veri takibi, arkeolojik veri dijitalleşmesi ve envanter yönetimi için analitik çözümler üretiyoruz.',
    route: 'sector-academic'
  },
  {
    icon: <Rocket className="w-10 h-10 text-fuchsia-600" />,
    title: 'E-Ticaret ve SaaS Modelleri',
    desc: 'Abonelikle satılabilecek çok kiracılı platformlar için anahtar teslim altyapılar geliştiriyoruz.',
    route: 'sector-saas'
  }
];

const sectorPages = {
  'sector-logistics': {
    title: 'Lojistik ve Filo Yönetimi Çözümleri',
    subtitle: 'Uluslararası taşımacılık, rota optimizasyonu ve canlı filo takibi için özel platformlar.'
  },
  'sector-saas': {
    title: 'SaaS ve Platform Ürün Geliştirme',
    subtitle: 'Abonelik bazlı ürününüzü hızlıca pazara çıkarmak için ölçeklenebilir SaaS mimarileri.'
  },
  'sector-academic': {
    title: 'Akademik ve Bilimsel Dijital Arşiv Sistemleri',
    subtitle: 'Araştırma verileri, numune yönetimi ve güvenli paylaşım için kurumlara özel çözümler.'
  }
};

const faqData = [
  {
    q: 'Projenin kaynak kodları bize mi ait olacak?',
    a: 'Evet. Teslimat sonunda tüm kaynak kodları ve veritabanı erişimleri şirketinize devredilir.'
  },
  {
    q: 'Eski sistemimizdeki veriler kaybolmadan yeni sisteme geçebilir miyiz?',
    a: 'Evet. Migration süreçlerinde veri kaybı olmaması için kontrollü geçiş planı uygularız.'
  },
  {
    q: 'Proje bittikten sonra teknik destek ve bakım veriyor musunuz?',
    a: 'Evet. İsteğe bağlı SLA bakım paketleri ile canlı sisteminizin güvenli ve güncel kalmasını sağlarız.'
  },
  {
    q: 'Hazır paket yazılımlar (Wordpress, Wix vb.) kullanıyor musunuz?',
    a: 'Kurumsal projelerde genellikle özel (custom) geliştirme yapıyoruz; böylece performans ve ölçeklenebilirlik artıyor.'
  }
];

function Activity(props) {
  return <LineChart {...props} />;
}

const seoData = {
  home: {
    title: 'DZY Digital | Akıllı, Güvenli ve Ölçeklenebilir Yazılım Çözümleri',
    description: 'DZY Yazılım Danışma ile işletmeniz için özel web/mobil uygulamalar, canlı takip panelleri, güvenli bulut ve IoT entegrasyonları geliştirin. Yeni nesil teknoloji danışmanlığı.',
    keywords: 'yazılım danışmanlığı, özel yazılım geliştirme, mobil uygulama, web tasarım, bulut sistemleri, iot entegrasyonu, saas yazılımları, izmir yazılım firması, dzy digital',
    path: '/',
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Projenin kaynak kodları bize mi ait olacak?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Teslimat sonunda tüm kaynak kodları ve veritabanı erişimleri şirketinize devredilir."
          }
        },
        {
          "@type": "Question",
          "name": "Eski sistemimizdeki veriler kaybolmadan yeni sisteme geçebilir miyiz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Migration süreçlerinde veri kaybı olmaması için kontrollü geçiş planı uygularız."
          }
        },
        {
          "@type": "Question",
          "name": "Proje bittikten sonra teknik destek ve bakım veriyor musunuz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. İsteğe bağlı SLA bakım paketleri ile canlı sisteminizin güvenli ve güncel kalmasını sağlarız."
          }
        },
        {
          "@type": "Question",
          "name": "Hazır paket yazılımlar (Wordpress, Wix vb.) kullanıyor musunuz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kurumsal projelerde genellikle özel (custom) geliştirme yapıyoruz; böylece performans ve ölçeklenebilirlik artıyor."
          }
        }
      ]
    }
  },
  services: {
    title: 'Hizmetlerimiz | Web, Mobil, Bulut ve Özel Otomasyon Geliştirme - DZY Digital',
    description: 'Mobil/web uygulamaları, ödeme sistemleri, yönetim panelleri, veri güvenliği ve ERP/CRM entegrasyonları dahil geniş hizmet yelpazemizi inceleyin.',
    keywords: 'yazılım hizmetleri, mobil uygulama geliştirme, sanal pos entegrasyonu, veri güvenliği, legacy sistem yenileme, cto danışmanlığı, saas geliştirme, seo optimizasyonu',
    path: '/hizmetler',
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "DZY Digital Hizmetleri",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Mobil ve Web Uygulamaları"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Ödeme ve Tahsilat Sistemleri"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Canlı Takip ve Yönetim Panelleri"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Üst Düzey Veri Güvenliği"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Akıllı Cihaz ve Sensör Entegrasyonu"
        }
      ]
    }
  },
  expertise: {
    title: 'Sektörel Yazılım Çözümleri | Lojistik, SaaS ve Akademik Sistemler - DZY Digital',
    description: 'Otomotiv, lojistik bilişimi, akademik dijital arşivler ve SaaS modelleri gibi dikey sektörler için geliştirdiğimiz özel analitik ve operasyonel çözümler.',
    keywords: 'lojistik yazılımları, filo yönetimi, akademik arşiv sistemleri, saas platform geliştirme, sektörel yazılımlar',
    path: '/sektorel-cozumler'
  },
  about: {
    title: 'Hakkımızda | Yeni Nesil Teknoloji Danışmanlığı - DZY Digital',
    description: 'Teknolojiyi işletmelerin sorunlarını çözen bir köprü olarak görüyor, yazılımı uçtan uca mühendislik disipliniyle kurguluyoruz. Süreçlerimiz ve vizyonumuz.',
    keywords: 'dzy yazılım kimdir, yazılım danışmanlığı izmir, yazılım geliştirme süreçleri, cto modelleri',
    path: '/hakkimizda'
  },
  contact: {
    title: 'İletişim | Projenizi Başlatın ve Teknoloji Danışmanlığı Alın - DZY Digital',
    description: 'DZY Digital İzmir operasyon merkezi iletişim bilgileri. Formu doldurarak projenizi anlatın, 24 saat içinde ücretsiz teknik ön analiz alın.',
    keywords: 'yazılım teklifi al, izmir yazılım iletişim, dzy digital telefon, yazılım firması adres',
    path: '/iletisim',
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Projenin kaynak kodları bize mi ait olacak?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Teslimat sonunda tüm kaynak kodları ve veritabanı erişimleri şirketinize devredilir."
          }
        },
        {
          "@type": "Question",
          "name": "Eski sistemimizdeki veriler kaybolmadan yeni sisteme geçebilir miyiz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. Migration süreçlerinde veri kaybı olmaması için kontrollü geçiş planı uygularız."
          }
        },
        {
          "@type": "Question",
          "name": "Proje bittikten sonra teknik destek ve bakım veriyor musunuz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet. İsteğe bağlı SLA bakım paketleri ile canlı sisteminizin güvenli ve güncel kalmasını sağlarız."
          }
        },
        {
          "@type": "Question",
          "name": "Hazır paket yazılımlar (Wordpress, Wix vb.) kullanıyor musunuz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kurumsal projelerde genellikle özel (custom) geliştirme yapıyoruz; böylece performans ve ölçeklenebilirlik artıyor."
          }
        }
      ]
    }
  },
  'sector-logistics': {
    title: 'Lojistik ve Filo Yönetimi Çözümleri | DZY Digital',
    description: 'Uluslararası taşımacılık, rota optimizasyonu ve canlı filo takibi için özel platformlar.',
    keywords: 'lojistik filo yönetimi, araç takip sistemi, rota optimizasyon yazılımı, gümrük belge akışı otomasyonu',
    path: '/sektor/lojistik'
  },
  'sector-saas': {
    title: 'SaaS ve Platform Ürün Geliştirme | DZY Digital',
    description: 'Abonelik bazlı ürününüzü hızlıca pazara çıkarmak için ölçeklenebilir SaaS mimarileri.',
    keywords: 'saas geliştirme, abonelik yazılımı, multi tenant mimari, stripe entegrasyonu, saas altyapısı',
    path: '/sektor/saas'
  },
  'sector-academic': {
    title: 'Akademik ve Bilimsel Dijital Arşiv Sistemleri | DZY Digital',
    description: 'Araştırma verileri, numune yönetimi ve güvenli paylaşım için kurumlara özel çözümler.',
    keywords: 'akademik veri arşivi, bilimsel envanter yazılımı, dijital kütüphane altyapısı, güvenli veri paylaşımı',
    path: '/sektor/akademik'
  },
  blog: {
    title: 'Bilgi Bankası & Blog | Teknoloji ve Yazılım Trendleri - DZY Digital',
    description: 'Yazılım mimarisi, dijital dönüşüm, bulut teknolojileri ve KOBİ\'ler için vaka analizleri barındıran bilgi bankamız.',
    keywords: 'yazılım blogu, teknoloji makaleleri, dijital dönüşüm hataları, vaka analizi',
    path: '/blog'
  }
};

function SEOManager({ activeTab, dynamicSeo }) {
  useEffect(() => {
    const currentSeo = dynamicSeo || seoData[activeTab] || seoData.home;
    const siteUrl = 'https://www.dzydigital.com';
    const fullUrl = `${siteUrl}${currentSeo.path}`;

    // Update Title
    document.title = currentSeo.title;

    // Update Meta Description
    let descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', currentSeo.description);

    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescMeta) ogDescMeta.setAttribute('content', currentSeo.description);

    let twitterDescMeta = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescMeta) twitterDescMeta.setAttribute('content', currentSeo.description);

    // Update Keywords
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) keywordsMeta.setAttribute('content', currentSeo.keywords);

    // Update Canonical URL
    let canonicalLink = document.getElementById('canonical-link');
    if (canonicalLink) canonicalLink.setAttribute('href', fullUrl);

    // Update Open Graph Title & URL
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) ogTitleMeta.setAttribute('content', currentSeo.title);

    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (ogUrlMeta) ogUrlMeta.setAttribute('content', fullUrl);

    // Update Twitter Title & URL
    let twitterTitleMeta = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitleMeta) twitterTitleMeta.setAttribute('content', currentSeo.title);

    let twitterUrlMeta = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrlMeta) twitterUrlMeta.setAttribute('content', fullUrl);

    // Update Dynamic JSON-LD Schema
    let dynamicSchemaScript = document.getElementById('dynamic-schema');
    if (dynamicSchemaScript) {
      dynamicSchemaScript.textContent = currentSeo.schema ? JSON.stringify(currentSeo.schema) : '';
    } else if (currentSeo.schema) {
      const script = document.createElement('script');
      script.id = 'dynamic-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(currentSeo.schema);
      document.head.appendChild(script);
    }
  }, [activeTab]);

  return null;
}

const pathToTab = {
  '/': 'home',
  '/hizmetler': 'services',
  '/sektorel-cozumler': 'expertise',
  '/hakkimizda': 'about',
  '/iletisim': 'contact',
  '/blog': 'blog',
  '/sektor/lojistik': 'sector-logistics',
  '/sektor/saas': 'sector-saas',
  '/sektor/akademik': 'sector-academic'
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
        dynamicSeo={activeTab === 'blog-post' ? {
          title: blogPosts.find(p => p.slug === currentSlug)?.title + ' | DZY Digital',
          description: blogPosts.find(p => p.slug === currentSlug)?.excerpt,
          keywords: 'yazılım, dijital dönüşüm, teknoloji makalesi',
          path: '/blog/' + currentSlug
        } : null} 
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

            <nav className="hidden md:flex space-x-8" aria-label="Ana Navigasyon">
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
                  {tab === 'home' && 'Ana Sayfa'}
                  {tab === 'services' && 'Hizmetlerimiz'}
                  {tab === 'expertise' && 'Sektörel Çözümler'}
                  {tab === 'about' && 'Hakkımızda'}
                  {tab === 'blog' && 'Bilgi Bankası'}
                  {tab === 'contact' && 'İletişim'}
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
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none" aria-label="Menüyü Aç/Kapat">
                {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white border-b border-slate-200" aria-label="Mobil Navigasyon">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'services', 'expertise', 'about', 'blog', 'contact'].map((tab) => (
                <a
                  key={tab}
                  href={tabToPath[tab] || '/'}
                  onClick={(e) => { e.preventDefault(); nav(tab); }}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${activeTab === tab || (activeTab === 'blog-post' && tab === 'blog') ? 'text-indigo-600 bg-indigo-50' : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'}`}
                >
                  {tab === 'home' && 'Ana Sayfa'}
                  {tab === 'services' && 'Hizmetlerimiz'}
                  {tab === 'expertise' && 'Sektörel Çözümler'}
                  {tab === 'about' && 'Hakkımızda'}
                  {tab === 'blog' && 'Bilgi Bankası'}
                  {tab === 'contact' && 'İletişim'}
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

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-2xl font-extrabold tracking-tighter text-white lowercase hover:text-indigo-300 transition-colors"
            >
              dzy<span className="text-emerald-500">.</span>
            </button>
            <p className="text-sm mt-2">Yazılımdan Fazlası. Yeni Nesil Teknoloji Danışmanlığı.</p>
          </div>
          <div className="text-sm">&copy; {new Date().getFullYear()} DZY Yazılım Danışma. Tüm Hakları Saklıdır.</div>
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
          <h3 className="text-2xl font-extrabold text-slate-900">DZY Yönetim Erişimi</h3>
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
                placeholder="Admin şifresi"
                required
              />
              {adminError && <p className="text-sm text-rose-600">{adminError}</p>}
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-indigo-600 disabled:opacity-60"
              >
                {isLoading ? 'Kontrol ediliyor...' : 'Panele Gir'}
              </button>
            </form>
          </div>
        ) : (
          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-4">İş Teklifleri</h4>
              <div className="space-y-3 max-h-[55vh] overflow-y-auto">
                {leads.length === 0 && <p className="text-slate-500 text-sm">Henüz kayıt yok.</p>}
                {leads.map((lead) => (
                  <div key={lead.id} className="bg-white border border-slate-200 rounded-xl p-4">
                    <p className="font-semibold text-slate-900">{lead.full_name} • {lead.email}</p>
                    <p className="text-sm text-slate-600 mt-1">{lead.primary_need}</p>
                    <p className="text-xs text-slate-500 mt-2">{new Date(lead.created_at).toLocaleString('tr-TR')}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Chat Mesajları</h4>
              <div className="space-y-3 max-h-[55vh] overflow-y-auto">
                {chats.length === 0 && <p className="text-slate-500 text-sm">Henüz mesaj yok.</p>}
                {chats.map((chat) => (
                  <div key={chat.id} className="bg-white border border-slate-200 rounded-xl p-4">
                    <p className="text-sm font-semibold text-slate-900">{chat.sender_type === 'user' ? 'Kullanıcı' : 'Bot'}</p>
                    <p className="text-sm text-slate-700 mt-1">{chat.message}</p>
                    <p className="text-xs text-slate-500 mt-2">{new Date(chat.created_at).toLocaleString('tr-TR')}</p>
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
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-indigo-400/20 rounded-full blur-[100px] -z-10 mix-blend-multiply animate-blob"></div>
      <div className="absolute top-40 left-1/4 w-72 h-72 bg-fuchsia-400/20 rounded-full blur-[100px] -z-10 mix-blend-multiply animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-40 right-1/4 w-72 h-72 bg-emerald-400/20 rounded-full blur-[100px] -z-10 mix-blend-multiply animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="text-center max-w-4xl mx-auto pt-20 pb-8 relative z-10">
        <motion.div variants={fadeUpVariant} className="inline-flex items-center px-4 py-1.5 rounded-full glass-panel text-indigo-800 text-sm font-semibold mb-8 border border-white/40 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          Sistemleriniz İçin Yeni Nesil Mimari
        </motion.div>
        
        <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
          Yazılımdan Fazlası:<br className="hidden md:block" /> İşletmeniz İçin <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-indigo-600 bg-300% animate-gradient">Özel Çözümler</span>
        </motion.h1>
        
        <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
          DZY Yazılım Danışmanlığı ile KOBİ'ler ve kurumsal firmalar için yüksek performanslı web uygulamaları ve güvenli bulut mimarileri inşa ediyoruz.
        </motion.p>
        
        <motion.div variants={fadeUpVariant}>
          <motion.a 
            href="/iletisim" 
            onClick={(e) => { e.preventDefault(); nav('contact'); }} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-shadow bg-slate-900 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(79,70,229,0.4)] relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center">Projenizi Anlatın <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.a>
        </motion.div>
      </div>

      <motion.div variants={fadeUpVariant} className="glass-panel-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 pointer-events-none"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10 relative z-10">
          <div><div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-emerald-600 mb-2">%300</div><div className="text-slate-300 text-sm font-medium">Operasyonel Hız Artışı</div></div>
          <div><div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-indigo-600 mb-2">Sıfır</div><div className="text-slate-300 text-sm font-medium">Veri Kaybı Riski</div></div>
          <div><div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-fuchsia-400 to-fuchsia-600 mb-2">7/24</div><div className="text-slate-300 text-sm font-medium">Kesintisiz İzleme</div></div>
          <div><div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-amber-600 mb-2">%100</div><div className="text-slate-300 text-sm font-medium">Özel Mülkiyet</div></div>
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
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Üstün Teknoloji Yığınımız</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Sistemlerinizi geleceğe hazırlamak için en güvenilir modern mimarileri kullanıyoruz.</p>
        </div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TechCard icon={<Code2 className="w-8 h-8 text-indigo-500 mb-3" />} title="Modern Frontend" subtitle="React, Next.js, Tailwind" />
          <TechCard icon={<Server className="w-8 h-8 text-emerald-500 mb-3" />} title="Güçlü Backend" subtitle="Node.js, TypeScript, Python" />
          <TechCard icon={<Database className="w-8 h-8 text-fuchsia-500 mb-3" />} title="Bulut Veritabanı" subtitle="Supabase, PostgreSQL, Redis" />
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
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Profesyonel Yazılım Danışmanlığı Hizmetleri</h1>
        <p className="text-xl text-slate-600">İşletmenizi dijitalleştirecek özel yazılım geliştirme, bulut mimarisi ve dijital dönüşüm danışmanlığı çözümlerimiz.</p>
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
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Sektörel Yazılım Çözümleri</h1>
        <p className="text-xl text-slate-600">Lojistik, SaaS ve Akademi gibi niş alanlara yönelik uçtan uca özel yazılım ve entegrasyon çözümleri.</p>
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
                Daha Fazla Bilgi Al
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
          desc: "Küresel taşımacılık, araç lojistiği ve akıllı filo yönetimi süreçlerini kolaylaştırmak için özel yazılımlar tasarlıyoruz. GPS tabanlı canlı veri entegrasyonu, yakıt ve sürücü performansı analizi ile lojistik maliyetlerinizi düşürürken operasyonel hızınızı en üst seviyeye çıkarıyoruz.",
          features: [
            { title: "Akıllı Rota Planlama & Optimizasyon", detail: "Yapay zeka destekli algoritmalarla yakıt tüketimini ve teslimat sürelerini en aza indirgeyen rotalar oluşturun." },
            { title: "Gerçek Zamanlı GPS & Telemetri Entegrasyonu", detail: "Araç konumu, hız limitleri ve duraklama sürelerini canlı haritalar üzerinden saniye saniye izleyin." },
            { title: "Gümrük ve İrsaliye Belge Akış Otomasyonu", detail: "Uluslararası taşımacılık için gereken resmi belgeleri, yükleme evraklarını ve faturaları otomatik üretin." },
            { title: "Sipariş ve Müşteri Bildirim Altyapıları", detail: "Sipariş durumunu müşterilerinize e-posta, SMS veya canlı takip ekranlarıyla otomatik bildirin." }
          ],
          cta: "Lojistik Operasyonunuzu Dijitalleştirin"
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
      default:
        return null;
    }
  };

  const details = getSectorDetails();

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12">
      <a href="/sektorel-cozumler" onClick={(e) => { e.preventDefault(); nav('expertise'); }} className="inline-flex items-center text-indigo-600 font-semibold mb-8 hover:text-indigo-800 transition-colors">
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
                <a href="/iletisim" onClick={(e) => { e.preventDefault(); nav('contact'); }} className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-indigo-900 bg-white rounded-xl hover:bg-indigo-50 transition-all hover:shadow-md">
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
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Sıfırdan Canlıya Çalışma Sürecimiz</h2>
          <p className="text-lg text-slate-600">Şeffaf ve ölçülebilir adımlarla proje yönetimi.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StepCard step="1" title="Keşif ve Mimari" desc="İhtiyaç analizi ve güvenli sistem mimarisi tasarımı." />
          <StepCard step="2" title="UI/UX Tasarım" desc="Kullanıcı odaklı arayüz tasarımı ve onay süreci." />
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
                <h3 className="text-2xl font-bold mb-4">İletişim Bilgileri</h3>
                <div className="mb-6 rounded-xl bg-emerald-500/10 border border-emerald-400/30 p-4">
                  <p className="text-emerald-300 font-semibold">24 saat içinde dönüş • 48 saatte teknik ön analiz</p>
                  <p className="text-slate-300 text-sm mt-1">SLA taahhüdümüzle talebinizi hızlıca aksiyona çeviriyoruz.</p>
                </div>
                <div className="space-y-6">
                  <InfoRow icon={<MapPin className="w-6 h-6 text-indigo-400 mt-1 mr-4 flex-shrink-0" />} title="Merkez Ofis" value={"270/4 sokak no 29 Buca, İzmir, Türkiye\n(AR-GE ve Operasyon Merkezi)"} />
                  <InfoRow icon={<Mail className="w-6 h-6 text-indigo-400 mt-1 mr-4 flex-shrink-0" />} title="E-Posta" value="info@dzydigital.com" />
                  <InfoRow icon={<Phone className="w-6 h-6 text-indigo-400 mt-1 mr-4 flex-shrink-0" />} title="Telefon" value="+90 (555) 208 30 92" />
                  <InfoRow icon={<Clock className="w-6 h-6 text-indigo-400 mt-1 mr-4 flex-shrink-0" />} title="Çalışma Saatleri" value={"Pazartesi - Cuma\n09:00 - 18:00 (GMT+3)"} />
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
            {faqData.map((faq, idx) => (
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
