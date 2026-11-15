/* PureScan Cosmetics · marketing landing copy (en / tr)
   Metinler uygulamanın ekranlarından ve mağaza açıklamasından alınır.
   window.I18N olarak açılır; app.js (data-i18n) ve scene.js tüketir. */
(function () {
  const EN = {
    meta: {
      title: `PureScan Cosmetics · Know what you put on your skin`,
      desc: `Scan a cosmetic ingredient list and understand every ingredient, its risk level and your skin match in seconds. Manage your routine with Cabinet, compatibility checks and the Guru assistant.`,
    },
    nav: { features: `Features`, how: `How it works`, faq: `FAQ`, download: `Download` },
    hero: {
      badge: `Cosmetic ingredient scanner`,
      title: `Know what you <span class="hl">really</span> put on your skin.`,
      desc: `Photograph an ingredient list, scan a barcode or paste the text. PureScan explains every ingredient, flags what needs attention and checks the match with your skin type.`,
      note: `Free on Google Play · iOS version coming soon`,
      scroll: `Scroll`,
    },
    marquee: `INGREDIENT SCAN · BARCODE · RISK LEVELS · FRAGRANCE ALLERGENS · SKIN MATCH · CABINET · COMPATIBILITY CHECK · GURU ASSISTANT · HISTORY`,
    features: {
      eyebrow: `Features`,
      heading: `Everything you need to <span class="hl">read a label</span>.`,
      sub: `From a tiny ingredient list to a clear picture, in seconds.`,
      scan: {
        tag: `Scan`,
        title: `Three ways to scan.`,
        desc: `Take a photo of the ingredient list on the package, read the product barcode, or paste the ingredients as text. The analysis starts right away.`,
        c1: `Ingredient photo`, c2: `Barcode`, c3: `Text`,
      },
      analysis: {
        tag: `Analyze`,
        title: `A clear result for every product.`,
        desc: `One score, a plain-language summary and a short list of what deserves attention, such as fragrance allergens, plus a skin match based on your skin type.`,
        c1: `Product score`, c2: `Points of attention`, c3: `Skin match`,
      },
      library: {
        tag: `Learn`,
        title: `Every ingredient, sorted by risk.`,
        desc: `Browse the full list of a product, search by name and filter by risk, allergens or pregnancy notes. Each ingredient shows its role, such as moisturizer, preservative or fragrance.`,
        c1: `Risk groups`, c2: `Search & filter`, c3: `Ingredient roles`,
      },
      cabinet: {
        tag: `Organize`,
        title: `Your cabinet, in one place.`,
        desc: `Save the products you use, see their scores at a glance and keep your routine organized. Tap one to reopen the full analysis.`,
        c1: `Saved products`, c2: `Scores at a glance`, c3: `Quick access`,
      },
      compatibility: {
        tag: `Check`,
        title: `See how your products work together.`,
        desc: `Select products from your cabinet and run a compatibility check. PureScan lists the ingredients that may clash, the active ingredients in each product and a short note for your routine.`,
        c1: `Conflicting ingredients`, c2: `Active ingredients`, c3: `Routine notes`,
      },
      guru: {
        tag: `Ask`,
        title: `Guru, your ingredient assistant.`,
        desc: `Ask about a product from your cabinet, for example which ingredients are fragrance-derived, and get an answer written around that product. Guru can make mistakes and does not give medical advice.`,
        c1: `Product-aware`, c2: `Plain language`, c3: `Voice playback`,
      },
    },
    how: {
      eyebrow: `How it works`,
      heading: `From the shelf to a clear answer <span class="hl">in seconds</span>.`,
      s1t: `Scan`, s1d: `Photograph the ingredient list, scan the barcode or paste the text.`,
      s2t: `Analyze`, s2d: `AI reads the list and explains each ingredient and its risk level.`,
      s3t: `Decide`, s3d: `See the score and the points of attention, save it to your cabinet and compare.`,
    },
    soon: `COMING SOON`,
    download: {
      eyebrow: `Get the app`,
      heading: `Read your next label tonight.`,
      desc: `Free on Google Play. PureScan PRO unlocks unlimited scanning. The iOS version is on its way.`,
      note: `PureScan is not a medical device. AI analyses are for information only.`,
    },
    faq: {
      eyebrow: `FAQ`,
      heading: `Questions, answered.`,
      items: [
        { q: `How do I scan a product?`, a: `<p>Three ways, right on the home screen:</p><ul><li><strong>Ingredient photo:</strong> photograph the ingredient list on the package and the text is read automatically.</li><li><strong>Barcode:</strong> scan the product barcode.</li><li><strong>Text:</strong> paste an ingredient list manually.</li></ul><p>After scanning, the score, points of attention and each ingredient appear on one screen.</p>` },
        { q: `Is it free? What does PRO add?`, a: `<p>You can scan and analyze for free. <strong>PureScan PRO</strong> adds unlimited scanning.</p>` },
        { q: `What is the skin match?`, a: `<p>The skin match compares a product's ingredients with the skin type you set in the app. You can optionally refine it with a selfie. The result is a cosmetic guide, not a diagnosis.</p>` },
        { q: `Is this medical advice?`, a: `<p>No. PureScan is not a medical device and does not provide medical advice. It makes the information on cosmetic labels easier to read so the choice is yours. For skin concerns, please consult a professional.</p>` },
        { q: `How do I delete my data or get support?`, a: `<p>In the app, open <strong>Settings</strong> to manage or delete your data and account. For anything else, email <strong>info@septimuslab.com</strong>.</p>` },
      ],
    },
    footer: {
      tagline: `Know what you put on your skin.`,
      product: `Product`, legal: `Legal`, company: `Company`,
      privacy: `Privacy Policy`, terms: `Terms of Use`, contact: `Contact`,
      rights: `All rights reserved.`,
      disclaimer: `PureScan Cosmetics does not provide medical advice. AI-powered analyses are for informational purposes only.`,
    },
  };

  const TR = {
    meta: {
      title: `PureScan Cosmetics · Cildine ne sürdüğünü bil`,
      desc: `Kozmetik ürünün içerik listesini tara; her bileşeni, risk seviyesini ve cilt uyumunu saniyeler içinde öğren. Kabin, uyum kontrolü ve Guru asistanıyla rutinini tek yerden yönet.`,
    },
    nav: { features: `Özellikler`, how: `Nasıl çalışır`, faq: `SSS`, download: `İndir` },
    hero: {
      badge: `Kozmetik içerik tarayıcı`,
      title: `Cildine ne sürdüğünü <span class="hl">gerçekten</span> bil.`,
      desc: `İçerik listesinin fotoğrafını çek, barkodu okut ya da metni yapıştır. PureScan her bileşeni açıklar, dikkat edilecekleri işaretler ve cilt tipinle uyumuna bakar.`,
      note: `Google Play'de ücretsiz · iOS sürümü yakında`,
      scroll: `Kaydır`,
    },
    marquee: `İÇERİK TARAMA · BARKOD · RİSK SEVİYELERİ · KOKU ALERJENLERİ · CİLT UYUMU · KABİN · UYUM KONTROLÜ · GURU ASİSTAN · GEÇMİŞ`,
    features: {
      eyebrow: `Özellikler`,
      heading: `Bir etiketi <span class="hl">okumak</span> için gereken her şey.`,
      sub: `Küçücük bir içerik listesinden net bir tabloya, saniyeler içinde.`,
      scan: {
        tag: `Tara`,
        title: `Taramanın üç yolu.`,
        desc: `Ambalajdaki içerik listesinin fotoğrafını çek, ürünün barkodunu okut ya da içerikleri metin olarak yapıştır. Analiz hemen başlar.`,
        c1: `İçerik fotoğrafı`, c2: `Barkod`, c3: `Metin`,
      },
      analysis: {
        tag: `Analiz et`,
        title: `Her ürün için net bir sonuç.`,
        desc: `Tek bir puan, sade bir özet ve koku alerjenleri gibi dikkat edilmesi gerekenlerin kısa listesi. Cilt tipine göre cilt uyumu da yanında.`,
        c1: `Ürün puanı`, c2: `Dikkat edilecekler`, c3: `Cilt uyumu`,
      },
      library: {
        tag: `Öğren`,
        title: `Her bileşen, risk grubuna göre.`,
        desc: `Ürünün tüm içerik listesine göz at, ada göre ara; risk, alerjen ya da gebelik notuna göre filtrele. Her bileşenin yanında rolü yazar: nemlendirici, koruyucu, koku verici gibi.`,
        c1: `Risk grupları`, c2: `Ara ve filtrele`, c3: `Bileşen rolleri`,
      },
      cabinet: {
        tag: `Düzenle`,
        title: `Kabinin tek yerde.`,
        desc: `Kullandığın ürünleri kaydet, puanlarını bir bakışta gör, rutinini düzenli tut. Birine dokunup tam analizi yeniden aç.`,
        c1: `Kayıtlı ürünler`, c2: `Bir bakışta puan`, c3: `Hızlı erişim`,
      },
      compatibility: {
        tag: `Kontrol et`,
        title: `Ürünlerin birlikte nasıl çalıştığını gör.`,
        desc: `Kabinden ürünleri seç, uyum kontrolü çalıştır. PureScan çakışabilecek içerikleri, her üründeki aktif içerikleri ve rutinin için kısa bir not listeler.`,
        c1: `Çakışan içerikler`, c2: `Aktif içerikler`, c3: `Rutin notları`,
      },
      guru: {
        tag: `Sor`,
        title: `Guru, içerik asistanın.`,
        desc: `Kabinindeki bir ürünü seçip sor: örneğin hangi içerikler koku kaynaklı? Cevap o ürüne göre yazılır. Guru hata yapabilir ve tıbbi tavsiye vermez.`,
        c1: `Ürünü bilir`, c2: `Sade dil`, c3: `Sesli dinleme`,
      },
    },
    how: {
      eyebrow: `Nasıl çalışır`,
      heading: `Raftan net bir cevaba <span class="hl">saniyeler</span> içinde.`,
      s1t: `Tara`, s1d: `İçerik listesinin fotoğrafını çek, barkodu okut ya da metni yapıştır.`,
      s2t: `Analiz et`, s2d: `Yapay zeka listeyi okur, her bileşeni ve risk seviyesini açıklar.`,
      s3t: `Karar ver`, s3d: `Puanı ve dikkat edilecekleri gör, kabinine kaydet, ürünleri karşılaştır.`,
    },
    soon: `YAKINDA`,
    download: {
      eyebrow: `Uygulamayı edin`,
      heading: `Bir sonraki etiketi bu akşam oku.`,
      desc: `Google Play'de ücretsiz. PureScan PRO sınırsız tarama açar. iOS sürümü yolda.`,
      note: `PureScan tıbbi bir cihaz değildir. Yapay zeka analizleri yalnızca bilgilendirme amaçlıdır.`,
    },
    faq: {
      eyebrow: `SSS`,
      heading: `Sorular, cevaplar.`,
      items: [
        { q: `Bir ürünü nasıl tarıyorum?`, a: `<p>Ana ekranda üç yol var:</p><ul><li><strong>İçerik fotoğrafı:</strong> ambalajdaki içerik listesinin fotoğrafını çek, metin otomatik okunur.</li><li><strong>Barkod:</strong> ürünün barkodunu okut.</li><li><strong>Metin:</strong> içerik listesini elle yapıştır.</li></ul><p>Taramadan sonra puan, dikkat edilecekler ve her bileşen tek ekranda görünür.</p>` },
        { q: `Ücretsiz mi? PRO ne ekliyor?`, a: `<p>Ücretsiz tarayıp analiz edebilirsin. <strong>PureScan PRO</strong> sınırsız tarama ekler.</p>` },
        { q: `Cilt uyumu nedir?`, a: `<p>Cilt uyumu, ürünün içeriklerini uygulamada belirlediğin cilt tipiyle karşılaştırır. İstersen selfie ile inceltebilirsin. Sonuç kozmetik bir rehberdir, teşhis değildir.</p>` },
        { q: `Bu tıbbi tavsiye mi?`, a: `<p>Hayır. PureScan tıbbi bir cihaz değildir ve tıbbi tavsiye vermez. Kozmetik etiketlerdeki bilgiyi okunur hale getirir, seçim senindir. Cilt sorunları için bir uzmana danış.</p>` },
        { q: `Verilerimi nasıl silerim, destek nasıl alırım?`, a: `<p>Uygulamada <strong>Ayarlar</strong> bölümünden verilerini ve hesabını yönetebilir ya da silebilirsin. Diğer her konu için <strong>info@septimuslab.com</strong> adresine yaz.</p>` },
      ],
    },
    footer: {
      tagline: `Cildine ne sürdüğünü bil.`,
      product: `Ürün`, legal: `Yasal`, company: `Şirket`,
      privacy: `Gizlilik Politikası`, terms: `Kullanım Koşulları`, contact: `İletişim`,
      rights: `Tüm hakları saklıdır.`,
      disclaimer: `PureScan Cosmetics tıbbi tavsiye vermez. Yapay zeka destekli analizler yalnızca bilgilendirme amaçlıdır.`,
    },
  };

  window.I18N = { en: EN, tr: TR };
})();
