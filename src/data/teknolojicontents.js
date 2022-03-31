import { ImLab } from "react-icons/im";
import { GiMedicines, GiTestTubes } from "react-icons/gi";
import { FaHandHoldingWater, FaWarehouse } from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";
import {
  BsFillCameraVideoFill,
  BsSaveFill,
  BsJournalMedical,
} from "react-icons/bs";

import headermakinalar from '../assets/headermakinalar.jpg';
import headerlaboratory from '../assets/headerlaboratory.jpg';
;


export const Tekbaslangic = {
  headerimage:
    "https://image.freepik.com/free-photo/biometric-technology-background-with-fingerprint-scanning-system-virtual-screen-digital-remix_53876-104197.jpg",
  headerimagealt: "asparilac",
  headertext: "Teknoloji | İnovasyon",
  headerbckcolor: "#000B17",
  txtcolor: "white",
  headeralttext: "ASPAR ILAÇ TEKNOLOJİ BÖLÜMÜ",

  parag1: "Bu sayfa, Aspar Ilac ",
  parag1_span: "Teknoloji bölümü ve İnovasyon",
  parag1_2: " bilgi ve kaynaklarına genel bir bakistir.",
  parag2:
    "İstanbul Beylikdüzünde 5600 m2 alana kurulmuş olan ve yüksek teknolojiyle donatılmış kompleksimizde tüm süreçler elektronik sistemlerle takip edilmektedir.",

  secondparagbr: "br_show",
  parag3:
    "Sağlık Otoriteleri tarafından onaylanmış olan tesisimiz, Halal Sertifikası, Kalite Yönetim Sistemi İSO 9001, Gıda Güvenliği Yönetim Sistemi ISO 22000, GMP İSO 22716 ve TR34 sertifikalarına sahiptir.",
  parag3_span: "",
  parag3_class: " parag_show",
  parag4:
    "Tesisimiz son Teknolojilerle donatılmış yüksek performansa sahip üretim ve etiket ambalaj paketleme makineleri kullanılmaktadır. Aspar İlaç olarak, kendi marka ürünlerimizi üretmenin yanı sıra farklı ulusal ve uluslararası firmalarada üretim hizmeti vermekteyiz.",
  parag4_span: " ",
  parag4_class: "parag_show",

  table1_class: "table_show",
  table1_headertext: "Aspar İlaç Üretim Tesisimiz",
  table1_items: [
    {
      icons: <ImLab />,
      title: "LABORATUVAR",
      text: "AR-GE ve Formülasyon çalışmaları kapsamında Aspar İlaç Laboratuvarımız hizmetinizdedir.",
    },
    {
      icons: <GiMedicines />,
      title: "MAKİNALAR",
      text: "İlaç ve Kozmetik üretimi için gerekli olan en son teknolojide tüm makinalarımız envanterimizde yer almaktadır",
    },
    {
      icons: <BsJournalMedical />,

      title: "KALİTE KONTROL",
      text: "Üretim bantlarından çıkan tüm ürünleri Uzman Kimyagerler tarafından dikkatli ve titiz şekilde kalite kontrolu yapılmaktadır",
    },
    {
      icons: <FaWarehouse />,

      title: "AKILLI DEPO",
      text: "Üretimi sonlanan siparişleri teslim etmek üzere, kolileri barkodlanmış şekilde ister uzun vadede veya hemen teslim için 2 farklı depolama alanlarında saklarız",
    },
    {
      icons: <GiTestTubes />,

      title: "TEST CİHAZLARI",
      text: "AR-GE çalışması zamanı üzerinde çalışılan formüller çeşitli Laboratuvar test cihazları ile test edilmektedir",
    },
    {
      icons: <FaHandHoldingWater />,

      title: "SU ARITMA SİSTEMİ",
      text: "Üretimde kullanmak üzere, kendi bünyemizde kurulu olan Su Arıtma cihazlarımızlı kullanarak suyun en saf halini kullanmaktayız",
    },
    {
      icons: <FcAdvertising />,

      title: "REKLAM & TASARIM",
      text: "Ulusal ve uluslararası firmalar için üretimini yaptığımız marka ve ürünlere, istek doğrultusunda Reklam & Tasarım çalışmalarını yapmaktayız",
    },
    {
      icons: <BsFillCameraVideoFill />,

      title: "AKILLI BİNA KORUMA SİSTEMİ",
      text: "Beylikdüzü Beysan özel sanayi sitesi içerisinde kurulmuş olan Aspar İlaç hem site güvenliği ve tesisimizin özel güvenliği tarafından vede akıllı güvenlik sistemi tarafından korunmaktadır ",
    },
    {
      icons: <BsSaveFill />,

      title: "AKILLI İÇERİK KAYIT SİSTEMİ",
      text: "Tarafımızca yapılmış olan AR-GE ve formülasyon çalışmalarını, kendi bünyemizde kurulu olan siber güvenliği sağlanmış özel serverler kullanılmaktadır",
    },
  ],

  shortmenu_class: "short_menu",
  shortmenuheader: "Teknoloji Başlangıç Sayfa İçeriği",
  shortmenulinksitems: [
    {
      shortmenuitem: "Makinalar ve Kapasiteler",
      shortmenulink: "#makinalarvekapasiteler",
    },
    {
      shortmenuitem: "Laboratuvar",
      shortmenulink: "#laboratuvar",
    },
    {
      shortmenuitem: "Reklam & Tasarım",
      shortmenulink: "#reklamvetasarim",
    },
    {
      shortmenuitem: "Smart Depo",
      shortmenulink: "#smartdepo",
    },
  ],

  //alertyellow
  alertyellow: "alert_table_yellow",
  alertyellowheader: "Duyuru",
  alertyellowcontents: [
    {
      alert_item:
        "Bu sayfa başlıca kategoriler hakkında kısa bilgiler içermektedir. Daha fazla bilgi edinmek için sol taraftaki ana menüden detaylı bilgilere ulaşabilirsiniz.",
    },
  ],

  // description
  contents: [
    {
      contentheadertext: "Makinalar ve Kapasiteler",
      contentheaderlink: "#",
      contentid:"makinalarvekapasiteler",
      contentdescrip:
        "Üretimde kullandığımız makinalar tamamıyla paslanmaz çelikten oluşur bundan dolayı yüksek derecede hijyenik bir üretim ve paketleme sağlamaktadır. Makinalarımız tam otomatik bir düzenekten oluşur, üretim ve paketleme çok hızlı gerçekleşmektedir.",
    },
    {
      contentheadertext: "Laboratuvar",
      contentid: "laboratuvar",
      contentheaderlink: "#",
      contentdescrip: "Üretim sonrası çıkan ürünlerin belli değerlerde olması gerekiyor. GMP standartlarına göre fabrikaya gelen hammaddelerin test edilip, izlenebilirlik numarası verilir ve çıkan son ürünlerde belli testlere tabii tutulmaktadır. Laboratuvarımızdaki cihazlarla nem tayini, toz ve sıvı yoğunluğu tespiti, tablet kırılganlığı tespiti, tablet ve kapsül çözünme testi, tablet aşınma testi ve sıkılaştırılmış toz yoğunluğuna bakılmaktadır.",
    },
    {
      contentheadertext: "Reklam & Tasarım",
      contentid: "reklamvetasarim",
      contentheaderlink: "#",
      contentdescrip: "lorem",
    },
    {
      contentheadertext: "Smart Depo",
      contentid: "smartdepo",
      contentheaderlink: "#",
      contentdescrip: "lorem",
    },
  ],

  alert_classblue: "alert_table_blue",
  alert_header: "Formulasyon",
  alert_itemcontents: [
    {
      alert_item: "tablet",
    },
    {
      alert_item: "surup",
    },
    {
      alert_item: "toz",
    },
    {
      alert_item: "krem",
    },
    {
      alert_item: "losyon",
    },
  ],
};
export const Tekmakinalar = {
  headerimage: headermakinalar ,
  headerimagealt: "ilacuretimmakinalar",
  headertext: "Üretim Makinaları",
  headerbckcolor: "#000B17",
  txtcolor: "white",
  headeralttext: "ASPAR ILAÇ TEKNOLOJİ BÖLÜMÜ",
  mobiletxtcolor: "white",
  mobilebckcolor : "black",

  parag1: "Bu sayfa, Aspar Ilac ",
  parag1_span: "Üretim makinaları ve Kapasiteleri",
  parag1_2: " hakkında gerekli bilgi ve kaynakları içermektedir.",
  parag2:
    "",

  secondparagbr: "br_show",
  parag3:
    "Üretimde kullandığımız makinalar tamamıyla paslanmaz çelikten oluşur bundan dolayı yüksek derecede hijyenik bir üretim ve paketleme sağlamaktadır. Makinalarımız tam otomatik bir düzenekten oluşur, üretim ve paketleme çok hızlı gerçekleşmektedir.",
  parag3_span: "",
  parag3_class: " parag_show",
  parag4:
    "Tesisimiz son Teknolojilerle donatılmış yüksek performansa sahip üretim ve etiket ambalaj paketleme makineleri kullanılmaktadır. Aspar İlaç olarak, kendi marka ürünlerimizi üretmenin yanı sıra farklı ulusal ve uluslararası firmalarada üretim hizmeti vermekteyiz.",
  parag4_span: " ",
  parag4_class: "parag_hide",





  table1_class: "table_hide",
  table1_headertext: "Aspar İlaç Üretim Tesisimiz",
  table1_items: [
    {
      icons: <ImLab />,
      title: "LABORATUVAR",
      text: "AR-GE ve Formülasyon çalışmaları kapsamında Aspar İlaç Laboratuvarımız hizmetinizdedir.",
    },
    {
      icons: <GiMedicines />,
      title: "MAKİNALAR",
      text: "İlaç ve Kozmetik üretimi için gerekli olan en son teknolojide tüm makinalarımız envanterimizde yer almaktadır",
    },
    {
      icons: <BsJournalMedical />,

      title: "KALİTE KONTROL",
      text: "Üretim bantlarından çıkan tüm ürünleri Uzman Kimyagerler tarafından dikkatli ve titiz şekilde kalite kontrolu yapılmaktadır",
    },
    {
      icons: <FaWarehouse />,

      title: "AKILLI DEPO",
      text: "Üretimi sonlanan siparişleri teslim etmek üzere, kolileri barkodlanmış şekilde ister uzun vadede veya hemen teslim için 2 farklı depolama alanlarında saklarız",
    },
    {
      icons: <GiTestTubes />,

      title: "TEST CİHAZLARI",
      text: "AR-GE çalışması zamanı üzerinde çalışılan formüller çeşitli Laboratuvar test cihazları ile test edilmektedir",
    },
    {
      icons: <FaHandHoldingWater />,

      title: "SU ARITMA SİSTEMİ",
      text: "Üretimde kullanmak üzere, kendi bünyemizde kurulu olan Su Arıtma cihazlarımızlı kullanarak suyun en saf halini kullanmaktayız",
    },
    {
      icons: <FcAdvertising />,

      title: "REKLAM & TASARIM",
      text: "Ulusal ve uluslararası firmalar için üretimini yaptığımız marka ve ürünlere, istek doğrultusunda Reklam & Tasarım çalışmalarını yapmaktayız",
    },
    {
      icons: <BsFillCameraVideoFill />,

      title: "AKILLI BİNA KORUMA SİSTEMİ",
      text: "Beylikdüzü Beysan özel sanayi sitesi içerisinde kurulmuş olan Aspar İlaç hem site güvenliği ve tesisimizin özel güvenliği tarafından vede akıllı güvenlik sistemi tarafından korunmaktadır ",
    },
    {
      icons: <BsSaveFill />,

      title: "AKILLI İÇERİK KAYIT SİSTEMİ",
      text: "Tarafımızca yapılmış olan AR-GE ve formülasyon çalışmalarını, kendi bünyemizde kurulu olan siber güvenliği sağlanmış özel serverler kullanılmaktadır",
    },
  ],

  shortmenu_class: "short_menu",
  shortmenuheader: "Teknoloji Başlangıç Sayfa İçeriği",
  shortmenulinksitems: [
    {
      shortmenuitem: "Kapsül Dolum Makinası",
      shortmenulink: "#kapsuldolummakinasi",
    },
    {
      shortmenuitem: "Granül ve Toz Karıştırıcı",
      shortmenulink: "#granultozkaristirici",
    },
    {
      shortmenuitem: "Yarı Otomatik Shrink Paketleme Makinası",
      shortmenulink: "#yariotomatikshrink",
    },
    {
      shortmenuitem: "Granül Paketleme Makinası",
      shortmenulink: "#granulpaketleme",
    },
    {
      shortmenuitem: "Çok Zımbalı Tablet Pres Makinası",
      shortmenulink: "#cokzimbalitabletmakinasi",
    },
    {
      shortmenuitem: "Kapsül Parlatma Makinası",
      shortmenulink: "#kapsulparlatmamakinesi",
    },
    {
      shortmenuitem: "Kapsül Sayma Makinası",
      shortmenulink: "#kapsulsaymamakinasi",
    },
    {
      shortmenuitem: "Krem ve Sıvı Karıştırma Kazanı",
      shortmenulink: "#kremvesivikaristirma",
    },
  ],

  //alertyellow
  alertyellow: "alert_none",
  alertyellowheader: "Duyuru",
  alertyellowcontents: [
    {
      alert_item:
        "Bu sayfa başlıca kategoriler hakkında kısa bilgiler içermektedir. Daha fazla bilgi edinmek için sol taraftaki ana menüden detaylı bilgilere ulaşabilirsiniz.",
    },
  ],

  // description
  contents: [
    {
      contentheadertext: "Kapsül Dolum Makinası",
      contentid: "kapsuldolummakinasi",
      contentheaderlink: "#",
      contentdescrip:
        "Gıda takviyesi, ilaç, prebiotik, hayvansal ilaçlar, ekstraktlar vb. kapsül çeşitlerinin üretimini yapabiliriz. Tek personel ile saatte 60 000 kapsül üretim kapasitesine ulaşabiliriz. Otomatik kapsül dolum makinası, dolum bölümündeki hız ayarları sayesinde, hassas dozajlama yapabiliriz. Birçok kapsül boyutunda ve farklı gramaj ayarlarında çalışabiliriz. (000, 00, 0, 1, 2, 3, 4, 5)",
    },
    {
      contentheadertext: "Granül ve Toz Karıştırıcı",
      contentid: "granultozkaristirici",
      contentheaderlink: "#",
      contentdescrip: "Ribon tipi karıştırıcı ile toz-toz, toz-granül, granül-granül ve rutubetlendirme karışımlar yapılabilmekteyiz. Ribon tipi granül ve toz karıştırıcı üç yönlü helezon sistemine sahiptir. Bu sistem sayesinde aynı anda karışımı yapılan ürünü 3 yöne birden çekerek tam homojen karışımlar yapabiliyoruz. Karışımın tamamlanması için geçen süre benzer karıştırıcılara göre çok daha kısa sürer. Bu sayede üretim performansı artar. Makinanın kapasitesi 500 litredir. ",
    },
    {
      contentheadertext: "Yarı Otomatik Shrink Paketleme Makinası",
      contentid: "yariotomatikshrink",
      contentheaderlink: "#",
      contentdescrip: "Ürünlerinizi shirinklenmiş olarak paketleyebiliriz kapsül parlatma. Uzun mesafeli gönderimlere uygun olarak paketleme yapabiliriz.",
    },
    {
      contentheadertext: "Granül Paketleme Makinası",
      contentid: "granulpaketleme",
      contentheaderlink: "#",
      contentdescrip: "-	1g-200g arası hassas toz ve sıvı dolum yapabiliyoruz. Dakikada 40 adet basabiliyoruz. Makine paslanmaz kromdan oluştuğu için dolumlar son derece hijyenik ortamda dolum ve paketleme yapılmaktadır. Ayarlanabilir yapıştırma çeneleri sayesinde, ince ve kalın birçok ambalaj çeşidinde sorunsuzca çalışabiliriz.",
    },
    {
      contentheadertext: "Çok Zımbalı Tablet Pres Makinası",
      contentid: "cokzimbalitabletmakinasi",
      contentheaderlink: "#",
      contentdescrip: "Hijyenik üretim ortamına uygun olarak tasarlanan bu makina, başta gıda olmak üzere birçok ürün çeşidinde kullanmaktayız. Gezer kafa tablet pres makinası çok zımbalı, GMP şartlarına uyum sağlayan bir üretim ortamı oluştururuz. Makinanın tüm yüzeyleri paslanmaz materyalden üretilmiştir bundan dolayı hijyenik bir üretim sağlamaktayız. 18mm-13mm tablet aralığında 151200adet/saat üretim yapmaktayız. Kalıplarını değiştirerek farklı şekil ve gramajlarda müşteri isteğine göre tablet basabilmekteyiz.",
    },
    {
      contentheadertext: "Kapsül Parlatma Makinası",
      contentid: "kapsulparlatmamakinesi",
      contentheaderlink: "#",
      contentdescrip: "Üretimden çıkan kapsüller parlatılır ve blistere girer. 5000 adet/dakika kapsül parlatmaktayız.",
    },
    {
      contentheadertext: "Kapsül Sayma Makinası",
      contentid: "kapsulsaymamakinasi",
      contentheaderlink: "#",
      contentdescrip: "Ürününüz ambalaj şekli şişe ise kapsül ve tablet çok kısa sürede el değmeden sayılabilmektedir.",
    },
    {
      contentheadertext: "Krem ve Sıvı Karıştırma Kazanı",
      contentid: "kremvesivikaristirma",
      contentheaderlink: "#",
      contentdescrip: "Sıvı karıştırma tank çeşitlerimiz(1 ton, 1.5 ton, 0,5 ton) tam homojen karışım yapma özelliğine sahiptir. Tanklarımız paslanmaz çelikten oluştuğu için ürünlerimiz çok hijyenik şekilde yapılmaktadır.",
    },
  ],

  alert_classblue: "alert_table_blue",
  alert_header: "Formulasyon",
  alert_itemcontents: [
    {
      alert_item: "tablet",
    },
    {
      alert_item: "surup",
    },
    {
      alert_item: "toz",
    },
    {
      alert_item: "krem",
    },
    {
      alert_item: "losyon",
    },
  ],
};
export const Teklaboratuvar = {
  headerimage: headerlaboratory,
  headerimagealt: "asparilaclaboratuvar",
  headertext: "Laboratuvar | Arge | Formülasyon",
  headerbckcolor: "#000B17",
  txtcolor: "white",
  headeralttext: "ASPAR ILAÇ TEKNOLOJİ BÖLÜMÜ",
  mobiletxtcolor: "white",
  mobilebckcolor : "black",

  parag1: "Bu sayfa, Aspar Ilac ",
  parag1_span: "Laboratuvar | Ar-Ge | Formülasyon",
  parag1_2: " ile ilgili gerekli bilgi ve kaynak içermektedir.",
  parag2:
    "Kozmetik, gıda takviyesi, ilaç ve diğer sektörler sürekli bir değişim içindedir; Yeni ürünler ve hammaddeler çıkmaktadır. Aspar ilaç olarak düşüncemiz; Ar-Ge bir firmaya ayakta tutan, firmayı ileri götüren ve büyüten önemli bir basamaktır. Aspar İlaç ailesine katıldığınızda Ar-Ge ekibimiz sizin istekleriniz doğrultusunda Avrupa standartlarına uygun, etkinlikleri test edilmiş, tahriş etmeyen ürünler oluşturur. Ürünlerimizde kullandığımız hammaddeler, izlenebilirlik kodlara olan, analiz sertifikalarına sahip ve menşei gelişmiş ülkeler olan firmalardan tedarik etmekteyiz. ",

  secondparagbr: "br_show",
  parag3:
    "Aspar İlaç çatısı altındaki uzman ekip tarafından tren olan ürünler, müşterilerimizin istekleri doğrultusu tasarlanır, etkinlikleri ve stabiliteleri test edilerek üretime hazır hale getirilir. Formülleriniz gelişmiş laboratuvarlarımızda, yönetmeliklere ve Avrupa standartlarına uygun şekilde tasarların. ",
  parag3_span: "",
  parag3_class: " parag_show",
  parag4:
    "Formülleriniz gelişmiş laboratuvarlarımızda, yönetmeliklere ve Avrupa standartlarına uygun şekilde tasarlarız. Oluşturulan formüllerle numuneler yapar ve stabilite testlerini uygularız. Formül oluşturma işleminiz tamamlandıktan sonra sizin için başvuruda bulunuruz. Son olarak Ar-Ge ekibimize bilgileri aktarır, kısa zamanda üretimi gerçekleştiririz. Aynı zamanda   olan formülleriniz geliştirilir ve iyileştirilir.",
  parag4_span: " ",
  parag4_class: "parag_show",

  table1_class: "table_hide",
  table1_headertext: "Aspar İlaç Üretim Tesisimiz",
  table1_items: [
    {
      icons: <ImLab />,
      title: "LABORATUVAR",
      text: "AR-GE ve Formülasyon çalışmaları kapsamında Aspar İlaç Laboratuvarımız hizmetinizdedir.",
    },
    {
      icons: <GiMedicines />,
      title: "MAKİNALAR",
      text: "İlaç ve Kozmetik üretimi için gerekli olan en son teknolojide tüm makinalarımız envanterimizde yer almaktadır",
    },
    {
      icons: <BsJournalMedical />,

      title: "KALİTE KONTROL",
      text: "Üretim bantlarından çıkan tüm ürünleri Uzman Kimyagerler tarafından dikkatli ve titiz şekilde kalite kontrolu yapılmaktadır",
    },
    {
      icons: <FaWarehouse />,

      title: "AKILLI DEPO",
      text: "Üretimi sonlanan siparişleri teslim etmek üzere, kolileri barkodlanmış şekilde ister uzun vadede veya hemen teslim için 2 farklı depolama alanlarında saklarız",
    },
    {
      icons: <GiTestTubes />,

      title: "TEST CİHAZLARI",
      text: "AR-GE çalışması zamanı üzerinde çalışılan formüller çeşitli Laboratuvar test cihazları ile test edilmektedir",
    },
    {
      icons: <FaHandHoldingWater />,

      title: "SU ARITMA SİSTEMİ",
      text: "Üretimde kullanmak üzere, kendi bünyemizde kurulu olan Su Arıtma cihazlarımızlı kullanarak suyun en saf halini kullanmaktayız",
    },
    {
      icons: <FcAdvertising />,

      title: "REKLAM & TASARIM",
      text: "Ulusal ve uluslararası firmalar için üretimini yaptığımız marka ve ürünlere, istek doğrultusunda Reklam & Tasarım çalışmalarını yapmaktayız",
    },
    {
      icons: <BsFillCameraVideoFill />,

      title: "AKILLI BİNA KORUMA SİSTEMİ",
      text: "Beylikdüzü Beysan özel sanayi sitesi içerisinde kurulmuş olan Aspar İlaç hem site güvenliği ve tesisimizin özel güvenliği tarafından vede akıllı güvenlik sistemi tarafından korunmaktadır ",
    },
    {
      icons: <BsSaveFill />,

      title: "AKILLI İÇERİK KAYIT SİSTEMİ",
      text: "Tarafımızca yapılmış olan AR-GE ve formülasyon çalışmalarını, kendi bünyemizde kurulu olan siber güvenliği sağlanmış özel serverler kullanılmaktadır",
    },
  ],

  shortmenu_class: "short_menu",
  shortmenuheader: "Teknoloji Başlangıç Sayfa İçeriği",
  shortmenulinksitems: [
    {
      shortmenuitem: "Kalite Kontrol",
      shortmenulink: "#kalitekontrol",
    },
    {
      shortmenuitem: "Tablet Sıkıştırılabilirliği (Friabilite) Test Cihazı",
      shortmenulink: "#tabletsikilastirilabilirligi",
    },
    {
      shortmenuitem: "Tablet ve kapsül çözünme testi",
      shortmenulink: "#tabletkapsulcozunme",
    },
    {
      shortmenuitem: "Tablet Sertlik Cihazı",
      shortmenulink: "#tabletsertlik",
    },
    {
      shortmenuitem: "Nem Tayin Cihazı",
      shortmenulink: "#nemtayin",
    },
    {
      shortmenuitem: "Tozlarda ve sıvılarda yoğunluk tayini",
      shortmenulink: "#tozlardasivilardayogunluk",
    },
    {
      shortmenuitem: "Tozlarda sıkılaştırılmış (Tapped) yoğunluk testi",
      shortmenulink: "#tozlardasikilastirilmis",
    },
    {
      shortmenuitem: "Disintegrasyon Cihazı",
      shortmenulink: "#disintegrasyon",
    },
  ],

  //alertyellow
  alertyellow: "alert_none",
  alertyellowheader: "Duyuru",
  alertyellowcontents: [
    {
      alert_item:
        "Bu sayfa başlıca kategoriler hakkında kısa bilgiler içermektedir. Daha fazla bilgi edinmek için sol taraftaki ana menüden detaylı bilgilere ulaşabilirsiniz.",
    },
  ],

  // description
  contents: [
    {
      contentheadertext: "Kalite Kontrol",
      contentid: "kalitekontrol",
      contentheaderlink: "#",
      contentdescrip:
        "Üretim sonrası çıkan ürünlerin belli değerlerde olması gerekiyor. GMP standartlarına göre fabrikaya gelen hammaddelerin test edilip, izlenebilirlik numarası verilir ve çıkan son ürünlerde belli testlere tabii tutulmaktadır. Laboratuvarımızdaki cihazlarla nem tayini, toz ve sıvı yoğunluğu tespiti, tablet kırılganlığı tespiti, tablet ve kapsül çözünme testi, tablet aşınma testi ve sıkılaştırılmış toz yoğunluğuna bakılmaktadır.",
    },
    {
      contentheadertext: "Tablet Sıkıştırılabilirliği (Friabilite) Test Cihazı",
      contentid: "tabletsikilastirilabilirligi",
      contentheaderlink: "#",
      contentdescrip: "Farmakopiye uygun olarak ayarlanmış test cihazıdır. Numune tablet basıldıktan sonra gevrekliği ve aşınma testi uygulanır eğer uygunsa üretime geçilir.",
    },
    {
      contentheadertext: "Tablet ve kapsül çözünme testi",
      contentid: "tabletkapsulcozunme",
      contentheaderlink: "#",
      contentdescrip: "Tablet ve kapsüllerin üretiminden sonra alınan numune, mide ortamını özelliklerini içeren cihazlarda çözünme süresini belirler.",
    },
    {
      contentheadertext: "Tablet Sertlik Cihazı",
      contentid: "tabletsertlik",
      contentheaderlink: "#",
      contentdescrip: "Tabletler çok sert olmasını durumunda çözünmesi zorlaşabilir.",
    },
    {
      contentheadertext: "Nem Tayin Cihazı",
      contentid: "nemtayin",
      contentheaderlink: "#",
      contentdescrip: "Üretimden çıkan üründe nem tayini yapılır nem çok yüksek olmaması lazım.",
    },
    {
      contentheadertext: "Tozlarda ve sıvılarda yoğunluk tayini",
      contentid: "tozlardasivilardayogunluk",
      contentheaderlink: "#",
      contentdescrip: "Sıvılarda yoğunluk piknometre, dansimetre kullanılmaktadır. Tozlarda hata payı çok az mezürler kullanılmaktadır.",
    },
    {
      contentheadertext: "Tozlarda sıkılaştırılmış (Tapped) yoğunluk testi",
      contentid: "tozlardasikilastirilmis",
      contentheaderlink: "#",
      contentdescrip: "Tozların arasındaki mikro düzeydeki boşluklar olmadan yoğunluğu ölçen cihazdır.",
    },
    {
      contentheadertext: "Disintegrasyon Cihazı",
      contentid: "disintegrasyon",
      contentheaderlink: "#",
      contentdescrip: "Tablet, kapsül ve diğer katı dozaj formlarının parçalanma sürelerinin manuel olarak test edilmesi içinkullanmaktayız.",
    },
  ],

  alert_classblue: "alert_table_blue",
  alert_header: "Formulasyon",
  alert_itemcontents: [
    {
      alert_item: "tablet",
    },
    {
      alert_item: "surup",
    },
    {
      alert_item: "toz",
    },
    {
      alert_item: "krem",
    },
    {
      alert_item: "losyon",
    },
  ],
};

