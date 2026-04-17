import React, { useState, useEffect, useRef } from 'react';
import { getApiUrl } from './lib/api';
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

const pathToTab = {
  '/': 'home',
  '/hizmetler': 'services',
  '/sektorel-cozumler': 'expertise',
  '/hakkimizda': 'about',
  '/iletisim': 'contact',
  '/sektor/lojistik': 'sector-logistics',
  '/sektor/saas': 'sector-saas',
  '/sektor/akademik': 'sector-academic'
};

const tabToPath = Object.fromEntries(Object.entries(pathToTab).map(([k, v]) => [v, k]));

export default function App() {
  const [activeTab, setActiveTab] = useState(pathToTab[window.location.pathname] || 'home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminToken, setAdminToken] = useState('');
  const [adminError, setAdminError] = useState('');
  const [isAdminLoading, setIsAdminLoading] = useState(false);
  const [adminLeads, setAdminLeads] = useState([]);
  const [adminChats, setAdminChats] = useState([]);

  useEffect(() => {
    const onPopState = () => {
      setActiveTab(pathToTab[window.location.pathname] || 'home');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const nav = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    const path = tabToPath[tab] || '/';
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
    if (activeTab.startsWith('sector-')) return <SectorLandingView tab={activeTab} nav={nav} />;
    return <HomeView nav={nav} />;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer group" onClick={() => nav('home')}>
              <span className="text-3xl font-extrabold tracking-tighter text-slate-900 lowercase group-hover:text-indigo-950 transition-colors">dzy</span>
              <span className="text-4xl text-emerald-500 leading-none">.</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {['home', 'services', 'expertise', 'about', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => nav(tab)}
                  className={`text-sm font-medium transition-colors hover:text-indigo-600 ${activeTab === tab ? 'text-indigo-600 font-bold' : 'text-slate-600'}`}
                >
                  {tab === 'home' && 'Ana Sayfa'}
                  {tab === 'services' && 'Hizmetlerimiz'}
                  {tab === 'expertise' && 'Sektörel Çözümler'}
                  {tab === 'about' && 'Hakkımızda'}
                  {tab === 'contact' && 'İletişim'}
                </button>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'services', 'expertise', 'about', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => nav(tab)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${activeTab === tab ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                  {tab === 'home' && 'Ana Sayfa'}
                  {tab === 'services' && 'Hizmetlerimiz'}
                  {tab === 'expertise' && 'Sektörel Çözümler'}
                  {tab === 'about' && 'Hakkımızda'}
                  {tab === 'contact' && 'İletişim'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">{renderView()}</main>

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

function HomeView({ nav }) {
  const [expandedBox, setExpandedBox] = useState(null);

  return (
    <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="text-center max-w-4xl mx-auto pt-10 pb-8">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-6 border border-indigo-100">
          <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
          Sistemleriniz İçin Yeni Nesil Mimari
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Yazılımdan Fazlası:<br className="hidden md:block" /> İşletmeniz İçin <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">Akıllı, Güvenli ve Ölçeklenebilir</span> Sistemler İnşa Ediyoruz.
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
          DZY Yazılım Danışma ile fikirlerinizi yüksek performanslı mobil uygulamalara, gerçek zamanlı takip panellerine ve güvenli bulut mimarilerine dönüştürün.
        </p>
        <button onClick={() => nav('contact')} className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-slate-900 rounded-xl hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-200">
          Projenizi Anlatın
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-800 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
          <div><div className="text-4xl font-extrabold text-emerald-400 mb-2">%300</div><div className="text-slate-400 text-sm font-medium">Operasyonel Hız Artışı</div></div>
          <div><div className="text-4xl font-extrabold text-indigo-400 mb-2">Sıfır</div><div className="text-slate-400 text-sm font-medium">Veri Kaybı Riski</div></div>
          <div><div className="text-4xl font-extrabold text-fuchsia-400 mb-2">7/24</div><div className="text-slate-400 text-sm font-medium">Kesintisiz İzleme</div></div>
          <div><div className="text-4xl font-extrabold text-amber-400 mb-2">%100</div><div className="text-slate-400 text-sm font-medium">Özel Mülkiyet</div></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
        {homeBoxesData.map((box) => (
          <div key={box.id} onClick={() => setExpandedBox(expandedBox === box.id ? null : box.id)} className={`bg-white rounded-3xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border ${expandedBox === box.id ? 'border-indigo-300 ring-2 ring-indigo-50' : 'border-slate-100 hover:border-indigo-100 hover:-translate-y-1'} transition-all duration-300 cursor-pointer`}>
            <div className="flex justify-between items-start mb-6">
              <div className={`w-14 h-14 ${box.bg} rounded-2xl flex items-center justify-center`}>{box.icon}</div>
              {expandedBox === box.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{box.title}</h3>
            <p className="text-slate-600 leading-relaxed font-medium">{box.desc}</p>
            <div className={`overflow-hidden transition-all duration-500 ${expandedBox === box.id ? 'max-h-[300px] opacity-100 mt-4 pt-4 border-t border-slate-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-sm text-slate-500 leading-relaxed">{box.fullDesc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-10 border-t border-slate-200">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Üstün Teknoloji Yığınımız</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Sistemlerinizi geleceğe hazırlamak için en güvenilir altyapıları kullanıyoruz.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TechCard icon={<Code2 className="w-8 h-8 text-indigo-500 mb-3" />} title="Modern Frontend" subtitle="React, Next.js, Tailwind" />
          <TechCard icon={<Server className="w-8 h-8 text-emerald-500 mb-3" />} title="Güçlü Backend" subtitle="Node.js, TypeScript, Python" />
          <TechCard icon={<Database className="w-8 h-8 text-fuchsia-500 mb-3" />} title="Bulut Veritabanı" subtitle="Supabase, PostgreSQL, Redis" />
          <TechCard icon={<Cloud className="w-8 h-8 text-amber-500 mb-3" />} title="DevOps & AI" subtitle="AWS, Docker, OpenAI" />
        </div>
      </div>
    </div>
  );
}

function TechCard({ icon, title, subtitle }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center hover:border-indigo-300 transition-colors">
      {icon}
      <h4 className="font-bold text-slate-900">{title}</h4>
      <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
    </div>
  );
}

function ServicesView() {
  const [expandedService, setExpandedService] = useState(null);
  return (
    <div className="animate-in fade-in duration-500">
      <div className="max-w-3xl mb-12">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Hizmetlerimiz</h2>
        <p className="text-xl text-slate-600">İşletmenizi dijitalleştirecek profesyonel hizmetlerimiz.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, idx) => (
          <div key={idx} onClick={() => setExpandedService(expandedService === idx ? null : idx)} className={`bg-white p-6 rounded-2xl shadow-sm border ${expandedService === idx ? 'border-indigo-400 shadow-md ring-4 ring-indigo-50/50' : 'border-slate-200 hover:shadow-md hover:border-indigo-200'} transition-all cursor-pointer`}>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-50 rounded-xl inline-block">{service.icon}</div>
              {expandedService === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
            <p className={`text-sm leading-relaxed ${expandedService === idx ? 'text-slate-900 font-semibold' : 'text-slate-600'}`}>{service.desc}</p>
            <div className={`transition-all overflow-hidden ${expandedService === idx ? 'max-h-[340px] opacity-100 mt-4 pt-4 border-t border-slate-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-sm text-slate-600 leading-relaxed">{service.fullDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExpertiseView({ nav }) {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="max-w-3xl mb-12 text-center mx-auto">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Sektörel Çözümler</h2>
        <p className="text-xl text-slate-600">Niş alanlara yönelik dikey uzmanlık çözümleri.</p>
      </div>
      <div className="space-y-8 max-w-5xl mx-auto">
        {expertiseData.map((item, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8 items-start hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0 p-5 bg-slate-50 rounded-2xl border border-slate-100">{item.icon}</div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">{item.desc}</p>
              <button onClick={() => nav(item.route)} className="inline-flex items-center px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">
                Landing Sayfasını Gör
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectorLandingView({ tab, nav }) {
  const sector = sectorPages[tab];
  if (!sector) return null;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 p-10">
      <button onClick={() => nav('expertise')} className="inline-flex items-center text-indigo-600 font-semibold mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" /> Sektörel Çözümlere Dön
      </button>
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{sector.title}</h1>
      <p className="text-lg text-slate-600 mb-8">{sector.subtitle}</p>
      <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
        <p className="text-slate-700 leading-relaxed">Bu sayfa SEO ve dönüşüm odaklı ayrı landing yapısının bir parçası olarak hazırlandı. İçeriği sektörün ihtiyaçlarına göre derinleştirip formu da bu sektöre özel hale getirebiliriz.</p>
      </div>
    </div>
  );
}

function AboutView() {
  return (
    <div className="animate-in fade-in duration-500 max-w-5xl mx-auto space-y-12">
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200">
        <div className="h-32 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 w-full relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        </div>
        <div className="p-10 md:p-14 relative">
          <div className="absolute -top-12 left-10 w-24 h-24 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center">
            <span className="text-2xl font-extrabold text-slate-900 lowercase">dzy<span className="text-emerald-500">.</span></span>
          </div>
          <div className="mt-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Farklı Disiplinler, Tek Bir Analitik Yaklaşım.</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p><strong className="text-slate-900">DZY Yazılım Danışma</strong> olarak teknolojiyi işletmelerin sorunlarını çözen bir köprü olarak görüyoruz.</p>
              <p>Yazılımı sadece arayüz değil; veri akışı, güvenlik ve iş mantığını uçtan uca kurgulayan bir mühendislik disiplini olarak ele alıyoruz.</p>
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
      </div>

      <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-slate-200">
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
      </div>
    </div>
  );
}

function StepCard({ step, title, desc, done = false }) {
  return (
    <div>
      <div className={`w-12 h-12 ${done ? 'bg-emerald-100 text-emerald-600' : 'bg-indigo-100 text-indigo-600'} rounded-full flex items-center justify-center font-bold text-xl mb-4 border-4 border-white shadow-sm`}>{step}</div>
      <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
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
        setFormStatus('success');
      })
      .catch(() => {
        setFormStatus('idle');
        alert('Mesaj gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.');
      });
  };

  return (
    <div className="animate-in fade-in duration-500 max-w-6xl mx-auto space-y-16">
      <div>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Operasyonunuzu Bir Üst Seviyeye Taşıyalım.</h2>
          <p className="text-xl text-slate-600">Mimari vizyonumuzun projenize nasıl değer katabileceğini konuşalım.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
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
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-lg h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">İletişim Bilgileri</h3>
                <div className="mb-6 rounded-xl bg-emerald-500/10 border border-emerald-400/30 p-4">
                  <p className="text-emerald-300 font-semibold">24 saat içinde dönüş • 48 saatte teknik ön analiz</p>
                  <p className="text-slate-300 text-sm mt-1">SLA taahhüdümüzle talebinizi hızlıca aksiyona çeviriyoruz.</p>
                </div>
                <div className="space-y-6">
                  <InfoRow icon={<MapPin className="w-6 h-6 text-indigo-400 mt-1 mr-4 flex-shrink-0" />} title="Merkez Ofis" value="Buca, İzmir, Türkiye\n(AR-GE ve Operasyon Merkezi)" />
                  <InfoRow icon={<Mail className="w-6 h-6 text-indigo-400 mt-1 mr-4 flex-shrink-0" />} title="E-Posta" value="hello@dzyyazilim.com" />
                  <InfoRow icon={<Phone className="w-6 h-6 text-indigo-400 mt-1 mr-4 flex-shrink-0" />} title="Telefon" value="+90 (5XX) XXX XX XX" />
                  <InfoRow icon={<Clock className="w-6 h-6 text-indigo-400 mt-1 mr-4 flex-shrink-0" />} title="Çalışma Saatleri" value="Pazartesi - Cuma\n09:00 - 18:00 (GMT+3)" />
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-slate-800">
                <span className="text-3xl font-extrabold tracking-tighter text-white lowercase">dzy<span className="text-emerald-500">.</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6"><HelpCircle className="w-7 h-7 text-indigo-600" /></div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Aklınıza Takılanlar</h3>
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
      </div>
    </div>
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
