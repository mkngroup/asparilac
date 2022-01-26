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

              <LinkS to="vitamin-cvitamin" smooth={true}>
                <p>Vitamin</p>
              </LinkS>

              <p className="nav-line">|</p>

              <LinkS to="kozmetik-yuztemizleme" smooth={true}>
                <p>Kozmetik</p>
              </LinkS>

              <p className="nav-line">|</p>
              <LinkS to="kapsul-gidatakviyesi" smooth={true}>
                <p>Kapsul</p>
              </LinkS>
              <p className="nav-line">|</p>
              <LinkS>
                <p>Cinsel - Saglik</p>
              </LinkS>
              <p className="nav-line">|</p>
              <LinkS>
                <p>Surup</p>
              </LinkS>
              <p className="nav-line">|</p>
              <LinkS>
                <p>Vitamin</p>
              </LinkS>
              <p className="nav-line">|</p>
              <LinkS>
                <p>Vitamin</p>
              </LinkS>
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
