import React from 'react'
import {
    Wrapper, FooterContainer,
    FooterLogoside, Footer2, Footer3, Footer4, FooterLogo, FooterPar, H3,
    Copyright
} from './footercs.js'
import logo2 from '../../assets/logo2.png'
import {
    FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter, FaQuestionCircle, FaHandsHelping,
    FaCopyright
} from 'react-icons/fa'
import { GoMail, GoLocation } from 'react-icons/go'
const Footer = () => {
    return (
        <>
            <Wrapper>
                <FooterLogoside>
                    <FooterLogo src={logo2} alt="logo" />
                    <hr style={{ width: '200px', height: '3px', backgroundColor: 'white' }}></hr>
                </FooterLogoside>
                <FooterContainer>
                    <Footer2>
                        <H3 >Bize Ulasin</H3>
                        <FooterPar><FaPhoneAlt style={{ marginRight: '5px' }} />+905314942594</FooterPar>
                        <FooterPar><GoMail style={{ marginRight: '5px' }} />aspar.ilac@gmail.com</FooterPar>
                        <FooterPar><GoLocation style={{ color: 'white', marginRight: '5px' }} />Yol Tarifi Al</FooterPar>
                    </Footer2>
                    <Footer3>
                        <H3>Sosyal Media</H3>
                        <FooterPar><FaFacebookF style={{ marginRight: '5px' }} />Facebook</FooterPar>
                        <FooterPar><FaInstagram style={{ marginRight: '5px' }} />Instagram</FooterPar>
                        <FooterPar><FaTwitter style={{ marginRight: '5px' }} />Twitter</FooterPar>
                    </Footer3>
                    <Footer4>
                        <H3>Yardim</H3>
                        <FooterPar><FaQuestionCircle style={{ marginRight: '5px' }} />Sikca Sorulan Sorular</FooterPar>
                        <FooterPar><FaHandsHelping style={{ marginRight: '5px' }} />Destek Al</FooterPar>
                    </Footer4>
                </FooterContainer>
                <Copyright>Copyright © 2021 ASPAR ILAC GIDA KOZMETIK SANAYI A.S</Copyright>
            </Wrapper>
        </>
    )
}
export default Footer;