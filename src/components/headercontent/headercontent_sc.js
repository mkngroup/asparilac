import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  width: 100%;
  height: auto;
  background-color: #7fcbe5;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }

  .desktop {
    @media screen and (max-width: 501px) {
      display: none;
    }
  }

  .mobile {
    position: relative;
    width: 100%;
    height: 450px;
    
    @media screen and (min-width: 501px) {
      display: none;
    }

    img {
      height: 100%;
      width: 100%;
    }
    .logo_container {
      position: absolute;
      top: 10px;
      display: flex;
      width: 100%;
      justify-content: center;

      img{
        width: 30%;
        height: auto;
      }
    }
    .text_container {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 145px;

      p {
        text-align: center;
        color: white;
      }
    }

    .button_container {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* background-color: grey; */
      position: absolute;
      width: 100%;
      bottom: 35px;

      .button1 {
        background-color: green;
        width: 95%;
        align-items: center;
        text-align: center;
        margin: 5px;
        
        line-height: 2;
        font-size: 17px;
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        background-color: #185adb;
        border: none;
        border-radius: 7px;
        font-size: 15.5px;
        -webkit-box-shadow: 5px 10px 15px -5px rgba(0, 0, 0, 0.46);
        box-shadow: 3px 7px 15px -5px rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

export const MobileImg = styled.div`
  position: absolute;
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
    height: 100%;
  }

  img {
    width: 100%;
  }
`;
export const HeaderText = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 50px 0 50px;

  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 500px) {
    margin: 35px 10px 0 10px;

    p {
      margin: 10px 0 0 0;
      font-size: 15.5px;
      font-weight: 500;

      @media screen and (max-width: 500px) {
        color: white;
      }
    }
  }
`;
export const HeaderImage = styled.div`
  max-height: 100%;
  max-width: 100%;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
export const ImgLogo2 = styled.img`
  width: 250px;
  padding-bottom: 10px;
`;

export const Himg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const BtnContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 35px;
  margin-bottom: 15px;
  /* background-color: grey; */

  @media screen and (max-width: 1048px) {
    margin-top: 15px;
  }
  @media screen and (max-width: 900px) {
    margin-top: 15px;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    margin: 35px 10px 20px 10px;
  }

  .btnnew {
    width: 100%;
    margin: 0 3px;
    height: 35px;
    color: white;
    background-color: #185adb;
    border: none;
    border-radius: 7px;
    font-size: 15.5px;
    -webkit-box-shadow: 5px 10px 15px -5px rgba(0, 0, 0, 0.46);
    box-shadow: 3px 7px 15px -5px rgba(0, 0, 0, 0.5);
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: center;
    text-decoration: none;

    @media screen and (max-width: 500px) {
      margin: 5px 0;
    }
    @media screen and (min-width: 501px) {
      height: 35px;
    }
    @media screen and (min-width: 900px) {
      height: 45px;
    }
  }

  .header_link {
    color: white;
    text-decoration: none;
  }
`;

export const Btn1 = styled.button`
  display: block;
  width: 100%;
  height: 37px;
  margin: 5px 15px;
  background-color: #185adb;
  color: white;
  border-radius: 10px;
  border: none;
  transition: 0.5s ease-in-out;
  font-size: 15.5px;

  -webkit-box-shadow: 5px 10px 15px -5px rgba(0, 0, 0, 0.46);
  box-shadow: 3px 7px 15px -5px rgba(0, 0, 0, 0.5);

  opacity: 1;

  &:hover {
    opacity: 2;
    background-color: #1143a6;
  }
  &:active {
    transition: background-color 0.001s;
    background-color: #185adb;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 10px 0 5px 0;
  }
`;

export const Btn2 = styled.button`
  display: block;
  width: 50%;
  background-color: wheat;
  margin: 5px 15px;
  height: 37px;
  background-color: transparent;
  border-radius: 10px;
  border: 1.55px solid #185adb;
  transition: 0.5s;
  opacity: 1;
  font-size: 15.5px;
  box-shadow: 3px 7px 15px -5px rgba(0, 0, 0, 0.3);

  &:hover {
    opacity: 2;
    border: 1.55px solid #1143a6;
  }
  &:active {
    transition: background-color 0.001s;
    background-color: #185adb;
    color: white;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 10px 0;
  }
`;
