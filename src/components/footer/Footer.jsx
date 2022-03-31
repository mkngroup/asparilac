import React from "react";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

import {
  Wrapper,
  FooterContainer,
  FooterLogoside,
  Footer2,
  Footer3,
  Footer4,
  FooterLogo,
  FooterPar,
  H3,
  Copyright,
  ExternalLink,
} from "./footercs.js";
import logo2 from "../../assets/logo2.png";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaQuestionCircle,
  FaHandsHelping,
  FaCopyright,
} from "react-icons/fa";
import { GoMail, GoLocation } from "react-icons/go";
const Footer = () => {
  return (
    <>
      <Wrapper>
        <FooterLogoside>
          <FooterLogo src={logo2} alt="logo" />
          <hr
            style={{ width: "200px", height: "3px", backgroundColor: "white" }}
          ></hr>
        </FooterLogoside>
        <FooterContainer>
          <Footer2>
            <H3>Bize Ulasin</H3>
            <FooterPar>
              <FaPhoneAlt style={{ marginRight: "5px" }} />
              +905314942594
            </FooterPar>
            <FooterPar>
              <GoMail style={{ marginRight: "5px" }} />
              <Mailto
                label="aspar.ilac@gmail.com"
                mailto="mailto:aspar.ilac@gmail.com"
              />
            </FooterPar>
            <FooterPar>
              <GoLocation style={{ color: "white", marginRight: "5px" }} />
              <ExternalLink href="https://goo.gl/maps/8ky7gC9chGGCu1Ex9">
                Yol Tarifi Al
              </ExternalLink>
            </FooterPar>
          </Footer2>
          <Footer3>
            <H3>Sosyal Media</H3>
            <FooterPar>
              <FaFacebookF style={{ marginRight: "5px" }} />
              <ExternalLink href="https://www.facebook.com/asparilackozmetik/">
                Facebook
              </ExternalLink>
            </FooterPar>
            <FooterPar>
              <FaInstagram style={{ marginRight: "5px" }} />
              <ExternalLink href="https://www.instagram.com/asparilackozmetiksanayi/">
                Instagram
              </ExternalLink>
            </FooterPar>
            <FooterPar>
              <FaTwitter style={{ marginRight: "5px" }} />
              <ExternalLink href="https://twitter.com/quins_solutions">
                Twitter
              </ExternalLink>
            </FooterPar>
          </Footer3>
          <Footer4>
            <H3>Yardim</H3>
            <FooterPar>
              <FaQuestionCircle style={{ marginRight: "5px" }} />
              Sikca Sorulan Sorular
            </FooterPar>
            <FooterPar>
              <FaHandsHelping style={{ marginRight: "5px" }} />
              Destek Al
            </FooterPar>
            <div className="lngChange">
              <H3>Dil seç</H3>
              <ul className="lngItems">
                <li className="item">
                  <span className="flags">
                    <ReactCountryFlag countryCode="TR" style={{width: "20px", height: "20px"}} svg />
                  </span>
                  <a href="#Weglot-tr" className="lngLink">Türkçe</a>
                </li>
                <li className="item">
                  <span className="flags">
                    <ReactCountryFlag countryCode="RU" style={{width: "20px", height: "20px"}} svg />
                  </span>
                  <a href="#Weglot-ru" className="lngLink">Rusça</a>
                  
                </li>
              </ul>
            </div>
          </Footer4>
        </FooterContainer>
        <Copyright>
          Copyright © 2021 ASPAR İLAÇ GIDA KOZMETIK SANAYI A.Ş
        </Copyright>
      </Wrapper>
    </>
  );
};
export default Footer;

export const Mailto = ({ mailto, label }) => {
  return (
    <>
      <Link
        style={{ color: "white", textDecoration: "none" }}
        to="#"
        onClick={(e) => {
          window.location = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    </>
  );
};
