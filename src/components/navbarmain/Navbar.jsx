import React, { useState } from "react";
import { Link } from "react-router-dom";

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

const NavBarMain = () => {
  
  const [Sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!Sidebar);

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
              <NavLinks to="/about">Hakkimizda</NavLinks>
              <NavLinks to="/production">Uretim</NavLinks>
              <NavLinks to="/technology">Teknoloji</NavLinks>
              <NavLinks to="/contact">Iletisim</NavLinks>
              <NavLinks to="/blog">Blog</NavLinks>
            </NavItem>
          </NavMenu>
          <RightMenu>
            <NavSearch>
              <SearchInput type="text" placeholder="Ara" />
              <SearchBtn type="submit">
                <FaSearch />
              </SearchBtn>
            </NavSearch>
            <NavLanguage to="/">
              <IoLanguageOutline />
            </NavLanguage>
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
                <span></span>Hakkimizda
              </li>
            </Link>
            <Link className="menu_links"  to="/production" onClick={showSidebar}>
              <li>
                <span></span>Uretim
              </li>
            </Link>
            <Link className="menu_links"  to="/technology" onClick={showSidebar}>
              <li>
                <span></span>Teknoloji
              </li>
            </Link>
            <Link className="menu_links"  to="/contact" onClick={showSidebar}>
              <li>
                <span></span>Iletisim
              </li>
            </Link>
            <Link className="menu_links"  to="/blog" onClick={showSidebar}>
              <li>
                <span></span>Blog
              </li>
            </Link>
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
