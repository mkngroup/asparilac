import React from "react";
import {
  Navbar,
  HeaderContent,
  Secondnav,
  Footer,
  HomepageCard,
} from "../../components";
import { Main } from "./homepagecs.js";
import { Cartdata } from "../../data/CardDt";

const Homepage = () => {
  

  return (
    <>
      <Navbar />
      <HeaderContent />
      <Secondnav />
      <Main>
        {Cartdata.map((data) => (
          <HomepageCard
            id = {data.id}
            cardlogo={data.logo}
            cardgrname={data.groupname}
            cardtitle={data.title}
            cardimage={data.image}
            span_name = {data.span_title}
          />
        ))}
      </Main>
      <Footer />
    </>
  );
};
export default Homepage;
