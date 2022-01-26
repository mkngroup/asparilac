import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #f5f5f5; */
  /* box-shadow: 0px -3px 15px -5px rgba(0,0,0,0.81); */
  box-shadow: 0 2px 10px 3px rgba(0, 0, 0, 0.15);

  background-color: white;
`;
export const Container = styled.div`
  height: 40px;
  width: 100%;
  padding: 0 10px;
  max-width: 1290px;
`;
export const NavMenu = styled.ul`
  height: 40px;
  align-items: center;
  list-style: none;
  background-color: white;


`;
export const NavItem = styled.li`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  align-items: center;
  text-align: center;
  position: relative;
  height: 40px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const MobileNavItem = styled.div`
  display: none;

  p {
    margin-right: 15px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
    color: #081944;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    text-transform: uppercase;
  }

  .nav-line{
    color: #ffa500;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    height: 40px;
    overflow: auto;
  }
`;

export const NavLinks = styled(LinkS)`
  line-height: 30px;
  background-color: #ffa500;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  transition: 0.2s;
  /* border: 1px solid #6E85B2; */
  border-radius: 5px;
  margin: 0 5px;
  box-shadow: 3px 2px 8px -5px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 500px) {
    display: none;
  }

  &:hover {
    background-color: #064663;
    border-radius: 5px;
    color: white;
    border: none;
    box-shadow: 3px 7px 15px -5px rgba(0, 0, 0, 0.5);
  }
  &:active {
    background-color: #04293a;
  }
`;
