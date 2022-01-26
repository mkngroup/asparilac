import React from "react";
import { Link } from "react-router-dom";
import Headerimg from "../../assets/Headerimg.png";
import logo2 from "../../assets/logo2.png";
import {
  Container,
  HeaderText,
  HeaderImage,
  Himg,
  ImgLogo2,
  BtnContainer,
  Btn1,
  Btn2,
} from "./headercontent_sc";

const HeaderContent = () => {
  return (
    <Container>
      <HeaderText>
        <ImgLogo2 src={logo2} alt="aspar-ilac.icon" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          explicabo quod itaque quisquam laborum voluptatibus, deleniti, cumque
          corrupti dolorum in eius quam tempora qui suscipit magni rem ut
          repellendus eligendi.
        </p>
        <BtnContainer>
          {/* <Link to="/production"><Btn1>Uretim</Btn1></Link>
          <Link to="/contact"><Btn2>Iletisim</Btn2></Link> */}
          <Btn1>Uretim</Btn1>
          <Btn2>Iletisim</Btn2>
        </BtnContainer>
      </HeaderText>
      <HeaderImage>
        <Himg src={Headerimg} alt="aspar-ilac.headerimage" />
      </HeaderImage>
    </Container>
  );
};
export default HeaderContent;
