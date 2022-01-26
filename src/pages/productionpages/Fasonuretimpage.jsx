import React from "react";
import styled from "styled-components";
import { Pagecontentintro, PageSidebar } from "../../components";
import { SidebarHeader, TabData } from "../../data/pagestabcontent";

const Fasonuretimpage = () => {
  return (
    <>
      <PageContainer>
        <PageSidebar tabdata={TabData} sidebarheader={SidebarHeader.production}/>
        <ContentWrapper>
          <HeaderContainer>
            <img
              src="https://image.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg"
              alt="asparilac"
            />
            <h1>
              Fason Üretimi | Private Label <p>ASPAR ILAC URETIM BOLUMU</p>
            </h1>
          </HeaderContainer>

          <IntroContainer>
            <div className="introtext_div">
              <p className="parag_1">
                Bu sayfa, Aspar İlaç Kozmetik{" "}
                <span className="parag1_span">
                  Fason Üretim | Private Label{" "}
                </span>{" "}
                süreci ile ilgili gerekli bilgi ve kaynakları içermektedir.{" "}
              </p>
              <div className="parag_div">
                <h2 className="parag_2">
                  Türkiyenin ulusal ve uluslararası İlaç ve Kozmetik Ar-Ge
                  Formülasyon Merkezi
                </h2>
                <div className="parag_imagediv">
                  <img
                    src="https://image.freepik.com/free-photo/woman-scientist-is-looking-beaker-with-blue-substance-inside-lab-colleagues-working-back_482257-31023.jpg"
                    alt=""
                  />
                  <p className="parag_3">
                    10 yılı aşkın tecrübe ve deneyimi ile Aspar İlaç değişen ve
                    gelişen ihtiyaçlara cevap verebilmek amacıyla en yüksek
                    teknolojide Ar-Ge Merkezi Formülasyon ve Metot Geliştirme
                    yöntemleriyle analitik geliştirme yeteneği ve altyapısına
                    sahiptir.
                  </p>
                </div>
              </div>
            </div>

            <div className="intro_shortmenu">
              <div className="privatelabel_div">
                <h3>Fason Üretimi | Private Label</h3>
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
                  aşamaları izleyeceğiz
                </p>
                <div className="sections">
                  <div className="items">
                    <h3>01</h3>
                    <p>Ar-Ge Formülasyon</p>
                  </div>
                  <div className="items">
                    <h3>02</h3>
                    <p>Marka, Ruhsat Belgeleri</p>
                  </div>
                  <div className="items">
                    <h3>03</h3>
                    <p>
                      Grafik
                      <br /> Tasarım
                    </p>
                  </div>
                  <div className="items">
                    <h3>04</h3>
                    <p>
                      Depo <br /> Hizmeti
                    </p>
                  </div>
                </div>
              </div>
              <h3>Başlangıç Sayfa İçeriği</h3>
              <ul className="intro_ul">
                <li className="intro_ulitems">Ar-Ge Desteği</li>
                <li className="intro_ulitems">Formülasyon Desteği</li>
                <li className="intro_ulitems">
                  Marka, Ruhsat ve Bakanlık Belgeleri
                </li>
                <li className="intro_ulitems">Grafik Tasarım Desteği</li>
                <li className="intro_ulitems">Ambalaj Desteği</li>
                <li className="intro_ulitems">Depo Desteği</li>
                <li className="intro_ulitems">Danismanlik Hizmetleri</li>
              </ul>
            </div>

            <TableContainer>
              <div className="grid_headercontainer">
                <h2 className="grid_headertext">
                  Ürünlerde Kullandığımız Formülasyon Teknolojileri ve Dozaj
                  Formları
                </h2>
              </div>

              <div className="grid_container">
                <div className="grid_items">
                  <h1>01</h1>
                  <h3>Tablet</h3>
                </div>
                <div className="grid_items">
                  <h1>02</h1>
                  <h3>Efervesan tablet</h3>
                </div>
                <div className="grid_items">
                  <h1>03</h1>
                  <h3>Kapsül</h3>
                </div>
                <div className="grid_items">
                  <h1>04</h1>
                  <h3>Flakon</h3>
                </div>
                <div className="grid_items">
                  <h1>05</h1>
                  <h3>Krem</h3>
                </div>
                <div className="grid_items">
                  <h1>06</h1>
                  <h3>Merhem</h3>
                </div>
                <div className="grid_items">
                  <h1>07</h1>
                  <h3>Şampuan</h3>
                </div>
                <div className="grid_items">
                  <h1>08</h1>
                  <h3>Paket</h3>
                </div>
                <div className="grid_items">
                  <h1>09</h1>
                  <h3>Toz Dolum</h3>
                </div>
                <div className="grid_items">
                  <h1>10</h1>
                  <h3>Transdermal sistem</h3>
                </div>
                <div className="grid_items">
                  <h1>11</h1>
                  <h3>İnhaler sistem</h3>
                </div>

                <div className="grid_items">
                  <h1>12</h1>
                  <h3>Şurup</h3>
                </div>
                <div className="grid_items">
                  <h1>13</h1>
                  <h3>Losyon</h3>
                </div>
                <div className="grid_items">
                  <h1>14</h1>
                  <h3>Damla</h3>
                </div>
                <div className="grid_items">
                  <h1>15</h1>
                  <h3>Sprey</h3>
                </div>
                <div className="grid_items">
                  <h1>16</h1>
                  <h3>Sıvı Dolum</h3>
                </div>
                <div className="grid_items">
                  <h1>17</h1>
                  <h3>Serum</h3>
                </div>
                <div className="grid_items">
                  <h1>18</h1>
                  <h3>Saşet Dolum</h3>
                </div>
              </div>
            </TableContainer>
            <ContentDescrip></ContentDescrip>
          </IntroContainer>
        </ContentWrapper>
      </PageContainer>
    </>
  );
};

