import React from "react";
import { Link } from "react-router-dom";
import Headerimg from "../../assets/Headerimg.png";
import logo2 from "../../assets/logo2.png";
import galaxy from "../../assets/galaxy.jpg";
import logoicon from "../../assets/logoicon.png";

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
        <MobileImg>
          <img src={galaxy} alt="asparilac" />
        </MobileImg>
        <HeaderText>
          <ImgLogo2 src={logo2} alt="aspar-ilac.icon" />
          <p>
            10 yılı aşkın tecrübe ve deneyimi ile Aspar İlaç değişen ve gelişen
            ihtiyaçlara cevap verebilmek amacıyla en yüksek teknolojide Ar-Ge
            Merkezi Formülasyon ve Metot Geliştirme yöntemleriyle analitik
            geliştirme yeteneği ve altyapısına sahiptir.
          </p>
          <BtnContainer>
            <Link className="btnnew" to="/production/">
              ÜRETIM BÖLÜMÜ KEŞFET
            </Link>
            <Link
              className="btnnew"
              to="/contact/"
              style={{
                backgroundColor: "transparent",
                border: "0.5px solid grey",
              }}
            >
              HEMEN İLETİŞİM KUR
            </Link>
          </BtnContainer>
        </HeaderText>
        <HeaderImage>
          <Himg src={Headerimg} alt="aspar-ilac.headerimage" />
        </HeaderImage>
      </div>
    </Container>
  );
};
export default HeaderContent;
