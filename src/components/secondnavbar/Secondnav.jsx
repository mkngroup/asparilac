import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

import {
  Container,
  NavMenu,
  NavLinks,
  NavItem,
  Wrapper,
  MobileNavItem,
} from "./secondnavcs";
const Secondnav = () => {
  return (
    <>
      <Wrapper id = "secondnav_id">
        <Container>
          <NavMenu>
            <MobileNavItem>

              <LinkS to="gida-kolajen-tip4" smooth={true}>
                <p>Gıda Takviyesi</p>
              </LinkS>
              <p className="nav-line">|</p>
              <LinkS to="uretim-fason" smooth={true}>
                <p>Fason Üretimi</p>
              </LinkS>
              <p className="nav-line">|</p>
              <LinkS to="vitamin-cvitamin" smooth={true}>
                <p>Vitamim</p>
              </LinkS>
              <p className="nav-line">|</p>
              <LinkS to="kozmetik-yuztemizleme" smooth={true}>
                <p>Kozmetik</p>
              </LinkS>
              <p className="nav-line">|</p>
              <LinkS to="laboratuvar-home" smooth={true}>
                <p>Laboratuvar</p>
              </LinkS>
              <p className="nav-line">|</p>
              <LinkS to="makinalar-kapsuldolum" smooth={true}>
                <p>Makine</p>
              </LinkS>
              <p className="nav-line">|</p>

              
            </MobileNavItem>

            <NavItem>
              <NavLinks to="vitamin-cvitamin" smooth={true}>
                Vitamin{" "}
              </NavLinks>
              <NavLinks to="kozmetik-yuztemizleme" smooth={true}>
                Kozmetik{" "}
              </NavLinks>
              <NavLinks to="kapsul-gidatakviyesi" smooth={true}>Kapsul</NavLinks>
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
