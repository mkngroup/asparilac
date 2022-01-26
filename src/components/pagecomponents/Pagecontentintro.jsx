import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container } from "./pagecontentintrocs";

const Pagecontentintro = (props) => {
  return (
    <Container>
      {/* intro metni . parag1 = sol span=orta parag1_2= sag
      p2=ikinci yazi */}
      <div>
        <p className="p1">
          {props.parag1}
          <span className="p1_span">{props.parag1_span}</span>
          {props.parag1_2}
        </p>
        <p className="p2">{props.parag2}</p>

        <br className={props.secondparagbr} />
        <br className={props.secondparagbr} />
        <p className={props.parag3_class}>
          {props.parag3} <span className="parag_span">{props.parag3_span}</span>
        </p>
        <p className={props.parag4_class}>
          {props.parag4} <span className="parag_span">{props.parag4_span}</span>
        </p>
        
      </div>

      {/* menuler */}
      <ul className={props.shortmenu_class}>
        <h3>{props.shortmenu_header}</h3>

        {props.shortchil.map((data, key) => {
          return (
            <Link to={data.shortmenulink} className="sm_link">
              <li className="short_menu_links">{data.shortmenuitem}</li>
            </Link>
            // <LinkS to={data.shortmenuscroll} smooth={true}>
            //   <li className="short_menu_links">{data.shortmenuitem}</li>
            // </LinkS>
          );
        })}
      </ul>
      <div>
          <Tesisimiz
            table1_class={props.table1_class}
            table1_headertext={props.table1_headertext}
            table1_items={props.table1_items}
          />
        </div>
    </Container>
  );
};

export default Pagecontentintro;

const Tablecontainer = styled.div`
  .table_show {
    display: block;
  }
  .table_hide {
    display: none;
  }

  width: 100%;
  background-color: #1e7de0;
  margin-top: 50px;
  position: relative;

  .table_header {
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: green; */

    h2 {
      line-height: 3;
      color: white;
    }
  }

  .grid_container {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    padding: 0 50px 50px 50px;

    .grid_items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 200px;
      border: 0.5px solid white;
      color: white;
      text-align: center;
      transition:all 1s ease-in-out;
      cursor: pointer;
      padding: 0 5px 0 5px;
      &:hover{
        span{
          transform: scale(1.3);
        }
      }
      span{
        font-size: 30px;
        margin-bottom: 5px;
        transition: .3s ease-in-out;
      }
      h3{
        
      }
      p{
        margin-top: 5px;
        font-size: 14px;
      }
    }
  }
`;

const Tesisimiz = (props) => {
  return (
    <>
      <Tablecontainer>
        <div className={props.table1_class}>
          <div className="table_header">
            <h2>{props.table1_headertext}</h2>
          </div>
          <div className="grid_container">
            {props.table1_items.map((data, index) => {
              return (
                <>
                <div className="grid_items">
                  <span>{data.icons}</span>
                  <h4>{data.title}</h4>
                  <p>{data.text}</p>
                </div>
                </>
              )
            })}
          </div>
        </div>
      </Tablecontainer>
    </>
  );
};
