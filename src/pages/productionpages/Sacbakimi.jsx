import React from "react";
import { PageContent } from "../../components";
import { SayfaSacbakim, Yuzbakimiintro } from "../../data/pagescontents";
import { SidebarHeader, TabData } from "../../data/pagestabcontent";
import {Helmet} from "react-helmet"
const Sacbakimi = () => {
  return (
    <>
    <Helmet>
      <title>Aspar İlaç - Saç Bakımı</title>
      <meta name="description" content="Aspar İlaç - Ar-Ge Merkezi Formülasyon ve Metot Geliştirme yöntemleriyle analitik geliştirme yeteneği ve altyapısına sahiptir"/>
    </Helmet>
      <PageContent tabdata={TabData} contentDataName={SayfaSacbakim} sidebarheader={SidebarHeader.production}/>
    </>
  );
};

export default Sacbakimi;
