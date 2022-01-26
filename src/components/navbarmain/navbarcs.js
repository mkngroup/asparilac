import styled from "styled-components";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

export const Sidebar_toggle = styled.div`
  .sidebar_active {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #081944;
    z-index: 15;
    overflow-x: hidden;
    transition: 200ms ease;

    .exit_container {
      display: flex;
      height: 80px;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      padding: 0 17px;
      font-size: 25px;
      transition: 300ms;
    }

    .menu_container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      align-items: center;
      overflow: auto;
      padding: 40px 0;
      list-style-type: none;
      
      li {
        padding: 15px;
        color: whitesmoke;
        font-size: 20px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-weight: 500;
      }
      .menu_links{
          text-decoration: none;
      }
    }
    .sidebar_logo {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        .sidebar_img{
            width: 180px;
        }
    }
  }
  .sidebar_none {
    display: block;
    position: fixed;
    top: 0;
    left: -10000px;
    height: 100%;
    width: 100%;
    background-color: yellow;
    z-index: 15;
    overflow-x: hidden;
    transition: 500ms;
  }
`;

export const Nav = styled.nav`
  background-color: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.16);

  @media screen and (max-widht: 900px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 80px;
  width: 100%;
  padding: 0 17px;
  max-width: 1290px;
 

  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
  }
`;

export const NavLogo = styled(Link)`
  /* justify-self: flex-start; */
  cursor: pointer;
  align-items: center;
  max-width: 170px;
  box-sizing: border-box;
  display: block;
  margin-top: 3px;
`;
export const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin: auto;
  display: block;
`;

export const MobileIcon = styled.div`
  display: none;
  align-items: center;

  .navbar_hamburger_link{
      text-decoration: none;
  }

  @media screen and (max-width: 900px) {
    display: block;
    position: absolute;
    left: 15px;
    font-size: 25px;
    cursor: pointer;
    z-index: 10;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  height: 80px;
  align-items: center;
  text-align: center;
  list-style: none;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  display: flex;
  align-items: center;
`;
export const NavLinks = styled(Link)`
  /* margin-right: 10px;
    margin-left: 10px; */
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  color: #2c2c2c;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  &:hover {
    color: black;
    border-bottom: 3px solid green;
  }
`;

export const RightMenu = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: center;
  height: 80px;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const NavSearch = styled.form`
  display: flex;
  text-align: center;
  align-items: center;
  position: relative;
`;
export const SearchInput = styled.input`
  height: 28px;
  width: 230px;
  margin-right: 10px;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: #e8eae6;
  color: black;
  /* background-color: grey; */
  font-size: 17px;
  font-style: italic;

  padding: 10px;
  box-sizing: border-box;

  &:hover {
    transition: 0.5s;
    outline-style: solid;
    outline-width: 1px;
    outline-color: darkgray;
  }
`;
export const SearchBtn = styled.button`
  position: absolute;
  font-size: 17px;
  right: 20px;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #2e2e2e;

  &:hover {
    transition: 0.5s;
    color: #0d0d0d;
  }
`;

export const NavLanguage = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  cursor: pointer;
  color: black;
`;
