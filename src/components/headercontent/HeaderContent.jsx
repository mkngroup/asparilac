import React from "react";
import { Link } from "react-router-dom";
import Headerimg from "../../assets/Headerimg.png";
import logo2 from "../../assets/logo2.png";
import galaxy from "../../assets/galaxy.jpg";
import logoicon from "../../assets/logoicon.png";
import asa from "../../assets/asa.jpg";

import {
  Container,
  HeaderText,
  HeaderImage,
  Himg,
  ImgLogo2,
  BtnContainer,
  Btn1,
  Btn2,
  Button1,
  MobileImg,
} from "./headercontent_sc";

const HeaderContent = () => {
  return (
    <Container>
      <div className="mobile">
        <img src={galaxy} alt="" />
        <div className="logo_container">
          <img src={logoicon} alt="" />
        </div>
        <div className="text_container">
          <p>
            10 yılı aşkın tecrübe ve deneyimi ile Aspar İlaç değişen ve gelişen
            ihtiyaçlara cevap verebilmek amacıyla en yüksek teknolojide Ar-Ge
            Merkezi Formülasyon ve Metot Geliştirme yöntemleriyle analitik
            geliştirme yeteneği ve altyapısına sahiptir.
          </p>
        </div>
        <div className="button_container">
          <Link to="/production" className="button1">
            ÜRETIM BÖLÜMÜ KEŞFET
          </Link>
          <Link
            to="/contact"
            className="button1"
            style={{
              backgroundColor: "transparent",
              border: "0.5px solid grey",
            }}
          >
            HEMEN İLETİŞİM KUR
          </Link>
        </div>
      </div>
      <div className="desktop">
        <img src={asa} alt="asparilac" />
        <div className="text_container">
          <h1>ASPAR İLAÇ KOZMETİK GIDA SANAYİ A.Ş</h1>
          <p>
            10 yılı aşkın tecrübe ve deneyimi ile Aspar İlaç değişen ve gelişen
            ihtiyaçlara cevap verebilmek amacıyla en yüksek teknolojide Ar-Ge
            Merkezi Formülasyon ve Metot Geliştirme yöntemleriyle analitik
            geliştirme yeteneği ve altyapısına sahiptir.
          </p>
          <div className="dskbtncontainer">
            <div className="dskbtnwrapper">
              <Link to="/production" className="dskbtn">
                ÜRETİM BÖLÜMÜ
              </Link>
              <Link to="/technology" className="dskbtn" style={{backgroundColor: "transparent", color: "black"}}>
                TEKNOLOJİ BÖLÜMÜ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default HeaderContent;
