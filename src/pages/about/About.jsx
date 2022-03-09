import React from "react";
import styled from "styled-components";
import { Navbar } from "../../components";
import { GiWorld } from "react-icons/gi";
import asparilacdisgorsel from "../../assets/asparilacdisgorsel.jpg";
import sertifika9001 from "../../assets/sertifika9001.jpg";
import sertifika22000 from "../../assets/sertifika22000.jpg";
import sertifika22716 from "../../assets/sertifika22716.jpg";
import sertifikahalal from "../../assets/sertifikahalal.jpg";
import sertifikatr34 from "../../assets/sertifikatr34.jpg";
import world2 from "../../assets/world2.jpg";

const About = () => {
  return (
    <>
      <AboutContainer />
    </>
  );
};

export default About;

const AboutContainer = () => {
  return (
    <>
      <Container>
        <Navbar />
        <ContainerWrapper>
          <div className="left_side_container">
            <img src={asparilacdisgorsel} alt="" />
          </div>
          <div className="right_side_container">
            <div className="brand_name">
              <div className="brand_text">
                <p className="p_1">Aspar İlaç</p>
                <p className="p_2">Kozmetik Gıda Sanayi A.Ş</p>
              </div>
              <br />
            </div>

            <div className="text">
              <div className="centered_div">
                <h3>Biz Kimiz ?</h3>
              </div>
              <p className="p_3">
                İstanbul Beylikdüzünde 5600 m2 alana kurulmuş olan ve yüksek
                teknolojiyle donatılmış kompleksimizde tüm süreçler elektronik
                sistemlerle takip edilmektedir.
                <br />
                <br />
              </p>
              <p className="p_5">
                Aspar İlaç 10 yılı aşkın bir süredir ulusal ve uluslararası
                pazarda doktor ve eczanelerin güven ve beğenisini kazanmıştır.
                Kazanmakla beraber başlayan bu serüven yıllar itibariyle üretim
                ve değişen sağlık sektörüyle beraber kalite teknolojisindeki
                gelişmeleri takip ederek bugünkü modern şekline ulaşmıştır.
                <br />
                <br />
              </p>
              <p className="p_5">
                2021 yılından itibaren İstanbul Beysan Sanayi sitesinde yeni
                tesisimizde ilaç, kozmetik ve gıda takviye alanlarındaki satış
                ve pazarlama organizasyonu Aspar İlaç Kozmetik kurularak yeniden
                oluşturulmuştur. Aspar İlaç Dünya genelinde 10,000’den fazla
                eczaneye genç ve yenilikçi satış kadroları ile hizmet
                sunmaktadır. Güçlü vizyonu, dinamik yapısı ve yenilikçi bakış
                açısı ile Aspar İlaç Türkiye’nin önde gelen firmalarındandır.
              </p>
            </div>
            <div className="text_2">
              <div className="centered_div">
                <h3>Sertifika - Izin Belgelerimiz </h3>
              </div>
              <div className="only_mobile">
                <div className="info_card">
                  <div className="card_container">
                    <div className="image">
                      <img src={sertifikahalal} alt="" />
                    </div>
                    <div className="descrip_text">
                      <h4>Halal Sertifikası</h4>
                      <p></p>
                    </div>
                  </div>
                  <div className="card_container">
                    <div className="image">
                      <img src={sertifika9001} alt="" />
                    </div>
                    <div className="descrip_text">
                      <h4>İSO 9001</h4>
                      <p>Kalite Yönetim Sistemi</p>
                    </div>
                  </div>
                  <div className="card_container">
                    <div className="image">
                      <img src={sertifika22000} alt="" />
                    </div>
                    <div className="descrip_text">
                      <h4>ISO 22000</h4>
                      <p>Gıda Güvenliği Yönetim Sistemi</p>
                    </div>
                  </div>
                  <div className="card_container">
                    <div className="image">
                      <img src={sertifika22716} alt="" />
                    </div>
                    <div className="descrip_text">
                      <h4>İSO 22716</h4>
                      <p>GMP</p>
                    </div>
                  </div>
                  <div className="card_container">
                    <div className="image">
                      <img src={sertifikatr34} alt="" />
                    </div>
                    <div className="descrip_text">
                      <h4>TR34</h4>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text_3">
              <div className="centered_div">
                <h3>Çalıştığımız Ülkeler</h3>
              </div>
              <div className="country_card">
                <div className="text_side">
                  <p>
                    <World />
                    AZERBAYCAN
                  </p>
                  <p>
                    <World />
                    GÜRCİSTAN
                  </p>
                  <p>
                    <World />
                    RUSYA
                  </p>
                  <p>
                    <World />
                    UKRAYNA
                  </p>
                  <p>
                    <World />
                    ÖZBEKİSTAN
                  </p>
                  <p>
                    <World />
                    KAZAKİSTAN
                  </p>
                  <p>
                    <World />
                    ROMANYA
                  </p>
                  <p>
                    <World />
                    POLONYA
                  </p>
                  <p>
                    <World />
                    ÇEKYA
                  </p>
                  <p>
                    <World />
                    MACARİSTAN
                  </p>
                  <p>
                    <World />
                    SIRBİSTAN
                  </p>
                  <p>
                    <World />
                    MONTENEGRO
                  </p>
                  <p>
                    <World />
                    LITVANYA
                  </p>
                </div>
                <div className="image_side">
                  <img src={world2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </ContainerWrapper>
      </Container>
    </>
  );
};

export const World = styled(GiWorld)`
  font-size: 25px;
  color: green;
  margin-right: 8px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* background-color: grey; */
  position: relative;
  @media screen and (max-width: 1000px) {
    overflow: unset;
    height: unset;
  }
`;

export const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }

  .left_side_container {
    /* background-color: red; */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .right_side_container {
    /* background-color: green; */
    padding: 20px;
    height: 88.7%;
    overflow: auto;

    @media screen and (max-width: 1000px) {
      height: unset;
      padding: 10px;
    }

    .brand_name {
      position: relative;
      border: 1px solid none;
      border-radius: 8px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;

      .brand_text {
        padding-left: 10px;
        padding-top: 5px;
      }

      .p_1 {
        font-size: 25px;
        font-weight: 500;
        color: #1c39a1;
      }
      .p_2 {
        font-size: 20px;
        font-weight: 350;
      }
    }

    .text {
      border: 1px solid none;
      border-radius: 8px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;
      padding: 30px;
      margin-top: 25px;

      @media screen and (max-width: 1000px) {
        padding: 10px;
      }

      .centered_div {
        display: flex;
        justify-content: center;
        h3 {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #1c39a1;
          @media screen and (max-width: 1000px) {
            font-size: 28px;
          }
        }
      }

      .p_3 {
        font-size: 18px;
        color: black;
        font-style: italic;
        font-weight: 350;
      }
    }
    .text_2 {
      border: 1px solid none;
      border-radius: 8px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;
      padding: 30px;
      margin-top: 25px;
      @media screen and (max-width: 1000px) {
        padding: 10px;
      }

      .centered_div {
        display: flex;
        justify-content: center;

        h3 {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 20px;
          text-align: center;
          color: #1c39a1;
          @media screen and (max-width: 1000px) {
            font-size: 28px;
          }
        }
      }
      .only_mobile {
        @media screen and (max-width: 1000px) {
          width: 100%;
          overflow: auto;
          /* box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px; */
          /* background-color:red ; */
        }
      }
      .info_card {
        display: grid;
        grid-template-columns: 50% 50%;

        @media screen and (max-width: 1000px) {
          display: flex;
          flex-direction: row;
        }

        @media screen and (min-width: 1350px) {
          display: grid;
          grid-template-columns: 33% 33% 33%;
        }

        .card_container {
          margin: 15px;

          min-width: 200px;
          border: 1px solid none;
          border-radius: 8px;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;
          z-index: 20;
          transition: 0.3s;

          &:hover {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          }

          @media screen and (max-width: 1000px) {
            margin: 15px;
          }

          .image {
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .descrip_text {
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            h4 {
              font-size: 25px;
              font-weight: 400;
            }
            p {
              text-align: center;
            }
          }
        }
      }
    }

    .text_3 {
      border: 1px solid none;
      border-radius: 8px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;
      padding: 30px;
      margin-top: 25px;
      @media screen and (max-width: 1000px) {
        padding: 10px;
      }

      .centered_div {
        display: flex;
        justify-content: center;

        h3 {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 20px;
          text-align: center;
          color: #1c39a1;
          @media screen and (max-width: 1000px) {
            font-size: 28px;
          }
        }
      }

      .country_card {
        display: grid;
        grid-template-columns: 40% 60%;

        @media screen and (max-width: 800px) {
          display: flex;
          flex-direction: column-reverse;
          margin-top: 20px;
          
        }
        .text_side {

          @media screen and (max-width: 800px) {
            display: grid ;
            grid-template-columns: 50% 50% ;
            margin-top: 50px ;
          }

          p {
            display: flex;
            align-items: center;
            margin: 10px;
            font-size: 18px;
            font-weight: 350;
          }
        }

        .image_side {
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
`;
