import React from "react";
import { Link as LinkS } from "react-scroll";
import { Link } from "react-router-dom";
import {HashLink as LinkH} from 'react-router-hash-link';

import {
  CardContainer,
  Wrapper,
  CardWraapper,
  HeaderText,
  CardMain,
  CardNav,
  CardImage,
  CardText,
  HeaderCircleImg,
  HeaderTitle,
  HeaderItem,
  CardNav_container1,
  CardNav_container2,
  CardNavMobile,
  ResponsiveHEaderTitle,
  MobileShowMore,
  Pmobile1,
} from "./homepagecontentcs";

import { AiOutlineArrowRight } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { FaArrowAltCircleUp } from "react-icons/fa";

const HomepageCard = (props) => {
  return (
    <>
      <Wrapper id={props.id}>
        <CardContainer>
          <CardWraapper>
            <HeaderText>
              <LinkH smooth to={props.linktogroup} className="link_class">
                <HeaderCircleImg>
                  <img className="imagecard" src={props.cardlogo} alt="" />
                </HeaderCircleImg>
              </LinkH>

              <ResponsiveHEaderTitle>
                <HeaderTitle>
                  <LinkH smooth to={props.linktogroup} className="link_class">
                    <h4>{props.cardgrname} </h4>
                  </LinkH>
                </HeaderTitle>
                <HeaderItem>
                  <LinkH smooth to={props.linktotitle} className="link_class">
                    <h4>
                      {props.cardtitle}
                      <span>{props.span_name}</span>
                    </h4>
                  </LinkH>
                </HeaderItem>
              </ResponsiveHEaderTitle>

              <MobileShowMore>
                <LinkH smooth to={props.linktogroup} className="link_class">
                  <p>
                    <span className="header_span">Daha Fazla</span>
                    <GoPlus />
                  </p>
                </LinkH>
              </MobileShowMore>
            </HeaderText>

            <CardMain>
              <CardImage>
                <img className="image" src={props.cardimage} alt={props.alttext} />
              </CardImage>

              <CardText>
                <p>{props.descrip}</p>
              </CardText>
            </CardMain>
            <CardNav>
              <CardNavMobile>
                <Link to="/technology/" className="link_class">
                  <p>
                    Teknoloji
                    <span className="cardnav_mobile_spanicon">
                      <AiOutlineArrowRight />
                    </span>
                  </p>
                </Link>
                <Link to="/production/" className="link_class">
                  <p>
                    Üretim
                    <span className="cardnav_mobile_spanicon">
                      <AiOutlineArrowRight />
                    </span>
                  </p>
                </Link>
                <div className="card_go_up_mobile">
                  <LinkS to="secondnav_id" smooth={true} offset={-10}>
                    <FaArrowAltCircleUp />
                  </LinkS>
                </div>
              </CardNavMobile>

              <CardNav_container1>
                <Link to="/technology/" className="link_class">
                  <p>
                    Teknoloji
                    <AiOutlineArrowRight />
                  </p>
                </Link>
                <Link to="/production/" className="link_class">
                  <p>
                    Uretim
                    <AiOutlineArrowRight />
                  </p>
                </Link>
              </CardNav_container1>
              <CardNav_container2>
                <Link to={props.linktogroup} className="link_class">
                  <p>
                    Daha Fazla
                    <GoPlus />
                  </p>
                </Link>
                <div className="card_go_up">
                  <LinkS to="secondnav_id" smooth={true} offset={-20}>
                    <FaArrowAltCircleUp />
                  </LinkS>
                </div>
              </CardNav_container2>
            </CardNav>
          </CardWraapper>
        </CardContainer>
      </Wrapper>
    </>
  );
};

export default HomepageCard;
