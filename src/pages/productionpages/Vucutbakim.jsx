import React from "react";
import { PageContent } from "../../components";
import { SayfaVucutbakim, Yuzbakimiintro } from "../../data/pagescontents";
import { SidebarHeader, TabData } from "../../data/pagestabcontent";
import {Helmet} from "react-helmet"
const Vucutbakim = () => {
  return (
    <>
    <Helmet>
      <title>Aspar İlaç - Vücut Bakımı</title>
      <meta name="description" content="Aspar İlaç - Ar-Ge Merkezi Formülasyon ve Metot Geliştirme yöntemleriyle analitik geliştirme yeteneği ve altyapısına sahiptir"/>
    </Helmet>
      <PageContent tabdata={TabData} contentDataName={SayfaVucutbakim} sidebarheader={SidebarHeader.production}/>
    </>
  );
};

export default Vucutbakim;
