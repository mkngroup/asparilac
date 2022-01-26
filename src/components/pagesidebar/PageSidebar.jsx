import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TabData } from "../../data/pagestabcontent";
import logo2 from "../../assets/logo2.png";


import {
  Sidebar_logo,
  NewSidebarContainer,
  SidebarWrapper,
} from "./pagesidebarcs";

const PageSidebar = (props) => {
  return (
    <>
      <SidebarWrapper>
        <Sidebar_logo>
          <Link to="/">
            <img src={logo2} alt="aspar ilac" />
          </Link>
          <h4>{props.sidebarheader}</h4>
        </Sidebar_logo>
        <NewSidebarContainer>
          <div className="sidebar_elements">
            <ul className="sidebar_list">
              {props.tabdata.map((data, index) => {
                return <Newsidebar item={data} key={index} />;
              })}
            </ul>
          </div>
        </NewSidebarContainer>
      </SidebarWrapper>
    </>
  );
};

export default PageSidebar;

const Newsidebar = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <li className="sidebar_items">
        <Link
          to={item.to}
          className="sidebar_link"
          onClick={item.submenu && showSubnav}
        >
          <div>
            <p className="p_menu">
              {item.text}
              <span className="tab_icon">{item.tab_icon}</span>
              <div>
                {item.submenu && subnav
                  ? item.iconopened
                  : item.submenu
                  ? item.iconclosed
                  : null}
              </div>
            </p>
          </div>
        </Link>
        <div className="submenu_item">
          {subnav &&
            item.submenu.map((item, index) => {
              return (
                <Link to={item.to} className="sidebar_link">
                  <p className="p_menu_sub">{item.text}</p>
                </Link>
              );
            })}
        </div>
      </li>
    </>
  );
};

{
  /* <div className="sidebar_elements">
          <ul className="sidebar_list">
            {props.getdata.map((data, key)=>{
              return(
                <li className="sidebar_items">
              <Link to={data.to} className="sidebar_link">
                <p className="p_menu">{data.text}</p>
              </Link>
            </li>
              )
            })}
          </ul>
        </div> */
}
{
  /* <SidebarWrapper>
        <SidebarMenu>
          <div>
            <Link to="/">
              <SidebarLogo>
                <img src={logo2} alt="" />
              </SidebarLogo>
            </Link>
          </div>
          <div>
            {TabData.map((data, key) => {
              return (
                <LinkR to={data.to}>
                  <SidebarLi>
                    <SidebarTitle>{data.text}</SidebarTitle>
                  </SidebarLi>
                </LinkR>
              );
            })}
          </div>
        </SidebarMenu>
      </SidebarWrapper> */
}

{
  /* <Link to="#" className="sidebar_link">
                <p className="p_menu">Baslangic</p>
              </Link>

              <Link to="#" className="sidebar_link">
                <p className="p_menu">Fason Uretimi</p>
              </Link>

              <Link to="#" className="sidebar_link">
                <p className="p_menu">Kozmetik & Dermokozmetik</p>
              </Link>

              <Link to="#" className="sidebar_link">
                <p className="p_submenu">Cilt Bakimi</p>
              </Link>
              <Link to="#" className="sidebar_link">
                <p className="p_submenu">Vucut Bakimi</p>
              </Link>
              <Link to="#" className="sidebar_link">
                <p className="p_submenu">Sac Bakimi</p>
              </Link>
              <Link to="#" className="sidebar_link">
                <p className="p_menu">Gida Takviyesi</p>
              </Link>
              <Link to="#" className="sidebar_link">
                <p className="p_submenu">Vitaminler</p>
              </Link>
              <Link to="#" className="sidebar_link">
                <p className="p_submenu">Multivitaminler</p>
              </Link>
              <Link to="#" className="sidebar_link">
                <p className="p_submenu">Bitkisel Urunleri</p>
              </Link>
              <Link to="#" className="sidebar_link">
                <p className="p_menu">Farmasötik</p>
              </Link>
              <Link to="#" className="sidebar_link">
                <p className="p_menu">Teknoloji</p>
              </Link> */
}
