import React from "react";
import { Container, MobileHeaderContainer } from "./pageheaderseccs";

const PageHeaderSec = (props) => {
  return (
    <Container style={{ backgroundColor: props.bckcolor }}>
      <img src={props.headerimg} alt={props.headerimgalt} />
      <h1 style={{ color: props.txtcolor }}>
        {props.headertext}{" "}
        <p style={{ color: props.txtcolor }}>{props.headeralttext}</p>
      </h1>
    </Container>
  );
};

export default PageHeaderSec;

export const MobileHeaderSec = (props) => {
  return (
    <>
      <MobileHeaderContainer>
        <div className="container" style={{ backgroundColor: props.bckcolor }}>
          <div>
            <img
              src={props.headerimg}
              alt={props.headerimgalt}
              className="header_image"
            />
            <div className="overlay_image"></div>
          </div>

          <h1 className="header_text" style={{ color: props.txtcolor }}>
            {props.headertext}{" "}
            <p style={{ color: props.txtcolor }}>{props.headeralttext}</p>
          </h1>
        </div>
      </MobileHeaderContainer>
    </>
  );
};
