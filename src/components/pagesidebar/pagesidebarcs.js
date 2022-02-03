import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaWindowClose } from "react-icons/fa";

export const MobileSidebar = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  /* width: 50px; */
  .Navbar {
    position: fixed;
    width: 30px;
    background-color: #081944;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;

    .mobile_logo_img{
      width: 100px;
      transform: rotate(-90deg);
      position: absolute;
      left: -33px;
      top: 80px;

      @media screen and (max-height: 425px){
        display: none;
      }
    }
  }
  .sidebar_toggle{
    height: 100vh;
    

  }
  .sidebar_active {
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /* background-color: #081944; */
    background-color: white;
    z-index: 15;
    overflow-x: hidden;
    transition: 200ms ease;
  }
  .sidebar_none {
    display: block;
    position: fixed;
    top: 0;
    left: -100%;
    height: 100%;
    /* width: 100%; */
    /* background-color: yellow; */
    z-index: 15;
    overflow-x: hidden;
    transition: 500ms;
  }
  .exit_container {
    width: 35px;
    background-color: #081944;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    .mobile_logo_img{
      width: 100px;
      transform: rotate(-90deg);
      position: absolute;
      left: -33px;
      top: 80px;

      @media screen and (max-height: 425px){
        display: none;
      }
    }
  }
  .menu_container {
    background-color: white;
    margin: 0 auto;
    padding-top: 50px;

    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    width: auto;
    padding: 50px 25px 10px 20px;


    
    .menu {
      list-style: none;
      
      .sidebar_link{
        text-decoration: none;
        color: black;
      }

      .p_menu{
        position: relative;
        font-size: 15px;
        font-weight: 400;
        
        width: 100%;
        
        margin-bottom: 25px;
        padding: 3px;
        
        
        

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        text-align: center;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        transition: 200ms;

        &:hover{
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

        .tab_icon{
          margin-left: 5px;
        }
        
      }

      .p_menu_sub{
        position: relative;
        font-size: 15px;
        font-weight: 400;
        
        width: 100%;
        
        margin-bottom: 25px;
        padding: 3px;
        margin-left: 15px;
        

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        text-align: center;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        transition: 200ms;

        &:hover{
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

        .tab_icon{
          margin-left: 5px;
        }
      }
    }

    
  }

  .faopen {
    color: white;
    font-size: 20px;
    margin: 30px;
  }
  .faclose {
    color: white;
    font-size: 20px;
    margin: 30px;
    
    
  }
`;

export const SidebarWrapper = styled.div`
  position: relative;
  width: 400px;
  background-color: #081944;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Sidebar_logo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  h4 {
    color: white;
    border-bottom: 0.5px solid grey;
    margin-top: 5px;
  }

  img {
    width: 150px;
  }
`;
export const NewSidebarContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #081944;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .sidebar_elements {
    margin-top: 40px;
    padding: 15px;
    width: 300px;

    .sidebar_list {
      list-style: none;
    }

    .sidebar_items {
      .submenu_item {
        background-color: #202f56;
        border-radius: 5px;
      }

      .sidebar_link {
        text-decoration: none;

        .p_menu_sub {
          margin: 15px 0;
          margin-left: 15px;
          cursor: pointer;
          color: white;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          text-align: start;
          letter-spacing: 0.08em;
          line-height: 2.5;
          padding-left: 5px;
          transition: 200ms;

          &:hover {
            border-left: 5px solid blue;
            color: white;
            /* background-color: #CCF4FF; */
            background-color: #3f72af;
          }
          &:active {
            background-color: #005691;
            color: #ffa500;
          }
        }
      }

      .p_menu {
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
        cursor: pointer;
        color: white;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        text-align: start;
        letter-spacing: 0.08em;
        line-height: 2.7;
        padding-left: 5px;
        transition: 200ms ease-in-out;

        &:hover {
          border-left: 5px solid blue;
          color: white;
          background-color: #3f72af;
        }
        &:active {
          background-color: #005691;
          color: #ffa500;
        }

        .tab_icon {
          position: absolute;
          right: 35px;
        }
      }
    }
  }
`;
