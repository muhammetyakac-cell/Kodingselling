// Cycle 4 How-To Blog Posts - DZY Digital
// Generated: 04 Temmuz 2026

export const cycle4Howtos = [
  {
    id: 40,
    slug: 'nextjs-ile-blog-sitesi-kurulumu-adim-adim-rehber',
    title: 'Next.js ile Blog Sitesi Kurulumu: Adim Adim Rehber (2026)',
    category: 'Teknik Rehberler',
    date: '04 Temmuz 2026',
    readTime: '12 dk okuma',
    excerpt: 'Next.js 15 ile modern bir blog sitesini sifirdan nasil kuracaginizi adim adim anlatiyoruz. App Router, MDX, SEO optimizasyonu ve Vercel deploy.',
    content: `
      <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Next.js ile Blog Sitesi Kurulumu: Adim Adim Rehber (2026)</h1>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Modern web dunyasinda, hizli ve SEO dostu bir blog sitesi kurmak her zamankinden daha onemli. Next.js 15, React tabanli framework'ler arasinda one cikan en guclu cozumlerden biri. App Router ile sunulan yenilikci yonlendirme sistemi, sunucu tarafli render (SSR) ve statik site olusturma (SSG) ozellikleriyle, blog siteleri icin ideal bir platform sunuyor.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Turkiye'deki KOBILer, startup'lar ve icerik ureticileri icin Next.js, hem kullanici deneyimi hem de arama motoru siralamalari acisindan buyuk avantajlar sagliyor. Bu adim adim rehberde, Next.js 15 ile sifirdan profesyonel bir blog sitesi kurmayi, MDX ile icerik yonetimini, SEO optimizasyonunu ve Vercel'e deployment surecini detayli bir sekilde ele alacagiz.</p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Next.js 15 ve App Router Mimarisi</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Next.js 15 ile birlikte gelen App Router, dosya tabanli routing sistemini kokten degistiriyor. Pages Router'dan farkli olarak, App Router React Server Components (RSC) uzerine insa edilmis ve daha esnek bir yapi sunuyor.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">App Router'in sundugu temel avantajlar:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Sunucu Bilesenleri:</strong> React Server Components sayesinde, istemci tarafi JavaScript yuku olmadan sunucuda render edilen bilesenler olusturabilirsiniz. Bu, blog sayfalarimizin cok daha hizli yuklenmesini saglar.</li>
        <li><strong>Layout Sistemi:</strong> Paylasilan layout'lar, nested layout'lar ve template'ler ile tutarli bir kullanici arayuzu olusturmak cok kolay hale gelir.</li>
        <li><strong>Loading ve Error UI:</strong> Otomatik loading state'leri ve error boundary'leri ile kullanici deneyimini iyilestirebilirsiniz.</li>
        <li><strong>Parallel ve Intercepting Routes:</strong> Ayni sayfada birden fazla rotayi paralel olarak render edebilir veya modal benzeri gecisler olusturabilirsiniz.</li>
      </ul>

      <div class="overflow-x-auto mb-6">
        <table class="min-w-full border-collapse border border-slate-200">
          <thead class="bg-slate-50">
            <tr>
              <th class="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Ozellik</th>
              <th class="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Pages Router</th>
              <th class="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">App Router</th>
            </tr>
          </thead>
          <tbody class="text-slate-700">
            <tr>
              <td class="border border-slate-200 px-4 py-3">Bilesen Modeli</td>
              <td class="border border-slate-200 px-4 py-3">Client Components</td>
              <td class="border border-slate-200 px-4 py-3">Server + Client Components</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-3">Data Fetching</td>
              <td class="border border-slate-200 px-4 py-3">getServerSideProps / getStaticProps</td>
              <td class="border border-slate-200 px-4 py-3">Server Components + async/await</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-3">Layout Desteği</td>
              <td class="border border-slate-200 px-4 py-3">Sinirli (_app.tsx)</td>
              <td class="border border-slate-200 px-4 py-3">Nested Layouts ile tam destek</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Proje Olusturma ve Temel Yapilandirma</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Next.js projesi olusturmak icin create-next-app komutunu kullaniyoruz. Bu komut, TypeScript, ESLint, Tailwind CSS ve App Router gibi temel yapilandirmalari otomatik olarak kurar.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Yeni bir Next.js projesi olusturma adimlari:</p>

      <ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Proje Baslatma:</strong> <code>npx create-next-app@latest blog-app</code> komutunu calistirin ve TypeScript, ESLint, Tailwind CSS seceneklerini aktiflestirin</li>
        <li><strong>App Router Kullanimi:</strong> <code>app/</code> dizini altinda sayfa ve layout dosyalarimizi olusturun. Her bir klasor bir route segmentini temsil eder</li>
        <li><strong>Global Layout:</strong> <code>app/layout.tsx</code> dosyasinda meta veriler, fontlar ve global CSS yapilandirmasini tanimlayin</li>
        <li><strong>Tailwind CSS Ayarlari:</strong> <code>tailwind.config.ts</code> dosyasinda ozel renkler, fontlar ve responsive breakpoint'leri yapilandirin</li>
        <li><strong>Ortam Degiskenleri:</strong> <code>.env.local</code> dosyasinda veritabani baglantisi, API anahtarlari gibi hassas bilgileri saklayin</li>
      </ol>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">MDX ile Blog Icerigi Yonetimi</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">MDX, Markdown icerisine JSX bilesenleri gommenizi saglayan bir format. Next.js ile MDX entegrasyonu, blog yazarlarinin teknik bilgi gerektirmeden icerik uretmesine olanak tanirken, gelistiricilerin ozel React bilesenleri eklemesine de izin veriyor.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">MDX kurulumu ve kullanimi icin izlenecek adimlar:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>MDX Paketlerini Yukleme:</strong> <code>@next/mdx</code> ve <code>@mdx-js/loader</code> paketlerini projeye ekleyin</li>
        <li><strong>next.config.js Yapilandirmasi:</strong> MDX loader'ini Next.js yapilandirmasina ekleyerek <code>.mdx</code> dosyalarinin dogrudan import edilmesini saglayin</li>
        <li><strong>MDX Bilesenleri:</strong> Ozel Image, CodeBlock, Callout gibi bilesenler olusturarak blog icerigini zenginlestirin</li>
        <li><strong>Frontmatter Kullanimi:</strong> Her MDX dosyasinin basinda, title, date, category gibi meta verileri YAML formatinda tanimlayin</li>
        <li><strong>Otomatik Icerik Derleme:</strong> Blog yazilarini <code>content/</code> dizininde tutarak, build sirasinda otomatik olarak derlenmelerini saglayin</li>
      </ul>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">SEO ve Meta Veri Optimizasyonu</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Arama motoru optimizasyonu, blog sitelerinin organik trafik elde etmesi icin kritik oneme sahip. Next.js, App Router ile birlikte guclu bir SEO altyapisi sunuyor.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Next.js ile SEO optimizasyonu icin temel stratejiler:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Dinamik Meta Veriler:</strong> <code>generateMetadata</code> fonksiyonu ile her sayfa icin dinamik title, description, Open Graph ve Twitter card meta etiketleri olusturun</li>
        <li><strong>JSON-LD Yapisal Veri:</strong> Blog gonderileri icin Article schema.org yapisal verisini JSON-LD formatinda sayfaya ekleyerek zengin snippet'ler elde edin</li>
        <li><strong>Sitemap.xml Olusturma:</strong> Tum blog gonderilerini ve statik sayfalari iceren dinamik bir sitemap.xml dosyasi olusturarak arama motorlarinin sitenizi daha iyi indexlemesini saglayin</li>
        <li><strong>SSR ve SSG Stratejisi:</strong> Blog gonderileri icin Static Site Generation (SSG), ana sayfa ve kategori sayfalari icin Incremental Static Regeneration (ISR) kullanin</li>
        <li><strong>Kanonik URL Yonetimi:</strong> Her sayfa icin dogru canonical URL etiketini belirleyerek icerik kopyalama sorunlarinin onune gecin</li>
      </ul>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Performans Iyilestirmeleri</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Blog sitelerinde performans, hem kullanici deneyimi hem de SEO siralamalari icin belirleyici bir faktor. Next.js, performans optimizasyonu icin bircok yerlesik ozellik sunuyor.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Performans iyilestirme teknikleri:</p>

      <ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Gorsel Optimizasyonu:</strong> Next.js Image bileseni ile WebP formatinda otomatik gorsel optimizasyonu, lazy loading ve responsive gorseller kullanin</li>
        <li><strong>Font Optimizasyonu:</strong> <code>next/font</code> kullanarak Google Fonts'u self-host edin ve layout shift (CLS) sorununu ortadan kaldirin</li>
        <li><strong>Kod Bolme:</strong> Dinamik import'lar ile buyuk JavaScript paketlerini sayfa yuklenirken degil, ihtiyac duyuldugunda yukleyin</li>
        <li><strong>Onbellege Alma Stratejisi:</strong> ISR ile statik sayfalari belirli araliklarla yenileyerek, hem performans hem de guncellik dengesini saglayin</li>
        <li><strong>CDN ve Edge Network:</strong> Vercel'in Edge Network'u sayesinde iceriginizi dunyanin dort bir yanindaki uc sunuculardan hizla servis edin</li>
      </ol>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Vercel'e Deployment ve Surekli Dagitim</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Vercel, Next.js'in yaraticisi tarafindan gelistirilen ve Next.js uygulamalari icin en iyi deployment platformudur. Git tabanli deployment sistemi sayesinde, her kod degisikliginiz otomatik olarak derlenir ve yayinlanir.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Vercel deployment sureci adimlari:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>GitHub Baglantisi:</strong> Projenizi GitHub'a yukleyin ve Vercel hesabimizla GitHub reposunu baglayarak otomatik deployment'i aktiflestirin</li>
        <li><strong>Proje Yapilandirmasi:</strong> Vercel dashboard'unda Framework Preset olarak Next.js'i secin ve build komutlarini dogrulayin</li>
        <li><strong>Ortam Degiskenleri:</strong> Veritabani URL'si, API anahtarlari gibi hassas bilgileri Vercel Environment Variables bolumune ekleyin</li>
        <li><strong>Preview Deployment:</strong> Her pull request icin otomatik olarak preview deployment olusturarak, degisiklikleri canliya cikmadan once test edin</li>
        <li><strong>Custom Domain:</strong> Kendi alan adimizi Vercel'e baglayarak SSL sertifikasi ve DNS yonetimini otomatik hale getirin</li>
      </ul>

      <div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl mt-8">
        <p class="text-lg text-indigo-900 font-semibold m-0">DZY Digital olarak, Next.js tabanli blog ve kurumsal web uygulamalari gelistiriyoruz. Projeniz icin profesyonel bir web cozumu ariyorsaniz, ihtiyaclariniza ozel olarak tasarlanmis Next.js uygulamalari icin bizimle iletisime gecin. SEO dostu, hizli ve olceklenebilir cozumlerimizle dijital varliginizi guclendirelim.</p>
      </div>
    `
  },
  {
    id: 41,
    slug: 'supabase-ile-gercek-zamanli-uygulama-gelistirme',
    title: 'Supabase ile Gercek Zamanli Uygulama Gelistirme: Kapsamli Rehber',
    category: 'Teknik Rehberler',
    date: '04 Temmuz 2026',
    readTime: '14 dk okuma',
    excerpt: 'Supabase ile gercek zamanli uygulamalar gelistirmek icin kapsamli rehber. Realtime subscriptions, RLS guvenlik politikalari, auth entegrasyonu ve Edge Functions.',
    content: `
      <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Supabase ile Gercek Zamanli Uygulama Gelistirme: Kapsamli Rehber</h1>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Gercek zamanli uygulamalar, kullanicilarin anlik veri akisi ile etkilesime gecmesini saglayan modern web ve mobil cozumlerdir. Sohbet uygulamalari, canli bildirim sistemleri, ortak calisma araclari ve gercek zamanli dashboard'lar, bu teknolojinin en yaygin kullanim orneklerindendir. Supabase, PostgreSQL tabanli acik kaynakli bir backend platformu olarak, gercek zamanli ozellikleri en dogal haliyle sunuyor.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Turkiye'deki startup'lar ve KOBILer icin Supabase, Firebase'e alternatif olarak one cikan en onemli cozumlerden biri. Acik kaynakli yapisi, PostgreSQL'in guvenilirligi ve olceklenebilir mimarisi sayesinde, hem kucuk olcekli projeler hem de kurumsal uygulamalar icin uygun bir altyapi sunuyor.</p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Supabase ve Gercek Zamanli Teknolojisi</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Supabase, gercek zamanli iletisim icin PostgreSQL'in yerlesik replication ozelligini kullanir. Veritabaninda bir degisiklik oldugunda, bu degisiklik WebSocket protokolu uzerinden istemcilere anlik olarak iletilir.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Supabase'in gercek zamanli mimarisinin temel bilesenleri:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>PostgreSQL Replication:</strong> Veritabanindaki her INSERT, UPDATE veya DELETE islemi, Write-Ahead Log (WAL) uzerinden izlenir ve istemcilere iletilir</li>
        <li><strong>WebSocket Baglantisi:</strong> <code>@supabase/realtime-js</code> kutuphanesi ile kalici bir WebSocket baglantisi kurulur ve anlik veri akisi saglanir</li>
        <li><strong>Kanal Bazli Abonelik:</strong> Her bir gercek zamanli baglanti, belirli bir kanala abone olarak yalnizca ilgili degisiklikleri alir</li>
        <li><strong>Replication Modlari:</strong> Supabase, Logical Replication ve Broadcast olmak uzere iki farkli replication modu destekler</li>
        <li><strong>Guvenlik Entegrasyonu:</strong> RLS politikalari ile gercek zamanli veri akisinda da kullanici bazli erisim kontrolu uygulanabilir</li>
      </ul>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Proje Olusturma ve Veritabani Kurulumu</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Supabase projesi olusturmak icin supabase.com uzerinden yeni bir proje baslatabilir veya self-hosting secenegini kullanabilirsiniz. Self-hosting, ozellikle KVKK uyumlulugu gerektiren projeler icin onemli bir avantaj sunar.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Proje kurulumu icin izlenecek adimlar:</p>

      <ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Supabase Hesabi Olusturma:</strong> supabase.com adresine kaydolun ve yeni bir proje olusturun. Proje adi, veritabani sifresi ve bolge secimini yapin</li>
        <li><strong>Istemci Kutuphanesini Kurma:</strong> Projenize <code>npm install @supabase/supabase-js</code> komutu ile Supabase istemci kutuphanesini ekleyin</li>
        <li><strong>Baglanti Bilgilerini Yapilandirma:</strong> Supabase dashboard'undan alacaginiz proje URL ve anon key bilgilerini ortam degiskenlerine ekleyin</li>
        <li><strong>Veritabani Semasini Olusturma:</strong> SQL Editor uzerinden tablolarinizi, iliskileri ve indeksleri tanimlayin</li>
        <li><strong>Realtime Ozelligini Aktiflestirme:</strong> Supabase dashboard'undan Realtime bolumune giderek, gercek zamanli olarak izlenecek tablolari secin</li>
      </ol>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Realtime Subscriptions ile Canli Veri Senkronizasyonu</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Gercek zamanli abonelikler, istemci uygulamanizin veritabanindaki degisiklikleri anlik olarak almasini saglar. Supabase, bu islem icin basit ve guclu bir API sunuyor.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Realtime subscriptions kullanim senaryolari:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Canli Sohbet Uygulamasi:</strong> Mesaj tablosundaki her yeni kayit icin subscription olusturarak, kullanicilarin anlik mesajlasmasini saglayin</li>
        <li><strong>Anlik Bildirimler:</strong> Bildirimler tablosundaki degisiklikleri izleyerek, kullanicilara push notification gonderebilirsiniz</li>
        <li><strong>Ortak Calisma Araclari:</strong> Dokuman veya proje tablolarindaki degisiklikleri es zamanli olarak tum kullanicilara yansitin</li>
        <li><strong>Canli Dashboard:</strong> Satis veya analitik verilerinin anlik guncellenmesini saglayarak gercek zamanli raporlama yapin</li>
        <li><strong>Oyun Skor Tablosu:</strong> Oyuncu puanlarini ve siralamalari anlik olarak guncelleyin</li>
      </ul>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Subscription yapilandirmasinda dikkat etmeniz gereken temel parametreler: hangi tabloyu izleyeceginiz (table), hangi olay turlerini dinleyeceginiz (INSERT, UPDATE, DELETE) ve hangi filtreleri uygulayacaginiz (filter). Dogru yapilandirma ile gereksiz veri akisini onleyerek performansi artirabilirsiniz.</p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Row Level Security ile Veri Guvenligi</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Row Level Security (RLS), Supabase'in en guclu guvenlik ozelliklerinden biridir. Veritabani seviyesinde uygulanan bu politikalarla, her kullanicinin yalnizca erismeye yetkili oldugu verileri gormesi saglanir.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">RLS politikalarinin temel ilkeleri:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Yetkilendirme Katmani:</strong> RLS, uygulama seviyesinde degil, veritabani seviyesinde calisir. Bu sayede hangi istemciden gelirse gelsin, guvenlik kurallari atlatilamaz</li>
        <li><strong>Politika Bazli Erisim:</strong> Her tablo icin SELECT, INSERT, UPDATE, DELETE islemlerine ozel politikalar tanimlanabilir</li>
        <li><strong>JWT Tabanli Dogrulama:</strong> Supabase Auth ile gelen JWT token'leri sayesinde, <code>auth.uid()</code> fonksiyonu ile kullanici kimligi dogrulanir</li>
        <li><strong>Multi-Tenant Destegi:</strong> Ayni veritabaninda birden fazla musteriye hizmet veren uygulamalarda, her musteri yalnizca kendi verilerini gorur</li>
        <li><strong>Realtime ile Uyumluluk:</strong> RLS politikalari, gercek zamanli subscriptions ile de tam uyumlu calisir</li>
      </ul>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Ornek bir RLS politikasi: Bir proje yonetimi uygulamasinda, kullanicilar yalnizca uyesi olduklari organizasyonlarin projelerini gorebilir. Bu politika, organizasyon uyelik tablosu uzerinden kontrol edilir ve yetkisiz erisim tamamen engellenir.</p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Authentication ve Kullanici Yonetimi</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Supabase Auth, kullanici kaydi, giris yapma, sifre sifirlama ve sosyal medya ile giris gibi temel kimlik dogrulama islemlerini out-of-the-box olarak sunar. Supabase, eposta/sifre, telefon, OAuth (Google, GitHub, Apple) ve magic link gibi bircok farkli kimlik dogrulama yontemini destekler.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Supabase Auth'in sundugu temel ozellikler:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Eposta/Sifre Kaydi:</strong> <code>signUp()</code> metodu ile kullanici kaydi olusturma ve eposta dogrulama</li>
        <li><strong>Sosyal Medya Girisi:</strong> Google, GitHub, Apple ve Diger OAuth saglayicilari ile tek tikla giris</li>
        <li><strong>Magic Link:</strong> Eposta adresine gonderilen sifresiz baglanti ile sifresiz giris yapma imkani</li>
        <li><strong>Session Yonetimi:</strong> Otomatik token yenileme, oturum suresi dolumu ve coklu cihaz yonetimi</li>
        <li><strong>Rol Tabanli Yetkilendirme:</strong> Kullanici profillerine app_metadata ekleyerek admin, moderator gibi roller tanimlama</li>
      </ul>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Edge Functions ile Sunucusuz API'ler</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Supabase Edge Functions, Deno tabanli sunucusuz fonksiyonlardir. Veritabanina yakin bir noktada calisarak, du$uk gecikmeli ve olceklenebilir API'ler olusturmanizi saglar.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Edge Functions ile yapabilecekleriniz:</p>

      <ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Webhook Isleme:</strong> Stripe, PayPal gibi u$uncu parti servislerden gelen webhook'lari Edge Functions ile isleyin</li>
        <li><strong>Veri Dogrulama:</strong> Karma$ik is kurallarini Edge Functions'da calistirarak veritabani yukunu azaltin</li>
        <li><strong>Eposta Gonderme:</strong> Resend veya SendGrid entegrasyonu ile otomatik eposta bildirimleri gonderin</li>
        <li><strong>Dosya Isleme:</strong> Supabase Storage'a yuklenen dosyalari otomatik olarak boyutlandirin veya optimize edin</li>
        <li><strong>Ucuncu Parti Entegrasyon:</strong> Harici API'lere guvenli bir $ekilde baglanarak veri senkronizasyonu yapin</li>
      </ol>

      <div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl mt-8">
        <p class="text-lg text-indigo-900 font-semibold m-0">DZY Digital olarak, Supabase tabanli gercek zamanli uygulamalar gelistiriyoruz. Sohbet uygulamalari, canli dashboard'lar, ortak calisma platformlari ve daha fazlasi icin bizimle iletisime gecin. Supabase uzmanligimizla projenizi bir ust seviyeye tasiyalim.</p>
      </div>
    `
  },
  {
    id: 42,
    slug: 'docker-ile-gelistirme-ortami-kurulumu',
    title: 'Docker ile Gelistirme Ortami Kurulumu: Kapsamli Rehber (2026)',
    category: 'Teknik Rehberler',
    date: '04 Temmuz 2026',
    readTime: '13 dk okuma',
    excerpt: 'Docker ve Docker Compose ile profesyonel bir gelistirme ortami nasil kurulur? Multi-stage build, dev/prod ortamlari ve en iyi pratikler.',
    content: `
      <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Docker ile Gelistirme Ortami Kurulumu: Kapsamli Rehber (2026)</h1>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Yazilim gelistirme surecinde karsilasilan en buyuk sorunlardan biri, "benim makinemde calisiyor" sendromudur. Farkli gelistirme ortamlari, isletim sistemi farkliliklari ve bagimliliklarin yonetimi, ekiplerin verimliligini ciddi sekilde dusurebilir. Docker, bu sorunu kokten cozen bir container teknolojisi olarak, 2026 yilinda yazilim gelistirme sureclerinin vazgecilmez bir parcasi haline geldi.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Turkiye'deki yazilim ekipleri icin Docker, hem gelistirme hem de uretim ortamlarinda tutarlilik saglamak, CI/CD sureclerini standardize etmek ve ekip ici uyumu artirmak icin kritik bir arac. Bu rehberde, Docker ile sifirdan profesyonel bir gelistirme ortami kurmayi, multi-stage build stratejilerini ve dev/prod ortam yapilandirmasini adim adim ele aliyoruz.</p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Docker ve Container Teknolojisine Giris</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Docker, uygulamalari ve onlarin bagimliliklarini hafif, tasinabilir container'lar halinde paketlemenizi saglayan bir platformdur. Geleneksel sanal makinelerden farkli olarak, Docker container'lari isletim sistemi cekirdegini paylasir, bu da onlari cok daha hafif ve hizli calistirilabilir hale getirir.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Docker'in temel avantajlari:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Tasinabilirlik:</strong> Bir Docker container'i, Docker yuklu herhangi bir ortamda ayni sekilde calisir. Gelistirme, test ve uretim ortamlari arasinda tutarlilik saglanir</li>
        <li><strong>Izolasyon:</strong> Her container kendi bagimliliklari, kutuphaneleri ve ayarlari ile izole bir ortamda calisir. Farkli projelerin bagimliliklari birbirine karismaz</li>
        <li><strong>Hizli Baslangic:</strong> Container'lar saniyeler icinde baslatilabilir ve durdurulabilir. Bu, gelistirme ve test sureclerini onemli olcude hizlandirir</li>
        <li><strong>Versiyon Kontrolu:</strong> Docker image'lari versiyonlanabilir ve bir registry'de (Docker Hub, GitHub Container Registry) saklanabilir</li>
        <li><strong>Kaynak Verimliligi:</strong> Ayni fiziksel sunucuda, sanal makinelere gore cok daha fazla sayida container calistirilabilir</li>
      </ul>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Dockerfile ile Uygulama Dockerize Etme</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Dockerfile, bir Docker image'i olusturmak icin kullanilan talimatlar dosyasidir. Uygulamanizin calismasi icin gereken tum adimlari bu dosyada tanimlarsiniz: hangi temel image'in kullanilacagi, hangi paketlerin yuklenecegi, kaynak kodun nasil kopyalanacagi ve uygulamanin nasil baslatilacagi.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Iyi bir Dockerfile yazmak icin dikkat edilmesi gerekenler:</p>

      <ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Dogru Base Image Secimi:</strong> Mumkun oldugunca kucuk ve guvenli bir base image secin. Alpine Linux tabanli image'lar, kucuk boyutlari ve guvenlik odakli yapilari ile ideal bir baslangic noktasidir</li>
        <li><strong>Katman Optimizasyonu:</strong> Her Dockerfile komutu yeni bir katman olusturur. Az degisen komutlari (paket kurulumlari) ustte, sik degisen komutlari (kaynak kodu kopyalama) altta konumlandirin</li>
        <li><strong>Cache Kullanimi:</strong> <code>COPY package.json</code> ve <code>RUN npm install</code> komutlarini, kaynak kod kopyalamadan once calistirarak Docker ozbelleginden yararlanin</li>
        <li><strong>Guvenlik En Iyi Pratikleri:</strong> Root kullanicisi yerine ozel bir kullanici olusturun, gereksiz paketleri kurmayin ve sadece gerekli portlari acin</li>
        <li><strong>Healthcheck Tanimlama:</strong> <code>HEALTHCHECK</code> talimati ile uygulamanizin durumunu duzenli olarak kontrol edin ve otomatik iyilestirme mekanizmalari kurun</li>
      </ol>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Multi-Stage Build ile Optimizasyon</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Multi-stage build, Docker image boyutunu minimize etmek icin kullanilan guclu bir tekniktir. Bir Dockerfile icinde birden fazla FROM talimati kullanarak, derleme asamasi icin gerekli araclari iceren bir stage, calistirma asamasi icin ise yalnizca calisma zamaninda ihtiyac duyulan dosyalari iceren bir stage olusturabilirsiniz.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Multi-stage build'in sagladigi avantajlar:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Kucuk Image Boyutu:</strong> Derleme araclari, test kutuphaneleri ve gecici dosyalar final image'da yer almaz. Ornegin, bir Go veya Rust uygulamasi icin image boyutu 500 MB'dan 10 MB'a kadar dusebilir</li>
        <li><strong>Guvenlik Artisi:</strong> Saldiri yuzeyi azalir cunku gereksiz paketler ve araclar image'da bulunmaz</li>
        <li><strong>Daha Hizli Deployment:</strong> Kucuk image'lar daha hizli indirilir, daha az depolama alani kaplar ve daha hizli baslatilir</li>
        <li><strong>Daha Iyi Katman Yonetimi:</strong> Her stage kendi bagimliliklarini yonetir ve sadece final stage'deki dosyalar image'a dahil edilir</li>
        <li><strong>Parallel Build Imkani:</strong> Bagimsiz stage'ler paralel olarak derlenebilir, bu da CI/CD sureclerinde zaman kazandirir</li>
      </ul>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Ornek bir multi-stage build yapisinda, ilk stage'de uygulama derlenir, ikinci stage'de testler calistirilir, ucuncu stage'de ise yalnizca derlenmis binary ve calisma zamanı bagimliliklari kopyalanir. Bu sayede final image yalnizca calismasi icin gereken en minimal dosyalari icerir.</p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Docker Compose ile Coklu Servis Mimarisi</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Modern uygulamalar genellikle birden fazla servisten olusur: bir web sunucusu, bir veritabani, bir bellek ici ozbellek (Redis), bir mesaj kuyrugu ve daha fazlasi. Docker Compose, bu servislerin tamamini tek bir yapilandirma dosyasi ile tanimlamanizi ve yonetmenizi saglar.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Docker Compose ile yonetebileceginiz tipik bir mikroservis mimarisi:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Web Uygulamasi:</strong> Next.js, React veya Vue.js frontend'i icin bir container</li>
        <li><strong>API Sunucusu:</strong> Node.js, Python veya Go backend servisi icin bir container</li>
        <li><strong>PostgreSQL Veritabani:</strong> Kalici veri depolama icin bir container</li>
        <li><strong>Redis Orbellek:</strong> Session yonetimi ve oran sinirlamasi icin bir container</li>
        <li><strong>Nginx Reverse Proxy:</strong> Yuk dengeleme ve SSL terminasyonu icin bir container</li>
      </ul>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Gelistirme ve Uretim Ortami Yapilandirmasi</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Docker Compose ile farkli ortamlar icin ayri yapilandirma dosyalari kullanmak, ortamlar arasi tutarliligi korumak icin en iyi pratiklerden biridir.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Ortam yapilandirmasinda dikkat edilmesi gereken temel ilkeler:</p>

      <ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Ortam Degiskenleri ile Yapilandirma:</strong> Baglanti bilgileri, API anahtarlari ve sifreler gibi hassas bilgileri asla Dockerfile icinde tanimlamayin. Bunun yerine .env dosyasi veya Docker Compose environment degiskenlerini kullanin</li>
        <li><strong>Dev/Prod Ayrimi:</strong> <code>docker-compose.override.yml</code> dosyasi ile gelistirme ortamina ozel yapilandirmalari (port mapping, volume mount, hot reload) ayri bir dosyada tutun</li>
        <li><strong>Volume Yonetimi:</strong> Gelistirme ortaminda bind mount ile kaynak kodun anlik senkronizasyonunu saglayin. Uretim ortaminda ise named volumes kullanarak veri kaliciligini garanti altina alin</li>
        <li><strong>Ag Yapilandirmasi:</strong> Servisler arasi iletisim icin ozel Docker network'leri olusturun ve gereksiz port acilimlarini onleyin</li>
        <li><strong>Kaynak Kisitlamalari:</strong> Her servis icin CPU ve bellek limitleri tanimlayarak kaynak tuketimini kontrol altinda tutun</li>
      </ol>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Volume, Network ve Veri Yonetimi</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Docker volume'leri ve network'leri, container'larin kalici veri depolamasi ve birbirleriyle iletisimi icin kritik oneme sahiptir.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Docker volume ve network yonetiminde en iyi pratikler:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Named Volumes:</strong> Veritabani gibi kalici veri gerektiren servisler icin named volumes kullanin. Bu volume'ler container silinse dahi verilerinizi korur</li>
        <li><strong>Bind Mounts:</strong> Gelistirme sirasinda kaynak kodu container icinde anlik guncellemek icin bind mount kullanin. Bu, kod degisikliklerini container'i yeniden baslatmadan gormenizi saglar</li>
        <li><strong>tmpfs Mounts:</strong> Gecici hassas veriler icin tmpfs mounts kullanarak verilerin sadece bellek icinde tutulmasini ve container durduruldugunda silinmesini saglayin</li>
        <li><strong>Bridge Network:</strong> Ayni Docker host uzerindeki container'lar icin bridge network kullanarak izole bir iletisim agi olusturun</li>
        <li><strong>Docker Compose Network:</strong> docker-compose ile olusturulan projelerde otomatik olarak bir network olusur ve tum servisler bu network uzerinden birbirine hostname ile erisebilir</li>
      </ul>

      <div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl mt-8">
        <p class="text-lg text-indigo-900 font-semibold m-0">DZY Digital olarak, Docker tabanli mikroservis mimarileri ve container yonetimi konusunda uzmanlik hizmeti sunuyoruz. Projeniz icin en uygun container stratejisini belirlemek, Docker image'larinizi optimize etmek ve CI/CD sureclerinizi Docker ile entegre etmek icin bizimle iletisime gecin.</p>
      </div>
    `
  },
  {
    id: 43,
    slug: 'github-actions-ile-cicd-pipeline-kurulumu',
    title: 'GitHub Actions ile CI/CD Pipeline Kurulumu: Adim Adim Rehber',
    category: 'Teknik Rehberler',
    date: '04 Temmuz 2026',
    readTime: '15 dk okuma',
    excerpt: 'GitHub Actions ile otomatik test, lint, build ve deployment pipeline'i nasil kurulur? CI/CD en iyi pratikleri, guvenlik ve ortam yonetimi.',
    content: `
      <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">GitHub Actions ile CI/CD Pipeline Kurulumu: Adim Adim Rehber</h1>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Continuous Integration (CI) ve Continuous Deployment (CD), modern yazilim gelistirme sureclerinin temel taslarindandir. Her kod degisikliginin otomatik olarak test edilmesi, derlenmesi ve uretim ortamina gönderilmesi, ekiplerin daha hizli ve guvenilir bir sekilde yazilim teslim etmesini saglar. GitHub Actions, GitHub repositorlere dogrudan entegre olan guclu bir CI/CD platformudur.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Turkiye'deki KOBILer ve startup'lar icin GitHub Actions, ucretsiz kotasi ve kapsamli is akisi pazari sayesinde CI/CD'ye baslamak icin en erisilebilir cozumlerden biridir. Bu rehberde, GitHub Actions ile sifirdan profesyonel bir CI/CD pipeline'i kurmayi, test ve lint otomasyonunu, build ve deployment stratejilerini ve guvenlik en iyi pratiklerini adim adim ele aliyoruz.</p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">CI/CD Kavramlari ve Onemi</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">CI/CD, yazilim gelistirme yasam dongusunu otomatiklestiren ve hizlandiran bir dizi pratiktir. Continuous Integration, gelistiricilerin kod degisikliklerini ana dala sik sik birlestirmesi ve her birlestirme isleminin otomatik olarak test edilmesi anlamina gelir. Continuous Deployment ise, testleri basariyla gecen her kod degisikliginin otomatik olarak uretim ortamina gonderilmesidir.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">CI/CD pipeline'inin sagladigi faydalar:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Hata Tespiti:</strong> Kod degisiklikleri ana dala birlestirilmeden once otomatik olarak test edilir, boylece hatalar erkenden tespit edilir ve duzeltilir</li>
        <li><strong>Geri Bildirim Dongusu:</strong> Gelistiriciler, kodlarinin durumu hakkinda anlik geri bildirim alir. Basarisiz testler veya lint hatalari hemen bildirilir</li>
        <li><strong>Manuel Is Yukunun Azalmasi:</strong> Test, derleme ve deployment islemleri otomatik hale getirilir, ekipler daha degerli islere odaklanabilir</li>
        <li><strong>Tutarlilik:</strong> Her deployment ayni surecten gecer, insan hatasi olasiligi ortadan kalkar ve ortamlar arasinda tutarlilik saglanir</li>
        <li><strong>Daha Hizli Teslimat:</strong> Otomatik pipeline'lar sayesinde yeni ozellikler ve hata duzeltmeleri dakikalar icinde uretime alinabilir</li>
      </ul>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">GitHub Actions Temel Kavramlar</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">GitHub Actions, is akislari (workflows) adi verilen otomatik surecleri calistirir. Her is akisi, reposunuzdaki <code>.github/workflows/</code> dizininde YAML formatinda tanimlanir ve belirli olaylar (push, pull request, schedule) tarafindan tetiklenir.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">GitHub Actions'in temel bilesenleri:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Workflow:</strong> Bir veya birden fazla job'dan olusan otomatik surec. Her reposunuzda birden fazla workflow tanimlanabilir</li>
        <li><strong>Event:</strong> Workflow'u tetikleyen olay. Ornegin: push, pull_request, issues, schedule (cron), workflow_dispatch</li>
        <li><strong>Job:</strong> Ayni runner'da calisan bir dizi step. Job'lar birbirine bagimli olabilir veya paralel calisabilir</li>
        <li><strong>Step:</strong> Bir job icindeki en kucuk calistirma birimi. Bir komut calistirir veya bir action kullanir</li>
        <li><strong>Action:</strong> GitHub Actions marketplace'ten indirilebilen, tekrar kullanilabilir kod bloklari. Ornegin: actions/checkout, actions/setup-node</li>
        <li><strong>Runner:</strong> Workflow'u calistiran sunucu. GitHub tarafindan yonetilen runner'lar veya kendi kendine barindirilan (self-hosted) runner'lar kullanilabilir</li>
      </ul>

      <div class="overflow-x-auto mb-6">
        <table class="min-w-full border-collapse border border-slate-200">
          <thead class="bg-slate-50">
            <tr>
              <th class="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Bilesen</th>
              <th class="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Gorev</th>
              <th class="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Ornek</th>
            </tr>
          </thead>
          <tbody class="text-slate-700">
            <tr>
              <td class="border border-slate-200 px-4 py-3">Workflow</td>
              <td class="border border-slate-200 px-4 py-3">Otomatik surecleri tanimlar</td>
              <td class="border border-slate-200 px-4 py-3">ci.yml, deploy.yml</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-3">Event</td>
              <td class="border border-slate-200 px-4 py-3">Tetikleyici olay</td>
              <td class="border border-slate-200 px-4 py-3">push, pull_request</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-3">Job</td>
              <td class="border border-slate-200 px-4 py-3">Is parcacigi</td>
              <td class="border border-slate-200 px-4 py-3">test, build, deploy</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-3">Step</td>
              <td class="border border-slate-200 px-4 py-3">En kucuk birim</td>
              <td class="border border-slate-200 px-4 py-3">npm test, docker build</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Test ve Lint Otomasyonu</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">CI pipeline'inin ilk ve en kritik asamasi, kod kalitesini garanti altina almaktir. Test ve lint islemlerinin otomatik hale getirilmesi, kod tabaninin saglikli kalmasini saglar ve potansiyel sorunlari erkenden tespit eder.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Test ve lint pipeline'inda bulunmasi gereken asamaer:</p>

      <ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Kod Kalite Kontrolu:</strong> ESLint (JavaScript/TypeScript), Ruff (Python) veya benzeri lint araclari ile kod standartlara uygunluk kontrolu yapin</li>
        <li><strong>Unit Testler:</strong> Jest, Vitest veya pytest ile birim testlerini calistirin. Test kapsamini raporlayarak giderek artan bir kapsama hedefleyin</li>
        <li><strong>Entegrasyon Testleri:</strong> Veritabani, harici API'ler veya diger servislerle etkilesim gerektiren entegrasyon testlerini calistirin</li>
        <li><strong>Tip Kontrolu:</strong> TypeScript veya mypy ile statik tip kontrolu yaparak tip hatalarini derleme oncesinde tespit edin</li>
        <li><strong>Guvenlik Taramasi:</strong> npm audit, pip audit veya Snyk gibi araclarla bagimlilik guvenlik aciklarini taratin</li>
      </ol>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Build ve Docker Image Pipeline'i</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Test asamasini basariyla gecen kod, build asamasina gecer. Bu asamada uygulama derlenir, Docker image'i olusturulur ve bir container registry'ye gonderilir.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Build pipeline'inda dikkat edilmesi gerekenler:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Cache Stratejisi:</strong> Docker layer caching ile tekrarli build sureclerini hizlandirin. GitHub Actions'da buildx cache'i kullanarak image katmanlarini orbellegin</li>
        <li><strong>Multi-Stage Build:</strong> Gelistirme ve uretim image'larini ayristirarak, uretim image boyutunu minimumda tutun</li>
        <li><strong>Image Tagleme:</strong> Semantic versioning (v1.2.3), git SHA (abc123) ve branch name (main, develop) gibi anlamli etiketler kullanin</li>
        <li><strong>Scan ve Sign:</strong> Docker image'larini guvenlik taramasindan gecirin ve cosign ile dijital olarak imzalayin</li>
        <li><strong>Registry Secimi:</strong> GitHub Container Registry (ghcr.io), Docker Hub veya ozel bir registry kullanarak image'lari guvenli bir sekilde saklayin</li>
      </ul>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Otomatik Deployment Stratejileri</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Deployment asaması, CI pipeline'inin son halkasidir. Bu asamada, build edilen uygulama hedef ortama (test, staging, production) gonderilir. Dogru deployment stratejisi, kesinti suresini minimize eder ve geri almayi kolaylastirir.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Populer deployment stratejileri:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Rolling Deployment:</strong> Uygulamanin yeni versiyonu, eski versiyonun yerini yavas yavas alir. Bu strateji, sifir kesinti suresi hedeflenen ortamlar icin idealdir</li>
        <li><strong>Blue-Green Deployment:</strong> Iki ozde$ ortam (blue ve green) arasinda gecis yapilir. Yeni versiyon green ortamda test edildikten sonra, trafik green ortama yonlendirilir</li>
        <li><strong>Canary Release:</strong> Yeni versiyon, kullanicilarin kucuk bir yuzdesine sunulur. Hata orani ve performans metrikleri izlenir, basarili olursa tum kullanicilara yayilir</li>
        <li><strong>GitHub Environments:</strong> Her ortam icin ayri GitHub Environment tanimlayarak, deployment onaylari ve branch korumalari ekleyin</li>
      </ul>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Secret Yonetimi ve Guvenlik</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">CI/CD pipeline'larinda API anahtarlari, veritabani sifreleri ve diger hassas bilgilerin guvenli bir sekilde yonetilmesi kritik oneme sahiptir. GitHub Actions, bu konuda cesitli guvenlik mekanizmalari sunar.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Guvenli secret yonetimi icin en iyi pratikler:</p>

      <ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Repository Secrets:</strong> API anahtarlari ve sifreler gibi hassas bilgileri GitHub repo ayarlarindan Secrets bolumune ekleyin. Bu bilgiler workflow logs'unda maskelenir</li>
        <li><strong>Environment Secrets:</strong> Farkli ortamlar icin ayri secret'lar tanimlayarak, staging ve production bilgilerinin karismasini onleyin</li>
        <li><strong>OpenID Connect (OIDC):</strong> AWS, Azure veya GCP'ye baglanmak icin uzun omurlu access key'ler yerine OIDC kullanarak gecici token'lar ile guvenligi artirin</li>
        <li><strong>En Az Yetki Prensibi:</strong> Her workflow icin sadece ihtiyac duydugu izinleri tanimlayin. Ozel GitHub token permisyonlari ile gereksiz erisimleri kisitlayin</li>
        <li><strong>Audit ve Monitoring:</strong> Workflow calisma gecmisini ve secret erisimlerini duzenli olarak denetleyin, anormal aktiviteleri tespit edin</li>
      </ol>

      <div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl mt-8">
        <p class="text-lg text-indigo-900 font-semibold m-0">DZY Digital olarak, GitHub Actions ile CI/CD pipeline'i kurulumu ve yonetimi konusunda profesyonel danismanlik hizmeti sunuyoruz. Ekiplerinizin yazilim teslimat surecini hizlandirmak, test otomasyonunu kurmak ve guvenli deployment stratejileri olusturmak icin bizimle iletisime gecin.</p>
      </div>
    `
  },
  {
    id: 44,
    slug: 'stripe-ile-odeme-sistemi-entegrasyonu',
    title: 'Stripe ile Odeme Sistemi Entegrasyonu: Kapsamli Rehber (2026)',
    category: 'Teknik Rehberler',
    date: '04 Temmuz 2026',
    readTime: '16 dk okuma',
    excerpt: 'Stripe ile web uygulamalariniza odeme sistemi nasil entegre edilir? Abonelik yonetimi, webhook, checkout session, iade ve iptal islemleri.',
    content: `
      <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Stripe ile Odeme Sistemi Entegrasyonu: Kapsamli Rehber (2026)</h1>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Online odeme sistemleri, eski ticaretin bel kemiğini olusturuyor. Turkiye'de dijital odeme hacmi 2026 yilinda 2 trilyon TL'yi asmis durumda. KOBILer ve startup'lar icin guvenli, hizli ve kullanici dostu bir odeme altyapisi kurmak, musteri guvenini kazanmak ve donusum oranlarini artirmak icin kritik oneme sahip. Stripe, dunyanin en populer online odeme platformlarindan biri olarak, bu ihtiyaca kapsamli bir cozum sunuyor.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Bu rehberde, Stripe ile web uygulamaniza odeme sistemi entegrasyonunu adim adim ele aliyoruz. Tek seferlik odemeler, abonelik yonetimi, webhook isleme, iade ve iptal surecleri gibi temel konulari, en iyi pratikler ve guvenlik onlemleri ile birlikte anlatiyoruz.</p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Stripe ve Online Odeme Altyapisi</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Stripe, gelistiriciler icin tasarlanmis modern bir odeme platformudur. PCI-DSS uyumlu altyapisi sayesinde, kart bilgileri dogrudan Stripe sunucularinda saklanir ve sizin sunucunuz hassas kredi karti verilerini hicbir zaman gormez. Bu, guvenlik yukumlulugunuzu buyuk olcude azaltir ve PCI sertifikasi ihtiyaci olmadan odeme kabul etmenizi saglar.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Stripe'in sundugu temel hizmetler:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Stripe Checkout:</strong> Hazir odeme sayfasi ile dakikalar icinde odeme almaya baslayabilirsiniz. 30'dan fazla odeme yontemini destekler</li>
        <li><strong>Stripe Elements:</strong> Ozellestirilebilir odeme formu bilesenleri ile markaniza uygun bir odeme deneyimi olusturun</li>
        <li><strong>Payment Intents:</strong> 3D Secure dogrulama, taksitli odeme ve hata yonetimi gibi karmasik odeme senaryolarini yonetir</li>
        <li><strong>Subscriptions:</strong> Yinelenen odemeler, abonelik planlari ve otomatik faturalandirma icin kapsamli API</li>
        <li><strong>Stripe Connect:</strong> Pazar yeri platformlari icin platformdaki saticilara otomatik odeme dagitimi</li>
      </ul>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Stripe Hesabi ve API Entegrasyonu</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Stripe entegrasyonuna baslamak icin once bir Stripe hesabi olusturmaniz ve API anahtarlarinizi almaniz gerekiyor. Stripe, test ve canli mod olmak uzere iki farkli ortam sunar. Test modunda, gercek para transferi yapmadan tum odeme senaryolarini test edebilirsiniz.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Stripe entegrasyonu kurulum adimlari:</p>

      <ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Stripe Hesabi Olusturma:</strong> dashboard.stripe.com adresine kaydolun ve hesabinizi aktiflestirin. Turkiye'deki banka hesaplari ve vergi bilgileri ile entegrasyonu tamamlayin</li>
        <li><strong>API Anahtarlarini Alma:</strong> Stripe dashboard'undan publishable key (baslangic anahtari) ve secret key (gizli anahtar) bilgilerini alin. Secret key'i asla istemci tarafinda kullanmayin</li>
        <li><strong>Stripe SDK Kurulumu:</strong> Backend projenize <code>npm install stripe</code> komutuyla Stripe Node.js kutuphanesini ekleyin</li>
        <li><strong>Test Ortami:</strong> Test modunda calisirken, 4242 4242 4242 4242 gibi test karti numaralarini kullanarak odeme islemlerini test edin</li>
        <li><strong>Webhook Gizli Anahtari:</strong> Stripe dashboard'undan Webhook bolumune giderek, yerel gelistirme icin CLI aracini kullanarak webhook secret key alin</li>
      </ol>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Checkout Session ile Odeme Alma</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Stripe Checkout, en hizli ve en guvenli odeme alma yontemidir. Hazir bir odeme sayfasi sunan Checkout, mobil uyumlu, erisilebilir ve 30'dan fazla odeme yontemini destekler.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Checkout Session ile odeme alma sureci:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Session Olusturma:</strong> Backend'de <code>stripe.checkout.sessions.create</code> API cagrisi ile bir odeme oturumu olusturun. Musteri bilgileri, urun detaylari ve basari/yönlendirme URL'lerini belirtin</li>
        <li><strong>Musteriye Yonlendirme:</strong> Olusturulan session'un URL'sine musteri yonlendirilir. Stripe, odeme sayfasinda kart bilgilerini guvenli bir sekilde toplar</li>
        <li><strong>Basari veya Hata Yonetimi:</strong> Odeme tamamlandiginda musteri success_url'e, iptal edildiginde cancel_url'e yonlendirilir</li>
        <li><strong>Line Items:</strong> Sepetteki her bir urunu price_id ile tanimlayin. Tek seferlik odemelerde <code>mode: payment</code>, aboneliklerde <code>mode: subscription</code> kullanin</li>
        <li><strong>Musteri Metadata:</strong> Siparis numarasi, musteri ID'si gibi ozel verileri metadata alaninda saklayarak webhook islemlerinde kullanin</li>
      </ul>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Checkout entegrasyonunda dikkat edilmesi gereken en onemli nokta, fiyat ve urun bilgilerinin asla istemci tarafinda belirlenmemesidir. Tum fiyatlandirma mantigi backend'de, tercihen veritabaninda saklanan urun kayitlarindan cekilmelidir.</p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Webhook ile Odeme Bildirimleri</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Webhook'lar, Stripe'in uygulamaniza gercek zamanli bildirim gonderdigi HTTP geri cagrimlaridir. Odeme basarili oldugunda, abonelik yenilendiginde veya bir iade gerceklestiginde Stripe, webhook endpoint'inize bir POST istegi gonderir.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Webhook yonetiminde kritik oneme sahip adimlar:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Event Dogrulama:</strong> Gelen her webhook istegini Stripe imzasi ile dogrulayarak, sadece gecerli Stripe isteklerini isleyin. Bu, sahte isteklerin engellenmesi icin en kritik guvenlik onlemidir</li>
        <li><strong>Idempotency Anahtari:</strong> Ayni olayin birden fazla kez iletilmesi durumunda, idempotency anahtari ile ayni islemin tekrarini onleyin</li>
        <li><strong>checkout.session.completed:</strong> Odemenin basariyla tamamlandigi bu olayda, musterinin siparisini onaylayin ve veritabaninda guncelleyin</li>
        <li><strong>Hata Yonetimi:</strong> Webhook isleyiciniz hata verirse, Stripe otomatik olarak tekrar dener. Bu nedenle webhook endpoint'iniz idempotent olmali ve hata durumunda dogru HTTP status kodu donmelidir</li>
        <li><strong>Yerel Test:</strong> Stripe CLI ile webhook'lari yerel ortamda test edebilir, <code>stripe listen</code> komutu ile canli olaylari dinleyebilirsiniz</li>
      </ul>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Abonelik ve Tekrarlayan Odemeler</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Abonelik modeli, SaaS urunlerinden dijital icerik platformlarina kadar bircok is modelinin temelini olusturur. Stripe Subscriptions, yinelenen odemeleri, otomatik faturalandirmayi ve abonelik yonetimini basit bir API ile sunar.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Stripe ile abonelik yonetimi icin temel konseptler:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Urun ve Fiyat Tanimlama:</strong> Stripe dashboard'unda veya API ile urun ve fiyat olusturun. Aylik, yillik veya ozel periyotlu fiyatlandirmalar tanimlayabilirsiniz</li>
        <li><strong>Musteri Olusturma:</strong> Abonelik baslatmadan once bir musteri kaydi olusturun ve odeme yontemini ekleyin. Stripe, musteri kart bilgilerini guvenli bir sekilde saklar</li>
        <li><strong>Abonelik Baslatma:</strong> Checkout Session ile musteriye abonelik planini gosterin. Odeme basarili oldugunda Stripe otomatik olarak abonelik kaydini olusturur</li>
        <li><strong>Fatura ve Odeme Hatirlatmalari:</strong> Stripe, her abonelik donemi icin otomatik fatura olusturur. Odeme basarisiz olursa, Stripe yapilandirilan araliklarla tekrar dener ve e-posta bildirimi gonderir</li>
        <li><strong>Abonelik Yonetimi:</strong> Musterilerin plan yukseltmesi, dusurmesi veya aboneliklerini iptal etmesi icin musteri portali veya API kullanabilirsiniz</li>
      </ul>

      <div class="overflow-x-auto mb-6">
        <table class="min-w-full border-collapse border border-slate-200">
          <thead class="bg-slate-50">
            <tr>
              <th class="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Ozellik</th>
              <th class="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Stripe ile</th>
              <th class="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Manuel Cozum</th>
            </tr>
          </thead>
          <tbody class="text-slate-700">
            <tr>
              <td class="border border-slate-200 px-4 py-3">Kurulum Suresi</td>
              <td class="border border-slate-200 px-4 py-3">1-2 gun</td>
              <td class="border border-slate-200 px-4 py-3">2-4 hafta</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-3">PCI Uyumlulugu</td>
              <td class="border border-slate-200 px-4 py-3">Stripe tarafindan saglanir</td>
              <td class="border border-slate-200 px-4 py-3">Kendiniz saglamalisiniz</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-3">Basarisiz Odeme Yonetimi</td>
              <td class="border border-slate-200 px-4 py-3">Otomatik (akilli tekrar deneme)</td>
              <td class="border border-slate-200 px-4 py-3">Manuel gelistirme gerekli</td>
            </tr>
            <tr>
              <td class="border border-slate-200 px-4 py-3">Desteklenen Odeme Yontemi</td>
              <td class="border border-slate-200 px-4 py-3">30+ (kart, banka, cuzdan)</td>
              <td class="border border-slate-200 px-4 py-3">Genelde sadece kart</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Iade ve Iptal Yonetimi</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Iade ve iptal yonetimi, musteri memnuniyeti ve is surekliligi icin kritik oneme sahiptir. Stripe, hem tam hem de kismi iade, abonelik iptali ve otomatik geri odeme gibi islemleri destekler.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Iade ve iptal surecinde dikkat edilmesi gerekenler:</p>

      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Tam ve Kismi Iade:</strong> Stripe API ile <code>refund</code> cagrisi yaparak odemenin tamamini veya bir kismini iade edebilirsiniz. Iade islemi genellikle 5-10 is gunu icinde musteriye yansir</li>
        <li><strong>Abonelik Iptali:</strong> Musteri abonelik iptali istediginde, <code>subscription.cancel</code> API cagrisi ile abonelik sonlandirilir. Mevcut donem sonuna kadar hizmet devam edebilir</li>
        <li><strong>Iade Nedenleri:</strong> Iade islemlerinde neden bilgisi ekleyerek, is analizi yapin ve musteri kaybi nedenlerini anlayin</li>
        <li><strong>Otomatik Iade Kurallari:</strong> Belirli kosullar altinda (ornegin, 14 gun icinde iade) otomatik iade islemini tetikleyen is kurallari tanimlayin</li>
        <li><strong>Musteri Bildirimleri:</strong> Iade ve iptal islemlerinden sonra musteriye e-posta veya SMS ile bilgi gonderin. Bu, musteri deneyimini iyilestirir</li>
      </ul>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-12 mb-4">Guvenlik ve En Iyi Pratikler</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Odeme sistemi entegrasyonunda guvenlik en ust onceliktir. Stripe, PCI-DSS Seviye 1 sertifikali bir platform olarak en ust duzey guvenlik standartlarini saglar. Ancak, kendi uygulamanizda da bazi guvenlik onlemlerini almaniz gerekir.</p>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">Odeme sistemi entegrasyonunda guvenlik icin en iyi pratikler:</p>

      <ol class="list-decimal pl-6 mb-6 text-lg text-slate-700 space-y-2">
        <li><strong>Secret Key Guvenligi:</strong> Stripe secret key'inizi asla istemci tarafinda kullanmayin. Sunucu tarafli ortam degiskenlerinde saklayin ve duzenli olarak donusturun</li>
        <li><strong>Webhook Imza Dogrulamasi:</strong> Gelen tum webhook isteklerini Stripe imzasi ile dogrulayarak, ortadaki adam saldirilarina karsi korunun</li>
        <li><strong>Rate Limiting:</strong> Stripe API cagrilari icin rate limiting uygulayarak, yanlislikla veya kotu niyetle yapilan coklu API cagrilarini engelleyin</li>
        <li><strong>Log ve Izleme:</strong> Tum odeme islemlerini detayli bir sekilde loglayin. Anormal aktiviteleri tespit etmek icin monitoring ve alert sistemi kurun</li>
        <li><strong>PCI Uyumlulugu:</strong> Kart bilgilerini asla kendi sunucunuzda saklamayin. Stripe.js ve Elements ile kart bilgileri dogrudan Stripe'a gonderilir</li>
      </ol>

      <div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl mt-8">
        <p class="text-lg text-indigo-900 font-semibold m-0">DZY Digital olarak, Stripe entegrasyonu ve online odeme sistemleri konusunda uzmanlik hizmeti sunuyoruz. E-ticaret siteniz, SaaS uygulamaniz veya mobil uygulamaniz icin guvenli ve olceklenebilir bir odeme altyapisi kurmak, abonelik yonetimini otomatiklestirmek ve odeme sureclerinizi optimize etmek icin bizimle iletisime gecin.</p>
      </div>
    `
  }
];
