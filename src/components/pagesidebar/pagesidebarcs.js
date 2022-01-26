import { Link } from "react-router-dom";
import styled from "styled-components";

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
  h4{
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

      .submenu_item{
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

        .tab_icon{
          position: absolute;
          right: 35px;
        }
      }
    }
  }
`;