export default Fasonuretimpage;

const Contents = () => {
  return <></>;
};

const ContentDescrip = styled.div`
  padding: 0 30px 0 30px;
`;

const IntroContainer = styled.div`
  margin: 50px 0 50px 0;
  .introtext_div {
    padding: 0 30px 0 30px;

    .parag_div {
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      /* background-color: #fbfbfb */
    }

    .parag_imagediv {
      display: flex;
      /* margin-top: 10px; */
      align-items: center;

      img {
        width: 50%;
      }

      p {
        padding: 0 10px 0 10px;
        text-align: center;
      }
    }

    .parag_1 {
      font-size: 24px;
      font-weight: 300;
      color: #6d6d6d;
      margin-bottom: 30px;
      .parag1_span {
        color: red;
        font-style: italic;
        font-weight: 400;
      }
    }

    .parag_2 {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 20px;
      font-weight: 500;
      line-height: 3;
      color: black;

      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    .parag_3 {
      font-size: 20px;
      font-weight: 400;
      line-height: 1.7;
      color: black;
      /* text-transform: capitalize; */
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  }
  .intro_shortmenu {
    /* padding: 0 30px 0 30px; */
    margin-top: 25px;
    margin-left: 30px;
    margin-right: 30px;

    .privatelabel_div {
      margin-top: 50px;
      margin-bottom: 20px;


      .sections {
        margin: 30px 0 50px 0;
        padding: 20px 0 20px 0;
        display: flex;
        justify-content: space-evenly;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        background-color: #bada55;
        .items {
          background-color: #bada55;
          width: 150px;
          height: 150px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 10px 0 10px 0;
          border-radius: 20px;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          transition: 0.3s ease;

          &:hover {
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          }

          p {
            color: white;
            font-weight: 500;
            font-size: 20px;
            text-align: center;
          }
          h3 {
            font-size: 25px;
          }
        }
      }
    }

    ul {
      margin-top: 10px;
      li {
        background-color: #ccf4ff;
        width: fit-content;
        margin-top: 5px;
        margin-left: 20px;
      }
    }
  }
`;
const TableContainer = styled.div`
  width: 100%;
  background-color: #1e7de0;
  margin-top: 50px;
  margin-bottom: 100px;

  .grid_headercontainer {
    display: flex;
    align-items: center;
    justify-content: center;

    .grid_headertext {
      color: white;
      text-transform: uppercase;
      margin-top: 50px;
    }
  }

  .grid_container {
    padding: 50px;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;

    .grid_items {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 250px;
      border: 0.5px solid white;
      color: white;
    }
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  background-color: white;
  border-radius: 3px;
  overflow: auto;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;

  h1 {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    font-size: 40px;

    p {
      font-size: small;
      color: black;
    }
  }
`;
