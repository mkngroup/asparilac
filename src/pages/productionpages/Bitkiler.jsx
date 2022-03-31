import React from "react";
import { PageContent, Pageupicon } from "../../components";
import { SayfaBitkiler, SayfaMineraller } from "../../data/pagescontents";
import { SidebarHeader, TabData } from "../../data/pagestabcontent";
import {Helmet} from "react-helmet"
const Bitkiler = () => {
  return (
    <>
    <Helmet>
      <title>Aspar İlaç - Bitkiler</title>
      <meta name="description" content="Aspar İlaç - Ar-Ge Merkezi Formülasyon ve Metot Geliştirme yöntemleriyle analitik geliştirme yeteneği ve altyapısına sahiptir"/>
    </Helmet>
      <PageContent
        tabdata={TabData}
        contentDataName={SayfaBitkiler}
        sidebarheader={SidebarHeader.production}
      />
    </>
  );
};

export default Bitkiler;
