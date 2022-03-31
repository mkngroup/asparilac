import React from "react";
import { PageContent } from "../../components";
import { SidebarHeader, TabDataTeknolojı } from "../../data/pagestabcontent";
import { Tekbaslangic } from "../../data/teknolojicontents";
import {Helmet} from "react-helmet"

const Technology = () => {
  return (
    <>
    <Helmet>
      <title>Aspar İlaç - Teknoloji ve İnovasyon Merkezi</title>
      <meta name="description" content="Aspar İlaç - Ar-Ge Merkezi Formülasyon ve Metot Geliştirme yöntemleriyle analitik geliştirme yeteneği ve altyapısına sahiptir"/>
    </Helmet>
      <PageContent
        tabdata={TabDataTeknolojı}
        sidebarheader={SidebarHeader.technology}
        contentDataName={Tekbaslangic}
      />
    </>
  );
};
export default Technology;
