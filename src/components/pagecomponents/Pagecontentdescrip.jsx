import React from "react";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import { Container } from "./pagecontentdescripcs";

const Pagecontentdescrip = (props) => {
  return (
    <Container>
      {props.shortcontent.map((data, key) => {
        return (
          <div id={data.contentid}>
            <Link to={data.contentheaderlink} className="con_links">
              <h3>
                <div className="con_icons">
                  <FaLink />
                </div>
                {data.contentheadertext}
                
              </h3>
            </Link>
            <p className="parag">{data.contentdescrip}</p>
          </div>
        );
      })}
    </Container>
  );
};

export default Pagecontentdescrip;