export const Baslangic = {
  headerimage:
    "https://image.freepik.com/free-photo/experiments-chemistry-lab-conducting-experiment-laboratory_155003-1401.jpg",
  headerimagealt: "Aspar İlaç Üretım",
  headertext: "Hadi Başlayalım",
  headerbckcolor: "#7FD5E5",

  parag1: "Bu sayfa, Aspar Ilaç ",
  parag1_span: "Üretim bilgileri",
  parag1_2: " ve ilgili kaynaklara genel bir bakıştır.",
  parag2:
    "Aspar İlaç - Gıda Takviyesi, Kozmetik & Dermokozmetik ve Kişisel Bakım ürünleri üreticisi firmadır. En son mevzuatlar doğrultusunda bildirim çalışmalarını sizin adınıza tamamlıyoruz. İsterseniz markanızla fason üretim hizmetimizden faydalanabilirsiniz. İsterseniz de size en başından bir marka oluşturabiliriz.",

  secondparagbr: "br_hide",
  parag3: "",
  parag3_span: " ",
  parag3_class: " ",
  parag4: " ",
  parag4_span: " ",
  parag4_class: "parag_hide",

  shortmenu_class: "short_menu",
  shortmenuheader: "Başlangıç Sayfa İçeriği",
  shortmenulinksitems: [
    {
      shortmenuitem: "Kozmetik & Dermokozmetik",
      shortmenulink: "#",
      shortmenuscroll: "kozmetikdermokozmetik",
    },
    {
      shortmenuitem: "Gıda Takviyesi",
      shortmenulink: "#",
      shortmenuscroll: "gidatakviyesi",
    },

    {
      shortmenuitem: "Fason Üretimi",
      shortmenulink: "#",
      shortmenuscroll: "kozmetikdermokozmetik",
    },
  ],

  //alertyellow
  alertyellow: "alert_table_yellow",
  alertyellowheader: "Duyuru",
  alertyellowcontents: [
    {
      alert_item:
        "Bu sayfa başlıca kategoriler hakkında kısa bilgiler içermektedir. Daha fazla bilgi edinmek için sol taraftaki ana menüden detaylı bilgilere ulaşabilirsiniz.",
    },
  ],

  // description
  contents: [
    {
      contentheadertext: "Kozmetik & Dermokozmetik",
      contentid: "kozmetikdermokozmetik",
      contentheaderlink: "#",
      contentdescrip:
        "Dermokozmetik, cilt, saç ve vücut bakımı için kullanılan, ilaç teknikleri kullanılarak geliştirilmiş, üretilmiş ve dermatolojik klinik testlerden geçirilmiş cilt ürünleridir. Dermokozmetik kelimesi, dermatoloji tıp dalı ile kozmetik kelimelerinin birleşiminden oluşan bir terimdir.  Genel anlamı ile belirli cilt problemlerinin düzeltilmesinde, cildin korunmasında, cilt konforunun sağlanmasında, yaşlılık belirtileri gibi sorunların önlenmesinde ya da hafifletilmesinde kullanılan ürünleri ifade eder. Aynı zamanda saç ve vücut için kullanılan dermokozmetik ürünler de vardır. Avrupa ülkelerinde Dermokozmetik ( Dermocosmetic) terimi kullanılırken, Amerika ülkelerinde ise farmasötik yani ilaç kelimesi ile kozmetik kelimelerinin birleşiminden yola çıkarak kozmosötik (Cosmoceutics  ve ya Cosmoceutical) terimi tercih edilir.  Dermokozmetik ürünler, Krem, losyon tonik, Cilt serumu, Temizleme jeli, köpük, Şampuan , Jel , katı pudra, Maske şeklinde olabilir. Bunun yanı sıra yağ karışımları da sık sık kullanılan ürünler arasındadır.",
    },
    {
      contentheadertext: "Gıda Takviyesi",
      contentid: "gidatakviyesi",
      contentheaderlink: "#",
      contentdescrip:
        "Diyet veya beslenme takviyeleri ismi de verilen gıda takviyelerinin ardında yatan fikir, yeterli miktarlarda tüketilmeyen besinlerin tedarik edilmesidir. Gıda takviyeleri, hap, tablet, kapsül, sıvı, vb. formunda sağlanan vitaminler, mineraller, aminoasitler, yağ asitleri ve diğer maddeler olabilir. Besin desteği (suplemantasyon), bireye yönelik bir uygulamadır. Besin destekleri, vitamin, mineral, posa, aminoasitler, fitokimyasallar, otlar (herbal) ve botanik ürünleri kapsar. Supleman olarak sunulan besin öğelerinin çoğu, günlük diyette doğal olarak bulunmaktadır.",
    },
  ],

  alert_classblue: "alert_table_blue",
  alert_header: "Farmasotik Şekiller",
  alert_itemcontents: [
    {
      alert_item: "Tablet",
    },
    {
      alert_item: "Efervesan tablet",
    },
    {
      alert_item: "Kapsül",
    },
    {
      alert_item: "Flakon",
    },
    {
      alert_item: "Krem",
    },
    {
      alert_item: "Merhem",
    },
    {
      alert_item: "Şampuan",
    },
    {
      alert_item: "Paket",
    },
    {
      alert_item: "Toz",
    },
    {
      alert_item: "Transdermal sistem",
    },
    {
      alert_item: "İnhaler sistem",
    },
    {
      alert_item: "Süspansiyon",
    },
    {
      alert_item: "Şurup",
    },
    {
      alert_item: "Losyon",
    },
    {
      alert_item: "Damla",
    },
    {
      alert_item: "Sprey",
    },
    {
      alert_item: "Ovül",
    },
    {
      alert_item: "Serum",
    },
  ],
};
