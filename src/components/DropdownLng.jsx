import React from "react";
import styled from "styled-components";
import { IoLanguageOutline } from "react-icons/io5";


const DropdownLng = () => {
  return (
    <Wrapper id="language_location">
      {/* <LngIcon/>
      <div className="dropdown">
        <div className="dropdown_container">
          <ul className="items">
            <li className="item">
              <a href="">
                <span className="flags">

                </span>
                Turkce
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </Wrapper>
  );
};

export default DropdownLng;

export const Wrapper = styled.div`
  position: relative;

  :hover {
    .dropdown_container {
      opacity: 1 ;
      
    }
  }

  .dropdown {
    position: relative;

    
  }

  .dropdown_container {
    opacity: 0 ;
    position: absolute;
    width: max-content;
    min-width: 200px;
    height: fit-content;
    /* top: 1px; */
    right: 0;
    background-color: white;
    z-index: 999;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    line-height: 3 ;

    transition: 0.2s ease-in-out ;


    
  }
`;

export const LngIcon = styled(IoLanguageOutline)` 
font-size: 25px ;
color:black ;
text-align: center ;
`
