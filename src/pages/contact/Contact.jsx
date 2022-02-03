import React from "react";
import { Container, Wrapepr } from "./contactcs";
import content1 from '../../assets/content1.jpg';
;


const Contact = () => {
  return (
      <Container>
          <div className="wrapper">
              <div className="image_container">
                  <img src={content1} alt="" />
              </div>
              <div className="text_container">
                  <h1>bizimle iletisim kurun</h1>
                  <p>telefon</p>
              </div>
          </div>
      </Container>
    
  );
};
export default Contact;
