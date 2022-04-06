import React, { Suspense } from "react";
import {
  Navbar,
  HeaderContent,
  Secondnav,
  Footer,
  HomepageCard,
  Pageupicon,
} from "../../components";
import { Main } from "./homepagecs.js";
import { Cartdata } from "../../data/CardDt";
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Aspar İlaç</title>
        <meta
          name="description"
          content="Aspar İlaç - Ar-Ge Merkezi Formülasyon ve Metot Geliştirme yöntemleriyle analitik geliştirme yeteneği ve altyapısına sahiptir"
        />
      </Helmet>
      <Navbar />
      <HeaderContent />
      <Secondnav />
      <Suspense fallback={<h1>Loading content...</h1>}>
        <Main>
          {Cartdata.map((data) => (
            <HomepageCard
              id={data.id}
              cardlogo={data.logo}
              cardgrname={data.groupname}
              cardtitle={data.title}
              cardimage={data.image}
              alttext={data.alttext}
              span_name={data.span_title}
              linktogroup={data.linktogroup}
              linktotitle={data.linktotitle}
              descrip={data.descrip}
            />
          ))}
        </Main>
      </Suspense>
      {/* <Pageupicon/> */}
      <Footer />
    </>
  );
};
export default Homepage;
