// Case Study Blog Posts - DZY Digital
// Generated: 04 Temmuz 2026

const caseStudies = [
  {
    id: 200,
    slug: 'vaka-analizi-online-egitim-platformu-real-time-sinif',
    title: 'Vaka Analizi: Online Eğitim Platformunda Gerçek Zamanlı Sınıf Deneyimi',
    category: 'Vaka Analizleri',
    date: '04 Temmuz 2026',
    readTime: '30 dk okuma',
    excerpt: 'Eğitim sektöründe gerçek zamanlı sınıf deneyimi sunan bir platformun nasıl geliştirildiğini, WebRTC ve Supabase ile nasıl entegre edildiğini ve elde edilen %300 kullanıcı artışını detaylıca inceliyoruz.',
    content: `<h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Vaka Analizi: Online Eğitim Platformunda Gerçek Zamanlı Sınıf Deneyimi</h1>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">1. Müşteri Profili ve Problemler</h2>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Müşteri Hakkında</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Müşterimiz, Türkiye'nin önde gelen online eğitim platformlarından biridir. 2018 yılında kurulan platform, 120.000'den fazla kayıtlı kullanıcıya ve 350'den fazla kursa sahipti. Platform, başta yazılım geliştirme, veri bilimi ve tasarım alanlarında olmak üzere ülkemizin en kapsamlı online eğitim kütüphanelerinden birini sunuyordu. Ancak mevcut yapı, sadece önceden kaydedilmiş video içerikleri sunan basit bir LMS (Learning Management System) idi.</p>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Müşteri, özellikle pandemi döneminin ardından eğitim行业的 dönüşümüne ayak uydurmak ve rekabet avantajı elde etmek istiyordu. Platform kullanıcıları, etkileşimli ve canlı sınıf deneyimi talep ediyor, ancak mevcut yapı buna olanak tanımıyordu. Eğitmenler, öğrencilerle gerçek zamanlı iletişim kuramıyor, soru-cevap oturumlarını verimli biçimde yönetemiyor ve canlandırma/demonstration yapamıyorlardı.</p>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Temel Problemler</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Platformun karşı karşıya kaldığı başlıca sorunlar şunlardı:</p>

<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Yüksek churn oranı:</strong> Kullanıcıların %45'i ilk 30 gün içinde platformu terk ediyordu. Gerçek zamanlı etkileşim eksikliği, kullanıcı bağlılığını ciddi ölçüde düşürüyordu. Pazar araştırmaları, öğrencilerin %72'sinin "canlı soru sorma imkanı"nın eğitim kalitesini belirleyen en önemli faktör olduğunu gösteriyordu.</li>
  <li><strong>Eğitmen memnuniyetsizliği:</strong> Eğitmenlerin %68'i, mevcut platformu "statik ve etkileşimsiz" olarak tanımlıyordu. Canlı oturumlar düzenleme ihtiyacı, Zoom, Google Meet gibi üçüncü taraf araçlarına bağımlılık yaratıyor, bu da deneyim parçalanmasına neden oluyordu.</li>
  <li><strong>Teknik altyapı eksiklikleri:</strong> Mevcut LMS, video barındırma, gerçek zamanlı iletişim veya interaktif beyaz tahta desteği sunmuyordu. Veritabanı yapısı (basit MySQL) gerçek zamanlı senkronizasyon için uygun değildi.</li>
  <li><strong>Rekabet baskısı:</strong> Yerli ve uluslararası rakiplerin canlı sınıf özellikleri sunması, müşteri için acil bir dönüşüm ihtiyacını zorunlu kılıyordu. Udemy Live, Coursera ve benzeri platformlar, etkileşimli deneyimlerle kullanıcıları cezbediyordu.</li>
  <li><strong>Ölçeklenebilirlik kaygıları:</strong> Mevcut monolitik mimari, 100'den fazla eş zamanlı kullanıcının bulunduğu canlı oturumları destekleyemiyordu. Geçmiş denemelerde sunucu çökmesi ve bağlantı kopmaları yaşanmıştı.</li>
  <li><strong>Veri analitiği eksikliği:</strong> Kullanıcı davranışları, katılım oranları ve performans metrikleri hakkında derinlemesine veri toplanamıyor, bu da kişiselleştirilmiş öğrenme deneyimlerinin geliştirilmesini engelliyordu.</li>
</ul>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Bu sorunlar, platformun büyüme hızını ciddi ölçüde yavaşlatıyordu. Aylık aktif kullanıcı (MAU) büyümesi %3'ün altına düşmüştü ve müşteri yaşam boyu değeri (CLV) hedeflerin çok gerisindeydi. Müşteri, DZY Digital'e başvurduğunda, mevcut sorunların detaylı bir analizini ve kapsamlı bir dönüşüm planı talep ediyordu.</p>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">2. DZY Digital'in Çözüm Yaklaşımı</h2>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Keşif ve Analiz Aşaması</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Projenin başlangıcında DZY Digital ekibi, müşteriyle yoğun bir keşif süreci başlattı. İlk iki hafta içinde, 15 eğitmen ve 200 öğrenciyle derinlemesine görüşmeler yapıldı. Kullanıcı yolculuğu haritaları çıkarıldı, mevcut sistem detaylı bir teknik incelemeye tabi tutuldu ve rekabet analizi tamamlandı. Bu sürecin sonucunda, projenin kapsamı ve öncelikleri belirlendi.</p>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Teknik ekibimiz, mevcut altyapının güçlü ve zayıf yönlerini haritalandırdı. Supabase'in real-time özelliklerinin, mevcut PostgreSQL veritabanıyla uyumlu olduğu belirlendi. WebRTC teknolojisi, düşük gecikmeli ve yüksek kaliteli video/ ses iletişimi için ideal bir çözüm olarak önerildi. WebSocket protokolü ise beyaz tahta ve sohbet senkronizasyonu için en uygun seçim olarak belirlendi.</p>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Mimari Tasarım Kararları</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">DZY Digital, aşağıdaki mimari kararları alarak projenin temellerini attı:</p>

<ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Supabase Realtime Entegrasyonu:</strong> Supabase'in yerleşik real-time pub/sub özelliği kullanılarak, veritabanı değişikliklerinin anlık olarak istemcilere bildirilmesi sağlandı. Bu sayede, ders materyalleri, katılım durumları ve anlık notlar eşzamanlı olarak güncellenebiliyordu.</li>
  <li><strong>WebRTC Tabanlı Video/Ses İletişimi:</strong> Peer-to-peer (P2P) mimarisiyle düşük gecikmeli video ve ses iletişimi kuruldu. TURN/STUN sunucuları yapılandırılarak, farklı ağ koşullarında bile stabil bir bağlantı garanti altına alındı. SFU (Selective Forwarding Unit) mimarisi, 500'den fazla katılımcının bulunduğu büyük oturumlar için ölçeklenebilirlik sağladı.</li>
  <li><strong>WebSocket ile Canlı Beyaz Tahta:</strong> WebSocket protokolü kullanılarak, eğitmenlerin ve öğrencilerin aynı anda çizim yapabildiği, not paylaşabildiği ve belgeleri işaretleyebildiği interaktif bir beyaz tahta modülü geliştirildi.</li>
  <li><strong>Microservis Mimarisi:</strong> Mevcut monolitik yapı, kontrollü bir şekilde microservis mimarisine dönüştürüldü. Her modül (video, beyaz tahta, sohbet, değerlendirme) ayrı bir servis olarak deploy edildi.</li>
  <li><strong>Edge Computing Kullanımı:</strong> Yüksek trafik yükünü hafifletmek için edge fonksiyonlar devreye alındı. Kimlik doğrulama, oturum yönetimi ve içerik sunma işlemleri edge seviyesinde çözüldü.</li>
</ol>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Geliştirme Süreci</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Proje, 4 aylık bir geliştirme döngüsü içinde tamamlandı. Agile/Scrum metodolojisi benimsenerek, 2 haftalık sprintler halinde ilerlendi. Her sprint sonunda müşteriyle demo oturumları yapıldı ve geri bildirimler entegre edildi. İlk prototype, 6. haftada hazırlandı ve 50 gönüllü kullanıcıyla beta testine alındı. Beta testi sürecinde toplanan 340'dan fazla geri bildirim, sonraki sprintlerde değerlendirildi.</p>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Geliştirme sürecinde aşağıdaki teknoloji yığını kullanıldı:</p>

<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Frontend:</strong> React 18, TypeScript, Tailwind CSS, WebRTC API, Socket.io Client</li>
  <li><strong>Backend:</strong> Node.js (Express), Supabase (PostgreSQL, Auth, Realtime, Storage), Redis (oturum önbellek)</li>
  <li><strong>Video/Ses:</strong> WebRTC, mediasoup (SFU), Twilio TURN/STUN</li>
  <li><strong>Beyaz Tahta:</strong> Fabric.js, WebSocket, Operational Transformation (OT) algoritması</li>
  <li><strong>DevOps:</strong> Docker, Kubernetes, GitHub Actions CI/CD, AWS (EC2, CloudFront, S3)</li>
  <li><strong>Monitoring:</strong> Prometheus, Grafana, Sentry (hata izleme)</li>
</ul>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">3. Geliştirilen Modüller</h2>

<ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Gerçek Zamanlı Video/Ses Sınıfı:</strong> WebRTC tabanlı, 500 katılımcıya kadar destek veren canlı sınıf sistemi. Eğitmen ekran paylaşımı, öğrencilerin sesli/yazılı soru sorma, anket ve oylama özellikleri. Otomatik kalite ayarlama (bandwidth adaptation) sayesinde düşük internet hızlarında bile kesintisiz deneyim. Kayıt alma ve otomatik transkripsiyon (Speech-to-Text) entegrasyonu.</li>
  <li><strong>Interaktif Beyaz Tahta:</strong> Eğitmenlerin ve öğrencilerin aynı anda kullanabildiği, çoklu sayfa destekli dijital beyaz tahta. Çizim araçları (kalem, şekiller, metin), belge yükleme ve işaretleme, lịch sử (undo/redo) desteği, zoom ve kaydırma, remote cursor.visible. WebSocket üzerinden real-time senkronizasyon.</li>
  <li><strong>Anlık Mesajlaşma ve Soru-Cevap:</strong> Sınıf içi ve sınıf dışı sohbet kanalları. Zengin medya desteği (dosya, görsel, kod bloğu paylaşma). Soru önceliklendirme ve yanıt takibi. Moderasyon ve spam filtreleme. Bildirim yönetimi (push, e-posta, SMS).</li>
  <li><strong>Canlı Anket ve Değerlendirme:</strong> Eğitmenlerin anlık anketler oluşturması ve sonuçları gerçek zamanlı görmesi. Çoktan seçmeli, açık uçlu ve sıralama soruları destekli. Otomatik notlandırma ve performans raporlama. Öğrenci katılımı takibi ve gamification unsurları (puan, rozet).</li>
  <li><strong>Oturum Kaydı ve Transkripsiyon:</strong> Canlı otomatikların otomatik kaydı. Yapay zeka destekli ses-metin dönüştürme (transkripsiyon). Kayıtların otomatik olarak kurs içeriğine eklenmesi. Anahtar kelime arama ve bölümleme. Kayıtların indirme ve paylaşma seçenekleri.</li>
  <li><strong>Katılım ve Performans Analitiği:</strong> Gerçek zamanlı katılım takibi. Öğrenci etkileşim metrikleri (soru sorma oranı, anket katılımı, ders izleme süresi). Eğitmen performans dashboard'u. Haftalık ve aylık analitik raporlar. Kullanıcı segmentasyonu ve hedefleme.</li>
  <li><strong>Bildirim ve Hatırlatma Sistemi:</strong> Ders başlangıcı hatırlatmaları. Kaçırılan ders bildirimleri. Ödev ve değerlendirme hatırlatmaları. Kişiselleştirilmiş bildirim tercihleri. Çoklu kanal desteği (push, e-posta, SMS, WhatsApp).</li>
  <li><strong>Admin ve Yönetim Paneli:</strong> Eğitmen ve öğrenci yönetimi. Kurs ve oturum planlama. Faturalandırma ve abonelik yönetimi. Sistem sağlık durumu izleme. Kullanıcı geri bildirim yönetimi. API anahtarı ve entegrasyon yönetimi.</li>
</ol>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">4. Sonuçlar ve ROI</h2>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Projenin tamamlanmasının ardından 6 aylık izleme döneminde elde edilen sonuçlar oldukça çarpıcıydı. Gerçek zamanlı sınıf deneyimi, platformun tüm metriklerinde dramatik iyileşmelere yol açtı:</p>

<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>%300 Kullanıcı Artışı:</strong> Platforma kayıtlı kullanıcı sayısı 120.000'den 480.000'e yükseldi. Aylık aktif kullanıcı (MAU) 25.000'den 95.000'e çıktı. Yeni kullanıcı edinme maliyeti (CAC) %40 azaldı, çünkü canlı sınıf deneyimi organik büyümeyi ve söylentiyi tetikledi.</li>
  <li><strong>%95 Kullanıcı Memnuniyeti:</strong> NPS (Net Promoter Score) 32'den 78'e yükseldi. Kullanıcı memnuniyet anketlerinde "canlı sınıf deneyimi" %95 ile en yüksek puanı alan özellik oldu. Canlı oturumlara katılım oranı, beklenenin %60 üzerine çıktı.</li>
  <li><strong>%65 Churn Oranı Azalması:</strong> İlk 30 günlük terk etme oranı %45'ten %16'ya düştü. 90 günlük kullanım oranı %28'den %62'ye yükseldi. Kullanıcı yaşam boyu değeri (CLV) ortalama 3.2 kat arttı.</li>
  <li><strong>%45 Gelir Artışı:</strong> Aylık tekrarlayan gelir (MRR) %45 oranında arttı. Premium abonelik dönüşüm oranı %8'den %22'ye yükseldi. Eğitmen başına ortalama gelir %35 arttı.</li>
  <li><strong>Teknik Performans:</strong> Ortalama bağlantı kurma süresi 1.2 saniye olarak ölçüldü. Video/ses kalitesi oranı %98.5 olarak kaydedildi. Sistem uptime oranı %99.97 olarak sağlandı. Maksimum eşzamanlı kullanıcı kapasitesi 500'den 2.000'e çıkarıldı.</li>
  <li><strong>Eğitmen Verimliliği:</strong> Eğitmen başına düşen öğrenci sayısı %80 arttı. Ders hazırlık süresi %30 azaldı. Öğrenci etkileşim oranı %250 arttı.</li>
</ul>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Yatırımın geri dönüş süresi (ROI) 8 ay olarak hesaplandı. İlk 12 ayda toplam gelir artışı 2.4 milyon TL olarak gerçekleşti. Platformun piyasa değeri, gerçekleştirilen dönüşümün ardından önemli ölçüde arttı ve yeni yatırımcılar çekildi.</p>

<div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl mt-8">
<p class="text-lg text-indigo-900 font-semibold m-0">DZY Digital olarak, online eğitim sektöründe gerçek zamanlı deneyimlerin gücünü kanıtladık. WebRTC ve Supabase entegrasyonuyla, 4 aylık bir sürede 120.000 kullanıcılı platformu 480.000 kullanıcıya taşıdık. Benzer dönüşüm projeleri için bizimle iletişime geçebilirsiniz.</p>
</div>`
  },

  {
    id: 201,
    slug: 'vaka-analizi-gida-sektorunde-iot-ile-soguk-zincir-izleme',
    title: 'Vaka Analizi: Gıda Sektöründe IoT ile Soğuk Zincir İzleme Sistemi',
    category: 'Vaka Analizleri',
    date: '04 Temmuz 2026',
    readTime: '28 dk okuma',
    excerpt: 'Gıda lojistiğinde sıcaklık sapmalarından kaynaklanan ürün kayıplarını önlemek için geliştirilen IoT tabanlı soğuk zincir izleme sisteminin hikayesi. %90 ürün kaybı azalması ve %25 maliyet tasarrufu sağlandı.',
    content: `<h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Vaka Analizi: Gıda Sektöründe IoT ile Soğuk Zincir İzleme Sistemi</h1>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">1. Müşteri Profili ve Problemler</h2>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Müşteri Hakkında</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Müşterimiz, 2005 yılından bu yana faaliyet gösteren, Türkiye'nin en büyük 3. soğuk zincir gıda dağıtım şirketlerinden biridir. İstanbul, Ankara, İzmir ve Bursa'daki 4 deposu ve 85 araçlık filosuyla, market zincirleri, restoranlar ve otellere günlük ortalama 250 ton taze gıda (süt ürünleri, et, balık, meyve-sebze) dağıtımı gerçekleştirmektedir. 450 kişiyi istihdam eden şirket, yıllık ortalama 180 milyon TL ciro yapmaktadır.</p>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Şirket, sıcaklık kontrolünün kritik olduğu bir sektörde faaliyet göstermesine rağmen, soğuk zincir yönetimini hala manuel yöntemlerle sürdürüyordu. Depolarda ve araçlarda termometreler bulunuyordu ancak bu ölçümler periyodik olarak yapılıyor, anlık takip mümkün değildi. Sıcaklık sapmaları genellikle ürün zehirlenmesi veya bozulma şikayeti geldikten sonra fark ediliyordu.</p>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Temel Problemler</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Müşterinin karşı karşıya kaldığı başlıca sorunlar şunlardı:</p>

<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Yüksek ürün kaybı:</strong> Yılda ortalama 8.500 ton ürün sıcaklık sapmaları nedeniyle bozuluyordu. Bu kayıp, yıllık ciroyun %4.7'sine tekabül ediyordu. Özellikle yaz aylarında, araç klima arızaları veya depo kapılarının uzun süre açık kalması büyük kayıplara yol açıyordu.</li>
  <li><strong>Manuel izleme eksiklikleri:</strong> Sıcaklık ölçümleri 4 saatte bir elle yapılıyor, gece ve hafta sonları ölçüm yapılmıyordu. Ölçüm verileri kağıt üzerinde kaydediliyor, dijital ortamda saklanmıyordu. Bu durum hem veri kaybına hem de geriye dönük analiz yapılamamasına neden oluyordu.</li>
  <li><strong>Yasal uyum riskleri:</strong> KVKK (Kişisel Verilerin Korunması Kanunu) ve Türk Gıda Kodeksi'ne uyum gereksinimleri karşılanamıyordu. Gıda Güvenliği ve Kontrol Genel Müdürlüğü denetimlerinde ciddi para cezaları riski bulunuyordu. ISO 22000 ve HACCP sertifikasyonları için gerekli olan sıcaklık kayıt sistemleri eksikti.</li>
  <li><strong>Reaktif müdahale:</strong> Sorunlar ancak müşteri şikayeti veya ürün iadesi sonrası tespit ediliyordu. Önleyici müdahale mekanizması bulunmuyordu. Bir sıcaklık sapması fark edildiğinde, genellikle çok geç oluyor ve ürün kaybı kaçınılmaz oluyordu.</li>
  <li><strong>Maliyet baskısı:</strong> Artan rekabet ve kâr marjlarının daralması, operasyonel verimliliği artırma ihtiyacını doğuruyordu. Yakıt, bakım ve personel maliyetleri her yıl %15-20 oranında artıyordu.</li>
  <li><strong>İşgücü kısıtlamaları:</strong> Nitelikli soğuk zincir teknisyeni bulmak giderek zorlaşıyordu. Mevcut personel, teknolojiye適應 konusunda yetersiz kalıyordu. Eğitim maliyetleri ve personel sirkülasyonu sorunları yaşanıyordu.</li>
</ul>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Bu sorunlar, şirketin karlılığını ve itibarını ciddi ölçüde tehdit ediyordu. Bir gıda dağıtım şirketi için güvenilirlik ve ürün kalitesi hayati önem taşıdığından, müşteri acil bir çözüm arayışına girdi ve DZY Digital ile iletişime geçti.</p>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">2. DZY Digital'in Çözüm Yaklaşımı</h2>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Saha Araştırması ve Gereksinim Analizi</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">DZY Digital ekibi, projenin başında 2 hafta süren yoğun bir saha araştırması gerçekleştirdi. 85 aracın ve 4 deponun fiziksel koşulları incelendi, mevcut sıcaklık ölçüm süreçleri dokümantasyonu yapıldı. 25 lojistik müdürü, 40 şoför ve 15 kalite kontrol teknisyeniyle derinlemesine görüşmeler yapıldı. Mevcut sorunların kök nedenleri analiz edildi ve çözüm için en uygun teknolojiler belirlendi.</p>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Araştırma sonucunda, ESP32 tabanlı Wi-Fi/BLE sensörlerinin en uygun çözüm olduğu belirlendi. ESP32'nin düşük maliyeti, düşük güç tüketimi ve kolay programlanabilirliği, projenin başarısı için kritik faktörlerdi. Sensörlerin yanı sıra, hücresel ağ (4G/LTE) bağlantısıyla veri aktarımı sağlayan gateway'ler de tasarlandı.</p>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Teknik Çözüm Mimarisi</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Çözüm, üç katmanlı bir mimari üzerine inşa edildi:</p>

<ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Algılama Katmanı (Edge):</strong> ESP32 mikrodenetleyiciler üzerine bağlanan DS18B20 dijital sıcaklık sensörleri (±0.5°C hassasiyet) ve DHT22 nem sensörleri (±2% nem hassasiyet). Her araçta 3-5, her depoda 15-20 sensör konuşlandırıldı. Sensörler, 30 saniyede bir ölçüm yapıyor ve verileri MQTT protokolüyle gateway'e iletiyordu. Düşük güç tüketimi sayesinde, araç sensörleri 12V araç aküsünden besleniyordu.</li>
  <li><strong>İletişim Katmanı (Gateway):</strong> Her araca ve depoya yerleştirilen 4G LTE gateway cihazları, sensör verilerini topluyor ve bulut sunucusuna aktarıyordu. Gateway'ler, Wi-Fi mevcut olduğunda Wi-Fi'yi, yoksa hücresel ağı kullanıyordu. Offline modda yerel veri depolama kapasitesi (1GB SD kart) bulunuyordu, internet bağlantısı恢复 edildiğinde veriler otomatik olarak senkronize ediliyordu.</li>
  <li><strong>Uygulama Katmanı (Bulut):</strong> Supabase veritabanında toplanan veriler, gerçek zamanlı olarak işleniyor ve dashboard'a aktarılıyordu. Redis önbellek katmanı, yüksek okuma hızı sağlıyordu. İş mantığı katmanı, otomatik uyarılar üretiyor, trend analizleri yapıyor ve raporlar oluşturuyordu.</li>
</ol>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Geliştirme ve Pilot Uygulama</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Proje, 3 aylık bir geliştirme döngüsü içinde tamamlandı. İlk 6 haftada donanım tasarımı ve yazılım geliştirme yapıldı. 7-10. haftalarda 10 araç ve 1 depoda pilot uygulama gerçekleştirildi. Pilot süresinde toplanan veriler ve geri bildirimler, nihai tasarıma entegre edildi. Kalan 2 haftada, tüm filo ve depolara kurulum tamamlandı.</p>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Geliştirme sürecinde aşağıdaki teknoloji ve araçlar kullanıldı:</p>

<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Donanım:</strong> ESP32-WROOM-32, DS18B20, DHT22, 4G LTE Gateway (SIM7600), custom PCB tasarımı</li>
  <li><strong>Firmware:</strong> ESP-IDF (C), MQTT publisher, OTA (Over-The-Air) güncelleme desteği</li>
  <li><strong>Backend:</strong> Node.js (Express), Supabase (PostgreSQL), Redis, MQTT Broker (Mosquitto)</li>
  <li><strong>Frontend:</strong> React, TypeScript, Tailwind CSS, Recharts (grafik), Leaflet.js (harita)</li>
  <li><strong>Bulut:</strong> AWS IoT Core, Lambda, S3, CloudWatch</li>
  <li><strong>DevOps:</strong> Docker, Terraform, GitHub Actions CI/CD</li>
</ul>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">3. Geliştirilen Modüller</h2>

<ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Gerçek Zamanlı Sıcaklık İzleme Dashboard'u:</strong> Tüm araç ve depoların anlık sıcaklık ve nem değerlerini harita üzerinde gösteren interaktif dashboard. Her sensör için ayrı grafik görünümü, geçmiş veri trendleri ve karşılaştırma seçenekleri. Renk kodlaması (yeşil/sarı/kırmızı) ile anlık durum değerlendirmesi. Responsive tasarım sayesinde mobil cihazlardan da tam erişim. 7/24 canlı veri akışı, 30 saniye güncelleme periyodu.</li>
  <li><strong>Otomatik Uyarı ve Bildirim Sistemi:</strong> Sıcaklık eşik değerleri aşıldığında otomatik SMS, e-posta ve push bildirimi. Çok katmanlı uyarı sistemi: sarı alarm (eşik yaklaşma), kırmızı alarm (eşik aşma), kritik alarm (kritik seviye). Uyarıların otomatik escalasyonu (şoför → müdür → genel müdür). Uyarı geçmiş kaydı ve yanıt takibi. Akıllı bildirim filtresi: tekrarlayan uyarıları azaltarak false positive oranını düşürdü.</li>
  <li><strong>Rota ve Araç Takip Entegrasyonu:</strong> GPS verisiyle entegre sıcaklık takibi. Rota planlaması ve sıcaklık profili eşleştirmesi. Araç sıcaklık durumunu rota üzerinde gösteren harita görünümü. Teslimat noktalarına göre sıcaklık geçmişi analizi. Yakıt tüketimi ve sıcaklık korelasyon analizi.</li>
  <li><strong>Depo Yönetimi Modülü:</strong> Her depo için ayrı oda/zon sıcaklık izleme. Depo kapısı açma-kapama sensörleri entegrasyonu. Depo sıcaklık haritası (ısı kaynakları ve soğuk noktaların görselleştirilmesi). Depo doluluk oranı ve sıcaklık korelasyonu. Otomatik havalandırma kontrol önerileri.</li>
  <li><strong>Bakım ve Kalibrasyon Takibi:</strong> Sensör ve cihazların bakım planlaması. Kalibrasyon tarihleri ve sonuçları takibi. Arıza tahmini ve önleyici bakım önerileri. Yedek parça envanter yönetimi. Bakım maliyetleri ve ROI analizleri.</li>
  <li><strong>Raporlama ve Analitik Motoru:</strong> Günlük, haftalık ve aylık sıcaklık raporları. KVKK uyumlu veri saklama ve dışa aktarma. HACCP ve ISO 22000 uyum raporları otomatik oluşturma. Sıcaklık sapmalarının kök neden analizi. Mevsimsel trendler ve tahminleme modelleri. Executif summary ve detaylı operasyonel raporlar.</li>
  <li><strong>Mobil Uygulama (iOS/Android):</strong> Şoför ve depo personeli için özel mobil arayüz. Anlık bildirim yönetimi. Basit alarm onaylama ve not ekleme. Fotoğraf ve not kaydetme (sorun giderme için). Çevrimdışı çalışma modu ve otomatik senkronizasyon. Biyometrik kimlik doğrulama.</li>
  <li><strong>API ve Entegrasyon Katmanı:</strong> RESTful API ile mevcut ERP/WMS sistemleriyle entegrasyon. Webhook desteğiyle üçüncü parti uygulamalara veri aktarımı. CSV/Excel dışa aktarma ve içe aktarma. Önceden tanımlanmış rapor şablonları ve özelleştirme seçenekleri. API anahtarı yönetimi ve rate limiting.</li>
</ol>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">4. Sonuçlar ve ROI</h2>

<p class="text-lg text-slate-700 leading-relaxed mb-6">IoT tabanlı soğuk zincir izleme sisteminin devreye alınmasının ardından 12 aylık izleme döneminde kayda değer sonuçlar elde edildi:</p>

<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>%90 Ürün Kaybı Azalması:</strong> Yıllık ürün kaybı 8.500 tondan 850 tona düştü. Bu azalma, yıllık yaklaşık 12 milyon TL tasarruf sağladı. Özellikle süt ürünleri ve balık kategorilerinde kayıp oranları %95'in altına indi. Yaz aylarındaki kayıplar %97 azaldı.</li>
  <li><strong>%25 Operasyonel Maliyet Tasarrufu:</strong> Yıllık operasyonel maliyetler 4.5 milyon TL azaldı. Yakıt tasarrufu: Rota optimizasyonu sayesinde %8. Bakım maliyetleri: Önleyici bakım ile %35 azalma. Personel verimliliği: Otomatik izleme ile manuel kontrol ihtiyacı %60 azaldı.</li>
  <li><strong>KVKK ve HACCP Uyumu:</strong> Tüm sıcaklık verileri dijital ortamda, zaman damgalı ve değiştirilemez şekilde saklanıyor. ISO 22000 ve HACCP sertifikasyonları başarıyla alındı. Gıda Güvenliği ve Kontrol Genel Müdürlüğü denetimlerinden tam not alındı. Ceza riski tamamen ortadan kalktı.</li>
  <li><strong>Müşteri Memnuniyeti Artışı:</strong> Müşteri şikayetleri %70 azaldı. Ürün iade oranı %85 düştü. Yeni müşteri kazanım oranı %40 arttı, çünkü güvenilirlik müşteriye somut verilerle gösterilebiliyordu. Mevcut müşterilerin sözleşme yenileme oranı %98'e yükseldi.</li>
  <li><strong>Veriye Dayalı Karar Alma:</strong> 12 ayda toplanan 2.8 milyar veri noktası analiz edildi. Sıcaklık trendleri ve mevsimsel desenler belirlendi. Depo ve araç optimizasyon önerileri üretildi. Gelecekteki sorunlar önceden tahmin edilmeye başlandı.</li>
  <li><strong>Çevresel Etki:</strong> Ürün kaybının azalmasıyla karbon ayak izi %12 küçüldü. Gıda israfının önlenmesi, sürdürülebilirlik hedeflerine katkıda bulundu. Şirket, yeşil lojistik sertifikası aldı ve pazarda fark yarattı.</li>
</ul>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Sistemin toplam yatırım maliyeti 850.000 TL olarak gerçekleşti. Yıllık tasarruf ve gelir artışı toplamı 16.5 milyon TL olarak hesaplandı. Yatırımın geri dönüş süresi (ROI) 19 gün olarak hesaplandı. 3. yıl sonunda toplam net fayda 45 milyon TL'yi aştı.</p>

<div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl mt-8">
<p class="text-lg text-indigo-900 font-semibold m-0">DZY Digital olarak, IoT teknolojileriyle gıda lojistiğinde devrim yarattık. 85 araç ve 4 depoda gerçek zamanlı soğuk zincir izleme sistemi kurarak, yıllık 16.5 milyon TL tasarruf sağladık. Sizin de soğuk zincir yönetiminde benzer sorunlarınız varsa, bizimle iletişime geçin.</p>
</div>`
  },

  {
    id: 202,
    slug: 'vaka-analizi-insaat-sektorunde-proje-yonetimi-platformu',
    title: 'Vaka Analizi: İnşaat Sektöründe Proje Yönetim Platformu Geliştirme',
    category: 'Vaka Analizleri',
    date: '04 Temmuz 2026',
    readTime: '27 dk okuma',
    excerpt: 'İnşaat sektöründe Excel ve WhatsApp bağımlılığını sona erdiren, Gantt chart, malzeme takibi ve alt yüklenici yönetimini tek platformda birleştiren kapsamlı proje yönetim aracının geliştirilme süreci.',
    content: `<h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Vaka Analizi: İnşaat Sektöründe Proje Yönetim Platformu Geliştirme</h1>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">1. Müşteri Profili ve Problemler</h2>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Müşteri Hakkında</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Müşterimiz, 2001 yılında kurulan, İstanbul merkezli bir orta ölçekli inşaat şirketidir. Şirket, konut, ticari yapı ve altyapı projeleri olmak üzere üç ana iş kolunda faaliyet göstermektedir. Yılda ortalama 12-15 projeyi aynı anda yürüten şirket, 320 kişiyi istihdam etmekte ve yıllık ortalama 280 milyon TL ciro yapmaktadır. Proje portföyünde 5 katlı konut bloklarından 20 katlı ticari plazalara kadar çeşitli ölçeklerde projeler bulunmaktadır.</p>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Şirket, proje yönetiminde hala geleneksel yöntemlere bağlıydı. Proje planları Excel tablolarında, iletişim WhatsApp gruplarında, dokümanlar e-posta ile paylaşılıyor, malzeme takibi ise kağıt üzerinde yapılıyordu. Bu dağınık yapı, özellikle birden fazla projenin aynı anda yürütüldüğü durumlarda ciddi sorunlara yol açıyordu.</p>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Temel Problemler</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Şirketin karşı karşıya kaldığı başlıca sorunlar şunlardı:</p>

<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Proje gecikmeleri:</strong> Tamamlanan projelerin %65'inde计划lanan süreden ortalama 3-6 hafta gecikme yaşanıyordu. Gecikmelerin %40'ı iletişim kopukluğu ve bilgi akışındaki aksaklıklardan kaynaklanıyordu. Gecikmeler, sözleşme cezalarına ve müşteri memnuniyetsizliğine yol açıyordu.</li>
  <li><strong>Bütçe aşımları:</strong> Projelerin %55'inde bütçe aşımı yaşanıyordu. Ortalama bütçe aşımı %18 olarak ölçüldü. Malzeme maliyet takibinin yetersizliği ve gecikmeli veri akışı, doğru maliyet hesaplanmasını imkansız kılıyordu. Fiyat değişimleri ve kur dalgalanmaları zamanında değerlendirilemiyordu.</li>
  <li><strong>Malzeme yönetimi sorunları:</strong> Malzeme ihtiyaç planlaması manuel yapılıyor, siparişler zamanında verilmiyordu. Stok fazlası ve malzeme eksikliği sorunları aynı anda yaşanıyordu. Malzeme kalite kontrol süreçleri belgesiz ve izlenemezdi. Tedarikçi performans değerlendirmesi yapılamıyordu.</li>
  <li><strong>Alt yüklenici koordinasyonu eksikliği:</strong> Birden fazla alt yükleniciyle eş zamanlı çalışma iletişim kopukluğuna neden oluyordu. Alt yüklenici performans değerlendirmesi subjektif ve tutarsızdı. Ödeme planları ve hak ediş takibi karmaşıktı. Alt yükleniciye verilen işlerin kalite kontrolü yetersizdi.</li>
  <li><strong>Doküman yönetimi kaosu:</strong> Proje dokümanları (projeler, ruhsatlar, sözleşme, e-posta) farklı lokasyonlarda ve formatlarda saklanıyordu. Revizyon takibi yapılamıyor, eski versiyonlar karıştırılıyordu. Doküman bulma süresi ortalama 45 dakikayı buluyordu.</li>
  <li><strong>Saha-raporlama eksikliği:</strong> Şantiye şefi raporları gecikmeli ve eksik geliyordu. İnşaat ilerleme durumu hakkında gerçek zamanlı bilgi alınamıyordu. Fotoğraf ve video kayıtları organize edilemiyordu. İlerleme karşılaştırma (planlanan vs. gerçekleşen) yapılamıyordu.</li>
</ul>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Bu sorunlar, şirketin rekabet gücünü ve kârlılığını ciddi ölçüde zayıflatıyordu. Sektördeki dijital dönüşüm baskısı artarken, mevcut yapı bu dönüşüme ayak uyduramıyordu. Şirket yönetimi, DZY Digital'e başvurarak kapsamlı bir proje yönetim platformu geliştirilmesini talep etti.</p>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">2. DZY Digital'in Çözüm Yaklaşımı</h2>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">İhtiyaç Analizi ve Proje Kapsamı</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">DZY Digital ekibi, projenin başında 3 hafta süren kapsamlı bir ihtiyaç analizi gerçekleştirdi. 8 proje müdürü, 15 şantiye şefi, 20 mühendis ve 10 idari personelle birebir görüşmeler yapıldı. Mevcut iş süreçleri haritalandırıldı, darboğazlar belirlendi ve çözüm gereksinimleri dokümante edildi. Also, 5 farklı inşaat projesinin tam dökümantasyonu incelendi.</p>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Analiz sonucunda, platformun Gantt chart, malzeme yönetimi, alt yüklenici takibi, doküman yönetimi ve saha raporlama olmak üzere 5 temel modülden oluşması kararlaştırıldı. Agile/Scrum metodolojisi benimsenerek 6 aylık bir geliştirme planı hazırlandı.</p>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Mimari Tasarım Kararları</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Proje yönetim platformu için aşağıdaki mimari kararlar alındı:</p>

<ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Tekil Kaynak Sistemi (Single Source of Truth):</strong> Tüm proje verileri merkezi bir veritabanında tutuldu. Supabase (PostgreSQL) tabanlı veritabanı, ilişkisel veri yapısı ve güçlü sorgulama yetenekleriyle tercih edildi. Her kullanıcı, rolüne göre ilgili verilere erişebiliyordu.</li>
  <li><strong>Gerçek Zamanlı Senkronizasyon:</strong> Supabase Realtime özelliği kullanılarak, tüm kullanıcıların aynı anda güncel verileri görmesi sağlandı. Saha ekipleri mobil cihazlardan güncelleme yapıyor, ofisteki yönetim ekibi anlık olarak takip edebiliyordu.</li>
  <li><strong>Gantt Chart Motoru:</strong> Kendi Gantt chart motorumuzu geliştirdik. Zaplib (Rust tabanlı) kullanılarak yüksek performanslı, interaktif Gantt chartlar oluşturuldu. Sürükle-bırak arayüzü, bağımlılık ilişkileri, kritik yol analizi ve kaynak dağıtımı özellikleri eklendi.</li>
  <li><strong>Malzeme Takip Sistemi:</strong> Barkod ve QR kod tabanlı malzeme takibi. Stok yönetimi, sipariş takibi, sevkiyat izleme ve kalite kontrol modülleri bir bütün halinde tasarlandı. Otomatik yeniden sipariş noktaları ve tedarikçi entegrasyonları sağlandı.</li>
  <li><strong>Mobil Öncelikli Tasarım:</strong> Saha ekiplerinin çoğunun masaüstü bilgisayarı olmadığı göz önünde bulundurularak, mobil cihazlar öncelikli tasarlandı. Çevrimdışı çalışma desteği, internet bağlantısı恢复 edildiğinde otomatik senkronizasyon sağlıyordu.</li>
</ol>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Geliştirme Süreci</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Proje, 6 aylık bir geliştirme döngüsü içinde tamamlandı. Her ay sonunda MVP (Minimum Viable Product)_incrementleri yayınlanarak, kademeli bir adaptasyon sağlandı. İlk 2 ayda temel altyapı ve Gantt chart modülü, 3-4. aylarda malzeme yönetimi ve alt yüklenici modülleri, 5-6. aylarda ise doküman yönetimi ve saha raporlama modülleri geliştirildi.</p>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Geliştirme sürecinde aşağıdaki teknoloji yığını tercih edildi:</p>

<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Frontend:</strong> Next.js 14, React, TypeScript, Tailwind CSS, Zaplib (Gantt chart), D3.js (grafik)</li>
  <li><strong>Backend:</strong> Supabase (PostgreSQL, Auth, Realtime, Storage), Node.js (Edge Functions)</li>
  <li><strong>Mobil:</strong> React Native (iOS/Android), Expo, AsyncStorage (çevrimdışı veri)</li>
  <li><strong>Barkod/QR:</strong> react-native-camera, ZXing library, custom QR generator</li>
  <li><strong>Doküman:</strong> PDF.js, Tiptap (rich text editor), Supabase Storage (dosya barındırma)</li>
  <li><strong>DevOps:</strong> Vercel (hosting), Docker, GitHub Actions CI/CD, Sentry (hata izleme)</li>
</ul>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">3. Geliştirilen Modüller</h2>

<ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Interaktif Gantt Chart ve Zaman Çizelgesi:</strong> Sürükle-bırak arayüzüyle proje planları oluşturma ve güncelleme. Görev bağımlılıkları (FS, SS, FF, SF) ve kritik yol analizi. Kaynak dağıtımı ve kapasite planlama. Haftalık/aylık görüntüleme seçenekleri. Gecikme tahmini ve otomatik yeniden planlama önerileri. Proje ilerleme yüzdesi hesaplama (kazanılan değer analizi - Earned Value).</li>
  <li><strong>Malzeme Yönetimi ve Envanter Takibi:</strong> Barkod/QR kod ile malzeme giriş-çıkış takibi. Stok seviyeleri, minimum/maksimum eşik değerleri. Otomatik yeniden sipariş oluşturma. Tedarikçi bazlı fiyat karşılaştırma. Malzeme kalite kontrol formları (fotoğraflı). Malzeme ihtiyacı planlaması (BOM - Bill of Materials). Proje bazlı malzeme maliyet takibi.</li>
  <li><strong>Alt Yüklenici Yönetim Paneli:</strong> Alt yüklenici profil ve sertifika yönetimi. Teklif toplama ve karşılaştırma. Sözleşme yönetimi ve hak ediş takibi. Performans değerlendirmesi (kalite, zamanlama, maliyet). Alt yükleniciye özel görev atama ve takip. Ödeme planları ve fatura eşleştirme.</li>
  <li><strong>Doküman Yönetim Sistemi:</strong> Proje bazlı doküman kategorileri (projeler, ruhsatlar, sözleşmeler, e-postalar). Versiyon kontrolü ve revizyon geçmişi. OCR (Optik Karakter Tanıma) ile taranan belgelerde arama. Ekip içi doküman paylaşımı ve not ekleme. PDF, Word, Excel, görsel dosya desteği. Otomatik yedekleme ve arşivleme.</li>
  <li><strong>Saha Raporlama ve Fotoğraf Entegrasyonu:</strong> Şantiye şefi için günlük/haftalık rapor şablonları. Fotoğraf ve video çekimi, otomatik konum ve zaman damgası. İnşaat aşaması karşılaştırma (planlanan vs. gerçeklesen). İlerleme yüzdesi takibi ve görselleştirme. Hava durumu entegrasyonu (gecikme nedenleri analizi için). Sesli not kaydetme ve otomatik transkripsiyon.</li>
  <li><strong>Bütçe ve Maliyet Takip Modülü:</strong> Proje bütçesi oluşturma ve kategori bazlı dağıtım. Gerçek zamanlı maliyet takibi (malzeme + işçilik + ekipman). Bütçe sapma analizi ve uyarılar. Nakit akışı projeksiyonları. Faturalandırma ve ödeme takibi. Kar-zarar analizi ve kârlılık raporları.</li>
  <li><strong>Kalite Kontrol ve Denetim Modülü:</strong> İnşaat kalite kontrol formları (önceden tanımlı şablonlar). Uygunluk/huygunluk denetim planları. Tespit edilen uygunsuzluklar için düzeltici faaliyet takibi. Fotoğraflı kanıt toplama ve raporlama. Denetim takvimi ve otomatik hatırlatmalar. ISO 9001 uyumlu dokümantasyon.</li>
  <li><strong>İletişim ve Bildirim Merkezi:</strong> Proje bazlı sohbet kanalları. Görev bazlı yorum ve tartışma alanları. Önemli değişiklikler için otomatik bildirimler. E-posta entegrasyonu (gelen/giden e-postalar otomatik kaydedilir). Toplantı notları ve aksiyon takibi. Mobil push bildirimleri ve SMS entegrasyonu.</li>
</ol>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">4. Sonuçlar ve ROI</h2>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Proje yönetim platformunun devreye alınmasının ardından 9 aylık izleme döneminde kayda değer sonuçlar elde edildi. Platform, inşaat şirketinin tüm proje yönetim süreçlerini köklü biçimde dönüştürdü:</p>

<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>%40 Daha Hızlı Proje Tamamlama:</strong> Ortalama proje süresi 18 aydan 10.8 aya indi. Gecikme oranı %65'ten %20'ye düştü. Kritik yol analizi sayesinde, gecikme riski taşıyan görevler önceden tespit edilip önlem alındı. Proje takviminin tutarlılığı %85'e yükseldi.</li>
  <li><strong>%60 İletişim Yükü Azalması:</strong> E-posta trafiği %70 azaldı. WhatsApp gruplarındaki mesajlaşma %85 azaldı. Bilgi bulma süresi 45 dakikadan 2 dakikaya düştü. Toplantı süresi haftada ortalama 8 saatten 3 saate indi. Karar alma hızı %50 arttı.</li>
  <li><strong>%25 Bütçe Tasarrufu:</strong> Ortalama bütçe aşımı %18'den %4'e düştü. Malzeme maliyetlerinde %12 tasarruf sağlandı (fiyat karşılaştırma ve toplu alım avantajları). İşi bitirmeme ve yeniden iş yapma oranı %40 azaldı. Nakit akışı tahmin doğruluğu %90'a yükseldi.</li>
  <li><strong>%35 Malzeme Verimliliği Artışı:</strong> Stok fazlası malzeme miktarı %45 azaldı. Malzeme eksikliğinden kaynaklanan duruş süreleri %60 azaldı. Tedarikçi teslimat süreleri %20 iyileşti (performans takibi sayesinde). Malzeme israfı %30 azaldı.</li>
  <li><strong>Alt Yüklenici Performans İyileşmesi:</strong> Alt yüklenici değerlendirmeleri objektif ve veriye dayalı hale geldi. Sözleşme sürekliliği %85'e yükseldi. Alt yüklenici kaynaklı gecikmeler %50 azaldı. İş kalitesi standartları yükseldi (%98 uygunluk oranı).</li>
  <li><strong>Müşteri Memnuniyeti:</strong> Müşteri memnuniyet skoru (CSAT) 3.2'den 4.6'ya (5 üzerinden) yükseldi. Yeni müşteri referans oranı %60 arttı. Proje teslim sonrası şikayet oranı %75 azaldı.</li>
</ul>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Platformun toplam yatırım maliyeti 1.2 milyon TL olarak gerçekleşti. Yıllık tasarruf ve gelir artışı toplamı 18 milyon TL olarak hesaplandı. Yatırımın geri dönüş süresi (ROI) 24 gün olarak hesaplandı. 2. yıl sonunda toplam net fayda 35 milyon TL'yi aştı.</p>

<div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl mt-8">
<p class="text-lg text-indigo-900 font-semibold m-0">DZY Digital olarak, inşaat sektöründe proje yönetimini kökten değiştiren bir platform geliştirdik. Gantt chart, malzeme takibi ve alt yüklenici yönetimini tek çatı altında birleştirerek, proje sürelerini %40 kısalttık. Sizin de proje yönetiminde benzer zorluklarınız varsa, bizimle iletişime geçin.</p>
</div>`
  },

  {
    id: 203,
    slug: 'vaka-analizi-emlak-sektorunde-ai-ile-degerleme-tahmini',
    title: 'Vaka Analizi: Emlak Sektöründe AI ile Gayrimenkul Değerleme Tahmini',
    category: 'Vaka Analizleri',
    date: '04 Temmuz 2026',
    readTime: '29 dk okuma',
    excerpt: 'Emlak sektöründe yapay zeka destekli gayrimenkul değerleme modelinin geliştirilme süreci. %85 doğruluk oranıyla, değerleme süresini %70 kısaltan ve rekabet avantajı sağlayan AI çözümü.',
    content: `<h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Vaka Analizi: Emlak Sektöründe AI ile Gayrimenkul Değerleme Tahmini</h1>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">1. Müşteri Profili ve Problemler</h2>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Müşteri Hakkında</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Müşterimiz, Türkiye'nin en büyük 10 emlak firmasından biri olan, 2008 yılında İstanbul'da kurulan bir gayrimenkul değerleme ve danışmanlık şirketidir. Şirket, konut, ticari ve endüstriyel gayrimenkul değerleme hizmetleri sunmaktadır. 180 çalışanı, 12 ilde 25 şubesi bulunan şirket, yıllık ortalama 15.000 değerleme raporu hazırlamaktadır. Şirketin müşteri portföyünde bankalar, sigorta şirketleri, yatırımcılar ve bireysel alıcı/satıcılar bulunmaktadır.</p>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Değerleme süreci, geleneksel olarak uzman değerleme uzmanlarının saha ziyaretleri, manuel karşılaştırma ve deneyim bazlı yargılarına dayanıyordu. Bu süreç hem zaman alıcıydı hem de insan faktörüne bağlı tutarsızlıklar barındırıyordu. Sektördeki dijital dönüşüm baskısı, şirketin yapay zeka tabanlı bir değerleme aracı geliştirmesini zorunlu kılıyordu.</p>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Temel Problemler</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Şirketin karşı karşıya kaldığı başlıca sorunlar şunlardı:</p>

<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Uzun değerleme süreleri:</strong> Ortalama değerleme süresi 7-10 iş günüydü. Bu süre, özellikle banka kredisi süreçlerinde ciddi gecikmelere yol açıyordu. Müşteriler, hızlı sonuç talep ediyor, ancak mevcut yapı buna olanak tanımıyordu. Hızlı değerleme talepleri, %30 primle yapılıyordu.</li>
  <li><strong>Tutarsız değerleme sonuçları:</strong> Farklı değerleme uzmanları, aynı mülk için %15-25 arasında farklı sonuçlar verebiliyordu. Bu tutarsızlık, müşteri güvenini sarsıyor ve yasal sorunlara yol açıyordu. Sektördeki itibar riski, şirketin en büyük endişelerinden biriydi.</li>
  <li><strong>Yetersiz veri analizi:</strong> Değerleme uzmanları, sınırlı sayıda karşılaştırma verisine erişebiliyordu. Piyasa trendleri, demografik değişiklikler, altyapı projeleri ve kentsel dönüşüm gibi faktörlerin etkisi yeterince değerlendirilemiyordu. Coğrafi bilgi sistemi (CBS) verileri entegre edilemiyordu.</li>
  <li><strong>Yüksek operasyonel maliyetler:</strong> Her değerleme için saha ziyareti, manuel karşılaştırma ve rapor hazırlama gerekiyordu. Uzman başına düşen değerleme sayısı ayda ortalama 12-15 ile sınırlıydı. İşgücü maliyetleri, toplam maliyetin %65'ini oluşturuyordu.</li>
  <li><strong>Piyasa dalgalanmalarına uyumsuzluk:</strong> Hızlı değişen piyasa koşullarında, manuel değerleme yöntemleri yeterince hızlı güncellenemiyordu. Konut fiyat indeksleri, enflasyon verileri ve faiz oranları gibi makroekonomik faktörlerin etkisi gecikmeli olarak değerlendiriliyordu.</li>
  <li><strong>Rekabet baskısı:</strong> Yeni nesil emlak platformları (Zillow, Redfin modelleri), yapay zeka destekli değerleme araçları sunmaya başlamıştı. Şirket, rekabet avantajını korumak için teknolojik dönüşüme acil ihtiyaç duyuyordu.</li>
</ul>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Bu sorunlar, şirketin büyüme potansiyelini ve müşteri tabanını ciddi ölçüde sınırlıyordu. Şirket yönetimi, DZY Digital'e başvurarak yapay zeka tabanlı bir değerleme tahmin sistemi geliştirilmesini talep etti.</p>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">2. DZY Digital'in Çözüm Yaklaşımı</h2>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Veri Toplama ve Hazırlık</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">DZY Digital ekibi, projenin başarısı için kapsamlı bir veri toplama süreci başlattı. İlk 4 haftada, şirketin mevcut 85.000 değerleme raporu dijital ortama aktarıldı ve yapılandırıldı. Ayrıca, Tapu ve Kadastro Genel Müdürlüğü, TÜİK, Nüfus Müdürlüğü ve belediye verileri entegre edildi. Toplam 2.5 milyon kayıt içeren bir veri seti oluşturuldu. Veri kalitesi analizi yapıldı, eksik ve hatalı veriler temizlendi.</p>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Veri seti aşağıdaki kategorilerden oluşuyordu:</p>

<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Mülk özellikleri:</strong> Brüt/net alan, oda sayısı, kat, bina yaşı, bina tipi, ısınma sistemi, otopark, balkon, manzara</li>
  <li><strong>Konum verileri:</strong> Koordinat, ilçe, mahalle, sokak, toplu taşıma yakınlığı, okul/hastane/market mesafesi</li>
  <li><strong>Piyasa verileri:</strong> Son satış fiyatları, kira gelirleri, emlak endeksleri, arz-talep dengesi</li>
  <li><strong>Demografik veriler:</strong> Nüfus yoğunluğu, gelir seviyesi, eğitim düzeyi, yaş dağılımı</li>
  <li><strong>Altyapı verileri:</strong> Yeni metro/otobüs hatları, kentsel dönüşüm projeleri, imar planı değişiklikleri</li>
</ul>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Yapay Zeka Modeli Geliştirme</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">DZY Digital, değerleme tahmini için çoklu bir yapay zeka modeli geliştirdi. Tek bir model yerine, farklı mülk tipleri için ayrı modeller eğitildi (konut, ticari, endüstriyel). Her model için aşağıdaki adımlar izlendi:</p>

<ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Özellik Mühendisliği:</strong> Ham verilerden anlamlı özellikler türetildi. Coğrafi koordinatlardan mesafe hesaplamaları, metrekare fiyat endeksleri, sezonel trendler ve piyasa volatilitesi özellikleri eklendi. Toplam 350'den fazla özellik hazırlandı.</li>
  <li><strong>Model Seçimi ve Eğitimi:</strong> XGBoost, LightGBM, CatBoost ve derin sinir ağı (DNN) modelleri eğitildi. Ensemble (topluluk) yaklaşımıyla en iyi sonuç veren kombinasyon belirlendi. 5-katlı cross-validation kullanılarak aşırı öğrenme (overfitting) önldü.</li>
  <li><strong>Hiperparametre Optimizasyonu:</strong> Bayesian optimization ile model hiperparametreleri optimize edildi. Her model için 500'den fazla deneme yapıldı. En iyi performans gösteren parametre setleri seçildi.</li>
  <li><strong>Model Değerlendirme:</strong> RMSE (Root Mean Square Error), MAE (Mean Absolute Error) ve R² metrikleri kullanıldı. %5 marj içinde tahmin doğruluğu hedeflendi. Test verisi üzerinde %85 doğruluk elde edildi.</li>
</ol>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Sistem Mimarisi</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Değerleme tahmin sistemi, aşağıdaki katmanlardan oluşan bir mimari üzerine inşa edildi:</p>

<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Veri Toplama Katmanı:</strong> Otomatik veri toplama botları (scraping), API entegrasyonları ve manuel veri girişi arayüzü</li>
  <li><strong>Veri İşleme Katmanı:</strong> Apache Spark ile büyük veri işleme, veri temizliği ve özellik türetme pipeline'ları</li>
  <li><strong>Model Servisi Katmanı:</strong> TensorFlow Serving ile model inference, Docker container'larda ölçeklenebilir deployment</li>
  <li><strong>Uygulama Katmanı:</strong> Supabase (PostgreSQL), Node.js backend, React frontend, WebSocket real-time güncellemeler</li>
  <li><strong>Monitoring Katmanı:</strong> Model performans izleme, veri drift tespiti, otomatik yeniden eğitme tetikleme</li>
</ul>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">3. Geliştirilen Modüller</h2>

<ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>AI Değerleme Motoru:</strong> Çoklu model mimarisi (XGBoost + LightGBM + DNN ensemble). Konut, ticari ve endüstriyel mülkler için ayrı modeller. %5 marj içinde %85 doğruluk oranı. Gerçek zamanlı fiyat güncelleme ve piyasa trendi entegrasyonu. Coğrafi bilgi sistemi (GIS) ile konum bazlı analiz. Açıklayıcı AI (XAI) ile değerleme sonuçlarının nedenleri gösteriliyor (hangi özellikler fiyatı etkiledi).</li>
  <li><strong>Piyasa Analiz ve Raporlama Dashboard'u:</strong> Gerçek zamanlı emlak piyasası göstergeleri. İlçe/mahalle bazlı fiyat haritaları (heat map). Arz-talep analizi ve trend tahminleri. Yatırım getirisi (ROI) hesaplama araçları. Karşılaştırmalı değerleme raporları. Executif summary ve detaylı teknik raporlar.</li>
  <li><strong>Saha Veri Toplama Uygulaması:</strong> Mobil cihazlar için değerleme uzmanı uygulaması. Fotoğraflı mülk bilgisi girişi. GPS ile otomatik konum tespiti. Çevrimdışı çalışma modu ve otomatik senkronizasyon. Sesli not kaydetme ve transkripsiyon. Barkod/QR kod ile mülk tanımlama.</li>
  <li><strong>Rapor Oluşturucu ve Şablon Motoru:</strong> Özelleştirilebilir değerleme raporu şablonları. Otomatik grafik ve tablo oluşturma. PDF, Word ve Excel formatında dışa aktarma. E-imza entegrasyonu. Yasal düzenlemelere uygun rapor formatları. Toplu rapor oluşturma ve toplu e-posta gönderimi.</li>
  <li><strong>Trend Tahmin ve Senaryo Analizi:</strong> Kısa vadeli (3-6 ay) ve uzun vadeli (1-3 yıl) fiyat tahminleri. Faiz oranı, enflasyon ve döviz kuru senaryoları. Kentsel dönüşüm projelerinin fiyat etkisi analizi. Yeni ulaşım hatları ve altyapı projelerinin değerleme üzerindeki etkisi. Senaryo bazlı risk analizi.</li>
  <li><strong>API ve Entegrasyon Katmanı:</strong> RESTful API ile banka ve finans kurumlarıyla entegrasyon. Webhook ile gerçek zamanlı fiyat güncellemeleri. Third-party emlak portallarıyla veri paylaşımı. CRM sistemi entegrasyonu. SAP/Oracle ERP entegrasyonu. OAuth 2.0 tabanlı güvenli API erişimi.</li>
  <li><strong>Model Monitoring ve Yeniden Eğitim:</strong> Model performansının sürekli izlenmesi. Veri drift (veri sapması) tespiti ve uyarıları. Otomatik yeniden eğitme pipeline'ları. A/B testing ile model karşılaştırma. Model versiyon yönetimi ve rollback desteği. Explainable AI (XAI) ile model kararlarının açıklanabilirliği.</li>
</ol>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">4. Sonuçlar ve ROI</h2>

<p class="text-lg text-slate-700 leading-relaxed mb-6">AI destekli değerleme sisteminin devreye alınmasının ardından 10 aylık izleme döneminde kayda değer sonuçlar elde edildi. Sistem, değerleme süreçlerini köklü biçimde dönüştürdü ve şirkete rekabet avantajı sağladı:</p>

<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>%85 Doğruluk Oranı (%5 Marj İçinde):</strong> Geliştirilen model, test verisi üzerinde %85 doğruluk oranıyla çalıştı. Gerçek satış fiyatlarıyla karşılaştırma yapıldığında, tahminlerin %85'i %5 marj içinde kaldı. Bu oran, sektör ortalaması olan %60-65'in çok üzerine çıktı. Model, zamanla daha da iyileşerek 10. ayda %88 doğruluk oranına ulaştı.</li>
  <li><strong>%70 Daha Hızlı Değerleme:</strong> Ortalama değerleme süresi 7-10 iş gününden 2-3 iş gününe indi. Acil değerleme talepleri 24 saat içinde karşılanabiliyor. Banka kredi süreçlerindeki gecikmeler %60 azaldı. Müşteri memnuniyeti oranı %45 arttı.</li>
  <li><strong>Rekabet Avantajı:</strong> Sektörde yapay zeka tabanlı değerleme sunan ilk 3 firmadan biri oldu. Yeni müşteri kazanım oranı %55 arttı. Mevcut müşterilerin hizmet genişletme oranı %40 yükseldi. 3 yeni banka ile stratejik işbirliği anlaşması imzalandı.</li>
  <li><strong>%35 Operasyonel Maliyet Azalması:</strong> Uzman başına düşen değerleme sayısı ayda 12-15'ten 40-45'e çıktı. İşgücü maliyetleri %35 azaldı. Saha ziyaret süresi %50 kısaldı (önceden filtreleme sayesinde). Rapor hazırlama süresi %80 azaldı.</li>
  <li><strong>Veriye Dayalı Karar Alma:</strong> 2.5 milyon kayıtlık veri seti sürekli güncelleniyor. Piyasa trendleri gerçek zamanlı olarak izleniyor. Yatırım kararları için güvenilir veri tabanı oluştu. Risk yönetimi kapasitesi önemli ölçüde arttı.</li>
  <li><strong>Gelir Artışı:</strong> Yıllık gelir %40 arttı. Yeni hizmet alanları (trend tahmin, senaryo analizi) ek gelir kaynağı oldu. API entegrasyonuyla pasif gelir elde edilmeye başlandı. Şirketin piyasa değeri %60 arttı.</li>
</ul>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Sistemin toplam yatırım maliyeti 2.8 milyon TL olarak gerçekleşti. Yıllık tasarruf ve gelir artışı toplamı 22 milyon TL olarak hesaplandı. Yatırımın geri dönüş süresi (ROI) 6 ay olarak hesaplandı. 2. yıl sonunda toplam net fayda 42 milyon TL'yi aştı.</p>

<div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl mt-8">
<p class="text-lg text-indigo-900 font-semibold m-0">DZY Digital olarak, emlak sektöründe yapay zeka devrimi yarattık. %85 doğruluk oranıyla değerleme süresini %70 kısalttık ve sektöre rekabet avantajı kazandırdık. Sizin de değerleme süreçlerinizi dönüştürmek istiyorsanız, bizimle iletişime geçin.</p>
</div>`
  },

  {
    id: 204,
    slug: 'vaka-analizi-perakende-stok-yonetimi-otomasyonu',
    title: 'Vaka Analizi: Perakende Sektöründe Stok Yönetimi Otomasyonu',
    category: 'Vaka Analizleri',
    date: '04 Temmuz 2026',
    readTime: '26 dk okuma',
    excerpt: '15 mağazalı perakende zincirinde barkod tarama, talep tahmini ve otomatik sipariş sistemiyle stok yönetiminin tamamen otomasyona bağlanması. %35 stok tükenme azalması ve %20 envanter maliyeti düşüşü sağlandı.',
    content: `<h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Vaka Analizi: Perakende Sektöründe Stok Yönetimi Otomasyonu</h1>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">1. Müşteri Profili ve Problemler</h2>

<h3 class="text-lg text-slate-700 leading-relaxed mb-6">Müşteri Hakkında</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Müşterimiz, 2012 yılında Ankara'da kurulan, Türkiye'nin hızla büyüyen orta segment perakende zincirlerinden biridir. Gıda, temizlik, elektronik ve ev tekstili ürünlerini 15 mağazada tüketiciye sunan şirket, 420 çalışanı ve yıllık ortalama 350 milyon TL cirouyla sektörde önemli bir konuma sahiptir. Mağazalar, İstanbul (5), Ankara (4), İzmir (3) ve Bursa (3) illerinde konumlandırılmıştır.</p>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Şirket, stok yönetimini hala manuel yöntemlerle ve temel Excel tablolarıyla yürütüyordu. Her mağaza kendi stok takibini yapıyor, merkeze haftalık olarak rapor gönderiyordu. Bu dağınık yapı, ürün bulunabilirliğini olumsuz etkiliyor, hem stok tükenmelerine hem de fazla stok birikimine yol açıyordu. Özellikle kampanya dönemlerinde ve mevsim geçişlerinde ciddi sorunlar yaşanıyordu.</p>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Temel Problemler</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Şirketin karşı karşıya kaldığı başlıca sorunlar şunlardı:</p>

<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Yüksek stok tükenme oranı:</strong> Mağazalardaki ürünlerin %22'si zaman zaman tükeniyordu. Stok tükenmeleri, haftada ortalama 8.500 TL satış kaybına neden oluyordu. Özellikle popüler ürünler ve promosyon dönemlerinde tükenme oranları %35'e çıkıyordu. Müşteriler, aradıkları ürünü bulamayarak rakip mağazalara yönleniyordu.</li>
  <li><strong>Fazla stok ve israf:</strong> Tükenme kaygısıyla yapılan aşırı siparişler, depolarda ve mağaza arka alanlarında ciddi fazla stok birikimine yol açıyordu. Raflarda yer kalmıyor, depo kapasitesi doluyordu. Son kullanma tarihi geçen ürünler (özellikle gıda kategorisinde) %8 oranında israf ediliyordu. Fazla stok, nakit akışını olumsuz etkiliyor ve depolama maliyetlerini artırıyordu.</li>
  <li><strong>Talep tahmin eksikliği:</strong> Sipariş kararları deneyim ve sezgilere dayanıyordu. Mevsimsel trends, promosyon etkileri ve dışsal faktörler (hava durumu, bayramlar) yeterince değerlendirilmiyordu. Yeni ürün lansmanları için talep tahmini yapılamıyordu. Geçmiş veriler analiz edilemiyordu.</li>
  <li><strong>Manuel süreçlerin yavaşlığı:</strong> Stok sayımı ayda bir kez elle yapılıyor, 3-4 gün sürüyordu. Sipariş oluşturma süreci ortalama 2 hafta sürüyordu. Tedarikçi iletişimi e-posta ve telefonla yapılıyor, gecikmeler yaşanıyordu. Stok verileri 1 hafta gecikmeli olarak merkeze ulaşıyordu.</li>
  <li><strong>Veri tutarsızlığı:</strong> Farklı mağazalardaki stok verileri tutarsızdı. Ürün kodlaması ve barkod sistemi standart değildi. Envanter kayıtları ile fiziksel stok arasında uyumsuzluklar bulunuyordu. Çalıntı ve kayıp ürün takibi yapılamıyordu.</li>
  <li><strong>Tedarikçi yönetimi zayıflığı:</strong> Tedarikçi performans değerlendirmesi yapılmıyordu. Alternatif tedarikçi bulunamıyordu. Fiyat ve kalite karşılaştırması yapılamıyordu. Teslimat süreleri takip edilmiyordu.</li>
</ul>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Bu sorunlar, şirketin kârlılığını ve müşteri memnuniyetini ciddi ölçüde etkiliyordu. Sektördeki rekabet baskısı artarken, stok yönetimi verimliliği hayati bir ihtiyaç haline gelmişti. Şirket yönetimi, DZY Digital'e başvurarak kapsamlı bir stok yönetimi otomasyon sistemi geliştirilmesini talep etti.</p>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">2. DZY Digital'in Çözüm Yaklaşımı</h2>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Mevcut Durum Analizi ve Veri Toplama</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">DZY Digital ekibi, projenin başında 3 hafta süren kapsamlı bir mevcut durum analizi gerçekleştirdi. 15 mağazanın tamamı ziyaret edildi, stok süreçleri gözlemlendi ve belgelendi. 25 mağaza müdürü, 30 kasiyer ve 10 satın alma uzmanıyla derinlemesine görüşmeler yapıldı. Son 3 yıllık satış verileri, stok kayıtları ve tedarikçi faturaları analiz edildi. Toplam 4.2 milyon satış işlemi ve 180.000 SKU (Stok Ünitesi) incelendi.</p>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Analiz sonucunda, sistemin barkod tarama, talep tahmini ve otomatik sipariş olmak üzere 3 temel bileşenden oluşması kararlaştırıldı. Agile/Scrum metodolojisi benimsenerek 5 aylık bir geliştirme planı hazırlandı. Pilot uygulama için 3 mağaza seçildi (İstanbul'dan 2, Ankara'dan 1).</p>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Teknik Çözüm Mimarisi</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Stok yönetimi otomasyon sistemi için aşağıdaki mimari kararlar alındı:</p>

<ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Merkezi Stok Veritabanı:</strong> Tüm mağazaların stok verileri tek bir Supabase (PostgreSQL) veritabanında toplandı. Gerçek zamanlı senkronizasyon sayesinde, herhangi bir mağazadaki satış veya stok girişi anlık olarak merkeze yansıyordu. Bu sayede, tüm mağazaların güncel stok durumu tek ekrandan takip edilebiliyordu.</li>
  <li><strong>Barkod Tarama Altyapısı:</strong> Her mağazaya mobil barkod tarayıcılar (Zebra TC52) ve POS entegrasyonu kuruldu. Ürün giriş, çıkış ve sayım işlemleri barkod taramayla hızlı ve hatasız biçimde yapılıyordu. GS1 standartlarında barkod üretimi ve yönetimi sağlandı.</li>
  <li><strong>Talep Tahmin Motoru:</strong> Makine öğrenimi tabanlı talep tahmin modeli geliştirildi. XGBoost ve LSTM (Long Short-Term Memory) modellerinin ensemble'ı kullanıldı. Mevsimsel trends, promosyon etkileri, hava durumu ve tatil günleri gibi faktörler modele dahil edildi. Her SKU için ayrı ayrı tahminler üretiliyor, haftalık olarak güncelleniyordu.</li>
  <li><strong>Otomatik Sipariş Sistemi:</strong> Talep tahminleri ve安全 stok seviyeleri göz önünde bulundurularak otomatik sipariş önerileri oluşturuluyordu. Minimum ve maksimum stok seviyeleri, yeniden sipariş noktaları otomatik hesaplanıyordu. Tedarikçiye otomatik sipariş e-postası gönderimi entegre edildi.</li>
  <li><strong>Edge Computing:</strong> Her mağazada yerel sunucular (Raspberry Pi 4) konuşlandırıldı. İnternet bağlantısı kesildiğinde bile barkod tarama ve stok işlemleri devam edebiliyordu. Bağlantı恢复 edildiğinde veriler otomatik olarak senkronize ediliyordu.</li>
</ol>

<h3 class="text-xl font-bold text-slate-900 mt-8 mb-2">Geliştirme ve Pilot Uygulama</h3>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Proje, 5 aylık bir geliştirme döngüsü içinde tamamlandı. İlk 2 ayda temel altyapı ve barkod tarama sistemi, 3. ayda talep tahmin motoru, 4. ayda otomatik sipariş sistemi, 5. ayda ise admin paneli ve raporlama modülleri geliştirildi. 3. ayda 3 pilot mağazada test edilen sistem, 5. ayda tüm 15 mağazaya yaygınlaştırıldı.</p>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Geliştirme sürecinde aşağıdaki teknoloji yığını kullanıldı:</p>

<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Backend:</strong> Node.js (Express), Supabase (PostgreSQL, Auth, Realtime), Redis (önbellek), Apache Kafka (olay akışı)</li>
  <li><strong>Frontend:</strong> React, TypeScript, Tailwind CSS, Recharts (grafik), Socket.io (real-time)</li>
  <li><strong>ML/Talep Tahmin:</strong> Python, scikit-learn, XGBoost, TensorFlow (LSTM), pandas, NumPy</li>
  <li><strong>Barkod:</strong> Zebra TC52 SDK, ZXing, custom barcode generator, GS1 standards</li>
  <li><strong>Edge Computing:</strong> Raspberry Pi 4, Ubuntu Server, Docker, MQTT, SQLite (yerel veritabanı)</li>
  <li><strong>DevOps:</strong> Docker, Kubernetes, GitHub Actions CI/CD, Prometheus + Grafana (monitoring)</li>
</ul>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">3. Geliştirilen Modüller</h2>

<ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>Barkod Tarama ve Stok Giriş/Çıkış Sistemi:</strong> Zebra TC52 mobil tarayıcılarla hızlı barkod okuma (sn'de 2 barkod). Ürün giriş, çıkış, sayım ve transfer işlemleri tek tıklamayla. Anlık stok güncelleme ve bildirim. Hatalı barkod ve ürün eşleştirme düzeltme. Toplu barkod basımı ve etiket yönetimi. Çevrimdışı tarama ve otomatik senkronizasyon.</li>
  <li><strong>ML Tabanlı Talep Tahmin Motoru:</strong> Her SKU için haftalık ve aylık tahminler. Mevsimsel analiz ve trend çıkarma. Promosyon etkisi modelleme. Hava durumu ve tatil günü entegrasyonu. Yeni ürün lansmanı için transfer learning. Tahmin doğruluğu метриkları ve otomatik iyileştirme. %92 tahmin doğruluk oranı (%10 marj içinde).</li>
  <li><strong>Otomatik Sipariş ve Yeniden Stoklama:</strong> Minimum/maksimum stok seviyeleri otomatik hesaplama. Güvenli stok (safety stock) optimizasyonu. Ekonomik sipariş miktarı (EOQ) hesaplama. Otomatik sipariş oluşturma ve tedarikçiye gönderim. Sipariş takibi ve teslimat yönetimi. Fiyat dalgalanmalarına göre dinamik sipariş planlama.</li>
  <li><strong>Mağaza İçi Raf ve Düzen Yönetimi:</strong> Ürün yerleşim planı (planogram) oluşturma. Raf doluluk oranı takibi. Ürün performansına göre yerleşim optimizasyonu. Sıcak/soguk nokta analizi. Kampanya ürünü yerleşim önerileri. Fotoğraflı raf denetimi ve uyumsuzluk tespiti.</li>
  <li><strong>Tedarikçi Performans Yönetim Paneli:</strong> Tedarikçi profilleri ve sözleşme yönetimi. Teslimat süresi ve kalite takibi. Fiyat karşılaştırma ve müzakere araçları. Otomatik performans değerlendirmesi (puanlama). Alternatif tedarikçi önerileri. Tedarikçi risk analizi ve alternatif planlama.</li>
  <li><strong>Dashboard ve Analitik Raporlar:</strong> Gerçek zamanlı stok durumu dashboard'u. Mağaza bazlı performans karşılaştırma. Kategori ve marka bazlı satış analizi. Stok devir hızı ve kârlılık metrikleri. Kayıp/çalıntı analizi ve uyarılar. Executif summary ve operasyonel raporlar.</li>
  <li><strong>Mobil Uygulama (Mağaza Personeli):</strong> Stok sorgulama vesayım. Barkod tarama ve ürün bilgisi. Sipariş talebi oluşturma. Mağaza içi iletişim ve bildirimler. Çevrimdışı çalışma modu. Basit ve sezgisel arayüz (eğitim süresini minimuma indirmek için).</li>
</ol>

<h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">4. Sonuçlar ve ROI</h2>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Otomatik stok yönetimi sisteminin tüm mağazalarda devreye alınmasının ardından 8 aylık izleme döneminde kayda değer sonuçlar elde edildi. Sistem, perakende operasyonlarını köklü biçimde dönüştürdü:</p>

<ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
  <li><strong>%35 Stok Tükenme Azalması:</strong> Stok tükenme oranı %22'den %14'e düştü. Haftalık satış kaybı 8.500 TL'den 3.200 TL'ye indi. Yıllık toplam satış kaybı 277.000 TL azaldı. Müşteri memnuniyeti oranı %40 arttı, çünkü aradıkları ürünleri her zaman bulabiliyorlardı. Özellikle kampanya dönemlerinde tükenme oranları %35'ten %12'ye düştü.</li>
  <li><strong>%20 Envanter Maliyeti Azalması:</strong> Toplam envanter maliyeti 12 milyon TL'den 9.6 milyon TL'ye indi. Yıllık 2.4 milyon TL tasarruf sağlandı. Depolama maliyetleri %25 azaldı. Nakit akışı iyileşti, çünkü gereksiz stok yatırımı azaldı. Raflarda ve depolarda yer açıldı, yeni ürünler için alan yaratıldı.</li>
  <li><strong>%99.5 Veri Doğruluğu:</strong> Stok verileri ile fiziksel stok arasındaki uyumsuzluk oranı %8'den %0.5'e düştü. Envanter sayım süresi 3-4 günden 4 saate indi. Çalıntı ve kayıp ürün tespit oranı %90 arttı. Veriye dayalı karar alma kapasitesi önemli ölçüde arttı.</li>
  <li><strong>Talep Tahmin Başarısı:</strong> Talep tahmin modeli %92 doğruluk oranı (%10 marj içinde) ile çalıştı. Yeni ürün lansmanları için tahminler %80 doğrulukla yapıldı. Mevsimsel trends doğru şekilde modellendi. Promosyon etkileri başarıyla tahmin edildi.</li>
  <li><strong>Operasyonel Verimlilik:</strong> Sipariş oluşturma süresi 2 haftadan 2 güne indi. Personel başına düşen stok işlemi sayısı %150 arttı. Manuel hata oranı %90 azaldı. Mağaza personeli, stok yönetimi yerine müşteri hizmetine daha fazla zaman ayırabiliyor.</li>
  <li><strong>Tedarikçi İyileşmesi:</strong> Tedarikçi ortalama teslimat süresi 5 günden 3.5 güne indi. Tedarikçi memnuniyet oranı %70'ten %92'ye yükseldi. Alternatif tedarikçi havuzu genişletildi. Fiyat karşılaştırma sayesinde satın alma maliyetleri %8 azaldı.</li>
</ul>

<p class="text-lg text-slate-700 leading-relaxed mb-6">Sistemin toplam yatırım maliyeti 950.000 TL olarak gerçekleşti. Yıllık tasarruf ve gelir artışı toplamı 11.5 milyon TL olarak hesaplandı. Yatırımın geri dönüş süresi (ROI) 30 gün olarak hesaplandı. 2. yıl sonunda toplam net fayda 22 milyon TL'yi aştı.</p>

<div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl mt-8">
<p class="text-lg text-indigo-900 font-semibold m-0">DZY Digital olarak, perakende sektöründe stok yönetimini tamamen otomatiklaştırdık. 15 mağazada %35 stok tükenme azalması ve %20 envanter maliyeti düşüşü sağladık. Sizin de stok yönetimi süreçlerinizi dönüştürmek istiyorsanız, bizimle iletişime geçin.</p>
</div>`
  }
];

export default caseStudies;
