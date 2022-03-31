import React from "react";
import { PageContent } from "../../components";
import { SayfaMultiVitaminler, SayfaVitaminler } from "../../data/pagescontents";
import { SidebarHeader, TabData } from "../../data/pagestabcontent";
import {Helmet} from "react-helmet"
const Multivitaminler = () => {
  return (
    <>
    <Helmet>
      <title>Aspar İlaç - Multi Vitaminler</title>
      <meta name="description" content="Aspar İlaç - Ar-Ge Merkezi Formülasyon ve Metot Geliştirme yöntemleriyle analitik geliştirme yeteneği ve altyapısına sahiptir"/>
    </Helmet>
      <PageContent tabdata={TabData} contentDataName={SayfaMultiVitaminler} sidebarheader={SidebarHeader.production}/>
    </>
  );
};

export default Multivitaminler;
