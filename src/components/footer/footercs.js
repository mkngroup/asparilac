import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";

export const ExternalLink = styled.a`
  text-decoration: none;
  color: white;
`;

export const Wrapper = styled.div`
  display: block;
  position: relative;
  background-color: #081944;
`;

export const FooterLogoside = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;
export const FooterLogo = styled.img`
  width: 200px;
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  width: 100%;
  max-width: 1290px;
  /* align-items: center; */
  margin: 0 auto;
  padding: 50px 15px;
  color: white;

  @media screen and (max-width: 900px) {
    grid-template-columns: 50% 50%;
  }

  @media screen and (max-width: 500px) {
    display: block;
    align-items: center;
    text-align: center;
  }
`;

export const Footer2 = styled.div`
  text-align: center;
  @media screen and (max-width: 900px) {
    margin-bottom: 40px;
  }
`;
export const Footer3 = styled.div`
  text-align: center;
  @media screen and (max-width: 900px) {
    margin-bottom: 40px;
  }
`;
export const Footer4 = styled.div`
  text-align: center;
  @media screen and (max-width: 900px) {
    margin-bottom: 40px;
  }

  .lngChange {
    margin-top: 20px;
    .lngItems {
      list-style: none;

      .item {
        margin-bottom: 5px;
        
        .flags {
          margin-right: 10px;
        }
      }

      .lngLink {
        text-decoration: none;
        color: white;
      }
    }
  }
`;

export const FooterPar = styled.p`
  margin: 8px 0;
`;

export const H3 = styled.h4`
  margin-bottom: 15px;
  text-transform: uppercase;
`;

export const Copyright = styled.p`
  color: grey;
  font-size: 14px;
  padding: 10px 0;
  text-align: center;
`;
