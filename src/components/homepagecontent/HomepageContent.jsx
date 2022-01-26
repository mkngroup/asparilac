import React from "react";
import { Link as LinkS } from "react-scroll";

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
              <HeaderCircleImg>
                <img className="imagecard" src={props.cardlogo} alt="" />
              </HeaderCircleImg>

              <ResponsiveHEaderTitle>
                <HeaderTitle>
                  <h4>{props.cardgrname} </h4>
                </HeaderTitle>
                <HeaderItem>
                  <h4>
                    {props.cardtitle}
                    <span>{props.span_name}</span>
                  </h4>
                </HeaderItem>
              </ResponsiveHEaderTitle>

              <MobileShowMore>
                <p>
                  <span className="header_span">Daha Fazla</span>
                  <GoPlus />
                </p>
              </MobileShowMore>
            </HeaderText>

            <CardMain>
              <CardImage>
                <img className="image" src={props.cardimage} alt="cvitamine" />
              </CardImage>

              <CardText>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  molestias nihil voluptatum eveniet est itaque reiciendis
                  aliquam commodi, aliquid ab et voluptatem id unde quam in
                  repellendus eius delectus doloribus dolor iste incidunt vero
                  facilis. Voluptas assumenda cupiditate ipsa tempore maxime
                  reiciendis. Exercitationem adipisci, labore sed eum id in.
                  Maxime provident blanditiis esse odio aspernatur corrupti fuga
                  natus! Vero corrupti quasi ullam, accusamus excepturi amet
                  molestias nam sed odit quisquam deserunt illum assumenda?
                  Fugit, tempore reprehenderit voluptas doloremque impedit
                  consequatur nam debitis maxime vero sequi ea laudantium dolor
                  molestiae excepturi, natus blanditiis repellat veniam?
                  Doloremque autem facere vel voluptatibus quas vero numquam
                  officiis delectus natus porro, incidunt iure velit possimus
                  molestiae minima asperiores consequuntur alias dignissimos
                  nulla optio accusamus aut? Nulla eligendi fugiat mollitia
                  dicta accusantium repellendus perferendis aliquid, architecto
                  iure itaque velit atque, unde ratione exercitationem
                  asperiores. Officia necessitatibus blanditiis ipsam molestias
                  similique deleniti asperiores! Hic nesciunt dolor est dolorem
                  iste quisquam veniam aut quis suscipit nam architecto
                  excepturi molestias deleniti ipsum ut, praesentium eius
                  tempora facere amet omnis autem quibusdam quae pariatur.
                  Fugit, at? Nam fugit officia voluptas quia ut provident totam
                  architecto, vel laboriosam omnis, perspiciatis blanditiis at
                  temporibus, necessitatibus autem? Consectetur architecto, sit,
                  voluptatem tenetur soluta maiores commodi reiciendis aliquam
                  quo at cumque quas doloribus possimus quibusdam minus
                  voluptate corrupti quasi quam alias vero harum veniam
                  assumenda illo. Quibusdam, dolor ducimus itaque voluptatum,
                  illum similique facere autem provident fugiat ratione neque
                  consequuntur laudantium, obcaecati enim. Molestiae blanditiis
                  possimus, fugit hic laborum et inventore iure voluptatem
                  maxime, vel, recusandae voluptates non aliquam! Itaque dolorem
                  reprehenderit numquam porro officiis architecto! Nisi, magni
                  natus accusantium quisquam, ex esse temporibus nam perferendis
                  earum fugit mollitia possimus non cupiditate illum dolorem
                  exercitationem sint commodi, ut rerum repellat? Laborum
                  quibusdam, fugit asperiores rem provident omnis nam earum
                  culpa vitae voluptatem sit dolorem nesciunt, autem ullam nemo
                  reiciendis inventore repellendus esse corrupti quasi. Labore,
                  nihil provident. Minima similique repellendus atque assumenda
                  quibusdam. Quaerat maxime harum velit optio impedit! Cumque,
                  ratione et repellat expedita aspernatur aperiam quam sint
                  esse, nobis architecto fugit vel consequatur error
                  voluptatibus laudantium ea unde! Voluptates saepe facere
                  aspernatur, provident, eveniet, alias optio nemo nihil
                  architecto voluptatem assumenda? Mollitia ad quam, quasi
                  voluptate fuga ipsam odit voluptates iste repellendus! Quaerat
                  aspernatur eos dolores cumque facere laudantium corrupti quia
                  modi exercitationem culpa suscipit similique pariatur dolorum
                  error qui officiis, molestiae, tenetur non. Obcaecati ab harum
                  repudiandae impedit! Suscipit autem est expedita id veniam
                  sequi inventore dolorum dolorem esse culpa deleniti eaque
                  dignissimos voluptatibus repellendus labore repellat iusto,
                  quaerat aperiam recusandae doloribus dolore aut! Voluptatibus
                  quisquam, ad quae consequuntur esse minus enim ipsa ut nisi
                  consequatur cum, accusantium at culpa quaerat! Eveniet porro
                  beatae quasi, a nemo in et, impedit quo deleniti deserunt
                  soluta sit error quibusdam vitae corporis quaerat cupiditate
                  itaque praesentium qui. Velit libero iusto atque unde quod
                  repudiandae, aliquam error dolore est voluptatibus tempore
                  quia et nemo explicabo eum animi eaque? Voluptas, ipsa
                  voluptate? Cumque, perferendis? Nihil saepe, velit molestiae
                  cumque nemo ad quos dicta iste, perferendis, porro earum!
                </p>
              </CardText>
            </CardMain>
            <CardNav>
              <CardNavMobile>
                <p>
                  Teknoloji
                  <span className="cardnav_mobile_spanicon">
                    <AiOutlineArrowRight />
                  </span>
                </p>
                <p>
                  Uretim
                  <span className="cardnav_mobile_spanicon">
                    <AiOutlineArrowRight />
                  </span>
                </p>
                <div className="card_go_up_mobile">
                  <LinkS to="secondnav_id" smooth={true} offset={-10}>
                    <FaArrowAltCircleUp />
                  </LinkS>
                </div>
              </CardNavMobile>

              <CardNav_container1>
                <p>
                  Teknoloji
                  <AiOutlineArrowRight />
                </p>
                <p>
                  Uretim
                  <AiOutlineArrowRight />
                </p>
              </CardNav_container1>
              <CardNav_container2>
                <p>
                  Daha Fazla
                  <GoPlus />
                </p>
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
