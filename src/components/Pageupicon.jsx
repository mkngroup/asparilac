import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import ScrollToTop from "react-scroll-to-top";


const Pageupicon = () => {
  return (
    <>
      <Goup>
        <ScrollToTop
          smooth
          style={{backgroundColor:'transparent', boxShadow: 'none', zIndex: '9999'}}
          component={
            <Upicon/>
          }
        />
      </Goup>
    </>
  );
};

export default Pageupicon;

export const Goup = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  z-index: "9999";
  
`;

export const Upicon = styled(BsFillArrowUpCircleFill)`
  font-size: 35px;
  color: red;
  background-color: none;
  background-color: transparent;
`;
