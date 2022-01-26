import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./pagealertscs";

const Pagealerts = (props) => {
  return (
    <Container>
      <div className={props.alertclassname}>
        <Link to="#" className="al_link">
          <h4>{props.alert_header}</h4>
        </Link>

        <div className="alert_grid_flex">
          {props.short_alert.map((data, key) => {
            return <p>{data.alert_item}</p>;
          })}
        </div>
      </div>
    </Container>
  );
};

export default Pagealerts;
