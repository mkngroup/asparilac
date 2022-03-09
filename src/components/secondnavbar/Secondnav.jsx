import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";

import {
  Container,
  NavMenu,
  NavLinks,
  NavItem,
  Wrapper,
  MobileNavItem,
  MobileLinkS,
} from "./secondnavcs";
const Secondnav = () => {
  return (
    <>
      <Wrapper id="secondnav_id">
        <Container>
          <NavMenu>
            {/* <MobileNavItem>
              <MobileLinkS to="gida-kolajen-tip4" smooth={true}>
                <p>Gıda Takviyesi</p>
              </MobileLinkS>
              <p className="nav-line">|</p>
              <MobileLinkS to="uretim-fason" smooth={true}>
                <p>Fason Üretimi</p>
              </MobileLinkS>
              <p className="nav-line">|</p>
              <MobileLinkS to="vitamin-cvitamin" smooth={true}>
                <p>Vitamim</p>
              </MobileLinkS>
              <p className="nav-line">|</p>
              <MobileLinkS to="kozmetik-yuztemizleme" smooth={true}>
                <p>Kozmetik</p>
              </MobileLinkS>
              <p className="nav-line">|</p>
              <MobileLinkS to="laboratuvar-home" smooth={true}>
                <p>Laboratuvar</p>
              </MobileLinkS>
              <p className="nav-line">|</p>
              <MobileLinkS to="makinalar-kapsuldolum" smooth={true}>
                <p>Makine</p>
              </MobileLinkS>
              <p className="nav-line">|</p>
            </MobileNavItem> */}

            <Newmobilenav />

            <NavItem>
              <NavLinks to="vitamin-cvitamin" smooth={true}>
                Gıda Takviyesi{" "}
              </NavLinks>
              <NavLinks to="kozmetik-yuztemizleme" smooth={true}>
                Kozmetik{" "}
              </NavLinks>
              <NavLinks to="kapsul-gidatakviyesi" smooth={true}>
                Kapsul
              </NavLinks>
              <NavLinks to="/">Cinsel - Saglik</NavLinks>
              <NavLinks to="/">Surup</NavLinks>
            </NavItem>
          </NavMenu>
        </Container>
      </Wrapper>
    </>
  );
};

export default Secondnav;

const Newmobilenav = () => {
  return (
    <>
      <NewMobileNav>
        <NewMobileNavLinks to="gida-kolajen-tip4" smooth={true}>
        Gıda Takviyesi
        </NewMobileNavLinks>
        <p className="nav-line">|</p>
        <NewMobileNavLinks to="uretim-fason" smooth={true}>
        Fason Üretimi
        </NewMobileNavLinks>
        <p className="nav-line">|</p>
        <NewMobileNavLinks to="vitamin-cvitamin" smooth={true}>
        Vitamim
        </NewMobileNavLinks>
        <p className="nav-line">|</p>
        <NewMobileNavLinks to="kozmetik-yuztemizleme" smooth={true}>
        Kozmetik
        </NewMobileNavLinks>
        <p className="nav-line">|</p>
        <NewMobileNavLinks to="laboratuvar-home" smooth={true}>
        Laboratuvar
        </NewMobileNavLinks>
        <p className="nav-line">|</p>
        <NewMobileNavLinks to="makinalar-kapsuldolum" smooth={true}>
        Makinalar
        </NewMobileNavLinks>
        <p className="nav-line">|</p>
      </NewMobileNav>
    </>
  );
};

export const NewMobileNav = styled.li`
  display: none;

  .nav-line {
    color: #ffa500;
    margin: 0 10px 0 10px ;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    height: 40px;
    overflow: auto;
    position: relative;
  }
`;

export const NewMobileNavLinks = styled(LinkS)`
 
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  color: #081944;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  text-transform: uppercase;
`;
