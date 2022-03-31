import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

import { FaBars, FaLanguage, FaSearch } from "react-icons/fa";
import { IoLanguageOutline, IoClose } from "react-icons/io5";
import asparlogo from "../../assets/asparlogo.png";
import logo2 from "../../assets/logo2.png";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  Img,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  RightMenu,
  NavSearch,
  NavLanguage,
  SearchInput,
  SearchBtn,
  Sidebar_toggle,
} from "./navbarcs";
import DropdownLng from "../DropdownLng";

const NavBarMain = () => {
  const [Sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!Sidebar);

  const [Lngdrop, setLngDrop] = useState(false);
  const showLngdrop = () => setLngDrop(!Lngdrop);

  return (
    <>
      <Nav className="as_main_nav_container">
        <NavbarContainer>
          <NavLogo to="/">
            <Img src={asparlogo} alt="asparlogo" />
          </NavLogo>
          <MobileIcon>
            <Link className="navbar_hamburger_link" to="#">
              <FaBars onClick={showSidebar} />
            </Link>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <div>
                <NavLinks to="/about">Hakkımızda</NavLinks>
              </div>
              <div>
                <NavLinks to="/production">Üretim</NavLinks>
              </div>
              <div>
                <NavLinks to="/technology">Teknoloji</NavLinks>
              </div>
              <div>
                <NavLinks to="/contact">İletişim</NavLinks>
              </div>
              <div>
                <NavLinks to="/blog">Blog</NavLinks>
              </div>
            </NavItem>
          </NavMenu>
          <RightMenu>
            <NavSearch>
              <SearchInput type="text" placeholder="Ara" />
              <SearchBtn type="submit">
                <FaSearch />
              </SearchBtn>
            </NavSearch>
            <div className="lngLocation"></div>
          </RightMenu>
        </NavbarContainer>
      </Nav>
      <Sidebar_toggle>
        <div className={Sidebar ? "sidebar_active" : "sidebar_none"}>
          <div className="exit_container">
            <Link to="#">
              <IoClose color="white" size="35px" onClick={showSidebar} />
            </Link>
          </div>
          <ul className="menu_container">
            <Link className="menu_links" to="/about" onClick={showSidebar}>
              <li>
                <span></span>Hakkımızda
              </li>
            </Link>
            <Link className="menu_links" to="/production" onClick={showSidebar}>
              <li>
                <span></span>Üretim Bölümü
              </li>
            </Link>
            <Link className="menu_links" to="/technology" onClick={showSidebar}>
              <li>
                <span></span>Teknoloji Bölümü
              </li>
            </Link>
            <Link
              className="menu_links"
              to="/production/fasonuretim"
              onClick={showSidebar}
            >
              <li>
                <span></span>Fason Üretimi
              </li>
            </Link>
            <Link className="menu_links" to="/contact" onClick={showSidebar}>
              <li>
                <span></span>İletişim
              </li>
            </Link>
            <Link className="menu_links" to="/blog" onClick={showSidebar}>
              <li>
                <span></span>Blog
              </li>
            </Link>
            <hr style={{ width: "90%", margin: "20px 0 10px 0" }} />
            <div className="lngMobileSelect">
              <ul className="lngMenu">
                <li className="lngItem">
                  <span>
                    <ReactCountryFlag
                      countryCode="TR"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                      }}
                      svg
                    />
                  </span>
                  <a
                    href="#Weglot-tr"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Türkçe
                  </a>
                </li>
                <li className="lngItem">
                  <span>
                    <ReactCountryFlag
                      countryCode="RU"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                      }}
                      svg
                    />
                  </span>
                  <a
                    href="#Weglot-ru"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Rusça
                  </a>
                </li>
              </ul>
            </div>
            <hr style={{ width: "90%", margin: "20px 0 10px 0" }} />
          </ul>
          <div className="sidebar_logo">
            <Link to="/" onClick={showSidebar}>
              <img className="sidebar_img" src={logo2} alt="logo" />
            </Link>
          </div>
        </div>
      </Sidebar_toggle>
    </>
  );
};

export default NavBarMain;
