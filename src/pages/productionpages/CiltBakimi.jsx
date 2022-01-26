import React from "react";

import { SayfaCiltbakimi, Yuzbakimiintro } from "../../data/pagescontents";

import { PageContent, PageSidebar } from "../../components";
import { SidebarHeader, TabData } from "../../data/pagestabcontent";

const CiltBakimi = () => {
  return (
    <>
      <PageContent
        tabdata={TabData}
        contentDataName={SayfaCiltbakimi}
        sidebarheader={SidebarHeader.production}
      />
      {/* <Container>
        <PageSidebar data={TabData}/>
        <ContentContainer>
          <ContentWrapper>
            <Header>
              <img
                src="https://image.freepik.com/free-photo/beautiful-sensual-woman-touching-her-face-isolated-white-wall-beauty-skincare-concept-spa_231208-1467.jpg"
                alt=""
              />
              <h1>
                Cilt Bakımı <p>ASPAR ILAC URETIM BOLUMU</p>
              </h1>
            </Header>

            <MainContent>
              <p className="entry">
                Bu sayfa, Aspar Ilac <span>Cilt Bakımı</span> uretim bilgilerine
                ve ilgili kaynaklara genel bir bakistir.
              </p>

              <p className="p_bio">
                Cildimiz olmadan kim olduğumuzu söyleyemeyiz. Bizi dış dünyadan
                korur, vücudumuzun sıcaklığını korur ve sevdiğimiz insanlarla
                etkileşim içinde olmamıza yardımcı olur. Fakat aynı zamanda
                oldukça hassastır ve sağlıklı kalmak için bakım ve ilgiye
                ihtiyaç duyar.
              </p>

              <ul className="main_menu">
                <h3>Genel Bakis</h3>
                <Link to="#" className="sp_link">
                  <li className="menu_items">Yuz Bakimi</li>
                </Link>
                <Link to="#" className="sp_link">
                  <li className="menu_items">Vucut Bakimi</li>
                </Link>
                <Link to="#" className="sp_link">
                  <li className="menu_items">Sac Bakimi</li>
                </Link>
              </ul>

              <div className="contents">
                <Link to="#" className="sp_link">
                  <h3>
                    <div className="linkicon">
                      <FaLink />
                    </div>
                    Yuz Bakimi
                  </h3>
                </Link>
                <div className="p_image">
                  <img
                    src="https://image.freepik.com/free-photo/photo-surprised-european-woman-washes-face-with-foam-gel-wants-have-refreshed-well-cared-skin-stands-topless-wears-wrapped-towel-wet-hair-poses-against-pink-background-free-space-aside_273609-32158.jpg"
                    alt=""
                  />
                  <p>
                    Cildin ve özellikle de yüzünüzün sağlıklı görünmesi
                    açısından çok önemlidir bakım yapmak. Çünkü cilt sağlığını
                    bozan birçok etken sayabiliriz sizler için. Bunlar arasında
                    da günlük yaşam biçimleri, dengesiz beslenme ve cilt için
                    gerekli olan gıdaları tüketmeme, yetersiz sıvı tüketimi,
                    stres ve sürekli makyaj yapma gibi durumlar baş etmenlerdir.
                    Bunlara maruz kalan cilt, bir süre sonrasında yıpranmış ve
                    kuru bir görünüme sahip olacaktır. Cildin bu görüntüsü ise
                    insanları yaşından da daha olgun gösterebilir. Aynı zamanda
                    da sürekli bir yorgunluk izlenimi de verir. İşte bu sebepten
                    dolayı cilt bakımı her daim önemlilik arz eden bir süreci
                    ortaya çıkarmalıdır.
                  </p>
                </div>

                <br />
                <br />
                <Link to="#" className="sp_link">
                  <h3>
                    <div className="linkicon">
                      <FaLink />
                    </div>
                    Vucut Bakimi
                  </h3>
                </Link>

                <p>
                  Vücut bakımı, belli ürünlerin kullanılarak vücutta oluşan
                  çatlaklıkların giderilerek sağlıklı bir görünüm
                  kazandırılmasıdır. Hem erkekler hemde kadınlar vücut bakımı
                  için gerekli olan serumlar, losyonlar ve kürler yardımı ile
                  gerçekleştirmektedir. Vücut bakımları aynı zamanda farklı
                  ürünlerin bir araya gelmesiyle de kullanılabilir. Losyonlar,
                  kremler vücut bakımı için kullanılanlar arasında sayılabilir.
                  Bu ürünleri kadınlar eczanelerden veya kozmetik mağazalarından
                  temin edebilirler. Vücut bakımını haftanın belli günlerinde
                  gerçekleştirdiklerinde vücudun doğal dengesinin kazanmasına ve
                  iyi bir görünüm elde etmesi amaçlanmaktadır.
                </p>
                <br />
                <br />
                <Link to="#" className="sp_link">
                  <h3>
                    <div className="linkicon">
                      <FaLink />
                    </div>
                    Sac Bakimi
                  </h3>
                </Link>

                <p>
                  Saç bakımı, en değerli olan aksesuarlarımızdan saçlarımızı
                  korumak ve canlı tutmak demektir. İyi görünmenin temelinde
                  bakımlı saçlara sahip olmak yatar. Bilmem biliyor musunuz ama
                  saçlarınız o kadar hassastır ki, yanlış bakım ürünleri
                  nedeniyle küsebilir, uzamayı reddedebilir, cansızlaşır, mat
                  bir görünümü olur. Evet şaka değil. Gerçekten saçlarınızı iyi
                  tanımazsanız, ihtiyaçlarını yeterince karşılamazsanız,
                  bilinçsizce işlem uygularsanız, yıpranmaktan kendini alamayan,
                  hırpani saçlar elde etmiş olursunuz. Bunu da isteyeceğinizi
                  hiç sanmam. Dolayısıyla yapılabilecek en iyi ve en önemli şey,
                  saçlarınızı, cilt tipinizi iyi bilmek ve onlara uygun işlemler
                  yapmak olacaktır. Saç bakımı denildiğinde aklınıza hemen
                  kuaföre gitmek ve saçlarınıza bir sürü işlem uygulatmak
                  gelmesin. Zira saç bakımı, doğru şampuan seçimi ile başlar.
                  Şampuanları, saç kremleri, saç maskeleri, özel bakım kürleri
                  takip eder. Bakımlı saçlar bununla da kalmaz,
                  şekillendiriciler, yoğunlaştırıcı ürünler, dökülme önleyici
                  ürünler ve saç yağları ile de desteklenmelidir.
                </p>
              </div>
              <div className="tips">
                <h4>İpucu</h4>
                <p>
                  Bu sayfa baslica kategoriler hakkinda kisa bilgiler icerir.
                  Daha fazla bilgi edinmek icin <span>sol</span> taraftaki
                  menuden detayli bilgilere ulasabilirsiniz.
                </p>
              </div>

              <div className="contents">
                <Link to="#" className="sp_link">
                  <h3>
                    <div className="linkicon">
                      <FaLink />
                    </div>
                    Fason Uretimi
                  </h3>
                </Link>

                <p>
                  Firmamıza fason ürün üretimi için müracaat ettiğinizde,
                  öncelikle isteklerinizi ve sizin için önemli olan noktalar
                  konusunda anlaşma sağlamamız gerekiyor. Bu amaçla, diğer
                  süreçler öncesinde ilk yapacağımız şey sizinle samimi bir
                  toplantı gerçekleştirerek üretimin tüm aşamalarında nasıl bir
                  yol izlememiz gerekeceğine karar vermek olacak. Analiz
                  sürecinde, istekleriniz ile tecrübemizi birleştirip izlenmesi
                  gereken en doğru yolu buslacağımıza inanıyoruz. Süreç
                  başlangıcında neyi, nasıl yapacağımız hususunda genel bir
                  çerçeve çizmiş olacağız. Süreç başlangıcında aşağıdaki
                  aşamaları izleyeceğiz;
                </p>
                <ul className="main_menu">
                  <Link to="#" className="sp_link">
                    <li className="menu_items">Ar-Ge Destegi</li>
                  </Link>
                  <Link to="#" className="sp_link">
                    <li className="menu_items">Formulasyon Destegi</li>
                  </Link>
                  <Link to="#" className="sp_link">
                    <li className="menu_items">
                      Marka, Ruhsat ve Bakanlik Belgeleri
                    </li>
                  </Link>
                  <Link to="#" className="sp_link">
                    <li className="menu_items">Grafik Tasarim Destegi</li>
                  </Link>
                  <Link to="#" className="sp_link">
                    <li className="menu_items">Ambalaj Destegi</li>
                  </Link>
                  <Link to="#" className="sp_link">
                    <li className="menu_items">Depo Destegi</li>
                  </Link>
                  <Link to="#" className="sp_link">
                    <li className="menu_items">Danismanlik Hizmetleri</li>
                  </Link>
                </ul>
              </div>
              <div className="form_table">
                <Link to="#" className="sp_link">
                  <h4>Formulasyon</h4>
                </Link>

                <div className="table_grid">
                  <p>Tablet</p>
                  <p>Efervesan Tablet</p>
                  <p>Kapsul</p>
                  <p>Flakon</p>
                  <p>Ampul</p>
                  <p>Krem</p>
                  <p>Merhem</p>
                  <p>Sampuan</p>
                  <p>Paket</p>
                  <p>Toz</p>
                  <p>Surup</p>
                  <p>Losyon</p>
                </div>
              </div>
            </MainContent>
            <Footer />
          </ContentWrapper>
        </ContentContainer>
      </Container> */}
    </>
  );
};

export default CiltBakimi;
